 // import "./index.css"; 
// import { Provider } from "react-redux"
// import store from "../store"
// import Apps from "../cart"
// import Appes from "../homes"
// import { BrowserRouter ,Route ,Routes } from "react-router-dom";
// function App(){  
//   return (
//     <>
//      <Provider store={store}>
//     <BrowserRouter>
//     <Routes>
      
//  <Route path="/" element={<Apps/>} />
//         <Route path="/cart" element={<Appes/>} />
     
//     </Routes>
//     </BrowserRouter>
  
   

 
// </Provider>
//     </>
//   )
// }
// export default App

// import Apps from  "../fetch" ;
// function App(){
//   return (
//     <>
//     <Apps/>
//     </>
//   )
// }
// export default App
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import    P from "../params";
 import Apps from "../../like";

 function App() {
  return (
     
<Apps/>
     
//     <BrowserRouter>
//       <Routes>
//           <Route path="/" element={<Apps />} />
//         <Route path="/recipe/:id" element={< P />} />
//       </Routes>
//     </BrowserRouter>
  );
 }

export default App;