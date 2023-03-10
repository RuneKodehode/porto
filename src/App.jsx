import { NavBar } from "./components/NavBar/NavBar.jsx";
import { NavBarTwo } from "./components/NavBar/NavbarTwo.jsx";
import { Home } from "./components/Pages/Home";
import { ProjectOne } from "./components/Pages/ProjectOne";
import { ProjectTwo } from "./components/Pages/ProjectTwo";
import { AboutProjOne } from "./components/Pages/AboutProjOne.jsx";
import { AboutProjTwo } from "./components/Pages/AboutProjTwo.jsx";
import { AboutBreakout } from "./components/Pages/AboutBreakout.jsx";
import { Breakout } from "./components/Pages/Breakout.jsx";
import { Rune } from "./components/svg/rune.jsx";
import { Contact } from "./components/Pages/Contact.jsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Router>
        <div className="grid sm:grid-rows-[15%_minmax(150px,_auto)_20px] grid-rows-[15%_minmax(150px,_auto)_150px] grid-cols-[7%_minmax(5px,_2fr)_7%] sm:grid-cols-[16%_minmax(5px,_2fr)_16%]  h-screen">
          <Rune />
          <NavBar />
          <NavBarTwo />
          <div className="grid row-start-2 col-start-1 col-span-3 sm:col-span-1 sm:col-start-2 pb-2.5">
            <Routes className="flex">
              <Route path="/" element={<Home />} />
              <Route path="/ProjectOne" element={<ProjectOne />} />
              <Route path="/ProjectTwo" element={<ProjectTwo />} />
              <Route path="/AboutProjOne" element={<AboutProjOne />} />
              <Route path="/AboutProjTwo" element={<AboutProjTwo />} />
              <Route path="/AboutBreakout" element={<AboutBreakout />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Breakout" element={<Breakout />} />
              <Route
                path="*"
                element={
                  <div>
                    <h1>404</h1> <p>Page not found</p>
                  </div>
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
