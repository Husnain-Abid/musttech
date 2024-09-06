import React from 'react'
import Layout from '../../component/Layout/Layout'
import ASSET_PATHS from '../../constant'
import './Contact.css';

export default function Contact() {
  const imgRoute = ASSET_PATHS.IMG_URL
  const iconRoute = ASSET_PATHS.ICON_URL

  return (
    <>
      <Layout>

        <div className="contact-container">

          <div className="contact-info">

            <div className='part-1'>
              <h2>Contact Information</h2>
              <p>Say something to start a live chat!</p>
            </div>

            <div className='part-2'>
              <ul>
                <li><span><img src={`${iconRoute}/phone2.svg`} alt="phone" /></span> +1012 3456 789</li>
                <li><span><img src={`${iconRoute}/email.svg`} alt="email" /></span> demo@gmail.com</li>
                <li><span><img src={`${iconRoute}/location2.svg`} alt="location" /></span> 132 Dartmouth Street Boston, <br /> Massachusetts 02156 United States</li>
              </ul>
            </div>
            <div className='part-3'>
              <div className="social-icons">
                <a href="#"><span><img src={`${iconRoute}/twitter.svg`} alt="Twitter" /> </span> </a>
                <a href="https://www.instagram.com/musttech_01/?igsh=MzcwYnQxeXBja3Zi" target='_blank'><span><img src={`${iconRoute}/insta.svg`} alt="Instagram" /></span></a>
                <a href="#"><span><img src={`${iconRoute}/discord.svg`} alt="LinkedIn" /></span></a>
              </div>
            </div>

            <div className='contact-image'>
              <img src={`${iconRoute}/c-img1.svg`} />
            </div>
            <div className='contact-image-1'>
              <img src={`${iconRoute}/c-img2.svg`} />
            </div>

          </div>

          <div className="contact-form">
            <form action="#">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="first-name">First Name</label>
                  <input type="text" id="first-name" name="first-name" />
                </div>
                <div className="form-group">
                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" id="last-name" name="last-name" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone-number">Phone Number</label>
                  <input type="tel" id="phone-number" name="phone-number" />
                </div>
              </div>

              <div className="form-radio-row">
                <label>Select Subject?</label>
                <div className="radio-group">
                  <label><input type="radio" name="subject" defaultValue="Web Development" /> Web Development</label>
                  <label><input type="radio" name="subject" defaultValue="Web Design" /> Web Design</label>
                  <label><input type="radio" name="subject" defaultValue="App Development" /> App Development</label>
                  <label><input type="radio" name="subject" defaultValue="Digital Marketing" /> Digital Marketing</label>
                </div>
              </div>

              <div className="form-message-row">
                <label htmlFor="message">Message</label>
                <textarea id="message"
                  placeholder="Write your message.." />
              </div>
              <div className='form-btn-row '>
                <button type="submit">Send Message</button>
              </div>


            </form>

            <div className='areoplan'>
              
              <img src={`${iconRoute}/areoplan.svg`} />

            </div>

          </div>

        </div>



      </Layout >
    </>
  )
}
