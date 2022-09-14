import React from 'react'
import './Banner.css'
import Button from 'react-bootstrap/Button'
import Bannergraphic from '../../BannerGraphic.svg'
import wave from '../../wave.svg'

const Banner = () => {
  return (
    <>
      <div id='banner'>
        <div className='bannerInfo'>
          <h1>isOdd API</h1>
          <p>use isOdd to tell if a number is odd</p>
          <Button>View Docs</Button>
        </div>
        <img className='bannerGraphic' src={Bannergraphic} alt='banner graphic' />
      </div>
      <img className='wavyEdge' src={wave} alt='wave graphic' />
    </>
  )
}

export default Banner
