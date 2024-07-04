import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const UsePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    window.gtag("event", "page_view", {
      page_path: location.pathname + location.search + location.hash
    });
  }, [location]);
};

export default UsePageTracking;