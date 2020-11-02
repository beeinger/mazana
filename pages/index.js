import React, { useEffect } from "react";
import { Parallax } from "react-spring/renderprops-addons";
import useHorizontalScroll from "context/useHorizontalScroll";
import Section from "components/Section";
import Home from "sections/Home";

const sections = [
  { speed: 0.25, section: Home, length: 2 },
  { speed: 0.25, section: Home, length: 2, backgroundColor: "#eec4c9" },
  { speed: 0.25, section: Home, length: 2, backgroundColor: "grey" },
  { speed: 0.25, section: Home, length: 2, backgroundColor: "skyblue" },
  { speed: 0.25, section: Home, length: 2, backgroundColor: "white" },
  { speed: 0.25, section: Home, length: 2, backgroundColor: "gold" },
];

export default function index() {
  const { focused, focus, clearFocus, setParallax } = useHorizontalScroll();

  return (
    <Parallax
      pages={sections.length * 1.1 - 0.05}
      horizontal
      ref={(ref) => setParallax(ref)}
      scrolling={focused === false}
    >
      {sections.map((val, idx) => (
        <Section
          {...{
            ...{
              focused,
              focus,
              clearFocus,
              key: "section_" + idx,
              id: idx,
              pagesCount: sections.length,
            },
            ...val,
          }}
        />
      ))}
    </Parallax>
  );
}
