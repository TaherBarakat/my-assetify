export function getAuthToken() {
  const token = localStorage.getItem("ASSETIFY_TOKEN");
  return token;
}
export function removeAuthToken() {
  const token = localStorage.removeItem("ASSETIFY_TOKEN");
  return token;
}

export function tokenLoader() {
  console.log("root loader");
  return getAuthToken();
}
