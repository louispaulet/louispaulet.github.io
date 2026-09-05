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

test('article headers do not repeat an identical leading hero image', async () => {
  const { preparePostContent } = await import('../src/components/postContent.js');
  const body = '# Title\n\n![Hero](./post_images/hero.png)\n\n## Overview\n\nUseful content.';
  assert.equal(preparePostContent(body, '/post_images/hero.png'), '## Overview\n\nUseful content.');
  assert.ok(preparePostContent(body, '/post_images/other.png').includes('![Hero]'));
  assert.ok(preparePostContent(body).includes('![Hero]'));
  assert.equal(preparePostContent('# Title\n\nPlain article.'), 'Plain article.');
});
