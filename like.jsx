import{useState, useEffect} from "react"
 
function Apps(){
    const [values , setValues]=useState("");
     const [change , setChange]=useState([]);
     function add(){
        setChange([...change , values]);
        setValues("")
     }
    function handle(index){
        const p=prompt("pp")
setChange(change.map((user,i)=>{
   return  i===index? p :user
}))
    }
 
 function handles(index){
        
setChange (change.filter((user,i)=>
    index!==i
))


    }
    return (
        <>
        <input type="text" value ={values} onChange={(e)=>setValues(e.target.value)}/>
        <button onClick={add}>add</button>


      
        <ul>
            {change.map((user,index)=>{
return <li key={index}>{user}  <button onClick={()=>handles(index)}>remove</button>
        <button onClick={()=>handle(index)}>update</button></li>
            })}
        </ul>
        
      
        </>
    )
}

export default Apps
