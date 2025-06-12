export function setupAttendancePopup(context) {
  const popup = document.createElement('div');
  popup.id = 'attendance-popup';
  popup.className = 'attendance-popup hidden';
  popup.innerHTML = `
    <div class="attendance-box">
      <div class="attendance-header">
        <div class="attendance-title">출석 체크</div>
        <button id="attendance-close" class="attendance-close">닫기</button>
      </div>
      <div class="attendance-grid">
        ${Array.from({ length: 28 })
          .map((_, i) => `<div class="attendance-cell" data-day="${i + 1}">${i + 1}일차</div>`)
          .join('')}
      </div>
    </div>
  `;
  document.body.appendChild(popup);
  context.attendancePopup = popup;

  popup.addEventListener('click', (e) => e.stopPropagation());

  const closeBtn = popup.querySelector('#attendance-close');
  if (closeBtn) {
    closeBtn.onclick = (e) => {
      e.stopPropagation();
      popup.style.display = 'none';
      window.suppressClick = false;
    };
  }

  const cells = popup.querySelectorAll('.attendance-cell');
  const stored = JSON.parse(localStorage.getItem('attendanceDays') || '[]');
  cells.forEach((cell, idx) => {
    if (stored.includes(idx + 1)) {
      cell.classList.add('checked');
    }
  });

  const todayIndex = stored.length;
  if (todayIndex < cells.length) {
    const todayCell = cells[todayIndex];
    todayCell.classList.add('checked');
    stored.push(todayIndex + 1);
    localStorage.setItem('attendanceDays', JSON.stringify(stored));
  }
}
