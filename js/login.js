// // Google OAuth 초기화
// window.onload = function () {
//   google.accounts.id.initialize({
//     client_id:
//       "11466001540-d1mrajklvc7grgsa2lpgdja3h6ltcdma.apps.googleusercontent.com",
//     callback: handleCredentialResponse,
//   });

//   // 버튼 클릭 시 로그인 창 표시
//   document
//     .getElementById("googleLoginBtn")
//     .addEventListener("click", function () {
//       google.accounts.id.prompt(); // 로그인 팝업 열기
//     });
// };

// // 로그인 성공 시 호출되는 콜백
// function handleCredentialResponse(response) {
//   const idToken = response.credential;
//   console.log("받은 토큰:", idToken);

//   // 백엔드로 전송
//   fetch("http://localhost:8080/api/oauth/google", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ token: idToken }),
//   })
//     .then((res) => {
//       if (!res.ok) throw new Error("서버 오류");
//       return res.json();
//     })
//     .then((data) => {
//       alert(`환영합니다, ${data.name}님!`);
//       // 이후 토큰 저장하거나 페이지 이동 등
//     })
//     .catch((err) => {
//       console.error("로그인 실패", err);
//       alert("로그인에 실패했습니다.");
//     });
// }

// Google OAuth Authorization Code Flow 적용

window.onload = function () {
  // URL에 code 파라미터가 있으면 서버로 전달
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");
  if (code) {
    fetch(
      `https://focuscoach.click/api/oauth/google?code=${code}`
    )
      .then((res) => {
        if (!res.ok) throw new Error("서버 오류");
        return res.json();
      })
      .then((data) => {
        alert("환영합니다!");
        // 이후 토큰 저장, 페이지 이동 등
      })
      .catch((err) => {
        console.error("로그인 실패", err);
        alert("로그인에 실패했습니다.");
      });
    return; // code 처리 후 아래 코드 실행 방지
  }

  // 버튼 클릭 시 구글 로그인 페이지로 리디렉션
  document
    .getElementById("googleLoginBtn")
    .addEventListener("click", function () {
      const clientId =
        "11466001540-d1mrajklvc7grgsa2lpgdja3h6ltcdma.apps.googleusercontent.com";
      const redirectUri =
        "https://vercel-test-mu-dusky.vercel.app"; // 배포 주소
      const scope = "openid email profile";
      const state = "secure_random_state"; // 필요시 랜덤값 생성

      const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(
        scope
      )}&state=${state}`;

      window.location.href = googleAuthUrl;
    });
};
