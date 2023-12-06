import React ,{useState} from "react";
import  Hea  from "../src/commponents/hea"
import Main from "./commponents/main";
import "./todcs.css"
function App() {
  const [valaded,toadd]=useState([])
  function edtk(pa){
console.log("edtpaisjjj",pa)
toadd(pa)
  }
const funct=(para)=>{
console.log("para",para)
toadd([...valaded,para])
console.log( "the srray is ",valaded)
}


  return (
    <div>
   <Hea funct={funct} />
 <Main dat={valaded} pa={edtk}/>
 </div>
  )
}

export default App;
