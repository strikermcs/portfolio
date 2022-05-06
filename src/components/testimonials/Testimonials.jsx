import React from 'react'
import TestimonialItem from './TestimonialItem'
import { testimonials } from './testimonials.list'
import './testimonials.css'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


function Testimonials() {
  return (
    <section>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map(testimonial => {
          return (
            <SwiperSlide>
              <TestimonialItem testimonial={testimonial} key={testimonial.id}/>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials