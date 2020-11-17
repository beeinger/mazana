import { useState, useEffect } from "react";

export default function useParallaxScrolling() {
  const [parallax, setParallax] = useState();
  const [onWheel, setOnWheel] = useState();
  const [focused, setFocused] = useState();

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

  const register = () => window.addEventListener("wheel", onWheel);

  const unregister = () => window.removeEventListener("wheel", onWheel);

  function clearFocus(_parallax) {
    if (_parallax) _parallax.scrollTo(0);
    setFocused(false);
    register();
  }

  function focus(target, _parallax) {
    scrollTo(target);
    setFocused(target);
    unregister();
    if (_parallax) _parallax.scrollTo(1.25);
  }

  function scrollTo(target) {
    if (target !== undefined) {
      const isFirst = target === 0;
      const offset = target + target * 0.1;
      parallax && parallax.scrollTo(isFirst ? 0 : offset + 0.05);
    }
  }

  return { focused, focus, clearFocus, setParallax, scrollTo };
}
