document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("googleLoginBtn")
    .addEventListener("click", () => {
      const clientId =
        "906903443579-3g3sibq532i7b63houskeuumfc2v4a4k.apps.googleusercontent.com";
      const redirectUri = encodeURIComponent(
        "https://vercel-test-mu-dusky.vercel.app/oauth/callback.html"
      );
      const scope = encodeURIComponent("email profile");
      const oauthUrl =
        `https://accounts.google.com/o/oauth2/v2/auth` +
        `?response_type=code` +
        `&client_id=${clientId}` +
        `&redirect_uri=${redirectUri}` +
        `&scope=${scope}` +
        `&access_type=offline` +
        `&prompt=consent`;

      window.location.href = oauthUrl;
    });
});
