"use client"
import React, { useRef } from 'react';
import "./form.css"

const Form = () => {
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();
  const messageRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const mobile = mobileRef.current.value;
    const yourMessage = messageRef.current.value;
    const first = firstnameRef.current.value;
    const last = lastnameRef.current.value;
    window.location.href = `mailto:ranger17ashish@gmail.com?subject=${encodeURIComponent(first + " " + last)}&body=${encodeURIComponent(mobile)}\n${encodeURIComponent(yourMessage)}`;
  };

  return (
    <>
    <section>
      <div className="container">
        <div className="contactinfo">
          <div>
            <h2>Contact Info</h2>
            <ul className="info">
              <li>
                <span><img src="https://img.icons8.com/plasticine/48/000000/user-location.png" alt="location" /></span>
                <span>Kurukshetra, Haryana<br />India</span>
              </li>
              <li>
                <span><img src="https://img.icons8.com/ios-filled/50/000000/download-mail.png" alt="mail" /></span>
                <span>12212137@nitkkr.ac.in.com</span>
              </li>
              <li>
                <span><img src="https://img.icons8.com/fluent/100/000000/phone.png" alt="phone" /></span>
                <span>+91-7827893274</span>
              </li>
            </ul>
          </div>
          <ul className="sci">
            <li><a href="https://github.com/AshishAnurag" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/fluent/48/000000/github.png" alt="github" /></a></li>
            <li><a href="https://about.me/yash_goyal" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/fluent/48/000000/about.png" alt="about" /></a></li>
            <li><a href="https://www.linkedin.com/in/ashish-anurag-6072a5254/" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/fluent/48/000000/linkedin-2.png" alt="linkedin" /></a></li>
            <li><a href="https://www.instagram.com/ashish.2003_/" target="_blank" rel="noreferrer"><img src="/insta.png" alt="blog" width={50} /></a></li>
          </ul>
        </div>
        <div className="contactForm">
          <h2>Send a Message</h2>
          <form onSubmit={sendEmail}>
            <div className="formBox">
              <div className="inputBox w50">
                <input id="firstname" type="text" name="" required ref={firstnameRef} />
                <span>First Name</span>
              </div>
              <div className="inputBox w50">
                <input id="lastname" type="text" name="" required ref={lastnameRef} />
                <span>Last Name</span>
              </div>
              <div className="inputBox w50">
                <input id="email" type="text" name="" required ref={emailRef} />
                <span>Email Address</span>
              </div>
              <div className="inputBox w50">
                <input id="mobile" type="text" name="" required ref={mobileRef} />
                <span>Mobile Number</span>
              </div>
              <div className="inputBox w100">
                <textarea id="message" name="" required ref={messageRef}></textarea>
                <span>Write your message here...</span>
              </div>
              <div className="inputBox w100">
                <input type="submit" value="send" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  );
};

export default Form;