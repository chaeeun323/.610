// 인트로 화면 요소를 만들고 초기 게임 컨트롤을 연결한다.


import { updateLevelBar } from './levelBarManager.js';
import { scrollToBottom } from '../kakao/kakaoMessageManager.js';
import { initHintSystem } from '../dialogue/answerHandler.js';
import { attachMessageListeners } from '../input/inputHandlers.js';

export function createIntroScreen(startGameCallback, showDialogue, context) {
  const introScreen = document.createElement('div');
  introScreen.id = 'intro-screen';

  const introButton = document.createElement('img');
  introButton.src = 'images/title_botton2.png';
  introButton.alt = '지금 꼬시러 가기!';
  introButton.classList.add('intro-button');
  introButton.onclick = () => {
    document.getElementById('start-choice-popup').style.display = 'flex';
  };

  introScreen.appendChild(introButton);
  document.body.appendChild(introScreen);

  const startScreen = document.createElement('div');
  startScreen.id = 'main-start-screen';

  const bgVideo = document.createElement('video');
  bgVideo.src = 'videos/prologue.mp4';
  bgVideo.autoplay = true;
  bgVideo.loop = true;
  bgVideo.muted = true;
  bgVideo.playsInline = true;
  bgVideo.classList.add('bg-video');

  startScreen.appendChild(bgVideo);

  const clickArea = document.createElement('div');
  clickArea.id = 'intro-click-area';
  startScreen.appendChild(clickArea);

  const bubble = document.createElement('div');
  bubble.id = 'intro-bubble';
  startScreen.appendChild(bubble);

  const bubbleMessages = ['심심해', '배고파', '보고싶었어', '뽀용뽀용', '뾰쨔쟈'];

  clickArea.addEventListener('click', () => {
    const msg = bubbleMessages[Math.floor(Math.random() * bubbleMessages.length)];
    bubble.textContent = msg;
    bubble.classList.remove('show');
    void bubble.offsetWidth; // force reflow so animation can restart
    bubble.classList.add('show');
  });

  bubble.addEventListener('animationend', (e) => {
    if (e.animationName === 'bubble-smoke') {
      bubble.classList.remove('show');
    }
  });

  const menuWrapper = document.createElement('div');
  menuWrapper.id = 'bottom-menu';
  const menuGrid = document.createElement('div');
  menuGrid.className = 'menu-grid';
  menuWrapper.appendChild(menuGrid);

  const menus = [
    ["images/icon-gift.png", "선물함"],
    ["images/icon-calendar.png", "출석체크"],
    ["images/icon-chat.png", "단톡방"],
    ["images/icon-game.png", "미니게임"],
    ["images/icon-save.png", "저장"],
    ["images/icon-story.png", "스토리"],
    ["images/icon-video.png", "인트로"]
  ];

  menus.forEach(([src, label]) => {
    const btn = document.createElement('div');
    btn.className = 'card-button';
    const icon = document.createElement('img');
    icon.src = src;
    icon.alt = label;
    const labelEl = document.createElement('div');
    labelEl.textContent = label;
    btn.appendChild(icon);
    btn.appendChild(labelEl);
    menuGrid.appendChild(btn);
    btn.addEventListener('click', () => {
      bottomSheet.classList.toggle('show');
    });
  });

  startScreen.appendChild(menuWrapper);

  const bottomSheet = document.createElement('div');
  bottomSheet.id = 'bottom-sheet';
  bottomSheet.className = 'bottom-sheet';
  const bottomSheetContent = document.createElement('div');
  bottomSheetContent.className = 'bottom-sheet-content';
  bottomSheetContent.textContent = '여기에 원하는 내용을 넣으세요!';
  bottomSheet.appendChild(bottomSheetContent);
  document.body.appendChild(bottomSheet);

  const button = document.createElement('img');
  button.src = 'images/title_botton2.png';
  button.alt = '게임 시작';
  button.className = 'start-button';

  button.addEventListener('click', function (e) {
    e.stopPropagation();
    document.getElementById("start-choice-popup").style.display = "none";
    document.getElementById("main-start-screen").style.display = "none";
    document.getElementById("game-wrapper").style.display = "block";

    startGameCallback();

setTimeout(() => {
  const waitForHintButton = setInterval(() => {
    const hintBtn = document.getElementById('hint-button');
    const hintConfirm = document.getElementById('hint-confirm');

    if (hintBtn && hintConfirm) {
      clearInterval(waitForHintButton);  // ✅ 버튼이 존재하는 시점에서만 이벤트 바인딩

      hintBtn.onclick = () => {
        hintConfirm.style.display = 'block';
      };
      initHintSystem(context); // 💡 이제 제대로 실행됨

      attachMessageListeners({
        kakaoBox: context.kakaoBox,
        showDialogue,
        showSkipButton: context.updateSkipButton,
        hintBtn,
        hintConfirm,
        answerContainer: document.getElementById('answer-ui'),
        saveBtn: document.getElementById('save-btn'),
        skipBtn: document.getElementById('skip-btn'),
        getGameState: () => context.currentDialogue,
        indexRef: context.indexRef,
      });
    }
  }, 100); // 🔁 hint-button이 나올 때까지 100ms 간격으로 검사
}, 100);  // 게임 전환 직후 타이머

    const i = context.indexRef?.value ?? 0;
    updateLevelBar(i, context.currentDialogue || []);

    const first = context.currentDialogue[i];
    const alreadyDrawn =
      (first.kakao || first.system || first.talk) &&
      (
        context.kakaoBox.innerHTML.includes(first.text) ||
        context.bubbleEl.textContent.includes(first.text)
      );

    if (!alreadyDrawn) {
      showDialogue(i, context);
    } else {
      console.log("🔁 대사 중복 출력 방지됨:", first.text);
    }

    if (context.skipBtn) context.skipBtn.style.display = 'block';
    requestAnimationFrame(() => {
      scrollToBottom(context.kakaoBox);
    });
  });

  startScreen.style.position = 'relative';
  startScreen.style.display = 'none';
  startScreen.appendChild(button);
  document.body.appendChild(startScreen);
}
