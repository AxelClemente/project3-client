import { useEffect, useCallback } from "react";

export default function useOutsideAlerter({ menuRef, setMenuOpened }) {
  const viewportWidth = document.documentElement.clientWidth;

  const handleMenuOpen = useCallback(() => {
    setMenuOpened(false);
  }, [setMenuOpened]);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (viewportWidth <= 640) {
          handleMenuOpen();
        }
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, viewportWidth, handleMenuOpen]);
}

