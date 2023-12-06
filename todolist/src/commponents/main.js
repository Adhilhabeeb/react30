import { useState } from "react";

export default function Main(props) {
  const { dat, pa } = props;

  const [usar, usarset] = useState(null);
  

  const  edto=(params)=> {
    let ind = dat.indexOf(params);
let p=prompt("enter the value")
   
    dat.splice(ind, 1, p);
   console.log(...dat)
   usarset([...dat])
   console.log(usar,"is the new arr")
  }
  function dlto(pp) {
    console.log("ppppp", pp);
    let usfre = dat.filter((el) => {
      return el != pp;
    });

    pa(usfre);
  }
  return (
    <div className="main">
      <ul>
        {
          dat.map((datael) => {
            return (
              <div style={{ display: "flex" }}>
                <li>{datael}</li>{" "}
                <button onClick={() => dlto(datael)}>dlt</button>
                <button onClick={() => edto(datael)}>edt</button>{" "}
              </div>
            );
          })}
      </ul>
    </div>
  );
}
