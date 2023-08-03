import "./css/contact.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const notify = ()=>{
    toast.success('Message sent successfully', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
}

export default function Contact() {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8evdpro', 'template_28awftj', form.current, 'Tqh8xQ_crqEmZlTpw')
      .then((result) => {
          console.log(result.text);
          console.log("Message sent")
      }, (error) => {
          console.log(error.text);
      });
  };


    return (
      <section className="contact" id="contact">
        <div className="contact-head">
            <h1>Contact<span>Me</span></h1>
            <div className="contat-list">
                <li><img style={{marginBottom: "-6px", marginRight:"10px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAVNJREFUSEvtlb9LQmEUhp/3qlsOCYEEbUFQ/0SjNEc0RCAUGA1Bc2PQFjREQYIQDRHN4dg/UdAchBDYYJt6T9wfZprXa8pdpLuec97n/d7z8V2R8KeE9ZkmgLXWQcfA0oSxvYAdofS9p9ONyNpPwPKE4p3xZ5Ra6QdYWL0A9sYEdWeV8s3/PEEA8ArWLIBTAfIjgmrgFlGmirW7OgMBOFmkT8xmwb0ENmIgd+CUkD4wmwG38W10MIBXcLdR5tFvtNYm6BzI9YHqYPsofRv0NVfBuQYW4gAdnTI4h0gNzPJgFbBCUFQVVESqYZYF9xTY6TEQuYNem29guyj9ELhsl0J3XnTe6dZAV8D8rxhHBHTmbsA5QKoHwpYD9wzYitzPHwGezjtYGIPKwNzQ5Y8BGPHGhm3/gNi8BkSU9GPnP9cnwGKsu+ENEc/1hKpR49P0y0wooi8SAXkZkWlwpQAAAABJRU5ErkJggg=="/>
                    rajmalperera@gmail.com</li>
                <li><img style={{marginBottom: "-6px", marginRight:"10px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAalJREFUSEvFlT1IHEEYhp93NoUYUAhaaJEueARMEcQinRAVCTap0gk2ioopDYSkUSIWlppSbBLwOotAsEoIaSwEwUJsErC1iQgi3nyy90P21l25uVOcdmaeZ7+Z+d4Vdzx0x3zuQWAm8O+AJ+DeIp22UmV9BWYdYFtgoxWo/YZoCOmiWUlKUNoH+uth2ga9Rio1I0kLLAeygaLJ2xCcAe05oPco+hQqSVdwADzNhugbcq9aFXwF3mRADsG9RDpuVTANfE5B9sANI52EwuP16Wf6GPzfepArIB02A78uKD99vw02ngB+RNHiLQpsAPxuAngObgApfgD/h1kP+FWw7+jBZt4HZGeRldaAmcSmP+BGkI4qDW7d4H8CheqaJRR9yJLkCKwNSj9Ag4lNcY8sgyuCLwLPUsB1cHNIdc2an6ZmXeB/AX0B5/8F3ATSZW3PzXFt1glWBBsOkKyjaLYxQeW84/ieB+KYyIuRpH8FRXHcl0fjP5zKxS4AcTM+zK5IO6CxZPI2LqgRzR6BnwK9AHsO9Fan4jgZRPqXlIcLAi4j7IgCweF30KTgCmxncBkF3yz1AAAAAElFTkSuQmCC"/>
                    +94 71 477 7848</li>
            </div>
        </div>
        
        <div className="contact-form">
            <form ref= {form} onSubmit={sendEmail}>
                <input name="user_name" type="" placeholder="Enter your name" required></input>
                <input name="user_email" type="email" placeholder="Enter your email" required></input>
                <input name="user_phone" type="" placeholder="Enter your phone number" required></input>
                <textarea is="msg" name="msg" cols="30" rows="10" placeholder="Enter your message"></textarea>
                <input type="submit" onClick={notify} value="Submit" className="send"></input>
                <ToastContainer />
            </form>
        </div>
      </section>
    );
  }