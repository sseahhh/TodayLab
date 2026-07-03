// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  Google AdSense 설정
//  1단계(신청 중): ADSENSE_PUB_ID 에 pub ID 입력 → 스크립트 자동 주입
//  2단계(승인 후): ADSENSE_SLOT_ID 에 광고 단위 ID 입력
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const ADSENSE_PUB_ID  = 'ca-pub-8403043532847351';
const ADSENSE_SLOT_ID = '';   // 예: '1234567890'  (승인 후 광고 단위 ID)

// pub ID가 설정되면 AdSense 스크립트를 <head>에 자동 주입
if (ADSENSE_PUB_ID) {
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUB_ID}`;
  s.crossOrigin = 'anonymous';
  document.head.appendChild(s);
}

// 광고 슬롯 HTML — pub ID + slot ID 가 모두 설정되면 실제 AdSense 광고, 아니면 플레이스홀더
const AD_SLOT_HTML = (ADSENSE_PUB_ID && ADSENSE_SLOT_ID) ? `
  <ins class="adsbygoogle"
    style="display:inline-block;width:300px;height:250px"
    data-ad-client="${ADSENSE_PUB_ID}"
    data-ad-slot="${ADSENSE_SLOT_ID}"></ins>
  <script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>
` : `
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
    <small style="font-size:10px;opacity:.6;">AdSense 승인 후 자동 전환됩니다</small>
  </div>
`;

/* ── 인라인 광고 블록 ─────────────────────────────
   페이지 콘텐츠(질문/폼/결과) 흐름 안에 자연스럽게 배치되는
   광고 영역. 콘텐츠를 가리거나 대기시키지 않음. ─────────── */
(function injectStyle() {
  const s = document.createElement('style');
  s.textContent = `
    #ftInlineAd {
      display: flex; flex-direction: column; align-items: center; gap: 8px;
      margin: 36px auto; padding: 16px;
    }
    #ftInlineAd .ft-ad-label {
      font-size: 10px; color: rgba(255,255,255,.25);
      letter-spacing: 1px; text-transform: uppercase;
    }
  `;
  document.head.appendChild(s);
})();

document.addEventListener('DOMContentLoaded', () => {
  const el = document.createElement('div');
  el.id = 'ftInlineAd';
  el.innerHTML = `
    <span class="ft-ad-label">AD</span>
    ${AD_SLOT_HTML}
  `;
  document.body.appendChild(el);
});

/* ── 공개 API ────────────────────────────────── */
// 과거의 전면 광고 대기 화면(전체화면 오버레이 + 카운트다운)은
// 콘텐츠 없는 화면에 광고를 노출하는 애드센스 정책 위반이라 제거.
// 결과는 즉시 표시하고, 광고는 위 인라인 블록으로만 노출한다.
window.showAdThenResult = function (resultFn) {
  resultFn();
};
