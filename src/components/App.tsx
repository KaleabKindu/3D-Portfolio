import {
  Hero,
  NavBar,
  About,
  Contact,
  Experience,
  Projects,
  Feedbacks,
  TechStack,
} from ".";
import StarsCanvas from "./canvas/StarsCanvas";

const App = () => {
  return (
    <div className=" flex flex-col w-full gap-10">
      <StarsCanvas />
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <TechStack />
      <Projects />
      <Feedbacks />
      <Contact />
    </div>
  );
};

export default App;
