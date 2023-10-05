import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Packages from './components/Packages';
function App() {
  return (
    <div className="h-screen flex dark:bg-neutral-900 bg-white flex-col items-center w-full">
      <Navbar />
      <Intro/>
      <Skills/>
      <Projects/>
      <Packages/>
    </div>
  );
}

export default App;
