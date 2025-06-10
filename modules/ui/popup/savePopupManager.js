import { downloadSave } from '../../save/saveManager.js';

export function setupSavePopup(context) {
  const savePopup = document.createElement('div');
  savePopup.id = 'save-slot-popup';
  savePopup.className = 'save-popup hidden';
  savePopup.innerHTML = `
    <div class="save-popup-box">
      <div id="save-popup-close" class="save-popup-close">
        <img src="images/close-icon.png" alt="닫기">
      </div>
      <div class="save-popup-title">어디에 저장할까요?</div>
      <div class="save-popup-desc">현재 진행 위치를 저장합니다.</div>
      <div class="save-slot-btns">
        <button class="save-slot-btn" data-slot="1">📂 슬롯 1 저장</button>
        <button class="save-slot-btn" data-slot="2">📂 슬롯 2 저장</button>
        <button class="save-slot-btn" data-slot="3">📂 슬롯 3 저장</button>
      </div>
    </div>
  `;
  document.body.appendChild(savePopup);
  context.savePopup = savePopup;

  const msgBox = document.createElement('div');
  msgBox.className = 'popup-message';
  msgBox.innerHTML = `
    <div class="popup-message-text">슬롯 X에 저장되었습니다.</div>
    <button class="popup-message-close">닫기</button>
  `;
  document.body.appendChild(msgBox);
  context.msgBox = msgBox;

  msgBox.querySelector('.popup-message-close').addEventListener('click', (e) => {
    e.stopPropagation();
    msgBox.classList.remove('active');
    window.suppressClick = false;
  });

  context.saveBtn.onclick = (e) => {
    e.stopPropagation();
    context.suppressClick = true;
    savePopup.classList.remove('hidden');
    savePopup.style.display = 'flex';
  };

  savePopup.querySelectorAll('.save-slot-btn').forEach((btn) => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const slot = btn.dataset.slot;
      downloadSave(slot, context, context.showPopup);
      savePopup.style.display = 'none';
    };
  });

  const closeBtn = savePopup.querySelector('#save-popup-close');
  if (closeBtn) {
    closeBtn.onclick = (e) => {
      e.stopPropagation();
      savePopup.style.display = 'none';
      setTimeout(() => {
        window.suppressClick = false;
      }, 300);
    };
  }
}
