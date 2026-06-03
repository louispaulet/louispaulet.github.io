import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

const postData = await import('../src/PostData.js').then((module) => module.default);

const readProjectFile = (path) => readFile(new URL(path, import.meta.url), 'utf8');

test('Empty Room Studio article is registered with the captured hero image', async () => {
  const post = postData.find((item) => item.id === 'post13');

  assert.ok(post, 'post13 should be present in PostData');
  assert.equal(post.title, 'Empty Room Studio: Clearing Furniture with OpenAI Image Edits');
  assert.equal(post.postDate, '04 Jun 2026');
  assert.equal(post.heroImage, '/post_images/empty-room-studio.png');
  assert.match(post.summary, /Cloudflare Worker demo/);
});

test('Empty Room Studio article starts with the captured screenshot and links to the project', async () => {
  const markdown = await readProjectFile('../public/posts/post13.md');
  const firstImage = markdown.match(/!\[[^\]]*]\(([^)]+)\)/);

  assert.ok(firstImage, 'article should include an image');
  assert.equal(firstImage[1], './post_images/empty-room-studio.png');
  assert.match(markdown, /\[Open the live demo]\(https:\/\/louispaulet\.github\.io\/empty-room-demo\/\)/);
  assert.match(markdown, /\[View the GitHub repo]\(https:\/\/github\.com\/louispaulet\/empty-room-demo\)/);
  assert.match(markdown, /\[Find it in my projects]\(https:\/\/louispaulet\.github\.io\/#\/projects\)/);
});

test('Empty Room Studio remains referenced from the portfolio projects grid', async () => {
  const projectsPage = await readProjectFile('../src/pages/Projects.jsx');

  assert.match(projectsPage, /title: "Empty Room Studio"/);
  assert.match(projectsPage, /image: "\.\/post_images\/empty-room-studio\.png"/);
  assert.match(projectsPage, /link: "https:\/\/louispaulet\.github\.io\/empty-room-demo\/"/);
});
