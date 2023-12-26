import { Description, Social, Circle } from "../styles/Styles";
import styled from "styled-components";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <StyledAboutMe>
      <motion.p>
        I'm a front-end developer with a journey that started just couple of
        months ago, transitioning
        <span> from a different profession</span>.Despite the initial
        challenges, I discovered my passion for creating captivating user
        interfaces and exceptional user experiences. My commitment to continuous
        learning drives me to craft visually appealing and functional websites,
        always embracing new opportunities to grow and improve. Additionally,
        I'm on a path to expand my skills in backend technologies, working
        towards becoming a full-stack developer
      </motion.p>{" "}
      <br />
      <p className="bold">Recent technologies I've used:</p>
      <Technologies>
        <Social>
          <Circle />
          <li>React</li>
        </Social>
        <Social>
          <Circle />
          <li>Styled-components</li>
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
