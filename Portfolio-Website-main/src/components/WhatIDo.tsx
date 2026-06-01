import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          
          {/* DEVELOP */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>DEVELOP</h3>
              <h4>Web Applications</h4>
              <p>
                I develop fast, responsive, and scalable web applications using
                modern technologies. I build custom portfolios, e-commerce stores,
                and business websites with clean code and optimized SEO.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">React.js</div>
                <div className="what-tags">Next.js</div>
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">TypeScript</div>
                <div className="what-tags">Node.js</div>
                <div className="what-tags">Express.js</div>
                <div className="what-tags">MongoDB</div>
                <div className="what-tags">MySQL</div>
                <div className="what-tags">Firebase</div>
                <div className="what-tags">Tailwind CSS</div>
                <div className="what-tags">Git/GitHub</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* DESIGN */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>DESIGN</h3>
              <h4>UI/UX & Branding</h4>
              <p>
                I design professional graphics, layouts, and logos that enhance brand 
                identity. I create visually stunning UI/UX interfaces and marketing 
                materials that capture user attention.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Photoshop</div>
                <div className="what-tags">Canva</div>
                <div className="what-tags">Figma</div>
                <div className="what-tags">UI/UX Design</div>
                <div className="what-tags">Graphic Design</div>
                <div className="what-tags">Logo Design</div>
                <div className="what-tags">Branding</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* DIGITAL MARKETING */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 2)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>MARKETING</h3>
              <h4>Growth & Promotion</h4>
              <p>
                I help brands grow their online presence with digital marketing campaigns,
                SEO optimization, social media strategy, content marketing, and data-driven
                lead generation.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">SEO</div>
                <div className="what-tags">Social Media</div>
                <div className="what-tags">Google Ads</div>
                <div className="what-tags">Facebook Ads</div>
                <div className="what-tags">Lead Gen</div>
                <div className="what-tags">Analytics</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* AI & AUTOMATION */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 3)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>AUTOMATION</h3>
              <h4>AI Workflows & Chatbots</h4>
              <p>
                I build AI-powered automation workflows that streamline business operations. 
                I integrate tools like ChatGPT and Zapier to reduce manual work and increase 
                productivity.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">ChatGPT API</div>
                <div className="what-tags">AI Integration</div>
                <div className="what-tags">Zapier</div>
                <div className="what-tags">Workflows</div>
                <div className="what-tags">APIs</div>
                <div className="what-tags">Productivity</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
