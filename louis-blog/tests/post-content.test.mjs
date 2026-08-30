import assert from 'node:assert/strict';
import { test } from 'node:test';
import { loadPostContent } from '../src/components/postContent.js';

test('post content requests encode the route id and forward cancellation', async () => {
  const signal = { aborted: false };
  let request;

  const content = await loadPostContent({
    baseUrl: './',
    postId: 'post/14',
    signal,
    fetchImpl: async (...args) => {
      request = args;
      return {
        ok: true,
        text: async () => '# Post 14',
      };
    },
  });

  assert.equal(request[0], './posts/post%2F14.md');
  assert.deepEqual(request[1], { signal });
  assert.equal(content, '# Post 14');
});

test('post content requests surface failed responses', async () => {
  await assert.rejects(
    loadPostContent({
      baseUrl: './',
      postId: 'missing',
      fetchImpl: async () => ({ ok: false }),
    }),
    { message: 'Failed to fetch' },
  );
});
