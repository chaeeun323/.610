import assert from 'assert';
import { getRoomBackground, isKakaoMessage } from '../modules/kakao/kakaoMessageManager.js';

assert.strictEqual(getRoomBackground('group'), 'images/chat-group.png');
assert.strictEqual(getRoomBackground('yujong'), 'images/chat-yoo.png');
assert.strictEqual(getRoomBackground('hyejeong'), 'images/chat-hyejeong.png');
assert.strictEqual(getRoomBackground('unknown'), 'images/chat.png');

assert.strictEqual(isKakaoMessage({ kakao: true }), true);
assert.strictEqual(isKakaoMessage({ system: true }), true);
assert.strictEqual(isKakaoMessage({ linkPreview: true }), true);
assert.strictEqual(Boolean(isKakaoMessage({})), false);

console.log('All tests passed');
