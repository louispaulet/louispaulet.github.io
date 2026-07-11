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
    <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] sm:px-4 sm:pb-4">
      <div
        role="region"
        aria-label="Analytics preferences"
        className="neumorphic-surface flex max-h-[calc(100dvh-1rem)] w-full max-w-5xl flex-col gap-4 overflow-y-auto bg-[rgba(249,251,254,0.98)] p-4 text-sm text-secondary backdrop-blur sm:max-h-[calc(100dvh-2rem)] sm:p-5 md:flex-row md:items-center md:justify-between md:gap-6"
      >
        <div className="min-w-0 flex-1">
          <p className="text-base font-semibold text-primary">Analytics preferences</p>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-secondary">I use analytics to learn what is useful and improve the site. Pick the level you are comfortable sharing.</p>
        </div>
        <div className="grid w-full grid-cols-3 gap-1.5 md:w-auto md:flex md:flex-wrap md:items-center md:justify-end md:gap-2">
          <button
            type="button"
            className="neumorphic-button inline-flex min-h-11 items-center justify-center px-1.5 py-2 text-[0.58rem] font-semibold uppercase leading-4 tracking-[0.08em] text-primary hover:text-accent min-[360px]:text-[0.64rem] sm:px-3 sm:text-xs sm:tracking-[0.12em] md:px-5 md:tracking-[0.16em]"
            onClick={acceptAll}
          >
            Allow analytics
          </button>
          <button
            type="button"
            className="neumorphic-button inline-flex min-h-11 items-center justify-center px-1.5 py-2 text-[0.58rem] font-semibold uppercase leading-4 tracking-[0.08em] text-primary hover:text-accent min-[360px]:text-[0.64rem] sm:px-3 sm:text-xs sm:tracking-[0.12em] md:px-5 md:tracking-[0.16em]"
            onClick={acceptMinimum}
          >
            Minimal analytics
          </button>
          <button
            type="button"
            className="neumorphic-button inline-flex min-h-11 items-center justify-center px-1.5 py-2 text-[0.58rem] font-semibold uppercase leading-4 tracking-[0.08em] text-primary hover:text-accent min-[360px]:text-[0.64rem] sm:px-3 sm:text-xs sm:tracking-[0.12em] md:px-5 md:tracking-[0.16em]"
            onClick={rejectAll}
          >
            No analytics
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;
