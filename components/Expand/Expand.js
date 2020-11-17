import React from "react";
import ExpandButton from "components/ExpandButton";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import styled from "styled-components";

function _Expand({ onClick, color, className }) {
  return (
    <ParallaxLayer className={className} offset={0.75} speed={0.5}>
      <ExpandButton onClick={onClick} color={color} />
    </ParallaxLayer>
  );
}

const Expand = styled(_Expand)`
  text-align: center;
`;

export default Expand;
