 import {createSlice} from "@reduxjs/toolkit"
 const cartSlice=createSlice({

    name :"cart",
    initialState :{
        items :["lk" , "kl"]
    },
 
     reducers :{
    addItem :(state,action)=>{
    state.items.push(action.payload)
},
    removeItem : (state,action)=>{
         state.items.pop()
    },
    cleanItem :(state,action)=>{
 state.items =[]
    }
   
 }
    })
     export const {addItem ,removeItem , cleanItem}  = cartSlice. actions
    export default cartSlice.reducer 