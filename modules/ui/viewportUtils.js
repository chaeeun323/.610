// Adjusts the CSS viewport height unit on mobile devices.

export function setVh() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
