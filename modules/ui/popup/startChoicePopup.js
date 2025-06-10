import { initHintSystem } from '../../dialogue/answerHandler.js';
import { autoUpdateSkipButton } from '../control/skipButtonController.js';
import { loadSaveData } from '../../save/saveManager.js';

export function setupStartChoicePopup(context, currentDialogue) {
  const startChoicePopup = document.createElement('div');
  startChoicePopup.id = 'start-choice-popup';
  startChoicePopup.innerHTML = `
    <div class="popup-inner">
      <div id="popup-close" class="popup-close">
        <img src="images/close-icon.png" alt="닫기">
      </div>
      <div id="popup-back" class="popup-back">
        <img src="images/back-icon.png" alt="뒤로가기">
      </div>
      <div id="main-options">
        <div class="icon">🎮</div>
        <div class="title">게임을 어떻게 시작할까요?</div>
        <div class="subtitle">
          진행 중이던 저장 데이터를<br>
          불러올 수도 있어요.
        </div>
        <div class="popup-buttons">
          <button id="start-new-btn">처음부터</button>
          <button id="start-load-btn">불러오기</button>
        </div>
      </div>
      <div id="slot-options">
        <div class="title">슬롯을 선택하세요</div>
        <div class="slot-buttons">
          <button id="slot-1">📂 슬롯 1</button>
          <button id="slot-2">📂 슬롯 2</button>
          <button id="slot-3">📂 슬롯 3</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(startChoicePopup);

  const hidePopup = () => { startChoicePopup.style.display = 'none'; };

  startChoicePopup.querySelector('#popup-close').onclick = hidePopup;
  startChoicePopup.querySelector('#popup-back').onclick = () => {
    startChoicePopup.querySelector('#main-options').style.display = 'block';
    startChoicePopup.querySelector('#slot-options').style.display = 'none';
    startChoicePopup.querySelector('#popup-back').style.display = 'none';
  };

  startChoicePopup.querySelector('#start-load-btn').onclick = () => {
    startChoicePopup.querySelector('#main-options').style.display = 'none';
    startChoicePopup.querySelector('#slot-options').style.display = 'block';
    startChoicePopup.querySelector('#popup-back').style.display = 'block';
  };

  startChoicePopup.querySelector('#start-new-btn').onclick = () => {
    const intro = document.getElementById('intro-screen');
    if (intro) intro.remove();
    hidePopup();
    document.getElementById('main-start-screen').style.display = 'none';
    document.getElementById('game-wrapper').style.display = 'block';
    context.gameStarted = true;
    if (context.saveBtn) context.saveBtn.style.display = 'block';
    context.indexRef.value = 0;
    context.currentDialogue = currentDialogue;
    context.showDialogue(context.indexRef.value, context);
    initHintSystem(context);
    autoUpdateSkipButton(context);
  };

  const handleLoadData = (data) => {
    if (!loadSaveData(data, context, currentDialogue)) {
      alert('호환되지 않는 저장 파일입니다.');
      return;
    }

    hidePopup();
    const intro = document.getElementById('intro-screen');
    if (intro) intro.remove();
    document.getElementById('main-start-screen').style.display = 'none';
    document.getElementById('game-wrapper').style.display = 'block';
    context.gameStarted = true;
    if (context.saveBtn) context.saveBtn.style.display = 'block';

    context.showDialogue(context.indexRef.value, context);
    autoUpdateSkipButton(context);
    initHintSystem(context);
  };

  ['1', '2', '3'].forEach((num) => {
    startChoicePopup.querySelector(`#slot-${num}`).onclick = () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'application/json';
      input.style.display = 'none';
      input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const data = JSON.parse(event.target.result);
            if (!data || typeof data.index !== 'number') {
              alert('유효하지 않은 저장 파일입니다.');
              return;
            }
            handleLoadData(data);
          } catch (err) {
            console.error('파일 파싱 실패:', err);
            alert('파일 읽기 실패');
          }
        };
        reader.onerror = (err) => {
          console.error('파일 읽기 오류:', err);
          alert('파일을 불러오는 중 오류가 발생했습니다.');
        };
        reader.readAsText(file);
      };
      document.body.appendChild(input);
      input.click();
      document.body.removeChild(input);
    };
  });
}
