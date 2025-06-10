// Reactive state object holding various game flags and references.

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

  get currentDialogue() {
    return _currentDialogue;
  },
  set currentDialogue(val) {
    _currentDialogue = val;
  },
};

export default state;
