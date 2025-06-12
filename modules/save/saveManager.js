// 게임 상태를 저장하고 불러오는 기능을 제공한다.
import { getCurrentTheme } from '../ui/themeManager.js';

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
    theme: currentTheme,
    bokCount: context.bokCount,
    attendanceCount: context.attendanceCount
  };
}

export function saveToLocal(slotNumber, context, showPopupFn) {
  const saveData = buildSaveData(context);
  try {
    localStorage.setItem(
      `save-slot-${slotNumber}`,
      JSON.stringify(saveData)
    );
    if (typeof showPopupFn === 'function') {
      showPopupFn(`슬롯 ${slotNumber}에 저장되었습니다.`);
    }
  } catch (err) {
    console.error('로컬 저장 실패:', err);
    if (typeof showPopupFn === 'function') {
      showPopupFn('저장에 실패했습니다.');
    }
  }
}

export function loadFromLocal(slotNumber) {
  const data = localStorage.getItem(`save-slot-${slotNumber}`);
  if (!data) return null;
  try {
    return JSON.parse(data);
  } catch (err) {
    console.error('로컬 저장 데이터 파싱 실패:', err);
    return null;
  }
}
