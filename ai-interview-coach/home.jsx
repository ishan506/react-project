import {useState} from "react"
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
function Home(){
    const navigate = useNavigate()
const [add , setAdd]= useState("")
const [user , setUser]= useState([])
// function use(){
// setUser([...user,add])
// setAdd("")
// }
function data(){
   
//   if (add.trim() === "") prompt["l"];
    const olduser=JSON.parse(localStorage.getItem("key"))||[]
    olduser.push(add)
    localStorage.setItem("key", JSON.stringify(olduser) )
    setUser(olduser)
    setAdd("")
      navigate("/user");
}
return (
    <>
    <input type="text"  value={add}onChange ={(e)=>setAdd(e.target.value)}/>
    <button  onClick={data} >submit</button>
    
  
     <Link to ="/">Home</Link>
<ul>
   {user.map((users,index)=>{
return <li key={index}>
{users}
</li>
 
    })}
    
    
    </ul>
    </>
)
}
export default Home