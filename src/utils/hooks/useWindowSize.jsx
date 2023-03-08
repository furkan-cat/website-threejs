import { useEffect, useState } from "react";

export default function UseWindowSize() {
  const [windowSize, setWindowSize] = useState({ width: "", height: "" });

  useEffect(() => {
    function calcWindowSize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener("resize", calcWindowSize);
    calcWindowSize();

    return () => window.removeEventListener("resize", calcWindowSize);
  }, []);

  return windowSize;
}
