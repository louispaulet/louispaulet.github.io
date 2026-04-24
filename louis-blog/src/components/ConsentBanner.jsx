import { useState, useEffect } from 'react';
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
    <div className="fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
      <div className="flex w-full max-w-5xl flex-col gap-4 border border-soft bg-surface p-6 text-sm text-secondary shadow-[14px_14px_28px_rgba(185,194,212,0.45),-14px_-14px_28px_rgba(255,255,255,0.95)] backdrop-blur">
        <div>
          <p className="text-base font-semibold text-primary">Cookie preferences</p>
          <p className="mt-1 text-sm text-secondary">We use analytics to understand usage and improve the experience. Choose how much signal you want to share.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            className="neumorphic-button inline-flex items-center px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary hover:text-accent"
            onClick={acceptAll}
          >
            Accept all
          </button>
          <button
            className="neumorphic-button inline-flex items-center px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary hover:text-accent"
            onClick={acceptMinimum}
          >
            Essential only
          </button>
          <button
            className="neumorphic-button inline-flex items-center px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary hover:text-accent"
            onClick={rejectAll}
          >
            Reject all
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;
