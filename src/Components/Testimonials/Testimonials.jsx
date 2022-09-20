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
    { image: Yorick, review: "isOdd is my go to tool for every project that I do, I don't know what I would do without it. I ended up buying the Enterprise version so that my whole team can make use of it at work", author: 'Yorick ten Feld - Fullstack Javascript developer' },
    { image: Alia, review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nesciunt iste voluptatem, non sit doloremque eum quaerat reprehenderit.', author: 'Alia Taifi - Ruby Developer' },
    { image: Hans, review: "I used isOdd in my personal life but ended up adopting it for the whole company, its simple to use but provides so much value, I didn't really have a choice", author: 'Hans Snoek - CTO of The Bluth Company' },
    { image: Ted, review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum voluptatem delectus ducimus officiis eius nihil.', author: 'Ted Grimes - Python Developer' },
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
