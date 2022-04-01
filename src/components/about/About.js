import React from "react";
import './About.css'
import ME from '../../asssets/picture.jpg'
import {FaLaptopCode} from 'react-icons/fa'
import {GiDiploma} from 'react-icons/gi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="about image"></img>
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaLaptopCode className="about_icon"/>
              <h5>Skills</h5>
              <small>HTML, CSS, React ....</small>
            </article>
            
            <article className="about_card">
              <GiDiploma className="about_icon"/>
              <h5>Certificates</h5>
              <small>Bootsrap,jQuery</small>
            </article>
            
            <article className="about_card">
              <VscFolderLibrary className="about_icon"/>
              <h5>Projects</h5>
              <small>property rental app</small>
            </article>
          </div>
          <p>
              Hello, i'm Habib Hajjem from Tunisia, 29 years old.<br/> 
              I'm an industrial maintenance engineer graduated 
              from the nationale institute of applied science and technology (INSAT).<br/>
              I worked as a field services engineer in the electronic manfucturing industry for more than 3 years.<br/>
              After this years of experience, i am now looking for transtion to become a web developer.
              I just completed a full stack JavaScript bootcamp at GoMyCode where i learned the basics of web developement
              using javaScript and some useful libraries and framework.
            </p>
            <a href="#contact" className="btn btn-primary">Let's talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
