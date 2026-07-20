 import {useState} from "react"
 function App(){
    const [add,setAdd]=useState("");
    const [user,setUser]=useState([]);
    //Use .slice() to choose which items to show.Use 
    // .map() to choose how to display them
    function main(){

       if(add.trim()==="")return;
 setUser([...user,add]);
 setAdd("")
    }
 function remove(index){
setUser(user.filter((users,i)=>
i!=index
))
 }
  function update(index){
    const name = prompt("Enter your name");
    if( name===null)return 
    if(name==="") remove(index)
        return
    setUser(user.map((users,i)=>{
if(i===index){
    return name;
}
return users ;
    }))
  }
 
 
        
    return(
        <>
        <input type="text"    value={add}   onChange={(e) => setAdd(e.target.value) }
        onKeyDown={(e)=>{
            if(e.key==="Enter"){
                main();
            }
        }}
          />
         
 
  
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