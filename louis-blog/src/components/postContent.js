export const loadPostContent = async ({
  baseUrl,
  postId,
  signal,
  fetchImpl = fetch,
}) => {
  const response = await fetchImpl(
    `${baseUrl}posts/${encodeURIComponent(postId)}.md`,
    { signal },
  );

  if (!response.ok) {
    throw new Error('Failed to fetch');
  }

  return response.text();
};

// The page header already renders the title and hero. Preserve all other Markdown.
export const preparePostContent = (markdown, heroImage) => {
  const body = markdown.replace(/^\s{0,3}#{1,6}\s+.*(?:\r?\n)+/, '');
  const leadingImage = body.match(/^\s*!\[[^\]]*\]\(([^\s)]+)\)\s*(?:\r?\n|$)/);
  const normalizedPath = (path) => path?.replace(/^\.?\//, '');
  if (
    heroImage &&
    leadingImage &&
    normalizedPath(leadingImage[1]) === normalizedPath(heroImage)
  ) {
    return body.slice(leadingImage[0].length);
  }
  return body;
};
