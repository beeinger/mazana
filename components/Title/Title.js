import React from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import styled from "styled-components";

function _Title({ title, className }) {
  return (
    <ParallaxLayer offset={0.25} speed={0.35}>
      <div className={className}>{title}</div>
    </ParallaxLayer>
  );
}

const Title = styled(_Title)`
  text-align: center;
  color: ${({ color }) => color || "currentColor"};

  font-size: 10vh;
  @media screen and (max-width: 992px) {
    font-size: 8vh;
  }
  @media screen and (max-width: 600px) {
    font-size: 6vh;
  }
`;

export default Title;
