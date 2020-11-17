import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

function _Title({
  children,
  id,
  position,
  current,
  colors: _colors,
  scrollTo,
  className,
}) {
  const config = { mass: 2, tension: 375, friction: 20 };
  const [isCurrent, setIsCurrent] = useState(current === id);
  const [colors, setColors] = useState({
    top: _colors[0][0],
    bottom: _colors[0][1],
  });
  const [themes, setThemes] = useState({
    top: {
      background: `-webkit-linear-gradient(90deg, ${colors.top} 0%, ${colors.top} 50%, ${colors.top} 100%)`,
      textShadow: `0px 0px 1px ${colors.bottom}`,
      config,
    },
    bottom: {
      background: `-webkit-linear-gradient(90deg, ${colors.bottom} 0%, ${colors.bottom} 50%, ${colors.bottom} 100%)`,
      textShadow: `0px 0px 1px ${colors.top}`,
      config,
    },
  });

  const [props, set] = useSpring(() =>
    position === "top" ? themes.top : themes.bottom
  );

  useEffect(() => {
    console.log(current);
    if (current === id) setIsCurrent(true);
    else setIsCurrent(false);
    if (current !== null)
      setColors({ top: _colors[current][0], bottom: _colors[current][1] });
  }, [current]);

  useEffect(() => {
    setThemes({
      top: {
        background: `-webkit-linear-gradient(90deg, ${colors.top} 0%, ${colors.top} 50%, ${colors.top} 100%)`,
        textShadow: `0px 0px 1px ${colors.bottom}`,
        config,
      },
      bottom: {
        background: `-webkit-linear-gradient(90deg, ${colors.bottom} 0%, ${colors.bottom} 50%, ${colors.bottom} 100%)`,
        textShadow: `0px 0px 1px ${colors.top}`,
        config,
      },
    });
  }, [colors]);

  useEffect(() => {
    if (isCurrent) set(position === "bottom" ? themes.top : themes.bottom);
    else set(position === "top" ? themes.top : themes.bottom);
  }, [themes]);

  const handleClick = () => scrollTo(id);

  return (
    <animated.span className={className} style={props} onClick={handleClick}>
      {children}
    </animated.span>
  );
}

const Title = styled(_Title)`
  cursor: pointer;
  text-shadow: #fff 0px 0px 5px, #fff 0px 0px 10px, #fff 0px 0px 15px,
    #ff2d95 0px 0px 20px, #ff2d95 0px 0px 30px, #ff2d95 0px 0px 40px,
    #ff2d95 0px 0px 50px, #ff2d95 0px 0px 75px;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
`;

function MenuSlider({ current, titles, colors, scrollTo }) {
  console.log(colors);
  const topTitles = (title, idx) => (
    <Title
      position="top"
      id={idx}
      colors={colors}
      current={current}
      scrollTo={scrollTo}
    >
      {title}
    </Title>
  );

  const bottomTitles = (title, idx) => (
    <Title
      position="bottom"
      id={idx}
      colors={colors}
      current={current}
      scrollTo={scrollTo}
    >
      {title}
    </Title>
  );

  return (
    <_MenuSlider>
      <div>{titles.map(topTitles)}</div>
      <div>{titles.map(bottomTitles)}</div>
    </_MenuSlider>
  );
}

const _MenuSlider = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding-top: 8px;

  font-size: 1.2em;
  > * > :not(:last-child) {
    margin-right: 8px;
  }

  @media screen and (max-width: 992px) {
    font-size: 1em;
    > * > :not(:last-child) {
      margin-right: 6px;
    }
  }

  @media screen and (max-width: 600px) {
    font-size: 0.6em;
    > * > :not(:last-child) {
      margin-right: 4px;
    }
  }

  > :nth-child(2) {
    margin-top: -0.6em;
    transform: scale(1, -1);
  }
`;

export default MenuSlider;
