import React from 'react'
import './Docs.css'

const Docs = () => {
  return (
    <section id='documentation' className='container'>
      <h2>isOdd Public API Docs</h2>
      <p>isOdd API is a RESTful API that returns json</p>
      <div className="container">
        <h3>GET /isOdd/&lt;number&gt;</h3>
        <p>Returns whether a given number is odd. Allowed numbers depend on your API tier. See Pricing below.</p>
        <h5 className="font-weight-bold">URL Parameters</h5>
        <p>number: the number you want to check</p>
        <h5 className="font-weight-bold">Example</h5>
        <a href="#">THE API URL WILL NEED TO GO HERE</a>
      </div>
      <h5>Example API Response</h5>
      <div className='codeSnippet'>
        <p>$ curl https://api.isoddapi.xyz/api?number=3</p>
        <p>
          <br />
          &#123;{/* code for '{' charecter */}
          <br />
          "isodd": true,
          <br />
          "ad": "Hire Yorick ten Feld, fullstack dev!"
          <br />
          &#125;{/* code for '}' charecter */}
        </p>
      </div>
      <p>Sign up for isOdd Premium or Enterprise to remove advertisements.</p>

    </section>
  )
}

export default Docs
