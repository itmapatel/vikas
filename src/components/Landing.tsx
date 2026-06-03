import { PropsWithChildren } from "react";
import { MdOutlineEmail } from "react-icons/md";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              VIKAS
              <br />
              <span>PATEL</span>
            </h1>
            <a
              href="mailto:itmapatelme2000@gmail.com"
              className="landing-email"
              data-cursor="disable"
            >
              <MdOutlineEmail />
              itmapatelme2000@gmail.com
            </a>
          </div>
          <div className="landing-info">
            <h3>A Creative</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Developer</div>
              <div className="landing-h2-2">Designer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Marketer</div>
              <div className="landing-h2-info-1">AI Expert</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
