export const loadPostContent = async ({ baseUrl, postId, signal, fetchImpl = fetch }) => {
  const response = await fetchImpl(
    `${baseUrl}posts/${encodeURIComponent(postId)}.md`,
    { signal },
  );

  if (!response.ok) {
    throw new Error('Failed to fetch');
  }

  return response.text();
};
