export const dialogueDay2Part5 = [
 {
  "image": "images/bg1.png",
    "system": true,
    "text": "[2024년 6월 13일 목요일]"
},
   { "image": "images/bg1.png","kakao": true, "name": "혜정", "text": "인사이드아웃 보는거임?", "direction": "left" },
  { "kakao": true, "name": "혜정", "text": "어디 영화관?", "direction": "left" },
  { "kakao": true, "name": "유종", "text": "신림 롯데시네마 생각중", "direction": "left" },
  { "kakao": true, "name": "세라", "text": "신림 롯데시네마 재밌겠다...", "direction": "left" },
  { "kakao": true, "name": "혜정", "text": "내일 1봐야겟다", "direction": "left" },
  { "kakao": true, "name": "혜정", "text": "몇시거", "direction": "left" },
  { "kakao": true, "name": "혜정", "text": "내일 보러오는사람 총 몇명임", "direction": "left" },
  { "kakao": true, "name": "유종", "text": "갈 사람 정하고 그 사람들끼리 정해봐야지", "direction": "left" },
  { "kakao": true, "name": "유종", "text": "내일은 금요일임", "direction": "left" },
  { "talk": true, "name": "채은", "text": "(오케이, 금요일이면 퇴근하고 바로 달려가면 되겠네.)" },
  { "kakao": true, "name": "혜정", "text": "올사람 손!", "direction": "left" },
  { "kakao": true, "name": "유종", "text": "발!", "direction": "left" },
  { "kakao": true, "name": "유종", "text": "그럼 너 나 우리", "direction": "left" },
  { "kakao": true, "name": "혜정", "text": "채은은", "direction": "left" },
  { "kakao": true, "name": "혜정", "text": "몇시에옴", "direction": "left" },
  { "kakao": true, "name": "혜정", "text": "드라마대사냐", "direction": "left" },
  { "kakao": true, "name": "혜정", "text": "너...나...우리..~☆", "direction": "left" },
  { "talk": true, "name": "채은", "text": "(아니 무슨 인사이드아웃 보는 게 커플 결성식이냐ㅋㅋㅋ)" },
  { "kakao": true, "name": "세라", "text": "다들 인사이드아웃 정모야?", "direction": "left" },
  { "kakao": true, "name": "혜정", "text": "채은언니 일정", "direction": "left" },
  { "kakao": true, "name": "혜정", "text": "없던데", "direction": "left" },

  // ➡️ 선택지
  {
    "choice": [
      { "text": "내 옆자리 유종이로 예매해주면 감", "branch": [
        { "kakao": true, "name": "채은", "text": "내 옆자리 유종이로 예매해주면 감", "direction": "right" },
        { "talk": true, "name": "채은", "text": "(아 물론 그냥 간다 해도 됐는데, 요건 살짝 기대해봐도 되잖아?)" },
        { "kakao": true, "name": "혜정", "text": "언니 자리는 어차피 선착순이야ㅋㅋ 유종이 옆에 언니밖에 안 앉으니까 걍 둘이 앉어", "direction": "left" }
      ]},
      { "text": "ㄱㄱ", "branch": [
        { "kakao": true, "name": "채은", "text": "ㄱㄱ", "direction": "right" },
        { "talk": true, "name": "채은", "text": "(뭐 그냥 가는 거지 뭐. 근데 은근 떨리는 건 기분탓인가?)" }
      ]},
      { "text": "나 그거 썸남이랑 보기로함 ㅈㅅ", "branch": [
        { "kakao": true, "name": "채은", "text": "나 그거 썸남이랑 보기로함 ㅈㅅ", "direction": "right" },
        { "talk": true, "name": "채은", "text": "(물론 썸남=유종이라는 건 아무도 모름ㅋ)" },
        { "kakao": true, "name": "혜정", "text": "ㅇㅋ 유종이 옆에 앉아서 보면 되겠네", "direction": "left" }
      ]}
    ]
  },

  // 선택지 이후 공통
  { "kakao": true, "name": "유종", "text": "만화카페도 가고 싶었지만 시간이 애매하군", "direction": "left" },
  { "talk": true, "name": "채은", "text": "(만화카페... 다음에 따로 가야겠다. 같이.)" },
  { "kakao": true, "name": "채은", "text": "일찍일어나야겟군", "direction": "right" },
  { "kakao": true, "name": "유종", "text": "거기서 간식 먹어줘야되는데", "direction": "left" },
  { "talk": true, "name": "채은", "text": "(그러니까! 간식은 필수지! 나만 그런 거 아니었네.)" },
  { "kakao": true, "name": "혜정", "text": "좋은자리가", "direction": "left" },
  { "kakao": true, "name": "혜정", "text": "없는데", "direction": "left" },
  { "kakao": true, "name": "혜정", "text": "그냥네자리붙은거?", "direction": "left" },
  { "kakao": true, "name": "채은", "text": "내옆자리가", "direction": "right" },
  { "kakao": true, "name": "채은", "text": "가장좋은자리", "direction": "right" },
  { "talk": true, "name": "채은", "text": "(이건 인정이지. 옆자리는 나야.)" },
  { "kakao": true, "name": "채은", "text": "아님 10억받고 자리랜덤돌리기", "direction": "right" },
  { "talk": true, "name": "채은", "text": "(10억이면... 아쉽지만 자리 포기할게요.)" },
  
{ "system": true, "text": "2024년 6월 14일 토요일" },
  { "kakao": true, "name": "유종", "text": "일어나요", "direction": "left" },
  { "kakao": true, "name": "유종", "text": "비상!!", "direction": "left" },
  { "kakao": true, "name": "채은", "text": "알람보다 빠르다 역시 유 종", "direction": "right" },
  { "talk": true, "name": "채은", "text": "(오늘은 뭔가 좋은 예감이 든다.)" },

  { "kakao": true, "name": "채은", "text": "오늘 비 온대용", "direction": "right" },
  { "kakao": true, "name": "유종", "text": "ㅋㅋㅋㅋㅋ 버스타야 되는데 큰일", "direction": "left" },
  { "kakao": true, "name": "채은", "text": "택시타세요~", "direction": "right" },
   { "image": "images/bg18.png", "kakao": true, "name": "채은", "text": "당산역 도착했어요!", "direction": "right" },
  { "kakao": true, "name": "채은", "text": "사람 많을까봐 일찍 나왔어요", "direction": "right" },
  { "kakao": true, "name": "유종", "text": "혼자 기다리시겠어요? ㅋㅋ", "direction": "left" },

  { "talk": true, "name": "채은", "text": "(혼자 기다리는 것도 나쁘지 않아. 곧 보니까.)" },
{ "image": "images/bg19.png", "kakao": true, "name": "채은", "text": "롯데시네마 도착!", "direction": "right" },
  { "kakao": true, "name": "유종", "text": "오잉 왔어요?", "direction": "left" },
// 인사이드 아웃 관람
// 🎬 인사이드아웃 관람 전 - 영화관 만남
{ "talk": true, "name": "채은", "text": "(혼자 일찍 도착했다. 시원한 로비 한켠에 서성거린다.)" },
{ "talk": true, "name": "채은", "text": "(휴대폰 확인. 아직 아무도 안 왔다.)" },
{ "kakao": true, "name": "채은", "text": "저 영화관 앞에 있어요~", "direction": "right" },

{ "talk": true, "name": "채은", "text": "(잠시 뒤, 멀리서 키 큰 남자가 걸어오는 게 보인다.)" },
{ "talk": true, "name": "채은", "text": "(아... 유종씨다.)" },

{ "kakao": true, "name": "유종", "text": "오! 도착하셨어요?", "direction": "left" },
{ "kakao": true, "name": "채은", "text": "네ㅋㅋ 금방 왔어요", "direction": "right" },

{ "talk": true, "name": "채은", "text": "(가까이서 보니까 더 멋있네. 와... 그냥 영화 주인공 같잖아?)" },

{ "talk": true, "name": "채은", "text": "(둘이 나란히 서서 대화하고 있는데, 저 멀리서 누가 뛰어오는 소리)" },
{ "kakao": true, "name": "혜정", "text": "헉헉 미안ㅋㅋㅋㅋ 지각!!", "direction": "left" },

{ "kakao": true, "name": "혜정", "text": "근데 유종 멋있다 오늘ㅋㅋㅋ", "direction": "left" },
{ "talk": true, "name": "채은", "text": "(...내가 먼저 느꼈다고요.)" },

{ "kakao": true, "name": "채은", "text": "맞아요 오늘 좀 영화 배우 같음ㅋㅋ", "direction": "right" },
{ "kakao": true, "name": "유종", "text": "허허 과찬이십니다", "direction": "left" },
{ "talk": true, "name": "채은", "text": "(쑥스러워하는 거 귀엽다...)" },

{ "talk": true, "name": "채은", "text": "(셋이 모였고, 이제 티켓 찾으러 이동!)" },
// 🎟️ 티켓 찾고 팝콘 사는 장면
{ "talk": true, "name": "채은", "text": "(티켓 발권 완료. 셋이 나란히 서서 팝콘을 사러 간다.)" },
{ "kakao": true, "name": "혜정", "text": "난 팝콘 안 먹어~", "direction": "left" },
{ "talk": true, "name": "채은", "text": "(어라, 그럼 나랑 유종씨 둘이서만...?)" },
{ "kakao": true, "name": "유종", "text": "그럼 우리 둘이 커플세트 하나 시킬까요?", "direction": "left" },
{ "talk": true, "name": "채은", "text": "(커플세트... 이름이 좀 민망하지만 싫지 않았다.)" },

// ➡️ 선택지
{
  "choice": [
    {
      "text": "나도 팝콘 먹을래! (커플세트 시킨다)", "branch": [
        { "kakao": true, "name": "채은", "text": "나도 팝콘 먹을래요ㅋㅋ", "direction": "right" },
        { "talk": true, "name": "채은", "text": "(괜히 웃음이 났다. 같이 팝콘 들고 영화 보는 거, 왠지 특별해.)" },
        { "kakao": true, "name": "유종", "text": "좋아요ㅎㅎ 커플세트 가시죠", "direction": "left" },
        { "talk": true, "name": "채은", "text": "(좌석도 자연스럽게 나란히. 오늘 영화, 더 설레겠네.)" },
		{ "image": "images/bg20.png", "talk": true, "name": "채은", "text": "(영화 시작. 모두 조용해진다.)" },
{ "talk": true, "name": "채은", "text": "(옆자리 유종씨. 팝콘 손이 가끔 부딪힐 때마다 괜히 심장이 뛰었다.)" },
{ "talk": true, "name": "채은", "text": "(영화 속 '슬픔이'가 우는 장면. 나도 모르게 눈물이 고였다.)" },
{ "talk": true, "name": "채은", "text": "(옆을 슬쩍 보니, 유종씨도 조용히 웃고 있었다. 괜히 안심.)" },
{ "talk": true, "name": "채은", "text": "(끝날 때까지 아무 말 없이, 그냥 조용히 함께 있었다.)" },
{ "talk": true, "name": "채은", "text": "(영화관 조명이 다시 켜졌다.)" }

      ]
    },
    {
      "text": "괜찮아, 안 먹을래 (거리감 유지)", "branch": [
{ "image": "images/bg20.png", "talk": true, "name": "채은", "text": "(자리는 유종씨 - 혜정 - 나. 예상했지만 아쉽다.)" },	  
{ "talk": true, "name": "채은", "text": "(팝콘도 없고, 그냥 조용히 손을 깍지 낀 채 무릎 위에 얹었다.)" },
{ "talk": true, "name": "채은", "text": "(영화 속 '슬픔이'가 우는 장면. 괜히 마음이 울컥했다.)" },
{ "talk": true, "name": "채은", "text": "(살짝 고개를 돌려 유종씨를 보고 싶었지만, 혜정이 사이에 있어 포기했다.)" },
{ "talk": true, "name": "채은", "text": "(끝날 때까지 조용히, 혼자 감정을 꾹꾹 눌렀다.)" },
{ "talk": true, "name": "채은", "text": "(영화관 조명이 다시 켜졌다.)" }
      ]
    }
  ]
},

// 🎬 영화 끝나고
{ "image": "images/bg21.png", "talk": true, "name": "유종", "text": "재밌었어요?" },	
{ "talk": true, "name": "채은", "text": "네ㅋㅋ 슬프면서도 귀여웠어요" },
{ "talk": true, "name": "유종", "text": "눈물 참느라 힘들었음ㅋㅋ" },
{ "talk": true, "name": "채은", "text": "(나만 그런 거 아니었구나... 다행.)" },

{ "talk": true, "name": "채은", "text": "다음엔 만화카페도 가요" },
{ "talk": true, "name": "유종", "text": "좋아요ㅋㅋ 진짜 가야죠" },
// 📍 영화관 앞, 자연스럽게 모임 조율하는 중
  { "talk": true, "name": "채은", "text": "영화관 앞. 이제 각자 흩어질 타이밍, 하지만 분위기는 흩어지지 않았다." },
  // 🕓 도착 시간 확인 및 조율
  { "talk": true, "name": "채은", "text": "근데 다른 애들은 언제와?" },
  { "talk": true, "name": "유종", "text": "아직 얘기 안 했는데... 카톡 해볼게요" },
  { "talk": true, "name": "혜정", "text": "도연이 형 늦는다며? 우리 먼저 가자ㅋㅋ" },
  { "talk": true, "name": "준영", "text": "ㅇㅇ 자리 잡고 있자. 웨이팅 있을지도 몰라" },
  { "talk": true, "name": "채은", "text": "다들 시간 다 제각각이라 우리 먼저 자리 잡는 게 나을 수도 있겠다ㅋㅋ" },
  { "talk": true, "name": "유종", "text": "ㅇㅇ 저도 그렇게 생각했어요. 미리 가 있을까요?" },
  { "talk": true, "name": "혜정", "text": "오케이 콜~" },
  { "talk": true, "name": "채은", "text": "그럼 그렇게 해요~" },

  // 🎥 영화 종료 후 단톡
  { "kakao": true, "name": "유종", "text": "@도연 도연이 형 몇 시에 와용?" },
  { "kakao": true, "name": "도연", "text": "나 내일 새벽에 일 있어서 오래 못 놀아. 슬슬 준비하고 출발할게." },
  { "kakao": true, "name": "준영", "text": "넵 행님~ 조심히 오십쇼" },
  { "kakao": true, "name": "혜정", "text": "지도: 금별맥주 신림점" },
    // 🚶 네 명이 신림으로 먼저 향함
  { "talk": true, "name": "채은", "text": "그렇게 우리는 먼저 신림으로 향하기로 했다. 날씨도 좋고, 기분도 좋고, 약속도 가볍지 않았다." },

  // 🍽️ 저녁 메뉴 드립
  { "kakao": true, "name": "세라", "text": "다들 저녁 뭐 먹을 거야?" },
  { "kakao": true, "name": "세라", "text": "우리 대신 신림 닭갈비 먹어주면 안 됨?... 아우성 곱창이라도..." },

  // 🍺 1차 확정
  { "kakao": true, "name": "도연", "text": "네이버지도: 신사리포차 (한신포차 건물 지하)" },
  { "kakao": true, "name": "석연", "text": "또 나만 빼고 다 맛있는 거 먹지…" },

  // 🎤 2차 노래방 탐색
  { "kakao": true, "name": "지수", "text": "나 이제 십분 안에 퇴근이염. 신림역으로 가면 돼??" },
  { "kakao": true, "name": "도연", "text": "네이버지도: 썸노래타운 신림점" },
  { "kakao": true, "name": "도연", "text": "이제는 여기로~" },
    { "kakao": true, "name": "지수", "text": "벌써 노래방이야?? ㅋㅋㅋㅋㅋㅋㅋㅋㅋ" },
  { "kakao": true, "name": "채은", "text": "3차야" },
  { "kakao": true, "name": "지수", "text": "다들 멀쩡해??" },
  { "kakao": true, "name": "채은", "text": "나 빼고 다 멀쩡해" },
  { "kakao": true, "name": "석연", "text": "와 노래방 못참는데… 오늘은 참아야지…" },

// 📍 현장 설명을 말풍선으로
  { "talk": true, "name": "채은", "text": "(지수는 아직 도착 전. 우리끼리 벌써 신림 노래방 도착 완료.)" },
  { "talk": true, "name": "채은", "text": "(방 안은 이미 불타고 있었다. 부장님 개인기부터 최애곡 릴레이까지…)" },

  // 📹 영상 올라오는 중
  { "kakao": true, "name": "혜정", "text": "참는다고? (동영상 x8)" },
  { "kakao": true, "name": "도영", "text": "뮤뱅 카감 같다ㅋㅋ 잘 놀고 갑니당 ^.^~~~" },
  { "kakao": true, "name": "준영", "text": "조심히 들어가십쇼!" },
  { "kakao": true, "name": "도연", "text": "(이모티콘)" },
  { "kakao": true, "name": "유종", "text": "잘 놀고 갑니다~~~~" },
  { "kakao": true, "name": "지수", "text": "웅 개꿀잠잤음" },
  { "kakao": true, "name": "지원", "text": "오늘 재밌었습니댱" },
  { "kakao": true, "name": "혜정", "text": "다들 굿밤~" },

  // 🍲 새벽 귀가 루틴
  { "kakao": true, "name": "유종", "text": "나 배고파서 뭐 먹고 잘라고" },
  { "kakao": true, "name": "혜정", "text": "ㅋㅋㅋㅋㅋㅋ 뭐먹" },
  { "kakao": true, "name": "유종", "text": "나 콩나물찌개 끓였어" },
  { "kakao": true, "name": "혜정", "text": "홀로 해장 야무지다" },
  { "kakao": true, "name": "유종", "text": "아이 그럼 ㅋㅋㅋㅋ" }, 
  // ☀️ 아침 첫 인사
  { "kakao": true, "name": "유종", "text": "@주녕 @김혜정 @허남휘 신림팟 살아있음? ㅋㅋㅋㅋ" },
  { "kakao": true, "name": "남휘", "text": "ㅎㅎ" },
  { "kakao": true, "name": "준영", "text": "ㅎㅎㅎ" },
  { "kakao": true, "name": "혜정", "text": "^^" },
  { "kakao": true, "name": "채은", "text": "다 소환되는 거 개웃기네" },
  { "kakao": true, "name": "남휘", "text": "스윗해 유종이" },

  // 🪥 칫솔사건
  { "kakao": true, "name": "남휘", "text": "아 칫솔 놓고온 것 같아" },
  { "kakao": true, "name": "혜정", "text": "보내줘... 고이 저세상으로..." },
  { "kakao": true, "name": "채은", "text": "주녕아 그거 장패드 닦을 때 써" },
  { "kakao": true, "name": "도연", "text": "남휘 입에 들어갔다 나온 거라 좀..." },

  // 💸 정산 파트
  { "kakao": true, "name": "유종", "text": "금별맥주: 68,700 / 신사리포차: 134,500 / 노래방: 155,000" },
  { "kakao": true, "name": "유종", "text": "혜정 준영 유종 채은: 17,100 + 19,200 + 19,300 = 55,600" },
  { "kakao": true, "name": "유종", "text": "도연 남휘 지원: 38,500 / 도영: 19,300" },
  { "kakao": true, "name": "유종", "text": "신한 110443449290 or 카카오페이" },
  { "kakao": true, "name": "채은", "text": "돈보냄" },
  { "kakao": true, "name": "도영", "text": "돈 보냈습니다~" },
  { "kakao": true, "name": "혜정", "text": "나도 보냄~" },

  // 🍲 해장국 & 뒷얘기
  { "kakao": true, "name": "유종", "text": "혜정이가 꼭 가야한다던 그 뼈해장국은 맛있었어?" },
  { "kakao": true, "name": "혜정", "text": "옹~ 갠차낫어ㅋㅋ" },

  // 🐢 꼬부기 밈
  { "kakao": true, "name": "남휘", "text": "힘든 여정이었다... 이제 집 옴 (사진)" },
  { "kakao": true, "name": "채은", "text": "야 바꾸자. 쟤가 더쎄" },
  { "kakao": true, "name": "남휘", "text": "미안. 그냥 꼬부기 아니라 소방대거든~" },

  // 🧾 나머지 후일담
  { "kakao": true, "name": "채은", "text": "여기 온 뒤로 나 웃음이 많아졌어" },
  { "kakao": true, "name": "혜정", "text": "ㅋㅋㅋㅋㅋㅋㅋㅋㅋ" },
  { "kakao": true, "name": "도연", "text": "이모티콘" },

  // 🎥 밈/링크 공유
  { "kakao": true, "name": "혜정", "text": "https://youtu.be/cr8JR-uWKz8?feature=shared 다들 이거 봐줘" },
  { "kakao": true, "name": "유종", "text": "ㅋㅋㅋㅋㅋ" },

  // 🍲 꼼장어 갈래?
  { "kakao": true, "name": "유종", "text": "혜정아 여기 가봄? https://youtube.com/shorts/LzNcp07MMoM" },
  { "kakao": true, "name": "혜정", "text": "저기가 어딘데ㅋㅋㅋㅋ 꼼장어 먹고싶니?" },

  // 🧾 최종 정산
  { "kakao": true, "name": "준영", "text": "70700원 / 7명 만원씩 보내주셈~" },
  { "kakao": true, "name": "혜정", "text": "입완" },
  { "kakao": true, "name": "채은", "text": "보냄" },
  { "kakao": true, "name": "유종", "text": "보낼게~" },
  { "kakao": true, "name": "도영", "text": "돈 보냈습니다~" },
// ➡️ 영화관 앞
{ "image": "images/bg22.png", "talk": true, "name": "채은", "text": "(영화관 앞. 이제 각자 집으로 가야 한다.)" },	
{ "kakao": true, "name": "유종", "text": "조심히 들어가세요~~", "direction": "left" },
{ "kakao": true, "name": "유종", "text": "도착하면 말해주세요", "direction": "left" },

{ "talk": true, "name": "채은", "text": "(아쉬운 마음에 괜히 가방끈을 만지작거렸다.)" },
{ "talk": true, "name": "채은", "text": "넵ㅋㅋ (축구 얘기 시작)" },

{ "talk": true, "name": "채은", "text": "(발걸음은 집을 향하는데, 마음은 자꾸 뒤를 돌아봤다.)" },
{ "talk": true, "name": "채은", "text": "(다음엔... 진짜 단둘이 만나고 싶어.)" },

  { "kakao": true, "name": "채은", "text": "모드리치 우는 중ㅠㅠ", "direction": "right" },
  { "kakao": true, "name": "유종", "text": "가서 위로해줘요ㅠ", "direction": "left" },

  { "talk": true, "name": "채은", "text": "(상상 속에서라면 얼마든지 괜찮지.)" },

  { "kakao": true, "name": "유종", "text": "누나 먼저 가면 서운해서 울거에요ㅠ", "direction": "left" },
  { "kakao": true, "name": "채은", "text": "그럼 안 가죠 ㅋㅋ", "direction": "right" },

  { "kakao": true, "name": "유종", "text": "의리파!!", "direction": "left" },

  { "kakao": true, "name": "채은", "text": "내일 혜화 공연 기대중~", "direction": "right" },
  { "kakao": true, "name": "유종", "text": "혼자 보러 가요? 치사하게…", "direction": "left" },
  { "kakao": true, "name": "채은", "text": "유종씨 알기 전에 예매한거라구요ㅠ", "direction": "right" },

  { "kakao": true, "name": "유종", "text": "담엔 같이 봐요 ㅋㅋ 맛있는 것도 먹고!", "direction": "left" },
  { "talk": true, "name": "채은", "text": "(담에는… 진짜 같이 가고 싶다.)" },

  { "kakao": true, "name": "채은", "text": "혜화 부추곱창 추천!", "direction": "right" },
  { "kakao": true, "name": "유종", "text": "내일 여기서 먹고 있을게요 ㅋㅋ", "direction": "left" },

  { "kakao": true, "name": "유종", "text": "눈화장 안한게 더 잘 어울리세요ㅎㅎ", "direction": "left" },
  { "talk": true, "name": "채은", "text": "(진심으로 들린다. 괜히 웃음이 난다.)" },
  { "kakao": true, "name": "유종", "text": "27일 카페에서 메이크업 해봐요!", "direction": "left" },
  { "kakao": true, "name": "유종", "text": "좋은 꿈 꾸세요~", "direction": "left" },
  { "kakao": true, "name": "채은", "text": "넹 잘자요!!", "direction": "right" }
]