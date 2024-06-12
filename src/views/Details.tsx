import { useParams } from "react-router-dom";
import styles from "./Details.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import products from "../assets/products";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Thumbs from "../components/Thumbs";
import Description from "../components/Description";
import Checkout from "../components/Checkout";

function Details() {
  const { id } = useParams();
  const product = products.find((each) => each.id === id);
  const onsale = products.filter((each) => each.onsale);
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
          sm:w-full sm:flex sm:flex-wrap sm:justify-center sm:my-[20px] sm:mx-0 
          w-full flex flex-wrap justify-center items-center
          ">
            <h2 className="
            sm:text-center sm:text-[40px]
            ">Week Sale</h2>
            <div id="product-container" className="
            sm:w-[1080px] sm:flex sm:flex-wrap sm:justify-between
            flex flex-wrap justify-center
            ">
              {onsale.map((each) => (
                <ProductCard
                  key={each.id}
                  id={each.id}
                  title={each.title}
                  price={each.price}
                  color={each.colors[0]}
                  image={each.images[0]}
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
