import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Web Developer</h4>
                <h5>Freelance</h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
            <p>
              Developed responsive and high-performance websites for clients across different 
              industries. Worked on frontend and backend development, API integrations, database 
              management, and custom web applications while maintaining modern UI/UX standards.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphic Designer & Branding Specialist</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>2022 - Present</h3>
            </div>
            <p>
              Created professional branding materials including logos, social media creatives, 
              banners, posters, and marketing designs for businesses and personal brands. 
              Focused on visually engaging and modern design solutions.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Marketing & AI Automation Specialist</h4>
                <h5>Freelance Projects</h5>
              </div>
              <h3>2024 - Present</h3>
            </div>
            <p>
              Managed digital marketing campaigns, SEO optimization, and AI automation 
              workflows for businesses. Built automation systems that improved operational 
              efficiency, content workflows, and customer engagement.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
