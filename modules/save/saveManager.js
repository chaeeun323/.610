// 게임 상태를 저장하고 불러오는 기능을 제공한다.
import { getCurrentTheme, applyTheme } from '../ui/themeManager.js';

export const SAVE_VERSION = 1;

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
    version: SAVE_VERSION,
    index: context.indexRef.value,
    lastImage,
    lastImageIndex,
    lastVideo,
    lastVideoIndex,
    theme: currentTheme,
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

export function loadSaveData(data, context, dialogue) {
  if (!data || data.version !== SAVE_VERSION) {
    return false;
  }

  if (dialogue) {
    context.currentDialogue = dialogue;
  }

  if (data.theme) applyTheme(data.theme);

  context.indexRef.value = data.index ?? 0;
  context.saveLoaded = true;
  context.isRestored = true;

  const videoEl = document.getElementById('bg-video');
  if (data.lastVideo && data.lastVideoIndex > data.lastImageIndex) {
    if (videoEl) {
      videoEl.src = data.lastVideo;
      videoEl.load();
      videoEl.style.display = 'block';
    }
    if (context.gameWrapper) context.gameWrapper.style.background = '';
  } else if (data.lastImage) {
    if (context.gameWrapper) {
      context.gameWrapper.style.background = `url('${data.lastImage}') no-repeat center center`;
      context.gameWrapper.style.backgroundSize = 'cover';
    }
    if (videoEl) videoEl.style.display = 'none';
  }

  return true;
}
