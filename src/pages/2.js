import React from 'react'
import '../css/App.css'
import '../css/video.css'
import '../css/card.css'
import Data from '../assets/data'
import VidNorthA from '../assets/videos/New.mp4';

function One(props) {
    const n = 1;
  return (
    <div className="page">
      <div className='video-container'>
          <video src={VidNorthA} autoPlay loop muted />
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
export default One
