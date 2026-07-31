import {useState} from "react"
function Apps(){
const [value , setValue]=useState(false)
 
useState(true)
return (
    <>
     <button onClick = {()=>setValue(!value)}>add</button> 
     {value?
     <h1 className =" bg-red-600 ">on</h1>
   : <h1 className ="bg-amber-950">off</h1>}
    </>
)
}
export default Apps
