import { useState, useEffect } from "react";

export default function useHorizontalScroll() {
  const [parallax, setParallax] = useState();
  const [onWheel, setOnWheel] = useState();
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (!parallax) return;
    const _onScroll = (e) =>
      parallax.container.scrollTo(parallax.container.scrollLeft + e.deltaY, 0);
    setOnWheel(() => _onScroll);
  }, [parallax]);

  useEffect(() => {
    if (!onWheel) return;
    clearFocus();
    return focus;
  }, [onWheel]);

  function clearFocus(_parallax) {
    if (_parallax) _parallax.scrollTo(0);
    setFocused(false);
    window.addEventListener("wheel", onWheel);
  }

  function focus(target, scrollTo, _parallax) {
    if (scrollTo !== undefined) parallax.scrollTo(scrollTo);
    setFocused(target);
    window.removeEventListener("wheel", onWheel);
    if (_parallax) _parallax.scrollTo(1);
  }

  return { focused, focus, clearFocus, setParallax };
}
