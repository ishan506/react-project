 import {useState} from "react";
 function App(){
    const [add,setAdd]=useState("")
    const [values,setValues]=useState([])
    function handle(){
        if(add==="")return;
        setValues([...values,add])
        setAdd("")
    }
    return (
        <>
        <input type="text" value={add} onChange={(e)=> setAdd(e.target.value)}
         
  onKeyDown={(e)=>{
    if(e.key=== "4"){
        handle();
    }
  }}
  />
        {values.map((user,index)=>{
            return (<h1 key={index} > {user}</h1>
            )
        })}
        </>
       
    )

 }
 export default App;