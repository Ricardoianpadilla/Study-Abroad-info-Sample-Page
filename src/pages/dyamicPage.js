import React from 'react'
import '../css/App.css'
import '../css/video.css'
import '../css/card.css'
import Data from '../assets/data'

function dyamicPage(props) {
    const n = props.n;
  return (
    <div className="page">
      <div className='video-container'>
          <video src={Data[n].vid} autoPlay loop muted />
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
export default dyamicPage
