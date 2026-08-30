import Image from "next/image";
import { features, platforms, showcaseMoments, storyMoments } from "./site-content";

function FeatureVisual({ visual }: { visual: (typeof features)[number]["visual"] }) {
  if (visual === "focus") {
    return (
      <div className="focus-cutout">
        <div className="mini-timer"><span>집중</span><strong>00:51</strong></div>
        <Image src="/Desktop-Migam/pet/focused.png" width={1186} height={1327} alt="노트북을 보며 집중하는 감자봇" />
      </div>
    );
  }

  if (visual === "walking") {
    return (
      <div className="feature-walker" aria-label="걷는 감자봇">
        <Image className="walk-frame walk-a" src="/Desktop-Migam/pet/walk-0.png" width={256} height={256} alt="" />
        <Image className="walk-frame walk-b" src="/Desktop-Migam/pet/walk-1.png" width={256} height={256} alt="" />
      </div>
    );
  }

  return (
    <div className="catalog-cutout" aria-label="코스튬 아이템 도감">
      <div className="catalog-item catalog-item-owned">
        <Image src="/Desktop-Migam/pet/reward-neckwarmer.png" width={256} height={256} alt="줄무늬 넥워머" />
        <span>넥워머</span>
      </div>

      <div className="catalog-item catalog-item-owned">
        <Image src="/Desktop-Migam/pet/costume-santa-hat.png" width={256} height={256} alt="산타 모자" />
        <span>산타 모자</span>
      </div>
      <div className="catalog-item catalog-item-locked">
        <Image src="/Desktop-Migam/pet/costume-beanie.png" width={256} height={256} alt="" />
        <span>미획득</span>
      </div>
      <span className="catalog-count">12 / 156 수집</span>
    </div>
  );
}

function StoryVisual({ visual }: { visual: (typeof storyMoments)[number]["id"] }) {
  if (visual === "focus") {
    return (
      <div className="story-focus-visual">
        <div className="story-timer-card"><small>FOCUS SESSION</small><strong>24:55</strong><span><i /> 같이 집중하는 중</span></div>
        <Image src="/Desktop-Migam/pet/focused.png" width={1186} height={1327} alt="노트북을 보며 집중하는 감자봇" />
      </div>
    );
  }

  if (visual === "jump") {
    return (
      <div className="story-jump-visual" aria-label="점프하고 춤추는 감자봇">
        <span className="jump-shadow" />
        <Image className="jump-pet" src="/Desktop-Migam/pet/dance.png" width={256} height={256} alt="" />
        <div className="motion-note motion-note-one">JUMP!</div>
        <div className="motion-note motion-note-two">DANCE!</div>
      </div>
    );
  }

  if (visual === "monitor") {
    return (
      <div className="story-monitor-visual">
        <div className="monitor-panel">
          <span><small>CPU</small><strong>18%</strong></span>
          <i><b style={{ width: "18%" }} /></i>
          <span><small>MEMORY</small><strong>42%</strong></span>
          <i><b style={{ width: "42%" }} /></i>
        </div>
        <Image src="/Desktop-Migam/pet/base-idle.png" width={256} height={256} alt="리소스 상태 옆에 서 있는 감자봇" />
      </div>
    );
  }

  return (
    <div className="story-delivery-visual">
      <div className="delivery-photo delivery-photo-back"><span>YOUR PHOTO</span></div>
      <div className="delivery-photo delivery-photo-front"><span>DRAG & DROP</span></div>
      <Image src="/Desktop-Migam/pet/carry-card.png" width={256} height={256} alt="이미지 카드를 배달하는 감자봇" />
      <span className="delivery-route" aria-hidden="true">· · · · · →</span>
    </div>
  );
}
export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Desktop Migam 홈"><span className="brand-mark">M</span><span>Desktop Migam</span></a>
<span className="beta-badge">BETA TEST</span>
        <nav aria-label="주요 메뉴"><a href="#story">스토리</a><a href="#features">기능</a><a href="#experience">앱 둘러보기</a><a href="#download">다운로드</a><a href="https://github.com/guswl03/Desktop-Migam" target="_blank" rel="noopener noreferrer">GitHub</a></nav>
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
          <div className="pet-walker"><Image className="pet-frame pet-a" src="/Desktop-Migam/pet/walk-0.png" width={256} height={256} alt="" /><Image className="pet-frame pet-b" src="/Desktop-Migam/pet/walk-1.png" width={256} height={256} alt="" /></div>
          <div className="stage-status"><span className="status-dot" />DESKTOP MIGAM IS ACTIVE</div>
          <div className="desktop-line" />
        </div>
      </section>

      <div className="motion-strip" aria-hidden="true">
        <div><span>FOCUS</span><b>✦</b><span>REST</span><b>✦</b><span>COLLECT</span><b>✦</b><span>PLAY</span><b>✦</b><span>FOCUS</span><b>✦</b><span>REST</span><b>✦</b><span>COLLECT</span><b>✦</b><span>PLAY</span><b>✦</b></div>
      </div>

      <section className="story-deck" id="story">
        <header className="story-cover">
          <p className="story-kicker">merHAge presents · 2026</p>
          <h2><span>Desktop</span><span>Migam</span></h2>
          <p className="story-cover-copy">작업 화면 위에 머무는 가장 작은 동료.<br />집중부터 휴식, 보상과 장난까지 한 흐름으로 이어져요.</p>
          <Image className="story-cover-pet" src="/Desktop-Migam/pet/base-idle.png" width={256} height={256} alt="Desktop Migam 감자봇" />
          <span className="story-scroll-note">SCROLL THE STORY ↓</span>
        </header>

        <div className="story-frames">
          {storyMoments.map((moment) => (
            <article className={`story-frame story-frame-${moment.id}`} key={moment.id}>
              <div className="story-frame-copy">
                <span className="story-index">{moment.index} / 04</span>
                <p>{moment.english}</p>
                <h3>{moment.title}</h3>
                <span className="story-rule" />
                <p className="story-description">{moment.description}</p>
              </div>
              <div className="story-scene"><StoryVisual visual={moment.id} /></div>
            </article>
          ))}
        </div>

        <div className="story-finale">
          <div className="story-finale-copy">
            <p className="story-kicker">ONE PET, MANY MOODS</p>
            <h3>한 번의 집중,<br /><em>수많은 표정.</em></h3>
            <p>가만히 있지 않는 작은 친구가 오늘의 데스크톱을 매번 다르게 만들어요.</p>
            <a href="#experience">실제 앱 화면 보기 <span aria-hidden="true">↓</span></a>
          </div>
          <div className="expression-sheet">
            <Image src="/Desktop-Migam/pet/expression-sheet.png" width={1024} height={864} alt="다양한 표정과 동작을 가진 감자봇 캐릭터 모음" />
          </div>
        </div>
      </section>
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
              <Image src="/Desktop-Migam/pet/collection-screen.png" width={1920} height={1140} alt="Desktop Migam의 실제 코스튬 수집 화면" />
              <span className="screen-scan" aria-hidden="true" />
            </div>
          </div>
          <div className="floating-widget focus-widget"><small>FOCUS SESSION</small><strong>24:18</strong><span><i /> 흐름이 좋아요</span></div>
          <div className="floating-widget todo-widget"><small>TODAY</small><span className="todo-done">✓ 자료 정리</span><span>○ 발표 연습</span><b>1 / 2 COMPLETE</b></div>
          <div className="floating-widget ticket-widget"><small>GAMCHA TICKET</small><strong>+1</strong><span>집중 완료 보상</span></div>
          <div className="showcase-pet" aria-hidden="true"><Image className="showcase-pet-a" src="/Desktop-Migam/pet/walk-0.png" width={256} height={256} alt="" /><Image className="showcase-pet-b" src="/Desktop-Migam/pet/walk-1.png" width={256} height={256} alt="" /></div>
        </div>
      </section>

      <section className="collection-band">
        <div><p className="eyebrow">FOCUS · EARN · COLLECT</p><h2>집중이 쌓이면<br />새로운 모습이 열려요.</h2><p>완료한 집중은 티켓이 되고, 티켓은 감자봇의 새로운 코스튬이 돼요.</p></div>
        <div className="collection-scene" aria-label="집중 완료부터 코스튬 획득까지의 흐름">
          <div className="gacha-heading"><small>HOW GAMCHA WORKS</small><strong>집중이 보상이 되는 순간</strong></div>
          <div className="gacha-flow">
            <div className="gacha-step focus-reward-step">
              <span className="step-number">01</span>
              <Image src="/Desktop-Migam/pet/base-idle.png" width={256} height={256} alt="" />
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
              <Image src="/Desktop-Migam/pet/reward-neckwarmer.png" width={256} height={256} alt="줄무늬 넥워머" />
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

      <footer className="site-footer">
        <div className="footer-main">
          <a className="brand" href="#top"><span className="brand-mark">M</span><span>Desktop Migam</span></a>
          <p>집중하는 당신 곁의 작은 데스크톱 친구.</p>
          <a className="footer-github" href="https://github.com/guswl03/Desktop-Migam" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        </div>
        <div className="footer-credits">
          <p className="credit-track">BoB 15기 · 보안제품개발트랙</p>
          <div className="credit-makers">
            <span>미감펫을 만든 사람들</span>
            <strong>이현지</strong><i />
            <strong>강인태</strong><i />
            <strong>정현조</strong>
          </div>
          <p className="mentor-thanks">미친감자 이미지 사용을 허락해 주신 <strong>김주생 멘토님</strong>께 감사드립니다.</p>
        </div>
        <p className="footer-copyright">© 2026 DESKTOP MIGAM · MADE WITH FOCUS AND PLAY</p>
      </footer>
    </main>
  );
}




