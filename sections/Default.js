import React from "react";
import Gallery from "components/Gallery";
import Title from "components/Title";
import Expand from "components/Expand";

export default function Default({ focus, photos, title, galleryLength }) {
  return (
    <>
      <Title title={title} />
      <Expand size="50" onClick={focus} />
      <Gallery photos={photos} length={galleryLength} />
    </>
  );
}