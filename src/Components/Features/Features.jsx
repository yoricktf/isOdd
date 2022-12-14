import React from 'react'
import './Features.css'
import odd from '../../Assets/odd.svg'
import even from '../../Assets/even.svg'
import grow from '../../Assets/grow.svg'


const Features = () => {
  const featuresArray = [
    { image: odd, alt: 'odd image', title: 'Odd', description: "It's easy to tell if a given number is odd." },
    { image: even, alt: 'even image', title: 'Even', description: "If a number isn't odd, you can easily tell that it's even." },
    { image: grow, alt: 'grow image', title: 'Grow', description: "We support a large range of numbers to fit your application's needs." },
  ]


  return (
    <section id='features'>
      <p className='miniTitle'>features</p>
      <h2>Let our API deliver instant numerical information</h2>
      <div className="allFeatures">

        {featuresArray.map(feature => (
          <div className="feature">
            <img className='featureImage' src={feature.image} alt={feature.alt} />
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
