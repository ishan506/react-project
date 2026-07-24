import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name : 'cart' ,
    initialState : {
        items :[ ],
    },
    reducers :{
addItem :(state , action)=>{
state.items.push(action.payload)
//return wrong take a state and modify
},
removeItem :(state,action)=>{
state.items.pop()
}
,
clearItem:(state)=>{
state.items=[]
}
    }
})
//actions with name destruction 
export const {addItem,removeItem ,clearItem} = cartSlice.actions
export default cartSlice.reducer