import React from "react";
import { Parallax } from "react-spring/renderprops-addons";
import { useMenu, useParallaxScrolling } from "hooks";
import Section from "components/Section";
import Menu from "components/Menu";

export default function GenerateParallax({ sections, setTitle }) {
  const titles = sections.map((val) => val.title);
  const colors = sections.map((val) => [
    val.color || "white",
    val.backgroundColor || "white",
  ]);
  const {
    focused,
    focus,
    scrollTo,
    clearFocus,
    setParallax,
  } = useParallaxScrolling();
  const { current, setVisible } = useMenu({ titles, scrollTo, setTitle });

  return (
    <>
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
                setVisible,
                key: "section_" + idx,
                id: idx,
                pagesCount: sections.length,
              },
              ...val,
            }}
          />
        ))}
      </Parallax>
      {focused === false && <Menu {...{ current, titles, colors, scrollTo }} />}
    </>
  );
}
