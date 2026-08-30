import assert from 'node:assert/strict';
import { test } from 'node:test';
import { hasAnalyticsConsent } from '../src/components/analyticsConsent.js';

test('pageviews require explicit analytics consent', () => {
  assert.equal(hasAnalyticsConsent(null), false);
  assert.equal(hasAnalyticsConsent({}), false);
  assert.equal(hasAnalyticsConsent({ analytics_storage: 'denied' }), false);
  assert.equal(hasAnalyticsConsent({ analytics_storage: 'granted' }), true);
});
