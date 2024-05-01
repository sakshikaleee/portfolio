import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import myPortfolio from "../public/img/projects/portfoliolong.png";
import cyberBlog from "../public/img/projects/streamifylong.png";
import reactBD from "../public/img/projects/roomroverlong.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={myPortfolio.src}
          title="My Portfolio"
          link="/"
        />
        <ProjectCard
          img={reactBD.src}
          title="RoomRover"
          link="https://roomrover-psi.vercel.app/"
        />
        <ProjectCard
          img={cyberBlog.src}
          title="Streamify"
          link="https://streamify-sigma-two.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
