import { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Packages from "./components/Packages";
import Popup from "./components/Popup";

export const popupContext = createContext();

function App() {
  const [popup, setPopup] = useState(false);

  return (
    <div className="h-screen flex dark:bg-neutral-900 bg-white flex-col items-center w-full">
      <popupContext.Provider value={setPopup}>
        <Navbar />
        <Intro />
        <Skills />
        <Projects />
        <Packages />
        {popup ? <Popup /> : null}
        <Footer />
      </popupContext.Provider>
    </div>
  );
}

export default App;
