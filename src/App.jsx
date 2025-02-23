import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-10 p-5 scroll-smooth">
        <section id="home" className="snap-start">
          <Homepage />
        </section>
        <section id="about" className="snap-start">
          <AboutPage />
        </section>
        <section id="projects" className="snap-start">
          <ProjectPage />
        </section>
      </div>
    </>
  );
}

/*  
 - git config --global core.autocrlf true,
 - npm install gh-pages --save,
 - "homepage":"https://Hiiex09.github.io/todo-project",
 - "predeploy":"npm run build",
 - "deploy": "gh-pages -d dist",
 - npm run build
 - npm run deploy
 */

export default App;
