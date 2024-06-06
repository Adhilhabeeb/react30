import React from 'react'
import "./main.css"
import Movie from '../movies/Movie'
import Banne from '../banne/Banne'
function Main() {
  return (<>
    <div className='mainpage'>
<div className="mainchild1">
    <div >
    <h1>Enjoy on your TV</h1> 
    <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
</div></div>
<div className="mainchild2">
<img  className='child imghi'   src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" /> 
<div className='child' >
<video   muted autoPlay  loop  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"></video>
</div>

</div>


    </div>
    

<div className="pagedow">
  <div className="maipad">
    <div>

      <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
  
  <div className="dowmn">
    <div>
<div className="dowdit">
  <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
</div>
<div className="dowdit">
  <p>Stranger Things</p> 
  
  <p>Downloading....</p>
</div>
<div className="dowdit">
  <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="" />
</div>

    </div>
  </div>
  
  
    </div>
  
  
  </div>
  <div className="maipad"><div><p className='pmai1'>Download your shows <br></br> to watch offline</p>
  <p className='pmai2'>Save your favourites easily and always have something to watch.</p></div>
  </div>
</div>


<Banne/>

    </>
  )
}

export default Main

{/* <video className='vediochild'  muted autoPlay  loop  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"></video>
    <img  className='imgtv' width={"100%"} height={"100%"} src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" /> */}

    // 