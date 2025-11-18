import Introduction from "../components/introduction/Introduction";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";
import "./../index.css";
import Skills from "../components/skill/Skill";
import Experience from "../components/experience/Experience";

const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Skills />
        </div>
      </div>
      <div className="bg-soft-white">
        <Experience />
      </div>
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
