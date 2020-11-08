import ExitButton from "components/ExitButton";
import React from "react";
import styled from "styled-components";

function _Exit({ onClick, className, backgroundColor }) {
  return (
    <ExitButton
      onClick={onClick}
      className={className}
      backgroundColor={backgroundColor}
    />
  );
}

const Exit = styled(_Exit)`
  position: fixed;
  top: 16px;
  left: 16px;
`;

export default Exit;
