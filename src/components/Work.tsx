import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// ScrollTrigger MUST be registered alongside useGSAP.
// Without it, pin:true never inserts the spacer div, causing
// TechStack and Contact to overlap Work permanently.
gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    name: "Modern Portfolio Website",
    category: "Personal Portfolio Website",
    tools: "Next.js, React.js, Tailwind CSS, Framer Motion",
    image: "/images/portfolio.png"
  },
  {
    name: "E-Commerce Store",
    category: "E-Commerce Web Application",
    tools: "React.js, Node.js, Express.js, MongoDB",
    image: "/images/ecommerce.png"
  },
  {
    name: "Business Landing Page",
    category: "Business Website",
    tools: "HTML5, CSS3, JavaScript, Tailwind CSS",
    image: "/images/business.png"
  },
  {
    name: "Social Media Branding Kit",
    category: "Graphic Design & Branding",
    tools: "Photoshop, Canva, Figma",
    image: "/images/branding.png"
  },
  {
    name: "AI Automation Workflow System",
    category: "AI & Automation",
    tools: "ChatGPT API, Zapier, Automation Tools",
    image: "/images/ai_automation.png"
  },
  {
    name: "Digital Marketing Campaign Dashboard",
    category: "Marketing Analytics Dashboard",
    tools: "React.js, Firebase, Chart.js",
    image: "/images/dashboard.png"
  }
];

const Work = () => {
  useGSAP(() => {
    // Calculate how far the carousel needs to scroll horizontally.
    // This runs inside ScrollTrigger's refresh cycle via invalidateOnRefresh,
    // so it is always accurate — even after window resize.
    function getTranslateX(): number {
      const boxes = document.getElementsByClassName("work-box");
      if (!boxes.length) return 0;
      const containerLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const boxRect = boxes[0].getBoundingClientRect();
      const parentWidth = boxes[0].parentElement!.getBoundingClientRect().width;
      const padding = parseInt(window.getComputedStyle(boxes[0]).padding) / 2;
      return boxRect.width * boxes.length - (containerLeft + parentWidth) + padding;
    }

    const translateX = getTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        // end distance = horizontal scroll needed — GSAP uses this to size the spacer
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,          // prevents the brief overlap flash as pin engages
        invalidateOnRefresh: true, // recalculates spacer height on every resize
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
