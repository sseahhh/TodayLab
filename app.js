// =============================
//  오늘연구소 — app.js
// =============================

const TESTS = [
  {
    id: 'villain',
    title: '직장인 빌런 유형 테스트',
    emoji: '😈',
    category: '심리',
    desc: '나는 회사에서 어떤 빌런 타입? 10가지 직장 빌런 유형으로 알아보는 나의 직장 캐릭터',
    gradient: 'linear-gradient(145deg, #3c1053 0%, #ad5389 100%)',
    count: '324,891',
    time: '3분',
    url: 'tests/villain-test.html',
    popular: true, hot: true, isNew: false,
  },
  {
    id: 'name-score',
    title: '내 이름 점수',
    emoji: '✨',
    category: '운세',
    desc: '이름에 숨겨진 점수와 의미를 알아보세요. 획수와 수리로 보는 이름 운세!',
    gradient: 'linear-gradient(145deg, #f6d365 0%, #fda085 100%)',
    count: '287,443',
    time: '1분',
    url: 'tests/name-score.html',
    popular: true, hot: true, isNew: false,
  },
  {
    id: 'lunch',
    title: '오늘 점심 추천',
    emoji: '🍱',
    category: '추천',
    desc: '오늘 뭐 먹을지 고민이라면? 기분과 취향으로 찾아주는 오늘의 점심 메뉴!',
    gradient: 'linear-gradient(145deg, #f093fb 0%, #f5576c 100%)',
    count: '256,128',
    time: '1분',
    url: 'tests/lunch.html',
    popular: true, hot: false, isNew: false,
  },
  {
    id: 'love-ability',
    title: '연애 능력치',
    emoji: '💕',
    category: '연애',
    desc: '나의 연애 능력치는 몇 점? 매력, 소통, 배려, 열정, 센스 5가지 스탯으로 분석',
    gradient: 'linear-gradient(145deg, #4facfe 0%, #00f2fe 100%)',
    count: '198,776',
    time: '3분',
    url: 'tests/love-ability.html',
    popular: true, hot: false, isNew: false,
  },
  {
    id: 'child-job',
    title: '우리 아이 미래직업',
    emoji: '🚀',
    category: '육아',
    desc: '아이의 성향과 관심사로 알아보는 미래 직업! 부모님이라면 꼭 해보세요',
    gradient: 'linear-gradient(145deg, #43e97b 0%, #38f9d7 100%)',
    count: '176,332',
    time: '2분',
    url: 'tests/child-job.html',
    popular: true, hot: false, isNew: false,
  },
  {
    id: 'child-height',
    title: '우리 아이 키 예측기',
    emoji: '📏',
    category: '육아',
    desc: '부모님 키로 예측하는 우리 아이의 최종 키! Tanner 공식 기반 계산기',
    gradient: 'linear-gradient(145deg, #96fbc4 0%, #f9f586 100%)',
    count: '89,445',
    time: '1분',
    url: 'tests/child-height.html',
    popular: false, hot: false, isNew: true,
  },
  {
    id: 'fortune',
    title: '오늘의 운세',
    emoji: '🔮',
    category: '운세',
    desc: '생년월일로 알아보는 오늘의 운세. 애정운, 금전운, 건강운, 직장운 완전 분석!',
    gradient: 'linear-gradient(145deg, #a18cd1 0%, #fbc2eb 100%)',
    count: '312,009',
    time: '1분',
    url: 'tests/fortune.html',
    popular: false, hot: false, isNew: false,
  },
  {
    id: 'zodiac',
    title: '띠별 운세 2025',
    emoji: '🐉',
    category: '운세',
    desc: '내 띠는 올해 운이 좋을까? 12띠별 2025년 운세 완전 분석',
    gradient: 'linear-gradient(145deg, #c94b4b 0%, #4b134f 100%)',
    count: '156,778',
    time: '1분',
    url: 'tests/zodiac-fortune.html',
    popular: false, hot: false, isNew: false,
  },
  {
    id: 'random-lunch',
    title: '오늘 뭐먹지? 랜덤',
    emoji: '🎲',
    category: '추천',
    desc: '도저히 못 고르겠다면 랜덤에게 맡겨! 룰렛으로 정하는 오늘의 메뉴',
    gradient: 'linear-gradient(145deg, #f7971e 0%, #ffd200 100%)',
    count: '32,118',
    time: '30초',
    url: 'tests/lunch.html',
    popular: false, hot: false, isNew: false,
  },

  // ── 운세 ──────────────────────────────────────────
  {
    id: 'blood-type',
    title: '혈액형 궁합',
    emoji: '🩸',
    category: '운세',
    desc: '나와 상대방의 혈액형으로 알아보는 궁합! 16가지 조합별 상세 분석',
    gradient: 'linear-gradient(145deg, #f5515f 0%, #9f041b 100%)',
    count: '178,332',
    time: '1분',
    url: 'tests/blood-type.html',
    popular: true, hot: true, isNew: true,
  },
  {
    id: 'star-fortune',
    title: '별자리 운세',
    emoji: '⭐',
    category: '운세',
    desc: '생년월일로 알아보는 오늘의 별자리 운세. 애정·금전·건강·직업 완전 분석!',
    gradient: 'linear-gradient(145deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
    count: '203,441',
    time: '1분',
    url: 'tests/star-fortune.html',
    popular: true, hot: false, isNew: true,
  },
  {
    id: 'tarot',
    title: '오늘의 타로',
    emoji: '🃏',
    category: '운세',
    desc: '과거·현재·미래 3장의 타로 카드가 당신의 운명을 알려줍니다',
    gradient: 'linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    count: '89,234',
    time: '1분',
    url: 'tests/tarot.html',
    popular: false, hot: true, isNew: true,
  },
  {
    id: 'saju',
    title: '사주 간이 분석',
    emoji: '☯️',
    category: '운세',
    desc: '생년월일시로 알아보는 나의 사주팔자! 오행 밸런스와 2025년 운세',
    gradient: 'linear-gradient(145deg, #373b44 0%, #4286f4 100%)',
    count: '124,556',
    time: '2분',
    url: 'tests/saju.html',
    popular: false, hot: false, isNew: true,
  },
  {
    id: 'dream',
    title: '꿈 해몽',
    emoji: '💭',
    category: '운세',
    desc: '어젯밤 꿈이 궁금하다면? 장소·대상·분위기로 알아보는 나의 꿈 풀이',
    gradient: 'linear-gradient(145deg, #2c3e50 0%, #4ca1af 100%)',
    count: '67,891',
    time: '1분',
    url: 'tests/dream.html',
    popular: false, hot: false, isNew: true,
  },
  {
    id: 'numerology',
    title: '수비학 행운 숫자',
    emoji: '🔢',
    category: '운세',
    desc: '이름과 생년월일로 계산하는 나만의 행운 숫자! 수비학이 알려주는 운명',
    gradient: 'linear-gradient(145deg, #f7971e 0%, #ffd200 100%)',
    count: '45,123',
    time: '1분',
    url: 'tests/numerology.html',
    popular: false, hot: false, isNew: true,
  },
  {
    id: 'new-year-fortune',
    title: '2026 신년 운세',
    emoji: '🎊',
    category: '운세',
    desc: '2026년 나의 운세는? 띠별 새해 운세 완전 분석 — 재물·애정·건강·직업',
    gradient: 'linear-gradient(145deg, #e44d26 0%, #f16529 100%)',
    count: '234,667',
    time: '2분',
    url: 'tests/new-year-fortune.html',
    popular: true, hot: true, isNew: true,
  },

  // ── 심리 ──────────────────────────────────────────
  {
    id: 'future-spouse',
    title: '미래의 내 배우자상',
    emoji: '💍',
    category: '심리',
    desc: '나는 어떤 사람과 결혼할까? 5가지 배우자 유형으로 알아보는 나의 이상형',
    gradient: 'linear-gradient(145deg, #ff9a9e 0%, #fecfef 100%)',
    count: '245,678',
    time: '3분',
    url: 'tests/future-spouse.html',
    popular: true, hot: true, isNew: true,
  },
  {
    id: 'hidden-personality',
    title: '나의 숨겨진 성격',
    emoji: '🎭',
    category: '심리',
    desc: '평소엔 안 보이지만 분명히 존재하는 나의 진짜 모습! 4가지 숨겨진 성격 유형',
    gradient: 'linear-gradient(145deg, #4e54c8 0%, #8f94fb 100%)',
    count: '189,443',
    time: '3분',
    url: 'tests/hidden-personality.html',
    popular: false, hot: false, isNew: true,
  },
  {
    id: 'love-style',
    title: '나의 연애 스타일',
    emoji: '💘',
    category: '연애',
    desc: '로맨틱형? 쿨한형? 올인형? 나의 연애 스타일을 5가지 유형으로 완전 분석',
    gradient: 'linear-gradient(145deg, #fd7043 0%, #f06292 100%)',
    count: '312,556',
    time: '3분',
    url: 'tests/love-style.html',
    popular: true, hot: false, isNew: true,
  },
  {
    id: 'past-life',
    title: '나의 전생은?',
    emoji: '✨',
    category: '심리',
    desc: '조선시대 선비? 떠돌이 검객? 재미로 알아보는 나의 전생 이야기',
    gradient: 'linear-gradient(145deg, #667eea 0%, #764ba2 100%)',
    count: '167,223',
    time: '2분',
    url: 'tests/past-life.html',
    popular: false, hot: true, isNew: true,
  },
  {
    id: 'friend-view',
    title: '친구들이 보는 나',
    emoji: '👥',
    category: '심리',
    desc: '분위기 메이커? 든든한 맏형? 친구들 눈에 비치는 나의 모습은?',
    gradient: 'linear-gradient(145deg, #11998e 0%, #38ef7d 100%)',
    count: '198,334',
    time: '3분',
    url: 'tests/friend-view.html',
    popular: false, hot: false, isNew: true,
  },
  {
    id: 'emotional-age',
    title: '나의 감정 나이는?',
    emoji: '🎂',
    category: '심리',
    desc: '실제 나이와 감정 나이는 다르다! 10개 질문으로 알아보는 나의 감정 나이',
    gradient: 'linear-gradient(145deg, #f6d365 0%, #fda085 100%)',
    count: '143,221',
    time: '2분',
    url: 'tests/emotional-age.html',
    popular: false, hot: false, isNew: true,
  },
  {
    id: 'stress-check',
    title: '스트레스 지수 체크',
    emoji: '😮‍💨',
    category: '심리',
    desc: '요즘 번아웃 직전 아닌가요? 12가지 질문으로 알아보는 나의 스트레스 지수',
    gradient: 'linear-gradient(145deg, #f83600 0%, #f9d423 100%)',
    count: '221,445',
    time: '2분',
    url: 'tests/stress-check.html',
    popular: true, hot: false, isNew: true,
  },
  {
    id: 'ideal-type',
    title: '이상형 관상 유형',
    emoji: '👁️',
    category: '심리',
    desc: '강인한 무인상? 순수한 동안상? 내가 끌리는 이상형 관상 유형 분석',
    gradient: 'linear-gradient(145deg, #434343 0%, #4a4a4a 100%)',
    count: '276,889',
    time: '3분',
    url: 'tests/ideal-type.html',
    popular: false, hot: false, isNew: true,
  },
  {
    id: 'mbti-lite',
    title: 'MBTI 간이 테스트',
    emoji: '🧠',
    category: '심리',
    desc: '16개 질문으로 빠르게 알아보는 나의 MBTI! 재미있는 한국식 MBTI 해석',
    gradient: 'linear-gradient(145deg, #2b5876 0%, #4e4376 100%)',
    count: '523,445',
    time: '5분',
    url: 'tests/mbti-lite.html',
    popular: true, hot: true, isNew: true,
  },

  // ── 육아 ──────────────────────────────────────────
  {
    id: 'due-date',
    title: '예상 출산일 계산기',
    emoji: '🤰',
    category: '육아',
    desc: '마지막 생리일로 계산하는 예상 출산일과 임신 주수·트리메스터 정보',
    gradient: 'linear-gradient(145deg, #fccb90 0%, #d57eeb 100%)',
    count: '89,234',
    time: '1분',
    url: 'tests/due-date.html',
    popular: false, hot: false, isNew: true,
  },
  {
    id: 'child-development',
    title: '아이 발달 체크',
    emoji: '👶',
    category: '육아',
    desc: '우리 아이 발달이 정상일까? 월령별 발달 체크리스트로 확인해보세요',
    gradient: 'linear-gradient(145deg, #a1ffce 0%, #faffd1 100%)',
    count: '67,445',
    time: '2분',
    url: 'tests/child-development.html',
    popular: false, hot: false, isNew: true,
  },
  {
    id: 'child-bmi',
    title: '아이 성장 백분위',
    emoji: '📊',
    category: '육아',
    desc: '우리 아이 키·몸무게 백분위는? 또래와 비교하는 아이 성장 분석',
    gradient: 'linear-gradient(145deg, #96fbc4 0%, #f9f586 100%)',
    count: '54,223',
    time: '1분',
    url: 'tests/child-bmi.html',
    popular: false, hot: false, isNew: true,
  },

  // ── 건강 ──────────────────────────────────────────
  {
    id: 'bmi',
    title: '내 BMI 계산기',
    emoji: '⚖️',
    category: '건강',
    desc: '키와 몸무게로 알아보는 나의 BMI! 한국인 기준 적정 체중 범위 분석',
    gradient: 'linear-gradient(145deg, #56ab2f 0%, #a8e063 100%)',
    count: '334,556',
    time: '1분',
    url: 'tests/bmi.html',
    popular: true, hot: false, isNew: true,
  },
  {
    id: 'korean-age',
    title: '나이 계산기',
    emoji: '🎂',
    category: '건강',
    desc: '만 나이·세는 나이·연 나이를 한 번에! 태어난 지 며칠, 다음 생일까지 며칠?',
    gradient: 'linear-gradient(145deg, #f093fb 0%, #f5576c 100%)',
    count: '445,221',
    time: '1분',
    url: 'tests/korean-age.html',
    popular: true, hot: true, isNew: true,
  },
  {
    id: 'calorie',
    title: '칼로리 소모 계산기',
    emoji: '🔥',
    category: '건강',
    desc: '운동 종류·시간·체중으로 계산하는 칼로리 소모량. 공기밥 몇 그릇?',
    gradient: 'linear-gradient(145deg, #f7971e 0%, #ffd200 100%)',
    count: '178,334',
    time: '1분',
    url: 'tests/calorie.html',
    popular: false, hot: false, isNew: true,
  },
  {
    id: 'sleep',
    title: '적정 수면 계산기',
    emoji: '😴',
    category: '건강',
    desc: '몇 시에 자야 개운하게 일어날까? 수면 사이클로 계산하는 최적 기상 시간',
    gradient: 'linear-gradient(145deg, #2c3e50 0%, #3498db 100%)',
    count: '267,445',
    time: '1분',
    url: 'tests/sleep.html',
    popular: true, hot: false, isNew: true,
  },

  // ── 금융 ──────────────────────────────────────────
  {
    id: 'salary',
    title: '월급 실수령액 계산기',
    emoji: '💰',
    category: '금융',
    desc: '세전 월급에서 4대보험·소득세 공제 후 실제 받는 금액을 계산해드려요',
    gradient: 'linear-gradient(145deg, #1d976c 0%, #93f9b9 100%)',
    count: '489,334',
    time: '1분',
    url: 'tests/salary.html',
    popular: true, hot: true, isNew: true,
  },
  {
    id: 'annual-wage',
    title: '연봉 계산기',
    emoji: '📊',
    category: '금융',
    desc: '연봉을 월급·주급·일급·시급으로 환산! 내 연봉은 상위 몇 %일까?',
    gradient: 'linear-gradient(145deg, #4facfe 0%, #00f2fe 100%)',
    count: '312,118',
    time: '1분',
    url: 'tests/annual-wage.html',
    popular: true, hot: false, isNew: true,
  },
  {
    id: 'loan',
    title: '대출 이자 계산기',
    emoji: '🏦',
    category: '금융',
    desc: '원리금균등·원금균등·만기일시 상환별 월 납입금과 총 이자를 계산해드려요',
    gradient: 'linear-gradient(145deg, #373b44 0%, #4286f4 100%)',
    count: '234,667',
    time: '2분',
    url: 'tests/loan.html',
    popular: false, hot: false, isNew: true,
  },
  {
    id: 'compound-savings',
    title: '복리 적금 계산기',
    emoji: '📈',
    category: '금융',
    desc: '매달 얼마씩 모으면 얼마가 될까? 복리 효과로 알아보는 적금 수령액',
    gradient: 'linear-gradient(145deg, #11998e 0%, #38ef7d 100%)',
    count: '167,889',
    time: '1분',
    url: 'tests/compound-savings.html',
    popular: false, hot: false, isNew: true,
  },
  {
    id: 'coffee-save',
    title: '커피값 절약 계산기',
    emoji: '☕',
    category: '금융',
    desc: '매일 마시는 커피값을 모으면 얼마? 10년 후 커피 대신 저축하면 얼마일까',
    gradient: 'linear-gradient(145deg, #6f4e37 0%, #c8a882 100%)',
    count: '123,445',
    time: '1분',
    url: 'tests/coffee-save.html',
    popular: false, hot: true, isNew: true,
  },
];

// ---- Render helpers ----

function makePopCard(t) {
  const a = document.createElement('a');
  a.href = t.url;
  a.className = 'pop-card';
  let badge = '';
  if (t.hot)  badge = `<span class="pop-card-badge badge-hot">🔥 HOT</span>`;
  if (t.isNew) badge = `<span class="pop-card-badge badge-new">✨ NEW</span>`;
  a.innerHTML = `
    <div class="pop-card-inner" style="background:${t.gradient}">
      ${badge}
      <span class="pop-card-emoji">${t.emoji}</span>
      <span class="pop-card-title">${t.title}</span>
      <span class="pop-card-count">👥 ${t.count}</span>
    </div>`;
  return a;
}

function makeGridCard(t) {
  const a = document.createElement('a');
  a.href = t.url;
  a.className = 'grid-card';
  a.dataset.category = t.category;
  const newBadge = t.isNew ? `<span class="grid-card-new-badge">NEW</span>` : '';
  a.innerHTML = `
    <div class="grid-card-img" style="background:${t.gradient}">
      ${newBadge}
      <span class="grid-card-emoji">${t.emoji}</span>
    </div>
    <div class="grid-card-body">
      <div class="grid-card-cat">${t.category}</div>
      <div class="grid-card-title">${t.title}</div>
      <div class="grid-card-desc">${t.desc}</div>
      <div class="grid-card-foot">
        <span class="grid-card-count">👥 ${t.count}명</span>
        <span class="grid-card-time">⏱ ${t.time}</span>
      </div>
    </div>`;
  return a;
}

// ---- Category rows config ----
const CATEGORY_ROWS = [
  { cat: '운세',  emoji: '🔮', id: 'cat-운세'  },
  { cat: '심리',  emoji: '🧠', id: 'cat-심리'  },
  { cat: '연애',  emoji: '💕', id: 'cat-연애'  },
  { cat: '육아',  emoji: '👶', id: 'cat-육아'  },
  { cat: '건강',  emoji: '💪', id: 'cat-건강'  },
  { cat: '금융',  emoji: '💰', id: 'cat-금융'  },
  { cat: '추천',  emoji: '🎲', id: 'cat-추천'  },
];

// ---- Render sections ----

function renderPopular() {
  const row = document.getElementById('popularRow');
  TESTS.filter(t => t.popular).forEach(t => row.appendChild(makePopCard(t)));
}

function renderCategoryRows() {
  const container = document.getElementById('categoryRowsContainer');
  container.innerHTML = '';
  CATEGORY_ROWS.forEach(({ cat, emoji, id }) => {
    const list = TESTS.filter(t => t.category === cat);
    if (!list.length) return;
    const sec = document.createElement('section');
    sec.className = 'section';
    sec.id = id;
    sec.innerHTML = `
      <div class="section-header">
        <h2 class="section-title">${emoji} ${cat}</h2>
        <span class="section-count">${list.length}개</span>
      </div>
      <div class="scroll-wrapper">
        <div class="cards-row" id="row-${cat}"></div>
      </div>`;
    container.appendChild(sec);
    const row = sec.querySelector(`#row-${cat}`);
    list.forEach(t => row.appendChild(makePopCard(t)));
  });
}

// ---- Search ----
document.getElementById('searchToggle').addEventListener('click', () => {
  const box = document.getElementById('searchBox');
  box.classList.toggle('open');
  if (box.classList.contains('open')) document.getElementById('searchInput').focus();
});

document.getElementById('searchInput').addEventListener('input', e => {
  const q = e.target.value.trim().toLowerCase();
  const searchSec  = document.getElementById('searchResults');
  const catRows    = document.getElementById('categoryRowsContainer');

  if (!q) {
    searchSec.style.display  = 'none';
    catRows.style.display    = 'block';
    return;
  }

  searchSec.style.display = 'block';
  catRows.style.display   = 'none';
  const grid = document.getElementById('searchGrid');
  grid.innerHTML = '';
  const hits = TESTS.filter(t =>
    t.title.includes(q) || t.desc.includes(q) || t.category.includes(q)
  );
  if (hits.length) {
    hits.forEach(t => grid.appendChild(makeGridCard(t)));
  } else {
    grid.innerHTML = `<p style="color:var(--gray3);padding:40px 0;text-align:center;grid-column:1/-1;">검색 결과가 없습니다 😥</p>`;
  }
});

// ---- Navbar scroll effect ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ---- Init ----
renderPopular();
renderCategoryRows();
