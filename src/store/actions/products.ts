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

//Acciones exportadas
export default { captureText } 
export { calculateTotal };