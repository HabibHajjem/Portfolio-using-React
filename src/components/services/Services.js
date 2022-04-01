import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className='container services_container'>
            <article className='service'>
                <div className='service_head'>
                    <h3>Front-end Developement</h3>
                </div>
                <ul className='service_list'>
                    {/* <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Developing front-end website architecture.</p>
                    </li> */}
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Designing user interactions on web pages.</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Ensuring responsiveness of applications. </p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Working alongside graphic designers for web design features. </p>
                    </li>
                </ul>
            </article>

            <article className='service'>
                <div className='service_head'>
                    <h3>Back-end Developement</h3>
                </div>
                <ul className='service_list'>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Developing back-end website applications.</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Creating servers and databases for functionality.</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Designing and developing APIs.</p>
                    </li>
                </ul>
            </article>
        </div>
    </section>
  )
}

export default Services