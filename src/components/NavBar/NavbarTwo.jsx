import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
function NavBarTwo() {
  return (
    <div className="grid row-start-1 col-start-3 col-end-2  sm:col-end-3 w-auto">
      <div className="flex flex-row self-start justify-self-end text-white sm:flex-col">
        <a
          href="https://github.com/RuneKodehode?tab=repositories"
          target="_blank"
          rel="noreferrer noopener"
          className="w-10 h-10 sm:w-32 sm:h-16"
        >
          {" "}
          <button
            id="githubBtn"
            aria-label="Button to Rune's Github repository"
            className="w-10 h-10 sm:w-32 sm:h-16 bg-black rounded-lg border hover:bg-zinc-800 active:animate-ping"
          >
            <AiFillGithub className="w-full h-full" />
          </button>
        </a>
        <Link to="/Contact" className="border-solid w-10 h-10 sm:w-32 sm:h-16">
          <button
            id="contactBtn"
            aria-label="Contact information button"
            className="border rounded-lg text-white text-center  text-xs w-16 h-10 sm:w-32 sm:h-16 sm:text-xl bg-black hover:bg-zinc-800 active:animate-ping"
          >
            contact
          </button>
        </Link>
      </div>
    </div>
  );
}

export { NavBarTwo };
