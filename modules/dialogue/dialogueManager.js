// 여러 대화 스크립트를 합치고 마지막 이미지 등
// 대화 관련 정보를 가져오는 헬퍼 함수를 제공한다.

import { dialogueDay0Part0 }    from '../../data/dialogues/dialogue-day0-0.js';
import { dialogueDay0Part1 }    from '../../data/dialogues/dialogue-day0-1.js';
import { dialogueDay0Part2 }    from '../../data/dialogues/dialogue-day0-2.js';

import { dialogueDay1Part2 }    from '../../data/dialogues/dialogue-day1-2-fullversion-fixed.js';
import { dialogueDay1Part3 }    from '../../data/dialogues/dialogue-day1-3.js';
import { dialogueDay1Part4 }    from '../../data/dialogues/dialogue-day1-4.js';
import { dialogueDay1Part5 }    from '../../data/dialogues/dialogue-day1-5.js';
import { dialogueDay1Part6 }    from '../../data/dialogues/dialogue-day1-6.js';
import { dialogueDay1Part7 }    from '../../data/dialogues/dialogue-day1-7.js';

import { dialogueDay2Part0 }    from '../../data/dialogues/dialogue-day2-0.js';
import { dialogueDay2Part1 }    from '../../data/dialogues/dialogue-day2-1.js';
import { dialogueDay2Part2 }    from '../../data/dialogues/dialogue-day2-2.js';
import { dialogueDay2Part3 }    from '../../data/dialogues/dialogue-day2-3.js';
import { dialogueDay2Part5 }    from '../../data/dialogues/dialogue-day2-5.js';
import { dialogueDay2Part6 }    from '../../data/dialogues/dialogue-day2-6.js';

import { dialogueDay3Part1 }    from '../../data/dialogues/dialogue-day3-1.js';

import { dialogueDay4Part0 }    from '../../data/dialogues/dialogue-day4-0.js';
import { dialogueDay4Part1 }    from '../../data/dialogues/dialogue-day4-1.js';


export function getCombinedDialogue() {
  return [
    ...dialogueDay0Part0,
    ...dialogueDay0Part1,
    ...dialogueDay0Part2,
    ...dialogueDay1Part2,
    ...dialogueDay1Part3,
    ...dialogueDay1Part4,
    ...dialogueDay1Part5,
    ...dialogueDay1Part6,
    ...dialogueDay1Part7,
    ...dialogueDay2Part0,
    ...dialogueDay2Part1,
    ...dialogueDay2Part2,
    ...dialogueDay2Part3,
    ...dialogueDay2Part5,
    ...dialogueDay2Part6,
    ...dialogueDay3Part1,
    ...dialogueDay4Part0,
    ...dialogueDay4Part1
  ];
}

export function findLastImage(dialogueList, currentIndex) {
  for (let i = currentIndex; i >= 0; i--) {
    if (dialogueList[i].image) {
      return { image: dialogueList[i].image, index: i };
    }
  }
  return { image: null, index: -1 };
}
