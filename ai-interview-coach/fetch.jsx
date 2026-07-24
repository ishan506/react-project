 import {useState , useEffect} from "react"
 import {Link } from "react-router-dom"
 function Apps(){
    const [find , setFind]=useState([])
    const [add , setAdd]=useState("")
    useEffect (()=>{
  fetch("https://dummyjson.com/recipes")
    .then((res)=>res.json())
    .then((data)=>{
setFind(data.recipes)
    })
    },[])

    return (
<>
 <div className=" flex justify-center  rounded-2xl  border-stone-950  mt-8  ">
 <input  type="text" value={add} onChange={(e)=>setAdd(e.target.value)}/>
 </div>
        <div className = " m-10 flex flex-wrap justify-center gap-5">
          
        {find.map((item ,index)=>(
           
           <Link key={item.id} to={`/recipe/${item.id}`}>   
            <div className=" shadow-md transition duration-300">


             
<img className=" hover:scale-105 size-30      w-full h-44 object-cover rounded-t-xl"src ={item.image} ></img>
<h1 className=" p-2 m-1 font-bold ">{item.name}</h1>
<h1  className ="font-bold ">{item.rating}</h1>
<p >{item.ingredients.slice(0, 1).join(", ")}</p>
 
</div>
    </Link>
        ))
    }
        </div>
        
        </>
       
    )

 }
 export default Apps