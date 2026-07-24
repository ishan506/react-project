import { useSelector } from "react-redux";
import {addItem} from "./slice"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function Apps(){
    const cartItems=useSelector(store=>store.cart.items)
    const dispatch = useDispatch()
    const handleAddItem=()=>{
        dispatch(addItem("graphs") )
    }
const choose =(item)=>{
     console.log(item);
 dispatch(addItem(item))
}
     
    const bk =[
        "kl",
        "vk" ,
        "md"
    ]

   
    return (
<>
<Link to= "/cart">GO TO</Link>

<li>{cartItems.length}</li>
 <button className="p-2 outline-solid bg-red-500   text-amber-50" onClick={()=>handleAddItem()}>Add</button>
  <ul>
    {bk.map((user,index)=>(
<li key={index}>{user} <button className ="outline-solid  bg-blue-500 text-white px-4 py-2 rounded mb-4 " 
onClick={()=>choose(user)}>go</button></li>
    ))}
  </ul>
 
</>
    )
}
export default Apps