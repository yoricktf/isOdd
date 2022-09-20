import React from 'react'
import './Testimonials.css'
import Yorick from '../../YorickProfile.png'
import Alia from '../../AliaProfile.png'
import Hans from '../../HansProfile.png'
import Ted from '../../TedProfile.png'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'

const testimonials = () => {

  const reviews = [
    { image: Yorick, review: "isOdd is my go to tool for every project that I do, its the first thing I implement every time.", author: 'Yorick ten Feld - Fullstack Javascript developer' },
    { image: Alia, review: 'isOdd takes away the pain of doing all the math of trying to understand whether a number is odd, life saver.', author: 'Alia Taifi - Ruby Developer' },
    { image: Hans, review: "I used isOdd in my personal life but ended up purchasing the Enterprise package for the whole company, its simple to use but provides so much value, I didn't really have a choice!", author: 'Hans Snoek - CTO of The Bluth Company' },
    { image: Ted, review: 'Math has never been my strong suit, to be able to not have to worry and make sure I know if a number is odd is invaluable.', author: 'Ted Grimes - Python Developer' },
  ]


  return (
    <section className='testmonials'>
      <Carousel indicators={false} variant='dark' className='container'>
        {reviews.map((review, index) => (
          <Carousel.Item key={index}>
            <Image
              className="profileImage"
              roundedCircle={true}
              src={review.image}
              alt="picture of {review.author}"
            />
            <p className='review'>{review.review}</p>
            <p className='author'>{review.author}</p>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  )
}

export default testimonials
