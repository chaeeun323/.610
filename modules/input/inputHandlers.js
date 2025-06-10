// 사용자 입력 이벤트를 처리하여 대사 진행과
// UI 상호작용을 연결한다.

import { showDialogue } from '../dialogue/showDialogue.js';
import { autoUpdateSkipButton } from '../ui/control/skipButtonController.js';

export function attachMessageListeners({
  kakaoBox,
  showDialogue,
  context,
  showSkipButton,
  saveBtn = null,
  skipBtn = null,
  hintBtn = null,
  hintConfirm = null,
  answerContainer = null,
  getGameState = null,
  indexRef = null
}) {
  // ✅ 링크 카드 클릭
  kakaoBox.querySelectorAll('.preview-footer').forEach(footerEl => {
    const url = footerEl.dataset.url;
    if (!url) return;
    footerEl.addEventListener('click', () => window.open(url, '_blank'));
  });

  // ✅ 카드형 버튼 복원
  kakaoBox.querySelectorAll('.preview-button').forEach(btn => {
    const idx = Number(btn.dataset.msgIndex);
    btn.addEventListener('click', () => showDialogue(idx, context));
  });

  // ✅ 정답 입력 UI 클릭 막기
  if (answerContainer instanceof HTMLElement) {
    answerContainer.addEventListener('click', e => {
      e.stopPropagation();
    });
  }
}

export function setupDialogueClickHandler(context) {
  document.body.addEventListener('click', () => {
    if (context.suppressClick) {
      context.suppressClick = false;
      return;
    }
    if (
      !context.gameStarted ||
      !!context.notificationActive ||
      context.isWaitingForAnswer?.value ||
      (context.savePopup?.style?.display === 'flex') ||
      context.choiceContainer?.style?.display === 'block'
    ) return;

    if (context.overlayImage && context.overlayImage.style.display === 'block') {
      context.overlayImage.style.display = 'none';
      context.indexRef.value++;
      if (context.indexRef.value < context.currentDialogue.length) {
        context.showDialogue(context.indexRef.value, context);
      }
      return;
    }

    context.indexRef.value++;
    if (context.currentDialogue && context.indexRef.value < context.currentDialogue.length) {
      context.showDialogue(context.indexRef.value, context);
      context.autoUpdateSkipButton?.(context);
    }  
  });
}
