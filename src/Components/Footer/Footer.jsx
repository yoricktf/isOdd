import React from 'react'
import './Footer.css'
import waveBottom from '../../Assets/waveBottom.svg'

const Footer = () => {
  return (
    <>
      <img src={waveBottom} alt="" />
      <footer>
        <section className='footerInfo'>
          <div>
            <h4>About isOdd</h4>
            <p>We're passionate about telling you if a number is odd or even so you can focus on more important things</p>
          </div>
          <div>

            <h4>Important Links</h4>
            <ul>
              <li>Info on odd numbers:</li>
              <a href="https://mathworld.wolfram.com/OddNumber.html">MathWorld</a>
              <li>Info on number parity:</li>
              <a href="https://en.wikipedia.org/wiki/Parity_(mathematics)">Wikipedia</a>
              <li>Check out isEven:</li>
              <a href="https://isevenapi.xyz/">isEven</a>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <p>123 Fake Street, 13349, Berlin, Germany</p>
            <a href="mailto:yorick.tenfeld@gmail.com">yorick.tenfeld@gmail.com</a>
          </div>
        </section>
        <hr />
        <section className="copyrightInfo">
          <h6>Copyright © 2022 Yorick</h6>
          <h6>not affliated with UNHCR</h6>
        </section>
      </footer>
    </>
  )
}

export default Footer
