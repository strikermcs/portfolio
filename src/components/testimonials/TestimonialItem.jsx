import React from 'react'

function TestimonialItem({testimonial}) {
  return (
    <article className='testimonial'>
      <div className="client__avatar">
        <img src={testimonial.avatar} alt="client avatar" />
      </div>
      <h5 className='client__name'>{testimonial.clientName}</h5>
      <small className="client__review">{testimonial.clientReview}</small>
    </article>
  )
}

export default TestimonialItem