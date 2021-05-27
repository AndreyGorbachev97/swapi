export const parseIdFromUrl = (url) => {
  const r = /\d+/g;
  return +url.match(r)[0];
}