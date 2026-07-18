 import {useState } from "react";
function Toog(){
  const [isOnlin,setIsOnlin]=useState("False");
  
return (
    <>
  <h1>{isOnlin ?   "true":"false"}</h1>
  <button onClick={()=>
setIsOnlin(!isOnlin)
  }>button</button>
  </>
)
}
export default Toog;
 
