export function getAuthToken() {
  const token = localStorage.getItem("ASSETIFY_TOKEN");
  return token;
}

export function tokenLoader() {
  return getAuthToken();
}
