import styles from "./Home.module.css";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import products from "../assets/products";
import Product from "../interfaces/Products";

function Home() {
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
