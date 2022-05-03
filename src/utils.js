export function getSearchParam(word) {
  const searchParam = new URLSearchParams();
  searchParam.append('q', word);
  return '?' + searchParam.toString();
}
