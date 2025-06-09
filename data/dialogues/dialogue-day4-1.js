export const dialogueDay4Part1 =[
{"system": true,
    "text": "[2024년 6월 29일 토요일]"},
  { "kakao": true, "name": "채은","text": "오 벌써 9시", room: "yujong"},
  { "kakao": true, "name": "채은","text": "거기는 8시져", room: "yujong"},
  { "kakao": true, "name": "채은","text": "ㅋㅋㅋㅋㅋㅋ", room: "yujong"},
  { "kakao": true, "name": "유종","text": "맞아요 ㅋㅋㅋㅋㅋ", room: "yujong"},
  { "kakao": true, "name": "유종","text": "푹 쉬셨어요?", room: "yujong"},
  { "kakao": true, "name": "채은","text": "넹ㅋㅋㅋ", room: "yujong"},
  { "kakao": true, "name": "채은","text": "여긴 비가 너무 마니와요ㅠㅠ", room: "yujong"},
  { "kakao": true, "name": "채은","text": "거기는 맑죠", room: "yujong"},
  { "kakao": true, "name": "유종","text": "맑은데 더워요 ㅋㅋㅋㅋㅋ", room: "yujong"},
  { "kakao": true, "name": "유종","text": "죽을거같아요 ㅋㅋㅋ", room: "yujong"},
  {
    "choice": [
      {
      "text": "젤리는 잘 가져갔죠..?",
      "branch": [
        { "kakao": true, "name": "채은", "text": "젤리는 잘 가져갔죠..", room: "yujong"},
        { "kakao": true, "name": "채은", "text": "녹으면 안되는데", room: "yujong"},
        { "kakao": true, "name": "유종", "text": "다행히도 잘 온 거 같아요 ㅋㅋㅋㅋ", room: "yujong"}
      ]
   },
    {
      "text": "호텔 좋아요?",
      "branch": [
        { "kakao": true, "name": "채은", "text": "이제 호텔이에요? 좋겠당", room: "yujong"},
        { "kakao": true, "name": "유종", "text": "호텔 가는 중이에요! 체크인하고 저녁 먹으러~", room: "yujong"}
      ]
   },
    {
      "text": "오늘 저녁 뭐 드셨어요?",
      "branch": [
        { "kakao": true, "name": "채은", "text": "저녁 드셨어요?", room: "yujong"},
        { "kakao": true, "name": "유종", "text": "로컬 푸드 먹었어요 ㅋㅋㅋ 사장님이랑!", room: "yujong"}
      ]
    }
  ]
},
  // 이후 공통 분기
  { "talk": true, "name": "채은", "text": "(이야기 나누는 것만으로도 마음이 조금은 가까워진 기분.)"},
  { "kakao": true, "name": "유종","text": "호텔 도착! 어후", room: "yujong"},
  { "kakao": true, "name": "채은","text": "고생했어요~ 빨리 씻구 쉬세요", room: "yujong"},
  { "kakao": true, "name": "유종","text": "넵! 땀을 땀을...", room: "yujong"},
  { "kakao": true, "name": "채은","text": "회색티가 검은티 됐겠네요 ㅋㅋ", room: "yujong"},
  { "kakao": true, "name": "유종","text": "한쪽만 검은티에요 투톤 개이득", room: "yujong"},
  { "talk": true, "name": "채은", "text": "(툭툭 웃음이 나왔다. 이런 유종씨, 나만 아는 것 같아서 더 좋았다.)"},
  
// 3. 🖼 이미지 & 배경 삽입 포인트 정리
// 시점	삽입 내용	이미지 종류
// 유종 "지금 택시타고 호텔 가는중!"	택시 창밖 싱가포르 야경	배경 이미지
// 유종 "이런 로컬 푸드들 먹었어요"	싱가포르 로컬 음식 사진	오버레이 이미지
// 유종 "회색티가 검은티가 됐군요"	유종의 젖은 티셔츠 실루엣 (익살스럽게)	컷신 또는 CG
//오전 12:30	채은이 선크림 사진 보냄	images/sunscreen.png
//오전 2:57	채은이 그릭요거트 먹는 장면	images/yogurt.png
//오전 3:41	안경을 화장실에서 찾은 장면	images/found_glasses.png
//오전 6:05~6:20	유튜브 링크/짬뽕집 대화	images/youtube_thumb.png, images/jjamppong.png
//오전 6:21	네이버 지도 링크 첨부 장면	images/map_preview.png

  { "kakao": true, "name": "채은","text": "살마니쪘어요 깜짝놀라는숫자에충격", room: "yujong"},
  { "kakao": true, "name": "유종","text": "채은님은 좀 찌셔도 됩니다 ㅋㅋㅋㅋㅋㅋ", room: "yujong"},

  {
    "choice": [
      {
      "text": "1. 그럼 유종씨 먹고있는 치킨 다리 뽀려갈게요",
      "branch": [
        { "kakao": true, "name": "채은", "text": "그럼 누나 다리 뽀려갈래요?", "room": "yujong" },
        { "kakao": true, "name": "채은", "text": "ㅋㅋㅋㅋㅋ 그럼 저는 누나 다리 뽀려갈게요", "room": "yujong" },
        { "kakao": true, "name": "채은", "text": "긴 거 있잖아요 짧은 건 어따 쓰시게요?", "room": "yujong" },
        { "kakao": true, "name": "채은", "text": "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 하나씩 뽀려서 완성 시켜드릴게요", "room": "yujong" },
        { "kakao": true, "name": "채은", "text": "다리달려잇을때", "room": "yujong" },
        { "kakao": true, "name": "채은", "text": "도망가야지", "room": "yujong" },
        { "kakao": true, "name": "채은", "text": "이모티콘", "room": "yujong" },
        { "kakao": true, "name": "채은", "text": "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 도망가면 놔드려야죠", "room": "yujong" },
        { "kakao": true, "name": "채은", "text": "허거덩", "room": "yujong" },
        { "kakao": true, "name": "채은", "text": "가는거 안막는편", "room": "yujong" },
        { "kakao": true, "name": "채은", "text": "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ", "room": "yujong" },
        { "kakao": true, "name": "채은", "text": "한번만잡아주세요", "room": "yujong" },
        { "talk": true, "name": "채은", "text": "(어느새 이런 장난이 자연스럽다. 진짜... 썸 맞지?)" }
      ]
    },
    {
      "text": "2. 아니 이건 못 참지… 다이어트 각",
      "branch": [
        { "kakao": true, "name": "채은", "text": "아니 이건 못 참지… 다이어트 각", "room": "yujong" },
        { "kakao": true, "name": "유종", "text": "ㅋㅋㅋㅋㅋㅋ 누나 진짜 귀여우세요", "room": "yujong" },
        { "talk": true, "name": "채은", "text": "(진짜... 이 정도면 설레는 거 맞지. 이건 반칙이지.)" }
      ]
    },
    {
      "text": "3. 진짜? 찌면 실망 안 할 거죠?",
      "branch": [
        { "kakao": true, "name": "채은", "text": "진짜? 찌면 실망 안 할 거죠?", "room": "yujong" },
        { "kakao": true, "name": "유종", "text": "실망은 무슨… 더 귀여워지면 어쩌죠", "room": "yujong" },
        { "talk": true, "name": "채은", "text": "(아… 이 텐션, 안 좋아하려야 안 좋아할 수가 없는데…?)" }
      ]
    }
  ]
},
  { "kakao": true, "name": "유종", "text": "이따 6시부터 10시까지 조식이니깐", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "9시에 먹으러 내려와야겠어요 ㅎㅎ", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "호텔 조식 못참지~~~", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "호텔조식을참으면 병나요", room: "yujong"},
    {
    "talk": true,
    "name": "채은",
    "text": "(혼자 여행 와서도 이렇게 카톡 이어가는 거 보면... 우리 꽤 가까워진 거 맞지?)"
},
  { "kakao": true, "name": "유종", "text": "헐 독일 덴마크를 보고 아침을 먹고 올라와서 자야겠어요ㅋㅋㅋ", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "ㅋㅋㅋㅋㅋㅋㅋ 딱이다;", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "제가 방송 켜드릴게요", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "축구 보실때 말해주세용", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "지금켯어요 ㅋㅋㅋㅋㅋ" },
  { "kakao": true, "name": "유종", "text": "얼른 주무세요~ 축구 보여주셔서 감사합니다 ㅎㅎ", room: "yujong"},
//조식 얘기	호텔 조식 사진 or 식당 내 풍경
//독일-덴마크	TV 중계 배경 or 밤 거실 풍경
//“같이 마술 보러 갈 날만 기다린다”	회상 느낌의 마술 장면 삽입
//“배달가도 취소할 거냐고”	장난스러운 이모티콘 or 귀여운 채은 일러스트
//“얼굴 빨개짐”	채은 blush 효과 일러스트 컷인 가능
//위치	내용	이미지 제안
//대화 시작 직후	밤 시간대, 카톡 주고받는 장면	📱카카오톡 UI 배경
//조식 얘기할 때	호텔 조식 일러스트 or 여행지 전경	🍳 아침 식사 일러스트
//축구 얘기 시작	텔레비전에서 축구 중계 화면	📺 경기 화면 or 카페 내부
//선택지 이후 분기	전반전/끝까지 시청 시각화	💬 채은 방 불 꺼진 채 핸드폰 화면 빛나는 장면
  { "kakao": true, "name": "유종", "text": "전 이제 일어났어요", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "난 최강야구 보러왔다!", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "안타", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "정성훈~~", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "안돼 스포 안돼 ㅠㅠ", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "응원가불럿어", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "누가 이사람좀 말려줘요", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "....", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "ㅋㅋㅋㄴㅋㅋㅋㅋ", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 말려달라고 부탁했는데 과연", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "헤헤", room: "yujong"},
  { "talk": true, "name": "채은", "text": "(장난치면서 웃는 내 자신이 너무 들떠 있는 거 같기도.)", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "으쌰라으쌰", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "ㅋㅋㅋㅋㅋㅋㅋ 재밌게 보시고 맛는거 드세요", room: "yujong"},

  {
    "choice": [
      {
      "text": "1. 안타! 정성훈~ (야구 응원가로 놀리기)",
      "branch": [
        { "kakao": true, "name": "채은", "text": "안타", "room": "yujong" },
        { "kakao": true, "name": "채은", "text": "정성훈~~", "room": "yujong" },
        { "kakao": true, "name": "유종", "text": "안돼 스포 안돼 ㅠㅠ", "room": "yujong" },
        { "kakao": true, "name": "채은", "text": "응원가불럿어", "room": "yujong" },
        { "kakao": true, "name": "유종", "text": "누가 이사람좀 말려줘요", "room": "yujong" },
        { "kakao": true, "name": "유종", "text": "....", "room": "yujong" },
        { "kakao": true, "name": "채은", "text": "ㅋㅋㅋㄴㅋㅋㅋㅋ", "room": "yujong" },
        { "kakao": true, "name": "유종", "text": "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 말려달라고 부탁했는데 과연", "room": "yujong" },
        { "kakao": true, "name": "채은", "text": "헤헤", "room": "yujong" },
        { "talk": true, "name": "채은", "text": "(장난치면서 웃는 내 자신이 너무 들떠 있는 거 같기도.)"}
      ]
    },
    {
      "text": "2. 다음에 같이 야구 보러 가요 (은근슬쩍 제안)",
      "branch": [
        { "kakao": true, "name": "채은", "text": "다음에 같이 야구 보러 가요", "room": "yujong" },
        { "kakao": true, "name": "유종", "text": "오 진짜요? 약속하신 거예요 ㅋㅋ", "room": "yujong" },
        { "kakao": true, "name": "채은", "text": "그땐 제가 스포 안 할게요 진짜루", "room": "yujong" },
        { "kakao": true, "name": "유종", "text": "믿어도 되나~?", "room": "yujong" },
        { "talk": true, "name": "채은", "text": "(이런 식으로 자연스럽게 약속 생긴 거… 너무 좋다)",}
      ]
    }
  ]
},
//"정성훈~~" 이후 장면: 야구장 일러스트 배경

//"이유죵~안타~" 시점: 채은 일러스트 말풍선 확대 + 유종 카톡 미소 이모티콘

//"유종이는 내취향" 대사 이후: 화면 살짝 핑크빛 연출 or 하트 배경 오버레이
//
  { "kakao": true, "name": "채은", "text": "집가뉸즁", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "전 아직 동료들이랑 바에서 얘기중이에요", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "너없어서 황희찬이랑 포토그레이찍었다..", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "황희찬 out", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "왜 원본은 안줘요?", room: "yujong"},
  { "talk": true, "name": "채은", "text": "(괜히 질투한 거야...? 설마...)"},
  { "kakao": true, "name": "유종", "text": "머리 자르신거 맞죠???", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "넹", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "얼마나 잘랐어용", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "9cm?", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "많이 잘랐네요?", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "그리거 레이어드컷 한거야", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "누구한테 잘보일라고 그리 단장을 하셨어요", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "허거덩", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "나는 싱가폴에 있는데...?", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "맞다 그래서 오늘 별루 안 이쁘게하고갓움", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "엥 저거보다 더 이쁘게 나갈 수 있어요?", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "당욘하지", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "내가 셔츠를 거의안입는데 귀찮아서 입구갓어", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "셔츠 잘 어울리는 사람이 진짜 좋죠", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "ㅋㅋㅋㅋ나는 안어울려", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "너는잘어울려", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "그럼 전 누나가 안좋은가봐요 ㅠㅠ 아쉽", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "셔츠잘어울리는사람이될게", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 다 잘 어울려요", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "고마엉 ^,^", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "밖이야?", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "아뇽 들어와서 씻고 누워서 베개 끌어안고 뒹굴뒹굴중", room: "yujong"},
  { "talk": true, "name": "채은", "text": "(아... 상상됐다. 귀엽다.)" },
//황희찬 포토그레이: 포토부스 배경 or 핸드폰 속 인스타 게시물 느낌

//단장하셨어요~: 거울 앞 헤어스타일 손질 일러스트

//셔츠 얘기: 캐릭터 셔츠 착장 일러스트 삽입 포인트

//뒹굴뒹굴중: 침대 위 베개 껴안은 유종 미소 컷 삽입




//--------------- 2024년 7월 1일 월요일 ---------------


  { "kakao": true, "name": "채은","text": "어 나 다음역에내려야한다", room: "yujong"},
  { "kakao": true, "name": "유종","text": "얼른 내려요!!", room: "yujong"},
  {
    talk: true, name: "채은",
    text: "(지하철 내리면서 핸드폰을 꺼낸다. 좀전 유종이 말한 '덕배 차단'이 머릿속에 맴돈다. 웃기고 귀엽다.)"},
  { "kakao": true, "name": "채은","text": "정말밥브다바바", room: "yujong"},
  { "kakao": true, "name": "유종","text": "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ", room: "yujong"},
  { "kakao": true, "name": "유종","text": "갈아타는거에요?", room: "yujong"},
  { "kakao": true, "name": "채은","text": "웅", room: "yujong"},
  { "kakao": true, "name": "채은","text": "아오늘비오는줄알구", room: "yujong"},
  { "kakao": true, "name": "채은","text": "우산가져왓는데안와", room: "yujong"},
  { "kakao": true, "name": "채은","text": "ㅠㅠ", room: "yujong"},
//지하철 내리는 장면	image/subway_exit.png
//카카오톡 대화에 쓰일 우산 이모티콘/사진	image/umbrella_icon.png
//채은 핸드폰 들고 서있는 씬 (밤, 비 안 옴)	image/cheun_station.png

  { "kakao": true, "name": "유종", "text": "누나 졸리니깐 얼른 자요", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "저는 유튜브 보다 자려구요", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "너두 빨랑자!", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 가능하면요... 방금 자다 일어나서 ㅋㅋㅋㅋㅋ", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "ㅋㅋㅋㅋㅋㅋㅋ 그러네", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "암튼 그만 괴롭힐게요 ㅋㅋㅋ 얼른 주무세요", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "유종이가 과연 자구잇을까", room: "yujong"},
//--------------- 2024년 7월 2일 화요일 ---------------
{ "kakao": true, "name": "유종", "text": "자고 있었지요~ 누나가 안잤군요?", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "자다가 더워서 깻지요", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "선크림발라야댜!", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "남자는! 바르지 않는다!", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "햇빛에 화상입으면어케ㅠ", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 유감이죠... ㅠㅠ 약 발라주세요", room: "yujong"},
  
  { "kakao": true, "name": "유종", "text": "다음주에 일정 어떻게 되세요??", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "담주는 10일에 뮤지컬보구 아직 머 없다!", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "10일빼고~~ 확인!", room: "yujong"},

  { "kakao": true, "name": "유종", "text": "저 다음주 화요일 회의여서 월요일 시간 비는데 식사하실래요? 일요일은 오자마자 뻗을 거 같아요 ㅋㅋㅋㅋㅋㅋㅋ", room: "yujong"},
  {
    "choice": [
      {
          "text": "좋아! 월요일 저녁 콜!",
          "branch": [
            { "kakao": true, "name": "채은", "text": "죠아", room: "yujong"},
            { "talk": true, "name": "채은", "text": "(이걸 드디어 나한테 먼저 제안하네... 흐흐흐)" }
          ]
       },
        {
          "text": "다음에 보자! 아직 몰라",
          "branch": [
            { "kakao": true, "name": "채은", "text": "일단 그날 일정 더 봐야해!", room: "yujong"},
            { "talk": true, "name": "채은", "text": "(사실 너무 좋지만... 좀 밀당해야겠다.)" }
          ]
        }
      ]
 },

  { "kakao": true, "name": "유종", "text": "전 퇴근하고 저녁 먹으러 가는중~", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "뮤지컬 재밌게 보고 오세요~~~~", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "너두 밥마싯게머겅", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "다 먹고 전 숙소 가는중이에요~", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "집 도착했어요?", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "이제 버스타!", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "11시에 간대매욬ㅋㅋㅋㅋㅋ", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "전 선물들 사고 이제 숙소 도착", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "오 완전 산타클로스", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "채은님것만 안샀어요...", room: "yujong"},
  { "talk": true, "name": "채은", "text": "(뭐야 나만 빼고? 진심? 장난?)", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "오늘은 사진 안찍었어요? ㅋㅋㅋㅋㅋ", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "오늘은,, 귀찮아서 쌩얼루갓어", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "그럼 더 찍어야됬는데?!" },
  { "kakao": true, "name": "채은", "text": "나는 버스타고 가는중", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "사람 많아요?", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "아닝.. 한두명잇는거가태", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "나한테 술냄새 나는 거 같아", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "ㅋㅋㅋㅋㅋㅋㅋㅋ", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "술 먹었으니깐 나죵 ㅋㅋㅋㅋ", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "아무도 없으면 심심하면 전화하라고 할라 했는데 안되겠다", room: "yujong"},
  { "talk": true, "name": "채은", "text": "(나한테 전화하고 싶었던 거 맞지…? 흐흐, 이 대화 뭔가 설렌다.)", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "오늘은 마니 바빳어?", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "네 ㅠㅠ 계속 회의만 하는거라", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "핸드폰을 보기가 힘들었어요 ㅠㅠ", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "가서 씻고 연락해요~", room: "yujong"},
  {
    "choice": [
      {
          "text": "고생했어요! 씻고 푹 쉬어요 :)",
          "branch": [
            { "talk": true, "name": "채은", "text": "(회의에 치였던 하루… 유종이도 힘들었겠지.)", room: "yujong"},
            { "kakao": true, "name": "채은", "text": "헉 고생 많았어요 ㅠㅠ 푹 쉬어요~" }
          ]
       },
        {
          "text": "씻고 연락한다더니, 안 해주면 삐질거에요~",
          "branch": [
            { "talk": true, "name": "채은", "text": "(장난처럼 말해봤지만… 진짜 안 오면 서운할 것 같아.)", room: "yujong"},
            { "kakao": true, "name": "채은", "text": "그럼 씻고 꼭 연락줘야 해요! 안 해주면 삐질지도 몰라요~" }
          ]
        }
      ]
 },
  { "kakao": true, "name": "유종", "text": "월요일에 영화볼래요?", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "아 그 핸섬가이즈 보러가자", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "샵검색: #핸섬가이즈", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "쇼츠에 자주뜨는데 재밋어보이더라고", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "어디서 만나지", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "홍대?", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "죠아여", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "홍대에서 영화보고~ 밥 먹고~", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "왜 뭔가 더 해야될 거 같지", room: "yujong"},
  { "talk": true, "name": "채은", "text": "(정말 데이트 같잖아... 나 너무 기대하는 거야?)", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "그럼 진행시키겠습니다", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "네네 진행시켜주세요" },
  { "kakao": true, "name": "채은", "text": "이제 마니놀자^,^", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "저 이제 다른 애들이랑 못놀아요?", room: "yujong"},
  { "talk": true, "name": "채은", "text": "(아니, 갑자기 왜 이런 말 해? 농담인데도 괜히 심장 쿵 했어.)", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "누나가 저보다 더 바쁠거에요", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "샤실 ㅋㅋㅋㅋ", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "저는 다음주 화요일에 남은 한 해 일정이 나올 예정이라 나오면 정말 어캐될지 몰라요 ㅋㅋㅋㅋ", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "돈 마니벌어오렴..", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "축구보면서 치킨 먹어야되니깐 돈 벌어올게요", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "배달음식", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "마음껏시켜먹우렴", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "오잉 저 자고 가는거에요?", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "허거덩", room: "yujong"},
  {
    "choice": [
      {
          "text": "말리진 않을게ㅎㅎ",
          "branch": [
            { "kakao": true, "name": "채은", "text": "자고간다고해더 말리진 않을게..", room: "yujong"},
            { "talk": true, "name": "채은", "text": "(어... 이거 진짜 데려오는 플래그인가?)" }
          ]
       },
        {
          "text": "그건 좀 빠르지 않나?ㅎㅎ",
          "branch": [
            { "kakao": true, "name": "채은", "text": "그건 너무 이르지않을까", room: "yujong"},
            { "talk": true, "name": "채은", "text": "(어쩐지 얼굴이 뜨거워진다.)" }
          ]
        }
      ]
 },
  { "kakao": true, "name": "유종", "text": "잡아도 가겠습니다.", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "누나는 나쁜사람이니깐..", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "더더욱 가야겠어요", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "내 쌩얼을", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "마음대로볼순없어서", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "보내준다..", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "이번 여행 때 원없이 볼건데", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "....", room: "yujong"},
  { "talk": true, "name": "채은", "text": "(이런 말... 아무렇지 않게 하지 말라구ㅠㅠ)", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "나는 유종이 수염 마니 볼게", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "ㅋㅋㅋㅋㅋㅋㅋㅋㅋ 면도기를 달고 살게요 ㅋㅋㅋㅋㅋ", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "안경도 써줘요", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "나 근데 도수 별로 안 높아서 눈 안 작아져 ㅋㅋㅋㅋㅋㅋㅋㅋㅋ", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "에잇 뭐가 또 있지...", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "앞머리까고 다닐게", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "오 그거 해줘요 헤어 롤? 돌돌", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "ㅋㅋㅋㅋㅋㅋㅋ웅 누군가 가지고 올 듯", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "나 근데 눈썹 찐해서 안 그리고 다녀서 친구들이 앞머리 올리면 놀래", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "샵검색: #여자 헤어롤", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "이정도로 올려줘요", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "오 너도 해 같이 하자 할 거면..", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 누굴 위한 머리인가", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "병뚜껑 7개 쓴다", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "둘이 축구보면서 해요 ㅋㅋㅋㅋㅋㅋㅋㅋ", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "그럼 너 보느라 축구를 못 볼 거 같은데;;", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "ㅋㅋㅋㅋㅋ 누나 저 머리하면 저도 누나만 보고 있을 거 같은데요 ㅋㅋㅋㅋ", room: "yujong"},
  { "talk": true, "name": "채은", "text": "(이 사람, 진짜 계속 설레게 한다.)", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "마니 웃고 좋네..", room: "yujong"},
  { "kakao": true, "name": "채은", "text": "나는 이제 들응엉", room: "yujong"},
  { "kakao": true, "name": "유종", "text": "죄송해요", room: "yujong"},
  {
    "choice": [
      {
          "text": "좋은 꿈 꾸삼~",
          "branch": [
            { "kakao": true, "name": "채은", "text": "좋은 꿈 꾸삼~", room: "yujong"},
            { "kakao": true, "name": "유종", "text": "이모티콘" }
          ]
       },
        {
          "text": "담배피러가지말구 그냥 자라..",
          "branch": [
            { "kakao": true, "name": "채은", "text": "담배피러가지말구 그냥 자라..", room: "yujong"},
            { "kakao": true, "name": "유종", "text": "앗 넵..", room: "yujong"},
            { "kakao": true, "name": "채은", "text": "너무 시간이 늦어서 위험해.." }
          ]
        }
      ]
 },
  { "talk": true, "name": "채은", "text": "(오늘 하루도 결국 유종 생각으로 마무리된다.)" }
]
