import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/products";

const store = configureStore({
    reducer: {
        //Todos los reductores de todos los elementos que necesite
        //Users
        products: productsReducer
        //Etc, etc
    },
});

export default store;