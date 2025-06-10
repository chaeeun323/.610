// 게임 상태에 따라 스킵 버튼 활성화 여부를 제어한다.


export function autoUpdateSkipButton(context) {
  const {
    skipBtn,
    choiceContainer,
    answerContainer,
    notificationActive,
  } = context;

  if (!skipBtn) return;

  const isChoiceVisible = choiceContainer?.style?.display === 'block';
  const isAnswerVisible = answerContainer?.style?.display === 'flex';
  const isNotification = !!notificationActive;

  const shouldDisable = isChoiceVisible || isAnswerVisible || isNotification;
  updateSkipButton(!shouldDisable, context);
}

export function updateSkipButton(enabled, context) {
  const btn = context.skipBtn;
  if (!btn) return;

  btn.disabled = !enabled;
  btn.classList.toggle('btn-enabled', enabled);
  btn.classList.toggle('btn-disabled', !enabled);
}

export function ensureSkipButton(context) {
  if (!context.skipBtn) {
    const skipBtn = document.createElement('button');
    skipBtn.id = 'skip-button';
    skipBtn.textContent = '⏩ 스킵';
    skipBtn.classList.add('skip-btn');
    skipBtn.style.display = 'none';
    document.body.appendChild(skipBtn);
    context.skipBtn = skipBtn;
  }

  context.skipBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    context.skipModeRef.value = true;
    context.jumpToNextInterrupt(context);
  });
}
