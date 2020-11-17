import React from "react";
import Gallery from "components/Gallery";
import Title from "components/Title";
import Expand from "components/Expand";

export default function Default({
  focus,
  photos,
  title,
  galleryLength,
  color,
}) {
  return (
    <>
      <Title title={title} color={color} />
      <Expand size="50" onClick={focus} color={color} />
      <Gallery photos={photos} length={galleryLength} />
    </>
  );
}
