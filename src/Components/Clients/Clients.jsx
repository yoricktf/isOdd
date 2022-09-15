import React from 'react'
import './Clients.css'
import LonoLogo from '../../LonoLogo.png'
import AnustartLogo from '../../AnustartLogo.png'
import BluthLogo from '../../BluthLogo.png'
import { Carousel } from 'react-bootstrap'

const Clients = () => {
  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item>
        <img
          className="d-inline companyLogo"
          src={LonoLogo}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-inline companyLogo"
          src={AnustartLogo}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-inline companyLogo"
          src={BluthLogo}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default Clients
