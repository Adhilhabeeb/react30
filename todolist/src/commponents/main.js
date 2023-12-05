import { useState } from "react"


export default function Main(props){

const {dat,pa}=props

const [usar, usarset] = useState(dat)
console.log(dat)
function edto(params) {
console.log("k",usar)
console.log(...dat)
let ind=dat.indexOf(params)
    
    let p=prompt("ente rthe element")
   
usarset(dat.splice(ind, 0, "February"))

  console.log("oro")


    
}
function dlto (pp){
console.log("ppppp",pp)
let usfre=dat.filter((el)=>{
   return el!=pp

})

pa(usfre)

}
    return(
        <div className="main">
            <ul>
{dat&& dat.map((datael)=>{  return <div style={{display:"flex"}}><li>{datael}</li> <button onClick={()=>dlto(datael)} >dlt</button><button onClick={()=>edto(datael)} >edt</button> </div> 

})}
            </ul>
        </div>
    )

}