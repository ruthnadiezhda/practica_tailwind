//ACCIÓN ES EL INTERMEDIARIO DE ACCIÓN DE CARGA DE DATOS AL REDUCTOR
//Acciones que tengan que ver con productos
import { createAction } from "@reduxjs/toolkit";

//Accion capturar texto
const captureText = createAction(
    "captureText",
    //Creación callback intermediaria, objeto que recibe y el reductor que revisa estados globales
    //Envia objeto una carga, con los datos, y el reductor se encarga de actualizar los estados
    (obj) => {
        return {
            payload: { text: obj.text}
        }
    }
);

//Acción para calcular el total
const calculateTotal = createAction(
    "calculateTotal",
    (obj) => {
        return {
            payload: {products: obj.products}
        }
    }
);

//Acción para agregar un producto al carrito
const addToCart = createAction(
    "addToCart",
    (obj) => {
        return {
            payload: {products: obj.products}
        }
    }
);

//Acción para eliminar un producto del carrito
const removeFromCart = createAction(
    "removeFromCart",
    (obj) => {
        return {
            payload: {id: obj.id}
        }
    }
)

//Acciones exportadas
export default { captureText } 
export { calculateTotal, removeFromCart, addToCart };