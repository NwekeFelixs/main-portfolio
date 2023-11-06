import React from 'react';
import '../css/style.css';
import { IoLocationOutline, IoCallOutline, IoMailOutline, IoPersonCircle, IoMail, IoCall, IoChatbubbles, IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io5';

function Contact() {
  return (
    <section className="contact" id="contact" style={{padding:'10px'}}>
      <div className="contact-content section-content">
        <p className="section-subtitle">Contact</p>
        <h2 className="h3 section-title">Have You Any Project? Please Drop a Message</h2>
        <p className="section-text">Get in touch and let me know how I can help. Fill out the form, and I'll be in touch as soon as possible.</p>
        <ul className="contact-list">
          <li className="contact-list-item">
            <div className="contact-item-icon">
              <IoLocationOutline className='ion-icon' />
            </div>
            <div className="wrapper">
              <h3 className="h4 contact-item-title">Address:</h3>
              <address className="contact-info">Aba, Abia State, Nigeria</address>
            </div>
          </li>
          <li className="contact-list-item">
            <div className="contact-item-icon">
              <IoCallOutline className='ion-icon' />
            </div>
            <div className="wrapper">
              <h3 className="h4 contact-item-title">Phone:</h3>
              <a href="tel:2347036875151" className="contact-info">(+234) 703 687 5151</a>
            </div>
          </li>
          <li className="contact-list-item">
            <div className="contact-item-icon">
              <IoMailOutline className='ion-icon' />
            </div>
            <div className="wrapper">
              <h3 className="h4 contact-item-title">Email:</h3>
              <a href="mailto:info@feylicks.com" className="contact-info">info@feylicks.com</a>
              <a href="mailto:support@feylicks.com" className="contact-info">support@feylicks.com</a>
            </div>
          </li>
          <li>
            <ul className="contact-social-list">
              <li>
                <a href="#" className="contact-social-link">
                  <div className="tooltip">Facebook</div>
                  <IoLogoFacebook />
                </a>
              </li>
              <li>
                <a href="#" className="contact-social-link">
                  <div className="tooltip">Twitter</div>
                  <IoLogoTwitter/>
                </a>
              </li>
              <li>
                <a href="#" className="contact-social-link">
                  <div className="tooltip">Linkedin</div>
                  <IoLogoLinkedin/>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <form action="" className="contact-form">
        <div className="form-wrapper">
          <label htmlFor="name" className="form-label">Name</label>
          <div className="input-wrapper">
            <input type="text" name="name" id="name" required placeholder="e.g John Doe" className="input-field" />
            <IoPersonCircle className='ion-icon' />
          </div>
        </div>
        <div className="form-wrapper">
          <label htmlFor="email" className="form-label">Email</label>
          <div className="input-wrapper">
            <input type="email" name="email" id="email" required placeholder="e.g johndoe@mail.com" className="input-field" />
            <IoMail className='ion-icon'/>
          </div>
        </div>
        <div className="form-wrapper">
          <label htmlFor="phone" className="form-label">Phone</label>
          <div className="input-wrapper">
            <input type="tel" name="phone" id="phone" required placeholder="Phone Number" className="input-field" />
            <IoCall  className='ion-icon'/>
          </div>
        </div>
        <div className="form-wrapper">
          <label htmlFor="message" className="form-label">Message</label>
          <div className="input-wrapper">
            <textarea name="message" id="message" required placeholder="Write message..." className="input-field"></textarea>
            <IoChatbubbles className='ion-icon' />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </section>
  );
}

export default Contact;
