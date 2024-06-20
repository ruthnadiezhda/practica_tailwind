//REDUCTOR SE ENCARGA DE ACTUALIZAR LOS ESTADOS GLOBALES O ALMACENAMIENTO GLOBAL DE REDUX
import { createReducer } from "@reduxjs/toolkit";
import productActions, { calculateTotal } from "../actions/products";

//Desestructurar
const { captureText } = productActions;

//Estado inicial
const initialState = {
    //Guardar en text lo que se capture del input tipo texto
    //Por ahora solo 1 estado inicial porque hay 1 reductor
    text: "",
    total: 0
};

//Configuración reducer
const productsReducer = createReducer(
    initialState,
    //Callback constructora que construye los nuevos estados
    (build) => build
    //Callback para casos de reducción de filtrado de texto
    .addCase(
        //Primer argumento es la acción
        captureText,
        //Segundo argumento es el callback que "reduce (modifica)" los estados globales
        (state,acction) => {
            const newState = {
                ...state,
                text: acction.payload.text
            }
            return newState
        }
    )
    //Callback para crear casos de reducción de calculo del total
    .addCase(
        //Primer argumento es la acción
        calculateTotal,
        //Segundo argumnto es el callback que "reduce/modifica" el estado global
        (state, action) => {
            //Variable que guarda los productos enviados en el payload
            const products = action.payload.products
            //Array de productos en array de subtotales, multiplicando el precio por las cantidades
            const subtotals = products.map((each) => each.price*each.units);
            //Sumar todos los subtotales para obtener el total
            const total = subtotals.reduce((acc: number, val: number) => acc + val);
            //Actualización del estado
            const newState = {
                ...state,
                total
            };
            return newState;
        }    
    )
);

export default productsReducer;