import React, { useState } from 'react'
import "./app.css"
import "./login.css"
import Navbar from './navbar/Navbar'

export default function (props) {


const [check, setcheck] = useState(false);

  let {login,setloggin}=props
  if (localStorage.getItem("loggednetf")) {

    setloggin(true)
      
  }
  return (
    // <div>

    // <h1 style={{background:"red"}}>hollooooooo</h1>
    // <button onClick={()=>{
    //   setloggin(true)
    // }} style={{background:"white"}}>signin</button>
    //     </div>
    <>
      <div className="main">
        <div className="makk">
          <div className="card">
            <h1 style={{ marginTop: "10%" }}>sign up</h1>
            
            <input type="text" placeholder='email' className="impo" />
            <input type="text" placeholder='passward' className="impo" />
            <input type="text" placeholder='conformpassword' className="impo" />
            <button  onClick={(e)=>{
let ar=[... e.target.parentElement.children].slice(1,4)
for (let  iterator of ar) {
if (!iterator.value=="") {

setloggin(true)
localStorage.setItem("loggednetf", true);

  
}else{
  iterator.style.cssText="border:3px solid red;"
  iterator.placeholder=`plzz fill ${iterator.placeholder}`

} 


  
}

            }}>submit</button>
            
          </div>
        </div>
      </div>
    </>
  );
}
