import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
function NavBarTwo() {
  return (
    <div className="flex flex-col h-10 w-20 text-white" id="contact">
      <a
        href="https://github.com/RuneKodehode?tab=repositories"
        target="_blank"
        rel="noreferrer noopener"
        className="w-16 h-10"
      >
        {" "}
        <button
          id="githubBtn"
          aria-label="Button to Rune's Github repository"
          className="w-16 h-10"
        >
          <AiFillGithub className="w-full h-full" />
        </button>
      </a>
      <Link to="/Contact" className="border-solid w-16 h-10">
        <button
          id="contactBtn"
          aria-label="Contact information button"
          className="order-solid border-2 border-white-300 w-16 h-10 rounded-lg text-white text-center  text-xs"
        >
          contact
        </button>
      </Link>
    </div>
  );
}

export { NavBarTwo };
