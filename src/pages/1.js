import React from 'react'
import '../css/App.css'
import '../css/video.css'
import '../css/card.css'
import Data from '../assets/data'
import VidEurope from '../assets/videos/North.mp4';



function Zero(props) {
    const n = 0;
  return (
    <div className="page">
      <div className='video-container'>
          <video src={VidEurope} autoPlay loop muted />
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
export default Zero
