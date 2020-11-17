import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { keysOf } from "utils";

export default function useMenu({ titles, scrollTo, setTitle }) {
  const [visible, updateVisible] = useState({});
  const [current, setCurrent] = useState([]);
  const [unlocked, setUnlocked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (current.length === 1) {
      const asPath = router.asPath;
      if (!unlocked && asPath !== "/")
        scrollTo(titles.indexOf(asPath.substr(2)));
      else if (current[0] === "0") router.push("/");
      else router.push("#" + titles[current[0]]);
    }
    if (current.length === 2) setUnlocked(true);
  }, [current]);

  useEffect(() => {
    const asPath = router.asPath;
    if (asPath === "/") setTitle(titles[0]);
    else setTitle(asPath.substr(2));
  }, [router.asPath]);

  const setVisible = (isVisible, id) => {
    const _visible = { ...visible, ...{ [id]: isVisible } };
    updateVisible(_visible);
    setCurrent(keysOf(1, _visible));
  };

  return { current, setVisible };
}
