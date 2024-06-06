import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "../movies/movie.css"
import Movie from '../movies/Movie';
  const  baseurl="https://api.themoviedb.org/3"
  const Apikey="4bd10fd5b47645a2f0f378ef2eca09e8"
  const imgurlpub="https://image.tmdb.org/t/p/w300/"
  const instance = axios.create({
    baseURL: baseurl,
  
  });
  

function Banne() {

const [state, setstate] = useState([]);
useEffect(() => {
   instance.get(`trending/all/week?api_key=${Apikey}&language=en-US`).then(respons=>{
  //  console.log("the getted data ", respons.data.results);
   setstate(respons.data.results)
   })
   
}, []);
function name(params) {
  for (let index = 0; index <20; index++) {
    params
    
  }
}
  return (
   <div className='ppooi'>
      <p className='pmovies'>Movies</p>
    <div className='moviesdiv'>
    
   {state.map(el=>{
    return <Movie movename={el.original_title||el.name } imagebase={imgurlpub} veddaturl={`movie/${el.id}/videos?api_key=4bd10fd5b47645a2f0f378ef2eca09e8&language=en-US`}  movieimg={el.backdrop_path} key={el.id}/>
   })}
   

    </div>
    </div>
  )
}

export default Banne


