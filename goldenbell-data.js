/**
 * goldenbell-data.js
 * 초등 영어 지도서 1~12단원 단원별 100문항 (총 1,200문항 초대형 문제 은행) 및 0-중복 스마트 출제 엔진
 * 2026 Eui Elementary School - Waurimal Golden Bell
 */
(function(window) {
    'use strict';

    // ────────────────────────────────────────────────────────
    // 1. 1~12단원 단원별 100문항 마스터 데이터베이스 (총 1,200문항)
    // ────────────────────────────────────────────────────────
    const GOLDENBELL_1200_DATABASE = {
  "6G_L01": {
    "name": "1단원: 서수와 학년 · 동아리 (What grade are you in?)",
    "grade": 6,
    "theme": "Ordinal Numbers & School Clubs",
    "totalQuestions": 100,
    "questions": [
      {
        "id": 1,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Hello! What grade are you in? B: I am in the first grade.",
        "question": "[듣기 · 1단원] B의 학년으로 알맞은 것은?",
        "options": [
          "1학년",
          "2학년",
          "3학년",
          "4학년"
        ],
        "correctIndex": 0,
        "correctAnswer": "1학년",
        "explanation": "'first grade'는 1학년입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Are you in the second grade? B: Yes, I am in the second grade.",
        "question": "[듣기 · 1단원] B의 학년으로 알맞은 것은?",
        "options": [
          "2학년",
          "3학년",
          "4학년",
          "5학년"
        ],
        "correctIndex": 0,
        "correctAnswer": "2학년",
        "explanation": "'second grade'는 2학년입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What grade are you in this year? B: I am in the third grade.",
        "question": "[듣기 · 1단원] B의 학년으로 알맞은 것은?",
        "options": [
          "3학년",
          "1학년",
          "5학년",
          "6학년"
        ],
        "correctIndex": 0,
        "correctAnswer": "3학년",
        "explanation": "'third grade'는 3학년입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Welcome to our school! What grade are you in? B: I am in the fourth grade.",
        "question": "[듣기 · 1단원] B의 학년으로 알맞은 것은?",
        "options": [
          "4학년",
          "2학년",
          "3학년",
          "6학년"
        ],
        "correctIndex": 0,
        "correctAnswer": "4학년",
        "explanation": "'fourth grade'는 4학년입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Are you in the fifth grade? B: Yes, I am in the fifth grade.",
        "question": "[듣기 · 1단원] B의 학년으로 알맞은 것은?",
        "options": [
          "5학년",
          "4학년",
          "6학년",
          "1학년"
        ],
        "correctIndex": 0,
        "correctAnswer": "5학년",
        "explanation": "'fifth grade'는 5학년입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: We are the oldest students! What grade are you in? B: I am in the sixth grade.",
        "question": "[듣기 · 1단원] B의 학년으로 알맞은 것은?",
        "options": [
          "6학년",
          "5학년",
          "4학년",
          "3학년"
        ],
        "correctIndex": 0,
        "correctAnswer": "6학년",
        "explanation": "'sixth grade'는 6학년입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What club do you want to join? B: I want to join the soccer club.",
        "question": "[듣기 · 1단원] B가 가입하고 싶어 하는 동아리는?",
        "options": [
          "축구 동아리",
          "야구 동아리",
          "농구 동아리",
          "배구 동아리"
        ],
        "correctIndex": 0,
        "correctAnswer": "축구 동아리",
        "explanation": "'soccer club'은 축구 동아리입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Do you like dancing? B: Yes, I want to join the dance club.",
        "question": "[듣기 · 1단원] B가 가입하고 싶어 하는 동아리는?",
        "options": [
          "댄스 동아리",
          "음악 동아리",
          "연극 동아리",
          "미술 동아리"
        ],
        "correctIndex": 0,
        "correctAnswer": "댄스 동아리",
        "explanation": "'dance club'은 댄스 동아리입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: I love making robots. B: Me too! Let's join the robot club.",
        "question": "[듣기 · 1단원] 두 사람이 함께 가입하려는 동아리는?",
        "options": [
          "로봇 동아리",
          "컴퓨터 동아리",
          "과학 동아리",
          "수학 동아리"
        ],
        "correctIndex": 0,
        "correctAnswer": "로봇 동아리",
        "explanation": "'robot club'은 로봇 동아리입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What do you do after school? B: I go to the art club to paint.",
        "question": "[듣기 · 1단원] B가 방과 후에 가는 동아리는?",
        "options": [
          "미술 동아리",
          "요리 동아리",
          "만화 동아리",
          "사진 동아리"
        ],
        "correctIndex": 0,
        "correctAnswer": "미술 동아리",
        "explanation": "'art club'은 미술 동아리입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Science is my favorite subject. B: Then you should join the science club.",
        "question": "[듣기 · 1단원] 추천하고 있는 동아리는?",
        "options": [
          "과학 동아리",
          "로봇 동아리",
          "환경 동아리",
          "발명 동아리"
        ],
        "correctIndex": 0,
        "correctAnswer": "과학 동아리",
        "explanation": "'science club'은 과학 동아리입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Can you play the guitar? B: Yes, I want to join the music club.",
        "question": "[듣기 · 1단원] B가 들어가고 싶어 하는 동아리는?",
        "options": [
          "음악 동아리",
          "댄스 동아리",
          "밴드 동아리",
          "합창 동아리"
        ],
        "correctIndex": 0,
        "correctAnswer": "음악 동아리",
        "explanation": "'music club'은 음악 동아리입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: I enjoy reading books every day. B: Let's join the reading club together.",
        "question": "[듣기 · 1단원] 함께 가입하려는 동아리는?",
        "options": [
          "독서 동아리",
          "글쓰기 동아리",
          "신문 동아리",
          "영어 동아리"
        ],
        "correctIndex": 0,
        "correctAnswer": "독서 동아리",
        "explanation": "'reading club'은 독서 동아리입니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: I want to bake cookies and cakes. B: You will love the cooking club.",
        "question": "[듣기 · 1단원] 대화에서 언급된 동아리는?",
        "options": [
          "요리 동아리",
          "제빵 동아리",
          "다도 동아리",
          "원예 동아리"
        ],
        "correctIndex": 0,
        "correctAnswer": "요리 동아리",
        "explanation": "'cooking club'은 요리 동아리입니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Where is the computer room? B: It is on the first floor.",
        "question": "[듣기 · 1단원] 컴퓨터실의 위치는 몇 층인가요?",
        "options": [
          "1층",
          "2층",
          "3층",
          "4층"
        ],
        "correctIndex": 0,
        "correctAnswer": "1층",
        "explanation": "'first floor'는 1층입니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the library? B: It is on the second floor.",
        "question": "[듣기 · 1단원] 도서관의 위치는 몇 층인가요?",
        "options": [
          "2층",
          "1층",
          "3층",
          "5층"
        ],
        "correctIndex": 0,
        "correctAnswer": "2층",
        "explanation": "'second floor'는 2층입니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Where is our science lab? B: Go to the third floor, please.",
        "question": "[듣기 · 1단원] 과학실의 위치는 몇 층인가요?",
        "options": [
          "3층",
          "2층",
          "4층",
          "5층"
        ],
        "correctIndex": 0,
        "correctAnswer": "3층",
        "explanation": "'third floor'는 3층입니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Where is the sixth-grade classroom? B: It is on the fourth floor.",
        "question": "[듣기 · 1단원] 6학년 교실의 위치는 몇 층인가요?",
        "options": [
          "4층",
          "3층",
          "5층",
          "2층"
        ],
        "correctIndex": 0,
        "correctAnswer": "4층",
        "explanation": "'fourth floor'는 4층입니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Where is the rooftop garden? B: Take the elevator to the fifth floor.",
        "question": "[듣기 · 1단원] 옥상 정원의 위치는 몇 층인가요?",
        "options": [
          "5층",
          "4층",
          "3층",
          "1층"
        ],
        "correctIndex": 0,
        "correctAnswer": "5층",
        "explanation": "'fifth floor'는 5층입니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: How do you spell your name, Kevin? B: It is K-E-V-I-N.",
        "question": "[듣기 · 1단원] 대화에서 언급된 이름의 철자는?",
        "options": [
          "K-E-V-I-N",
          "K-E-L-V-I-N",
          "K-E-V-E-N",
          "K-A-V-I-N"
        ],
        "correctIndex": 0,
        "correctAnswer": "K-E-V-I-N",
        "explanation": "Kevin의 철자는 K-E-V-I-N입니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Can you spell your name, Sarah? B: Sure, S-A-R-A-H.",
        "question": "[듣기 · 1단원] 대화에서 언급된 이름의 철자는?",
        "options": [
          "S-A-R-A-H",
          "S-A-R-A",
          "S-E-R-A-H",
          "S-A-H-R-A"
        ],
        "correctIndex": 0,
        "correctAnswer": "S-A-R-A-H",
        "explanation": "Sarah의 철자는 S-A-R-A-H입니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What is your brother's name? B: His name is David. D-A-V-I-D.",
        "question": "[듣기 · 1단원] 남동생의 이름 철자로 알맞은 것은?",
        "options": [
          "D-A-V-I-D",
          "D-A-V-E-D",
          "D-E-V-I-D",
          "D-A-V-Y-D"
        ],
        "correctIndex": 0,
        "correctAnswer": "D-A-V-I-D",
        "explanation": "David의 철자는 D-A-V-I-D입니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: How do you spell Emma? B: E-M-M-A.",
        "question": "[듣기 · 1단원] 이름 철자로 올바른 것은?",
        "options": [
          "E-M-M-A",
          "E-M-A",
          "E-M-M-Y",
          "E-N-M-A"
        ],
        "correctIndex": 0,
        "correctAnswer": "E-M-M-A",
        "explanation": "Emma의 철자는 E-M-M-A입니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Who won first place in the race? B: Minsoo won first place!",
        "question": "[듣기 · 1단원] 달리기 경기에서 1등을 한 사람은?",
        "options": [
          "Minsoo",
          "Kelly",
          "David",
          "Tom"
        ],
        "correctIndex": 0,
        "correctAnswer": "Minsoo",
        "explanation": "Minsoo가 1등(first place)을 했습니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Did Kelly get second place? B: Yes, she got second place.",
        "question": "[듣기 · 1단원] Kelly가 차지한 등수는?",
        "options": [
          "2등",
          "1등",
          "3등",
          "4등"
        ],
        "correctIndex": 0,
        "correctAnswer": "2등",
        "explanation": "'second place'는 2등입니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Who is the third person in line? B: Jisu is the third person.",
        "question": "[듣기 · 1단원] 줄에서 세 번째 서 있는 사람은?",
        "options": [
          "Jisu",
          "Minsoo",
          "Hana",
          "Kevin"
        ],
        "correctIndex": 0,
        "correctAnswer": "Jisu",
        "explanation": "Jisu가 세 번째(third)입니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: When does the drama club meet? B: We meet every Friday after school.",
        "question": "[듣기 · 1단원] 연극 동아리 모임 요일은?",
        "options": [
          "금요일",
          "월요일",
          "수요일",
          "화요일"
        ],
        "correctIndex": 0,
        "correctAnswer": "금요일",
        "explanation": "'every Friday'는 매주 금요일입니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What club did you join last year? B: I joined the swimming club.",
        "question": "[듣기 · 1단원] 작년에 가입했던 동아리는?",
        "options": [
          "수영 동아리",
          "축구 동아리",
          "농구 동아리",
          "테니스 동아리"
        ],
        "correctIndex": 0,
        "correctAnswer": "수영 동아리",
        "explanation": "'swimming club'은 수영 동아리입니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Do you like writing stories? B: Yes, I am in the English writing club.",
        "question": "[듣기 · 1단원] B가 속한 동아리는?",
        "options": [
          "영어 작문 동아리",
          "독서 동아리",
          "신문 동아리",
          "토론 동아리"
        ],
        "correctIndex": 0,
        "correctAnswer": "영어 작문 동아리",
        "explanation": "'English writing club'입니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Which grade has the gym today? B: The fifth grade has the gym.",
        "question": "[듣기 · 1단원] 오늘 체육관을 사용하는 학년은?",
        "options": [
          "5학년",
          "6학년",
          "4학년",
          "3학년"
        ],
        "correctIndex": 0,
        "correctAnswer": "5학년",
        "explanation": "'fifth grade'는 5학년입니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Is your sister in the third grade? B: No, she is in the first grade.",
        "question": "[듣기 · 1단원] 여동생의 학년은?",
        "options": [
          "1학년",
          "2학년",
          "3학년",
          "4학년"
        ],
        "correctIndex": 0,
        "correctAnswer": "1학년",
        "explanation": "'she is in the first grade'입니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: How many students joined the band club? B: Twelve students joined.",
        "question": "[듣기 · 1단원] 밴드 동아리에 가입한 학생 수는?",
        "options": [
          "12명",
          "10명",
          "15명",
          "20명"
        ],
        "correctIndex": 0,
        "correctAnswer": "12명",
        "explanation": "'Twelve students'는 12명입니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What floor is the nurse's office on? B: It is on the first floor near the entrance.",
        "question": "[듣기 · 1단원] 보건실은 몇 층에 있나요?",
        "options": [
          "1층",
          "2층",
          "3층",
          "지하 1층"
        ],
        "correctIndex": 0,
        "correctAnswer": "1층",
        "explanation": "'on the first floor'입니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Can you spell your teacher's name? B: Yes, B-R-O-W-N.",
        "question": "[듣기 · 1단원] 선생님의 성함 철자는?",
        "options": [
          "B-R-O-W-N",
          "B-R-O-U-N",
          "B-L-O-W-N",
          "B-R-O-N-E"
        ],
        "correctIndex": 0,
        "correctAnswer": "B-R-O-W-N",
        "explanation": "Brown의 철자는 B-R-O-W-N입니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What is your club goal this year? B: We want to hold an art exhibition.",
        "question": "[듣기 · 1단원] 동아리의 올해 목표는?",
        "options": [
          "미술 전시회 개최",
          "대회 우승",
          "새 부원 모집",
          "동아리실 청소"
        ],
        "correctIndex": 0,
        "correctAnswer": "미술 전시회 개최",
        "explanation": "'art exhibition'은 미술 전시회입니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "My name is Minsoo. I am twelve years old, and I am in the sixth grade.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"My name is Minsoo. I am twelve years old, and I am in the sixth grade.\"\n질문: Minsoo의 학년으로 알맞은 것은?",
        "options": [
          "6학년",
          "5학년",
          "4학년",
          "3학년"
        ],
        "correctIndex": 0,
        "correctAnswer": "6학년",
        "explanation": "'sixth grade'는 6학년입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Kelly loves drawing pictures. She wants to join the art club this semester.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"Kelly loves drawing pictures. She wants to join the art club this semester.\"\n질문: Kelly가 가입하고 싶어 하는 동아리는?",
        "options": [
          "미술 동아리",
          "음악 동아리",
          "독서 동아리",
          "댄스 동아리"
        ],
        "correctIndex": 0,
        "correctAnswer": "미술 동아리",
        "explanation": "'art club'은 미술 동아리입니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "The school library has many books. It is located on the second floor.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"The school library has many books. It is located on the second floor.\"\n질문: 도서관이 위치한 층은?",
        "options": [
          "2층",
          "1층",
          "3층",
          "4층"
        ],
        "correctIndex": 0,
        "correctAnswer": "2층",
        "explanation": "'second floor'는 2층입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "David runs very fast. He won first place in the 100-meter race yesterday.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"David runs very fast. He won first place in the 100-meter race yesterday.\"\n질문: David가 어제 경주에서 차지한 등수는?",
        "options": [
          "1등",
          "2등",
          "3등",
          "4등"
        ],
        "correctIndex": 0,
        "correctAnswer": "1등",
        "explanation": "'first place'는 1등입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Our teacher wrote 'W-E-L-C-O-M-E' on the board on the first day.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"Our teacher wrote 'W-E-L-C-O-M-E' on the board on the first day.\"\n질문: 선생님이 칠판에 적으신 단어는?",
        "options": [
          "WELCOME",
          "WINDOW",
          "WONDER",
          "WEATHER"
        ],
        "correctIndex": 0,
        "correctAnswer": "WELCOME",
        "explanation": "철자는 W-E-L-C-O-M-E입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "My little brother is eight years old. He is in the first grade.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"My little brother is eight years old. He is in the first grade.\"\n질문: 남동생의 학년은?",
        "options": [
          "1학년",
          "2학년",
          "3학년",
          "4학년"
        ],
        "correctIndex": 0,
        "correctAnswer": "1학년",
        "explanation": "'first grade'는 1학년입니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "The robot club builds amazing machines every Wednesday after school.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"The robot club builds amazing machines every Wednesday after school.\"\n질문: 로봇 동아리가 모이는 요일은?",
        "options": [
          "수요일",
          "월요일",
          "금요일",
          "화요일"
        ],
        "correctIndex": 0,
        "correctAnswer": "수요일",
        "explanation": "'every Wednesday'는 매주 수요일입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Please go to the fourth floor to find the principal's office.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"Please go to the fourth floor to find the principal's office.\"\n질문: 교장실이 위치한 층은?",
        "options": [
          "4층",
          "2층",
          "3층",
          "5층"
        ],
        "correctIndex": 0,
        "correctAnswer": "4층",
        "explanation": "'fourth floor'는 4층입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Jisu joined the dance club because she likes K-pop music and dancing.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"Jisu joined the dance club because she likes K-pop music and dancing.\"\n질문: Jisu가 댄스 동아리에 가입한 이유는?",
        "options": [
          "K-pop과 춤을 좋아해서",
          "친구가 가입해서",
          "운동을 하려고",
          "시간이 남아서"
        ],
        "correctIndex": 0,
        "correctAnswer": "K-pop과 춤을 좋아해서",
        "explanation": "'she likes K-pop music and dancing'입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "The science room is on the third floor next to the music room.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"The science room is on the third floor next to the music room.\"\n질문: 과학실의 위치는?",
        "options": [
          "3층 음악실 옆",
          "2층 도서관 앞",
          "1층 행정실 옆",
          "4층 방송실 앞"
        ],
        "correctIndex": 0,
        "correctAnswer": "3층 음악실 옆",
        "explanation": "'on the third floor next to the music room'입니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "There are four clubs in our school: soccer, art, music, and cooking.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"There are four clubs in our school: soccer, art, music, and cooking.\"\n질문: 본문에 언급되지 않은 동아리는?",
        "options": [
          "로봇 동아리",
          "축구 동아리",
          "음악 동아리",
          "요리 동아리"
        ],
        "correctIndex": 0,
        "correctAnswer": "로봇 동아리",
        "explanation": "로봇 동아리는 언급되지 않았습니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Sumi is in the fifth grade, and her brother is in the third grade.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"Sumi is in the fifth grade, and her brother is in the third grade.\"\n질문: Sumi의 학년은?",
        "options": [
          "5학년",
          "3학년",
          "4학년",
          "6학년"
        ],
        "correctIndex": 0,
        "correctAnswer": "5학년",
        "explanation": "Sumi는 5학년(fifth grade)입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "How do you spell your pet's name? It is 'L-U-C-K-Y'.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"How do you spell your pet's name? It is 'L-U-C-K-Y'.\"\n질문: 반려동물의 이름은?",
        "options": [
          "LUCKY",
          "LOCKY",
          "LUCY",
          "LOOKY"
        ],
        "correctIndex": 0,
        "correctAnswer": "LUCKY",
        "explanation": "L-U-C-K-Y는 LUCKY입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "The cafeteria is on the first floor near the main playground entrance.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"The cafeteria is on the first floor near the main playground entrance.\"\n질문: 급식실(cafeteria)의 위치는?",
        "options": [
          "1층",
          "2층",
          "3층",
          "지하"
        ],
        "correctIndex": 0,
        "correctAnswer": "1층",
        "explanation": "'on the first floor'입니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Brian wants to practice playing soccer every Tuesday.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"Brian wants to practice playing soccer every Tuesday.\"\n질문: Brian이 축구를 연습하고 싶어 하는 요일은?",
        "options": [
          "화요일",
          "목요일",
          "토요일",
          "수요일"
        ],
        "correctIndex": 0,
        "correctAnswer": "화요일",
        "explanation": "'every Tuesday'는 매주 화요일입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Amy was the second person to finish the difficult puzzle.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"Amy was the second person to finish the difficult puzzle.\"\n질문: Amy가 퍼즐을 완성한 순서는?",
        "options": [
          "두 번째",
          "첫 번째",
          "세 번째",
          "네 번째"
        ],
        "correctIndex": 0,
        "correctAnswer": "두 번째",
        "explanation": "'second person'은 두 번째 사람입니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "We have an English club meeting at two o'clock on Monday afternoon.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"We have an English club meeting at two o'clock on Monday afternoon.\"\n질문: 영어 동아리 모임 시간은?",
        "options": [
          "월요일 오후 2시",
          "화요일 오후 3시",
          "월요일 오전 10시",
          "수요일 오후 2시"
        ],
        "correctIndex": 0,
        "correctAnswer": "월요일 오후 2시",
        "explanation": "'two o'clock on Monday afternoon'입니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "The music room is on the fifth floor of the new school building.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"The music room is on the fifth floor of the new school building.\"\n질문: 음악실이 있는 층은?",
        "options": [
          "5층",
          "4층",
          "3층",
          "1층"
        ],
        "correctIndex": 0,
        "correctAnswer": "5층",
        "explanation": "'fifth floor'는 5층입니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Tom is proud because he won third place in the speech contest.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"Tom is proud because he won third place in the speech contest.\"\n질문: Tom이 말하기 대회에서 받은 등수는?",
        "options": [
          "3등",
          "1등",
          "2등",
          "장려상"
        ],
        "correctIndex": 0,
        "correctAnswer": "3등",
        "explanation": "'third place'는 3등입니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Can you spell 'FRIEND'? F-R-I-E-N-D.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"Can you spell 'FRIEND'? F-R-I-E-N-D.\"\n질문: 철자로 제시된 단어의 뜻은?",
        "options": [
          "친구",
          "가족",
          "선생님",
          "학교"
        ],
        "correctIndex": 0,
        "correctAnswer": "친구",
        "explanation": "FRIEND는 친구입니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Students in the second grade are learning how to count in English.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"Students in the second grade are learning how to count in English.\"\n질문: 영어 숫자를 배우고 있는 학년은?",
        "options": [
          "2학년",
          "1학년",
          "3학년",
          "4학년"
        ],
        "correctIndex": 0,
        "correctAnswer": "2학년",
        "explanation": "'second grade'는 2학년입니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "The reading club meets in the library every Thursday after class.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"The reading club meets in the library every Thursday after class.\"\n질문: 독서 동아리가 모이는 장소는?",
        "options": [
          "도서관",
          "교실",
          "체육관",
          "컴퓨터실"
        ],
        "correctIndex": 0,
        "correctAnswer": "도서관",
        "explanation": "'in the library'입니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Our school gym is on the first floor behind the teachers' office.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"Our school gym is on the first floor behind the teachers' office.\"\n질문: 체육관이 위치한 층은?",
        "options": [
          "1층",
          "2층",
          "3층",
          "4층"
        ],
        "correctIndex": 0,
        "correctAnswer": "1층",
        "explanation": "'on the first floor'입니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hana wants to learn how to cook Italian pasta in the cooking club.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"Hana wants to learn how to cook Italian pasta in the cooking club.\"\n질문: Hana가 요리 동아리에서 배우고 싶어 하는 것은?",
        "options": [
          "이탈리아 파스타 요리",
          "한국 떡볶이",
          "프랑스 빵",
          "일본 라면"
        ],
        "correctIndex": 0,
        "correctAnswer": "이탈리아 파스타 요리",
        "explanation": "'cook Italian pasta'입니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Kevin's classroom is on the third floor, room number 302.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"Kevin's classroom is on the third floor, room number 302.\"\n질문: Kevin의 교실 호수는?",
        "options": [
          "302호",
          "301호",
          "202호",
          "402호"
        ],
        "correctIndex": 0,
        "correctAnswer": "302호",
        "explanation": "'room number 302'입니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "The fourth grade students are going on a field trip tomorrow.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"The fourth grade students are going on a field trip tomorrow.\"\n질문: 내일 현장체험학습을 떠나는 학년은?",
        "options": [
          "4학년",
          "3학년",
          "5학년",
          "6학년"
        ],
        "correctIndex": 0,
        "correctAnswer": "4학년",
        "explanation": "'fourth grade students'입니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Jenny is the fifth student to present her project today.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"Jenny is the fifth student to present her project today.\"\n질문: Jenny가 오늘 발표하는 순서는?",
        "options": [
          "다섯 번째",
          "첫 번째",
          "세 번째",
          "두 번째"
        ],
        "correctIndex": 0,
        "correctAnswer": "다섯 번째",
        "explanation": "'fifth student'입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "The spelling of my teacher's favorite animal is 'T-I-G-E-R'.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"The spelling of my teacher's favorite animal is 'T-I-G-E-R'.\"\n질문: 선생님이 가장 좋아하시는 동물은?",
        "options": [
          "호랑이",
          "사자",
          "기린",
          "판다"
        ],
        "correctIndex": 0,
        "correctAnswer": "호랑이",
        "explanation": "T-I-G-E-R는 호랑이입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "In the drama club, we wear colorful costumes and act on stage.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"In the drama club, we wear colorful costumes and act on stage.\"\n질문: 연극 동아리에서 하는 활동으로 알맞은 것은?",
        "options": [
          "의상을 입고 무대에서 연기하기",
          "악기 연주하기",
          "노래 작곡하기",
          "무대 청소하기"
        ],
        "correctIndex": 0,
        "correctAnswer": "의상을 입고 무대에서 연기하기",
        "explanation": "'wear colorful costumes and act on stage'입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Paul is in the third grade, and he wants to learn taekwondo.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"Paul is in the third grade, and he wants to learn taekwondo.\"\n질문: Paul의 학년은?",
        "options": [
          "3학년",
          "2학년",
          "4학년",
          "5학년"
        ],
        "correctIndex": 0,
        "correctAnswer": "3학년",
        "explanation": "'third grade'는 3학년입니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "The swimming club practices at the sports center every Saturday.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"The swimming club practices at the sports center every Saturday.\"\n질문: 수영 동아리가 연습하는 장소는?",
        "options": [
          "스포츠 센터",
          "학교 운동장",
          "체육관",
          "수영장 호텔"
        ],
        "correctIndex": 0,
        "correctAnswer": "스포츠 센터",
        "explanation": "'at the sports center'입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Who won first prize in the English quiz show? Kelly did!",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"Who won first prize in the English quiz show? Kelly did!\"\n질문: 영어 퀴즈쇼에서 1등 상을 받은 사람은?",
        "options": [
          "Kelly",
          "Minsoo",
          "Paul",
          "Tom"
        ],
        "correctIndex": 0,
        "correctAnswer": "Kelly",
        "explanation": "Kelly가 1등 상(first prize)을 받았습니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "The teachers' lounge is located on the second floor next to 201.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"The teachers' lounge is located on the second floor next to 201.\"\n질문: 교무실(teachers' lounge)이 위치한 층은?",
        "options": [
          "2층",
          "1층",
          "3층",
          "4층"
        ],
        "correctIndex": 0,
        "correctAnswer": "2층",
        "explanation": "'second floor'입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Can you spell 'PENCIL'? P-E-N-C-I-L.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"Can you spell 'PENCIL'? P-E-N-C-I-L.\"\n질문: 철자로 제시된 학용품은?",
        "options": [
          "연필",
          "필통",
          "지우개",
          "공책"
        ],
        "correctIndex": 0,
        "correctAnswer": "연필",
        "explanation": "PENCIL은 연필입니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "All sixth grade students will graduate next February.",
        "question": "[읽기 · 1단원] 다음 글을 읽고, 질문에 알맞은 답을 고르세요.\n\"All sixth grade students will graduate next February.\"\n질문: 내년 2월에 졸업하는 학년은?",
        "options": [
          "6학년",
          "5학년",
          "4학년",
          "3학년"
        ],
        "correctIndex": 0,
        "correctAnswer": "6학년",
        "explanation": "'sixth grade students'입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 1단원 단답형] 다음 설명을 읽고, 알맞은 영어 낱말을 입력하세요.\n'첫 번째의'를 뜻하는 영어 단어를 소문자로 쓰세요.",
        "correctAnswer": "first",
        "explanation": "'첫 번째'는 first입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 1단원 단답형] 다음 설명을 읽고, 알맞은 영어 낱말을 입력하세요.\n'두 번째의'를 뜻하는 영어 단어를 소문자로 쓰세요.",
        "correctAnswer": "second",
        "explanation": "'두 번째'는 second입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 1단원 단답형] 다음 설명을 읽고, 알맞은 영어 낱말을 입력하세요.\n'세 번째의'를 뜻하는 영어 단어를 소문자로 쓰세요.",
        "correctAnswer": "third",
        "explanation": "'세 번째'는 third입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 1단원 단답형] 다음 설명을 읽고, 알맞은 영어 낱말을 입력하세요.\n'네 번째의'를 뜻하는 영어 단어를 소문자로 쓰세요.",
        "correctAnswer": "fourth",
        "explanation": "'네 번째'는 fourth입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 1단원 단답형] 다음 설명을 읽고, 알맞은 영어 낱말을 입력하세요.\n'다섯 번째의'를 뜻하는 영어 단어를 소문자로 쓰세요.",
        "correctAnswer": "fifth",
        "explanation": "'다섯 번째'는 fifth입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 1단원 단답형] 다음 설명을 읽고, 알맞은 영어 낱말을 입력하세요.\n'여섯 번째의'를 뜻하는 영어 단어를 소문자로 쓰세요.",
        "correctAnswer": "sixth",
        "explanation": "'여섯 번째'는 sixth입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 1단원 단답형] 다음 설명을 읽고, 알맞은 영어 낱말을 입력하세요.\n학교 '학년'을 뜻하는 영어 단어 (g로 시작하는 5글자)를 쓰세요.",
        "correctAnswer": "grade",
        "explanation": "학년은 grade입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 1단원 단답형] 다음 설명을 읽고, 알맞은 영어 낱말을 입력하세요.\n동아리에 '가입하다'를 뜻하는 영어 단어 (j로 시작하는 4글자)를 쓰세요.",
        "correctAnswer": "join",
        "explanation": "가입하다는 join입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 1단원 단답형] 다음 설명을 읽고, 알맞은 영어 낱말을 입력하세요.\n취미나 특기 활동을 함께하는 '동아리'를 뜻하는 영어 단어를 쓰세요.",
        "correctAnswer": "club",
        "explanation": "동아리는 club입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 1단원 단답형] 다음 설명을 읽고, 알맞은 영어 낱말을 입력하세요.\n단어의 '철자를 말하다(쓰다)'를 뜻하는 영어 단어를 쓰세요.",
        "correctAnswer": "spell",
        "explanation": "철자를 쓰다는 spell입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 1단원 단답형] 다음 설명을 읽고, 알맞은 영어 낱말을 입력하세요.\n건물의 '층' 또는 '바닥'을 뜻하는 영어 단어 (f로 시작하는 5글자)를 쓰세요.",
        "correctAnswer": "floor",
        "explanation": "층은 floor입니다."
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 1단원 단답형] 다음 설명을 읽고, 알맞은 영어 낱말을 입력하세요.\n'축구'를 뜻하는 영어 단어 (s로 시작하는 6글자)를 쓰세요.",
        "correctAnswer": "soccer",
        "explanation": "축구는 soccer입니다."
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 1단원 단답형] 다음 설명을 읽고, 알맞은 영어 낱말을 입력하세요.\n'음악'을 뜻하는 영어 단어 (m으로 시작하는 5글자)를 쓰세요.",
        "correctAnswer": "music",
        "explanation": "음악은 music입니다."
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 1단원 단답형] 다음 설명을 읽고, 알맞은 영어 낱말을 입력하세요.\n'로봇'을 뜻하는 영어 단어를 쓰세요.",
        "correctAnswer": "robot",
        "explanation": "로봇은 robot입니다."
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 1단원 단답형] 다음 설명을 읽고, 알맞은 영어 낱말을 입력하세요.\n'미술, 예술'을 뜻하는 영어 단어 (3글자)를 쓰세요.",
        "correctAnswer": "art",
        "explanation": "미술은 art입니다."
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원 문장 배열] 주어진 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"너는 몇 학년이니?\"",
        "chips": [
          "What",
          "grade",
          "are",
          "you",
          "in?"
        ],
        "correctAnswer": "What grade are you in?",
        "explanation": "'What grade are you in?'은 학년을 묻는 표현입니다."
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원 문장 배열] 주어진 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"나는 6학년이야.\"",
        "chips": [
          "I",
          "am",
          "in",
          "the",
          "sixth",
          "grade."
        ],
        "correctAnswer": "I am in the sixth grade.",
        "explanation": "'I am in the sixth grade.'는 6학년임을 나타냅니다."
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원 문장 배열] 주어진 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"나는 댄스 동아리에 들고 싶어.\"",
        "chips": [
          "I",
          "want",
          "to",
          "join",
          "the",
          "dance",
          "club."
        ],
        "correctAnswer": "I want to join the dance club.",
        "explanation": "'want to join'은 가입하고 싶다는 뜻입니다."
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원 문장 배열] 주어진 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"너의 이름 철자가 어떻게 되니?\"",
        "chips": [
          "How",
          "do",
          "you",
          "spell",
          "your",
          "name?"
        ],
        "correctAnswer": "How do you spell your name?",
        "explanation": "이름 철자를 묻는 문장입니다."
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원 문장 배열] 주어진 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"도서관은 2층에 있어.\"",
        "chips": [
          "The",
          "library",
          "is",
          "on",
          "the",
          "second",
          "floor."
        ],
        "correctAnswer": "The library is on the second floor.",
        "explanation": "도서관 위치를 나타내는 문장입니다."
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원 문장 배열] 주어진 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"그는 5학년이야.\"",
        "chips": [
          "He",
          "is",
          "in",
          "the",
          "fifth",
          "grade."
        ],
        "correctAnswer": "He is in the fifth grade.",
        "explanation": "그의 학년을 나타내는 문장입니다."
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원 문장 배열] 주어진 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"우리 함께 축구 동아리에 가입하자.\"",
        "chips": [
          "Let's",
          "join",
          "the",
          "soccer",
          "club",
          "together."
        ],
        "correctAnswer": "Let's join the soccer club together.",
        "explanation": "동아리 가입을 제안하는 문장입니다."
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원 문장 배열] 주어진 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"내 교실은 3층에 있어.\"",
        "chips": [
          "My",
          "classroom",
          "is",
          "on",
          "the",
          "third",
          "floor."
        ],
        "correctAnswer": "My classroom is on the third floor.",
        "explanation": "교실 위치를 설명하는 문장입니다."
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원 문장 배열] 주어진 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"그녀는 달리기에서 1등을 했어.\"",
        "chips": [
          "She",
          "won",
          "first",
          "place",
          "in",
          "the",
          "race."
        ],
        "correctAnswer": "She won first place in the race.",
        "explanation": "1등 수상을 나타내는 문장입니다."
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원 문장 배열] 주어진 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"나는 로봇 동아리에서 물건 만드는 것을 좋아해.\"",
        "chips": [
          "I",
          "like",
          "making",
          "things",
          "in",
          "the",
          "robot",
          "club."
        ],
        "correctAnswer": "I like making things in the robot club.",
        "explanation": "동아리 활동을 설명하는 문장입니다."
      },
      {
        "id": 96,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원 문장 배열] 주어진 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"가장 좋아하는 학교 동아리는 무엇이니?\"",
        "chips": [
          "What",
          "is",
          "your",
          "favorite",
          "school",
          "club?"
        ],
        "correctAnswer": "What is your favorite school club?",
        "explanation": "좋아하는 동아리를 묻는 문장입니다."
      },
      {
        "id": 97,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원 문장 배열] 주어진 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"내 여동생은 1학년이야.\"",
        "chips": [
          "My",
          "sister",
          "is",
          "in",
          "the",
          "first",
          "grade."
        ],
        "correctAnswer": "My sister is in the first grade.",
        "explanation": "여동생의 학년을 나타내는 문장입니다."
      },
      {
        "id": 98,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원 문장 배열] 주어진 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"과학실은 4층에 있어.\"",
        "chips": [
          "The",
          "science",
          "room",
          "is",
          "on",
          "the",
          "fourth",
          "floor."
        ],
        "correctAnswer": "The science room is on the fourth floor.",
        "explanation": "과학실 위치를 나타내는 문장입니다."
      },
      {
        "id": 99,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원 문장 배열] 주어진 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"우리는 음악 동아리에서 노래를 연습해.\"",
        "chips": [
          "We",
          "practice",
          "singing",
          "in",
          "the",
          "music",
          "club."
        ],
        "correctAnswer": "We practice singing in the music club.",
        "explanation": "음악 동아리 활동 문장입니다."
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[최종 골든벨 문제] 다음 우리말 뜻에 맞도록 주어진 단어 카드를 순서대로 바르게 배열하세요.\n\"welcome이라는 단어 철자를 말할 수 있니?\"",
        "chips": [
          "Can",
          "you",
          "spell",
          "the",
          "word",
          "welcome?"
        ],
        "correctAnswer": "Can you spell the word welcome?",
        "explanation": "철자를 묻는 문장입니다."
      }
    ]
  },
  "6G_L02": {
    "name": "2단원: 계절과 날씨 · 이유 (What's your favorite season?)",
    "grade": 6,
    "theme": "Seasons, Weather & Reasons",
    "totalQuestions": 100,
    "questions": [
      {
        "id": 1,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Minsoo: What is your favorite season, Sarah? Sarah: My favorite season is spring. It is warm and sunny.",
        "question": "[듣기 · 2단원] 대화를 듣고, Sarah이(가) 좋아하는 계절과 그 날씨로 알맞은 것은?",
        "options": [
          "봄 (따뜻하고 화창한)",
          "가을 (안개 짙고 쌀쌀한)",
          "겨울 (춥고 눈 내리는)",
          "여름 (덥고 비 오는)"
        ],
        "correctIndex": 0,
        "correctAnswer": "봄 (따뜻하고 화창한)",
        "explanation": "'favorite season is spring'(봄)입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kelly: What is your favorite season, Jisu? Jisu: My favorite season is summer. It is hot and sunny.",
        "question": "[듣기 · 2단원] 대화를 듣고, Jisu이(가) 좋아하는 계절과 그 날씨로 알맞은 것은?",
        "options": [
          "겨울 (춥고 눈 내리는)",
          "여름 (덥고 맑은)",
          "가을 (안개 짙고 쌀쌀한)",
          "여름 (덥고 비 오는)"
        ],
        "correctIndex": 1,
        "correctAnswer": "여름 (덥고 맑은)",
        "explanation": "'favorite season is summer'(여름)입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "David: What is your favorite season, Kevin? Kevin: My favorite season is fall. It is cool and breezy.",
        "question": "[듣기 · 2단원] 대화를 듣고, Kevin이(가) 좋아하는 계절과 그 날씨로 알맞은 것은?",
        "options": [
          "겨울 (춥고 눈 내리는)",
          "여름 (덥고 비 오는)",
          "가을 (안개 짙고 쌀쌀한)",
          "가을 (시원하고 바람 부는)"
        ],
        "correctIndex": 3,
        "correctAnswer": "가을 (시원하고 바람 부는)",
        "explanation": "'favorite season is fall'(가을)입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Sarah: What is your favorite season, Emma? Emma: My favorite season is winter. It is cold and snowy.",
        "question": "[듣기 · 2단원] 대화를 듣고, Emma이(가) 좋아하는 계절과 그 날씨로 알맞은 것은?",
        "options": [
          "여름 (덥고 비 오는)",
          "가을 (안개 짙고 쌀쌀한)",
          "겨울 (춥고 눈 내리는)",
          "겨울 (춥고 눈 내리는)"
        ],
        "correctIndex": 2,
        "correctAnswer": "겨울 (춥고 눈 내리는)",
        "explanation": "'favorite season is winter'(겨울)입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Jisu: What is your favorite season, Tom? Tom: My favorite season is spring. It is warm and sunny.",
        "question": "[듣기 · 2단원] 대화를 듣고, Tom이(가) 좋아하는 계절과 그 날씨로 알맞은 것은?",
        "options": [
          "가을 (안개 짙고 쌀쌀한)",
          "여름 (덥고 비 오는)",
          "겨울 (춥고 눈 내리는)",
          "봄 (따뜻하고 화창한)"
        ],
        "correctIndex": 3,
        "correctAnswer": "봄 (따뜻하고 화창한)",
        "explanation": "'favorite season is spring'(봄)입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kevin: What is your favorite season, Hana? Hana: My favorite season is summer. It is hot and sunny.",
        "question": "[듣기 · 2단원] 대화를 듣고, Hana이(가) 좋아하는 계절과 그 날씨로 알맞은 것은?",
        "options": [
          "가을 (안개 짙고 쌀쌀한)",
          "여름 (덥고 맑은)",
          "겨울 (춥고 눈 내리는)",
          "여름 (덥고 비 오는)"
        ],
        "correctIndex": 1,
        "correctAnswer": "여름 (덥고 맑은)",
        "explanation": "'favorite season is summer'(여름)입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Emma: What is your favorite season, Brian? Brian: My favorite season is fall. It is cool and breezy.",
        "question": "[듣기 · 2단원] 대화를 듣고, Brian이(가) 좋아하는 계절과 그 날씨로 알맞은 것은?",
        "options": [
          "여름 (덥고 비 오는)",
          "가을 (시원하고 바람 부는)",
          "겨울 (춥고 눈 내리는)",
          "가을 (안개 짙고 쌀쌀한)"
        ],
        "correctIndex": 1,
        "correctAnswer": "가을 (시원하고 바람 부는)",
        "explanation": "'favorite season is fall'(가을)입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Tom: What is your favorite season, Amy? Amy: My favorite season is winter. It is cold and snowy.",
        "question": "[듣기 · 2단원] 대화를 듣고, Amy이(가) 좋아하는 계절과 그 날씨로 알맞은 것은?",
        "options": [
          "겨울 (춥고 눈 내리는)",
          "겨울 (춥고 눈 내리는)",
          "여름 (덥고 비 오는)",
          "가을 (안개 짙고 쌀쌀한)"
        ],
        "correctIndex": 0,
        "correctAnswer": "겨울 (춥고 눈 내리는)",
        "explanation": "'favorite season is winter'(겨울)입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Hana: What is your favorite season, Paul? Paul: My favorite season is spring. It is warm and sunny.",
        "question": "[듣기 · 2단원] 대화를 듣고, Paul이(가) 좋아하는 계절과 그 날씨로 알맞은 것은?",
        "options": [
          "여름 (덥고 비 오는)",
          "봄 (따뜻하고 화창한)",
          "겨울 (춥고 눈 내리는)",
          "가을 (안개 짙고 쌀쌀한)"
        ],
        "correctIndex": 1,
        "correctAnswer": "봄 (따뜻하고 화창한)",
        "explanation": "'favorite season is spring'(봄)입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Brian: What is your favorite season, Minsoo? Minsoo: My favorite season is summer. It is hot and sunny.",
        "question": "[듣기 · 2단원] 대화를 듣고, Minsoo이(가) 좋아하는 계절과 그 날씨로 알맞은 것은?",
        "options": [
          "가을 (안개 짙고 쌀쌀한)",
          "여름 (덥고 비 오는)",
          "겨울 (춥고 눈 내리는)",
          "여름 (덥고 맑은)"
        ],
        "correctIndex": 3,
        "correctAnswer": "여름 (덥고 맑은)",
        "explanation": "'favorite season is summer'(여름)입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Amy: What is your favorite season, Kelly? Kelly: My favorite season is fall. It is cool and breezy.",
        "question": "[듣기 · 2단원] 대화를 듣고, Kelly이(가) 좋아하는 계절과 그 날씨로 알맞은 것은?",
        "options": [
          "가을 (시원하고 바람 부는)",
          "겨울 (춥고 눈 내리는)",
          "여름 (덥고 비 오는)",
          "가을 (안개 짙고 쌀쌀한)"
        ],
        "correctIndex": 0,
        "correctAnswer": "가을 (시원하고 바람 부는)",
        "explanation": "'favorite season is fall'(가을)입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Paul: What is your favorite season, David? David: My favorite season is winter. It is cold and snowy.",
        "question": "[듣기 · 2단원] 대화를 듣고, David이(가) 좋아하는 계절과 그 날씨로 알맞은 것은?",
        "options": [
          "겨울 (춥고 눈 내리는)",
          "가을 (안개 짙고 쌀쌀한)",
          "여름 (덥고 비 오는)",
          "겨울 (춥고 눈 내리는)"
        ],
        "correctIndex": 0,
        "correctAnswer": "겨울 (춥고 눈 내리는)",
        "explanation": "'favorite season is winter'(겨울)입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Spring brings warm weather and green trees. Sarah: I completely agree with you!",
        "question": "[듣기 · 2단원] 대화에서 Minsoo이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아니야.",
          "봄은 따뜻한 날씨와 초록빛 나무를 가져와.",
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자."
        ],
        "correctIndex": 1,
        "correctAnswer": "봄은 따뜻한 날씨와 초록빛 나무를 가져와.",
        "explanation": "'Spring brings warm weather and green trees.'은 '봄은 따뜻한 날씨와 초록빛 나무를 가져와.'을 의미합니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kelly: The weather is hot, so let's have ice cream. Jisu: I completely agree with you!",
        "question": "[듣기 · 2단원] 대화에서 Kelly이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "날씨가 더우니 아이스크림 먹자.",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "날씨가 더우니 아이스크림 먹자.",
        "explanation": "'The weather is hot, so let's have ice cream.'은 '날씨가 더우니 아이스크림 먹자.'을 의미합니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "David: What do you do in the winter? Kevin: I completely agree with you!",
        "question": "[듣기 · 2단원] 대화에서 David이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "너는 겨울에 무엇을 하니?",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "너는 겨울에 무엇을 하니?",
        "explanation": "'What do you do in the winter?'은 '너는 겨울에 무엇을 하니?'을 의미합니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Sarah: What is your favorite season? Emma: I completely agree with you!",
        "question": "[듣기 · 2단원] 대화에서 Sarah이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "네가 가장 좋아하는 계절은 뭐니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "네가 가장 좋아하는 계절은 뭐니?",
        "explanation": "'What is your favorite season?'은 '네가 가장 좋아하는 계절은 뭐니?'을 의미합니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Jisu: My favorite season is spring. Tom: I completely agree with you!",
        "question": "[듣기 · 2단원] 대화에서 Jisu이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음에 다시 이야기하자.",
          "내가 가장 좋아하는 계절은 봄이야.",
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 1,
        "correctAnswer": "내가 가장 좋아하는 계절은 봄이야.",
        "explanation": "'My favorite season is spring.'은 '내가 가장 좋아하는 계절은 봄이야.'을 의미합니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kevin: Because I can see beautiful flowers. Hana: I completely agree with you!",
        "question": "[듣기 · 2단원] 대화에서 Kevin이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "아름다운 꽃들을 볼 수 있기 때문이야."
        ],
        "correctIndex": 3,
        "correctAnswer": "아름다운 꽃들을 볼 수 있기 때문이야.",
        "explanation": "'Because I can see beautiful flowers.'은 '아름다운 꽃들을 볼 수 있기 때문이야.'을 의미합니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Emma: It is warm and sunny today. Brian: I completely agree with you!",
        "question": "[듣기 · 2단원] 대화에서 Emma이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음에 다시 이야기하자.",
          "나는 잘 모르겠어.",
          "오늘은 따뜻하고 화창해.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 2,
        "correctAnswer": "오늘은 따뜻하고 화창해.",
        "explanation": "'It is warm and sunny today.'은 '오늘은 따뜻하고 화창해.'을 의미합니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Tom: I like summer because I can swim. Amy: I completely agree with you!",
        "question": "[듣기 · 2단원] 대화에서 Tom이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "수영을 할 수 있어서 여름을 좋아해."
        ],
        "correctIndex": 3,
        "correctAnswer": "수영을 할 수 있어서 여름을 좋아해.",
        "explanation": "'I like summer because I can swim.'은 '수영을 할 수 있어서 여름을 좋아해.'을 의미합니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Hana: Winter is cold and snowy. Paul: I completely agree with you!",
        "question": "[듣기 · 2단원] 대화에서 Hana이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "겨울은 춥고 눈이 내려.",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "겨울은 춥고 눈이 내려.",
        "explanation": "'Winter is cold and snowy.'은 '겨울은 춥고 눈이 내려.'을 의미합니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Brian: Fall has cool and breezy weather. Minsoo: I completely agree with you!",
        "question": "[듣기 · 2단원] 대화에서 Brian이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음에 다시 이야기하자.",
          "가을은 시원하고 바람 부는 날씨야.",
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 1,
        "correctAnswer": "가을은 시원하고 바람 부는 날씨야.",
        "explanation": "'Fall has cool and breezy weather.'은 '가을은 시원하고 바람 부는 날씨야.'을 의미합니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Amy: We can make a big snowman. Kelly: I completely agree with you!",
        "question": "[듣기 · 2단원] 대화에서 Amy이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "나는 잘 모르겠어.",
          "우리는 큰 눈사람을 만들 수 있어."
        ],
        "correctIndex": 3,
        "correctAnswer": "우리는 큰 눈사람을 만들 수 있어.",
        "explanation": "'We can make a big snowman.'은 '우리는 큰 눈사람을 만들 수 있어.'을 의미합니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Paul: I love eating sweet watermelon in summer. David: I completely agree with you!",
        "question": "[듣기 · 2단원] 대화에서 Paul이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음에 다시 이야기하자.",
          "나는 잘 모르겠어.",
          "나는 여름에 달콤한 수박 먹는 것을 아주 좋아해.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 2,
        "correctAnswer": "나는 여름에 달콤한 수박 먹는 것을 아주 좋아해.",
        "explanation": "'I love eating sweet watermelon in summer.'은 '나는 여름에 달콤한 수박 먹는 것을 아주 좋아해.'을 의미합니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Do you know the meaning of 'warm'? Sarah: Yes, it means '따뜻한'.",
        "question": "[듣기 · 2단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'warm'의 뜻은?",
        "options": [
          "여름",
          "봄",
          "계절",
          "따뜻한"
        ],
        "correctIndex": 3,
        "correctAnswer": "따뜻한",
        "explanation": "'warm'은 '따뜻한'를 뜻합니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kelly: Do you know the meaning of 'cool'? Jisu: Yes, it means '시원한'.",
        "question": "[듣기 · 2단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'cool'의 뜻은?",
        "options": [
          "봄",
          "시원한",
          "계절",
          "여름"
        ],
        "correctIndex": 1,
        "correctAnswer": "시원한",
        "explanation": "'cool'은 '시원한'를 뜻합니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "David: Do you know the meaning of 'sunny'? Kevin: Yes, it means '화창한'.",
        "question": "[듣기 · 2단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'sunny'의 뜻은?",
        "options": [
          "봄",
          "계절",
          "여름",
          "화창한"
        ],
        "correctIndex": 3,
        "correctAnswer": "화창한",
        "explanation": "'sunny'은 '화창한'를 뜻합니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Sarah: Do you know the meaning of 'snowy'? Emma: Yes, it means '눈 내리는'.",
        "question": "[듣기 · 2단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'snowy'의 뜻은?",
        "options": [
          "봄",
          "여름",
          "계절",
          "눈 내리는"
        ],
        "correctIndex": 3,
        "correctAnswer": "눈 내리는",
        "explanation": "'snowy'은 '눈 내리는'를 뜻합니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Jisu: Do you know the meaning of 'beach'? Tom: Yes, it means '해변'.",
        "question": "[듣기 · 2단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'beach'의 뜻은?",
        "options": [
          "계절",
          "봄",
          "여름",
          "해변"
        ],
        "correctIndex": 3,
        "correctAnswer": "해변",
        "explanation": "'beach'은 '해변'를 뜻합니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kevin: Do you know the meaning of 'leaves'? Hana: Yes, it means '나뭇잎들'.",
        "question": "[듣기 · 2단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'leaves'의 뜻은?",
        "options": [
          "나뭇잎들",
          "계절",
          "봄",
          "여름"
        ],
        "correctIndex": 0,
        "correctAnswer": "나뭇잎들",
        "explanation": "'leaves'은 '나뭇잎들'를 뜻합니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Emma: Do you know the meaning of 'season'? Brian: Yes, it means '계절'.",
        "question": "[듣기 · 2단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'season'의 뜻은?",
        "options": [
          "여름",
          "봄",
          "가을",
          "계절"
        ],
        "correctIndex": 3,
        "correctAnswer": "계절",
        "explanation": "'season'은 '계절'를 뜻합니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Tom: Do you know the meaning of 'spring'? Amy: Yes, it means '봄'.",
        "question": "[듣기 · 2단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'spring'의 뜻은?",
        "options": [
          "봄",
          "계절",
          "여름",
          "가을"
        ],
        "correctIndex": 0,
        "correctAnswer": "봄",
        "explanation": "'spring'은 '봄'를 뜻합니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Hana: Do you know the meaning of 'summer'? Paul: Yes, it means '여름'.",
        "question": "[듣기 · 2단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'summer'의 뜻은?",
        "options": [
          "계절",
          "여름",
          "봄",
          "가을"
        ],
        "correctIndex": 1,
        "correctAnswer": "여름",
        "explanation": "'summer'은 '여름'를 뜻합니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Brian: Do you know the meaning of 'fall'? Minsoo: Yes, it means '가을'.",
        "question": "[듣기 · 2단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'fall'의 뜻은?",
        "options": [
          "여름",
          "봄",
          "계절",
          "가을"
        ],
        "correctIndex": 3,
        "correctAnswer": "가을",
        "explanation": "'fall'은 '가을'를 뜻합니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Amy: Do you know the meaning of 'winter'? Kelly: Yes, it means '겨울'.",
        "question": "[듣기 · 2단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'winter'의 뜻은?",
        "options": [
          "겨울",
          "계절",
          "여름",
          "봄"
        ],
        "correctIndex": 0,
        "correctAnswer": "겨울",
        "explanation": "'winter'은 '겨울'를 뜻합니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Minsoo. Because I can see beautiful flowers. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Minsoo. Because I can see beautiful flowers. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "길을 잃어버려서 헤매고 있다.",
          "아름다운 꽃들을 볼 수 있기 때문이야."
        ],
        "correctIndex": 3,
        "correctAnswer": "아름다운 꽃들을 볼 수 있기 때문이야.",
        "explanation": "'Because I can see beautiful flowers.'(아름다운 꽃들을 볼 수 있기 때문이야.)이 핵심 문장입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kelly. It is warm and sunny today. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kelly. It is warm and sunny today. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "오늘은 따뜻하고 화창해."
        ],
        "correctIndex": 3,
        "correctAnswer": "오늘은 따뜻하고 화창해.",
        "explanation": "'It is warm and sunny today.'(오늘은 따뜻하고 화창해.)이 핵심 문장입니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is David. I like summer because I can swim. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is David. I like summer because I can swim. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "수영을 할 수 있어서 여름을 좋아해.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 1,
        "correctAnswer": "수영을 할 수 있어서 여름을 좋아해.",
        "explanation": "'I like summer because I can swim.'(수영을 할 수 있어서 여름을 좋아해.)이 핵심 문장입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Sarah. Winter is cold and snowy. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Sarah. Winter is cold and snowy. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "겨울은 춥고 눈이 내려."
        ],
        "correctIndex": 3,
        "correctAnswer": "겨울은 춥고 눈이 내려.",
        "explanation": "'Winter is cold and snowy.'(겨울은 춥고 눈이 내려.)이 핵심 문장입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Jisu. Fall has cool and breezy weather. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Jisu. Fall has cool and breezy weather. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Jisu이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "가을은 시원하고 바람 부는 날씨야."
        ],
        "correctIndex": 3,
        "correctAnswer": "가을은 시원하고 바람 부는 날씨야.",
        "explanation": "'Fall has cool and breezy weather.'(가을은 시원하고 바람 부는 날씨야.)이 핵심 문장입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kevin. We can make a big snowman. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kevin. We can make a big snowman. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kevin이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "우리는 큰 눈사람을 만들 수 있어.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 0,
        "correctAnswer": "우리는 큰 눈사람을 만들 수 있어.",
        "explanation": "'We can make a big snowman.'(우리는 큰 눈사람을 만들 수 있어.)이 핵심 문장입니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Emma. I love eating sweet watermelon in summer. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Emma. I love eating sweet watermelon in summer. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Emma이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "나는 여름에 달콤한 수박 먹는 것을 아주 좋아해.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "나는 여름에 달콤한 수박 먹는 것을 아주 좋아해.",
        "explanation": "'I love eating sweet watermelon in summer.'(나는 여름에 달콤한 수박 먹는 것을 아주 좋아해.)이 핵심 문장입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Tom. Why do you like fall so much? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Tom. Why do you like fall so much? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Tom이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "너는 왜 가을을 그렇게 좋아하니?",
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다."
        ],
        "correctIndex": 0,
        "correctAnswer": "너는 왜 가을을 그렇게 좋아하니?",
        "explanation": "'Why do you like fall so much?'(너는 왜 가을을 그렇게 좋아하니?)이 핵심 문장입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Hana. Because the autumn leaves are colorful. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Hana. Because the autumn leaves are colorful. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Hana이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "단풍잎이 알록달록하기 때문이야.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 0,
        "correctAnswer": "단풍잎이 알록달록하기 때문이야.",
        "explanation": "'Because the autumn leaves are colorful.'(단풍잎이 알록달록하기 때문이야.)이 핵심 문장입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Brian. Let's go sledding this winter. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Brian. Let's go sledding this winter. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Brian이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "이번 겨울에 썰매 타러 가자."
        ],
        "correctIndex": 3,
        "correctAnswer": "이번 겨울에 썰매 타러 가자.",
        "explanation": "'Let's go sledding this winter.'(이번 겨울에 썰매 타러 가자.)이 핵심 문장입니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Amy. Spring brings warm weather and green trees. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Amy. Spring brings warm weather and green trees. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Amy이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "봄은 따뜻한 날씨와 초록빛 나무를 가져와.",
          "학교 숙제가 너무 많아서 피곤하다."
        ],
        "correctIndex": 2,
        "correctAnswer": "봄은 따뜻한 날씨와 초록빛 나무를 가져와.",
        "explanation": "'Spring brings warm weather and green trees.'(봄은 따뜻한 날씨와 초록빛 나무를 가져와.)이 핵심 문장입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Paul. The weather is hot, so let's have ice cream. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Paul. The weather is hot, so let's have ice cream. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Paul이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "날씨가 더우니 아이스크림 먹자.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 2,
        "correctAnswer": "날씨가 더우니 아이스크림 먹자.",
        "explanation": "'The weather is hot, so let's have ice cream.'(날씨가 더우니 아이스크림 먹자.)이 핵심 문장입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Minsoo. What do you do in the winter? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Minsoo. What do you do in the winter? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "너는 겨울에 무엇을 하니?",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "너는 겨울에 무엇을 하니?",
        "explanation": "'What do you do in the winter?'(너는 겨울에 무엇을 하니?)이 핵심 문장입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kelly. What is your favorite season? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kelly. What is your favorite season? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "네가 가장 좋아하는 계절은 뭐니?",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 2,
        "correctAnswer": "네가 가장 좋아하는 계절은 뭐니?",
        "explanation": "'What is your favorite season?'(네가 가장 좋아하는 계절은 뭐니?)이 핵심 문장입니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is David. My favorite season is spring. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is David. My favorite season is spring. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "내가 가장 좋아하는 계절은 봄이야.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 1,
        "correctAnswer": "내가 가장 좋아하는 계절은 봄이야.",
        "explanation": "'My favorite season is spring.'(내가 가장 좋아하는 계절은 봄이야.)이 핵심 문장입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Sarah likes winter the most. Because the weather is cold and snowy, and people can make a big snowman with friends.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Sarah likes winter the most. Because the weather is cold and snowy, and people can make a big snowman with friends.\"\n질문: 윗글에서 Sarah이(가) 좋아하는 계절과 그 이유로 알맞은 것은?",
        "options": [
          "겨울 (눈썰매를 탈 수 있어서)",
          "가을 (단풍을 볼 수 있어서)",
          "겨울 (친구들과 큰 눈사람을 만들다)",
          "여름 (수박을 먹을 수 있어서)"
        ],
        "correctIndex": 2,
        "correctAnswer": "겨울 (친구들과 큰 눈사람을 만들다)",
        "explanation": "지문의 'Sarah likes winter the most. Because the weather is cold and snowy, and people can make a big snowman with friends.'에 명시되어 있습니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Jisu likes spring the most. Because the weather is warm and sunny, and people can see beautiful cherry blossoms.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Jisu likes spring the most. Because the weather is warm and sunny, and people can see beautiful cherry blossoms.\"\n질문: 윗글에서 Jisu이(가) 좋아하는 계절과 그 이유로 알맞은 것은?",
        "options": [
          "여름 (수박을 먹을 수 있어서)",
          "겨울 (눈썰매를 탈 수 있어서)",
          "가을 (단풍을 볼 수 있어서)",
          "봄 (아름다운 벚꽃을 보다)"
        ],
        "correctIndex": 3,
        "correctAnswer": "봄 (아름다운 벚꽃을 보다)",
        "explanation": "지문의 'Jisu likes spring the most. Because the weather is warm and sunny, and people can see beautiful cherry blossoms.'에 명시되어 있습니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Kevin likes summer the most. Because the weather is hot and sunny, and people can swim in the cool blue sea.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Kevin likes summer the most. Because the weather is hot and sunny, and people can swim in the cool blue sea.\"\n질문: 윗글에서 Kevin이(가) 좋아하는 계절과 그 이유로 알맞은 것은?",
        "options": [
          "여름 (시원한 푸른 바다에서 수영하다)",
          "겨울 (눈썰매를 탈 수 있어서)",
          "여름 (수박을 먹을 수 있어서)",
          "가을 (단풍을 볼 수 있어서)"
        ],
        "correctIndex": 0,
        "correctAnswer": "여름 (시원한 푸른 바다에서 수영하다)",
        "explanation": "지문의 'Kevin likes summer the most. Because the weather is hot and sunny, and people can swim in the cool blue sea.'에 명시되어 있습니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Emma likes fall the most. Because the weather is cool and breezy, and people can see red and yellow leaves.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Emma likes fall the most. Because the weather is cool and breezy, and people can see red and yellow leaves.\"\n질문: 윗글에서 Emma이(가) 좋아하는 계절과 그 이유로 알맞은 것은?",
        "options": [
          "가을 (단풍을 볼 수 있어서)",
          "여름 (수박을 먹을 수 있어서)",
          "겨울 (눈썰매를 탈 수 있어서)",
          "가을 (빨갛고 노란 단풍잎을 보다)"
        ],
        "correctIndex": 3,
        "correctAnswer": "가을 (빨갛고 노란 단풍잎을 보다)",
        "explanation": "지문의 'Emma likes fall the most. Because the weather is cool and breezy, and people can see red and yellow leaves.'에 명시되어 있습니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Tom likes winter the most. Because the weather is cold and snowy, and people can make a big snowman with friends.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Tom likes winter the most. Because the weather is cold and snowy, and people can make a big snowman with friends.\"\n질문: 윗글에서 Tom이(가) 좋아하는 계절과 그 이유로 알맞은 것은?",
        "options": [
          "겨울 (눈썰매를 탈 수 있어서)",
          "겨울 (친구들과 큰 눈사람을 만들다)",
          "여름 (수박을 먹을 수 있어서)",
          "가을 (단풍을 볼 수 있어서)"
        ],
        "correctIndex": 1,
        "correctAnswer": "겨울 (친구들과 큰 눈사람을 만들다)",
        "explanation": "지문의 'Tom likes winter the most. Because the weather is cold and snowy, and people can make a big snowman with friends.'에 명시되어 있습니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hana likes spring the most. Because the weather is warm and sunny, and people can see beautiful cherry blossoms.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Hana likes spring the most. Because the weather is warm and sunny, and people can see beautiful cherry blossoms.\"\n질문: 윗글에서 Hana이(가) 좋아하는 계절과 그 이유로 알맞은 것은?",
        "options": [
          "가을 (단풍을 볼 수 있어서)",
          "여름 (수박을 먹을 수 있어서)",
          "겨울 (눈썰매를 탈 수 있어서)",
          "봄 (아름다운 벚꽃을 보다)"
        ],
        "correctIndex": 3,
        "correctAnswer": "봄 (아름다운 벚꽃을 보다)",
        "explanation": "지문의 'Hana likes spring the most. Because the weather is warm and sunny, and people can see beautiful cherry blossoms.'에 명시되어 있습니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Brian likes summer the most. Because the weather is hot and sunny, and people can swim in the cool blue sea.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Brian likes summer the most. Because the weather is hot and sunny, and people can swim in the cool blue sea.\"\n질문: 윗글에서 Brian이(가) 좋아하는 계절과 그 이유로 알맞은 것은?",
        "options": [
          "여름 (시원한 푸른 바다에서 수영하다)",
          "가을 (단풍을 볼 수 있어서)",
          "겨울 (눈썰매를 탈 수 있어서)",
          "여름 (수박을 먹을 수 있어서)"
        ],
        "correctIndex": 0,
        "correctAnswer": "여름 (시원한 푸른 바다에서 수영하다)",
        "explanation": "지문의 'Brian likes summer the most. Because the weather is hot and sunny, and people can swim in the cool blue sea.'에 명시되어 있습니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Amy likes fall the most. Because the weather is cool and breezy, and people can see red and yellow leaves.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Amy likes fall the most. Because the weather is cool and breezy, and people can see red and yellow leaves.\"\n질문: 윗글에서 Amy이(가) 좋아하는 계절과 그 이유로 알맞은 것은?",
        "options": [
          "가을 (단풍을 볼 수 있어서)",
          "여름 (수박을 먹을 수 있어서)",
          "겨울 (눈썰매를 탈 수 있어서)",
          "가을 (빨갛고 노란 단풍잎을 보다)"
        ],
        "correctIndex": 3,
        "correctAnswer": "가을 (빨갛고 노란 단풍잎을 보다)",
        "explanation": "지문의 'Amy likes fall the most. Because the weather is cool and breezy, and people can see red and yellow leaves.'에 명시되어 있습니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Paul likes winter the most. Because the weather is cold and snowy, and people can make a big snowman with friends.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Paul likes winter the most. Because the weather is cold and snowy, and people can make a big snowman with friends.\"\n질문: 윗글에서 Paul이(가) 좋아하는 계절과 그 이유로 알맞은 것은?",
        "options": [
          "가을 (단풍을 볼 수 있어서)",
          "여름 (수박을 먹을 수 있어서)",
          "겨울 (친구들과 큰 눈사람을 만들다)",
          "겨울 (눈썰매를 탈 수 있어서)"
        ],
        "correctIndex": 2,
        "correctAnswer": "겨울 (친구들과 큰 눈사람을 만들다)",
        "explanation": "지문의 'Paul likes winter the most. Because the weather is cold and snowy, and people can make a big snowman with friends.'에 명시되어 있습니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Minsoo likes spring the most. Because the weather is warm and sunny, and people can see beautiful cherry blossoms.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Minsoo likes spring the most. Because the weather is warm and sunny, and people can see beautiful cherry blossoms.\"\n질문: 윗글에서 Minsoo이(가) 좋아하는 계절과 그 이유로 알맞은 것은?",
        "options": [
          "가을 (단풍을 볼 수 있어서)",
          "겨울 (눈썰매를 탈 수 있어서)",
          "봄 (아름다운 벚꽃을 보다)",
          "여름 (수박을 먹을 수 있어서)"
        ],
        "correctIndex": 2,
        "correctAnswer": "봄 (아름다운 벚꽃을 보다)",
        "explanation": "지문의 'Minsoo likes spring the most. Because the weather is warm and sunny, and people can see beautiful cherry blossoms.'에 명시되어 있습니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'leaves' is very frequently used. It means '나뭇잎들' in Korean.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'leaves' is very frequently used. It means '나뭇잎들' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'leaves'의 한국어 의미는?",
        "options": [
          "나뭇잎들",
          "봄",
          "여름",
          "계절"
        ],
        "correctIndex": 0,
        "correctAnswer": "나뭇잎들",
        "explanation": "'leaves'은 '나뭇잎들'입니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'season' is very frequently used. It means '계절' in Korean.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'season' is very frequently used. It means '계절' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'season'의 한국어 의미는?",
        "options": [
          "가을",
          "여름",
          "봄",
          "계절"
        ],
        "correctIndex": 3,
        "correctAnswer": "계절",
        "explanation": "'season'은 '계절'입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'spring' is very frequently used. It means '봄' in Korean.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'spring' is very frequently used. It means '봄' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'spring'의 한국어 의미는?",
        "options": [
          "여름",
          "가을",
          "봄",
          "계절"
        ],
        "correctIndex": 2,
        "correctAnswer": "봄",
        "explanation": "'spring'은 '봄'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'summer' is very frequently used. It means '여름' in Korean.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'summer' is very frequently used. It means '여름' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'summer'의 한국어 의미는?",
        "options": [
          "봄",
          "가을",
          "계절",
          "여름"
        ],
        "correctIndex": 3,
        "correctAnswer": "여름",
        "explanation": "'summer'은 '여름'입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'fall' is very frequently used. It means '가을' in Korean.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'fall' is very frequently used. It means '가을' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'fall'의 한국어 의미는?",
        "options": [
          "가을",
          "여름",
          "계절",
          "봄"
        ],
        "correctIndex": 0,
        "correctAnswer": "가을",
        "explanation": "'fall'은 '가을'입니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'winter' is very frequently used. It means '겨울' in Korean.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'winter' is very frequently used. It means '겨울' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'winter'의 한국어 의미는?",
        "options": [
          "봄",
          "여름",
          "겨울",
          "계절"
        ],
        "correctIndex": 2,
        "correctAnswer": "겨울",
        "explanation": "'winter'은 '겨울'입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'weather' is very frequently used. It means '날씨' in Korean.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'weather' is very frequently used. It means '날씨' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'weather'의 한국어 의미는?",
        "options": [
          "봄",
          "계절",
          "날씨",
          "여름"
        ],
        "correctIndex": 2,
        "correctAnswer": "날씨",
        "explanation": "'weather'은 '날씨'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'because' is very frequently used. It means '~때문에' in Korean.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'because' is very frequently used. It means '~때문에' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'because'의 한국어 의미는?",
        "options": [
          "여름",
          "봄",
          "~때문에",
          "계절"
        ],
        "correctIndex": 2,
        "correctAnswer": "~때문에",
        "explanation": "'because'은 '~때문에'입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'flower' is very frequently used. It means '꽃' in Korean.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'flower' is very frequently used. It means '꽃' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'flower'의 한국어 의미는?",
        "options": [
          "꽃",
          "계절",
          "여름",
          "봄"
        ],
        "correctIndex": 0,
        "correctAnswer": "꽃",
        "explanation": "'flower'은 '꽃'입니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'snowman' is very frequently used. It means '눈사람' in Korean.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'snowman' is very frequently used. It means '눈사람' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'snowman'의 한국어 의미는?",
        "options": [
          "봄",
          "계절",
          "눈사람",
          "여름"
        ],
        "correctIndex": 2,
        "correctAnswer": "눈사람",
        "explanation": "'snowman'은 '눈사람'입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 2단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"계절\" (단어 첫 글자: s, 총 6글자)",
        "correctAnswer": "season",
        "explanation": "'계절'에 해당하는 영어 단어는 'season'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 2단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"봄\" (단어 첫 글자: s, 총 6글자)",
        "correctAnswer": "spring",
        "explanation": "'봄'에 해당하는 영어 단어는 'spring'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 2단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"여름\" (단어 첫 글자: s, 총 6글자)",
        "correctAnswer": "summer",
        "explanation": "'여름'에 해당하는 영어 단어는 'summer'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 2단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"가을\" (단어 첫 글자: f, 총 4글자)",
        "correctAnswer": "fall",
        "explanation": "'가을'에 해당하는 영어 단어는 'fall'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 2단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"겨울\" (단어 첫 글자: w, 총 6글자)",
        "correctAnswer": "winter",
        "explanation": "'겨울'에 해당하는 영어 단어는 'winter'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 2단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"날씨\" (단어 첫 글자: w, 총 7글자)",
        "correctAnswer": "weather",
        "explanation": "'날씨'에 해당하는 영어 단어는 'weather'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 2단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"~때문에\" (단어 첫 글자: b, 총 7글자)",
        "correctAnswer": "because",
        "explanation": "'~때문에'에 해당하는 영어 단어는 'because'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 2단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"꽃\" (단어 첫 글자: f, 총 6글자)",
        "correctAnswer": "flower",
        "explanation": "'꽃'에 해당하는 영어 단어는 'flower'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 2단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"눈사람\" (단어 첫 글자: s, 총 7글자)",
        "correctAnswer": "snowman",
        "explanation": "'눈사람'에 해당하는 영어 단어는 'snowman'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 2단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"따뜻한\" (단어 첫 글자: w, 총 4글자)",
        "correctAnswer": "warm",
        "explanation": "'따뜻한'에 해당하는 영어 단어는 'warm'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 2단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"시원한\" (단어 첫 글자: c, 총 4글자)",
        "correctAnswer": "cool",
        "explanation": "'시원한'에 해당하는 영어 단어는 'cool'입니다."
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 2단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"화창한\" (단어 첫 글자: s, 총 5글자)",
        "correctAnswer": "sunny",
        "explanation": "'화창한'에 해당하는 영어 단어는 'sunny'입니다."
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 2단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"눈 내리는\" (단어 첫 글자: s, 총 5글자)",
        "correctAnswer": "snowy",
        "explanation": "'눈 내리는'에 해당하는 영어 단어는 'snowy'입니다."
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 2단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"해변\" (단어 첫 글자: b, 총 5글자)",
        "correctAnswer": "beach",
        "explanation": "'해변'에 해당하는 영어 단어는 'beach'입니다."
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 2단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"나뭇잎들\" (단어 첫 글자: l, 총 6글자)",
        "correctAnswer": "leaves",
        "explanation": "'나뭇잎들'에 해당하는 영어 단어는 'leaves'입니다."
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"네가 가장 좋아하는 계절은 뭐니?\"",
        "chips": [
          "What",
          "is",
          "your",
          "favorite",
          "season?"
        ],
        "correctAnswer": "What is your favorite season?",
        "explanation": "'What is your favorite season?'은 '네가 가장 좋아하는 계절은 뭐니?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"내가 가장 좋아하는 계절은 봄이야.\"",
        "chips": [
          "My",
          "favorite",
          "season",
          "is",
          "spring."
        ],
        "correctAnswer": "My favorite season is spring.",
        "explanation": "'My favorite season is spring.'은 '내가 가장 좋아하는 계절은 봄이야.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"아름다운 꽃들을 볼 수 있기 때문이야.\"",
        "chips": [
          "Because",
          "I",
          "can",
          "see",
          "beautiful",
          "flowers."
        ],
        "correctAnswer": "Because I can see beautiful flowers.",
        "explanation": "'Because I can see beautiful flowers.'은 '아름다운 꽃들을 볼 수 있기 때문이야.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"오늘은 따뜻하고 화창해.\"",
        "chips": [
          "It",
          "is",
          "warm",
          "and",
          "sunny",
          "today."
        ],
        "correctAnswer": "It is warm and sunny today.",
        "explanation": "'It is warm and sunny today.'은 '오늘은 따뜻하고 화창해.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"수영을 할 수 있어서 여름을 좋아해.\"",
        "chips": [
          "I",
          "like",
          "summer",
          "because",
          "I",
          "can",
          "swim."
        ],
        "correctAnswer": "I like summer because I can swim.",
        "explanation": "'I like summer because I can swim.'은 '수영을 할 수 있어서 여름을 좋아해.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"겨울은 춥고 눈이 내려.\"",
        "chips": [
          "Winter",
          "is",
          "cold",
          "and",
          "snowy."
        ],
        "correctAnswer": "Winter is cold and snowy.",
        "explanation": "'Winter is cold and snowy.'은 '겨울은 춥고 눈이 내려.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"가을은 시원하고 바람 부는 날씨야.\"",
        "chips": [
          "Fall",
          "has",
          "cool",
          "and",
          "breezy",
          "weather."
        ],
        "correctAnswer": "Fall has cool and breezy weather.",
        "explanation": "'Fall has cool and breezy weather.'은 '가을은 시원하고 바람 부는 날씨야.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"우리는 큰 눈사람을 만들 수 있어.\"",
        "chips": [
          "We",
          "can",
          "make",
          "a",
          "big",
          "snowman."
        ],
        "correctAnswer": "We can make a big snowman.",
        "explanation": "'We can make a big snowman.'은 '우리는 큰 눈사람을 만들 수 있어.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"나는 여름에 달콤한 수박 먹는 것을 아주 좋아해.\"",
        "chips": [
          "I",
          "love",
          "eating",
          "sweet",
          "watermelon",
          "in",
          "summer."
        ],
        "correctAnswer": "I love eating sweet watermelon in summer.",
        "explanation": "'I love eating sweet watermelon in summer.'은 '나는 여름에 달콤한 수박 먹는 것을 아주 좋아해.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"너는 왜 가을을 그렇게 좋아하니?\"",
        "chips": [
          "Why",
          "do",
          "you",
          "like",
          "fall",
          "so",
          "much?"
        ],
        "correctAnswer": "Why do you like fall so much?",
        "explanation": "'Why do you like fall so much?'은 '너는 왜 가을을 그렇게 좋아하니?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 96,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"단풍잎이 알록달록하기 때문이야.\"",
        "chips": [
          "Because",
          "the",
          "autumn",
          "leaves",
          "are",
          "colorful."
        ],
        "correctAnswer": "Because the autumn leaves are colorful.",
        "explanation": "'Because the autumn leaves are colorful.'은 '단풍잎이 알록달록하기 때문이야.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 97,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"이번 겨울에 썰매 타러 가자.\"",
        "chips": [
          "Let's",
          "go",
          "sledding",
          "this",
          "winter."
        ],
        "correctAnswer": "Let's go sledding this winter.",
        "explanation": "'Let's go sledding this winter.'은 '이번 겨울에 썰매 타러 가자.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 98,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"봄은 따뜻한 날씨와 초록빛 나무를 가져와.\"",
        "chips": [
          "Spring",
          "brings",
          "warm",
          "weather",
          "and",
          "green",
          "trees."
        ],
        "correctAnswer": "Spring brings warm weather and green trees.",
        "explanation": "'Spring brings warm weather and green trees.'은 '봄은 따뜻한 날씨와 초록빛 나무를 가져와.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 99,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"날씨가 더우니 아이스크림 먹자.\"",
        "chips": [
          "The",
          "weather",
          "is",
          "hot",
          "so",
          "let's",
          "have",
          "ice",
          "cream."
        ],
        "correctAnswer": "The weather is hot, so let's have ice cream.",
        "explanation": "'The weather is hot, so let's have ice cream.'은 '날씨가 더우니 아이스크림 먹자.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[최종 골든벨 문제] 다음 우리말에 맞도록 주어진 단어 카드를 순서대로 바르게 배열하세요.\n우리말: \"너는 겨울에 무엇을 하니?\"",
        "chips": [
          "What",
          "do",
          "you",
          "do",
          "in",
          "the",
          "winter?"
        ],
        "correctAnswer": "What do you do in the winter?",
        "explanation": "'What do you do in the winter?'은 '너는 겨울에 무엇을 하니?'을 의미하는 핵심 문장입니다."
      }
    ]
  },
  "6G_L03": {
    "name": "3단원: 방학 계획과 미래 활동 (What will you do this summer? / I will go camping)",
    "grade": 6,
    "theme": "Vacation Plans & Future Activities",
    "totalQuestions": 100,
    "questions": [
      {
        "id": 1,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Minsoo: What will you do this summer vacation? Sarah: I will go camping in the deep green forest with my family.",
        "question": "[듣기 · 3단원] 대화를 듣고, Sarah의 여름방학 계획과 동행자로 알맞은 것은?",
        "options": [
          "집에서 컴퓨터 게임하기",
          "깊고 푸른 숲으로 캠핑 가기 (가족과 함께)",
          "도서관에서 자습하기",
          "친구들과 놀이공원 가기"
        ],
        "correctIndex": 1,
        "correctAnswer": "깊고 푸른 숲으로 캠핑 가기 (가족과 함께)",
        "explanation": "'I will go camping in the deep green forest'입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kelly: What will you do this summer vacation? Jisu: I will visit my grandparents in Busan with my brother.",
        "question": "[듣기 · 3단원] 대화를 듣고, Jisu의 여름방학 계획과 동행자로 알맞은 것은?",
        "options": [
          "친구들과 놀이공원 가기",
          "도서관에서 자습하기",
          "집에서 컴퓨터 게임하기",
          "부산의 조부모님 댁 방문하기 (남동생과 함께)"
        ],
        "correctIndex": 3,
        "correctAnswer": "부산의 조부모님 댁 방문하기 (남동생과 함께)",
        "explanation": "'I will visit my grandparents in Busan'입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "David: What will you do this summer vacation? Kevin: I will read ten English storybooks by myself.",
        "question": "[듣기 · 3단원] 대화를 듣고, Kevin의 여름방학 계획과 동행자로 알맞은 것은?",
        "options": [
          "집에서 컴퓨터 게임하기",
          "도서관에서 자습하기",
          "영어 동화책 10권 읽기 (스스로)",
          "친구들과 놀이공원 가기"
        ],
        "correctIndex": 2,
        "correctAnswer": "영어 동화책 10권 읽기 (스스로)",
        "explanation": "'I will read ten English storybooks'입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Sarah: What will you do this summer vacation? Emma: I will join a cooking class for kids with my best friend.",
        "question": "[듣기 · 3단원] 대화를 듣고, Emma의 여름방학 계획과 동행자로 알맞은 것은?",
        "options": [
          "도서관에서 자습하기",
          "집에서 컴퓨터 게임하기",
          "어린이 요리 교실에 참가하기 (단짝 친구와 함께)",
          "친구들과 놀이공원 가기"
        ],
        "correctIndex": 2,
        "correctAnswer": "어린이 요리 교실에 참가하기 (단짝 친구와 함께)",
        "explanation": "'I will join a cooking class for kids'입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Jisu: What will you do this summer vacation? Tom: I will learn how to play the ukulele with my cousin.",
        "question": "[듣기 · 3단원] 대화를 듣고, Tom의 여름방학 계획과 동행자로 알맞은 것은?",
        "options": [
          "우쿨렐레 연주법 배우기 (사촌과 함께)",
          "집에서 컴퓨터 게임하기",
          "도서관에서 자습하기",
          "친구들과 놀이공원 가기"
        ],
        "correctIndex": 0,
        "correctAnswer": "우쿨렐레 연주법 배우기 (사촌과 함께)",
        "explanation": "'I will learn how to play the ukulele'입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kevin: What will you do this summer vacation? Hana: I will travel to Jeju Island by airplane with my parents.",
        "question": "[듣기 · 3단원] 대화를 듣고, Hana의 여름방학 계획과 동행자로 알맞은 것은?",
        "options": [
          "비행기 타고 제주도 여행하기 (부모님과 함께)",
          "친구들과 놀이공원 가기",
          "집에서 컴퓨터 게임하기",
          "도서관에서 자습하기"
        ],
        "correctIndex": 0,
        "correctAnswer": "비행기 타고 제주도 여행하기 (부모님과 함께)",
        "explanation": "'I will travel to Jeju Island by airplane'입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Emma: What will you do this summer vacation? Brian: I will go camping in the deep green forest with my family.",
        "question": "[듣기 · 3단원] 대화를 듣고, Brian의 여름방학 계획과 동행자로 알맞은 것은?",
        "options": [
          "친구들과 놀이공원 가기",
          "도서관에서 자습하기",
          "집에서 컴퓨터 게임하기",
          "깊고 푸른 숲으로 캠핑 가기 (가족과 함께)"
        ],
        "correctIndex": 3,
        "correctAnswer": "깊고 푸른 숲으로 캠핑 가기 (가족과 함께)",
        "explanation": "'I will go camping in the deep green forest'입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Tom: What will you do this summer vacation? Amy: I will visit my grandparents in Busan with my brother.",
        "question": "[듣기 · 3단원] 대화를 듣고, Amy의 여름방학 계획과 동행자로 알맞은 것은?",
        "options": [
          "도서관에서 자습하기",
          "집에서 컴퓨터 게임하기",
          "친구들과 놀이공원 가기",
          "부산의 조부모님 댁 방문하기 (남동생과 함께)"
        ],
        "correctIndex": 3,
        "correctAnswer": "부산의 조부모님 댁 방문하기 (남동생과 함께)",
        "explanation": "'I will visit my grandparents in Busan'입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Hana: What will you do this summer vacation? Paul: I will read ten English storybooks by myself.",
        "question": "[듣기 · 3단원] 대화를 듣고, Paul의 여름방학 계획과 동행자로 알맞은 것은?",
        "options": [
          "영어 동화책 10권 읽기 (스스로)",
          "집에서 컴퓨터 게임하기",
          "도서관에서 자습하기",
          "친구들과 놀이공원 가기"
        ],
        "correctIndex": 0,
        "correctAnswer": "영어 동화책 10권 읽기 (스스로)",
        "explanation": "'I will read ten English storybooks'입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Brian: What will you do this summer vacation? Minsoo: I will join a cooking class for kids with my best friend.",
        "question": "[듣기 · 3단원] 대화를 듣고, Minsoo의 여름방학 계획과 동행자로 알맞은 것은?",
        "options": [
          "친구들과 놀이공원 가기",
          "도서관에서 자습하기",
          "집에서 컴퓨터 게임하기",
          "어린이 요리 교실에 참가하기 (단짝 친구와 함께)"
        ],
        "correctIndex": 3,
        "correctAnswer": "어린이 요리 교실에 참가하기 (단짝 친구와 함께)",
        "explanation": "'I will join a cooking class for kids'입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Amy: What will you do this summer vacation? Kelly: I will learn how to play the ukulele with my cousin.",
        "question": "[듣기 · 3단원] 대화를 듣고, Kelly의 여름방학 계획과 동행자로 알맞은 것은?",
        "options": [
          "도서관에서 자습하기",
          "집에서 컴퓨터 게임하기",
          "우쿨렐레 연주법 배우기 (사촌과 함께)",
          "친구들과 놀이공원 가기"
        ],
        "correctIndex": 2,
        "correctAnswer": "우쿨렐레 연주법 배우기 (사촌과 함께)",
        "explanation": "'I will learn how to play the ukulele'입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Paul: What will you do this summer vacation? David: I will travel to Jeju Island by airplane with my parents.",
        "question": "[듣기 · 3단원] 대화를 듣고, David의 여름방학 계획과 동행자로 알맞은 것은?",
        "options": [
          "비행기 타고 제주도 여행하기 (부모님과 함께)",
          "집에서 컴퓨터 게임하기",
          "친구들과 놀이공원 가기",
          "도서관에서 자습하기"
        ],
        "correctIndex": 0,
        "correctAnswer": "비행기 타고 제주도 여행하기 (부모님과 함께)",
        "explanation": "'I will travel to Jeju Island by airplane'입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: They will practice soccer every day. Sarah: I completely agree with you!",
        "question": "[듣기 · 3단원] 대화에서 Minsoo이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그들은 매일 축구를 연습할 거야.",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "그들은 매일 축구를 연습할 거야.",
        "explanation": "'They will practice soccer every day.'은 '그들은 매일 축구를 연습할 거야.'을 의미합니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kelly: I am going to write a reading journal. Jisu: I completely agree with you!",
        "question": "[듣기 · 3단원] 대화에서 Kelly이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "나는 독서 일기를 쓸 예정이야."
        ],
        "correctIndex": 3,
        "correctAnswer": "나는 독서 일기를 쓸 예정이야.",
        "explanation": "'I am going to write a reading journal.'은 '나는 독서 일기를 쓸 예정이야.'을 의미합니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "David: It will be an exciting summer vacation. Kevin: I completely agree with you!",
        "question": "[듣기 · 3단원] 대화에서 David이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "신나는 여름방학이 될 거야.",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "신나는 여름방학이 될 거야.",
        "explanation": "'It will be an exciting summer vacation.'은 '신나는 여름방학이 될 거야.'을 의미합니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Sarah: What will you do this summer? Emma: I completely agree with you!",
        "question": "[듣기 · 3단원] 대화에서 Sarah이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "나는 잘 모르겠어.",
          "이번 여름에 무엇을 할 거니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "이번 여름에 무엇을 할 거니?",
        "explanation": "'What will you do this summer?'은 '이번 여름에 무엇을 할 거니?'을 의미합니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Jisu: I will go camping in the forest. Tom: I completely agree with you!",
        "question": "[듣기 · 3단원] 대화에서 Jisu이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "숲으로 캠핑을 갈 거야.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 2,
        "correctAnswer": "숲으로 캠핑을 갈 거야.",
        "explanation": "'I will go camping in the forest.'은 '숲으로 캠핑을 갈 거야.'을 의미합니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kevin: I plan to visit my grandparents. Hana: I completely agree with you!",
        "question": "[듣기 · 3단원] 대화에서 Kevin이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "조부모님 댁을 방문할 계획이야.",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "조부모님 댁을 방문할 계획이야.",
        "explanation": "'I plan to visit my grandparents.'은 '조부모님 댁을 방문할 계획이야.'을 의미합니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Emma: We are going to sleep in a tent. Brian: I completely agree with you!",
        "question": "[듣기 · 3단원] 대화에서 Emma이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "나는 잘 모르겠어.",
          "우리는 텐트에서 잘 거야."
        ],
        "correctIndex": 3,
        "correctAnswer": "우리는 텐트에서 잘 거야.",
        "explanation": "'We are going to sleep in a tent.'은 '우리는 텐트에서 잘 거야.'을 의미합니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Tom: I will read ten English books. Amy: I completely agree with you!",
        "question": "[듣기 · 3단원] 대화에서 Tom이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음에 다시 이야기하자.",
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야.",
          "나는 영어 책 열 권을 읽을 거야."
        ],
        "correctIndex": 3,
        "correctAnswer": "나는 영어 책 열 권을 읽을 거야.",
        "explanation": "'I will read ten English books.'은 '나는 영어 책 열 권을 읽을 거야.'을 의미합니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Hana: She will travel to Jeju-do by airplane. Paul: I completely agree with you!",
        "question": "[듣기 · 3단원] 대화에서 Hana이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "그녀는 비행기로 제주도를 여행할 거야."
        ],
        "correctIndex": 3,
        "correctAnswer": "그녀는 비행기로 제주도를 여행할 거야.",
        "explanation": "'She will travel to Jeju-do by airplane.'은 '그녀는 비행기로 제주도를 여행할 거야.'을 의미합니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Brian: What are your plans for vacation? Minsoo: I completely agree with you!",
        "question": "[듣기 · 3단원] 대화에서 Brian이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야.",
          "방학 계획이 어떻게 되니?",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 2,
        "correctAnswer": "방학 계획이 어떻게 되니?",
        "explanation": "'What are your plans for vacation?'은 '방학 계획이 어떻게 되니?'을 의미합니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Amy: I will learn how to bake cookies. Kelly: I completely agree with you!",
        "question": "[듣기 · 3단원] 대화에서 Amy이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 쿠키 굽는 법을 배울 거야.",
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 0,
        "correctAnswer": "나는 쿠키 굽는 법을 배울 거야.",
        "explanation": "'I will learn how to bake cookies.'은 '나는 쿠키 굽는 법을 배울 거야.'을 의미합니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Paul: He plans to swim at the ocean. David: I completely agree with you!",
        "question": "[듣기 · 3단원] 대화에서 Paul이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그는 바다에서 수영할 계획이야.",
          "다음에 다시 이야기하자.",
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 0,
        "correctAnswer": "그는 바다에서 수영할 계획이야.",
        "explanation": "'He plans to swim at the ocean.'은 '그는 바다에서 수영할 계획이야.'을 의미합니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Do you know the meaning of 'journal'? Sarah: Yes, it means '일기, 기록'.",
        "question": "[듣기 · 3단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'journal'의 뜻은?",
        "options": [
          "캠핑",
          "방학, 휴가",
          "일기, 기록",
          "여름"
        ],
        "correctIndex": 2,
        "correctAnswer": "일기, 기록",
        "explanation": "'journal'은 '일기, 기록'를 뜻합니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kelly: Do you know the meaning of 'future'? Jisu: Yes, it means '미래'.",
        "question": "[듣기 · 3단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'future'의 뜻은?",
        "options": [
          "캠핑",
          "여름",
          "방학, 휴가",
          "미래"
        ],
        "correctIndex": 3,
        "correctAnswer": "미래",
        "explanation": "'future'은 '미래'를 뜻합니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "David: Do you know the meaning of 'tomorrow'? Kevin: Yes, it means '내일'.",
        "question": "[듣기 · 3단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'tomorrow'의 뜻은?",
        "options": [
          "내일",
          "방학, 휴가",
          "여름",
          "캠핑"
        ],
        "correctIndex": 0,
        "correctAnswer": "내일",
        "explanation": "'tomorrow'은 '내일'를 뜻합니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Sarah: Do you know the meaning of 'visit'? Emma: Yes, it means '방문하다'.",
        "question": "[듣기 · 3단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'visit'의 뜻은?",
        "options": [
          "캠핑",
          "여름",
          "방학, 휴가",
          "방문하다"
        ],
        "correctIndex": 3,
        "correctAnswer": "방문하다",
        "explanation": "'visit'은 '방문하다'를 뜻합니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Jisu: Do you know the meaning of 'island'? Tom: Yes, it means '섬'.",
        "question": "[듣기 · 3단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'island'의 뜻은?",
        "options": [
          "캠핑",
          "섬",
          "방학, 휴가",
          "여름"
        ],
        "correctIndex": 1,
        "correctAnswer": "섬",
        "explanation": "'island'은 '섬'를 뜻합니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kevin: Do you know the meaning of 'learn'? Hana: Yes, it means '배우다'.",
        "question": "[듣기 · 3단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'learn'의 뜻은?",
        "options": [
          "캠핑",
          "방학, 휴가",
          "여름",
          "배우다"
        ],
        "correctIndex": 3,
        "correctAnswer": "배우다",
        "explanation": "'learn'은 '배우다'를 뜻합니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Emma: Do you know the meaning of 'vacation'? Brian: Yes, it means '방학, 휴가'.",
        "question": "[듣기 · 3단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'vacation'의 뜻은?",
        "options": [
          "방학, 휴가",
          "여름",
          "숲",
          "캠핑"
        ],
        "correctIndex": 0,
        "correctAnswer": "방학, 휴가",
        "explanation": "'vacation'은 '방학, 휴가'를 뜻합니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Tom: Do you know the meaning of 'summer'? Amy: Yes, it means '여름'.",
        "question": "[듣기 · 3단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'summer'의 뜻은?",
        "options": [
          "여름",
          "방학, 휴가",
          "캠핑",
          "숲"
        ],
        "correctIndex": 0,
        "correctAnswer": "여름",
        "explanation": "'summer'은 '여름'를 뜻합니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Hana: Do you know the meaning of 'camping'? Paul: Yes, it means '캠핑'.",
        "question": "[듣기 · 3단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'camping'의 뜻은?",
        "options": [
          "방학, 휴가",
          "캠핑",
          "숲",
          "여름"
        ],
        "correctIndex": 1,
        "correctAnswer": "캠핑",
        "explanation": "'camping'은 '캠핑'를 뜻합니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Brian: Do you know the meaning of 'forest'? Minsoo: Yes, it means '숲'.",
        "question": "[듣기 · 3단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'forest'의 뜻은?",
        "options": [
          "방학, 휴가",
          "캠핑",
          "여름",
          "숲"
        ],
        "correctIndex": 3,
        "correctAnswer": "숲",
        "explanation": "'forest'은 '숲'를 뜻합니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Amy: Do you know the meaning of 'tent'? Kelly: Yes, it means '텐트'.",
        "question": "[듣기 · 3단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'tent'의 뜻은?",
        "options": [
          "캠핑",
          "여름",
          "방학, 휴가",
          "텐트"
        ],
        "correctIndex": 3,
        "correctAnswer": "텐트",
        "explanation": "'tent'은 '텐트'를 뜻합니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Minsoo. I plan to visit my grandparents. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Minsoo. I plan to visit my grandparents. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "길을 잃어버려서 헤매고 있다.",
          "조부모님 댁을 방문할 계획이야."
        ],
        "correctIndex": 3,
        "correctAnswer": "조부모님 댁을 방문할 계획이야.",
        "explanation": "'I plan to visit my grandparents.'(조부모님 댁을 방문할 계획이야.)이 핵심 문장입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kelly. We are going to sleep in a tent. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kelly. We are going to sleep in a tent. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "우리는 텐트에서 잘 거야."
        ],
        "correctIndex": 3,
        "correctAnswer": "우리는 텐트에서 잘 거야.",
        "explanation": "'We are going to sleep in a tent.'(우리는 텐트에서 잘 거야.)이 핵심 문장입니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is David. I will read ten English books. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is David. I will read ten English books. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "나는 영어 책 열 권을 읽을 거야.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 0,
        "correctAnswer": "나는 영어 책 열 권을 읽을 거야.",
        "explanation": "'I will read ten English books.'(나는 영어 책 열 권을 읽을 거야.)이 핵심 문장입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Sarah. She will travel to Jeju-do by airplane. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Sarah. She will travel to Jeju-do by airplane. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "그녀는 비행기로 제주도를 여행할 거야.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 2,
        "correctAnswer": "그녀는 비행기로 제주도를 여행할 거야.",
        "explanation": "'She will travel to Jeju-do by airplane.'(그녀는 비행기로 제주도를 여행할 거야.)이 핵심 문장입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Jisu. What are your plans for vacation? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Jisu. What are your plans for vacation? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Jisu이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "학교 숙제가 너무 많아서 피곤하다.",
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "방학 계획이 어떻게 되니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "방학 계획이 어떻게 되니?",
        "explanation": "'What are your plans for vacation?'(방학 계획이 어떻게 되니?)이 핵심 문장입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kevin. I will learn how to bake cookies. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kevin. I will learn how to bake cookies. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kevin이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "나는 쿠키 굽는 법을 배울 거야."
        ],
        "correctIndex": 3,
        "correctAnswer": "나는 쿠키 굽는 법을 배울 거야.",
        "explanation": "'I will learn how to bake cookies.'(나는 쿠키 굽는 법을 배울 거야.)이 핵심 문장입니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Emma. He plans to swim at the ocean. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Emma. He plans to swim at the ocean. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Emma이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "그는 바다에서 수영할 계획이야.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "그는 바다에서 수영할 계획이야.",
        "explanation": "'He plans to swim at the ocean.'(그는 바다에서 수영할 계획이야.)이 핵심 문장입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Tom. We will make great memories together. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Tom. We will make great memories together. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Tom이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "학교 숙제가 너무 많아서 피곤하다.",
          "길을 잃어버려서 헤매고 있다.",
          "우리는 함께 멋진 추억을 만들 거야.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 2,
        "correctAnswer": "우리는 함께 멋진 추억을 만들 거야.",
        "explanation": "'We will make great memories together.'(우리는 함께 멋진 추억을 만들 거야.)이 핵심 문장입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Hana. Are you going to stay at home? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Hana. Are you going to stay at home? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Hana이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "너는 집에 머무를 예정이니?",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 2,
        "correctAnswer": "너는 집에 머무를 예정이니?",
        "explanation": "'Are you going to stay at home?'(너는 집에 머무를 예정이니?)이 핵심 문장입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Brian. I will climb Hallasan with my dad. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Brian. I will climb Hallasan with my dad. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Brian이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "나는 아빠와 한라산에 오를 거야.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "나는 아빠와 한라산에 오를 거야.",
        "explanation": "'I will climb Hallasan with my dad.'(나는 아빠와 한라산에 오를 거야.)이 핵심 문장입니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Amy. They will practice soccer every day. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Amy. They will practice soccer every day. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Amy이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "그들은 매일 축구를 연습할 거야."
        ],
        "correctIndex": 3,
        "correctAnswer": "그들은 매일 축구를 연습할 거야.",
        "explanation": "'They will practice soccer every day.'(그들은 매일 축구를 연습할 거야.)이 핵심 문장입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Paul. I am going to write a reading journal. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Paul. I am going to write a reading journal. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Paul이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "나는 독서 일기를 쓸 예정이야."
        ],
        "correctIndex": 3,
        "correctAnswer": "나는 독서 일기를 쓸 예정이야.",
        "explanation": "'I am going to write a reading journal.'(나는 독서 일기를 쓸 예정이야.)이 핵심 문장입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Minsoo. It will be an exciting summer vacation. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Minsoo. It will be an exciting summer vacation. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "신나는 여름방학이 될 거야.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 0,
        "correctAnswer": "신나는 여름방학이 될 거야.",
        "explanation": "'It will be an exciting summer vacation.'(신나는 여름방학이 될 거야.)이 핵심 문장입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kelly. What will you do this summer? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kelly. What will you do this summer? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "이번 여름에 무엇을 할 거니?",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 1,
        "correctAnswer": "이번 여름에 무엇을 할 거니?",
        "explanation": "'What will you do this summer?'(이번 여름에 무엇을 할 거니?)이 핵심 문장입니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is David. I will go camping in the forest. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is David. I will go camping in the forest. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "숲으로 캠핑을 갈 거야.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 2,
        "correctAnswer": "숲으로 캠핑을 갈 거야.",
        "explanation": "'I will go camping in the forest.'(숲으로 캠핑을 갈 거야.)이 핵심 문장입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "During this summer vacation, Sarah will join a cooking class for kids. They are going to bake sweet chocolate cookies with my best friend.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"During this summer vacation, Sarah will join a cooking class for kids. They are going to bake sweet chocolate cookies with my best friend.\"\n질문: 윗글에 나타난 Sarah의 방학 세부 계획으로 일치하는 것은?",
        "options": [
          "하루 종일 게임만 하기",
          "아무 계획 없이 집에 머물기",
          "어린이 요리 교실에 참가하기 및 달콤한 초콜릿 쿠키 굽기",
          "도서관 책 정리하기"
        ],
        "correctIndex": 2,
        "correctAnswer": "어린이 요리 교실에 참가하기 및 달콤한 초콜릿 쿠키 굽기",
        "explanation": "지문의 'During this summer vacation, Sarah will join a cooking class for kids. They are going to bake sweet chocolate cookies with my best friend.'에 명시되어 있습니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "During this summer vacation, Jisu will learn how to play the ukulele. They are going to play cheerful folk songs with my cousin.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"During this summer vacation, Jisu will learn how to play the ukulele. They are going to play cheerful folk songs with my cousin.\"\n질문: 윗글에 나타난 Jisu의 방학 세부 계획으로 일치하는 것은?",
        "options": [
          "하루 종일 게임만 하기",
          "우쿨렐레 연주법 배우기 및 신나는 포크송 연주하기",
          "도서관 책 정리하기",
          "아무 계획 없이 집에 머물기"
        ],
        "correctIndex": 1,
        "correctAnswer": "우쿨렐레 연주법 배우기 및 신나는 포크송 연주하기",
        "explanation": "지문의 'During this summer vacation, Jisu will learn how to play the ukulele. They are going to play cheerful folk songs with my cousin.'에 명시되어 있습니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "During this summer vacation, Kevin will travel to Jeju Island by airplane. They are going to climb the green Hallasan mountain with my parents.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"During this summer vacation, Kevin will travel to Jeju Island by airplane. They are going to climb the green Hallasan mountain with my parents.\"\n질문: 윗글에 나타난 Kevin의 방학 세부 계획으로 일치하는 것은?",
        "options": [
          "도서관 책 정리하기",
          "하루 종일 게임만 하기",
          "아무 계획 없이 집에 머물기",
          "비행기 타고 제주도 여행하기 및 초록빛 한라산 등반하기"
        ],
        "correctIndex": 3,
        "correctAnswer": "비행기 타고 제주도 여행하기 및 초록빛 한라산 등반하기",
        "explanation": "지문의 'During this summer vacation, Kevin will travel to Jeju Island by airplane. They are going to climb the green Hallasan mountain with my parents.'에 명시되어 있습니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "During this summer vacation, Emma will go camping in the deep green forest. They are going to sleep in a comfortable tent with my family.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"During this summer vacation, Emma will go camping in the deep green forest. They are going to sleep in a comfortable tent with my family.\"\n질문: 윗글에 나타난 Emma의 방학 세부 계획으로 일치하는 것은?",
        "options": [
          "깊고 푸른 숲으로 캠핑 가기 및 편안한 텐트에서 자기",
          "하루 종일 게임만 하기",
          "아무 계획 없이 집에 머물기",
          "도서관 책 정리하기"
        ],
        "correctIndex": 0,
        "correctAnswer": "깊고 푸른 숲으로 캠핑 가기 및 편안한 텐트에서 자기",
        "explanation": "지문의 'During this summer vacation, Emma will go camping in the deep green forest. They are going to sleep in a comfortable tent with my family.'에 명시되어 있습니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "During this summer vacation, Tom will visit my grandparents in Busan. They are going to swim at Haeundae beach with my brother.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"During this summer vacation, Tom will visit my grandparents in Busan. They are going to swim at Haeundae beach with my brother.\"\n질문: 윗글에 나타난 Tom의 방학 세부 계획으로 일치하는 것은?",
        "options": [
          "부산의 조부모님 댁 방문하기 및 해운대 해변에서 수영하기",
          "하루 종일 게임만 하기",
          "도서관 책 정리하기",
          "아무 계획 없이 집에 머물기"
        ],
        "correctIndex": 0,
        "correctAnswer": "부산의 조부모님 댁 방문하기 및 해운대 해변에서 수영하기",
        "explanation": "지문의 'During this summer vacation, Tom will visit my grandparents in Busan. They are going to swim at Haeundae beach with my brother.'에 명시되어 있습니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "During this summer vacation, Hana will read ten English storybooks. They are going to write a colorful reading journal by myself.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"During this summer vacation, Hana will read ten English storybooks. They are going to write a colorful reading journal by myself.\"\n질문: 윗글에 나타난 Hana의 방학 세부 계획으로 일치하는 것은?",
        "options": [
          "하루 종일 게임만 하기",
          "영어 동화책 10권 읽기 및 다채로운 독서 일기 쓰기",
          "아무 계획 없이 집에 머물기",
          "도서관 책 정리하기"
        ],
        "correctIndex": 1,
        "correctAnswer": "영어 동화책 10권 읽기 및 다채로운 독서 일기 쓰기",
        "explanation": "지문의 'During this summer vacation, Hana will read ten English storybooks. They are going to write a colorful reading journal by myself.'에 명시되어 있습니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "During this summer vacation, Brian will join a cooking class for kids. They are going to bake sweet chocolate cookies with my best friend.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"During this summer vacation, Brian will join a cooking class for kids. They are going to bake sweet chocolate cookies with my best friend.\"\n질문: 윗글에 나타난 Brian의 방학 세부 계획으로 일치하는 것은?",
        "options": [
          "아무 계획 없이 집에 머물기",
          "도서관 책 정리하기",
          "하루 종일 게임만 하기",
          "어린이 요리 교실에 참가하기 및 달콤한 초콜릿 쿠키 굽기"
        ],
        "correctIndex": 3,
        "correctAnswer": "어린이 요리 교실에 참가하기 및 달콤한 초콜릿 쿠키 굽기",
        "explanation": "지문의 'During this summer vacation, Brian will join a cooking class for kids. They are going to bake sweet chocolate cookies with my best friend.'에 명시되어 있습니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "During this summer vacation, Amy will learn how to play the ukulele. They are going to play cheerful folk songs with my cousin.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"During this summer vacation, Amy will learn how to play the ukulele. They are going to play cheerful folk songs with my cousin.\"\n질문: 윗글에 나타난 Amy의 방학 세부 계획으로 일치하는 것은?",
        "options": [
          "아무 계획 없이 집에 머물기",
          "도서관 책 정리하기",
          "하루 종일 게임만 하기",
          "우쿨렐레 연주법 배우기 및 신나는 포크송 연주하기"
        ],
        "correctIndex": 3,
        "correctAnswer": "우쿨렐레 연주법 배우기 및 신나는 포크송 연주하기",
        "explanation": "지문의 'During this summer vacation, Amy will learn how to play the ukulele. They are going to play cheerful folk songs with my cousin.'에 명시되어 있습니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "During this summer vacation, Paul will travel to Jeju Island by airplane. They are going to climb the green Hallasan mountain with my parents.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"During this summer vacation, Paul will travel to Jeju Island by airplane. They are going to climb the green Hallasan mountain with my parents.\"\n질문: 윗글에 나타난 Paul의 방학 세부 계획으로 일치하는 것은?",
        "options": [
          "하루 종일 게임만 하기",
          "도서관 책 정리하기",
          "비행기 타고 제주도 여행하기 및 초록빛 한라산 등반하기",
          "아무 계획 없이 집에 머물기"
        ],
        "correctIndex": 2,
        "correctAnswer": "비행기 타고 제주도 여행하기 및 초록빛 한라산 등반하기",
        "explanation": "지문의 'During this summer vacation, Paul will travel to Jeju Island by airplane. They are going to climb the green Hallasan mountain with my parents.'에 명시되어 있습니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "During this summer vacation, Minsoo will go camping in the deep green forest. They are going to sleep in a comfortable tent with my family.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"During this summer vacation, Minsoo will go camping in the deep green forest. They are going to sleep in a comfortable tent with my family.\"\n질문: 윗글에 나타난 Minsoo의 방학 세부 계획으로 일치하는 것은?",
        "options": [
          "아무 계획 없이 집에 머물기",
          "하루 종일 게임만 하기",
          "도서관 책 정리하기",
          "깊고 푸른 숲으로 캠핑 가기 및 편안한 텐트에서 자기"
        ],
        "correctIndex": 3,
        "correctAnswer": "깊고 푸른 숲으로 캠핑 가기 및 편안한 텐트에서 자기",
        "explanation": "지문의 'During this summer vacation, Minsoo will go camping in the deep green forest. They are going to sleep in a comfortable tent with my family.'에 명시되어 있습니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'learn' is very frequently used. It means '배우다' in Korean.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'learn' is very frequently used. It means '배우다' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'learn'의 한국어 의미는?",
        "options": [
          "여름",
          "캠핑",
          "방학, 휴가",
          "배우다"
        ],
        "correctIndex": 3,
        "correctAnswer": "배우다",
        "explanation": "'learn'은 '배우다'입니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'vacation' is very frequently used. It means '방학, 휴가' in Korean.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'vacation' is very frequently used. It means '방학, 휴가' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'vacation'의 한국어 의미는?",
        "options": [
          "여름",
          "방학, 휴가",
          "숲",
          "캠핑"
        ],
        "correctIndex": 1,
        "correctAnswer": "방학, 휴가",
        "explanation": "'vacation'은 '방학, 휴가'입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'summer' is very frequently used. It means '여름' in Korean.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'summer' is very frequently used. It means '여름' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'summer'의 한국어 의미는?",
        "options": [
          "숲",
          "여름",
          "방학, 휴가",
          "캠핑"
        ],
        "correctIndex": 1,
        "correctAnswer": "여름",
        "explanation": "'summer'은 '여름'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'camping' is very frequently used. It means '캠핑' in Korean.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'camping' is very frequently used. It means '캠핑' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'camping'의 한국어 의미는?",
        "options": [
          "여름",
          "방학, 휴가",
          "숲",
          "캠핑"
        ],
        "correctIndex": 3,
        "correctAnswer": "캠핑",
        "explanation": "'camping'은 '캠핑'입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'forest' is very frequently used. It means '숲' in Korean.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'forest' is very frequently used. It means '숲' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'forest'의 한국어 의미는?",
        "options": [
          "숲",
          "여름",
          "방학, 휴가",
          "캠핑"
        ],
        "correctIndex": 0,
        "correctAnswer": "숲",
        "explanation": "'forest'은 '숲'입니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'tent' is very frequently used. It means '텐트' in Korean.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'tent' is very frequently used. It means '텐트' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'tent'의 한국어 의미는?",
        "options": [
          "캠핑",
          "여름",
          "방학, 휴가",
          "텐트"
        ],
        "correctIndex": 3,
        "correctAnswer": "텐트",
        "explanation": "'tent'은 '텐트'입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'grandparents' is very frequently used. It means '조부모님' in Korean.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'grandparents' is very frequently used. It means '조부모님' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'grandparents'의 한국어 의미는?",
        "options": [
          "조부모님",
          "여름",
          "캠핑",
          "방학, 휴가"
        ],
        "correctIndex": 0,
        "correctAnswer": "조부모님",
        "explanation": "'grandparents'은 '조부모님'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'travel' is very frequently used. It means '여행하다' in Korean.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'travel' is very frequently used. It means '여행하다' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'travel'의 한국어 의미는?",
        "options": [
          "캠핑",
          "여름",
          "방학, 휴가",
          "여행하다"
        ],
        "correctIndex": 3,
        "correctAnswer": "여행하다",
        "explanation": "'travel'은 '여행하다'입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'plan' is very frequently used. It means '계획' in Korean.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'plan' is very frequently used. It means '계획' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'plan'의 한국어 의미는?",
        "options": [
          "계획",
          "방학, 휴가",
          "여름",
          "캠핑"
        ],
        "correctIndex": 0,
        "correctAnswer": "계획",
        "explanation": "'plan'은 '계획'입니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'swim' is very frequently used. It means '수영하다' in Korean.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'swim' is very frequently used. It means '수영하다' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'swim'의 한국어 의미는?",
        "options": [
          "캠핑",
          "여름",
          "방학, 휴가",
          "수영하다"
        ],
        "correctIndex": 3,
        "correctAnswer": "수영하다",
        "explanation": "'swim'은 '수영하다'입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 3단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"방학, 휴가\" (단어 첫 글자: v, 총 8글자)",
        "correctAnswer": "vacation",
        "explanation": "'방학, 휴가'에 해당하는 영어 단어는 'vacation'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 3단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"여름\" (단어 첫 글자: s, 총 6글자)",
        "correctAnswer": "summer",
        "explanation": "'여름'에 해당하는 영어 단어는 'summer'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 3단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"캠핑\" (단어 첫 글자: c, 총 7글자)",
        "correctAnswer": "camping",
        "explanation": "'캠핑'에 해당하는 영어 단어는 'camping'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 3단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"숲\" (단어 첫 글자: f, 총 6글자)",
        "correctAnswer": "forest",
        "explanation": "'숲'에 해당하는 영어 단어는 'forest'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 3단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"텐트\" (단어 첫 글자: t, 총 4글자)",
        "correctAnswer": "tent",
        "explanation": "'텐트'에 해당하는 영어 단어는 'tent'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 3단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"조부모님\" (단어 첫 글자: g, 총 12글자)",
        "correctAnswer": "grandparents",
        "explanation": "'조부모님'에 해당하는 영어 단어는 'grandparents'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 3단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"여행하다\" (단어 첫 글자: t, 총 6글자)",
        "correctAnswer": "travel",
        "explanation": "'여행하다'에 해당하는 영어 단어는 'travel'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 3단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"계획\" (단어 첫 글자: p, 총 4글자)",
        "correctAnswer": "plan",
        "explanation": "'계획'에 해당하는 영어 단어는 'plan'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 3단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"수영하다\" (단어 첫 글자: s, 총 4글자)",
        "correctAnswer": "swim",
        "explanation": "'수영하다'에 해당하는 영어 단어는 'swim'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 3단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"일기, 기록\" (단어 첫 글자: j, 총 7글자)",
        "correctAnswer": "journal",
        "explanation": "'일기, 기록'에 해당하는 영어 단어는 'journal'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 3단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"미래\" (단어 첫 글자: f, 총 6글자)",
        "correctAnswer": "future",
        "explanation": "'미래'에 해당하는 영어 단어는 'future'입니다."
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 3단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"내일\" (단어 첫 글자: t, 총 8글자)",
        "correctAnswer": "tomorrow",
        "explanation": "'내일'에 해당하는 영어 단어는 'tomorrow'입니다."
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 3단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"방문하다\" (단어 첫 글자: v, 총 5글자)",
        "correctAnswer": "visit",
        "explanation": "'방문하다'에 해당하는 영어 단어는 'visit'입니다."
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 3단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"섬\" (단어 첫 글자: i, 총 6글자)",
        "correctAnswer": "island",
        "explanation": "'섬'에 해당하는 영어 단어는 'island'입니다."
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 3단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"배우다\" (단어 첫 글자: l, 총 5글자)",
        "correctAnswer": "learn",
        "explanation": "'배우다'에 해당하는 영어 단어는 'learn'입니다."
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"이번 여름에 무엇을 할 거니?\"",
        "chips": [
          "What",
          "will",
          "you",
          "do",
          "this",
          "summer?"
        ],
        "correctAnswer": "What will you do this summer?",
        "explanation": "'What will you do this summer?'은 '이번 여름에 무엇을 할 거니?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"숲으로 캠핑을 갈 거야.\"",
        "chips": [
          "I",
          "will",
          "go",
          "camping",
          "in",
          "the",
          "forest."
        ],
        "correctAnswer": "I will go camping in the forest.",
        "explanation": "'I will go camping in the forest.'은 '숲으로 캠핑을 갈 거야.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"조부모님 댁을 방문할 계획이야.\"",
        "chips": [
          "I",
          "plan",
          "to",
          "visit",
          "my",
          "grandparents."
        ],
        "correctAnswer": "I plan to visit my grandparents.",
        "explanation": "'I plan to visit my grandparents.'은 '조부모님 댁을 방문할 계획이야.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"우리는 텐트에서 잘 거야.\"",
        "chips": [
          "We",
          "are",
          "going",
          "to",
          "sleep",
          "in",
          "a",
          "tent."
        ],
        "correctAnswer": "We are going to sleep in a tent.",
        "explanation": "'We are going to sleep in a tent.'은 '우리는 텐트에서 잘 거야.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"나는 영어 책 열 권을 읽을 거야.\"",
        "chips": [
          "I",
          "will",
          "read",
          "ten",
          "English",
          "books."
        ],
        "correctAnswer": "I will read ten English books.",
        "explanation": "'I will read ten English books.'은 '나는 영어 책 열 권을 읽을 거야.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"그녀는 비행기로 제주도를 여행할 거야.\"",
        "chips": [
          "She",
          "will",
          "travel",
          "to",
          "Jeju-do",
          "by",
          "airplane."
        ],
        "correctAnswer": "She will travel to Jeju-do by airplane.",
        "explanation": "'She will travel to Jeju-do by airplane.'은 '그녀는 비행기로 제주도를 여행할 거야.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"방학 계획이 어떻게 되니?\"",
        "chips": [
          "What",
          "are",
          "your",
          "plans",
          "for",
          "vacation?"
        ],
        "correctAnswer": "What are your plans for vacation?",
        "explanation": "'What are your plans for vacation?'은 '방학 계획이 어떻게 되니?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"나는 쿠키 굽는 법을 배울 거야.\"",
        "chips": [
          "I",
          "will",
          "learn",
          "how",
          "to",
          "bake",
          "cookies."
        ],
        "correctAnswer": "I will learn how to bake cookies.",
        "explanation": "'I will learn how to bake cookies.'은 '나는 쿠키 굽는 법을 배울 거야.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"그는 바다에서 수영할 계획이야.\"",
        "chips": [
          "He",
          "plans",
          "to",
          "swim",
          "at",
          "the",
          "ocean."
        ],
        "correctAnswer": "He plans to swim at the ocean.",
        "explanation": "'He plans to swim at the ocean.'은 '그는 바다에서 수영할 계획이야.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"우리는 함께 멋진 추억을 만들 거야.\"",
        "chips": [
          "We",
          "will",
          "make",
          "great",
          "memories",
          "together."
        ],
        "correctAnswer": "We will make great memories together.",
        "explanation": "'We will make great memories together.'은 '우리는 함께 멋진 추억을 만들 거야.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 96,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"너는 집에 머무를 예정이니?\"",
        "chips": [
          "Are",
          "you",
          "going",
          "to",
          "stay",
          "at",
          "home?"
        ],
        "correctAnswer": "Are you going to stay at home?",
        "explanation": "'Are you going to stay at home?'은 '너는 집에 머무를 예정이니?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 97,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"나는 아빠와 한라산에 오를 거야.\"",
        "chips": [
          "I",
          "will",
          "climb",
          "Hallasan",
          "with",
          "my",
          "dad."
        ],
        "correctAnswer": "I will climb Hallasan with my dad.",
        "explanation": "'I will climb Hallasan with my dad.'은 '나는 아빠와 한라산에 오를 거야.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 98,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"그들은 매일 축구를 연습할 거야.\"",
        "chips": [
          "They",
          "will",
          "practice",
          "soccer",
          "every",
          "day."
        ],
        "correctAnswer": "They will practice soccer every day.",
        "explanation": "'They will practice soccer every day.'은 '그들은 매일 축구를 연습할 거야.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 99,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"나는 독서 일기를 쓸 예정이야.\"",
        "chips": [
          "I",
          "am",
          "going",
          "to",
          "write",
          "a",
          "reading",
          "journal."
        ],
        "correctAnswer": "I am going to write a reading journal.",
        "explanation": "'I am going to write a reading journal.'은 '나는 독서 일기를 쓸 예정이야.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[최종 골든벨 문제] 다음 우리말에 맞도록 주어진 단어 카드를 순서대로 바르게 배열하세요.\n우리말: \"신나는 여름방학이 될 거야.\"",
        "chips": [
          "It",
          "will",
          "be",
          "an",
          "exciting",
          "summer",
          "vacation."
        ],
        "correctAnswer": "It will be an exciting summer vacation.",
        "explanation": "'It will be an exciting summer vacation.'은 '신나는 여름방학이 될 거야.'을 의미하는 핵심 문장입니다."
      }
    ]
  },
  "6G_L04": {
    "name": "4단원: 길 찾기와 위치 안내 (Where is the hospital / ticket office?)",
    "grade": 6,
    "theme": "Asking Directions & Giving Instructions",
    "totalQuestions": 100,
    "questions": [
      {
        "id": 1,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Excuse me, where is the hospital? Sarah: Go straight two blocks and turn left. It is on your right next to the bank.",
        "question": "[듣기 · 4단원] 길 안내를 듣고, 목적지(병원)의 위치로 올바른 설명은?",
        "options": [
          "두 블록 직진 후 유턴",
          "횡단보도 건너 반대편 골목",
          "지하철역 3번 출구 지하",
          "두 블록 직진해서 왼쪽으로 도세요 (은행 옆 오른쪽)"
        ],
        "correctIndex": 3,
        "correctAnswer": "두 블록 직진해서 왼쪽으로 도세요 (은행 옆 오른쪽)",
        "explanation": "'Go straight two blocks and turn left'입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kelly: Excuse me, where is the library? Jisu: Go straight one block and turn right. It is across from the post office.",
        "question": "[듣기 · 4단원] 길 안내를 듣고, 목적지(도서관)의 위치로 올바른 설명은?",
        "options": [
          "횡단보도 건너 반대편 골목",
          "두 블록 직진 후 유턴",
          "지하철역 3번 출구 지하",
          "한 블록 직진해서 오른쪽으로 도세요 (우체국 맞은편)"
        ],
        "correctIndex": 3,
        "correctAnswer": "한 블록 직진해서 오른쪽으로 도세요 (우체국 맞은편)",
        "explanation": "'Go straight one block and turn right'입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "David: Excuse me, where is the ticket office? Kevin: Walk straight past the fountain. It is in front of the main entrance.",
        "question": "[듣기 · 4단원] 길 안내를 듣고, 목적지(매표소)의 위치로 올바른 설명은?",
        "options": [
          "분수대를 지나 곧장 걸어가세요 (정문 앞)",
          "두 블록 직진 후 유턴",
          "횡단보도 건너 반대편 골목",
          "지하철역 3번 출구 지하"
        ],
        "correctIndex": 0,
        "correctAnswer": "분수대를 지나 곧장 걸어가세요 (정문 앞)",
        "explanation": "'Walk straight past the fountain'입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Sarah: Excuse me, where is the museum? Emma: Cross the street at the traffic light. It is between the school and the park.",
        "question": "[듣기 · 4단원] 길 안내를 듣고, 목적지(박물관)의 위치로 올바른 설명은?",
        "options": [
          "지하철역 3번 출구 지하",
          "횡단보도 건너 반대편 골목",
          "두 블록 직진 후 유턴",
          "신호등에서 길을 건너세요 (학교와 공원 사이)"
        ],
        "correctIndex": 3,
        "correctAnswer": "신호등에서 길을 건너세요 (학교와 공원 사이)",
        "explanation": "'Cross the street at the traffic light'입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Jisu: Excuse me, where is the bakery? Tom: Turn left at the first corner. It is behind the flower shop.",
        "question": "[듣기 · 4단원] 길 안내를 듣고, 목적지(빵집)의 위치로 올바른 설명은?",
        "options": [
          "지하철역 3번 출구 지하",
          "횡단보도 건너 반대편 골목",
          "두 블록 직진 후 유턴",
          "첫 번째 모퉁이에서 좌회전하세요 (꽃집 뒤편)"
        ],
        "correctIndex": 3,
        "correctAnswer": "첫 번째 모퉁이에서 좌회전하세요 (꽃집 뒤편)",
        "explanation": "'Turn left at the first corner'입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kevin: Excuse me, where is the police station? Hana: Go straight three blocks. It is on your left near the subway.",
        "question": "[듣기 · 4단원] 길 안내를 듣고, 목적지(경찰서)의 위치로 올바른 설명은?",
        "options": [
          "지하철역 3번 출구 지하",
          "횡단보도 건너 반대편 골목",
          "두 블록 직진 후 유턴",
          "세 블록 똑바로 가세요 (지하철역 근처 왼쪽)"
        ],
        "correctIndex": 3,
        "correctAnswer": "세 블록 똑바로 가세요 (지하철역 근처 왼쪽)",
        "explanation": "'Go straight three blocks'입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Emma: Excuse me, where is the hospital? Brian: Go straight two blocks and turn left. It is on your right next to the bank.",
        "question": "[듣기 · 4단원] 길 안내를 듣고, 목적지(병원)의 위치로 올바른 설명은?",
        "options": [
          "횡단보도 건너 반대편 골목",
          "두 블록 직진 후 유턴",
          "지하철역 3번 출구 지하",
          "두 블록 직진해서 왼쪽으로 도세요 (은행 옆 오른쪽)"
        ],
        "correctIndex": 3,
        "correctAnswer": "두 블록 직진해서 왼쪽으로 도세요 (은행 옆 오른쪽)",
        "explanation": "'Go straight two blocks and turn left'입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Tom: Excuse me, where is the library? Amy: Go straight one block and turn right. It is across from the post office.",
        "question": "[듣기 · 4단원] 길 안내를 듣고, 목적지(도서관)의 위치로 올바른 설명은?",
        "options": [
          "지하철역 3번 출구 지하",
          "횡단보도 건너 반대편 골목",
          "두 블록 직진 후 유턴",
          "한 블록 직진해서 오른쪽으로 도세요 (우체국 맞은편)"
        ],
        "correctIndex": 3,
        "correctAnswer": "한 블록 직진해서 오른쪽으로 도세요 (우체국 맞은편)",
        "explanation": "'Go straight one block and turn right'입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Hana: Excuse me, where is the ticket office? Paul: Walk straight past the fountain. It is in front of the main entrance.",
        "question": "[듣기 · 4단원] 길 안내를 듣고, 목적지(매표소)의 위치로 올바른 설명은?",
        "options": [
          "지하철역 3번 출구 지하",
          "횡단보도 건너 반대편 골목",
          "두 블록 직진 후 유턴",
          "분수대를 지나 곧장 걸어가세요 (정문 앞)"
        ],
        "correctIndex": 3,
        "correctAnswer": "분수대를 지나 곧장 걸어가세요 (정문 앞)",
        "explanation": "'Walk straight past the fountain'입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Brian: Excuse me, where is the museum? Minsoo: Cross the street at the traffic light. It is between the school and the park.",
        "question": "[듣기 · 4단원] 길 안내를 듣고, 목적지(박물관)의 위치로 올바른 설명은?",
        "options": [
          "지하철역 3번 출구 지하",
          "두 블록 직진 후 유턴",
          "신호등에서 길을 건너세요 (학교와 공원 사이)",
          "횡단보도 건너 반대편 골목"
        ],
        "correctIndex": 2,
        "correctAnswer": "신호등에서 길을 건너세요 (학교와 공원 사이)",
        "explanation": "'Cross the street at the traffic light'입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Amy: Excuse me, where is the bakery? Kelly: Turn left at the first corner. It is behind the flower shop.",
        "question": "[듣기 · 4단원] 길 안내를 듣고, 목적지(빵집)의 위치로 올바른 설명은?",
        "options": [
          "첫 번째 모퉁이에서 좌회전하세요 (꽃집 뒤편)",
          "두 블록 직진 후 유턴",
          "지하철역 3번 출구 지하",
          "횡단보도 건너 반대편 골목"
        ],
        "correctIndex": 0,
        "correctAnswer": "첫 번째 모퉁이에서 좌회전하세요 (꽃집 뒤편)",
        "explanation": "'Turn left at the first corner'입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Paul: Excuse me, where is the police station? David: Go straight three blocks. It is on your left near the subway.",
        "question": "[듣기 · 4단원] 길 안내를 듣고, 목적지(경찰서)의 위치로 올바른 설명은?",
        "options": [
          "지하철역 3번 출구 지하",
          "횡단보도 건너 반대편 골목",
          "두 블록 직진 후 유턴",
          "세 블록 똑바로 가세요 (지하철역 근처 왼쪽)"
        ],
        "correctIndex": 3,
        "correctAnswer": "세 블록 똑바로 가세요 (지하철역 근처 왼쪽)",
        "explanation": "'Go straight three blocks'입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Yes, it is behind the supermarket. Sarah: I completely agree with you!",
        "question": "[듣기 · 4단원] 대화에서 Minsoo이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음에 다시 이야기하자.",
          "나는 잘 모르겠어.",
          "네, 슈퍼마켓 뒤에 있습니다.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 2,
        "correctAnswer": "네, 슈퍼마켓 뒤에 있습니다.",
        "explanation": "'Yes, it is behind the supermarket.'은 '네, 슈퍼마켓 뒤에 있습니다.'을 의미합니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kelly: Turn left at the traffic light. Jisu: I completely agree with you!",
        "question": "[듣기 · 4단원] 대화에서 Kelly이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "신호등에서 좌회전하세요."
        ],
        "correctIndex": 3,
        "correctAnswer": "신호등에서 좌회전하세요.",
        "explanation": "'Turn left at the traffic light.'은 '신호등에서 좌회전하세요.'을 의미합니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "David: Thank you for your kind help. Kevin: I completely agree with you!",
        "question": "[듣기 · 4단원] 대화에서 David이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음에 다시 이야기하자.",
          "나는 잘 모르겠어.",
          "친절한 도움에 감사드립니다.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 2,
        "correctAnswer": "친절한 도움에 감사드립니다.",
        "explanation": "'Thank you for your kind help.'은 '친절한 도움에 감사드립니다.'을 의미합니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Sarah: Where is the ticket office? Emma: I completely agree with you!",
        "question": "[듣기 · 4단원] 대화에서 Sarah이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자.",
          "매표소가 어디에 있나요?",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 2,
        "correctAnswer": "매표소가 어디에 있나요?",
        "explanation": "'Where is the ticket office?'은 '매표소가 어디에 있나요?'을 의미합니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Jisu: Go straight two blocks and turn left. Tom: I completely agree with you!",
        "question": "[듣기 · 4단원] 대화에서 Jisu이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "두 블록 직진해서 왼쪽으로 도세요."
        ],
        "correctIndex": 3,
        "correctAnswer": "두 블록 직진해서 왼쪽으로 도세요.",
        "explanation": "'Go straight two blocks and turn left.'은 '두 블록 직진해서 왼쪽으로 도세요.'을 의미합니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kevin: It is on your right. Hana: I completely agree with you!",
        "question": "[듣기 · 4단원] 대화에서 Kevin이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음에 다시 이야기하자.",
          "오른쪽에 있습니다.",
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 1,
        "correctAnswer": "오른쪽에 있습니다.",
        "explanation": "'It is on your right.'은 '오른쪽에 있습니다.'을 의미합니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Emma: You can not miss it. Brian: I completely agree with you!",
        "question": "[듣기 · 4단원] 대화에서 Emma이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음에 다시 이야기하자.",
          "쉽게 찾을 수 있을 거예요.",
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 1,
        "correctAnswer": "쉽게 찾을 수 있을 거예요.",
        "explanation": "'You can not miss it.'은 '쉽게 찾을 수 있을 거예요.'을 의미합니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Tom: How can I get to the library? Amy: I completely agree with you!",
        "question": "[듣기 · 4단원] 대화에서 Tom이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자.",
          "도서관에 어떻게 가나요?"
        ],
        "correctIndex": 3,
        "correctAnswer": "도서관에 어떻게 가나요?",
        "explanation": "'How can I get to the library?'은 '도서관에 어떻게 가나요?'을 의미합니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Hana: Turn right at the second corner. Paul: I completely agree with you!",
        "question": "[듣기 · 4단원] 대화에서 Hana이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자.",
          "두 번째 모퉁이에서 우회전하세요.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 2,
        "correctAnswer": "두 번째 모퉁이에서 우회전하세요.",
        "explanation": "'Turn right at the second corner.'은 '두 번째 모퉁이에서 우회전하세요.'을 의미합니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Brian: The museum is across from the park. Minsoo: I completely agree with you!",
        "question": "[듣기 · 4단원] 대화에서 Brian이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자.",
          "박물관은 공원 맞은편에 있어요."
        ],
        "correctIndex": 3,
        "correctAnswer": "박물관은 공원 맞은편에 있어요.",
        "explanation": "'The museum is across from the park.'은 '박물관은 공원 맞은편에 있어요.'을 의미합니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Amy: Cross the street at the crosswalk. Kelly: I completely agree with you!",
        "question": "[듣기 · 4단원] 대화에서 Amy이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자.",
          "횡단보도에서 길을 건너세요."
        ],
        "correctIndex": 3,
        "correctAnswer": "횡단보도에서 길을 건너세요.",
        "explanation": "'Cross the street at the crosswalk.'은 '횡단보도에서 길을 건너세요.'을 의미합니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Paul: Where is the nearest subway station? David: I completely agree with you!",
        "question": "[듣기 · 4단원] 대화에서 Paul이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "가장 가까운 지하철역은 어디인가요?"
        ],
        "correctIndex": 3,
        "correctAnswer": "가장 가까운 지하철역은 어디인가요?",
        "explanation": "'Where is the nearest subway station?'은 '가장 가까운 지하철역은 어디인가요?'을 의미합니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Do you know the meaning of 'library'? Sarah: Yes, it means '도서관'.",
        "question": "[듣기 · 4단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'library'의 뜻은?",
        "options": [
          "오른쪽",
          "도서관",
          "똑바로",
          "왼쪽"
        ],
        "correctIndex": 1,
        "correctAnswer": "도서관",
        "explanation": "'library'은 '도서관'를 뜻합니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kelly: Do you know the meaning of 'museum'? Jisu: Yes, it means '박물관'.",
        "question": "[듣기 · 4단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'museum'의 뜻은?",
        "options": [
          "오른쪽",
          "똑바로",
          "박물관",
          "왼쪽"
        ],
        "correctIndex": 2,
        "correctAnswer": "박물관",
        "explanation": "'museum'은 '박물관'를 뜻합니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "David: Do you know the meaning of 'ticket'? Kevin: Yes, it means '표, 티켓'.",
        "question": "[듣기 · 4단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'ticket'의 뜻은?",
        "options": [
          "왼쪽",
          "똑바로",
          "오른쪽",
          "표, 티켓"
        ],
        "correctIndex": 3,
        "correctAnswer": "표, 티켓",
        "explanation": "'ticket'은 '표, 티켓'를 뜻합니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Sarah: Do you know the meaning of 'station'? Emma: Yes, it means '역, 소'.",
        "question": "[듣기 · 4단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'station'의 뜻은?",
        "options": [
          "왼쪽",
          "똑바로",
          "역, 소",
          "오른쪽"
        ],
        "correctIndex": 2,
        "correctAnswer": "역, 소",
        "explanation": "'station'은 '역, 소'를 뜻합니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Jisu: Do you know the meaning of 'cross'? Tom: Yes, it means '건너다'.",
        "question": "[듣기 · 4단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'cross'의 뜻은?",
        "options": [
          "오른쪽",
          "왼쪽",
          "건너다",
          "똑바로"
        ],
        "correctIndex": 2,
        "correctAnswer": "건너다",
        "explanation": "'cross'은 '건너다'를 뜻합니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kevin: Do you know the meaning of 'miss'? Hana: Yes, it means '놓치다'.",
        "question": "[듣기 · 4단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'miss'의 뜻은?",
        "options": [
          "놓치다",
          "똑바로",
          "왼쪽",
          "오른쪽"
        ],
        "correctIndex": 0,
        "correctAnswer": "놓치다",
        "explanation": "'miss'은 '놓치다'를 뜻합니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Emma: Do you know the meaning of 'straight'? Brian: Yes, it means '똑바로'.",
        "question": "[듣기 · 4단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'straight'의 뜻은?",
        "options": [
          "왼쪽",
          "오른쪽",
          "똑바로",
          "블록, 구역"
        ],
        "correctIndex": 2,
        "correctAnswer": "똑바로",
        "explanation": "'straight'은 '똑바로'를 뜻합니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Tom: Do you know the meaning of 'left'? Amy: Yes, it means '왼쪽'.",
        "question": "[듣기 · 4단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'left'의 뜻은?",
        "options": [
          "왼쪽",
          "똑바로",
          "블록, 구역",
          "오른쪽"
        ],
        "correctIndex": 0,
        "correctAnswer": "왼쪽",
        "explanation": "'left'은 '왼쪽'를 뜻합니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Hana: Do you know the meaning of 'right'? Paul: Yes, it means '오른쪽'.",
        "question": "[듣기 · 4단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'right'의 뜻은?",
        "options": [
          "블록, 구역",
          "오른쪽",
          "똑바로",
          "왼쪽"
        ],
        "correctIndex": 1,
        "correctAnswer": "오른쪽",
        "explanation": "'right'은 '오른쪽'를 뜻합니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Brian: Do you know the meaning of 'block'? Minsoo: Yes, it means '블록, 구역'.",
        "question": "[듣기 · 4단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'block'의 뜻은?",
        "options": [
          "오른쪽",
          "왼쪽",
          "똑바로",
          "블록, 구역"
        ],
        "correctIndex": 3,
        "correctAnswer": "블록, 구역",
        "explanation": "'block'은 '블록, 구역'를 뜻합니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Amy: Do you know the meaning of 'corner'? Kelly: Yes, it means '모퉁이'.",
        "question": "[듣기 · 4단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'corner'의 뜻은?",
        "options": [
          "오른쪽",
          "똑바로",
          "왼쪽",
          "모퉁이"
        ],
        "correctIndex": 3,
        "correctAnswer": "모퉁이",
        "explanation": "'corner'은 '모퉁이'를 뜻합니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Minsoo. It is on your right. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Minsoo. It is on your right. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "오른쪽에 있습니다."
        ],
        "correctIndex": 3,
        "correctAnswer": "오른쪽에 있습니다.",
        "explanation": "'It is on your right.'(오른쪽에 있습니다.)이 핵심 문장입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kelly. You can not miss it. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kelly. You can not miss it. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "쉽게 찾을 수 있을 거예요.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 1,
        "correctAnswer": "쉽게 찾을 수 있을 거예요.",
        "explanation": "'You can not miss it.'(쉽게 찾을 수 있을 거예요.)이 핵심 문장입니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is David. How can I get to the library? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is David. How can I get to the library? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "학교 숙제가 너무 많아서 피곤하다.",
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "도서관에 어떻게 가나요?"
        ],
        "correctIndex": 3,
        "correctAnswer": "도서관에 어떻게 가나요?",
        "explanation": "'How can I get to the library?'(도서관에 어떻게 가나요?)이 핵심 문장입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Sarah. Turn right at the second corner. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Sarah. Turn right at the second corner. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "두 번째 모퉁이에서 우회전하세요.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 2,
        "correctAnswer": "두 번째 모퉁이에서 우회전하세요.",
        "explanation": "'Turn right at the second corner.'(두 번째 모퉁이에서 우회전하세요.)이 핵심 문장입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Jisu. The museum is across from the park. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Jisu. The museum is across from the park. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Jisu이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "길을 잃어버려서 헤매고 있다.",
          "박물관은 공원 맞은편에 있어요."
        ],
        "correctIndex": 3,
        "correctAnswer": "박물관은 공원 맞은편에 있어요.",
        "explanation": "'The museum is across from the park.'(박물관은 공원 맞은편에 있어요.)이 핵심 문장입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kevin. Cross the street at the crosswalk. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kevin. Cross the street at the crosswalk. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kevin이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "횡단보도에서 길을 건너세요.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 2,
        "correctAnswer": "횡단보도에서 길을 건너세요.",
        "explanation": "'Cross the street at the crosswalk.'(횡단보도에서 길을 건너세요.)이 핵심 문장입니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Emma. Where is the nearest subway station? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Emma. Where is the nearest subway station? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Emma이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "가장 가까운 지하철역은 어디인가요?",
          "학교 숙제가 너무 많아서 피곤하다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 1,
        "correctAnswer": "가장 가까운 지하철역은 어디인가요?",
        "explanation": "'Where is the nearest subway station?'(가장 가까운 지하철역은 어디인가요?)이 핵심 문장입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Tom. It is between the bakery and the bank. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Tom. It is between the bakery and the bank. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Tom이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "빵집과 은행 사이에 있습니다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 1,
        "correctAnswer": "빵집과 은행 사이에 있습니다.",
        "explanation": "'It is between the bakery and the bank.'(빵집과 은행 사이에 있습니다.)이 핵심 문장입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Hana. Walk straight for five minutes. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Hana. Walk straight for five minutes. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Hana이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "5분 동안 똑바로 걸어가세요."
        ],
        "correctIndex": 3,
        "correctAnswer": "5분 동안 똑바로 걸어가세요.",
        "explanation": "'Walk straight for five minutes.'(5분 동안 똑바로 걸어가세요.)이 핵심 문장입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Brian. Is there a post office near here? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Brian. Is there a post office near here? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Brian이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "이 근처에 우체국이 있나요?",
          "학교 숙제가 너무 많아서 피곤하다.",
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 0,
        "correctAnswer": "이 근처에 우체국이 있나요?",
        "explanation": "'Is there a post office near here?'(이 근처에 우체국이 있나요?)이 핵심 문장입니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Amy. Yes, it is behind the supermarket. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Amy. Yes, it is behind the supermarket. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Amy이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "네, 슈퍼마켓 뒤에 있습니다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 0,
        "correctAnswer": "네, 슈퍼마켓 뒤에 있습니다.",
        "explanation": "'Yes, it is behind the supermarket.'(네, 슈퍼마켓 뒤에 있습니다.)이 핵심 문장입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Paul. Turn left at the traffic light. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Paul. Turn left at the traffic light. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Paul이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "신호등에서 좌회전하세요.",
          "길을 잃어버려서 헤매고 있다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 0,
        "correctAnswer": "신호등에서 좌회전하세요.",
        "explanation": "'Turn left at the traffic light.'(신호등에서 좌회전하세요.)이 핵심 문장입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Minsoo. Thank you for your kind help. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Minsoo. Thank you for your kind help. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친절한 도움에 감사드립니다."
        ],
        "correctIndex": 3,
        "correctAnswer": "친절한 도움에 감사드립니다.",
        "explanation": "'Thank you for your kind help.'(친절한 도움에 감사드립니다.)이 핵심 문장입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kelly. Where is the ticket office? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kelly. Where is the ticket office? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "학교 숙제가 너무 많아서 피곤하다.",
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "매표소가 어디에 있나요?"
        ],
        "correctIndex": 3,
        "correctAnswer": "매표소가 어디에 있나요?",
        "explanation": "'Where is the ticket office?'(매표소가 어디에 있나요?)이 핵심 문장입니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is David. Go straight two blocks and turn left. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is David. Go straight two blocks and turn left. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "학교 숙제가 너무 많아서 피곤하다.",
          "두 블록 직진해서 왼쪽으로 도세요.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 1,
        "correctAnswer": "두 블록 직진해서 왼쪽으로 도세요.",
        "explanation": "'Go straight two blocks and turn left.'(두 블록 직진해서 왼쪽으로 도세요.)이 핵심 문장입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "If you want to find the museum, Cross the street at the traffic light. It is between the school and the park. You will find it very easily.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"If you want to find the museum, Cross the street at the traffic light. It is between the school and the park. You will find it very easily.\"\n질문: 윗글을 읽고, 박물관을(를) 찾아가는 올바른 경로를 고르세요.",
        "options": [
          "신호등을 건너지 않고 직진",
          "지하철역 내부 계단으로 이동",
          "두 블록 직진 후 반대 방향으로 턴",
          "신호등에서 길을 건너세요 (학교와 공원 사이)"
        ],
        "correctIndex": 3,
        "correctAnswer": "신호등에서 길을 건너세요 (학교와 공원 사이)",
        "explanation": "지문의 'If you want to find the museum, Cross the street at the traffic light. It is between the school and the park. You will find it very easily.'에 명시되어 있습니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "If you want to find the bakery, Turn left at the first corner. It is behind the flower shop. You will find it very easily.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"If you want to find the bakery, Turn left at the first corner. It is behind the flower shop. You will find it very easily.\"\n질문: 윗글을 읽고, 빵집을(를) 찾아가는 올바른 경로를 고르세요.",
        "options": [
          "신호등을 건너지 않고 직진",
          "두 블록 직진 후 반대 방향으로 턴",
          "지하철역 내부 계단으로 이동",
          "첫 번째 모퉁이에서 좌회전하세요 (꽃집 뒤편)"
        ],
        "correctIndex": 3,
        "correctAnswer": "첫 번째 모퉁이에서 좌회전하세요 (꽃집 뒤편)",
        "explanation": "지문의 'If you want to find the bakery, Turn left at the first corner. It is behind the flower shop. You will find it very easily.'에 명시되어 있습니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "If you want to find the police station, Go straight three blocks. It is on your left near the subway. You will find it very easily.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"If you want to find the police station, Go straight three blocks. It is on your left near the subway. You will find it very easily.\"\n질문: 윗글을 읽고, 경찰서을(를) 찾아가는 올바른 경로를 고르세요.",
        "options": [
          "지하철역 내부 계단으로 이동",
          "두 블록 직진 후 반대 방향으로 턴",
          "세 블록 똑바로 가세요 (지하철역 근처 왼쪽)",
          "신호등을 건너지 않고 직진"
        ],
        "correctIndex": 2,
        "correctAnswer": "세 블록 똑바로 가세요 (지하철역 근처 왼쪽)",
        "explanation": "지문의 'If you want to find the police station, Go straight three blocks. It is on your left near the subway. You will find it very easily.'에 명시되어 있습니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "If you want to find the hospital, Go straight two blocks and turn left. It is on your right next to the bank. You will find it very easily.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"If you want to find the hospital, Go straight two blocks and turn left. It is on your right next to the bank. You will find it very easily.\"\n질문: 윗글을 읽고, 병원을(를) 찾아가는 올바른 경로를 고르세요.",
        "options": [
          "지하철역 내부 계단으로 이동",
          "신호등을 건너지 않고 직진",
          "두 블록 직진 후 반대 방향으로 턴",
          "두 블록 직진해서 왼쪽으로 도세요 (은행 옆 오른쪽)"
        ],
        "correctIndex": 3,
        "correctAnswer": "두 블록 직진해서 왼쪽으로 도세요 (은행 옆 오른쪽)",
        "explanation": "지문의 'If you want to find the hospital, Go straight two blocks and turn left. It is on your right next to the bank. You will find it very easily.'에 명시되어 있습니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "If you want to find the library, Go straight one block and turn right. It is across from the post office. You will find it very easily.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"If you want to find the library, Go straight one block and turn right. It is across from the post office. You will find it very easily.\"\n질문: 윗글을 읽고, 도서관을(를) 찾아가는 올바른 경로를 고르세요.",
        "options": [
          "지하철역 내부 계단으로 이동",
          "신호등을 건너지 않고 직진",
          "두 블록 직진 후 반대 방향으로 턴",
          "한 블록 직진해서 오른쪽으로 도세요 (우체국 맞은편)"
        ],
        "correctIndex": 3,
        "correctAnswer": "한 블록 직진해서 오른쪽으로 도세요 (우체국 맞은편)",
        "explanation": "지문의 'If you want to find the library, Go straight one block and turn right. It is across from the post office. You will find it very easily.'에 명시되어 있습니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "If you want to find the ticket office, Walk straight past the fountain. It is in front of the main entrance. You will find it very easily.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"If you want to find the ticket office, Walk straight past the fountain. It is in front of the main entrance. You will find it very easily.\"\n질문: 윗글을 읽고, 매표소을(를) 찾아가는 올바른 경로를 고르세요.",
        "options": [
          "분수대를 지나 곧장 걸어가세요 (정문 앞)",
          "두 블록 직진 후 반대 방향으로 턴",
          "지하철역 내부 계단으로 이동",
          "신호등을 건너지 않고 직진"
        ],
        "correctIndex": 0,
        "correctAnswer": "분수대를 지나 곧장 걸어가세요 (정문 앞)",
        "explanation": "지문의 'If you want to find the ticket office, Walk straight past the fountain. It is in front of the main entrance. You will find it very easily.'에 명시되어 있습니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "If you want to find the museum, Cross the street at the traffic light. It is between the school and the park. You will find it very easily.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"If you want to find the museum, Cross the street at the traffic light. It is between the school and the park. You will find it very easily.\"\n질문: 윗글을 읽고, 박물관을(를) 찾아가는 올바른 경로를 고르세요.",
        "options": [
          "신호등을 건너지 않고 직진",
          "신호등에서 길을 건너세요 (학교와 공원 사이)",
          "두 블록 직진 후 반대 방향으로 턴",
          "지하철역 내부 계단으로 이동"
        ],
        "correctIndex": 1,
        "correctAnswer": "신호등에서 길을 건너세요 (학교와 공원 사이)",
        "explanation": "지문의 'If you want to find the museum, Cross the street at the traffic light. It is between the school and the park. You will find it very easily.'에 명시되어 있습니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "If you want to find the bakery, Turn left at the first corner. It is behind the flower shop. You will find it very easily.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"If you want to find the bakery, Turn left at the first corner. It is behind the flower shop. You will find it very easily.\"\n질문: 윗글을 읽고, 빵집을(를) 찾아가는 올바른 경로를 고르세요.",
        "options": [
          "지하철역 내부 계단으로 이동",
          "두 블록 직진 후 반대 방향으로 턴",
          "신호등을 건너지 않고 직진",
          "첫 번째 모퉁이에서 좌회전하세요 (꽃집 뒤편)"
        ],
        "correctIndex": 3,
        "correctAnswer": "첫 번째 모퉁이에서 좌회전하세요 (꽃집 뒤편)",
        "explanation": "지문의 'If you want to find the bakery, Turn left at the first corner. It is behind the flower shop. You will find it very easily.'에 명시되어 있습니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "If you want to find the police station, Go straight three blocks. It is on your left near the subway. You will find it very easily.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"If you want to find the police station, Go straight three blocks. It is on your left near the subway. You will find it very easily.\"\n질문: 윗글을 읽고, 경찰서을(를) 찾아가는 올바른 경로를 고르세요.",
        "options": [
          "지하철역 내부 계단으로 이동",
          "신호등을 건너지 않고 직진",
          "두 블록 직진 후 반대 방향으로 턴",
          "세 블록 똑바로 가세요 (지하철역 근처 왼쪽)"
        ],
        "correctIndex": 3,
        "correctAnswer": "세 블록 똑바로 가세요 (지하철역 근처 왼쪽)",
        "explanation": "지문의 'If you want to find the police station, Go straight three blocks. It is on your left near the subway. You will find it very easily.'에 명시되어 있습니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "If you want to find the hospital, Go straight two blocks and turn left. It is on your right next to the bank. You will find it very easily.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"If you want to find the hospital, Go straight two blocks and turn left. It is on your right next to the bank. You will find it very easily.\"\n질문: 윗글을 읽고, 병원을(를) 찾아가는 올바른 경로를 고르세요.",
        "options": [
          "두 블록 직진 후 반대 방향으로 턴",
          "두 블록 직진해서 왼쪽으로 도세요 (은행 옆 오른쪽)",
          "지하철역 내부 계단으로 이동",
          "신호등을 건너지 않고 직진"
        ],
        "correctIndex": 1,
        "correctAnswer": "두 블록 직진해서 왼쪽으로 도세요 (은행 옆 오른쪽)",
        "explanation": "지문의 'If you want to find the hospital, Go straight two blocks and turn left. It is on your right next to the bank. You will find it very easily.'에 명시되어 있습니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'miss' is very frequently used. It means '놓치다' in Korean.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'miss' is very frequently used. It means '놓치다' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'miss'의 한국어 의미는?",
        "options": [
          "오른쪽",
          "놓치다",
          "똑바로",
          "왼쪽"
        ],
        "correctIndex": 1,
        "correctAnswer": "놓치다",
        "explanation": "'miss'은 '놓치다'입니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'straight' is very frequently used. It means '똑바로' in Korean.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'straight' is very frequently used. It means '똑바로' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'straight'의 한국어 의미는?",
        "options": [
          "오른쪽",
          "왼쪽",
          "블록, 구역",
          "똑바로"
        ],
        "correctIndex": 3,
        "correctAnswer": "똑바로",
        "explanation": "'straight'은 '똑바로'입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'left' is very frequently used. It means '왼쪽' in Korean.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'left' is very frequently used. It means '왼쪽' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'left'의 한국어 의미는?",
        "options": [
          "왼쪽",
          "똑바로",
          "오른쪽",
          "블록, 구역"
        ],
        "correctIndex": 0,
        "correctAnswer": "왼쪽",
        "explanation": "'left'은 '왼쪽'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'right' is very frequently used. It means '오른쪽' in Korean.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'right' is very frequently used. It means '오른쪽' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'right'의 한국어 의미는?",
        "options": [
          "오른쪽",
          "블록, 구역",
          "왼쪽",
          "똑바로"
        ],
        "correctIndex": 0,
        "correctAnswer": "오른쪽",
        "explanation": "'right'은 '오른쪽'입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'block' is very frequently used. It means '블록, 구역' in Korean.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'block' is very frequently used. It means '블록, 구역' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'block'의 한국어 의미는?",
        "options": [
          "오른쪽",
          "왼쪽",
          "똑바로",
          "블록, 구역"
        ],
        "correctIndex": 3,
        "correctAnswer": "블록, 구역",
        "explanation": "'block'은 '블록, 구역'입니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'corner' is very frequently used. It means '모퉁이' in Korean.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'corner' is very frequently used. It means '모퉁이' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'corner'의 한국어 의미는?",
        "options": [
          "오른쪽",
          "모퉁이",
          "똑바로",
          "왼쪽"
        ],
        "correctIndex": 1,
        "correctAnswer": "모퉁이",
        "explanation": "'corner'은 '모퉁이'입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'across' is very frequently used. It means '맞은편에' in Korean.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'across' is very frequently used. It means '맞은편에' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'across'의 한국어 의미는?",
        "options": [
          "맞은편에",
          "똑바로",
          "왼쪽",
          "오른쪽"
        ],
        "correctIndex": 0,
        "correctAnswer": "맞은편에",
        "explanation": "'across'은 '맞은편에'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'between' is very frequently used. It means '사이에' in Korean.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'between' is very frequently used. It means '사이에' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'between'의 한국어 의미는?",
        "options": [
          "오른쪽",
          "왼쪽",
          "똑바로",
          "사이에"
        ],
        "correctIndex": 3,
        "correctAnswer": "사이에",
        "explanation": "'between'은 '사이에'입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'behind' is very frequently used. It means '뒤에' in Korean.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'behind' is very frequently used. It means '뒤에' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'behind'의 한국어 의미는?",
        "options": [
          "뒤에",
          "똑바로",
          "왼쪽",
          "오른쪽"
        ],
        "correctIndex": 0,
        "correctAnswer": "뒤에",
        "explanation": "'behind'은 '뒤에'입니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'hospital' is very frequently used. It means '병원' in Korean.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'hospital' is very frequently used. It means '병원' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'hospital'의 한국어 의미는?",
        "options": [
          "오른쪽",
          "왼쪽",
          "똑바로",
          "병원"
        ],
        "correctIndex": 3,
        "correctAnswer": "병원",
        "explanation": "'hospital'은 '병원'입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 4단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"똑바로\" (단어 첫 글자: s, 총 8글자)",
        "correctAnswer": "straight",
        "explanation": "'똑바로'에 해당하는 영어 단어는 'straight'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 4단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"왼쪽\" (단어 첫 글자: l, 총 4글자)",
        "correctAnswer": "left",
        "explanation": "'왼쪽'에 해당하는 영어 단어는 'left'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 4단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"오른쪽\" (단어 첫 글자: r, 총 5글자)",
        "correctAnswer": "right",
        "explanation": "'오른쪽'에 해당하는 영어 단어는 'right'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 4단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"블록, 구역\" (단어 첫 글자: b, 총 5글자)",
        "correctAnswer": "block",
        "explanation": "'블록, 구역'에 해당하는 영어 단어는 'block'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 4단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"모퉁이\" (단어 첫 글자: c, 총 6글자)",
        "correctAnswer": "corner",
        "explanation": "'모퉁이'에 해당하는 영어 단어는 'corner'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 4단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"맞은편에\" (단어 첫 글자: a, 총 6글자)",
        "correctAnswer": "across",
        "explanation": "'맞은편에'에 해당하는 영어 단어는 'across'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 4단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"사이에\" (단어 첫 글자: b, 총 7글자)",
        "correctAnswer": "between",
        "explanation": "'사이에'에 해당하는 영어 단어는 'between'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 4단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"뒤에\" (단어 첫 글자: b, 총 6글자)",
        "correctAnswer": "behind",
        "explanation": "'뒤에'에 해당하는 영어 단어는 'behind'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 4단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"병원\" (단어 첫 글자: h, 총 8글자)",
        "correctAnswer": "hospital",
        "explanation": "'병원'에 해당하는 영어 단어는 'hospital'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 4단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"도서관\" (단어 첫 글자: l, 총 7글자)",
        "correctAnswer": "library",
        "explanation": "'도서관'에 해당하는 영어 단어는 'library'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 4단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"박물관\" (단어 첫 글자: m, 총 6글자)",
        "correctAnswer": "museum",
        "explanation": "'박물관'에 해당하는 영어 단어는 'museum'입니다."
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 4단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"표, 티켓\" (단어 첫 글자: t, 총 6글자)",
        "correctAnswer": "ticket",
        "explanation": "'표, 티켓'에 해당하는 영어 단어는 'ticket'입니다."
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 4단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"역, 소\" (단어 첫 글자: s, 총 7글자)",
        "correctAnswer": "station",
        "explanation": "'역, 소'에 해당하는 영어 단어는 'station'입니다."
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 4단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"건너다\" (단어 첫 글자: c, 총 5글자)",
        "correctAnswer": "cross",
        "explanation": "'건너다'에 해당하는 영어 단어는 'cross'입니다."
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 4단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"놓치다\" (단어 첫 글자: m, 총 4글자)",
        "correctAnswer": "miss",
        "explanation": "'놓치다'에 해당하는 영어 단어는 'miss'입니다."
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"매표소가 어디에 있나요?\"",
        "chips": [
          "Where",
          "is",
          "the",
          "ticket",
          "office?"
        ],
        "correctAnswer": "Where is the ticket office?",
        "explanation": "'Where is the ticket office?'은 '매표소가 어디에 있나요?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"두 블록 직진해서 왼쪽으로 도세요.\"",
        "chips": [
          "Go",
          "straight",
          "two",
          "blocks",
          "and",
          "turn",
          "left."
        ],
        "correctAnswer": "Go straight two blocks and turn left.",
        "explanation": "'Go straight two blocks and turn left.'은 '두 블록 직진해서 왼쪽으로 도세요.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"오른쪽에 있습니다.\"",
        "chips": [
          "It",
          "is",
          "on",
          "your",
          "right."
        ],
        "correctAnswer": "It is on your right.",
        "explanation": "'It is on your right.'은 '오른쪽에 있습니다.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"쉽게 찾을 수 있을 거예요.\"",
        "chips": [
          "You",
          "can",
          "not",
          "miss",
          "it."
        ],
        "correctAnswer": "You can not miss it.",
        "explanation": "'You can not miss it.'은 '쉽게 찾을 수 있을 거예요.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"도서관에 어떻게 가나요?\"",
        "chips": [
          "How",
          "can",
          "I",
          "get",
          "to",
          "the",
          "library?"
        ],
        "correctAnswer": "How can I get to the library?",
        "explanation": "'How can I get to the library?'은 '도서관에 어떻게 가나요?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"두 번째 모퉁이에서 우회전하세요.\"",
        "chips": [
          "Turn",
          "right",
          "at",
          "the",
          "second",
          "corner."
        ],
        "correctAnswer": "Turn right at the second corner.",
        "explanation": "'Turn right at the second corner.'은 '두 번째 모퉁이에서 우회전하세요.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"박물관은 공원 맞은편에 있어요.\"",
        "chips": [
          "The",
          "museum",
          "is",
          "across",
          "from",
          "the",
          "park."
        ],
        "correctAnswer": "The museum is across from the park.",
        "explanation": "'The museum is across from the park.'은 '박물관은 공원 맞은편에 있어요.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"횡단보도에서 길을 건너세요.\"",
        "chips": [
          "Cross",
          "the",
          "street",
          "at",
          "the",
          "crosswalk."
        ],
        "correctAnswer": "Cross the street at the crosswalk.",
        "explanation": "'Cross the street at the crosswalk.'은 '횡단보도에서 길을 건너세요.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"가장 가까운 지하철역은 어디인가요?\"",
        "chips": [
          "Where",
          "is",
          "the",
          "nearest",
          "subway",
          "station?"
        ],
        "correctAnswer": "Where is the nearest subway station?",
        "explanation": "'Where is the nearest subway station?'은 '가장 가까운 지하철역은 어디인가요?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"빵집과 은행 사이에 있습니다.\"",
        "chips": [
          "It",
          "is",
          "between",
          "the",
          "bakery",
          "and",
          "the",
          "bank."
        ],
        "correctAnswer": "It is between the bakery and the bank.",
        "explanation": "'It is between the bakery and the bank.'은 '빵집과 은행 사이에 있습니다.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 96,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"5분 동안 똑바로 걸어가세요.\"",
        "chips": [
          "Walk",
          "straight",
          "for",
          "five",
          "minutes."
        ],
        "correctAnswer": "Walk straight for five minutes.",
        "explanation": "'Walk straight for five minutes.'은 '5분 동안 똑바로 걸어가세요.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 97,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"이 근처에 우체국이 있나요?\"",
        "chips": [
          "Is",
          "there",
          "a",
          "post",
          "office",
          "near",
          "here?"
        ],
        "correctAnswer": "Is there a post office near here?",
        "explanation": "'Is there a post office near here?'은 '이 근처에 우체국이 있나요?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 98,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"네, 슈퍼마켓 뒤에 있습니다.\"",
        "chips": [
          "Yes",
          "it",
          "is",
          "behind",
          "the",
          "supermarket."
        ],
        "correctAnswer": "Yes, it is behind the supermarket.",
        "explanation": "'Yes, it is behind the supermarket.'은 '네, 슈퍼마켓 뒤에 있습니다.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 99,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"신호등에서 좌회전하세요.\"",
        "chips": [
          "Turn",
          "left",
          "at",
          "the",
          "traffic",
          "light."
        ],
        "correctAnswer": "Turn left at the traffic light.",
        "explanation": "'Turn left at the traffic light.'은 '신호등에서 좌회전하세요.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[최종 골든벨 문제] 다음 우리말에 맞도록 주어진 단어 카드를 순서대로 바르게 배열하세요.\n우리말: \"친절한 도움에 감사드립니다.\"",
        "chips": [
          "Thank",
          "you",
          "for",
          "your",
          "kind",
          "help."
        ],
        "correctAnswer": "Thank you for your kind help.",
        "explanation": "'Thank you for your kind help.'은 '친절한 도움에 감사드립니다.'을 의미하는 핵심 문장입니다."
      }
    ]
  },
  "6G_L05": {
    "name": "5단원: 외모와 인물 묘사 (What does she look like?)",
    "grade": 6,
    "theme": "Describing Appearance & Clothes",
    "totalQuestions": 100,
    "questions": [
      {
        "id": 1,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Minsoo: What does Sarah look like? Sarah: She has long straight black hair and wearing round glasses and a pink dress.",
        "question": "[듣기 · 5단원] 인물 묘사를 듣고, Sarah의 외모 및 옷차림 특징으로 알맞은 것은?",
        "options": [
          "키가 작고 모자를 쓰지 않음",
          "안경을 쓰고 노란 신발 착용",
          "짧은 금발 머리에 정장 착용",
          "긴 검은 생머리 (동그란 안경과 분홍 원피스 착용)"
        ],
        "correctIndex": 3,
        "correctAnswer": "긴 검은 생머리 (동그란 안경과 분홍 원피스 착용)",
        "explanation": "'has long straight black hair'입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kelly: What does Kevin look like? Jisu: She has short curly brown hair and wearing a blue baseball cap and yellow shirt.",
        "question": "[듣기 · 5단원] 인물 묘사를 듣고, Kevin의 외모 및 옷차림 특징으로 알맞은 것은?",
        "options": [
          "키가 작고 모자를 쓰지 않음",
          "안경을 쓰고 노란 신발 착용",
          "짧은 금발 머리에 정장 착용",
          "짧은 갈색 곱슬머리 (파란 야구 모자와 노란 셔츠 착용)"
        ],
        "correctIndex": 3,
        "correctAnswer": "짧은 갈색 곱슬머리 (파란 야구 모자와 노란 셔츠 착용)",
        "explanation": "'has short curly brown hair'입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "David: What does Mr. Kim look like? Kevin: She has neat dark hair and wearing a smart gray suit and silver watch.",
        "question": "[듣기 · 5단원] 인물 묘사를 듣고, Mr. Kim의 외모 및 옷차림 특징으로 알맞은 것은?",
        "options": [
          "짧은 금발 머리에 정장 착용",
          "단정한 짙은 머리 (멋진 회색 양복과 은색 시계 착용)",
          "키가 작고 모자를 쓰지 않음",
          "안경을 쓰고 노란 신발 착용"
        ],
        "correctIndex": 1,
        "correctAnswer": "단정한 짙은 머리 (멋진 회색 양복과 은색 시계 착용)",
        "explanation": "'has neat dark hair'입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Sarah: What does Amy look like? Emma: She has wavy blond hair and wearing a red sweater and carrying a green backpack.",
        "question": "[듣기 · 5단원] 인물 묘사를 듣고, Amy의 외모 및 옷차림 특징으로 알맞은 것은?",
        "options": [
          "키가 작고 모자를 쓰지 않음",
          "안경을 쓰고 노란 신발 착용",
          "짧은 금발 머리에 정장 착용",
          "웨이브 금발 (빨간 스웨터와 초록 배낭 착용)"
        ],
        "correctIndex": 3,
        "correctAnswer": "웨이브 금발 (빨간 스웨터와 초록 배낭 착용)",
        "explanation": "'has wavy blond hair'입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Jisu: What does David look like? Tom: She has short spiky black hair and wearing white sneakers and soccer uniform.",
        "question": "[듣기 · 5단원] 인물 묘사를 듣고, David의 외모 및 옷차림 특징으로 알맞은 것은?",
        "options": [
          "안경을 쓰고 노란 신발 착용",
          "짧은 금발 머리에 정장 착용",
          "짧은 뾰족 머리 (흰 운동화와 축구 유니폼 착용)",
          "키가 작고 모자를 쓰지 않음"
        ],
        "correctIndex": 2,
        "correctAnswer": "짧은 뾰족 머리 (흰 운동화와 축구 유니폼 착용)",
        "explanation": "'has short spiky black hair'입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kevin: What does Sarah look like? Hana: She has long straight black hair and wearing round glasses and a pink dress.",
        "question": "[듣기 · 5단원] 인물 묘사를 듣고, Sarah의 외모 및 옷차림 특징으로 알맞은 것은?",
        "options": [
          "긴 검은 생머리 (동그란 안경과 분홍 원피스 착용)",
          "짧은 금발 머리에 정장 착용",
          "안경을 쓰고 노란 신발 착용",
          "키가 작고 모자를 쓰지 않음"
        ],
        "correctIndex": 0,
        "correctAnswer": "긴 검은 생머리 (동그란 안경과 분홍 원피스 착용)",
        "explanation": "'has long straight black hair'입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Emma: What does Kevin look like? Brian: She has short curly brown hair and wearing a blue baseball cap and yellow shirt.",
        "question": "[듣기 · 5단원] 인물 묘사를 듣고, Kevin의 외모 및 옷차림 특징으로 알맞은 것은?",
        "options": [
          "짧은 갈색 곱슬머리 (파란 야구 모자와 노란 셔츠 착용)",
          "키가 작고 모자를 쓰지 않음",
          "짧은 금발 머리에 정장 착용",
          "안경을 쓰고 노란 신발 착용"
        ],
        "correctIndex": 0,
        "correctAnswer": "짧은 갈색 곱슬머리 (파란 야구 모자와 노란 셔츠 착용)",
        "explanation": "'has short curly brown hair'입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Tom: What does Mr. Kim look like? Amy: She has neat dark hair and wearing a smart gray suit and silver watch.",
        "question": "[듣기 · 5단원] 인물 묘사를 듣고, Mr. Kim의 외모 및 옷차림 특징으로 알맞은 것은?",
        "options": [
          "단정한 짙은 머리 (멋진 회색 양복과 은색 시계 착용)",
          "키가 작고 모자를 쓰지 않음",
          "안경을 쓰고 노란 신발 착용",
          "짧은 금발 머리에 정장 착용"
        ],
        "correctIndex": 0,
        "correctAnswer": "단정한 짙은 머리 (멋진 회색 양복과 은색 시계 착용)",
        "explanation": "'has neat dark hair'입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Hana: What does Amy look like? Paul: She has wavy blond hair and wearing a red sweater and carrying a green backpack.",
        "question": "[듣기 · 5단원] 인물 묘사를 듣고, Amy의 외모 및 옷차림 특징으로 알맞은 것은?",
        "options": [
          "키가 작고 모자를 쓰지 않음",
          "짧은 금발 머리에 정장 착용",
          "안경을 쓰고 노란 신발 착용",
          "웨이브 금발 (빨간 스웨터와 초록 배낭 착용)"
        ],
        "correctIndex": 3,
        "correctAnswer": "웨이브 금발 (빨간 스웨터와 초록 배낭 착용)",
        "explanation": "'has wavy blond hair'입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Brian: What does David look like? Minsoo: She has short spiky black hair and wearing white sneakers and soccer uniform.",
        "question": "[듣기 · 5단원] 인물 묘사를 듣고, David의 외모 및 옷차림 특징으로 알맞은 것은?",
        "options": [
          "키가 작고 모자를 쓰지 않음",
          "짧은 뾰족 머리 (흰 운동화와 축구 유니폼 착용)",
          "안경을 쓰고 노란 신발 착용",
          "짧은 금발 머리에 정장 착용"
        ],
        "correctIndex": 1,
        "correctAnswer": "짧은 뾰족 머리 (흰 운동화와 축구 유니폼 착용)",
        "explanation": "'has short spiky black hair'입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Amy: What does Sarah look like? Kelly: She has long straight black hair and wearing round glasses and a pink dress.",
        "question": "[듣기 · 5단원] 인물 묘사를 듣고, Sarah의 외모 및 옷차림 특징으로 알맞은 것은?",
        "options": [
          "긴 검은 생머리 (동그란 안경과 분홍 원피스 착용)",
          "짧은 금발 머리에 정장 착용",
          "안경을 쓰고 노란 신발 착용",
          "키가 작고 모자를 쓰지 않음"
        ],
        "correctIndex": 0,
        "correctAnswer": "긴 검은 생머리 (동그란 안경과 분홍 원피스 착용)",
        "explanation": "'has long straight black hair'입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Paul: What does Kevin look like? David: She has short curly brown hair and wearing a blue baseball cap and yellow shirt.",
        "question": "[듣기 · 5단원] 인물 묘사를 듣고, Kevin의 외모 및 옷차림 특징으로 알맞은 것은?",
        "options": [
          "짧은 갈색 곱슬머리 (파란 야구 모자와 노란 셔츠 착용)",
          "짧은 금발 머리에 정장 착용",
          "안경을 쓰고 노란 신발 착용",
          "키가 작고 모자를 쓰지 않음"
        ],
        "correctIndex": 0,
        "correctAnswer": "짧은 갈색 곱슬머리 (파란 야구 모자와 노란 셔츠 착용)",
        "explanation": "'has short curly brown hair'입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: He looks very kind and friendly. Sarah: I completely agree with you!",
        "question": "[듣기 · 5단원] 대화에서 Minsoo이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "그는 매우 친절하고 다정해 보여."
        ],
        "correctIndex": 3,
        "correctAnswer": "그는 매우 친절하고 다정해 보여.",
        "explanation": "'He looks very kind and friendly.'은 '그는 매우 친절하고 다정해 보여.'을 의미합니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kelly: She is wearing white running shoes. Jisu: I completely agree with you!",
        "question": "[듣기 · 5단원] 대화에서 Kelly이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "그녀는 흰색 운동화를 신고 있어.",
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자."
        ],
        "correctIndex": 1,
        "correctAnswer": "그녀는 흰색 운동화를 신고 있어.",
        "explanation": "'She is wearing white running shoes.'은 '그녀는 흰색 운동화를 신고 있어.'을 의미합니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "David: Can you describe your best friend? Kevin: I completely agree with you!",
        "question": "[듣기 · 5단원] 대화에서 David이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어.",
          "가장 친한 친구를 묘사해 줄 수 있니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "가장 친한 친구를 묘사해 줄 수 있니?",
        "explanation": "'Can you describe your best friend?'은 '가장 친한 친구를 묘사해 줄 수 있니?'을 의미합니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Sarah: What does she look like? Emma: I completely agree with you!",
        "question": "[듣기 · 5단원] 대화에서 Sarah이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "그녀는 어떻게 생겼니?",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 1,
        "correctAnswer": "그녀는 어떻게 생겼니?",
        "explanation": "'What does she look like?'은 '그녀는 어떻게 생겼니?'을 의미합니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Jisu: She has long straight hair. Tom: I completely agree with you!",
        "question": "[듣기 · 5단원] 대화에서 Jisu이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어.",
          "그녀는 긴 생머리를 가지고 있어."
        ],
        "correctIndex": 3,
        "correctAnswer": "그녀는 긴 생머리를 가지고 있어.",
        "explanation": "'She has long straight hair.'은 '그녀는 긴 생머리를 가지고 있어.'을 의미합니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kevin: He is wearing glasses. Hana: I completely agree with you!",
        "question": "[듣기 · 5단원] 대화에서 Kevin이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자.",
          "그는 안경을 쓰고 있어.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 2,
        "correctAnswer": "그는 안경을 쓰고 있어.",
        "explanation": "'He is wearing glasses.'은 '그는 안경을 쓰고 있어.'을 의미합니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Emma: What does your brother look like? Brian: I completely agree with you!",
        "question": "[듣기 · 5단원] 대화에서 Emma이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "네 남동생은 어떻게 생겼니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "네 남동생은 어떻게 생겼니?",
        "explanation": "'What does your brother look like?'은 '네 남동생은 어떻게 생겼니?'을 의미합니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Tom: He has short curly hair. Amy: I completely agree with you!",
        "question": "[듣기 · 5단원] 대화에서 Tom이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "그는 짧은 곱슬머리를 가지고 있어."
        ],
        "correctIndex": 3,
        "correctAnswer": "그는 짧은 곱슬머리를 가지고 있어.",
        "explanation": "'He has short curly hair.'은 '그는 짧은 곱슬머리를 가지고 있어.'을 의미합니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Hana: She is tall and has brown eyes. Paul: I completely agree with you!",
        "question": "[듣기 · 5단원] 대화에서 Hana이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "그녀는 키가 크고 갈색 눈을 가졌어."
        ],
        "correctIndex": 3,
        "correctAnswer": "그녀는 키가 크고 갈색 눈을 가졌어.",
        "explanation": "'She is tall and has brown eyes.'은 '그녀는 키가 크고 갈색 눈을 가졌어.'을 의미합니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Brian: He is wearing a blue jacket. Minsoo: I completely agree with you!",
        "question": "[듣기 · 5단원] 대화에서 Brian이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "그는 파란 재킷을 입고 있어.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 2,
        "correctAnswer": "그는 파란 재킷을 입고 있어.",
        "explanation": "'He is wearing a blue jacket.'은 '그는 파란 재킷을 입고 있어.'을 의미합니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Amy: She has a red backpack on her back. Kelly: I completely agree with you!",
        "question": "[듣기 · 5단원] 대화에서 Amy이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그녀는 등에 빨간 배낭을 메고 있어.",
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 0,
        "correctAnswer": "그녀는 등에 빨간 배낭을 메고 있어.",
        "explanation": "'She has a red backpack on her back.'은 '그녀는 등에 빨간 배낭을 메고 있어.'을 의미합니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Paul: Who is the boy with the cap? David: I completely agree with you!",
        "question": "[듣기 · 5단원] 대화에서 Paul이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자.",
          "모자를 쓴 저 소년은 누구니?",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 2,
        "correctAnswer": "모자를 쓴 저 소년은 누구니?",
        "explanation": "'Who is the boy with the cap?'은 '모자를 쓴 저 소년은 누구니?'을 의미합니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Do you know the meaning of 'hair'? Sarah: Yes, it means '머리카락'.",
        "question": "[듣기 · 5단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'hair'의 뜻은?",
        "options": [
          "생머리의, 곧은",
          "머리카락",
          "곱슬머리의",
          "~처럼 보이다"
        ],
        "correctIndex": 1,
        "correctAnswer": "머리카락",
        "explanation": "'hair'은 '머리카락'를 뜻합니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kelly: Do you know the meaning of 'eyes'? Jisu: Yes, it means '눈'.",
        "question": "[듣기 · 5단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'eyes'의 뜻은?",
        "options": [
          "생머리의, 곧은",
          "곱슬머리의",
          "~처럼 보이다",
          "눈"
        ],
        "correctIndex": 3,
        "correctAnswer": "눈",
        "explanation": "'eyes'은 '눈'를 뜻합니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "David: Do you know the meaning of 'cap'? Kevin: Yes, it means '모자'.",
        "question": "[듣기 · 5단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'cap'의 뜻은?",
        "options": [
          "생머리의, 곧은",
          "곱슬머리의",
          "~처럼 보이다",
          "모자"
        ],
        "correctIndex": 3,
        "correctAnswer": "모자",
        "explanation": "'cap'은 '모자'를 뜻합니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Sarah: Do you know the meaning of 'sneakers'? Emma: Yes, it means '운동화'.",
        "question": "[듣기 · 5단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'sneakers'의 뜻은?",
        "options": [
          "생머리의, 곧은",
          "운동화",
          "곱슬머리의",
          "~처럼 보이다"
        ],
        "correctIndex": 1,
        "correctAnswer": "운동화",
        "explanation": "'sneakers'은 '운동화'를 뜻합니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Jisu: Do you know the meaning of 'dress'? Tom: Yes, it means '원피스, 드레스'.",
        "question": "[듣기 · 5단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'dress'의 뜻은?",
        "options": [
          "곱슬머리의",
          "~처럼 보이다",
          "생머리의, 곧은",
          "원피스, 드레스"
        ],
        "correctIndex": 3,
        "correctAnswer": "원피스, 드레스",
        "explanation": "'dress'은 '원피스, 드레스'를 뜻합니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kevin: Do you know the meaning of 'blond'? Hana: Yes, it means '금발의'.",
        "question": "[듣기 · 5단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'blond'의 뜻은?",
        "options": [
          "금발의",
          "~처럼 보이다",
          "곱슬머리의",
          "생머리의, 곧은"
        ],
        "correctIndex": 0,
        "correctAnswer": "금발의",
        "explanation": "'blond'은 '금발의'를 뜻합니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Emma: Do you know the meaning of 'look'? Brian: Yes, it means '~처럼 보이다'.",
        "question": "[듣기 · 5단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'look'의 뜻은?",
        "options": [
          "안경",
          "곱슬머리의",
          "~처럼 보이다",
          "생머리의, 곧은"
        ],
        "correctIndex": 2,
        "correctAnswer": "~처럼 보이다",
        "explanation": "'look'은 '~처럼 보이다'를 뜻합니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Tom: Do you know the meaning of 'curly'? Amy: Yes, it means '곱슬머리의'.",
        "question": "[듣기 · 5단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'curly'의 뜻은?",
        "options": [
          "곱슬머리의",
          "안경",
          "~처럼 보이다",
          "생머리의, 곧은"
        ],
        "correctIndex": 0,
        "correctAnswer": "곱슬머리의",
        "explanation": "'curly'은 '곱슬머리의'를 뜻합니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Hana: Do you know the meaning of 'straight'? Paul: Yes, it means '생머리의, 곧은'.",
        "question": "[듣기 · 5단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'straight'의 뜻은?",
        "options": [
          "생머리의, 곧은",
          "안경",
          "~처럼 보이다",
          "곱슬머리의"
        ],
        "correctIndex": 0,
        "correctAnswer": "생머리의, 곧은",
        "explanation": "'straight'은 '생머리의, 곧은'를 뜻합니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Brian: Do you know the meaning of 'glasses'? Minsoo: Yes, it means '안경'.",
        "question": "[듣기 · 5단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'glasses'의 뜻은?",
        "options": [
          "생머리의, 곧은",
          "~처럼 보이다",
          "안경",
          "곱슬머리의"
        ],
        "correctIndex": 2,
        "correctAnswer": "안경",
        "explanation": "'glasses'은 '안경'를 뜻합니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Amy: Do you know the meaning of 'wear'? Kelly: Yes, it means '입다, 쓰다'.",
        "question": "[듣기 · 5단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'wear'의 뜻은?",
        "options": [
          "곱슬머리의",
          "~처럼 보이다",
          "입다, 쓰다",
          "생머리의, 곧은"
        ],
        "correctIndex": 2,
        "correctAnswer": "입다, 쓰다",
        "explanation": "'wear'은 '입다, 쓰다'를 뜻합니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Minsoo. He is wearing glasses. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Minsoo. He is wearing glasses. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "그는 안경을 쓰고 있어.",
          "길을 잃어버려서 헤매고 있다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 0,
        "correctAnswer": "그는 안경을 쓰고 있어.",
        "explanation": "'He is wearing glasses.'(그는 안경을 쓰고 있어.)이 핵심 문장입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kelly. What does your brother look like? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kelly. What does your brother look like? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "네 남동생은 어떻게 생겼니?",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "네 남동생은 어떻게 생겼니?",
        "explanation": "'What does your brother look like?'(네 남동생은 어떻게 생겼니?)이 핵심 문장입니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is David. He has short curly hair. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is David. He has short curly hair. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "그는 짧은 곱슬머리를 가지고 있어."
        ],
        "correctIndex": 3,
        "correctAnswer": "그는 짧은 곱슬머리를 가지고 있어.",
        "explanation": "'He has short curly hair.'(그는 짧은 곱슬머리를 가지고 있어.)이 핵심 문장입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Sarah. She is tall and has brown eyes. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Sarah. She is tall and has brown eyes. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "학교 숙제가 너무 많아서 피곤하다.",
          "그녀는 키가 크고 갈색 눈을 가졌어.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 1,
        "correctAnswer": "그녀는 키가 크고 갈색 눈을 가졌어.",
        "explanation": "'She is tall and has brown eyes.'(그녀는 키가 크고 갈색 눈을 가졌어.)이 핵심 문장입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Jisu. He is wearing a blue jacket. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Jisu. He is wearing a blue jacket. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Jisu이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "그는 파란 재킷을 입고 있어."
        ],
        "correctIndex": 3,
        "correctAnswer": "그는 파란 재킷을 입고 있어.",
        "explanation": "'He is wearing a blue jacket.'(그는 파란 재킷을 입고 있어.)이 핵심 문장입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kevin. She has a red backpack on her back. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kevin. She has a red backpack on her back. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kevin이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "그녀는 등에 빨간 배낭을 메고 있어.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 1,
        "correctAnswer": "그녀는 등에 빨간 배낭을 메고 있어.",
        "explanation": "'She has a red backpack on her back.'(그녀는 등에 빨간 배낭을 메고 있어.)이 핵심 문장입니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Emma. Who is the boy with the cap? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Emma. Who is the boy with the cap? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Emma이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "학교 숙제가 너무 많아서 피곤하다.",
          "모자를 쓴 저 소년은 누구니?",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 1,
        "correctAnswer": "모자를 쓴 저 소년은 누구니?",
        "explanation": "'Who is the boy with the cap?'(모자를 쓴 저 소년은 누구니?)이 핵심 문장입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Tom. He is my cousin from Seoul. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Tom. He is my cousin from Seoul. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Tom이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "서울에서 온 내 사촌이야.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "서울에서 온 내 사촌이야.",
        "explanation": "'He is my cousin from Seoul.'(서울에서 온 내 사촌이야.)이 핵심 문장입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Hana. My teacher wears round glasses. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Hana. My teacher wears round glasses. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Hana이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "우리 선생님은 동그란 안경을 쓰셔.",
          "길을 잃어버려서 헤매고 있다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 0,
        "correctAnswer": "우리 선생님은 동그란 안경을 쓰셔.",
        "explanation": "'My teacher wears round glasses.'(우리 선생님은 동그란 안경을 쓰셔.)이 핵심 문장입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Brian. She has wavy blond hair. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Brian. She has wavy blond hair. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Brian이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "길을 잃어버려서 헤매고 있다.",
          "그녀는 웨이브 진 금발을 가지고 있어."
        ],
        "correctIndex": 3,
        "correctAnswer": "그녀는 웨이브 진 금발을 가지고 있어.",
        "explanation": "'She has wavy blond hair.'(그녀는 웨이브 진 금발을 가지고 있어.)이 핵심 문장입니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Amy. He looks very kind and friendly. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Amy. He looks very kind and friendly. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Amy이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "그는 매우 친절하고 다정해 보여.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 1,
        "correctAnswer": "그는 매우 친절하고 다정해 보여.",
        "explanation": "'He looks very kind and friendly.'(그는 매우 친절하고 다정해 보여.)이 핵심 문장입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Paul. She is wearing white running shoes. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Paul. She is wearing white running shoes. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Paul이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "학교 숙제가 너무 많아서 피곤하다.",
          "길을 잃어버려서 헤매고 있다.",
          "그녀는 흰색 운동화를 신고 있어.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 2,
        "correctAnswer": "그녀는 흰색 운동화를 신고 있어.",
        "explanation": "'She is wearing white running shoes.'(그녀는 흰색 운동화를 신고 있어.)이 핵심 문장입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Minsoo. Can you describe your best friend? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Minsoo. Can you describe your best friend? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "가장 친한 친구를 묘사해 줄 수 있니?",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "가장 친한 친구를 묘사해 줄 수 있니?",
        "explanation": "'Can you describe your best friend?'(가장 친한 친구를 묘사해 줄 수 있니?)이 핵심 문장입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kelly. What does she look like? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kelly. What does she look like? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "학교 숙제가 너무 많아서 피곤하다.",
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "그녀는 어떻게 생겼니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "그녀는 어떻게 생겼니?",
        "explanation": "'What does she look like?'(그녀는 어떻게 생겼니?)이 핵심 문장입니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is David. She has long straight hair. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is David. She has long straight hair. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "그녀는 긴 생머리를 가지고 있어.",
          "길을 잃어버려서 헤매고 있다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 0,
        "correctAnswer": "그녀는 긴 생머리를 가지고 있어.",
        "explanation": "'She has long straight hair.'(그녀는 긴 생머리를 가지고 있어.)이 핵심 문장입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Look at Sarah. She has long straight black hair and big brown eyes. Today she is wearing round glasses and a pink dress.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Look at Sarah. She has long straight black hair and big brown eyes. Today she is wearing round glasses and a pink dress.\"\n질문: 윗글에서 설명하고 있는 Sarah의 외모 및 복장으로 바른 것은?",
        "options": [
          "긴 검은 생머리에 동그란 안경과 분홍 원피스 착용",
          "짧은 곱슬머리에 모자 미착용",
          "안경을 벗고 파란 신발 착용",
          "갈색 눈동자에 검은 코트 착용"
        ],
        "correctIndex": 0,
        "correctAnswer": "긴 검은 생머리에 동그란 안경과 분홍 원피스 착용",
        "explanation": "지문의 'Look at Sarah. She has long straight black hair and big brown eyes. Today she is wearing round glasses and a pink dress.'에 명시되어 있습니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Look at Kevin. She has short curly brown hair and warm blue eyes. Today she is wearing a blue baseball cap and yellow shirt.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Look at Kevin. She has short curly brown hair and warm blue eyes. Today she is wearing a blue baseball cap and yellow shirt.\"\n질문: 윗글에서 설명하고 있는 Kevin의 외모 및 복장으로 바른 것은?",
        "options": [
          "안경을 벗고 파란 신발 착용",
          "갈색 눈동자에 검은 코트 착용",
          "짧은 곱슬머리에 모자 미착용",
          "짧은 갈색 곱슬머리에 파란 야구 모자와 노란 셔츠 착용"
        ],
        "correctIndex": 3,
        "correctAnswer": "짧은 갈색 곱슬머리에 파란 야구 모자와 노란 셔츠 착용",
        "explanation": "지문의 'Look at Kevin. She has short curly brown hair and warm blue eyes. Today she is wearing a blue baseball cap and yellow shirt.'에 명시되어 있습니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Look at Mr. Kim. She has neat dark hair and gentle smile. Today she is wearing a smart gray suit and silver watch.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Look at Mr. Kim. She has neat dark hair and gentle smile. Today she is wearing a smart gray suit and silver watch.\"\n질문: 윗글에서 설명하고 있는 Mr. Kim의 외모 및 복장으로 바른 것은?",
        "options": [
          "안경을 벗고 파란 신발 착용",
          "갈색 눈동자에 검은 코트 착용",
          "짧은 곱슬머리에 모자 미착용",
          "단정한 짙은 머리에 멋진 회색 양복과 은색 시계 착용"
        ],
        "correctIndex": 3,
        "correctAnswer": "단정한 짙은 머리에 멋진 회색 양복과 은색 시계 착용",
        "explanation": "지문의 'Look at Mr. Kim. She has neat dark hair and gentle smile. Today she is wearing a smart gray suit and silver watch.'에 명시되어 있습니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Look at Amy. She has wavy blond hair and bright green eyes. Today she is wearing a red sweater and carrying a green backpack.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Look at Amy. She has wavy blond hair and bright green eyes. Today she is wearing a red sweater and carrying a green backpack.\"\n질문: 윗글에서 설명하고 있는 Amy의 외모 및 복장으로 바른 것은?",
        "options": [
          "안경을 벗고 파란 신발 착용",
          "짧은 곱슬머리에 모자 미착용",
          "갈색 눈동자에 검은 코트 착용",
          "웨이브 금발에 빨간 스웨터와 초록 배낭 착용"
        ],
        "correctIndex": 3,
        "correctAnswer": "웨이브 금발에 빨간 스웨터와 초록 배낭 착용",
        "explanation": "지문의 'Look at Amy. She has wavy blond hair and bright green eyes. Today she is wearing a red sweater and carrying a green backpack.'에 명시되어 있습니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Look at David. She has short spiky black hair and tall and strong. Today she is wearing white sneakers and soccer uniform.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Look at David. She has short spiky black hair and tall and strong. Today she is wearing white sneakers and soccer uniform.\"\n질문: 윗글에서 설명하고 있는 David의 외모 및 복장으로 바른 것은?",
        "options": [
          "짧은 뾰족 머리에 흰 운동화와 축구 유니폼 착용",
          "안경을 벗고 파란 신발 착용",
          "짧은 곱슬머리에 모자 미착용",
          "갈색 눈동자에 검은 코트 착용"
        ],
        "correctIndex": 0,
        "correctAnswer": "짧은 뾰족 머리에 흰 운동화와 축구 유니폼 착용",
        "explanation": "지문의 'Look at David. She has short spiky black hair and tall and strong. Today she is wearing white sneakers and soccer uniform.'에 명시되어 있습니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Look at Sarah. She has long straight black hair and big brown eyes. Today she is wearing round glasses and a pink dress.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Look at Sarah. She has long straight black hair and big brown eyes. Today she is wearing round glasses and a pink dress.\"\n질문: 윗글에서 설명하고 있는 Sarah의 외모 및 복장으로 바른 것은?",
        "options": [
          "안경을 벗고 파란 신발 착용",
          "짧은 곱슬머리에 모자 미착용",
          "긴 검은 생머리에 동그란 안경과 분홍 원피스 착용",
          "갈색 눈동자에 검은 코트 착용"
        ],
        "correctIndex": 2,
        "correctAnswer": "긴 검은 생머리에 동그란 안경과 분홍 원피스 착용",
        "explanation": "지문의 'Look at Sarah. She has long straight black hair and big brown eyes. Today she is wearing round glasses and a pink dress.'에 명시되어 있습니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Look at Kevin. She has short curly brown hair and warm blue eyes. Today she is wearing a blue baseball cap and yellow shirt.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Look at Kevin. She has short curly brown hair and warm blue eyes. Today she is wearing a blue baseball cap and yellow shirt.\"\n질문: 윗글에서 설명하고 있는 Kevin의 외모 및 복장으로 바른 것은?",
        "options": [
          "짧은 곱슬머리에 모자 미착용",
          "갈색 눈동자에 검은 코트 착용",
          "안경을 벗고 파란 신발 착용",
          "짧은 갈색 곱슬머리에 파란 야구 모자와 노란 셔츠 착용"
        ],
        "correctIndex": 3,
        "correctAnswer": "짧은 갈색 곱슬머리에 파란 야구 모자와 노란 셔츠 착용",
        "explanation": "지문의 'Look at Kevin. She has short curly brown hair and warm blue eyes. Today she is wearing a blue baseball cap and yellow shirt.'에 명시되어 있습니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Look at Mr. Kim. She has neat dark hair and gentle smile. Today she is wearing a smart gray suit and silver watch.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Look at Mr. Kim. She has neat dark hair and gentle smile. Today she is wearing a smart gray suit and silver watch.\"\n질문: 윗글에서 설명하고 있는 Mr. Kim의 외모 및 복장으로 바른 것은?",
        "options": [
          "단정한 짙은 머리에 멋진 회색 양복과 은색 시계 착용",
          "짧은 곱슬머리에 모자 미착용",
          "안경을 벗고 파란 신발 착용",
          "갈색 눈동자에 검은 코트 착용"
        ],
        "correctIndex": 0,
        "correctAnswer": "단정한 짙은 머리에 멋진 회색 양복과 은색 시계 착용",
        "explanation": "지문의 'Look at Mr. Kim. She has neat dark hair and gentle smile. Today she is wearing a smart gray suit and silver watch.'에 명시되어 있습니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Look at Amy. She has wavy blond hair and bright green eyes. Today she is wearing a red sweater and carrying a green backpack.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Look at Amy. She has wavy blond hair and bright green eyes. Today she is wearing a red sweater and carrying a green backpack.\"\n질문: 윗글에서 설명하고 있는 Amy의 외모 및 복장으로 바른 것은?",
        "options": [
          "짧은 곱슬머리에 모자 미착용",
          "웨이브 금발에 빨간 스웨터와 초록 배낭 착용",
          "갈색 눈동자에 검은 코트 착용",
          "안경을 벗고 파란 신발 착용"
        ],
        "correctIndex": 1,
        "correctAnswer": "웨이브 금발에 빨간 스웨터와 초록 배낭 착용",
        "explanation": "지문의 'Look at Amy. She has wavy blond hair and bright green eyes. Today she is wearing a red sweater and carrying a green backpack.'에 명시되어 있습니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Look at David. She has short spiky black hair and tall and strong. Today she is wearing white sneakers and soccer uniform.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Look at David. She has short spiky black hair and tall and strong. Today she is wearing white sneakers and soccer uniform.\"\n질문: 윗글에서 설명하고 있는 David의 외모 및 복장으로 바른 것은?",
        "options": [
          "짧은 뾰족 머리에 흰 운동화와 축구 유니폼 착용",
          "짧은 곱슬머리에 모자 미착용",
          "갈색 눈동자에 검은 코트 착용",
          "안경을 벗고 파란 신발 착용"
        ],
        "correctIndex": 0,
        "correctAnswer": "짧은 뾰족 머리에 흰 운동화와 축구 유니폼 착용",
        "explanation": "지문의 'Look at David. She has short spiky black hair and tall and strong. Today she is wearing white sneakers and soccer uniform.'에 명시되어 있습니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'blond' is very frequently used. It means '금발의' in Korean.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'blond' is very frequently used. It means '금발의' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'blond'의 한국어 의미는?",
        "options": [
          "생머리의, 곧은",
          "곱슬머리의",
          "~처럼 보이다",
          "금발의"
        ],
        "correctIndex": 3,
        "correctAnswer": "금발의",
        "explanation": "'blond'은 '금발의'입니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'look' is very frequently used. It means '~처럼 보이다' in Korean.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'look' is very frequently used. It means '~처럼 보이다' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'look'의 한국어 의미는?",
        "options": [
          "~처럼 보이다",
          "곱슬머리의",
          "생머리의, 곧은",
          "안경"
        ],
        "correctIndex": 0,
        "correctAnswer": "~처럼 보이다",
        "explanation": "'look'은 '~처럼 보이다'입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'curly' is very frequently used. It means '곱슬머리의' in Korean.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'curly' is very frequently used. It means '곱슬머리의' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'curly'의 한국어 의미는?",
        "options": [
          "곱슬머리의",
          "~처럼 보이다",
          "생머리의, 곧은",
          "안경"
        ],
        "correctIndex": 0,
        "correctAnswer": "곱슬머리의",
        "explanation": "'curly'은 '곱슬머리의'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'straight' is very frequently used. It means '생머리의, 곧은' in Korean.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'straight' is very frequently used. It means '생머리의, 곧은' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'straight'의 한국어 의미는?",
        "options": [
          "곱슬머리의",
          "~처럼 보이다",
          "안경",
          "생머리의, 곧은"
        ],
        "correctIndex": 3,
        "correctAnswer": "생머리의, 곧은",
        "explanation": "'straight'은 '생머리의, 곧은'입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'glasses' is very frequently used. It means '안경' in Korean.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'glasses' is very frequently used. It means '안경' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'glasses'의 한국어 의미는?",
        "options": [
          "생머리의, 곧은",
          "~처럼 보이다",
          "안경",
          "곱슬머리의"
        ],
        "correctIndex": 2,
        "correctAnswer": "안경",
        "explanation": "'glasses'은 '안경'입니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'wear' is very frequently used. It means '입다, 쓰다' in Korean.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'wear' is very frequently used. It means '입다, 쓰다' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'wear'의 한국어 의미는?",
        "options": [
          "입다, 쓰다",
          "~처럼 보이다",
          "곱슬머리의",
          "생머리의, 곧은"
        ],
        "correctIndex": 0,
        "correctAnswer": "입다, 쓰다",
        "explanation": "'wear'은 '입다, 쓰다'입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'tall' is very frequently used. It means '키가 큰' in Korean.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'tall' is very frequently used. It means '키가 큰' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'tall'의 한국어 의미는?",
        "options": [
          "생머리의, 곧은",
          "곱슬머리의",
          "~처럼 보이다",
          "키가 큰"
        ],
        "correctIndex": 3,
        "correctAnswer": "키가 큰",
        "explanation": "'tall'은 '키가 큰'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'short' is very frequently used. It means '키가 작은, 짧은' in Korean.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'short' is very frequently used. It means '키가 작은, 짧은' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'short'의 한국어 의미는?",
        "options": [
          "곱슬머리의",
          "생머리의, 곧은",
          "키가 작은, 짧은",
          "~처럼 보이다"
        ],
        "correctIndex": 2,
        "correctAnswer": "키가 작은, 짧은",
        "explanation": "'short'은 '키가 작은, 짧은'입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'sweater' is very frequently used. It means '스웨터' in Korean.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'sweater' is very frequently used. It means '스웨터' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'sweater'의 한국어 의미는?",
        "options": [
          "스웨터",
          "~처럼 보이다",
          "곱슬머리의",
          "생머리의, 곧은"
        ],
        "correctIndex": 0,
        "correctAnswer": "스웨터",
        "explanation": "'sweater'은 '스웨터'입니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'backpack' is very frequently used. It means '배낭' in Korean.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'backpack' is very frequently used. It means '배낭' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'backpack'의 한국어 의미는?",
        "options": [
          "배낭",
          "곱슬머리의",
          "생머리의, 곧은",
          "~처럼 보이다"
        ],
        "correctIndex": 0,
        "correctAnswer": "배낭",
        "explanation": "'backpack'은 '배낭'입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 5단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"~처럼 보이다\" (단어 첫 글자: l, 총 4글자)",
        "correctAnswer": "look",
        "explanation": "'~처럼 보이다'에 해당하는 영어 단어는 'look'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 5단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"곱슬머리의\" (단어 첫 글자: c, 총 5글자)",
        "correctAnswer": "curly",
        "explanation": "'곱슬머리의'에 해당하는 영어 단어는 'curly'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 5단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"생머리의, 곧은\" (단어 첫 글자: s, 총 8글자)",
        "correctAnswer": "straight",
        "explanation": "'생머리의, 곧은'에 해당하는 영어 단어는 'straight'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 5단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"안경\" (단어 첫 글자: g, 총 7글자)",
        "correctAnswer": "glasses",
        "explanation": "'안경'에 해당하는 영어 단어는 'glasses'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 5단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"입다, 쓰다\" (단어 첫 글자: w, 총 4글자)",
        "correctAnswer": "wear",
        "explanation": "'입다, 쓰다'에 해당하는 영어 단어는 'wear'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 5단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"키가 큰\" (단어 첫 글자: t, 총 4글자)",
        "correctAnswer": "tall",
        "explanation": "'키가 큰'에 해당하는 영어 단어는 'tall'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 5단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"키가 작은, 짧은\" (단어 첫 글자: s, 총 5글자)",
        "correctAnswer": "short",
        "explanation": "'키가 작은, 짧은'에 해당하는 영어 단어는 'short'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 5단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"스웨터\" (단어 첫 글자: s, 총 7글자)",
        "correctAnswer": "sweater",
        "explanation": "'스웨터'에 해당하는 영어 단어는 'sweater'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 5단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"배낭\" (단어 첫 글자: b, 총 8글자)",
        "correctAnswer": "backpack",
        "explanation": "'배낭'에 해당하는 영어 단어는 'backpack'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 5단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"머리카락\" (단어 첫 글자: h, 총 4글자)",
        "correctAnswer": "hair",
        "explanation": "'머리카락'에 해당하는 영어 단어는 'hair'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 5단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"눈\" (단어 첫 글자: e, 총 4글자)",
        "correctAnswer": "eyes",
        "explanation": "'눈'에 해당하는 영어 단어는 'eyes'입니다."
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 5단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"모자\" (단어 첫 글자: c, 총 3글자)",
        "correctAnswer": "cap",
        "explanation": "'모자'에 해당하는 영어 단어는 'cap'입니다."
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 5단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"운동화\" (단어 첫 글자: s, 총 8글자)",
        "correctAnswer": "sneakers",
        "explanation": "'운동화'에 해당하는 영어 단어는 'sneakers'입니다."
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 5단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"원피스, 드레스\" (단어 첫 글자: d, 총 5글자)",
        "correctAnswer": "dress",
        "explanation": "'원피스, 드레스'에 해당하는 영어 단어는 'dress'입니다."
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 5단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"금발의\" (단어 첫 글자: b, 총 5글자)",
        "correctAnswer": "blond",
        "explanation": "'금발의'에 해당하는 영어 단어는 'blond'입니다."
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"그녀는 어떻게 생겼니?\"",
        "chips": [
          "What",
          "does",
          "she",
          "look",
          "like?"
        ],
        "correctAnswer": "What does she look like?",
        "explanation": "'What does she look like?'은 '그녀는 어떻게 생겼니?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"그녀는 긴 생머리를 가지고 있어.\"",
        "chips": [
          "She",
          "has",
          "long",
          "straight",
          "hair."
        ],
        "correctAnswer": "She has long straight hair.",
        "explanation": "'She has long straight hair.'은 '그녀는 긴 생머리를 가지고 있어.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"그는 안경을 쓰고 있어.\"",
        "chips": [
          "He",
          "is",
          "wearing",
          "glasses."
        ],
        "correctAnswer": "He is wearing glasses.",
        "explanation": "'He is wearing glasses.'은 '그는 안경을 쓰고 있어.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"네 남동생은 어떻게 생겼니?\"",
        "chips": [
          "What",
          "does",
          "your",
          "brother",
          "look",
          "like?"
        ],
        "correctAnswer": "What does your brother look like?",
        "explanation": "'What does your brother look like?'은 '네 남동생은 어떻게 생겼니?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"그는 짧은 곱슬머리를 가지고 있어.\"",
        "chips": [
          "He",
          "has",
          "short",
          "curly",
          "hair."
        ],
        "correctAnswer": "He has short curly hair.",
        "explanation": "'He has short curly hair.'은 '그는 짧은 곱슬머리를 가지고 있어.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"그녀는 키가 크고 갈색 눈을 가졌어.\"",
        "chips": [
          "She",
          "is",
          "tall",
          "and",
          "has",
          "brown",
          "eyes."
        ],
        "correctAnswer": "She is tall and has brown eyes.",
        "explanation": "'She is tall and has brown eyes.'은 '그녀는 키가 크고 갈색 눈을 가졌어.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"그는 파란 재킷을 입고 있어.\"",
        "chips": [
          "He",
          "is",
          "wearing",
          "a",
          "blue",
          "jacket."
        ],
        "correctAnswer": "He is wearing a blue jacket.",
        "explanation": "'He is wearing a blue jacket.'은 '그는 파란 재킷을 입고 있어.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"그녀는 등에 빨간 배낭을 메고 있어.\"",
        "chips": [
          "She",
          "has",
          "a",
          "red",
          "backpack",
          "on",
          "her",
          "back."
        ],
        "correctAnswer": "She has a red backpack on her back.",
        "explanation": "'She has a red backpack on her back.'은 '그녀는 등에 빨간 배낭을 메고 있어.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"모자를 쓴 저 소년은 누구니?\"",
        "chips": [
          "Who",
          "is",
          "the",
          "boy",
          "with",
          "the",
          "cap?"
        ],
        "correctAnswer": "Who is the boy with the cap?",
        "explanation": "'Who is the boy with the cap?'은 '모자를 쓴 저 소년은 누구니?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"서울에서 온 내 사촌이야.\"",
        "chips": [
          "He",
          "is",
          "my",
          "cousin",
          "from",
          "Seoul."
        ],
        "correctAnswer": "He is my cousin from Seoul.",
        "explanation": "'He is my cousin from Seoul.'은 '서울에서 온 내 사촌이야.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 96,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"우리 선생님은 동그란 안경을 쓰셔.\"",
        "chips": [
          "My",
          "teacher",
          "wears",
          "round",
          "glasses."
        ],
        "correctAnswer": "My teacher wears round glasses.",
        "explanation": "'My teacher wears round glasses.'은 '우리 선생님은 동그란 안경을 쓰셔.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 97,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"그녀는 웨이브 진 금발을 가지고 있어.\"",
        "chips": [
          "She",
          "has",
          "wavy",
          "blond",
          "hair."
        ],
        "correctAnswer": "She has wavy blond hair.",
        "explanation": "'She has wavy blond hair.'은 '그녀는 웨이브 진 금발을 가지고 있어.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 98,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"그는 매우 친절하고 다정해 보여.\"",
        "chips": [
          "He",
          "looks",
          "very",
          "kind",
          "and",
          "friendly."
        ],
        "correctAnswer": "He looks very kind and friendly.",
        "explanation": "'He looks very kind and friendly.'은 '그는 매우 친절하고 다정해 보여.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 99,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"그녀는 흰색 운동화를 신고 있어.\"",
        "chips": [
          "She",
          "is",
          "wearing",
          "white",
          "running",
          "shoes."
        ],
        "correctAnswer": "She is wearing white running shoes.",
        "explanation": "'She is wearing white running shoes.'은 '그녀는 흰색 운동화를 신고 있어.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[최종 골든벨 문제] 다음 우리말에 맞도록 주어진 단어 카드를 순서대로 바르게 배열하세요.\n우리말: \"가장 친한 친구를 묘사해 줄 수 있니?\"",
        "chips": [
          "Can",
          "you",
          "describe",
          "your",
          "best",
          "friend?"
        ],
        "correctAnswer": "Can you describe your best friend?",
        "explanation": "'Can you describe your best friend?'은 '가장 친한 친구를 묘사해 줄 수 있니?'을 의미하는 핵심 문장입니다."
      }
    ]
  },
  "6G_L06": {
    "name": "6단원: 감정과 이유 묻기 (Why are you so happy?)",
    "grade": 6,
    "theme": "Feelings, Emotions & Reasons",
    "totalQuestions": 100,
    "questions": [
      {
        "id": 1,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Why are you so happy today? Sarah: Because today is my twelfth birthday.",
        "question": "[듣기 · 6단원] 대화를 듣고, 말하는 사람의 감정(행복한)과 그 이유로 올바른 것은?",
        "options": [
          "지루한 상태 (할 일이 없음)",
          "화난 상태 (숙제를 잃어버림)",
          "행복한 (오늘이 내 12번째 생일이다)",
          "졸린 상태 (밤을 새움)"
        ],
        "correctIndex": 2,
        "correctAnswer": "행복한 (오늘이 내 12번째 생일이다)",
        "explanation": "'Why are you so happy? Because today is my twelfth birthday'입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kelly: Why are you so excited today? Jisu: Because tomorrow is the school talent show.",
        "question": "[듣기 · 6단원] 대화를 듣고, 말하는 사람의 감정(신나는)과 그 이유로 올바른 것은?",
        "options": [
          "지루한 상태 (할 일이 없음)",
          "졸린 상태 (밤을 새움)",
          "화난 상태 (숙제를 잃어버림)",
          "신나는 (내일이 학교 장기자랑 대회이다)"
        ],
        "correctIndex": 3,
        "correctAnswer": "신나는 (내일이 학교 장기자랑 대회이다)",
        "explanation": "'Why are you so excited? Because tomorrow is the school talent show'입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "David: Why are you so worried today? Kevin: Because I lost my favorite English diary.",
        "question": "[듣기 · 6단원] 대화를 듣고, 말하는 사람의 감정(걱정스러운)과 그 이유로 올바른 것은?",
        "options": [
          "지루한 상태 (할 일이 없음)",
          "걱정스러운 (가장 아끼는 영어 일기장을 잃어버렸다)",
          "화난 상태 (숙제를 잃어버림)",
          "졸린 상태 (밤을 새움)"
        ],
        "correctIndex": 1,
        "correctAnswer": "걱정스러운 (가장 아끼는 영어 일기장을 잃어버렸다)",
        "explanation": "'Why are you so worried? Because I lost my favorite English diary'입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Sarah: Why are you so sad today? Emma: Because my beloved pet dog is very sick.",
        "question": "[듣기 · 6단원] 대화를 듣고, 말하는 사람의 감정(슬픈)과 그 이유로 올바른 것은?",
        "options": [
          "졸린 상태 (밤을 새움)",
          "지루한 상태 (할 일이 없음)",
          "화난 상태 (숙제를 잃어버림)",
          "슬픈 (사랑하는 반려견이 많이 아프다)"
        ],
        "correctIndex": 3,
        "correctAnswer": "슬픈 (사랑하는 반려견이 많이 아프다)",
        "explanation": "'Why are you so sad? Because my beloved pet dog is very sick'입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Jisu: Why are you so nervous today? Tom: Because I have to give a big speech on stage.",
        "question": "[듣기 · 6단원] 대화를 듣고, 말하는 사람의 감정(긴장한)과 그 이유로 올바른 것은?",
        "options": [
          "긴장한 (무대에서 큰 발표를 해야 한다)",
          "졸린 상태 (밤을 새움)",
          "화난 상태 (숙제를 잃어버림)",
          "지루한 상태 (할 일이 없음)"
        ],
        "correctIndex": 0,
        "correctAnswer": "긴장한 (무대에서 큰 발표를 해야 한다)",
        "explanation": "'Why are you so nervous? Because I have to give a big speech on stage'입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kevin: Why are you so proud today? Hana: Because our class won first place in soccer.",
        "question": "[듣기 · 6단원] 대화를 듣고, 말하는 사람의 감정(자랑스러운)과 그 이유로 올바른 것은?",
        "options": [
          "자랑스러운 (우리 반이 축구 대회에서 1등을 했다)",
          "화난 상태 (숙제를 잃어버림)",
          "졸린 상태 (밤을 새움)",
          "지루한 상태 (할 일이 없음)"
        ],
        "correctIndex": 0,
        "correctAnswer": "자랑스러운 (우리 반이 축구 대회에서 1등을 했다)",
        "explanation": "'Why are you so proud? Because our class won first place in soccer'입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Emma: Why are you so surprised today? Brian: Because my friends threw a surprise party.",
        "question": "[듣기 · 6단원] 대화를 듣고, 말하는 사람의 감정(놀란)과 그 이유로 올바른 것은?",
        "options": [
          "지루한 상태 (할 일이 없음)",
          "놀란 (친구들이 깜짝 파티를 열어주었다)",
          "화난 상태 (숙제를 잃어버림)",
          "졸린 상태 (밤을 새움)"
        ],
        "correctIndex": 1,
        "correctAnswer": "놀란 (친구들이 깜짝 파티를 열어주었다)",
        "explanation": "'Why are you so surprised? Because my friends threw a surprise party'입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Tom: Why are you so happy today? Amy: Because today is my twelfth birthday.",
        "question": "[듣기 · 6단원] 대화를 듣고, 말하는 사람의 감정(행복한)과 그 이유로 올바른 것은?",
        "options": [
          "화난 상태 (숙제를 잃어버림)",
          "행복한 (오늘이 내 12번째 생일이다)",
          "졸린 상태 (밤을 새움)",
          "지루한 상태 (할 일이 없음)"
        ],
        "correctIndex": 1,
        "correctAnswer": "행복한 (오늘이 내 12번째 생일이다)",
        "explanation": "'Why are you so happy? Because today is my twelfth birthday'입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Hana: Why are you so excited today? Paul: Because tomorrow is the school talent show.",
        "question": "[듣기 · 6단원] 대화를 듣고, 말하는 사람의 감정(신나는)과 그 이유로 올바른 것은?",
        "options": [
          "졸린 상태 (밤을 새움)",
          "신나는 (내일이 학교 장기자랑 대회이다)",
          "지루한 상태 (할 일이 없음)",
          "화난 상태 (숙제를 잃어버림)"
        ],
        "correctIndex": 1,
        "correctAnswer": "신나는 (내일이 학교 장기자랑 대회이다)",
        "explanation": "'Why are you so excited? Because tomorrow is the school talent show'입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Brian: Why are you so worried today? Minsoo: Because I lost my favorite English diary.",
        "question": "[듣기 · 6단원] 대화를 듣고, 말하는 사람의 감정(걱정스러운)과 그 이유로 올바른 것은?",
        "options": [
          "졸린 상태 (밤을 새움)",
          "걱정스러운 (가장 아끼는 영어 일기장을 잃어버렸다)",
          "화난 상태 (숙제를 잃어버림)",
          "지루한 상태 (할 일이 없음)"
        ],
        "correctIndex": 1,
        "correctAnswer": "걱정스러운 (가장 아끼는 영어 일기장을 잃어버렸다)",
        "explanation": "'Why are you so worried? Because I lost my favorite English diary'입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Amy: Why are you so sad today? Kelly: Because my beloved pet dog is very sick.",
        "question": "[듣기 · 6단원] 대화를 듣고, 말하는 사람의 감정(슬픈)과 그 이유로 올바른 것은?",
        "options": [
          "슬픈 (사랑하는 반려견이 많이 아프다)",
          "졸린 상태 (밤을 새움)",
          "지루한 상태 (할 일이 없음)",
          "화난 상태 (숙제를 잃어버림)"
        ],
        "correctIndex": 0,
        "correctAnswer": "슬픈 (사랑하는 반려견이 많이 아프다)",
        "explanation": "'Why are you so sad? Because my beloved pet dog is very sick'입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Paul: Why are you so nervous today? David: Because I have to give a big speech on stage.",
        "question": "[듣기 · 6단원] 대화를 듣고, 말하는 사람의 감정(긴장한)과 그 이유로 올바른 것은?",
        "options": [
          "긴장한 (무대에서 큰 발표를 해야 한다)",
          "화난 상태 (숙제를 잃어버림)",
          "지루한 상태 (할 일이 없음)",
          "졸린 상태 (밤을 새움)"
        ],
        "correctIndex": 0,
        "correctAnswer": "긴장한 (무대에서 큰 발표를 해야 한다)",
        "explanation": "'Why are you so nervous? Because I have to give a big speech on stage'입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: She was surprised by the secret gift. Sarah: I completely agree with you!",
        "question": "[듣기 · 6단원] 대화에서 Minsoo이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그녀는 비밀 선물에 깜짝 놀랐어.",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "그녀는 비밀 선물에 깜짝 놀랐어.",
        "explanation": "'She was surprised by the secret gift.'은 '그녀는 비밀 선물에 깜짝 놀랐어.'을 의미합니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kelly: Why did you arrive so late? Jisu: I completely agree with you!",
        "question": "[듣기 · 6단원] 대화에서 Kelly이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "나는 잘 모르겠어.",
          "너 왜 그렇게 늦게 도착했니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "너 왜 그렇게 늦게 도착했니?",
        "explanation": "'Why did you arrive so late?'은 '너 왜 그렇게 늦게 도착했니?'을 의미합니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "David: Because the traffic was very heavy. Kevin: I completely agree with you!",
        "question": "[듣기 · 6단원] 대화에서 David이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자.",
          "교통이 너무 혼잡했기 때문이야.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 2,
        "correctAnswer": "교통이 너무 혼잡했기 때문이야.",
        "explanation": "'Because the traffic was very heavy.'은 '교통이 너무 혼잡했기 때문이야.'을 의미합니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Sarah: Why are you so happy? Emma: I completely agree with you!",
        "question": "[듣기 · 6단원] 대화에서 Sarah이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음에 다시 이야기하자.",
          "너 왜 그렇게 기분이 좋니?",
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 1,
        "correctAnswer": "너 왜 그렇게 기분이 좋니?",
        "explanation": "'Why are you so happy?'은 '너 왜 그렇게 기분이 좋니?'을 의미합니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Jisu: Because today is my birthday! Tom: I completely agree with you!",
        "question": "[듣기 · 6단원] 대화에서 Jisu이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야.",
          "오늘이 내 생일이기 때문이야!",
          "다음에 다시 이야기하자."
        ],
        "correctIndex": 2,
        "correctAnswer": "오늘이 내 생일이기 때문이야!",
        "explanation": "'Because today is my birthday!'은 '오늘이 내 생일이기 때문이야!'을 의미합니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kevin: What is wrong with you? Hana: I completely agree with you!",
        "question": "[듣기 · 6단원] 대화에서 Kevin이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자.",
          "무슨 일 있니? 안색이 안 좋아 보여."
        ],
        "correctIndex": 3,
        "correctAnswer": "무슨 일 있니? 안색이 안 좋아 보여.",
        "explanation": "'What is wrong with you?'은 '무슨 일 있니? 안색이 안 좋아 보여.'을 의미합니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Emma: Don't worry, you can do it. Brian: I completely agree with you!",
        "question": "[듣기 · 6단원] 대화에서 Emma이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자.",
          "걱정하지 마, 넌 할 수 있어.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 2,
        "correctAnswer": "걱정하지 마, 넌 할 수 있어.",
        "explanation": "'Don't worry, you can do it.'은 '걱정하지 마, 넌 할 수 있어.'을 의미합니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Tom: Why is Minsoo so excited? Amy: I completely agree with you!",
        "question": "[듣기 · 6단원] 대화에서 Tom이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "민수는 왜 저렇게 신이 났니?",
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "민수는 왜 저렇게 신이 났니?",
        "explanation": "'Why is Minsoo so excited?'은 '민수는 왜 저렇게 신이 났니?'을 의미합니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Hana: Because he won first prize in math. Paul: I completely agree with you!",
        "question": "[듣기 · 6단원] 대화에서 Hana이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음에 다시 이야기하자.",
          "수학에서 1등 상을 탔기 때문이야.",
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 1,
        "correctAnswer": "수학에서 1등 상을 탔기 때문이야.",
        "explanation": "'Because he won first prize in math.'은 '수학에서 1등 상을 탔기 때문이야.'을 의미합니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Brian: I am nervous about the speech contest. Minsoo: I completely agree with you!",
        "question": "[듣기 · 6단원] 대화에서 Brian이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 말하기 대회 때문에 긴장돼.",
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "나는 말하기 대회 때문에 긴장돼.",
        "explanation": "'I am nervous about the speech contest.'은 '나는 말하기 대회 때문에 긴장돼.'을 의미합니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Amy: Take a deep breath and smile. Kelly: I completely agree with you!",
        "question": "[듣기 · 6단원] 대화에서 Amy이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자.",
          "심호흡을 크게 하고 미소를 지어봐.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 2,
        "correctAnswer": "심호흡을 크게 하고 미소를 지어봐.",
        "explanation": "'Take a deep breath and smile.'은 '심호흡을 크게 하고 미소를 지어봐.'을 의미합니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Paul: Why are they so proud? David: I completely agree with you!",
        "question": "[듣기 · 6단원] 대화에서 Paul이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "그들은 왜 그렇게 자랑스러워하니?",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 1,
        "correctAnswer": "그들은 왜 그렇게 자랑스러워하니?",
        "explanation": "'Why are they so proud?'은 '그들은 왜 그렇게 자랑스러워하니?'을 의미합니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Do you know the meaning of 'worry'? Sarah: Yes, it means '걱정하다'.",
        "question": "[듣기 · 6단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'worry'의 뜻은?",
        "options": [
          "걱정하다",
          "행복한",
          "신나는",
          "걱정스러운"
        ],
        "correctIndex": 0,
        "correctAnswer": "걱정하다",
        "explanation": "'worry'은 '걱정하다'를 뜻합니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kelly: Do you know the meaning of 'birthday'? Jisu: Yes, it means '생일'.",
        "question": "[듣기 · 6단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'birthday'의 뜻은?",
        "options": [
          "걱정스러운",
          "신나는",
          "행복한",
          "생일"
        ],
        "correctIndex": 3,
        "correctAnswer": "생일",
        "explanation": "'birthday'은 '생일'를 뜻합니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "David: Do you know the meaning of 'speech'? Kevin: Yes, it means '연설, 발표'.",
        "question": "[듣기 · 6단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'speech'의 뜻은?",
        "options": [
          "걱정스러운",
          "연설, 발표",
          "행복한",
          "신나는"
        ],
        "correctIndex": 1,
        "correctAnswer": "연설, 발표",
        "explanation": "'speech'은 '연설, 발표'를 뜻합니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Sarah: Do you know the meaning of 'prize'? Emma: Yes, it means '상, 상품'.",
        "question": "[듣기 · 6단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'prize'의 뜻은?",
        "options": [
          "걱정스러운",
          "신나는",
          "행복한",
          "상, 상품"
        ],
        "correctIndex": 3,
        "correctAnswer": "상, 상품",
        "explanation": "'prize'은 '상, 상품'를 뜻합니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Jisu: Do you know the meaning of 'stage'? Tom: Yes, it means '무대'.",
        "question": "[듣기 · 6단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'stage'의 뜻은?",
        "options": [
          "신나는",
          "걱정스러운",
          "행복한",
          "무대"
        ],
        "correctIndex": 3,
        "correctAnswer": "무대",
        "explanation": "'stage'은 '무대'를 뜻합니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kevin: Do you know the meaning of 'party'? Hana: Yes, it means '파티'.",
        "question": "[듣기 · 6단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'party'의 뜻은?",
        "options": [
          "행복한",
          "파티",
          "걱정스러운",
          "신나는"
        ],
        "correctIndex": 1,
        "correctAnswer": "파티",
        "explanation": "'party'은 '파티'를 뜻합니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Emma: Do you know the meaning of 'happy'? Brian: Yes, it means '행복한'.",
        "question": "[듣기 · 6단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'happy'의 뜻은?",
        "options": [
          "행복한",
          "신나는",
          "슬픈",
          "걱정스러운"
        ],
        "correctIndex": 0,
        "correctAnswer": "행복한",
        "explanation": "'happy'은 '행복한'를 뜻합니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Tom: Do you know the meaning of 'excited'? Amy: Yes, it means '신나는'.",
        "question": "[듣기 · 6단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'excited'의 뜻은?",
        "options": [
          "행복한",
          "신나는",
          "걱정스러운",
          "슬픈"
        ],
        "correctIndex": 1,
        "correctAnswer": "신나는",
        "explanation": "'excited'은 '신나는'를 뜻합니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Hana: Do you know the meaning of 'worried'? Paul: Yes, it means '걱정스러운'.",
        "question": "[듣기 · 6단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'worried'의 뜻은?",
        "options": [
          "슬픈",
          "신나는",
          "행복한",
          "걱정스러운"
        ],
        "correctIndex": 3,
        "correctAnswer": "걱정스러운",
        "explanation": "'worried'은 '걱정스러운'를 뜻합니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Brian: Do you know the meaning of 'sad'? Minsoo: Yes, it means '슬픈'.",
        "question": "[듣기 · 6단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'sad'의 뜻은?",
        "options": [
          "슬픈",
          "행복한",
          "신나는",
          "걱정스러운"
        ],
        "correctIndex": 0,
        "correctAnswer": "슬픈",
        "explanation": "'sad'은 '슬픈'를 뜻합니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Amy: Do you know the meaning of 'nervous'? Kelly: Yes, it means '긴장한'.",
        "question": "[듣기 · 6단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'nervous'의 뜻은?",
        "options": [
          "걱정스러운",
          "신나는",
          "행복한",
          "긴장한"
        ],
        "correctIndex": 3,
        "correctAnswer": "긴장한",
        "explanation": "'nervous'은 '긴장한'를 뜻합니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Minsoo. What is wrong with you? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Minsoo. What is wrong with you? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "무슨 일 있니? 안색이 안 좋아 보여."
        ],
        "correctIndex": 3,
        "correctAnswer": "무슨 일 있니? 안색이 안 좋아 보여.",
        "explanation": "'What is wrong with you?'(무슨 일 있니? 안색이 안 좋아 보여.)이 핵심 문장입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kelly. Don't worry, you can do it. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kelly. Don't worry, you can do it. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "걱정하지 마, 넌 할 수 있어.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 1,
        "correctAnswer": "걱정하지 마, 넌 할 수 있어.",
        "explanation": "'Don't worry, you can do it.'(걱정하지 마, 넌 할 수 있어.)이 핵심 문장입니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is David. Why is Minsoo so excited? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is David. Why is Minsoo so excited? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "민수는 왜 저렇게 신이 났니?",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "민수는 왜 저렇게 신이 났니?",
        "explanation": "'Why is Minsoo so excited?'(민수는 왜 저렇게 신이 났니?)이 핵심 문장입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Sarah. Because he won first prize in math. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Sarah. Because he won first prize in math. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "수학에서 1등 상을 탔기 때문이야.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "수학에서 1등 상을 탔기 때문이야.",
        "explanation": "'Because he won first prize in math.'(수학에서 1등 상을 탔기 때문이야.)이 핵심 문장입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Jisu. I am nervous about the speech contest. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Jisu. I am nervous about the speech contest. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Jisu이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "나는 말하기 대회 때문에 긴장돼.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 1,
        "correctAnswer": "나는 말하기 대회 때문에 긴장돼.",
        "explanation": "'I am nervous about the speech contest.'(나는 말하기 대회 때문에 긴장돼.)이 핵심 문장입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kevin. Take a deep breath and smile. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kevin. Take a deep breath and smile. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kevin이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "심호흡을 크게 하고 미소를 지어봐.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 2,
        "correctAnswer": "심호흡을 크게 하고 미소를 지어봐.",
        "explanation": "'Take a deep breath and smile.'(심호흡을 크게 하고 미소를 지어봐.)이 핵심 문장입니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Emma. Why are they so proud? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Emma. Why are they so proud? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Emma이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "그들은 왜 그렇게 자랑스러워하니?",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다."
        ],
        "correctIndex": 1,
        "correctAnswer": "그들은 왜 그렇게 자랑스러워하니?",
        "explanation": "'Why are they so proud?'(그들은 왜 그렇게 자랑스러워하니?)이 핵심 문장입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Tom. Because our team won the game. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Tom. Because our team won the game. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Tom이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "학교 숙제가 너무 많아서 피곤하다.",
          "우리 팀이 경기에서 이겼기 때문이야.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 1,
        "correctAnswer": "우리 팀이 경기에서 이겼기 때문이야.",
        "explanation": "'Because our team won the game.'(우리 팀이 경기에서 이겼기 때문이야.)이 핵심 문장입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Hana. I am sad because my dog is sick. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Hana. I am sad because my dog is sick. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Hana이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "우리 강아지가 아파서 슬퍼.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 1,
        "correctAnswer": "우리 강아지가 아파서 슬퍼.",
        "explanation": "'I am sad because my dog is sick.'(우리 강아지가 아파서 슬퍼.)이 핵심 문장입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Brian. Cheer up, everything will be okay. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Brian. Cheer up, everything will be okay. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Brian이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "기운 내, 다 잘 될 거야.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "기운 내, 다 잘 될 거야.",
        "explanation": "'Cheer up, everything will be okay.'(기운 내, 다 잘 될 거야.)이 핵심 문장입니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Amy. She was surprised by the secret gift. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Amy. She was surprised by the secret gift. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Amy이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "그녀는 비밀 선물에 깜짝 놀랐어."
        ],
        "correctIndex": 3,
        "correctAnswer": "그녀는 비밀 선물에 깜짝 놀랐어.",
        "explanation": "'She was surprised by the secret gift.'(그녀는 비밀 선물에 깜짝 놀랐어.)이 핵심 문장입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Paul. Why did you arrive so late? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Paul. Why did you arrive so late? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Paul이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "너 왜 그렇게 늦게 도착했니?",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "너 왜 그렇게 늦게 도착했니?",
        "explanation": "'Why did you arrive so late?'(너 왜 그렇게 늦게 도착했니?)이 핵심 문장입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Minsoo. Because the traffic was very heavy. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Minsoo. Because the traffic was very heavy. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "교통이 너무 혼잡했기 때문이야."
        ],
        "correctIndex": 3,
        "correctAnswer": "교통이 너무 혼잡했기 때문이야.",
        "explanation": "'Because the traffic was very heavy.'(교통이 너무 혼잡했기 때문이야.)이 핵심 문장입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kelly. Why are you so happy? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kelly. Why are you so happy? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "너 왜 그렇게 기분이 좋니?",
          "길을 잃어버려서 헤매고 있다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 0,
        "correctAnswer": "너 왜 그렇게 기분이 좋니?",
        "explanation": "'Why are you so happy?'(너 왜 그렇게 기분이 좋니?)이 핵심 문장입니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is David. Because today is my birthday! It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is David. Because today is my birthday! It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "오늘이 내 생일이기 때문이야!"
        ],
        "correctIndex": 3,
        "correctAnswer": "오늘이 내 생일이기 때문이야!",
        "explanation": "'Because today is my birthday!'(오늘이 내 생일이기 때문이야!)이 핵심 문장입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Sarah feels very excited right now. That is because tomorrow is the school talent show. All friends congratulated Sarah.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Sarah feels very excited right now. That is because tomorrow is the school talent show. All friends congratulated Sarah.\"\n질문: 윗글에서 Sarah이(가) 신나는 감정을 느끼는 이유로 알맞은 것은?",
        "options": [
          "내일이 학교 장기자랑 대회이다",
          "친구가 이사를 가서",
          "시험을 망쳐서",
          "용돈을 잃어버려서"
        ],
        "correctIndex": 0,
        "correctAnswer": "내일이 학교 장기자랑 대회이다",
        "explanation": "지문의 'Sarah feels very excited right now. That is because tomorrow is the school talent show. All friends congratulated Sarah.'에 명시되어 있습니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Jisu feels very worried right now. That is because I lost my favorite English diary. All friends congratulated Jisu.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Jisu feels very worried right now. That is because I lost my favorite English diary. All friends congratulated Jisu.\"\n질문: 윗글에서 Jisu이(가) 걱정스러운 감정을 느끼는 이유로 알맞은 것은?",
        "options": [
          "가장 아끼는 영어 일기장을 잃어버렸다",
          "시험을 망쳐서",
          "용돈을 잃어버려서",
          "친구가 이사를 가서"
        ],
        "correctIndex": 0,
        "correctAnswer": "가장 아끼는 영어 일기장을 잃어버렸다",
        "explanation": "지문의 'Jisu feels very worried right now. That is because I lost my favorite English diary. All friends congratulated Jisu.'에 명시되어 있습니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Kevin feels very sad right now. That is because my beloved pet dog is very sick. All friends congratulated Kevin.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Kevin feels very sad right now. That is because my beloved pet dog is very sick. All friends congratulated Kevin.\"\n질문: 윗글에서 Kevin이(가) 슬픈 감정을 느끼는 이유로 알맞은 것은?",
        "options": [
          "친구가 이사를 가서",
          "시험을 망쳐서",
          "사랑하는 반려견이 많이 아프다",
          "용돈을 잃어버려서"
        ],
        "correctIndex": 2,
        "correctAnswer": "사랑하는 반려견이 많이 아프다",
        "explanation": "지문의 'Kevin feels very sad right now. That is because my beloved pet dog is very sick. All friends congratulated Kevin.'에 명시되어 있습니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Emma feels very nervous right now. That is because I have to give a big speech on stage. All friends congratulated Emma.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Emma feels very nervous right now. That is because I have to give a big speech on stage. All friends congratulated Emma.\"\n질문: 윗글에서 Emma이(가) 긴장한 감정을 느끼는 이유로 알맞은 것은?",
        "options": [
          "무대에서 큰 발표를 해야 한다",
          "시험을 망쳐서",
          "용돈을 잃어버려서",
          "친구가 이사를 가서"
        ],
        "correctIndex": 0,
        "correctAnswer": "무대에서 큰 발표를 해야 한다",
        "explanation": "지문의 'Emma feels very nervous right now. That is because I have to give a big speech on stage. All friends congratulated Emma.'에 명시되어 있습니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Tom feels very proud right now. That is because our class won first place in soccer. All friends congratulated Tom.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Tom feels very proud right now. That is because our class won first place in soccer. All friends congratulated Tom.\"\n질문: 윗글에서 Tom이(가) 자랑스러운 감정을 느끼는 이유로 알맞은 것은?",
        "options": [
          "우리 반이 축구 대회에서 1등을 했다",
          "용돈을 잃어버려서",
          "친구가 이사를 가서",
          "시험을 망쳐서"
        ],
        "correctIndex": 0,
        "correctAnswer": "우리 반이 축구 대회에서 1등을 했다",
        "explanation": "지문의 'Tom feels very proud right now. That is because our class won first place in soccer. All friends congratulated Tom.'에 명시되어 있습니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hana feels very surprised right now. That is because my friends threw a surprise party. All friends congratulated Hana.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Hana feels very surprised right now. That is because my friends threw a surprise party. All friends congratulated Hana.\"\n질문: 윗글에서 Hana이(가) 놀란 감정을 느끼는 이유로 알맞은 것은?",
        "options": [
          "용돈을 잃어버려서",
          "시험을 망쳐서",
          "친구가 이사를 가서",
          "친구들이 깜짝 파티를 열어주었다"
        ],
        "correctIndex": 3,
        "correctAnswer": "친구들이 깜짝 파티를 열어주었다",
        "explanation": "지문의 'Hana feels very surprised right now. That is because my friends threw a surprise party. All friends congratulated Hana.'에 명시되어 있습니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Brian feels very happy right now. That is because today is my twelfth birthday. All friends congratulated Brian.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Brian feels very happy right now. That is because today is my twelfth birthday. All friends congratulated Brian.\"\n질문: 윗글에서 Brian이(가) 행복한 감정을 느끼는 이유로 알맞은 것은?",
        "options": [
          "친구가 이사를 가서",
          "오늘이 내 12번째 생일이다",
          "시험을 망쳐서",
          "용돈을 잃어버려서"
        ],
        "correctIndex": 1,
        "correctAnswer": "오늘이 내 12번째 생일이다",
        "explanation": "지문의 'Brian feels very happy right now. That is because today is my twelfth birthday. All friends congratulated Brian.'에 명시되어 있습니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Amy feels very excited right now. That is because tomorrow is the school talent show. All friends congratulated Amy.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Amy feels very excited right now. That is because tomorrow is the school talent show. All friends congratulated Amy.\"\n질문: 윗글에서 Amy이(가) 신나는 감정을 느끼는 이유로 알맞은 것은?",
        "options": [
          "친구가 이사를 가서",
          "시험을 망쳐서",
          "내일이 학교 장기자랑 대회이다",
          "용돈을 잃어버려서"
        ],
        "correctIndex": 2,
        "correctAnswer": "내일이 학교 장기자랑 대회이다",
        "explanation": "지문의 'Amy feels very excited right now. That is because tomorrow is the school talent show. All friends congratulated Amy.'에 명시되어 있습니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Paul feels very worried right now. That is because I lost my favorite English diary. All friends congratulated Paul.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Paul feels very worried right now. That is because I lost my favorite English diary. All friends congratulated Paul.\"\n질문: 윗글에서 Paul이(가) 걱정스러운 감정을 느끼는 이유로 알맞은 것은?",
        "options": [
          "시험을 망쳐서",
          "가장 아끼는 영어 일기장을 잃어버렸다",
          "용돈을 잃어버려서",
          "친구가 이사를 가서"
        ],
        "correctIndex": 1,
        "correctAnswer": "가장 아끼는 영어 일기장을 잃어버렸다",
        "explanation": "지문의 'Paul feels very worried right now. That is because I lost my favorite English diary. All friends congratulated Paul.'에 명시되어 있습니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Minsoo feels very sad right now. That is because my beloved pet dog is very sick. All friends congratulated Minsoo.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Minsoo feels very sad right now. That is because my beloved pet dog is very sick. All friends congratulated Minsoo.\"\n질문: 윗글에서 Minsoo이(가) 슬픈 감정을 느끼는 이유로 알맞은 것은?",
        "options": [
          "사랑하는 반려견이 많이 아프다",
          "시험을 망쳐서",
          "친구가 이사를 가서",
          "용돈을 잃어버려서"
        ],
        "correctIndex": 0,
        "correctAnswer": "사랑하는 반려견이 많이 아프다",
        "explanation": "지문의 'Minsoo feels very sad right now. That is because my beloved pet dog is very sick. All friends congratulated Minsoo.'에 명시되어 있습니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'party' is very frequently used. It means '파티' in Korean.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'party' is very frequently used. It means '파티' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'party'의 한국어 의미는?",
        "options": [
          "걱정스러운",
          "신나는",
          "행복한",
          "파티"
        ],
        "correctIndex": 3,
        "correctAnswer": "파티",
        "explanation": "'party'은 '파티'입니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'happy' is very frequently used. It means '행복한' in Korean.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'happy' is very frequently used. It means '행복한' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'happy'의 한국어 의미는?",
        "options": [
          "신나는",
          "슬픈",
          "행복한",
          "걱정스러운"
        ],
        "correctIndex": 2,
        "correctAnswer": "행복한",
        "explanation": "'happy'은 '행복한'입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'excited' is very frequently used. It means '신나는' in Korean.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'excited' is very frequently used. It means '신나는' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'excited'의 한국어 의미는?",
        "options": [
          "신나는",
          "행복한",
          "걱정스러운",
          "슬픈"
        ],
        "correctIndex": 0,
        "correctAnswer": "신나는",
        "explanation": "'excited'은 '신나는'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'worried' is very frequently used. It means '걱정스러운' in Korean.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'worried' is very frequently used. It means '걱정스러운' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'worried'의 한국어 의미는?",
        "options": [
          "슬픈",
          "신나는",
          "행복한",
          "걱정스러운"
        ],
        "correctIndex": 3,
        "correctAnswer": "걱정스러운",
        "explanation": "'worried'은 '걱정스러운'입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'sad' is very frequently used. It means '슬픈' in Korean.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'sad' is very frequently used. It means '슬픈' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'sad'의 한국어 의미는?",
        "options": [
          "신나는",
          "걱정스러운",
          "슬픈",
          "행복한"
        ],
        "correctIndex": 2,
        "correctAnswer": "슬픈",
        "explanation": "'sad'은 '슬픈'입니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'nervous' is very frequently used. It means '긴장한' in Korean.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'nervous' is very frequently used. It means '긴장한' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'nervous'의 한국어 의미는?",
        "options": [
          "긴장한",
          "행복한",
          "신나는",
          "걱정스러운"
        ],
        "correctIndex": 0,
        "correctAnswer": "긴장한",
        "explanation": "'nervous'은 '긴장한'입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'proud' is very frequently used. It means '자랑스러운' in Korean.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'proud' is very frequently used. It means '자랑스러운' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'proud'의 한국어 의미는?",
        "options": [
          "자랑스러운",
          "신나는",
          "행복한",
          "걱정스러운"
        ],
        "correctIndex": 0,
        "correctAnswer": "자랑스러운",
        "explanation": "'proud'은 '자랑스러운'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'surprised' is very frequently used. It means '놀란' in Korean.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'surprised' is very frequently used. It means '놀란' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'surprised'의 한국어 의미는?",
        "options": [
          "걱정스러운",
          "신나는",
          "놀란",
          "행복한"
        ],
        "correctIndex": 2,
        "correctAnswer": "놀란",
        "explanation": "'surprised'은 '놀란'입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'because' is very frequently used. It means '~때문에' in Korean.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'because' is very frequently used. It means '~때문에' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'because'의 한국어 의미는?",
        "options": [
          "~때문에",
          "행복한",
          "신나는",
          "걱정스러운"
        ],
        "correctIndex": 0,
        "correctAnswer": "~때문에",
        "explanation": "'because'은 '~때문에'입니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'why' is very frequently used. It means '왜' in Korean.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'why' is very frequently used. It means '왜' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'why'의 한국어 의미는?",
        "options": [
          "왜",
          "행복한",
          "신나는",
          "걱정스러운"
        ],
        "correctIndex": 0,
        "correctAnswer": "왜",
        "explanation": "'why'은 '왜'입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 6단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"행복한\" (단어 첫 글자: h, 총 5글자)",
        "correctAnswer": "happy",
        "explanation": "'행복한'에 해당하는 영어 단어는 'happy'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 6단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"신나는\" (단어 첫 글자: e, 총 7글자)",
        "correctAnswer": "excited",
        "explanation": "'신나는'에 해당하는 영어 단어는 'excited'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 6단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"걱정스러운\" (단어 첫 글자: w, 총 7글자)",
        "correctAnswer": "worried",
        "explanation": "'걱정스러운'에 해당하는 영어 단어는 'worried'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 6단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"슬픈\" (단어 첫 글자: s, 총 3글자)",
        "correctAnswer": "sad",
        "explanation": "'슬픈'에 해당하는 영어 단어는 'sad'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 6단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"긴장한\" (단어 첫 글자: n, 총 7글자)",
        "correctAnswer": "nervous",
        "explanation": "'긴장한'에 해당하는 영어 단어는 'nervous'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 6단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"자랑스러운\" (단어 첫 글자: p, 총 5글자)",
        "correctAnswer": "proud",
        "explanation": "'자랑스러운'에 해당하는 영어 단어는 'proud'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 6단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"놀란\" (단어 첫 글자: s, 총 9글자)",
        "correctAnswer": "surprised",
        "explanation": "'놀란'에 해당하는 영어 단어는 'surprised'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 6단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"~때문에\" (단어 첫 글자: b, 총 7글자)",
        "correctAnswer": "because",
        "explanation": "'~때문에'에 해당하는 영어 단어는 'because'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 6단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"왜\" (단어 첫 글자: w, 총 3글자)",
        "correctAnswer": "why",
        "explanation": "'왜'에 해당하는 영어 단어는 'why'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 6단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"걱정하다\" (단어 첫 글자: w, 총 5글자)",
        "correctAnswer": "worry",
        "explanation": "'걱정하다'에 해당하는 영어 단어는 'worry'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 6단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"생일\" (단어 첫 글자: b, 총 8글자)",
        "correctAnswer": "birthday",
        "explanation": "'생일'에 해당하는 영어 단어는 'birthday'입니다."
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 6단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"연설, 발표\" (단어 첫 글자: s, 총 6글자)",
        "correctAnswer": "speech",
        "explanation": "'연설, 발표'에 해당하는 영어 단어는 'speech'입니다."
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 6단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"상, 상품\" (단어 첫 글자: p, 총 5글자)",
        "correctAnswer": "prize",
        "explanation": "'상, 상품'에 해당하는 영어 단어는 'prize'입니다."
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 6단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"무대\" (단어 첫 글자: s, 총 5글자)",
        "correctAnswer": "stage",
        "explanation": "'무대'에 해당하는 영어 단어는 'stage'입니다."
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 6단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"파티\" (단어 첫 글자: p, 총 5글자)",
        "correctAnswer": "party",
        "explanation": "'파티'에 해당하는 영어 단어는 'party'입니다."
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"너 왜 그렇게 기분이 좋니?\"",
        "chips": [
          "Why",
          "are",
          "you",
          "so",
          "happy?"
        ],
        "correctAnswer": "Why are you so happy?",
        "explanation": "'Why are you so happy?'은 '너 왜 그렇게 기분이 좋니?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"오늘이 내 생일이기 때문이야!\"",
        "chips": [
          "Because",
          "today",
          "is",
          "my",
          "birthday."
        ],
        "correctAnswer": "Because today is my birthday!",
        "explanation": "'Because today is my birthday!'은 '오늘이 내 생일이기 때문이야!'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"무슨 일 있니? 안색이 안 좋아 보여.\"",
        "chips": [
          "What",
          "is",
          "wrong",
          "with",
          "you?"
        ],
        "correctAnswer": "What is wrong with you?",
        "explanation": "'What is wrong with you?'은 '무슨 일 있니? 안색이 안 좋아 보여.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"걱정하지 마, 넌 할 수 있어.\"",
        "chips": [
          "Don't",
          "worry",
          "you",
          "can",
          "do",
          "it."
        ],
        "correctAnswer": "Don't worry, you can do it.",
        "explanation": "'Don't worry, you can do it.'은 '걱정하지 마, 넌 할 수 있어.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"민수는 왜 저렇게 신이 났니?\"",
        "chips": [
          "Why",
          "is",
          "Minsoo",
          "so",
          "excited?"
        ],
        "correctAnswer": "Why is Minsoo so excited?",
        "explanation": "'Why is Minsoo so excited?'은 '민수는 왜 저렇게 신이 났니?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"수학에서 1등 상을 탔기 때문이야.\"",
        "chips": [
          "Because",
          "he",
          "won",
          "first",
          "prize",
          "in",
          "math."
        ],
        "correctAnswer": "Because he won first prize in math.",
        "explanation": "'Because he won first prize in math.'은 '수학에서 1등 상을 탔기 때문이야.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"나는 말하기 대회 때문에 긴장돼.\"",
        "chips": [
          "I",
          "am",
          "nervous",
          "about",
          "the",
          "speech",
          "contest."
        ],
        "correctAnswer": "I am nervous about the speech contest.",
        "explanation": "'I am nervous about the speech contest.'은 '나는 말하기 대회 때문에 긴장돼.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"심호흡을 크게 하고 미소를 지어봐.\"",
        "chips": [
          "Take",
          "a",
          "deep",
          "breath",
          "and",
          "smile."
        ],
        "correctAnswer": "Take a deep breath and smile.",
        "explanation": "'Take a deep breath and smile.'은 '심호흡을 크게 하고 미소를 지어봐.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"그들은 왜 그렇게 자랑스러워하니?\"",
        "chips": [
          "Why",
          "are",
          "they",
          "so",
          "proud?"
        ],
        "correctAnswer": "Why are they so proud?",
        "explanation": "'Why are they so proud?'은 '그들은 왜 그렇게 자랑스러워하니?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"우리 팀이 경기에서 이겼기 때문이야.\"",
        "chips": [
          "Because",
          "our",
          "team",
          "won",
          "the",
          "game."
        ],
        "correctAnswer": "Because our team won the game.",
        "explanation": "'Because our team won the game.'은 '우리 팀이 경기에서 이겼기 때문이야.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 96,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"우리 강아지가 아파서 슬퍼.\"",
        "chips": [
          "I",
          "am",
          "sad",
          "because",
          "my",
          "dog",
          "is",
          "sick."
        ],
        "correctAnswer": "I am sad because my dog is sick.",
        "explanation": "'I am sad because my dog is sick.'은 '우리 강아지가 아파서 슬퍼.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 97,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"기운 내, 다 잘 될 거야.\"",
        "chips": [
          "Cheer",
          "up",
          "everything",
          "will",
          "be",
          "okay."
        ],
        "correctAnswer": "Cheer up, everything will be okay.",
        "explanation": "'Cheer up, everything will be okay.'은 '기운 내, 다 잘 될 거야.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 98,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"그녀는 비밀 선물에 깜짝 놀랐어.\"",
        "chips": [
          "She",
          "was",
          "surprised",
          "by",
          "the",
          "secret",
          "gift."
        ],
        "correctAnswer": "She was surprised by the secret gift.",
        "explanation": "'She was surprised by the secret gift.'은 '그녀는 비밀 선물에 깜짝 놀랐어.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 99,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"너 왜 그렇게 늦게 도착했니?\"",
        "chips": [
          "Why",
          "did",
          "you",
          "arrive",
          "so",
          "late?"
        ],
        "correctAnswer": "Why did you arrive so late?",
        "explanation": "'Why did you arrive so late?'은 '너 왜 그렇게 늦게 도착했니?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[최종 골든벨 문제] 다음 우리말에 맞도록 주어진 단어 카드를 순서대로 바르게 배열하세요.\n우리말: \"교통이 너무 혼잡했기 때문이야.\"",
        "chips": [
          "Because",
          "the",
          "traffic",
          "was",
          "very",
          "heavy."
        ],
        "correctAnswer": "Because the traffic was very heavy.",
        "explanation": "'Because the traffic was very heavy.'은 '교통이 너무 혼잡했기 때문이야.'을 의미하는 핵심 문장입니다."
      }
    ]
  },
  "6G_L07": {
    "name": "7단원: 과거 경험과 여행 (Have you ever visited Jeju-do / been to Dokdo?)",
    "grade": 6,
    "theme": "Past Experiences & Travel",
    "totalQuestions": 100,
    "questions": [
      {
        "id": 1,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Have you ever visited Jeju-do? Sarah: Yes, I have. I rode a horse on the green hill and ate delicious black pork.",
        "question": "[듣기 · 7단원] 여행 대화를 듣고, Sarah이(가) 제주도에서 한 활동으로 알맞은 것은?",
        "options": [
          "기차가 연착되어 가지 못했다",
          "비가 와서 실내 박물관에만 있었다",
          "호텔 방에서 잠만 잤다",
          "푸른 언덕에서 말을 탔다 및 맛있는 흑돼지를 먹다"
        ],
        "correctIndex": 3,
        "correctAnswer": "푸른 언덕에서 말을 탔다 및 맛있는 흑돼지를 먹다",
        "explanation": "'I rode a horse on the green hill'입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kelly: Have you ever visited Dokdo? Jisu: Yes, I have. I saw the beautiful Korean flag waving and drank cool island spring water.",
        "question": "[듣기 · 7단원] 여행 대화를 듣고, Jisu이(가) 독도에서 한 활동으로 알맞은 것은?",
        "options": [
          "기차가 연착되어 가지 못했다",
          "호텔 방에서 잠만 잤다",
          "비가 와서 실내 박물관에만 있었다",
          "펄럭이는 아름다운 태극기를 보았다 및 시원한 샘물을 마시다"
        ],
        "correctIndex": 3,
        "correctAnswer": "펄럭이는 아름다운 태극기를 보았다 및 시원한 샘물을 마시다",
        "explanation": "'I saw the beautiful Korean flag waving'입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "David: Have you ever visited Gyeongju? Kevin: Yes, I have. I visited historic temples and tombs and ate sweet Hwangnam bread.",
        "question": "[듣기 · 7단원] 여행 대화를 듣고, Kevin이(가) 경주에서 한 활동으로 알맞은 것은?",
        "options": [
          "역사적인 사찰과 고분을 방문했다 및 달콤한 황남빵을 먹다",
          "호텔 방에서 잠만 잤다",
          "비가 와서 실내 박물관에만 있었다",
          "기차가 연착되어 가지 못했다"
        ],
        "correctIndex": 0,
        "correctAnswer": "역사적인 사찰과 고분을 방문했다 및 달콤한 황남빵을 먹다",
        "explanation": "'I visited historic temples and tombs'입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Sarah: Have you ever visited Busan? Emma: Yes, I have. I walked on the famous Haeundae sand and ate warm fish cake soup.",
        "question": "[듣기 · 7단원] 여행 대화를 듣고, Emma이(가) 부산에서 한 활동으로 알맞은 것은?",
        "options": [
          "비가 와서 실내 박물관에만 있었다",
          "호텔 방에서 잠만 잤다",
          "기차가 연착되어 가지 못했다",
          "유명한 해운대 모래사장을 걸었다 및 따뜻한 어묵탕을 먹다"
        ],
        "correctIndex": 3,
        "correctAnswer": "유명한 해운대 모래사장을 걸었다 및 따뜻한 어묵탕을 먹다",
        "explanation": "'I walked on the famous Haeundae sand'입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Jisu: Have you ever visited Gangneung? Tom: Yes, I have. I watched the sunrise over the blue sea and tasted soft tofu ice cream.",
        "question": "[듣기 · 7단원] 여행 대화를 듣고, Tom이(가) 강릉에서 한 활동으로 알맞은 것은?",
        "options": [
          "기차가 연착되어 가지 못했다",
          "푸른 바다 위로 떠오르는 일출을 보았다 및 순두부 아이스크림을 맛보다",
          "호텔 방에서 잠만 잤다",
          "비가 와서 실내 박물관에만 있었다"
        ],
        "correctIndex": 1,
        "correctAnswer": "푸른 바다 위로 떠오르는 일출을 보았다 및 순두부 아이스크림을 맛보다",
        "explanation": "'I watched the sunrise over the blue sea'입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kevin: Have you ever visited Jeonju? Hana: Yes, I have. I wore a traditional Korean Hanbok and ate colorful royal bibimbap.",
        "question": "[듣기 · 7단원] 여행 대화를 듣고, Hana이(가) 전주에서 한 활동으로 알맞은 것은?",
        "options": [
          "기차가 연착되어 가지 못했다",
          "전통 한복을 입어보았다 및 다채로운 궁중 비빔밥을 먹다",
          "호텔 방에서 잠만 잤다",
          "비가 와서 실내 박물관에만 있었다"
        ],
        "correctIndex": 1,
        "correctAnswer": "전통 한복을 입어보았다 및 다채로운 궁중 비빔밥을 먹다",
        "explanation": "'I wore a traditional Korean Hanbok'입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Emma: Have you ever visited Jeju-do? Brian: Yes, I have. I rode a horse on the green hill and ate delicious black pork.",
        "question": "[듣기 · 7단원] 여행 대화를 듣고, Brian이(가) 제주도에서 한 활동으로 알맞은 것은?",
        "options": [
          "비가 와서 실내 박물관에만 있었다",
          "기차가 연착되어 가지 못했다",
          "호텔 방에서 잠만 잤다",
          "푸른 언덕에서 말을 탔다 및 맛있는 흑돼지를 먹다"
        ],
        "correctIndex": 3,
        "correctAnswer": "푸른 언덕에서 말을 탔다 및 맛있는 흑돼지를 먹다",
        "explanation": "'I rode a horse on the green hill'입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Tom: Have you ever visited Dokdo? Amy: Yes, I have. I saw the beautiful Korean flag waving and drank cool island spring water.",
        "question": "[듣기 · 7단원] 여행 대화를 듣고, Amy이(가) 독도에서 한 활동으로 알맞은 것은?",
        "options": [
          "펄럭이는 아름다운 태극기를 보았다 및 시원한 샘물을 마시다",
          "기차가 연착되어 가지 못했다",
          "호텔 방에서 잠만 잤다",
          "비가 와서 실내 박물관에만 있었다"
        ],
        "correctIndex": 0,
        "correctAnswer": "펄럭이는 아름다운 태극기를 보았다 및 시원한 샘물을 마시다",
        "explanation": "'I saw the beautiful Korean flag waving'입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Hana: Have you ever visited Gyeongju? Paul: Yes, I have. I visited historic temples and tombs and ate sweet Hwangnam bread.",
        "question": "[듣기 · 7단원] 여행 대화를 듣고, Paul이(가) 경주에서 한 활동으로 알맞은 것은?",
        "options": [
          "비가 와서 실내 박물관에만 있었다",
          "호텔 방에서 잠만 잤다",
          "기차가 연착되어 가지 못했다",
          "역사적인 사찰과 고분을 방문했다 및 달콤한 황남빵을 먹다"
        ],
        "correctIndex": 3,
        "correctAnswer": "역사적인 사찰과 고분을 방문했다 및 달콤한 황남빵을 먹다",
        "explanation": "'I visited historic temples and tombs'입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Brian: Have you ever visited Busan? Minsoo: Yes, I have. I walked on the famous Haeundae sand and ate warm fish cake soup.",
        "question": "[듣기 · 7단원] 여행 대화를 듣고, Minsoo이(가) 부산에서 한 활동으로 알맞은 것은?",
        "options": [
          "유명한 해운대 모래사장을 걸었다 및 따뜻한 어묵탕을 먹다",
          "기차가 연착되어 가지 못했다",
          "호텔 방에서 잠만 잤다",
          "비가 와서 실내 박물관에만 있었다"
        ],
        "correctIndex": 0,
        "correctAnswer": "유명한 해운대 모래사장을 걸었다 및 따뜻한 어묵탕을 먹다",
        "explanation": "'I walked on the famous Haeundae sand'입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Amy: Have you ever visited Gangneung? Kelly: Yes, I have. I watched the sunrise over the blue sea and tasted soft tofu ice cream.",
        "question": "[듣기 · 7단원] 여행 대화를 듣고, Kelly이(가) 강릉에서 한 활동으로 알맞은 것은?",
        "options": [
          "비가 와서 실내 박물관에만 있었다",
          "호텔 방에서 잠만 잤다",
          "기차가 연착되어 가지 못했다",
          "푸른 바다 위로 떠오르는 일출을 보았다 및 순두부 아이스크림을 맛보다"
        ],
        "correctIndex": 3,
        "correctAnswer": "푸른 바다 위로 떠오르는 일출을 보았다 및 순두부 아이스크림을 맛보다",
        "explanation": "'I watched the sunrise over the blue sea'입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Paul: Have you ever visited Jeonju? David: Yes, I have. I wore a traditional Korean Hanbok and ate colorful royal bibimbap.",
        "question": "[듣기 · 7단원] 여행 대화를 듣고, David이(가) 전주에서 한 활동으로 알맞은 것은?",
        "options": [
          "기차가 연착되어 가지 못했다",
          "전통 한복을 입어보았다 및 다채로운 궁중 비빔밥을 먹다",
          "호텔 방에서 잠만 잤다",
          "비가 와서 실내 박물관에만 있었다"
        ],
        "correctIndex": 1,
        "correctAnswer": "전통 한복을 입어보았다 및 다채로운 궁중 비빔밥을 먹다",
        "explanation": "'I wore a traditional Korean Hanbok'입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: I want to visit Dokdo someday. Sarah: I completely agree with you!",
        "question": "[듣기 · 7단원] 대화에서 Minsoo이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자.",
          "언젠가 독도를 꼭 방문하고 싶어.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 2,
        "correctAnswer": "언젠가 독도를 꼭 방문하고 싶어.",
        "explanation": "'I want to visit Dokdo someday.'은 '언젠가 독도를 꼭 방문하고 싶어.'을 의미합니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kelly: Have you ever traveled by ship? Jisu: I completely agree with you!",
        "question": "[듣기 · 7단원] 대화에서 Kelly이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "배를 타고 여행해 본 적 있니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "배를 타고 여행해 본 적 있니?",
        "explanation": "'Have you ever traveled by ship?'은 '배를 타고 여행해 본 적 있니?'을 의미합니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "David: Tell me more about your trip. Kevin: I completely agree with you!",
        "question": "[듣기 · 7단원] 대화에서 David이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "네 여행에 대해 더 이야기해 줘.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 2,
        "correctAnswer": "네 여행에 대해 더 이야기해 줘.",
        "explanation": "'Tell me more about your trip.'은 '네 여행에 대해 더 이야기해 줘.'을 의미합니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Sarah: Have you ever visited Jeju-do? Emma: I completely agree with you!",
        "question": "[듣기 · 7단원] 대화에서 Sarah이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "제주도에 가본 적 있니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "제주도에 가본 적 있니?",
        "explanation": "'Have you ever visited Jeju-do?'은 '제주도에 가본 적 있니?'을 의미합니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Jisu: Yes, I have visited Jeju-do. Tom: I completely agree with you!",
        "question": "[듣기 · 7단원] 대화에서 Jisu이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "응, 제주도에 가본 적 있어.",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "응, 제주도에 가본 적 있어.",
        "explanation": "'Yes, I have visited Jeju-do.'은 '응, 제주도에 가본 적 있어.'을 의미합니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kevin: No, I have never been there. Hana: I completely agree with you!",
        "question": "[듣기 · 7단원] 대화에서 Kevin이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "아니, 난 거기에 한 번도 가본 적 없어.",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 1,
        "correctAnswer": "아니, 난 거기에 한 번도 가본 적 없어.",
        "explanation": "'No, I have never been there.'은 '아니, 난 거기에 한 번도 가본 적 없어.'을 의미합니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Emma: It was a wonderful experience. Brian: I completely agree with you!",
        "question": "[듣기 · 7단원] 대화에서 Emma이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "멋진 경험이었어.",
          "다음에 다시 이야기하자.",
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 0,
        "correctAnswer": "멋진 경험이었어.",
        "explanation": "'It was a wonderful experience.'은 '멋진 경험이었어.'을 의미합니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Tom: Have you ever seen Dokdo? Amy: I completely agree with you!",
        "question": "[듣기 · 7단원] 대화에서 Tom이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "독도를 본 적이 있니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "독도를 본 적이 있니?",
        "explanation": "'Have you ever seen Dokdo?'은 '독도를 본 적이 있니?'을 의미합니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Hana: I visited Gyeongju last summer. Paul: I completely agree with you!",
        "question": "[듣기 · 7단원] 대화에서 Hana이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 지난 여름에 경주를 방문했어.",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "나는 지난 여름에 경주를 방문했어.",
        "explanation": "'I visited Gyeongju last summer.'은 '나는 지난 여름에 경주를 방문했어.'을 의미합니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Brian: I rode a horse on the island. Minsoo: I completely agree with you!",
        "question": "[듣기 · 7단원] 대화에서 Brian이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 섬에서 말을 탔어.",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "나는 섬에서 말을 탔어.",
        "explanation": "'I rode a horse on the island.'은 '나는 섬에서 말을 탔어.'을 의미합니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Amy: Have you ever eaten royal bibimbap? Kelly: I completely agree with you!",
        "question": "[듣기 · 7단원] 대화에서 Amy이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "궁중 비빔밥을 먹어본 적 있니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "궁중 비빔밥을 먹어본 적 있니?",
        "explanation": "'Have you ever eaten royal bibimbap?'은 '궁중 비빔밥을 먹어본 적 있니?'을 의미합니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Paul: We watched the sunrise in Gangneung. David: I completely agree with you!",
        "question": "[듣기 · 7단원] 대화에서 Paul이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "우리는 강릉에서 해돋이를 보았어.",
          "다음에 다시 이야기하자.",
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 0,
        "correctAnswer": "우리는 강릉에서 해돋이를 보았어.",
        "explanation": "'We watched the sunrise in Gangneung.'은 '우리는 강릉에서 해돋이를 보았어.'을 의미합니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Do you know the meaning of 'flag'? Sarah: Yes, it means '깃발'.",
        "question": "[듣기 · 7단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'flag'의 뜻은?",
        "options": [
          "지금까지, 한 번이라도",
          "깃발",
          "있었다, 가본 적 있다",
          "방문했다"
        ],
        "correctIndex": 1,
        "correctAnswer": "깃발",
        "explanation": "'flag'은 '깃발'를 뜻합니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kelly: Do you know the meaning of 'horse'? Jisu: Yes, it means '말'.",
        "question": "[듣기 · 7단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'horse'의 뜻은?",
        "options": [
          "있었다, 가본 적 있다",
          "지금까지, 한 번이라도",
          "말",
          "방문했다"
        ],
        "correctIndex": 2,
        "correctAnswer": "말",
        "explanation": "'horse'은 '말'를 뜻합니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "David: Do you know the meaning of 'island'? Kevin: Yes, it means '섬'.",
        "question": "[듣기 · 7단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'island'의 뜻은?",
        "options": [
          "섬",
          "지금까지, 한 번이라도",
          "방문했다",
          "있었다, 가본 적 있다"
        ],
        "correctIndex": 0,
        "correctAnswer": "섬",
        "explanation": "'island'은 '섬'를 뜻합니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Sarah: Do you know the meaning of 'tasted'? Emma: Yes, it means '맛보았다'.",
        "question": "[듣기 · 7단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'tasted'의 뜻은?",
        "options": [
          "방문했다",
          "지금까지, 한 번이라도",
          "맛보았다",
          "있었다, 가본 적 있다"
        ],
        "correctIndex": 2,
        "correctAnswer": "맛보았다",
        "explanation": "'tasted'은 '맛보았다'를 뜻합니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Jisu: Do you know the meaning of 'rode'? Tom: Yes, it means '탔다'.",
        "question": "[듣기 · 7단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'rode'의 뜻은?",
        "options": [
          "있었다, 가본 적 있다",
          "방문했다",
          "지금까지, 한 번이라도",
          "탔다"
        ],
        "correctIndex": 3,
        "correctAnswer": "탔다",
        "explanation": "'rode'은 '탔다'를 뜻합니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kevin: Do you know the meaning of 'saw'? Hana: Yes, it means '보았다'.",
        "question": "[듣기 · 7단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'saw'의 뜻은?",
        "options": [
          "방문했다",
          "있었다, 가본 적 있다",
          "지금까지, 한 번이라도",
          "보았다"
        ],
        "correctIndex": 3,
        "correctAnswer": "보았다",
        "explanation": "'saw'은 '보았다'를 뜻합니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Emma: Do you know the meaning of 'ever'? Brian: Yes, it means '지금까지, 한 번이라도'.",
        "question": "[듣기 · 7단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'ever'의 뜻은?",
        "options": [
          "경험",
          "있었다, 가본 적 있다",
          "방문했다",
          "지금까지, 한 번이라도"
        ],
        "correctIndex": 3,
        "correctAnswer": "지금까지, 한 번이라도",
        "explanation": "'ever'은 '지금까지, 한 번이라도'를 뜻합니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Tom: Do you know the meaning of 'visited'? Amy: Yes, it means '방문했다'.",
        "question": "[듣기 · 7단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'visited'의 뜻은?",
        "options": [
          "방문했다",
          "지금까지, 한 번이라도",
          "있었다, 가본 적 있다",
          "경험"
        ],
        "correctIndex": 0,
        "correctAnswer": "방문했다",
        "explanation": "'visited'은 '방문했다'를 뜻합니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Hana: Do you know the meaning of 'been'? Paul: Yes, it means '있었다, 가본 적 있다'.",
        "question": "[듣기 · 7단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'been'의 뜻은?",
        "options": [
          "있었다, 가본 적 있다",
          "경험",
          "지금까지, 한 번이라도",
          "방문했다"
        ],
        "correctIndex": 0,
        "correctAnswer": "있었다, 가본 적 있다",
        "explanation": "'been'은 '있었다, 가본 적 있다'를 뜻합니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Brian: Do you know the meaning of 'experience'? Minsoo: Yes, it means '경험'.",
        "question": "[듣기 · 7단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'experience'의 뜻은?",
        "options": [
          "있었다, 가본 적 있다",
          "경험",
          "지금까지, 한 번이라도",
          "방문했다"
        ],
        "correctIndex": 1,
        "correctAnswer": "경험",
        "explanation": "'experience'은 '경험'를 뜻합니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Amy: Do you know the meaning of 'wonderful'? Kelly: Yes, it means '멋진'.",
        "question": "[듣기 · 7단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'wonderful'의 뜻은?",
        "options": [
          "방문했다",
          "있었다, 가본 적 있다",
          "지금까지, 한 번이라도",
          "멋진"
        ],
        "correctIndex": 3,
        "correctAnswer": "멋진",
        "explanation": "'wonderful'은 '멋진'를 뜻합니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Minsoo. No, I have never been there. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Minsoo. No, I have never been there. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "아니, 난 거기에 한 번도 가본 적 없어.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "아니, 난 거기에 한 번도 가본 적 없어.",
        "explanation": "'No, I have never been there.'(아니, 난 거기에 한 번도 가본 적 없어.)이 핵심 문장입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kelly. It was a wonderful experience. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kelly. It was a wonderful experience. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다.",
          "멋진 경험이었어."
        ],
        "correctIndex": 3,
        "correctAnswer": "멋진 경험이었어.",
        "explanation": "'It was a wonderful experience.'(멋진 경험이었어.)이 핵심 문장입니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is David. Have you ever seen Dokdo? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is David. Have you ever seen Dokdo? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "독도를 본 적이 있니?",
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다."
        ],
        "correctIndex": 0,
        "correctAnswer": "독도를 본 적이 있니?",
        "explanation": "'Have you ever seen Dokdo?'(독도를 본 적이 있니?)이 핵심 문장입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Sarah. I visited Gyeongju last summer. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Sarah. I visited Gyeongju last summer. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다.",
          "나는 지난 여름에 경주를 방문했어.",
          "학교 숙제가 너무 많아서 피곤하다."
        ],
        "correctIndex": 2,
        "correctAnswer": "나는 지난 여름에 경주를 방문했어.",
        "explanation": "'I visited Gyeongju last summer.'(나는 지난 여름에 경주를 방문했어.)이 핵심 문장입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Jisu. I rode a horse on the island. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Jisu. I rode a horse on the island. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Jisu이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "나는 섬에서 말을 탔어.",
          "학교 숙제가 너무 많아서 피곤하다."
        ],
        "correctIndex": 2,
        "correctAnswer": "나는 섬에서 말을 탔어.",
        "explanation": "'I rode a horse on the island.'(나는 섬에서 말을 탔어.)이 핵심 문장입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kevin. Have you ever eaten royal bibimbap? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kevin. Have you ever eaten royal bibimbap? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kevin이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "궁중 비빔밥을 먹어본 적 있니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "궁중 비빔밥을 먹어본 적 있니?",
        "explanation": "'Have you ever eaten royal bibimbap?'(궁중 비빔밥을 먹어본 적 있니?)이 핵심 문장입니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Emma. We watched the sunrise in Gangneung. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Emma. We watched the sunrise in Gangneung. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Emma이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "우리는 강릉에서 해돋이를 보았어.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 2,
        "correctAnswer": "우리는 강릉에서 해돋이를 보았어.",
        "explanation": "'We watched the sunrise in Gangneung.'(우리는 강릉에서 해돋이를 보았어.)이 핵심 문장입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Tom. I wore a pretty Hanbok in Jeonju. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Tom. I wore a pretty Hanbok in Jeonju. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Tom이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "나는 전주에서 예쁜 한복을 입었어."
        ],
        "correctIndex": 3,
        "correctAnswer": "나는 전주에서 예쁜 한복을 입었어.",
        "explanation": "'I wore a pretty Hanbok in Jeonju.'(나는 전주에서 예쁜 한복을 입었어.)이 핵심 문장입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Hana. Have you ever climbed Hallasan mountain? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Hana. Have you ever climbed Hallasan mountain? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Hana이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "한라산에 올라가 본 적 있니?",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "한라산에 올라가 본 적 있니?",
        "explanation": "'Have you ever climbed Hallasan mountain?'(한라산에 올라가 본 적 있니?)이 핵심 문장입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Brian. Yes, the view from the top was great. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Brian. Yes, the view from the top was great. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Brian이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "응, 정상에서 바라본 풍경이 대단했어.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다.",
          "학교 숙제가 너무 많아서 피곤하다."
        ],
        "correctIndex": 0,
        "correctAnswer": "응, 정상에서 바라본 풍경이 대단했어.",
        "explanation": "'Yes, the view from the top was great.'(응, 정상에서 바라본 풍경이 대단했어.)이 핵심 문장입니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Amy. I want to visit Dokdo someday. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Amy. I want to visit Dokdo someday. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Amy이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "언젠가 독도를 꼭 방문하고 싶어.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 1,
        "correctAnswer": "언젠가 독도를 꼭 방문하고 싶어.",
        "explanation": "'I want to visit Dokdo someday.'(언젠가 독도를 꼭 방문하고 싶어.)이 핵심 문장입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Paul. Have you ever traveled by ship? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Paul. Have you ever traveled by ship? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Paul이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "배를 타고 여행해 본 적 있니?",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "배를 타고 여행해 본 적 있니?",
        "explanation": "'Have you ever traveled by ship?'(배를 타고 여행해 본 적 있니?)이 핵심 문장입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Minsoo. Tell me more about your trip. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Minsoo. Tell me more about your trip. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "네 여행에 대해 더 이야기해 줘.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "네 여행에 대해 더 이야기해 줘.",
        "explanation": "'Tell me more about your trip.'(네 여행에 대해 더 이야기해 줘.)이 핵심 문장입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kelly. Have you ever visited Jeju-do? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kelly. Have you ever visited Jeju-do? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "제주도에 가본 적 있니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "제주도에 가본 적 있니?",
        "explanation": "'Have you ever visited Jeju-do?'(제주도에 가본 적 있니?)이 핵심 문장입니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is David. Yes, I have visited Jeju-do. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is David. Yes, I have visited Jeju-do. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "응, 제주도에 가본 적 있어.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "응, 제주도에 가본 적 있어.",
        "explanation": "'Yes, I have visited Jeju-do.'(응, 제주도에 가본 적 있어.)이 핵심 문장입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Last year, Sarah visited Busan. It was great because Sarah walked on the famous Haeundae sand and ate warm fish cake soup.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Last year, Sarah visited Busan. It was great because Sarah walked on the famous Haeundae sand and ate warm fish cake soup.\"\n질문: 윗글에서 Sarah이(가) 부산에서 경험한 일로 알맞은 것은?",
        "options": [
          "비가 와서 호텔에만 갇혀 있었다",
          "유명한 해운대 모래사장을 걸었다 및 따뜻한 어묵탕을 먹다",
          "친구가 오지 않아 혼자 있었다",
          "기차가 취소되었다"
        ],
        "correctIndex": 1,
        "correctAnswer": "유명한 해운대 모래사장을 걸었다 및 따뜻한 어묵탕을 먹다",
        "explanation": "지문의 'Last year, Sarah visited Busan. It was great because Sarah walked on the famous Haeundae sand and ate warm fish cake soup.'에 명시되어 있습니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Last year, Jisu visited Gangneung. It was great because Jisu watched the sunrise over the blue sea and tasted soft tofu ice cream.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Last year, Jisu visited Gangneung. It was great because Jisu watched the sunrise over the blue sea and tasted soft tofu ice cream.\"\n질문: 윗글에서 Jisu이(가) 강릉에서 경험한 일로 알맞은 것은?",
        "options": [
          "비가 와서 호텔에만 갇혀 있었다",
          "기차가 취소되었다",
          "푸른 바다 위로 떠오르는 일출을 보았다 및 순두부 아이스크림을 맛보다",
          "친구가 오지 않아 혼자 있었다"
        ],
        "correctIndex": 2,
        "correctAnswer": "푸른 바다 위로 떠오르는 일출을 보았다 및 순두부 아이스크림을 맛보다",
        "explanation": "지문의 'Last year, Jisu visited Gangneung. It was great because Jisu watched the sunrise over the blue sea and tasted soft tofu ice cream.'에 명시되어 있습니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Last year, Kevin visited Jeonju. It was great because Kevin wore a traditional Korean Hanbok and ate colorful royal bibimbap.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Last year, Kevin visited Jeonju. It was great because Kevin wore a traditional Korean Hanbok and ate colorful royal bibimbap.\"\n질문: 윗글에서 Kevin이(가) 전주에서 경험한 일로 알맞은 것은?",
        "options": [
          "전통 한복을 입어보았다 및 다채로운 궁중 비빔밥을 먹다",
          "비가 와서 호텔에만 갇혀 있었다",
          "친구가 오지 않아 혼자 있었다",
          "기차가 취소되었다"
        ],
        "correctIndex": 0,
        "correctAnswer": "전통 한복을 입어보았다 및 다채로운 궁중 비빔밥을 먹다",
        "explanation": "지문의 'Last year, Kevin visited Jeonju. It was great because Kevin wore a traditional Korean Hanbok and ate colorful royal bibimbap.'에 명시되어 있습니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Last year, Emma visited Jeju-do. It was great because Emma rode a horse on the green hill and ate delicious black pork.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Last year, Emma visited Jeju-do. It was great because Emma rode a horse on the green hill and ate delicious black pork.\"\n질문: 윗글에서 Emma이(가) 제주도에서 경험한 일로 알맞은 것은?",
        "options": [
          "비가 와서 호텔에만 갇혀 있었다",
          "기차가 취소되었다",
          "친구가 오지 않아 혼자 있었다",
          "푸른 언덕에서 말을 탔다 및 맛있는 흑돼지를 먹다"
        ],
        "correctIndex": 3,
        "correctAnswer": "푸른 언덕에서 말을 탔다 및 맛있는 흑돼지를 먹다",
        "explanation": "지문의 'Last year, Emma visited Jeju-do. It was great because Emma rode a horse on the green hill and ate delicious black pork.'에 명시되어 있습니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Last year, Tom visited Dokdo. It was great because Tom saw the beautiful Korean flag waving and drank cool island spring water.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Last year, Tom visited Dokdo. It was great because Tom saw the beautiful Korean flag waving and drank cool island spring water.\"\n질문: 윗글에서 Tom이(가) 독도에서 경험한 일로 알맞은 것은?",
        "options": [
          "기차가 취소되었다",
          "친구가 오지 않아 혼자 있었다",
          "비가 와서 호텔에만 갇혀 있었다",
          "펄럭이는 아름다운 태극기를 보았다 및 시원한 샘물을 마시다"
        ],
        "correctIndex": 3,
        "correctAnswer": "펄럭이는 아름다운 태극기를 보았다 및 시원한 샘물을 마시다",
        "explanation": "지문의 'Last year, Tom visited Dokdo. It was great because Tom saw the beautiful Korean flag waving and drank cool island spring water.'에 명시되어 있습니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Last year, Hana visited Gyeongju. It was great because Hana visited historic temples and tombs and ate sweet Hwangnam bread.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Last year, Hana visited Gyeongju. It was great because Hana visited historic temples and tombs and ate sweet Hwangnam bread.\"\n질문: 윗글에서 Hana이(가) 경주에서 경험한 일로 알맞은 것은?",
        "options": [
          "역사적인 사찰과 고분을 방문했다 및 달콤한 황남빵을 먹다",
          "비가 와서 호텔에만 갇혀 있었다",
          "기차가 취소되었다",
          "친구가 오지 않아 혼자 있었다"
        ],
        "correctIndex": 0,
        "correctAnswer": "역사적인 사찰과 고분을 방문했다 및 달콤한 황남빵을 먹다",
        "explanation": "지문의 'Last year, Hana visited Gyeongju. It was great because Hana visited historic temples and tombs and ate sweet Hwangnam bread.'에 명시되어 있습니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Last year, Brian visited Busan. It was great because Brian walked on the famous Haeundae sand and ate warm fish cake soup.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Last year, Brian visited Busan. It was great because Brian walked on the famous Haeundae sand and ate warm fish cake soup.\"\n질문: 윗글에서 Brian이(가) 부산에서 경험한 일로 알맞은 것은?",
        "options": [
          "기차가 취소되었다",
          "친구가 오지 않아 혼자 있었다",
          "비가 와서 호텔에만 갇혀 있었다",
          "유명한 해운대 모래사장을 걸었다 및 따뜻한 어묵탕을 먹다"
        ],
        "correctIndex": 3,
        "correctAnswer": "유명한 해운대 모래사장을 걸었다 및 따뜻한 어묵탕을 먹다",
        "explanation": "지문의 'Last year, Brian visited Busan. It was great because Brian walked on the famous Haeundae sand and ate warm fish cake soup.'에 명시되어 있습니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Last year, Amy visited Gangneung. It was great because Amy watched the sunrise over the blue sea and tasted soft tofu ice cream.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Last year, Amy visited Gangneung. It was great because Amy watched the sunrise over the blue sea and tasted soft tofu ice cream.\"\n질문: 윗글에서 Amy이(가) 강릉에서 경험한 일로 알맞은 것은?",
        "options": [
          "비가 와서 호텔에만 갇혀 있었다",
          "푸른 바다 위로 떠오르는 일출을 보았다 및 순두부 아이스크림을 맛보다",
          "기차가 취소되었다",
          "친구가 오지 않아 혼자 있었다"
        ],
        "correctIndex": 1,
        "correctAnswer": "푸른 바다 위로 떠오르는 일출을 보았다 및 순두부 아이스크림을 맛보다",
        "explanation": "지문의 'Last year, Amy visited Gangneung. It was great because Amy watched the sunrise over the blue sea and tasted soft tofu ice cream.'에 명시되어 있습니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Last year, Paul visited Jeonju. It was great because Paul wore a traditional Korean Hanbok and ate colorful royal bibimbap.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Last year, Paul visited Jeonju. It was great because Paul wore a traditional Korean Hanbok and ate colorful royal bibimbap.\"\n질문: 윗글에서 Paul이(가) 전주에서 경험한 일로 알맞은 것은?",
        "options": [
          "기차가 취소되었다",
          "전통 한복을 입어보았다 및 다채로운 궁중 비빔밥을 먹다",
          "친구가 오지 않아 혼자 있었다",
          "비가 와서 호텔에만 갇혀 있었다"
        ],
        "correctIndex": 1,
        "correctAnswer": "전통 한복을 입어보았다 및 다채로운 궁중 비빔밥을 먹다",
        "explanation": "지문의 'Last year, Paul visited Jeonju. It was great because Paul wore a traditional Korean Hanbok and ate colorful royal bibimbap.'에 명시되어 있습니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Last year, Minsoo visited Jeju-do. It was great because Minsoo rode a horse on the green hill and ate delicious black pork.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Last year, Minsoo visited Jeju-do. It was great because Minsoo rode a horse on the green hill and ate delicious black pork.\"\n질문: 윗글에서 Minsoo이(가) 제주도에서 경험한 일로 알맞은 것은?",
        "options": [
          "친구가 오지 않아 혼자 있었다",
          "푸른 언덕에서 말을 탔다 및 맛있는 흑돼지를 먹다",
          "기차가 취소되었다",
          "비가 와서 호텔에만 갇혀 있었다"
        ],
        "correctIndex": 1,
        "correctAnswer": "푸른 언덕에서 말을 탔다 및 맛있는 흑돼지를 먹다",
        "explanation": "지문의 'Last year, Minsoo visited Jeju-do. It was great because Minsoo rode a horse on the green hill and ate delicious black pork.'에 명시되어 있습니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'saw' is very frequently used. It means '보았다' in Korean.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'saw' is very frequently used. It means '보았다' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'saw'의 한국어 의미는?",
        "options": [
          "보았다",
          "있었다, 가본 적 있다",
          "지금까지, 한 번이라도",
          "방문했다"
        ],
        "correctIndex": 0,
        "correctAnswer": "보았다",
        "explanation": "'saw'은 '보았다'입니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'ever' is very frequently used. It means '지금까지, 한 번이라도' in Korean.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'ever' is very frequently used. It means '지금까지, 한 번이라도' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'ever'의 한국어 의미는?",
        "options": [
          "경험",
          "있었다, 가본 적 있다",
          "방문했다",
          "지금까지, 한 번이라도"
        ],
        "correctIndex": 3,
        "correctAnswer": "지금까지, 한 번이라도",
        "explanation": "'ever'은 '지금까지, 한 번이라도'입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'visited' is very frequently used. It means '방문했다' in Korean.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'visited' is very frequently used. It means '방문했다' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'visited'의 한국어 의미는?",
        "options": [
          "방문했다",
          "경험",
          "지금까지, 한 번이라도",
          "있었다, 가본 적 있다"
        ],
        "correctIndex": 0,
        "correctAnswer": "방문했다",
        "explanation": "'visited'은 '방문했다'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'been' is very frequently used. It means '있었다, 가본 적 있다' in Korean.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'been' is very frequently used. It means '있었다, 가본 적 있다' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'been'의 한국어 의미는?",
        "options": [
          "경험",
          "방문했다",
          "지금까지, 한 번이라도",
          "있었다, 가본 적 있다"
        ],
        "correctIndex": 3,
        "correctAnswer": "있었다, 가본 적 있다",
        "explanation": "'been'은 '있었다, 가본 적 있다'입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'experience' is very frequently used. It means '경험' in Korean.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'experience' is very frequently used. It means '경험' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'experience'의 한국어 의미는?",
        "options": [
          "있었다, 가본 적 있다",
          "방문했다",
          "지금까지, 한 번이라도",
          "경험"
        ],
        "correctIndex": 3,
        "correctAnswer": "경험",
        "explanation": "'experience'은 '경험'입니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'wonderful' is very frequently used. It means '멋진' in Korean.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'wonderful' is very frequently used. It means '멋진' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'wonderful'의 한국어 의미는?",
        "options": [
          "지금까지, 한 번이라도",
          "방문했다",
          "멋진",
          "있었다, 가본 적 있다"
        ],
        "correctIndex": 2,
        "correctAnswer": "멋진",
        "explanation": "'wonderful'은 '멋진'입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'temple' is very frequently used. It means '사찰, 절' in Korean.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'temple' is very frequently used. It means '사찰, 절' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'temple'의 한국어 의미는?",
        "options": [
          "방문했다",
          "사찰, 절",
          "있었다, 가본 적 있다",
          "지금까지, 한 번이라도"
        ],
        "correctIndex": 1,
        "correctAnswer": "사찰, 절",
        "explanation": "'temple'은 '사찰, 절'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'historic' is very frequently used. It means '역사적인' in Korean.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'historic' is very frequently used. It means '역사적인' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'historic'의 한국어 의미는?",
        "options": [
          "방문했다",
          "지금까지, 한 번이라도",
          "역사적인",
          "있었다, 가본 적 있다"
        ],
        "correctIndex": 2,
        "correctAnswer": "역사적인",
        "explanation": "'historic'은 '역사적인'입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'sunrise' is very frequently used. It means '일출, 해돋이' in Korean.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'sunrise' is very frequently used. It means '일출, 해돋이' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'sunrise'의 한국어 의미는?",
        "options": [
          "일출, 해돋이",
          "지금까지, 한 번이라도",
          "방문했다",
          "있었다, 가본 적 있다"
        ],
        "correctIndex": 0,
        "correctAnswer": "일출, 해돋이",
        "explanation": "'sunrise'은 '일출, 해돋이'입니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'traditional' is very frequently used. It means '전통적인' in Korean.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'traditional' is very frequently used. It means '전통적인' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'traditional'의 한국어 의미는?",
        "options": [
          "있었다, 가본 적 있다",
          "지금까지, 한 번이라도",
          "방문했다",
          "전통적인"
        ],
        "correctIndex": 3,
        "correctAnswer": "전통적인",
        "explanation": "'traditional'은 '전통적인'입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 7단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"지금까지, 한 번이라도\" (단어 첫 글자: e, 총 4글자)",
        "correctAnswer": "ever",
        "explanation": "'지금까지, 한 번이라도'에 해당하는 영어 단어는 'ever'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 7단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"방문했다\" (단어 첫 글자: v, 총 7글자)",
        "correctAnswer": "visited",
        "explanation": "'방문했다'에 해당하는 영어 단어는 'visited'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 7단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"있었다, 가본 적 있다\" (단어 첫 글자: b, 총 4글자)",
        "correctAnswer": "been",
        "explanation": "'있었다, 가본 적 있다'에 해당하는 영어 단어는 'been'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 7단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"경험\" (단어 첫 글자: e, 총 10글자)",
        "correctAnswer": "experience",
        "explanation": "'경험'에 해당하는 영어 단어는 'experience'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 7단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"멋진\" (단어 첫 글자: w, 총 9글자)",
        "correctAnswer": "wonderful",
        "explanation": "'멋진'에 해당하는 영어 단어는 'wonderful'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 7단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"사찰, 절\" (단어 첫 글자: t, 총 6글자)",
        "correctAnswer": "temple",
        "explanation": "'사찰, 절'에 해당하는 영어 단어는 'temple'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 7단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"역사적인\" (단어 첫 글자: h, 총 8글자)",
        "correctAnswer": "historic",
        "explanation": "'역사적인'에 해당하는 영어 단어는 'historic'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 7단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"일출, 해돋이\" (단어 첫 글자: s, 총 7글자)",
        "correctAnswer": "sunrise",
        "explanation": "'일출, 해돋이'에 해당하는 영어 단어는 'sunrise'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 7단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"전통적인\" (단어 첫 글자: t, 총 11글자)",
        "correctAnswer": "traditional",
        "explanation": "'전통적인'에 해당하는 영어 단어는 'traditional'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 7단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"깃발\" (단어 첫 글자: f, 총 4글자)",
        "correctAnswer": "flag",
        "explanation": "'깃발'에 해당하는 영어 단어는 'flag'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 7단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"말\" (단어 첫 글자: h, 총 5글자)",
        "correctAnswer": "horse",
        "explanation": "'말'에 해당하는 영어 단어는 'horse'입니다."
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 7단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"섬\" (단어 첫 글자: i, 총 6글자)",
        "correctAnswer": "island",
        "explanation": "'섬'에 해당하는 영어 단어는 'island'입니다."
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 7단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"맛보았다\" (단어 첫 글자: t, 총 6글자)",
        "correctAnswer": "tasted",
        "explanation": "'맛보았다'에 해당하는 영어 단어는 'tasted'입니다."
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 7단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"탔다\" (단어 첫 글자: r, 총 4글자)",
        "correctAnswer": "rode",
        "explanation": "'탔다'에 해당하는 영어 단어는 'rode'입니다."
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 7단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"보았다\" (단어 첫 글자: s, 총 3글자)",
        "correctAnswer": "saw",
        "explanation": "'보았다'에 해당하는 영어 단어는 'saw'입니다."
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"제주도에 가본 적 있니?\"",
        "chips": [
          "Have",
          "you",
          "ever",
          "visited",
          "Jeju-do?"
        ],
        "correctAnswer": "Have you ever visited Jeju-do?",
        "explanation": "'Have you ever visited Jeju-do?'은 '제주도에 가본 적 있니?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"응, 제주도에 가본 적 있어.\"",
        "chips": [
          "Yes",
          "I",
          "have",
          "visited",
          "Jeju-do."
        ],
        "correctAnswer": "Yes, I have visited Jeju-do.",
        "explanation": "'Yes, I have visited Jeju-do.'은 '응, 제주도에 가본 적 있어.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"아니, 난 거기에 한 번도 가본 적 없어.\"",
        "chips": [
          "No",
          "I",
          "have",
          "never",
          "been",
          "there."
        ],
        "correctAnswer": "No, I have never been there.",
        "explanation": "'No, I have never been there.'은 '아니, 난 거기에 한 번도 가본 적 없어.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"멋진 경험이었어.\"",
        "chips": [
          "It",
          "was",
          "a",
          "wonderful",
          "experience."
        ],
        "correctAnswer": "It was a wonderful experience.",
        "explanation": "'It was a wonderful experience.'은 '멋진 경험이었어.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"독도를 본 적이 있니?\"",
        "chips": [
          "Have",
          "you",
          "ever",
          "seen",
          "Dokdo?"
        ],
        "correctAnswer": "Have you ever seen Dokdo?",
        "explanation": "'Have you ever seen Dokdo?'은 '독도를 본 적이 있니?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"나는 지난 여름에 경주를 방문했어.\"",
        "chips": [
          "I",
          "visited",
          "Gyeongju",
          "last",
          "summer."
        ],
        "correctAnswer": "I visited Gyeongju last summer.",
        "explanation": "'I visited Gyeongju last summer.'은 '나는 지난 여름에 경주를 방문했어.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"나는 섬에서 말을 탔어.\"",
        "chips": [
          "I",
          "rode",
          "a",
          "horse",
          "on",
          "the",
          "island."
        ],
        "correctAnswer": "I rode a horse on the island.",
        "explanation": "'I rode a horse on the island.'은 '나는 섬에서 말을 탔어.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"궁중 비빔밥을 먹어본 적 있니?\"",
        "chips": [
          "Have",
          "you",
          "ever",
          "eaten",
          "royal",
          "bibimbap?"
        ],
        "correctAnswer": "Have you ever eaten royal bibimbap?",
        "explanation": "'Have you ever eaten royal bibimbap?'은 '궁중 비빔밥을 먹어본 적 있니?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"우리는 강릉에서 해돋이를 보았어.\"",
        "chips": [
          "We",
          "watched",
          "the",
          "sunrise",
          "in",
          "Gangneung."
        ],
        "correctAnswer": "We watched the sunrise in Gangneung.",
        "explanation": "'We watched the sunrise in Gangneung.'은 '우리는 강릉에서 해돋이를 보았어.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"나는 전주에서 예쁜 한복을 입었어.\"",
        "chips": [
          "I",
          "wore",
          "a",
          "pretty",
          "Hanbok",
          "in",
          "Jeonju."
        ],
        "correctAnswer": "I wore a pretty Hanbok in Jeonju.",
        "explanation": "'I wore a pretty Hanbok in Jeonju.'은 '나는 전주에서 예쁜 한복을 입었어.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 96,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"한라산에 올라가 본 적 있니?\"",
        "chips": [
          "Have",
          "you",
          "ever",
          "climbed",
          "Hallasan",
          "mountain?"
        ],
        "correctAnswer": "Have you ever climbed Hallasan mountain?",
        "explanation": "'Have you ever climbed Hallasan mountain?'은 '한라산에 올라가 본 적 있니?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 97,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"응, 정상에서 바라본 풍경이 대단했어.\"",
        "chips": [
          "Yes",
          "the",
          "view",
          "from",
          "the",
          "top",
          "was",
          "great."
        ],
        "correctAnswer": "Yes, the view from the top was great.",
        "explanation": "'Yes, the view from the top was great.'은 '응, 정상에서 바라본 풍경이 대단했어.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 98,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"언젠가 독도를 꼭 방문하고 싶어.\"",
        "chips": [
          "I",
          "want",
          "to",
          "visit",
          "Dokdo",
          "someday."
        ],
        "correctAnswer": "I want to visit Dokdo someday.",
        "explanation": "'I want to visit Dokdo someday.'은 '언젠가 독도를 꼭 방문하고 싶어.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 99,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"배를 타고 여행해 본 적 있니?\"",
        "chips": [
          "Have",
          "you",
          "ever",
          "traveled",
          "by",
          "ship?"
        ],
        "correctAnswer": "Have you ever traveled by ship?",
        "explanation": "'Have you ever traveled by ship?'은 '배를 타고 여행해 본 적 있니?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[최종 골든벨 문제] 다음 우리말에 맞도록 주어진 단어 카드를 순서대로 바르게 배열하세요.\n우리말: \"네 여행에 대해 더 이야기해 줘.\"",
        "chips": [
          "Tell",
          "me",
          "more",
          "about",
          "your",
          "trip."
        ],
        "correctAnswer": "Tell me more about your trip.",
        "explanation": "'Tell me more about your trip.'은 '네 여행에 대해 더 이야기해 줘.'을 의미하는 핵심 문장입니다."
      }
    ]
  },
  "6G_L08": {
    "name": "8단원: 비교급과 특징 비교 (A giraffe is taller than an elephant)",
    "grade": 6,
    "theme": "Comparisons & Characteristics",
    "totalQuestions": 100,
    "questions": [
      {
        "id": 1,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Look! A giraffe is taller than an elephant. Sarah: That's right! It has a very long neck.",
        "question": "[듣기 · 8단원] 비교 대화를 듣고, 두 대상의 특징 비교로 일치하는 것은?",
        "options": [
          "차이를 알 수 없다",
          "코끼리이(가) 더 빠르고 크다",
          "기린이(가) 코끼리보다 키가 더 큰",
          "두 대상의 크기와 성질이 완전히 같다"
        ],
        "correctIndex": 2,
        "correctAnswer": "기린이(가) 코끼리보다 키가 더 큰",
        "explanation": "'A giraffe is taller than an elephant'입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kelly: Look! A blue whale is heavier and bigger than any dinosaur. Jisu: That's right! It lives in the deep ocean.",
        "question": "[듣기 · 8단원] 비교 대화를 듣고, 두 대상의 특징 비교로 일치하는 것은?",
        "options": [
          "두 대상의 크기와 성질이 완전히 같다",
          "어떤 공룡이(가) 더 빠르고 크다",
          "차이를 알 수 없다",
          "대왕고래이(가) 어떤 공룡보다 더 무겁고 큰"
        ],
        "correctIndex": 3,
        "correctAnswer": "대왕고래이(가) 어떤 공룡보다 더 무겁고 큰",
        "explanation": "'A blue whale is heavier and bigger than any dinosaur'입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "David: Look! A cheetah is faster than a lion. Kevin: That's right! It can run like the wind.",
        "question": "[듣기 · 8단원] 비교 대화를 듣고, 두 대상의 특징 비교로 일치하는 것은?",
        "options": [
          "치타이(가) 사자보다 더 빠른",
          "사자이(가) 더 빠르고 크다",
          "차이를 알 수 없다",
          "두 대상의 크기와 성질이 완전히 같다"
        ],
        "correctIndex": 0,
        "correctAnswer": "치타이(가) 사자보다 더 빠른",
        "explanation": "'A cheetah is faster than a lion'입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Sarah: Look! An airplane is much faster than a KTX train. Emma: That's right! It flies high in the sky.",
        "question": "[듣기 · 8단원] 비교 대화를 듣고, 두 대상의 특징 비교로 일치하는 것은?",
        "options": [
          "비행기이(가) KTX 고속열차보다 훨씬 더 빠른",
          "KTX 고속열차이(가) 더 빠르고 크다",
          "두 대상의 크기와 성질이 완전히 같다",
          "차이를 알 수 없다"
        ],
        "correctIndex": 0,
        "correctAnswer": "비행기이(가) KTX 고속열차보다 훨씬 더 빠른",
        "explanation": "'An airplane is much faster than a KTX train'입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Jisu: Look! Hallasan is higher than Bukhansan. Tom: That's right! It is 1950 meters high.",
        "question": "[듣기 · 8단원] 비교 대화를 듣고, 두 대상의 특징 비교로 일치하는 것은?",
        "options": [
          "한라산이(가) 북한산보다 더 높은",
          "북한산이(가) 더 빠르고 크다",
          "차이를 알 수 없다",
          "두 대상의 크기와 성질이 완전히 같다"
        ],
        "correctIndex": 0,
        "correctAnswer": "한라산이(가) 북한산보다 더 높은",
        "explanation": "'Hallasan is higher than Bukhansan'입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kevin: Look! An elephant is stronger and larger than a polar bear. Hana: That's right! It uses its long trunk.",
        "question": "[듣기 · 8단원] 비교 대화를 듣고, 두 대상의 특징 비교로 일치하는 것은?",
        "options": [
          "차이를 알 수 없다",
          "두 대상의 크기와 성질이 완전히 같다",
          "북극곰이(가) 더 빠르고 크다",
          "코끼리이(가) 북극곰보다 더 힘세고 거대한"
        ],
        "correctIndex": 3,
        "correctAnswer": "코끼리이(가) 북극곰보다 더 힘세고 거대한",
        "explanation": "'An elephant is stronger and larger than a polar bear'입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Emma: Look! A giraffe is taller than an elephant. Brian: That's right! It has a very long neck.",
        "question": "[듣기 · 8단원] 비교 대화를 듣고, 두 대상의 특징 비교로 일치하는 것은?",
        "options": [
          "기린이(가) 코끼리보다 키가 더 큰",
          "코끼리이(가) 더 빠르고 크다",
          "두 대상의 크기와 성질이 완전히 같다",
          "차이를 알 수 없다"
        ],
        "correctIndex": 0,
        "correctAnswer": "기린이(가) 코끼리보다 키가 더 큰",
        "explanation": "'A giraffe is taller than an elephant'입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Tom: Look! A blue whale is heavier and bigger than any dinosaur. Amy: That's right! It lives in the deep ocean.",
        "question": "[듣기 · 8단원] 비교 대화를 듣고, 두 대상의 특징 비교로 일치하는 것은?",
        "options": [
          "두 대상의 크기와 성질이 완전히 같다",
          "어떤 공룡이(가) 더 빠르고 크다",
          "차이를 알 수 없다",
          "대왕고래이(가) 어떤 공룡보다 더 무겁고 큰"
        ],
        "correctIndex": 3,
        "correctAnswer": "대왕고래이(가) 어떤 공룡보다 더 무겁고 큰",
        "explanation": "'A blue whale is heavier and bigger than any dinosaur'입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Hana: Look! A cheetah is faster than a lion. Paul: That's right! It can run like the wind.",
        "question": "[듣기 · 8단원] 비교 대화를 듣고, 두 대상의 특징 비교로 일치하는 것은?",
        "options": [
          "치타이(가) 사자보다 더 빠른",
          "사자이(가) 더 빠르고 크다",
          "두 대상의 크기와 성질이 완전히 같다",
          "차이를 알 수 없다"
        ],
        "correctIndex": 0,
        "correctAnswer": "치타이(가) 사자보다 더 빠른",
        "explanation": "'A cheetah is faster than a lion'입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Brian: Look! An airplane is much faster than a KTX train. Minsoo: That's right! It flies high in the sky.",
        "question": "[듣기 · 8단원] 비교 대화를 듣고, 두 대상의 특징 비교로 일치하는 것은?",
        "options": [
          "차이를 알 수 없다",
          "비행기이(가) KTX 고속열차보다 훨씬 더 빠른",
          "KTX 고속열차이(가) 더 빠르고 크다",
          "두 대상의 크기와 성질이 완전히 같다"
        ],
        "correctIndex": 1,
        "correctAnswer": "비행기이(가) KTX 고속열차보다 훨씬 더 빠른",
        "explanation": "'An airplane is much faster than a KTX train'입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Amy: Look! Hallasan is higher than Bukhansan. Kelly: That's right! It is 1950 meters high.",
        "question": "[듣기 · 8단원] 비교 대화를 듣고, 두 대상의 특징 비교로 일치하는 것은?",
        "options": [
          "두 대상의 크기와 성질이 완전히 같다",
          "북한산이(가) 더 빠르고 크다",
          "한라산이(가) 북한산보다 더 높은",
          "차이를 알 수 없다"
        ],
        "correctIndex": 2,
        "correctAnswer": "한라산이(가) 북한산보다 더 높은",
        "explanation": "'Hallasan is higher than Bukhansan'입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Paul: Look! An elephant is stronger and larger than a polar bear. David: That's right! It uses its long trunk.",
        "question": "[듣기 · 8단원] 비교 대화를 듣고, 두 대상의 특징 비교로 일치하는 것은?",
        "options": [
          "차이를 알 수 없다",
          "코끼리이(가) 북극곰보다 더 힘세고 거대한",
          "두 대상의 크기와 성질이 완전히 같다",
          "북극곰이(가) 더 빠르고 크다"
        ],
        "correctIndex": 1,
        "correctAnswer": "코끼리이(가) 북극곰보다 더 힘세고 거대한",
        "explanation": "'An elephant is stronger and larger than a polar bear'입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Math is more difficult than music. Sarah: I completely agree with you!",
        "question": "[듣기 · 8단원] 대화에서 Minsoo이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "수학은 음악보다 더 어려워."
        ],
        "correctIndex": 3,
        "correctAnswer": "수학은 음악보다 더 어려워.",
        "explanation": "'Math is more difficult than music.'은 '수학은 음악보다 더 어려워.'을 의미합니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kelly: Summer days are longer than winter days. Jisu: I completely agree with you!",
        "question": "[듣기 · 8단원] 대화에서 Kelly이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "여름날은 겨울날보다 낮이 더 길어."
        ],
        "correctIndex": 3,
        "correctAnswer": "여름날은 겨울날보다 낮이 더 길어.",
        "explanation": "'Summer days are longer than winter days.'은 '여름날은 겨울날보다 낮이 더 길어.'을 의미합니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "David: Can you run faster than a horse? Kevin: I completely agree with you!",
        "question": "[듣기 · 8단원] 대화에서 David이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자.",
          "너는 말보다 더 빨리 달릴 수 있니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "너는 말보다 더 빨리 달릴 수 있니?",
        "explanation": "'Can you run faster than a horse?'은 '너는 말보다 더 빨리 달릴 수 있니?'을 의미합니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Sarah: A giraffe is taller than an elephant. Emma: I completely agree with you!",
        "question": "[듣기 · 8단원] 대화에서 Sarah이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "기린은 코끼리보다 키가 더 커.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 2,
        "correctAnswer": "기린은 코끼리보다 키가 더 커.",
        "explanation": "'A giraffe is taller than an elephant.'은 '기린은 코끼리보다 키가 더 커.'을 의미합니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Jisu: A cheetah is faster than a lion. Tom: I completely agree with you!",
        "question": "[듣기 · 8단원] 대화에서 Jisu이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음에 다시 이야기하자.",
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야.",
          "치타는 사자보다 더 빨라."
        ],
        "correctIndex": 3,
        "correctAnswer": "치타는 사자보다 더 빨라.",
        "explanation": "'A cheetah is faster than a lion.'은 '치타는 사자보다 더 빨라.'을 의미합니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kevin: Who is stronger, Kevin or David? Hana: I completely agree with you!",
        "question": "[듣기 · 8단원] 대화에서 Kevin이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자.",
          "케빈과 데이비드 중 누가 더 힘이 세니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "케빈과 데이비드 중 누가 더 힘이 세니?",
        "explanation": "'Who is stronger, Kevin or David?'은 '케빈과 데이비드 중 누가 더 힘이 세니?'을 의미합니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Emma: David is stronger than Kevin. Brian: I completely agree with you!",
        "question": "[듣기 · 8단원] 대화에서 Emma이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야.",
          "데이비드가 케빈보다 더 힘이 세."
        ],
        "correctIndex": 3,
        "correctAnswer": "데이비드가 케빈보다 더 힘이 세.",
        "explanation": "'David is stronger than Kevin.'은 '데이비드가 케빈보다 더 힘이 세.'을 의미합니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Tom: A blue whale is bigger than an elephant. Amy: I completely agree with you!",
        "question": "[듣기 · 8단원] 대화에서 Tom이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "대왕고래는 코끼리보다 더 커.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 2,
        "correctAnswer": "대왕고래는 코끼리보다 더 커.",
        "explanation": "'A blue whale is bigger than an elephant.'은 '대왕고래는 코끼리보다 더 커.'을 의미합니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Hana: Hallasan is higher than Bukhansan. Paul: I completely agree with you!",
        "question": "[듣기 · 8단원] 대화에서 Hana이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "한라산은 북한산보다 더 높아."
        ],
        "correctIndex": 3,
        "correctAnswer": "한라산은 북한산보다 더 높아.",
        "explanation": "'Hallasan is higher than Bukhansan.'은 '한라산은 북한산보다 더 높아.'을 의미합니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Brian: An airplane is faster than a train. Minsoo: I completely agree with you!",
        "question": "[듣기 · 8단원] 대화에서 Brian이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "비행기는 기차보다 더 빨라.",
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자."
        ],
        "correctIndex": 1,
        "correctAnswer": "비행기는 기차보다 더 빨라.",
        "explanation": "'An airplane is faster than a train.'은 '비행기는 기차보다 더 빨라.'을 의미합니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Amy: My backpack is heavier than yours. Kelly: I completely agree with you!",
        "question": "[듣기 · 8단원] 대화에서 Amy이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "나는 잘 모르겠어.",
          "내 배낭이 네 것보다 더 무거워."
        ],
        "correctIndex": 3,
        "correctAnswer": "내 배낭이 네 것보다 더 무거워.",
        "explanation": "'My backpack is heavier than yours.'은 '내 배낭이 네 것보다 더 무거워.'을 의미합니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Paul: Which animal runs faster? David: I completely agree with you!",
        "question": "[듣기 · 8단원] 대화에서 Paul이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "어떤 동물이 더 빨리 달리니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "어떤 동물이 더 빨리 달리니?",
        "explanation": "'Which animal runs faster?'은 '어떤 동물이 더 빨리 달리니?'을 의미합니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Do you know the meaning of 'giraffe'? Sarah: Yes, it means '기린'.",
        "question": "[듣기 · 8단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'giraffe'의 뜻은?",
        "options": [
          "기린",
          "키가 더 큰",
          "더 빠른",
          "더 큰"
        ],
        "correctIndex": 0,
        "correctAnswer": "기린",
        "explanation": "'giraffe'은 '기린'를 뜻합니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kelly: Do you know the meaning of 'whale'? Jisu: Yes, it means '고래'.",
        "question": "[듣기 · 8단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'whale'의 뜻은?",
        "options": [
          "고래",
          "키가 더 큰",
          "더 빠른",
          "더 큰"
        ],
        "correctIndex": 0,
        "correctAnswer": "고래",
        "explanation": "'whale'은 '고래'를 뜻합니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "David: Do you know the meaning of 'cheetah'? Kevin: Yes, it means '치타'.",
        "question": "[듣기 · 8단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'cheetah'의 뜻은?",
        "options": [
          "치타",
          "키가 더 큰",
          "더 빠른",
          "더 큰"
        ],
        "correctIndex": 0,
        "correctAnswer": "치타",
        "explanation": "'cheetah'은 '치타'를 뜻합니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Sarah: Do you know the meaning of 'elephant'? Emma: Yes, it means '코끼리'.",
        "question": "[듣기 · 8단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'elephant'의 뜻은?",
        "options": [
          "더 큰",
          "코끼리",
          "키가 더 큰",
          "더 빠른"
        ],
        "correctIndex": 1,
        "correctAnswer": "코끼리",
        "explanation": "'elephant'은 '코끼리'를 뜻합니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Jisu: Do you know the meaning of 'mountain'? Tom: Yes, it means '산'.",
        "question": "[듣기 · 8단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'mountain'의 뜻은?",
        "options": [
          "더 빠른",
          "더 큰",
          "키가 더 큰",
          "산"
        ],
        "correctIndex": 3,
        "correctAnswer": "산",
        "explanation": "'mountain'은 '산'를 뜻합니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kevin: Do you know the meaning of 'speed'? Hana: Yes, it means '속도'.",
        "question": "[듣기 · 8단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'speed'의 뜻은?",
        "options": [
          "더 큰",
          "속도",
          "더 빠른",
          "키가 더 큰"
        ],
        "correctIndex": 1,
        "correctAnswer": "속도",
        "explanation": "'speed'은 '속도'를 뜻합니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Emma: Do you know the meaning of 'taller'? Brian: Yes, it means '키가 더 큰'.",
        "question": "[듣기 · 8단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'taller'의 뜻은?",
        "options": [
          "키가 더 큰",
          "더 빠른",
          "더 큰",
          "더 무거운"
        ],
        "correctIndex": 0,
        "correctAnswer": "키가 더 큰",
        "explanation": "'taller'은 '키가 더 큰'를 뜻합니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Tom: Do you know the meaning of 'faster'? Amy: Yes, it means '더 빠른'.",
        "question": "[듣기 · 8단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'faster'의 뜻은?",
        "options": [
          "더 무거운",
          "더 큰",
          "키가 더 큰",
          "더 빠른"
        ],
        "correctIndex": 3,
        "correctAnswer": "더 빠른",
        "explanation": "'faster'은 '더 빠른'를 뜻합니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Hana: Do you know the meaning of 'bigger'? Paul: Yes, it means '더 큰'.",
        "question": "[듣기 · 8단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'bigger'의 뜻은?",
        "options": [
          "더 무거운",
          "더 빠른",
          "키가 더 큰",
          "더 큰"
        ],
        "correctIndex": 3,
        "correctAnswer": "더 큰",
        "explanation": "'bigger'은 '더 큰'를 뜻합니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Brian: Do you know the meaning of 'heavier'? Minsoo: Yes, it means '더 무거운'.",
        "question": "[듣기 · 8단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'heavier'의 뜻은?",
        "options": [
          "더 빠른",
          "더 큰",
          "키가 더 큰",
          "더 무거운"
        ],
        "correctIndex": 3,
        "correctAnswer": "더 무거운",
        "explanation": "'heavier'은 '더 무거운'를 뜻합니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Amy: Do you know the meaning of 'stronger'? Kelly: Yes, it means '더 힘센'.",
        "question": "[듣기 · 8단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'stronger'의 뜻은?",
        "options": [
          "키가 더 큰",
          "더 힘센",
          "더 큰",
          "더 빠른"
        ],
        "correctIndex": 1,
        "correctAnswer": "더 힘센",
        "explanation": "'stronger'은 '더 힘센'를 뜻합니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Minsoo. Who is stronger, Kevin or David? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Minsoo. Who is stronger, Kevin or David? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "케빈과 데이비드 중 누가 더 힘이 세니?",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 1,
        "correctAnswer": "케빈과 데이비드 중 누가 더 힘이 세니?",
        "explanation": "'Who is stronger, Kevin or David?'(케빈과 데이비드 중 누가 더 힘이 세니?)이 핵심 문장입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kelly. David is stronger than Kevin. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kelly. David is stronger than Kevin. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다.",
          "데이비드가 케빈보다 더 힘이 세.",
          "학교 숙제가 너무 많아서 피곤하다."
        ],
        "correctIndex": 2,
        "correctAnswer": "데이비드가 케빈보다 더 힘이 세.",
        "explanation": "'David is stronger than Kevin.'(데이비드가 케빈보다 더 힘이 세.)이 핵심 문장입니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is David. A blue whale is bigger than an elephant. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is David. A blue whale is bigger than an elephant. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "대왕고래는 코끼리보다 더 커."
        ],
        "correctIndex": 3,
        "correctAnswer": "대왕고래는 코끼리보다 더 커.",
        "explanation": "'A blue whale is bigger than an elephant.'(대왕고래는 코끼리보다 더 커.)이 핵심 문장입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Sarah. Hallasan is higher than Bukhansan. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Sarah. Hallasan is higher than Bukhansan. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "한라산은 북한산보다 더 높아.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 0,
        "correctAnswer": "한라산은 북한산보다 더 높아.",
        "explanation": "'Hallasan is higher than Bukhansan.'(한라산은 북한산보다 더 높아.)이 핵심 문장입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Jisu. An airplane is faster than a train. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Jisu. An airplane is faster than a train. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Jisu이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "비행기는 기차보다 더 빨라."
        ],
        "correctIndex": 3,
        "correctAnswer": "비행기는 기차보다 더 빨라.",
        "explanation": "'An airplane is faster than a train.'(비행기는 기차보다 더 빨라.)이 핵심 문장입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kevin. My backpack is heavier than yours. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kevin. My backpack is heavier than yours. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kevin이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "내 배낭이 네 것보다 더 무거워.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 2,
        "correctAnswer": "내 배낭이 네 것보다 더 무거워.",
        "explanation": "'My backpack is heavier than yours.'(내 배낭이 네 것보다 더 무거워.)이 핵심 문장입니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Emma. Which animal runs faster? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Emma. Which animal runs faster? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Emma이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "길을 잃어버려서 헤매고 있다.",
          "어떤 동물이 더 빨리 달리니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "어떤 동물이 더 빨리 달리니?",
        "explanation": "'Which animal runs faster?'(어떤 동물이 더 빨리 달리니?)이 핵심 문장입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Tom. The cheetah runs much faster. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Tom. The cheetah runs much faster. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Tom이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "치타가 훨씬 더 빨리 달려."
        ],
        "correctIndex": 3,
        "correctAnswer": "치타가 훨씬 더 빨리 달려.",
        "explanation": "'The cheetah runs much faster.'(치타가 훨씬 더 빨리 달려.)이 핵심 문장입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Hana. I am taller than my older sister. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Hana. I am taller than my older sister. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Hana이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "내가 우리 누나보다 키가 더 커."
        ],
        "correctIndex": 3,
        "correctAnswer": "내가 우리 누나보다 키가 더 커.",
        "explanation": "'I am taller than my older sister.'(내가 우리 누나보다 키가 더 커.)이 핵심 문장입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Brian. A rabbit is smaller than a bear. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Brian. A rabbit is smaller than a bear. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Brian이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "토끼는 곰보다 더 작아.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 2,
        "correctAnswer": "토끼는 곰보다 더 작아.",
        "explanation": "'A rabbit is smaller than a bear.'(토끼는 곰보다 더 작아.)이 핵심 문장입니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Amy. Math is more difficult than music. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Amy. Math is more difficult than music. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Amy이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "수학은 음악보다 더 어려워."
        ],
        "correctIndex": 3,
        "correctAnswer": "수학은 음악보다 더 어려워.",
        "explanation": "'Math is more difficult than music.'(수학은 음악보다 더 어려워.)이 핵심 문장입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Paul. Summer days are longer than winter days. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Paul. Summer days are longer than winter days. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Paul이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "여름날은 겨울날보다 낮이 더 길어.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 1,
        "correctAnswer": "여름날은 겨울날보다 낮이 더 길어.",
        "explanation": "'Summer days are longer than winter days.'(여름날은 겨울날보다 낮이 더 길어.)이 핵심 문장입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Minsoo. Can you run faster than a horse? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Minsoo. Can you run faster than a horse? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "너는 말보다 더 빨리 달릴 수 있니?",
          "길을 잃어버려서 헤매고 있다.",
          "학교 숙제가 너무 많아서 피곤하다."
        ],
        "correctIndex": 1,
        "correctAnswer": "너는 말보다 더 빨리 달릴 수 있니?",
        "explanation": "'Can you run faster than a horse?'(너는 말보다 더 빨리 달릴 수 있니?)이 핵심 문장입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kelly. A giraffe is taller than an elephant. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kelly. A giraffe is taller than an elephant. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "기린은 코끼리보다 키가 더 커.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 2,
        "correctAnswer": "기린은 코끼리보다 키가 더 커.",
        "explanation": "'A giraffe is taller than an elephant.'(기린은 코끼리보다 키가 더 커.)이 핵심 문장입니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is David. A cheetah is faster than a lion. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is David. A cheetah is faster than a lion. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "치타는 사자보다 더 빨라."
        ],
        "correctIndex": 3,
        "correctAnswer": "치타는 사자보다 더 빨라.",
        "explanation": "'A cheetah is faster than a lion.'(치타는 사자보다 더 빨라.)이 핵심 문장입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "In nature, An airplane is much faster than a KTX train. Furthermore, it flies high in the sky.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"In nature, An airplane is much faster than a KTX train. Furthermore, it flies high in the sky.\"\n질문: 윗글의 내용과 일치하는 비교 설명으로 가장 적절한 것은?",
        "options": [
          "두 동물의 크기와 능력이 동일하다",
          "KTX 고속열차이(가) 훨씬 더 크고 무겁다",
          "비교할 수 없다",
          "비행기이(가) KTX 고속열차보다 훨씬 더 빠른"
        ],
        "correctIndex": 3,
        "correctAnswer": "비행기이(가) KTX 고속열차보다 훨씬 더 빠른",
        "explanation": "지문의 'In nature, An airplane is much faster than a KTX train. Furthermore, it flies high in the sky.'에 명시되어 있습니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "In nature, Hallasan is higher than Bukhansan. Furthermore, it is 1950 meters high.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"In nature, Hallasan is higher than Bukhansan. Furthermore, it is 1950 meters high.\"\n질문: 윗글의 내용과 일치하는 비교 설명으로 가장 적절한 것은?",
        "options": [
          "한라산이(가) 북한산보다 더 높은",
          "북한산이(가) 훨씬 더 크고 무겁다",
          "비교할 수 없다",
          "두 동물의 크기와 능력이 동일하다"
        ],
        "correctIndex": 0,
        "correctAnswer": "한라산이(가) 북한산보다 더 높은",
        "explanation": "지문의 'In nature, Hallasan is higher than Bukhansan. Furthermore, it is 1950 meters high.'에 명시되어 있습니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "In nature, An elephant is stronger and larger than a polar bear. Furthermore, it uses its long trunk.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"In nature, An elephant is stronger and larger than a polar bear. Furthermore, it uses its long trunk.\"\n질문: 윗글의 내용과 일치하는 비교 설명으로 가장 적절한 것은?",
        "options": [
          "두 동물의 크기와 능력이 동일하다",
          "비교할 수 없다",
          "북극곰이(가) 훨씬 더 크고 무겁다",
          "코끼리이(가) 북극곰보다 더 힘세고 거대한"
        ],
        "correctIndex": 3,
        "correctAnswer": "코끼리이(가) 북극곰보다 더 힘세고 거대한",
        "explanation": "지문의 'In nature, An elephant is stronger and larger than a polar bear. Furthermore, it uses its long trunk.'에 명시되어 있습니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "In nature, A giraffe is taller than an elephant. Furthermore, it has a very long neck.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"In nature, A giraffe is taller than an elephant. Furthermore, it has a very long neck.\"\n질문: 윗글의 내용과 일치하는 비교 설명으로 가장 적절한 것은?",
        "options": [
          "기린이(가) 코끼리보다 키가 더 큰",
          "코끼리이(가) 훨씬 더 크고 무겁다",
          "두 동물의 크기와 능력이 동일하다",
          "비교할 수 없다"
        ],
        "correctIndex": 0,
        "correctAnswer": "기린이(가) 코끼리보다 키가 더 큰",
        "explanation": "지문의 'In nature, A giraffe is taller than an elephant. Furthermore, it has a very long neck.'에 명시되어 있습니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "In nature, A blue whale is heavier and bigger than any dinosaur. Furthermore, it lives in the deep ocean.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"In nature, A blue whale is heavier and bigger than any dinosaur. Furthermore, it lives in the deep ocean.\"\n질문: 윗글의 내용과 일치하는 비교 설명으로 가장 적절한 것은?",
        "options": [
          "비교할 수 없다",
          "두 동물의 크기와 능력이 동일하다",
          "어떤 공룡이(가) 훨씬 더 크고 무겁다",
          "대왕고래이(가) 어떤 공룡보다 더 무겁고 큰"
        ],
        "correctIndex": 3,
        "correctAnswer": "대왕고래이(가) 어떤 공룡보다 더 무겁고 큰",
        "explanation": "지문의 'In nature, A blue whale is heavier and bigger than any dinosaur. Furthermore, it lives in the deep ocean.'에 명시되어 있습니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "In nature, A cheetah is faster than a lion. Furthermore, it can run like the wind.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"In nature, A cheetah is faster than a lion. Furthermore, it can run like the wind.\"\n질문: 윗글의 내용과 일치하는 비교 설명으로 가장 적절한 것은?",
        "options": [
          "비교할 수 없다",
          "두 동물의 크기와 능력이 동일하다",
          "사자이(가) 훨씬 더 크고 무겁다",
          "치타이(가) 사자보다 더 빠른"
        ],
        "correctIndex": 3,
        "correctAnswer": "치타이(가) 사자보다 더 빠른",
        "explanation": "지문의 'In nature, A cheetah is faster than a lion. Furthermore, it can run like the wind.'에 명시되어 있습니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "In nature, An airplane is much faster than a KTX train. Furthermore, it flies high in the sky.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"In nature, An airplane is much faster than a KTX train. Furthermore, it flies high in the sky.\"\n질문: 윗글의 내용과 일치하는 비교 설명으로 가장 적절한 것은?",
        "options": [
          "두 동물의 크기와 능력이 동일하다",
          "비교할 수 없다",
          "KTX 고속열차이(가) 훨씬 더 크고 무겁다",
          "비행기이(가) KTX 고속열차보다 훨씬 더 빠른"
        ],
        "correctIndex": 3,
        "correctAnswer": "비행기이(가) KTX 고속열차보다 훨씬 더 빠른",
        "explanation": "지문의 'In nature, An airplane is much faster than a KTX train. Furthermore, it flies high in the sky.'에 명시되어 있습니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "In nature, Hallasan is higher than Bukhansan. Furthermore, it is 1950 meters high.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"In nature, Hallasan is higher than Bukhansan. Furthermore, it is 1950 meters high.\"\n질문: 윗글의 내용과 일치하는 비교 설명으로 가장 적절한 것은?",
        "options": [
          "비교할 수 없다",
          "두 동물의 크기와 능력이 동일하다",
          "북한산이(가) 훨씬 더 크고 무겁다",
          "한라산이(가) 북한산보다 더 높은"
        ],
        "correctIndex": 3,
        "correctAnswer": "한라산이(가) 북한산보다 더 높은",
        "explanation": "지문의 'In nature, Hallasan is higher than Bukhansan. Furthermore, it is 1950 meters high.'에 명시되어 있습니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "In nature, An elephant is stronger and larger than a polar bear. Furthermore, it uses its long trunk.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"In nature, An elephant is stronger and larger than a polar bear. Furthermore, it uses its long trunk.\"\n질문: 윗글의 내용과 일치하는 비교 설명으로 가장 적절한 것은?",
        "options": [
          "비교할 수 없다",
          "코끼리이(가) 북극곰보다 더 힘세고 거대한",
          "북극곰이(가) 훨씬 더 크고 무겁다",
          "두 동물의 크기와 능력이 동일하다"
        ],
        "correctIndex": 1,
        "correctAnswer": "코끼리이(가) 북극곰보다 더 힘세고 거대한",
        "explanation": "지문의 'In nature, An elephant is stronger and larger than a polar bear. Furthermore, it uses its long trunk.'에 명시되어 있습니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "In nature, A giraffe is taller than an elephant. Furthermore, it has a very long neck.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"In nature, A giraffe is taller than an elephant. Furthermore, it has a very long neck.\"\n질문: 윗글의 내용과 일치하는 비교 설명으로 가장 적절한 것은?",
        "options": [
          "비교할 수 없다",
          "코끼리이(가) 훨씬 더 크고 무겁다",
          "두 동물의 크기와 능력이 동일하다",
          "기린이(가) 코끼리보다 키가 더 큰"
        ],
        "correctIndex": 3,
        "correctAnswer": "기린이(가) 코끼리보다 키가 더 큰",
        "explanation": "지문의 'In nature, A giraffe is taller than an elephant. Furthermore, it has a very long neck.'에 명시되어 있습니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'speed' is very frequently used. It means '속도' in Korean.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'speed' is very frequently used. It means '속도' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'speed'의 한국어 의미는?",
        "options": [
          "더 빠른",
          "더 큰",
          "키가 더 큰",
          "속도"
        ],
        "correctIndex": 3,
        "correctAnswer": "속도",
        "explanation": "'speed'은 '속도'입니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'taller' is very frequently used. It means '키가 더 큰' in Korean.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'taller' is very frequently used. It means '키가 더 큰' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'taller'의 한국어 의미는?",
        "options": [
          "더 빠른",
          "키가 더 큰",
          "더 큰",
          "더 무거운"
        ],
        "correctIndex": 1,
        "correctAnswer": "키가 더 큰",
        "explanation": "'taller'은 '키가 더 큰'입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'faster' is very frequently used. It means '더 빠른' in Korean.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'faster' is very frequently used. It means '더 빠른' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'faster'의 한국어 의미는?",
        "options": [
          "키가 더 큰",
          "더 빠른",
          "더 큰",
          "더 무거운"
        ],
        "correctIndex": 1,
        "correctAnswer": "더 빠른",
        "explanation": "'faster'은 '더 빠른'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'bigger' is very frequently used. It means '더 큰' in Korean.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'bigger' is very frequently used. It means '더 큰' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'bigger'의 한국어 의미는?",
        "options": [
          "더 무거운",
          "더 빠른",
          "키가 더 큰",
          "더 큰"
        ],
        "correctIndex": 3,
        "correctAnswer": "더 큰",
        "explanation": "'bigger'은 '더 큰'입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'heavier' is very frequently used. It means '더 무거운' in Korean.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'heavier' is very frequently used. It means '더 무거운' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'heavier'의 한국어 의미는?",
        "options": [
          "더 무거운",
          "키가 더 큰",
          "더 빠른",
          "더 큰"
        ],
        "correctIndex": 0,
        "correctAnswer": "더 무거운",
        "explanation": "'heavier'은 '더 무거운'입니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'stronger' is very frequently used. It means '더 힘센' in Korean.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'stronger' is very frequently used. It means '더 힘센' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'stronger'의 한국어 의미는?",
        "options": [
          "더 힘센",
          "키가 더 큰",
          "더 빠른",
          "더 큰"
        ],
        "correctIndex": 0,
        "correctAnswer": "더 힘센",
        "explanation": "'stronger'은 '더 힘센'입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'higher' is very frequently used. It means '더 높은' in Korean.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'higher' is very frequently used. It means '더 높은' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'higher'의 한국어 의미는?",
        "options": [
          "더 높은",
          "더 빠른",
          "더 큰",
          "키가 더 큰"
        ],
        "correctIndex": 0,
        "correctAnswer": "더 높은",
        "explanation": "'higher'은 '더 높은'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'smaller' is very frequently used. It means '더 작은' in Korean.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'smaller' is very frequently used. It means '더 작은' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'smaller'의 한국어 의미는?",
        "options": [
          "더 작은",
          "키가 더 큰",
          "더 큰",
          "더 빠른"
        ],
        "correctIndex": 0,
        "correctAnswer": "더 작은",
        "explanation": "'smaller'은 '더 작은'입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'slower' is very frequently used. It means '더 느린' in Korean.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'slower' is very frequently used. It means '더 느린' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'slower'의 한국어 의미는?",
        "options": [
          "더 큰",
          "더 빠른",
          "더 느린",
          "키가 더 큰"
        ],
        "correctIndex": 2,
        "correctAnswer": "더 느린",
        "explanation": "'slower'은 '더 느린'입니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'than' is very frequently used. It means '~보다' in Korean.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'than' is very frequently used. It means '~보다' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'than'의 한국어 의미는?",
        "options": [
          "~보다",
          "키가 더 큰",
          "더 큰",
          "더 빠른"
        ],
        "correctIndex": 0,
        "correctAnswer": "~보다",
        "explanation": "'than'은 '~보다'입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 8단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"키가 더 큰\" (단어 첫 글자: t, 총 6글자)",
        "correctAnswer": "taller",
        "explanation": "'키가 더 큰'에 해당하는 영어 단어는 'taller'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 8단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"더 빠른\" (단어 첫 글자: f, 총 6글자)",
        "correctAnswer": "faster",
        "explanation": "'더 빠른'에 해당하는 영어 단어는 'faster'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 8단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"더 큰\" (단어 첫 글자: b, 총 6글자)",
        "correctAnswer": "bigger",
        "explanation": "'더 큰'에 해당하는 영어 단어는 'bigger'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 8단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"더 무거운\" (단어 첫 글자: h, 총 7글자)",
        "correctAnswer": "heavier",
        "explanation": "'더 무거운'에 해당하는 영어 단어는 'heavier'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 8단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"더 힘센\" (단어 첫 글자: s, 총 8글자)",
        "correctAnswer": "stronger",
        "explanation": "'더 힘센'에 해당하는 영어 단어는 'stronger'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 8단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"더 높은\" (단어 첫 글자: h, 총 6글자)",
        "correctAnswer": "higher",
        "explanation": "'더 높은'에 해당하는 영어 단어는 'higher'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 8단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"더 작은\" (단어 첫 글자: s, 총 7글자)",
        "correctAnswer": "smaller",
        "explanation": "'더 작은'에 해당하는 영어 단어는 'smaller'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 8단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"더 느린\" (단어 첫 글자: s, 총 6글자)",
        "correctAnswer": "slower",
        "explanation": "'더 느린'에 해당하는 영어 단어는 'slower'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 8단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"~보다\" (단어 첫 글자: t, 총 4글자)",
        "correctAnswer": "than",
        "explanation": "'~보다'에 해당하는 영어 단어는 'than'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 8단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"기린\" (단어 첫 글자: g, 총 7글자)",
        "correctAnswer": "giraffe",
        "explanation": "'기린'에 해당하는 영어 단어는 'giraffe'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 8단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"고래\" (단어 첫 글자: w, 총 5글자)",
        "correctAnswer": "whale",
        "explanation": "'고래'에 해당하는 영어 단어는 'whale'입니다."
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 8단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"치타\" (단어 첫 글자: c, 총 7글자)",
        "correctAnswer": "cheetah",
        "explanation": "'치타'에 해당하는 영어 단어는 'cheetah'입니다."
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 8단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"코끼리\" (단어 첫 글자: e, 총 8글자)",
        "correctAnswer": "elephant",
        "explanation": "'코끼리'에 해당하는 영어 단어는 'elephant'입니다."
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 8단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"산\" (단어 첫 글자: m, 총 8글자)",
        "correctAnswer": "mountain",
        "explanation": "'산'에 해당하는 영어 단어는 'mountain'입니다."
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 8단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"속도\" (단어 첫 글자: s, 총 5글자)",
        "correctAnswer": "speed",
        "explanation": "'속도'에 해당하는 영어 단어는 'speed'입니다."
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"기린은 코끼리보다 키가 더 커.\"",
        "chips": [
          "A",
          "giraffe",
          "is",
          "taller",
          "than",
          "an",
          "elephant."
        ],
        "correctAnswer": "A giraffe is taller than an elephant.",
        "explanation": "'A giraffe is taller than an elephant.'은 '기린은 코끼리보다 키가 더 커.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"치타는 사자보다 더 빨라.\"",
        "chips": [
          "A",
          "cheetah",
          "is",
          "faster",
          "than",
          "a",
          "lion."
        ],
        "correctAnswer": "A cheetah is faster than a lion.",
        "explanation": "'A cheetah is faster than a lion.'은 '치타는 사자보다 더 빨라.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"케빈과 데이비드 중 누가 더 힘이 세니?\"",
        "chips": [
          "Who",
          "is",
          "stronger",
          "Kevin",
          "or",
          "David?"
        ],
        "correctAnswer": "Who is stronger, Kevin or David?",
        "explanation": "'Who is stronger, Kevin or David?'은 '케빈과 데이비드 중 누가 더 힘이 세니?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"데이비드가 케빈보다 더 힘이 세.\"",
        "chips": [
          "David",
          "is",
          "stronger",
          "than",
          "Kevin."
        ],
        "correctAnswer": "David is stronger than Kevin.",
        "explanation": "'David is stronger than Kevin.'은 '데이비드가 케빈보다 더 힘이 세.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"대왕고래는 코끼리보다 더 커.\"",
        "chips": [
          "A",
          "blue",
          "whale",
          "is",
          "bigger",
          "than",
          "an",
          "elephant."
        ],
        "correctAnswer": "A blue whale is bigger than an elephant.",
        "explanation": "'A blue whale is bigger than an elephant.'은 '대왕고래는 코끼리보다 더 커.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"한라산은 북한산보다 더 높아.\"",
        "chips": [
          "Hallasan",
          "is",
          "higher",
          "than",
          "Bukhansan."
        ],
        "correctAnswer": "Hallasan is higher than Bukhansan.",
        "explanation": "'Hallasan is higher than Bukhansan.'은 '한라산은 북한산보다 더 높아.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"비행기는 기차보다 더 빨라.\"",
        "chips": [
          "An",
          "airplane",
          "is",
          "faster",
          "than",
          "a",
          "train."
        ],
        "correctAnswer": "An airplane is faster than a train.",
        "explanation": "'An airplane is faster than a train.'은 '비행기는 기차보다 더 빨라.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"내 배낭이 네 것보다 더 무거워.\"",
        "chips": [
          "My",
          "backpack",
          "is",
          "heavier",
          "than",
          "yours."
        ],
        "correctAnswer": "My backpack is heavier than yours.",
        "explanation": "'My backpack is heavier than yours.'은 '내 배낭이 네 것보다 더 무거워.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"어떤 동물이 더 빨리 달리니?\"",
        "chips": [
          "Which",
          "animal",
          "runs",
          "faster?"
        ],
        "correctAnswer": "Which animal runs faster?",
        "explanation": "'Which animal runs faster?'은 '어떤 동물이 더 빨리 달리니?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"치타가 훨씬 더 빨리 달려.\"",
        "chips": [
          "The",
          "cheetah",
          "runs",
          "much",
          "faster."
        ],
        "correctAnswer": "The cheetah runs much faster.",
        "explanation": "'The cheetah runs much faster.'은 '치타가 훨씬 더 빨리 달려.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 96,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"내가 우리 누나보다 키가 더 커.\"",
        "chips": [
          "I",
          "am",
          "taller",
          "than",
          "my",
          "older",
          "sister."
        ],
        "correctAnswer": "I am taller than my older sister.",
        "explanation": "'I am taller than my older sister.'은 '내가 우리 누나보다 키가 더 커.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 97,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"토끼는 곰보다 더 작아.\"",
        "chips": [
          "A",
          "rabbit",
          "is",
          "smaller",
          "than",
          "a",
          "bear."
        ],
        "correctAnswer": "A rabbit is smaller than a bear.",
        "explanation": "'A rabbit is smaller than a bear.'은 '토끼는 곰보다 더 작아.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 98,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"수학은 음악보다 더 어려워.\"",
        "chips": [
          "Math",
          "is",
          "more",
          "difficult",
          "than",
          "music."
        ],
        "correctAnswer": "Math is more difficult than music.",
        "explanation": "'Math is more difficult than music.'은 '수학은 음악보다 더 어려워.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 99,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"여름날은 겨울날보다 낮이 더 길어.\"",
        "chips": [
          "Summer",
          "days",
          "are",
          "longer",
          "than",
          "winter",
          "days."
        ],
        "correctAnswer": "Summer days are longer than winter days.",
        "explanation": "'Summer days are longer than winter days.'은 '여름날은 겨울날보다 낮이 더 길어.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[최종 골든벨 문제] 다음 우리말에 맞도록 주어진 단어 카드를 순서대로 바르게 배열하세요.\n우리말: \"너는 말보다 더 빨리 달릴 수 있니?\"",
        "chips": [
          "Can",
          "you",
          "run",
          "faster",
          "than",
          "a",
          "horse?"
        ],
        "correctAnswer": "Can you run faster than a horse?",
        "explanation": "'Can you run faster than a horse?'은 '너는 말보다 더 빨리 달릴 수 있니?'을 의미하는 핵심 문장입니다."
      }
    ]
  },
  "6G_L09": {
    "name": "9단원: 환경과 지구 보호 (We should save energy / the Earth)",
    "grade": 6,
    "theme": "Protecting the Earth & Saving Energy",
    "totalQuestions": 100,
    "questions": [
      {
        "id": 1,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Minsoo: How can we protect the Earth? Sarah: We should turn off the lights when leaving the room to save precious electricity.",
        "question": "[듣기 · 9단원] 환경 대화를 듣고, 지구를 위해 두 사람이 실천하기로 한 행동은?",
        "options": [
          "일회용품을 더 많이 쓰기",
          "분리수거하지 않고 버리기",
          "방을 나갈 때 전등을 끄다 (소중한 전기를 절약하기)",
          "항상 자동차로 등교하기"
        ],
        "correctIndex": 2,
        "correctAnswer": "방을 나갈 때 전등을 끄다 (소중한 전기를 절약하기)",
        "explanation": "'We should turn off the lights when leaving the room'입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kelly: How can we protect the Earth? Jisu: We should recycle plastic bottles and clean cans to reduce household waste.",
        "question": "[듣기 · 9단원] 환경 대화를 듣고, 지구를 위해 두 사람이 실천하기로 한 행동은?",
        "options": [
          "플라스틱 병과 깨끗한 캔을 재활용하다 (가정 쓰레기를 줄이기)",
          "일회용품을 더 많이 쓰기",
          "항상 자동차로 등교하기",
          "분리수거하지 않고 버리기"
        ],
        "correctIndex": 0,
        "correctAnswer": "플라스틱 병과 깨끗한 캔을 재활용하다 (가정 쓰레기를 줄이기)",
        "explanation": "'We should recycle plastic bottles and clean cans'입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "David: How can we protect the Earth? Kevin: We should do not waste clean running water to protect our rivers.",
        "question": "[듣기 · 9단원] 환경 대화를 듣고, 지구를 위해 두 사람이 실천하기로 한 행동은?",
        "options": [
          "항상 자동차로 등교하기",
          "일회용품을 더 많이 쓰기",
          "분리수거하지 않고 버리기",
          "흐르는 깨끗한 수돗물을 낭비하지 않다 (강을 보호하기)"
        ],
        "correctIndex": 3,
        "correctAnswer": "흐르는 깨끗한 수돗물을 낭비하지 않다 (강을 보호하기)",
        "explanation": "'We should do not waste clean running water'입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Sarah: How can we protect the Earth? Emma: We should ride bicycles or walk instead of cars to keep our air fresh.",
        "question": "[듣기 · 9단원] 환경 대화를 듣고, 지구를 위해 두 사람이 실천하기로 한 행동은?",
        "options": [
          "일회용품을 더 많이 쓰기",
          "항상 자동차로 등교하기",
          "분리수거하지 않고 버리기",
          "자동차 대신 자전거를 타거나 걷다 (공기를 상쾌하게 지키기)"
        ],
        "correctIndex": 3,
        "correctAnswer": "자동차 대신 자전거를 타거나 걷다 (공기를 상쾌하게 지키기)",
        "explanation": "'We should ride bicycles or walk instead of cars'입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Jisu: How can we protect the Earth? Tom: We should use personal tumblers and cloth bags to stop single-use plastic.",
        "question": "[듣기 · 9단원] 환경 대화를 듣고, 지구를 위해 두 사람이 실천하기로 한 행동은?",
        "options": [
          "일회용품을 더 많이 쓰기",
          "항상 자동차로 등교하기",
          "개인 텀블러와 장바구니를 사용하다 (일회용 플라스틱을 줄이기)",
          "분리수거하지 않고 버리기"
        ],
        "correctIndex": 2,
        "correctAnswer": "개인 텀블러와 장바구니를 사용하다 (일회용 플라스틱을 줄이기)",
        "explanation": "'We should use personal tumblers and cloth bags'입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kevin: How can we protect the Earth? Hana: We should plant green trees on Earth Day to make our forests healthy.",
        "question": "[듣기 · 9단원] 환경 대화를 듣고, 지구를 위해 두 사람이 실천하기로 한 행동은?",
        "options": [
          "지구의 날에 푸른 나무를 심다 (숲을 건강하게 만들기)",
          "항상 자동차로 등교하기",
          "일회용품을 더 많이 쓰기",
          "분리수거하지 않고 버리기"
        ],
        "correctIndex": 0,
        "correctAnswer": "지구의 날에 푸른 나무를 심다 (숲을 건강하게 만들기)",
        "explanation": "'We should plant green trees on Earth Day'입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Emma: How can we protect the Earth? Brian: We should turn off the lights when leaving the room to save precious electricity.",
        "question": "[듣기 · 9단원] 환경 대화를 듣고, 지구를 위해 두 사람이 실천하기로 한 행동은?",
        "options": [
          "일회용품을 더 많이 쓰기",
          "분리수거하지 않고 버리기",
          "방을 나갈 때 전등을 끄다 (소중한 전기를 절약하기)",
          "항상 자동차로 등교하기"
        ],
        "correctIndex": 2,
        "correctAnswer": "방을 나갈 때 전등을 끄다 (소중한 전기를 절약하기)",
        "explanation": "'We should turn off the lights when leaving the room'입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Tom: How can we protect the Earth? Amy: We should recycle plastic bottles and clean cans to reduce household waste.",
        "question": "[듣기 · 9단원] 환경 대화를 듣고, 지구를 위해 두 사람이 실천하기로 한 행동은?",
        "options": [
          "플라스틱 병과 깨끗한 캔을 재활용하다 (가정 쓰레기를 줄이기)",
          "분리수거하지 않고 버리기",
          "일회용품을 더 많이 쓰기",
          "항상 자동차로 등교하기"
        ],
        "correctIndex": 0,
        "correctAnswer": "플라스틱 병과 깨끗한 캔을 재활용하다 (가정 쓰레기를 줄이기)",
        "explanation": "'We should recycle plastic bottles and clean cans'입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Hana: How can we protect the Earth? Paul: We should do not waste clean running water to protect our rivers.",
        "question": "[듣기 · 9단원] 환경 대화를 듣고, 지구를 위해 두 사람이 실천하기로 한 행동은?",
        "options": [
          "항상 자동차로 등교하기",
          "분리수거하지 않고 버리기",
          "일회용품을 더 많이 쓰기",
          "흐르는 깨끗한 수돗물을 낭비하지 않다 (강을 보호하기)"
        ],
        "correctIndex": 3,
        "correctAnswer": "흐르는 깨끗한 수돗물을 낭비하지 않다 (강을 보호하기)",
        "explanation": "'We should do not waste clean running water'입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Brian: How can we protect the Earth? Minsoo: We should ride bicycles or walk instead of cars to keep our air fresh.",
        "question": "[듣기 · 9단원] 환경 대화를 듣고, 지구를 위해 두 사람이 실천하기로 한 행동은?",
        "options": [
          "일회용품을 더 많이 쓰기",
          "자동차 대신 자전거를 타거나 걷다 (공기를 상쾌하게 지키기)",
          "항상 자동차로 등교하기",
          "분리수거하지 않고 버리기"
        ],
        "correctIndex": 1,
        "correctAnswer": "자동차 대신 자전거를 타거나 걷다 (공기를 상쾌하게 지키기)",
        "explanation": "'We should ride bicycles or walk instead of cars'입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Amy: How can we protect the Earth? Kelly: We should use personal tumblers and cloth bags to stop single-use plastic.",
        "question": "[듣기 · 9단원] 환경 대화를 듣고, 지구를 위해 두 사람이 실천하기로 한 행동은?",
        "options": [
          "항상 자동차로 등교하기",
          "일회용품을 더 많이 쓰기",
          "분리수거하지 않고 버리기",
          "개인 텀블러와 장바구니를 사용하다 (일회용 플라스틱을 줄이기)"
        ],
        "correctIndex": 3,
        "correctAnswer": "개인 텀블러와 장바구니를 사용하다 (일회용 플라스틱을 줄이기)",
        "explanation": "'We should use personal tumblers and cloth bags'입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Paul: How can we protect the Earth? David: We should plant green trees on Earth Day to make our forests healthy.",
        "question": "[듣기 · 9단원] 환경 대화를 듣고, 지구를 위해 두 사람이 실천하기로 한 행동은?",
        "options": [
          "분리수거하지 않고 버리기",
          "지구의 날에 푸른 나무를 심다 (숲을 건강하게 만들기)",
          "일회용품을 더 많이 쓰기",
          "항상 자동차로 등교하기"
        ],
        "correctIndex": 1,
        "correctAnswer": "지구의 날에 푸른 나무를 심다 (숲을 건강하게 만들기)",
        "explanation": "'We should plant green trees on Earth Day'입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Small actions can make big changes. Sarah: I completely agree with you!",
        "question": "[듣기 · 9단원] 대화에서 Minsoo이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "나는 잘 모르겠어.",
          "작은 실천이 큰 변화를 만들 수 있어."
        ],
        "correctIndex": 3,
        "correctAnswer": "작은 실천이 큰 변화를 만들 수 있어.",
        "explanation": "'Small actions can make big changes.'은 '작은 실천이 큰 변화를 만들 수 있어.'을 의미합니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kelly: Let's practice green habits every day. Jisu: I completely agree with you!",
        "question": "[듣기 · 9단원] 대화에서 Kelly이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "매일 친환경 습관을 실천하자.",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "매일 친환경 습관을 실천하자.",
        "explanation": "'Let's practice green habits every day.'은 '매일 친환경 습관을 실천하자.'을 의미합니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "David: The Earth needs our gentle care. Kevin: I completely agree with you!",
        "question": "[듣기 · 9단원] 대화에서 David이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "나는 잘 모르겠어.",
          "지구는 우리의 따뜻한 보살핌을 필요로 해."
        ],
        "correctIndex": 3,
        "correctAnswer": "지구는 우리의 따뜻한 보살핌을 필요로 해.",
        "explanation": "'The Earth needs our gentle care.'은 '지구는 우리의 따뜻한 보살핌을 필요로 해.'을 의미합니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Sarah: We should save energy. Emma: I completely agree with you!",
        "question": "[듣기 · 9단원] 대화에서 Sarah이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자.",
          "우리는 에너지를 절약해야 해."
        ],
        "correctIndex": 3,
        "correctAnswer": "우리는 에너지를 절약해야 해.",
        "explanation": "'We should save energy.'은 '우리는 에너지를 절약해야 해.'을 의미합니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Jisu: Turn off the lights, please. Tom: I completely agree with you!",
        "question": "[듣기 · 9단원] 대화에서 Jisu이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "전등을 꺼주세요.",
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 0,
        "correctAnswer": "전등을 꺼주세요.",
        "explanation": "'Turn off the lights, please.'은 '전등을 꺼주세요.'을 의미합니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kevin: Let's protect our beautiful Earth. Hana: I completely agree with you!",
        "question": "[듣기 · 9단원] 대화에서 Kevin이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "우리의 아름다운 지구를 보호하자.",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "우리의 아름다운 지구를 보호하자.",
        "explanation": "'Let's protect our beautiful Earth.'은 '우리의 아름다운 지구를 보호하자.'을 의미합니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Emma: Don't waste clean water. Brian: I completely agree with you!",
        "question": "[듣기 · 9단원] 대화에서 Emma이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음에 다시 이야기하자.",
          "나는 잘 모르겠어.",
          "깨끗한 물을 낭비하지 마.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 2,
        "correctAnswer": "깨끗한 물을 낭비하지 마.",
        "explanation": "'Don't waste clean water.'은 '깨끗한 물을 낭비하지 마.'을 의미합니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Tom: We should recycle plastic bottles. Amy: I completely agree with you!",
        "question": "[듣기 · 9단원] 대화에서 Tom이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "우리는 플라스틱 병을 재활용해야 해.",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "우리는 플라스틱 병을 재활용해야 해.",
        "explanation": "'We should recycle plastic bottles.'은 '우리는 플라스틱 병을 재활용해야 해.'을 의미합니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Hana: Let's make an Earth Day poster. Paul: I completely agree with you!",
        "question": "[듣기 · 9단원] 대화에서 Hana이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "지구의 날 포스터를 만들자.",
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 0,
        "correctAnswer": "지구의 날 포스터를 만들자.",
        "explanation": "'Let's make an Earth Day poster.'은 '지구의 날 포스터를 만들자.'을 의미합니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Brian: Use a tumbler instead of paper cups. Minsoo: I completely agree with you!",
        "question": "[듣기 · 9단원] 대화에서 Brian이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "종이컵 대신 텀블러를 사용해.",
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자."
        ],
        "correctIndex": 0,
        "correctAnswer": "종이컵 대신 텀블러를 사용해.",
        "explanation": "'Use a tumbler instead of paper cups.'은 '종이컵 대신 텀블러를 사용해.'을 의미합니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Amy: Ride a bicycle to school. Kelly: I completely agree with you!",
        "question": "[듣기 · 9단원] 대화에서 Amy이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "학교에 자전거를 타고 가자.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 2,
        "correctAnswer": "학교에 자전거를 타고 가자.",
        "explanation": "'Ride a bicycle to school.'은 '학교에 자전거를 타고 가자.'을 의미합니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Paul: We must clean up the park. David: I completely agree with you!",
        "question": "[듣기 · 9단원] 대화에서 Paul이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "우리는 공원을 깨끗이 청소해야 해."
        ],
        "correctIndex": 3,
        "correctAnswer": "우리는 공원을 깨끗이 청소해야 해.",
        "explanation": "'We must clean up the park.'은 '우리는 공원을 깨끗이 청소해야 해.'을 의미합니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Do you know the meaning of 'plastic'? Sarah: Yes, it means '플라스틱'.",
        "question": "[듣기 · 9단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'plastic'의 뜻은?",
        "options": [
          "보호하다",
          "에너지",
          "절약하다, 구하다",
          "플라스틱"
        ],
        "correctIndex": 3,
        "correctAnswer": "플라스틱",
        "explanation": "'plastic'은 '플라스틱'를 뜻합니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kelly: Do you know the meaning of 'bicycle'? Jisu: Yes, it means '자전거'.",
        "question": "[듣기 · 9단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'bicycle'의 뜻은?",
        "options": [
          "자전거",
          "절약하다, 구하다",
          "보호하다",
          "에너지"
        ],
        "correctIndex": 0,
        "correctAnswer": "자전거",
        "explanation": "'bicycle'은 '자전거'를 뜻합니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "David: Do you know the meaning of 'tumbler'? Kevin: Yes, it means '텀블러'.",
        "question": "[듣기 · 9단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'tumbler'의 뜻은?",
        "options": [
          "텀블러",
          "절약하다, 구하다",
          "에너지",
          "보호하다"
        ],
        "correctIndex": 0,
        "correctAnswer": "텀블러",
        "explanation": "'tumbler'은 '텀블러'를 뜻합니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Sarah: Do you know the meaning of 'plant'? Emma: Yes, it means '심다, 식물'.",
        "question": "[듣기 · 9단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'plant'의 뜻은?",
        "options": [
          "보호하다",
          "절약하다, 구하다",
          "에너지",
          "심다, 식물"
        ],
        "correctIndex": 3,
        "correctAnswer": "심다, 식물",
        "explanation": "'plant'은 '심다, 식물'를 뜻합니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Jisu: Do you know the meaning of 'forest'? Tom: Yes, it means '숲'.",
        "question": "[듣기 · 9단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'forest'의 뜻은?",
        "options": [
          "숲",
          "절약하다, 구하다",
          "에너지",
          "보호하다"
        ],
        "correctIndex": 0,
        "correctAnswer": "숲",
        "explanation": "'forest'은 '숲'를 뜻합니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kevin: Do you know the meaning of 'clean'? Hana: Yes, it means '깨끗한'.",
        "question": "[듣기 · 9단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'clean'의 뜻은?",
        "options": [
          "보호하다",
          "절약하다, 구하다",
          "깨끗한",
          "에너지"
        ],
        "correctIndex": 2,
        "correctAnswer": "깨끗한",
        "explanation": "'clean'은 '깨끗한'를 뜻합니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Emma: Do you know the meaning of 'save'? Brian: Yes, it means '절약하다, 구하다'.",
        "question": "[듣기 · 9단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'save'의 뜻은?",
        "options": [
          "보호하다",
          "에너지",
          "재활용하다",
          "절약하다, 구하다"
        ],
        "correctIndex": 3,
        "correctAnswer": "절약하다, 구하다",
        "explanation": "'save'은 '절약하다, 구하다'를 뜻합니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Tom: Do you know the meaning of 'energy'? Amy: Yes, it means '에너지'.",
        "question": "[듣기 · 9단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'energy'의 뜻은?",
        "options": [
          "에너지",
          "보호하다",
          "재활용하다",
          "절약하다, 구하다"
        ],
        "correctIndex": 0,
        "correctAnswer": "에너지",
        "explanation": "'energy'은 '에너지'를 뜻합니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Hana: Do you know the meaning of 'protect'? Paul: Yes, it means '보호하다'.",
        "question": "[듣기 · 9단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'protect'의 뜻은?",
        "options": [
          "재활용하다",
          "보호하다",
          "절약하다, 구하다",
          "에너지"
        ],
        "correctIndex": 1,
        "correctAnswer": "보호하다",
        "explanation": "'protect'은 '보호하다'를 뜻합니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Brian: Do you know the meaning of 'recycle'? Minsoo: Yes, it means '재활용하다'.",
        "question": "[듣기 · 9단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'recycle'의 뜻은?",
        "options": [
          "보호하다",
          "에너지",
          "재활용하다",
          "절약하다, 구하다"
        ],
        "correctIndex": 2,
        "correctAnswer": "재활용하다",
        "explanation": "'recycle'은 '재활용하다'를 뜻합니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Amy: Do you know the meaning of 'waste'? Kelly: Yes, it means '낭비하다'.",
        "question": "[듣기 · 9단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'waste'의 뜻은?",
        "options": [
          "낭비하다",
          "보호하다",
          "절약하다, 구하다",
          "에너지"
        ],
        "correctIndex": 0,
        "correctAnswer": "낭비하다",
        "explanation": "'waste'은 '낭비하다'를 뜻합니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Minsoo. Let's protect our beautiful Earth. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Minsoo. Let's protect our beautiful Earth. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "우리의 아름다운 지구를 보호하자."
        ],
        "correctIndex": 3,
        "correctAnswer": "우리의 아름다운 지구를 보호하자.",
        "explanation": "'Let's protect our beautiful Earth.'(우리의 아름다운 지구를 보호하자.)이 핵심 문장입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kelly. Don't waste clean water. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kelly. Don't waste clean water. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "깨끗한 물을 낭비하지 마.",
          "길을 잃어버려서 헤매고 있다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 0,
        "correctAnswer": "깨끗한 물을 낭비하지 마.",
        "explanation": "'Don't waste clean water.'(깨끗한 물을 낭비하지 마.)이 핵심 문장입니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is David. We should recycle plastic bottles. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is David. We should recycle plastic bottles. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "우리는 플라스틱 병을 재활용해야 해.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "우리는 플라스틱 병을 재활용해야 해.",
        "explanation": "'We should recycle plastic bottles.'(우리는 플라스틱 병을 재활용해야 해.)이 핵심 문장입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Sarah. Let's make an Earth Day poster. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Sarah. Let's make an Earth Day poster. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "지구의 날 포스터를 만들자."
        ],
        "correctIndex": 3,
        "correctAnswer": "지구의 날 포스터를 만들자.",
        "explanation": "'Let's make an Earth Day poster.'(지구의 날 포스터를 만들자.)이 핵심 문장입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Jisu. Use a tumbler instead of paper cups. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Jisu. Use a tumbler instead of paper cups. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Jisu이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "종이컵 대신 텀블러를 사용해.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "종이컵 대신 텀블러를 사용해.",
        "explanation": "'Use a tumbler instead of paper cups.'(종이컵 대신 텀블러를 사용해.)이 핵심 문장입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kevin. Ride a bicycle to school. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kevin. Ride a bicycle to school. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kevin이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교에 자전거를 타고 가자.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 2,
        "correctAnswer": "학교에 자전거를 타고 가자.",
        "explanation": "'Ride a bicycle to school.'(학교에 자전거를 타고 가자.)이 핵심 문장입니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Emma. We must clean up the park. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Emma. We must clean up the park. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Emma이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "우리는 공원을 깨끗이 청소해야 해.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 1,
        "correctAnswer": "우리는 공원을 깨끗이 청소해야 해.",
        "explanation": "'We must clean up the park.'(우리는 공원을 깨끗이 청소해야 해.)이 핵심 문장입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Tom. Don't throw trash on the ground. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Tom. Don't throw trash on the ground. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Tom이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "바닥에 쓰레기를 버리지 마.",
          "길을 잃어버려서 헤매고 있다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 0,
        "correctAnswer": "바닥에 쓰레기를 버리지 마.",
        "explanation": "'Don't throw trash on the ground.'(바닥에 쓰레기를 버리지 마.)이 핵심 문장입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Hana. Planting trees helps our planet. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Hana. Planting trees helps our planet. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Hana이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "나무를 심는 것은 우리 지구를 도와줘."
        ],
        "correctIndex": 3,
        "correctAnswer": "나무를 심는 것은 우리 지구를 도와줘.",
        "explanation": "'Planting trees helps our planet.'(나무를 심는 것은 우리 지구를 도와줘.)이 핵심 문장입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Brian. Unplug computers when not in use. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Brian. Unplug computers when not in use. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Brian이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "컴퓨터를 쓰지 않을 때는 플러그를 뽑아."
        ],
        "correctIndex": 3,
        "correctAnswer": "컴퓨터를 쓰지 않을 때는 플러그를 뽑아.",
        "explanation": "'Unplug computers when not in use.'(컴퓨터를 쓰지 않을 때는 플러그를 뽑아.)이 핵심 문장입니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Amy. Small actions can make big changes. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Amy. Small actions can make big changes. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Amy이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "작은 실천이 큰 변화를 만들 수 있어."
        ],
        "correctIndex": 3,
        "correctAnswer": "작은 실천이 큰 변화를 만들 수 있어.",
        "explanation": "'Small actions can make big changes.'(작은 실천이 큰 변화를 만들 수 있어.)이 핵심 문장입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Paul. Let's practice green habits every day. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Paul. Let's practice green habits every day. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Paul이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "매일 친환경 습관을 실천하자."
        ],
        "correctIndex": 3,
        "correctAnswer": "매일 친환경 습관을 실천하자.",
        "explanation": "'Let's practice green habits every day.'(매일 친환경 습관을 실천하자.)이 핵심 문장입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Minsoo. The Earth needs our gentle care. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Minsoo. The Earth needs our gentle care. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "지구는 우리의 따뜻한 보살핌을 필요로 해.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 0,
        "correctAnswer": "지구는 우리의 따뜻한 보살핌을 필요로 해.",
        "explanation": "'The Earth needs our gentle care.'(지구는 우리의 따뜻한 보살핌을 필요로 해.)이 핵심 문장입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kelly. We should save energy. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kelly. We should save energy. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "우리는 에너지를 절약해야 해.",
          "길을 잃어버려서 헤매고 있다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 0,
        "correctAnswer": "우리는 에너지를 절약해야 해.",
        "explanation": "'We should save energy.'(우리는 에너지를 절약해야 해.)이 핵심 문장입니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is David. Turn off the lights, please. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is David. Turn off the lights, please. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "전등을 꺼주세요."
        ],
        "correctIndex": 3,
        "correctAnswer": "전등을 꺼주세요.",
        "explanation": "'Turn off the lights, please.'(전등을 꺼주세요.)이 핵심 문장입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "To protect the planet, we should ride bicycles or walk instead of cars. This simple action helps us to keep our air fresh.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"To protect the planet, we should ride bicycles or walk instead of cars. This simple action helps us to keep our air fresh.\"\n질문: 윗글에서 권장하는 환경 보호 실천 행동은 무엇인가요?",
        "options": [
          "가까운 거리도 자동차 타기",
          "플라스틱을 일반 쓰레기에 버리기",
          "전등을 켜두고 외출하기",
          "자동차 대신 자전거를 타거나 걷다 (공기를 상쾌하게 지키기)"
        ],
        "correctIndex": 3,
        "correctAnswer": "자동차 대신 자전거를 타거나 걷다 (공기를 상쾌하게 지키기)",
        "explanation": "지문의 'To protect the planet, we should ride bicycles or walk instead of cars. This simple action helps us to keep our air fresh.'에 명시되어 있습니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "To protect the planet, we should use personal tumblers and cloth bags. This simple action helps us to stop single-use plastic.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"To protect the planet, we should use personal tumblers and cloth bags. This simple action helps us to stop single-use plastic.\"\n질문: 윗글에서 권장하는 환경 보호 실천 행동은 무엇인가요?",
        "options": [
          "가까운 거리도 자동차 타기",
          "플라스틱을 일반 쓰레기에 버리기",
          "전등을 켜두고 외출하기",
          "개인 텀블러와 장바구니를 사용하다 (일회용 플라스틱을 줄이기)"
        ],
        "correctIndex": 3,
        "correctAnswer": "개인 텀블러와 장바구니를 사용하다 (일회용 플라스틱을 줄이기)",
        "explanation": "지문의 'To protect the planet, we should use personal tumblers and cloth bags. This simple action helps us to stop single-use plastic.'에 명시되어 있습니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "To protect the planet, we should plant green trees on Earth Day. This simple action helps us to make our forests healthy.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"To protect the planet, we should plant green trees on Earth Day. This simple action helps us to make our forests healthy.\"\n질문: 윗글에서 권장하는 환경 보호 실천 행동은 무엇인가요?",
        "options": [
          "가까운 거리도 자동차 타기",
          "플라스틱을 일반 쓰레기에 버리기",
          "전등을 켜두고 외출하기",
          "지구의 날에 푸른 나무를 심다 (숲을 건강하게 만들기)"
        ],
        "correctIndex": 3,
        "correctAnswer": "지구의 날에 푸른 나무를 심다 (숲을 건강하게 만들기)",
        "explanation": "지문의 'To protect the planet, we should plant green trees on Earth Day. This simple action helps us to make our forests healthy.'에 명시되어 있습니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "To protect the planet, we should turn off the lights when leaving the room. This simple action helps us to save precious electricity.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"To protect the planet, we should turn off the lights when leaving the room. This simple action helps us to save precious electricity.\"\n질문: 윗글에서 권장하는 환경 보호 실천 행동은 무엇인가요?",
        "options": [
          "플라스틱을 일반 쓰레기에 버리기",
          "전등을 켜두고 외출하기",
          "가까운 거리도 자동차 타기",
          "방을 나갈 때 전등을 끄다 (소중한 전기를 절약하기)"
        ],
        "correctIndex": 3,
        "correctAnswer": "방을 나갈 때 전등을 끄다 (소중한 전기를 절약하기)",
        "explanation": "지문의 'To protect the planet, we should turn off the lights when leaving the room. This simple action helps us to save precious electricity.'에 명시되어 있습니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "To protect the planet, we should recycle plastic bottles and clean cans. This simple action helps us to reduce household waste.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"To protect the planet, we should recycle plastic bottles and clean cans. This simple action helps us to reduce household waste.\"\n질문: 윗글에서 권장하는 환경 보호 실천 행동은 무엇인가요?",
        "options": [
          "가까운 거리도 자동차 타기",
          "플라스틱 병과 깨끗한 캔을 재활용하다 (가정 쓰레기를 줄이기)",
          "전등을 켜두고 외출하기",
          "플라스틱을 일반 쓰레기에 버리기"
        ],
        "correctIndex": 1,
        "correctAnswer": "플라스틱 병과 깨끗한 캔을 재활용하다 (가정 쓰레기를 줄이기)",
        "explanation": "지문의 'To protect the planet, we should recycle plastic bottles and clean cans. This simple action helps us to reduce household waste.'에 명시되어 있습니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "To protect the planet, we should do not waste clean running water. This simple action helps us to protect our rivers.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"To protect the planet, we should do not waste clean running water. This simple action helps us to protect our rivers.\"\n질문: 윗글에서 권장하는 환경 보호 실천 행동은 무엇인가요?",
        "options": [
          "흐르는 깨끗한 수돗물을 낭비하지 않다 (강을 보호하기)",
          "플라스틱을 일반 쓰레기에 버리기",
          "가까운 거리도 자동차 타기",
          "전등을 켜두고 외출하기"
        ],
        "correctIndex": 0,
        "correctAnswer": "흐르는 깨끗한 수돗물을 낭비하지 않다 (강을 보호하기)",
        "explanation": "지문의 'To protect the planet, we should do not waste clean running water. This simple action helps us to protect our rivers.'에 명시되어 있습니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "To protect the planet, we should ride bicycles or walk instead of cars. This simple action helps us to keep our air fresh.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"To protect the planet, we should ride bicycles or walk instead of cars. This simple action helps us to keep our air fresh.\"\n질문: 윗글에서 권장하는 환경 보호 실천 행동은 무엇인가요?",
        "options": [
          "전등을 켜두고 외출하기",
          "가까운 거리도 자동차 타기",
          "플라스틱을 일반 쓰레기에 버리기",
          "자동차 대신 자전거를 타거나 걷다 (공기를 상쾌하게 지키기)"
        ],
        "correctIndex": 3,
        "correctAnswer": "자동차 대신 자전거를 타거나 걷다 (공기를 상쾌하게 지키기)",
        "explanation": "지문의 'To protect the planet, we should ride bicycles or walk instead of cars. This simple action helps us to keep our air fresh.'에 명시되어 있습니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "To protect the planet, we should use personal tumblers and cloth bags. This simple action helps us to stop single-use plastic.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"To protect the planet, we should use personal tumblers and cloth bags. This simple action helps us to stop single-use plastic.\"\n질문: 윗글에서 권장하는 환경 보호 실천 행동은 무엇인가요?",
        "options": [
          "플라스틱을 일반 쓰레기에 버리기",
          "전등을 켜두고 외출하기",
          "가까운 거리도 자동차 타기",
          "개인 텀블러와 장바구니를 사용하다 (일회용 플라스틱을 줄이기)"
        ],
        "correctIndex": 3,
        "correctAnswer": "개인 텀블러와 장바구니를 사용하다 (일회용 플라스틱을 줄이기)",
        "explanation": "지문의 'To protect the planet, we should use personal tumblers and cloth bags. This simple action helps us to stop single-use plastic.'에 명시되어 있습니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "To protect the planet, we should plant green trees on Earth Day. This simple action helps us to make our forests healthy.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"To protect the planet, we should plant green trees on Earth Day. This simple action helps us to make our forests healthy.\"\n질문: 윗글에서 권장하는 환경 보호 실천 행동은 무엇인가요?",
        "options": [
          "플라스틱을 일반 쓰레기에 버리기",
          "지구의 날에 푸른 나무를 심다 (숲을 건강하게 만들기)",
          "전등을 켜두고 외출하기",
          "가까운 거리도 자동차 타기"
        ],
        "correctIndex": 1,
        "correctAnswer": "지구의 날에 푸른 나무를 심다 (숲을 건강하게 만들기)",
        "explanation": "지문의 'To protect the planet, we should plant green trees on Earth Day. This simple action helps us to make our forests healthy.'에 명시되어 있습니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "To protect the planet, we should turn off the lights when leaving the room. This simple action helps us to save precious electricity.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"To protect the planet, we should turn off the lights when leaving the room. This simple action helps us to save precious electricity.\"\n질문: 윗글에서 권장하는 환경 보호 실천 행동은 무엇인가요?",
        "options": [
          "방을 나갈 때 전등을 끄다 (소중한 전기를 절약하기)",
          "전등을 켜두고 외출하기",
          "플라스틱을 일반 쓰레기에 버리기",
          "가까운 거리도 자동차 타기"
        ],
        "correctIndex": 0,
        "correctAnswer": "방을 나갈 때 전등을 끄다 (소중한 전기를 절약하기)",
        "explanation": "지문의 'To protect the planet, we should turn off the lights when leaving the room. This simple action helps us to save precious electricity.'에 명시되어 있습니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'clean' is very frequently used. It means '깨끗한' in Korean.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'clean' is very frequently used. It means '깨끗한' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'clean'의 한국어 의미는?",
        "options": [
          "절약하다, 구하다",
          "보호하다",
          "깨끗한",
          "에너지"
        ],
        "correctIndex": 2,
        "correctAnswer": "깨끗한",
        "explanation": "'clean'은 '깨끗한'입니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'save' is very frequently used. It means '절약하다, 구하다' in Korean.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'save' is very frequently used. It means '절약하다, 구하다' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'save'의 한국어 의미는?",
        "options": [
          "재활용하다",
          "보호하다",
          "에너지",
          "절약하다, 구하다"
        ],
        "correctIndex": 3,
        "correctAnswer": "절약하다, 구하다",
        "explanation": "'save'은 '절약하다, 구하다'입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'energy' is very frequently used. It means '에너지' in Korean.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'energy' is very frequently used. It means '에너지' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'energy'의 한국어 의미는?",
        "options": [
          "재활용하다",
          "보호하다",
          "절약하다, 구하다",
          "에너지"
        ],
        "correctIndex": 3,
        "correctAnswer": "에너지",
        "explanation": "'energy'은 '에너지'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'protect' is very frequently used. It means '보호하다' in Korean.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'protect' is very frequently used. It means '보호하다' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'protect'의 한국어 의미는?",
        "options": [
          "보호하다",
          "절약하다, 구하다",
          "에너지",
          "재활용하다"
        ],
        "correctIndex": 0,
        "correctAnswer": "보호하다",
        "explanation": "'protect'은 '보호하다'입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'recycle' is very frequently used. It means '재활용하다' in Korean.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'recycle' is very frequently used. It means '재활용하다' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'recycle'의 한국어 의미는?",
        "options": [
          "재활용하다",
          "절약하다, 구하다",
          "보호하다",
          "에너지"
        ],
        "correctIndex": 0,
        "correctAnswer": "재활용하다",
        "explanation": "'recycle'은 '재활용하다'입니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'waste' is very frequently used. It means '낭비하다' in Korean.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'waste' is very frequently used. It means '낭비하다' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'waste'의 한국어 의미는?",
        "options": [
          "낭비하다",
          "절약하다, 구하다",
          "보호하다",
          "에너지"
        ],
        "correctIndex": 0,
        "correctAnswer": "낭비하다",
        "explanation": "'waste'은 '낭비하다'입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'earth' is very frequently used. It means '지구' in Korean.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'earth' is very frequently used. It means '지구' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'earth'의 한국어 의미는?",
        "options": [
          "에너지",
          "절약하다, 구하다",
          "지구",
          "보호하다"
        ],
        "correctIndex": 2,
        "correctAnswer": "지구",
        "explanation": "'earth'은 '지구'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'light' is very frequently used. It means '전등, 빛' in Korean.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'light' is very frequently used. It means '전등, 빛' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'light'의 한국어 의미는?",
        "options": [
          "절약하다, 구하다",
          "에너지",
          "보호하다",
          "전등, 빛"
        ],
        "correctIndex": 3,
        "correctAnswer": "전등, 빛",
        "explanation": "'light'은 '전등, 빛'입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'water' is very frequently used. It means '물' in Korean.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'water' is very frequently used. It means '물' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'water'의 한국어 의미는?",
        "options": [
          "절약하다, 구하다",
          "물",
          "보호하다",
          "에너지"
        ],
        "correctIndex": 1,
        "correctAnswer": "물",
        "explanation": "'water'은 '물'입니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'bottle' is very frequently used. It means '병' in Korean.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'bottle' is very frequently used. It means '병' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'bottle'의 한국어 의미는?",
        "options": [
          "보호하다",
          "병",
          "절약하다, 구하다",
          "에너지"
        ],
        "correctIndex": 1,
        "correctAnswer": "병",
        "explanation": "'bottle'은 '병'입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 9단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"절약하다, 구하다\" (단어 첫 글자: s, 총 4글자)",
        "correctAnswer": "save",
        "explanation": "'절약하다, 구하다'에 해당하는 영어 단어는 'save'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 9단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"에너지\" (단어 첫 글자: e, 총 6글자)",
        "correctAnswer": "energy",
        "explanation": "'에너지'에 해당하는 영어 단어는 'energy'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 9단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"보호하다\" (단어 첫 글자: p, 총 7글자)",
        "correctAnswer": "protect",
        "explanation": "'보호하다'에 해당하는 영어 단어는 'protect'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 9단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"재활용하다\" (단어 첫 글자: r, 총 7글자)",
        "correctAnswer": "recycle",
        "explanation": "'재활용하다'에 해당하는 영어 단어는 'recycle'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 9단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"낭비하다\" (단어 첫 글자: w, 총 5글자)",
        "correctAnswer": "waste",
        "explanation": "'낭비하다'에 해당하는 영어 단어는 'waste'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 9단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"지구\" (단어 첫 글자: e, 총 5글자)",
        "correctAnswer": "earth",
        "explanation": "'지구'에 해당하는 영어 단어는 'earth'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 9단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"전등, 빛\" (단어 첫 글자: l, 총 5글자)",
        "correctAnswer": "light",
        "explanation": "'전등, 빛'에 해당하는 영어 단어는 'light'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 9단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"물\" (단어 첫 글자: w, 총 5글자)",
        "correctAnswer": "water",
        "explanation": "'물'에 해당하는 영어 단어는 'water'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 9단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"병\" (단어 첫 글자: b, 총 6글자)",
        "correctAnswer": "bottle",
        "explanation": "'병'에 해당하는 영어 단어는 'bottle'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 9단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"플라스틱\" (단어 첫 글자: p, 총 7글자)",
        "correctAnswer": "plastic",
        "explanation": "'플라스틱'에 해당하는 영어 단어는 'plastic'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 9단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"자전거\" (단어 첫 글자: b, 총 7글자)",
        "correctAnswer": "bicycle",
        "explanation": "'자전거'에 해당하는 영어 단어는 'bicycle'입니다."
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 9단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"텀블러\" (단어 첫 글자: t, 총 7글자)",
        "correctAnswer": "tumbler",
        "explanation": "'텀블러'에 해당하는 영어 단어는 'tumbler'입니다."
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 9단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"심다, 식물\" (단어 첫 글자: p, 총 5글자)",
        "correctAnswer": "plant",
        "explanation": "'심다, 식물'에 해당하는 영어 단어는 'plant'입니다."
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 9단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"숲\" (단어 첫 글자: f, 총 6글자)",
        "correctAnswer": "forest",
        "explanation": "'숲'에 해당하는 영어 단어는 'forest'입니다."
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 9단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"깨끗한\" (단어 첫 글자: c, 총 5글자)",
        "correctAnswer": "clean",
        "explanation": "'깨끗한'에 해당하는 영어 단어는 'clean'입니다."
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"우리는 에너지를 절약해야 해.\"",
        "chips": [
          "We",
          "should",
          "save",
          "energy."
        ],
        "correctAnswer": "We should save energy.",
        "explanation": "'We should save energy.'은 '우리는 에너지를 절약해야 해.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"전등을 꺼주세요.\"",
        "chips": [
          "Turn",
          "off",
          "the",
          "lights",
          "please."
        ],
        "correctAnswer": "Turn off the lights, please.",
        "explanation": "'Turn off the lights, please.'은 '전등을 꺼주세요.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"우리의 아름다운 지구를 보호하자.\"",
        "chips": [
          "Let's",
          "protect",
          "our",
          "beautiful",
          "Earth."
        ],
        "correctAnswer": "Let's protect our beautiful Earth.",
        "explanation": "'Let's protect our beautiful Earth.'은 '우리의 아름다운 지구를 보호하자.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"깨끗한 물을 낭비하지 마.\"",
        "chips": [
          "Don't",
          "waste",
          "clean",
          "water."
        ],
        "correctAnswer": "Don't waste clean water.",
        "explanation": "'Don't waste clean water.'은 '깨끗한 물을 낭비하지 마.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"우리는 플라스틱 병을 재활용해야 해.\"",
        "chips": [
          "We",
          "should",
          "recycle",
          "plastic",
          "bottles."
        ],
        "correctAnswer": "We should recycle plastic bottles.",
        "explanation": "'We should recycle plastic bottles.'은 '우리는 플라스틱 병을 재활용해야 해.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"지구의 날 포스터를 만들자.\"",
        "chips": [
          "Let's",
          "make",
          "an",
          "Earth",
          "Day",
          "poster."
        ],
        "correctAnswer": "Let's make an Earth Day poster.",
        "explanation": "'Let's make an Earth Day poster.'은 '지구의 날 포스터를 만들자.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"종이컵 대신 텀블러를 사용해.\"",
        "chips": [
          "Use",
          "a",
          "tumbler",
          "instead",
          "of",
          "paper",
          "cups."
        ],
        "correctAnswer": "Use a tumbler instead of paper cups.",
        "explanation": "'Use a tumbler instead of paper cups.'은 '종이컵 대신 텀블러를 사용해.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"학교에 자전거를 타고 가자.\"",
        "chips": [
          "Ride",
          "a",
          "bicycle",
          "to",
          "school."
        ],
        "correctAnswer": "Ride a bicycle to school.",
        "explanation": "'Ride a bicycle to school.'은 '학교에 자전거를 타고 가자.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"우리는 공원을 깨끗이 청소해야 해.\"",
        "chips": [
          "We",
          "must",
          "clean",
          "up",
          "the",
          "park."
        ],
        "correctAnswer": "We must clean up the park.",
        "explanation": "'We must clean up the park.'은 '우리는 공원을 깨끗이 청소해야 해.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"바닥에 쓰레기를 버리지 마.\"",
        "chips": [
          "Don't",
          "throw",
          "trash",
          "on",
          "the",
          "ground."
        ],
        "correctAnswer": "Don't throw trash on the ground.",
        "explanation": "'Don't throw trash on the ground.'은 '바닥에 쓰레기를 버리지 마.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 96,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"나무를 심는 것은 우리 지구를 도와줘.\"",
        "chips": [
          "Planting",
          "trees",
          "helps",
          "our",
          "planet."
        ],
        "correctAnswer": "Planting trees helps our planet.",
        "explanation": "'Planting trees helps our planet.'은 '나무를 심는 것은 우리 지구를 도와줘.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 97,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"컴퓨터를 쓰지 않을 때는 플러그를 뽑아.\"",
        "chips": [
          "Unplug",
          "computers",
          "when",
          "not",
          "in",
          "use."
        ],
        "correctAnswer": "Unplug computers when not in use.",
        "explanation": "'Unplug computers when not in use.'은 '컴퓨터를 쓰지 않을 때는 플러그를 뽑아.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 98,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"작은 실천이 큰 변화를 만들 수 있어.\"",
        "chips": [
          "Small",
          "actions",
          "can",
          "make",
          "big",
          "changes."
        ],
        "correctAnswer": "Small actions can make big changes.",
        "explanation": "'Small actions can make big changes.'은 '작은 실천이 큰 변화를 만들 수 있어.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 99,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"매일 친환경 습관을 실천하자.\"",
        "chips": [
          "Let's",
          "practice",
          "green",
          "habits",
          "every",
          "day."
        ],
        "correctAnswer": "Let's practice green habits every day.",
        "explanation": "'Let's practice green habits every day.'은 '매일 친환경 습관을 실천하자.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[최종 골든벨 문제] 다음 우리말에 맞도록 주어진 단어 카드를 순서대로 바르게 배열하세요.\n우리말: \"지구는 우리의 따뜻한 보살핌을 필요로 해.\"",
        "chips": [
          "The",
          "Earth",
          "needs",
          "our",
          "gentle",
          "care."
        ],
        "correctAnswer": "The Earth needs our gentle care.",
        "explanation": "'The Earth needs our gentle care.'은 '지구는 우리의 따뜻한 보살핌을 필요로 해.'을 의미하는 핵심 문장입니다."
      }
    ]
  },
  "6G_L10": {
    "name": "10단원: 가격 묻기와 쇼핑 (How much is this shirt / are these pants?)",
    "grade": 6,
    "theme": "Asking Prices & Shopping",
    "totalQuestions": 100,
    "questions": [
      {
        "id": 1,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Excuse me, how much is this blue shirt? Sarah: It is fifteen dollars (15 dollars). Can I try this on?.",
        "question": "[듣기 · 10단원] 쇼핑 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "비매품",
          "다른 물건 (12달러)",
          "파란 셔츠 (25달러)",
          "파란 셔츠 (15달러)"
        ],
        "correctIndex": 3,
        "correctAnswer": "파란 셔츠 (15달러)",
        "explanation": "'blue shirt'의 가격은 'fifteen dollars'입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kelly: Excuse me, how much is this black pants? Jisu: It is twenty dollars (20 dollars). They look very nice on you.",
        "question": "[듣기 · 10단원] 쇼핑 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "검정 바지 (20달러)",
          "검정 바지 (30달러)",
          "비매품",
          "다른 물건 (17달러)"
        ],
        "correctIndex": 0,
        "correctAnswer": "검정 바지 (20달러)",
        "explanation": "'black pants'의 가격은 'twenty dollars'입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "David: Excuse me, how much is this running shoes? Kevin: It is thirty-five dollars (35 dollars). Do you have size 240?.",
        "question": "[듣기 · 10단원] 쇼핑 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "다른 물건 (32달러)",
          "운동화 (45달러)",
          "비매품",
          "운동화 (35달러)"
        ],
        "correctIndex": 3,
        "correctAnswer": "운동화 (35달러)",
        "explanation": "'running shoes'의 가격은 'thirty-five dollars'입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Sarah: Excuse me, how much is this yellow cap? Emma: It is eight dollars (8 dollars). It is quite cheap.",
        "question": "[듣기 · 10단원] 쇼핑 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "다른 물건 (5달러)",
          "노란 모자 (18달러)",
          "노란 모자 (8달러)",
          "비매품"
        ],
        "correctIndex": 2,
        "correctAnswer": "노란 모자 (8달러)",
        "explanation": "'yellow cap'의 가격은 'eight dollars'입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Jisu: Excuse me, how much is this warm winter jacket? Tom: It is fifty dollars (50 dollars). It keeps you very warm.",
        "question": "[듣기 · 10단원] 쇼핑 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "다른 물건 (47달러)",
          "따뜻한 겨울 재킷 (60달러)",
          "비매품",
          "따뜻한 겨울 재킷 (50달러)"
        ],
        "correctIndex": 3,
        "correctAnswer": "따뜻한 겨울 재킷 (50달러)",
        "explanation": "'warm winter jacket'의 가격은 'fifty dollars'입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kevin: Excuse me, how much is this school backpack? Hana: It is twenty-five dollars (25 dollars). It has many pockets.",
        "question": "[듣기 · 10단원] 쇼핑 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "다른 물건 (22달러)",
          "학교 책가방 (25달러)",
          "비매품",
          "학교 책가방 (35달러)"
        ],
        "correctIndex": 1,
        "correctAnswer": "학교 책가방 (25달러)",
        "explanation": "'school backpack'의 가격은 'twenty-five dollars'입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Emma: Excuse me, how much is this blue shirt? Brian: It is fifteen dollars (15 dollars). Can I try this on?.",
        "question": "[듣기 · 10단원] 쇼핑 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "다른 물건 (12달러)",
          "파란 셔츠 (25달러)",
          "비매품",
          "파란 셔츠 (15달러)"
        ],
        "correctIndex": 3,
        "correctAnswer": "파란 셔츠 (15달러)",
        "explanation": "'blue shirt'의 가격은 'fifteen dollars'입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Tom: Excuse me, how much is this black pants? Amy: It is twenty dollars (20 dollars). They look very nice on you.",
        "question": "[듣기 · 10단원] 쇼핑 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "다른 물건 (17달러)",
          "검정 바지 (30달러)",
          "비매품",
          "검정 바지 (20달러)"
        ],
        "correctIndex": 3,
        "correctAnswer": "검정 바지 (20달러)",
        "explanation": "'black pants'의 가격은 'twenty dollars'입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Hana: Excuse me, how much is this running shoes? Paul: It is thirty-five dollars (35 dollars). Do you have size 240?.",
        "question": "[듣기 · 10단원] 쇼핑 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "운동화 (35달러)",
          "운동화 (45달러)",
          "비매품",
          "다른 물건 (32달러)"
        ],
        "correctIndex": 0,
        "correctAnswer": "운동화 (35달러)",
        "explanation": "'running shoes'의 가격은 'thirty-five dollars'입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Brian: Excuse me, how much is this yellow cap? Minsoo: It is eight dollars (8 dollars). It is quite cheap.",
        "question": "[듣기 · 10단원] 쇼핑 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "노란 모자 (8달러)",
          "노란 모자 (18달러)",
          "비매품",
          "다른 물건 (5달러)"
        ],
        "correctIndex": 0,
        "correctAnswer": "노란 모자 (8달러)",
        "explanation": "'yellow cap'의 가격은 'eight dollars'입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Amy: Excuse me, how much is this warm winter jacket? Kelly: It is fifty dollars (50 dollars). It keeps you very warm.",
        "question": "[듣기 · 10단원] 쇼핑 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "따뜻한 겨울 재킷 (50달러)",
          "따뜻한 겨울 재킷 (60달러)",
          "비매품",
          "다른 물건 (47달러)"
        ],
        "correctIndex": 0,
        "correctAnswer": "따뜻한 겨울 재킷 (50달러)",
        "explanation": "'warm winter jacket'의 가격은 'fifty dollars'입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Paul: Excuse me, how much is this school backpack? David: It is twenty-five dollars (25 dollars). It has many pockets.",
        "question": "[듣기 · 10단원] 쇼핑 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "다른 물건 (22달러)",
          "비매품",
          "학교 책가방 (25달러)",
          "학교 책가방 (35달러)"
        ],
        "correctIndex": 2,
        "correctAnswer": "학교 책가방 (25달러)",
        "explanation": "'school backpack'의 가격은 'twenty-five dollars'입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Can I pay by credit card? Sarah: I completely agree with you!",
        "question": "[듣기 · 10단원] 대화에서 Minsoo이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "신용카드로 결제할 수 있나요?",
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "신용카드로 결제할 수 있나요?",
        "explanation": "'Can I pay by credit card?'은 '신용카드로 결제할 수 있나요?'을 의미합니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kelly: These socks are three dollars. Jisu: I completely agree with you!",
        "question": "[듣기 · 10단원] 대화에서 Kelly이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "이 양말들은 3달러입니다.",
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자."
        ],
        "correctIndex": 1,
        "correctAnswer": "이 양말들은 3달러입니다.",
        "explanation": "'These socks are three dollars.'은 '이 양말들은 3달러입니다.'을 의미합니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "David: Thank you for shopping with us. Kevin: I completely agree with you!",
        "question": "[듣기 · 10단원] 대화에서 David이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음에 다시 이야기하자.",
          "저희 가게를 찾아주셔서 감사합니다.",
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 1,
        "correctAnswer": "저희 가게를 찾아주셔서 감사합니다.",
        "explanation": "'Thank you for shopping with us.'은 '저희 가게를 찾아주셔서 감사합니다.'을 의미합니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Sarah: May I help you? Emma: I completely agree with you!",
        "question": "[듣기 · 10단원] 대화에서 Sarah이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아니야.",
          "도와드릴까요?",
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자."
        ],
        "correctIndex": 1,
        "correctAnswer": "도와드릴까요?",
        "explanation": "'May I help you?'은 '도와드릴까요?'을 의미합니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Jisu: How much is this blue shirt? Tom: I completely agree with you!",
        "question": "[듣기 · 10단원] 대화에서 Jisu이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "이 파란 셔츠는 얼마인가요?"
        ],
        "correctIndex": 3,
        "correctAnswer": "이 파란 셔츠는 얼마인가요?",
        "explanation": "'How much is this blue shirt?'은 '이 파란 셔츠는 얼마인가요?'을 의미합니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kevin: It is fifteen dollars. Hana: I completely agree with you!",
        "question": "[듣기 · 10단원] 대화에서 Kevin이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "15달러입니다.",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "15달러입니다.",
        "explanation": "'It is fifteen dollars.'은 '15달러입니다.'을 의미합니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Emma: How much are these pants? Brian: I completely agree with you!",
        "question": "[듣기 · 10단원] 대화에서 Emma이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "이 바지는 얼마인가요?",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "이 바지는 얼마인가요?",
        "explanation": "'How much are these pants?'은 '이 바지는 얼마인가요?'을 의미합니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Tom: They are twenty dollars. Amy: I completely agree with you!",
        "question": "[듣기 · 10단원] 대화에서 Tom이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "20달러입니다.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 2,
        "correctAnswer": "20달러입니다.",
        "explanation": "'They are twenty dollars.'은 '20달러입니다.'을 의미합니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Hana: Can I try this jacket on? Paul: I completely agree with you!",
        "question": "[듣기 · 10단원] 대화에서 Hana이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "이 재킷을 입어봐도 될까요?",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "이 재킷을 입어봐도 될까요?",
        "explanation": "'Can I try this jacket on?'은 '이 재킷을 입어봐도 될까요?'을 의미합니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Brian: Yes, the fitting room is over there. Minsoo: I completely agree with you!",
        "question": "[듣기 · 10단원] 대화에서 Brian이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음에 다시 이야기하자.",
          "네, 탈의실은 저쪽에 있습니다.",
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 1,
        "correctAnswer": "네, 탈의실은 저쪽에 있습니다.",
        "explanation": "'Yes, the fitting room is over there.'은 '네, 탈의실은 저쪽에 있습니다.'을 의미합니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Amy: It looks very great on you. Kelly: I completely agree with you!",
        "question": "[듣기 · 10단원] 대화에서 Amy이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음에 다시 이야기하자.",
          "나는 잘 모르겠어.",
          "손님에게 정말 잘 어울려요.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 2,
        "correctAnswer": "손님에게 정말 잘 어울려요.",
        "explanation": "'It looks very great on you.'은 '손님에게 정말 잘 어울려요.'을 의미합니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Paul: That is too expensive for me. David: I completely agree with you!",
        "question": "[듣기 · 10단원] 대화에서 Paul이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "저에게는 너무 비싸요.",
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 0,
        "correctAnswer": "저에게는 너무 비싸요.",
        "explanation": "'That is too expensive for me.'은 '저에게는 너무 비싸요.'을 의미합니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Do you know the meaning of 'buy'? Sarah: Yes, it means '사다'.",
        "question": "[듣기 · 10단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'buy'의 뜻은?",
        "options": [
          "신발",
          "바지",
          "셔츠",
          "사다"
        ],
        "correctIndex": 3,
        "correctAnswer": "사다",
        "explanation": "'buy'은 '사다'를 뜻합니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kelly: Do you know the meaning of 'try'? Jisu: Yes, it means '시도하다, 입어보다'.",
        "question": "[듣기 · 10단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'try'의 뜻은?",
        "options": [
          "시도하다, 입어보다",
          "셔츠",
          "바지",
          "신발"
        ],
        "correctIndex": 0,
        "correctAnswer": "시도하다, 입어보다",
        "explanation": "'try'은 '시도하다, 입어보다'를 뜻합니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "David: Do you know the meaning of 'backpack'? Kevin: Yes, it means '배낭'.",
        "question": "[듣기 · 10단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'backpack'의 뜻은?",
        "options": [
          "신발",
          "바지",
          "셔츠",
          "배낭"
        ],
        "correctIndex": 3,
        "correctAnswer": "배낭",
        "explanation": "'backpack'은 '배낭'를 뜻합니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Sarah: Do you know the meaning of 'size'? Emma: Yes, it means '치수, 사이즈'.",
        "question": "[듣기 · 10단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'size'의 뜻은?",
        "options": [
          "치수, 사이즈",
          "셔츠",
          "바지",
          "신발"
        ],
        "correctIndex": 0,
        "correctAnswer": "치수, 사이즈",
        "explanation": "'size'은 '치수, 사이즈'를 뜻합니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Jisu: Do you know the meaning of 'help'? Tom: Yes, it means '돕다'.",
        "question": "[듣기 · 10단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'help'의 뜻은?",
        "options": [
          "바지",
          "돕다",
          "신발",
          "셔츠"
        ],
        "correctIndex": 1,
        "correctAnswer": "돕다",
        "explanation": "'help'은 '돕다'를 뜻합니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kevin: Do you know the meaning of 'store'? Hana: Yes, it means '가게, 상점'.",
        "question": "[듣기 · 10단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'store'의 뜻은?",
        "options": [
          "셔츠",
          "바지",
          "신발",
          "가게, 상점"
        ],
        "correctIndex": 3,
        "correctAnswer": "가게, 상점",
        "explanation": "'store'은 '가게, 상점'를 뜻합니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Emma: Do you know the meaning of 'shirt'? Brian: Yes, it means '셔츠'.",
        "question": "[듣기 · 10단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'shirt'의 뜻은?",
        "options": [
          "바지",
          "신발",
          "셔츠",
          "모자"
        ],
        "correctIndex": 2,
        "correctAnswer": "셔츠",
        "explanation": "'shirt'은 '셔츠'를 뜻합니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Tom: Do you know the meaning of 'pants'? Amy: Yes, it means '바지'.",
        "question": "[듣기 · 10단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'pants'의 뜻은?",
        "options": [
          "바지",
          "셔츠",
          "신발",
          "모자"
        ],
        "correctIndex": 0,
        "correctAnswer": "바지",
        "explanation": "'pants'은 '바지'를 뜻합니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Hana: Do you know the meaning of 'shoes'? Paul: Yes, it means '신발'.",
        "question": "[듣기 · 10단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'shoes'의 뜻은?",
        "options": [
          "바지",
          "모자",
          "셔츠",
          "신발"
        ],
        "correctIndex": 3,
        "correctAnswer": "신발",
        "explanation": "'shoes'은 '신발'를 뜻합니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Brian: Do you know the meaning of 'cap'? Minsoo: Yes, it means '모자'.",
        "question": "[듣기 · 10단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'cap'의 뜻은?",
        "options": [
          "모자",
          "셔츠",
          "신발",
          "바지"
        ],
        "correctIndex": 0,
        "correctAnswer": "모자",
        "explanation": "'cap'은 '모자'를 뜻합니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Amy: Do you know the meaning of 'jacket'? Kelly: Yes, it means '재킷'.",
        "question": "[듣기 · 10단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'jacket'의 뜻은?",
        "options": [
          "재킷",
          "신발",
          "바지",
          "셔츠"
        ],
        "correctIndex": 0,
        "correctAnswer": "재킷",
        "explanation": "'jacket'은 '재킷'를 뜻합니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Minsoo. It is fifteen dollars. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Minsoo. It is fifteen dollars. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "15달러입니다."
        ],
        "correctIndex": 3,
        "correctAnswer": "15달러입니다.",
        "explanation": "'It is fifteen dollars.'(15달러입니다.)이 핵심 문장입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kelly. How much are these pants? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kelly. How much are these pants? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "이 바지는 얼마인가요?"
        ],
        "correctIndex": 3,
        "correctAnswer": "이 바지는 얼마인가요?",
        "explanation": "'How much are these pants?'(이 바지는 얼마인가요?)이 핵심 문장입니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is David. They are twenty dollars. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is David. They are twenty dollars. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "20달러입니다."
        ],
        "correctIndex": 3,
        "correctAnswer": "20달러입니다.",
        "explanation": "'They are twenty dollars.'(20달러입니다.)이 핵심 문장입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Sarah. Can I try this jacket on? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Sarah. Can I try this jacket on? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "이 재킷을 입어봐도 될까요?",
          "길을 잃어버려서 헤매고 있다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 0,
        "correctAnswer": "이 재킷을 입어봐도 될까요?",
        "explanation": "'Can I try this jacket on?'(이 재킷을 입어봐도 될까요?)이 핵심 문장입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Jisu. Yes, the fitting room is over there. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Jisu. Yes, the fitting room is over there. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Jisu이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "네, 탈의실은 저쪽에 있습니다."
        ],
        "correctIndex": 3,
        "correctAnswer": "네, 탈의실은 저쪽에 있습니다.",
        "explanation": "'Yes, the fitting room is over there.'(네, 탈의실은 저쪽에 있습니다.)이 핵심 문장입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kevin. It looks very great on you. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kevin. It looks very great on you. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kevin이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "학교 숙제가 너무 많아서 피곤하다.",
          "손님에게 정말 잘 어울려요.",
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 1,
        "correctAnswer": "손님에게 정말 잘 어울려요.",
        "explanation": "'It looks very great on you.'(손님에게 정말 잘 어울려요.)이 핵심 문장입니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Emma. That is too expensive for me. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Emma. That is too expensive for me. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Emma이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다.",
          "저에게는 너무 비싸요.",
          "학교 숙제가 너무 많아서 피곤하다."
        ],
        "correctIndex": 2,
        "correctAnswer": "저에게는 너무 비싸요.",
        "explanation": "'That is too expensive for me.'(저에게는 너무 비싸요.)이 핵심 문장입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Tom. Do you have anything cheaper? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Tom. Do you have anything cheaper? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Tom이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "더 저렴한 것이 있나요?",
          "학교 숙제가 너무 많아서 피곤하다.",
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 0,
        "correctAnswer": "더 저렴한 것이 있나요?",
        "explanation": "'Do you have anything cheaper?'(더 저렴한 것이 있나요?)이 핵심 문장입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Hana. I want to buy these white sneakers. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Hana. I want to buy these white sneakers. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Hana이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "이 흰색 운동화를 사고 싶어요.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "이 흰색 운동화를 사고 싶어요.",
        "explanation": "'I want to buy these white sneakers.'(이 흰색 운동화를 사고 싶어요.)이 핵심 문장입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Brian. Here is your receipt and change. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Brian. Here is your receipt and change. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Brian이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "여기 영수증과 거스름돈이 있습니다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "여기 영수증과 거스름돈이 있습니다.",
        "explanation": "'Here is your receipt and change.'(여기 영수증과 거스름돈이 있습니다.)이 핵심 문장입니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Amy. Can I pay by credit card? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Amy. Can I pay by credit card? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Amy이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "신용카드로 결제할 수 있나요?",
          "학교 숙제가 너무 많아서 피곤하다.",
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 0,
        "correctAnswer": "신용카드로 결제할 수 있나요?",
        "explanation": "'Can I pay by credit card?'(신용카드로 결제할 수 있나요?)이 핵심 문장입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Paul. These socks are three dollars. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Paul. These socks are three dollars. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Paul이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "이 양말들은 3달러입니다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "이 양말들은 3달러입니다.",
        "explanation": "'These socks are three dollars.'(이 양말들은 3달러입니다.)이 핵심 문장입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Minsoo. Thank you for shopping with us. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Minsoo. Thank you for shopping with us. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다.",
          "저희 가게를 찾아주셔서 감사합니다."
        ],
        "correctIndex": 3,
        "correctAnswer": "저희 가게를 찾아주셔서 감사합니다.",
        "explanation": "'Thank you for shopping with us.'(저희 가게를 찾아주셔서 감사합니다.)이 핵심 문장입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kelly. May I help you? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kelly. May I help you? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "도와드릴까요?",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "도와드릴까요?",
        "explanation": "'May I help you?'(도와드릴까요?)이 핵심 문장입니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is David. How much is this blue shirt? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is David. How much is this blue shirt? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "길을 잃어버려서 헤매고 있다.",
          "이 파란 셔츠는 얼마인가요?"
        ],
        "correctIndex": 3,
        "correctAnswer": "이 파란 셔츠는 얼마인가요?",
        "explanation": "'How much is this blue shirt?'(이 파란 셔츠는 얼마인가요?)이 핵심 문장입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Welcome to our clothing shop! This yellow cap is only eight dollars (8 dollars). It is quite cheap!",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Welcome to our clothing shop! This yellow cap is only eight dollars (8 dollars). It is quite cheap!\"\n질문: 윗글의 상점 안내문에서 판매하는 상품과 가격으로 일치하는 것은?",
        "options": [
          "무료 나눔 물품",
          "노란 모자 (23달러)",
          "이미 품절된 상품",
          "노란 모자 (8달러)"
        ],
        "correctIndex": 3,
        "correctAnswer": "노란 모자 (8달러)",
        "explanation": "지문의 'Welcome to our clothing shop! This yellow cap is only eight dollars (8 dollars). It is quite cheap!'에 명시되어 있습니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Welcome to our clothing shop! This warm winter jacket is only fifty dollars (50 dollars). It keeps you very warm!",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Welcome to our clothing shop! This warm winter jacket is only fifty dollars (50 dollars). It keeps you very warm!\"\n질문: 윗글의 상점 안내문에서 판매하는 상품과 가격으로 일치하는 것은?",
        "options": [
          "무료 나눔 물품",
          "따뜻한 겨울 재킷 (65달러)",
          "이미 품절된 상품",
          "따뜻한 겨울 재킷 (50달러)"
        ],
        "correctIndex": 3,
        "correctAnswer": "따뜻한 겨울 재킷 (50달러)",
        "explanation": "지문의 'Welcome to our clothing shop! This warm winter jacket is only fifty dollars (50 dollars). It keeps you very warm!'에 명시되어 있습니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Welcome to our clothing shop! This school backpack is only twenty-five dollars (25 dollars). It has many pockets!",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Welcome to our clothing shop! This school backpack is only twenty-five dollars (25 dollars). It has many pockets!\"\n질문: 윗글의 상점 안내문에서 판매하는 상품과 가격으로 일치하는 것은?",
        "options": [
          "이미 품절된 상품",
          "무료 나눔 물품",
          "학교 책가방 (40달러)",
          "학교 책가방 (25달러)"
        ],
        "correctIndex": 3,
        "correctAnswer": "학교 책가방 (25달러)",
        "explanation": "지문의 'Welcome to our clothing shop! This school backpack is only twenty-five dollars (25 dollars). It has many pockets!'에 명시되어 있습니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Welcome to our clothing shop! This blue shirt is only fifteen dollars (15 dollars). Can I try this on?!",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Welcome to our clothing shop! This blue shirt is only fifteen dollars (15 dollars). Can I try this on?!\"\n질문: 윗글의 상점 안내문에서 판매하는 상품과 가격으로 일치하는 것은?",
        "options": [
          "이미 품절된 상품",
          "파란 셔츠 (15달러)",
          "파란 셔츠 (30달러)",
          "무료 나눔 물품"
        ],
        "correctIndex": 1,
        "correctAnswer": "파란 셔츠 (15달러)",
        "explanation": "지문의 'Welcome to our clothing shop! This blue shirt is only fifteen dollars (15 dollars). Can I try this on?!'에 명시되어 있습니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Welcome to our clothing shop! This black pants is only twenty dollars (20 dollars). They look very nice on you!",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Welcome to our clothing shop! This black pants is only twenty dollars (20 dollars). They look very nice on you!\"\n질문: 윗글의 상점 안내문에서 판매하는 상품과 가격으로 일치하는 것은?",
        "options": [
          "검정 바지 (20달러)",
          "검정 바지 (35달러)",
          "이미 품절된 상품",
          "무료 나눔 물품"
        ],
        "correctIndex": 0,
        "correctAnswer": "검정 바지 (20달러)",
        "explanation": "지문의 'Welcome to our clothing shop! This black pants is only twenty dollars (20 dollars). They look very nice on you!'에 명시되어 있습니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Welcome to our clothing shop! This running shoes is only thirty-five dollars (35 dollars). Do you have size 240?!",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Welcome to our clothing shop! This running shoes is only thirty-five dollars (35 dollars). Do you have size 240?!\"\n질문: 윗글의 상점 안내문에서 판매하는 상품과 가격으로 일치하는 것은?",
        "options": [
          "이미 품절된 상품",
          "운동화 (50달러)",
          "운동화 (35달러)",
          "무료 나눔 물품"
        ],
        "correctIndex": 2,
        "correctAnswer": "운동화 (35달러)",
        "explanation": "지문의 'Welcome to our clothing shop! This running shoes is only thirty-five dollars (35 dollars). Do you have size 240?!'에 명시되어 있습니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Welcome to our clothing shop! This yellow cap is only eight dollars (8 dollars). It is quite cheap!",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Welcome to our clothing shop! This yellow cap is only eight dollars (8 dollars). It is quite cheap!\"\n질문: 윗글의 상점 안내문에서 판매하는 상품과 가격으로 일치하는 것은?",
        "options": [
          "이미 품절된 상품",
          "무료 나눔 물품",
          "노란 모자 (23달러)",
          "노란 모자 (8달러)"
        ],
        "correctIndex": 3,
        "correctAnswer": "노란 모자 (8달러)",
        "explanation": "지문의 'Welcome to our clothing shop! This yellow cap is only eight dollars (8 dollars). It is quite cheap!'에 명시되어 있습니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Welcome to our clothing shop! This warm winter jacket is only fifty dollars (50 dollars). It keeps you very warm!",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Welcome to our clothing shop! This warm winter jacket is only fifty dollars (50 dollars). It keeps you very warm!\"\n질문: 윗글의 상점 안내문에서 판매하는 상품과 가격으로 일치하는 것은?",
        "options": [
          "따뜻한 겨울 재킷 (50달러)",
          "따뜻한 겨울 재킷 (65달러)",
          "이미 품절된 상품",
          "무료 나눔 물품"
        ],
        "correctIndex": 0,
        "correctAnswer": "따뜻한 겨울 재킷 (50달러)",
        "explanation": "지문의 'Welcome to our clothing shop! This warm winter jacket is only fifty dollars (50 dollars). It keeps you very warm!'에 명시되어 있습니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Welcome to our clothing shop! This school backpack is only twenty-five dollars (25 dollars). It has many pockets!",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Welcome to our clothing shop! This school backpack is only twenty-five dollars (25 dollars). It has many pockets!\"\n질문: 윗글의 상점 안내문에서 판매하는 상품과 가격으로 일치하는 것은?",
        "options": [
          "학교 책가방 (25달러)",
          "학교 책가방 (40달러)",
          "무료 나눔 물품",
          "이미 품절된 상품"
        ],
        "correctIndex": 0,
        "correctAnswer": "학교 책가방 (25달러)",
        "explanation": "지문의 'Welcome to our clothing shop! This school backpack is only twenty-five dollars (25 dollars). It has many pockets!'에 명시되어 있습니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Welcome to our clothing shop! This blue shirt is only fifteen dollars (15 dollars). Can I try this on?!",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Welcome to our clothing shop! This blue shirt is only fifteen dollars (15 dollars). Can I try this on?!\"\n질문: 윗글의 상점 안내문에서 판매하는 상품과 가격으로 일치하는 것은?",
        "options": [
          "이미 품절된 상품",
          "무료 나눔 물품",
          "파란 셔츠 (30달러)",
          "파란 셔츠 (15달러)"
        ],
        "correctIndex": 3,
        "correctAnswer": "파란 셔츠 (15달러)",
        "explanation": "지문의 'Welcome to our clothing shop! This blue shirt is only fifteen dollars (15 dollars). Can I try this on?!'에 명시되어 있습니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'store' is very frequently used. It means '가게, 상점' in Korean.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'store' is very frequently used. It means '가게, 상점' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'store'의 한국어 의미는?",
        "options": [
          "가게, 상점",
          "신발",
          "셔츠",
          "바지"
        ],
        "correctIndex": 0,
        "correctAnswer": "가게, 상점",
        "explanation": "'store'은 '가게, 상점'입니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'shirt' is very frequently used. It means '셔츠' in Korean.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'shirt' is very frequently used. It means '셔츠' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'shirt'의 한국어 의미는?",
        "options": [
          "모자",
          "신발",
          "바지",
          "셔츠"
        ],
        "correctIndex": 3,
        "correctAnswer": "셔츠",
        "explanation": "'shirt'은 '셔츠'입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'pants' is very frequently used. It means '바지' in Korean.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'pants' is very frequently used. It means '바지' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'pants'의 한국어 의미는?",
        "options": [
          "신발",
          "모자",
          "셔츠",
          "바지"
        ],
        "correctIndex": 3,
        "correctAnswer": "바지",
        "explanation": "'pants'은 '바지'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'shoes' is very frequently used. It means '신발' in Korean.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'shoes' is very frequently used. It means '신발' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'shoes'의 한국어 의미는?",
        "options": [
          "셔츠",
          "바지",
          "모자",
          "신발"
        ],
        "correctIndex": 3,
        "correctAnswer": "신발",
        "explanation": "'shoes'은 '신발'입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'cap' is very frequently used. It means '모자' in Korean.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'cap' is very frequently used. It means '모자' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'cap'의 한국어 의미는?",
        "options": [
          "바지",
          "모자",
          "셔츠",
          "신발"
        ],
        "correctIndex": 1,
        "correctAnswer": "모자",
        "explanation": "'cap'은 '모자'입니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'jacket' is very frequently used. It means '재킷' in Korean.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'jacket' is very frequently used. It means '재킷' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'jacket'의 한국어 의미는?",
        "options": [
          "재킷",
          "신발",
          "셔츠",
          "바지"
        ],
        "correctIndex": 0,
        "correctAnswer": "재킷",
        "explanation": "'jacket'은 '재킷'입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'dollar' is very frequently used. It means '달러' in Korean.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'dollar' is very frequently used. It means '달러' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'dollar'의 한국어 의미는?",
        "options": [
          "달러",
          "셔츠",
          "바지",
          "신발"
        ],
        "correctIndex": 0,
        "correctAnswer": "달러",
        "explanation": "'dollar'은 '달러'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'price' is very frequently used. It means '가격' in Korean.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'price' is very frequently used. It means '가격' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'price'의 한국어 의미는?",
        "options": [
          "신발",
          "바지",
          "셔츠",
          "가격"
        ],
        "correctIndex": 3,
        "correctAnswer": "가격",
        "explanation": "'price'은 '가격'입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'cheap' is very frequently used. It means '값싼' in Korean.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'cheap' is very frequently used. It means '값싼' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'cheap'의 한국어 의미는?",
        "options": [
          "바지",
          "값싼",
          "신발",
          "셔츠"
        ],
        "correctIndex": 1,
        "correctAnswer": "값싼",
        "explanation": "'cheap'은 '값싼'입니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'expensive' is very frequently used. It means '비싼' in Korean.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'expensive' is very frequently used. It means '비싼' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'expensive'의 한국어 의미는?",
        "options": [
          "비싼",
          "셔츠",
          "바지",
          "신발"
        ],
        "correctIndex": 0,
        "correctAnswer": "비싼",
        "explanation": "'expensive'은 '비싼'입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 10단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"셔츠\" (단어 첫 글자: s, 총 5글자)",
        "correctAnswer": "shirt",
        "explanation": "'셔츠'에 해당하는 영어 단어는 'shirt'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 10단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"바지\" (단어 첫 글자: p, 총 5글자)",
        "correctAnswer": "pants",
        "explanation": "'바지'에 해당하는 영어 단어는 'pants'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 10단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"신발\" (단어 첫 글자: s, 총 5글자)",
        "correctAnswer": "shoes",
        "explanation": "'신발'에 해당하는 영어 단어는 'shoes'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 10단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"모자\" (단어 첫 글자: c, 총 3글자)",
        "correctAnswer": "cap",
        "explanation": "'모자'에 해당하는 영어 단어는 'cap'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 10단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"재킷\" (단어 첫 글자: j, 총 6글자)",
        "correctAnswer": "jacket",
        "explanation": "'재킷'에 해당하는 영어 단어는 'jacket'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 10단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"달러\" (단어 첫 글자: d, 총 6글자)",
        "correctAnswer": "dollar",
        "explanation": "'달러'에 해당하는 영어 단어는 'dollar'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 10단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"가격\" (단어 첫 글자: p, 총 5글자)",
        "correctAnswer": "price",
        "explanation": "'가격'에 해당하는 영어 단어는 'price'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 10단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"값싼\" (단어 첫 글자: c, 총 5글자)",
        "correctAnswer": "cheap",
        "explanation": "'값싼'에 해당하는 영어 단어는 'cheap'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 10단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"비싼\" (단어 첫 글자: e, 총 9글자)",
        "correctAnswer": "expensive",
        "explanation": "'비싼'에 해당하는 영어 단어는 'expensive'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 10단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"사다\" (단어 첫 글자: b, 총 3글자)",
        "correctAnswer": "buy",
        "explanation": "'사다'에 해당하는 영어 단어는 'buy'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 10단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"시도하다, 입어보다\" (단어 첫 글자: t, 총 3글자)",
        "correctAnswer": "try",
        "explanation": "'시도하다, 입어보다'에 해당하는 영어 단어는 'try'입니다."
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 10단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"배낭\" (단어 첫 글자: b, 총 8글자)",
        "correctAnswer": "backpack",
        "explanation": "'배낭'에 해당하는 영어 단어는 'backpack'입니다."
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 10단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"치수, 사이즈\" (단어 첫 글자: s, 총 4글자)",
        "correctAnswer": "size",
        "explanation": "'치수, 사이즈'에 해당하는 영어 단어는 'size'입니다."
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 10단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"돕다\" (단어 첫 글자: h, 총 4글자)",
        "correctAnswer": "help",
        "explanation": "'돕다'에 해당하는 영어 단어는 'help'입니다."
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 10단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"가게, 상점\" (단어 첫 글자: s, 총 5글자)",
        "correctAnswer": "store",
        "explanation": "'가게, 상점'에 해당하는 영어 단어는 'store'입니다."
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"도와드릴까요?\"",
        "chips": [
          "May",
          "I",
          "help",
          "you?"
        ],
        "correctAnswer": "May I help you?",
        "explanation": "'May I help you?'은 '도와드릴까요?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"이 파란 셔츠는 얼마인가요?\"",
        "chips": [
          "How",
          "much",
          "is",
          "this",
          "blue",
          "shirt?"
        ],
        "correctAnswer": "How much is this blue shirt?",
        "explanation": "'How much is this blue shirt?'은 '이 파란 셔츠는 얼마인가요?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"15달러입니다.\"",
        "chips": [
          "It",
          "is",
          "fifteen",
          "dollars."
        ],
        "correctAnswer": "It is fifteen dollars.",
        "explanation": "'It is fifteen dollars.'은 '15달러입니다.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"이 바지는 얼마인가요?\"",
        "chips": [
          "How",
          "much",
          "are",
          "these",
          "pants?"
        ],
        "correctAnswer": "How much are these pants?",
        "explanation": "'How much are these pants?'은 '이 바지는 얼마인가요?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"20달러입니다.\"",
        "chips": [
          "They",
          "are",
          "twenty",
          "dollars."
        ],
        "correctAnswer": "They are twenty dollars.",
        "explanation": "'They are twenty dollars.'은 '20달러입니다.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"이 재킷을 입어봐도 될까요?\"",
        "chips": [
          "Can",
          "I",
          "try",
          "this",
          "jacket",
          "on?"
        ],
        "correctAnswer": "Can I try this jacket on?",
        "explanation": "'Can I try this jacket on?'은 '이 재킷을 입어봐도 될까요?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"네, 탈의실은 저쪽에 있습니다.\"",
        "chips": [
          "Yes",
          "the",
          "fitting",
          "room",
          "is",
          "over",
          "there."
        ],
        "correctAnswer": "Yes, the fitting room is over there.",
        "explanation": "'Yes, the fitting room is over there.'은 '네, 탈의실은 저쪽에 있습니다.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"손님에게 정말 잘 어울려요.\"",
        "chips": [
          "It",
          "looks",
          "very",
          "great",
          "on",
          "you."
        ],
        "correctAnswer": "It looks very great on you.",
        "explanation": "'It looks very great on you.'은 '손님에게 정말 잘 어울려요.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"저에게는 너무 비싸요.\"",
        "chips": [
          "That",
          "is",
          "too",
          "expensive",
          "for",
          "me."
        ],
        "correctAnswer": "That is too expensive for me.",
        "explanation": "'That is too expensive for me.'은 '저에게는 너무 비싸요.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"더 저렴한 것이 있나요?\"",
        "chips": [
          "Do",
          "you",
          "have",
          "anything",
          "cheaper?"
        ],
        "correctAnswer": "Do you have anything cheaper?",
        "explanation": "'Do you have anything cheaper?'은 '더 저렴한 것이 있나요?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 96,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"이 흰색 운동화를 사고 싶어요.\"",
        "chips": [
          "I",
          "want",
          "to",
          "buy",
          "these",
          "white",
          "sneakers."
        ],
        "correctAnswer": "I want to buy these white sneakers.",
        "explanation": "'I want to buy these white sneakers.'은 '이 흰색 운동화를 사고 싶어요.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 97,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"여기 영수증과 거스름돈이 있습니다.\"",
        "chips": [
          "Here",
          "is",
          "your",
          "receipt",
          "and",
          "change."
        ],
        "correctAnswer": "Here is your receipt and change.",
        "explanation": "'Here is your receipt and change.'은 '여기 영수증과 거스름돈이 있습니다.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 98,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"신용카드로 결제할 수 있나요?\"",
        "chips": [
          "Can",
          "I",
          "pay",
          "by",
          "credit",
          "card?"
        ],
        "correctAnswer": "Can I pay by credit card?",
        "explanation": "'Can I pay by credit card?'은 '신용카드로 결제할 수 있나요?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 99,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"이 양말들은 3달러입니다.\"",
        "chips": [
          "These",
          "socks",
          "are",
          "three",
          "dollars."
        ],
        "correctAnswer": "These socks are three dollars.",
        "explanation": "'These socks are three dollars.'은 '이 양말들은 3달러입니다.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[최종 골든벨 문제] 다음 우리말에 맞도록 주어진 단어 카드를 순서대로 바르게 배열하세요.\n우리말: \"저희 가게를 찾아주셔서 감사합니다.\"",
        "chips": [
          "Thank",
          "you",
          "for",
          "shopping",
          "with",
          "us."
        ],
        "correctAnswer": "Thank you for shopping with us.",
        "explanation": "'Thank you for shopping with us.'은 '저희 가게를 찾아주셔서 감사합니다.'을 의미하는 핵심 문장입니다."
      }
    ]
  },
  "6G_L11": {
    "name": "11단원: 건강 상태와 조언 (What's the matter? / I have a cold)",
    "grade": 6,
    "theme": "Health, Illness & Advice",
    "totalQuestions": 100,
    "questions": [
      {
        "id": 1,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Minsoo: What is the matter with you? Sarah: I have a terrible headache. Minsoo: You should take this medicine and rest well.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(심한 두통)에 대해 내려진 조언으로 알맞은 것은?",
        "options": [
          "밤새도록 게임하기",
          "이 약을 먹고 푹 쉬다",
          "밖에서 격렬하게 달리기",
          "차가운 음료수를 마음껏 마시기"
        ],
        "correctIndex": 1,
        "correctAnswer": "이 약을 먹고 푹 쉬다",
        "explanation": "'You should take this medicine and rest well'(이 약을 먹고 푹 쉬다)입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kelly: What is the matter with you? Jisu: I have a painful stomachache. Kelly: You should drink warm water and do not eat snacks.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(배앓이, 복통)에 대해 내려진 조언으로 알맞은 것은?",
        "options": [
          "밖에서 격렬하게 달리기",
          "차가운 음료수를 마음껏 마시기",
          "따뜻한 물을 마시고 간식을 먹지 말다",
          "밤새도록 게임하기"
        ],
        "correctIndex": 2,
        "correctAnswer": "따뜻한 물을 마시고 간식을 먹지 말다",
        "explanation": "'You should drink warm water and do not eat snacks'(따뜻한 물을 마시고 간식을 먹지 말다)입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "David: What is the matter with you? Kevin: I have a bad toothache. David: You should go see a dentist right away.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(심한 치통)에 대해 내려진 조언으로 알맞은 것은?",
        "options": [
          "즉시 치과에 가다",
          "차가운 음료수를 마음껏 마시기",
          "밤새도록 게임하기",
          "밖에서 격렬하게 달리기"
        ],
        "correctIndex": 0,
        "correctAnswer": "즉시 치과에 가다",
        "explanation": "'You should go see a dentist right away'(즉시 치과에 가다)입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Sarah: What is the matter with you? Emma: I have a high fever and a cough. Sarah: You should wear a mask and stay in bed.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(고열과 기침)에 대해 내려진 조언으로 알맞은 것은?",
        "options": [
          "밤새도록 게임하기",
          "밖에서 격렬하게 달리기",
          "차가운 음료수를 마음껏 마시기",
          "마스크를 쓰고 침대에 누워 쉬다"
        ],
        "correctIndex": 3,
        "correctAnswer": "마스크를 쓰고 침대에 누워 쉬다",
        "explanation": "'You should wear a mask and stay in bed'(마스크를 쓰고 침대에 누워 쉬다)입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Jisu: What is the matter with you? Tom: I have a runny nose and a cold. Jisu: You should drink hot tea and keep warm.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(콧물과 감기)에 대해 내려진 조언으로 알맞은 것은?",
        "options": [
          "따뜻한 차를 마시고 몸을 따뜻하게 하다",
          "차가운 음료수를 마음껏 마시기",
          "밤새도록 게임하기",
          "밖에서 격렬하게 달리기"
        ],
        "correctIndex": 0,
        "correctAnswer": "따뜻한 차를 마시고 몸을 따뜻하게 하다",
        "explanation": "'You should drink hot tea and keep warm'(따뜻한 차를 마시고 몸을 따뜻하게 하다)입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kevin: What is the matter with you? Hana: I have a hurt ankle from soccer. Kevin: You should put an ice pack on it.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(축구하다 다친 발목)에 대해 내려진 조언으로 알맞은 것은?",
        "options": [
          "밖에서 격렬하게 달리기",
          "밤새도록 게임하기",
          "차가운 음료수를 마음껏 마시기",
          "얼음찜질을 하다"
        ],
        "correctIndex": 3,
        "correctAnswer": "얼음찜질을 하다",
        "explanation": "'You should put an ice pack on it'(얼음찜질을 하다)입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Emma: What is the matter with you? Brian: I have a terrible headache. Emma: You should take this medicine and rest well.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(심한 두통)에 대해 내려진 조언으로 알맞은 것은?",
        "options": [
          "이 약을 먹고 푹 쉬다",
          "밤새도록 게임하기",
          "차가운 음료수를 마음껏 마시기",
          "밖에서 격렬하게 달리기"
        ],
        "correctIndex": 0,
        "correctAnswer": "이 약을 먹고 푹 쉬다",
        "explanation": "'You should take this medicine and rest well'(이 약을 먹고 푹 쉬다)입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Tom: What is the matter with you? Amy: I have a painful stomachache. Tom: You should drink warm water and do not eat snacks.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(배앓이, 복통)에 대해 내려진 조언으로 알맞은 것은?",
        "options": [
          "따뜻한 물을 마시고 간식을 먹지 말다",
          "밖에서 격렬하게 달리기",
          "차가운 음료수를 마음껏 마시기",
          "밤새도록 게임하기"
        ],
        "correctIndex": 0,
        "correctAnswer": "따뜻한 물을 마시고 간식을 먹지 말다",
        "explanation": "'You should drink warm water and do not eat snacks'(따뜻한 물을 마시고 간식을 먹지 말다)입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Hana: What is the matter with you? Paul: I have a bad toothache. Hana: You should go see a dentist right away.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(심한 치통)에 대해 내려진 조언으로 알맞은 것은?",
        "options": [
          "밤새도록 게임하기",
          "밖에서 격렬하게 달리기",
          "차가운 음료수를 마음껏 마시기",
          "즉시 치과에 가다"
        ],
        "correctIndex": 3,
        "correctAnswer": "즉시 치과에 가다",
        "explanation": "'You should go see a dentist right away'(즉시 치과에 가다)입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Brian: What is the matter with you? Minsoo: I have a high fever and a cough. Brian: You should wear a mask and stay in bed.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(고열과 기침)에 대해 내려진 조언으로 알맞은 것은?",
        "options": [
          "밖에서 격렬하게 달리기",
          "밤새도록 게임하기",
          "차가운 음료수를 마음껏 마시기",
          "마스크를 쓰고 침대에 누워 쉬다"
        ],
        "correctIndex": 3,
        "correctAnswer": "마스크를 쓰고 침대에 누워 쉬다",
        "explanation": "'You should wear a mask and stay in bed'(마스크를 쓰고 침대에 누워 쉬다)입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Amy: What is the matter with you? Kelly: I have a runny nose and a cold. Amy: You should drink hot tea and keep warm.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(콧물과 감기)에 대해 내려진 조언으로 알맞은 것은?",
        "options": [
          "밤새도록 게임하기",
          "따뜻한 차를 마시고 몸을 따뜻하게 하다",
          "차가운 음료수를 마음껏 마시기",
          "밖에서 격렬하게 달리기"
        ],
        "correctIndex": 1,
        "correctAnswer": "따뜻한 차를 마시고 몸을 따뜻하게 하다",
        "explanation": "'You should drink hot tea and keep warm'(따뜻한 차를 마시고 몸을 따뜻하게 하다)입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Paul: What is the matter with you? David: I have a hurt ankle from soccer. Paul: You should put an ice pack on it.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(축구하다 다친 발목)에 대해 내려진 조언으로 알맞은 것은?",
        "options": [
          "얼음찜질을 하다",
          "차가운 음료수를 마음껏 마시기",
          "밤새도록 게임하기",
          "밖에서 격렬하게 달리기"
        ],
        "correctIndex": 0,
        "correctAnswer": "얼음찜질을 하다",
        "explanation": "'You should put an ice pack on it'(얼음찜질을 하다)입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Get well soon, my friend. Sarah: I completely agree with you!",
        "question": "[듣기 · 11단원] 대화에서 Minsoo이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어.",
          "빨리 나으렴, 내 친구야.",
          "다음에 다시 이야기하자."
        ],
        "correctIndex": 2,
        "correctAnswer": "빨리 나으렴, 내 친구야.",
        "explanation": "'Get well soon, my friend.'은 '빨리 나으렴, 내 친구야.'을 의미합니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kelly: Wear a warm coat when you go outside. Jisu: I completely agree with you!",
        "question": "[듣기 · 11단원] 대화에서 Kelly이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "밖에 나갈 때는 따뜻한 외투를 입으렴.",
          "다음에 다시 이야기하자.",
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 0,
        "correctAnswer": "밖에 나갈 때는 따뜻한 외투를 입으렴.",
        "explanation": "'Wear a warm coat when you go outside.'은 '밖에 나갈 때는 따뜻한 외투를 입으렴.'을 의미합니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "David: Health is the most important treasure. Kevin: I completely agree with you!",
        "question": "[듣기 · 11단원] 대화에서 David이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자.",
          "건강이 가장 중요한 보물이야.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 2,
        "correctAnswer": "건강이 가장 중요한 보물이야.",
        "explanation": "'Health is the most important treasure.'은 '건강이 가장 중요한 보물이야.'을 의미합니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Sarah: What is the matter with you? Emma: I completely agree with you!",
        "question": "[듣기 · 11단원] 대화에서 Sarah이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "무슨 일 있니? 어디 아프니?",
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 0,
        "correctAnswer": "무슨 일 있니? 어디 아프니?",
        "explanation": "'What is the matter with you?'은 '무슨 일 있니? 어디 아프니?'을 의미합니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Jisu: I have a terrible headache. Tom: I completely agree with you!",
        "question": "[듣기 · 11단원] 대화에서 Jisu이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "머리가 너무 아파요.",
          "다음에 다시 이야기하자.",
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 0,
        "correctAnswer": "머리가 너무 아파요.",
        "explanation": "'I have a terrible headache.'은 '머리가 너무 아파요.'을 의미합니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kevin: You should see a doctor. Hana: I completely agree with you!",
        "question": "[듣기 · 11단원] 대화에서 Kevin이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자.",
          "너는 의사 선생님 진료를 받아야 해."
        ],
        "correctIndex": 3,
        "correctAnswer": "너는 의사 선생님 진료를 받아야 해.",
        "explanation": "'You should see a doctor.'은 '너는 의사 선생님 진료를 받아야 해.'을 의미합니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Emma: Take this medicine and get some rest. Brian: I completely agree with you!",
        "question": "[듣기 · 11단원] 대화에서 Emma이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "이 약을 먹고 푹 쉬렴.",
          "다음에 다시 이야기하자.",
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 0,
        "correctAnswer": "이 약을 먹고 푹 쉬렴.",
        "explanation": "'Take this medicine and get some rest.'은 '이 약을 먹고 푹 쉬렴.'을 의미합니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Tom: I have a high fever and a cold. Amy: I completely agree with you!",
        "question": "[듣기 · 11단원] 대화에서 Tom이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "열이 높고 감기에 걸렸어요.",
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 0,
        "correctAnswer": "열이 높고 감기에 걸렸어요.",
        "explanation": "'I have a high fever and a cold.'은 '열이 높고 감기에 걸렸어요.'을 의미합니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Hana: Drink plenty of warm water. Paul: I completely agree with you!",
        "question": "[듣기 · 11단원] 대화에서 Hana이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자.",
          "따뜻한 물을 많이 마시렴."
        ],
        "correctIndex": 3,
        "correctAnswer": "따뜻한 물을 많이 마시렴.",
        "explanation": "'Drink plenty of warm water.'은 '따뜻한 물을 많이 마시렴.'을 의미합니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Brian: I have a toothache on my left side. Minsoo: I completely agree with you!",
        "question": "[듣기 · 11단원] 대화에서 Brian이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음에 다시 이야기하자.",
          "왼쪽 치아가 아파요.",
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 1,
        "correctAnswer": "왼쪽 치아가 아파요.",
        "explanation": "'I have a toothache on my left side.'은 '왼쪽 치아가 아파요.'을 의미합니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Amy: You should visit the dental clinic. Kelly: I completely agree with you!",
        "question": "[듣기 · 11단원] 대화에서 Amy이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "너는 치과에 방문해야 해."
        ],
        "correctIndex": 3,
        "correctAnswer": "너는 치과에 방문해야 해.",
        "explanation": "'You should visit the dental clinic.'은 '너는 치과에 방문해야 해.'을 의미합니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Paul: My stomach hurts after eating lunch. David: I completely agree with you!",
        "question": "[듣기 · 11단원] 대화에서 Paul이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "점심을 먹은 뒤에 배가 아파요."
        ],
        "correctIndex": 3,
        "correctAnswer": "점심을 먹은 뒤에 배가 아파요.",
        "explanation": "'My stomach hurts after eating lunch.'은 '점심을 먹은 뒤에 배가 아파요.'을 의미합니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Do you know the meaning of 'dentist'? Sarah: Yes, it means '치과의사'.",
        "question": "[듣기 · 11단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'dentist'의 뜻은?",
        "options": [
          "치과의사",
          "복통",
          "문제, 일",
          "두통"
        ],
        "correctIndex": 0,
        "correctAnswer": "치과의사",
        "explanation": "'dentist'은 '치과의사'를 뜻합니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kelly: Do you know the meaning of 'rest'? Jisu: Yes, it means '쉬다, 휴식'.",
        "question": "[듣기 · 11단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'rest'의 뜻은?",
        "options": [
          "쉬다, 휴식",
          "문제, 일",
          "두통",
          "복통"
        ],
        "correctIndex": 0,
        "correctAnswer": "쉬다, 휴식",
        "explanation": "'rest'은 '쉬다, 휴식'를 뜻합니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "David: Do you know the meaning of 'hospital'? Kevin: Yes, it means '병원'.",
        "question": "[듣기 · 11단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'hospital'의 뜻은?",
        "options": [
          "문제, 일",
          "병원",
          "복통",
          "두통"
        ],
        "correctIndex": 1,
        "correctAnswer": "병원",
        "explanation": "'hospital'은 '병원'를 뜻합니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Sarah: Do you know the meaning of 'ankle'? Emma: Yes, it means '발목'.",
        "question": "[듣기 · 11단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'ankle'의 뜻은?",
        "options": [
          "발목",
          "문제, 일",
          "복통",
          "두통"
        ],
        "correctIndex": 0,
        "correctAnswer": "발목",
        "explanation": "'ankle'은 '발목'를 뜻합니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Jisu: Do you know the meaning of 'warm'? Tom: Yes, it means '따뜻한'.",
        "question": "[듣기 · 11단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'warm'의 뜻은?",
        "options": [
          "복통",
          "두통",
          "문제, 일",
          "따뜻한"
        ],
        "correctIndex": 3,
        "correctAnswer": "따뜻한",
        "explanation": "'warm'은 '따뜻한'를 뜻합니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kevin: Do you know the meaning of 'health'? Hana: Yes, it means '건강'.",
        "question": "[듣기 · 11단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'health'의 뜻은?",
        "options": [
          "두통",
          "문제, 일",
          "건강",
          "복통"
        ],
        "correctIndex": 2,
        "correctAnswer": "건강",
        "explanation": "'health'은 '건강'를 뜻합니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Emma: Do you know the meaning of 'matter'? Brian: Yes, it means '문제, 일'.",
        "question": "[듣기 · 11단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'matter'의 뜻은?",
        "options": [
          "치통",
          "복통",
          "두통",
          "문제, 일"
        ],
        "correctIndex": 3,
        "correctAnswer": "문제, 일",
        "explanation": "'matter'은 '문제, 일'를 뜻합니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Tom: Do you know the meaning of 'headache'? Amy: Yes, it means '두통'.",
        "question": "[듣기 · 11단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'headache'의 뜻은?",
        "options": [
          "두통",
          "문제, 일",
          "복통",
          "치통"
        ],
        "correctIndex": 0,
        "correctAnswer": "두통",
        "explanation": "'headache'은 '두통'를 뜻합니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Hana: Do you know the meaning of 'stomachache'? Paul: Yes, it means '복통'.",
        "question": "[듣기 · 11단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'stomachache'의 뜻은?",
        "options": [
          "문제, 일",
          "치통",
          "두통",
          "복통"
        ],
        "correctIndex": 3,
        "correctAnswer": "복통",
        "explanation": "'stomachache'은 '복통'를 뜻합니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Brian: Do you know the meaning of 'toothache'? Minsoo: Yes, it means '치통'.",
        "question": "[듣기 · 11단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'toothache'의 뜻은?",
        "options": [
          "치통",
          "문제, 일",
          "두통",
          "복통"
        ],
        "correctIndex": 0,
        "correctAnswer": "치통",
        "explanation": "'toothache'은 '치통'를 뜻합니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Amy: Do you know the meaning of 'fever'? Kelly: Yes, it means '열'.",
        "question": "[듣기 · 11단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'fever'의 뜻은?",
        "options": [
          "두통",
          "문제, 일",
          "열",
          "복통"
        ],
        "correctIndex": 2,
        "correctAnswer": "열",
        "explanation": "'fever'은 '열'를 뜻합니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Minsoo. You should see a doctor. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Minsoo. You should see a doctor. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "너는 의사 선생님 진료를 받아야 해."
        ],
        "correctIndex": 3,
        "correctAnswer": "너는 의사 선생님 진료를 받아야 해.",
        "explanation": "'You should see a doctor.'(너는 의사 선생님 진료를 받아야 해.)이 핵심 문장입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kelly. Take this medicine and get some rest. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kelly. Take this medicine and get some rest. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "길을 잃어버려서 헤매고 있다.",
          "이 약을 먹고 푹 쉬렴."
        ],
        "correctIndex": 3,
        "correctAnswer": "이 약을 먹고 푹 쉬렴.",
        "explanation": "'Take this medicine and get some rest.'(이 약을 먹고 푹 쉬렴.)이 핵심 문장입니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is David. I have a high fever and a cold. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is David. I have a high fever and a cold. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "열이 높고 감기에 걸렸어요.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 2,
        "correctAnswer": "열이 높고 감기에 걸렸어요.",
        "explanation": "'I have a high fever and a cold.'(열이 높고 감기에 걸렸어요.)이 핵심 문장입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Sarah. Drink plenty of warm water. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Sarah. Drink plenty of warm water. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "따뜻한 물을 많이 마시렴."
        ],
        "correctIndex": 3,
        "correctAnswer": "따뜻한 물을 많이 마시렴.",
        "explanation": "'Drink plenty of warm water.'(따뜻한 물을 많이 마시렴.)이 핵심 문장입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Jisu. I have a toothache on my left side. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Jisu. I have a toothache on my left side. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Jisu이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "왼쪽 치아가 아파요.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "왼쪽 치아가 아파요.",
        "explanation": "'I have a toothache on my left side.'(왼쪽 치아가 아파요.)이 핵심 문장입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kevin. You should visit the dental clinic. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kevin. You should visit the dental clinic. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kevin이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "너는 치과에 방문해야 해.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 0,
        "correctAnswer": "너는 치과에 방문해야 해.",
        "explanation": "'You should visit the dental clinic.'(너는 치과에 방문해야 해.)이 핵심 문장입니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Emma. My stomach hurts after eating lunch. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Emma. My stomach hurts after eating lunch. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Emma이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다.",
          "점심을 먹은 뒤에 배가 아파요."
        ],
        "correctIndex": 3,
        "correctAnswer": "점심을 먹은 뒤에 배가 아파요.",
        "explanation": "'My stomach hurts after eating lunch.'(점심을 먹은 뒤에 배가 아파요.)이 핵심 문장입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Tom. Don't eat fast food today. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Tom. Don't eat fast food today. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Tom이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "오늘은 패스트푸드를 먹지 마렴.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "오늘은 패스트푸드를 먹지 마렴.",
        "explanation": "'Don't eat fast food today.'(오늘은 패스트푸드를 먹지 마렴.)이 핵심 문장입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Hana. I hurt my ankle playing soccer. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Hana. I hurt my ankle playing soccer. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Hana이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "축구하다가 발목을 다쳤어요.",
          "길을 잃어버려서 헤매고 있다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 0,
        "correctAnswer": "축구하다가 발목을 다쳤어요.",
        "explanation": "'I hurt my ankle playing soccer.'(축구하다가 발목을 다쳤어요.)이 핵심 문장입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Brian. Put an ice pack on your ankle. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Brian. Put an ice pack on your ankle. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Brian이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "발목에 얼음찜질을 하렴.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "발목에 얼음찜질을 하렴.",
        "explanation": "'Put an ice pack on your ankle.'(발목에 얼음찜질을 하렴.)이 핵심 문장입니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Amy. Get well soon, my friend. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Amy. Get well soon, my friend. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Amy이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "학교 숙제가 너무 많아서 피곤하다.",
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "빨리 나으렴, 내 친구야."
        ],
        "correctIndex": 3,
        "correctAnswer": "빨리 나으렴, 내 친구야.",
        "explanation": "'Get well soon, my friend.'(빨리 나으렴, 내 친구야.)이 핵심 문장입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Paul. Wear a warm coat when you go outside. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Paul. Wear a warm coat when you go outside. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Paul이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "밖에 나갈 때는 따뜻한 외투를 입으렴.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다."
        ],
        "correctIndex": 1,
        "correctAnswer": "밖에 나갈 때는 따뜻한 외투를 입으렴.",
        "explanation": "'Wear a warm coat when you go outside.'(밖에 나갈 때는 따뜻한 외투를 입으렴.)이 핵심 문장입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Minsoo. Health is the most important treasure. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Minsoo. Health is the most important treasure. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "건강이 가장 중요한 보물이야.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다."
        ],
        "correctIndex": 1,
        "correctAnswer": "건강이 가장 중요한 보물이야.",
        "explanation": "'Health is the most important treasure.'(건강이 가장 중요한 보물이야.)이 핵심 문장입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kelly. What is the matter with you? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kelly. What is the matter with you? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "무슨 일 있니? 어디 아프니?",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 2,
        "correctAnswer": "무슨 일 있니? 어디 아프니?",
        "explanation": "'What is the matter with you?'(무슨 일 있니? 어디 아프니?)이 핵심 문장입니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is David. I have a terrible headache. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is David. I have a terrible headache. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "머리가 너무 아파요.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다."
        ],
        "correctIndex": 1,
        "correctAnswer": "머리가 너무 아파요.",
        "explanation": "'I have a terrible headache.'(머리가 너무 아파요.)이 핵심 문장입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Sarah went to see the nurse because of a high fever and a cough. The nurse said, \"You should wear a mask and stay in bed.\"",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Sarah went to see the nurse because of a high fever and a cough. The nurse said, \"You should wear a mask and stay in bed.\"\"\n질문: 윗글에서 보건 선생님께서 Sarah에게 주신 올바른 건강 조언은?",
        "options": [
          "마스크를 쓰고 침대에 누워 쉬다",
          "찬 음식을 마음껏 먹으라",
          "운동장에 나가서 축구하라",
          "창문을 열고 잠을 자라"
        ],
        "correctIndex": 0,
        "correctAnswer": "마스크를 쓰고 침대에 누워 쉬다",
        "explanation": "지문의 'Sarah went to see the nurse because of a high fever and a cough. The nurse said, \"You should wear a mask and stay in bed.\"'에 명시되어 있습니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Jisu went to see the nurse because of a runny nose and a cold. The nurse said, \"You should drink hot tea and keep warm.\"",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Jisu went to see the nurse because of a runny nose and a cold. The nurse said, \"You should drink hot tea and keep warm.\"\"\n질문: 윗글에서 보건 선생님께서 Jisu에게 주신 올바른 건강 조언은?",
        "options": [
          "창문을 열고 잠을 자라",
          "운동장에 나가서 축구하라",
          "찬 음식을 마음껏 먹으라",
          "따뜻한 차를 마시고 몸을 따뜻하게 하다"
        ],
        "correctIndex": 3,
        "correctAnswer": "따뜻한 차를 마시고 몸을 따뜻하게 하다",
        "explanation": "지문의 'Jisu went to see the nurse because of a runny nose and a cold. The nurse said, \"You should drink hot tea and keep warm.\"'에 명시되어 있습니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Kevin went to see the nurse because of a hurt ankle from soccer. The nurse said, \"You should put an ice pack on it.\"",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Kevin went to see the nurse because of a hurt ankle from soccer. The nurse said, \"You should put an ice pack on it.\"\"\n질문: 윗글에서 보건 선생님께서 Kevin에게 주신 올바른 건강 조언은?",
        "options": [
          "창문을 열고 잠을 자라",
          "운동장에 나가서 축구하라",
          "찬 음식을 마음껏 먹으라",
          "얼음찜질을 하다"
        ],
        "correctIndex": 3,
        "correctAnswer": "얼음찜질을 하다",
        "explanation": "지문의 'Kevin went to see the nurse because of a hurt ankle from soccer. The nurse said, \"You should put an ice pack on it.\"'에 명시되어 있습니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Emma went to see the nurse because of a terrible headache. The nurse said, \"You should take this medicine and rest well.\"",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Emma went to see the nurse because of a terrible headache. The nurse said, \"You should take this medicine and rest well.\"\"\n질문: 윗글에서 보건 선생님께서 Emma에게 주신 올바른 건강 조언은?",
        "options": [
          "창문을 열고 잠을 자라",
          "찬 음식을 마음껏 먹으라",
          "이 약을 먹고 푹 쉬다",
          "운동장에 나가서 축구하라"
        ],
        "correctIndex": 2,
        "correctAnswer": "이 약을 먹고 푹 쉬다",
        "explanation": "지문의 'Emma went to see the nurse because of a terrible headache. The nurse said, \"You should take this medicine and rest well.\"'에 명시되어 있습니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Tom went to see the nurse because of a painful stomachache. The nurse said, \"You should drink warm water and do not eat snacks.\"",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Tom went to see the nurse because of a painful stomachache. The nurse said, \"You should drink warm water and do not eat snacks.\"\"\n질문: 윗글에서 보건 선생님께서 Tom에게 주신 올바른 건강 조언은?",
        "options": [
          "운동장에 나가서 축구하라",
          "찬 음식을 마음껏 먹으라",
          "창문을 열고 잠을 자라",
          "따뜻한 물을 마시고 간식을 먹지 말다"
        ],
        "correctIndex": 3,
        "correctAnswer": "따뜻한 물을 마시고 간식을 먹지 말다",
        "explanation": "지문의 'Tom went to see the nurse because of a painful stomachache. The nurse said, \"You should drink warm water and do not eat snacks.\"'에 명시되어 있습니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hana went to see the nurse because of a bad toothache. The nurse said, \"You should go see a dentist right away.\"",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Hana went to see the nurse because of a bad toothache. The nurse said, \"You should go see a dentist right away.\"\"\n질문: 윗글에서 보건 선생님께서 Hana에게 주신 올바른 건강 조언은?",
        "options": [
          "운동장에 나가서 축구하라",
          "창문을 열고 잠을 자라",
          "찬 음식을 마음껏 먹으라",
          "즉시 치과에 가다"
        ],
        "correctIndex": 3,
        "correctAnswer": "즉시 치과에 가다",
        "explanation": "지문의 'Hana went to see the nurse because of a bad toothache. The nurse said, \"You should go see a dentist right away.\"'에 명시되어 있습니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Brian went to see the nurse because of a high fever and a cough. The nurse said, \"You should wear a mask and stay in bed.\"",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Brian went to see the nurse because of a high fever and a cough. The nurse said, \"You should wear a mask and stay in bed.\"\"\n질문: 윗글에서 보건 선생님께서 Brian에게 주신 올바른 건강 조언은?",
        "options": [
          "찬 음식을 마음껏 먹으라",
          "창문을 열고 잠을 자라",
          "마스크를 쓰고 침대에 누워 쉬다",
          "운동장에 나가서 축구하라"
        ],
        "correctIndex": 2,
        "correctAnswer": "마스크를 쓰고 침대에 누워 쉬다",
        "explanation": "지문의 'Brian went to see the nurse because of a high fever and a cough. The nurse said, \"You should wear a mask and stay in bed.\"'에 명시되어 있습니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Amy went to see the nurse because of a runny nose and a cold. The nurse said, \"You should drink hot tea and keep warm.\"",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Amy went to see the nurse because of a runny nose and a cold. The nurse said, \"You should drink hot tea and keep warm.\"\"\n질문: 윗글에서 보건 선생님께서 Amy에게 주신 올바른 건강 조언은?",
        "options": [
          "운동장에 나가서 축구하라",
          "찬 음식을 마음껏 먹으라",
          "창문을 열고 잠을 자라",
          "따뜻한 차를 마시고 몸을 따뜻하게 하다"
        ],
        "correctIndex": 3,
        "correctAnswer": "따뜻한 차를 마시고 몸을 따뜻하게 하다",
        "explanation": "지문의 'Amy went to see the nurse because of a runny nose and a cold. The nurse said, \"You should drink hot tea and keep warm.\"'에 명시되어 있습니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Paul went to see the nurse because of a hurt ankle from soccer. The nurse said, \"You should put an ice pack on it.\"",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Paul went to see the nurse because of a hurt ankle from soccer. The nurse said, \"You should put an ice pack on it.\"\"\n질문: 윗글에서 보건 선생님께서 Paul에게 주신 올바른 건강 조언은?",
        "options": [
          "운동장에 나가서 축구하라",
          "찬 음식을 마음껏 먹으라",
          "얼음찜질을 하다",
          "창문을 열고 잠을 자라"
        ],
        "correctIndex": 2,
        "correctAnswer": "얼음찜질을 하다",
        "explanation": "지문의 'Paul went to see the nurse because of a hurt ankle from soccer. The nurse said, \"You should put an ice pack on it.\"'에 명시되어 있습니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Minsoo went to see the nurse because of a terrible headache. The nurse said, \"You should take this medicine and rest well.\"",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Minsoo went to see the nurse because of a terrible headache. The nurse said, \"You should take this medicine and rest well.\"\"\n질문: 윗글에서 보건 선생님께서 Minsoo에게 주신 올바른 건강 조언은?",
        "options": [
          "운동장에 나가서 축구하라",
          "찬 음식을 마음껏 먹으라",
          "이 약을 먹고 푹 쉬다",
          "창문을 열고 잠을 자라"
        ],
        "correctIndex": 2,
        "correctAnswer": "이 약을 먹고 푹 쉬다",
        "explanation": "지문의 'Minsoo went to see the nurse because of a terrible headache. The nurse said, \"You should take this medicine and rest well.\"'에 명시되어 있습니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'health' is very frequently used. It means '건강' in Korean.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'health' is very frequently used. It means '건강' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'health'의 한국어 의미는?",
        "options": [
          "문제, 일",
          "건강",
          "복통",
          "두통"
        ],
        "correctIndex": 1,
        "correctAnswer": "건강",
        "explanation": "'health'은 '건강'입니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'matter' is very frequently used. It means '문제, 일' in Korean.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'matter' is very frequently used. It means '문제, 일' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'matter'의 한국어 의미는?",
        "options": [
          "치통",
          "복통",
          "두통",
          "문제, 일"
        ],
        "correctIndex": 3,
        "correctAnswer": "문제, 일",
        "explanation": "'matter'은 '문제, 일'입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'headache' is very frequently used. It means '두통' in Korean.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'headache' is very frequently used. It means '두통' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'headache'의 한국어 의미는?",
        "options": [
          "복통",
          "치통",
          "문제, 일",
          "두통"
        ],
        "correctIndex": 3,
        "correctAnswer": "두통",
        "explanation": "'headache'은 '두통'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'stomachache' is very frequently used. It means '복통' in Korean.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'stomachache' is very frequently used. It means '복통' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'stomachache'의 한국어 의미는?",
        "options": [
          "문제, 일",
          "복통",
          "두통",
          "치통"
        ],
        "correctIndex": 1,
        "correctAnswer": "복통",
        "explanation": "'stomachache'은 '복통'입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'toothache' is very frequently used. It means '치통' in Korean.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'toothache' is very frequently used. It means '치통' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'toothache'의 한국어 의미는?",
        "options": [
          "두통",
          "문제, 일",
          "치통",
          "복통"
        ],
        "correctIndex": 2,
        "correctAnswer": "치통",
        "explanation": "'toothache'은 '치통'입니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'fever' is very frequently used. It means '열' in Korean.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'fever' is very frequently used. It means '열' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'fever'의 한국어 의미는?",
        "options": [
          "두통",
          "문제, 일",
          "열",
          "복통"
        ],
        "correctIndex": 2,
        "correctAnswer": "열",
        "explanation": "'fever'은 '열'입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'cold' is very frequently used. It means '감기, 추운' in Korean.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'cold' is very frequently used. It means '감기, 추운' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'cold'의 한국어 의미는?",
        "options": [
          "감기, 추운",
          "문제, 일",
          "두통",
          "복통"
        ],
        "correctIndex": 0,
        "correctAnswer": "감기, 추운",
        "explanation": "'cold'은 '감기, 추운'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'cough' is very frequently used. It means '기침' in Korean.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'cough' is very frequently used. It means '기침' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'cough'의 한국어 의미는?",
        "options": [
          "기침",
          "복통",
          "두통",
          "문제, 일"
        ],
        "correctIndex": 0,
        "correctAnswer": "기침",
        "explanation": "'cough'은 '기침'입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'medicine' is very frequently used. It means '약' in Korean.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'medicine' is very frequently used. It means '약' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'medicine'의 한국어 의미는?",
        "options": [
          "약",
          "두통",
          "복통",
          "문제, 일"
        ],
        "correctIndex": 0,
        "correctAnswer": "약",
        "explanation": "'medicine'은 '약'입니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'doctor' is very frequently used. It means '의사' in Korean.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'doctor' is very frequently used. It means '의사' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'doctor'의 한국어 의미는?",
        "options": [
          "두통",
          "문제, 일",
          "복통",
          "의사"
        ],
        "correctIndex": 3,
        "correctAnswer": "의사",
        "explanation": "'doctor'은 '의사'입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 11단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"문제, 일\" (단어 첫 글자: m, 총 6글자)",
        "correctAnswer": "matter",
        "explanation": "'문제, 일'에 해당하는 영어 단어는 'matter'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 11단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"두통\" (단어 첫 글자: h, 총 8글자)",
        "correctAnswer": "headache",
        "explanation": "'두통'에 해당하는 영어 단어는 'headache'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 11단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"복통\" (단어 첫 글자: s, 총 11글자)",
        "correctAnswer": "stomachache",
        "explanation": "'복통'에 해당하는 영어 단어는 'stomachache'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 11단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"치통\" (단어 첫 글자: t, 총 9글자)",
        "correctAnswer": "toothache",
        "explanation": "'치통'에 해당하는 영어 단어는 'toothache'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 11단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"열\" (단어 첫 글자: f, 총 5글자)",
        "correctAnswer": "fever",
        "explanation": "'열'에 해당하는 영어 단어는 'fever'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 11단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"감기, 추운\" (단어 첫 글자: c, 총 4글자)",
        "correctAnswer": "cold",
        "explanation": "'감기, 추운'에 해당하는 영어 단어는 'cold'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 11단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"기침\" (단어 첫 글자: c, 총 5글자)",
        "correctAnswer": "cough",
        "explanation": "'기침'에 해당하는 영어 단어는 'cough'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 11단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"약\" (단어 첫 글자: m, 총 8글자)",
        "correctAnswer": "medicine",
        "explanation": "'약'에 해당하는 영어 단어는 'medicine'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 11단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"의사\" (단어 첫 글자: d, 총 6글자)",
        "correctAnswer": "doctor",
        "explanation": "'의사'에 해당하는 영어 단어는 'doctor'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 11단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"치과의사\" (단어 첫 글자: d, 총 7글자)",
        "correctAnswer": "dentist",
        "explanation": "'치과의사'에 해당하는 영어 단어는 'dentist'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 11단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"쉬다, 휴식\" (단어 첫 글자: r, 총 4글자)",
        "correctAnswer": "rest",
        "explanation": "'쉬다, 휴식'에 해당하는 영어 단어는 'rest'입니다."
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 11단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"병원\" (단어 첫 글자: h, 총 8글자)",
        "correctAnswer": "hospital",
        "explanation": "'병원'에 해당하는 영어 단어는 'hospital'입니다."
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 11단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"발목\" (단어 첫 글자: a, 총 5글자)",
        "correctAnswer": "ankle",
        "explanation": "'발목'에 해당하는 영어 단어는 'ankle'입니다."
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 11단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"따뜻한\" (단어 첫 글자: w, 총 4글자)",
        "correctAnswer": "warm",
        "explanation": "'따뜻한'에 해당하는 영어 단어는 'warm'입니다."
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 11단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"건강\" (단어 첫 글자: h, 총 6글자)",
        "correctAnswer": "health",
        "explanation": "'건강'에 해당하는 영어 단어는 'health'입니다."
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"무슨 일 있니? 어디 아프니?\"",
        "chips": [
          "What",
          "is",
          "the",
          "matter",
          "with",
          "you?"
        ],
        "correctAnswer": "What is the matter with you?",
        "explanation": "'What is the matter with you?'은 '무슨 일 있니? 어디 아프니?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"머리가 너무 아파요.\"",
        "chips": [
          "I",
          "have",
          "a",
          "terrible",
          "headache."
        ],
        "correctAnswer": "I have a terrible headache.",
        "explanation": "'I have a terrible headache.'은 '머리가 너무 아파요.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"너는 의사 선생님 진료를 받아야 해.\"",
        "chips": [
          "You",
          "should",
          "see",
          "a",
          "doctor."
        ],
        "correctAnswer": "You should see a doctor.",
        "explanation": "'You should see a doctor.'은 '너는 의사 선생님 진료를 받아야 해.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"이 약을 먹고 푹 쉬렴.\"",
        "chips": [
          "Take",
          "this",
          "medicine",
          "and",
          "get",
          "some",
          "rest."
        ],
        "correctAnswer": "Take this medicine and get some rest.",
        "explanation": "'Take this medicine and get some rest.'은 '이 약을 먹고 푹 쉬렴.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"열이 높고 감기에 걸렸어요.\"",
        "chips": [
          "I",
          "have",
          "a",
          "high",
          "fever",
          "and",
          "a",
          "cold."
        ],
        "correctAnswer": "I have a high fever and a cold.",
        "explanation": "'I have a high fever and a cold.'은 '열이 높고 감기에 걸렸어요.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"따뜻한 물을 많이 마시렴.\"",
        "chips": [
          "Drink",
          "plenty",
          "of",
          "warm",
          "water."
        ],
        "correctAnswer": "Drink plenty of warm water.",
        "explanation": "'Drink plenty of warm water.'은 '따뜻한 물을 많이 마시렴.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"왼쪽 치아가 아파요.\"",
        "chips": [
          "I",
          "have",
          "a",
          "toothache",
          "on",
          "my",
          "left",
          "side."
        ],
        "correctAnswer": "I have a toothache on my left side.",
        "explanation": "'I have a toothache on my left side.'은 '왼쪽 치아가 아파요.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"너는 치과에 방문해야 해.\"",
        "chips": [
          "You",
          "should",
          "visit",
          "the",
          "dental",
          "clinic."
        ],
        "correctAnswer": "You should visit the dental clinic.",
        "explanation": "'You should visit the dental clinic.'은 '너는 치과에 방문해야 해.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"점심을 먹은 뒤에 배가 아파요.\"",
        "chips": [
          "My",
          "stomach",
          "hurts",
          "after",
          "eating",
          "lunch."
        ],
        "correctAnswer": "My stomach hurts after eating lunch.",
        "explanation": "'My stomach hurts after eating lunch.'은 '점심을 먹은 뒤에 배가 아파요.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"오늘은 패스트푸드를 먹지 마렴.\"",
        "chips": [
          "Don't",
          "eat",
          "fast",
          "food",
          "today."
        ],
        "correctAnswer": "Don't eat fast food today.",
        "explanation": "'Don't eat fast food today.'은 '오늘은 패스트푸드를 먹지 마렴.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 96,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"축구하다가 발목을 다쳤어요.\"",
        "chips": [
          "I",
          "hurt",
          "my",
          "ankle",
          "playing",
          "soccer."
        ],
        "correctAnswer": "I hurt my ankle playing soccer.",
        "explanation": "'I hurt my ankle playing soccer.'은 '축구하다가 발목을 다쳤어요.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 97,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"발목에 얼음찜질을 하렴.\"",
        "chips": [
          "Put",
          "an",
          "ice",
          "pack",
          "on",
          "your",
          "ankle."
        ],
        "correctAnswer": "Put an ice pack on your ankle.",
        "explanation": "'Put an ice pack on your ankle.'은 '발목에 얼음찜질을 하렴.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 98,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"빨리 나으렴, 내 친구야.\"",
        "chips": [
          "Get",
          "well",
          "soon",
          "my",
          "friend."
        ],
        "correctAnswer": "Get well soon, my friend.",
        "explanation": "'Get well soon, my friend.'은 '빨리 나으렴, 내 친구야.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 99,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"밖에 나갈 때는 따뜻한 외투를 입으렴.\"",
        "chips": [
          "Wear",
          "a",
          "warm",
          "coat",
          "when",
          "you",
          "go",
          "outside."
        ],
        "correctAnswer": "Wear a warm coat when you go outside.",
        "explanation": "'Wear a warm coat when you go outside.'은 '밖에 나갈 때는 따뜻한 외투를 입으렴.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[최종 골든벨 문제] 다음 우리말에 맞도록 주어진 단어 카드를 순서대로 바르게 배열하세요.\n우리말: \"건강이 가장 중요한 보물이야.\"",
        "chips": [
          "Health",
          "is",
          "the",
          "most",
          "important",
          "treasure."
        ],
        "correctAnswer": "Health is the most important treasure.",
        "explanation": "'Health is the most important treasure.'은 '건강이 가장 중요한 보물이야.'을 의미하는 핵심 문장입니다."
      }
    ]
  },
  "6G_L12": {
    "name": "12단원: 제안하기와 여가 활동 (Why don't we go to the park? / Shall we?)",
    "grade": 6,
    "theme": "Making Suggestions & Leisure Activities",
    "totalQuestions": 100,
    "questions": [
      {
        "id": 1,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Why don't we go to the sunny city park this Saturday afternoon? Sarah: Sounds like a wonderful idea!!",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, 두 사람이 함께하기로 한 여가 활동과 시간은?",
        "options": [
          "약속을 취소하고 쉬기",
          "화창한 도시 공원에 가다 (이번 주 토요일 오후)",
          "집에서 각자 공부하기",
          "주말에 학원 보충 수업 듣기"
        ],
        "correctIndex": 1,
        "correctAnswer": "화창한 도시 공원에 가다 (이번 주 토요일 오후)",
        "explanation": "'Why don't we go to the sunny city park'입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kelly: Why don't we play badminton at the school gym after classes finish? Jisu: Sure, let's meet at two o'clock!",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, 두 사람이 함께하기로 한 여가 활동과 시간은?",
        "options": [
          "학교 체육관에서 배드민턴을 치다 (수업이 끝난 후)",
          "집에서 각자 공부하기",
          "주말에 학원 보충 수업 듣기",
          "약속을 취소하고 쉬기"
        ],
        "correctIndex": 0,
        "correctAnswer": "학교 체육관에서 배드민턴을 치다 (수업이 끝난 후)",
        "explanation": "'Why don't we play badminton at the school gym'입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "David: Why don't we watch an exciting animation movie this Sunday morning? Kevin: I would love to, but I have a test!",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, 두 사람이 함께하기로 한 여가 활동과 시간은?",
        "options": [
          "신나는 애니메이션 영화를 보다 (이번 주 일요일 아침)",
          "약속을 취소하고 쉬기",
          "주말에 학원 보충 수업 듣기",
          "집에서 각자 공부하기"
        ],
        "correctIndex": 0,
        "correctAnswer": "신나는 애니메이션 영화를 보다 (이번 주 일요일 아침)",
        "explanation": "'Why don't we watch an exciting animation movie'입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Sarah: Why don't we ride our bicycles along the river tomorrow after lunch? Emma: That sounds fantastic and healthy!",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, 두 사람이 함께하기로 한 여가 활동과 시간은?",
        "options": [
          "약속을 취소하고 쉬기",
          "강변을 따라 자전거를 타다 (내일 점심 식사 후)",
          "집에서 각자 공부하기",
          "주말에 학원 보충 수업 듣기"
        ],
        "correctIndex": 1,
        "correctAnswer": "강변을 따라 자전거를 타다 (내일 점심 식사 후)",
        "explanation": "'Why don't we ride our bicycles along the river'입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Jisu: Why don't we bake sweet strawberry cupcakes together on Friday evening? Tom: Great! I will bring fresh strawberries!",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, 두 사람이 함께하기로 한 여가 활동과 시간은?",
        "options": [
          "달콤한 딸기 컵케이크를 함께 굽다 (금요일 저녁)",
          "집에서 각자 공부하기",
          "주말에 학원 보충 수업 듣기",
          "약속을 취소하고 쉬기"
        ],
        "correctIndex": 0,
        "correctAnswer": "달콤한 딸기 컵케이크를 함께 굽다 (금요일 저녁)",
        "explanation": "'Why don't we bake sweet strawberry cupcakes together'입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kevin: Why don't we play fun board games at my house this weekend? Hana: Sounds fun! I will bring my favorite game!",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, 두 사람이 함께하기로 한 여가 활동과 시간은?",
        "options": [
          "주말에 학원 보충 수업 듣기",
          "집에서 각자 공부하기",
          "우리 집에서 재미있는 보드게임을 하다 (이번 주말)",
          "약속을 취소하고 쉬기"
        ],
        "correctIndex": 2,
        "correctAnswer": "우리 집에서 재미있는 보드게임을 하다 (이번 주말)",
        "explanation": "'Why don't we play fun board games at my house'입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Emma: Why don't we go to the sunny city park this Saturday afternoon? Brian: Sounds like a wonderful idea!!",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, 두 사람이 함께하기로 한 여가 활동과 시간은?",
        "options": [
          "화창한 도시 공원에 가다 (이번 주 토요일 오후)",
          "집에서 각자 공부하기",
          "주말에 학원 보충 수업 듣기",
          "약속을 취소하고 쉬기"
        ],
        "correctIndex": 0,
        "correctAnswer": "화창한 도시 공원에 가다 (이번 주 토요일 오후)",
        "explanation": "'Why don't we go to the sunny city park'입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Tom: Why don't we play badminton at the school gym after classes finish? Amy: Sure, let's meet at two o'clock!",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, 두 사람이 함께하기로 한 여가 활동과 시간은?",
        "options": [
          "약속을 취소하고 쉬기",
          "주말에 학원 보충 수업 듣기",
          "집에서 각자 공부하기",
          "학교 체육관에서 배드민턴을 치다 (수업이 끝난 후)"
        ],
        "correctIndex": 3,
        "correctAnswer": "학교 체육관에서 배드민턴을 치다 (수업이 끝난 후)",
        "explanation": "'Why don't we play badminton at the school gym'입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Hana: Why don't we watch an exciting animation movie this Sunday morning? Paul: I would love to, but I have a test!",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, 두 사람이 함께하기로 한 여가 활동과 시간은?",
        "options": [
          "약속을 취소하고 쉬기",
          "주말에 학원 보충 수업 듣기",
          "집에서 각자 공부하기",
          "신나는 애니메이션 영화를 보다 (이번 주 일요일 아침)"
        ],
        "correctIndex": 3,
        "correctAnswer": "신나는 애니메이션 영화를 보다 (이번 주 일요일 아침)",
        "explanation": "'Why don't we watch an exciting animation movie'입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Brian: Why don't we ride our bicycles along the river tomorrow after lunch? Minsoo: That sounds fantastic and healthy!",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, 두 사람이 함께하기로 한 여가 활동과 시간은?",
        "options": [
          "약속을 취소하고 쉬기",
          "주말에 학원 보충 수업 듣기",
          "집에서 각자 공부하기",
          "강변을 따라 자전거를 타다 (내일 점심 식사 후)"
        ],
        "correctIndex": 3,
        "correctAnswer": "강변을 따라 자전거를 타다 (내일 점심 식사 후)",
        "explanation": "'Why don't we ride our bicycles along the river'입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Amy: Why don't we bake sweet strawberry cupcakes together on Friday evening? Kelly: Great! I will bring fresh strawberries!",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, 두 사람이 함께하기로 한 여가 활동과 시간은?",
        "options": [
          "달콤한 딸기 컵케이크를 함께 굽다 (금요일 저녁)",
          "집에서 각자 공부하기",
          "주말에 학원 보충 수업 듣기",
          "약속을 취소하고 쉬기"
        ],
        "correctIndex": 0,
        "correctAnswer": "달콤한 딸기 컵케이크를 함께 굽다 (금요일 저녁)",
        "explanation": "'Why don't we bake sweet strawberry cupcakes together'입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Paul: Why don't we play fun board games at my house this weekend? David: Sounds fun! I will bring my favorite game!",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, 두 사람이 함께하기로 한 여가 활동과 시간은?",
        "options": [
          "주말에 학원 보충 수업 듣기",
          "집에서 각자 공부하기",
          "약속을 취소하고 쉬기",
          "우리 집에서 재미있는 보드게임을 하다 (이번 주말)"
        ],
        "correctIndex": 3,
        "correctAnswer": "우리 집에서 재미있는 보드게임을 하다 (이번 주말)",
        "explanation": "'Why don't we play fun board games at my house'입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Let's meet in front of the school gate. Sarah: I completely agree with you!",
        "question": "[듣기 · 12단원] 대화에서 Minsoo이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "학교 정문 앞에서 만나자.",
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 0,
        "correctAnswer": "학교 정문 앞에서 만나자.",
        "explanation": "'Let's meet in front of the school gate.'은 '학교 정문 앞에서 만나자.'을 의미합니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kelly: Why don't we play board games? Jisu: I completely agree with you!",
        "question": "[듣기 · 12단원] 대화에서 Kelly이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "우리 보드게임 하는 거 어때?",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 2,
        "correctAnswer": "우리 보드게임 하는 거 어때?",
        "explanation": "'Why don't we play board games?'은 '우리 보드게임 하는 거 어때?'을 의미합니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "David: I can't wait for this weekend! Kevin: I completely agree with you!",
        "question": "[듣기 · 12단원] 대화에서 David이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "이번 주말이 정말 기대돼!",
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자."
        ],
        "correctIndex": 0,
        "correctAnswer": "이번 주말이 정말 기대돼!",
        "explanation": "'I can't wait for this weekend!'은 '이번 주말이 정말 기대돼!'을 의미합니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Sarah: Why don't we go to the park? Emma: I completely agree with you!",
        "question": "[듣기 · 12단원] 대화에서 Sarah이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "우리 공원에 가는 게 어때?",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "우리 공원에 가는 게 어때?",
        "explanation": "'Why don't we go to the park?'은 '우리 공원에 가는 게 어때?'을 의미합니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Jisu: Sounds like a great idea! Tom: I completely agree with you!",
        "question": "[듣기 · 12단원] 대화에서 Jisu이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "좋은 생각이야!",
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 0,
        "correctAnswer": "좋은 생각이야!",
        "explanation": "'Sounds like a great idea!'은 '좋은 생각이야!'을 의미합니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kevin: Shall we play badminton together? Hana: I completely agree with you!",
        "question": "[듣기 · 12단원] 대화에서 Kevin이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "우리 같이 배드민턴 칠까?",
          "다음에 다시 이야기하자.",
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 0,
        "correctAnswer": "우리 같이 배드민턴 칠까?",
        "explanation": "'Shall we play badminton together?'은 '우리 같이 배드민턴 칠까?'을 의미합니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Emma: How about watching a movie this Saturday? Brian: I completely agree with you!",
        "question": "[듣기 · 12단원] 대화에서 Emma이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자.",
          "이번 주 토요일에 영화 보는 건 어때?"
        ],
        "correctIndex": 3,
        "correctAnswer": "이번 주 토요일에 영화 보는 건 어때?",
        "explanation": "'How about watching a movie this Saturday?'은 '이번 주 토요일에 영화 보는 건 어때?'을 의미합니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Tom: I am sorry, but I am busy today. Amy: I completely agree with you!",
        "question": "[듣기 · 12단원] 대화에서 Tom이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "미안하지만 오늘은 내가 바빠.",
          "다음에 다시 이야기하자.",
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 0,
        "correctAnswer": "미안하지만 오늘은 내가 바빠.",
        "explanation": "'I am sorry, but I am busy today.'은 '미안하지만 오늘은 내가 바빠.'을 의미합니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Hana: Let's ride our bicycles together. Paul: I completely agree with you!",
        "question": "[듣기 · 12단원] 대화에서 Hana이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "우리 같이 자전거 타자.",
          "나는 잘 모르겠어.",
          "그것은 좋은 생각이 아니야.",
          "다음에 다시 이야기하자."
        ],
        "correctIndex": 0,
        "correctAnswer": "우리 같이 자전거 타자.",
        "explanation": "'Let's ride our bicycles together.'은 '우리 같이 자전거 타자.'을 의미합니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Brian: Sure, when shall we meet? Minsoo: I completely agree with you!",
        "question": "[듣기 · 12단원] 대화에서 Brian이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "좋아, 우리 언제 만날까?",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야.",
          "나는 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "좋아, 우리 언제 만날까?",
        "explanation": "'Sure, when shall we meet?'은 '좋아, 우리 언제 만날까?'을 의미합니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Amy: Why don't we bake cupcakes? Kelly: I completely agree with you!",
        "question": "[듣기 · 12단원] 대화에서 Amy이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "우리 컵케이크 굽는 거 어때?",
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야."
        ],
        "correctIndex": 0,
        "correctAnswer": "우리 컵케이크 굽는 거 어때?",
        "explanation": "'Why don't we bake cupcakes?'은 '우리 컵케이크 굽는 거 어때?'을 의미합니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Paul: That sounds like a lot of fun. David: I completely agree with you!",
        "question": "[듣기 · 12단원] 대화에서 Paul이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 잘 모르겠어.",
          "다음에 다시 이야기하자.",
          "그것은 좋은 생각이 아니야.",
          "정말 재미있겠다."
        ],
        "correctIndex": 3,
        "correctAnswer": "정말 재미있겠다.",
        "explanation": "'That sounds like a lot of fun.'은 '정말 재미있겠다.'을 의미합니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Do you know the meaning of 'busy'? Sarah: Yes, it means '바쁜'.",
        "question": "[듣기 · 12단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'busy'의 뜻은?",
        "options": [
          "바쁜",
          "생각, 아이디어",
          "함께",
          "공원"
        ],
        "correctIndex": 0,
        "correctAnswer": "바쁜",
        "explanation": "'busy'은 '바쁜'를 뜻합니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kelly: Do you know the meaning of 'bicycle'? Jisu: Yes, it means '자전거'.",
        "question": "[듣기 · 12단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'bicycle'의 뜻은?",
        "options": [
          "공원",
          "함께",
          "생각, 아이디어",
          "자전거"
        ],
        "correctIndex": 3,
        "correctAnswer": "자전거",
        "explanation": "'bicycle'은 '자전거'를 뜻합니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "David: Do you know the meaning of 'cupcake'? Kevin: Yes, it means '컵케이크'.",
        "question": "[듣기 · 12단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'cupcake'의 뜻은?",
        "options": [
          "컵케이크",
          "생각, 아이디어",
          "함께",
          "공원"
        ],
        "correctIndex": 0,
        "correctAnswer": "컵케이크",
        "explanation": "'cupcake'은 '컵케이크'를 뜻합니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Sarah: Do you know the meaning of 'game'? Emma: Yes, it means '게임'.",
        "question": "[듣기 · 12단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'game'의 뜻은?",
        "options": [
          "게임",
          "공원",
          "생각, 아이디어",
          "함께"
        ],
        "correctIndex": 0,
        "correctAnswer": "게임",
        "explanation": "'game'은 '게임'를 뜻합니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Jisu: Do you know the meaning of 'meet'? Tom: Yes, it means '만나다'.",
        "question": "[듣기 · 12단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'meet'의 뜻은?",
        "options": [
          "만나다",
          "공원",
          "함께",
          "생각, 아이디어"
        ],
        "correctIndex": 0,
        "correctAnswer": "만나다",
        "explanation": "'meet'은 '만나다'를 뜻합니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kevin: Do you know the meaning of 'fantastic'? Hana: Yes, it means '환상적인'.",
        "question": "[듣기 · 12단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'fantastic'의 뜻은?",
        "options": [
          "환상적인",
          "생각, 아이디어",
          "공원",
          "함께"
        ],
        "correctIndex": 0,
        "correctAnswer": "환상적인",
        "explanation": "'fantastic'은 '환상적인'를 뜻합니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Emma: Do you know the meaning of 'idea'? Brian: Yes, it means '생각, 아이디어'.",
        "question": "[듣기 · 12단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'idea'의 뜻은?",
        "options": [
          "생각, 아이디어",
          "공원",
          "함께",
          "영화"
        ],
        "correctIndex": 0,
        "correctAnswer": "생각, 아이디어",
        "explanation": "'idea'은 '생각, 아이디어'를 뜻합니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Tom: Do you know the meaning of 'together'? Amy: Yes, it means '함께'.",
        "question": "[듣기 · 12단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'together'의 뜻은?",
        "options": [
          "함께",
          "생각, 아이디어",
          "공원",
          "영화"
        ],
        "correctIndex": 0,
        "correctAnswer": "함께",
        "explanation": "'together'은 '함께'를 뜻합니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Hana: Do you know the meaning of 'park'? Paul: Yes, it means '공원'.",
        "question": "[듣기 · 12단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'park'의 뜻은?",
        "options": [
          "함께",
          "영화",
          "공원",
          "생각, 아이디어"
        ],
        "correctIndex": 2,
        "correctAnswer": "공원",
        "explanation": "'park'은 '공원'를 뜻합니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Brian: Do you know the meaning of 'movie'? Minsoo: Yes, it means '영화'.",
        "question": "[듣기 · 12단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'movie'의 뜻은?",
        "options": [
          "영화",
          "생각, 아이디어",
          "함께",
          "공원"
        ],
        "correctIndex": 0,
        "correctAnswer": "영화",
        "explanation": "'movie'은 '영화'를 뜻합니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Amy: Do you know the meaning of 'badminton'? Kelly: Yes, it means '배드민턴'.",
        "question": "[듣기 · 12단원] 대화에서 두 사람이 이야기하고 있는 영어 단어 'badminton'의 뜻은?",
        "options": [
          "공원",
          "배드민턴",
          "생각, 아이디어",
          "함께"
        ],
        "correctIndex": 1,
        "correctAnswer": "배드민턴",
        "explanation": "'badminton'은 '배드민턴'를 뜻합니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Minsoo. Shall we play badminton together? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Minsoo. Shall we play badminton together? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "우리 같이 배드민턴 칠까?",
          "길을 잃어버려서 헤매고 있다.",
          "학교 숙제가 너무 많아서 피곤하다."
        ],
        "correctIndex": 1,
        "correctAnswer": "우리 같이 배드민턴 칠까?",
        "explanation": "'Shall we play badminton together?'(우리 같이 배드민턴 칠까?)이 핵심 문장입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kelly. How about watching a movie this Saturday? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kelly. How about watching a movie this Saturday? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "이번 주 토요일에 영화 보는 건 어때?"
        ],
        "correctIndex": 3,
        "correctAnswer": "이번 주 토요일에 영화 보는 건 어때?",
        "explanation": "'How about watching a movie this Saturday?'(이번 주 토요일에 영화 보는 건 어때?)이 핵심 문장입니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is David. I am sorry, but I am busy today. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is David. I am sorry, but I am busy today. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "미안하지만 오늘은 내가 바빠.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다.",
          "학교 숙제가 너무 많아서 피곤하다."
        ],
        "correctIndex": 0,
        "correctAnswer": "미안하지만 오늘은 내가 바빠.",
        "explanation": "'I am sorry, but I am busy today.'(미안하지만 오늘은 내가 바빠.)이 핵심 문장입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Sarah. Let's ride our bicycles together. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Sarah. Let's ride our bicycles together. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "우리 같이 자전거 타자.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "우리 같이 자전거 타자.",
        "explanation": "'Let's ride our bicycles together.'(우리 같이 자전거 타자.)이 핵심 문장입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Jisu. Sure, when shall we meet? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Jisu. Sure, when shall we meet? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Jisu이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "좋아, 우리 언제 만날까?",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "좋아, 우리 언제 만날까?",
        "explanation": "'Sure, when shall we meet?'(좋아, 우리 언제 만날까?)이 핵심 문장입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kevin. Why don't we bake cupcakes? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kevin. Why don't we bake cupcakes? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kevin이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "우리 컵케이크 굽는 거 어때?",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 2,
        "correctAnswer": "우리 컵케이크 굽는 거 어때?",
        "explanation": "'Why don't we bake cupcakes?'(우리 컵케이크 굽는 거 어때?)이 핵심 문장입니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Emma. That sounds like a lot of fun. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Emma. That sounds like a lot of fun. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Emma이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "정말 재미있겠다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 2,
        "correctAnswer": "정말 재미있겠다.",
        "explanation": "'That sounds like a lot of fun.'(정말 재미있겠다.)이 핵심 문장입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Tom. How about studying at the library? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Tom. How about studying at the library? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Tom이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "도서관에서 공부하는 건 어때?",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 1,
        "correctAnswer": "도서관에서 공부하는 건 어때?",
        "explanation": "'How about studying at the library?'(도서관에서 공부하는 건 어때?)이 핵심 문장입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Hana. I would love to join you. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Hana. I would love to join you. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Hana이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "나도 너희와 꼭 함께하고 싶어.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다.",
          "학교 숙제가 너무 많아서 피곤하다."
        ],
        "correctIndex": 0,
        "correctAnswer": "나도 너희와 꼭 함께하고 싶어.",
        "explanation": "'I would love to join you.'(나도 너희와 꼭 함께하고 싶어.)이 핵심 문장입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Brian. Shall we practice English together? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Brian. Shall we practice English together? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Brian이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "우리 영어 연습 같이 할까?",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 1,
        "correctAnswer": "우리 영어 연습 같이 할까?",
        "explanation": "'Shall we practice English together?'(우리 영어 연습 같이 할까?)이 핵심 문장입니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Amy. Let's meet in front of the school gate. It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Amy. Let's meet in front of the school gate. It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Amy이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "학교 정문 앞에서 만나자.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다.",
          "학교 숙제가 너무 많아서 피곤하다."
        ],
        "correctIndex": 0,
        "correctAnswer": "학교 정문 앞에서 만나자.",
        "explanation": "'Let's meet in front of the school gate.'(학교 정문 앞에서 만나자.)이 핵심 문장입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Paul. Why don't we play board games? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Paul. Why don't we play board games? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Paul이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "우리 보드게임 하는 거 어때?",
          "길을 잃어버려서 헤매고 있다.",
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다."
        ],
        "correctIndex": 0,
        "correctAnswer": "우리 보드게임 하는 거 어때?",
        "explanation": "'Why don't we play board games?'(우리 보드게임 하는 거 어때?)이 핵심 문장입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Minsoo. I can't wait for this weekend! It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Minsoo. I can't wait for this weekend! It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 나쁘다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "길을 잃어버려서 헤매고 있다.",
          "이번 주말이 정말 기대돼!"
        ],
        "correctIndex": 3,
        "correctAnswer": "이번 주말이 정말 기대돼!",
        "explanation": "'I can't wait for this weekend!'(이번 주말이 정말 기대돼!)이 핵심 문장입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is Kelly. Why don't we go to the park? It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is Kelly. Why don't we go to the park? It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "우리 공원에 가는 게 어때?",
          "학교 숙제가 너무 많아서 피곤하다.",
          "친구와 다투어서 기분이 나쁘다.",
          "길을 잃어버려서 헤매고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "우리 공원에 가는 게 어때?",
        "explanation": "'Why don't we go to the park?'(우리 공원에 가는 게 어때?)이 핵심 문장입니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello, my name is David. Sounds like a great idea! It makes me feel very special and wonderful every day.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello, my name is David. Sounds like a great idea! It makes me feel very special and wonderful every day.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어버려서 헤매고 있다.",
          "학교 숙제가 너무 많아서 피곤하다.",
          "좋은 생각이야!",
          "친구와 다투어서 기분이 나쁘다."
        ],
        "correctIndex": 2,
        "correctAnswer": "좋은 생각이야!",
        "explanation": "'Sounds like a great idea!'(좋은 생각이야!)이 핵심 문장입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Sarah sent a message: \"Why don't we ride our bicycles along the river tomorrow after lunch?\" Friends answered, \"That sounds fantastic and healthy!\"",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Sarah sent a message: \"Why don't we ride our bicycles along the river tomorrow after lunch?\" Friends answered, \"That sounds fantastic and healthy!\"\"\n질문: 윗글에서 친구들이 함께하기로 약속한 여가 활동은?",
        "options": [
          "도서관에서 시험공부하기",
          "강변을 따라 자전거를 타다 (내일 점심 식사 후)",
          "학원 수업 들으러 가기",
          "약속을 미루고 집에서 쉬기"
        ],
        "correctIndex": 1,
        "correctAnswer": "강변을 따라 자전거를 타다 (내일 점심 식사 후)",
        "explanation": "지문의 'Sarah sent a message: \"Why don't we ride our bicycles along the river tomorrow after lunch?\" Friends answered, \"That sounds fantastic and healthy!\"'에 명시되어 있습니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Jisu sent a message: \"Why don't we bake sweet strawberry cupcakes together on Friday evening?\" Friends answered, \"Great! I will bring fresh strawberries!\"",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Jisu sent a message: \"Why don't we bake sweet strawberry cupcakes together on Friday evening?\" Friends answered, \"Great! I will bring fresh strawberries!\"\"\n질문: 윗글에서 친구들이 함께하기로 약속한 여가 활동은?",
        "options": [
          "학원 수업 들으러 가기",
          "도서관에서 시험공부하기",
          "달콤한 딸기 컵케이크를 함께 굽다 (금요일 저녁)",
          "약속을 미루고 집에서 쉬기"
        ],
        "correctIndex": 2,
        "correctAnswer": "달콤한 딸기 컵케이크를 함께 굽다 (금요일 저녁)",
        "explanation": "지문의 'Jisu sent a message: \"Why don't we bake sweet strawberry cupcakes together on Friday evening?\" Friends answered, \"Great! I will bring fresh strawberries!\"'에 명시되어 있습니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Kevin sent a message: \"Why don't we play fun board games at my house this weekend?\" Friends answered, \"Sounds fun! I will bring my favorite game!\"",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Kevin sent a message: \"Why don't we play fun board games at my house this weekend?\" Friends answered, \"Sounds fun! I will bring my favorite game!\"\"\n질문: 윗글에서 친구들이 함께하기로 약속한 여가 활동은?",
        "options": [
          "우리 집에서 재미있는 보드게임을 하다 (이번 주말)",
          "도서관에서 시험공부하기",
          "약속을 미루고 집에서 쉬기",
          "학원 수업 들으러 가기"
        ],
        "correctIndex": 0,
        "correctAnswer": "우리 집에서 재미있는 보드게임을 하다 (이번 주말)",
        "explanation": "지문의 'Kevin sent a message: \"Why don't we play fun board games at my house this weekend?\" Friends answered, \"Sounds fun! I will bring my favorite game!\"'에 명시되어 있습니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Emma sent a message: \"Why don't we go to the sunny city park this Saturday afternoon?\" Friends answered, \"Sounds like a wonderful idea!!\"",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Emma sent a message: \"Why don't we go to the sunny city park this Saturday afternoon?\" Friends answered, \"Sounds like a wonderful idea!!\"\"\n질문: 윗글에서 친구들이 함께하기로 약속한 여가 활동은?",
        "options": [
          "학원 수업 들으러 가기",
          "약속을 미루고 집에서 쉬기",
          "도서관에서 시험공부하기",
          "화창한 도시 공원에 가다 (이번 주 토요일 오후)"
        ],
        "correctIndex": 3,
        "correctAnswer": "화창한 도시 공원에 가다 (이번 주 토요일 오후)",
        "explanation": "지문의 'Emma sent a message: \"Why don't we go to the sunny city park this Saturday afternoon?\" Friends answered, \"Sounds like a wonderful idea!!\"'에 명시되어 있습니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Tom sent a message: \"Why don't we play badminton at the school gym after classes finish?\" Friends answered, \"Sure, let's meet at two o'clock!\"",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Tom sent a message: \"Why don't we play badminton at the school gym after classes finish?\" Friends answered, \"Sure, let's meet at two o'clock!\"\"\n질문: 윗글에서 친구들이 함께하기로 약속한 여가 활동은?",
        "options": [
          "약속을 미루고 집에서 쉬기",
          "도서관에서 시험공부하기",
          "학교 체육관에서 배드민턴을 치다 (수업이 끝난 후)",
          "학원 수업 들으러 가기"
        ],
        "correctIndex": 2,
        "correctAnswer": "학교 체육관에서 배드민턴을 치다 (수업이 끝난 후)",
        "explanation": "지문의 'Tom sent a message: \"Why don't we play badminton at the school gym after classes finish?\" Friends answered, \"Sure, let's meet at two o'clock!\"'에 명시되어 있습니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hana sent a message: \"Why don't we watch an exciting animation movie this Sunday morning?\" Friends answered, \"I would love to, but I have a test!\"",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Hana sent a message: \"Why don't we watch an exciting animation movie this Sunday morning?\" Friends answered, \"I would love to, but I have a test!\"\"\n질문: 윗글에서 친구들이 함께하기로 약속한 여가 활동은?",
        "options": [
          "도서관에서 시험공부하기",
          "학원 수업 들으러 가기",
          "약속을 미루고 집에서 쉬기",
          "신나는 애니메이션 영화를 보다 (이번 주 일요일 아침)"
        ],
        "correctIndex": 3,
        "correctAnswer": "신나는 애니메이션 영화를 보다 (이번 주 일요일 아침)",
        "explanation": "지문의 'Hana sent a message: \"Why don't we watch an exciting animation movie this Sunday morning?\" Friends answered, \"I would love to, but I have a test!\"'에 명시되어 있습니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Brian sent a message: \"Why don't we ride our bicycles along the river tomorrow after lunch?\" Friends answered, \"That sounds fantastic and healthy!\"",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Brian sent a message: \"Why don't we ride our bicycles along the river tomorrow after lunch?\" Friends answered, \"That sounds fantastic and healthy!\"\"\n질문: 윗글에서 친구들이 함께하기로 약속한 여가 활동은?",
        "options": [
          "강변을 따라 자전거를 타다 (내일 점심 식사 후)",
          "도서관에서 시험공부하기",
          "약속을 미루고 집에서 쉬기",
          "학원 수업 들으러 가기"
        ],
        "correctIndex": 0,
        "correctAnswer": "강변을 따라 자전거를 타다 (내일 점심 식사 후)",
        "explanation": "지문의 'Brian sent a message: \"Why don't we ride our bicycles along the river tomorrow after lunch?\" Friends answered, \"That sounds fantastic and healthy!\"'에 명시되어 있습니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Amy sent a message: \"Why don't we bake sweet strawberry cupcakes together on Friday evening?\" Friends answered, \"Great! I will bring fresh strawberries!\"",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Amy sent a message: \"Why don't we bake sweet strawberry cupcakes together on Friday evening?\" Friends answered, \"Great! I will bring fresh strawberries!\"\"\n질문: 윗글에서 친구들이 함께하기로 약속한 여가 활동은?",
        "options": [
          "도서관에서 시험공부하기",
          "학원 수업 들으러 가기",
          "달콤한 딸기 컵케이크를 함께 굽다 (금요일 저녁)",
          "약속을 미루고 집에서 쉬기"
        ],
        "correctIndex": 2,
        "correctAnswer": "달콤한 딸기 컵케이크를 함께 굽다 (금요일 저녁)",
        "explanation": "지문의 'Amy sent a message: \"Why don't we bake sweet strawberry cupcakes together on Friday evening?\" Friends answered, \"Great! I will bring fresh strawberries!\"'에 명시되어 있습니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Paul sent a message: \"Why don't we play fun board games at my house this weekend?\" Friends answered, \"Sounds fun! I will bring my favorite game!\"",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Paul sent a message: \"Why don't we play fun board games at my house this weekend?\" Friends answered, \"Sounds fun! I will bring my favorite game!\"\"\n질문: 윗글에서 친구들이 함께하기로 약속한 여가 활동은?",
        "options": [
          "약속을 미루고 집에서 쉬기",
          "우리 집에서 재미있는 보드게임을 하다 (이번 주말)",
          "도서관에서 시험공부하기",
          "학원 수업 들으러 가기"
        ],
        "correctIndex": 1,
        "correctAnswer": "우리 집에서 재미있는 보드게임을 하다 (이번 주말)",
        "explanation": "지문의 'Paul sent a message: \"Why don't we play fun board games at my house this weekend?\" Friends answered, \"Sounds fun! I will bring my favorite game!\"'에 명시되어 있습니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Minsoo sent a message: \"Why don't we go to the sunny city park this Saturday afternoon?\" Friends answered, \"Sounds like a wonderful idea!!\"",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Minsoo sent a message: \"Why don't we go to the sunny city park this Saturday afternoon?\" Friends answered, \"Sounds like a wonderful idea!!\"\"\n질문: 윗글에서 친구들이 함께하기로 약속한 여가 활동은?",
        "options": [
          "화창한 도시 공원에 가다 (이번 주 토요일 오후)",
          "도서관에서 시험공부하기",
          "약속을 미루고 집에서 쉬기",
          "학원 수업 들으러 가기"
        ],
        "correctIndex": 0,
        "correctAnswer": "화창한 도시 공원에 가다 (이번 주 토요일 오후)",
        "explanation": "지문의 'Minsoo sent a message: \"Why don't we go to the sunny city park this Saturday afternoon?\" Friends answered, \"Sounds like a wonderful idea!!\"'에 명시되어 있습니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'fantastic' is very frequently used. It means '환상적인' in Korean.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'fantastic' is very frequently used. It means '환상적인' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'fantastic'의 한국어 의미는?",
        "options": [
          "생각, 아이디어",
          "함께",
          "공원",
          "환상적인"
        ],
        "correctIndex": 3,
        "correctAnswer": "환상적인",
        "explanation": "'fantastic'은 '환상적인'입니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'idea' is very frequently used. It means '생각, 아이디어' in Korean.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'idea' is very frequently used. It means '생각, 아이디어' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'idea'의 한국어 의미는?",
        "options": [
          "함께",
          "생각, 아이디어",
          "영화",
          "공원"
        ],
        "correctIndex": 1,
        "correctAnswer": "생각, 아이디어",
        "explanation": "'idea'은 '생각, 아이디어'입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'together' is very frequently used. It means '함께' in Korean.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'together' is very frequently used. It means '함께' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'together'의 한국어 의미는?",
        "options": [
          "함께",
          "생각, 아이디어",
          "공원",
          "영화"
        ],
        "correctIndex": 0,
        "correctAnswer": "함께",
        "explanation": "'together'은 '함께'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'park' is very frequently used. It means '공원' in Korean.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'park' is very frequently used. It means '공원' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'park'의 한국어 의미는?",
        "options": [
          "공원",
          "함께",
          "영화",
          "생각, 아이디어"
        ],
        "correctIndex": 0,
        "correctAnswer": "공원",
        "explanation": "'park'은 '공원'입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'movie' is very frequently used. It means '영화' in Korean.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'movie' is very frequently used. It means '영화' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'movie'의 한국어 의미는?",
        "options": [
          "공원",
          "생각, 아이디어",
          "영화",
          "함께"
        ],
        "correctIndex": 2,
        "correctAnswer": "영화",
        "explanation": "'movie'은 '영화'입니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'badminton' is very frequently used. It means '배드민턴' in Korean.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'badminton' is very frequently used. It means '배드민턴' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'badminton'의 한국어 의미는?",
        "options": [
          "함께",
          "생각, 아이디어",
          "배드민턴",
          "공원"
        ],
        "correctIndex": 2,
        "correctAnswer": "배드민턴",
        "explanation": "'badminton'은 '배드민턴'입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'sound' is very frequently used. It means '들리다, 소리' in Korean.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'sound' is very frequently used. It means '들리다, 소리' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'sound'의 한국어 의미는?",
        "options": [
          "들리다, 소리",
          "생각, 아이디어",
          "함께",
          "공원"
        ],
        "correctIndex": 0,
        "correctAnswer": "들리다, 소리",
        "explanation": "'sound'은 '들리다, 소리'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'wonderful' is very frequently used. It means '멋진' in Korean.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'wonderful' is very frequently used. It means '멋진' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'wonderful'의 한국어 의미는?",
        "options": [
          "공원",
          "함께",
          "생각, 아이디어",
          "멋진"
        ],
        "correctIndex": 3,
        "correctAnswer": "멋진",
        "explanation": "'wonderful'은 '멋진'입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'weekend' is very frequently used. It means '주말' in Korean.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'weekend' is very frequently used. It means '주말' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'weekend'의 한국어 의미는?",
        "options": [
          "주말",
          "생각, 아이디어",
          "공원",
          "함께"
        ],
        "correctIndex": 0,
        "correctAnswer": "주말",
        "explanation": "'weekend'은 '주말'입니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Study: In English, the word 'afternoon' is very frequently used. It means '오후' in Korean.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Study: In English, the word 'afternoon' is very frequently used. It means '오후' in Korean.\"\n질문: 윗글에서 설명하고 있는 어휘 'afternoon'의 한국어 의미는?",
        "options": [
          "공원",
          "함께",
          "생각, 아이디어",
          "오후"
        ],
        "correctIndex": 3,
        "correctAnswer": "오후",
        "explanation": "'afternoon'은 '오후'입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 12단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"생각, 아이디어\" (단어 첫 글자: i, 총 4글자)",
        "correctAnswer": "idea",
        "explanation": "'생각, 아이디어'에 해당하는 영어 단어는 'idea'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 12단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"함께\" (단어 첫 글자: t, 총 8글자)",
        "correctAnswer": "together",
        "explanation": "'함께'에 해당하는 영어 단어는 'together'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 12단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"공원\" (단어 첫 글자: p, 총 4글자)",
        "correctAnswer": "park",
        "explanation": "'공원'에 해당하는 영어 단어는 'park'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 12단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"영화\" (단어 첫 글자: m, 총 5글자)",
        "correctAnswer": "movie",
        "explanation": "'영화'에 해당하는 영어 단어는 'movie'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 12단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"배드민턴\" (단어 첫 글자: b, 총 9글자)",
        "correctAnswer": "badminton",
        "explanation": "'배드민턴'에 해당하는 영어 단어는 'badminton'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 12단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"들리다, 소리\" (단어 첫 글자: s, 총 5글자)",
        "correctAnswer": "sound",
        "explanation": "'들리다, 소리'에 해당하는 영어 단어는 'sound'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 12단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"멋진\" (단어 첫 글자: w, 총 9글자)",
        "correctAnswer": "wonderful",
        "explanation": "'멋진'에 해당하는 영어 단어는 'wonderful'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 12단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"주말\" (단어 첫 글자: w, 총 7글자)",
        "correctAnswer": "weekend",
        "explanation": "'주말'에 해당하는 영어 단어는 'weekend'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 12단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"오후\" (단어 첫 글자: a, 총 9글자)",
        "correctAnswer": "afternoon",
        "explanation": "'오후'에 해당하는 영어 단어는 'afternoon'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 12단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"바쁜\" (단어 첫 글자: b, 총 4글자)",
        "correctAnswer": "busy",
        "explanation": "'바쁜'에 해당하는 영어 단어는 'busy'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 12단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"자전거\" (단어 첫 글자: b, 총 7글자)",
        "correctAnswer": "bicycle",
        "explanation": "'자전거'에 해당하는 영어 단어는 'bicycle'입니다."
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 12단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"컵케이크\" (단어 첫 글자: c, 총 7글자)",
        "correctAnswer": "cupcake",
        "explanation": "'컵케이크'에 해당하는 영어 단어는 'cupcake'입니다."
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 12단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"게임\" (단어 첫 글자: g, 총 4글자)",
        "correctAnswer": "game",
        "explanation": "'게임'에 해당하는 영어 단어는 'game'입니다."
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 12단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"만나다\" (단어 첫 글자: m, 총 4글자)",
        "correctAnswer": "meet",
        "explanation": "'만나다'에 해당하는 영어 단어는 'meet'입니다."
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 12단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"환상적인\" (단어 첫 글자: f, 총 9글자)",
        "correctAnswer": "fantastic",
        "explanation": "'환상적인'에 해당하는 영어 단어는 'fantastic'입니다."
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"우리 공원에 가는 게 어때?\"",
        "chips": [
          "Why",
          "don't",
          "we",
          "go",
          "to",
          "the",
          "park?"
        ],
        "correctAnswer": "Why don't we go to the park?",
        "explanation": "'Why don't we go to the park?'은 '우리 공원에 가는 게 어때?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"좋은 생각이야!\"",
        "chips": [
          "Sounds",
          "like",
          "a",
          "great",
          "idea."
        ],
        "correctAnswer": "Sounds like a great idea!",
        "explanation": "'Sounds like a great idea!'은 '좋은 생각이야!'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"우리 같이 배드민턴 칠까?\"",
        "chips": [
          "Shall",
          "we",
          "play",
          "badminton",
          "together?"
        ],
        "correctAnswer": "Shall we play badminton together?",
        "explanation": "'Shall we play badminton together?'은 '우리 같이 배드민턴 칠까?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"이번 주 토요일에 영화 보는 건 어때?\"",
        "chips": [
          "How",
          "about",
          "watching",
          "a",
          "movie",
          "this",
          "Saturday?"
        ],
        "correctAnswer": "How about watching a movie this Saturday?",
        "explanation": "'How about watching a movie this Saturday?'은 '이번 주 토요일에 영화 보는 건 어때?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"미안하지만 오늘은 내가 바빠.\"",
        "chips": [
          "I",
          "am",
          "sorry",
          "but",
          "I",
          "am",
          "busy",
          "today."
        ],
        "correctAnswer": "I am sorry, but I am busy today.",
        "explanation": "'I am sorry, but I am busy today.'은 '미안하지만 오늘은 내가 바빠.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"우리 같이 자전거 타자.\"",
        "chips": [
          "Let's",
          "ride",
          "our",
          "bicycles",
          "together."
        ],
        "correctAnswer": "Let's ride our bicycles together.",
        "explanation": "'Let's ride our bicycles together.'은 '우리 같이 자전거 타자.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"좋아, 우리 언제 만날까?\"",
        "chips": [
          "Sure",
          "when",
          "shall",
          "we",
          "meet?"
        ],
        "correctAnswer": "Sure, when shall we meet?",
        "explanation": "'Sure, when shall we meet?'은 '좋아, 우리 언제 만날까?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"우리 컵케이크 굽는 거 어때?\"",
        "chips": [
          "Why",
          "don't",
          "we",
          "bake",
          "cupcakes?"
        ],
        "correctAnswer": "Why don't we bake cupcakes?",
        "explanation": "'Why don't we bake cupcakes?'은 '우리 컵케이크 굽는 거 어때?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"정말 재미있겠다.\"",
        "chips": [
          "That",
          "sounds",
          "like",
          "a",
          "lot",
          "of",
          "fun."
        ],
        "correctAnswer": "That sounds like a lot of fun.",
        "explanation": "'That sounds like a lot of fun.'은 '정말 재미있겠다.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"도서관에서 공부하는 건 어때?\"",
        "chips": [
          "How",
          "about",
          "studying",
          "at",
          "the",
          "library?"
        ],
        "correctAnswer": "How about studying at the library?",
        "explanation": "'How about studying at the library?'은 '도서관에서 공부하는 건 어때?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 96,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"나도 너희와 꼭 함께하고 싶어.\"",
        "chips": [
          "I",
          "would",
          "love",
          "to",
          "join",
          "you."
        ],
        "correctAnswer": "I would love to join you.",
        "explanation": "'I would love to join you.'은 '나도 너희와 꼭 함께하고 싶어.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 97,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"우리 영어 연습 같이 할까?\"",
        "chips": [
          "Shall",
          "we",
          "practice",
          "English",
          "together?"
        ],
        "correctAnswer": "Shall we practice English together?",
        "explanation": "'Shall we practice English together?'은 '우리 영어 연습 같이 할까?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 98,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"학교 정문 앞에서 만나자.\"",
        "chips": [
          "Let's",
          "meet",
          "in",
          "front",
          "of",
          "the",
          "school",
          "gate."
        ],
        "correctAnswer": "Let's meet in front of the school gate.",
        "explanation": "'Let's meet in front of the school gate.'은 '학교 정문 앞에서 만나자.'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 99,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 영어 문장을 완성하세요.\n우리말: \"우리 보드게임 하는 거 어때?\"",
        "chips": [
          "Why",
          "don't",
          "we",
          "play",
          "board",
          "games?"
        ],
        "correctAnswer": "Why don't we play board games?",
        "explanation": "'Why don't we play board games?'은 '우리 보드게임 하는 거 어때?'을 의미하는 핵심 문장입니다."
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[최종 골든벨 문제] 다음 우리말에 맞도록 주어진 단어 카드를 순서대로 바르게 배열하세요.\n우리말: \"이번 주말이 정말 기대돼!\"",
        "chips": [
          "I",
          "can't",
          "wait",
          "for",
          "this",
          "weekend."
        ],
        "correctAnswer": "I can't wait for this weekend!",
        "explanation": "'I can't wait for this weekend!'은 '이번 주말이 정말 기대돼!'을 의미하는 핵심 문장입니다."
      }
    ]
  }
};

    // ────────────────────────────────────────────────────────
    // 2. 교사용 지도서 엄선 20문제 고정 마스터 프리셋 (CURRICULUM_20)
    // ────────────────────────────────────────────────────────
    const MASTER_20_HIGH_LEVEL = [
        {
            id: 1,
            domain: "듣기",
            domainIcon: "🎧",
            difficulty: "★☆☆",
            type: "listening_choice",
            audioText: "A: What grade are you in? B: I am in the sixth grade. How about you? A: I am in the fifth grade.",
            question: "[듣기 · 1단원] 대화를 듣고, B의 학년으로 알맞은 것을 고르세요.",
            options: ["5학년", "6학년", "4학년", "3학년"],
            correctIndex: 1,
            correctAnswer: "6학년",
            explanation: "B는 'I am in the sixth grade(나는 6학년이야)'라고 말했습니다."
        },
        {
            id: 2,
            domain: "듣기",
            domainIcon: "🎧",
            difficulty: "★☆☆",
            type: "listening_choice",
            audioText: "A: What is your favorite season? B: My favorite season is fall because I can see colorful leaves.",
            question: "[듣기 · 2단원] 대화를 듣고, B가 가장 좋아하는 계절을 고르세요.",
            options: ["봄 (Spring)", "여름 (Summer)", "가을 (Fall)", "겨울 (Winter)"],
            correctIndex: 2,
            correctAnswer: "가을 (Fall)",
            explanation: "'My favorite season is fall(가장 좋아하는 계절은 가을이야)'라고 했습니다."
        },
        {
            id: 3,
            domain: "듣기",
            domainIcon: "🎧",
            difficulty: "★★☆",
            type: "listening_choice",
            audioText: "A: What will you do this summer? B: I will go camping in the forest with my parents.",
            question: "[듣기 · 3단원] 대화를 듣고, B의 방학 계획으로 알맞은 것을 고르세요.",
            options: ["부산 할머니 댁 방문하기", "깊은 숲으로 캠핑 가기", "바다에서 서핑하기", "집에서 책 읽기"],
            correctIndex: 1,
            correctAnswer: "깊은 숲으로 캠핑 가기",
            explanation: "'go camping in the forest'는 숲으로 캠핑을 간다는 뜻입니다."
        },
        {
            id: 4,
            domain: "듣기",
            domainIcon: "🎧",
            difficulty: "★★☆",
            type: "listening_choice",
            audioText: "A: Excuse me, where is the ticket office? B: Go straight two blocks and turn left. It is on your right.",
            question: "[듣기 · 4단원] 대화를 듣고, 매표소(ticket office)의 위치로 올바른 안내를 고르세요.",
            options: ["한 블록 직진 후 우회전하여 왼쪽", "두 블록 직진 후 좌회전하여 오른쪽", "신호등에서 길을 건너 맞은편", "지하철역 3번 출구 앞"],
            correctIndex: 1,
            correctAnswer: "두 블록 직진 후 좌회전하여 오른쪽",
            explanation: "'Go straight two blocks and turn left. It is on your right.'입니다."
        },
        {
            id: 5,
            domain: "듣기",
            domainIcon: "🎧",
            difficulty: "★★☆",
            type: "listening_choice",
            audioText: "A: What does your English teacher look like? B: She has long straight black hair and wears glasses.",
            question: "[듣기 · 5단원] 대화를 듣고, 영어 선생님의 외모 묘사로 일치하는 것을 고르세요.",
            options: ["짧은 갈색 곱슬머리에 모자 착용", "긴 검은 생머리에 안경 착용", "웨이브 금발에 키가 작음", "단발머리에 선글라스 착용"],
            correctIndex: 1,
            correctAnswer: "긴 검은 생머리에 안경 착용",
            explanation: "'long straight black hair and wears glasses'라고 설명했습니다."
        },
        {
            id: 6,
            domain: "듣기",
            domainIcon: "🎧",
            difficulty: "★★☆",
            type: "listening_choice",
            audioText: "A: Why are you so happy, Minsoo? B: Because today is my twelfth birthday!",
            question: "[듣기 · 6단원] 대화를 듣고, 민수가 기뻐하는 이유로 알맞은 것을 고르세요.",
            options: ["축구 경기에서 이겨서", "오늘이 12번째 생일이어서", "방학이 시작되어서", "새 신발을 선물 받아서"],
            correctIndex: 1,
            correctAnswer: "오늘이 12번째 생일이어서",
            explanation: "'Because today is my twelfth birthday'입니다."
        },
        {
            id: 7,
            domain: "듣기",
            domainIcon: "🎧",
            difficulty: "★★★",
            type: "listening_choice",
            audioText: "A: Have you ever visited Dokdo? B: Yes, I have. The view of the Korean flag waving on the island was magnificent.",
            question: "[듣기 · 7단원] 대화를 듣고, B가 경험한 일로 알맞은 것을 고르세요.",
            options: ["독도를 직접 방문해 보았다", "한라산 백록담에 올라갔다", "경주 불국사를 둘러보았다", "해운대에서 요트를 탔다"],
            correctIndex: 0,
            correctAnswer: "독도를 직접 방문해 보았다",
            explanation: "'Have you ever visited Dokdo? Yes, I have.'입니다."
        },
        {
            id: 8,
            domain: "읽기",
            domainIcon: "📖",
            difficulty: "★☆☆",
            type: "reading_choice",
            subtext: "A cheetah can run about 100 kilometers per hour. A lion runs about 80 kilometers per hour. Therefore, a cheetah is faster than a lion.",
            question: "[읽기 · 8단원] 윗글의 내용과 일치하는 문장을 고르세요.",
            options: ["A lion is faster than a cheetah.", "A cheetah is faster than a lion.", "A lion runs 100 kilometers per hour.", "Both animals have the exact same speed."],
            correctIndex: 1,
            correctAnswer: "A cheetah is faster than a lion.",
            explanation: "치타는 시속 100km, 사자는 80km이므로 치타가 사자보다 더 빠릅니다."
        },
        {
            id: 9,
            domain: "읽기",
            domainIcon: "📖",
            difficulty: "★★☆",
            type: "reading_choice",
            subtext: "We should protect our beautiful planet. Please turn off the lights when leaving the classroom, and don't waste clean water.",
            question: "[읽기 · 9단원] 윗글에서 권장하는 환경 보호 실천 행동으로 알맞은 것은?",
            options: ["교실을 나갈 때 전등 끄기", "종이컵을 일회용으로 쓰기", "항상 자동차로 통학하기", "수돗물을 틀어놓고 양치하기"],
            correctIndex: 0,
            correctAnswer: "교실을 나갈 때 전등 끄기",
            explanation: "'turn off the lights when leaving the classroom'이 언급되었습니다."
        },
        {
            id: 10,
            domain: "읽기",
            domainIcon: "📖",
            difficulty: "★★☆",
            type: "reading_choice",
            subtext: "Customer: How much is this blue jacket? Clerk: It is thirty-five dollars. It keeps you warm in the cold winter.",
            question: "[읽기 · 10단원] 대화문에서 손님이 문의한 파란 재킷의 가격은 얼마인가요?",
            options: ["25달러", "30달러", "35달러", "45달러"],
            correctIndex: 2,
            correctAnswer: "35달러",
            explanation: "'thirty-five dollars'는 35달러입니다."
        },
        {
            id: 11,
            domain: "읽기",
            domainIcon: "📖",
            difficulty: "★★☆",
            type: "reading_choice",
            subtext: "Doctor: What is the matter with you, Kevin? Kevin: I have a terrible headache and a fever. Doctor: Take this medicine and get plenty of rest.",
            question: "[읽기 · 11단원] 의사 선생님이 케빈에게 내린 올바른 조언은 무엇인가요?",
            options: ["운동장에 나가서 축구를 하라", "이 약을 먹고 충분한 휴식을 취하라", "찬 음료수를 많이 마시라", "밤늦게까지 스마트폰을 보라"],
            correctIndex: 1,
            correctAnswer: "이 약을 먹고 충분한 휴식을 취하라",
            explanation: "'Take this medicine and get plenty of rest'입니다."
        },
        {
            id: 12,
            domain: "읽기",
            domainIcon: "📖",
            difficulty: "★★☆",
            type: "reading_choice",
            subtext: "Sarah: Why don't we go to the city park this Saturday? David: Sounds like a great idea! Let's ride our bicycles together.",
            question: "[읽기 · 12단원] 두 사람이 이번 주 토요일에 함께하기로 약속한 활동은?",
            options: ["영화관에서 애니메이션 보기", "도시 공원에서 자전거 타기", "도서관에서 과학 숙제하기", "수영장에서 수영 연습하기"],
            correctIndex: 1,
            correctAnswer: "도시 공원에서 자전거 타기",
            explanation: "'go to the city park'와 'ride our bicycles together'입니다."
        },
        {
            id: 13,
            domain: "읽기",
            domainIcon: "📖",
            difficulty: "★★★",
            type: "reading_choice",
            subtext: "Minsoo: Can you spell your English name? Sarah: Yes, it is S-A-R-A-H. Minsoo: Thank you! Welcome to the reading club.",
            question: "[읽기 · 1단원] 사라가 가입하여 환영받은 학교 동아리는 무엇인가요?",
            options: ["축구 동아리", "댄스 동아리", "독서 동아리 (reading club)", "로봇 동아리"],
            correctIndex: 2,
            correctAnswer: "독서 동아리 (reading club)",
            explanation: "'Welcome to the reading club'이라고 했습니다."
        },
        {
            id: 14,
            domain: "읽기",
            domainIcon: "📖",
            difficulty: "★★★",
            type: "reading_choice",
            subtext: "Hallasan is 1,950 meters high, while Jirisan is 1,915 meters high. Therefore, Hallasan is higher than Jirisan in South Korea.",
            question: "[읽기 · 8단원] 윗글의 내용을 바탕으로 빈칸에 들어갈 알맞은 비교 표현은?\n'Hallasan is ________ than Jirisan.'",
            options: ["higher", "lower", "smaller", "shorter"],
            correctIndex: 0,
            correctAnswer: "higher",
            explanation: "한라산(1,950m)이 지리산(1,915m)보다 더 높으므로 'higher'가 정답입니다."
        },
        {
            id: 15,
            domain: "쓰기",
            domainIcon: "✍️",
            difficulty: "★★☆",
            type: "writing_text",
            question: "[쓰기 · 단답형] '네 번째의'를 뜻하는 영어 서수 단어를 소문자로 정확히 입력하세요.",
            correctAnswer: "fourth",
            explanation: "4번째를 뜻하는 영어 서수는 fourth입니다."
        },
        {
            id: 16,
            domain: "쓰기",
            domainIcon: "✍️",
            difficulty: "★★☆",
            type: "writing_text",
            question: "[쓰기 · 단답형] 환경 보호에서 '재활용하다'를 뜻하는 영어 단어(r로 시작하는 7글자)를 소문자로 쓰세요.",
            correctAnswer: "recycle",
            explanation: "재활용하다는 recycle입니다."
        },
        {
            id: 17,
            domain: "쓰기",
            domainIcon: "✍️",
            difficulty: "★★☆",
            type: "writing_scramble",
            question: "[쓰기 · 문장 배열] 주어진 단어 카드를 순서대로 바르게 터치하여 문장을 완성하세요.\n우리말: '너는 몇 학년이니?'",
            chips: ["What", "grade", "are", "you", "in?"],
            correctAnswer: "What grade are you in?",
            explanation: "학년을 묻는 정규 표현은 'What grade are you in?'입니다."
        },
        {
            id: 18,
            domain: "쓰기",
            domainIcon: "✍️",
            difficulty: "★★★",
            type: "writing_scramble",
            question: "[쓰기 · 문장 배열] 주어진 단어 카드를 순서대로 바르게 터치하여 문장을 완성하세요.\n우리말: '기린은 코끼리보다 키가 더 커.'",
            chips: ["A", "giraffe", "is", "taller", "than", "an", "elephant."],
            correctAnswer: "A giraffe is taller than an elephant.",
            explanation: "비교급 문장 구조: 주어 + is + taller than + 비교 대상입니다."
        },
        {
            id: 19,
            domain: "쓰기",
            domainIcon: "✍️",
            difficulty: "★★★",
            type: "writing_scramble",
            question: "[쓰기 · 문장 배열] 주어진 단어 카드를 순서대로 바르게 터치하여 문장을 완성하세요.\n우리말: '우리 공원에 가는 게 어때?'",
            chips: ["Why", "don't", "we", "go", "to", "the", "park?"],
            correctAnswer: "Why don't we go to the park?",
            explanation: "제안하기 공식 표현: 'Why don't we + 동사원형'입니다."
        },
        {
            id: 20,
            domain: "골든벨",
            domainIcon: "🔔",
            difficulty: "★★★",
            type: "writing_scramble",
            question: "[최종 20번 골든벨] 다음 우리말 뜻에 맞도록 단어 카드를 순서대로 바르게 배열하세요!\n우리말: '우리는 아름다운 지구를 보호해야 해.'",
            chips: ["We", "should", "protect", "our", "beautiful", "Earth."],
            correctAnswer: "We should protect our beautiful Earth.",
            explanation: "'We should protect our beautiful Earth.'는 교과서 핵심 지도 목표 문장입니다."
        }
    ];

    // ────────────────────────────────────────────────────────
    // 3. 1,200문항 은행 기반 20문제 '완전 중복 배제' 스마트 추출 엔진
    // ────────────────────────────────────────────────────────
    function pickStrictUnique(pool, count, usedAnswers, usedAudios, usedQuestions) {
        const shuffled = [...pool].sort(() => Math.random() - 0.5);
        const selected = [];

        // 1차 패스: 정답(answer), 지문(audioText/subtext), 질문(question) 모두 겹치지 않는 문항만 엄격 선별
        for (const q of shuffled) {
            if (selected.length >= count) break;
            const ansKey = (q.correctAnswer || '').trim().toLowerCase();
            const audKey = (q.audioText || q.subtext || '').trim().toLowerCase();
            const qKey = (q.question || '').trim().toLowerCase();

            if (usedAnswers.has(ansKey) || usedAudios.has(audKey) || usedQuestions.has(qKey)) {
                continue;
            }

            selected.push(q);
            if (ansKey) usedAnswers.add(ansKey);
            if (audKey) usedAudios.add(audKey);
            if (qKey) usedQuestions.add(qKey);
        }

        // 2차 패스: 문항 수가 부족할 경우 최소한 정답이라도 겹치지 않는 문항 선별
        if (selected.length < count) {
            for (const q of shuffled) {
                if (selected.length >= count) break;
                if (selected.includes(q)) continue;
                const ansKey = (q.correctAnswer || '').trim().toLowerCase();
                if (usedAnswers.has(ansKey)) continue;

                selected.push(q);
                if (ansKey) usedAnswers.add(ansKey);
            }
        }

        // 3차 안전장치: 남은 자리 보충
        for (const q of shuffled) {
            if (selected.length >= count) break;
            if (!selected.includes(q)) {
                selected.push(q);
            }
        }

        return selected;
    }

    function loadQuestionsForPreset(presetCode) {
        // A. 교사용 지도서 고정 표준 세트
        if (presetCode === 'CURRICULUM_20') {
            return MASTER_20_HIGH_LEVEL.map((q, idx) => ({ ...q, id: idx + 1 }));
        }

        const usedAnswers = new Set();
        const usedAudios = new Set();
        const usedQuestions = new Set();

        const unitKeys = Object.keys(GOLDENBELL_1200_DATABASE);

        // B. 전체 단원 섞기 (1~12단원 1,200문항 중 무작위 20문제, 중복 0건 보장)
        if (presetCode === 'ALL_MIXED') {
            const allListening = [];
            const allReading = [];
            const allTextWriting = [];
            const allScrambleWriting = [];
            const allGoldenBells = [];

            unitKeys.forEach(k => {
                const u = GOLDENBELL_1200_DATABASE[k];
                if (Array.isArray(u.questions)) {
                    u.questions.forEach(q => {
                        if (q.domain === '듣기') allListening.push(q);
                        else if (q.domain === '읽기') allReading.push(q);
                        else if (q.domain === '쓰기' && q.type === 'writing_text') allTextWriting.push(q);
                        else if (q.domain === '쓰기' && q.type === 'writing_scramble') allScrambleWriting.push(q);
                        else if (q.domain === '골든벨') allGoldenBells.push(q);
                    });
                }
            });

            const pickedL = pickStrictUnique(allListening, 7, usedAnswers, usedAudios, usedQuestions);
            const pickedR = pickStrictUnique(allReading, 7, usedAnswers, usedAudios, usedQuestions);
            const pickedTW = pickStrictUnique(allTextWriting, 2, usedAnswers, usedAudios, usedQuestions);
            const pickedSW = pickStrictUnique(allScrambleWriting, 3, usedAnswers, usedAudios, usedQuestions);
            const pickedGB = pickStrictUnique(allGoldenBells.length > 0 ? allGoldenBells : allScrambleWriting, 1, usedAnswers, usedAudios, usedQuestions);

            const rawCombined = [...pickedL, ...pickedR, ...pickedTW, ...pickedSW, ...pickedGB];
            return rawCombined.slice(0, 20).map((q, idx) => {
                const clone = { ...q, id: idx + 1 };
                if (clone.type === 'writing_scramble' && Array.isArray(clone.chips)) {
                    clone.chips = [...clone.chips].sort(() => Math.random() - 0.5);
                }
                return clone;
            });
        }

        // C. 특정 개별 단원 선택 (해당 단원의 100문항 풀에서 20문제 엄격 고유 추출)
        const unitData = GOLDENBELL_1200_DATABASE[presetCode] || GOLDENBELL_1200_DATABASE['6G_L01'];
        const qPool = unitData.questions || [];

        const listeningPool = qPool.filter(q => q.domain === '듣기');
        const readingPool = qPool.filter(q => q.domain === '읽기');
        const textWritingPool = qPool.filter(q => q.domain === '쓰기' && q.type === 'writing_text');
        const scramblePool = qPool.filter(q => q.domain === '쓰기' && q.type === 'writing_scramble');
        const goldenPool = qPool.filter(q => q.domain === '골든벨');

        const pickedL = pickStrictUnique(listeningPool, 7, usedAnswers, usedAudios, usedQuestions);
        const pickedR = pickStrictUnique(readingPool, 7, usedAnswers, usedAudios, usedQuestions);
        const pickedTW = pickStrictUnique(textWritingPool, 2, usedAnswers, usedAudios, usedQuestions);
        const pickedSW = pickStrictUnique(scramblePool, 3, usedAnswers, usedAudios, usedQuestions);
        const pickedG = pickStrictUnique(goldenPool.length > 0 ? goldenPool : scramblePool, 1, usedAnswers, usedAudios, usedQuestions);

        const rawCombined = [...pickedL, ...pickedR, ...pickedTW, ...pickedSW, ...pickedG];
        return rawCombined.slice(0, 20).map((q, idx) => {
            const clone = { ...q, id: idx + 1 };
            if (clone.type === 'writing_scramble' && Array.isArray(clone.chips)) {
                clone.chips = [...clone.chips].sort(() => Math.random() - 0.5);
            }
            return clone;
        });
    }

    // ────────────────────────────────────────────────────────
    // 전역 window 바인딩
    // ────────────────────────────────────────────────────────
    window.GOLDENBELL_1200_DATABASE = GOLDENBELL_1200_DATABASE;
    window.GOLDENBELL_UNITS = GOLDENBELL_1200_DATABASE;
    window.MASTER_20_HIGH_LEVEL = MASTER_20_HIGH_LEVEL;
    window.loadGoldenBellQuestions = loadQuestionsForPreset;

})(typeof window !== 'undefined' ? window : global);
