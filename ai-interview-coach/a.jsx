import {useState} from "react"
function Apps(){
    const [add,setAdd] =useState("")
    const [user,setUser]=useState([])
    const [change,setChange]=useState(null)
    function value(){
setUser([...user,add])
 setAdd("");
}
function remind(index){
    setAdd(user[index]);
setChange(index);
}
function update(){
   if(change!==null){
    setUser(user.map((users,i)=>{
return i==change ?add:users
}))
setChange(null);
   }
   else{
    setUser([...user,add])
   }


setAdd("");
}


    return (
        <>
        <input value={add} onChange={(e)=>setAdd(e.target.value)}
         onKeyDown={(e)=>{
if(e.key==="Enter"){
    update()
}
}}/>
         <ul>
            {user.map((users,index)=>{
         return   <li key={index}>{users} <button onClick={()=>{remind(index)}}>remove</button></li>
    })}
           
         </ul>
        </>
    )
    




}
export default Apps
