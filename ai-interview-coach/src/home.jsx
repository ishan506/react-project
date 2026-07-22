import {useState} from "react"
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import  {p} from "./imp"
import {useContext} from "react"
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
  const {name,setName} = useContext(p);
return (
    <>
     <h1>{name}</h1>
    <input type="text"  value={name}onChange ={(e)=>setName(e.target.value)}/>
    <button  onClick={data} >submit</button>
    
 
     <Link to ="/">Home</Link>
<ul>
   {user.map((users,index)=>{
return <li key={index}>
{users} {name}
</li>
 
    })}
    
    <h1>{name}</h1>
    </ul>
    </>
)
}
export default Home