import React from "react";
import { Parallax } from "react-spring/renderprops-addons";
import useHorizontalScroll from "context/useHorizontalScroll";
import Section from "components/Section";
import Default from "sections/Default";

const sections = [
  {
    section: Default,
    title: "Home",
    photos: [
      "1.png",
      "2.jpg",
      "3.jpg",
      "4.JPG",
      "5.JPG",
      "6.JPG",
      "1.png",
      "2.jpg",
      "1.png",
      "2.jpg",
      "1.png",
      "2.jpg",
      "1.png",
      "2.jpg",
    ],
  },
  {
    section: Default,
    title: "Home",
    backgroundColor: "#eec4c9",
    photos: ["1.png", "2.jpg"],
  },
  {
    section: Default,
    title: "Home",
    length: 3,
    photos: ["1.png", "2.jpg"],
    backgroundColor: "grey",
  },
  {
    section: Default,
    title: "Home",
    length: 3,
    photos: ["1.png", "2.jpg"],
    backgroundColor: "skyblue",
  },
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
