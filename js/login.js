document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("googleLoginBtn")
    .addEventListener("click", () => {
      const clientId =
        "11466001540-d1mrajklvc7grgsa2lpgdja3h6ltcdma.apps.googleusercontent.com";
      const redirectUri = encodeURIComponent(
        "https://focuscoach.click/oauth/callback.html"
      );
      const scope = encodeURIComponent("email profile");
      const state = "poco-login";

      const oauthUrl =
        `https://accounts.google.com/o/oauth2/v2/auth` +
        `?response_type=code` +
        `&client_id=${clientId}` +
        `&redirect_uri=${redirectUri}` +
        `&scope=${scope}` +
        `&state=${state}` +
        `&access_type=offline` +
        `&prompt=consent`;

      window.location.href = oauthUrl;
    });
});
