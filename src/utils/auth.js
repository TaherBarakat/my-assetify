const REFRESH_TIME = 360000;
// const REFRESH_TIME = 10000;
export function getAuthToken() {
  const token = localStorage.getItem("ASSETIFY_TOKEN");
  return token;
}
export function removeAuthToken() {
  const token = localStorage.removeItem("ASSETIFY_TOKEN");
  return token;
}

export async function refreshToken() {
  if (getAuthToken()) {
    let newToken;
    console.log("startRefreshToken");
    try {
      const response = await fetch(
        "https://task5-toleen-falion.trainees-mad-s.com/api/auth/refreshToken",
        {
          headers: { Authorization: `Bearer ${getAuthToken()}` },
        },
      );
      newToken = await response.json();
    } catch (error) {
      console.log(error);
    } finally {
      localStorage.setItem("ASSETIFY_TOKEN", newToken.token);
      console.log("DoneRefreshToken");
      console.log(newToken.token);
      console.log(getAuthToken());
    }
  } else console.log("didn't refresh the token you don't have one");
}

export function setRefreshTokenTimer() {
  return setInterval(() => {
    refreshToken();
  }, REFRESH_TIME);
}

export function tokenLoader() {
  console.log("root loader");
  return getAuthToken();
}
