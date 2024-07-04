import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga4';

const ConsentBanner = () => {
  const [consentGiven, setConsentGiven] = useState(true);

  useEffect(() => {
    const storedConsent = localStorage.getItem('ga_consent');
    if (!storedConsent) {
      setConsentGiven(false);
    }
  }, []);

  const handleConsent = (consent) => {
    ReactGA.gtag("consent", "update", {
      ad_storage: consent.ad_storage,
      ad_user_data: consent.ad_user_data,
      ad_personalization: consent.ad_personalization,
      analytics_storage: consent.analytics_storage,
    });
    localStorage.setItem('ga_consent', JSON.stringify(consent));
    setConsentGiven(true);
  };

  const acceptAll = () => {
    handleConsent({
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      analytics_storage: "granted",
    });
  };

  const acceptMinimum = () => {
    handleConsent({
      ad_storage: "denied",
      ad_user_data: "granted",
      ad_personalization: "denied",
      analytics_storage: "granted",
    });
  };

  const rejectAll = () => {
    handleConsent({
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
    });
  };

  if (consentGiven) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center">
      <p className="text-sm">
        We use cookies to improve your experience. Choose your preference.
      </p>
      <div className="flex space-x-4">
        <button
          className="bg-green-500 hover:bg-green-700 text-white py-1 px-3 rounded"
          onClick={acceptAll}
        >
          Oh yes please ! Give me all the cookies you have !
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white py-1 px-3 rounded"
          onClick={acceptMinimum}
        >
          Accept minimal dose of cookies.
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded"
          onClick={rejectAll}
        >
          Reject All.
        </button>
      </div>
    </div>
  );
};

export default ConsentBanner;
