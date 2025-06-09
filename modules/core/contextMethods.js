import { updateLevelBar, createLevelBox } from '../ui/levelBarManager.js';
import {
  sendKakao,
  isKakaoMessage,
  getRoomBackground,
  toggleKakaoDisplay,
  clearKakaoMessages,
  scrollToBottom,
} from '../kakao/kakaoMessageManager.js';
import { renderChoiceButtons, attachChoiceListener } from '../dialogue/choiceHandler.js';
import { showAnswerInput } from '../dialogue/answerHandler.js';
import {
  changeBackgroundInstant,
  changeBackgroundSmoothly,
  clearBackground,
} from '../ui/backgroundManager.js';
import { showDialogue } from '../dialogue/showDialogue.js';
import { jumpToNextInterrupt } from './skipManager.js';
import { showPopup } from '../ui/popup/popupHandler.js';
import { autoUpdateSkipButton } from '../ui/control/skipButtonController.js';

export default function buildMethods(context) {
  return {
    updateLevelBar,
    createLevelBox,
    sendKakao,
    isKakaoMessage,
    getRoomBackground,
    toggleKakaoDisplay,
    clearKakaoMessages,
    scrollToBottom,
    renderChoiceButtons,
    attachChoiceListener,
    showAnswerInput,
    changeBackgroundInstant,
    changeBackgroundSmoothly,
    clearBackground,
    showDialogue,
    jumpToNextInterrupt,
    setNotificationActive: (val) => {
      context.notificationActive = val;
      autoUpdateSkipButton(context);
    },
    updateSkipButton: (enabled) => {
      const btn = context.skipBtn;
      if (!btn) return;
      btn.disabled = !enabled;
      btn.classList.toggle('btn-enabled', enabled);
      btn.classList.toggle('btn-disabled', !enabled);
    },
    showPopup: (msg, target = context.msgBox) => showPopup(target, msg),
  };
}
