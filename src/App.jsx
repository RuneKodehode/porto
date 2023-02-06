import { NavBar } from "./components/NavBar/NavBar.jsx";
import { Icons } from "./components/Icons/Icons.jsx";
import { Home } from "./Pages/Home";
import { ProjectOne } from "./Pages/ProjectOne";
import { ProjectTwo } from "./Pages/ProjectTwo";
import { Rune } from "./components/svg/rune.jsx";
import { Contact } from "./Pages/Contact.jsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div id="header">
          <Rune />

          <NavBar />
          <div className="pitch">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ProjectOne" element={<ProjectOne />} />
              <Route path="/ProjectTwo" element={<ProjectTwo />} />
              <Route path="/Contact" element={<Contact />} />
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
          <Icons />
        </div>
      </Router>
    </div>
  );
}

export default App;
