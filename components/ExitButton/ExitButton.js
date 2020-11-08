import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";

const config = { mass: 1, tension: 110, friction: 20, velocity: 15 };

function ExitButton({
  onClick,
  color,
  fill,
  width,
  height,
  size,
  strokeWidth = 2,
  style,
  className,
}) {
  const states = {
    init: [
      {
        from: {
          d: "M47 75 L47 75 L47 75",
          stroke: "rgba(0,0,0,0.5)",
          strokeWidth,
        },
        to: [
          { d: "M47 75 L25 50 L25 50", stroke: "rgba(0,0,0,0.5)", strokeWidth },
          { d: "M47 75 L25 50 L47 25", stroke: "rgba(0,0,0,0.5)", strokeWidth },
        ],
        config,
      },
      { d: "M47 75 L47 75 L47 75", stroke: "black", strokeWidth, config },
      {
        d: "M47 75 L47 75 M47 25 L47 25",
        stroke: "rgba(255, 255, 255, 0.9)",
        strokeWidth: strokeWidth + 1,
        config,
      },
    ],
    still: [
      {
        d: "M47 75 L25 50 L47 25",
        stroke: "rgba(0,0,0,0.5)",
        strokeWidth,
        config,
      },
      {
        to: [
          {
            d: "M47 75 L25 50 L25 50",
            stroke: "black",
            strokeWidth: strokeWidth + 0.5,
          },
          { d: "M47 75 L47 75 L47 75", stroke: "black", strokeWidth },
        ],
        config,
      },
      {
        d: "M47 75 L47 75 M47 25 L47 25",
        stroke: "rgba(255, 255, 255, 0.9)",
        strokeWidth: strokeWidth + 1,
        config,
      },
    ],
    hover: [
      {
        d: "M47 75 L25 50 L47 25",
        stroke: "rgba(0,0,0,0.5)",
        strokeWidth: strokeWidth + 1,
        config,
      },
      {
        to: [
          {
            d: "M47 75 L25 50 L25 50",
            stroke: "black",
            strokeWidth: strokeWidth + 0.5,
          },
          {
            d: "M47 75 L25 50 L47 25",
            stroke: "black",
            strokeWidth: strokeWidth + 1,
          },
        ],
        config,
      },
      {
        d: "M47 75 L47 75 M47 25 L47 25",
        stroke: "rgba(255, 255, 255, 0.9)",
        strokeWidth: strokeWidth + 1,
        config,
      },
    ],
    active: [
      {
        d: "M47 75 L25 50 L47 25",
        stroke: "rgba(0,0,0,0.5)",
        strokeWidth,
        config,
      },
      {
        d: "M47 75 L25 50 L47 25",
        stroke: "black",
        strokeWidth: strokeWidth + 1,
        config,
      },
      {
        to: {
          d: "M47 75 L25 50 M47 25 L25 50",
          stroke: "rgba(255, 255, 255, 0.9)",
          strokeWidth: strokeWidth + 1,
        },
        config,
      },
    ],
  };
  const [state, setState] = useState();
  const [line0, setLine0] = useSpring(() => states.init[0]);
  const [line1, setLine1] = useSpring(() => states.init[1]);
  const [line2, setLine2] = useSpring(() => states.init[2]);

  useEffect(() => {
    if (!state) return;
    setLine0(states[state][0]);
    setLine1(states[state][1]);
    setLine2(states[state][2]);
  }, [state]);

  return (
    <animated.svg
      width={width || height || size || "50"}
      height={height || width || size || "50"}
      viewBox="0 0 100 100"
      fill={fill || "none"}
      strokeWidth={strokeWidth || "2"}
      stroke={color || "currentColor"}
      style={{
        ...{
          cursor: "pointer",
        },
        ...(style || {}),
      }}
      className={className}
      onMouseEnter={() => state !== "active" && setState("hover")}
      onMouseLeave={() => setState("still")}
      onMouseDown={() => setState("active")}
      onMouseUp={() => setState("hover")}
      onTouchStart={() => setState("active")}
      onTouchEnd={() => setState("hover")}
      onClick={onClick}
    >
      <animated.path {...line0} />
      <animated.path {...line1} />
      <animated.path {...line2} />
    </animated.svg>
  );
}

ExitButton.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ExitButton;
