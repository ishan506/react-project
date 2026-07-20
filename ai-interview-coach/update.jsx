import {useState} from "react"
function Apps(){
    const [button , setButton]=useState("");
     const [change , setChange]=useState([]);
function i(index){
     const newvalue=prompt("enter")
     setChange(change.map((user,i)=>{
       
       return i===index?  newvalue :user;
     }))
}
    return (
        <>
<input type="text" value={button} onChange={(e=>setButton(e.target.value))}></input>
<ul>
   
         {change.map((user,i)=>{
            
             <li key={i}  > {user }
        <button onClick={()=>{i(index)}}>kk</button>
        </li>
})}
</ul>
        </>
    )
    
}
export default Apps;