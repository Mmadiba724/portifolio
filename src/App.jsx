import { useState } from 'react'
import './index.css'
import LoadingScreen from "./components/LoadingScreen.jsx";
import Navbar from "./components/Navbar.jsx";
import MobileMenu from "./components/MobileMenu.jsx";
import Home from "./components/Sections/Home.jsx";
import About from "./components/Sections/About.jsx";
import Projects from "./components/Sections/Projects.jsx";
import Contact from "./components/Sections/Contact.jsx";

function App() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
          <>
              { !isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} /> }

              <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100 `} >
                  <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                  <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                  <Home />
                  <About />
                  <Projects />
                  <Contact />
              </div>
          </>
      )
}

export default App
