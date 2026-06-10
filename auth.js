// 오늘연구소 — 카카오 로그인 인증
const KAKAO_APP_KEY = '93c82168dc0ded741ca1fb84eeaf15a6';
const KAKAO_SESSION_KEY = 'ft_kakao_session';

function _initKakao() {
  if (window.Kakao && !Kakao.isInitialized()) Kakao.init(KAKAO_APP_KEY);
}

function authCurrentUser() {
  const s = localStorage.getItem(KAKAO_SESSION_KEY);
  if (!s) return null;
  try { return JSON.parse(s).nick; } catch { return null; }
}

function authCurrentProfile() {
  const s = localStorage.getItem(KAKAO_SESSION_KEY);
  if (!s) return null;
  try { return JSON.parse(s); } catch { return null; }
}

function authKakaoLogin(onSuccess, onFail) {
  _initKakao();
  Kakao.Auth.login({
    success: function() {
      Kakao.API.request({
        url: '/v2/user/me',
        success: function(res) {
          const nick = res.kakao_account?.profile?.nickname || '카카오사용자';
          const kakaoId = String(res.id);
          const profileImg = res.kakao_account?.profile?.profile_image_url || '';
          localStorage.setItem(KAKAO_SESSION_KEY, JSON.stringify({ nick, kakaoId, profileImg }));
          if (onSuccess) onSuccess({ nick, kakaoId, profileImg });
        },
        fail: function(err) { if (onFail) onFail(err); }
      });
    },
    fail: function(err) { if (onFail) onFail(err); }
  });
}

function authLogout() {
  localStorage.removeItem(KAKAO_SESSION_KEY);
  if (window.Kakao && Kakao.isInitialized() && Kakao.Auth.getAccessToken()) Kakao.Auth.logout();
}
