export function addKakaoMessage(
  name,
  text,
  system = false,
  direction = null,
  chatImage = null,
  icon = null,
  title = null,
  description = null,
  url = '#',
  button = null,
  footer = null,
  data = {},
  kakaoBox,
  kakaoOverlay
) {
  direction = name === '채은' ? 'right' : 'left';

  if (!system && data.room && kakaoOverlay) {
    kakaoOverlay.src = getRoomBackground(data.room);
  }

  if (system) {
    const msg = document.createElement('div');
    msg.className = 'system-msg';
    msg.textContent = text;
    kakaoBox.appendChild(msg);
    scrollToBottom(kakaoBox);
    return;
  }

  const group = document.createElement('div');
  group.className = 'msg-group ' + direction;

  const nameTag = document.createElement('div');
  nameTag.className = 'kakao-name';
  nameTag.textContent = name;
  nameTag.style.textAlign = direction === 'right' ? 'right' : 'left';
  group.appendChild(nameTag);

  const wrapper = document.createElement('div');
  wrapper.className = 'kakao-msg ' + direction;

  if (name === '채은' && data.private) {
    wrapper.classList.add('pink-message');
  }

  if (title && description && chatImage) {
    wrapper.classList.add('link-preview');
    const preview = document.createElement('div');
    preview.className = 'preview-wrapper';

    const imgEl = document.createElement('img');
    imgEl.src = chatImage;
    imgEl.className = 'preview-img';
    preview.appendChild(imgEl);

    const textBox = document.createElement('div');
    textBox.className = 'preview-text';

    const titleEl = document.createElement('strong');
    titleEl.textContent = title;
    textBox.appendChild(titleEl);

    const descEl = document.createElement('p');
    descEl.textContent = description;
    textBox.appendChild(descEl);

    if (button) {
      const buttonEl = document.createElement('button');
      buttonEl.className = 'preview-button';
      buttonEl.textContent = button;
      textBox.appendChild(buttonEl);
    }

    preview.appendChild(textBox);

    if (footer) {
      const footerEl = document.createElement('div');
      footerEl.className = 'preview-footer';

      const iconEl = document.createElement('img');
      iconEl.src = footer.icon;
      iconEl.className = 'footer-icon';

      const label = document.createElement('span');
      label.textContent = footer.label;
      label.className = 'footer-label';

      const arrow = document.createElement('span');
      arrow.textContent = '›';
      arrow.className = 'footer-arrow';

      footerEl.appendChild(iconEl);
      footerEl.appendChild(label);
      footerEl.appendChild(arrow);
      footerEl.dataset.url = footer.url;
      footerEl.onclick = () => window.open(footer.url, '_blank');

      preview.appendChild(footerEl);
    }

    wrapper.appendChild(preview);
  } else {
    if (text) {
      const textNode = document.createElement('div');
      textNode.textContent = text;
      wrapper.appendChild(textNode);
    }
    if (chatImage && !title) {
      const img = document.createElement('img');
      img.src = chatImage;
      img.style.maxWidth = '180px';
      img.style.borderRadius = '12px';
      img.style.display = 'block';
      img.style.marginTop = '6px';
      wrapper.appendChild(img);
    }
  }

  group.appendChild(wrapper);
  kakaoBox.appendChild(group);
  scrollToBottom(kakaoBox);
}

// ✅ 공통 호출용 함수
export function sendKakao(d, kakaoBox, kakaoOverlay) {
  addKakaoMessage(
    d.name || '',
    d.text || '',
    d.system || false,
    d.direction || 'left',
    d.chatImage || null,
    d.icon || null,
    d.title || null,
    d.description || null,
    d.url || '#',
    d.button || null,
    d.footer || null,
    d,
    kakaoBox,
    kakaoOverlay
  );
}

// ✅ 카카오 메시지 여부 판단 함수
export function isKakaoMessage(d) {
  return d.kakao || d.system || d.linkPreview;
}

// ✅ 대화방 타입에 따른 배경 이미지 경로 반환
export function getRoomBackground(room) {
  const roomBgMap = {
    group: 'images/chat-group.png',
    yujong: 'images/chat-yoo.png',
    hyejeong: 'images/chat-hyejeong.png',
  };
  return roomBgMap[room] || 'images/chat.png';
}

// ✅ 카카오 메시지창 보여주기/숨기기 토글
export function toggleKakaoDisplay(show, kakaoBox, kakaoOverlay) {
  kakaoBox.style.display = show ? 'block' : 'none';
  kakaoOverlay.style.display = show ? 'block' : 'none';
}

// ✅ 카카오 메시지 전체 삭제
export function clearKakaoMessages(kakaoBox) {
  kakaoBox.innerHTML = '';
}

// ✅ 스크롤을 맨 아래로
export function scrollToBottom(kakaoBox) {
  kakaoBox.scrollTop = kakaoBox.scrollHeight;
}

