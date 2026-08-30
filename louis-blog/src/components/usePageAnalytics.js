import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import { CONSENT_UPDATED_EVENT, hasAnalyticsConsent } from "./analyticsConsent";

const TRACKING_ID = "G-1XEGFVZDME";

const getStoredConsent = () => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const storedConsent = window.localStorage?.getItem("ga_consent");
    return storedConsent ? JSON.parse(storedConsent) : null;
  } catch (error) {
    console.warn("Unable to read GA consent from storage:", error);
    return null;
  }
};

const updateConsent = (consent) => {
  try {
    ReactGA.gtag("consent", "update", consent);
  } catch (error) {
    console.warn("Failed to update GA consent:", error);
  }
};

const initializeAnalytics = () => {
  try {
    ReactGA.gtag("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
    });

    ReactGA.initialize(TRACKING_ID, {
      gaOptions: {
        send_page_view: false,
      },
    });

    return true;
  } catch (error) {
    console.warn("Analytics initialisation failed; continuing without GA.", error);
    return false;
  }
};

const sendPageview = (location) => {
  try {
    const pathArray = location.pathname.split("/");
    const pageTitle = pathArray[pathArray.length - 1] || "homepage";

    ReactGA.send({
      hitType: "pageview",
      page: `${location.pathname}${location.search}${location.hash}`,
      title: pageTitle,
    });
  } catch (error) {
    console.warn("Failed to send GA pageview:", error);
  }
};

const usePageAnalytics = () => {
  const location = useLocation();
  const [isGAInitialized, setIsGAInitialized] = useState(false);
  const [consent, setConsent] = useState(getStoredConsent);

  useEffect(() => {
    setIsGAInitialized(initializeAnalytics());
  }, []);

  useEffect(() => {
    const handleConsentUpdate = () => setConsent(getStoredConsent());

    window.addEventListener(CONSENT_UPDATED_EVENT, handleConsentUpdate);
    return () => window.removeEventListener(CONSENT_UPDATED_EVENT, handleConsentUpdate);
  }, []);

  useEffect(() => {
    if (!isGAInitialized || !consent) {
      return;
    }

    updateConsent(consent);
  }, [consent, isGAInitialized]);

  useEffect(() => {
    if (!isGAInitialized || !hasAnalyticsConsent(consent)) {
      return;
    }

    sendPageview(location);
  }, [consent, isGAInitialized, location]);
};

export default usePageAnalytics;
