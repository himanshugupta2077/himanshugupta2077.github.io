function getAllPostsByProperty(prop, posts) {
  return posts.flatMap(({ data }) => {
    return data[prop] ?? [];
  });
}
function getUniqueByProperty(prop, posts) {
  return [...new Set(getAllPostsByProperty(prop, posts))];
}
function getUniqueWithCountByProperty(prop, posts) {
  return [
    ...getAllPostsByProperty(prop, posts).reduce(
      (acc, t) => acc.set(t, (acc.get(t) || 0) + 1),
      /* @__PURE__ */ new Map()
    )
  ].sort((a, b) => b[1] - a[1]);
}

export { getUniqueWithCountByProperty as a, getUniqueByProperty as g };
