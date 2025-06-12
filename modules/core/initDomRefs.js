export function initDomRefs(context) {
  context.menuBtn = document.getElementById('menu-btn');
  context.gameWrapper = document.getElementById('game-wrapper');
  context.kakaoBox = document.getElementById('kakao-chat-box');
  context.choiceContainer = document.getElementById('choice-container');
  context.talkWrapper = document.getElementById('talk-wrapper');
  context.nameEl = document.querySelector('.dialogue-name');
  context.bubbleEl = document.querySelector('.dialogue-bubble');
  context.kakaoOverlay = document.getElementById('kakao-overlay');
  context.overlayImage = document.getElementById('overlay-image');
  context.answerUi = document.getElementById('answer-ui');
  context.answerInput = document.getElementById('answer-input');
  context.submitAnswer = document.getElementById('submit-answer');
  context.hintPopup = document.getElementById('hint-popup');
  context.hintStep1 = document.getElementById('hint-step1');
  context.hintStep2 = document.getElementById('hint-step2');
  context.hintBtn = document.getElementById('hint-btn');
  context.hintConfirm = document.getElementById('hint-confirm');
  context.attendancePopup = document.getElementById('attendance-popup');
}
