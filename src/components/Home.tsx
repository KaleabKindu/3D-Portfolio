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

const Home = () => {
  return (
    <div className="flex flex-col w-full gap-10">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <NavBar />
        <Hero />
      </div>
      <About />
      <Experience />
      <TechStack />
      <Works />
      <Feedbacks />
      <Contact />
    </div>
  );
};

export default Home;
