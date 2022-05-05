import React from 'react'
import ServiceItem from './ServiceItem'
import { services } from './services.list'
import './services.css'

function Services() {
  return (
    <section id='service' className='observe'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {services.map(service => {
          return <ServiceItem service={service} key={service.id}/>
        })}
      </div>
    </section>
  )
}

export default Services