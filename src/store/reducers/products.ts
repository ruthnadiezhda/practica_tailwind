//REDUCTOR SE ENCARGA DE ACTUALIZAR LOS ESTADOS GLOBALES O ALMACENAMIENTO GLOBAL DE REDUX
import { createReducer } from "@reduxjs/toolkit";
import productActions from "../actions/products";

//Desestructurar
const { captureText } = productActions;

//Estado inicial
const initialState = {
    //Guardar en text lo que se capture del input tipo texto
    //Por ahora solo 1 estado inicial porque hay 1 reductor
    text: ""
};

//Configuración reducer
const productsReducer = createReducer(
    initialState,
    //Callback constructora que construye los nuevos estados
    (build) => build.addCase(
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
);

export default productsReducer;