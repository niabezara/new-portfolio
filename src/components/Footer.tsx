import { Div, Container } from "../styles/Styles";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Div>
      <StyledFooter>
        <p>
          Built with React, Framer Motion and Styled Components. Coded in VS
          Code.
        </p>
        <a
          href="https://github.com/niabezara/new-portfolio"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </StyledFooter>
    </Div>
  );
};

const StyledFooter = styled(Container)`
  flex-direction: column;
  padding: 2rem;
  text-align: center;
  gap: 0.5rem;
  p {
    font-size: 0.7rem;
  }
`;
export default Footer;
