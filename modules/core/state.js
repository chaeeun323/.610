// 게임 진행에 사용되는 플래그와 참조를 담는 반응형 상태 객체.

let _currentDialogue = [];

const state = {
  indexRef: { value: 0 },
  skipModeRef: { value: false },
  preventAutoAdvance: { value: false },
  isWaitingForAnswer: { value: false },
  notificationActive: false,
  suppressClick: false,
  gameStarted: false,
  overlayJustCleared: false,
  saveLoaded: false,
  isRestored: false,
  hintSystemInitialized: false,
  bokCount: 0,
  attendanceCount: 0,

  get currentDialogue() {
    return _currentDialogue;
  },
  set currentDialogue(val) {
    _currentDialogue = val;
  },
};

export default state;
