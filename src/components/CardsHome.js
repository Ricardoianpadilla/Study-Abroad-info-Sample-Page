import React from 'react';
import '../css/card.css';
import CardItem from './CardItem';
import imgEurope from '../assets/images/europe.jpg'
import imgNorth from '../assets/images/north.jpg'
import imgKorea from '../assets/images/korea.jpg'
import NewZealand from '../assets/images/newz.jpg'
import imgLatin from '../assets/images/latin.jpg'




function Cards() {
  return (
    <div className='cards'>
      <h1>Explore Study Abroad Locations</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={imgEurope}
              text='Explore Abroad Programs in Europe'
              label='Low Avalibility'
              path= '/1'
            />
            <CardItem
              src={imgNorth}
              text='Explore great Abroad Programs in North America'
              label='Low Avalibility'
              path='/2'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={imgKorea}
              text='Explore Abroad options in South Korea'
              label='High Avalibility'
              path='/3'
            />
            <CardItem
              src={NewZealand}
              text='See New Zealand study Abroad oppurtunities'
              label='High Avalibility'
              path='/4'
            />
            <CardItem
              src={imgLatin}
              text='Explore our Latin American Abroad Programs'
              label='High avalibility'
              path='/5'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
