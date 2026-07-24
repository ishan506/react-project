import {clearItem} from "./slice"
import { useDispatch,useSelector } from "react-redux";
const Appes = ()=>{
    const cartItem= useSelector(store=>store.cart.items)
   const dispatch = useDispatch();
    const handleClearCart=()=>{
        dispatch(clearItem())
    }
    return (
        <>
        <button onClick={()=>handleClearCart()}>Clear</button>
        <h1> {cartItem.length}</h1>
        
            {cartItem.map((item, index) => (
  <li key={index}>{item}</li>
))}
           
        
        </>
    )
}
export default Appes