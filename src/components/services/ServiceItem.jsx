import React from 'react'
import { BiCheck } from 'react-icons/bi'

function ServiceItem({service}) {

  return (
     <article className="service">
        <div className="service__head">
          <h3>{service.name}</h3>
        </div>

        <ul className="service__list">
          {service.services.map((item, i) => {
            return (
              <li key={i}>
                <BiCheck className='service__list-icon' />
                <p>{item}</p>
              </li>
            )      
          })}
        </ul>   
     </article>
  )
}

export default ServiceItem