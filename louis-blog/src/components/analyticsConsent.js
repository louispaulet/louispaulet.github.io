export const CONSENT_UPDATED_EVENT = 'ga-consent-updated';

export const hasAnalyticsConsent = (consent) => consent?.analytics_storage === 'granted';
