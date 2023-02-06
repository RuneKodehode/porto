import Vector from "../svg/Vector.svg";
import HTML from "../svg/html.svg";
import CSS from "../svg/css.svg";
import React from "../svg/react.svg";
import Figma from "../svg/figma.svg";
import "../../index.css";
export function Icons() {
  return (
    <div id="icons">
      <a
        href="https://en.wikipedia.org/wiki/JavaScript"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          id="jsIcon"
          className="icon"
          src={Vector}
          alt="Icon of a javascript logo"
        />
      </a>
      <a
        href="https://en.wikipedia.org/wiki/HTML"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          id="htmlIcon"
          className="icon"
          src={HTML}
          alt="Icon of a HTML logo"
        />
      </a>
      <a
        href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          id="reactIcon"
          className="icon"
          src={React}
          alt="Icon of a React logo"
        />
      </a>
      <a
        href="https://en.wikipedia.org/wiki/CSS"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img id="cssIcon" className="icon" src={CSS} alt="icon of a CSS logo" />
      </a>
      <a
        href="https://en.wikipedia.org/wiki/Figma_(software)"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          id="figmaIcon"
          className="icon"
          src={Figma}
          alt="icon of a figma logo"
        />
      </a>
    </div>
  );
}
