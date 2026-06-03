import { MdCopyright } from "react-icons/md";
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
              <a href="mailto:itmapatelme2000@gmail.com" data-cursor="disable">
                itmapatelme2000@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+916265901311" data-cursor="disable">
                +91 62659 01311
              </a>
            </p>
            <h4>WhatsApp</h4>
            <p>
              <a href="https://wa.me/916265901311" target="_blank" rel="noreferrer" data-cursor="disable">
                +91 62659 01311
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Vikas Patel</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
