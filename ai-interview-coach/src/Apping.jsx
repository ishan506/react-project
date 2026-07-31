import {addItem ,removeItem ,clearItem} from "../slice";
import {useDispatch ,useSelector} from "react-redux";
import {useState , useEffect} from "react";
import {Link} from "react-router-dom";
 
function Apping(){
const [call , setCall]=useState([])
async function calls(){
const res= await fetch("https://dummyjson.com/products")
const data= await  res.json();
setCall(data.products);
}
useEffect(()=>{
calls()
},[])
    const dispatch=useDispatch();
    const item = useSelector((store)=>store.cart.items);
        localStorage.setItem("key", JSON.stringify(item));
        let value = JSON.parse(localStorage.getItem("key"));
    return (
        <>
       
        
          
        
         <button onClick={()=>dispatch( clearItem())}>cleanItem</button>
         <button onClick={()=>dispatch( removeItem())}>remove</button>
        <Link to  ="/about">cart {item.length} </Link>
    
        <ul>
        {item.map((user,index)=>(
<li key={index}>{user.name}{user.price}</li>
        ))}
        </ul>
        <ul>
{call.map((user,index)=>(
    <div key={index}>
 <h1>{user.id}           
 <button onClick={ ()=>dispatch(
            addItem ({
                
            })
        )}>add</button>

 </h1>
         <h1>{user.stock}     <button onClick={ ()=>dispatch(
            addItem ({
                
            })
        )}>add</button> </h1>
         </div>
))}
       
         </ul>
        </>
    )
}
export default Apping