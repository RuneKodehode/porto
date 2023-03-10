import { useState } from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt2, BiGame } from "react-icons/bi";

function NavBar() {
  const [showNav, setShowNav] = useState(false);
  const [hideClose, setHideClose] = useState(0);

  return (
    <div className="grid row-start-3 col-start-1 sm:row-start-1 sm:col-start-1">
      <div className="flex flex-row sm:flex-col" id="navbar">
        {/* here we have a div with a <link> that navigates to the default homepage of the site. within the button you see an svg that represents a house on the button itself.  */}

        <Link
          to="/"
          className="w-16 h-12 sm:w-32 text-black border-none border bg-orange-600 rounded-lg flex hover:bg-orange-500 active:animate-ping"
        >
          <button aria-label="Home button" className="w-full h-full">
            <BiHomeAlt2 className="w-10 h-10 sm:w-32" />
          </button>
        </Link>
        <button
          to="/menu"
          className="border w-16 h-12 rounded-lg text-white text-center  text-xs bg-orange-700 sm:w-32  sm:h-auto sm:text-lg hover:bg-orange-500 active:animate-ping"
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
                className="border w-16 h-12 rounded-lg text-white text-center  text-xs bg-orange-900 sm:w-32  sm:h-auto sm:text-lg hover:bg-orange-500 active:animate-ping"
                onClick={() => {
                  setHideClose((prevHideClose) =>
                    prevHideClose !== 1 ? 1 : 0
                  );
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
                <button className="border border-blue-300 w-16 h-10 rounded-lg text-white text-center  text-xs bg-slate-800 sm:w-32  sm:h-auto sm:text-lg">
                  info
                </button>
              </Link>
              <a
                href="https://github.com/RuneKodehode/Parallax"
                target="_blank"
                rel="noreferrer noopener"
                className="w-16 h-auto"
              >
                <button
                  aria-label="Button to Parallax Github"
                  className="border border-blue-300 w-16 h-10 rounded-lg text-white text-center  text-xs bg-slate-800 sm:w-32  sm:h-auto sm:text-lg"
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
                className="border w-16 h-12 rounded-lg text-white text-center  text-xs bg-orange-900 sm:w-32  sm:h-auto sm:text-lg hover:bg-orange-500 active:animate-ping"
                id="pokedexBtn"
                onClick={() => {
                  setHideClose((prevHideClose) =>
                    prevHideClose !== 2 ? 2 : 0
                  );
                }}
              >
                Pokedex
              </button>
            </Link>
          )}
          {showNav && hideClose === 2 && (
            <div className="flex flex-col ">
              <Link to="/AboutProjTwo" className="w-auto h-auto ">
                <button
                  aria-label="show Pokedex"
                  className="border border-blue-300 w-16 h-10 rounded-lg text-white text-center  text-xs bg-slate-800 sm:w-32  sm:h-auto sm:text-lg"
                >
                  info
                </button>
              </Link>
              <a
                href="https://github.com/RuneKodehode/Pokedex"
                target="_blank"
                rel="noreferrer noopener"
                className=""
              >
                <button
                  aria-label="Link to Pokedex Github"
                  className="border border-blue-300 w-16 h-10 rounded-lg text-white text-center  text-xs bg-slate-800 sm:w-32  sm:h-auto sm:text-lg"
                >
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
                className="border w-16 h-12 rounded-lg text-white text-center  text-xs bg-orange-900 sm:w-32  sm:h-auto sm:text-lg hover:bg-orange-500 active:animate-ping"
                onClick={() => {
                  setHideClose((prevHideClose) =>
                    prevHideClose !== 3 ? 3 : 0
                  );
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
                  className="border border-blue-300 w-16 h-10 rounded-lg text-white text-center  text-xs bg-slate-800 sm:w-32  sm:h-auto sm:text-lg"
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
                  className="border border-blue-300 w-16 h-10 rounded-lg text-white text-center  text-xs bg-slate-800 sm:w-32  sm:h-auto sm:text-lg"
                >
                  Github
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export { NavBar };
