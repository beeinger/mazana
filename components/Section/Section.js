import Exit from "components/Exit";
import React, { useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import Default from "sections/Default";
import { useVisible } from "react-hooks-visible";
import Head from "next/head";

export default function Section({
  focused,
  focus,
  setVisible,
  photos,
  title,
  clearFocus,
  id,
  pagesCount,
  color,
  backgroundColor,
  section: _Section = Default,
}) {
  const [parallax, setParallax] = useState();
  const [targetRef, visible] = useVisible();

  useEffect(() => {
    setVisible(visible, id);
  }, [visible]);

  const galleryLength =
    photos.length > 6 ? Math.ceil(photos.length / 6 / 0.5) * 0.5 : 1;

  const isFirst = id === 0;
  const isLast = id === pagesCount - 1;
  const isFocused = focused === id;

  const factor = isLast | isFirst ? 1.05 : 1.1;
  const offset = id + id * 0.1;
  const pageCount = isFocused ? galleryLength + 1 : 1;
  const config = { mass: 4, tension: 20, friction: 15, velocity: 5 };

  const handleClearFocus = () => parallax.scrollTo(0);
  const handleFocus = () => focus(id, parallax);
  const setRef = (ref) => setParallax(ref);

  const onScroll = () => {
    parallax.container.scrollTop < 1 &&
      setTimeout(() => clearFocus(parallax), 500);
  };

  useEffect(() => {
    if (!parallax) return;
    parallax.container.addEventListener("scroll", onScroll);
    return () => parallax.container.removeEventListener("scroll", onScroll);
  }, [parallax]);

  return (
    <>
      <ParallaxLayer
        factor={factor}
        offset={offset}
        style={{
          backgroundColor: backgroundColor || "transparent",
        }}
      />
      <ParallaxLayer
        factor={factor}
        offset={offset}
        style={{
          marginLeft: isFirst ? 0 : "5vw",
          marginRight: isLast ? 0 : "5vw",
          maxWidth: "100vw",
        }}
      >
        <div ref={targetRef}>
          <Parallax
            id={"title_" + title}
            pages={pageCount}
            scrolling={isFocused}
            ref={setRef}
            config={config}
          >
            <_Section
              {...{
                focus: handleFocus,
                photos,
                galleryLength,
                title,
                color,
                backgroundColor,
              }}
            />
          </Parallax>
        </div>
        {isFocused && (
          <Exit
            onClick={handleClearFocus}
            color={color}
            backgroundColor={backgroundColor}
          />
        )}
      </ParallaxLayer>
    </>
  );
}
