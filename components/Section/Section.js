import React, { useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

export default function Section({
  focused,
  focus,
  clearFocus,
  id,
  speed,
  length,
  pagesCount,
  backgroundColor,
  section: _Section,
}) {
  const [parallax, setParallax] = useState();

  const isFirst = id === 0;
  const isLast = id === pagesCount - 1;
  const isFocused = focused === id;

  const factor = isLast | isFirst ? 1.05 : 1.1;
  const offset = id + id * 0.1;
  const pageCount = focused === id ? length : 1;
  const config = { mass: 4, tension: 20, friction: 15, velocity: 5 };

  const handleClearFocus = () => parallax.scrollTo(0);
  const handleFocus = () => focus(id, isFirst ? 0 : offset + 0.05, parallax);
  const setRef = (ref) => setParallax(ref);

  const onScroll = () =>
    parallax.container.scrollTop < 1 &&
    setTimeout(() => clearFocus(parallax), 500);

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
        <Parallax
          id={"page_" + id}
          pages={pageCount}
          scrolling={isFocused}
          ref={setRef}
          config={config}
        >
          <_Section
            {...{
              focus: handleFocus,
              clearFocus: handleClearFocus,
            }}
          />
        </Parallax>
      </ParallaxLayer>
    </>
  );
}
