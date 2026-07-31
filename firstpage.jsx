import {useState,useEffect} from "react"
import {Link} from "react-router-dom"
 function h(){
    const [visible , setVisible]=useState(NULL)
    useEffect(()=>{
      fetch("https://dummyjson.com/recipes")  
      .then((res)=>res.JSON)
      .then ((data)=>{
        setVisible(data)
      })
    },[])
    return (
        <>
        <Link  key="item.id" to ={'/recipes$/{id}'}>GO</Link>
 <ul>
   {data.map((user,index)=>{
 return <li key={index}>{user}
     </li>
   })}
   
    
 </ul>
        </>
    )
 }