 import cartReducer from "./slice"
 import {configureStore} from "@reduxjs/toolkit"
 const store=configureStore({
    reducers :{
    cart :cartReducer,
        
    }
 })
 export default store;