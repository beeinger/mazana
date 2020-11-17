import ExitButton from "components/ExitButton";
import React from "react";
import styled from "styled-components";

function _Exit({ onClick, className, color, backgroundColor }) {
  return (
    <ExitButton
      onClick={onClick}
      className={className}
      color={color}
      backgroundColor={backgroundColor}
    />
  );
}

const Exit = styled(_Exit)`
  position: fixed;
  top: 32px;
  left: 16px;
  transform: rotate(90deg);
`;

export default Exit;
