import { initHintSystem, showAnswerInput } from '../../dialogue/answerHandler.js';
import { applyTheme } from '../themeManager.js';
import { autoUpdateSkipButton } from '../control/skipButtonController.js';
import { loadFromLocal } from '../../save/saveManager.js';

export function setupStartChoicePopup(context, currentDialogue) {
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
  // Prevent popup interactions from advancing dialogue
  startChoicePopup.addEventListener('click', (e) => e.stopPropagation());

  const hidePopup = () => {
    startChoicePopup.style.display = 'none';
    startChoicePopup.querySelector('#main-options').style.display = 'block';
    startChoicePopup.querySelector('#slot-options').style.display = 'none';
    startChoicePopup.querySelector('#popup-back').style.display = 'none';
  };

  // ensure popup starts hidden even if CSS fails to load
  hidePopup();

  startChoicePopup.querySelector('#popup-close').onclick = hidePopup;
  startChoicePopup.querySelector('#popup-back').onclick = () => {
    startChoicePopup.querySelector('#main-options').style.display = 'block';
    startChoicePopup.querySelector('#slot-options').style.display = 'none';
    startChoicePopup.querySelector('#popup-back').style.display = 'none';
  };

  startChoicePopup.querySelector('#start-load-btn').onclick = () => {
    startChoicePopup.querySelector('#main-options').style.display = 'none';
    startChoicePopup.querySelector('#slot-options').style.display = 'block';
    startChoicePopup.querySelector('#popup-back').style.display = 'block';
  };

  startChoicePopup.querySelector('#start-new-btn').onclick = () => {
    const intro = document.getElementById('intro-screen');
    if (intro) intro.style.display = 'none';
    hidePopup();
    document.getElementById('main-start-screen').style.display = 'none';
    document.getElementById('game-wrapper').style.display = 'block';
    // Reset persistent data so a new game truly starts fresh
    localStorage.removeItem('attendanceCount');
    context.attendanceCount = 0;
    localStorage.removeItem('bokCount');
    context.bokCount = 0;
    context.updateBokDisplay(context.bokCount);
    context.gameStarted = true;
    if (context.menuBtn) context.menuBtn.style.display = 'block';
    context.indexRef.value = 0;
    context.currentDialogue = currentDialogue;
    context.showDialogue(context.indexRef.value, context);
    initHintSystem(context);
    autoUpdateSkipButton(context);
  };

  const handleLoadData = (data) => {
    if (data.theme) applyTheme(data.theme);
    context.currentDialogue = data.dialogue;
    context.indexRef.value = data.index;
    if (typeof data.bokCount === 'number') {
      context.bokCount = data.bokCount;
      localStorage.setItem('bokCount', String(context.bokCount));
      context.updateBokDisplay(context.bokCount);
    }
    if (typeof data.attendanceCount === 'number') {
      context.attendanceCount = data.attendanceCount;
      localStorage.setItem('attendanceCount', String(context.attendanceCount));
    }
    context.saveLoaded = true;
    context.isRestored = true;

    const videoEl = document.getElementById('bg-video');
    if (data.lastVideo && data.lastVideoIndex >= data.lastImageIndex) {
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
    } else if (data.lastImage) {
      if (context.gameWrapper) {
        context.gameWrapper.style.background = `url('${data.lastImage}') no-repeat center center`;
        context.gameWrapper.style.backgroundSize = 'cover';
      }
      if (videoEl) {
        videoEl.style.display = 'none';
        videoEl.src = '';
      }
    } else {
      if (context.gameWrapper) context.gameWrapper.style.background = '';
      if (videoEl) {
        videoEl.style.display = 'none';
        videoEl.src = '';
      }
    }

    if (data.overlayImageSrc) {
      context.overlayImage.src = data.overlayImageSrc;
      context.overlayImage.style.display = data.overlayImageVisible;
    }

    if (data.overlayHistory !== undefined && context.kakaoOverlay) {
      context.kakaoOverlay.innerHTML = data.overlayHistory;
    }

    if (data.history !== undefined) {
      context.kakaoBox.innerHTML = data.history;
      const current = context.currentDialogue[context.indexRef.value];
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
      if (!current.notification) {
        context.kakaoBox.style.display = 'block';
        context.kakaoOverlay.style.display = 'block';
        context.scrollToBottom(context.kakaoBox);
      }
    }

    if (data.choiceHistory !== undefined) {
      context.choiceContainer.innerHTML = data.choiceHistory;
      context.choiceContainer.style.display = data.choiceVisible;
      autoUpdateSkipButton(context);
    }

    if (data.answerVisible && data.answerVisible !== 'none') {
      context.answerContainer.innerHTML = data.answerHTML;
      context.answerContainer.style.display = data.answerVisible;
      const correct = context.currentDialogue[context.indexRef.value].answer;
      showAnswerInput(correct, context);
      context.isWaitingForAnswer.value = true;
      context.suppressClick = true;
      context.toggleKakaoDisplay(false, context.kakaoBox, context.kakaoOverlay);
    }

    if (context.currentDialogue[context.indexRef.value].answer) {
      context.toggleKakaoDisplay(false, context.kakaoBox, context.kakaoOverlay);
    }

    const first = context.currentDialogue[context.indexRef.value];
    if (first && first.talk) {
      context.talkWrapper.style.display = 'block';
      context.nameEl.textContent = first.name || '';
      context.bubbleEl.textContent = first.text || '';
    }
    if (context.currentDialogue[context.indexRef.value].hideKakao) {
      context.toggleKakaoDisplay(false, context.kakaoBox, context.kakaoOverlay);
    }

    hidePopup();
    const intro = document.getElementById('intro-screen');
    if (intro) intro.style.display = 'none';
    document.getElementById('main-start-screen').style.display = 'flex';
    document.getElementById('game-wrapper').style.display = 'none';
    context.updateLevelBar(context.indexRef.value, context.currentDialogue);
    context.notificationActive = false;
    autoUpdateSkipButton(context);
    context.overlayJustCleared = false;
    setTimeout(() => {
      context.suppressClick = false;
    }, 300);
    context.preventAutoAdvance.value = false;
    initHintSystem(context);
  };

  ['1', '2', '3'].forEach((num) => {
    startChoicePopup.querySelector(`#slot-${num}`).onclick = () => {
      const parsed = loadFromLocal(num);
      if (!parsed) {
        context.showPopup('저장된 데이터가 없습니다.');
        return;
      }
      if (typeof parsed.index !== 'number') {
        context.showPopup('저장 데이터가 손상되었습니다.');
        return;
      }
      handleLoadData(parsed);
    };
  });
}
