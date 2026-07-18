import {useState} from "react";
 import Parent  from "../parent";
function Apps(){
const [value ,setValue]=useState("")

    return (
        <label>pratham
            <select>
            <option>
                 <h1 style={{ color: "red" }}>{props.name}</h1>
    <h2>{props.class}</h2>
            </option>
            </select>
        </label>
        
    )
}
export default Apps;