// 게임 상태를 저장하고 불러오는 기능을 제공한다.
import { getCurrentTheme, applyTheme } from '../ui/themeManager.js';
import { showAnswerInput, initHintSystem } from '../dialogue/answerHandler.js';
import { autoUpdateSkipButton } from '../ui/control/skipButtonController.js';

export function buildSaveData(context) {
  let lastImage = null, lastImageIndex = -1;
  let lastVideo = null, lastVideoIndex = -1;

  for (let i = context.indexRef.value; i >= 0; i--) {
    const d = context.currentDialogue[i];
    if (!d) continue;
    if (d.image && lastImage === null) {
      lastImage = d.image;
      lastImageIndex = i;
    }
    if (d.video && lastVideo === null) {
      lastVideo = d.video;
      lastVideoIndex = i;
    }
    if (lastImage !== null && lastVideo !== null) break;
  }

  const currentTheme = getCurrentTheme();

  return {
    index: context.indexRef.value,
    dialogue: JSON.parse(JSON.stringify(context.currentDialogue)),
    lastImage,
    lastImageIndex,
    lastVideo,
    lastVideoIndex,
    timestamp: new Date().toISOString(),
    history: context.kakaoBox?.innerHTML || '',
    choiceHistory: context.choiceContainer?.innerHTML || '',
    choiceVisible: context.choiceContainer?.style.display || 'none',
    answerHTML: context.answerContainer?.innerHTML || '',
    answerVisible: context.answerContainer?.style.display || 'none',
    overlayImageSrc: context.overlayImage?.src || '',
    overlayImageVisible: context.overlayImage?.style.display || 'none',
    overlayHistory: context.kakaoOverlay?.innerHTML || '',
    theme: currentTheme
  };
}

export function downloadSave(slotNumber, context, showPopupFn) {
  const saveData = buildSaveData(context);
  const saveJson = JSON.stringify(saveData, null, 2);
  const blob = new Blob([saveJson], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `dialogue-save-slot-${slotNumber}-${new Date().toISOString()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  if (typeof showPopupFn === 'function') {
    showPopupFn(`슬롯 ${slotNumber}에 파일로 저장되었습니다.`);
  }
}

export function loadSaveData(context, data) {
  if (data.theme) applyTheme(data.theme);
  context.currentDialogue = data.dialogue;
  context.indexRef.value = data.index;
  context.saveLoaded = true;
  context.isRestored = true;

  const videoEl = document.getElementById('bg-video');
  if (data.lastVideoIndex > data.lastImageIndex) {
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
    if (context.gameWrapper) {
      context.gameWrapper.style.background = `url('${data.lastImage}') no-repeat center center`;
      context.gameWrapper.style.backgroundSize = 'cover';
    }
    if (videoEl) videoEl.style.display = 'none';
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

  const intro = document.getElementById('intro-screen');
  if (intro) intro.remove();
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
}
