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