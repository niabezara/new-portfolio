import styled from "styled-components";
import { motion } from "framer-motion";
import Features from "../components/Features";
import Archive from "../components/Archive";

const technologies1 = ["Typescript", "React", "Rest-api", "Router"];

const technologies2 = ["Three.js", "Canvas", "React", "Typescript"];

function Projects() {
  return (
    <StyledProjects id="projects">
      <Header>
        <span>02.</span> PROJECTS
      </Header>
      <FeaturedContainer>
        <Features
          image="/planets.jpg"
          title="Planet Facts"
          text="Developed an engaging web application using React.ts that offers users a captivating exploration of our solar system. With a focus on interactivity and aesthetics, I integrated styled-components for a visually appealing design. The application features a solar system animation, seamless navigation through React Router, and dynamic planet facts sourced from external APIs. This project highlights my proficiency in web development, design, and animation while providing an educational and enjoyable user experience.  "
          link="https://github.com/niabezara/Planet-facts-React-Router"
          technologies={technologies1}
          video={""}
        />
        <Features
          image="3D.jpg"
          title="3D Portfolio"
          text="Designed and developed a captivating 3D portfolio using React.ts and Three.js. This unique web application blends creative design and interactive 3D graphics, offering visitors an immersive and visually stunning experience. Leveraging TypeScript, I ensured code quality and seamless interaction, making it an engaging showcase of my skills in web development, design, and 3D graphics."
          link="https://github.com/niabezara/3D-portfolio"
          technologies={technologies2}
          video={""}
        />
      </FeaturedContainer>
      <Archive />
    </StyledProjects>
  );
}

const StyledProjects = styled(motion.div)`
  max-width: 1080px;
  padding: 5rem 2rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled(motion.h2)`
  padding-bottom: 2rem;
  display: inline-block;
`;

const FeaturedContainer = styled(motion.div)``;

export default Projects;
