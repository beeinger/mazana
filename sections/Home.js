import React from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import Gallery from "components/Gallery";
import Title from "components/Title";
import Expand from "components/Expand";

export default function Home({ focus, clearFocus }) {
  return (
    <>
      <Title title="Home" />
      <Expand size="50" onClick={focus} />
      <Gallery
        photos={[
          "/gallery/1.png",
          "/gallery/2.jpg",
          "/gallery/3.jpg",
          "/gallery/4.JPG",
          "/gallery/5.JPG",
          "/gallery/6.JPG",
        ]}
      />
      <ParallaxLayer offset={1.025} speed={1.5}>
        <span onClick={clearFocus} style={{ marginLeft: "16px" }}>
          Exit
        </span>
      </ParallaxLayer>
    </>
  );
}
