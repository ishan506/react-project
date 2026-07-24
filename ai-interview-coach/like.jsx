import {useState,useEffect} from "react"
function Apps(){
    const [status , setStatus] =useState(navigator.onLine)
    const handleOnline =()=>setStatus(true)
     const handleOffline = ()=>setStatus(false)
     useEffect(()=>{
    window.addEventListener("online" ,handleOnline)
     window.addEventListener("offline" ,handleOffline)
     return ()=>{
         window.removeEventListener("online" ,handleOnline)
     window.removeEventListener("offline" ,handleOffline)
     } },[])
     return (
<h1>{status ?"Online" :"OFFLINE"}</h1>
     )
}
export default Apps