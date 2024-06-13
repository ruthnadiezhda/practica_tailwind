//import styles from "./Cart.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import CartCard from "../components/CartCard";
import CartResume from "../components/CartResume";
import { useEffect, useState } from "react";

function Cart() {
//Importación del hook de estado
const [productsOnCart, setProductsOnCart] = useState([]);
//Para actualizar el precio del carrito se importa el hook de estado
const [cartTotal, setCartTotal] = useState(0);
//Variable de precio total
const totalPrice = productsOnCart.reduce((acc, e)=>acc+ e.price*e.units , 0);
//Función calcular el total del carrito
const calculateCartTotal = (products) => {
    const total = products.reduce((acc, product) => acc + product.price * product.units, 0);
    setCartTotal(total);
  };
//Función actualizar el carrito
  const updateCart = (updatedProducts) => {
    setProductsOnCart(updatedProducts);
    calculateCartTotal(updatedProducts);
    localStorage.setItem("cart", JSON.stringify(updatedProducts));
  };
//Importación de hook de efecto para poner productos al card
useEffect(() => {
  if (localStorage.getItem("cart")) {
    const products = JSON.parse(localStorage.getItem("cart"));
    setProductsOnCart(products);
  }
}, []);

return (
    <>
      <NavBar />
      <Hero first="mi" second="carrito" />
      <main className="
      sm:w-full sm:flex sm:justify-center sm:items-center sm:p-[20px]
      ">
        <section className="
        sm:flex sm:flex-col
        ">
        {productsOnCart.map((each) =>(
        <CartCard
          key={each.id}
          id={each.id}
          title={each.title}
          photo={each.images[0]}
          description={each.description}
          price={each.price}
          quantity={each.units}
          color={each.colors[0]}
          updateCart={updateCart}
      />
        ))}
        </section>
        <CartResume
        price ={totalPrice}/>
      </main>
      <Footer />
    </>
  );
}

export default Cart;
