import React from 'react'
import './Clients.css'
import LonoLogo from '../../Assets/LonoLogo.png'
import BluthLogo from '../../Assets/BluthLogo.png'
import SpeednetLogo from '../../Assets/SpeednetLogo.png'
import MctreeLogo from '../../Assets/MctreeLogo.png'
import Atticus from '../../Assets/AtticusLogo.png'
import Carousel from 'react-bootstrap/Carousel'

const Clients = () => {

  const slides = [
    { image: LonoLogo, alt: 'Lono Logo' },
    { image: BluthLogo, alt: 'Bluth Logo' },
    { image: SpeednetLogo, alt: 'Speednet Logo' },
    { image: MctreeLogo, alt: 'Mctree Logo' },
    { image: Atticus, alt: 'Atticus Profile Picture' }
  ]

  return (
    <Carousel controls={false} indicators={false} interval={3000}>
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
