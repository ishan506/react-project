import {useState ,useEffect} from "react"
import {useParams} from "react-router-dom"

function P(){
    const {id}=useParams()
    const [menu , setMenu] =useState(null)
useEffect(()=>{
    fetch(`https://dummyjson.com/recipes/${id}`)
.then((res)=>res.json())
.then ((data)=>{
setMenu(data)
})
},[id])

  if (!menu) {
    return <h2>Loading...</h2>;
  }

 
   
  return (
    <div className="p-5">
      <img
        src={menu.image}
        alt={menu.name}
        className="w-80 rounded-lg"
      />

      <h1 className="text-3xl font-bold mt-4">
        {menu.name}
      </h1>

      <p>⭐ {menu.rating}</p>

      <p>{menu.cuisine}</p>

      <p>Prep Time: {menu.prepTimeMinutes} mins</p>

      <h2 className="text-xl font-bold mt-4">
        Ingredients
      </h2>

      {menu.ingredients.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      <h2 className="text-xl font-bold mt-4">
        Instructions
      </h2>

      {menu.instructions.map((step, index) => (
        <p key={index}>{step}</p>
      ))}
    </div>
  );

}
export default  P;
