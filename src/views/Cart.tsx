//import styles from "./Cart.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import CartCard from "../components/CartCard";
import CartResume from "../components/CartResume";

function Cart() {
  return (
    <>
      <NavBar />
      <Hero first="mi" second="carrito" />
      <main className="
      sm:w-full sm:flex sm:justify-center sm:items-center sm:p-[20px]
      ">
        <CartCard
          title="Ipad"
          photo="https://i.postimg.cc/kX8PKZpq/ipad.jpg"
          description="Descripción del producto porque aún no implemento jalar mi cart desde el localStorage"
          price="90"
          quantity="1"
          color="black"
        />
        <CartResume
        price ="800000"/>
      </main>
      <Footer />
    </>
  );
}

export default Cart;
