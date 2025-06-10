// Functions for managing background image/video transitions.

export function changeBackgroundInstant(imageUrl, gameWrapper) {
    if (!gameWrapper || !imageUrl) return;
    gameWrapper.style.background = `url('${imageUrl}') no-repeat center center`;
    gameWrapper.style.backgroundSize = 'cover';
    const video = document.getElementById('bg-video');
    if (video) video.style.display = 'none';
  }
  
  export function changeBackgroundSmoothly(imageUrl, gameWrapper) {
    if (!gameWrapper || !imageUrl) return;
    const video = document.getElementById('bg-video');
    if (video) video.style.display = 'none';
  
    gameWrapper.classList.add('fade-out');
    setTimeout(() => {
      changeBackgroundInstant(imageUrl, gameWrapper);
      gameWrapper.classList.remove('fade-out');
      gameWrapper.classList.add('fade-in');
      setTimeout(() => gameWrapper.classList.remove('fade-in'), 300);
    }, 200);
  }
  
  export function clearBackground(gameWrapper) {
    if (!gameWrapper) return;
    gameWrapper.style.background = '';
    const video = document.getElementById('bg-video');
    if (video) video.style.display = 'none';
  }
  