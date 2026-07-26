import {useState,useEffect} from "react"
function Kp(){
    const [visible ,setVisible] =useState(navigator.onLine)
         const handleOnline=()=>setVisible(true);
          const handleOffline=()=>setVisible(false);
 useEffect(()=>{
          window.addEventListener(  "online",handleOnline)
window.addEventListener(  "offline",handleOffline)
  
    return  ()=>{
    window.removeEventListener(  "online",handleOnline)

    window.removeEventListener(  "offline",handleOffline)
} },[])
    return (
    <>
    <h1>{visible? "online" :"offline"}</h1>
    </>
)
}
export default Kp