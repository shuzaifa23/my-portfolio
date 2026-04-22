import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="shuzaifasamee@mail.com" data-cursor="disable">
                shuzaifasamee@mail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:8807698945" data-cursor="disable">
                +91 88076989445
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/shuzaifa23"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/contact-mohamed-huzaifa-s-"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            
            <a
              href="https://www.instagram.com/s.huzaifa2?igsh=cGEyb3JjZmVyNWV3"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Mohamed Huzaifa S</span>
            </h2>
            <h5>
              <MdCopyright /> 
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
