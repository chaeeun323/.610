// 스킵 모드가 활성화되었을 때 대사를 건너뛰고
// 다음 상호작용 지점으로 이동한다.

export function jumpToNextInterrupt(context) {
  const {
    currentDialogue,
    indexRef,
    skipModeRef,
    preventAutoAdvance,
    sendKakao,
    isKakaoMessage,
    showDialogue,
    kakaoBox,
    kakaoOverlay
  } = context;

  if (preventAutoAdvance?.value) {
    preventAutoAdvance.value = false;
    return;
  }

  function skipNext() {
    while (indexRef.value + 1 < currentDialogue.length) {
      indexRef.value++;
      const d = currentDialogue[indexRef.value];
// ✅ 스킵 시 오버레이 제거
if (context.overlayImage) context.overlayImage.style.display = 'none';
      if (!d) continue;

      // ✅ 정답 자동 제출
      if (d.answer) {
        const input = document.querySelector('#answer-ui input');
        if (input) input.value = d.answer;
        if (typeof window.handleAnswerSubmit === 'function') window.handleAnswerSubmit();
        continue;
      }

      const isInterrupt = d.choice || d.notification;
      if (isInterrupt) {
        skipModeRef.value = false;
        showDialogue(indexRef.value, context);
        return;
      }

      if (isKakaoMessage(d)) {
        sendKakao(d, kakaoBox, kakaoOverlay);
        continue;
      }

      if (
        d.image &&
        !d.kakao &&
        !d.system &&
        !d.linkPreview &&
        !d.talk &&
        !d.choice &&
        !d.answer &&
        !d.notification
      ) {
        showDialogue(indexRef.value, context);
        continue;
      }

      showDialogue(indexRef.value, context);
    }

    if (indexRef.value < currentDialogue.length) {
      showDialogue(indexRef.value, context);
    }
    skipModeRef.value = false;
  }

  skipNext();
}
