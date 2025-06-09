import { renderChoiceButtons, attachChoiceListener } from './choiceHandler.js'; // 같은 폴더
import { sendKakao, toggleKakaoDisplay, scrollToBottom } from '../kakao/kakaoMessageManager.js';
import { updateLevelBar } from '../ui/levelBarManager.js';
import { showNotification } from '../ui/popup/popupHandler.js';
import {
  changeBackgroundInstant,
  changeBackgroundSmoothly,
  clearBackground
} from '../ui/backgroundManager.js';

let _choiceListenerAttached = false;

export function showDialogue(i, context) {
  const {
    gameWrapper,
    isKakaoMessage,
    choiceContainer,
    overlayImage,
    kakaoBox,
    kakaoOverlay,
    talkWrapper,
    nameEl,
    bubbleEl,
    skipBtn,
    autoUpdateSkipButton,
    changeBackgroundInstant,
    changeBackgroundSmoothly,
    showAnswerInput,
    setNotificationActive,
    indexRef,
    currentDialogue
  } = context;

  if (!_choiceListenerAttached) {
    attachChoiceListener(context.choiceContainer, context, showDialogue);
    _choiceListenerAttached = true;
  }

  if (!currentDialogue || i < 0 || i >= currentDialogue.length) return;
  const d = currentDialogue[i];
  if (!d) return;

  // 비디오 처리
  if (d.video) {
    const video = document.getElementById('bg-video');
    video.src = d.video;
    video.load();
    video.style.display = 'block';
    gameWrapper.style.background = '';
    return;
  }

  // 이미지 배경 처리
  if (d.image) {
    gameWrapper.style.background = `url('${d.image}') no-repeat center center`;
    gameWrapper.style.backgroundSize = 'cover';
    document.getElementById('bg-video').style.display = 'none';
  }

  // 배경 전환 즉시
  if (d.image && d.image !== '__clear__') {
    changeBackgroundInstant(d.image, gameWrapper);
  }

  if (d.notification) {
    showNotification(d, context, showDialogue);
    return;
  }

  // 화면 초기화
  if (d.image === '__clear__') {
    overlayImage.style.display = 'none';
    clearBackground(gameWrapper);
    talkWrapper.style.display = 'none';
    return;
  }

  const isKakao = isKakaoMessage(d);
  const showKakao = isKakao || Array.isArray(d.choice);
  if (d.hideKakao) {
    toggleKakaoDisplay(false, kakaoBox, kakaoOverlay);
  } else if (showKakao) {
    toggleKakaoDisplay(true, kakaoBox, kakaoOverlay);
  }

  // 오버레이 이미지 & 정답 입력 처리
  if (d.image && d.overlay) {
    if (talkWrapper) talkWrapper.style.display = 'none';
    if (kakaoBox) kakaoBox.style.display = 'none';
    if (choiceContainer) choiceContainer.style.display = 'none';
    changeBackgroundSmoothly(d.image, gameWrapper);
    if (overlayImage) {
      overlayImage.src = d.overlay;
      overlayImage.style.display = 'block';
    }
    if (d.answer) showAnswerInput(d.answer, context);
    return;
  }

  // 그 외 단순 이미지 (시스템 메시지)
  if (d.image && !d.kakao && !d.system && !d.linkPreview && !d.talk && !d.choice) {
    if (talkWrapper) talkWrapper.style.display = 'none';
    if (choiceContainer) choiceContainer.style.display = 'none';
    changeBackgroundInstant(d.image, gameWrapper);
  
    const prev = context.currentDialogue[i - 1];
    if (!context.skipModeRef?.value && (!prev || !prev.kakao)) {
      if (context.kakaoBox) context.kakaoBox.style.display = 'none';
    }
  
    return;
  }

  if (isKakao) {
    talkWrapper.style.display = 'none';
    sendKakao(d, kakaoBox, kakaoOverlay);
  } else if (d.talk) {
    talkWrapper.style.display = 'block';
    nameEl.textContent = d.name || '';
    bubbleEl.textContent = d.text;
    if (d.image) changeBackgroundInstant(d.image, gameWrapper);
    if (!bubbleEl.contains(skipBtn)) bubbleEl.appendChild(skipBtn);
    skipBtn.style.display = 'inline-block';
    autoUpdateSkipButton(context);
  } else if (Array.isArray(d.choice)) {
    const choiceList = d.choice;
    talkWrapper.style.display = 'none';
    renderChoiceButtons(choiceList, context.choiceContainer, context);
    choiceContainer.style.display = 'block';
    return;
  } else if (d.answer) {
    talkWrapper.style.display = 'none';
    showAnswerInput(d.answer, context);
    return;
  }

  updateLevelBar(indexRef.value, context.currentDialogue);
// ✅ 테마 클래스 처리
document.body.classList.remove('dark-mode');
if (d.theme === 'dark') {
  document.body.classList.add('dark-mode');
}

  autoUpdateSkipButton(context);
  if (
    context.skipModeRef?.value &&
    context.skipBtn &&
    context.skipBtn.style.display !== 'none'
  ) {
    context.skipModeRef.value = false;
  }
  scrollToBottom(kakaoBox);
}
