import Image from "components/Image";
import React from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import styled from "styled-components";

function _Gallery({ className, photos, length }) {
  return (
    <ParallaxLayer
      offset={1}
      speed={0.45}
      factor={length}
      className={className}
    >
      <div>
        {photos.map((val, idx) => (
          <Image src={val} key={"image_" + idx} />
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
    column-count: 3;
    column-gap: 0px;

    > * {
      margin: 4px 4px 4px 4px;
    }

    img {
      max-width: calc(100% - 8px);
    }

    @media screen and (max-width: 1000px) {
      width: 75%;
    }

    @media screen and (max-width: 800px) {
      width: 90%;
      column-count: 3;
      > * {
        margin: 6px 6px 6px 6px;
      }
      img {
        max-width: calc(100% - 12px);
      }
    }

    @media screen and (max-width: 400px) {
      width: 95%;
      column-count: 2;
      > * {
        margin: 8px 8px 8px 8px;
      }
      img {
        max-width: cacl(100% - 16px);
      }
    }

    img {
      height: auto;
    }
  }
`;

export default Gallery;
