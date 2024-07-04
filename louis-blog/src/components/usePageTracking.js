import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const UsePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    const fullPath = location.pathname + location.search + location.hash;
    let lastWord = fullPath.split("/").filter(Boolean).pop();

    // Set lastWord to "homepage" if it is empty or undefined
    if (!lastWord) {
      lastWord = "homepage";
    }

    window.gtag("event", "page_view", {
      page_title: lastWord,
      page_location: fullPath
    });
  }, [location]);
};

export default UsePageTracking;
