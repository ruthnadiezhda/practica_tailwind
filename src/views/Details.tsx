import { useParams } from "react-router-dom";
import styles from "./Details.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
//import products from "../assets/products";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Thumbs from "../components/Thumbs";
import Description from "../components/Description";
import Checkout from "../components/Checkout";
import Product from "../interfaces/Products";
import axios from "axios";
import { useEffect, useState } from "react";

function Details() {

  const [product, setProduct] = useState<Product>({
    id: "",
    title: "",
    description: "",
    price: 0,
    quantity: 0,
    images: [],
    colors: [],
});
  const [onsale, setOnSale] = useState<Product[]>([]);
  const {id} = useParams();
  useEffect(() => {
    axios("/products.json")
      .then((res) => {
          const products: Array<Product> = res.data;
          const detailProduct: Product | undefined = products.find(
            (each) => each.id === id
          );
          if (detailProduct) {
            setProduct(detailProduct);
          }
          const filterProducts: Array<Product> = products.filter(
            (each) => each.onsale
          );
          if (filterProducts.length > 0){
            setOnSale(filterProducts);
          }
      })
      .catch((err) => console.log(err));
}, [id]);
  //const product:Product = products.find((each) => each.id === id);
  //const onsale:Product[] = products.filter((each) => each.onsale);

  return (
    <>
      <NavBar />
      {!product && <Hero first="NOT" second="found" />}
      <main className="
      sm:w-full sm:flex sm:justify-center sm:items-center sm:p-[20px]
      w-full flex justify-center items-center p-[15px]
      ">
        <div className="
        sm:w-full sm:flex sm:flex-wrap sm:justify-between 
        w-full flex flex-col justify-center items-center
        ">
          {product && (
            <div id="details" className="
            sm:flex sm:justify-center sm:flex-wrap
            flex flex-wrap justify-center items-center
            ">
              <Thumbs product={product} />
              <Description product={product} />
              <Checkout product={product} />
            </div>
          )}
          <div className="
          sm:w-full sm:flex sm:flex-col sm:justify-center sm:my-[20px] sm:mx-0 
          w-full flex flex-wrap justify-center items-center
          ">
            <h2 className="
            sm:text-center sm:text-[40px]
            text-center text-[40px] 
            ">Week Sale</h2>
            <div id="product-container" className="
            sm:w-[1080px] sm:flex sm:flex-wrap sm:justify-between
            flex flex-wrap justify-center w-full
            ">
              {onsale.map((each:Product) => (
                <ProductCard
                  key={each.id}
                  id={each.id}
                  title={each.title}
                  price={each.price}
                  colors={each.colors}
                  images={each.images}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Details;
