import { NavBar } from "./components/NavBar/NavBar.jsx";
import { NavBarTwo } from "./components/NavBar/NavbarTwo.jsx";
import { Home } from "./Pages/Home";
import { ProjectOne } from "./Pages/ProjectOne";
import { ProjectTwo } from "./Pages/ProjectTwo";
import { AboutProjOne } from "./Pages/AboutProjOne.jsx";
import { AboutProjTwo } from "./Pages/AboutProjTwo.jsx";
import { AboutBreakout } from "./Pages/AboutBreakout.jsx";
import { Breakout } from "./Pages/Breakout.jsx";
import { Rune } from "./components/svg/rune.jsx";
import { Contact } from "./Pages/Contact.jsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div className="grid grid-rows-[150px_minmax(5px,_1fr)_200px] grid-cols-3 w-screen h-screen">
          <Rune />
          <NavBar />
          <NavBarTwo />
          <div className="row-start-2 col-start-1 col-span-3 mb-32">
            <div className="w-full ">
              <Routes>
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
        </div>
      </Router>
    </div>
  );
}

export default App;
