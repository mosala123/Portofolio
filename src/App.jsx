import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePages from "./component/homepages/HomePages";
import Navbar from "./component/navbar/Navbar";
import Projects from "./component/projects/Projects";
import ProjectsAll from "./component/projects/ProjectsAll";
import SkilsMe from "./component/skils/SkilsMe";
import AboutMe from "./component/aboutme/AboutMe";
import Contactme from "./component/contact/Contactme";
import Footer from "./component/footer/Footer";
import AllAboutMe from "./component/aboutme/AllAboutMe";
import FormContact from "./component/contact/FormContact";

function App() {
  return (
    <div
      style={{ backgroundColor: "#282C33", minHeight: "100vh", color: "white" }}
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/Portofolio/AboutMe" element={<AboutMe />} />
        <Route path="/Portofolio/AllAboutMe" element={<AllAboutMe />} />
        <Route path="/Portofolio/Contactme" element={<Contactme />} />
        <Route path="/Portofolio/FormContact" element={<FormContact />} />
        <Route path="/Portofolio/Projects" element={<Projects />} />
        <Route path="/Portofolio/ProjectsAll" element={<ProjectsAll />} />
        <Route path="/Portofolio/SkilsMe" element={<SkilsMe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
