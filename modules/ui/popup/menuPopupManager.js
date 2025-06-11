export function setupMenuPopup(context) {
  const menuPopup = document.createElement('div');
  menuPopup.id = 'menu-popup';
  menuPopup.className = 'menu-popup hidden';
  menuPopup.innerHTML = `
    <div class="menu-popup-box">
      <div id="menu-popup-close" class="menu-popup-close">
        <img src="images/close-icon.png" alt="닫기">
      </div>
      <div class="menu-buttons">
        <button id="menu-home-btn">처음으로</button>
        <button id="menu-save-btn">저장</button>
        <button id="menu-load-btn">불러오기</button>
      </div>
    </div>
  `;
  document.body.appendChild(menuPopup);
  context.menuPopup = menuPopup;
  const homeConfirm = document.getElementById('home-confirm');
  const homeCancel = document.getElementById('home-cancel');
  const homeOk = document.getElementById('home-ok');

  const close = () => {
    menuPopup.style.display = 'none';
    window.suppressClick = false;
  };

  menuPopup.querySelector('#menu-popup-close').onclick = (e) => {
    e.stopPropagation();
    close();
  };

  context.menuBtn.onclick = (e) => {
    e.stopPropagation();
    window.suppressClick = true;
    menuPopup.classList.remove('hidden');
    menuPopup.style.display = 'flex';
  };

  function goHome() {
    const startScreen = document.getElementById('main-start-screen');
    const intro = document.getElementById('intro-screen');
    const gameWrapper = document.getElementById('game-wrapper');
    if (startScreen) startScreen.style.display = 'flex';
    if (intro) intro.style.display = 'flex';
    if (gameWrapper) gameWrapper.style.display = 'none';
    const startChoice = document.getElementById('start-choice-popup');
    if (startChoice) startChoice.style.display = 'none';
    window.suppressClick = false;
  }

  menuPopup.querySelector('#menu-home-btn').onclick = (e) => {
    e.stopPropagation();
    close();
    if (homeConfirm) {
      window.suppressClick = true;
      homeConfirm.style.display = 'block';
    } else {
      goHome();
    }
  };

  if (homeCancel) {
    homeCancel.onclick = (e) => {
      e.stopPropagation();
      if (homeConfirm) homeConfirm.style.display = 'none';
      window.suppressClick = false;
    };
  }

  if (homeOk) {
    homeOk.onclick = (e) => {
      e.stopPropagation();
      if (homeConfirm) homeConfirm.style.display = 'none';
      goHome();
    };
  }

  menuPopup.querySelector('#menu-save-btn').onclick = (e) => {
    e.stopPropagation();
    close();
    if (context.savePopup) {
      context.savePopup.style.display = 'flex';
    }
  };

  menuPopup.querySelector('#menu-load-btn').onclick = (e) => {
    e.stopPropagation();
    close();
    const startChoice = document.getElementById('start-choice-popup');
    if (startChoice) {
      startChoice.style.display = 'flex';
      startChoice.querySelector('#main-options').style.display = 'none';
      startChoice.querySelector('#slot-options').style.display = 'block';
      const backBtn = startChoice.querySelector('#popup-back');
      if (backBtn) backBtn.style.display = 'block';
    }
  };
}
