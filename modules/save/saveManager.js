// modules/save/saveManager.js
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

  const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';

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
