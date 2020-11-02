import Image from "next/image";
import React from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import styled from "styled-components";

function _Gallery({ className, photos }) {
  const factor =
    photos.length > 12 ? Math.ceil(photos.length / 12 / 0.5) * 0.5 : 1;
  return (
    <ParallaxLayer
      offset={1}
      speed={0.45}
      factor={factor}
      className={className}
    >
      <div>
        {photos.map((val, idx) => (
          <Image src={val} unsized key={"image_" + idx} />
        ))}
      </div>
    </ParallaxLayer>
  );
}

const Gallery = styled(_Gallery)`
  width: 100%;
  hwight: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 70%;
    line-height: 0;
    column-count: 4;
    column-gap: 0px;

    > * {
      margin: 4px 4px 4px 4px;
    }

    @media screen and (max-width: 1000px) {
      width: 75%;
      column-count: 3;
    }
    @media screen and (max-width: 800px) {
      width: 90%;
      column-count: 3;
      > * {
        margin: 6px 6px 6px 6px;
      }
    }
    @media screen and (max-width: 400px) {
      width: 95%;
      column-count: 2;
      > * {
        margin: 8px 8px 8px 8px;
      }
    }

    img {
      width: 100% !important;
      height: auto !important;
    }
  }
`;

export default Gallery;
