import { useEffect, useRef, useState } from "react";

export default function useScrollIntoView() {
  const ref = useRef([]);
  const [scrollTo, setScrollTo] = useState(false);

  useEffect(() => {
    if (ref.current && scrollTo) {
      ref.current?.scrollIntoView({ behavior: "smooth" });
      setScrollTo(false);
    }
  }, [scrollTo]);

  return [ref, setScrollTo];
}
