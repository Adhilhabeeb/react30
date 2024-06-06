import React from 'react'
import "./navbar.css"
import Login from '../Login'
import { all } from 'axios'

function Navbar(props) {
  let {loggin,setloggin}=props
  return (
    <div className='navm'> 
    <div className="logo"><img src="netflex-fotor-bg-remover-20240222213142.png" alt="" /></div>
    <div className='logonav'>
<div><select>
  <option value="English">  <i className="fa fa-language" style={{fontSize:"36px"}}></i>
  English<i className="fa fa-angle-down" style={{fontSize:"larger"}}></i></option>
  <option value="हिंदी"><i className="fa fa-language" style={{fontSize:"306px",marginLeft:"20px"}}></i>हिंदी<i className="fa fa-angle-down" style={{fontSize:"larger"}}></i></option>
</select>
<button onClick={(e)=>{
if (e.target.textContent=="signout") {

  alert("are you sure")
  setloggin(false)
  localStorage.removeItem("loggednetf");
}



    
}}>{loggin? "signout":"signin"}</button>
</div>
    </div>
    </div>
  )
}

export default Navbar