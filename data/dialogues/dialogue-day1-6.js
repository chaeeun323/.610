export const dialogueDay1Part6 = [
  {
    "kakao": true,
    "name": "유종",
    "text": "방탈출 언제 끝남?그 시간 맞춰서 가볼게",
    room: "group"
  },
  {
    "talk": true,
    "name": "채은",
    "text": "(알려줄까 말까… 혼자 홍대 커피빈 사이에서 헤매는 유종씨… 귀엽다…)"
  },
  {
    "choice": [
      {
        "text": "위치 알려준다",
        "branch": [
          {
            "talk": true,
            "name": "채은",
            "text": "(그래도 알려줘야지. 안 그러면 진짜 길 잃겠네 ㅋㅋ)"
          },
          {
            "talk": true,
            "name": "채은",
            "text": "(지도 링크만 빠르게 복붙. 방탈출 게임 중이라 말은 못 붙이겠고…)"
          },
          {
            "linkPreview": true,
            "name": "채은",
            "chatImage": "https://i.imgur.com/SIWqtSC.png",
            "title": "카카오맵",
            "description": "큐브이스케이프 홍대점",
            "footer": {
              "icon": "https://developers.kakao.com/tool/resource/static/img/logo/map/kakaomap_basic.png",
              "label": "카카오맵",
              "url": "https://kakao.com"
            },
            "room": "group"
          },
          { "talk": true, "name": "직원", "text": "혹시 인원 다 도착하신 건가요?", "hideKakao": true },
          { "talk": true, "name": "채은", "text": "네~ 다 모였어요ㅎㅎ", "hideKakao": true },
          { "talk": true, "name": "직원", "text": "자, 이제 핸드폰은 모두 전원 꺼서 사물함에 넣어주세요~ 키는 꼭 본인이 잘 챙겨주세요!", "hideKakao": true },
          { "talk": true, "name": "직원", "text": "그리고 옆에 있는 안내문 읽어주시고요, 대표자 한 분이 동의서에 사인해주시면 됩니다~", "hideKakao": true },
          { "talk": true, "name": "혜정", "text": "와 재밌겠다ㅋㅋ 기대된다~", "hideKakao": true },
          { "talk": true, "name": "남휘", "text": "우리 팀워크 짱이다ㅋㅋ 오늘 꼭 성공하자!", "hideKakao": true },
          { "talk": true, "name": "채은", "text": "(사인하는 모습을 보며 피식 웃었다.)", "hideKakao": true },
          { "talk": true, "name": "채은", "text": "(우리가 고른 테마는 '독립된 조국에서'. 타임슬립에 미스터리라니... 기대 안 할 수가 없잖아?)", "hideKakao": true },
          { "talk": true, "name": "직원", "text": "참고로 이 방탈출은 조금 특별해요~", "hideKakao": true },
          { "talk": true, "name": "직원", "text": "중간에 등장하는 NPC는 실제 배우분이 연기하시는 거고, 직접적인 상호작용도 있으니 놀라지 마세요~", "hideKakao": true },
          { "talk": true, "name": "채은", "text": "(오? 연기도 해준다고...? 다른 데랑은 확실히 다르네.)", "hideKakao": true },
          { "talk": true, "name": "직원", "text": "좋아요, 이제 줄 맞춰 서주시고요! 눈 가리개 착용해 주세요~ 앞사람 어깨에 손 올려주세요!", "hideKakao": true },
          { "talk": true, "name": "직원", "text": "이동하실 때 절대 눈 떼시면 안 됩니다~ 조심조심 이동할게요!", "hideKakao": true },
          { "talk": true, "name": "채은", "text": "(앞사람 어깨를 더듬더듬 찾다가 살짝 웃음이 났다. 그래도 꾹 참았다.)", "hideKakao": true },
          { "talk": true, "name": "직원", "text": "자, 모두 준비됐죠? 이제 문 열고 입장하겠습니다!", "hideKakao": true },
          { "talk": true, "name": "채은", "text": "(철컥— 무거운 문이 열렸다. 어두운 방 안으로 한 줄로 조심히 들어섰다.)", "hideKakao": true },
          { "talk": true, "name": "지수", "text": "(작게) 헐... 분위기 쩐다...", "hideKakao": true },
          { "talk": true, "name": "혜정", "text": "(작게) 살짝 무서운데...?ㅋㅋ", "hideKakao": true },
          { "talk": true, "name": "채은", "text": "(방 안은 컴컴했고, 벽엔 누렇게 바랜 신문지와 편지들이 여기저기 붙어 있었다.)", "hideKakao": true },
          { "talk": true, "name": "남휘", "text": "야야 빨리 시작하자ㅋㅋ 제한시간 60분이라며!", "hideKakao": true },
          {
            "choice": [
              {
                "text": "첫 번째 미니 게임 도전",
                "branch": [
                  {
                    "talk": true,
                    "name": "채은",
                    "text": "첫 번째 미니 게임에 도전해보자!", "hideKakao": true, "theme": "dark" },
                  { "talk": true, "name": "시스템", "text": "게임 시작!", "hideKakao": true, "theme": "dark" },
                  { "image": "images/2.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/3.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/4.png", "overlay": "images/4-TOP.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/5.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/6.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/7.png", "overlay": "images/7-TOP.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/8.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/9.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/10.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/11.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/12.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/13.png", "hideKakao": true, "theme": "dark" },
                  {
                    image: "images/14.png",
                    overlay: "images/14-TOP.png",
                    answer: "프랑스",
                    hint1: "자세히 보니 글씨체마다 펜 색도 다른 거 같다...\n빨간색, 파란색, 검은색 펜이 보이는데...",
                    hint2: "파란색 글자들은 합치면 프...? \n다른 글자들도 맞춰볼까?", "theme": "dark" },
                  { "image": "images/15.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/16.png", "overlay": "images/16-TOP.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/17.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/18.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/19.png", "overlay": "images/19-TOP.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/20.png", "overlay": "images/20-TOP.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/21.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/22.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/23.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/24.png", "overlay": "images/24-TOP.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/25.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/26.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/27.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/28.png", "hideKakao": true, "theme": "dark" },
                  {
                    "image": "images/29.png",
                    "overlay": "images/29-TOP.png",
                    "answer": "RUSSIA",
                    hint1: "그림 위에 적힌 숫자는 무슨 의미일까?\n왠지 추신이 신경쓰인다",
                    hint2: "기호마다 부르는 이름이 적혀 있는데...\nHEART의 4번째는 R...나머지도 알파벳 순서를 보면...?", "theme": "dark" },
                  { "image": "images/30.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/31.gif", "hideKakao": true, "theme": "dark" },
                  { "image": "images/32.png", "overlay": "images/32-TOP.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/33.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/34.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/35.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/36.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/37.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/38.png", "overlay": "images/38-TOP.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/39.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/40.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/41.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/42.png", "hideKakao": true, "theme": "dark" },
                  { "image": "images/43.png", "hideKakao": true, "theme": "dark" },
                  {
                    "image": "images/44.png",
                    "overlay": "images/44-TOP.png",
                    "answer": "LIBRE",
                    hint1: "자세히 보니 글자들 사이에 하나씩 소문자드이 숨어 있다...?\n골라내 적어보니...",
                    hint2: "위쪽에 적혀 있는 건 전화번호...?\nCALL이 저렇게 생겼었나?", "theme": "dark" },
                  { image: "images/45.png", "hideKakao": true, "theme": "dark" },
                  { image: "images/46.png", "hideKakao": true, "theme": "dark" },
                  { image: "images/47.png", "hideKakao": true, "theme": "dark" },
                  { image: "images/48.png", "overlay": "images/48-TOP.png", "hideKakao": true, "theme": "dark" },
                  { image: "images/49.png", "overlay": "images/49-TOP.png", "hideKakao": true, "theme": "dark" },
                  { image: "images/50.png", "hideKakao": true, "theme": "dark" },
                  { image: "images/51.png", "hideKakao": true, "theme": "dark" },
                  { image: "images/52.png", "hideKakao": true, "theme": "dark" },
                  { image: "images/53.png", "overlay": "images/53-TOP.png", "hideKakao": true, "theme": "dark" },
                  { image: "images/54.png", "overlay": "images/54-TOP.png", "hideKakao": true, "theme": "dark" },
                  { image: "images/55.png", "overlay": "images/55-TOP.png", "hideKakao": true, "theme": "dark" },
                  { image: "images/56.png", "hideKakao": true, "theme": "dark" },
                  { image: "images/57.png", "hideKakao": true, "theme": "dark" },
                  {
                    "image": "images/58.png",
                    "overlay": "images/58-TOP.png",
                    "answer": "독립",
                    hint1: "아래에 적힌 문장을 자세히 보자...\n어떤 문장이 뒤집혀 있는 거 같은데...",
                    hint2: "종이를 잘 보니 접힌 자국이 있는데...\n선을 따라 접어보면 글자가 하나로 합쳐진다!", "theme": "dark" },
                  { image: "images/59.png", "overlay": "images/59-TOP.png", "hideKakao": true, "theme": "dark" },
                  { image: "images/60.png", "overlay": "images/60-TOP.png", "hideKakao": true, "theme": "dark" },
                  { image: "images/61.png", "hideKakao": true, "theme": "dark" },
                  { image: "images/62.png", "hideKakao": true, "theme": "dark" },
                  { image: "images/63.png", "hideKakao": true, "theme": "dark" },
                  { image: "images/64.png", "hideKakao": true, "theme": "dark" },
                  { image: "images/65.png", "overlay": "images/65-TOP.png", "hideKakao": true, "theme": "dark" },
                  {
                    "image": "images/66.png",
                    "overlay": "images/66-TOP.png",
                    "answer": "KOREA",
                    hint1: "접힌 자국대로 다시 접어보니...\n어? 가려진 부분은 빼도 단어가 되는 거 같은데...",
                    hint2: "FROM 아래에 있는 건 TO였다!\n그럼 뒤의 다섯 글자가 도착 장소인가?", "theme": "dark" },
                  { image: "images/67.png", "hideKakao": true, "theme": "dark" },
                  { image: "images/68.png", "overlay": "images/68-TOP.png", "hideKakao": true, "theme": "dark" },
                  { image: "images/69.png", "hideKakao": true, "theme": "dark" },
                  { image: "images/70.png", "hideKakao": true, "theme": "dark" },
                  { image: "images/71.png", "hideKakao": true, "theme": "dark" },
                  { image: "images/72.png", "hideKakao": true, "theme": "dark" },
                  { image: "https://cdn.metavv.com/prod/uploads/10288247/images/168017323289753.jpg", overlay: "images/73-TOP.png", "hideKakao": true, "theme": "dark" },
                  { image: "https://cdn.metavv.com/prod/uploads/10288247/images/168002238067810.gif", "hideKakao": true, "theme": "dark" },
                  { image: "https://cdn.metavv.com/prod/uploads/10288247/images/168007720590296.jpg", overlay: "https://djpms9a1go7nf.cloudfront.net/prod/uploads/10288247/images/168009066425413.png", "hideKakao": true, "theme": "dark" },
                  { image: "https://cdn.metavv.com/prod/uploads/10288247/images/168007728292923.jpg", overlay: "https://djpms9a1go7nf.cloudfront.net/prod/uploads/10288247/images/168009067665578.png", "hideKakao": true, "theme": "dark" },
                  {
                    "kakao": true,
                    "name": "유종",
                    "text": "오! 가장 중요한 위치!",
                    room: "group"
                  },
                  {
                    "kakao": true,
                    "name": "유종",
                    "text": "저기 근처에서 기다려야겠네",
                    room: "group"
                  },
                  {
                    "kakao": true,
                    "name": "유종",
                    "text": "고마워요 채은님만 답을 주시네 ㅋㅋ",
                    room: "group"
                  },
                  {
                    "kakao": true,
                    "name": "유종",
                    "text": "한참전에 물어봤는데 ㅡㅡ",
                    room: "group"
                  },
                  {
                    "kakao": true,
                    "name": "채은",
                    "text": "저희 이제 끗!",
                    room: "group"
                  },
                  {
                    "talk": true,
                    "name": "채은",
                    "text": "(방탈출 게임이 끝나고 나가자마자, 입구 쪽에서 누군가 기다리고 있었다.)",
                    "hideKakao": true
                  },
                  {
                    "talk": true,
                    "name": "채은",
                    "text": "(…유종이다. 반팔셔츠에 알라딘바지, 걍 알라딘이군.)",
                    "hideKakao": true
                  },
                  {
                    "talk": true,
                    "name": "유종",
                    "text": "채은님! 진짜 감사해요. 덕분에 바로 찾았어요.",
                    "hideKakao": true
                  },
                  {
                    "talk": true,
                    "name": "채은",
                    "text": "(헉 목소리 개좋다.)", "hideKakao": true
                  }
                ]
              },
              {
                "text": "잠시 쉬었다 하기",
                "branch": [
                  {
                    "talk": true,
                    "name": "채은",
                    "text": "좀 쉬었다가 다음으로 넘어가자…",
                    "hideKakao": true
                  },
                  {
                    "kakao": true,
                    "name": "유종",
                    "text": "오! 가장 중요한 위치!",
                    room: "group"
                  },
                  {
                    "kakao": true,
                    "name": "유종",
                    "text": "저기 근처에서 기다려야겠네",
                    room: "group"
                  },
                  {
                    "kakao": true,
                    "name": "유종",
                    "text": "고마워요 채은님만 답을 주시네 ㅋㅋ",
                    room: "group"
                  },
                  {
                    "kakao": true,
                    "name": "유종",
                    "text": "한참전에 물어봤는데 ㅡㅡ",
                    room: "group"
                  },
                  {
                    "kakao": true,
                    "name": "채은",
                    "text": "저희 이제 끗!",
                    room: "group"
                  },
                  {
                    "talk": true,
                    "name": "채은",
                    "text": "(방탈출 게임이 끝나고 나가자마자, 입구 쪽에서 누군가 기다리고 있었다.)", 
                    "hideKakao": true
                  },
                  {
                    "talk": true,
                    "name": "채은",
                    "text": "(…유종이다. 반팔셔츠에 알라딘바지, 걍 알라딘이군.)", 
                    "hideKakao": true
                  },
                  {
                    "talk": true,
                    "name": "유종",
                    "text": "채은님! 진짜 감사해요. 덕분에 바로 찾았어요.", 
                    "hideKakao": true
                  },
                  {
                    "talk": true,
                    "name": "채은",
                    "text": "(헉 목소리 개좋다.)", "hideKakao": true
                  }
                ]
              }
            ],
            "hideKakao": true  // 2차 choices 닫기
          }   // 2차 choice 객체 닫기
        ]   // 1차 "위치 알려준다" branch 닫기
      },
              {
                "text": "알아서 오것지 한다",
                "branch": [
                  {
                    "talk": true,
                    "name": "채은",
                    "text": "(9출 근처 방탈출카페 몇개 없으니까 알아서오것지..)", 
                    "hideKakao": true
                  },
                  {
                    "talk": true,
                    "name": "채은",
                    "text": "(방탈출 집중해야지… 딱히 위치까지 알려줄 필요는 없잖아?)", 
                    "hideKakao": true
                  },
                  { "talk": true, "name": "직원", "text": "혹시 인원 다 도착하신 건가요?", "hideKakao": true },
                  { "talk": true, "name": "채은", "text": "네~ 다 모였어요ㅎㅎ", "hideKakao": true },
                  { "talk": true, "name": "직원", "text": "자, 이제 핸드폰은 모두 전원 꺼서 사물함에 넣어주세요~ 키는 꼭 본인이 잘 챙겨주세요!", "hideKakao": true },
                  { "talk": true, "name": "직원", "text": "그리고 옆에 있는 안내문 읽어주시고요, 대표자 한 분이 동의서에 사인해주시면 됩니다~", "hideKakao": true },
                  { "talk": true, "name": "혜정", "text": "와 재밌겠다ㅋㅋ 기대된다~", "hideKakao": true },
                  { "talk": true, "name": "남휘", "text": "우리 팀워크 짱이다ㅋㅋ 오늘 꼭 성공하자!", "hideKakao": true },
                  { "talk": true, "name": "채은", "text": "(사인하는 모습을 보며 피식 웃었다.)", "hideKakao": true },
                  { "talk": true, "name": "채은", "text": "(우리가 고른 테마는 '독립된 조국에서'. 타임슬립에 미스터리라니... 기대 안 할 수가 없잖아?)", "hideKakao": true },
                  { "talk": true, "name": "직원", "text": "참고로 이 방탈출은 조금 특별해요~", "hideKakao": true },
                  { "talk": true, "name": "직원", "text": "중간에 등장하는 NPC는 실제 배우분이 연기하시는 거고, 직접적인 상호작용도 있으니 놀라지 마세요~", "hideKakao": true },
                  { "talk": true, "name": "채은", "text": "(오? 연기도 해준다고...? 다른 데랑은 확실히 다르네.)", "hideKakao": true },
                  { "talk": true, "name": "직원", "text": "좋아요, 이제 줄 맞춰 서주시고요! 눈 가리개 착용해 주세요~ 앞사람 어깨에 손 올려주세요!", "hideKakao": true },
                  { "talk": true, "name": "직원", "text": "이동하실 때 절대 눈 떼시면 안 됩니다~ 조심조심 이동할게요!", "hideKakao": true },
                  { "talk": true, "name": "채은", "text": "(앞사람 어깨를 더듬더듬 찾다가 살짝 웃음이 났다. 그래도 꾹 참았다.)", "hideKakao": true },
                  { "talk": true, "name": "직원", "text": "자, 모두 준비됐죠? 이제 문 열고 입장하겠습니다!", "hideKakao": true },
                  { "talk": true, "name": "채은", "text": "(철컥— 무거운 문이 열렸다. 어두운 방 안으로 한 줄로 조심히 들어섰다.)", "hideKakao": true },
                  { "talk": true, "name": "지수", "text": "(작게) 헐... 분위기 쩐다...", "hideKakao": true },
                  { "talk": true, "name": "혜정", "text": "(작게) 살짝 무서운데...?ㅋㅋ", "hideKakao": true },
                  { "talk": true, "name": "채은", "text": "(방 안은 컴컴했고, 벽엔 누렇게 바랜 신문지와 편지들이 여기저기 붙어 있었다.)", "hideKakao": true },
                  { "talk": true, "name": "남휘", "text": "야야 빨리 시작하자ㅋㅋ 제한시간 60분이라며!", "hideKakao": true },
                  {
                    "choice": [
                      {
                        "text": "첫 번째 미니 게임 도전",
                        "branch": [
                          {
                            "talk": true,
                            "name": "채은",
                            "text": "첫 번째 미니 게임에 도전해보자!", "hideKakao": true, "theme": "dark" },
                          { "talk": true, "name": "시스템", "text": "게임 시작!", "hideKakao": true, "theme": "dark" },
                          { "image": "images/2.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/3.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/4.png", "overlay": "images/4-TOP.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/5.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/6.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/7.png", "overlay": "images/7-TOP.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/8.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/9.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/10.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/11.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/12.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/13.png", "hideKakao": true, "theme": "dark" },
                          {
                            image: "images/14.png",
                            overlay: "images/14-TOP.png",
                            answer: "프랑스",
                            hint1: "자세히 보니 글씨체마다 펜 색도 다른 거 같다...\n빨간색, 파란색, 검은색 펜이 보이는데...",
                            hint2: "파란색 글자들은 합치면 프...? \n다른 글자들도 맞춰볼까?", "theme": "dark" },
                          { "image": "images/15.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/16.png", "overlay": "images/16-TOP.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/17.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/18.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/19.png", "overlay": "images/19-TOP.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/20.png", "overlay": "images/20-TOP.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/21.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/22.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/23.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/24.png", "overlay": "images/24-TOP.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/25.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/26.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/27.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/28.png", "hideKakao": true, "theme": "dark" },
                          {
                            "image": "images/29.png",
                            "overlay": "images/29-TOP.png",
                            "answer": "RUSSIA",
                            hint1: "그림 위에 적힌 숫자는 무슨 의미일까?\n왠지 추신이 신경쓰인다",
                            hint2: "기호마다 부르는 이름이 적혀 있는데...\nHEART의 4번째는 R...나머지도 알파벳 순서를 보면...?", "theme": "dark" },
                          { "image": "images/30.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/31.gif", "hideKakao": true, "theme": "dark" },
                          { "image": "images/32.png", "overlay": "images/32-TOP.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/33.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/34.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/35.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/36.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/37.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/38.png", "overlay": "images/38-TOP.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/39.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/40.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/41.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/42.png", "hideKakao": true, "theme": "dark" },
                          { "image": "images/43.png", "hideKakao": true, "theme": "dark" },
                          {
                            "image": "images/44.png",
                            "overlay": "images/44-TOP.png",
                            "answer": "LIBRE",
                            hint1: "자세히 보니 글자들 사이에 하나씩 소문자드이 숨어 있다...?\n골라내 적어보니...",
                            hint2: "위쪽에 적혀 있는 건 전화번호...?\nCALL이 저렇게 생겼었나?", "theme": "dark" },
                          { image: "images/45.png", "hideKakao": true, "theme": "dark" },
                          { image: "images/46.png", "hideKakao": true, "theme": "dark" },
                          { image: "images/47.png", "hideKakao": true, "theme": "dark" },
                          { image: "images/48.png", "overlay": "images/48-TOP.png", "hideKakao": true, "theme": "dark" },
                          { image: "images/49.png", "overlay": "images/49-TOP.png", "hideKakao": true, "theme": "dark" },
                          { image: "images/50.png", "hideKakao": true, "theme": "dark" },
                          { image: "images/51.png", "hideKakao": true, "theme": "dark" },
                          { image: "images/52.png", "hideKakao": true, "theme": "dark" },
                          { image: "images/53.png", "overlay": "images/53-TOP.png", "hideKakao": true, "theme": "dark" },
                          { image: "images/54.png", "overlay": "images/54-TOP.png", "hideKakao": true, "theme": "dark" },
                          { image: "images/55.png", "overlay": "images/55-TOP.png", "hideKakao": true, "theme": "dark" },
                          { image: "images/56.png", "hideKakao": true, "theme": "dark" },
                          { image: "images/57.png", "hideKakao": true, "theme": "dark" },
                          {
                            "image": "images/58.png",
                            "overlay": "images/58-TOP.png",
                            "answer": "독립",
                            hint1: "아래에 적힌 문장을 자세히 보자...\n어떤 문장이 뒤집혀 있는 거 같은데...",
                            hint2: "종이를 잘 보니 접힌 자국이 있는데...\n선을 따라 접어보면 글자가 하나로 합쳐진다!", "theme": "dark" },
                          { image: "images/59.png", "overlay": "images/59-TOP.png", "hideKakao": true, "theme": "dark" },
                          { image: "images/60.png", "overlay": "images/60-TOP.png", "hideKakao": true, "theme": "dark" },
                          { image: "images/61.png", "hideKakao": true, "theme": "dark" },
                          { image: "images/62.png", "hideKakao": true, "theme": "dark" },
                          { image: "images/63.png", "hideKakao": true, "theme": "dark" },
                          { image: "images/64.png", "hideKakao": true, "theme": "dark" },
                          { image: "images/65.png", "overlay": "images/65-TOP.png", "hideKakao": true, "theme": "dark" },
                          {
                            "image": "images/66.png",
                            "overlay": "images/66-TOP.png",
                            "answer": "KOREA",
                            hint1: "접힌 자국대로 다시 접어보니...\n어? 가려진 부분은 빼도 단어가 되는 거 같은데...",
                            hint2: "FROM 아래에 있는 건 TO였다!\n그럼 뒤의 다섯 글자가 도착 장소인가?", "theme": "dark" },
                          { image: "images/67.png", "hideKakao": true, "theme": "dark" },
                          { image: "images/68.png", "overlay": "images/68-TOP.png", "hideKakao": true, "theme": "dark" },
                          { image: "images/69.png", "hideKakao": true, "theme": "dark" },
                          { image: "images/70.png", "hideKakao": true, "theme": "dark" },
                          { image: "images/71.png", "hideKakao": true, "theme": "dark" },
                          { image: "images/72.png", "hideKakao": true, "theme": "dark" },
                          { image: "https://cdn.metavv.com/prod/uploads/10288247/images/168017323289753.jpg", overlay: "images/73-TOP.png", "hideKakao": true, "theme": "dark" },
                          { image: "https://cdn.metavv.com/prod/uploads/10288247/images/168002238067810.gif", "hideKakao": true, "theme": "dark" },
                          { image: "https://cdn.metavv.com/prod/uploads/10288247/images/168007720590296.jpg", overlay: "https://djpms9a1go7nf.cloudfront.net/prod/uploads/10288247/images/168009066425413.png", "hideKakao": true, "theme": "dark" },
                          { image: "https://cdn.metavv.com/prod/uploads/10288247/images/168007728292923.jpg", overlay: "https://djpms9a1go7nf.cloudfront.net/prod/uploads/10288247/images/168009067665578.png", "hideKakao": true, "theme": "dark" },
                          {
                            "kakao": true,
                            "name": "유종",
                            "text": "나 이제 광명 도착해서 바로 갈라고 했는데",
                            room: "group"
                          },
                          {
                            "kakao": true,
                            "name": "유종",
                            "text": "기다렸다 가야하나",
                            room: "group"
                          },
                          {
                            "kakao": true,
                            "name": "유종",
                            "text": "시작했겠군",
                            room: "group"
                          },
                          {
                            "talk": true,
                            "name": "채은",
                            "text": "(…답이 없는 유종. 뭔가 조용하니까 신경 쓰인다.)"
                          },
                          {
                            "kakao": true,
                            "name": "유종",
                            "text": "어디 방탈출 갔는지",
                            room: "group"
                          },
                          {
                            "kakao": true,
                            "name": "유종",
                            "text": "모르는게 함정임 ㅋㅋㅋㅋ",
                            room: "group"
                          },
                          {
                            "kakao": true,
                            "name": "유종",
                            "text": "커피빈도 홍대엔 두 개다...",
                            room: "group"
                          },
                          {
                            "kakao": true,
                            "name": "세라",
                            "text": "ㅋㅋㄱ유종ㅈ이외로워졌네",
                            room: "group"
                          },
                          {
                            "kakao": true,
                            "name": "유종",
                            "text": "ㅋㅋㅋㅋㅋㅋㅋㅋ 지수한테나 가야겠다",
                            room: "group"
                          },
                          {
                            "kakao": true,
                            "name": "채은",
                            "text": "이런",
                            room: "group"
                          },
                          {
                            "kakao": true,
                            "name": "채은",
                            "text": "저희나왓어요 어디세요",
                            room: "group"
                          },
                          {
                            "talk": true,
                            "name": "채은",
                            "text": "(…좀 미안하다. 다음엔 알려줘야지. 쓰레기채은)"
                          },
                          {
                            "talk": true,
                            "name": "혜정",
                            "text": "미안해 ㅋㅋ 급하게 하느라 다들 너를 잊었나봐", "hideKakao": true
                          },
                          {
                            "talk": true,
                            "name": "채은",
                            "text": "(혜정이의 농담에 유종이 멋쩍게 웃었다. 나는 고개만 살짝 끄덕였다. 아직은 어색한 거리감.)", "hideKakao": true
                          }
                        ]
                      },
                      {
                        "text": "잠시 쉬었다 하기",
                        "branch": [
                          {
                            "talk": true,
                            "name": "채은",
                            "text": "좀 쉬었다가 다음으로 넘어가자…",
                            "hideKakao": true
                          },
                          {
                            "kakao": true,
                            "name": "유종",
                            "text": "나 이제 광명 도착해서 바로 갈라고 했는데",
                            room: "group"
                          },
                          {
                            "kakao": true,
                            "name": "유종",
                            "text": "기다렸다 가야하나",
                            room: "group"
                          },
                          {
                            "kakao": true,
                            "name": "유종",
                            "text": "시작했겠군",
                            room: "group"
                          },
                          {
                            "talk": true,
                            "name": "채은",
                            "text": "(…답이 없는 유종. 뭔가 조용하니까 신경 쓰인다.)"
                          },
                          {
                            "kakao": true,
                            "name": "유종",
                            "text": "어디 방탈출 갔는지",
                            room: "group"
                          },
                          {
                            "kakao": true,
                            "name": "유종",
                            "text": "모르는게 함정임 ㅋㅋㅋㅋ",
                            room: "group"
                          },
                          {
                            "kakao": true,
                            "name": "유종",
                            "text": "커피빈도 홍대엔 두 개다...",
                            room: "group"
                          },
                          {
                            "kakao": true,
                            "name": "세라",
                            "text": "ㅋㅋㄱ유종ㅈ이외로워졌네",
                            room: "group"
                          },
                          {
                            "kakao": true,
                            "name": "유종",
                            "text": "ㅋㅋㅋㅋㅋㅋㅋㅋ 지수한테나 가야겠다",
                            room: "group"
                          },
                          {
                            "kakao": true,
                            "name": "채은",
                            "text": "이런",
                            room: "group"
                          },
                          {
                            "kakao": true,
                            "name": "채은",
                            "text": "저희나왓어요 어디세요",
                            room: "group"
                          },
                          {
                            "talk": true,
                            "name": "채은",
                            "text": "(…좀 미안하다. 다음엔 알려줘야지. 쓰레기채은)"
                          },
                          {
                            "talk": true,
                            "name": "혜정",
                            "text": "미안해 ㅋㅋ 급하게 하느라 다들 너를 잊었나봐", "hideKakao": true
                          },
                          {
                            "talk": true,
                            "name": "채은",
                            "text": "(혜정이의 농담에 유종이 멋쩍게 웃었다. 나는 고개만 살짝 끄덕였다. 아직은 어색한 거리감.)",
                            "hideKakao": true
                          }  // 마지막 talk
                        ]
                      }
                    ],
                    "hideKakao": true // 2차 choices 닫기
                  }   // 2차 choice 객체 닫기
                ]     // 1차 "알아서 오겠지" branch 닫기
              }
            ],
            "hideKakao": true // 1차 choices 닫기
          }   // 1차 choice 객체 닫기       // choice 전체 블록 닫기
                  ];           // export 배열 닫기