import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";
import Color from "color";

const config = { mass: 1, tension: 110, friction: 20, velocity: 15 };

function ExitButton({
  onClick,
  color,
  backgroundColor,
  width,
  height,
  size,
  strokeWidth = 2,
  style,
  className,
}) {
  color = Color(color || "black");
  backgroundColor = Color(backgroundColor || "white");

  const states = {
    init: [
      {
        from: {
          d: "M47 75 L47 75 L47 75",
          stroke: backgroundColor.isDark()
            ? backgroundColor.negate().darken(0.5).rgb().string()
            : backgroundColor.darken(0.5).rgb().string(),
          strokeWidth: strokeWidth + 0.5,
        },
        to: [
          {
            d: "M47 75 L25 50 L25 50",
            stroke: backgroundColor.isDark()
              ? backgroundColor.negate().darken(0.5).rgb().string()
              : backgroundColor.darken(0.5).rgb().string(),
            strokeWidth: strokeWidth + 0.25,
          },
          {
            d: "M47 75 L25 50 L47 25",
            stroke: backgroundColor.isDark()
              ? backgroundColor.negate().darken(0.5).rgb().string()
              : backgroundColor.darken(0.5).rgb().string(),
            strokeWidth: strokeWidth + 0.5,
          },
        ],
        config,
      },
      {
        d: "M47 75 L47 75 L47 75",
        stroke: color.rgb().string(),
        strokeWidth,
        config,
      },
      {
        d: "M47 75 L47 75 M47 25 L47 25",
        stroke: backgroundColor.isLight()
          ? backgroundColor.lighten(0.1).rgb().string()
          : backgroundColor.darken(0.25).rgb().string(),
        strokeWidth: strokeWidth + 2,
        config,
      },
    ],
    still: [
      {
        d: "M47 75 L25 50 L47 25",
        stroke: backgroundColor.isDark()
          ? backgroundColor.negate().darken(0.5).rgb().string()
          : backgroundColor.darken(0.5).rgb().string(),
        strokeWidth: strokeWidth + 0.5,
        config,
      },
      {
        to: [
          {
            d: "M47 75 L25 50 L25 50",
            stroke: color.rgb().string(),
            strokeWidth: strokeWidth + 1,
          },
          {
            d: "M47 75 L47 75 L47 75",
            stroke: color.rgb().string(),
            strokeWidth,
          },
        ],
        config,
      },
      {
        d: "M47 75 L47 75 M47 25 L47 25",
        stroke: backgroundColor.isLight()
          ? backgroundColor.lighten(0.1).rgb().string()
          : backgroundColor.darken(0.25).rgb().string(),
        strokeWidth: strokeWidth + 2,
        config,
      },
    ],
    hover: [
      {
        d: "M47 75 L25 50 L47 25",
        stroke: backgroundColor.isDark()
          ? backgroundColor.negate().darken(0.5).rgb().string()
          : backgroundColor.darken(0.5).rgb().string(),
        strokeWidth: strokeWidth + 2,
        config,
      },
      {
        to: [
          {
            d: "M47 75 L25 50 L25 50",
            stroke: color.rgb().string(),
            strokeWidth: strokeWidth + 1,
          },
          {
            d: "M47 75 L25 50 L47 25",
            stroke: color.rgb().string(),
            strokeWidth: strokeWidth + 2,
          },
        ],
        config,
      },
      {
        d: "M47 75 L47 75 M47 25 L47 25",
        stroke: backgroundColor.isLight()
          ? backgroundColor.lighten(0.1).rgb().string()
          : backgroundColor.darken(0.25).rgb().string(),
        strokeWidth: strokeWidth + 2,
        config,
      },
    ],
    active: [
      {
        d: "M47 75 L25 50 L47 25",
        stroke: backgroundColor.isDark()
          ? backgroundColor.negate().darken(0.5).rgb().string()
          : backgroundColor.darken(0.5).rgb().string(),
        strokeWidth: strokeWidth + 0.5,
        config,
      },
      {
        d: "M47 75 L25 50 L47 25",
        stroke: color.rgb().string(),
        strokeWidth: strokeWidth + 2,
        config,
      },
      {
        to: {
          d: "M47 75 L25 50 M47 25 L25 50",
          stroke: backgroundColor.isLight()
            ? backgroundColor.lighten(0.1).rgb().string()
            : backgroundColor.darken(0.25).rgb().string(),
          strokeWidth: strokeWidth + 2,
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
      fill="none"
      strokeWidth={strokeWidth || "2"}
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
