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
import Home from "../home"
import Userpage from "../user"
 function App(){
    return(
        <BrowserRouter>
    <Routes>
<Route path="/" element={<Home/>}/>
    <Route path="/user" element={<Userpage/>}/>
    </Routes>
   </BrowserRouter>
    )
 }
 export default App