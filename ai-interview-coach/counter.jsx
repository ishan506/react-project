 import {useState} from "react";
const Counter = ()=>{
    const [count,setCount]=useState(0);
    function inc (){
        setCount (prev=>prev+1)
    }
    return (
        <>
        <h1>count{count}</h1>
        <button onClick={inc} >o </button>
        </>
    )
 }
 export default Counter;