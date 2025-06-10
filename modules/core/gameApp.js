// 게임 초기화를 담당하는 진입점이다.
// 이벤트 리스너 설정과 인트로 화면, 저장/불러오기 로직을 관리한다.

import { attachMessageListeners, setupDialogueClickHandler } from '../input/inputHandlers.js';
import { createIntroScreen } from '../ui/introScreenManager.js';
import { initHintSystem, showAnswerInput } from '../dialogue/answerHandler.js';
import { getCombinedDialogue, findLastImage } from '../dialogue/dialogueManager.js';
import { setVh } from '../ui/viewportUtils.js';
import { autoUpdateSkipButton, updateSkipButton } from '../ui/control/skipButtonController.js';
import { showPopup, showNotification } from '../ui/popup/popupHandler.js';
import { downloadSave } from '../save/saveManager.js';
import { showDialogue } from '../dialogue/showDialogue.js';
import { applyTheme } from '../ui/themeManager.js';

export default function initGameApp(context) {

  const currentDialogue = getCombinedDialogue();
  context.currentDialogue = currentDialogue;

  const { image: lastImage, index: lastImageIndex } = findLastImage(currentDialogue, context.indexRef.value);

  window.addEventListener('resize', setVh);
  window.addEventListener('load', setVh);

  // =====================================
  // 5. 최초 실행
// =====================================
function startGame() {
  document.getElementById("main-start-screen").style.display = "none";
  document.getElementById("game-wrapper").style.display = "block";
  context.gameStarted = true;
  context.updateLevelBar(context.indexRef.value, context.currentDialogue);
if (context.saveBtn) {
  context.saveBtn.style.display = 'block';
}
  
context.suppressClick = true;
  setTimeout(() => {
    context.suppressClick = false;
  }, 500); // 🔒 0.5초 동안 클릭 방지
}



window.addEventListener('load', () => {
// ✅ 시작 선택 팝업 생성
const startChoicePopup = document.createElement('div');
startChoicePopup.id = 'start-choice-popup';
startChoicePopup.innerHTML = `
  <div class="popup-inner">
    <div id="popup-close" class="popup-close">
      <img src="images/close-icon.png" alt="닫기">
    </div>
    <div id="popup-back" class="popup-back">
      <img src="images/back-icon.png" alt="뒤로가기">
    </div>

    <div id="main-options">
      <div class="icon">🎮</div>
      <div class="title">게임을 어떻게 시작할까요?</div>
      <div class="subtitle">
        진행 중이던 저장 데이터를<br>
        불러올 수도 있어요.
      </div>
      <div class="popup-buttons">
        <button id="start-new-btn">처음부터</button>
        <button id="start-load-btn">불러오기</button>
      </div>
    </div>

    <div id="slot-options">
      <div class="title">슬롯을 선택하세요</div>
      <div class="slot-buttons">
        <button id="slot-1">📂 슬롯 1</button>
        <button id="slot-2">📂 슬롯 2</button>
        <button id="slot-3">📂 슬롯 3</button>
      </div>
    </div>
  </div>
`;
document.body.appendChild(startChoicePopup);

  
  // 버튼 이벤트 연결 (삽입 이후여야 함)
  document.getElementById('popup-close').onclick = () => {
    startChoicePopup.style.display = 'none';
  };

  document.getElementById('popup-back').onclick = () => {
    document.getElementById('main-options').style.display = 'block';
    document.getElementById('slot-options').style.display = 'none';
    document.getElementById('popup-back').style.display = 'none';
  };

  document.getElementById('start-load-btn').onclick = () => {
    document.getElementById('main-options').style.display = 'none';
    document.getElementById('slot-options').style.display = 'block';
    document.getElementById('popup-back').style.display = 'block';
  };

document.getElementById('start-new-btn').onclick = () => {
  // ✅ 인트로 화면 제거!
  const intro = document.getElementById('intro-screen');
  if (intro) intro.remove();
  
  startChoicePopup.style.display = 'none';
  document.getElementById("main-start-screen").style.display = "none";
  document.getElementById("game-wrapper").style.display = "block";

  context.gameStarted = true;
  context.saveBtn.style.display = 'block';
  context.indexRef.value = 0;
  context.currentDialogue = currentDialogue;
  showDialogue(context.indexRef.value, context);
  initHintSystem(context);
  autoUpdateSkipButton(context);
};


['1', '2', '3'].forEach(num => {
  document.getElementById(`slot-${num}`).onclick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.style.display = 'none';

    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
reader.onload = (event) => {
  if (context.overlayImage) context.overlayImage.style.display = 'none';
  if (context.overlayImage) context.overlayImage.src = '';
 context.preventAutoAdvance.value = true;
  try {
    const data = JSON.parse(event.target.result);
    if (!data || typeof data.index !== 'number') {
      alert("유효하지 않은 저장 파일입니다.");
      return;
    }

    // 저장된 테마 적용
    if (data.theme) applyTheme(data.theme);

    context.currentDialogue = data.dialogue;
    context.indexRef.value = data.index;
    context.saveLoaded = true;
    context.isRestored = true;

// ─── 2) 배경 복원 ───
const videoEl = document.getElementById('bg-video');

if (data.lastVideoIndex > data.lastImageIndex) {
  // 비디오 우선
  if (videoEl) {
    videoEl.src = data.lastVideo;
    videoEl.load();
    videoEl.style.display = 'block';
  }

  if (context.gameWrapper) context.gameWrapper.style.background = '';
  const startScreen = document.getElementById('main-start-screen');
  if (startScreen) startScreen.style.background = '';
  if (context.overlayImage) {
    context.overlayImage.style.display = 'none';
    context.overlayImage.src = '';
  }

} else {
  // 이미지 우선
  if (context.gameWrapper) {
    context.gameWrapper.style.background = `url('${data.lastImage}') no-repeat center center`;
    context.gameWrapper.style.backgroundSize = 'cover';
  }

  if (videoEl) videoEl.style.display = 'none';
}
    
   // ─── 2-1) 오버레이 이미지/배경 복원 ───
   if (data.overlayImageSrc) {
     // (1) 이미지 소스 복원
     context.overlayImage.src = data.overlayImageSrc;
     // (2) 보여짐/숨김 상태 복원
     context.overlayImage.style.display = data.overlayImageVisible;
     
   }
    // ─── 3) 카카오톡 대화 복원 ───
// 3) 카카오톡 대화 복원
if (data.overlayHistory !== undefined && context.kakaoOverlay) {
  context.kakaoOverlay.innerHTML = data.overlayHistory;
}

if (data.history !== undefined) {
  context.kakaoBox.innerHTML = data.history;

  const current = context.currentDialogue[context.indexRef.value];

  // 카카오 하이드 조건 명시 (기존 로직 유지)
  if (current.notification) {
    if (current.hideKakao) {
      context.kakaoBox.style.display = 'none';
      context.kakaoOverlay.style.display = 'none';
    } else {
      context.kakaoBox.style.display = 'block';
      context.kakaoOverlay.style.display = 'block';
      context.scrollToBottom(context.kakaoBox);
    }
  }

  // ✅ 보완 로직: 혹시 조건 안 걸렸을 경우 기본적으로 보여줌
  if (!current.notification) {
    context.kakaoBox.style.display = 'block';
    context.kakaoOverlay.style.display = 'block';
    context.scrollToBottom(context.kakaoBox);
  }
}

// ─── 4) 선택지 복원 ───
if (data.choiceHistory !== undefined) {
  context.choiceContainer.innerHTML = data.choiceHistory;
  context.choiceContainer.style.display = data.choiceVisible;
  autoUpdateSkipButton(context);
}

if (data.answerVisible && data.answerVisible !== 'none') {
  // 1) HTML & 표시 상태 복원
  context.answerContainer.innerHTML = data.answerHTML;
  context.answerContainer.style.display = data.answerVisible;

  // 2) 입력창 로직 재바인딩 (정답 전달)
  const correct = context.currentDialogue[context.indexRef.value].answer;
  showAnswerInput(correct, context);

  // 4) 입력 대기 & 스킵/카톡 처리
  context.isWaitingForAnswer.value = true;
  context.suppressClick = true;
  context.toggleKakaoDisplay(false, context.kakaoBox, context.kakaoOverlay);
}

// 카카오톡 숨기기 여부 처리
if (context.currentDialogue[context.indexRef.value].answer) {
  context.toggleKakaoDisplay(false, context.kakaoBox, context.kakaoOverlay);
}

// 첫 대사 렌더링
const first = context.currentDialogue[context.indexRef.value];
if (first && first.talk) {
  context.talkWrapper.style.display = 'block';
  context.nameEl.textContent = first.name || '';
  context.bubbleEl.textContent = first.text || '';
}

if (context.currentDialogue[context.indexRef.value].hideKakao) {
  context.toggleKakaoDisplay(false, context.kakaoBox, context.kakaoOverlay);
}

document.getElementById("start-choice-popup").style.display = "none";

// 1) Intro 제거
const intro = document.getElementById('intro-screen');
if (intro) intro.remove();

// 2) 메인 스타트(로비) 화면 표시
document.getElementById("main-start-screen").style.display = "flex";

// 3) 게임 화면 숨기기
document.getElementById("game-wrapper").style.display = "none";

// 4) 로드된 위치로 레벨바 동기화
context.updateLevelBar(context.indexRef.value, context.currentDialogue);

// ─── 9) 내부 플래그 초기화 ───
context.notificationActive = false;
autoUpdateSkipButton(context);
context.overlayJustCleared = false;  // ⚠️ 이거 context에 넣었을 경우에만
setTimeout(() => {
  context.suppressClick = false;
}, 300);

context.preventAutoAdvance.value = false;
initHintSystem(context);

  } catch (err) {
    console.error("파일 파싱 실패:", err);
    alert("파일 읽기 실패");
  }
};

  reader.onerror = (err) => {
    console.error("파일 읽기 오류:", err);
    alert("파일을 불러오는 중 오류가 발생했습니다.");
  };
  
reader.readAsText(file);
    };

    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
  };
});

// 팝업 요소 생성
const msgBox = document.createElement('div');
msgBox.className = 'popup-message';
msgBox.innerHTML = `
  <div class="popup-message-text">슬롯 X에 저장되었습니다.</div>
  <button class="popup-message-close">닫기</button>
`;
document.body.appendChild(msgBox);

// ✅ context에 등록
context.msgBox = msgBox;

// 닫기 버튼 이벤트
msgBox.querySelector('.popup-message-close').addEventListener('click', (e) => {
  e.stopPropagation();
  msgBox.classList.remove('active');
  window.suppressClick = false; // ✅ 수정됨
});

document.querySelectorAll('.save-slot-btn').forEach(btn => {
  btn.onclick = (e) => {
    e.stopPropagation();
    const slot = btn.dataset.slot;

    // 모듈화된 함수 사용
    downloadSave(slot, context, context.showPopup);

    context.savePopup.style.display = 'none';
  };
});
  
const closeBtn = context.savePopup?.querySelector('#save-popup-close');
if (closeBtn) {
  closeBtn.onclick = (e) => {
    e.stopPropagation();
    context.savePopup.style.display = 'none';

    // ✅ suppressClick 정확하게 수정
    setTimeout(() => {
      window.suppressClick = false;
    }, 300);
  };
}
// ✅ 게임 인트로 시작 처리 (불러오기 포함 전체 정리)
createIntroScreen(() => {
  context.gameStarted = true;

  if (!context.currentDialogue || !Array.isArray(context.currentDialogue)) {
    context.currentDialogue = [];
  }

  if (
    context.saveLoaded &&
    Array.isArray(context.currentDialogue) &&
    context.indexRef.value >= 0 &&
    context.indexRef.value < context.currentDialogue.length
  ) {
    const first = context.currentDialogue[context.indexRef.value];
  
    const textExists = (() => {
      if (first.kakao || first.system || first.talk) {
        const text = first.text?.replace(/\s+/g, '');
        const content = context.kakaoBox.innerHTML.replace(/\s+/g, '');
        return text && content.includes(text);
      }
      return false;
    })();

    if (!textExists) {
      showDialogue(context.indexRef.value, context);
    }

    context.scrollToBottom(context.kakaoBox);
    context.saveLoaded = false;
  } else {
    context.indexRef.value = 0;
    if (context.currentDialogue.length > 0) {
      showDialogue(context.indexRef.value, context);
    }
  }

  context.saveBtn.style.display = 'block';
},
context.showDialogue, // ✅ 전달
context               // ✅ 전달
);

context.gameWrapper.style.display = 'none';

const startScreen = document.getElementById('main-start-screen');
const levelBox = context.createLevelBox();
startScreen.appendChild(levelBox);
if (startScreen) {
  startScreen.style.display = 'none';
}
});

document.addEventListener('DOMContentLoaded', () => {
  context.autoUpdateSkipButton = autoUpdateSkipButton;
  context.saveBtn = document.getElementById('save-btn');
  console.log('📢 DOMContentLoaded fired'); 
  console.log('▶️ attachMessageListeners 호출 직전');
  context.gameWrapper = document.getElementById('game-wrapper');
  context.kakaoBox = document.getElementById('kakao-chat-box');
  context.choiceContainer = document.getElementById('choice-container');
  context.talkWrapper = document.getElementById('talk-wrapper');
  context.nameEl = document.querySelector('.dialogue-name');
  context.bubbleEl = document.querySelector('.dialogue-bubble');
  context.kakaoOverlay = document.getElementById('kakao-overlay');
  context.overlayImage = document.getElementById('overlay-image');
  context.answerUi = document.getElementById('answer-ui');
  context.answerInput = document.getElementById('answer-input');
  context.submitAnswer = document.getElementById('submit-answer');
  context.hintPopup = document.getElementById('hint-popup');
  context.hintStep1 = document.getElementById('hint-step1');
  context.hintStep2 = document.getElementById('hint-step2');
  context.hintBtn = document.getElementById('hint-btn');
  context.hintConfirm = document.getElementById('hint-confirm');
  context.msgBox = document.querySelector('.popup-message');
  
  // ✅ 저장 팝업 생성
const savePopup = document.createElement('div');
savePopup.id = 'save-slot-popup';
savePopup.className = 'save-popup hidden'; // 클래스만 지정
document.body.appendChild(savePopup);
context.savePopup = savePopup;
context.savePopup.innerHTML = `
  <div class="save-popup-box">
    <div id="save-popup-close" class="save-popup-close">
      <img src="images/close-icon.png" alt="닫기">
    </div>
    <div class="save-popup-title">어디에 저장할까요?</div>
    <div class="save-popup-desc">현재 진행 위치를 저장합니다.</div>
    <div class="save-slot-btns">
      <button class="save-slot-btn" data-slot="1">📂 슬롯 1 저장</button>
      <button class="save-slot-btn" data-slot="2">📂 슬롯 2 저장</button>
      <button class="save-slot-btn" data-slot="3">📂 슬롯 3 저장</button>
    </div>
  </div>
`;

context.saveBtn.onclick = (e) => {
  e.stopPropagation();
  context.suppressClick = true;
  context.savePopup.classList.remove('hidden');
  context.savePopup.style.display = 'flex';
};

  if (!context.skipBtn) {
    const skipBtn = document.createElement('button');
    skipBtn.id = 'skip-button';
    skipBtn.textContent = '⏩ 스킵';
    skipBtn.classList.add('skip-btn');
    skipBtn.style.display = 'none';
    document.body.appendChild(skipBtn);
    context.skipBtn = skipBtn;
  }
  context.skipBtn.addEventListener('click', () => {
    context.skipModeRef.value = true;
    context.jumpToNextInterrupt(context); // ✅ 이거 하나만 있어야 함
  });

  attachMessageListeners({
    // 필수 요소들
    kakaoBox: context.kakaoBox,
    showDialogue,
    context,

    // 버튼 엘리먼트
    saveBtn: context.saveBtn,
    skipBtn: context.skipBtn,
    hintBtn: document.getElementById('hint-button'),
    hintConfirm: document.getElementById('hint-confirm'),
    answerContainer: context.answerContainer,

    getGameState: () => ({
      preventAutoAdvance: context.preventAutoAdvance.value,
      isWaitingForAnswer: context.isWaitingForAnswer.value
    }),

    indexRef: context.indexRef
  });

  console.log('▶️ attachMessageListeners 호출 완료');
  console.log('▶️ initHintSystem 호출 직전');
  console.log('▶️ initHintSystem 호출 완료');
  setupDialogueClickHandler(context);
});

}

