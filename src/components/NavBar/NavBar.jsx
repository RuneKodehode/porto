import { useState } from "react";
import { Link } from "react-router-dom";
function NavBar() {
  const [showNav, setShowNav] = useState(false);
  const [showProj, setShowProj] = useState(false);
  const [showProjTwo, setShowProjTwo] = useState(false);

  return (
    <div id="navId">
      <Link to="/">
        <div>
          <button className="navBtn ">
            <svg
              width="30"
              height="30"
              viewBox="0 0 172 172"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M92.1291 2.54313C91.3298 1.7373 90.3789 1.09769 89.3312 0.661208C88.2836 0.224724 87.1598 0 86.0248 0C84.8899 0 83.7661 0.224724 82.7185 0.661208C81.6708 1.09769 80.7199 1.7373 79.9206 2.54313L2.54313 79.9207C1.7373 80.7199 1.09769 81.6708 0.661207 82.7185C0.224724 83.7662 0 84.89 0 86.0249C0 87.1599 0.224724 88.2836 0.661207 89.3313C1.09769 90.379 1.7373 91.3299 2.54313 92.1292C3.34648 92.926 4.29922 93.5564 5.34671 93.9842C6.39421 94.4121 7.51586 94.629 8.64735 94.6224H17.2449V154.805C17.2449 159.365 19.0565 163.739 22.2811 166.964C25.5058 170.188 29.8795 172 34.4399 172H137.61C142.17 172 146.544 170.188 149.769 166.964C152.993 163.739 154.805 159.365 154.805 154.805V94.6224H163.402C165.683 94.6224 167.869 93.7166 169.482 92.1043C171.094 90.4919 172 88.3051 172 86.0249C172.006 84.8934 171.79 83.7718 171.362 82.7243C170.934 81.6768 170.303 80.724 169.507 79.9207L92.1291 2.54313ZM34.4399 154.805V72.3549L86.0248 20.7698L137.61 72.3549V154.805H34.4399Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </Link>
      <div>
        <button
          to="/menu"
          className="navBtn"
          onClick={() => {
            setShowNav(!showNav);
          }}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 139 93"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.72222 93H131.278C135.525 93 139 89.5125 139 85.25C139 80.9875 135.525 77.5 131.278 77.5H7.72222C3.475 77.5 0 80.9875 0 85.25C0 89.5125 3.475 93 7.72222 93ZM7.72222 54.25H131.278C135.525 54.25 139 50.7625 139 46.5C139 42.2375 135.525 38.75 131.278 38.75H7.72222C3.475 38.75 0 42.2375 0 46.5C0 50.7625 3.475 54.25 7.72222 54.25ZM0 7.75C0 12.0125 3.475 15.5 7.72222 15.5H131.278C135.525 15.5 139 12.0125 139 7.75C139 3.4875 135.525 0 131.278 0H7.72222C3.475 0 0 3.4875 0 7.75Z"
              fill="black"
            />
          </svg>
        </button>
      </div>

      <div className="btnDiv">
        {showNav && (
          <button
            id="projectOne"
            className="navBtn "
            onClick={() => {
              setShowProj(!showProj);
            }}
          >
            Parallax
          </button>
        )}
        {showProj && showNav && (
          <div className="btnDiv">
            <Link to="/ProjectOne">
              <button className="about navBtn">Show</button>
            </Link>
            <a
              href="https://github.com/RuneKodehode/Parallax"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className=" navBtn">Link</button>
            </a>
          </div>
        )}
      </div>
      <div className="btnDiv">
        {showNav && (
          <button
            className="navBtn "
            onClick={() => {
              setShowProjTwo(!showProjTwo);
            }}
          >
            proj-2
          </button>
        )}
        {showProjTwo && showNav && (
          <div className="btnDiv">
            <Link to="/ProjectTwo">
              <button className="about navBtn">About</button>
            </Link>
            <a
              href="https://github.com/RuneKodehode/Portfolio"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className=" navBtn">GitHub</button>
            </a>
          </div>
        )}
      </div>
      {showNav && (
        <a
          href="https://github.com/RuneKodehode?tab=repositories"
          target="_blank"
          rel="noreferrer noopener"
        >
          {" "}
          <div className="btnDiv">
            <button className="navBtn">
              <svg
                width="40"
                height="40"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="256" cy="272" r="219" fill="#756E6E" />
                <path
                  d="M256 32C132.3 32 32 134.9 32 261.7C32 363.2 96.2 449.2 185.2 479.6C186.448 479.871 187.723 480.005 189 480C197.3 480 200.5 473.9 200.5 468.6C200.5 463.1 200.3 448.7 200.2 429.5C192.79 431.237 185.21 432.143 177.6 432.2C134.5 432.2 124.7 398.7 124.7 398.7C114.5 372.2 99.8 365.1 99.8 365.1C80.3 351.4 99.7 351 101.2 351H101.3C123.8 353 135.6 374.8 135.6 374.8C146.8 394.4 161.8 399.9 175.2 399.9C184.06 399.723 192.784 397.678 200.8 393.9C202.8 379.1 208.6 369 215 363.2C165.3 357.4 113 337.7 113 249.7C113 224.6 121.7 204.1 136 188.1C133.7 182.3 126 158.9 138.2 127.3C139.836 126.908 141.518 126.74 143.2 126.8C151.3 126.8 169.6 129.9 199.8 150.9C236.495 140.633 275.305 140.633 312 150.9C342.2 129.9 360.5 126.8 368.6 126.8C370.282 126.74 371.964 126.908 373.6 127.3C385.8 158.9 378.1 182.3 375.8 188.1C390.1 204.2 398.8 224.7 398.8 249.7C398.8 337.9 346.4 357.3 296.5 363C304.5 370.1 311.7 384.1 311.7 405.5C311.7 436.2 311.4 461 311.4 468.5C311.4 473.9 314.5 480 322.8 480C324.144 480.006 325.484 479.872 326.8 479.6C415.9 449.2 480 363.1 480 261.7C480 134.9 379.7 32 256 32Z"
                  fill="url(#paint0_linear_2_6)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_6"
                    x1="-28"
                    y1="256"
                    x2="527"
                    y2="247"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F9CDC3" />
                    <stop offset="1" stopColor="#FACEFB" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </div>
        </a>
      )}
      {showNav && (
        <Link to="/Contact">
          <button className=" navBtn">Contact</button>
        </Link>
      )}
    </div>
  );
}

export { NavBar };
