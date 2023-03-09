import { NavBar } from "./components/NavBar/NavBar.jsx";
import { NavBarTwo } from "./components/NavBar/navbar2.jsx";
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
    <div className="App">
      <Router>
        <div id="header" className="">
          <Rune />
          <NavBar />
          <NavBarTwo />
          <div
            className="self-center justify-self-center  text-center "
            id="pitch"
          >
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
      </Router>
    </div>
  );
}

export default App;
