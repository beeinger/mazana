import MenuSlider from "components/MenuSlider";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function _Menu({ current: _current, titles, colors, scrollTo, className }) {
  const oneCurrent = (current) =>
    current.length === 1 ? Object.keys(titles).indexOf(current[0]) : null;
  const [current, setCurrent] = useState(() => oneCurrent(_current));

  useEffect(() => {
    const _oneCurrent = oneCurrent(_current);
    if (_oneCurrent !== null) setCurrent(_oneCurrent);
  }, [_current]);

  return (
    <div className={className}>
      <MenuSlider {...{ current, titles, colors, scrollTo }} />
    </div>
  );
}

const Menu = styled(_Menu)`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default Menu;
