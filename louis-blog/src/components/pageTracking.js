import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from 'react-ga4';

export const PageTracking = () => {
  const location = useLocation();
  const TRACKING_ID = "G-1XEGFVZDME"; // tracking ID
  const [isGAInitialized, setIsGAInitialized] = useState(false);

  useEffect(() => {
      ReactGA.gtag("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
    });
    // Initialize GA with all consent variables set to "denied" by default
    ReactGA.initialize(TRACKING_ID, { 
      gaOptions: {
        send_page_view: false
      }
    });

    

    setIsGAInitialized(true);
  }, []);

  useEffect(() => {
    const storedConsent = JSON.parse(localStorage.getItem('ga_consent'));

    if (storedConsent && isGAInitialized) {
      // Update GA consent based on user's choice
      ReactGA.gtag("consent", "update", {
        ad_storage: storedConsent.ad_storage,
        ad_user_data: storedConsent.ad_user_data,
        ad_personalization: storedConsent.ad_personalization,
        analytics_storage: storedConsent.analytics_storage,
      });
    }
  }, [isGAInitialized]);

  useEffect(() => {
    if (isGAInitialized) {
      const pathArray = location.pathname.split("/");
      const pageTitle = pathArray[pathArray.length - 1] || "homepage";

      ReactGA.send({ 
        hitType: "pageview", 
        page: location.pathname + location.search + location.hash, 
        title: pageTitle 
      });
    }
  }, [location, isGAInitialized]);
};
