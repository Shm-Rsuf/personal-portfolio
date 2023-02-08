import { useEffect } from "react";

export const useCustomCursor = (innerCursorRef, outerCursorRef) => {
  useEffect(() => {
    document.addEventListener("mousemove", moveCursor);

    function moveCursor(e) {
      let x = e.clientX;
      let y = e.clientY;

      innerCursorRef.current.style.left = `${x}px`;
      innerCursorRef.current.style.top = `${y}px`;

      outerCursorRef.current.style.left = `${x}px`;
      outerCursorRef.current.style.top = `${y}px`;

      let links = Array.from(document.querySelectorAll("a"));
      links.forEach((link) => {
        link.addEventListener("mouseover", () => {
          innerCursorRef.current.classList.add("grow");
        });

        link.addEventListener("mouseleave", () => {
          innerCursorRef.current.classList.remove("grow");
        });
      });
    }
  }, [innerCursorRef, outerCursorRef]);
};
