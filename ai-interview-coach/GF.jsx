 import {useState,useEffect} from "react"
 function Apps(){
  const [update , setUpdate]=useState("")
  const [ value , setValue]=useState([])
  const gif=[
   "dd",
   "ss",
   "pp"
  ]
  
    const fi=gif.filter((user)=>
    user.toLowerCase().includes(update.toLowerCase())
  )
   

  return (
    <>
    <input type ="text" value={update} onChange={(e)=>{setUpdate(e.target.value) ;setValue([])} }/>
{/*     
     <button onClick={find}>dsxx</button> */}
    <ul>
       {(update !== "" ? fi :gif).map((user,index)=>{
 return <li key={index}>{ user }</li>
      })}
     
    </ul> 
   
    </>
  ) }
  export default Apps