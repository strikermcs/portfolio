import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com';
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'
import { AiOutlineSkype } from 'react-icons/ai'
import DialogWindow from '../dialogWindow/DialogWindow'

function Contact() {

  const form = useRef()
  const [messageData, setMessageData] = useState({isVisible: false, error: false, loading: false})

  const sendEMail = (e) => {
    e.preventDefault()

    setMessageData({isVisible: true, error: false, loading: true })

    emailjs.sendForm("service_owwboma", "template_qttqef7",
      form.current, "aVmG8NFFdQl8I1UaV")
      .then((result) => {
        setMessageData({isVisible: true, error: false, loading: false})
      }, (error) => {
          setMessageData({isVisible: true, error: true, loading: false})
      });
    
    e.target.reset();
   
  }
  
  const closeModal = () => { 
    setMessageData({isVisible: false, error: false, loading: false })
  }

  return (
    <section id='contact' className='observe'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>tellermcs@gmail.com</h5>
            <a href="mailto:tellermcs@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <FaTelegramPlane className="contact__option-icon"/>
            <h4>Telegram</h4>
            <h5>@strikermcs</h5>
            <a href="https://t.me/strikermcs" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineSkype className="contact__option-icon"/>
            <h4>Skype</h4>
            <h5>Павел Семенюк</h5>
            <a href="https://join.skype.com/invite/L9rhgpcCx1jr" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEMail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>

      {messageData.isVisible &&
        <DialogWindow error={messageData.error} callback={closeModal} loading={messageData.loading} />}
    </section>
  )
}

export default Contact