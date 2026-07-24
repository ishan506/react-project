 import {slice} from "./slice"
 import {useSelector , useDispatch} from "react-redux"
 const Apps=()=>{
 const item = useSelector(store => store.cart.item )
 const dispatch = useDispatch()
const h=()=>{
dispatch (clearItem())
}
return (
    <>
<button onclick={()=>{h}}> del </button>
<h1>
    {item.length}
</h1>
<ul>
    {item.map((user,index)=>{
<li key= {index}> {user} </li>
    })   
}  
</ul>
    </>
)
 }
 export default Apps