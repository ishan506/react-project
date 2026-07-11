import {useState,useEffect} from "react"
function Toogle(){
const [value ,setValue]=useState(true)
useEffect (()=>{
const handleoff = ()=>{
    setValue("false")
}
const handleon = ()=>{
    setValue("true")
}
window.addEventListener("false",handleoff)
window.addEventListener("true",handleon)
return ()=>{
window.removeEventListener("false",handleoff)
window.removeEventListener("true",handleon)
}
},[])
  return (
    <h1>{value ? "🟢 Online" : "🔴 Offline"}</h1>
  );

}
export default Toggle;