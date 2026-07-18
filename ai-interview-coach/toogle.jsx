 import {useState , useEffect} from "react";
function Toogle(){
  const [isOnline ,setIsOnline]=useState(true);
  useEffect(()=>{
     const handleonline=()=>{
      setIsOnline(true);
     }
     const handleoffline=()=>{
      setIsOnline(false);
     }
    window.addEventListener("online",handleonline);
        window.addEventListener("offline",handleoffline);
        return ()=>{
              window.removeEventListener("online",handleonline);
        window.removeEventListener("offline",handleoffline);
        }
},[])
return (
  <h1>{isOnline ?   "red":"green"}</h1>
)
}
export default Toogle;
 
