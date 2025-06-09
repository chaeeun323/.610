// 📁 answerHandler.js

export function showAnswerInput(correctAnswer, context) {
const ui = context.answerUi;
const input = context.answerInput;
const submit = context.submitAnswer;
  
    ui.style.display = 'flex';
    input.value = '';
    context.isWaitingForAnswer.value = true;
  
    submit.onclick = function () {
      const userAnswer = input.value.trim();
      if (userAnswer === correctAnswer) {
        ui.style.display = 'none';
      
        // ✅ null 체크 추가
        if (context.overlayImage) context.overlayImage.style.display = 'none';
      
        context.isWaitingForAnswer.value = false;
        context.indexRef.value++;
      
        if (context.indexRef.value < context.currentDialogue.length) {
          context.showDialogue(context.indexRef.value, context);
        }
      } else {
        input.value = '';
        showWrongMessage();
      }
      
      initHintSystem(context);      
  }
  
}
  function showWrongMessage() {
    const wrongMsg = document.getElementById('wrong-message');
    wrongMsg.style.display = 'block';
    wrongMsg.classList.add('visible');
  
    setTimeout(() => {
      wrongMsg.classList.remove('visible');
    }, 1500);
  }
  
  function initHintSystem(context) {
    const hintBtn = document.getElementById('hint-button');
    const hintConfirm = document.getElementById('hint-confirm');
  
    if (!hintBtn || !hintConfirm) return;
  
    const hintIcon = hintConfirm.querySelector('.hint-icon');
    const hintTitle = hintConfirm.querySelector('.hint-title');
    const hintSub = hintConfirm.querySelector('.hint-sub');
    const buttonsContainer = hintConfirm.querySelector('.hint-buttons');
  
    let currentHint = null;
  
    const createButton = (label, isPrimary = false) => {
      const btn = document.createElement('button');
      btn.innerText = label;
      btn.style.flex = '1';
      btn.style.padding = '10px';
      btn.style.borderRadius = '12px';
      btn.style.border = 'none';
      btn.style.fontSize = '14px';
      btn.style.cursor = 'pointer';
      btn.style.background = isPrimary ? '#000' : '#eee';
      btn.style.color = isPrimary ? '#fff' : '#000';
      return btn;
    };
  
    const showHintStage = (stage) => {
      if (!currentHint) return;
      buttonsContainer.innerHTML = '';
      hintSub.classList.remove('answer', 'final-answer');
  
      const backBtn = createButton('뒤로');
      const nextBtn = createButton('다음 힌트 보기', true);
      const answerBtn = createButton('정답 보기', true);
      const closeBtn = createButton('닫기', true);
  
      if (stage === 1) {
        hintTitle.innerText = '<1단계>';
        hintSub.innerText = currentHint.hint1 || '힌트가 없습니다.';
        buttonsContainer.appendChild(backBtn);
        buttonsContainer.appendChild(nextBtn);
        backBtn.onclick = () => showHintStage(0);
        nextBtn.onclick = () => showHintStage(2);
      } else if (stage === 2) {
        hintTitle.innerText = '<2단계>';
        hintSub.innerText = currentHint.hint2 || '힌트가 없습니다.';
        buttonsContainer.appendChild(backBtn);
        buttonsContainer.appendChild(answerBtn);
        backBtn.onclick = () => showHintStage(1);
        answerBtn.onclick = () => showHintStage(3);
      } else if (stage === 3) {
        hintTitle.innerText = '<정답>';
        hintSub.innerHTML = `<span class="final-answer">${currentHint.answer || '???'}</span>`;
        buttonsContainer.appendChild(closeBtn);
        closeBtn.onclick = () => hintConfirm.style.display = 'none';
      } else {
        hintTitle.innerText = '힌트를 사용하시겠습니까?';
        hintSub.innerHTML = '힌트 사용 여부는<br>게임에 영향을 줄 수 있습니다.';
        const cancelBtn = createButton('취소');
        const okBtn = createButton('힌트 보기', true);
        cancelBtn.onclick = () => hintConfirm.style.display = 'none';
        okBtn.onclick = () => showHintStage(1);
        buttonsContainer.appendChild(cancelBtn);
        buttonsContainer.appendChild(okBtn);
      }
    };
  
    hintBtn.onclick = () => {
      const d = context.currentDialogue[context.indexRef.value];
      if (!d) return;
      currentHint = d;
      hintIcon.innerText = '🔑';
      showHintStage(0);
      hintConfirm.style.display = 'block';
    };
  }
  
  export { initHintSystem };