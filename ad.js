/**
 * 오늘연구소 — 결과 전 광고 오버레이
 * ═══════════════════════════════════════════════
 *  실제 광고 수익 연결 방법 (아래 AD_SLOT_HTML 교체)
 * ───────────────────────────────────────────────
 *  ① Google AdSense  →  adsense.google.com 가입/승인 후
 *     <ins class="adsbygoogle" ...> 코드를 AD_SLOT_HTML에 붙여넣기
 *     + <head>에 AdSense 스크립트 추가
 *
 *  ② Kakao Adfit (한국 추천)  →  adfit.kakao.com 에서 광고 단위 생성 후
 *     <ins class="kakao_ad_area" ...> 코드를 AD_SLOT_HTML에 붙여넣기
 *     + <head>에 Adfit 스크립트 추가
 * ═══════════════════════════════════════════════
 */

// ▼ 여기에 실제 광고 코드(AdSense / Adfit)를 교체하세요 ▼
const AD_SLOT_HTML = `
  <div style="
    width:300px; height:250px;
    background:rgba(255,255,255,.04);
    border:2px dashed rgba(255,255,255,.13);
    border-radius:10px;
    display:flex; flex-direction:column;
    align-items:center; justify-content:center;
    color:rgba(255,255,255,.3); font-size:12px;
    gap:10px; text-align:center; user-select:none;
  ">
    <span style="font-size:32px;opacity:.5;">📢</span>
    <span>광고 영역 (300 × 250)</span>
    <small style="font-size:10px;opacity:.6;">AdSense / Adfit 코드로 교체하세요</small>
  </div>
`;
// ▲ 광고 코드 영역 끝 ▲

const TOTAL_SEC  = 5;   // 전체 카운트다운 초
const SKIP_AFTER = 2;   // 몇 초 후 건너뛰기 버튼 활성화

/* ── 스타일 주입 ─────────────────────────────── */
(function injectStyle() {
  const s = document.createElement('style');
  s.textContent = `
    #ftAdOverlay {
      display: none;
      position: fixed; inset: 0;
      z-index: 9999;
      background: rgba(0,0,0,.9);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      align-items: center; justify-content: center;
      flex-direction: column; gap: 22px;
      padding: 24px;
      font-family: 'Noto Sans KR', sans-serif;
      animation: ftFadeIn .25s ease;
    }
    #ftAdOverlay.active { display: flex; }
    @keyframes ftFadeIn { from{opacity:0} to{opacity:1} }

    .ft-ad-header { text-align: center; }
    .ft-ad-header .ft-ad-headline {
      font-size: 17px; font-weight: 700; color: #fff; display: block; margin-bottom: 6px;
    }
    .ft-ad-header .ft-ad-sub {
      font-size: 13px; color: #888;
    }
    .ft-ad-slot { animation: ftSlideUp .35s ease; }
    @keyframes ftSlideUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }

    .ft-ad-footer {
      display: flex; flex-direction: column; align-items: center; gap: 14px;
    }

    /* 원형 타이머 */
    .ft-timer-ring { position: relative; width: 56px; height: 56px; }
    .ft-timer-ring svg { transform: rotate(-90deg); }
    .ft-timer-ring circle { fill: none; stroke-width: 4.5; }
    .ft-timer-bg   { stroke: rgba(255,255,255,.08); }
    .ft-timer-arc  {
      stroke: #e50914; stroke-linecap: round;
      transition: stroke-dashoffset .95s linear;
    }
    .ft-timer-num {
      position: absolute; inset: 0;
      display: flex; align-items: center; justify-content: center;
      font-size: 18px; font-weight: 900; color: #fff;
    }

    /* 건너뛰기 버튼 */
    .ft-skip-btn {
      background: rgba(255,255,255,.08);
      border: 1.5px solid rgba(255,255,255,.18);
      color: #ccc; padding: 10px 26px; border-radius: 50px;
      font-size: 13px; font-weight: 600; cursor: pointer;
      font-family: inherit;
      opacity: 0; pointer-events: none;
      transform: translateY(8px);
      transition: opacity .3s, transform .3s, background .2s, color .2s;
    }
    .ft-skip-btn.on {
      opacity: 1; pointer-events: auto; transform: translateY(0);
    }
    .ft-skip-btn.on:hover { background: rgba(255,255,255,.18); color: #fff; }

    .ft-ad-label {
      font-size: 10px; color: rgba(255,255,255,.2);
      letter-spacing: 1px; text-transform: uppercase; margin-top: -8px;
    }
  `;
  document.head.appendChild(s);
})();

/* ── 오버레이 DOM 주입 ───────────────────────── */
const R  = 24;
const C  = 2 * Math.PI * R; // circumference ≈ 150.8

document.addEventListener('DOMContentLoaded', () => {
  const el = document.createElement('div');
  el.id = 'ftAdOverlay';
  el.innerHTML = `
    <div class="ft-ad-header">
      <span class="ft-ad-headline">🎯 잠시 후 결과가 공개됩니다</span>
      <span class="ft-ad-sub">광고 시청 후 결과를 확인하실 수 있어요</span>
    </div>
    <div class="ft-ad-label">AD</div>
    <div class="ft-ad-slot">${AD_SLOT_HTML}</div>
    <div class="ft-ad-footer">
      <div class="ft-timer-ring">
        <svg width="56" height="56" viewBox="0 0 56 56">
          <circle class="ft-timer-bg" cx="28" cy="28" r="${R}"/>
          <circle class="ft-timer-arc" id="ftArc" cx="28" cy="28" r="${R}"
            stroke-dasharray="${C.toFixed(1)}" stroke-dashoffset="0"/>
        </svg>
        <div class="ft-timer-num" id="ftNum">${TOTAL_SEC}</div>
      </div>
      <button class="ft-skip-btn" id="ftSkip">건너뛰기 →</button>
    </div>
  `;
  document.body.appendChild(el);
});

/* ── 공개 API ────────────────────────────────── */
window.showAdThenResult = function (resultFn) {
  const overlay = document.getElementById('ftAdOverlay');
  const numEl   = document.getElementById('ftNum');
  const arcEl   = document.getElementById('ftArc');
  const skipBtn = document.getElementById('ftSkip');

  let remaining = TOTAL_SEC;
  numEl.textContent = remaining;
  arcEl.style.strokeDashoffset = '0';
  skipBtn.classList.remove('on');
  overlay.classList.add('active');

  function done() {
    clearInterval(tick);
    overlay.classList.remove('active');
    resultFn();
  }

  skipBtn.onclick = done;

  const tick = setInterval(() => {
    remaining--;
    numEl.textContent = remaining;
    arcEl.style.strokeDashoffset =
      String(C * (1 - remaining / TOTAL_SEC));
    if (remaining <= TOTAL_SEC - SKIP_AFTER) skipBtn.classList.add('on');
    if (remaining <= 0) done();
  }, 1000);
};
