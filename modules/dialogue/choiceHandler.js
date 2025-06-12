// 대화 중 선택지를 표시하고 사용자의 선택에 따라 진행을 이어간다.

import { autoUpdateSkipButton } from '../ui/control/skipButtonController.js';
export function renderChoiceButtons(choices, container, context) {
  container.innerHTML = '';
  container.classList.remove('closing');

  choices.forEach((choice, idx) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.dataset.branch = JSON.stringify(choice.branch);
    btn.textContent = choice.text;
    btn.style.animationDelay = `${idx * 0.25}s`;
    container.appendChild(btn);
  });

  // ✅ 선택지 표시
  container.style.display = 'block';

  // ✅ skip 버튼 갱신
  autoUpdateSkipButton(context);
}

export function attachChoiceListener(container, context, showDialogue) {
  container.addEventListener('click', e => {
    const btn = e.target.closest('.choice-btn');
    if (!btn) return;

    e.stopPropagation();
    window.suppressClick = true;

    let branch;
    try {
      branch = JSON.parse(btn.dataset.branch);
    } catch {
      return;
    }
    if (!Array.isArray(branch)) return;

    const buttons = Array.from(container.querySelectorAll('.choice-btn'));
    buttons.forEach(b => {
      if (b === btn) {
        b.classList.add('choice-selected');
      } else {
        b.classList.add('choice-fade');
      }
    });

    // 살짝 확대되는 효과를 볼 수 있도록 약간 지연 후 페이드 아웃
    setTimeout(() => {
      container.classList.add('closing');
    }, 200);

    const rest = context.currentDialogue.slice(context.indexRef.value + 1);
    const updated = [
      ...context.currentDialogue.slice(0, context.indexRef.value + 1),
      ...branch,
      ...rest
    ];
    context.currentDialogue = updated;
    context.indexRef.value++;

    let idx = context.indexRef.value;
    const cds = context.currentDialogue;
    while (idx < cds.length && !(
      cds[idx].talk || cds[idx].choice ||
      cds[idx].notification || cds[idx].answer || cds[idx].kakao
    )) {
      idx++;
    }
    context.indexRef.value = idx;

    setTimeout(() => {
      container.style.display = 'none';
      container.classList.remove('closing');
      context.kakaoBox.style.display = 'block';
      context.kakaoOverlay.style.display = 'block';
      showDialogue(idx, context);
      window.suppressClick = false;
    }, 600);
  });
}
