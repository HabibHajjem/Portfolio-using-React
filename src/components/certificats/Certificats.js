import React from 'react'
import './Certificats.css'
import certifImg from '../../asssets/GMC-certificate.jpg'
import certifImg2 from '../../asssets/Bootstrap-certif.jpg'
import certifImg3 from '../../asssets/jQuery-certif.jpg'

const Certificats = () => {
  return (
    <section id="certificates">
      <h5>I have some certificates</h5>
      <h2>Certificates</h2>

      <div className="container certificates_container">
        <article className="certificates_item">
          <div className="certificates_item-img">
            <img src={certifImg} alt="certificate title"></img>
          </div>
            <a href="https://learn.gomycode.co/credentials/bc541848-4058-4ab6-a0a3-8864caf42ed0/GYAOARMHSYYSCALOCEDEEEONI-CN-TC-O/00003336#certificate" 
            className="btn btn-primary" target='_blank'>
              Certificate Link
            </a>
        </article>
        <article className="certificates_item">
          <div className="certificates_item-img">
            <img src={certifImg2} alt="certificate title"></img>
          </div>
          <a href="https://www.udemy.com/certificate/UC-3bdf71b7-3232-400b-8133-4a1e5be0445b/?utm_source=sendgrid.com&utm_medium=email&utm_campaign=email" 
          className="btn btn-primary" target='_blank'>
            Certificate Link
          </a>
        </article>
        <article className="certificates_item">
          <div className="certificates_item-img">
            <img src={certifImg3} alt="certificate title"></img>
          </div>
          <a href="https://www.udemy.com/certificate/UC-3cebb756-c143-4c85-b7de-d0959c8e78a4/?utm_source=sendgrid.com&utm_medium=email&utm_campaign=email" 
          className="btn btn-primary" target='_blank'>
            Certificate Link
          </a>
        </article>
      </div>
    </section>
  )
}

export default Certificats