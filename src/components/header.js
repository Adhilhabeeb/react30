import React ,{Component}from 'react'
import Nnn from '../nnn';
import { useState } from 'react';

function Header(props) {

const [stat,setstat]=useState("add to cart")
const [myArray, updateMyArray] = useState([]);


    function name(params) {


        // let pare= params.target.parentElement
        // let img=pare.querySelector("img").src 
        // ar.push(img)
        // console.log(ar)
      setstat(prev=>prev=="added"?"add to cart" :"added"  )
    
      if (stat=="added") {
        setstat("add to cart" )

         props.dlt(props.datas.logo)
      }else{
        setstat("added" )
        props.funct(props.datas.logo)
      }

    }

  return (
    <div>
        <img style={{width:"160px",height:"70px"
        }} src={props.datas.logo}></img>

        <p >
            {props.datas.nam}
        </p>
        
      <button  onClick={name}>{stat}</button>
    
    </div>
  )
}

export default Header
