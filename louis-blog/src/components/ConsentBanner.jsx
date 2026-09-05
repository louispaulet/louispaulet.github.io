import { useState, useEffect, useRef } from 'react';
import ReactGA from 'react-ga4';
import { CONSENT_UPDATED_EVENT } from './analyticsConsent';

const ConsentBanner = () => {
  const [consentGiven, setConsentGiven] = useState(true);
  const panelRef = useRef(null);

  useEffect(() => {
    if (consentGiven || !panelRef.current) return undefined;
    const updateInset = () =>
      document.documentElement.style.setProperty(
        '--consent-height',
        `${panelRef.current.offsetHeight + 32}px`,
      );
    const observer = new ResizeObserver(updateInset);
    observer.observe(panelRef.current);
    updateInset();
    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty('--consent-height');
    };
  }, [consentGiven]);

  useEffect(() => {
    try {
      const storedConsent = window.localStorage?.getItem('ga_consent');
      if (!storedConsent) {
        setConsentGiven(false);
      }
    } catch (error) {
      console.warn('Unable to read analytics consent from storage.', error);
      setConsentGiven(false);
    }
  }, []);

  const handleConsent = (consent) => {
    try {
      ReactGA.gtag('consent', 'update', {
        ad_storage: consent.ad_storage,
        ad_user_data: consent.ad_user_data,
        ad_personalization: consent.ad_personalization,
        analytics_storage: consent.analytics_storage,
      });
    } catch (error) {
      console.warn('Failed to update analytics consent.', error);
    }

    try {
      window.localStorage?.setItem('ga_consent', JSON.stringify(consent));
    } catch (error) {
      console.warn('Unable to save analytics consent to storage.', error);
    }

    window.dispatchEvent(new Event(CONSENT_UPDATED_EVENT));
    setConsentGiven(true);
  };

  const acceptAll = () => {
    handleConsent({
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted',
    });
  };

  const acceptMinimum = () => {
    handleConsent({
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'granted',
    });
  };

  const rejectAll = () => {
    handleConsent({
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
    });
  };

  if (consentGiven) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] sm:px-4 sm:pb-4">
      <div
        ref={panelRef}
        role="region"
        aria-label="Analytics preferences"
        className="consent-panel"
      >
        <div className="min-w-0 flex-1">
          <p className="text-base font-semibold text-primary">
            Analytics preferences
          </p>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-secondary">
            I use analytics to learn what is useful and improve the site. Pick
            the level you are comfortable sharing.
          </p>
        </div>
        <div className="consent-actions">
          <button
            type="button"
            className="cta cta-secondary"
            onClick={acceptAll}
          >
            Allow analytics
          </button>
          <button
            type="button"
            className="cta cta-secondary"
            onClick={acceptMinimum}
          >
            Minimal analytics
          </button>
          <button
            type="button"
            className="cta cta-secondary"
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
