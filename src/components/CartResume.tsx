import styles from "../views/Cart.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";

export default function CartResume({price}){
return(
    <div className="
        sm:w-[340px] sm:flex-col
        w-full h-full flex flex-col justify-center items-center p-[20px]
        ">
            <div className="
            sm:grow sm:flex sm:flex-col sm:justify-between
            grow flex flex-col justify-between
            ">
            <h2 className="
            sm:flex sm:justify-between
            flex justify-between grow w-auto
            ">
                <span>Resumen </span>
                <span>del </span>
                <span>pedido</span>
            </h2>
            <div className="
            sm:flex sm:justify-between sm:items-center
            flex justify-center items-center
            ">
                <h3>Total: </h3>
                <strong className="
                sm:text-[16px] sm:font-bold
                text-[14px] font-bold
                ">${price}</strong>
            </div>
            <small className="
            sm:pb-[10px]
            pb-[10px] justify-center items-center
            ">Incluye impuesto PAIS y percepción AFIP.
            </small>
            </div>
            <button className="
            sm:w-full sm:bg-[#ff3b3c] sm:text-white sm:font-bold sm:border-none sm:h-[40px] sm:rounded-[10px]
            w-1/3 bg-[#ff3b3c] text-white font-bold border-none h-[40px] rounded-[10px] 
            " id="buy" type="button">
            COMPRAR
            </button>
        </div>
);
} 