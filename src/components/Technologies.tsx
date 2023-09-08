import styled from "styled-components";
import { Div } from "../styles/Styles";
import Lottie from "lottie-react";
import anim1 from "../assets/anim1.json";
import { desktopIconsData, MobileIconsData } from "../util/icons";

const Technologies = () => {
  const isMobile = window.innerWidth < 400;

  const iconsData = isMobile ? MobileIconsData : desktopIconsData;

  return (
    <Div>
      <Header>SKILLS</Header>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {iconsData.map((icon) => (
          <ReactIcon
            key={icon.id}
            src={icon.iconUrl}
            alt={`Icon ${icon.id}`}
            style={{
              animation: "fly 2s ease-in-out infinite",
              position: "absolute",
              left: icon.left,
              right: icon.right,
              top: icon.top,
              width: icon.width,
              height: icon.height,
            }}
          />
        ))}
        {/* <ReactIcon
          src="/react.png"
          alt=""
          style={{
            width: "50px",
            height: "50px",
            , // Apply the animation
          }} */}

        <Lottie animationData={anim1} style={{ width: "50%", height: "50%" }} />
      </div>
    </Div>
  );
};

export default Technologies;
const Header = styled.h3`
  margin-bottom: 4rem;
  text-align: center;
`;

const ReactIcon = styled.img`
  @keyframes fly {
    0% {
      transform: translateY(0); /* Starting position */
    }
    50% {
      transform: translateY(
        -20px
      ); /* Midway position, adjust the value as needed */
    }
    100% {
      transform: translateY(
        0
      ); /* Ending position, back to the original position */
    }
  }
`;
