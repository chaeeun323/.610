// 게임 전역 컨텍스트를 구성한다.
// DOM 참조와 상태, 공용 메서드를 한데 모아 모든 모듈이 사용한다.
import domRefs from './domRefs.js';
import state from './state.js';
import buildMethods from './contextMethods.js';

const context = {
  ...domRefs,
  ...state,
};

Object.assign(context, buildMethods(context));

export default context;
