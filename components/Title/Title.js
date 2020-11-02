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
  font-size: 10vh;
  text-align: center;
`;

export default Title;
