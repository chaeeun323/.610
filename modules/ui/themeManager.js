// 테마(라이트/다크) 클래스를 관리하는 모듈
// body 요소에 클래스 추가/삭제를 통해 테마 상태를 적용한다.

export function applyTheme(theme) {
  document.body.classList.toggle('dark-mode', theme === 'dark');
}

export function getCurrentTheme() {
  return document.body.classList.contains('dark-mode') ? 'dark' : 'light';
}
