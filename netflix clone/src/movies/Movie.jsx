import React, { useEffect, useState } from 'react'
import  './movie.css'
import axios from 'axios';
import Youtube from 'react-youtube'
const  baseurl="https://api.themoviedb.org/3/"
const Apikey="4bd10fd5b47645a2f0f378ef2eca09e8"
const imgurlpub="https://image.tmdb.org/t/p/w300/"
const instance = axios.create({
  baseURL: baseurl,

});
function Movie(props) {

const [vdshow, setvdshow] = useState(false);
const [movekeydata, setmovekeydata] = useState(false);
  const {movename,veddaturl,movieimg,imagebase}=props
  // console.log("the  props is",props)

 const handover=()=>  setvdshow(!vdshow);;
 const handout=()=>  setvdshow(!vdshow);;
//  setvdshow(!vdshow)
  useEffect(() => {
// console.log("the  vedioo  ",veddaturl)
instance.get(veddaturl).then((response)=>{
  console.log("responec",response.data.results)
  let resu=response.data.results.length
  if (resu>1) {
    try {
      setmovekeydata(response.data.results[1].key)
    } catch (error) {
      console.log("the error is ",error)
    }
    console.log("the   data is  the ",movekeydata)
  }
}).catch()
 
 }, [vdshow]);
 const opts = {
  height: '100%',
  width: '300px',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,zindex:1
  },
};
  return (
    <div  style={{position:"relative"}} className="movie">
        <p >{movename}</p>
      
      <img onMouseOver={handover} onMouseOut={handout} src={`${  imagebase+movieimg}`} />
      {vdshow && <div className='ytvedio'> <Youtube videoId={movekeydata} opts={opts} /></div>
      }
  </div>

  

    
  )
}

export default Movie