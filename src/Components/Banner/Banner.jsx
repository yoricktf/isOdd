import React from 'react'
import './Banner.css'
import Button from 'react-bootstrap/Button'
import Bannergrphic from '../../BannerGraphic.svg'

const Banner = () => {
  return (
    <div id='banner'>
      <div className="bannerInfo">

        <h1>isOdd API</h1>
        <p>use isOdd to tell if a number is odd</p>
        <Button>View Docs</Button>
      </div>
      <img src={Bannergrphic} alt="banner graphic" />
    </div>
  )
}

export default Banner
