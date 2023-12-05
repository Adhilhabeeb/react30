
import Header from "./components/header"
import './App.css';
import './header.css'
import React,{useState} from 'react';

import { data } from "./data";



function App() {
  const [stae, setstae] = useState([]);
 
 function dlt(par){

 const ind=stae.indexOf(par)
 console.log("lll",ind,par)

setstae(stae.filter((pl)=> pl!=par));
console.log("mm",stae)
 }
  function Rashow(img){
 
  
console.log(img)
setstae([...stae,img])
console.log(stae)
  }
const ssrtar=stae.map(da=>(
  <img src={da} key={da} style={{width:"100px",height:"100px"}}></img>
))
  
let ardata=data.map((dat)=>(

  <Header key={dat.id} datas={dat} funct={Rashow} dlt={dlt} />
))
  return (
    <div>
      
{ardata}


{ssrtar}

    </div>
   
  )
}

export default App


