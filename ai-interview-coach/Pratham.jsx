// import {useState} from "react";
// import {Link} from "react-router-dom";
// function Pratham(){
//     const[onClick ,setOnClick]=useState();
//     return (
//         <>
//         <div>
//         <input type="text"></input>
//         </div>
// <input type="number"></input>
     
 
//         <div>
//          <Link  to="/">submit</Link>
        
//         <Link to ="/">HOME</Link>
//      </div>
        
//         </>
//     )
// }
// export default Pratham;
// import { useState } from 'react';

// function Pratham() {
//   const [inputValue, setInputValue] = useState('');

//   const handleChange = (e) => {
//     setInputValue(e.target.value);  
//   };

//   return (
//     <div>
//       <input 
//         type="text" 
//         value={inputValue} 
//         onChange={handleChange} 
//       />
//       
//        
//     
//   );
// }

// export default Pratham;
import {useState} from "react";
function Pratham(){

 const [email,setEmail]   =useState("")

  const [name,setName]   =useState("")

// const [on , setOn]=useState("");
const values=(e,type)=>{
  
    
    console.log(e,type)
type === "name" ? setName(e.target.value) : setEmail(e.target.value);


}
return(
    <>
    <input  type ="text" value={name} onChange={(e)=>{values(e,"name")}}></input>
     <input  type ="text" value={email} onChange={(e)=>{values(e,"email")}}></input>
      <button onClick={values}>bb</button> 
    </>
    
)
}
export default Pratham;