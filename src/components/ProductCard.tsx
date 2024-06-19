import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import ProductCardProps from "../interfaces/ProductCard";
import { UseSelector, useSelector } from "react-redux";

export default function ProductCard(props: ProductCardProps) {
  const { id, title, price, colors, images } = props;
  //Selector de almacenamiento entero de products -> no recomendable usar el store completo
  const store = useSelector( store => store);
  console.log(store);
  return (
    <Link className={styles["product-card"]} to={"/details/" + id}>
      <img className={styles["product-img"]} src={images[0]} alt={title} />
      <div className={styles["product-info"]}>
        <span className={styles["product-title"]}>{title}</span>
        <span className={styles["product-description"]}>{colors[0]}</span>
        <div className={styles["product-price-block"]}>
          <span className={styles["product-price"]}>{price}</span>
          <span className={styles["product-discount"]}>50% Off</span>
        </div>
        <div className={styles["product-tax-policy"]}>
          Includes Country tax and AFIP collection
        </div>
      </div>
    </Link>
  );
}
