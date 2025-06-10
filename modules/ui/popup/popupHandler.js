// Handles creation and visibility toggling of in-game popup messages.

/**
 * 일반 텍스트 팝업 표시
 * @param {HTMLElement} msgBox - 팝업 요소
 * @param {string} message - 표시할 텍스트
 */
export function showPopup(msgBox, message) {
  const textEl = msgBox.querySelector('.popup-message-text');
  if (textEl) textEl.textContent = message;
  msgBox.classList.add('active');
}

/**
 * 이미지 알림 팝업 표시
 * @param {Object} d - 대사 객체 (notification 속성 포함)
 * @param {Object} context - 게임 context
 * @param {Function} showDialogue - 다음 대사 출력 함수
 */
export function showNotification(d, context, showDialogue) {
  const {
    setNotificationActive,
    currentDialogue,
    indexRef,
    talkWrapper,
    nameEl,
    bubbleEl
  } = context;

  setNotificationActive(true);
  const prev = currentDialogue[indexRef.value - 1];
  if (prev && prev.talk) {
    talkWrapper.style.display = 'block';
    nameEl.textContent = prev.name || '';
    bubbleEl.textContent = prev.text || '';
  }

  const popup = document.getElementById('notification-popup');
  const newPopup = popup.cloneNode(false);
  newPopup.id = 'notification-popup';
  popup.parentNode.replaceChild(newPopup, popup);

  newPopup.src = d.notification;
  newPopup.style.display = 'block';
  newPopup.dataset.clicked = 'false';

  newPopup.onclick = event => {
    event.stopPropagation();
    if (newPopup.dataset.clicked === 'true') return;
    newPopup.dataset.clicked = 'true';
    newPopup.style.display = 'none';
    setNotificationActive(false);
    setTimeout(() => {
      indexRef.value++;
      showDialogue(indexRef.value, context);
    }, 10);
  };
}
