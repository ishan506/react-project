import {useState} from "react"
 function Appes(){
    const [add,setAdd]=useState("");
    const [user,setUser]=useState([]);
     return(
        <>
        <input type="text"    value={add}   
        
        onChange={(e) => setAdd(e.target.value) }/>
        <ul>
        {user.map((users,index)=>(
            
              
<li key={index}>{users}
    <button onClick={()=>{
    remove(index)
  }}>Remove</button>


  <button onClick={()=>{
update(index)
  }}>update</button>
</li>



        ))}
    </ul>
       </>
        )
        }
  export default App;