// 모바일 환경에서 CSS viewport 높이 단위를 조정한다.

export function setVh() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
