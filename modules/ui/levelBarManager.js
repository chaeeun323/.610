// 경험치 계산과 레벨 바 업데이트를 담당한다.

export function updateLevelBar(index, currentDialogue) {
  if (!currentDialogue || !Array.isArray(currentDialogue)) return;
  const MAX_LEVEL = 10;
  const TOTAL_DIALOGUE = currentDialogue.length || 1;
  const EXP_PER_LEVEL = Math.ceil(TOTAL_DIALOGUE / MAX_LEVEL);
  const level = Math.min(MAX_LEVEL, Math.floor(index / EXP_PER_LEVEL) + 1);
  const progressInLevel = index % EXP_PER_LEVEL;
  const percent = level === MAX_LEVEL ? 100 : Math.floor((progressInLevel / EXP_PER_LEVEL) * 100);

  const levelBar = document.getElementById('level-bar-fill');
  const levelLabel = document.getElementById('level-label');
  const percentLabel = document.getElementById('percent-label');

  if (levelBar) levelBar.style.width = `${percent}%`;
  if (levelLabel) levelLabel.textContent = `레벨 ${level}`;
  if (percentLabel) percentLabel.textContent = `${percent.toFixed(2)}%`;
}
export function createLevelBox() {
  const levelBox = document.createElement('div');
  levelBox.className = 'level-box';
  levelBox.innerHTML = `
    <div class="level-box-header">
      <div class="level-box-label">
        <strong>뽀동</strong>
        <span id="level-label" class="level-tag">레벨 1</span>
      </div>
      <div id="percent-label">0%</div>
    </div>
    <div class="level-progress">
      <div id="level-bar-fill" class="level-fill"></div>
    </div>
  `;
  return levelBox;
}
