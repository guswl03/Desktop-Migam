import { features, platforms, showcaseMoments } from "./site-content";

function FeatureVisual({ visual }: { visual: (typeof features)[number]["visual"] }) {
  if (visual === "focus") {
    return (
      <div className="focus-cutout">
        <div className="mini-timer"><span>집중</span><strong>00:51</strong></div>
        <img src="./pet/focused.png" alt="노트북을 보며 집중하는 감자봇" />
      </div>
    );
  }

  if (visual === "walking") {
    return (
      <div className="feature-walker" aria-label="걷는 감자봇">
        <img className="walk-frame walk-a" src="./pet/walk-0.png" alt="" />
        <img className="walk-frame walk-b" src="./pet/walk-1.png" alt="" />
      </div>
    );
  }

  return (
    <div className="catalog-cutout" aria-label="코스튬 아이템 도감">
      <div className="catalog-item catalog-item-owned">
        <img src="./pet/reward-neckwarmer.png" alt="줄무늬 넥워머" />
        <span>넥워머</span>
      </div>

      <div className="catalog-item catalog-item-owned">
        <img src="./pet/costume-santa-hat.png" alt="산타 모자" />
        <span>산타 모자</span>
      </div>
      <div className="catalog-item catalog-item-locked">
        <img src="./pet/costume-beanie.png" alt="" />
        <span>미획득</span>
      </div>
      <span className="catalog-count">12 / 156 수집</span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Desktop Migam 홈"><span className="brand-mark">M</span><span>Desktop Migam</span></a>
<span className="beta-badge">BETA TEST</span>
        <nav aria-label="주요 메뉴"><a href="#features">기능</a><a href="#experience">앱 둘러보기</a><a href="#download">다운로드</a><a href="https://github.com/guswl03/Desktop-Migam" target="_blank" rel="noopener noreferrer">GitHub</a></nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">YOUR TINY FOCUS PARTNER</p>
          <h1>집중하는 시간에<br /><em>작은 친구</em>를 더해요.</h1>
          <p className="hero-description">Desktop Migam은 화면 한쪽에서 함께 움직이며 집중, 휴식, 할 일을 챙겨주는 데스크톱 펫이에요.</p>
          <a className="primary-button" href="#download">내 OS 버전 선택하기 <span aria-hidden="true">↓</span></a>
          <p className="support-note">Windows와 macOS에서 만날 수 있어요</p>
        </div>
        <div className="hero-stage" aria-label="화면 위를 걷는 감자봇 캐릭터">
          <div className="window-card window-card-left"><span>FOCUS</span><strong>25:00</strong><small>오늘도 천천히, 꾸준히.</small></div>
          <div className="window-card window-card-right"><span>TODAY</span><strong>3 / 4</strong><small>집중 세션 완료</small></div>
          <div className="speech-bubble">집중 시작할까요?</div>
          <div className="pet-walker"><img className="pet-frame pet-a" src="./pet/walk-0.png" alt="" /><img className="pet-frame pet-b" src="./pet/walk-1.png" alt="" /></div>
          <div className="stage-status"><span className="status-dot" />DESKTOP MIGAM IS ACTIVE</div>
          <div className="desktop-line" />
        </div>
      </section>

      <div className="motion-strip" aria-hidden="true">
        <div><span>FOCUS</span><b>✦</b><span>REST</span><b>✦</b><span>COLLECT</span><b>✦</b><span>PLAY</span><b>✦</b><span>FOCUS</span><b>✦</b><span>REST</span><b>✦</b><span>COLLECT</span><b>✦</b><span>PLAY</span><b>✦</b></div>
      </div>

      <section className="features section-shell" id="features">
        <div className="section-heading"><p className="eyebrow">HOW IT HELPS</p><h2>일하는 흐름은 지키고,<br />책상 위 재미는 더하고.</h2></div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <span className="feature-number">{feature.number}</span>
              <div className="feature-visual"><FeatureVisual visual={feature.visual} /></div>
              <h3>{feature.title}</h3><p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="experience section-shell" id="experience">
        <div className="experience-copy">
          <p className="eyebrow">ACTUALLY ON YOUR DESKTOP</p>
          <h2>앱을 켜는 순간,<br />화면에 작은 세계가 열려요.</h2>
          <p className="experience-lead">타이머만 있는 생산성 앱이 아니에요. 집중하고, 반응하고, 보상을 모으는 흐름이 한 캐릭터 안에서 자연스럽게 이어집니다.</p>
          <div className="moment-list">
            {showcaseMoments.map((moment) => (
              <article className="moment" key={moment.id}>
                <span>{moment.index}</span>
                <div><h3>{moment.title}</h3><p>{moment.description}</p></div>
              </article>
            ))}
          </div>
        </div>

        <div className="experience-stage" aria-label="Desktop Migam 앱 화면과 기능 위젯">
          <div className="app-window">
            <div className="app-titlebar"><span className="window-dots"><i /><i /><i /></span><strong>GAMCHA · COLLECTION</strong><small>12 / 156</small></div>
            <div className="app-shot">
              <img src="./pet/collection-screen.png" alt="Desktop Migam의 실제 코스튬 수집 화면" />
              <span className="screen-scan" aria-hidden="true" />
            </div>
          </div>
          <div className="floating-widget focus-widget"><small>FOCUS SESSION</small><strong>24:18</strong><span><i /> 흐름이 좋아요</span></div>
          <div className="floating-widget todo-widget"><small>TODAY</small><span className="todo-done">✓ 자료 정리</span><span>○ 발표 연습</span><b>1 / 2 COMPLETE</b></div>
          <div className="floating-widget ticket-widget"><small>GAMCHA TICKET</small><strong>+1</strong><span>집중 완료 보상</span></div>
          <div className="showcase-pet" aria-hidden="true"><img className="showcase-pet-a" src="./pet/walk-0.png" alt="" /><img className="showcase-pet-b" src="./pet/walk-1.png" alt="" /></div>
        </div>
      </section>

      <section className="collection-band">
        <div><p className="eyebrow">FOCUS · EARN · COLLECT</p><h2>집중이 쌓이면<br />새로운 모습이 열려요.</h2><p>완료한 집중은 티켓이 되고, 티켓은 감자봇의 새로운 코스튬이 돼요.</p></div>
        <div className="collection-scene" aria-label="집중 완료부터 코스튬 획득까지의 흐름">
          <div className="gacha-heading"><small>HOW GAMCHA WORKS</small><strong>집중이 보상이 되는 순간</strong></div>
          <div className="gacha-flow">
            <div className="gacha-step focus-reward-step">
              <span className="step-number">01</span>
              <img src="./pet/base-idle.png" alt="" />
              <strong>집중 완료</strong>
              <small>한 세션을 끝내면</small>
            </div>
            <div className="gacha-step ticket-draw-step">
              <span className="step-number">02</span>
              <div className="ticket-token">TICKET <b>+1</b></div>
              <span className="flow-arrow" aria-hidden="true">→</span>
              <strong>티켓으로 뽑기</strong>
              <small>새 코스튬을 열어요</small>
            </div>
            <div className="gacha-step item-reward-step">
              <span className="step-number">03</span>
              <img src="./pet/reward-neckwarmer.png" alt="줄무늬 넥워머" />
              <span className="reward-rarity">COMMON</span>
              <strong>줄무늬 넥워머</strong>
              <small>도감에 등록 완료</small>
            </div>
          </div>
        </div>
      </section>

      <section className="download section-shell" id="download">
        <p className="eyebrow">CHOOSE YOUR DESKTOP</p><h2>어디에서 함께할까요?</h2><p className="download-intro">운영체제를 선택하면 최신 베타 릴리스로 바로 이동합니다.<br />설치 파일과 안내를 한곳에서 확인하세요.</p>
<p className="beta-notice"><strong>베타 테스트 안내</strong><span>현재 정식 출시 전 베타 테스트 버전입니다.</span></p>
        <div className="platform-grid">{platforms.map((platform) => <a className="platform-card" href={platform.downloadHref} target="_blank" rel="noopener noreferrer" key={platform.name}><span className="platform-icon" aria-hidden="true">{platform.name === "Windows" ? "⊞" : "●"}</span><span><strong>{platform.label}</strong><small>{platform.note} · 최신 {platform.version}</small></span><b aria-hidden="true">↓</b></a>)}</div>
        <p className="source-links">소스 코드가 궁금한가요? {platforms.map((platform, index) => <span key={platform.name}>{index > 0 && " · "}<a href={platform.href} target="_blank" rel="noopener noreferrer">{platform.name} 저장소 ↗</a></span>)}</p>
      </section>

      <footer><a className="brand" href="#top"><span className="brand-mark">M</span><span>Desktop Migam</span></a><p>집중하는 당신 곁의 작은 데스크톱 친구.</p><a href="https://github.com/guswl03/Desktop-Migam" target="_blank" rel="noopener noreferrer">GitHub ↗</a></footer>
    </main>
  );
}




