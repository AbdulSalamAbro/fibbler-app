import { useEffect } from "react";
import { useRouter } from "next/router";

const ScrollToTop = () => {
  const { asPath } = useRouter();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [asPath]);

  return null;
};

export default ScrollToTop;
