import { Description, Social, Circle } from "../styles/Styles";
import styled from "styled-components";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <StyledAboutMe>
      <motion.p>
        I’m a dedicated Front-End Developer with growing full-stack experience,
        focused on building seamless and engaging web applications. Skilled in
        JavaScript and TypeScript, I specialize in modern frameworks like React
        and Next.js to create intuitive, user-friendly interfaces. On the
        backend, I work confidently with Node.js, Express, and RESTful APIs, and
        I have experience managing databases with PostgreSQL as well as headless
        CMS integration using Strapi. Driven by clean, efficient code and a
        continuous eagerness to learn, I strive to contribute to innovative
        projects that deliver meaningful user experiences.
      </motion.p>{" "}
      <br />
      <p className="bold">Recent technologies I've used:</p>
      <Technologies>
        <Social>
          <Circle />
          <li>Node</li>
        </Social>
        <Social>
          <Circle />
          <li>Tailwind</li>
        </Social>
        <Social>
          <Circle />
          <li>Typescript</li>
        </Social>
        <Social>
          <Circle />
          <li>Nextjs</li>
        </Social>
      </Technologies>
    </StyledAboutMe>
  );
}

const StyledAboutMe = styled(Description)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 3;
  margin-right: 2rem;
  p span,
  .bold {
    font-family: var(--font-sans);
    color: var(--color-header);
  }
`;

const Technologies = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
`;

export default AboutMe;
