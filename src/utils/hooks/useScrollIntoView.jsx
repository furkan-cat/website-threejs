import { useEffect, useRef, useState } from "react";

export default function useScrollIntoView() {
  const ref = useRef(null);
  const [scrollTo, setScrollTo] = useState(false);

  useEffect(() => {
    console.log("Effect", ref, scrollTo);
    if (ref.current && scrollTo) {
      console.log(ref.current);
      ref.current?.scrollIntoView({ behavior: "smooth" });
      setScrollTo(false);
    }
  }, [scrollTo]);

  return [ref, setScrollTo];
}
