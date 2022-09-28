import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Pricing.css'

const Pricing = () => {
  const plans = [
    { planType: 'Public', price: 'Free', schedule: '', features: ['✔ isOdd number API route', '✔ Range: 0 - 999,999', '𐄂 No advertisements', '𐄂 Supports negative numbers', '𐄂 24/7 support'], button: false, monthly: false },
    { planType: 'Premium', price: '1.99', schedule: 'monthly', features: ['✔ isOdd number API route', '✔ Range: 0 - 999,999', '✔ No advertisements', '𐄂 Supports negative numbers', '𐄂 24/7 support'], button: true, monthly: true },
    { planType: 'Enterprise', price: '99.99', schedule: 'monthly', features: ['✔ isOdd number API route', '✔ Range: 0 - 999,999', '✔ No advertisements', '✔ Supports negative numbers', '✔ 24/7 support'], button: true, monthly: true },
  ]

  return (
    <section id='pricingSection' className='container'>
      <p className='miniTitle'>Pricing</p>
      <h2>Pricing Options Table</h2>


      <div className="pricingCards">

        {plans.map((plan, index) => (
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Subtitle className="mb-2">{plan.planType}</Card.Subtitle>
              <Card.Title>$ {plan.price}</Card.Title>
              {plan.monthly ? <Card.Subtitle className="mb-2 text-muted">monthly</Card.Subtitle> : <Card.Subtitle className="mb-2 text-muted">forever</Card.Subtitle>}
              <hr />
              {plan.features.map((feature, index) => (
                <Card.Text>{feature}</Card.Text>
              ))}
              {plan.button ? <div className='buttonContainer'><Button href='https://donate.unhcr.org/int/en/general' variant="">Subscribe</Button></div> : null}
            </Card.Body>
          </Card>
        ))}
      </div>

    </section>
  )
}

export default Pricing
