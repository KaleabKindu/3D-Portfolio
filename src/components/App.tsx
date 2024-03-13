import {
  Hero,
  NavBar,
  About,
  Contact,
  Experience,
  Feedbacks,
  TechStack,
  Works,
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
      <Works />
      <Feedbacks />
      <Contact />
    </div>
  );
};

export default App;
