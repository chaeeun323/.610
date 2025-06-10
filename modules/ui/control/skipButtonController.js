// Controls enabling/disabling of the skip button based on game state.


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
