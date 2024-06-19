import styles from "./Home.module.css";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
//import products from "../assets/products";
import Product from "../interfaces/Products";
import axios from "axios";
import { useEffect, useState } from "react";
//Hook para seleccionar estados de almacenamiento global
import { UseSelector, useSelector } from "react-redux";

function Home() {
  
  const [products, setProducts] = useState<Product[]>([]);
  //Devuelva el estado de products
  const text = useSelector (store => store.products.text);
  console.log(text);
  //El text cada vez que el usuario ejecute una tecla debe correr el efecto
  useEffect(() => {
    axios
      .get("/products.json")
      .then((res) => {
          const filterData = res.data.filter(each => each.title.toLowerCase().includes(text.toLowerCase()));
          setProducts(filterData);
      })
      .catch((err) => console.log(err));
  },[text]);
  return (
    <>
      <NavBar />
      <Hero first="tecnologia" second="renovada" />
      <div className="w-full h-[50px] bg-purple-800 text-white text-center pt-3"> CAJA DE PRUEBA</div>
      <main>
        <div className="
        sm:w-full sm:flex sm:flex-wrap sm:justify-between sm:grow
        w-full flex flex-wrap justify-center
        " id="products">
          {products.map((each:Product) => (
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
      </main>
      <Footer />
    </>
  );
}

export default Home;
