import Product from "./Products";

export default interface CartCardProps {
    id:string;
    title:string;
    photo:string;
    description:string;
    price: number;
    quantity: number;
    color: string;
    updateCart: (updatedProducts: Product[])=>void; 
}