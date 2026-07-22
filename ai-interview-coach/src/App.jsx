//  import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Interview from "./pages/Interview";
//  import Features from "./components/features";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import FAQ from "./components/FAQ";
//  import Apps from "./pages/label";
// import { BrowserRouter } from "react-router-dom";
// import Counter from "../counter";
// import Toogle from "../toogle";
//  import Toog from "../on";
//  import Parent from"../src/parent";
//  import Paratham from "../Pratham";
// function App() {
//   return (

//     <>
     
       
     
//       <Navbar />
//   {/* <Counter/>
//   <Toogle/>
//   <Toog/> */}
//       <Routes>
//         <Route path ="/" element={<Home    />}  />
//         <Route path="/features" element={<Features />} />
//         <Route path="/interview" element={<Interview />} />
//          <Route path="/faq" element={<FAQ />} />
//              <Route path="/label" element={< Apps />} />
//              <Route path="/p" element ={<Pratham/>}/>
//       </Routes>
 
//       <Footer />
//     </>
//   );
// }
 




 
// export default App;
 
   import {Route,Routes,BrowserRouter} from "react-router-dom"
// import Apps from "../movie"

import { useState } from "react";
import {lazy ,Suspense} from "react"
//  function App(){
//     return(
//       <Apps/>
// //         <BrowserRouter>
// //     <Routes>
// // <Route path="/" element={<Home/>}/>
// //     <Route path="/user" element={<Userpage/>}/>
// //     </Routes>
// //    </BrowserRouter>
//     )
//  }
//  export default App
const Home= lazy(()=>import( "./home"));
 
const Userpage= lazy(()=>import   ("../user"));
import {p}from "./imp"
function App(){
    const [name, setName] = useState("");
  return (
    <>
< p.Provider value={{name,setName}}>
     <BrowserRouter>
     <Suspense fallback={<h2>...page load ...</h2>}>
    <Routes>
  <Route path="/" element={<Home/>}/>
     <Route path="/user" element={<Userpage/>}/>
     </Routes>
     </Suspense>
    </BrowserRouter>
</ p.Provider>
    </>
  )
}
export default App;