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

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex flex-col w-full gap-10">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center h-[100vh]">
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
