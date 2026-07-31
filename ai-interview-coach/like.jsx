import {useState,useEffect} from "react"
function Apps(){
    const [status , setStatus]=useState(navigator.onLine)
    const handleon=()=>setStatus(true)
         const handleoff=()=>setStatus(false)
    useEffect(()=>{
window.addEventListener("online" ,handleon)
window.addEventListener("offline" ,handleoff)
return ()=>{
window.removeEventListener("online" ,handleon)
window.removeEventListener("offline" ,handleoff)
}
    },[])
return (
    <>
    <h1>{status ? "online" : "offline"}</h1>
    </>
)
}
export default Apps

