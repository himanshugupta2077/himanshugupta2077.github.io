function getAllTags(posts) {
  return posts.flatMap(({ data }) => data.tags ? [...data.tags] : []);
}
function getUniqueTags(posts) {
  return [...new Set(getAllTags(posts))];
}

export { getUniqueTags as g };
