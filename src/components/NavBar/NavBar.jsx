import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [showNav, setShowNav] = useState(false);
  const [hideClose, setHideClose] = useState(0);

  // This is my navigation bar, it uses Usestates to show or hide the buttons, and <link> to navigate to the other pages through hashrouting.

  return (
    <div id="navId">
      {/* here we have a div with a <link> that navigates to the default homepage of the site. within the button you see an svg that represents a house on the button itself.  */}
      <div className="btnSpace">
        <Link to="/">
          <div>
            <button
              aria-label="Home button"
              className="navBtn "
              style={{ rotate: "-45deg", margin: "0px 0px 2px 0px" }}
            >
              <div style={{ rotate: "45deg" }}>
                <svg width="28" height="28" viewBox="0 0 172 172" fill="none">
                  <path
                    d="M92.1291 2.54313C91.3298 1.7373 90.3789 1.09769 89.3312 0.661208C88.2836 0.224724 87.1598 0 86.0248 0C84.8899 0 83.7661 0.224724 82.7185 0.661208C81.6708 1.09769 80.7199 1.7373 79.9206 2.54313L2.54313 79.9207C1.7373 80.7199 1.09769 81.6708 0.661207 82.7185C0.224724 83.7662 0 84.89 0 86.0249C0 87.1599 0.224724 88.2836 0.661207 89.3313C1.09769 90.379 1.7373 91.3299 2.54313 92.1292C3.34648 92.926 4.29922 93.5564 5.34671 93.9842C6.39421 94.4121 7.51586 94.629 8.64735 94.6224H17.2449V154.805C17.2449 159.365 19.0565 163.739 22.2811 166.964C25.5058 170.188 29.8795 172 34.4399 172H137.61C142.17 172 146.544 170.188 149.769 166.964C152.993 163.739 154.805 159.365 154.805 154.805V94.6224H163.402C165.683 94.6224 167.869 93.7166 169.482 92.1043C171.094 90.4919 172 88.3051 172 86.0249C172.006 84.8934 171.79 83.7718 171.362 82.7243C170.934 81.6768 170.303 80.724 169.507 79.9207L92.1291 2.54313ZM34.4399 154.805V72.3549L86.0248 20.7698L137.61 72.3549V154.805H34.4399Z"
                    fill="orangered"
                  />
                </svg>
              </div>
            </button>
          </div>
        </Link>
        <button
          to="/menu"
          style={{ rotate: "-45deg" }}
          className="navBtn"
          aria-label="open or close the navigation menu"
          onClick={() => {
            setShowNav(!showNav);
            setHideClose(0);
          }}
        >
          <div style={{ rotate: "45deg" }}>Projects</div>
        </button>
      </div>
      <div className="btnDiv">
        {showNav && (
          <Link to="/ProjectOne">
            <button
              aria-label="Parallax text button"
              id="projectOne"
              className="navBtn "
              onClick={() => {
                setHideClose((prevHideClose) => (prevHideClose !== 1 ? 1 : 0));
              }}
            >
              <div style={{ rotate: "-45deg" }}>Parallax</div>
            </button>
          </Link>
        )}
        {showNav && hideClose === 1 && (
          <div
            aria-label="Show Parallax website"
            className="btnDiv"
            style={{ rotate: "0deg" }}
          >
            <Link to="/AboutProjOne">
              <button className="about navBtn">
                <div style={{ rotate: "-45deg" }}>Info</div>
              </button>
            </Link>
            <a
              href="https://github.com/RuneKodehode/Parallax"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button
                aria-label="Button to Parallax Github"
                className=" navBtn"
              >
                <div style={{ rotate: "-45deg" }}>Github</div>
              </button>
            </a>
          </div>
        )}
      </div>
      <div className="btnDiv">
        {showNav && (
          <Link to="/ProjectTwo">
            <button
              aria-label="Pokedex text button"
              className="navBtn "
              onClick={() => {
                setHideClose((prevHideClose) => (prevHideClose !== 2 ? 2 : 0));
              }}
            >
              <div style={{ rotate: "-45deg" }}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.3"
                    d="M15 3C21.12 3 26.175 7.575 26.91 13.5H20.82C20.145 10.905 17.79 9 15 9C12.21 9 9.855 10.905 9.195 13.5H3.09C3.825 7.575 8.88 3 15 3Z"
                    fill="orangered"
                  />
                  <path
                    d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM15 3C21.12 3 26.175 7.575 26.91 13.5H20.82C20.145 10.905 17.79 9 15 9C12.21 9 9.855 10.905 9.195 13.5H3.09C3.825 7.575 8.88 3 15 3ZM18 15C18 16.65 16.65 18 15 18C13.35 18 12 16.65 12 15C12 13.35 13.35 12 15 12C16.65 12 18 13.35 18 15ZM15 27C8.88 27 3.825 22.425 3.09 16.5H9.18C9.84 19.095 12.195 21 14.985 21C17.775 21 20.13 19.095 20.79 16.5H26.88C26.175 22.425 21.12 27 15 27Z"
                    fill="orangered"
                  />
                </svg>
              </div>
            </button>
          </Link>
        )}
        {showNav && hideClose === 2 && (
          <div className="btnDiv" style={{ rotate: "0deg" }}>
            <Link to="/AboutProjTwo">
              <button aria-label="show Pokedex" className="about navBtn">
                <div style={{ rotate: "-45deg" }}>Info</div>
              </button>
            </Link>
            <a
              href="https://github.com/RuneKodehode/Pokedex"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button aria-label="Link to Pokedex Github" className=" navBtn">
                <div style={{ rotate: "-45deg" }}> GitHub</div>
              </button>
            </a>
          </div>
        )}
      </div>
      <div className="btnDiv">
        {showNav && (
          <Link to="/Breakout">
            <button
              aria-label="Button to show Breakout text"
              id="projectOne"
              className="navBtn "
              onClick={() => {
                setHideClose((prevHideClose) => (prevHideClose !== 3 ? 3 : 0));
              }}
            >
              <div>
                <svg
                  style={{ rotate: "-45deg" }}
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.5 22H24.5327V25.5855H6.5V22Z" fill="orangered" />
                  <rect
                    y="0.47998"
                    width="5.69455"
                    height="2.42545"
                    fill="orangered"
                  />
                  <rect
                    x="6.43274"
                    y="0.47998"
                    width="5.69455"
                    height="2.42545"
                    fill="orangered"
                  />
                  <rect
                    x="19"
                    y="4"
                    width="5.69455"
                    height="2.42545"
                    fill="orangered"
                  />
                  <rect
                    x="12.8655"
                    y="0.47998"
                    width="5.69455"
                    height="2.42545"
                    fill="orangered"
                  />
                  <rect
                    y="7.43994"
                    width="5.69455"
                    height="2.42545"
                    fill="orangered"
                  />
                  <rect
                    x="6.43274"
                    y="3.95996"
                    width="5.69455"
                    height="2.42545"
                    fill="orangered"
                  />
                  <rect
                    y="3.95996"
                    width="5.69455"
                    height="2.42545"
                    fill="orangered"
                  />
                  <rect
                    x="6.43274"
                    y="7.43994"
                    width="5.69455"
                    height="2.42545"
                    fill="orangered"
                  />
                  <rect
                    x="12.8655"
                    y="7.43994"
                    width="5.69455"
                    height="2.42545"
                    fill="orangered"
                  />
                  <rect
                    x="12.8655"
                    y="3.95996"
                    width="5.69455"
                    height="2.42545"
                    fill="orangered"
                  />
                  <circle
                    cx="7.05455"
                    cy="15.0545"
                    r="1.05455"
                    fill="orangered"
                  />
                </svg>
              </div>
            </button>
          </Link>
        )}
        {showNav && hideClose === 3 && (
          <div className="btnDiv" style={{ rotate: "0deg" }}>
            <Link to="/AboutBreakout">
              <button
                aria-label="Button to Play Breakout"
                className="about navBtn"
              >
                <div style={{ rotate: "-45deg" }}>Info</div>
              </button>
            </Link>
            <a
              href="https://github.com/RuneKodehode/breakout"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button
                aria-label="Button to Breakout Github link"
                className=" navBtn"
              >
                <div style={{ rotate: "-45deg" }}>Github</div>
              </button>
            </a>
          </div>
        )}
      </div>
      <div className="btnSpace2">
        <a
          href="https://github.com/RuneKodehode?tab=repositories"
          target="_blank"
          rel="noreferrer noopener"
        >
          {" "}
          <div className="btnDiv">
            <button
              aria-label="Button to Rune's Github repository"
              className="navBtn"
            >
              <div style={{ rotate: "-45deg" }}>
                <svg
                  width="31"
                  height="30"
                  viewBox="0 0 31 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5 0C6.93625 0 2.26229e-06 6.88245 2.26229e-06 15.3798C-0.00175578 18.6084 1.02116 21.7556 2.92364 24.3749C4.82611 26.9942 7.51153 28.9526 10.5989 29.9721C11.3739 30.1059 11.6638 29.6445 11.6638 29.24C11.6638 28.8755 11.6436 27.6652 11.6436 26.3763C7.75 27.0884 6.7425 25.4351 6.4325 24.5692C6.25735 24.1263 5.5025 22.7621 4.84375 22.396C4.30125 22.1084 3.52625 21.3964 4.8236 21.3779C6.045 21.3579 6.9161 22.4929 7.2075 22.9543C8.6025 25.2797 10.8314 24.6261 11.7211 24.2232C11.8575 23.2235 12.2636 22.5514 12.71 22.1669C9.26125 21.7824 5.6575 20.4551 5.6575 14.5723C5.6575 12.899 6.25735 11.5164 7.24625 10.4383C7.09125 10.0538 6.54875 8.47734 7.40125 6.36262C7.40125 6.36262 8.6986 5.95967 11.6638 7.94058C12.9255 7.59309 14.2293 7.4182 15.5388 7.42074C16.8563 7.42074 18.1738 7.593 19.4138 7.93904C22.3773 5.93967 23.6762 6.36415 23.6762 6.36415C24.5287 8.47887 23.9863 10.0553 23.8313 10.4398C24.8186 11.5164 25.42 12.8806 25.42 14.5723C25.42 20.4751 21.7977 21.7824 18.3489 22.1669C18.91 22.6467 19.3952 23.5695 19.3952 25.0121C19.3952 27.0684 19.375 28.7217 19.375 29.2416C19.375 29.6445 19.6664 30.1244 20.4414 29.9706C23.5182 28.9398 26.1918 26.9777 28.0858 24.3603C29.9799 21.7429 30.9991 18.602 31 15.3798C31 6.88245 24.0638 0 15.5 0Z"
                    fill="orangered"
                  />
                </svg>
              </div>
            </button>
          </div>
        </a>

        <Link to="/Contact">
          <button
            aria-label="Contact information button"
            className=" navBtn"
            style={{ rotate: "-45deg" }}
          >
            <div>
              <svg
                width="29"
                height="22"
                viewBox="0 0 29 22"
                style={{ rotate: "45deg" }}
              >
                <path
                  d="M25.375 6.11111V4.88889L21.75 7.33333L18.125 4.88889V6.11111L21.4117 8.33556C21.5103 8.40127 21.6258 8.43629 21.744 8.43629C21.8621 8.43629 21.9776 8.40127 22.0763 8.33556L25.375 6.11111ZM26.5833 0H2.41667C1.0875 0 0 1.1 0 2.44444V19.5556C0 20.9 1.0875 22 2.41667 22H26.5833C27.9125 22 28.9879 20.9 28.9879 19.5556L29 2.44444C29 1.1 27.9125 0 26.5833 0ZM9.66667 3.66667C11.6725 3.66667 13.2917 5.30444 13.2917 7.33333C13.2917 9.36222 11.6725 11 9.66667 11C7.66083 11 6.04167 9.36222 6.04167 7.33333C6.04167 5.30444 7.66083 3.66667 9.66667 3.66667ZM16.9167 18.3333H2.41667V17.1111C2.41667 14.6667 7.25 13.3222 9.66667 13.3222C12.0833 13.3222 16.9167 14.6667 16.9167 17.1111V18.3333ZM25.9792 11H17.5208C17.1825 11 16.9167 10.7311 16.9167 10.3889V4.27778C16.9167 3.93556 17.1825 3.66667 17.5208 3.66667H25.9792C26.3175 3.66667 26.5833 3.93556 26.5833 4.27778V10.3889C26.5833 10.7311 26.3175 11 25.9792 11Z"
                  fill="orangered"
                />
              </svg>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export { NavBar };
