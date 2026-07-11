 import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Interview from "./pages/Interview";
 import Features from "./components/features";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
 import Apps from "./pages/label";
import { BrowserRouter } from "react-router-dom";
import Counter from "../counter";
import Toggle from "../toggle.jsx";
function App() {
  return (
    <>
      <Navbar />
  <Counter/>
  <Toggle/>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path="/features" element={<Features />} />
        <Route path="/interview" element={<Interview />} />
         <Route path="/faq" element={<FAQ />} />
             <Route path="/label" element={< Apps />} />
      </Routes>
 
      <Footer />
    </>
  );
}
 




 
export default App;