// 게임 초기화를 담당하는 진입점이다.
// 이벤트 리스너 설정과 인트로 화면, 저장/불러오기 로직을 관리한다.

import { attachMessageListeners, setupDialogueClickHandler } from '../input/inputHandlers.js';
import { createIntroScreen } from '../ui/introScreenManager.js';
import { initHintSystem } from '../dialogue/answerHandler.js';
import { getCombinedDialogue } from '../dialogue/dialogueManager.js';
import { setVh } from '../ui/viewportUtils.js';
import { ensureSkipButton } from '../ui/control/skipButtonController.js';
import { showDialogue } from '../dialogue/showDialogue.js';
import { setupStartChoicePopup } from '../ui/popup/startChoicePopup.js';
import { setupSavePopup } from '../ui/popup/savePopupManager.js';
import { setupMenuPopup } from '../ui/popup/menuPopupManager.js';
import { initDomRefs } from './initDomRefs.js';

export default function initGameApp(context) {

  const currentDialogue = getCombinedDialogue();
  context.currentDialogue = currentDialogue;


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
if (context.menuBtn) {
  context.menuBtn.style.display = 'block';
}
  
context.suppressClick = true;
  setTimeout(() => {
    context.suppressClick = false;
  }, 500); // 🔒 0.5초 동안 클릭 방지
}



window.addEventListener('load', () => {
  setupStartChoicePopup(context, currentDialogue);

  createIntroScreen(() => {
    context.gameStarted = true;

    if (!Array.isArray(context.currentDialogue)) {
      context.currentDialogue = [];
    }

    if (
      context.saveLoaded &&
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

    context.menuBtn.style.display = 'block';
  }, context.showDialogue, context);

  context.gameWrapper.style.display = 'none';

  const startScreen = document.getElementById('main-start-screen');
  const levelBox = context.createLevelBox();
  startScreen.appendChild(levelBox);
  context.giveBokBtn = levelBox.querySelector('#give-bok-btn');
  context.bokCountEl = levelBox.querySelector('#bok-count');
  context.updateBokDisplay(context.bokCount);

  if (context.giveBokBtn) {
    context.giveBokBtn.onclick = (e) => {
      e.stopPropagation();
      if (context.bokCount > 0) {
        context.bokCount -= 1;
        localStorage.setItem('bokCount', String(context.bokCount));
        context.updateBokDisplay(context.bokCount);
        context.showPopup('복을 주었습니다!');
      } else {
        context.showPopup('복이 부족합니다!');
      }
    };
  }
  if (startScreen) {
    startScreen.style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  initDomRefs(context);
  setupSavePopup(context);
  setupMenuPopup(context);
  ensureSkipButton(context);

  attachMessageListeners({
    kakaoBox: context.kakaoBox,
    showDialogue,
    context,
    saveBtn: context.menuBtn,
    skipBtn: context.skipBtn,
    hintBtn: document.getElementById('hint-button'),
    hintConfirm: document.getElementById('hint-confirm'),
    answerContainer: context.answerContainer,
    getGameState: () => ({
      preventAutoAdvance: context.preventAutoAdvance.value,
      isWaitingForAnswer: context.isWaitingForAnswer.value,
    }),
    indexRef: context.indexRef,
  });

  setupDialogueClickHandler(context);
});

}

