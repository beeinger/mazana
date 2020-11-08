import React from "react";

function Image(props) {
  const { src, hd } = props;
  var webp = require(`images/${src}?webp`);
  var full = require(`images/${src}`);

  return <img {...{ ...props, ...{ src: hd ? full : webp } }} />;
}

export default Image;
