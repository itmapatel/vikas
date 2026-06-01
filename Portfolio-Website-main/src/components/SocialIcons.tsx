import { FaWhatsapp } from "react-icons/fa6";
import "./styles/SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://wa.me/916265901311" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
        </span>
      </div>
    </div>
  );
};

export default SocialIcons;
