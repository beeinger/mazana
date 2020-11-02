import React from "react";
import ExpandButton from "components/ExpandButton";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import styled from "styled-components";

function _Expand({ onClick, className }) {
  return (
    <ParallaxLayer className={className} offset={0.75} speed={0.5}>
      <ExpandButton onClick={onClick} />
    </ParallaxLayer>
  );
}

const Expand = styled(_Expand)`
  text-align: center;
`;

export default Expand;
