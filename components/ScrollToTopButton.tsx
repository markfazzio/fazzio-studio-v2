import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [hasScrollToTopButton, setHasScrollToTopButton] = useState(false);

  function toggleScrollTopButton() {
    setHasScrollToTopButton(
      document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
    );
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleScrollTopButton);

    return () => {
      window.removeEventListener("scroll", toggleScrollTopButton);
    };
  }, []);

  return (
    <>
      {hasScrollToTopButton && (
        <a href="#" className="scroll-top">
          <i className="lni lni-chevron-up"></i>
        </a>
      )}
    </>
  );
}
