import React ,{useState}from "react";

 export default function Hea(props){
    const { funct}=props

  const [val,setval]=useState("")

const addimpva= ()=>{
   funct(val)
}
    return(
        <div>
        <header>
            <input type="text"  onChange={(e)=>setval(e.target.value)}></input>
            {console.log("val is ",val)}
            <button onClick={addimpva} >add</button>
        </header>
        </div>
    )
}
