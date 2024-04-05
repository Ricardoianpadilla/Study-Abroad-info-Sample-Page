import React from 'react'
import '../css/App.css'
import '../css/video.css'
import homeVid from '../assets/videos/home.mp4';
import CardsHome from '../components/CardsHome';
import '../css/card.css'


function Home() {
  return (
    <div className="page">
      <div className='video-container'>
          <video src={homeVid} autoPlay loop muted />
         <div className='textOverlay'>
         <h1>Study Abroad</h1>
          <p>Travel, Learn and Explore</p>
        </div>
      </div>
      <div className="homeView">
         <CardsHome/> 
      </div>
      
      
    </div>
    

  )
}

export default Home
