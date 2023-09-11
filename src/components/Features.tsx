import styled from "styled-components";
import { Technologies } from "../styles/Styles";
import { motion } from "framer-motion";

interface FeaturedProps {
  title: string;
  video: string;
  text: string;
  link: string;
  image: string;
  technologies: string[];
}

function Featured({ title, image, text, link, technologies }: FeaturedProps) {
  return (
    <FeaturedProject>
      <Image>
        <Img src={image} alt={title} />
      </Image>
      <About>
        <Header>
          <p>Featured</p>
          <a href={link} target="_blank" rel="noreferrer">
            <h3>{title}</h3>
          </a>
        </Header>
        <AboutText>
          <p>{text}</p>
        </AboutText>
        <More>
          <Technologies>
            {technologies?.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </Technologies>
          <a href={link} target="_blank" rel="noreferrer">
            <img src="/code.svg" alt="" style={{ width: "20px" }} />
          </a>
        </More>
      </About>
    </FeaturedProject>
  );
}

const FeaturedProject = styled(motion.div)`
  margin-bottom: 4rem;
  @media (min-width: 850px) {
    display: flex;
  }
`;

const Header = styled.div`
  padding: 1rem 2rem;
  p {
    font-weight: bold;
    font-size: 0.7rem;
    color: var(--color-main);
  }
`;
const AboutText = styled.div`
  padding: 2rem;
  background: var(--color-bg-2);
`;
const More = styled.div`
  padding: 1rem;
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

const About = styled.div`
  flex: 1;
`;

const Image = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export default Featured;
