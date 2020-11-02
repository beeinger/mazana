import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";

const config = { mass: 2, tension: 375, friction: 20 };
const states = {
  still: [
    { x: 4, y: 4, height: 40, config: config },
    { x: 4, y: 48, height: 20, config: config },
    { x: 28, y: 4, height: 20, config: config },
    { x: 28, y: 28, height: 40, config: config },
    { x: 52, y: 4, height: 40, config: config },
    { x: 52, y: 48, height: 20, config: config },
  ],
  hover: [
    { x: 2, y: 2, height: 40, config: config },
    { x: 2, y: 50, height: 20, config: config },
    { x: 29, y: 2, height: 20, config: config },
    { x: 29, y: 30, height: 40, config: config },
    { x: 56, y: 2, height: 40, config: config },
    { x: 56, y: 50, height: 20, config: config },
  ],
  active: [
    { x: 2, y: 2, height: 20, config: config },
    { x: 2, y: 30, height: 40, config: config },
    { x: 29, y: 2, height: 40, config: config },
    { x: 29, y: 50, height: 20, config: config },
    { x: 56, y: 2, height: 20, config: config },
    { x: 56, y: 30, height: 40, config: config },
  ],
};

function ExpandButton({
  onClick,
  color,
  fill,
  width,
  height,
  size,
  strokeWidth,
  style,
}) {
  const [state, setState] = useState("still");
  const [rect0, setRect0] = useSpring(() => states[state][0]);
  const [rect1, setRect1] = useSpring(() => states[state][1]);
  const [rect2, setRect2] = useSpring(() => states[state][2]);
  const [rect3, setRect3] = useSpring(() => states[state][3]);
  const [rect4, setRect4] = useSpring(() => states[state][4]);
  const [rect5, setRect5] = useSpring(() => states[state][5]);

  useEffect(() => {
    setRect0(states[state][0]);
    setRect1(states[state][1]);
    setRect2(states[state][2]);
    setRect3(states[state][3]);
    setRect4(states[state][4]);
    setRect5(states[state][5]);
  }, [state]);

  return (
    <animated.svg
      width={width || height || size || "50"}
      height={height || width || size || "50"}
      viewBox="0 0 78 65"
      fill={fill || "none"}
      strokeWidth={strokeWidth || "2"}
      stroke={color || "currentColor"}
      style={{
        ...{
          cursor: "pointer",
        },
        ...(style || {}),
      }}
      onMouseEnter={() => state !== "active" && setState("hover")}
      onMouseLeave={() => setState("still")}
      onMouseDown={() => setState("active")}
      onMouseUp={() => setState("hover")}
      onTouchStart={() => setState("active")}
      onTouchEnd={() => setState("hover")}
      onClick={onClick}
    >
      <animated.rect {...rect0} width="20" rx="3" ry="3" />
      <animated.rect {...rect1} width="20" rx="3" ry="3" />
      <animated.rect {...rect2} width="20" rx="3" ry="3" />
      <animated.rect {...rect3} width="20" rx="3" ry="3" />
      <animated.rect {...rect4} width="20" rx="3" ry="3" />
      <animated.rect {...rect5} width="20" rx="3" ry="3" />
    </animated.svg>
  );
}

ExpandButton.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
};

export default ExpandButton;
