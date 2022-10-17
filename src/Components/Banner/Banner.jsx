import React from 'react'
import './Banner.css'
import Button from 'react-bootstrap/Button'
import Bannergraphic from '../../Assets/BannerGraphic.svg'
import waveTop from '../../Assets/waveTop.svg'

const Banner = () => {
  return (
    <>
      <div id='banner'>
        <div className='bannerInfo'>
          <h1>isOdd API</h1>
          <p>use isOdd to tell if a number is odd</p>
          <Button href='#documentation'>View Docs</Button>
        </div>
        <img className='bannerGraphic' src={Bannergraphic} alt='banner graphic' />
      </div>
      <img className='wavyEdge' src={waveTop} alt='wave graphic' />
    </>
  )
}

export default Banner
