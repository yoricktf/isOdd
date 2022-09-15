import React from 'react'
import './Clients.css'
import LonoLogo from '../../LonoLogo.png'
import AnustartLogo from '../../AnustartLogo.png'
import BluthLogo from '../../BluthLogo.png'
import { Carousel } from 'react-bootstrap'

const Clients = () => {

  const slides = [
    { image: LonoLogo, alt: 'Lono Logo' },
    { image: AnustartLogo, alt: 'Anustart Logo' },
    { image: BluthLogo, alt: 'Bluth Logo' },
  ]

  return (
    <Carousel controls={false} indicators={false}>
      {slides.map(slide => (
        <Carousel.Item>
          <img
            className="d-inline companyLogo"
            src={slide.image}
            alt={slide.alt}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Clients
