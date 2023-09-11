import styled from "styled-components";
import { Container, Div } from "../styles/Styles";
import Techstack from "../components/TechStack";
import { motion } from "framer-motion";
import {
  faCode,
  faDatabase,
  faRuler,
} from "@fortawesome/fontawesome-free-solid";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const backend = {
  title: "BACK END",
  technologies: ["Cs50", "NodeJS", "TypeScript", "Prisma"],
};

const frontend = {
  title: "FRONT END",
  technologies: ["HTML5", "CSS3", "JavaScript", "React/Redux", "NextJS"],
};

const database = {
  title: "DATABASE",
  technologies: ["MongoDB"],
};

const styling = {
  title: "STYLING",
  technologies: ["Css Modules", "TailwindCSS", "Styled Components"],
};

const Technologies = () => {
  return (
    <Div>
      <StyledTechnologies>
        <Header>TECHNOLOGIES I'VE USED</Header>
        <Grid>
          <Techstack
            icon={faCode}
            title={backend.title}
            technologies={backend.technologies}
          />
          <Techstack
            icon={faLaptopCode}
            title={frontend.title}
            technologies={frontend.technologies}
          />
          <Techstack
            icon={faDatabase}
            title={database.title}
            technologies={database.technologies}
          />
          <Techstack
            icon={faRuler}
            title={styling.title}
            technologies={styling.technologies}
          />
        </Grid>
      </StyledTechnologies>
    </Div>
  );
};

const StyledTechnologies = styled(Container)`
  flex-direction: column;
`;

const Header = styled.h3`
  margin-bottom: 4rem;
`;

const Grid = styled(motion.div)`
  width: 100%;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  text-align: center;
`;

export default Technologies;
