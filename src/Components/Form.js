import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./FormStyle.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
    const showToastMessage = () => {
        toast.success('Form submitted sucessfully !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5k2v40g",
        "template_frap9b7",
        form.current,
        "gGjTVjsS4ocEsYNkl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email"/>
      <label>Subject</label>
      <input
        type="text"
        placeholder="I'd like to build a website for my business"
      ></input>
      <label>Message</label>
      <textarea name="message" rows="6" placeholder="Type your message here" />
      <button onClick={showToastMessage} className="btn" type="submit" value="Send">Submit</button>
      <ToastContainer />
      {/* <input type="submit" value="Send" className="btn" /> */}
    </form>
  );
};

// const Form = () => {
//   return (
//     <div className="form">
//         <form>
//             <label>Your Name</label>
//             <input type="text" placeholder="Temitope"></input>
//             <label>Email</label>
//             <input type="email" placeholder="temitope@gmail.com"></input>
//             <label>Subject</label>
//             <input type="text" placeholder="I'd like to build a website for my business"></input>
//             <label>Message</label>
//             <textarea rows="6" placeholder="Type your message here" />
//             <button className="btn">Submit</button>
//         </form>
//     </div>
//   )
// }

export default ContactUs;
