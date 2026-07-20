import {useState} from "react"
function Ap(){
    const[open ,setOpen]=useState("")
    const[change,setChange]=useState([])
function add(){
    change([...change ,open])
}
return(
    <>
    <input  type="text" value={open} onChange={(e)=>setAdd(e.target.value)} />
    <ul>
        <li key={index}>
            { }
        </li>
    </ul>
    </>
)
}
export default Ap;