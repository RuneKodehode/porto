import { useState } from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt2, BiGame } from "react-icons/bi";

function NavBar() {
  const [showNav, setShowNav] = useState(false);
  const [hideClose, setHideClose] = useState(0);

  return (
    <div className="flex flex-col" id="navbar">
      {/* here we have a div with a <link> that navigates to the default homepage of the site. within the button you see an svg that represents a house on the button itself.  */}

      <Link to="/" className="w-10 h-10 ">
        <button aria-label="Home button" className="w-full h-full">
          <BiHomeAlt2 className="w-10 h-10 " />
        </button>
      </Link>
      <button
        to="/menu"
        className="order-solid border-2 border-white-300 w-16 h-10 rounded-lg text-white text-center  text-xs"
        aria-label="open or close the navigation menu"
        onClick={() => {
          setShowNav(!showNav);
          setHideClose(0);
        }}
      >
        projects
      </button>
      <div className="flex flex-col w-16">
        {showNav && (
          <Link to="/ProjectOne" className="w-32">
            <button
              aria-label="Parallax text button"
              className="order-solid border-2 border-white-300 w-16 h-10 rounded-lg text-white text-center  text-xs"
              onClick={() => {
                setHideClose((prevHideClose) => (prevHideClose !== 1 ? 1 : 0));
              }}
            >
              Parallax
            </button>
          </Link>
        )}
        {showNav && hideClose === 1 && (
          <div
            aria-label="Show Parallax website"
            className="flex flex-col w-16"
          >
            <Link to="/AboutProjOne" className="w-auto h-auto">
              <button className="w-16 h-10 ">info</button>
            </Link>
            <a
              href="https://github.com/RuneKodehode/Parallax"
              target="_blank"
              rel="noreferrer noopener"
              className="w-16 h-auto"
            >
              <button
                aria-label="Button to Parallax Github"
                className="w-16 h-10 "
              >
                Github
              </button>
            </a>
          </div>
        )}
      </div>
      <div className="flex flex-col">
        {showNav && (
          <Link to="/ProjectTwo" className="">
            <button
              aria-label="Pokedex text button"
              className="order-solid border-2 border-white-300 w-16 h-10 rounded-lg text-white text-center  text-xs"
              id="pokedexBtn"
              onClick={() => {
                setHideClose((prevHideClose) => (prevHideClose !== 2 ? 2 : 0));
              }}
            >
              Pokedex
            </button>
          </Link>
        )}
        {showNav && hideClose === 2 && (
          <div className="flex flex-col ">
            <Link to="/AboutProjTwo" className="w-auto h-auto ">
              <button aria-label="show Pokedex" className="w-16 h-10 ">
                info
              </button>
            </Link>
            <a
              href="https://github.com/RuneKodehode/Pokedex"
              target="_blank"
              rel="noreferrer noopener"
              className=""
            >
              <button aria-label="Link to Pokedex Github" className="w-16 h-10">
                Github
              </button>
            </a>
          </div>
        )}
      </div>
      <div className="flex flex-col h-8 w-20">
        {showNav && (
          <Link to="/Breakout" className=" w-aut h-auto">
            <button
              aria-label="Button to show Breakout text"
              id="breakout"
              className=" order-solid border-2 border-white-300 w-16 h-10 rounded-lg text-white text-center  text-xs"
              onClick={() => {
                setHideClose((prevHideClose) => (prevHideClose !== 3 ? 3 : 0));
              }}
            >
              Breakout
            </button>
          </Link>
        )}
        {showNav && hideClose === 3 && (
          <div className="flex flex-col">
            <Link to="/AboutBreakout" className="w-auto h-auto ">
              <button
                aria-label="Button to Play Breakout"
                className="w-16 h-10 "
              >
                info
              </button>
            </Link>
            <a
              href="https://github.com/RuneKodehode/breakout"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button
                aria-label="Button to Breakout Github link"
                className="w-16 h-10  "
              >
                Github
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export { NavBar };
