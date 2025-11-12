import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import Portfolio from "../components/portfolio/Portfolio";
import Profession from "../components/profession/Profession";
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

          {/* <Profile /> */}
        </div>
      </div>
      <div className="bg-soft-white">
        <Experience />
      </div>
      <Portfolio />
      <div className="bg-soft-white">
        <Profession />
      </div>
      <Contact />
    </div>
  );
};

export default Home;
