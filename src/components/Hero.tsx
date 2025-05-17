import { motion } from "framer-motion";
import styled from "styled-components";
import { Container, Description, Hide } from "../styles/Styles";
import { slideAnim, staggerAnim } from "../util/animation";
import Wave from "../assets/img/Wave";
import Lottie from "lottie-react";
import animationdata2 from "../assets/dots.json";

const HeroSection = () => {
  return (
    <StyledHero variants={staggerAnim} initial="hidden" animate="show">
      <Lottie
        animationData={animationdata2}
        style={{ position: "absolute", zIndex: "-100" }}
      />
      <Description>
        <Wrapper>
          <motion.div>
            <Hide>
              <motion.h2 variants={slideAnim.up}>Hello, I'm </motion.h2>
            </Hide>

            <Hide>
              <motion.h2 variants={slideAnim.up}>
                <span>Nia Bezarashvili</span>
              </motion.h2>
            </Hide>
          </motion.div>
          <Hide>
            <motion.p variants={slideAnim.up}>
              I'm a Front-end developer passionate about crafting web solutions
              that blend functionality and exceptional user experiences
            </motion.p>
          </Hide>
          <ButtonContainer>
            <Hide>
              <a
                href="https://github.com/niabezara"
                target="_blank"
                rel="noreferrer"
              >
                <motion.button variants={slideAnim.up}>Github</motion.button>
              </a>
            </Hide>
          </ButtonContainer>
        </Wrapper>
      </Description>
      <Wave />
    </StyledHero>
  );
};

const StyledHero = styled(Container)`
  position: relative;
  min-height: 100vh;
  max-width: none;
  p {
    padding: 0 0 1.5rem;
  }
  h2 {
    font-size: 1.2rem;
    font-weight: lighter;
    margin-bottom: 0rem;
    span {
      font-family: "Poppins", sans-serif;
      font-size: 4rem;
      font-weight: 800;
    }
  }
  @media (max-width: 850px) {
    h2 {
      span {
        font-size: 2.5rem;
      }
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;

export default HeroSection;
