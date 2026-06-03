import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

// Lightweight smoother shim — no paid license required
export const smoother = {
  scrollTop: (_y?: number) => { if (_y !== undefined) window.scrollTo({ top: _y }); return window.scrollY; },
  paused: (val: boolean) => { document.body.style.overflow = val ? "hidden" : ""; },
  scrollTo: (target: string | null, _smooth = true, _position = "top top") => {
    if (!target) return;
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  },
};

const Navbar = () => {
  useEffect(() => {
    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollTrigger.refresh();
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          Logo
        </a>
        <a
          href="mailto:itmapatelme2000@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          itmapatelme2000@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
