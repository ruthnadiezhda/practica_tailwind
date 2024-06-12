import styles from "../views/Cart.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";

export default function CartCard({title, photo, description, price, quantity, color}){
return(
    <article className="
    sm:bg-[#f2f2f2] sm:rounded-[5px] sm:p-[30px] sm:m-[10px] sm:h-[220px] sm:break-words sm:flex sm:justify-between sm:w-[680px] sm:items-center
    bg-[#f2f2f2] rounded-[5px] h-full break-words flex justify-around w-full items-center p-[10px]
    ">
        <img
        className="
        sm:w-[100px] sm:h-[120px] sm:rounded-[5px]
        w-1/3 h-1/3 rounded-[5px] flex items-center grow justify-start
        "
        src={photo}
        alt={title}
        />
        <div className="
        sm:flex sm:flex-col sm:justify-between sm:gap-[2px] sm:w-[340px] sm:h-[100px]
        flex flex-col justify-center m-[10px] gap-[3px] w-1/3 h-auto items-start grow
        ">
        <strong className="
        sm:font-bold sm:text-[16px]
        font-bold text-[14px] w-full justif-between
        ">{title}</strong>
        <span className="
        ">{color}</span>
        <p className="
        ">{description}
        </p>
        <input
            className="
            sm:w-[70px] sm:h-[40px] sm:rounded-[10px] sm:border-[1px] sm:border-[#eaeaea] sm:border-solid sm:p-[5px]
            w-full h-auto rounded-[10px] border-[1px] border-[#eaeaea] border-solid
            "
            type="number"
            name="quantity"
            defaultValue={quantity}
            min="1"
            id="P7Q8R90"
        />
        </div>
        <strong className="
        sm:font-bold sm:text-[16px]
        font-bold text-[14px] justify-center items-start
        ">AR$ ${price}</strong>
    </article> 
);
}
