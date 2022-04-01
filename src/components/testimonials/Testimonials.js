import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import './Testimonials.css'
import avatar1 from '../../asssets/avatar.png'
import avatar2 from '../../asssets/avatar2.jpg'
import avatar3 from '../../asssets/avatar3.jpg'

const Testimonials = () => {  
  return (
    <section id='testimonials'>
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>
        <div className='container testimonials_container'>
            <Swiper pagination={{clickable:true}} modules={[Pagination,Navigation]} 
            spaceBetween={40}
            slidesPerView={1}
            >
            <SwiperSlide className='testimonial'>
                <div className='client_avatar'>
                    <img src={avatar1} alt='Avatar one'></img>
                </div>
                <h5 className='client_name'>Client Name</h5>
                <small className='client_review'>
                    Exercitation qui laboris elit ut elit enim eu cillum ipsum quis.
                    Tempor non adipisicing consequat magna culpa irure. Ullamco sint esse in dolore voluptate.
                    Tempor non adipisicing consequat magna culpa irure. Ullamco sint esse in dolore voluptate.
                    Tempor non adipisicing consequat magna culpa irure. Ullamco sint esse in dolore voluptate.
                </small>
            </SwiperSlide>
            <SwiperSlide className='testimonial'>
                <div className='client_avatar'>
                    <img src={avatar2} alt='Avatar two'></img>
                </div>
                <h5 className='client_name'>Client Name</h5>
                <small className='client_review'>
                    Exercitation qui laboris elit ut elit enim eu cillum ipsum quis.
                    Tempor non adipisicing consequat magna culpa irure. Ullamco sint esse in dolore voluptate.
                    Tempor non adipisicing consequat magna culpa irure. Ullamco sint esse in dolore voluptate.
                    Tempor non adipisicing consequat magna culpa irure. Ullamco sint esse in dolore voluptate.
                </small>
            </SwiperSlide>
            <SwiperSlide className='testimonial'>
                <div className='client_avatar'>
                    <img src={avatar3} alt='Avatar three'></img>
                </div>
                <h5 className='client_name'>Client Name</h5>
                <small className='client_review'>
                    Exercitation qui laboris elit ut elit enim eu cillum ipsum quis.
                    Tempor non adipisicing consequat magna culpa irure. Ullamco sint esse in dolore voluptate.
                    Tempor non adipisicing consequat magna culpa irure. Ullamco sint esse in dolore voluptate.
                    Tempor non adipisicing consequat magna culpa irure. Ullamco sint esse in dolore voluptate.
                </small>
            </SwiperSlide>
            </Swiper>
        </div>
    </section>
  )
}

export default Testimonials