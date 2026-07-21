  import {useState} from "react"
 function Apps(){
     const [find , setFind]=useState("")

    
 const movies = [
  "Avengers",
  "Batman",
  "Iron Man",
  "Spider-Man",
  "Jawan",
  "Pathaan",
  "KGF",
  "Pushpa",
];
 const fi=movies.filter((user)=>
  user.toLowerCase().includes(find.toLowerCase())

)
function click(){
 setFind(fi);
}

    
    
   
return(
  <>
  
     <input type="text" value={find} onChange={(e)=>{setFind(e.target.value)}} />
     <button onClick={ click}>gs</button>
 
     <ul>
        {movies.map((user,index)=>{
            
    <li key={index}>{user}</li>
   
  
 })}
      
     </ul>
    </>
)
  }
 export default Apps;