import React from 'react'
import '../css/App.css'
import '../css/video.css'
import '../css/card.css'
import Data from '../assets/data'
import VidSouthK from '../assets/videos/Korean.mp4';


function Two(props) {
    const n = 2;
  return (
    <div className="page">
      <div className='video-container'>
          <video src={VidSouthK} autoPlay loop muted />
         <div className='textOverlay'>
         <h1>{Data[n].Title}</h1>
        </div>
      </div>
      <div className="homeView">
         <h2>{Data[n].SubTitle}</h2> 
         <p>{Data[n].Decription}</p>
      </div>
      
      
    </div>
    

  )
}
export default Two
