
import {render} from "@testing-library/react"
import Header from "./header.test"
test ("logo should load on rendering header", ()=>{
const header = render(<Header/>)
console.log(Header);
})

