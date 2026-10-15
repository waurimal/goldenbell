/**
 * goldenbell-data.js
 * 초등 영어 지도서 1~12단원 단원별 100문항 이상 (총 1,200문항 초대형 문제 은행) 및 랜덤 출제 엔진
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
        "question": "[듣기 · 1단원] 대화를 듣고, B의 학년으로 알맞은 것을 고르세요.",
        "options": [
          "1학년",
          "2학년",
          "3학년",
          "4학년"
        ],
        "correctIndex": 0,
        "correctAnswer": "1학년",
        "explanation": "'I am in the first grade'는 '1학년'를 뜻합니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Do you have plans after school? B: Yes, I want to join the soccer club.",
        "question": "[듣기 · 1단원] 대화를 듣고, B가 방과 후에 가입하고 싶어 하는 동아리는?",
        "options": [
          "미술 동아리",
          "로봇 동아리",
          "댄스 동아리",
          "축구 동아리"
        ],
        "correctIndex": 3,
        "correctAnswer": "축구 동아리",
        "explanation": "'join the soccer club'는 '축구 동아리'에 가입한다는 뜻입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: How do you spell your name? B: It is D-A-V-I-D, David.",
        "question": "[듣기 · 1단원] 대화를 듣고, 질문자가 물어본 핵심 내용으로 알맞은 것은?",
        "options": [
          "이름의 철자",
          "좋아하는 과목",
          "교실의 위치",
          "취미와 특기"
        ],
        "correctIndex": 0,
        "correctAnswer": "이름의 철자",
        "explanation": "'How do you spell your name?'은 이름 철자를 묻는 말입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Where is your classroom? B: It is on the fourth floor next to the art room.",
        "question": "[듣기 · 1단원] 대화를 듣고, B의 교실 위치로 올바른 것을 고르세요.",
        "options": [
          "지하 강당",
          "4층 미술실 옆",
          "2층 교무실 건너편",
          "1층 음악실 앞"
        ],
        "correctIndex": 1,
        "correctAnswer": "4층 미술실 옆",
        "explanation": "'on the fourth floor next to the art room'은 4층 미술실 옆입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Hello! What grade are you in? B: I am in the fifth grade.",
        "question": "[듣기 · 1단원] 대화를 듣고, B의 학년으로 알맞은 것을 고르세요.",
        "options": [
          "3학년",
          "5학년",
          "1학년",
          "2학년"
        ],
        "correctIndex": 1,
        "correctAnswer": "5학년",
        "explanation": "'I am in the fifth grade'는 '5학년'를 뜻합니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Do you have plans after school? B: Yes, I want to join the music club.",
        "question": "[듣기 · 1단원] 대화를 듣고, B가 방과 후에 가입하고 싶어 하는 동아리는?",
        "options": [
          "로봇 동아리",
          "축구 동아리",
          "음악 동아리",
          "댄스 동아리"
        ],
        "correctIndex": 2,
        "correctAnswer": "음악 동아리",
        "explanation": "'join the music club'는 '음악 동아리'에 가입한다는 뜻입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: How do you spell your name? B: It is D-A-V-I-D, David.",
        "question": "[듣기 · 1단원] 대화를 듣고, 질문자가 물어본 핵심 내용으로 알맞은 것은?",
        "options": [
          "좋아하는 과목",
          "이름의 철자",
          "취미와 특기",
          "교실의 위치"
        ],
        "correctIndex": 1,
        "correctAnswer": "이름의 철자",
        "explanation": "'How do you spell your name?'은 이름 철자를 묻는 말입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Where is your classroom? B: It is on the third floor next to the art room.",
        "question": "[듣기 · 1단원] 대화를 듣고, B의 교실 위치로 올바른 것을 고르세요.",
        "options": [
          "지하 강당",
          "2층 교무실 건너편",
          "1층 음악실 앞",
          "3층 미술실 옆"
        ],
        "correctIndex": 3,
        "correctAnswer": "3층 미술실 옆",
        "explanation": "'on the third floor next to the art room'은 3층 미술실 옆입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Hello! What grade are you in? B: I am in the third grade.",
        "question": "[듣기 · 1단원] 대화를 듣고, B의 학년으로 알맞은 것을 고르세요.",
        "options": [
          "3학년",
          "2학년",
          "4학년",
          "1학년"
        ],
        "correctIndex": 0,
        "correctAnswer": "3학년",
        "explanation": "'I am in the third grade'는 '3학년'를 뜻합니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Do you have plans after school? B: Yes, I want to join the soccer club.",
        "question": "[듣기 · 1단원] 대화를 듣고, B가 방과 후에 가입하고 싶어 하는 동아리는?",
        "options": [
          "축구 동아리",
          "댄스 동아리",
          "로봇 동아리",
          "미술 동아리"
        ],
        "correctIndex": 0,
        "correctAnswer": "축구 동아리",
        "explanation": "'join the soccer club'는 '축구 동아리'에 가입한다는 뜻입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: How do you spell your name? B: It is D-A-V-I-D, David.",
        "question": "[듣기 · 1단원] 대화를 듣고, 질문자가 물어본 핵심 내용으로 알맞은 것은?",
        "options": [
          "이름의 철자",
          "좋아하는 과목",
          "취미와 특기",
          "교실의 위치"
        ],
        "correctIndex": 0,
        "correctAnswer": "이름의 철자",
        "explanation": "'How do you spell your name?'은 이름 철자를 묻는 말입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Where is your classroom? B: It is on the second floor next to the art room.",
        "question": "[듣기 · 1단원] 대화를 듣고, B의 교실 위치로 올바른 것을 고르세요.",
        "options": [
          "지하 강당",
          "3층 교무실 건너편",
          "1층 음악실 앞",
          "2층 미술실 옆"
        ],
        "correctIndex": 3,
        "correctAnswer": "2층 미술실 옆",
        "explanation": "'on the second floor next to the art room'은 2층 미술실 옆입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Hello! What grade are you in? B: I am in the first grade.",
        "question": "[듣기 · 1단원] 대화를 듣고, B의 학년으로 알맞은 것을 고르세요.",
        "options": [
          "1학년",
          "2학년",
          "4학년",
          "3학년"
        ],
        "correctIndex": 0,
        "correctAnswer": "1학년",
        "explanation": "'I am in the first grade'는 '1학년'를 뜻합니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Do you have plans after school? B: Yes, I want to join the music club.",
        "question": "[듣기 · 1단원] 대화를 듣고, B가 방과 후에 가입하고 싶어 하는 동아리는?",
        "options": [
          "로봇 동아리",
          "축구 동아리",
          "댄스 동아리",
          "음악 동아리"
        ],
        "correctIndex": 3,
        "correctAnswer": "음악 동아리",
        "explanation": "'join the music club'는 '음악 동아리'에 가입한다는 뜻입니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: How do you spell your name? B: It is D-A-V-I-D, David.",
        "question": "[듣기 · 1단원] 대화를 듣고, 질문자가 물어본 핵심 내용으로 알맞은 것은?",
        "options": [
          "취미와 특기",
          "교실의 위치",
          "좋아하는 과목",
          "이름의 철자"
        ],
        "correctIndex": 3,
        "correctAnswer": "이름의 철자",
        "explanation": "'How do you spell your name?'은 이름 철자를 묻는 말입니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Where is your classroom? B: It is on the first floor next to the art room.",
        "question": "[듣기 · 1단원] 대화를 듣고, B의 교실 위치로 올바른 것을 고르세요.",
        "options": [
          "지하 강당",
          "3층 교무실 건너편",
          "1층 미술실 옆",
          "2층 음악실 앞"
        ],
        "correctIndex": 2,
        "correctAnswer": "1층 미술실 옆",
        "explanation": "'on the first floor next to the art room'은 1층 미술실 옆입니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Hello! What grade are you in? B: I am in the fifth grade.",
        "question": "[듣기 · 1단원] 대화를 듣고, B의 학년으로 알맞은 것을 고르세요.",
        "options": [
          "3학년",
          "1학년",
          "5학년",
          "2학년"
        ],
        "correctIndex": 2,
        "correctAnswer": "5학년",
        "explanation": "'I am in the fifth grade'는 '5학년'를 뜻합니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Do you have plans after school? B: Yes, I want to join the soccer club.",
        "question": "[듣기 · 1단원] 대화를 듣고, B가 방과 후에 가입하고 싶어 하는 동아리는?",
        "options": [
          "축구 동아리",
          "미술 동아리",
          "댄스 동아리",
          "로봇 동아리"
        ],
        "correctIndex": 0,
        "correctAnswer": "축구 동아리",
        "explanation": "'join the soccer club'는 '축구 동아리'에 가입한다는 뜻입니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: How do you spell your name? B: It is D-A-V-I-D, David.",
        "question": "[듣기 · 1단원] 대화를 듣고, 질문자가 물어본 핵심 내용으로 알맞은 것은?",
        "options": [
          "교실의 위치",
          "좋아하는 과목",
          "이름의 철자",
          "취미와 특기"
        ],
        "correctIndex": 2,
        "correctAnswer": "이름의 철자",
        "explanation": "'How do you spell your name?'은 이름 철자를 묻는 말입니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Where is your classroom? B: It is on the fifth floor next to the art room.",
        "question": "[듣기 · 1단원] 대화를 듣고, B의 교실 위치로 올바른 것을 고르세요.",
        "options": [
          "2층 교무실 건너편",
          "5층 미술실 옆",
          "1층 음악실 앞",
          "지하 강당"
        ],
        "correctIndex": 1,
        "correctAnswer": "5층 미술실 옆",
        "explanation": "'on the fifth floor next to the art room'은 5층 미술실 옆입니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Hello! What grade are you in? B: I am in the third grade.",
        "question": "[듣기 · 1단원] 대화를 듣고, B의 학년으로 알맞은 것을 고르세요.",
        "options": [
          "2학년",
          "1학년",
          "4학년",
          "3학년"
        ],
        "correctIndex": 3,
        "correctAnswer": "3학년",
        "explanation": "'I am in the third grade'는 '3학년'를 뜻합니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Do you have plans after school? B: Yes, I want to join the music club.",
        "question": "[듣기 · 1단원] 대화를 듣고, B가 방과 후에 가입하고 싶어 하는 동아리는?",
        "options": [
          "음악 동아리",
          "축구 동아리",
          "로봇 동아리",
          "댄스 동아리"
        ],
        "correctIndex": 0,
        "correctAnswer": "음악 동아리",
        "explanation": "'join the music club'는 '음악 동아리'에 가입한다는 뜻입니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: How do you spell your name? B: It is D-A-V-I-D, David.",
        "question": "[듣기 · 1단원] 대화를 듣고, 질문자가 물어본 핵심 내용으로 알맞은 것은?",
        "options": [
          "이름의 철자",
          "취미와 특기",
          "좋아하는 과목",
          "교실의 위치"
        ],
        "correctIndex": 0,
        "correctAnswer": "이름의 철자",
        "explanation": "'How do you spell your name?'은 이름 철자를 묻는 말입니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Where is your classroom? B: It is on the fourth floor next to the art room.",
        "question": "[듣기 · 1단원] 대화를 듣고, B의 교실 위치로 올바른 것을 고르세요.",
        "options": [
          "4층 미술실 옆",
          "1층 음악실 앞",
          "2층 교무실 건너편",
          "지하 강당"
        ],
        "correctIndex": 0,
        "correctAnswer": "4층 미술실 옆",
        "explanation": "'on the fourth floor next to the art room'은 4층 미술실 옆입니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Hello! What grade are you in? B: I am in the first grade.",
        "question": "[듣기 · 1단원] 대화를 듣고, B의 학년으로 알맞은 것을 고르세요.",
        "options": [
          "1학년",
          "2학년",
          "3학년",
          "4학년"
        ],
        "correctIndex": 0,
        "correctAnswer": "1학년",
        "explanation": "'I am in the first grade'는 '1학년'를 뜻합니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Do you have plans after school? B: Yes, I want to join the soccer club.",
        "question": "[듣기 · 1단원] 대화를 듣고, B가 방과 후에 가입하고 싶어 하는 동아리는?",
        "options": [
          "미술 동아리",
          "축구 동아리",
          "댄스 동아리",
          "로봇 동아리"
        ],
        "correctIndex": 1,
        "correctAnswer": "축구 동아리",
        "explanation": "'join the soccer club'는 '축구 동아리'에 가입한다는 뜻입니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: How do you spell your name? B: It is D-A-V-I-D, David.",
        "question": "[듣기 · 1단원] 대화를 듣고, 질문자가 물어본 핵심 내용으로 알맞은 것은?",
        "options": [
          "이름의 철자",
          "교실의 위치",
          "취미와 특기",
          "좋아하는 과목"
        ],
        "correctIndex": 0,
        "correctAnswer": "이름의 철자",
        "explanation": "'How do you spell your name?'은 이름 철자를 묻는 말입니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Where is your classroom? B: It is on the third floor next to the art room.",
        "question": "[듣기 · 1단원] 대화를 듣고, B의 교실 위치로 올바른 것을 고르세요.",
        "options": [
          "3층 미술실 옆",
          "1층 음악실 앞",
          "2층 교무실 건너편",
          "지하 강당"
        ],
        "correctIndex": 0,
        "correctAnswer": "3층 미술실 옆",
        "explanation": "'on the third floor next to the art room'은 3층 미술실 옆입니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Hello! What grade are you in? B: I am in the fifth grade.",
        "question": "[듣기 · 1단원] 대화를 듣고, B의 학년으로 알맞은 것을 고르세요.",
        "options": [
          "1학년",
          "3학년",
          "5학년",
          "2학년"
        ],
        "correctIndex": 2,
        "correctAnswer": "5학년",
        "explanation": "'I am in the fifth grade'는 '5학년'를 뜻합니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Do you have plans after school? B: Yes, I want to join the music club.",
        "question": "[듣기 · 1단원] 대화를 듣고, B가 방과 후에 가입하고 싶어 하는 동아리는?",
        "options": [
          "댄스 동아리",
          "로봇 동아리",
          "축구 동아리",
          "음악 동아리"
        ],
        "correctIndex": 3,
        "correctAnswer": "음악 동아리",
        "explanation": "'join the music club'는 '음악 동아리'에 가입한다는 뜻입니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: How do you spell your name? B: It is D-A-V-I-D, David.",
        "question": "[듣기 · 1단원] 대화를 듣고, 질문자가 물어본 핵심 내용으로 알맞은 것은?",
        "options": [
          "이름의 철자",
          "취미와 특기",
          "좋아하는 과목",
          "교실의 위치"
        ],
        "correctIndex": 0,
        "correctAnswer": "이름의 철자",
        "explanation": "'How do you spell your name?'은 이름 철자를 묻는 말입니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Where is your classroom? B: It is on the second floor next to the art room.",
        "question": "[듣기 · 1단원] 대화를 듣고, B의 교실 위치로 올바른 것을 고르세요.",
        "options": [
          "지하 강당",
          "3층 교무실 건너편",
          "1층 음악실 앞",
          "2층 미술실 옆"
        ],
        "correctIndex": 3,
        "correctAnswer": "2층 미술실 옆",
        "explanation": "'on the second floor next to the art room'은 2층 미술실 옆입니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Hello! What grade are you in? B: I am in the third grade.",
        "question": "[듣기 · 1단원] 대화를 듣고, B의 학년으로 알맞은 것을 고르세요.",
        "options": [
          "2학년",
          "1학년",
          "4학년",
          "3학년"
        ],
        "correctIndex": 3,
        "correctAnswer": "3학년",
        "explanation": "'I am in the third grade'는 '3학년'를 뜻합니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Do you have plans after school? B: Yes, I want to join the soccer club.",
        "question": "[듣기 · 1단원] 대화를 듣고, B가 방과 후에 가입하고 싶어 하는 동아리는?",
        "options": [
          "댄스 동아리",
          "축구 동아리",
          "로봇 동아리",
          "미술 동아리"
        ],
        "correctIndex": 1,
        "correctAnswer": "축구 동아리",
        "explanation": "'join the soccer club'는 '축구 동아리'에 가입한다는 뜻입니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: How do you spell your name? B: It is D-A-V-I-D, David.",
        "question": "[듣기 · 1단원] 대화를 듣고, 질문자가 물어본 핵심 내용으로 알맞은 것은?",
        "options": [
          "교실의 위치",
          "좋아하는 과목",
          "이름의 철자",
          "취미와 특기"
        ],
        "correctIndex": 2,
        "correctAnswer": "이름의 철자",
        "explanation": "'How do you spell your name?'은 이름 철자를 묻는 말입니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "학년 및 서수 표현",
        "options": [
          "I am in the six grade.",
          "I am in the sixth grade.",
          "Today is the five day of May.",
          "She is in the three grade."
        ],
        "correctIndex": 1,
        "correctAnswer": "I am in the sixth grade.",
        "explanation": "학년은 기수가 아닌 서수(sixth)를 써서 'the sixth grade'로 표기합니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: What grade are you in?\nB: ____________________________________",
        "options": [
          "It is sunny today.",
          "I have three notebooks.",
          "I am in the sixth grade.",
          "Yes, I can play soccer."
        ],
        "correctIndex": 2,
        "correctAnswer": "I am in the sixth grade.",
        "explanation": "학년을 묻는 질문에는 학년(the ~ grade)으로 대답해야 합니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [1단원] 관련 대화 상황",
        "options": [
          "I am eating lunch right now.",
          "We should learn more about 두 번째의 (second).",
          "Where is the post office?",
          "What time is it now?"
        ],
        "correctIndex": 1,
        "correctAnswer": "We should learn more about 두 번째의 (second).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (세 번째의)",
        "options": [
          "third",
          "grade",
          "first",
          "second"
        ],
        "correctIndex": 0,
        "correctAnswer": "third",
        "explanation": "'세 번째의'에 해당하는 영어 단어는 'third'입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "학년 및 서수 표현",
        "options": [
          "Today is the five day of May.",
          "I am in the six grade.",
          "I am in the sixth grade.",
          "She is in the three grade."
        ],
        "correctIndex": 2,
        "correctAnswer": "I am in the sixth grade.",
        "explanation": "학년은 기수가 아닌 서수(sixth)를 써서 'the sixth grade'로 표기합니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: What grade are you in?\nB: ____________________________________",
        "options": [
          "Yes, I can play soccer.",
          "I am in the sixth grade.",
          "I have three notebooks.",
          "It is sunny today."
        ],
        "correctIndex": 1,
        "correctAnswer": "I am in the sixth grade.",
        "explanation": "학년을 묻는 질문에는 학년(the ~ grade)으로 대답해야 합니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [1단원] 관련 대화 상황",
        "options": [
          "We should learn more about 여섯 번째의 (sixth).",
          "What time is it now?",
          "Where is the post office?",
          "I am eating lunch right now."
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 여섯 번째의 (sixth).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (가입하다)",
        "options": [
          "second",
          "first",
          "grade",
          "join"
        ],
        "correctIndex": 3,
        "correctAnswer": "join",
        "explanation": "'가입하다'에 해당하는 영어 단어는 'join'입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "학년 및 서수 표현",
        "options": [
          "She is in the three grade.",
          "Today is the five day of May.",
          "I am in the six grade.",
          "I am in the sixth grade."
        ],
        "correctIndex": 3,
        "correctAnswer": "I am in the sixth grade.",
        "explanation": "학년은 기수가 아닌 서수(sixth)를 써서 'the sixth grade'로 표기합니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: What grade are you in?\nB: ____________________________________",
        "options": [
          "I have three notebooks.",
          "It is sunny today.",
          "I am in the sixth grade.",
          "Yes, I can play soccer."
        ],
        "correctIndex": 2,
        "correctAnswer": "I am in the sixth grade.",
        "explanation": "학년을 묻는 질문에는 학년(the ~ grade)으로 대답해야 합니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [1단원] 관련 대화 상황",
        "options": [
          "I am eating lunch right now.",
          "What time is it now?",
          "Where is the post office?",
          "We should learn more about 학년 (grade)."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should learn more about 학년 (grade).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (첫 번째의)",
        "options": [
          "first",
          "grade",
          "second",
          "third"
        ],
        "correctIndex": 0,
        "correctAnswer": "first",
        "explanation": "'첫 번째의'에 해당하는 영어 단어는 'first'입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "학년 및 서수 표현",
        "options": [
          "She is in the three grade.",
          "I am in the six grade.",
          "Today is the five day of May.",
          "I am in the sixth grade."
        ],
        "correctIndex": 3,
        "correctAnswer": "I am in the sixth grade.",
        "explanation": "학년은 기수가 아닌 서수(sixth)를 써서 'the sixth grade'로 표기합니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: What grade are you in?\nB: ____________________________________",
        "options": [
          "It is sunny today.",
          "I have three notebooks.",
          "Yes, I can play soccer.",
          "I am in the sixth grade."
        ],
        "correctIndex": 3,
        "correctAnswer": "I am in the sixth grade.",
        "explanation": "학년을 묻는 질문에는 학년(the ~ grade)으로 대답해야 합니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [1단원] 관련 대화 상황",
        "options": [
          "I am eating lunch right now.",
          "What time is it now?",
          "Where is the post office?",
          "We should learn more about 네 번째의 (fourth)."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should learn more about 네 번째의 (fourth).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (다섯 번째의)",
        "options": [
          "grade",
          "second",
          "first",
          "fifth"
        ],
        "correctIndex": 3,
        "correctAnswer": "fifth",
        "explanation": "'다섯 번째의'에 해당하는 영어 단어는 'fifth'입니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "학년 및 서수 표현",
        "options": [
          "She is in the three grade.",
          "Today is the five day of May.",
          "I am in the six grade.",
          "I am in the sixth grade."
        ],
        "correctIndex": 3,
        "correctAnswer": "I am in the sixth grade.",
        "explanation": "학년은 기수가 아닌 서수(sixth)를 써서 'the sixth grade'로 표기합니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: What grade are you in?\nB: ____________________________________",
        "options": [
          "Yes, I can play soccer.",
          "I have three notebooks.",
          "I am in the sixth grade.",
          "It is sunny today."
        ],
        "correctIndex": 2,
        "correctAnswer": "I am in the sixth grade.",
        "explanation": "학년을 묻는 질문에는 학년(the ~ grade)으로 대답해야 합니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [1단원] 관련 대화 상황",
        "options": [
          "We should learn more about 동아리 (club).",
          "I am eating lunch right now.",
          "Where is the post office?",
          "What time is it now?"
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 동아리 (club).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (철자를 쓰다)",
        "options": [
          "first",
          "grade",
          "spell",
          "second"
        ],
        "correctIndex": 2,
        "correctAnswer": "spell",
        "explanation": "'철자를 쓰다'에 해당하는 영어 단어는 'spell'입니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "학년 및 서수 표현",
        "options": [
          "Today is the five day of May.",
          "She is in the three grade.",
          "I am in the six grade.",
          "I am in the sixth grade."
        ],
        "correctIndex": 3,
        "correctAnswer": "I am in the sixth grade.",
        "explanation": "학년은 기수가 아닌 서수(sixth)를 써서 'the sixth grade'로 표기합니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: What grade are you in?\nB: ____________________________________",
        "options": [
          "I have three notebooks.",
          "Yes, I can play soccer.",
          "I am in the sixth grade.",
          "It is sunny today."
        ],
        "correctIndex": 2,
        "correctAnswer": "I am in the sixth grade.",
        "explanation": "학년을 묻는 질문에는 학년(the ~ grade)으로 대답해야 합니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [1단원] 관련 대화 상황",
        "options": [
          "I am eating lunch right now.",
          "What time is it now?",
          "Where is the post office?",
          "We should learn more about 두 번째의 (second)."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should learn more about 두 번째의 (second).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (세 번째의)",
        "options": [
          "third",
          "grade",
          "second",
          "first"
        ],
        "correctIndex": 0,
        "correctAnswer": "third",
        "explanation": "'세 번째의'에 해당하는 영어 단어는 'third'입니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "학년 및 서수 표현",
        "options": [
          "Today is the five day of May.",
          "I am in the sixth grade.",
          "She is in the three grade.",
          "I am in the six grade."
        ],
        "correctIndex": 1,
        "correctAnswer": "I am in the sixth grade.",
        "explanation": "학년은 기수가 아닌 서수(sixth)를 써서 'the sixth grade'로 표기합니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: What grade are you in?\nB: ____________________________________",
        "options": [
          "I have three notebooks.",
          "Yes, I can play soccer.",
          "I am in the sixth grade.",
          "It is sunny today."
        ],
        "correctIndex": 2,
        "correctAnswer": "I am in the sixth grade.",
        "explanation": "학년을 묻는 질문에는 학년(the ~ grade)으로 대답해야 합니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [1단원] 관련 대화 상황",
        "options": [
          "What time is it now?",
          "Where is the post office?",
          "We should learn more about 여섯 번째의 (sixth).",
          "I am eating lunch right now."
        ],
        "correctIndex": 2,
        "correctAnswer": "We should learn more about 여섯 번째의 (sixth).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (가입하다)",
        "options": [
          "grade",
          "second",
          "join",
          "first"
        ],
        "correctIndex": 2,
        "correctAnswer": "join",
        "explanation": "'가입하다'에 해당하는 영어 단어는 'join'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "학년 및 서수 표현",
        "options": [
          "I am in the sixth grade.",
          "I am in the six grade.",
          "Today is the five day of May.",
          "She is in the three grade."
        ],
        "correctIndex": 0,
        "correctAnswer": "I am in the sixth grade.",
        "explanation": "학년은 기수가 아닌 서수(sixth)를 써서 'the sixth grade'로 표기합니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: What grade are you in?\nB: ____________________________________",
        "options": [
          "Yes, I can play soccer.",
          "I am in the sixth grade.",
          "I have three notebooks.",
          "It is sunny today."
        ],
        "correctIndex": 1,
        "correctAnswer": "I am in the sixth grade.",
        "explanation": "학년을 묻는 질문에는 학년(the ~ grade)으로 대답해야 합니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [1단원] 관련 대화 상황",
        "options": [
          "I am eating lunch right now.",
          "We should learn more about 학년 (grade).",
          "What time is it now?",
          "Where is the post office?"
        ],
        "correctIndex": 1,
        "correctAnswer": "We should learn more about 학년 (grade).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (첫 번째의)",
        "options": [
          "first",
          "second",
          "grade",
          "third"
        ],
        "correctIndex": 0,
        "correctAnswer": "first",
        "explanation": "'첫 번째의'에 해당하는 영어 단어는 'first'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "학년 및 서수 표현",
        "options": [
          "She is in the three grade.",
          "Today is the five day of May.",
          "I am in the six grade.",
          "I am in the sixth grade."
        ],
        "correctIndex": 3,
        "correctAnswer": "I am in the sixth grade.",
        "explanation": "학년은 기수가 아닌 서수(sixth)를 써서 'the sixth grade'로 표기합니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: What grade are you in?\nB: ____________________________________",
        "options": [
          "Yes, I can play soccer.",
          "It is sunny today.",
          "I have three notebooks.",
          "I am in the sixth grade."
        ],
        "correctIndex": 3,
        "correctAnswer": "I am in the sixth grade.",
        "explanation": "학년을 묻는 질문에는 학년(the ~ grade)으로 대답해야 합니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 1단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [1단원] 관련 대화 상황",
        "options": [
          "I am eating lunch right now.",
          "What time is it now?",
          "Where is the post office?",
          "We should learn more about 네 번째의 (fourth)."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should learn more about 네 번째의 (fourth).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 1단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"학년\" [힌트: g___e]",
        "correctAnswer": "grade",
        "explanation": "'학년'은(는) 영어로 'grade'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 1단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"첫 번째의\" [힌트: f___t]",
        "correctAnswer": "first",
        "explanation": "'첫 번째의'은(는) 영어로 'first'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 1단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"두 번째의\" [힌트: s____d]",
        "correctAnswer": "second",
        "explanation": "'두 번째의'은(는) 영어로 'second'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 1단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"세 번째의\" [힌트: t___d]",
        "correctAnswer": "third",
        "explanation": "'세 번째의'은(는) 영어로 'third'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 1단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"네 번째의\" [힌트: f____h]",
        "correctAnswer": "fourth",
        "explanation": "'네 번째의'은(는) 영어로 'fourth'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 1단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"다섯 번째의\" [힌트: f___h]",
        "correctAnswer": "fifth",
        "explanation": "'다섯 번째의'은(는) 영어로 'fifth'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 1단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"여섯 번째의\" [힌트: s___h]",
        "correctAnswer": "sixth",
        "explanation": "'여섯 번째의'은(는) 영어로 'sixth'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 1단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"가입하다\" [힌트: j__n]",
        "correctAnswer": "join",
        "explanation": "'가입하다'은(는) 영어로 'join'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 1단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"동아리\" [힌트: c__b]",
        "correctAnswer": "club",
        "explanation": "'동아리'은(는) 영어로 'club'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 1단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"철자를 쓰다\" [힌트: s___l]",
        "correctAnswer": "spell",
        "explanation": "'철자를 쓰다'은(는) 영어로 'spell'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "나는 1학년야.",
        "chips": [
          "in",
          ".",
          "the",
          "am",
          "I",
          "grade",
          "first"
        ],
        "correctAnswer": "I am in the first grade.",
        "explanation": "I am in the first grade. [나는 1학년야.]"
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "나는 축구 동아리에 가입하고 싶어.",
        "chips": [
          "club",
          "join",
          "I",
          "want",
          "the",
          ".",
          "to",
          "soccer"
        ],
        "correctAnswer": "I want to join the soccer club.",
        "explanation": "I want to join the soccer club. [나는 축구 동아리에 가입하고 싶어.]"
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "나는 3학년야.",
        "chips": [
          "the",
          ".",
          "in",
          "am",
          "third",
          "I",
          "grade"
        ],
        "correctAnswer": "I am in the third grade.",
        "explanation": "I am in the third grade. [나는 3학년야.]"
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "나는 미술 동아리에 가입하고 싶어.",
        "chips": [
          "the",
          "want",
          "to",
          ".",
          "join",
          "I",
          "art",
          "club"
        ],
        "correctAnswer": "I want to join the art club.",
        "explanation": "I want to join the art club. [나는 미술 동아리에 가입하고 싶어.]"
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "나는 5학년야.",
        "chips": [
          "in",
          "I",
          "grade",
          "am",
          "fifth",
          "the",
          "."
        ],
        "correctAnswer": "I am in the fifth grade.",
        "explanation": "I am in the fifth grade. [나는 5학년야.]"
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "나는 음악 동아리에 가입하고 싶어.",
        "chips": [
          "the",
          "join",
          "music",
          "club",
          "to",
          ".",
          "want",
          "I"
        ],
        "correctAnswer": "I want to join the music club.",
        "explanation": "I want to join the music club. [나는 음악 동아리에 가입하고 싶어.]"
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "나는 1학년야.",
        "chips": [
          ".",
          "in",
          "grade",
          "first",
          "am",
          "I",
          "the"
        ],
        "correctAnswer": "I am in the first grade.",
        "explanation": "I am in the first grade. [나는 1학년야.]"
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "나는 요리 동아리에 가입하고 싶어.",
        "chips": [
          "join",
          "to",
          ".",
          "the",
          "want",
          "I",
          "cooking",
          "club"
        ],
        "correctAnswer": "I want to join the cooking club.",
        "explanation": "I want to join the cooking club. [나는 요리 동아리에 가입하고 싶어.]"
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "나는 3학년야.",
        "chips": [
          "third",
          "I",
          "the",
          ".",
          "am",
          "grade",
          "in"
        ],
        "correctAnswer": "I am in the third grade.",
        "explanation": "I am in the third grade. [나는 3학년야.]"
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "나는 축구 동아리에 가입하고 싶어.",
        "chips": [
          "the",
          "I",
          "soccer",
          "join",
          ".",
          "to",
          "want",
          "club"
        ],
        "correctAnswer": "I want to join the soccer club.",
        "explanation": "I want to join the soccer club. [나는 축구 동아리에 가입하고 싶어.]"
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "나는 5학년야.",
        "chips": [
          ".",
          "in",
          "grade",
          "fifth",
          "I",
          "am",
          "the"
        ],
        "correctAnswer": "I am in the fifth grade.",
        "explanation": "I am in the fifth grade. [나는 5학년야.]"
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "나는 미술 동아리에 가입하고 싶어.",
        "chips": [
          "I",
          "want",
          "to",
          "join",
          "club",
          ".",
          "the",
          "art"
        ],
        "correctAnswer": "I want to join the art club.",
        "explanation": "I want to join the art club. [나는 미술 동아리에 가입하고 싶어.]"
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "나는 1학년야.",
        "chips": [
          "grade",
          "I",
          "am",
          ".",
          "first",
          "in",
          "the"
        ],
        "correctAnswer": "I am in the first grade.",
        "explanation": "I am in the first grade. [나는 1학년야.]"
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "나는 음악 동아리에 가입하고 싶어.",
        "chips": [
          "I",
          "want",
          "join",
          ".",
          "to",
          "club",
          "music",
          "the"
        ],
        "correctAnswer": "I want to join the music club.",
        "explanation": "I want to join the music club. [나는 음악 동아리에 가입하고 싶어.]"
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "나는 3학년야.",
        "chips": [
          "I",
          ".",
          "am",
          "third",
          "in",
          "grade",
          "the"
        ],
        "correctAnswer": "I am in the third grade.",
        "explanation": "I am in the third grade. [나는 3학년야.]"
      },
      {
        "id": 96,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 1단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 우리는 에너지를 절약하고 지구를 보호해야 해.",
        "chips": [
          "Earth",
          "protect",
          ".",
          "and",
          "should",
          "We",
          "energy",
          "the",
          "save"
        ],
        "correctAnswer": "We should save energy and protect the Earth.",
        "explanation": "We should save energy and protect the Earth. [우리는 에너지를 절약하고 지구를 보호해야 해.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 97,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 1단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 내가 가장 좋아하는 계절은 꽃이 피는 봄이야.",
        "chips": [
          "favorite",
          "is",
          "flowers",
          "bloom",
          "spring",
          ".",
          "My",
          "because",
          "season"
        ],
        "correctAnswer": "My favorite season is spring because flowers bloom.",
        "explanation": "My favorite season is spring because flowers bloom. [내가 가장 좋아하는 계절은 꽃이 피는 봄이야.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 98,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 1단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 두 블록 직진해서 모퉁이에서 좌회전하세요.",
        "chips": [
          "blocks",
          "and",
          "turn",
          "left",
          "at",
          ".",
          "Go",
          "the",
          "straight",
          "corner",
          "two"
        ],
        "correctAnswer": "Go straight two blocks and turn left at the corner.",
        "explanation": "Go straight two blocks and turn left at the corner. [두 블록 직진해서 모퉁이에서 좌회전하세요.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 99,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 1단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 너는 의사 진료를 받고 약을 먹어야 해.",
        "chips": [
          "medicine",
          "should",
          "a",
          "and",
          "doctor",
          "see",
          "You",
          ".",
          "take"
        ],
        "correctAnswer": "You should see a doctor and take medicine.",
        "explanation": "You should see a doctor and take medicine. [너는 의사 진료를 받고 약을 먹어야 해.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 1단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 우리 이번 주 토요일에 함께 공원에 가는 게 어때?",
        "chips": [
          "Why",
          "together",
          "this",
          "Saturday",
          "park",
          "don't",
          "the",
          "we",
          "?",
          "to",
          "go"
        ],
        "correctAnswer": "Why don't we go to the park together this Saturday?",
        "explanation": "Why don't we go to the park together this Saturday? [우리 이번 주 토요일에 함께 공원에 가는 게 어때?] 축하합니다! 골든벨 완주! 🔔"
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
        "audioText": "A: What is your favorite season? B: My favorite season is spring because I can see beautiful flowers.",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 가장 좋아하는 계절과 그 이유로 알맞은 것은?",
        "options": [
          "가을 (알록달록한 단풍잎을 보다)",
          "여름 (시원한 바다에서 수영하다)",
          "겨울 (큰 눈사람을 만들다)",
          "봄 (아름다운 꽃들을 보다)"
        ],
        "correctIndex": 3,
        "correctAnswer": "봄 (아름다운 꽃들을 보다)",
        "explanation": "'My favorite season is spring because I can see beautiful flowers'입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: How is the weather today? B: It is hot and sunny, so let's go outside.",
        "question": "[듣기 · 2단원] 대화를 듣고, 오늘의 날씨 묘사로 가장 알맞은 것은?",
        "options": [
          "덥고 맑은",
          "태풍이 불고 쌀쌀함",
          "비가 많이 오고 번개 침",
          "안개가 짙고 어두움"
        ],
        "correctIndex": 0,
        "correctAnswer": "덥고 맑은",
        "explanation": "'hot and sunny'는 '덥고 맑은'을 의미합니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Why do you like fall? B: Because I love undefined.",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 가을을 좋아하는 이유로 언급된 것은?",
        "options": [
          "방학이 있어서",
          "undefined",
          "과일이 풍성해서",
          "낮이 길어서"
        ],
        "correctIndex": 1,
        "correctAnswer": "undefined",
        "explanation": "'Because I love undefined'(undefined)입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What is your favorite season? B: My favorite season is winter because I can make a big snowman.",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 가장 좋아하는 계절과 그 이유로 알맞은 것은?",
        "options": [
          "봄 (아름다운 꽃들을 보다)",
          "가을 (알록달록한 단풍잎을 보다)",
          "여름 (시원한 바다에서 수영하다)",
          "겨울 (큰 눈사람을 만들다)"
        ],
        "correctIndex": 3,
        "correctAnswer": "겨울 (큰 눈사람을 만들다)",
        "explanation": "'My favorite season is winter because I can make a big snowman'입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: How is the weather today? B: It is warm and sunny, so let's go outside.",
        "question": "[듣기 · 2단원] 대화를 듣고, 오늘의 날씨 묘사로 가장 알맞은 것은?",
        "options": [
          "태풍이 불고 쌀쌀함",
          "따뜻하고 화창한",
          "비가 많이 오고 번개 침",
          "안개가 짙고 어두움"
        ],
        "correctIndex": 1,
        "correctAnswer": "따뜻하고 화창한",
        "explanation": "'warm and sunny'는 '따뜻하고 화창한'을 의미합니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Why do you like summer? B: Because I love undefined.",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 여름을 좋아하는 이유로 언급된 것은?",
        "options": [
          "방학이 있어서",
          "undefined",
          "낮이 길어서",
          "과일이 풍성해서"
        ],
        "correctIndex": 1,
        "correctAnswer": "undefined",
        "explanation": "'Because I love undefined'(undefined)입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What is your favorite season? B: My favorite season is fall because I can see colorful autumn leaves.",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 가장 좋아하는 계절과 그 이유로 알맞은 것은?",
        "options": [
          "가을 (알록달록한 단풍잎을 보다)",
          "봄 (아름다운 꽃들을 보다)",
          "여름 (시원한 바다에서 수영하다)",
          "겨울 (큰 눈사람을 만들다)"
        ],
        "correctIndex": 0,
        "correctAnswer": "가을 (알록달록한 단풍잎을 보다)",
        "explanation": "'My favorite season is fall because I can see colorful autumn leaves'입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: How is the weather today? B: It is cold and snowy, so let's go outside.",
        "question": "[듣기 · 2단원] 대화를 듣고, 오늘의 날씨 묘사로 가장 알맞은 것은?",
        "options": [
          "안개가 짙고 어두움",
          "비가 많이 오고 번개 침",
          "태풍이 불고 쌀쌀함",
          "춥고 눈 내리는"
        ],
        "correctIndex": 3,
        "correctAnswer": "춥고 눈 내리는",
        "explanation": "'cold and snowy'는 '춥고 눈 내리는'을 의미합니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Why do you like spring? B: Because I love undefined.",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 봄을 좋아하는 이유로 언급된 것은?",
        "options": [
          "undefined",
          "과일이 풍성해서",
          "낮이 길어서",
          "방학이 있어서"
        ],
        "correctIndex": 0,
        "correctAnswer": "undefined",
        "explanation": "'Because I love undefined'(undefined)입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What is your favorite season? B: My favorite season is summer because I can swim in the cool ocean.",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 가장 좋아하는 계절과 그 이유로 알맞은 것은?",
        "options": [
          "가을 (알록달록한 단풍잎을 보다)",
          "겨울 (큰 눈사람을 만들다)",
          "봄 (아름다운 꽃들을 보다)",
          "여름 (시원한 바다에서 수영하다)"
        ],
        "correctIndex": 3,
        "correctAnswer": "여름 (시원한 바다에서 수영하다)",
        "explanation": "'My favorite season is summer because I can swim in the cool ocean'입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: How is the weather today? B: It is cool and breezy, so let's go outside.",
        "question": "[듣기 · 2단원] 대화를 듣고, 오늘의 날씨 묘사로 가장 알맞은 것은?",
        "options": [
          "시원하고 바람 부는",
          "비가 많이 오고 번개 침",
          "안개가 짙고 어두움",
          "태풍이 불고 쌀쌀함"
        ],
        "correctIndex": 0,
        "correctAnswer": "시원하고 바람 부는",
        "explanation": "'cool and breezy'는 '시원하고 바람 부는'을 의미합니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why do you like winter? B: Because I love undefined.",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 겨울을 좋아하는 이유로 언급된 것은?",
        "options": [
          "낮이 길어서",
          "undefined",
          "과일이 풍성해서",
          "방학이 있어서"
        ],
        "correctIndex": 1,
        "correctAnswer": "undefined",
        "explanation": "'Because I love undefined'(undefined)입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What is your favorite season? B: My favorite season is spring because I can see beautiful flowers.",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 가장 좋아하는 계절과 그 이유로 알맞은 것은?",
        "options": [
          "여름 (시원한 바다에서 수영하다)",
          "겨울 (큰 눈사람을 만들다)",
          "봄 (아름다운 꽃들을 보다)",
          "가을 (알록달록한 단풍잎을 보다)"
        ],
        "correctIndex": 2,
        "correctAnswer": "봄 (아름다운 꽃들을 보다)",
        "explanation": "'My favorite season is spring because I can see beautiful flowers'입니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: How is the weather today? B: It is hot and sunny, so let's go outside.",
        "question": "[듣기 · 2단원] 대화를 듣고, 오늘의 날씨 묘사로 가장 알맞은 것은?",
        "options": [
          "태풍이 불고 쌀쌀함",
          "안개가 짙고 어두움",
          "비가 많이 오고 번개 침",
          "덥고 맑은"
        ],
        "correctIndex": 3,
        "correctAnswer": "덥고 맑은",
        "explanation": "'hot and sunny'는 '덥고 맑은'을 의미합니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why do you like fall? B: Because I love undefined.",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 가을을 좋아하는 이유로 언급된 것은?",
        "options": [
          "undefined",
          "과일이 풍성해서",
          "낮이 길어서",
          "방학이 있어서"
        ],
        "correctIndex": 0,
        "correctAnswer": "undefined",
        "explanation": "'Because I love undefined'(undefined)입니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What is your favorite season? B: My favorite season is winter because I can make a big snowman.",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 가장 좋아하는 계절과 그 이유로 알맞은 것은?",
        "options": [
          "가을 (알록달록한 단풍잎을 보다)",
          "여름 (시원한 바다에서 수영하다)",
          "봄 (아름다운 꽃들을 보다)",
          "겨울 (큰 눈사람을 만들다)"
        ],
        "correctIndex": 3,
        "correctAnswer": "겨울 (큰 눈사람을 만들다)",
        "explanation": "'My favorite season is winter because I can make a big snowman'입니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: How is the weather today? B: It is warm and sunny, so let's go outside.",
        "question": "[듣기 · 2단원] 대화를 듣고, 오늘의 날씨 묘사로 가장 알맞은 것은?",
        "options": [
          "태풍이 불고 쌀쌀함",
          "안개가 짙고 어두움",
          "비가 많이 오고 번개 침",
          "따뜻하고 화창한"
        ],
        "correctIndex": 3,
        "correctAnswer": "따뜻하고 화창한",
        "explanation": "'warm and sunny'는 '따뜻하고 화창한'을 의미합니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why do you like summer? B: Because I love undefined.",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 여름을 좋아하는 이유로 언급된 것은?",
        "options": [
          "방학이 있어서",
          "undefined",
          "낮이 길어서",
          "과일이 풍성해서"
        ],
        "correctIndex": 1,
        "correctAnswer": "undefined",
        "explanation": "'Because I love undefined'(undefined)입니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What is your favorite season? B: My favorite season is fall because I can see colorful autumn leaves.",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 가장 좋아하는 계절과 그 이유로 알맞은 것은?",
        "options": [
          "가을 (알록달록한 단풍잎을 보다)",
          "봄 (아름다운 꽃들을 보다)",
          "겨울 (큰 눈사람을 만들다)",
          "여름 (시원한 바다에서 수영하다)"
        ],
        "correctIndex": 0,
        "correctAnswer": "가을 (알록달록한 단풍잎을 보다)",
        "explanation": "'My favorite season is fall because I can see colorful autumn leaves'입니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: How is the weather today? B: It is cold and snowy, so let's go outside.",
        "question": "[듣기 · 2단원] 대화를 듣고, 오늘의 날씨 묘사로 가장 알맞은 것은?",
        "options": [
          "춥고 눈 내리는",
          "안개가 짙고 어두움",
          "태풍이 불고 쌀쌀함",
          "비가 많이 오고 번개 침"
        ],
        "correctIndex": 0,
        "correctAnswer": "춥고 눈 내리는",
        "explanation": "'cold and snowy'는 '춥고 눈 내리는'을 의미합니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why do you like spring? B: Because I love undefined.",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 봄을 좋아하는 이유로 언급된 것은?",
        "options": [
          "낮이 길어서",
          "과일이 풍성해서",
          "undefined",
          "방학이 있어서"
        ],
        "correctIndex": 2,
        "correctAnswer": "undefined",
        "explanation": "'Because I love undefined'(undefined)입니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What is your favorite season? B: My favorite season is summer because I can swim in the cool ocean.",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 가장 좋아하는 계절과 그 이유로 알맞은 것은?",
        "options": [
          "겨울 (큰 눈사람을 만들다)",
          "가을 (알록달록한 단풍잎을 보다)",
          "여름 (시원한 바다에서 수영하다)",
          "봄 (아름다운 꽃들을 보다)"
        ],
        "correctIndex": 2,
        "correctAnswer": "여름 (시원한 바다에서 수영하다)",
        "explanation": "'My favorite season is summer because I can swim in the cool ocean'입니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: How is the weather today? B: It is cool and breezy, so let's go outside.",
        "question": "[듣기 · 2단원] 대화를 듣고, 오늘의 날씨 묘사로 가장 알맞은 것은?",
        "options": [
          "태풍이 불고 쌀쌀함",
          "안개가 짙고 어두움",
          "비가 많이 오고 번개 침",
          "시원하고 바람 부는"
        ],
        "correctIndex": 3,
        "correctAnswer": "시원하고 바람 부는",
        "explanation": "'cool and breezy'는 '시원하고 바람 부는'을 의미합니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why do you like winter? B: Because I love undefined.",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 겨울을 좋아하는 이유로 언급된 것은?",
        "options": [
          "undefined",
          "과일이 풍성해서",
          "낮이 길어서",
          "방학이 있어서"
        ],
        "correctIndex": 0,
        "correctAnswer": "undefined",
        "explanation": "'Because I love undefined'(undefined)입니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What is your favorite season? B: My favorite season is spring because I can see beautiful flowers.",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 가장 좋아하는 계절과 그 이유로 알맞은 것은?",
        "options": [
          "겨울 (큰 눈사람을 만들다)",
          "봄 (아름다운 꽃들을 보다)",
          "가을 (알록달록한 단풍잎을 보다)",
          "여름 (시원한 바다에서 수영하다)"
        ],
        "correctIndex": 1,
        "correctAnswer": "봄 (아름다운 꽃들을 보다)",
        "explanation": "'My favorite season is spring because I can see beautiful flowers'입니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: How is the weather today? B: It is hot and sunny, so let's go outside.",
        "question": "[듣기 · 2단원] 대화를 듣고, 오늘의 날씨 묘사로 가장 알맞은 것은?",
        "options": [
          "덥고 맑은",
          "비가 많이 오고 번개 침",
          "안개가 짙고 어두움",
          "태풍이 불고 쌀쌀함"
        ],
        "correctIndex": 0,
        "correctAnswer": "덥고 맑은",
        "explanation": "'hot and sunny'는 '덥고 맑은'을 의미합니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Why do you like fall? B: Because I love undefined.",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 가을을 좋아하는 이유로 언급된 것은?",
        "options": [
          "과일이 풍성해서",
          "낮이 길어서",
          "undefined",
          "방학이 있어서"
        ],
        "correctIndex": 2,
        "correctAnswer": "undefined",
        "explanation": "'Because I love undefined'(undefined)입니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What is your favorite season? B: My favorite season is winter because I can make a big snowman.",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 가장 좋아하는 계절과 그 이유로 알맞은 것은?",
        "options": [
          "가을 (알록달록한 단풍잎을 보다)",
          "여름 (시원한 바다에서 수영하다)",
          "봄 (아름다운 꽃들을 보다)",
          "겨울 (큰 눈사람을 만들다)"
        ],
        "correctIndex": 3,
        "correctAnswer": "겨울 (큰 눈사람을 만들다)",
        "explanation": "'My favorite season is winter because I can make a big snowman'입니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: How is the weather today? B: It is warm and sunny, so let's go outside.",
        "question": "[듣기 · 2단원] 대화를 듣고, 오늘의 날씨 묘사로 가장 알맞은 것은?",
        "options": [
          "따뜻하고 화창한",
          "비가 많이 오고 번개 침",
          "안개가 짙고 어두움",
          "태풍이 불고 쌀쌀함"
        ],
        "correctIndex": 0,
        "correctAnswer": "따뜻하고 화창한",
        "explanation": "'warm and sunny'는 '따뜻하고 화창한'을 의미합니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Why do you like summer? B: Because I love undefined.",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 여름을 좋아하는 이유로 언급된 것은?",
        "options": [
          "undefined",
          "낮이 길어서",
          "방학이 있어서",
          "과일이 풍성해서"
        ],
        "correctIndex": 0,
        "correctAnswer": "undefined",
        "explanation": "'Because I love undefined'(undefined)입니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What is your favorite season? B: My favorite season is fall because I can see colorful autumn leaves.",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 가장 좋아하는 계절과 그 이유로 알맞은 것은?",
        "options": [
          "가을 (알록달록한 단풍잎을 보다)",
          "겨울 (큰 눈사람을 만들다)",
          "봄 (아름다운 꽃들을 보다)",
          "여름 (시원한 바다에서 수영하다)"
        ],
        "correctIndex": 0,
        "correctAnswer": "가을 (알록달록한 단풍잎을 보다)",
        "explanation": "'My favorite season is fall because I can see colorful autumn leaves'입니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: How is the weather today? B: It is cold and snowy, so let's go outside.",
        "question": "[듣기 · 2단원] 대화를 듣고, 오늘의 날씨 묘사로 가장 알맞은 것은?",
        "options": [
          "태풍이 불고 쌀쌀함",
          "춥고 눈 내리는",
          "안개가 짙고 어두움",
          "비가 많이 오고 번개 침"
        ],
        "correctIndex": 1,
        "correctAnswer": "춥고 눈 내리는",
        "explanation": "'cold and snowy'는 '춥고 눈 내리는'을 의미합니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Why do you like spring? B: Because I love undefined.",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 봄을 좋아하는 이유로 언급된 것은?",
        "options": [
          "undefined",
          "과일이 풍성해서",
          "방학이 있어서",
          "낮이 길어서"
        ],
        "correctIndex": 0,
        "correctAnswer": "undefined",
        "explanation": "'Because I love undefined'(undefined)입니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What is your favorite season? B: My favorite season is summer because I can swim in the cool ocean.",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 가장 좋아하는 계절과 그 이유로 알맞은 것은?",
        "options": [
          "여름 (시원한 바다에서 수영하다)",
          "겨울 (큰 눈사람을 만들다)",
          "봄 (아름다운 꽃들을 보다)",
          "가을 (알록달록한 단풍잎을 보다)"
        ],
        "correctIndex": 0,
        "correctAnswer": "여름 (시원한 바다에서 수영하다)",
        "explanation": "'My favorite season is summer because I can swim in the cool ocean'입니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: How is the weather today? B: It is cool and breezy, so let's go outside.",
        "question": "[듣기 · 2단원] 대화를 듣고, 오늘의 날씨 묘사로 가장 알맞은 것은?",
        "options": [
          "시원하고 바람 부는",
          "비가 많이 오고 번개 침",
          "안개가 짙고 어두움",
          "태풍이 불고 쌀쌀함"
        ],
        "correctIndex": 0,
        "correctAnswer": "시원하고 바람 부는",
        "explanation": "'cool and breezy'는 '시원하고 바람 부는'을 의미합니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I love this beautiful season.",
          "I love this beautifully season.",
          "I loving this season.",
          "I loves this season."
        ],
        "correctIndex": 0,
        "correctAnswer": "I love this beautiful season.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Because it's hot.",
          "Go straight one block.",
          "I am a student.",
          "Sounds like a wonderful idea!"
        ],
        "correctIndex": 3,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [2단원] 관련 대화 상황",
        "options": [
          "We should learn more about 여름 (summer).",
          "Where is the post office?",
          "What time is it now?",
          "I am eating lunch right now."
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 여름 (summer).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (가을)",
        "options": [
          "fall",
          "season",
          "spring",
          "summer"
        ],
        "correctIndex": 0,
        "correctAnswer": "fall",
        "explanation": "'가을'에 해당하는 영어 단어는 'fall'입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I love this beautiful winter.",
          "I love this beautifully winter.",
          "I loving this winter.",
          "I loves this winter."
        ],
        "correctIndex": 0,
        "correctAnswer": "I love this beautiful winter.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Sounds like a wonderful idea!",
          "I am a student.",
          "Go straight one block.",
          "Because it's hot."
        ],
        "correctIndex": 0,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [2단원] 관련 대화 상황",
        "options": [
          "I am eating lunch right now.",
          "Where is the post office?",
          "We should learn more about ~때문에 (because).",
          "What time is it now?"
        ],
        "correctIndex": 2,
        "correctAnswer": "We should learn more about ~때문에 (because).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (꽃)",
        "options": [
          "flower",
          "season",
          "summer",
          "spring"
        ],
        "correctIndex": 0,
        "correctAnswer": "flower",
        "explanation": "'꽃'에 해당하는 영어 단어는 'flower'입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loves this snow.",
          "I loving this snow.",
          "I love this beautifully snow.",
          "I love this beautiful snow."
        ],
        "correctIndex": 3,
        "correctAnswer": "I love this beautiful snow.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Sounds like a wonderful idea!",
          "I am a student.",
          "Go straight one block.",
          "Because it's hot."
        ],
        "correctIndex": 0,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [2단원] 관련 대화 상황",
        "options": [
          "I am eating lunch right now.",
          "Where is the post office?",
          "What time is it now?",
          "We should learn more about 계절 (season)."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should learn more about 계절 (season).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (봄)",
        "options": [
          "summer",
          "fall",
          "season",
          "spring"
        ],
        "correctIndex": 3,
        "correctAnswer": "spring",
        "explanation": "'봄'에 해당하는 영어 단어는 'spring'입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I love this beautifully summer.",
          "I loves this summer.",
          "I love this beautiful summer.",
          "I loving this summer."
        ],
        "correctIndex": 2,
        "correctAnswer": "I love this beautiful summer.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Go straight one block.",
          "Sounds like a wonderful idea!",
          "I am a student.",
          "Because it's hot."
        ],
        "correctIndex": 1,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [2단원] 관련 대화 상황",
        "options": [
          "I am eating lunch right now.",
          "We should learn more about 겨울 (winter).",
          "Where is the post office?",
          "What time is it now?"
        ],
        "correctIndex": 1,
        "correctAnswer": "We should learn more about 겨울 (winter).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (날씨)",
        "options": [
          "spring",
          "season",
          "summer",
          "weather"
        ],
        "correctIndex": 3,
        "correctAnswer": "weather",
        "explanation": "'날씨'에 해당하는 영어 단어는 'weather'입니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I love this beautiful because.",
          "I love this beautifully because.",
          "I loving this because.",
          "I loves this because."
        ],
        "correctIndex": 0,
        "correctAnswer": "I love this beautiful because.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Sounds like a wonderful idea!",
          "Because it's hot.",
          "Go straight one block.",
          "I am a student."
        ],
        "correctIndex": 0,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [2단원] 관련 대화 상황",
        "options": [
          "I am eating lunch right now.",
          "Where is the post office?",
          "What time is it now?",
          "We should learn more about 눈 (snow)."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should learn more about 눈 (snow).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (따뜻한)",
        "options": [
          "spring",
          "summer",
          "season",
          "warm"
        ],
        "correctIndex": 3,
        "correctAnswer": "warm",
        "explanation": "'따뜻한'에 해당하는 영어 단어는 'warm'입니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I love this beautiful season.",
          "I love this beautifully season.",
          "I loving this season.",
          "I loves this season."
        ],
        "correctIndex": 0,
        "correctAnswer": "I love this beautiful season.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "I am a student.",
          "Sounds like a wonderful idea!",
          "Because it's hot.",
          "Go straight one block."
        ],
        "correctIndex": 1,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [2단원] 관련 대화 상황",
        "options": [
          "We should learn more about 여름 (summer).",
          "Where is the post office?",
          "What time is it now?",
          "I am eating lunch right now."
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 여름 (summer).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (가을)",
        "options": [
          "fall",
          "summer",
          "season",
          "spring"
        ],
        "correctIndex": 0,
        "correctAnswer": "fall",
        "explanation": "'가을'에 해당하는 영어 단어는 'fall'입니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loves this winter.",
          "I loving this winter.",
          "I love this beautifully winter.",
          "I love this beautiful winter."
        ],
        "correctIndex": 3,
        "correctAnswer": "I love this beautiful winter.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Sounds like a wonderful idea!",
          "Because it's hot.",
          "I am a student.",
          "Go straight one block."
        ],
        "correctIndex": 0,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [2단원] 관련 대화 상황",
        "options": [
          "We should learn more about ~때문에 (because).",
          "Where is the post office?",
          "What time is it now?",
          "I am eating lunch right now."
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about ~때문에 (because).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (꽃)",
        "options": [
          "summer",
          "spring",
          "season",
          "flower"
        ],
        "correctIndex": 3,
        "correctAnswer": "flower",
        "explanation": "'꽃'에 해당하는 영어 단어는 'flower'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loves this snow.",
          "I love this beautifully snow.",
          "I love this beautiful snow.",
          "I loving this snow."
        ],
        "correctIndex": 2,
        "correctAnswer": "I love this beautiful snow.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Sounds like a wonderful idea!",
          "Go straight one block.",
          "I am a student.",
          "Because it's hot."
        ],
        "correctIndex": 0,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [2단원] 관련 대화 상황",
        "options": [
          "I am eating lunch right now.",
          "We should learn more about 계절 (season).",
          "Where is the post office?",
          "What time is it now?"
        ],
        "correctIndex": 1,
        "correctAnswer": "We should learn more about 계절 (season).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (봄)",
        "options": [
          "fall",
          "spring",
          "summer",
          "season"
        ],
        "correctIndex": 1,
        "correctAnswer": "spring",
        "explanation": "'봄'에 해당하는 영어 단어는 'spring'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I love this beautifully summer.",
          "I loving this summer.",
          "I love this beautiful summer.",
          "I loves this summer."
        ],
        "correctIndex": 2,
        "correctAnswer": "I love this beautiful summer.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Sounds like a wonderful idea!",
          "Because it's hot.",
          "I am a student.",
          "Go straight one block."
        ],
        "correctIndex": 0,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 2단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [2단원] 관련 대화 상황",
        "options": [
          "I am eating lunch right now.",
          "What time is it now?",
          "Where is the post office?",
          "We should learn more about 겨울 (winter)."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should learn more about 겨울 (winter).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 2단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"계절\" [힌트: s____n]",
        "correctAnswer": "season",
        "explanation": "'계절'은(는) 영어로 'season'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 2단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"봄\" [힌트: s____g]",
        "correctAnswer": "spring",
        "explanation": "'봄'은(는) 영어로 'spring'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 2단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"여름\" [힌트: s____r]",
        "correctAnswer": "summer",
        "explanation": "'여름'은(는) 영어로 'summer'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 2단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"가을\" [힌트: f__l]",
        "correctAnswer": "fall",
        "explanation": "'가을'은(는) 영어로 'fall'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 2단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"겨울\" [힌트: w____r]",
        "correctAnswer": "winter",
        "explanation": "'겨울'은(는) 영어로 'winter'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 2단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"날씨\" [힌트: w_____r]",
        "correctAnswer": "weather",
        "explanation": "'날씨'은(는) 영어로 'weather'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 2단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"~때문에\" [힌트: b_____e]",
        "correctAnswer": "because",
        "explanation": "'~때문에'은(는) 영어로 'because'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 2단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"꽃\" [힌트: f____r]",
        "correctAnswer": "flower",
        "explanation": "'꽃'은(는) 영어로 'flower'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 2단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"눈\" [힌트: s__w]",
        "correctAnswer": "snow",
        "explanation": "'눈'은(는) 영어로 'snow'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 2단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"따뜻한\" [힌트: w__m]",
        "correctAnswer": "warm",
        "explanation": "'따뜻한'은(는) 영어로 'warm'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "내가 가장 좋아하는 계절은 봄이야.",
        "chips": [
          ".",
          "is",
          "season",
          "favorite",
          "spring",
          "My"
        ],
        "correctAnswer": "My favorite season is spring.",
        "explanation": "My favorite season is spring. [내가 가장 좋아하는 계절은 봄이야.]"
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "내가 가장 좋아하는 계절은 여름이야.",
        "chips": [
          "My",
          "is",
          ".",
          "favorite",
          "season",
          "summer"
        ],
        "correctAnswer": "My favorite season is summer.",
        "explanation": "My favorite season is summer. [내가 가장 좋아하는 계절은 여름이야.]"
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "내가 가장 좋아하는 계절은 가을이야.",
        "chips": [
          "season",
          "favorite",
          ".",
          "fall",
          "is",
          "My"
        ],
        "correctAnswer": "My favorite season is fall.",
        "explanation": "My favorite season is fall. [내가 가장 좋아하는 계절은 가을이야.]"
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "내가 가장 좋아하는 계절은 겨울이야.",
        "chips": [
          "My",
          "favorite",
          "winter",
          ".",
          "is",
          "season"
        ],
        "correctAnswer": "My favorite season is winter.",
        "explanation": "My favorite season is winter. [내가 가장 좋아하는 계절은 겨울이야.]"
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "내가 가장 좋아하는 계절은 봄이야.",
        "chips": [
          "season",
          "favorite",
          "My",
          ".",
          "spring",
          "is"
        ],
        "correctAnswer": "My favorite season is spring.",
        "explanation": "My favorite season is spring. [내가 가장 좋아하는 계절은 봄이야.]"
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "내가 가장 좋아하는 계절은 여름이야.",
        "chips": [
          "season",
          "summer",
          ".",
          "favorite",
          "My",
          "is"
        ],
        "correctAnswer": "My favorite season is summer.",
        "explanation": "My favorite season is summer. [내가 가장 좋아하는 계절은 여름이야.]"
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "내가 가장 좋아하는 계절은 가을이야.",
        "chips": [
          "season",
          "is",
          ".",
          "favorite",
          "fall",
          "My"
        ],
        "correctAnswer": "My favorite season is fall.",
        "explanation": "My favorite season is fall. [내가 가장 좋아하는 계절은 가을이야.]"
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "내가 가장 좋아하는 계절은 겨울이야.",
        "chips": [
          "is",
          "season",
          "My",
          "favorite",
          "winter",
          "."
        ],
        "correctAnswer": "My favorite season is winter.",
        "explanation": "My favorite season is winter. [내가 가장 좋아하는 계절은 겨울이야.]"
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "내가 가장 좋아하는 계절은 봄이야.",
        "chips": [
          "is",
          "My",
          "season",
          ".",
          "spring",
          "favorite"
        ],
        "correctAnswer": "My favorite season is spring.",
        "explanation": "My favorite season is spring. [내가 가장 좋아하는 계절은 봄이야.]"
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "내가 가장 좋아하는 계절은 여름이야.",
        "chips": [
          "season",
          "is",
          "summer",
          "favorite",
          "My",
          "."
        ],
        "correctAnswer": "My favorite season is summer.",
        "explanation": "My favorite season is summer. [내가 가장 좋아하는 계절은 여름이야.]"
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "내가 가장 좋아하는 계절은 가을이야.",
        "chips": [
          ".",
          "fall",
          "is",
          "season",
          "favorite",
          "My"
        ],
        "correctAnswer": "My favorite season is fall.",
        "explanation": "My favorite season is fall. [내가 가장 좋아하는 계절은 가을이야.]"
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "내가 가장 좋아하는 계절은 겨울이야.",
        "chips": [
          "My",
          "season",
          "favorite",
          ".",
          "is",
          "winter"
        ],
        "correctAnswer": "My favorite season is winter.",
        "explanation": "My favorite season is winter. [내가 가장 좋아하는 계절은 겨울이야.]"
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "내가 가장 좋아하는 계절은 봄이야.",
        "chips": [
          "My",
          "favorite",
          "season",
          "is",
          "spring",
          "."
        ],
        "correctAnswer": "My favorite season is spring.",
        "explanation": "My favorite season is spring. [내가 가장 좋아하는 계절은 봄이야.]"
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "내가 가장 좋아하는 계절은 여름이야.",
        "chips": [
          "My",
          "is",
          "summer",
          ".",
          "favorite",
          "season"
        ],
        "correctAnswer": "My favorite season is summer.",
        "explanation": "My favorite season is summer. [내가 가장 좋아하는 계절은 여름이야.]"
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "내가 가장 좋아하는 계절은 가을이야.",
        "chips": [
          "My",
          "fall",
          "favorite",
          "season",
          "is",
          "."
        ],
        "correctAnswer": "My favorite season is fall.",
        "explanation": "My favorite season is fall. [내가 가장 좋아하는 계절은 가을이야.]"
      },
      {
        "id": 96,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 2단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 우리는 에너지를 절약하고 지구를 보호해야 해.",
        "chips": [
          "should",
          "Earth",
          "save",
          "the",
          ".",
          "and",
          "We",
          "energy",
          "protect"
        ],
        "correctAnswer": "We should save energy and protect the Earth.",
        "explanation": "We should save energy and protect the Earth. [우리는 에너지를 절약하고 지구를 보호해야 해.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 97,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 2단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 내가 가장 좋아하는 계절은 꽃이 피는 봄이야.",
        "chips": [
          ".",
          "spring",
          "My",
          "favorite",
          "bloom",
          "flowers",
          "season",
          "is",
          "because"
        ],
        "correctAnswer": "My favorite season is spring because flowers bloom.",
        "explanation": "My favorite season is spring because flowers bloom. [내가 가장 좋아하는 계절은 꽃이 피는 봄이야.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 98,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 2단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 두 블록 직진해서 모퉁이에서 좌회전하세요.",
        "chips": [
          "two",
          "at",
          "left",
          "Go",
          "and",
          "the",
          ".",
          "turn",
          "corner",
          "blocks",
          "straight"
        ],
        "correctAnswer": "Go straight two blocks and turn left at the corner.",
        "explanation": "Go straight two blocks and turn left at the corner. [두 블록 직진해서 모퉁이에서 좌회전하세요.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 99,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 2단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 너는 의사 진료를 받고 약을 먹어야 해.",
        "chips": [
          "doctor",
          "a",
          "You",
          "should",
          "see",
          "medicine",
          "and",
          ".",
          "take"
        ],
        "correctAnswer": "You should see a doctor and take medicine.",
        "explanation": "You should see a doctor and take medicine. [너는 의사 진료를 받고 약을 먹어야 해.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 2단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 우리 이번 주 토요일에 함께 공원에 가는 게 어때?",
        "chips": [
          "Why",
          "the",
          "this",
          "together",
          "we",
          "?",
          "go",
          "don't",
          "Saturday",
          "to",
          "park"
        ],
        "correctAnswer": "Why don't we go to the park together this Saturday?",
        "explanation": "Why don't we go to the park together this Saturday? [우리 이번 주 토요일에 함께 공원에 가는 게 어때?] 축하합니다! 골든벨 완주! 🔔"
      }
    ]
  },
  "6G_L03": {
    "name": "3단원: 환경과 지구 보호 · 규칙 (We should save energy)",
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
        "audioText": "A: We should protect our planet. B: Yes, let's turn off the lights when leaving.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "플라스틱 병을 재활용하다",
          "에너지와 물을 절약하다",
          "전등을 끄다",
          "종이를 낭비하지 않다"
        ],
        "correctIndex": 2,
        "correctAnswer": "전등을 끄다",
        "explanation": "'turn off the lights'는 '전등을 끄다'입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's save energy and water for our Earth.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "전등을 끄다",
          "에너지와 물을 절약하다",
          "플라스틱 병을 재활용하다",
          "종이를 낭비하지 않다"
        ],
        "correctIndex": 1,
        "correctAnswer": "에너지와 물을 절약하다",
        "explanation": "'save energy and water'는 '에너지와 물을 절약하다'입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's recycle plastic bottles properly.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "종이를 낭비하지 않다",
          "전등을 끄다",
          "플라스틱 병을 재활용하다",
          "에너지와 물을 절약하다"
        ],
        "correctIndex": 2,
        "correctAnswer": "플라스틱 병을 재활용하다",
        "explanation": "'recycle plastic bottles'는 '플라스틱 병을 재활용하다'입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's do not waste paper in the classroom.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "종이를 낭비하지 않다",
          "전등을 끄다",
          "에너지와 물을 절약하다",
          "플라스틱 병을 재활용하다"
        ],
        "correctIndex": 0,
        "correctAnswer": "종이를 낭비하지 않다",
        "explanation": "'do not waste paper'는 '종이를 낭비하지 않다'입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's ride bicycles instead of cars to school.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "자동차 대신 자전거를 타다",
          "전등을 끄다",
          "에너지와 물을 절약하다",
          "플라스틱 병을 재활용하다"
        ],
        "correctIndex": 0,
        "correctAnswer": "자동차 대신 자전거를 타다",
        "explanation": "'ride bicycles instead of cars'는 '자동차 대신 자전거를 타다'입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's use reusable tumblers every day.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "에너지와 물을 절약하다",
          "전등을 끄다",
          "다회용 텀블러를 사용하다",
          "플라스틱 병을 재활용하다"
        ],
        "correctIndex": 2,
        "correctAnswer": "다회용 텀블러를 사용하다",
        "explanation": "'use reusable tumblers'는 '다회용 텀블러를 사용하다'입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's make campaign posters together.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "캠페인 포스터를 만들다",
          "전등을 끄다",
          "에너지와 물을 절약하다",
          "플라스틱 병을 재활용하다"
        ],
        "correctIndex": 0,
        "correctAnswer": "캠페인 포스터를 만들다",
        "explanation": "'make campaign posters'는 '캠페인 포스터를 만들다'입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's clean up our playground after school.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "에너지와 물을 절약하다",
          "플라스틱 병을 재활용하다",
          "전등을 끄다",
          "우리 운동장을 청소하다"
        ],
        "correctIndex": 3,
        "correctAnswer": "우리 운동장을 청소하다",
        "explanation": "'clean up our playground'는 '우리 운동장을 청소하다'입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's turn off the lights when leaving.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "전등을 끄다",
          "종이를 낭비하지 않다",
          "에너지와 물을 절약하다",
          "플라스틱 병을 재활용하다"
        ],
        "correctIndex": 0,
        "correctAnswer": "전등을 끄다",
        "explanation": "'turn off the lights'는 '전등을 끄다'입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's save energy and water for our Earth.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "전등을 끄다",
          "에너지와 물을 절약하다",
          "플라스틱 병을 재활용하다",
          "종이를 낭비하지 않다"
        ],
        "correctIndex": 1,
        "correctAnswer": "에너지와 물을 절약하다",
        "explanation": "'save energy and water'는 '에너지와 물을 절약하다'입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's recycle plastic bottles properly.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "에너지와 물을 절약하다",
          "전등을 끄다",
          "플라스틱 병을 재활용하다",
          "종이를 낭비하지 않다"
        ],
        "correctIndex": 2,
        "correctAnswer": "플라스틱 병을 재활용하다",
        "explanation": "'recycle plastic bottles'는 '플라스틱 병을 재활용하다'입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's do not waste paper in the classroom.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "플라스틱 병을 재활용하다",
          "에너지와 물을 절약하다",
          "전등을 끄다",
          "종이를 낭비하지 않다"
        ],
        "correctIndex": 3,
        "correctAnswer": "종이를 낭비하지 않다",
        "explanation": "'do not waste paper'는 '종이를 낭비하지 않다'입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's ride bicycles instead of cars to school.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "플라스틱 병을 재활용하다",
          "자동차 대신 자전거를 타다",
          "전등을 끄다",
          "에너지와 물을 절약하다"
        ],
        "correctIndex": 1,
        "correctAnswer": "자동차 대신 자전거를 타다",
        "explanation": "'ride bicycles instead of cars'는 '자동차 대신 자전거를 타다'입니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's use reusable tumblers every day.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "플라스틱 병을 재활용하다",
          "에너지와 물을 절약하다",
          "전등을 끄다",
          "다회용 텀블러를 사용하다"
        ],
        "correctIndex": 3,
        "correctAnswer": "다회용 텀블러를 사용하다",
        "explanation": "'use reusable tumblers'는 '다회용 텀블러를 사용하다'입니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's make campaign posters together.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "에너지와 물을 절약하다",
          "전등을 끄다",
          "플라스틱 병을 재활용하다",
          "캠페인 포스터를 만들다"
        ],
        "correctIndex": 3,
        "correctAnswer": "캠페인 포스터를 만들다",
        "explanation": "'make campaign posters'는 '캠페인 포스터를 만들다'입니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's clean up our playground after school.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "플라스틱 병을 재활용하다",
          "에너지와 물을 절약하다",
          "전등을 끄다",
          "우리 운동장을 청소하다"
        ],
        "correctIndex": 3,
        "correctAnswer": "우리 운동장을 청소하다",
        "explanation": "'clean up our playground'는 '우리 운동장을 청소하다'입니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's turn off the lights when leaving.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "전등을 끄다",
          "에너지와 물을 절약하다",
          "플라스틱 병을 재활용하다",
          "종이를 낭비하지 않다"
        ],
        "correctIndex": 0,
        "correctAnswer": "전등을 끄다",
        "explanation": "'turn off the lights'는 '전등을 끄다'입니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's save energy and water for our Earth.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "종이를 낭비하지 않다",
          "에너지와 물을 절약하다",
          "플라스틱 병을 재활용하다",
          "전등을 끄다"
        ],
        "correctIndex": 1,
        "correctAnswer": "에너지와 물을 절약하다",
        "explanation": "'save energy and water'는 '에너지와 물을 절약하다'입니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's recycle plastic bottles properly.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "종이를 낭비하지 않다",
          "전등을 끄다",
          "플라스틱 병을 재활용하다",
          "에너지와 물을 절약하다"
        ],
        "correctIndex": 2,
        "correctAnswer": "플라스틱 병을 재활용하다",
        "explanation": "'recycle plastic bottles'는 '플라스틱 병을 재활용하다'입니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's do not waste paper in the classroom.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "에너지와 물을 절약하다",
          "전등을 끄다",
          "종이를 낭비하지 않다",
          "플라스틱 병을 재활용하다"
        ],
        "correctIndex": 2,
        "correctAnswer": "종이를 낭비하지 않다",
        "explanation": "'do not waste paper'는 '종이를 낭비하지 않다'입니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's ride bicycles instead of cars to school.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "에너지와 물을 절약하다",
          "자동차 대신 자전거를 타다",
          "전등을 끄다",
          "플라스틱 병을 재활용하다"
        ],
        "correctIndex": 1,
        "correctAnswer": "자동차 대신 자전거를 타다",
        "explanation": "'ride bicycles instead of cars'는 '자동차 대신 자전거를 타다'입니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's use reusable tumblers every day.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "전등을 끄다",
          "에너지와 물을 절약하다",
          "플라스틱 병을 재활용하다",
          "다회용 텀블러를 사용하다"
        ],
        "correctIndex": 3,
        "correctAnswer": "다회용 텀블러를 사용하다",
        "explanation": "'use reusable tumblers'는 '다회용 텀블러를 사용하다'입니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's make campaign posters together.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "캠페인 포스터를 만들다",
          "플라스틱 병을 재활용하다",
          "전등을 끄다",
          "에너지와 물을 절약하다"
        ],
        "correctIndex": 0,
        "correctAnswer": "캠페인 포스터를 만들다",
        "explanation": "'make campaign posters'는 '캠페인 포스터를 만들다'입니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's clean up our playground after school.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "에너지와 물을 절약하다",
          "우리 운동장을 청소하다",
          "플라스틱 병을 재활용하다",
          "전등을 끄다"
        ],
        "correctIndex": 1,
        "correctAnswer": "우리 운동장을 청소하다",
        "explanation": "'clean up our playground'는 '우리 운동장을 청소하다'입니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's turn off the lights when leaving.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "전등을 끄다",
          "종이를 낭비하지 않다",
          "에너지와 물을 절약하다",
          "플라스틱 병을 재활용하다"
        ],
        "correctIndex": 0,
        "correctAnswer": "전등을 끄다",
        "explanation": "'turn off the lights'는 '전등을 끄다'입니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's save energy and water for our Earth.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "에너지와 물을 절약하다",
          "전등을 끄다",
          "플라스틱 병을 재활용하다",
          "종이를 낭비하지 않다"
        ],
        "correctIndex": 0,
        "correctAnswer": "에너지와 물을 절약하다",
        "explanation": "'save energy and water'는 '에너지와 물을 절약하다'입니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's recycle plastic bottles properly.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "종이를 낭비하지 않다",
          "전등을 끄다",
          "에너지와 물을 절약하다",
          "플라스틱 병을 재활용하다"
        ],
        "correctIndex": 3,
        "correctAnswer": "플라스틱 병을 재활용하다",
        "explanation": "'recycle plastic bottles'는 '플라스틱 병을 재활용하다'입니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's do not waste paper in the classroom.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "에너지와 물을 절약하다",
          "전등을 끄다",
          "종이를 낭비하지 않다",
          "플라스틱 병을 재활용하다"
        ],
        "correctIndex": 2,
        "correctAnswer": "종이를 낭비하지 않다",
        "explanation": "'do not waste paper'는 '종이를 낭비하지 않다'입니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's ride bicycles instead of cars to school.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "자동차 대신 자전거를 타다",
          "전등을 끄다",
          "에너지와 물을 절약하다",
          "플라스틱 병을 재활용하다"
        ],
        "correctIndex": 0,
        "correctAnswer": "자동차 대신 자전거를 타다",
        "explanation": "'ride bicycles instead of cars'는 '자동차 대신 자전거를 타다'입니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's use reusable tumblers every day.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "플라스틱 병을 재활용하다",
          "다회용 텀블러를 사용하다",
          "에너지와 물을 절약하다",
          "전등을 끄다"
        ],
        "correctIndex": 1,
        "correctAnswer": "다회용 텀블러를 사용하다",
        "explanation": "'use reusable tumblers'는 '다회용 텀블러를 사용하다'입니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's make campaign posters together.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "캠페인 포스터를 만들다",
          "에너지와 물을 절약하다",
          "전등을 끄다",
          "플라스틱 병을 재활용하다"
        ],
        "correctIndex": 0,
        "correctAnswer": "캠페인 포스터를 만들다",
        "explanation": "'make campaign posters'는 '캠페인 포스터를 만들다'입니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's clean up our playground after school.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "우리 운동장을 청소하다",
          "전등을 끄다",
          "에너지와 물을 절약하다",
          "플라스틱 병을 재활용하다"
        ],
        "correctIndex": 0,
        "correctAnswer": "우리 운동장을 청소하다",
        "explanation": "'clean up our playground'는 '우리 운동장을 청소하다'입니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's turn off the lights when leaving.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "전등을 끄다",
          "에너지와 물을 절약하다",
          "플라스틱 병을 재활용하다",
          "종이를 낭비하지 않다"
        ],
        "correctIndex": 0,
        "correctAnswer": "전등을 끄다",
        "explanation": "'turn off the lights'는 '전등을 끄다'입니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's save energy and water for our Earth.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "에너지와 물을 절약하다",
          "전등을 끄다",
          "플라스틱 병을 재활용하다",
          "종이를 낭비하지 않다"
        ],
        "correctIndex": 0,
        "correctAnswer": "에너지와 물을 절약하다",
        "explanation": "'save energy and water'는 '에너지와 물을 절약하다'입니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: We should protect our planet. B: Yes, let's recycle plastic bottles properly.",
        "question": "[듣기 · 3단원] 환경 보호 대화를 듣고, 두 사람이 실천하기로 당부한 행동은?",
        "options": [
          "플라스틱 병을 재활용하다",
          "전등을 끄다",
          "에너지와 물을 절약하다",
          "종이를 낭비하지 않다"
        ],
        "correctIndex": 0,
        "correctAnswer": "플라스틱 병을 재활용하다",
        "explanation": "'recycle plastic bottles'는 '플라스틱 병을 재활용하다'입니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "조동사 should의 쓰임",
        "options": [
          "We should turned off the lights.",
          "We should turning off the lights.",
          "We should to turn off the lights.",
          "We should turn off the lights."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should turn off the lights.",
        "explanation": "조동사 should 뒤에는 동사원형이 와야 합니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Because it's hot.",
          "I am a student.",
          "Sounds like a wonderful idea!",
          "Go straight one block."
        ],
        "correctIndex": 2,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [3단원] 관련 대화 상황",
        "options": [
          "Where is the post office?",
          "I am eating lunch right now.",
          "We should learn more about 보호하다 (protect).",
          "What time is it now?"
        ],
        "correctIndex": 2,
        "correctAnswer": "We should learn more about 보호하다 (protect).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (낭비하다)",
        "options": [
          "waste",
          "energy",
          "save",
          "protect"
        ],
        "correctIndex": 0,
        "correctAnswer": "waste",
        "explanation": "'낭비하다'에 해당하는 영어 단어는 'waste'입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "조동사 should의 쓰임",
        "options": [
          "We should turning off the lights.",
          "We should to turn off the lights.",
          "We should turn off the lights.",
          "We should turned off the lights."
        ],
        "correctIndex": 2,
        "correctAnswer": "We should turn off the lights.",
        "explanation": "조동사 should 뒤에는 동사원형이 와야 합니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Because it's hot.",
          "Go straight one block.",
          "I am a student.",
          "Sounds like a wonderful idea!"
        ],
        "correctIndex": 3,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [3단원] 관련 대화 상황",
        "options": [
          "What time is it now?",
          "Where is the post office?",
          "We should learn more about 전등, 빛 (light).",
          "I am eating lunch right now."
        ],
        "correctIndex": 2,
        "correctAnswer": "We should learn more about 전등, 빛 (light).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (병)",
        "options": [
          "bottle",
          "energy",
          "save",
          "protect"
        ],
        "correctIndex": 0,
        "correctAnswer": "bottle",
        "explanation": "'병'에 해당하는 영어 단어는 'bottle'입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "조동사 should의 쓰임",
        "options": [
          "We should turn off the lights.",
          "We should to turn off the lights.",
          "We should turning off the lights.",
          "We should turned off the lights."
        ],
        "correctIndex": 0,
        "correctAnswer": "We should turn off the lights.",
        "explanation": "조동사 should 뒤에는 동사원형이 와야 합니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Because it's hot.",
          "I am a student.",
          "Sounds like a wonderful idea!",
          "Go straight one block."
        ],
        "correctIndex": 2,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [3단원] 관련 대화 상황",
        "options": [
          "We should learn more about 절약하다, 구하다 (save).",
          "Where is the post office?",
          "What time is it now?",
          "I am eating lunch right now."
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 절약하다, 구하다 (save).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (에너지)",
        "options": [
          "waste",
          "protect",
          "save",
          "energy"
        ],
        "correctIndex": 3,
        "correctAnswer": "energy",
        "explanation": "'에너지'에 해당하는 영어 단어는 'energy'입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "조동사 should의 쓰임",
        "options": [
          "We should turned off the lights.",
          "We should turning off the lights.",
          "We should turn off the lights.",
          "We should to turn off the lights."
        ],
        "correctIndex": 2,
        "correctAnswer": "We should turn off the lights.",
        "explanation": "조동사 should 뒤에는 동사원형이 와야 합니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "I am a student.",
          "Because it's hot.",
          "Sounds like a wonderful idea!",
          "Go straight one block."
        ],
        "correctIndex": 2,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [3단원] 관련 대화 상황",
        "options": [
          "Where is the post office?",
          "I am eating lunch right now.",
          "What time is it now?",
          "We should learn more about 재활용하다 (recycle)."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should learn more about 재활용하다 (recycle).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (지구)",
        "options": [
          "energy",
          "save",
          "protect",
          "earth"
        ],
        "correctIndex": 3,
        "correctAnswer": "earth",
        "explanation": "'지구'에 해당하는 영어 단어는 'earth'입니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "조동사 should의 쓰임",
        "options": [
          "We should turned off the lights.",
          "We should turning off the lights.",
          "We should to turn off the lights.",
          "We should turn off the lights."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should turn off the lights.",
        "explanation": "조동사 should 뒤에는 동사원형이 와야 합니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "I am a student.",
          "Sounds like a wonderful idea!",
          "Go straight one block.",
          "Because it's hot."
        ],
        "correctIndex": 1,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [3단원] 관련 대화 상황",
        "options": [
          "What time is it now?",
          "Where is the post office?",
          "We should learn more about 종이 (paper).",
          "I am eating lunch right now."
        ],
        "correctIndex": 2,
        "correctAnswer": "We should learn more about 종이 (paper).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (포스터)",
        "options": [
          "protect",
          "poster",
          "save",
          "energy"
        ],
        "correctIndex": 1,
        "correctAnswer": "poster",
        "explanation": "'포스터'에 해당하는 영어 단어는 'poster'입니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "조동사 should의 쓰임",
        "options": [
          "We should to turn off the lights.",
          "We should turning off the lights.",
          "We should turned off the lights.",
          "We should turn off the lights."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should turn off the lights.",
        "explanation": "조동사 should 뒤에는 동사원형이 와야 합니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Sounds like a wonderful idea!",
          "I am a student.",
          "Because it's hot.",
          "Go straight one block."
        ],
        "correctIndex": 0,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [3단원] 관련 대화 상황",
        "options": [
          "We should learn more about 보호하다 (protect).",
          "Where is the post office?",
          "I am eating lunch right now.",
          "What time is it now?"
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 보호하다 (protect).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (낭비하다)",
        "options": [
          "protect",
          "energy",
          "save",
          "waste"
        ],
        "correctIndex": 3,
        "correctAnswer": "waste",
        "explanation": "'낭비하다'에 해당하는 영어 단어는 'waste'입니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "조동사 should의 쓰임",
        "options": [
          "We should turned off the lights.",
          "We should turn off the lights.",
          "We should to turn off the lights.",
          "We should turning off the lights."
        ],
        "correctIndex": 1,
        "correctAnswer": "We should turn off the lights.",
        "explanation": "조동사 should 뒤에는 동사원형이 와야 합니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "I am a student.",
          "Sounds like a wonderful idea!",
          "Go straight one block.",
          "Because it's hot."
        ],
        "correctIndex": 1,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [3단원] 관련 대화 상황",
        "options": [
          "I am eating lunch right now.",
          "What time is it now?",
          "Where is the post office?",
          "We should learn more about 전등, 빛 (light)."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should learn more about 전등, 빛 (light).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (병)",
        "options": [
          "energy",
          "save",
          "bottle",
          "protect"
        ],
        "correctIndex": 2,
        "correctAnswer": "bottle",
        "explanation": "'병'에 해당하는 영어 단어는 'bottle'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "조동사 should의 쓰임",
        "options": [
          "We should turned off the lights.",
          "We should turning off the lights.",
          "We should turn off the lights.",
          "We should to turn off the lights."
        ],
        "correctIndex": 2,
        "correctAnswer": "We should turn off the lights.",
        "explanation": "조동사 should 뒤에는 동사원형이 와야 합니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Because it's hot.",
          "Go straight one block.",
          "I am a student.",
          "Sounds like a wonderful idea!"
        ],
        "correctIndex": 3,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [3단원] 관련 대화 상황",
        "options": [
          "I am eating lunch right now.",
          "What time is it now?",
          "Where is the post office?",
          "We should learn more about 절약하다, 구하다 (save)."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should learn more about 절약하다, 구하다 (save).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (에너지)",
        "options": [
          "save",
          "waste",
          "energy",
          "protect"
        ],
        "correctIndex": 2,
        "correctAnswer": "energy",
        "explanation": "'에너지'에 해당하는 영어 단어는 'energy'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "조동사 should의 쓰임",
        "options": [
          "We should turn off the lights.",
          "We should turned off the lights.",
          "We should to turn off the lights.",
          "We should turning off the lights."
        ],
        "correctIndex": 0,
        "correctAnswer": "We should turn off the lights.",
        "explanation": "조동사 should 뒤에는 동사원형이 와야 합니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Because it's hot.",
          "I am a student.",
          "Go straight one block.",
          "Sounds like a wonderful idea!"
        ],
        "correctIndex": 3,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 3단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [3단원] 관련 대화 상황",
        "options": [
          "What time is it now?",
          "I am eating lunch right now.",
          "Where is the post office?",
          "We should learn more about 재활용하다 (recycle)."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should learn more about 재활용하다 (recycle).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 3단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"절약하다, 구하다\" [힌트: s__e]",
        "correctAnswer": "save",
        "explanation": "'절약하다, 구하다'은(는) 영어로 'save'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 3단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"에너지\" [힌트: e____y]",
        "correctAnswer": "energy",
        "explanation": "'에너지'은(는) 영어로 'energy'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 3단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"보호하다\" [힌트: p_____t]",
        "correctAnswer": "protect",
        "explanation": "'보호하다'은(는) 영어로 'protect'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 3단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"낭비하다\" [힌트: w___e]",
        "correctAnswer": "waste",
        "explanation": "'낭비하다'은(는) 영어로 'waste'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 3단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"재활용하다\" [힌트: r_____e]",
        "correctAnswer": "recycle",
        "explanation": "'재활용하다'은(는) 영어로 'recycle'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 3단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"지구\" [힌트: e___h]",
        "correctAnswer": "earth",
        "explanation": "'지구'은(는) 영어로 'earth'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 3단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"전등, 빛\" [힌트: l___t]",
        "correctAnswer": "light",
        "explanation": "'전등, 빛'은(는) 영어로 'light'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 3단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"병\" [힌트: b____e]",
        "correctAnswer": "bottle",
        "explanation": "'병'은(는) 영어로 'bottle'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 3단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"종이\" [힌트: p___r]",
        "correctAnswer": "paper",
        "explanation": "'종이'은(는) 영어로 'paper'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 3단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"포스터\" [힌트: p____r]",
        "correctAnswer": "poster",
        "explanation": "'포스터'은(는) 영어로 'poster'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "우리는 전등을 끄다해야 해.",
        "chips": [
          "off",
          "turn",
          ".",
          "should",
          "lights",
          "the",
          "We"
        ],
        "correctAnswer": "We should turn off the lights.",
        "explanation": "We should turn off the lights. [우리는 전등을 끄다해야 해.]"
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "우리는 에너지와 물을 절약하다해야 해.",
        "chips": [
          "water",
          "save",
          "should",
          "We",
          "and",
          "energy",
          "."
        ],
        "correctAnswer": "We should save energy and water.",
        "explanation": "We should save energy and water. [우리는 에너지와 물을 절약하다해야 해.]"
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "우리는 플라스틱 병을 재활용하다해야 해.",
        "chips": [
          ".",
          "recycle",
          "plastic",
          "We",
          "should",
          "bottles"
        ],
        "correctAnswer": "We should recycle plastic bottles.",
        "explanation": "We should recycle plastic bottles. [우리는 플라스틱 병을 재활용하다해야 해.]"
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "우리는 종이를 낭비하지 않다해야 해.",
        "chips": [
          "waste",
          ".",
          "do",
          "not",
          "should",
          "We",
          "paper"
        ],
        "correctAnswer": "We should do not waste paper.",
        "explanation": "We should do not waste paper. [우리는 종이를 낭비하지 않다해야 해.]"
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "우리는 자동차 대신 자전거를 타다해야 해.",
        "chips": [
          "bicycles",
          "should",
          "cars",
          "ride",
          "We",
          "instead",
          ".",
          "of"
        ],
        "correctAnswer": "We should ride bicycles instead of cars.",
        "explanation": "We should ride bicycles instead of cars. [우리는 자동차 대신 자전거를 타다해야 해.]"
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "우리는 다회용 텀블러를 사용하다해야 해.",
        "chips": [
          "We",
          "should",
          "tumblers",
          "reusable",
          "use",
          "."
        ],
        "correctAnswer": "We should use reusable tumblers.",
        "explanation": "We should use reusable tumblers. [우리는 다회용 텀블러를 사용하다해야 해.]"
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "우리는 캠페인 포스터를 만들다해야 해.",
        "chips": [
          ".",
          "posters",
          "campaign",
          "make",
          "should",
          "We"
        ],
        "correctAnswer": "We should make campaign posters.",
        "explanation": "We should make campaign posters. [우리는 캠페인 포스터를 만들다해야 해.]"
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "우리는 우리 운동장을 청소하다해야 해.",
        "chips": [
          "up",
          ".",
          "playground",
          "clean",
          "our",
          "should",
          "We"
        ],
        "correctAnswer": "We should clean up our playground.",
        "explanation": "We should clean up our playground. [우리는 우리 운동장을 청소하다해야 해.]"
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "우리는 전등을 끄다해야 해.",
        "chips": [
          "We",
          "off",
          "the",
          "should",
          "turn",
          "lights",
          "."
        ],
        "correctAnswer": "We should turn off the lights.",
        "explanation": "We should turn off the lights. [우리는 전등을 끄다해야 해.]"
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "우리는 에너지와 물을 절약하다해야 해.",
        "chips": [
          "We",
          "should",
          "water",
          "and",
          "save",
          ".",
          "energy"
        ],
        "correctAnswer": "We should save energy and water.",
        "explanation": "We should save energy and water. [우리는 에너지와 물을 절약하다해야 해.]"
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "우리는 플라스틱 병을 재활용하다해야 해.",
        "chips": [
          "recycle",
          "bottles",
          ".",
          "should",
          "plastic",
          "We"
        ],
        "correctAnswer": "We should recycle plastic bottles.",
        "explanation": "We should recycle plastic bottles. [우리는 플라스틱 병을 재활용하다해야 해.]"
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "우리는 종이를 낭비하지 않다해야 해.",
        "chips": [
          "waste",
          "We",
          "not",
          "paper",
          "should",
          "do",
          "."
        ],
        "correctAnswer": "We should do not waste paper.",
        "explanation": "We should do not waste paper. [우리는 종이를 낭비하지 않다해야 해.]"
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "우리는 자동차 대신 자전거를 타다해야 해.",
        "chips": [
          "ride",
          "bicycles",
          ".",
          "should",
          "We",
          "instead",
          "of",
          "cars"
        ],
        "correctAnswer": "We should ride bicycles instead of cars.",
        "explanation": "We should ride bicycles instead of cars. [우리는 자동차 대신 자전거를 타다해야 해.]"
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "우리는 다회용 텀블러를 사용하다해야 해.",
        "chips": [
          "tumblers",
          "We",
          "reusable",
          "should",
          "use",
          "."
        ],
        "correctAnswer": "We should use reusable tumblers.",
        "explanation": "We should use reusable tumblers. [우리는 다회용 텀블러를 사용하다해야 해.]"
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "우리는 캠페인 포스터를 만들다해야 해.",
        "chips": [
          "posters",
          "campaign",
          "make",
          "should",
          "We",
          "."
        ],
        "correctAnswer": "We should make campaign posters.",
        "explanation": "We should make campaign posters. [우리는 캠페인 포스터를 만들다해야 해.]"
      },
      {
        "id": 96,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 3단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 우리는 에너지를 절약하고 지구를 보호해야 해.",
        "chips": [
          "energy",
          "We",
          ".",
          "the",
          "should",
          "and",
          "save",
          "protect",
          "Earth"
        ],
        "correctAnswer": "We should save energy and protect the Earth.",
        "explanation": "We should save energy and protect the Earth. [우리는 에너지를 절약하고 지구를 보호해야 해.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 97,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 3단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 내가 가장 좋아하는 계절은 꽃이 피는 봄이야.",
        "chips": [
          "bloom",
          "is",
          "season",
          "spring",
          "because",
          ".",
          "favorite",
          "My",
          "flowers"
        ],
        "correctAnswer": "My favorite season is spring because flowers bloom.",
        "explanation": "My favorite season is spring because flowers bloom. [내가 가장 좋아하는 계절은 꽃이 피는 봄이야.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 98,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 3단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 두 블록 직진해서 모퉁이에서 좌회전하세요.",
        "chips": [
          "at",
          ".",
          "the",
          "left",
          "Go",
          "straight",
          "two",
          "blocks",
          "corner",
          "and",
          "turn"
        ],
        "correctAnswer": "Go straight two blocks and turn left at the corner.",
        "explanation": "Go straight two blocks and turn left at the corner. [두 블록 직진해서 모퉁이에서 좌회전하세요.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 99,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 3단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 너는 의사 진료를 받고 약을 먹어야 해.",
        "chips": [
          "You",
          "and",
          "should",
          "medicine",
          "doctor",
          ".",
          "see",
          "a",
          "take"
        ],
        "correctAnswer": "You should see a doctor and take medicine.",
        "explanation": "You should see a doctor and take medicine. [너는 의사 진료를 받고 약을 먹어야 해.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 3단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 우리 이번 주 토요일에 함께 공원에 가는 게 어때?",
        "chips": [
          "this",
          "don't",
          "the",
          "Saturday",
          "park",
          "?",
          "Why",
          "together",
          "we",
          "to",
          "go"
        ],
        "correctAnswer": "Why don't we go to the park together this Saturday?",
        "explanation": "Why don't we go to the park together this Saturday? [우리 이번 주 토요일에 함께 공원에 가는 게 어때?] 축하합니다! 골든벨 완주! 🔔"
      }
    ]
  },
  "6G_L04": {
    "name": "4단원: 감정과 심리 · 이유 묻기 (Why are you so happy?)",
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
        "audioText": "A: Why are you so happy today? B: Because today is my birthday.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(행복한)과 그 이유로 알맞은 것은?",
        "options": [
          "신나는 (내일이 학교 축제이다)",
          "행복한 (오늘이 내 생일이다)",
          "화난 상태 (숙제를 잊어버림)",
          "걱정스러운 (가장 좋아하는 공책을 잃어버렸다)"
        ],
        "correctIndex": 1,
        "correctAnswer": "행복한 (오늘이 내 생일이다)",
        "explanation": "'Why are you so happy? Because today is my birthday'입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Why are you so excited today? B: Because tomorrow is the school festival.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(신나는)과 그 이유로 알맞은 것은?",
        "options": [
          "신나는 (내일이 학교 축제이다)",
          "행복한 (오늘이 내 생일이다)",
          "걱정스러운 (가장 좋아하는 공책을 잃어버렸다)",
          "화난 상태 (숙제를 잊어버림)"
        ],
        "correctIndex": 0,
        "correctAnswer": "신나는 (내일이 학교 축제이다)",
        "explanation": "'Why are you so excited? Because tomorrow is the school festival'입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Why are you so worried today? B: Because I lost my favorite notebook.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(걱정스러운)과 그 이유로 알맞은 것은?",
        "options": [
          "행복한 (오늘이 내 생일이다)",
          "화난 상태 (숙제를 잊어버림)",
          "걱정스러운 (가장 좋아하는 공책을 잃어버렸다)",
          "신나는 (내일이 학교 축제이다)"
        ],
        "correctIndex": 2,
        "correctAnswer": "걱정스러운 (가장 좋아하는 공책을 잃어버렸다)",
        "explanation": "'Why are you so worried? Because I lost my favorite notebook'입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Why are you so sad today? B: Because my best friend moved to another city.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(슬픈)과 그 이유로 알맞은 것은?",
        "options": [
          "슬픈 (단짝 친구가 다른 도시로 이사 갔다)",
          "화난 상태 (숙제를 잊어버림)",
          "행복한 (오늘이 내 생일이다)",
          "신나는 (내일이 학교 축제이다)"
        ],
        "correctIndex": 0,
        "correctAnswer": "슬픈 (단짝 친구가 다른 도시로 이사 갔다)",
        "explanation": "'Why are you so sad? Because my best friend moved to another city'입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Why are you so nervous today? B: Because I have an English speech contest.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(긴장한)과 그 이유로 알맞은 것은?",
        "options": [
          "신나는 (내일이 학교 축제이다)",
          "행복한 (오늘이 내 생일이다)",
          "긴장한 (영어 말하기 대회가 있다)",
          "화난 상태 (숙제를 잊어버림)"
        ],
        "correctIndex": 2,
        "correctAnswer": "긴장한 (영어 말하기 대회가 있다)",
        "explanation": "'Why are you so nervous? Because I have an English speech contest'입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Why are you so proud today? B: Because we won first prize in soccer.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(자랑스러운)과 그 이유로 알맞은 것은?",
        "options": [
          "자랑스러운 (우리가 축구에서 1등 상을 받았다)",
          "화난 상태 (숙제를 잊어버림)",
          "행복한 (오늘이 내 생일이다)",
          "신나는 (내일이 학교 축제이다)"
        ],
        "correctIndex": 0,
        "correctAnswer": "자랑스러운 (우리가 축구에서 1등 상을 받았다)",
        "explanation": "'Why are you so proud? Because we won first prize in soccer'입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Why are you so happy today? B: Because today is my birthday.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(행복한)과 그 이유로 알맞은 것은?",
        "options": [
          "행복한 (오늘이 내 생일이다)",
          "화난 상태 (숙제를 잊어버림)",
          "신나는 (내일이 학교 축제이다)",
          "걱정스러운 (가장 좋아하는 공책을 잃어버렸다)"
        ],
        "correctIndex": 0,
        "correctAnswer": "행복한 (오늘이 내 생일이다)",
        "explanation": "'Why are you so happy? Because today is my birthday'입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Why are you so excited today? B: Because tomorrow is the school festival.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(신나는)과 그 이유로 알맞은 것은?",
        "options": [
          "신나는 (내일이 학교 축제이다)",
          "행복한 (오늘이 내 생일이다)",
          "걱정스러운 (가장 좋아하는 공책을 잃어버렸다)",
          "화난 상태 (숙제를 잊어버림)"
        ],
        "correctIndex": 0,
        "correctAnswer": "신나는 (내일이 학교 축제이다)",
        "explanation": "'Why are you so excited? Because tomorrow is the school festival'입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Why are you so worried today? B: Because I lost my favorite notebook.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(걱정스러운)과 그 이유로 알맞은 것은?",
        "options": [
          "화난 상태 (숙제를 잊어버림)",
          "행복한 (오늘이 내 생일이다)",
          "걱정스러운 (가장 좋아하는 공책을 잃어버렸다)",
          "신나는 (내일이 학교 축제이다)"
        ],
        "correctIndex": 2,
        "correctAnswer": "걱정스러운 (가장 좋아하는 공책을 잃어버렸다)",
        "explanation": "'Why are you so worried? Because I lost my favorite notebook'입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Why are you so sad today? B: Because my best friend moved to another city.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(슬픈)과 그 이유로 알맞은 것은?",
        "options": [
          "행복한 (오늘이 내 생일이다)",
          "화난 상태 (숙제를 잊어버림)",
          "신나는 (내일이 학교 축제이다)",
          "슬픈 (단짝 친구가 다른 도시로 이사 갔다)"
        ],
        "correctIndex": 3,
        "correctAnswer": "슬픈 (단짝 친구가 다른 도시로 이사 갔다)",
        "explanation": "'Why are you so sad? Because my best friend moved to another city'입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why are you so nervous today? B: Because I have an English speech contest.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(긴장한)과 그 이유로 알맞은 것은?",
        "options": [
          "신나는 (내일이 학교 축제이다)",
          "화난 상태 (숙제를 잊어버림)",
          "행복한 (오늘이 내 생일이다)",
          "긴장한 (영어 말하기 대회가 있다)"
        ],
        "correctIndex": 3,
        "correctAnswer": "긴장한 (영어 말하기 대회가 있다)",
        "explanation": "'Why are you so nervous? Because I have an English speech contest'입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why are you so proud today? B: Because we won first prize in soccer.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(자랑스러운)과 그 이유로 알맞은 것은?",
        "options": [
          "행복한 (오늘이 내 생일이다)",
          "자랑스러운 (우리가 축구에서 1등 상을 받았다)",
          "신나는 (내일이 학교 축제이다)",
          "화난 상태 (숙제를 잊어버림)"
        ],
        "correctIndex": 1,
        "correctAnswer": "자랑스러운 (우리가 축구에서 1등 상을 받았다)",
        "explanation": "'Why are you so proud? Because we won first prize in soccer'입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why are you so happy today? B: Because today is my birthday.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(행복한)과 그 이유로 알맞은 것은?",
        "options": [
          "걱정스러운 (가장 좋아하는 공책을 잃어버렸다)",
          "화난 상태 (숙제를 잊어버림)",
          "신나는 (내일이 학교 축제이다)",
          "행복한 (오늘이 내 생일이다)"
        ],
        "correctIndex": 3,
        "correctAnswer": "행복한 (오늘이 내 생일이다)",
        "explanation": "'Why are you so happy? Because today is my birthday'입니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why are you so excited today? B: Because tomorrow is the school festival.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(신나는)과 그 이유로 알맞은 것은?",
        "options": [
          "화난 상태 (숙제를 잊어버림)",
          "걱정스러운 (가장 좋아하는 공책을 잃어버렸다)",
          "행복한 (오늘이 내 생일이다)",
          "신나는 (내일이 학교 축제이다)"
        ],
        "correctIndex": 3,
        "correctAnswer": "신나는 (내일이 학교 축제이다)",
        "explanation": "'Why are you so excited? Because tomorrow is the school festival'입니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why are you so worried today? B: Because I lost my favorite notebook.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(걱정스러운)과 그 이유로 알맞은 것은?",
        "options": [
          "화난 상태 (숙제를 잊어버림)",
          "신나는 (내일이 학교 축제이다)",
          "행복한 (오늘이 내 생일이다)",
          "걱정스러운 (가장 좋아하는 공책을 잃어버렸다)"
        ],
        "correctIndex": 3,
        "correctAnswer": "걱정스러운 (가장 좋아하는 공책을 잃어버렸다)",
        "explanation": "'Why are you so worried? Because I lost my favorite notebook'입니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why are you so sad today? B: Because my best friend moved to another city.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(슬픈)과 그 이유로 알맞은 것은?",
        "options": [
          "행복한 (오늘이 내 생일이다)",
          "화난 상태 (숙제를 잊어버림)",
          "슬픈 (단짝 친구가 다른 도시로 이사 갔다)",
          "신나는 (내일이 학교 축제이다)"
        ],
        "correctIndex": 2,
        "correctAnswer": "슬픈 (단짝 친구가 다른 도시로 이사 갔다)",
        "explanation": "'Why are you so sad? Because my best friend moved to another city'입니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why are you so nervous today? B: Because I have an English speech contest.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(긴장한)과 그 이유로 알맞은 것은?",
        "options": [
          "화난 상태 (숙제를 잊어버림)",
          "신나는 (내일이 학교 축제이다)",
          "행복한 (오늘이 내 생일이다)",
          "긴장한 (영어 말하기 대회가 있다)"
        ],
        "correctIndex": 3,
        "correctAnswer": "긴장한 (영어 말하기 대회가 있다)",
        "explanation": "'Why are you so nervous? Because I have an English speech contest'입니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why are you so proud today? B: Because we won first prize in soccer.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(자랑스러운)과 그 이유로 알맞은 것은?",
        "options": [
          "자랑스러운 (우리가 축구에서 1등 상을 받았다)",
          "행복한 (오늘이 내 생일이다)",
          "신나는 (내일이 학교 축제이다)",
          "화난 상태 (숙제를 잊어버림)"
        ],
        "correctIndex": 0,
        "correctAnswer": "자랑스러운 (우리가 축구에서 1등 상을 받았다)",
        "explanation": "'Why are you so proud? Because we won first prize in soccer'입니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why are you so happy today? B: Because today is my birthday.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(행복한)과 그 이유로 알맞은 것은?",
        "options": [
          "신나는 (내일이 학교 축제이다)",
          "행복한 (오늘이 내 생일이다)",
          "화난 상태 (숙제를 잊어버림)",
          "걱정스러운 (가장 좋아하는 공책을 잃어버렸다)"
        ],
        "correctIndex": 1,
        "correctAnswer": "행복한 (오늘이 내 생일이다)",
        "explanation": "'Why are you so happy? Because today is my birthday'입니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why are you so excited today? B: Because tomorrow is the school festival.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(신나는)과 그 이유로 알맞은 것은?",
        "options": [
          "신나는 (내일이 학교 축제이다)",
          "행복한 (오늘이 내 생일이다)",
          "걱정스러운 (가장 좋아하는 공책을 잃어버렸다)",
          "화난 상태 (숙제를 잊어버림)"
        ],
        "correctIndex": 0,
        "correctAnswer": "신나는 (내일이 학교 축제이다)",
        "explanation": "'Why are you so excited? Because tomorrow is the school festival'입니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why are you so worried today? B: Because I lost my favorite notebook.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(걱정스러운)과 그 이유로 알맞은 것은?",
        "options": [
          "걱정스러운 (가장 좋아하는 공책을 잃어버렸다)",
          "행복한 (오늘이 내 생일이다)",
          "신나는 (내일이 학교 축제이다)",
          "화난 상태 (숙제를 잊어버림)"
        ],
        "correctIndex": 0,
        "correctAnswer": "걱정스러운 (가장 좋아하는 공책을 잃어버렸다)",
        "explanation": "'Why are you so worried? Because I lost my favorite notebook'입니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why are you so sad today? B: Because my best friend moved to another city.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(슬픈)과 그 이유로 알맞은 것은?",
        "options": [
          "화난 상태 (숙제를 잊어버림)",
          "신나는 (내일이 학교 축제이다)",
          "행복한 (오늘이 내 생일이다)",
          "슬픈 (단짝 친구가 다른 도시로 이사 갔다)"
        ],
        "correctIndex": 3,
        "correctAnswer": "슬픈 (단짝 친구가 다른 도시로 이사 갔다)",
        "explanation": "'Why are you so sad? Because my best friend moved to another city'입니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why are you so nervous today? B: Because I have an English speech contest.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(긴장한)과 그 이유로 알맞은 것은?",
        "options": [
          "화난 상태 (숙제를 잊어버림)",
          "신나는 (내일이 학교 축제이다)",
          "행복한 (오늘이 내 생일이다)",
          "긴장한 (영어 말하기 대회가 있다)"
        ],
        "correctIndex": 3,
        "correctAnswer": "긴장한 (영어 말하기 대회가 있다)",
        "explanation": "'Why are you so nervous? Because I have an English speech contest'입니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why are you so proud today? B: Because we won first prize in soccer.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(자랑스러운)과 그 이유로 알맞은 것은?",
        "options": [
          "신나는 (내일이 학교 축제이다)",
          "화난 상태 (숙제를 잊어버림)",
          "행복한 (오늘이 내 생일이다)",
          "자랑스러운 (우리가 축구에서 1등 상을 받았다)"
        ],
        "correctIndex": 3,
        "correctAnswer": "자랑스러운 (우리가 축구에서 1등 상을 받았다)",
        "explanation": "'Why are you so proud? Because we won first prize in soccer'입니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why are you so happy today? B: Because today is my birthday.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(행복한)과 그 이유로 알맞은 것은?",
        "options": [
          "행복한 (오늘이 내 생일이다)",
          "신나는 (내일이 학교 축제이다)",
          "걱정스러운 (가장 좋아하는 공책을 잃어버렸다)",
          "화난 상태 (숙제를 잊어버림)"
        ],
        "correctIndex": 0,
        "correctAnswer": "행복한 (오늘이 내 생일이다)",
        "explanation": "'Why are you so happy? Because today is my birthday'입니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Why are you so excited today? B: Because tomorrow is the school festival.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(신나는)과 그 이유로 알맞은 것은?",
        "options": [
          "신나는 (내일이 학교 축제이다)",
          "행복한 (오늘이 내 생일이다)",
          "걱정스러운 (가장 좋아하는 공책을 잃어버렸다)",
          "화난 상태 (숙제를 잊어버림)"
        ],
        "correctIndex": 0,
        "correctAnswer": "신나는 (내일이 학교 축제이다)",
        "explanation": "'Why are you so excited? Because tomorrow is the school festival'입니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Why are you so worried today? B: Because I lost my favorite notebook.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(걱정스러운)과 그 이유로 알맞은 것은?",
        "options": [
          "신나는 (내일이 학교 축제이다)",
          "걱정스러운 (가장 좋아하는 공책을 잃어버렸다)",
          "행복한 (오늘이 내 생일이다)",
          "화난 상태 (숙제를 잊어버림)"
        ],
        "correctIndex": 1,
        "correctAnswer": "걱정스러운 (가장 좋아하는 공책을 잃어버렸다)",
        "explanation": "'Why are you so worried? Because I lost my favorite notebook'입니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Why are you so sad today? B: Because my best friend moved to another city.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(슬픈)과 그 이유로 알맞은 것은?",
        "options": [
          "화난 상태 (숙제를 잊어버림)",
          "슬픈 (단짝 친구가 다른 도시로 이사 갔다)",
          "행복한 (오늘이 내 생일이다)",
          "신나는 (내일이 학교 축제이다)"
        ],
        "correctIndex": 1,
        "correctAnswer": "슬픈 (단짝 친구가 다른 도시로 이사 갔다)",
        "explanation": "'Why are you so sad? Because my best friend moved to another city'입니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Why are you so nervous today? B: Because I have an English speech contest.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(긴장한)과 그 이유로 알맞은 것은?",
        "options": [
          "긴장한 (영어 말하기 대회가 있다)",
          "화난 상태 (숙제를 잊어버림)",
          "행복한 (오늘이 내 생일이다)",
          "신나는 (내일이 학교 축제이다)"
        ],
        "correctIndex": 0,
        "correctAnswer": "긴장한 (영어 말하기 대회가 있다)",
        "explanation": "'Why are you so nervous? Because I have an English speech contest'입니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Why are you so proud today? B: Because we won first prize in soccer.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(자랑스러운)과 그 이유로 알맞은 것은?",
        "options": [
          "자랑스러운 (우리가 축구에서 1등 상을 받았다)",
          "행복한 (오늘이 내 생일이다)",
          "신나는 (내일이 학교 축제이다)",
          "화난 상태 (숙제를 잊어버림)"
        ],
        "correctIndex": 0,
        "correctAnswer": "자랑스러운 (우리가 축구에서 1등 상을 받았다)",
        "explanation": "'Why are you so proud? Because we won first prize in soccer'입니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Why are you so happy today? B: Because today is my birthday.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(행복한)과 그 이유로 알맞은 것은?",
        "options": [
          "화난 상태 (숙제를 잊어버림)",
          "걱정스러운 (가장 좋아하는 공책을 잃어버렸다)",
          "신나는 (내일이 학교 축제이다)",
          "행복한 (오늘이 내 생일이다)"
        ],
        "correctIndex": 3,
        "correctAnswer": "행복한 (오늘이 내 생일이다)",
        "explanation": "'Why are you so happy? Because today is my birthday'입니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Why are you so excited today? B: Because tomorrow is the school festival.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(신나는)과 그 이유로 알맞은 것은?",
        "options": [
          "걱정스러운 (가장 좋아하는 공책을 잃어버렸다)",
          "행복한 (오늘이 내 생일이다)",
          "신나는 (내일이 학교 축제이다)",
          "화난 상태 (숙제를 잊어버림)"
        ],
        "correctIndex": 2,
        "correctAnswer": "신나는 (내일이 학교 축제이다)",
        "explanation": "'Why are you so excited? Because tomorrow is the school festival'입니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Why are you so worried today? B: Because I lost my favorite notebook.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(걱정스러운)과 그 이유로 알맞은 것은?",
        "options": [
          "화난 상태 (숙제를 잊어버림)",
          "신나는 (내일이 학교 축제이다)",
          "행복한 (오늘이 내 생일이다)",
          "걱정스러운 (가장 좋아하는 공책을 잃어버렸다)"
        ],
        "correctIndex": 3,
        "correctAnswer": "걱정스러운 (가장 좋아하는 공책을 잃어버렸다)",
        "explanation": "'Why are you so worried? Because I lost my favorite notebook'입니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Why are you so sad today? B: Because my best friend moved to another city.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(슬픈)과 그 이유로 알맞은 것은?",
        "options": [
          "행복한 (오늘이 내 생일이다)",
          "화난 상태 (숙제를 잊어버림)",
          "신나는 (내일이 학교 축제이다)",
          "슬픈 (단짝 친구가 다른 도시로 이사 갔다)"
        ],
        "correctIndex": 3,
        "correctAnswer": "슬픈 (단짝 친구가 다른 도시로 이사 갔다)",
        "explanation": "'Why are you so sad? Because my best friend moved to another city'입니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Why are you so nervous today? B: Because I have an English speech contest.",
        "question": "[듣기 · 4단원] 대화를 듣고, 말하는 사람의 기분(긴장한)과 그 이유로 알맞은 것은?",
        "options": [
          "화난 상태 (숙제를 잊어버림)",
          "신나는 (내일이 학교 축제이다)",
          "행복한 (오늘이 내 생일이다)",
          "긴장한 (영어 말하기 대회가 있다)"
        ],
        "correctIndex": 3,
        "correctAnswer": "긴장한 (영어 말하기 대회가 있다)",
        "explanation": "'Why are you so nervous? Because I have an English speech contest'입니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I love this beautiful happy.",
          "I love this beautifully happy.",
          "I loving this happy.",
          "I loves this happy."
        ],
        "correctIndex": 0,
        "correctAnswer": "I love this beautiful happy.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Why are you so happy?\nB: ____________________________________",
        "options": [
          "Because it is raining outside.",
          "Because I have a toothache.",
          "Because I am busy.",
          "Because today is my birthday!"
        ],
        "correctIndex": 3,
        "correctAnswer": "Because today is my birthday!",
        "explanation": "기쁜 이유를 묻는 질문에는 긍정적인 이유가 와야 합니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [4단원] 관련 대화 상황",
        "options": [
          "We should learn more about 신나는 (excited).",
          "Where is the post office?",
          "What time is it now?",
          "I am eating lunch right now."
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 신나는 (excited).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (긴장한)",
        "options": [
          "nervous",
          "excited",
          "worried",
          "happy"
        ],
        "correctIndex": 0,
        "correctAnswer": "nervous",
        "explanation": "'긴장한'에 해당하는 영어 단어는 'nervous'입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loving this sad.",
          "I loves this sad.",
          "I love this beautifully sad.",
          "I love this beautiful sad."
        ],
        "correctIndex": 3,
        "correctAnswer": "I love this beautiful sad.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Why are you so happy?\nB: ____________________________________",
        "options": [
          "Because it is raining outside.",
          "Because today is my birthday!",
          "Because I have a toothache.",
          "Because I am busy."
        ],
        "correctIndex": 1,
        "correctAnswer": "Because today is my birthday!",
        "explanation": "기쁜 이유를 묻는 질문에는 긍정적인 이유가 와야 합니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [4단원] 관련 대화 상황",
        "options": [
          "What time is it now?",
          "Where is the post office?",
          "I am eating lunch right now.",
          "We should learn more about 잘못된, 이상한 (wrong)."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should learn more about 잘못된, 이상한 (wrong).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (생일)",
        "options": [
          "birthday",
          "excited",
          "happy",
          "worried"
        ],
        "correctIndex": 0,
        "correctAnswer": "birthday",
        "explanation": "'생일'에 해당하는 영어 단어는 'birthday'입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I love this beautiful prize.",
          "I love this beautifully prize.",
          "I loving this prize.",
          "I loves this prize."
        ],
        "correctIndex": 0,
        "correctAnswer": "I love this beautiful prize.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Why are you so happy?\nB: ____________________________________",
        "options": [
          "Because I am busy.",
          "Because I have a toothache.",
          "Because today is my birthday!",
          "Because it is raining outside."
        ],
        "correctIndex": 2,
        "correctAnswer": "Because today is my birthday!",
        "explanation": "기쁜 이유를 묻는 질문에는 긍정적인 이유가 와야 합니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [4단원] 관련 대화 상황",
        "options": [
          "What time is it now?",
          "I am eating lunch right now.",
          "We should learn more about 행복한 (happy).",
          "Where is the post office?"
        ],
        "correctIndex": 2,
        "correctAnswer": "We should learn more about 행복한 (happy).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (걱정스러운)",
        "options": [
          "excited",
          "nervous",
          "happy",
          "worried"
        ],
        "correctIndex": 3,
        "correctAnswer": "worried",
        "explanation": "'걱정스러운'에 해당하는 영어 단어는 'worried'입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loving this excited.",
          "I love this beautifully excited.",
          "I love this beautiful excited.",
          "I loves this excited."
        ],
        "correctIndex": 2,
        "correctAnswer": "I love this beautiful excited.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Why are you so happy?\nB: ____________________________________",
        "options": [
          "Because today is my birthday!",
          "Because I have a toothache.",
          "Because I am busy.",
          "Because it is raining outside."
        ],
        "correctIndex": 0,
        "correctAnswer": "Because today is my birthday!",
        "explanation": "기쁜 이유를 묻는 질문에는 긍정적인 이유가 와야 합니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [4단원] 관련 대화 상황",
        "options": [
          "What time is it now?",
          "I am eating lunch right now.",
          "We should learn more about 슬픈 (sad).",
          "Where is the post office?"
        ],
        "correctIndex": 2,
        "correctAnswer": "We should learn more about 슬픈 (sad).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (걱정하다)",
        "options": [
          "worry",
          "happy",
          "worried",
          "excited"
        ],
        "correctIndex": 0,
        "correctAnswer": "worry",
        "explanation": "'걱정하다'에 해당하는 영어 단어는 'worry'입니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I love this beautiful wrong.",
          "I love this beautifully wrong.",
          "I loving this wrong.",
          "I loves this wrong."
        ],
        "correctIndex": 0,
        "correctAnswer": "I love this beautiful wrong.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Why are you so happy?\nB: ____________________________________",
        "options": [
          "Because today is my birthday!",
          "Because it is raining outside.",
          "Because I am busy.",
          "Because I have a toothache."
        ],
        "correctIndex": 0,
        "correctAnswer": "Because today is my birthday!",
        "explanation": "기쁜 이유를 묻는 질문에는 긍정적인 이유가 와야 합니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [4단원] 관련 대화 상황",
        "options": [
          "What time is it now?",
          "I am eating lunch right now.",
          "Where is the post office?",
          "We should learn more about 상 (prize)."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should learn more about 상 (prize).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (연설, 발표)",
        "options": [
          "happy",
          "speech",
          "worried",
          "excited"
        ],
        "correctIndex": 1,
        "correctAnswer": "speech",
        "explanation": "'연설, 발표'에 해당하는 영어 단어는 'speech'입니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I love this beautifully happy.",
          "I love this beautiful happy.",
          "I loving this happy.",
          "I loves this happy."
        ],
        "correctIndex": 1,
        "correctAnswer": "I love this beautiful happy.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Why are you so happy?\nB: ____________________________________",
        "options": [
          "Because today is my birthday!",
          "Because I have a toothache.",
          "Because it is raining outside.",
          "Because I am busy."
        ],
        "correctIndex": 0,
        "correctAnswer": "Because today is my birthday!",
        "explanation": "기쁜 이유를 묻는 질문에는 긍정적인 이유가 와야 합니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [4단원] 관련 대화 상황",
        "options": [
          "What time is it now?",
          "We should learn more about 신나는 (excited).",
          "Where is the post office?",
          "I am eating lunch right now."
        ],
        "correctIndex": 1,
        "correctAnswer": "We should learn more about 신나는 (excited).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (긴장한)",
        "options": [
          "worried",
          "happy",
          "nervous",
          "excited"
        ],
        "correctIndex": 2,
        "correctAnswer": "nervous",
        "explanation": "'긴장한'에 해당하는 영어 단어는 'nervous'입니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loving this sad.",
          "I love this beautifully sad.",
          "I loves this sad.",
          "I love this beautiful sad."
        ],
        "correctIndex": 3,
        "correctAnswer": "I love this beautiful sad.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Why are you so happy?\nB: ____________________________________",
        "options": [
          "Because today is my birthday!",
          "Because I am busy.",
          "Because it is raining outside.",
          "Because I have a toothache."
        ],
        "correctIndex": 0,
        "correctAnswer": "Because today is my birthday!",
        "explanation": "기쁜 이유를 묻는 질문에는 긍정적인 이유가 와야 합니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [4단원] 관련 대화 상황",
        "options": [
          "I am eating lunch right now.",
          "Where is the post office?",
          "We should learn more about 잘못된, 이상한 (wrong).",
          "What time is it now?"
        ],
        "correctIndex": 2,
        "correctAnswer": "We should learn more about 잘못된, 이상한 (wrong).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (생일)",
        "options": [
          "birthday",
          "happy",
          "worried",
          "excited"
        ],
        "correctIndex": 0,
        "correctAnswer": "birthday",
        "explanation": "'생일'에 해당하는 영어 단어는 'birthday'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loving this prize.",
          "I love this beautifully prize.",
          "I loves this prize.",
          "I love this beautiful prize."
        ],
        "correctIndex": 3,
        "correctAnswer": "I love this beautiful prize.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Why are you so happy?\nB: ____________________________________",
        "options": [
          "Because today is my birthday!",
          "Because I have a toothache.",
          "Because it is raining outside.",
          "Because I am busy."
        ],
        "correctIndex": 0,
        "correctAnswer": "Because today is my birthday!",
        "explanation": "기쁜 이유를 묻는 질문에는 긍정적인 이유가 와야 합니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [4단원] 관련 대화 상황",
        "options": [
          "What time is it now?",
          "Where is the post office?",
          "I am eating lunch right now.",
          "We should learn more about 행복한 (happy)."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should learn more about 행복한 (happy).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (걱정스러운)",
        "options": [
          "happy",
          "nervous",
          "worried",
          "excited"
        ],
        "correctIndex": 2,
        "correctAnswer": "worried",
        "explanation": "'걱정스러운'에 해당하는 영어 단어는 'worried'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loves this excited.",
          "I loving this excited.",
          "I love this beautifully excited.",
          "I love this beautiful excited."
        ],
        "correctIndex": 3,
        "correctAnswer": "I love this beautiful excited.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Why are you so happy?\nB: ____________________________________",
        "options": [
          "Because I am busy.",
          "Because I have a toothache.",
          "Because today is my birthday!",
          "Because it is raining outside."
        ],
        "correctIndex": 2,
        "correctAnswer": "Because today is my birthday!",
        "explanation": "기쁜 이유를 묻는 질문에는 긍정적인 이유가 와야 합니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 4단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [4단원] 관련 대화 상황",
        "options": [
          "We should learn more about 슬픈 (sad).",
          "Where is the post office?",
          "What time is it now?",
          "I am eating lunch right now."
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 슬픈 (sad).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 4단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"행복한\" [힌트: h___y]",
        "correctAnswer": "happy",
        "explanation": "'행복한'은(는) 영어로 'happy'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 4단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"걱정스러운\" [힌트: w_____d]",
        "correctAnswer": "worried",
        "explanation": "'걱정스러운'은(는) 영어로 'worried'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 4단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"신나는\" [힌트: e_____d]",
        "correctAnswer": "excited",
        "explanation": "'신나는'은(는) 영어로 'excited'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 4단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"긴장한\" [힌트: n_____s]",
        "correctAnswer": "nervous",
        "explanation": "'긴장한'은(는) 영어로 'nervous'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 4단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"슬픈\" [힌트: s_d]",
        "correctAnswer": "sad",
        "explanation": "'슬픈'은(는) 영어로 'sad'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 4단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"걱정하다\" [힌트: w___y]",
        "correctAnswer": "worry",
        "explanation": "'걱정하다'은(는) 영어로 'worry'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 4단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"잘못된, 이상한\" [힌트: w___g]",
        "correctAnswer": "wrong",
        "explanation": "'잘못된, 이상한'은(는) 영어로 'wrong'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 4단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"생일\" [힌트: b______y]",
        "correctAnswer": "birthday",
        "explanation": "'생일'은(는) 영어로 'birthday'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 4단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"상\" [힌트: p___e]",
        "correctAnswer": "prize",
        "explanation": "'상'은(는) 영어로 'prize'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 4단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"연설, 발표\" [힌트: s____h]",
        "correctAnswer": "speech",
        "explanation": "'연설, 발표'은(는) 영어로 'speech'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 왜 그렇게 행복한니?",
        "chips": [
          "so",
          "you",
          "happy",
          "?",
          "are",
          "Why"
        ],
        "correctAnswer": "Why are you so happy?",
        "explanation": "Why are you so happy? [너는 왜 그렇게 행복한니?]"
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 왜 그렇게 신나는니?",
        "chips": [
          "excited",
          "?",
          "so",
          "you",
          "are",
          "Why"
        ],
        "correctAnswer": "Why are you so excited?",
        "explanation": "Why are you so excited? [너는 왜 그렇게 신나는니?]"
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 왜 그렇게 걱정스러운니?",
        "chips": [
          "so",
          "Why",
          "?",
          "worried",
          "are",
          "you"
        ],
        "correctAnswer": "Why are you so worried?",
        "explanation": "Why are you so worried? [너는 왜 그렇게 걱정스러운니?]"
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 왜 그렇게 슬픈니?",
        "chips": [
          "are",
          "you",
          "Why",
          "sad",
          "?",
          "so"
        ],
        "correctAnswer": "Why are you so sad?",
        "explanation": "Why are you so sad? [너는 왜 그렇게 슬픈니?]"
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 왜 그렇게 긴장한니?",
        "chips": [
          "you",
          "Why",
          "are",
          "nervous",
          "so",
          "?"
        ],
        "correctAnswer": "Why are you so nervous?",
        "explanation": "Why are you so nervous? [너는 왜 그렇게 긴장한니?]"
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 왜 그렇게 자랑스러운니?",
        "chips": [
          "?",
          "proud",
          "so",
          "you",
          "are",
          "Why"
        ],
        "correctAnswer": "Why are you so proud?",
        "explanation": "Why are you so proud? [너는 왜 그렇게 자랑스러운니?]"
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 왜 그렇게 행복한니?",
        "chips": [
          "you",
          "so",
          "are",
          "Why",
          "happy",
          "?"
        ],
        "correctAnswer": "Why are you so happy?",
        "explanation": "Why are you so happy? [너는 왜 그렇게 행복한니?]"
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 왜 그렇게 신나는니?",
        "chips": [
          "are",
          "?",
          "Why",
          "excited",
          "so",
          "you"
        ],
        "correctAnswer": "Why are you so excited?",
        "explanation": "Why are you so excited? [너는 왜 그렇게 신나는니?]"
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 왜 그렇게 걱정스러운니?",
        "chips": [
          "?",
          "are",
          "you",
          "worried",
          "so",
          "Why"
        ],
        "correctAnswer": "Why are you so worried?",
        "explanation": "Why are you so worried? [너는 왜 그렇게 걱정스러운니?]"
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 왜 그렇게 슬픈니?",
        "chips": [
          "Why",
          "so",
          "are",
          "sad",
          "?",
          "you"
        ],
        "correctAnswer": "Why are you so sad?",
        "explanation": "Why are you so sad? [너는 왜 그렇게 슬픈니?]"
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 왜 그렇게 긴장한니?",
        "chips": [
          "so",
          "Why",
          "nervous",
          "are",
          "you",
          "?"
        ],
        "correctAnswer": "Why are you so nervous?",
        "explanation": "Why are you so nervous? [너는 왜 그렇게 긴장한니?]"
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 왜 그렇게 자랑스러운니?",
        "chips": [
          "proud",
          "so",
          "you",
          "are",
          "?",
          "Why"
        ],
        "correctAnswer": "Why are you so proud?",
        "explanation": "Why are you so proud? [너는 왜 그렇게 자랑스러운니?]"
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 왜 그렇게 행복한니?",
        "chips": [
          "you",
          "are",
          "Why",
          "?",
          "so",
          "happy"
        ],
        "correctAnswer": "Why are you so happy?",
        "explanation": "Why are you so happy? [너는 왜 그렇게 행복한니?]"
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 왜 그렇게 신나는니?",
        "chips": [
          "Why",
          "are",
          "?",
          "excited",
          "you",
          "so"
        ],
        "correctAnswer": "Why are you so excited?",
        "explanation": "Why are you so excited? [너는 왜 그렇게 신나는니?]"
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 왜 그렇게 걱정스러운니?",
        "chips": [
          "so",
          "you",
          "are",
          "Why",
          "worried",
          "?"
        ],
        "correctAnswer": "Why are you so worried?",
        "explanation": "Why are you so worried? [너는 왜 그렇게 걱정스러운니?]"
      },
      {
        "id": 96,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 4단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 우리는 에너지를 절약하고 지구를 보호해야 해.",
        "chips": [
          "We",
          "should",
          ".",
          "and",
          "the",
          "energy",
          "Earth",
          "save",
          "protect"
        ],
        "correctAnswer": "We should save energy and protect the Earth.",
        "explanation": "We should save energy and protect the Earth. [우리는 에너지를 절약하고 지구를 보호해야 해.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 97,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 4단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 내가 가장 좋아하는 계절은 꽃이 피는 봄이야.",
        "chips": [
          "is",
          "bloom",
          ".",
          "spring",
          "season",
          "favorite",
          "My",
          "flowers",
          "because"
        ],
        "correctAnswer": "My favorite season is spring because flowers bloom.",
        "explanation": "My favorite season is spring because flowers bloom. [내가 가장 좋아하는 계절은 꽃이 피는 봄이야.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 98,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 4단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 두 블록 직진해서 모퉁이에서 좌회전하세요.",
        "chips": [
          ".",
          "and",
          "left",
          "blocks",
          "turn",
          "two",
          "the",
          "at",
          "straight",
          "corner",
          "Go"
        ],
        "correctAnswer": "Go straight two blocks and turn left at the corner.",
        "explanation": "Go straight two blocks and turn left at the corner. [두 블록 직진해서 모퉁이에서 좌회전하세요.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 99,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 4단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 너는 의사 진료를 받고 약을 먹어야 해.",
        "chips": [
          "doctor",
          ".",
          "a",
          "and",
          "see",
          "You",
          "medicine",
          "should",
          "take"
        ],
        "correctAnswer": "You should see a doctor and take medicine.",
        "explanation": "You should see a doctor and take medicine. [너는 의사 진료를 받고 약을 먹어야 해.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 4단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 우리 이번 주 토요일에 함께 공원에 가는 게 어때?",
        "chips": [
          "go",
          "Why",
          "?",
          "don't",
          "this",
          "to",
          "we",
          "the",
          "together",
          "Saturday",
          "park"
        ],
        "correctAnswer": "Why don't we go to the park together this Saturday?",
        "explanation": "Why don't we go to the park together this Saturday? [우리 이번 주 토요일에 함께 공원에 가는 게 어때?] 축하합니다! 골든벨 완주! 🔔"
      }
    ]
  },
  "6G_L05": {
    "name": "5단원: 길 찾기와 위치 안내 (Where is the hospital?)",
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
        "audioText": "A: Excuse me, where is the hospital? B: Go straight two blocks and turn left. It is on your right.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(병원)의 위치로 올바른 것은?",
        "options": [
          "두 블록 직진 후 반대편 골목",
          "두 블록 직진해서 왼쪽으로 도세요 후 오른쪽에",
          "다리를 건너 우회전",
          "지하철역 앞 지하도 입구"
        ],
        "correctIndex": 1,
        "correctAnswer": "두 블록 직진해서 왼쪽으로 도세요 후 오른쪽에",
        "explanation": "'Go straight two blocks and turn left. It is on your right'입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the library? B: Go straight one block and turn right. It is on your left.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(도서관)의 위치로 올바른 것은?",
        "options": [
          "한 블록 직진해서 오른쪽으로 도세요 후 왼쪽에",
          "다리를 건너 우회전",
          "두 블록 직진 후 반대편 골목",
          "지하철역 앞 지하도 입구"
        ],
        "correctIndex": 0,
        "correctAnswer": "한 블록 직진해서 오른쪽으로 도세요 후 왼쪽에",
        "explanation": "'Go straight one block and turn right. It is on your left'입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the bank? B: Cross the street at the corner. It is next to the bank.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(은행)의 위치로 올바른 것은?",
        "options": [
          "모퉁이에서 길을 건너세요 후 은행 옆에",
          "다리를 건너 우회전",
          "두 블록 직진 후 반대편 골목",
          "지하철역 앞 지하도 입구"
        ],
        "correctIndex": 0,
        "correctAnswer": "모퉁이에서 길을 건너세요 후 은행 옆에",
        "explanation": "'Cross the street at the corner. It is next to the bank'입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the post office? B: Walk straight past the park. It is across from the museum.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(우체국)의 위치로 올바른 것은?",
        "options": [
          "두 블록 직진 후 반대편 골목",
          "공원을 지나 똑바로 걸어가세요 후 박물관 맞은편에",
          "다리를 건너 우회전",
          "지하철역 앞 지하도 입구"
        ],
        "correctIndex": 1,
        "correctAnswer": "공원을 지나 똑바로 걸어가세요 후 박물관 맞은편에",
        "explanation": "'Walk straight past the park. It is across from the museum'입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the bakery? B: Go straight two blocks and turn left. It is on your right.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(빵집)의 위치로 올바른 것은?",
        "options": [
          "다리를 건너 우회전",
          "지하철역 앞 지하도 입구",
          "두 블록 직진 후 반대편 골목",
          "두 블록 직진해서 왼쪽으로 도세요 후 오른쪽에"
        ],
        "correctIndex": 3,
        "correctAnswer": "두 블록 직진해서 왼쪽으로 도세요 후 오른쪽에",
        "explanation": "'Go straight two blocks and turn left. It is on your right'입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the subway station? B: Go straight one block and turn right. It is on your left.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(지하철역)의 위치로 올바른 것은?",
        "options": [
          "다리를 건너 우회전",
          "지하철역 앞 지하도 입구",
          "두 블록 직진 후 반대편 골목",
          "한 블록 직진해서 오른쪽으로 도세요 후 왼쪽에"
        ],
        "correctIndex": 3,
        "correctAnswer": "한 블록 직진해서 오른쪽으로 도세요 후 왼쪽에",
        "explanation": "'Go straight one block and turn right. It is on your left'입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the supermarket? B: Cross the street at the corner. It is next to the bank.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(슈퍼마켓)의 위치로 올바른 것은?",
        "options": [
          "모퉁이에서 길을 건너세요 후 은행 옆에",
          "두 블록 직진 후 반대편 골목",
          "다리를 건너 우회전",
          "지하철역 앞 지하도 입구"
        ],
        "correctIndex": 0,
        "correctAnswer": "모퉁이에서 길을 건너세요 후 은행 옆에",
        "explanation": "'Cross the street at the corner. It is next to the bank'입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the police station? B: Walk straight past the park. It is across from the museum.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(경찰서)의 위치로 올바른 것은?",
        "options": [
          "지하철역 앞 지하도 입구",
          "두 블록 직진 후 반대편 골목",
          "공원을 지나 똑바로 걸어가세요 후 박물관 맞은편에",
          "다리를 건너 우회전"
        ],
        "correctIndex": 2,
        "correctAnswer": "공원을 지나 똑바로 걸어가세요 후 박물관 맞은편에",
        "explanation": "'Walk straight past the park. It is across from the museum'입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the hospital? B: Go straight two blocks and turn left. It is on your right.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(병원)의 위치로 올바른 것은?",
        "options": [
          "두 블록 직진 후 반대편 골목",
          "두 블록 직진해서 왼쪽으로 도세요 후 오른쪽에",
          "지하철역 앞 지하도 입구",
          "다리를 건너 우회전"
        ],
        "correctIndex": 1,
        "correctAnswer": "두 블록 직진해서 왼쪽으로 도세요 후 오른쪽에",
        "explanation": "'Go straight two blocks and turn left. It is on your right'입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the library? B: Go straight one block and turn right. It is on your left.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(도서관)의 위치로 올바른 것은?",
        "options": [
          "한 블록 직진해서 오른쪽으로 도세요 후 왼쪽에",
          "두 블록 직진 후 반대편 골목",
          "지하철역 앞 지하도 입구",
          "다리를 건너 우회전"
        ],
        "correctIndex": 0,
        "correctAnswer": "한 블록 직진해서 오른쪽으로 도세요 후 왼쪽에",
        "explanation": "'Go straight one block and turn right. It is on your left'입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the bank? B: Cross the street at the corner. It is next to the bank.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(은행)의 위치로 올바른 것은?",
        "options": [
          "다리를 건너 우회전",
          "지하철역 앞 지하도 입구",
          "두 블록 직진 후 반대편 골목",
          "모퉁이에서 길을 건너세요 후 은행 옆에"
        ],
        "correctIndex": 3,
        "correctAnswer": "모퉁이에서 길을 건너세요 후 은행 옆에",
        "explanation": "'Cross the street at the corner. It is next to the bank'입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the post office? B: Walk straight past the park. It is across from the museum.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(우체국)의 위치로 올바른 것은?",
        "options": [
          "공원을 지나 똑바로 걸어가세요 후 박물관 맞은편에",
          "다리를 건너 우회전",
          "두 블록 직진 후 반대편 골목",
          "지하철역 앞 지하도 입구"
        ],
        "correctIndex": 0,
        "correctAnswer": "공원을 지나 똑바로 걸어가세요 후 박물관 맞은편에",
        "explanation": "'Walk straight past the park. It is across from the museum'입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the bakery? B: Go straight two blocks and turn left. It is on your right.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(빵집)의 위치로 올바른 것은?",
        "options": [
          "두 블록 직진해서 왼쪽으로 도세요 후 오른쪽에",
          "두 블록 직진 후 반대편 골목",
          "지하철역 앞 지하도 입구",
          "다리를 건너 우회전"
        ],
        "correctIndex": 0,
        "correctAnswer": "두 블록 직진해서 왼쪽으로 도세요 후 오른쪽에",
        "explanation": "'Go straight two blocks and turn left. It is on your right'입니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the subway station? B: Go straight one block and turn right. It is on your left.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(지하철역)의 위치로 올바른 것은?",
        "options": [
          "지하철역 앞 지하도 입구",
          "다리를 건너 우회전",
          "두 블록 직진 후 반대편 골목",
          "한 블록 직진해서 오른쪽으로 도세요 후 왼쪽에"
        ],
        "correctIndex": 3,
        "correctAnswer": "한 블록 직진해서 오른쪽으로 도세요 후 왼쪽에",
        "explanation": "'Go straight one block and turn right. It is on your left'입니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the supermarket? B: Cross the street at the corner. It is next to the bank.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(슈퍼마켓)의 위치로 올바른 것은?",
        "options": [
          "다리를 건너 우회전",
          "모퉁이에서 길을 건너세요 후 은행 옆에",
          "두 블록 직진 후 반대편 골목",
          "지하철역 앞 지하도 입구"
        ],
        "correctIndex": 1,
        "correctAnswer": "모퉁이에서 길을 건너세요 후 은행 옆에",
        "explanation": "'Cross the street at the corner. It is next to the bank'입니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the police station? B: Walk straight past the park. It is across from the museum.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(경찰서)의 위치로 올바른 것은?",
        "options": [
          "다리를 건너 우회전",
          "지하철역 앞 지하도 입구",
          "두 블록 직진 후 반대편 골목",
          "공원을 지나 똑바로 걸어가세요 후 박물관 맞은편에"
        ],
        "correctIndex": 3,
        "correctAnswer": "공원을 지나 똑바로 걸어가세요 후 박물관 맞은편에",
        "explanation": "'Walk straight past the park. It is across from the museum'입니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the hospital? B: Go straight two blocks and turn left. It is on your right.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(병원)의 위치로 올바른 것은?",
        "options": [
          "두 블록 직진해서 왼쪽으로 도세요 후 오른쪽에",
          "두 블록 직진 후 반대편 골목",
          "지하철역 앞 지하도 입구",
          "다리를 건너 우회전"
        ],
        "correctIndex": 0,
        "correctAnswer": "두 블록 직진해서 왼쪽으로 도세요 후 오른쪽에",
        "explanation": "'Go straight two blocks and turn left. It is on your right'입니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the library? B: Go straight one block and turn right. It is on your left.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(도서관)의 위치로 올바른 것은?",
        "options": [
          "두 블록 직진 후 반대편 골목",
          "지하철역 앞 지하도 입구",
          "한 블록 직진해서 오른쪽으로 도세요 후 왼쪽에",
          "다리를 건너 우회전"
        ],
        "correctIndex": 2,
        "correctAnswer": "한 블록 직진해서 오른쪽으로 도세요 후 왼쪽에",
        "explanation": "'Go straight one block and turn right. It is on your left'입니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the bank? B: Cross the street at the corner. It is next to the bank.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(은행)의 위치로 올바른 것은?",
        "options": [
          "모퉁이에서 길을 건너세요 후 은행 옆에",
          "두 블록 직진 후 반대편 골목",
          "지하철역 앞 지하도 입구",
          "다리를 건너 우회전"
        ],
        "correctIndex": 0,
        "correctAnswer": "모퉁이에서 길을 건너세요 후 은행 옆에",
        "explanation": "'Cross the street at the corner. It is next to the bank'입니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the post office? B: Walk straight past the park. It is across from the museum.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(우체국)의 위치로 올바른 것은?",
        "options": [
          "공원을 지나 똑바로 걸어가세요 후 박물관 맞은편에",
          "다리를 건너 우회전",
          "지하철역 앞 지하도 입구",
          "두 블록 직진 후 반대편 골목"
        ],
        "correctIndex": 0,
        "correctAnswer": "공원을 지나 똑바로 걸어가세요 후 박물관 맞은편에",
        "explanation": "'Walk straight past the park. It is across from the museum'입니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the bakery? B: Go straight two blocks and turn left. It is on your right.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(빵집)의 위치로 올바른 것은?",
        "options": [
          "두 블록 직진해서 왼쪽으로 도세요 후 오른쪽에",
          "다리를 건너 우회전",
          "두 블록 직진 후 반대편 골목",
          "지하철역 앞 지하도 입구"
        ],
        "correctIndex": 0,
        "correctAnswer": "두 블록 직진해서 왼쪽으로 도세요 후 오른쪽에",
        "explanation": "'Go straight two blocks and turn left. It is on your right'입니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the subway station? B: Go straight one block and turn right. It is on your left.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(지하철역)의 위치로 올바른 것은?",
        "options": [
          "두 블록 직진 후 반대편 골목",
          "한 블록 직진해서 오른쪽으로 도세요 후 왼쪽에",
          "다리를 건너 우회전",
          "지하철역 앞 지하도 입구"
        ],
        "correctIndex": 1,
        "correctAnswer": "한 블록 직진해서 오른쪽으로 도세요 후 왼쪽에",
        "explanation": "'Go straight one block and turn right. It is on your left'입니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the supermarket? B: Cross the street at the corner. It is next to the bank.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(슈퍼마켓)의 위치로 올바른 것은?",
        "options": [
          "지하철역 앞 지하도 입구",
          "두 블록 직진 후 반대편 골목",
          "다리를 건너 우회전",
          "모퉁이에서 길을 건너세요 후 은행 옆에"
        ],
        "correctIndex": 3,
        "correctAnswer": "모퉁이에서 길을 건너세요 후 은행 옆에",
        "explanation": "'Cross the street at the corner. It is next to the bank'입니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the police station? B: Walk straight past the park. It is across from the museum.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(경찰서)의 위치로 올바른 것은?",
        "options": [
          "두 블록 직진 후 반대편 골목",
          "다리를 건너 우회전",
          "지하철역 앞 지하도 입구",
          "공원을 지나 똑바로 걸어가세요 후 박물관 맞은편에"
        ],
        "correctIndex": 3,
        "correctAnswer": "공원을 지나 똑바로 걸어가세요 후 박물관 맞은편에",
        "explanation": "'Walk straight past the park. It is across from the museum'입니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the hospital? B: Go straight two blocks and turn left. It is on your right.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(병원)의 위치로 올바른 것은?",
        "options": [
          "다리를 건너 우회전",
          "두 블록 직진해서 왼쪽으로 도세요 후 오른쪽에",
          "두 블록 직진 후 반대편 골목",
          "지하철역 앞 지하도 입구"
        ],
        "correctIndex": 1,
        "correctAnswer": "두 블록 직진해서 왼쪽으로 도세요 후 오른쪽에",
        "explanation": "'Go straight two blocks and turn left. It is on your right'입니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the library? B: Go straight one block and turn right. It is on your left.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(도서관)의 위치로 올바른 것은?",
        "options": [
          "지하철역 앞 지하도 입구",
          "한 블록 직진해서 오른쪽으로 도세요 후 왼쪽에",
          "다리를 건너 우회전",
          "두 블록 직진 후 반대편 골목"
        ],
        "correctIndex": 1,
        "correctAnswer": "한 블록 직진해서 오른쪽으로 도세요 후 왼쪽에",
        "explanation": "'Go straight one block and turn right. It is on your left'입니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the bank? B: Cross the street at the corner. It is next to the bank.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(은행)의 위치로 올바른 것은?",
        "options": [
          "두 블록 직진 후 반대편 골목",
          "모퉁이에서 길을 건너세요 후 은행 옆에",
          "지하철역 앞 지하도 입구",
          "다리를 건너 우회전"
        ],
        "correctIndex": 1,
        "correctAnswer": "모퉁이에서 길을 건너세요 후 은행 옆에",
        "explanation": "'Cross the street at the corner. It is next to the bank'입니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the post office? B: Walk straight past the park. It is across from the museum.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(우체국)의 위치로 올바른 것은?",
        "options": [
          "공원을 지나 똑바로 걸어가세요 후 박물관 맞은편에",
          "다리를 건너 우회전",
          "두 블록 직진 후 반대편 골목",
          "지하철역 앞 지하도 입구"
        ],
        "correctIndex": 0,
        "correctAnswer": "공원을 지나 똑바로 걸어가세요 후 박물관 맞은편에",
        "explanation": "'Walk straight past the park. It is across from the museum'입니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the bakery? B: Go straight two blocks and turn left. It is on your right.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(빵집)의 위치로 올바른 것은?",
        "options": [
          "두 블록 직진해서 왼쪽으로 도세요 후 오른쪽에",
          "다리를 건너 우회전",
          "두 블록 직진 후 반대편 골목",
          "지하철역 앞 지하도 입구"
        ],
        "correctIndex": 0,
        "correctAnswer": "두 블록 직진해서 왼쪽으로 도세요 후 오른쪽에",
        "explanation": "'Go straight two blocks and turn left. It is on your right'입니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the subway station? B: Go straight one block and turn right. It is on your left.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(지하철역)의 위치로 올바른 것은?",
        "options": [
          "지하철역 앞 지하도 입구",
          "한 블록 직진해서 오른쪽으로 도세요 후 왼쪽에",
          "두 블록 직진 후 반대편 골목",
          "다리를 건너 우회전"
        ],
        "correctIndex": 1,
        "correctAnswer": "한 블록 직진해서 오른쪽으로 도세요 후 왼쪽에",
        "explanation": "'Go straight one block and turn right. It is on your left'입니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the supermarket? B: Cross the street at the corner. It is next to the bank.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(슈퍼마켓)의 위치로 올바른 것은?",
        "options": [
          "지하철역 앞 지하도 입구",
          "다리를 건너 우회전",
          "두 블록 직진 후 반대편 골목",
          "모퉁이에서 길을 건너세요 후 은행 옆에"
        ],
        "correctIndex": 3,
        "correctAnswer": "모퉁이에서 길을 건너세요 후 은행 옆에",
        "explanation": "'Cross the street at the corner. It is next to the bank'입니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the police station? B: Walk straight past the park. It is across from the museum.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(경찰서)의 위치로 올바른 것은?",
        "options": [
          "공원을 지나 똑바로 걸어가세요 후 박물관 맞은편에",
          "두 블록 직진 후 반대편 골목",
          "지하철역 앞 지하도 입구",
          "다리를 건너 우회전"
        ],
        "correctIndex": 0,
        "correctAnswer": "공원을 지나 똑바로 걸어가세요 후 박물관 맞은편에",
        "explanation": "'Walk straight past the park. It is across from the museum'입니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the hospital? B: Go straight two blocks and turn left. It is on your right.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(병원)의 위치로 올바른 것은?",
        "options": [
          "두 블록 직진해서 왼쪽으로 도세요 후 오른쪽에",
          "다리를 건너 우회전",
          "두 블록 직진 후 반대편 골목",
          "지하철역 앞 지하도 입구"
        ],
        "correctIndex": 0,
        "correctAnswer": "두 블록 직진해서 왼쪽으로 도세요 후 오른쪽에",
        "explanation": "'Go straight two blocks and turn left. It is on your right'입니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the library? B: Go straight one block and turn right. It is on your left.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(도서관)의 위치로 올바른 것은?",
        "options": [
          "다리를 건너 우회전",
          "한 블록 직진해서 오른쪽으로 도세요 후 왼쪽에",
          "두 블록 직진 후 반대편 골목",
          "지하철역 앞 지하도 입구"
        ],
        "correctIndex": 1,
        "correctAnswer": "한 블록 직진해서 오른쪽으로 도세요 후 왼쪽에",
        "explanation": "'Go straight one block and turn right. It is on your left'입니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Excuse me, where is the bank? B: Cross the street at the corner. It is next to the bank.",
        "question": "[듣기 · 5단원] 길 안내 대화를 듣고, 목적지(은행)의 위치로 올바른 것은?",
        "options": [
          "다리를 건너 우회전",
          "지하철역 앞 지하도 입구",
          "두 블록 직진 후 반대편 골목",
          "모퉁이에서 길을 건너세요 후 은행 옆에"
        ],
        "correctIndex": 3,
        "correctAnswer": "모퉁이에서 길을 건너세요 후 은행 옆에",
        "explanation": "'Cross the street at the corner. It is next to the bank'입니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I love this beautiful straight.",
          "I love this beautifully straight.",
          "I loving this straight.",
          "I loves this straight."
        ],
        "correctIndex": 0,
        "correctAnswer": "I love this beautiful straight.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Where is the nearest hospital?\nB: ____________________________________",
        "options": [
          "My brother is tall.",
          "I have a terrible cold.",
          "It is fifteen dollars.",
          "Go straight two blocks and turn left."
        ],
        "correctIndex": 3,
        "correctAnswer": "Go straight two blocks and turn left.",
        "explanation": "길을 물을 때는 방향 지시 문장이 와야 합니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [5단원] 관련 대화 상황",
        "options": [
          "I am eating lunch right now.",
          "What time is it now?",
          "Where is the post office?",
          "We should learn more about 오른쪽 (right)."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should learn more about 오른쪽 (right).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (구역, 블록)",
        "options": [
          "block",
          "straight",
          "right",
          "left"
        ],
        "correctIndex": 0,
        "correctAnswer": "block",
        "explanation": "'구역, 블록'에 해당하는 영어 단어는 'block'입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loves this hospital.",
          "I love this beautiful hospital.",
          "I love this beautifully hospital.",
          "I loving this hospital."
        ],
        "correctIndex": 1,
        "correctAnswer": "I love this beautiful hospital.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Where is the nearest hospital?\nB: ____________________________________",
        "options": [
          "My brother is tall.",
          "I have a terrible cold.",
          "It is fifteen dollars.",
          "Go straight two blocks and turn left."
        ],
        "correctIndex": 3,
        "correctAnswer": "Go straight two blocks and turn left.",
        "explanation": "길을 물을 때는 방향 지시 문장이 와야 합니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [5단원] 관련 대화 상황",
        "options": [
          "Where is the post office?",
          "We should learn more about 맞은편에 (across).",
          "What time is it now?",
          "I am eating lunch right now."
        ],
        "correctIndex": 1,
        "correctAnswer": "We should learn more about 맞은편에 (across).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (모퉁이)",
        "options": [
          "left",
          "right",
          "straight",
          "corner"
        ],
        "correctIndex": 3,
        "correctAnswer": "corner",
        "explanation": "'모퉁이'에 해당하는 영어 단어는 'corner'입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loving this miss.",
          "I love this beautifully miss.",
          "I loves this miss.",
          "I love this beautiful miss."
        ],
        "correctIndex": 3,
        "correctAnswer": "I love this beautiful miss.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Where is the nearest hospital?\nB: ____________________________________",
        "options": [
          "Go straight two blocks and turn left.",
          "My brother is tall.",
          "It is fifteen dollars.",
          "I have a terrible cold."
        ],
        "correctIndex": 0,
        "correctAnswer": "Go straight two blocks and turn left.",
        "explanation": "길을 물을 때는 방향 지시 문장이 와야 합니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [5단원] 관련 대화 상황",
        "options": [
          "We should learn more about 똑바로 (straight).",
          "Where is the post office?",
          "I am eating lunch right now.",
          "What time is it now?"
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 똑바로 (straight).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (왼쪽)",
        "options": [
          "right",
          "straight",
          "block",
          "left"
        ],
        "correctIndex": 3,
        "correctAnswer": "left",
        "explanation": "'왼쪽'에 해당하는 영어 단어는 'left'입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loving this right.",
          "I love this beautifully right.",
          "I love this beautiful right.",
          "I loves this right."
        ],
        "correctIndex": 2,
        "correctAnswer": "I love this beautiful right.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Where is the nearest hospital?\nB: ____________________________________",
        "options": [
          "My brother is tall.",
          "Go straight two blocks and turn left.",
          "It is fifteen dollars.",
          "I have a terrible cold."
        ],
        "correctIndex": 1,
        "correctAnswer": "Go straight two blocks and turn left.",
        "explanation": "길을 물을 때는 방향 지시 문장이 와야 합니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [5단원] 관련 대화 상황",
        "options": [
          "I am eating lunch right now.",
          "What time is it now?",
          "Where is the post office?",
          "We should learn more about 병원 (hospital)."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should learn more about 병원 (hospital).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (도서관)",
        "options": [
          "right",
          "library",
          "straight",
          "left"
        ],
        "correctIndex": 1,
        "correctAnswer": "library",
        "explanation": "'도서관'에 해당하는 영어 단어는 'library'입니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I love this beautifully across.",
          "I loving this across.",
          "I loves this across.",
          "I love this beautiful across."
        ],
        "correctIndex": 3,
        "correctAnswer": "I love this beautiful across.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Where is the nearest hospital?\nB: ____________________________________",
        "options": [
          "My brother is tall.",
          "Go straight two blocks and turn left.",
          "I have a terrible cold.",
          "It is fifteen dollars."
        ],
        "correctIndex": 1,
        "correctAnswer": "Go straight two blocks and turn left.",
        "explanation": "길을 물을 때는 방향 지시 문장이 와야 합니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [5단원] 관련 대화 상황",
        "options": [
          "I am eating lunch right now.",
          "What time is it now?",
          "Where is the post office?",
          "We should learn more about 놓치다 (miss)."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should learn more about 놓치다 (miss).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (건너다)",
        "options": [
          "left",
          "straight",
          "right",
          "cross"
        ],
        "correctIndex": 3,
        "correctAnswer": "cross",
        "explanation": "'건너다'에 해당하는 영어 단어는 'cross'입니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loves this straight.",
          "I loving this straight.",
          "I love this beautifully straight.",
          "I love this beautiful straight."
        ],
        "correctIndex": 3,
        "correctAnswer": "I love this beautiful straight.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Where is the nearest hospital?\nB: ____________________________________",
        "options": [
          "Go straight two blocks and turn left.",
          "My brother is tall.",
          "It is fifteen dollars.",
          "I have a terrible cold."
        ],
        "correctIndex": 0,
        "correctAnswer": "Go straight two blocks and turn left.",
        "explanation": "길을 물을 때는 방향 지시 문장이 와야 합니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [5단원] 관련 대화 상황",
        "options": [
          "What time is it now?",
          "Where is the post office?",
          "We should learn more about 오른쪽 (right).",
          "I am eating lunch right now."
        ],
        "correctIndex": 2,
        "correctAnswer": "We should learn more about 오른쪽 (right).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (구역, 블록)",
        "options": [
          "right",
          "block",
          "straight",
          "left"
        ],
        "correctIndex": 1,
        "correctAnswer": "block",
        "explanation": "'구역, 블록'에 해당하는 영어 단어는 'block'입니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I love this beautiful hospital.",
          "I love this beautifully hospital.",
          "I loves this hospital.",
          "I loving this hospital."
        ],
        "correctIndex": 0,
        "correctAnswer": "I love this beautiful hospital.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Where is the nearest hospital?\nB: ____________________________________",
        "options": [
          "My brother is tall.",
          "Go straight two blocks and turn left.",
          "I have a terrible cold.",
          "It is fifteen dollars."
        ],
        "correctIndex": 1,
        "correctAnswer": "Go straight two blocks and turn left.",
        "explanation": "길을 물을 때는 방향 지시 문장이 와야 합니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [5단원] 관련 대화 상황",
        "options": [
          "What time is it now?",
          "I am eating lunch right now.",
          "Where is the post office?",
          "We should learn more about 맞은편에 (across)."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should learn more about 맞은편에 (across).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (모퉁이)",
        "options": [
          "corner",
          "straight",
          "left",
          "right"
        ],
        "correctIndex": 0,
        "correctAnswer": "corner",
        "explanation": "'모퉁이'에 해당하는 영어 단어는 'corner'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I love this beautifully miss.",
          "I loving this miss.",
          "I love this beautiful miss.",
          "I loves this miss."
        ],
        "correctIndex": 2,
        "correctAnswer": "I love this beautiful miss.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Where is the nearest hospital?\nB: ____________________________________",
        "options": [
          "Go straight two blocks and turn left.",
          "It is fifteen dollars.",
          "I have a terrible cold.",
          "My brother is tall."
        ],
        "correctIndex": 0,
        "correctAnswer": "Go straight two blocks and turn left.",
        "explanation": "길을 물을 때는 방향 지시 문장이 와야 합니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [5단원] 관련 대화 상황",
        "options": [
          "Where is the post office?",
          "I am eating lunch right now.",
          "We should learn more about 똑바로 (straight).",
          "What time is it now?"
        ],
        "correctIndex": 2,
        "correctAnswer": "We should learn more about 똑바로 (straight).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (왼쪽)",
        "options": [
          "right",
          "straight",
          "block",
          "left"
        ],
        "correctIndex": 3,
        "correctAnswer": "left",
        "explanation": "'왼쪽'에 해당하는 영어 단어는 'left'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loves this right.",
          "I loving this right.",
          "I love this beautifully right.",
          "I love this beautiful right."
        ],
        "correctIndex": 3,
        "correctAnswer": "I love this beautiful right.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Where is the nearest hospital?\nB: ____________________________________",
        "options": [
          "My brother is tall.",
          "I have a terrible cold.",
          "It is fifteen dollars.",
          "Go straight two blocks and turn left."
        ],
        "correctIndex": 3,
        "correctAnswer": "Go straight two blocks and turn left.",
        "explanation": "길을 물을 때는 방향 지시 문장이 와야 합니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 5단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [5단원] 관련 대화 상황",
        "options": [
          "We should learn more about 병원 (hospital).",
          "Where is the post office?",
          "What time is it now?",
          "I am eating lunch right now."
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 병원 (hospital).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 5단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"똑바로\" [힌트: s______t]",
        "correctAnswer": "straight",
        "explanation": "'똑바로'은(는) 영어로 'straight'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 5단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"왼쪽\" [힌트: l__t]",
        "correctAnswer": "left",
        "explanation": "'왼쪽'은(는) 영어로 'left'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 5단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"오른쪽\" [힌트: r___t]",
        "correctAnswer": "right",
        "explanation": "'오른쪽'은(는) 영어로 'right'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 5단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"구역, 블록\" [힌트: b___k]",
        "correctAnswer": "block",
        "explanation": "'구역, 블록'은(는) 영어로 'block'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 5단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"병원\" [힌트: h______l]",
        "correctAnswer": "hospital",
        "explanation": "'병원'은(는) 영어로 'hospital'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 5단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"도서관\" [힌트: l_____y]",
        "correctAnswer": "library",
        "explanation": "'도서관'은(는) 영어로 'library'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 5단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"맞은편에\" [힌트: a____s]",
        "correctAnswer": "across",
        "explanation": "'맞은편에'은(는) 영어로 'across'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 5단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"모퉁이\" [힌트: c____r]",
        "correctAnswer": "corner",
        "explanation": "'모퉁이'은(는) 영어로 'corner'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 5단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"놓치다\" [힌트: m__s]",
        "correctAnswer": "miss",
        "explanation": "'놓치다'은(는) 영어로 'miss'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 5단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"건너다\" [힌트: c___s]",
        "correctAnswer": "cross",
        "explanation": "'건너다'은(는) 영어로 'cross'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "병원이(가) 어디에 있나요?",
        "chips": [
          "the",
          "is",
          "?",
          "Where",
          "hospital"
        ],
        "correctAnswer": "Where is the hospital?",
        "explanation": "Where is the hospital? [병원이(가) 어디에 있나요?]"
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "도서관이(가) 어디에 있나요?",
        "chips": [
          "library",
          "Where",
          "is",
          "?",
          "the"
        ],
        "correctAnswer": "Where is the library?",
        "explanation": "Where is the library? [도서관이(가) 어디에 있나요?]"
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "은행이(가) 어디에 있나요?",
        "chips": [
          "is",
          "bank",
          "Where",
          "the",
          "?"
        ],
        "correctAnswer": "Where is the bank?",
        "explanation": "Where is the bank? [은행이(가) 어디에 있나요?]"
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "우체국이(가) 어디에 있나요?",
        "chips": [
          "?",
          "post",
          "the",
          "Where",
          "is",
          "office"
        ],
        "correctAnswer": "Where is the post office?",
        "explanation": "Where is the post office? [우체국이(가) 어디에 있나요?]"
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "빵집이(가) 어디에 있나요?",
        "chips": [
          "?",
          "bakery",
          "the",
          "is",
          "Where"
        ],
        "correctAnswer": "Where is the bakery?",
        "explanation": "Where is the bakery? [빵집이(가) 어디에 있나요?]"
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "지하철역이(가) 어디에 있나요?",
        "chips": [
          "?",
          "station",
          "subway",
          "the",
          "is",
          "Where"
        ],
        "correctAnswer": "Where is the subway station?",
        "explanation": "Where is the subway station? [지하철역이(가) 어디에 있나요?]"
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "슈퍼마켓이(가) 어디에 있나요?",
        "chips": [
          "Where",
          "is",
          "the",
          "supermarket",
          "?"
        ],
        "correctAnswer": "Where is the supermarket?",
        "explanation": "Where is the supermarket? [슈퍼마켓이(가) 어디에 있나요?]"
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "경찰서이(가) 어디에 있나요?",
        "chips": [
          "Where",
          "is",
          "station",
          "the",
          "police",
          "?"
        ],
        "correctAnswer": "Where is the police station?",
        "explanation": "Where is the police station? [경찰서이(가) 어디에 있나요?]"
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "병원이(가) 어디에 있나요?",
        "chips": [
          "is",
          "the",
          "hospital",
          "Where",
          "?"
        ],
        "correctAnswer": "Where is the hospital?",
        "explanation": "Where is the hospital? [병원이(가) 어디에 있나요?]"
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "도서관이(가) 어디에 있나요?",
        "chips": [
          "Where",
          "is",
          "?",
          "the",
          "library"
        ],
        "correctAnswer": "Where is the library?",
        "explanation": "Where is the library? [도서관이(가) 어디에 있나요?]"
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "은행이(가) 어디에 있나요?",
        "chips": [
          "is",
          "bank",
          "the",
          "?",
          "Where"
        ],
        "correctAnswer": "Where is the bank?",
        "explanation": "Where is the bank? [은행이(가) 어디에 있나요?]"
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "우체국이(가) 어디에 있나요?",
        "chips": [
          "Where",
          "is",
          "the",
          "post",
          "office",
          "?"
        ],
        "correctAnswer": "Where is the post office?",
        "explanation": "Where is the post office? [우체국이(가) 어디에 있나요?]"
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "빵집이(가) 어디에 있나요?",
        "chips": [
          "?",
          "bakery",
          "the",
          "is",
          "Where"
        ],
        "correctAnswer": "Where is the bakery?",
        "explanation": "Where is the bakery? [빵집이(가) 어디에 있나요?]"
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "지하철역이(가) 어디에 있나요?",
        "chips": [
          "the",
          "is",
          "?",
          "subway",
          "station",
          "Where"
        ],
        "correctAnswer": "Where is the subway station?",
        "explanation": "Where is the subway station? [지하철역이(가) 어디에 있나요?]"
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "슈퍼마켓이(가) 어디에 있나요?",
        "chips": [
          "Where",
          "is",
          "the",
          "supermarket",
          "?"
        ],
        "correctAnswer": "Where is the supermarket?",
        "explanation": "Where is the supermarket? [슈퍼마켓이(가) 어디에 있나요?]"
      },
      {
        "id": 96,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 5단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 우리는 에너지를 절약하고 지구를 보호해야 해.",
        "chips": [
          "energy",
          "the",
          "Earth",
          "and",
          ".",
          "protect",
          "save",
          "should",
          "We"
        ],
        "correctAnswer": "We should save energy and protect the Earth.",
        "explanation": "We should save energy and protect the Earth. [우리는 에너지를 절약하고 지구를 보호해야 해.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 97,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 5단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 내가 가장 좋아하는 계절은 꽃이 피는 봄이야.",
        "chips": [
          "spring",
          "favorite",
          "bloom",
          "because",
          "flowers",
          "My",
          "is",
          ".",
          "season"
        ],
        "correctAnswer": "My favorite season is spring because flowers bloom.",
        "explanation": "My favorite season is spring because flowers bloom. [내가 가장 좋아하는 계절은 꽃이 피는 봄이야.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 98,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 5단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 두 블록 직진해서 모퉁이에서 좌회전하세요.",
        "chips": [
          "corner",
          "turn",
          ".",
          "Go",
          "the",
          "straight",
          "two",
          "blocks",
          "at",
          "left",
          "and"
        ],
        "correctAnswer": "Go straight two blocks and turn left at the corner.",
        "explanation": "Go straight two blocks and turn left at the corner. [두 블록 직진해서 모퉁이에서 좌회전하세요.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 99,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 5단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 너는 의사 진료를 받고 약을 먹어야 해.",
        "chips": [
          "medicine",
          "and",
          "take",
          "doctor",
          "a",
          "see",
          "should",
          ".",
          "You"
        ],
        "correctAnswer": "You should see a doctor and take medicine.",
        "explanation": "You should see a doctor and take medicine. [너는 의사 진료를 받고 약을 먹어야 해.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 5단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 우리 이번 주 토요일에 함께 공원에 가는 게 어때?",
        "chips": [
          "go",
          "we",
          "park",
          "together",
          "don't",
          "Why",
          "to",
          "this",
          "the",
          "?",
          "Saturday"
        ],
        "correctAnswer": "Why don't we go to the park together this Saturday?",
        "explanation": "Why don't we go to the park together this Saturday? [우리 이번 주 토요일에 함께 공원에 가는 게 어때?] 축하합니다! 골든벨 완주! 🔔"
      }
    ]
  },
  "6G_L06": {
    "name": "6단원: 외모와 인물 묘사 (What does she look like?)",
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
        "audioText": "A: What does your friend look like? B: She has long straight black hair and wears glasses.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "키가 매우 크고 안경 미착용",
          "갈색 곱슬머리에 귀걸이 착용",
          "짧은 생머리에 모자 착용",
          "긴 검은 생머리에 안경을 쓰다"
        ],
        "correctIndex": 3,
        "correctAnswer": "긴 검은 생머리에 안경을 쓰다",
        "explanation": "'long straight black hair'과 'wears glasses'입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has short curly brown hair and wears a red cap.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "갈색 곱슬머리에 귀걸이 착용",
          "짧은 갈색 곱슬머리에 빨간 모자를 쓰다",
          "짧은 생머리에 모자 착용",
          "키가 매우 크고 안경 미착용"
        ],
        "correctIndex": 1,
        "correctAnswer": "짧은 갈색 곱슬머리에 빨간 모자를 쓰다",
        "explanation": "'short curly brown hair'과 'wears a red cap'입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has wavy blond hair and has brown eyes.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "웨이브 금발에 갈색 눈을 가지다",
          "짧은 생머리에 모자 착용",
          "키가 매우 크고 안경 미착용",
          "갈색 곱슬머리에 귀걸이 착용"
        ],
        "correctIndex": 0,
        "correctAnswer": "웨이브 금발에 갈색 눈을 가지다",
        "explanation": "'wavy blond hair'과 'has brown eyes'입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has short black hair and is very tall.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "짧은 생머리에 모자 착용",
          "짧은 검은 머리에 키가 매우 크다",
          "갈색 곱슬머리에 귀걸이 착용",
          "키가 매우 크고 안경 미착용"
        ],
        "correctIndex": 1,
        "correctAnswer": "짧은 검은 머리에 키가 매우 크다",
        "explanation": "'short black hair'과 'is very tall'입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has long straight black hair and wears glasses.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "긴 검은 생머리에 안경을 쓰다",
          "짧은 생머리에 모자 착용",
          "키가 매우 크고 안경 미착용",
          "갈색 곱슬머리에 귀걸이 착용"
        ],
        "correctIndex": 0,
        "correctAnswer": "긴 검은 생머리에 안경을 쓰다",
        "explanation": "'long straight black hair'과 'wears glasses'입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has short curly brown hair and wears a red cap.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "갈색 곱슬머리에 귀걸이 착용",
          "짧은 갈색 곱슬머리에 빨간 모자를 쓰다",
          "짧은 생머리에 모자 착용",
          "키가 매우 크고 안경 미착용"
        ],
        "correctIndex": 1,
        "correctAnswer": "짧은 갈색 곱슬머리에 빨간 모자를 쓰다",
        "explanation": "'short curly brown hair'과 'wears a red cap'입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has wavy blond hair and has brown eyes.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "키가 매우 크고 안경 미착용",
          "갈색 곱슬머리에 귀걸이 착용",
          "짧은 생머리에 모자 착용",
          "웨이브 금발에 갈색 눈을 가지다"
        ],
        "correctIndex": 3,
        "correctAnswer": "웨이브 금발에 갈색 눈을 가지다",
        "explanation": "'wavy blond hair'과 'has brown eyes'입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has short black hair and is very tall.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "짧은 검은 머리에 키가 매우 크다",
          "키가 매우 크고 안경 미착용",
          "갈색 곱슬머리에 귀걸이 착용",
          "짧은 생머리에 모자 착용"
        ],
        "correctIndex": 0,
        "correctAnswer": "짧은 검은 머리에 키가 매우 크다",
        "explanation": "'short black hair'과 'is very tall'입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has long straight black hair and wears glasses.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "긴 검은 생머리에 안경을 쓰다",
          "짧은 생머리에 모자 착용",
          "갈색 곱슬머리에 귀걸이 착용",
          "키가 매우 크고 안경 미착용"
        ],
        "correctIndex": 0,
        "correctAnswer": "긴 검은 생머리에 안경을 쓰다",
        "explanation": "'long straight black hair'과 'wears glasses'입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has short curly brown hair and wears a red cap.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "짧은 갈색 곱슬머리에 빨간 모자를 쓰다",
          "짧은 생머리에 모자 착용",
          "키가 매우 크고 안경 미착용",
          "갈색 곱슬머리에 귀걸이 착용"
        ],
        "correctIndex": 0,
        "correctAnswer": "짧은 갈색 곱슬머리에 빨간 모자를 쓰다",
        "explanation": "'short curly brown hair'과 'wears a red cap'입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has wavy blond hair and has brown eyes.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "키가 매우 크고 안경 미착용",
          "짧은 생머리에 모자 착용",
          "웨이브 금발에 갈색 눈을 가지다",
          "갈색 곱슬머리에 귀걸이 착용"
        ],
        "correctIndex": 2,
        "correctAnswer": "웨이브 금발에 갈색 눈을 가지다",
        "explanation": "'wavy blond hair'과 'has brown eyes'입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has short black hair and is very tall.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "짧은 검은 머리에 키가 매우 크다",
          "짧은 생머리에 모자 착용",
          "키가 매우 크고 안경 미착용",
          "갈색 곱슬머리에 귀걸이 착용"
        ],
        "correctIndex": 0,
        "correctAnswer": "짧은 검은 머리에 키가 매우 크다",
        "explanation": "'short black hair'과 'is very tall'입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has long straight black hair and wears glasses.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "긴 검은 생머리에 안경을 쓰다",
          "갈색 곱슬머리에 귀걸이 착용",
          "키가 매우 크고 안경 미착용",
          "짧은 생머리에 모자 착용"
        ],
        "correctIndex": 0,
        "correctAnswer": "긴 검은 생머리에 안경을 쓰다",
        "explanation": "'long straight black hair'과 'wears glasses'입니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has short curly brown hair and wears a red cap.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "짧은 갈색 곱슬머리에 빨간 모자를 쓰다",
          "짧은 생머리에 모자 착용",
          "갈색 곱슬머리에 귀걸이 착용",
          "키가 매우 크고 안경 미착용"
        ],
        "correctIndex": 0,
        "correctAnswer": "짧은 갈색 곱슬머리에 빨간 모자를 쓰다",
        "explanation": "'short curly brown hair'과 'wears a red cap'입니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has wavy blond hair and has brown eyes.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "갈색 곱슬머리에 귀걸이 착용",
          "웨이브 금발에 갈색 눈을 가지다",
          "짧은 생머리에 모자 착용",
          "키가 매우 크고 안경 미착용"
        ],
        "correctIndex": 1,
        "correctAnswer": "웨이브 금발에 갈색 눈을 가지다",
        "explanation": "'wavy blond hair'과 'has brown eyes'입니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has short black hair and is very tall.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "키가 매우 크고 안경 미착용",
          "짧은 검은 머리에 키가 매우 크다",
          "갈색 곱슬머리에 귀걸이 착용",
          "짧은 생머리에 모자 착용"
        ],
        "correctIndex": 1,
        "correctAnswer": "짧은 검은 머리에 키가 매우 크다",
        "explanation": "'short black hair'과 'is very tall'입니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has long straight black hair and wears glasses.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "짧은 생머리에 모자 착용",
          "긴 검은 생머리에 안경을 쓰다",
          "키가 매우 크고 안경 미착용",
          "갈색 곱슬머리에 귀걸이 착용"
        ],
        "correctIndex": 1,
        "correctAnswer": "긴 검은 생머리에 안경을 쓰다",
        "explanation": "'long straight black hair'과 'wears glasses'입니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has short curly brown hair and wears a red cap.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "짧은 생머리에 모자 착용",
          "키가 매우 크고 안경 미착용",
          "짧은 갈색 곱슬머리에 빨간 모자를 쓰다",
          "갈색 곱슬머리에 귀걸이 착용"
        ],
        "correctIndex": 2,
        "correctAnswer": "짧은 갈색 곱슬머리에 빨간 모자를 쓰다",
        "explanation": "'short curly brown hair'과 'wears a red cap'입니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has wavy blond hair and has brown eyes.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "웨이브 금발에 갈색 눈을 가지다",
          "키가 매우 크고 안경 미착용",
          "짧은 생머리에 모자 착용",
          "갈색 곱슬머리에 귀걸이 착용"
        ],
        "correctIndex": 0,
        "correctAnswer": "웨이브 금발에 갈색 눈을 가지다",
        "explanation": "'wavy blond hair'과 'has brown eyes'입니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has short black hair and is very tall.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "짧은 검은 머리에 키가 매우 크다",
          "짧은 생머리에 모자 착용",
          "키가 매우 크고 안경 미착용",
          "갈색 곱슬머리에 귀걸이 착용"
        ],
        "correctIndex": 0,
        "correctAnswer": "짧은 검은 머리에 키가 매우 크다",
        "explanation": "'short black hair'과 'is very tall'입니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has long straight black hair and wears glasses.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "긴 검은 생머리에 안경을 쓰다",
          "갈색 곱슬머리에 귀걸이 착용",
          "키가 매우 크고 안경 미착용",
          "짧은 생머리에 모자 착용"
        ],
        "correctIndex": 0,
        "correctAnswer": "긴 검은 생머리에 안경을 쓰다",
        "explanation": "'long straight black hair'과 'wears glasses'입니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has short curly brown hair and wears a red cap.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "갈색 곱슬머리에 귀걸이 착용",
          "키가 매우 크고 안경 미착용",
          "짧은 생머리에 모자 착용",
          "짧은 갈색 곱슬머리에 빨간 모자를 쓰다"
        ],
        "correctIndex": 3,
        "correctAnswer": "짧은 갈색 곱슬머리에 빨간 모자를 쓰다",
        "explanation": "'short curly brown hair'과 'wears a red cap'입니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has wavy blond hair and has brown eyes.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "갈색 곱슬머리에 귀걸이 착용",
          "짧은 생머리에 모자 착용",
          "웨이브 금발에 갈색 눈을 가지다",
          "키가 매우 크고 안경 미착용"
        ],
        "correctIndex": 2,
        "correctAnswer": "웨이브 금발에 갈색 눈을 가지다",
        "explanation": "'wavy blond hair'과 'has brown eyes'입니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has short black hair and is very tall.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "짧은 검은 머리에 키가 매우 크다",
          "갈색 곱슬머리에 귀걸이 착용",
          "짧은 생머리에 모자 착용",
          "키가 매우 크고 안경 미착용"
        ],
        "correctIndex": 0,
        "correctAnswer": "짧은 검은 머리에 키가 매우 크다",
        "explanation": "'short black hair'과 'is very tall'입니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has long straight black hair and wears glasses.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "키가 매우 크고 안경 미착용",
          "짧은 생머리에 모자 착용",
          "갈색 곱슬머리에 귀걸이 착용",
          "긴 검은 생머리에 안경을 쓰다"
        ],
        "correctIndex": 3,
        "correctAnswer": "긴 검은 생머리에 안경을 쓰다",
        "explanation": "'long straight black hair'과 'wears glasses'입니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has short curly brown hair and wears a red cap.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "갈색 곱슬머리에 귀걸이 착용",
          "키가 매우 크고 안경 미착용",
          "짧은 생머리에 모자 착용",
          "짧은 갈색 곱슬머리에 빨간 모자를 쓰다"
        ],
        "correctIndex": 3,
        "correctAnswer": "짧은 갈색 곱슬머리에 빨간 모자를 쓰다",
        "explanation": "'short curly brown hair'과 'wears a red cap'입니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has wavy blond hair and has brown eyes.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "갈색 곱슬머리에 귀걸이 착용",
          "키가 매우 크고 안경 미착용",
          "짧은 생머리에 모자 착용",
          "웨이브 금발에 갈색 눈을 가지다"
        ],
        "correctIndex": 3,
        "correctAnswer": "웨이브 금발에 갈색 눈을 가지다",
        "explanation": "'wavy blond hair'과 'has brown eyes'입니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has short black hair and is very tall.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "갈색 곱슬머리에 귀걸이 착용",
          "키가 매우 크고 안경 미착용",
          "짧은 생머리에 모자 착용",
          "짧은 검은 머리에 키가 매우 크다"
        ],
        "correctIndex": 3,
        "correctAnswer": "짧은 검은 머리에 키가 매우 크다",
        "explanation": "'short black hair'과 'is very tall'입니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has long straight black hair and wears glasses.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "긴 검은 생머리에 안경을 쓰다",
          "짧은 생머리에 모자 착용",
          "키가 매우 크고 안경 미착용",
          "갈색 곱슬머리에 귀걸이 착용"
        ],
        "correctIndex": 0,
        "correctAnswer": "긴 검은 생머리에 안경을 쓰다",
        "explanation": "'long straight black hair'과 'wears glasses'입니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has short curly brown hair and wears a red cap.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "짧은 갈색 곱슬머리에 빨간 모자를 쓰다",
          "갈색 곱슬머리에 귀걸이 착용",
          "짧은 생머리에 모자 착용",
          "키가 매우 크고 안경 미착용"
        ],
        "correctIndex": 0,
        "correctAnswer": "짧은 갈색 곱슬머리에 빨간 모자를 쓰다",
        "explanation": "'short curly brown hair'과 'wears a red cap'입니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has wavy blond hair and has brown eyes.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "갈색 곱슬머리에 귀걸이 착용",
          "키가 매우 크고 안경 미착용",
          "짧은 생머리에 모자 착용",
          "웨이브 금발에 갈색 눈을 가지다"
        ],
        "correctIndex": 3,
        "correctAnswer": "웨이브 금발에 갈색 눈을 가지다",
        "explanation": "'wavy blond hair'과 'has brown eyes'입니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has short black hair and is very tall.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "갈색 곱슬머리에 귀걸이 착용",
          "짧은 생머리에 모자 착용",
          "키가 매우 크고 안경 미착용",
          "짧은 검은 머리에 키가 매우 크다"
        ],
        "correctIndex": 3,
        "correctAnswer": "짧은 검은 머리에 키가 매우 크다",
        "explanation": "'short black hair'과 'is very tall'입니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has long straight black hair and wears glasses.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "갈색 곱슬머리에 귀걸이 착용",
          "키가 매우 크고 안경 미착용",
          "짧은 생머리에 모자 착용",
          "긴 검은 생머리에 안경을 쓰다"
        ],
        "correctIndex": 3,
        "correctAnswer": "긴 검은 생머리에 안경을 쓰다",
        "explanation": "'long straight black hair'과 'wears glasses'입니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has short curly brown hair and wears a red cap.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "짧은 갈색 곱슬머리에 빨간 모자를 쓰다",
          "갈색 곱슬머리에 귀걸이 착용",
          "짧은 생머리에 모자 착용",
          "키가 매우 크고 안경 미착용"
        ],
        "correctIndex": 0,
        "correctAnswer": "짧은 갈색 곱슬머리에 빨간 모자를 쓰다",
        "explanation": "'short curly brown hair'과 'wears a red cap'입니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What does your friend look like? B: She has wavy blond hair and has brown eyes.",
        "question": "[듣기 · 6단원] 인물 묘사를 듣고, 친구의 외모 특징으로 알맞은 것을 고르세요.",
        "options": [
          "갈색 곱슬머리에 귀걸이 착용",
          "웨이브 금발에 갈색 눈을 가지다",
          "짧은 생머리에 모자 착용",
          "키가 매우 크고 안경 미착용"
        ],
        "correctIndex": 1,
        "correctAnswer": "웨이브 금발에 갈색 눈을 가지다",
        "explanation": "'wavy blond hair'과 'has brown eyes'입니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loves this curly.",
          "I loving this curly.",
          "I love this beautifully curly.",
          "I love this beautiful curly."
        ],
        "correctIndex": 3,
        "correctAnswer": "I love this beautiful curly.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Sounds like a wonderful idea!",
          "I am a student.",
          "Go straight one block.",
          "Because it's hot."
        ],
        "correctIndex": 0,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [6단원] 관련 대화 상황",
        "options": [
          "I am eating lunch right now.",
          "We should learn more about 안경 (glasses).",
          "Where is the post office?",
          "What time is it now?"
        ],
        "correctIndex": 1,
        "correctAnswer": "We should learn more about 안경 (glasses).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (착용하다)",
        "options": [
          "glasses",
          "straight",
          "curly",
          "wear"
        ],
        "correctIndex": 3,
        "correctAnswer": "wear",
        "explanation": "'착용하다'에 해당하는 영어 단어는 'wear'입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I love this beautiful tall.",
          "I love this beautifully tall.",
          "I loving this tall.",
          "I loves this tall."
        ],
        "correctIndex": 0,
        "correctAnswer": "I love this beautiful tall.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "I am a student.",
          "Sounds like a wonderful idea!",
          "Go straight one block.",
          "Because it's hot."
        ],
        "correctIndex": 1,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [6단원] 관련 대화 상황",
        "options": [
          "We should learn more about 재킷, 외투 (jacket).",
          "I am eating lunch right now.",
          "What time is it now?",
          "Where is the post office?"
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 재킷, 외투 (jacket).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (머리카락)",
        "options": [
          "glasses",
          "curly",
          "straight",
          "hair"
        ],
        "correctIndex": 3,
        "correctAnswer": "hair",
        "explanation": "'머리카락'에 해당하는 영어 단어는 'hair'입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loves this look.",
          "I loving this look.",
          "I love this beautifully look.",
          "I love this beautiful look."
        ],
        "correctIndex": 3,
        "correctAnswer": "I love this beautiful look.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Because it's hot.",
          "Go straight one block.",
          "I am a student.",
          "Sounds like a wonderful idea!"
        ],
        "correctIndex": 3,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [6단원] 관련 대화 상황",
        "options": [
          "Where is the post office?",
          "We should learn more about 곱슬머리의 (curly).",
          "I am eating lunch right now.",
          "What time is it now?"
        ],
        "correctIndex": 1,
        "correctAnswer": "We should learn more about 곱슬머리의 (curly).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (곧은, 생머리의)",
        "options": [
          "glasses",
          "wear",
          "curly",
          "straight"
        ],
        "correctIndex": 3,
        "correctAnswer": "straight",
        "explanation": "'곧은, 생머리의'에 해당하는 영어 단어는 'straight'입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loving this glasses.",
          "I love this beautifully glasses.",
          "I loves this glasses.",
          "I love this beautiful glasses."
        ],
        "correctIndex": 3,
        "correctAnswer": "I love this beautiful glasses.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Sounds like a wonderful idea!",
          "I am a student.",
          "Go straight one block.",
          "Because it's hot."
        ],
        "correctIndex": 0,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [6단원] 관련 대화 상황",
        "options": [
          "We should learn more about 키가 큰 (tall).",
          "Where is the post office?",
          "What time is it now?",
          "I am eating lunch right now."
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 키가 큰 (tall).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (키가 작은, 짧은)",
        "options": [
          "curly",
          "glasses",
          "straight",
          "short"
        ],
        "correctIndex": 3,
        "correctAnswer": "short",
        "explanation": "'키가 작은, 짧은'에 해당하는 영어 단어는 'short'입니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I love this beautifully jacket.",
          "I love this beautiful jacket.",
          "I loves this jacket.",
          "I loving this jacket."
        ],
        "correctIndex": 1,
        "correctAnswer": "I love this beautiful jacket.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Sounds like a wonderful idea!",
          "I am a student.",
          "Because it's hot.",
          "Go straight one block."
        ],
        "correctIndex": 0,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [6단원] 관련 대화 상황",
        "options": [
          "What time is it now?",
          "I am eating lunch right now.",
          "Where is the post office?",
          "We should learn more about ~처럼 보이다 (look)."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should learn more about ~처럼 보이다 (look).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (눈)",
        "options": [
          "glasses",
          "curly",
          "straight",
          "eyes"
        ],
        "correctIndex": 3,
        "correctAnswer": "eyes",
        "explanation": "'눈'에 해당하는 영어 단어는 'eyes'입니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I love this beautiful curly.",
          "I loves this curly.",
          "I love this beautifully curly.",
          "I loving this curly."
        ],
        "correctIndex": 0,
        "correctAnswer": "I love this beautiful curly.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Go straight one block.",
          "I am a student.",
          "Because it's hot.",
          "Sounds like a wonderful idea!"
        ],
        "correctIndex": 3,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [6단원] 관련 대화 상황",
        "options": [
          "We should learn more about 안경 (glasses).",
          "I am eating lunch right now.",
          "Where is the post office?",
          "What time is it now?"
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 안경 (glasses).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (착용하다)",
        "options": [
          "wear",
          "curly",
          "glasses",
          "straight"
        ],
        "correctIndex": 0,
        "correctAnswer": "wear",
        "explanation": "'착용하다'에 해당하는 영어 단어는 'wear'입니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loves this tall.",
          "I loving this tall.",
          "I love this beautifully tall.",
          "I love this beautiful tall."
        ],
        "correctIndex": 3,
        "correctAnswer": "I love this beautiful tall.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Sounds like a wonderful idea!",
          "I am a student.",
          "Go straight one block.",
          "Because it's hot."
        ],
        "correctIndex": 0,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [6단원] 관련 대화 상황",
        "options": [
          "We should learn more about 재킷, 외투 (jacket).",
          "Where is the post office?",
          "What time is it now?",
          "I am eating lunch right now."
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 재킷, 외투 (jacket).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (머리카락)",
        "options": [
          "glasses",
          "straight",
          "curly",
          "hair"
        ],
        "correctIndex": 3,
        "correctAnswer": "hair",
        "explanation": "'머리카락'에 해당하는 영어 단어는 'hair'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I love this beautiful look.",
          "I love this beautifully look.",
          "I loving this look.",
          "I loves this look."
        ],
        "correctIndex": 0,
        "correctAnswer": "I love this beautiful look.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Sounds like a wonderful idea!",
          "I am a student.",
          "Go straight one block.",
          "Because it's hot."
        ],
        "correctIndex": 0,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [6단원] 관련 대화 상황",
        "options": [
          "What time is it now?",
          "We should learn more about 곱슬머리의 (curly).",
          "Where is the post office?",
          "I am eating lunch right now."
        ],
        "correctIndex": 1,
        "correctAnswer": "We should learn more about 곱슬머리의 (curly).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (곧은, 생머리의)",
        "options": [
          "wear",
          "curly",
          "straight",
          "glasses"
        ],
        "correctIndex": 2,
        "correctAnswer": "straight",
        "explanation": "'곧은, 생머리의'에 해당하는 영어 단어는 'straight'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I love this beautiful glasses.",
          "I love this beautifully glasses.",
          "I loving this glasses.",
          "I loves this glasses."
        ],
        "correctIndex": 0,
        "correctAnswer": "I love this beautiful glasses.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "I am a student.",
          "Because it's hot.",
          "Sounds like a wonderful idea!",
          "Go straight one block."
        ],
        "correctIndex": 2,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 6단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [6단원] 관련 대화 상황",
        "options": [
          "What time is it now?",
          "I am eating lunch right now.",
          "We should learn more about 키가 큰 (tall).",
          "Where is the post office?"
        ],
        "correctIndex": 2,
        "correctAnswer": "We should learn more about 키가 큰 (tall).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 6단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"곱슬머리의\" [힌트: c___y]",
        "correctAnswer": "curly",
        "explanation": "'곱슬머리의'은(는) 영어로 'curly'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 6단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"곧은, 생머리의\" [힌트: s______t]",
        "correctAnswer": "straight",
        "explanation": "'곧은, 생머리의'은(는) 영어로 'straight'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 6단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"안경\" [힌트: g_____s]",
        "correctAnswer": "glasses",
        "explanation": "'안경'은(는) 영어로 'glasses'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 6단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"착용하다\" [힌트: w__r]",
        "correctAnswer": "wear",
        "explanation": "'착용하다'은(는) 영어로 'wear'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 6단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"키가 큰\" [힌트: t__l]",
        "correctAnswer": "tall",
        "explanation": "'키가 큰'은(는) 영어로 'tall'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 6단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"키가 작은, 짧은\" [힌트: s___t]",
        "correctAnswer": "short",
        "explanation": "'키가 작은, 짧은'은(는) 영어로 'short'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 6단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"재킷, 외투\" [힌트: j____t]",
        "correctAnswer": "jacket",
        "explanation": "'재킷, 외투'은(는) 영어로 'jacket'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 6단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"머리카락\" [힌트: h__r]",
        "correctAnswer": "hair",
        "explanation": "'머리카락'은(는) 영어로 'hair'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 6단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"~처럼 보이다\" [힌트: l__k]",
        "correctAnswer": "look",
        "explanation": "'~처럼 보이다'은(는) 영어로 'look'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 6단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"눈\" [힌트: e__s]",
        "correctAnswer": "eyes",
        "explanation": "'눈'은(는) 영어로 'eyes'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "그녀는 긴 검은 생머리를 가지고 있어.",
        "chips": [
          "straight",
          ".",
          "She",
          "black",
          "has",
          "long",
          "hair"
        ],
        "correctAnswer": "She has long straight black hair.",
        "explanation": "She has long straight black hair. [그녀는 긴 검은 생머리를 가지고 있어.]"
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "그녀는 짧은 갈색 곱슬머리를 가지고 있어.",
        "chips": [
          "She",
          "has",
          ".",
          "hair",
          "brown",
          "curly",
          "short"
        ],
        "correctAnswer": "She has short curly brown hair.",
        "explanation": "She has short curly brown hair. [그녀는 짧은 갈색 곱슬머리를 가지고 있어.]"
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "그녀는 웨이브 금발를 가지고 있어.",
        "chips": [
          "blond",
          "She",
          ".",
          "has",
          "hair",
          "wavy"
        ],
        "correctAnswer": "She has wavy blond hair.",
        "explanation": "She has wavy blond hair. [그녀는 웨이브 금발를 가지고 있어.]"
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "그녀는 짧은 검은 머리를 가지고 있어.",
        "chips": [
          "She",
          "has",
          "hair",
          "black",
          "short",
          "."
        ],
        "correctAnswer": "She has short black hair.",
        "explanation": "She has short black hair. [그녀는 짧은 검은 머리를 가지고 있어.]"
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "그녀는 긴 검은 생머리를 가지고 있어.",
        "chips": [
          "straight",
          "long",
          "black",
          ".",
          "hair",
          "has",
          "She"
        ],
        "correctAnswer": "She has long straight black hair.",
        "explanation": "She has long straight black hair. [그녀는 긴 검은 생머리를 가지고 있어.]"
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "그녀는 짧은 갈색 곱슬머리를 가지고 있어.",
        "chips": [
          "She",
          "hair",
          "short",
          ".",
          "curly",
          "brown",
          "has"
        ],
        "correctAnswer": "She has short curly brown hair.",
        "explanation": "She has short curly brown hair. [그녀는 짧은 갈색 곱슬머리를 가지고 있어.]"
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "그녀는 웨이브 금발를 가지고 있어.",
        "chips": [
          "hair",
          "She",
          "has",
          ".",
          "wavy",
          "blond"
        ],
        "correctAnswer": "She has wavy blond hair.",
        "explanation": "She has wavy blond hair. [그녀는 웨이브 금발를 가지고 있어.]"
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "그녀는 짧은 검은 머리를 가지고 있어.",
        "chips": [
          "She",
          "hair",
          "has",
          "black",
          "short",
          "."
        ],
        "correctAnswer": "She has short black hair.",
        "explanation": "She has short black hair. [그녀는 짧은 검은 머리를 가지고 있어.]"
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "그녀는 긴 검은 생머리를 가지고 있어.",
        "chips": [
          ".",
          "She",
          "hair",
          "straight",
          "black",
          "long",
          "has"
        ],
        "correctAnswer": "She has long straight black hair.",
        "explanation": "She has long straight black hair. [그녀는 긴 검은 생머리를 가지고 있어.]"
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "그녀는 짧은 갈색 곱슬머리를 가지고 있어.",
        "chips": [
          "She",
          "short",
          "hair",
          ".",
          "has",
          "brown",
          "curly"
        ],
        "correctAnswer": "She has short curly brown hair.",
        "explanation": "She has short curly brown hair. [그녀는 짧은 갈색 곱슬머리를 가지고 있어.]"
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "그녀는 웨이브 금발를 가지고 있어.",
        "chips": [
          "blond",
          "wavy",
          ".",
          "has",
          "hair",
          "She"
        ],
        "correctAnswer": "She has wavy blond hair.",
        "explanation": "She has wavy blond hair. [그녀는 웨이브 금발를 가지고 있어.]"
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "그녀는 짧은 검은 머리를 가지고 있어.",
        "chips": [
          ".",
          "She",
          "black",
          "has",
          "short",
          "hair"
        ],
        "correctAnswer": "She has short black hair.",
        "explanation": "She has short black hair. [그녀는 짧은 검은 머리를 가지고 있어.]"
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "그녀는 긴 검은 생머리를 가지고 있어.",
        "chips": [
          "straight",
          "long",
          "black",
          "has",
          "hair",
          ".",
          "She"
        ],
        "correctAnswer": "She has long straight black hair.",
        "explanation": "She has long straight black hair. [그녀는 긴 검은 생머리를 가지고 있어.]"
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "그녀는 짧은 갈색 곱슬머리를 가지고 있어.",
        "chips": [
          ".",
          "hair",
          "brown",
          "curly",
          "short",
          "has",
          "She"
        ],
        "correctAnswer": "She has short curly brown hair.",
        "explanation": "She has short curly brown hair. [그녀는 짧은 갈색 곱슬머리를 가지고 있어.]"
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "그녀는 웨이브 금발를 가지고 있어.",
        "chips": [
          "hair",
          "blond",
          "wavy",
          "has",
          ".",
          "She"
        ],
        "correctAnswer": "She has wavy blond hair.",
        "explanation": "She has wavy blond hair. [그녀는 웨이브 금발를 가지고 있어.]"
      },
      {
        "id": 96,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 6단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 우리는 에너지를 절약하고 지구를 보호해야 해.",
        "chips": [
          "Earth",
          "energy",
          "save",
          "should",
          "the",
          "protect",
          "We",
          "and",
          "."
        ],
        "correctAnswer": "We should save energy and protect the Earth.",
        "explanation": "We should save energy and protect the Earth. [우리는 에너지를 절약하고 지구를 보호해야 해.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 97,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 6단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 내가 가장 좋아하는 계절은 꽃이 피는 봄이야.",
        "chips": [
          "My",
          "is",
          "because",
          ".",
          "favorite",
          "season",
          "spring",
          "flowers",
          "bloom"
        ],
        "correctAnswer": "My favorite season is spring because flowers bloom.",
        "explanation": "My favorite season is spring because flowers bloom. [내가 가장 좋아하는 계절은 꽃이 피는 봄이야.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 98,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 6단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 두 블록 직진해서 모퉁이에서 좌회전하세요.",
        "chips": [
          "Go",
          "turn",
          "straight",
          "two",
          "at",
          ".",
          "blocks",
          "left",
          "the",
          "and",
          "corner"
        ],
        "correctAnswer": "Go straight two blocks and turn left at the corner.",
        "explanation": "Go straight two blocks and turn left at the corner. [두 블록 직진해서 모퉁이에서 좌회전하세요.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 99,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 6단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 너는 의사 진료를 받고 약을 먹어야 해.",
        "chips": [
          "medicine",
          "doctor",
          "You",
          "take",
          "see",
          "and",
          ".",
          "should",
          "a"
        ],
        "correctAnswer": "You should see a doctor and take medicine.",
        "explanation": "You should see a doctor and take medicine. [너는 의사 진료를 받고 약을 먹어야 해.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 6단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 우리 이번 주 토요일에 함께 공원에 가는 게 어때?",
        "chips": [
          "park",
          "together",
          "the",
          "to",
          "Why",
          "?",
          "this",
          "don't",
          "Saturday",
          "we",
          "go"
        ],
        "correctAnswer": "Why don't we go to the park together this Saturday?",
        "explanation": "Why don't we go to the park together this Saturday? [우리 이번 주 토요일에 함께 공원에 가는 게 어때?] 축하합니다! 골든벨 완주! 🔔"
      }
    ]
  },
  "6G_L07": {
    "name": "7단원: 과거 경험과 여행 (Have you ever visited Jeju-do?)",
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
        "audioText": "A: Have you ever visited Jeju-do? B: Yes, I have. I rode a horse and climbed Hallasan.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 제주도에서 한 일로 알맞은 것은?",
        "options": [
          "말을 타고 한라산을 등반하다",
          "호텔에서 휴식만 취함",
          "비가 와서 실내에 머무름",
          "친구들과 놀이공원 방문"
        ],
        "correctIndex": 0,
        "correctAnswer": "말을 타고 한라산을 등반하다",
        "explanation": "'I rode a horse and climbed Hallasan'(말을 타고 한라산을 등반하다)입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Gyeongju? B: Yes, I have. I visited old temples and museums.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 경주에서 한 일로 알맞은 것은?",
        "options": [
          "오래된 사찰과 박물관을 방문하다",
          "친구들과 놀이공원 방문",
          "호텔에서 휴식만 취함",
          "비가 와서 실내에 머무름"
        ],
        "correctIndex": 0,
        "correctAnswer": "오래된 사찰과 박물관을 방문하다",
        "explanation": "'I visited old temples and museums'(오래된 사찰과 박물관을 방문하다)입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Gangneung? B: Yes, I have. I saw the blue ocean and ate seafood.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 강릉에서 한 일로 알맞은 것은?",
        "options": [
          "푸른 바다를 보고 해산물을 먹다",
          "호텔에서 휴식만 취함",
          "비가 와서 실내에 머무름",
          "친구들과 놀이공원 방문"
        ],
        "correctIndex": 0,
        "correctAnswer": "푸른 바다를 보고 해산물을 먹다",
        "explanation": "'I saw the blue ocean and ate seafood'(푸른 바다를 보고 해산물을 먹다)입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Busan? B: Yes, I have. I walked on Haeundae beach with family.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 부산에서 한 일로 알맞은 것은?",
        "options": [
          "비가 와서 실내에 머무름",
          "호텔에서 휴식만 취함",
          "친구들과 놀이공원 방문",
          "가족과 해운대 해변을 걷다"
        ],
        "correctIndex": 3,
        "correctAnswer": "가족과 해운대 해변을 걷다",
        "explanation": "'I walked on Haeundae beach with family'(가족과 해운대 해변을 걷다)입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Jeju-do? B: Yes, I have. I rode a horse and climbed Hallasan.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 제주도에서 한 일로 알맞은 것은?",
        "options": [
          "비가 와서 실내에 머무름",
          "친구들과 놀이공원 방문",
          "호텔에서 휴식만 취함",
          "말을 타고 한라산을 등반하다"
        ],
        "correctIndex": 3,
        "correctAnswer": "말을 타고 한라산을 등반하다",
        "explanation": "'I rode a horse and climbed Hallasan'(말을 타고 한라산을 등반하다)입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Gyeongju? B: Yes, I have. I visited old temples and museums.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 경주에서 한 일로 알맞은 것은?",
        "options": [
          "친구들과 놀이공원 방문",
          "비가 와서 실내에 머무름",
          "호텔에서 휴식만 취함",
          "오래된 사찰과 박물관을 방문하다"
        ],
        "correctIndex": 3,
        "correctAnswer": "오래된 사찰과 박물관을 방문하다",
        "explanation": "'I visited old temples and museums'(오래된 사찰과 박물관을 방문하다)입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Gangneung? B: Yes, I have. I saw the blue ocean and ate seafood.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 강릉에서 한 일로 알맞은 것은?",
        "options": [
          "푸른 바다를 보고 해산물을 먹다",
          "호텔에서 휴식만 취함",
          "비가 와서 실내에 머무름",
          "친구들과 놀이공원 방문"
        ],
        "correctIndex": 0,
        "correctAnswer": "푸른 바다를 보고 해산물을 먹다",
        "explanation": "'I saw the blue ocean and ate seafood'(푸른 바다를 보고 해산물을 먹다)입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Busan? B: Yes, I have. I walked on Haeundae beach with family.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 부산에서 한 일로 알맞은 것은?",
        "options": [
          "호텔에서 휴식만 취함",
          "친구들과 놀이공원 방문",
          "가족과 해운대 해변을 걷다",
          "비가 와서 실내에 머무름"
        ],
        "correctIndex": 2,
        "correctAnswer": "가족과 해운대 해변을 걷다",
        "explanation": "'I walked on Haeundae beach with family'(가족과 해운대 해변을 걷다)입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Jeju-do? B: Yes, I have. I rode a horse and climbed Hallasan.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 제주도에서 한 일로 알맞은 것은?",
        "options": [
          "친구들과 놀이공원 방문",
          "비가 와서 실내에 머무름",
          "호텔에서 휴식만 취함",
          "말을 타고 한라산을 등반하다"
        ],
        "correctIndex": 3,
        "correctAnswer": "말을 타고 한라산을 등반하다",
        "explanation": "'I rode a horse and climbed Hallasan'(말을 타고 한라산을 등반하다)입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Gyeongju? B: Yes, I have. I visited old temples and museums.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 경주에서 한 일로 알맞은 것은?",
        "options": [
          "오래된 사찰과 박물관을 방문하다",
          "호텔에서 휴식만 취함",
          "비가 와서 실내에 머무름",
          "친구들과 놀이공원 방문"
        ],
        "correctIndex": 0,
        "correctAnswer": "오래된 사찰과 박물관을 방문하다",
        "explanation": "'I visited old temples and museums'(오래된 사찰과 박물관을 방문하다)입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Gangneung? B: Yes, I have. I saw the blue ocean and ate seafood.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 강릉에서 한 일로 알맞은 것은?",
        "options": [
          "친구들과 놀이공원 방문",
          "비가 와서 실내에 머무름",
          "호텔에서 휴식만 취함",
          "푸른 바다를 보고 해산물을 먹다"
        ],
        "correctIndex": 3,
        "correctAnswer": "푸른 바다를 보고 해산물을 먹다",
        "explanation": "'I saw the blue ocean and ate seafood'(푸른 바다를 보고 해산물을 먹다)입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Busan? B: Yes, I have. I walked on Haeundae beach with family.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 부산에서 한 일로 알맞은 것은?",
        "options": [
          "가족과 해운대 해변을 걷다",
          "비가 와서 실내에 머무름",
          "친구들과 놀이공원 방문",
          "호텔에서 휴식만 취함"
        ],
        "correctIndex": 0,
        "correctAnswer": "가족과 해운대 해변을 걷다",
        "explanation": "'I walked on Haeundae beach with family'(가족과 해운대 해변을 걷다)입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Jeju-do? B: Yes, I have. I rode a horse and climbed Hallasan.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 제주도에서 한 일로 알맞은 것은?",
        "options": [
          "말을 타고 한라산을 등반하다",
          "친구들과 놀이공원 방문",
          "호텔에서 휴식만 취함",
          "비가 와서 실내에 머무름"
        ],
        "correctIndex": 0,
        "correctAnswer": "말을 타고 한라산을 등반하다",
        "explanation": "'I rode a horse and climbed Hallasan'(말을 타고 한라산을 등반하다)입니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Gyeongju? B: Yes, I have. I visited old temples and museums.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 경주에서 한 일로 알맞은 것은?",
        "options": [
          "비가 와서 실내에 머무름",
          "호텔에서 휴식만 취함",
          "친구들과 놀이공원 방문",
          "오래된 사찰과 박물관을 방문하다"
        ],
        "correctIndex": 3,
        "correctAnswer": "오래된 사찰과 박물관을 방문하다",
        "explanation": "'I visited old temples and museums'(오래된 사찰과 박물관을 방문하다)입니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Gangneung? B: Yes, I have. I saw the blue ocean and ate seafood.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 강릉에서 한 일로 알맞은 것은?",
        "options": [
          "푸른 바다를 보고 해산물을 먹다",
          "호텔에서 휴식만 취함",
          "비가 와서 실내에 머무름",
          "친구들과 놀이공원 방문"
        ],
        "correctIndex": 0,
        "correctAnswer": "푸른 바다를 보고 해산물을 먹다",
        "explanation": "'I saw the blue ocean and ate seafood'(푸른 바다를 보고 해산물을 먹다)입니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Busan? B: Yes, I have. I walked on Haeundae beach with family.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 부산에서 한 일로 알맞은 것은?",
        "options": [
          "비가 와서 실내에 머무름",
          "호텔에서 휴식만 취함",
          "친구들과 놀이공원 방문",
          "가족과 해운대 해변을 걷다"
        ],
        "correctIndex": 3,
        "correctAnswer": "가족과 해운대 해변을 걷다",
        "explanation": "'I walked on Haeundae beach with family'(가족과 해운대 해변을 걷다)입니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Jeju-do? B: Yes, I have. I rode a horse and climbed Hallasan.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 제주도에서 한 일로 알맞은 것은?",
        "options": [
          "친구들과 놀이공원 방문",
          "비가 와서 실내에 머무름",
          "호텔에서 휴식만 취함",
          "말을 타고 한라산을 등반하다"
        ],
        "correctIndex": 3,
        "correctAnswer": "말을 타고 한라산을 등반하다",
        "explanation": "'I rode a horse and climbed Hallasan'(말을 타고 한라산을 등반하다)입니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Gyeongju? B: Yes, I have. I visited old temples and museums.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 경주에서 한 일로 알맞은 것은?",
        "options": [
          "비가 와서 실내에 머무름",
          "호텔에서 휴식만 취함",
          "오래된 사찰과 박물관을 방문하다",
          "친구들과 놀이공원 방문"
        ],
        "correctIndex": 2,
        "correctAnswer": "오래된 사찰과 박물관을 방문하다",
        "explanation": "'I visited old temples and museums'(오래된 사찰과 박물관을 방문하다)입니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Gangneung? B: Yes, I have. I saw the blue ocean and ate seafood.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 강릉에서 한 일로 알맞은 것은?",
        "options": [
          "푸른 바다를 보고 해산물을 먹다",
          "호텔에서 휴식만 취함",
          "비가 와서 실내에 머무름",
          "친구들과 놀이공원 방문"
        ],
        "correctIndex": 0,
        "correctAnswer": "푸른 바다를 보고 해산물을 먹다",
        "explanation": "'I saw the blue ocean and ate seafood'(푸른 바다를 보고 해산물을 먹다)입니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Busan? B: Yes, I have. I walked on Haeundae beach with family.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 부산에서 한 일로 알맞은 것은?",
        "options": [
          "친구들과 놀이공원 방문",
          "비가 와서 실내에 머무름",
          "호텔에서 휴식만 취함",
          "가족과 해운대 해변을 걷다"
        ],
        "correctIndex": 3,
        "correctAnswer": "가족과 해운대 해변을 걷다",
        "explanation": "'I walked on Haeundae beach with family'(가족과 해운대 해변을 걷다)입니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Jeju-do? B: Yes, I have. I rode a horse and climbed Hallasan.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 제주도에서 한 일로 알맞은 것은?",
        "options": [
          "친구들과 놀이공원 방문",
          "말을 타고 한라산을 등반하다",
          "호텔에서 휴식만 취함",
          "비가 와서 실내에 머무름"
        ],
        "correctIndex": 1,
        "correctAnswer": "말을 타고 한라산을 등반하다",
        "explanation": "'I rode a horse and climbed Hallasan'(말을 타고 한라산을 등반하다)입니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Gyeongju? B: Yes, I have. I visited old temples and museums.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 경주에서 한 일로 알맞은 것은?",
        "options": [
          "비가 와서 실내에 머무름",
          "친구들과 놀이공원 방문",
          "오래된 사찰과 박물관을 방문하다",
          "호텔에서 휴식만 취함"
        ],
        "correctIndex": 2,
        "correctAnswer": "오래된 사찰과 박물관을 방문하다",
        "explanation": "'I visited old temples and museums'(오래된 사찰과 박물관을 방문하다)입니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Gangneung? B: Yes, I have. I saw the blue ocean and ate seafood.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 강릉에서 한 일로 알맞은 것은?",
        "options": [
          "푸른 바다를 보고 해산물을 먹다",
          "호텔에서 휴식만 취함",
          "비가 와서 실내에 머무름",
          "친구들과 놀이공원 방문"
        ],
        "correctIndex": 0,
        "correctAnswer": "푸른 바다를 보고 해산물을 먹다",
        "explanation": "'I saw the blue ocean and ate seafood'(푸른 바다를 보고 해산물을 먹다)입니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Busan? B: Yes, I have. I walked on Haeundae beach with family.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 부산에서 한 일로 알맞은 것은?",
        "options": [
          "가족과 해운대 해변을 걷다",
          "호텔에서 휴식만 취함",
          "비가 와서 실내에 머무름",
          "친구들과 놀이공원 방문"
        ],
        "correctIndex": 0,
        "correctAnswer": "가족과 해운대 해변을 걷다",
        "explanation": "'I walked on Haeundae beach with family'(가족과 해운대 해변을 걷다)입니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Jeju-do? B: Yes, I have. I rode a horse and climbed Hallasan.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 제주도에서 한 일로 알맞은 것은?",
        "options": [
          "비가 와서 실내에 머무름",
          "호텔에서 휴식만 취함",
          "말을 타고 한라산을 등반하다",
          "친구들과 놀이공원 방문"
        ],
        "correctIndex": 2,
        "correctAnswer": "말을 타고 한라산을 등반하다",
        "explanation": "'I rode a horse and climbed Hallasan'(말을 타고 한라산을 등반하다)입니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Gyeongju? B: Yes, I have. I visited old temples and museums.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 경주에서 한 일로 알맞은 것은?",
        "options": [
          "오래된 사찰과 박물관을 방문하다",
          "호텔에서 휴식만 취함",
          "비가 와서 실내에 머무름",
          "친구들과 놀이공원 방문"
        ],
        "correctIndex": 0,
        "correctAnswer": "오래된 사찰과 박물관을 방문하다",
        "explanation": "'I visited old temples and museums'(오래된 사찰과 박물관을 방문하다)입니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Gangneung? B: Yes, I have. I saw the blue ocean and ate seafood.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 강릉에서 한 일로 알맞은 것은?",
        "options": [
          "푸른 바다를 보고 해산물을 먹다",
          "호텔에서 휴식만 취함",
          "친구들과 놀이공원 방문",
          "비가 와서 실내에 머무름"
        ],
        "correctIndex": 0,
        "correctAnswer": "푸른 바다를 보고 해산물을 먹다",
        "explanation": "'I saw the blue ocean and ate seafood'(푸른 바다를 보고 해산물을 먹다)입니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Busan? B: Yes, I have. I walked on Haeundae beach with family.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 부산에서 한 일로 알맞은 것은?",
        "options": [
          "가족과 해운대 해변을 걷다",
          "호텔에서 휴식만 취함",
          "비가 와서 실내에 머무름",
          "친구들과 놀이공원 방문"
        ],
        "correctIndex": 0,
        "correctAnswer": "가족과 해운대 해변을 걷다",
        "explanation": "'I walked on Haeundae beach with family'(가족과 해운대 해변을 걷다)입니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Jeju-do? B: Yes, I have. I rode a horse and climbed Hallasan.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 제주도에서 한 일로 알맞은 것은?",
        "options": [
          "친구들과 놀이공원 방문",
          "비가 와서 실내에 머무름",
          "호텔에서 휴식만 취함",
          "말을 타고 한라산을 등반하다"
        ],
        "correctIndex": 3,
        "correctAnswer": "말을 타고 한라산을 등반하다",
        "explanation": "'I rode a horse and climbed Hallasan'(말을 타고 한라산을 등반하다)입니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Gyeongju? B: Yes, I have. I visited old temples and museums.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 경주에서 한 일로 알맞은 것은?",
        "options": [
          "친구들과 놀이공원 방문",
          "오래된 사찰과 박물관을 방문하다",
          "호텔에서 휴식만 취함",
          "비가 와서 실내에 머무름"
        ],
        "correctIndex": 1,
        "correctAnswer": "오래된 사찰과 박물관을 방문하다",
        "explanation": "'I visited old temples and museums'(오래된 사찰과 박물관을 방문하다)입니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Gangneung? B: Yes, I have. I saw the blue ocean and ate seafood.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 강릉에서 한 일로 알맞은 것은?",
        "options": [
          "친구들과 놀이공원 방문",
          "비가 와서 실내에 머무름",
          "호텔에서 휴식만 취함",
          "푸른 바다를 보고 해산물을 먹다"
        ],
        "correctIndex": 3,
        "correctAnswer": "푸른 바다를 보고 해산물을 먹다",
        "explanation": "'I saw the blue ocean and ate seafood'(푸른 바다를 보고 해산물을 먹다)입니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Busan? B: Yes, I have. I walked on Haeundae beach with family.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 부산에서 한 일로 알맞은 것은?",
        "options": [
          "가족과 해운대 해변을 걷다",
          "호텔에서 휴식만 취함",
          "비가 와서 실내에 머무름",
          "친구들과 놀이공원 방문"
        ],
        "correctIndex": 0,
        "correctAnswer": "가족과 해운대 해변을 걷다",
        "explanation": "'I walked on Haeundae beach with family'(가족과 해운대 해변을 걷다)입니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Jeju-do? B: Yes, I have. I rode a horse and climbed Hallasan.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 제주도에서 한 일로 알맞은 것은?",
        "options": [
          "말을 타고 한라산을 등반하다",
          "호텔에서 휴식만 취함",
          "비가 와서 실내에 머무름",
          "친구들과 놀이공원 방문"
        ],
        "correctIndex": 0,
        "correctAnswer": "말을 타고 한라산을 등반하다",
        "explanation": "'I rode a horse and climbed Hallasan'(말을 타고 한라산을 등반하다)입니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Gyeongju? B: Yes, I have. I visited old temples and museums.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 경주에서 한 일로 알맞은 것은?",
        "options": [
          "오래된 사찰과 박물관을 방문하다",
          "호텔에서 휴식만 취함",
          "비가 와서 실내에 머무름",
          "친구들과 놀이공원 방문"
        ],
        "correctIndex": 0,
        "correctAnswer": "오래된 사찰과 박물관을 방문하다",
        "explanation": "'I visited old temples and museums'(오래된 사찰과 박물관을 방문하다)입니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Have you ever visited Gangneung? B: Yes, I have. I saw the blue ocean and ate seafood.",
        "question": "[듣기 · 7단원] 여행 경험 대화를 듣고, B가 강릉에서 한 일로 알맞은 것은?",
        "options": [
          "푸른 바다를 보고 해산물을 먹다",
          "호텔에서 휴식만 취함",
          "비가 와서 실내에 머무름",
          "친구들과 놀이공원 방문"
        ],
        "correctIndex": 0,
        "correctAnswer": "푸른 바다를 보고 해산물을 먹다",
        "explanation": "'I saw the blue ocean and ate seafood'(푸른 바다를 보고 해산물을 먹다)입니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I love this beautiful ever.",
          "I love this beautifully ever.",
          "I loving this ever.",
          "I loves this ever."
        ],
        "correctIndex": 0,
        "correctAnswer": "I love this beautiful ever.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Go straight one block.",
          "I am a student.",
          "Because it's hot.",
          "Sounds like a wonderful idea!"
        ],
        "correctIndex": 3,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [7단원] 관련 대화 상황",
        "options": [
          "We should learn more about 경험 (experience).",
          "I am eating lunch right now.",
          "What time is it now?",
          "Where is the post office?"
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 경험 (experience).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (멋진)",
        "options": [
          "visited",
          "ever",
          "experience",
          "wonderful"
        ],
        "correctIndex": 3,
        "correctAnswer": "wonderful",
        "explanation": "'멋진'에 해당하는 영어 단어는 'wonderful'입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I love this beautiful rode.",
          "I love this beautifully rode.",
          "I loving this rode.",
          "I loves this rode."
        ],
        "correctIndex": 0,
        "correctAnswer": "I love this beautiful rode.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Sounds like a wonderful idea!",
          "I am a student.",
          "Because it's hot.",
          "Go straight one block."
        ],
        "correctIndex": 0,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [7단원] 관련 대화 상황",
        "options": [
          "Where is the post office?",
          "We should learn more about 박물관 (museum).",
          "I am eating lunch right now.",
          "What time is it now?"
        ],
        "correctIndex": 1,
        "correctAnswer": "We should learn more about 박물관 (museum).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (올랐다)",
        "options": [
          "climbed",
          "ever",
          "visited",
          "experience"
        ],
        "correctIndex": 0,
        "correctAnswer": "climbed",
        "explanation": "'올랐다'에 해당하는 영어 단어는 'climbed'입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I love this beautiful ocean.",
          "I love this beautifully ocean.",
          "I loving this ocean.",
          "I loves this ocean."
        ],
        "correctIndex": 0,
        "correctAnswer": "I love this beautiful ocean.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Go straight one block.",
          "I am a student.",
          "Sounds like a wonderful idea!",
          "Because it's hot."
        ],
        "correctIndex": 2,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [7단원] 관련 대화 상황",
        "options": [
          "I am eating lunch right now.",
          "What time is it now?",
          "Where is the post office?",
          "We should learn more about 이전에, 지금까지 (ever)."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should learn more about 이전에, 지금까지 (ever).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (방문했다)",
        "options": [
          "wonderful",
          "ever",
          "visited",
          "experience"
        ],
        "correctIndex": 2,
        "correctAnswer": "visited",
        "explanation": "'방문했다'에 해당하는 영어 단어는 'visited'입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loving this experience.",
          "I love this beautifully experience.",
          "I love this beautiful experience.",
          "I loves this experience."
        ],
        "correctIndex": 2,
        "correctAnswer": "I love this beautiful experience.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Sounds like a wonderful idea!",
          "I am a student.",
          "Go straight one block.",
          "Because it's hot."
        ],
        "correctIndex": 0,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [7단원] 관련 대화 상황",
        "options": [
          "What time is it now?",
          "Where is the post office?",
          "I am eating lunch right now.",
          "We should learn more about 탔다 (rode)."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should learn more about 탔다 (rode).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (사찰, 절)",
        "options": [
          "experience",
          "visited",
          "ever",
          "temple"
        ],
        "correctIndex": 3,
        "correctAnswer": "temple",
        "explanation": "'사찰, 절'에 해당하는 영어 단어는 'temple'입니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loves this museum.",
          "I love this beautiful museum.",
          "I love this beautifully museum.",
          "I loving this museum."
        ],
        "correctIndex": 1,
        "correctAnswer": "I love this beautiful museum.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Sounds like a wonderful idea!",
          "Because it's hot.",
          "I am a student.",
          "Go straight one block."
        ],
        "correctIndex": 0,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [7단원] 관련 대화 상황",
        "options": [
          "Where is the post office?",
          "We should learn more about 바다, 대양 (ocean).",
          "I am eating lunch right now.",
          "What time is it now?"
        ],
        "correctIndex": 1,
        "correctAnswer": "We should learn more about 바다, 대양 (ocean).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (사진, 그림)",
        "options": [
          "experience",
          "picture",
          "ever",
          "visited"
        ],
        "correctIndex": 1,
        "correctAnswer": "picture",
        "explanation": "'사진, 그림'에 해당하는 영어 단어는 'picture'입니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loving this ever.",
          "I love this beautiful ever.",
          "I love this beautifully ever.",
          "I loves this ever."
        ],
        "correctIndex": 1,
        "correctAnswer": "I love this beautiful ever.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Go straight one block.",
          "Sounds like a wonderful idea!",
          "I am a student.",
          "Because it's hot."
        ],
        "correctIndex": 1,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [7단원] 관련 대화 상황",
        "options": [
          "Where is the post office?",
          "What time is it now?",
          "I am eating lunch right now.",
          "We should learn more about 경험 (experience)."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should learn more about 경험 (experience).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (멋진)",
        "options": [
          "wonderful",
          "ever",
          "visited",
          "experience"
        ],
        "correctIndex": 0,
        "correctAnswer": "wonderful",
        "explanation": "'멋진'에 해당하는 영어 단어는 'wonderful'입니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I love this beautifully rode.",
          "I love this beautiful rode.",
          "I loving this rode.",
          "I loves this rode."
        ],
        "correctIndex": 1,
        "correctAnswer": "I love this beautiful rode.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Because it's hot.",
          "I am a student.",
          "Go straight one block.",
          "Sounds like a wonderful idea!"
        ],
        "correctIndex": 3,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [7단원] 관련 대화 상황",
        "options": [
          "We should learn more about 박물관 (museum).",
          "Where is the post office?",
          "What time is it now?",
          "I am eating lunch right now."
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 박물관 (museum).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (올랐다)",
        "options": [
          "climbed",
          "experience",
          "ever",
          "visited"
        ],
        "correctIndex": 0,
        "correctAnswer": "climbed",
        "explanation": "'올랐다'에 해당하는 영어 단어는 'climbed'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I love this beautifully ocean.",
          "I loves this ocean.",
          "I love this beautiful ocean.",
          "I loving this ocean."
        ],
        "correctIndex": 2,
        "correctAnswer": "I love this beautiful ocean.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Because it's hot.",
          "Sounds like a wonderful idea!",
          "I am a student.",
          "Go straight one block."
        ],
        "correctIndex": 1,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [7단원] 관련 대화 상황",
        "options": [
          "We should learn more about 이전에, 지금까지 (ever).",
          "I am eating lunch right now.",
          "What time is it now?",
          "Where is the post office?"
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 이전에, 지금까지 (ever).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (방문했다)",
        "options": [
          "wonderful",
          "experience",
          "ever",
          "visited"
        ],
        "correctIndex": 3,
        "correctAnswer": "visited",
        "explanation": "'방문했다'에 해당하는 영어 단어는 'visited'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loves this experience.",
          "I love this beautiful experience.",
          "I loving this experience.",
          "I love this beautifully experience."
        ],
        "correctIndex": 1,
        "correctAnswer": "I love this beautiful experience.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "I am a student.",
          "Because it's hot.",
          "Go straight one block.",
          "Sounds like a wonderful idea!"
        ],
        "correctIndex": 3,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 7단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [7단원] 관련 대화 상황",
        "options": [
          "We should learn more about 탔다 (rode).",
          "Where is the post office?",
          "What time is it now?",
          "I am eating lunch right now."
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 탔다 (rode).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 7단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"이전에, 지금까지\" [힌트: e__r]",
        "correctAnswer": "ever",
        "explanation": "'이전에, 지금까지'은(는) 영어로 'ever'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 7단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"방문했다\" [힌트: v_____d]",
        "correctAnswer": "visited",
        "explanation": "'방문했다'은(는) 영어로 'visited'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 7단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"경험\" [힌트: e________e]",
        "correctAnswer": "experience",
        "explanation": "'경험'은(는) 영어로 'experience'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 7단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"멋진\" [힌트: w_______l]",
        "correctAnswer": "wonderful",
        "explanation": "'멋진'은(는) 영어로 'wonderful'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 7단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"탔다\" [힌트: r__e]",
        "correctAnswer": "rode",
        "explanation": "'탔다'은(는) 영어로 'rode'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 7단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"사찰, 절\" [힌트: t____e]",
        "correctAnswer": "temple",
        "explanation": "'사찰, 절'은(는) 영어로 'temple'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 7단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"박물관\" [힌트: m____m]",
        "correctAnswer": "museum",
        "explanation": "'박물관'은(는) 영어로 'museum'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 7단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"올랐다\" [힌트: c_____d]",
        "correctAnswer": "climbed",
        "explanation": "'올랐다'은(는) 영어로 'climbed'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 7단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"바다, 대양\" [힌트: o___n]",
        "correctAnswer": "ocean",
        "explanation": "'바다, 대양'은(는) 영어로 'ocean'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 7단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"사진, 그림\" [힌트: p_____e]",
        "correctAnswer": "picture",
        "explanation": "'사진, 그림'은(는) 영어로 'picture'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 제주도에 가본 적이 있니?",
        "chips": [
          "Have",
          "?",
          "you",
          "Jeju-do",
          "visited",
          "ever"
        ],
        "correctAnswer": "Have you ever visited Jeju-do?",
        "explanation": "Have you ever visited Jeju-do? [너는 제주도에 가본 적이 있니?]"
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 경주에 가본 적이 있니?",
        "chips": [
          "?",
          "Gyeongju",
          "visited",
          "ever",
          "you",
          "Have"
        ],
        "correctAnswer": "Have you ever visited Gyeongju?",
        "explanation": "Have you ever visited Gyeongju? [너는 경주에 가본 적이 있니?]"
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 강릉에 가본 적이 있니?",
        "chips": [
          "Have",
          "Gangneung",
          "you",
          "visited",
          "ever",
          "?"
        ],
        "correctAnswer": "Have you ever visited Gangneung?",
        "explanation": "Have you ever visited Gangneung? [너는 강릉에 가본 적이 있니?]"
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 부산에 가본 적이 있니?",
        "chips": [
          "?",
          "visited",
          "ever",
          "you",
          "Busan",
          "Have"
        ],
        "correctAnswer": "Have you ever visited Busan?",
        "explanation": "Have you ever visited Busan? [너는 부산에 가본 적이 있니?]"
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 제주도에 가본 적이 있니?",
        "chips": [
          "?",
          "Jeju-do",
          "visited",
          "ever",
          "you",
          "Have"
        ],
        "correctAnswer": "Have you ever visited Jeju-do?",
        "explanation": "Have you ever visited Jeju-do? [너는 제주도에 가본 적이 있니?]"
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 경주에 가본 적이 있니?",
        "chips": [
          "visited",
          "?",
          "you",
          "Have",
          "ever",
          "Gyeongju"
        ],
        "correctAnswer": "Have you ever visited Gyeongju?",
        "explanation": "Have you ever visited Gyeongju? [너는 경주에 가본 적이 있니?]"
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 강릉에 가본 적이 있니?",
        "chips": [
          "ever",
          "you",
          "Have",
          "Gangneung",
          "?",
          "visited"
        ],
        "correctAnswer": "Have you ever visited Gangneung?",
        "explanation": "Have you ever visited Gangneung? [너는 강릉에 가본 적이 있니?]"
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 부산에 가본 적이 있니?",
        "chips": [
          "visited",
          "ever",
          "you",
          "?",
          "Busan",
          "Have"
        ],
        "correctAnswer": "Have you ever visited Busan?",
        "explanation": "Have you ever visited Busan? [너는 부산에 가본 적이 있니?]"
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 제주도에 가본 적이 있니?",
        "chips": [
          "visited",
          "ever",
          "you",
          "Have",
          "?",
          "Jeju-do"
        ],
        "correctAnswer": "Have you ever visited Jeju-do?",
        "explanation": "Have you ever visited Jeju-do? [너는 제주도에 가본 적이 있니?]"
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 경주에 가본 적이 있니?",
        "chips": [
          "ever",
          "Have",
          "?",
          "Gyeongju",
          "visited",
          "you"
        ],
        "correctAnswer": "Have you ever visited Gyeongju?",
        "explanation": "Have you ever visited Gyeongju? [너는 경주에 가본 적이 있니?]"
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 강릉에 가본 적이 있니?",
        "chips": [
          "you",
          "visited",
          "Gangneung",
          "?",
          "ever",
          "Have"
        ],
        "correctAnswer": "Have you ever visited Gangneung?",
        "explanation": "Have you ever visited Gangneung? [너는 강릉에 가본 적이 있니?]"
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 부산에 가본 적이 있니?",
        "chips": [
          "Have",
          "visited",
          "Busan",
          "you",
          "ever",
          "?"
        ],
        "correctAnswer": "Have you ever visited Busan?",
        "explanation": "Have you ever visited Busan? [너는 부산에 가본 적이 있니?]"
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 제주도에 가본 적이 있니?",
        "chips": [
          "?",
          "visited",
          "Have",
          "you",
          "Jeju-do",
          "ever"
        ],
        "correctAnswer": "Have you ever visited Jeju-do?",
        "explanation": "Have you ever visited Jeju-do? [너는 제주도에 가본 적이 있니?]"
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 경주에 가본 적이 있니?",
        "chips": [
          "ever",
          "you",
          "Have",
          "?",
          "Gyeongju",
          "visited"
        ],
        "correctAnswer": "Have you ever visited Gyeongju?",
        "explanation": "Have you ever visited Gyeongju? [너는 경주에 가본 적이 있니?]"
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 강릉에 가본 적이 있니?",
        "chips": [
          "visited",
          "Have",
          "you",
          "ever",
          "Gangneung",
          "?"
        ],
        "correctAnswer": "Have you ever visited Gangneung?",
        "explanation": "Have you ever visited Gangneung? [너는 강릉에 가본 적이 있니?]"
      },
      {
        "id": 96,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 7단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 우리는 에너지를 절약하고 지구를 보호해야 해.",
        "chips": [
          ".",
          "protect",
          "save",
          "should",
          "and",
          "energy",
          "We",
          "Earth",
          "the"
        ],
        "correctAnswer": "We should save energy and protect the Earth.",
        "explanation": "We should save energy and protect the Earth. [우리는 에너지를 절약하고 지구를 보호해야 해.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 97,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 7단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 내가 가장 좋아하는 계절은 꽃이 피는 봄이야.",
        "chips": [
          "is",
          "favorite",
          "spring",
          ".",
          "because",
          "bloom",
          "flowers",
          "My",
          "season"
        ],
        "correctAnswer": "My favorite season is spring because flowers bloom.",
        "explanation": "My favorite season is spring because flowers bloom. [내가 가장 좋아하는 계절은 꽃이 피는 봄이야.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 98,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 7단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 두 블록 직진해서 모퉁이에서 좌회전하세요.",
        "chips": [
          "corner",
          "at",
          "turn",
          "left",
          ".",
          "Go",
          "blocks",
          "straight",
          "two",
          "and",
          "the"
        ],
        "correctAnswer": "Go straight two blocks and turn left at the corner.",
        "explanation": "Go straight two blocks and turn left at the corner. [두 블록 직진해서 모퉁이에서 좌회전하세요.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 99,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 7단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 너는 의사 진료를 받고 약을 먹어야 해.",
        "chips": [
          "medicine",
          "You",
          "should",
          "take",
          ".",
          "see",
          "a",
          "doctor",
          "and"
        ],
        "correctAnswer": "You should see a doctor and take medicine.",
        "explanation": "You should see a doctor and take medicine. [너는 의사 진료를 받고 약을 먹어야 해.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 7단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 우리 이번 주 토요일에 함께 공원에 가는 게 어때?",
        "chips": [
          "?",
          "we",
          "don't",
          "to",
          "park",
          "together",
          "go",
          "Saturday",
          "this",
          "Why",
          "the"
        ],
        "correctAnswer": "Why don't we go to the park together this Saturday?",
        "explanation": "Why don't we go to the park together this Saturday? [우리 이번 주 토요일에 함께 공원에 가는 게 어때?] 축하합니다! 골든벨 완주! 🔔"
      }
    ]
  },
  "6G_L08": {
    "name": "8단원: 비교급과 특징 비교 (A giraffe is taller than an elephant)",
    "grade": 6,
    "theme": "Comparisons & Superlatives",
    "totalQuestions": 100,
    "questions": [
      {
        "id": 1,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Look at those two! A giraffe is taller than an elephant. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "둘의 크기와 능력이 동일하다",
          "기린이(가) 코끼리보다 더 키가 큰",
          "코끼리이(가) 기린보다 더 크다",
          "비교할 수 없을 만큼 차이가 없다"
        ],
        "correctIndex": 1,
        "correctAnswer": "기린이(가) 코끼리보다 더 키가 큰",
        "explanation": "'A giraffe is taller than an elephant'입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Look at those two! A blue whale is bigger and heavier than any animal on Earth. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "대왕고래이(가) 지구상의 어떤 동물보다 더 크고 무거운",
          "지구상의 어떤 동물이(가) 대왕고래보다 더 크다",
          "둘의 크기와 능력이 동일하다",
          "비교할 수 없을 만큼 차이가 없다"
        ],
        "correctIndex": 0,
        "correctAnswer": "대왕고래이(가) 지구상의 어떤 동물보다 더 크고 무거운",
        "explanation": "'A blue whale is bigger and heavier than any animal on Earth'입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Look at those two! A cheetah is faster than a lion. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "비교할 수 없을 만큼 차이가 없다",
          "둘의 크기와 능력이 동일하다",
          "사자이(가) 치타보다 더 크다",
          "치타이(가) 사자보다 더 빠른"
        ],
        "correctIndex": 3,
        "correctAnswer": "치타이(가) 사자보다 더 빠른",
        "explanation": "'A cheetah is faster than a lion'입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Look at those two! Hallasan is higher than Jirisan. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "한라산이(가) 지리산보다 더 높은",
          "지리산이(가) 한라산보다 더 크다",
          "둘의 크기와 능력이 동일하다",
          "비교할 수 없을 만큼 차이가 없다"
        ],
        "correctIndex": 0,
        "correctAnswer": "한라산이(가) 지리산보다 더 높은",
        "explanation": "'Hallasan is higher than Jirisan'입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Look at those two! An airplane is much faster than a fast train. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "비행기이(가) 고속 열차보다 훨씬 더 빠른",
          "고속 열차이(가) 비행기보다 더 크다",
          "둘의 크기와 능력이 동일하다",
          "비교할 수 없을 만큼 차이가 없다"
        ],
        "correctIndex": 0,
        "correctAnswer": "비행기이(가) 고속 열차보다 훨씬 더 빠른",
        "explanation": "'An airplane is much faster than a fast train'입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Look at those two! A giraffe is taller than an elephant. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "둘의 크기와 능력이 동일하다",
          "비교할 수 없을 만큼 차이가 없다",
          "기린이(가) 코끼리보다 더 키가 큰",
          "코끼리이(가) 기린보다 더 크다"
        ],
        "correctIndex": 2,
        "correctAnswer": "기린이(가) 코끼리보다 더 키가 큰",
        "explanation": "'A giraffe is taller than an elephant'입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Look at those two! A blue whale is bigger and heavier than any animal on Earth. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "둘의 크기와 능력이 동일하다",
          "지구상의 어떤 동물이(가) 대왕고래보다 더 크다",
          "비교할 수 없을 만큼 차이가 없다",
          "대왕고래이(가) 지구상의 어떤 동물보다 더 크고 무거운"
        ],
        "correctIndex": 3,
        "correctAnswer": "대왕고래이(가) 지구상의 어떤 동물보다 더 크고 무거운",
        "explanation": "'A blue whale is bigger and heavier than any animal on Earth'입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Look at those two! A cheetah is faster than a lion. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "비교할 수 없을 만큼 차이가 없다",
          "치타이(가) 사자보다 더 빠른",
          "사자이(가) 치타보다 더 크다",
          "둘의 크기와 능력이 동일하다"
        ],
        "correctIndex": 1,
        "correctAnswer": "치타이(가) 사자보다 더 빠른",
        "explanation": "'A cheetah is faster than a lion'입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Look at those two! Hallasan is higher than Jirisan. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "비교할 수 없을 만큼 차이가 없다",
          "둘의 크기와 능력이 동일하다",
          "지리산이(가) 한라산보다 더 크다",
          "한라산이(가) 지리산보다 더 높은"
        ],
        "correctIndex": 3,
        "correctAnswer": "한라산이(가) 지리산보다 더 높은",
        "explanation": "'Hallasan is higher than Jirisan'입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Look at those two! An airplane is much faster than a fast train. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "비행기이(가) 고속 열차보다 훨씬 더 빠른",
          "고속 열차이(가) 비행기보다 더 크다",
          "둘의 크기와 능력이 동일하다",
          "비교할 수 없을 만큼 차이가 없다"
        ],
        "correctIndex": 0,
        "correctAnswer": "비행기이(가) 고속 열차보다 훨씬 더 빠른",
        "explanation": "'An airplane is much faster than a fast train'입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Look at those two! A giraffe is taller than an elephant. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "비교할 수 없을 만큼 차이가 없다",
          "기린이(가) 코끼리보다 더 키가 큰",
          "둘의 크기와 능력이 동일하다",
          "코끼리이(가) 기린보다 더 크다"
        ],
        "correctIndex": 1,
        "correctAnswer": "기린이(가) 코끼리보다 더 키가 큰",
        "explanation": "'A giraffe is taller than an elephant'입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Look at those two! A blue whale is bigger and heavier than any animal on Earth. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "지구상의 어떤 동물이(가) 대왕고래보다 더 크다",
          "대왕고래이(가) 지구상의 어떤 동물보다 더 크고 무거운",
          "둘의 크기와 능력이 동일하다",
          "비교할 수 없을 만큼 차이가 없다"
        ],
        "correctIndex": 1,
        "correctAnswer": "대왕고래이(가) 지구상의 어떤 동물보다 더 크고 무거운",
        "explanation": "'A blue whale is bigger and heavier than any animal on Earth'입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Look at those two! A cheetah is faster than a lion. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "비교할 수 없을 만큼 차이가 없다",
          "둘의 크기와 능력이 동일하다",
          "사자이(가) 치타보다 더 크다",
          "치타이(가) 사자보다 더 빠른"
        ],
        "correctIndex": 3,
        "correctAnswer": "치타이(가) 사자보다 더 빠른",
        "explanation": "'A cheetah is faster than a lion'입니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Look at those two! Hallasan is higher than Jirisan. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "지리산이(가) 한라산보다 더 크다",
          "둘의 크기와 능력이 동일하다",
          "한라산이(가) 지리산보다 더 높은",
          "비교할 수 없을 만큼 차이가 없다"
        ],
        "correctIndex": 2,
        "correctAnswer": "한라산이(가) 지리산보다 더 높은",
        "explanation": "'Hallasan is higher than Jirisan'입니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Look at those two! An airplane is much faster than a fast train. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "비행기이(가) 고속 열차보다 훨씬 더 빠른",
          "비교할 수 없을 만큼 차이가 없다",
          "둘의 크기와 능력이 동일하다",
          "고속 열차이(가) 비행기보다 더 크다"
        ],
        "correctIndex": 0,
        "correctAnswer": "비행기이(가) 고속 열차보다 훨씬 더 빠른",
        "explanation": "'An airplane is much faster than a fast train'입니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Look at those two! A giraffe is taller than an elephant. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "코끼리이(가) 기린보다 더 크다",
          "기린이(가) 코끼리보다 더 키가 큰",
          "비교할 수 없을 만큼 차이가 없다",
          "둘의 크기와 능력이 동일하다"
        ],
        "correctIndex": 1,
        "correctAnswer": "기린이(가) 코끼리보다 더 키가 큰",
        "explanation": "'A giraffe is taller than an elephant'입니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Look at those two! A blue whale is bigger and heavier than any animal on Earth. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "대왕고래이(가) 지구상의 어떤 동물보다 더 크고 무거운",
          "지구상의 어떤 동물이(가) 대왕고래보다 더 크다",
          "둘의 크기와 능력이 동일하다",
          "비교할 수 없을 만큼 차이가 없다"
        ],
        "correctIndex": 0,
        "correctAnswer": "대왕고래이(가) 지구상의 어떤 동물보다 더 크고 무거운",
        "explanation": "'A blue whale is bigger and heavier than any animal on Earth'입니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Look at those two! A cheetah is faster than a lion. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "사자이(가) 치타보다 더 크다",
          "둘의 크기와 능력이 동일하다",
          "비교할 수 없을 만큼 차이가 없다",
          "치타이(가) 사자보다 더 빠른"
        ],
        "correctIndex": 3,
        "correctAnswer": "치타이(가) 사자보다 더 빠른",
        "explanation": "'A cheetah is faster than a lion'입니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Look at those two! Hallasan is higher than Jirisan. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "지리산이(가) 한라산보다 더 크다",
          "한라산이(가) 지리산보다 더 높은",
          "비교할 수 없을 만큼 차이가 없다",
          "둘의 크기와 능력이 동일하다"
        ],
        "correctIndex": 1,
        "correctAnswer": "한라산이(가) 지리산보다 더 높은",
        "explanation": "'Hallasan is higher than Jirisan'입니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Look at those two! An airplane is much faster than a fast train. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "비행기이(가) 고속 열차보다 훨씬 더 빠른",
          "고속 열차이(가) 비행기보다 더 크다",
          "둘의 크기와 능력이 동일하다",
          "비교할 수 없을 만큼 차이가 없다"
        ],
        "correctIndex": 0,
        "correctAnswer": "비행기이(가) 고속 열차보다 훨씬 더 빠른",
        "explanation": "'An airplane is much faster than a fast train'입니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Look at those two! A giraffe is taller than an elephant. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "기린이(가) 코끼리보다 더 키가 큰",
          "코끼리이(가) 기린보다 더 크다",
          "둘의 크기와 능력이 동일하다",
          "비교할 수 없을 만큼 차이가 없다"
        ],
        "correctIndex": 0,
        "correctAnswer": "기린이(가) 코끼리보다 더 키가 큰",
        "explanation": "'A giraffe is taller than an elephant'입니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Look at those two! A blue whale is bigger and heavier than any animal on Earth. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "대왕고래이(가) 지구상의 어떤 동물보다 더 크고 무거운",
          "지구상의 어떤 동물이(가) 대왕고래보다 더 크다",
          "둘의 크기와 능력이 동일하다",
          "비교할 수 없을 만큼 차이가 없다"
        ],
        "correctIndex": 0,
        "correctAnswer": "대왕고래이(가) 지구상의 어떤 동물보다 더 크고 무거운",
        "explanation": "'A blue whale is bigger and heavier than any animal on Earth'입니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Look at those two! A cheetah is faster than a lion. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "비교할 수 없을 만큼 차이가 없다",
          "둘의 크기와 능력이 동일하다",
          "사자이(가) 치타보다 더 크다",
          "치타이(가) 사자보다 더 빠른"
        ],
        "correctIndex": 3,
        "correctAnswer": "치타이(가) 사자보다 더 빠른",
        "explanation": "'A cheetah is faster than a lion'입니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Look at those two! Hallasan is higher than Jirisan. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "둘의 크기와 능력이 동일하다",
          "지리산이(가) 한라산보다 더 크다",
          "비교할 수 없을 만큼 차이가 없다",
          "한라산이(가) 지리산보다 더 높은"
        ],
        "correctIndex": 3,
        "correctAnswer": "한라산이(가) 지리산보다 더 높은",
        "explanation": "'Hallasan is higher than Jirisan'입니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Look at those two! An airplane is much faster than a fast train. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "비행기이(가) 고속 열차보다 훨씬 더 빠른",
          "비교할 수 없을 만큼 차이가 없다",
          "고속 열차이(가) 비행기보다 더 크다",
          "둘의 크기와 능력이 동일하다"
        ],
        "correctIndex": 0,
        "correctAnswer": "비행기이(가) 고속 열차보다 훨씬 더 빠른",
        "explanation": "'An airplane is much faster than a fast train'입니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Look at those two! A giraffe is taller than an elephant. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "비교할 수 없을 만큼 차이가 없다",
          "둘의 크기와 능력이 동일하다",
          "코끼리이(가) 기린보다 더 크다",
          "기린이(가) 코끼리보다 더 키가 큰"
        ],
        "correctIndex": 3,
        "correctAnswer": "기린이(가) 코끼리보다 더 키가 큰",
        "explanation": "'A giraffe is taller than an elephant'입니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Look at those two! A blue whale is bigger and heavier than any animal on Earth. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "비교할 수 없을 만큼 차이가 없다",
          "대왕고래이(가) 지구상의 어떤 동물보다 더 크고 무거운",
          "지구상의 어떤 동물이(가) 대왕고래보다 더 크다",
          "둘의 크기와 능력이 동일하다"
        ],
        "correctIndex": 1,
        "correctAnswer": "대왕고래이(가) 지구상의 어떤 동물보다 더 크고 무거운",
        "explanation": "'A blue whale is bigger and heavier than any animal on Earth'입니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Look at those two! A cheetah is faster than a lion. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "치타이(가) 사자보다 더 빠른",
          "비교할 수 없을 만큼 차이가 없다",
          "사자이(가) 치타보다 더 크다",
          "둘의 크기와 능력이 동일하다"
        ],
        "correctIndex": 0,
        "correctAnswer": "치타이(가) 사자보다 더 빠른",
        "explanation": "'A cheetah is faster than a lion'입니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Look at those two! Hallasan is higher than Jirisan. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "한라산이(가) 지리산보다 더 높은",
          "비교할 수 없을 만큼 차이가 없다",
          "지리산이(가) 한라산보다 더 크다",
          "둘의 크기와 능력이 동일하다"
        ],
        "correctIndex": 0,
        "correctAnswer": "한라산이(가) 지리산보다 더 높은",
        "explanation": "'Hallasan is higher than Jirisan'입니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Look at those two! An airplane is much faster than a fast train. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "비교할 수 없을 만큼 차이가 없다",
          "둘의 크기와 능력이 동일하다",
          "고속 열차이(가) 비행기보다 더 크다",
          "비행기이(가) 고속 열차보다 훨씬 더 빠른"
        ],
        "correctIndex": 3,
        "correctAnswer": "비행기이(가) 고속 열차보다 훨씬 더 빠른",
        "explanation": "'An airplane is much faster than a fast train'입니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Look at those two! A giraffe is taller than an elephant. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "코끼리이(가) 기린보다 더 크다",
          "비교할 수 없을 만큼 차이가 없다",
          "기린이(가) 코끼리보다 더 키가 큰",
          "둘의 크기와 능력이 동일하다"
        ],
        "correctIndex": 2,
        "correctAnswer": "기린이(가) 코끼리보다 더 키가 큰",
        "explanation": "'A giraffe is taller than an elephant'입니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Look at those two! A blue whale is bigger and heavier than any animal on Earth. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "비교할 수 없을 만큼 차이가 없다",
          "둘의 크기와 능력이 동일하다",
          "지구상의 어떤 동물이(가) 대왕고래보다 더 크다",
          "대왕고래이(가) 지구상의 어떤 동물보다 더 크고 무거운"
        ],
        "correctIndex": 3,
        "correctAnswer": "대왕고래이(가) 지구상의 어떤 동물보다 더 크고 무거운",
        "explanation": "'A blue whale is bigger and heavier than any animal on Earth'입니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Look at those two! A cheetah is faster than a lion. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "둘의 크기와 능력이 동일하다",
          "사자이(가) 치타보다 더 크다",
          "비교할 수 없을 만큼 차이가 없다",
          "치타이(가) 사자보다 더 빠른"
        ],
        "correctIndex": 3,
        "correctAnswer": "치타이(가) 사자보다 더 빠른",
        "explanation": "'A cheetah is faster than a lion'입니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Look at those two! Hallasan is higher than Jirisan. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "비교할 수 없을 만큼 차이가 없다",
          "한라산이(가) 지리산보다 더 높은",
          "지리산이(가) 한라산보다 더 크다",
          "둘의 크기와 능력이 동일하다"
        ],
        "correctIndex": 1,
        "correctAnswer": "한라산이(가) 지리산보다 더 높은",
        "explanation": "'Hallasan is higher than Jirisan'입니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Look at those two! An airplane is much faster than a fast train. B: Wow, that is amazing!",
        "question": "[듣기 · 8단원] 대화를 듣고, 두 대상의 비교 내용으로 일치하는 것을 고르세요.",
        "options": [
          "둘의 크기와 능력이 동일하다",
          "비교할 수 없을 만큼 차이가 없다",
          "고속 열차이(가) 비행기보다 더 크다",
          "비행기이(가) 고속 열차보다 훨씬 더 빠른"
        ],
        "correctIndex": 3,
        "correctAnswer": "비행기이(가) 고속 열차보다 훨씬 더 빠른",
        "explanation": "'An airplane is much faster than a fast train'입니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "비교급 문장 구조",
        "options": [
          "He is taller than me.",
          "He is taller then me.",
          "He is more taller than me.",
          "He is tall than me."
        ],
        "correctIndex": 0,
        "correctAnswer": "He is taller than me.",
        "explanation": "tall의 비교급은 taller이며 접속사는 'than'입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "I am a student.",
          "Sounds like a wonderful idea!",
          "Go straight one block.",
          "Because it's hot."
        ],
        "correctIndex": 1,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [8단원] 관련 대화 상황",
        "options": [
          "What time is it now?",
          "Where is the post office?",
          "We should learn more about 더 큰 (bigger).",
          "I am eating lunch right now."
        ],
        "correctIndex": 2,
        "correctAnswer": "We should learn more about 더 큰 (bigger).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (더 무거운)",
        "options": [
          "faster",
          "taller",
          "heavier",
          "bigger"
        ],
        "correctIndex": 2,
        "correctAnswer": "heavier",
        "explanation": "'더 무거운'에 해당하는 영어 단어는 'heavier'입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "비교급 문장 구조",
        "options": [
          "He is taller than me.",
          "He is more taller than me.",
          "He is taller then me.",
          "He is tall than me."
        ],
        "correctIndex": 0,
        "correctAnswer": "He is taller than me.",
        "explanation": "tall의 비교급은 taller이며 접속사는 'than'입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Sounds like a wonderful idea!",
          "Because it's hot.",
          "I am a student.",
          "Go straight one block."
        ],
        "correctIndex": 0,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [8단원] 관련 대화 상황",
        "options": [
          "We should learn more about ~보다 (than).",
          "Where is the post office?",
          "I am eating lunch right now.",
          "What time is it now?"
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about ~보다 (than).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (고래)",
        "options": [
          "whale",
          "taller",
          "faster",
          "bigger"
        ],
        "correctIndex": 0,
        "correctAnswer": "whale",
        "explanation": "'고래'에 해당하는 영어 단어는 'whale'입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "비교급 문장 구조",
        "options": [
          "He is taller than me.",
          "He is more taller than me.",
          "He is taller then me.",
          "He is tall than me."
        ],
        "correctIndex": 0,
        "correctAnswer": "He is taller than me.",
        "explanation": "tall의 비교급은 taller이며 접속사는 'than'입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Sounds like a wonderful idea!",
          "I am a student.",
          "Go straight one block.",
          "Because it's hot."
        ],
        "correctIndex": 0,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [8단원] 관련 대화 상황",
        "options": [
          "We should learn more about 더 키가 큰 (taller).",
          "What time is it now?",
          "I am eating lunch right now.",
          "Where is the post office?"
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 더 키가 큰 (taller).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (더 빠른)",
        "options": [
          "taller",
          "faster",
          "bigger",
          "heavier"
        ],
        "correctIndex": 1,
        "correctAnswer": "faster",
        "explanation": "'더 빠른'에 해당하는 영어 단어는 'faster'입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "비교급 문장 구조",
        "options": [
          "He is taller then me.",
          "He is tall than me.",
          "He is more taller than me.",
          "He is taller than me."
        ],
        "correctIndex": 3,
        "correctAnswer": "He is taller than me.",
        "explanation": "tall의 비교급은 taller이며 접속사는 'than'입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "I am a student.",
          "Because it's hot.",
          "Go straight one block.",
          "Sounds like a wonderful idea!"
        ],
        "correctIndex": 3,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [8단원] 관련 대화 상황",
        "options": [
          "We should learn more about 더 높은 (higher).",
          "Where is the post office?",
          "What time is it now?",
          "I am eating lunch right now."
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 더 높은 (higher).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (더 힘센)",
        "options": [
          "stronger",
          "taller",
          "bigger",
          "faster"
        ],
        "correctIndex": 0,
        "correctAnswer": "stronger",
        "explanation": "'더 힘센'에 해당하는 영어 단어는 'stronger'입니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "비교급 문장 구조",
        "options": [
          "He is taller than me.",
          "He is taller then me.",
          "He is more taller than me.",
          "He is tall than me."
        ],
        "correctIndex": 0,
        "correctAnswer": "He is taller than me.",
        "explanation": "tall의 비교급은 taller이며 접속사는 'than'입니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Sounds like a wonderful idea!",
          "I am a student.",
          "Go straight one block.",
          "Because it's hot."
        ],
        "correctIndex": 0,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [8단원] 관련 대화 상황",
        "options": [
          "I am eating lunch right now.",
          "We should learn more about 기린 (giraffe).",
          "Where is the post office?",
          "What time is it now?"
        ],
        "correctIndex": 1,
        "correctAnswer": "We should learn more about 기린 (giraffe).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (치타)",
        "options": [
          "cheetah",
          "faster",
          "taller",
          "bigger"
        ],
        "correctIndex": 0,
        "correctAnswer": "cheetah",
        "explanation": "'치타'에 해당하는 영어 단어는 'cheetah'입니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "비교급 문장 구조",
        "options": [
          "He is tall than me.",
          "He is taller then me.",
          "He is more taller than me.",
          "He is taller than me."
        ],
        "correctIndex": 3,
        "correctAnswer": "He is taller than me.",
        "explanation": "tall의 비교급은 taller이며 접속사는 'than'입니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Sounds like a wonderful idea!",
          "Because it's hot.",
          "I am a student.",
          "Go straight one block."
        ],
        "correctIndex": 0,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [8단원] 관련 대화 상황",
        "options": [
          "I am eating lunch right now.",
          "What time is it now?",
          "Where is the post office?",
          "We should learn more about 더 큰 (bigger)."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should learn more about 더 큰 (bigger).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (더 무거운)",
        "options": [
          "faster",
          "taller",
          "bigger",
          "heavier"
        ],
        "correctIndex": 3,
        "correctAnswer": "heavier",
        "explanation": "'더 무거운'에 해당하는 영어 단어는 'heavier'입니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "비교급 문장 구조",
        "options": [
          "He is tall than me.",
          "He is taller then me.",
          "He is more taller than me.",
          "He is taller than me."
        ],
        "correctIndex": 3,
        "correctAnswer": "He is taller than me.",
        "explanation": "tall의 비교급은 taller이며 접속사는 'than'입니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Sounds like a wonderful idea!",
          "I am a student.",
          "Go straight one block.",
          "Because it's hot."
        ],
        "correctIndex": 0,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [8단원] 관련 대화 상황",
        "options": [
          "We should learn more about ~보다 (than).",
          "I am eating lunch right now.",
          "Where is the post office?",
          "What time is it now?"
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about ~보다 (than).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (고래)",
        "options": [
          "faster",
          "taller",
          "whale",
          "bigger"
        ],
        "correctIndex": 2,
        "correctAnswer": "whale",
        "explanation": "'고래'에 해당하는 영어 단어는 'whale'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "비교급 문장 구조",
        "options": [
          "He is taller than me.",
          "He is taller then me.",
          "He is more taller than me.",
          "He is tall than me."
        ],
        "correctIndex": 0,
        "correctAnswer": "He is taller than me.",
        "explanation": "tall의 비교급은 taller이며 접속사는 'than'입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Sounds like a wonderful idea!",
          "I am a student.",
          "Go straight one block.",
          "Because it's hot."
        ],
        "correctIndex": 0,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [8단원] 관련 대화 상황",
        "options": [
          "I am eating lunch right now.",
          "We should learn more about 더 키가 큰 (taller).",
          "Where is the post office?",
          "What time is it now?"
        ],
        "correctIndex": 1,
        "correctAnswer": "We should learn more about 더 키가 큰 (taller).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (더 빠른)",
        "options": [
          "heavier",
          "taller",
          "faster",
          "bigger"
        ],
        "correctIndex": 2,
        "correctAnswer": "faster",
        "explanation": "'더 빠른'에 해당하는 영어 단어는 'faster'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "비교급 문장 구조",
        "options": [
          "He is taller than me.",
          "He is more taller than me.",
          "He is tall than me.",
          "He is taller then me."
        ],
        "correctIndex": 0,
        "correctAnswer": "He is taller than me.",
        "explanation": "tall의 비교급은 taller이며 접속사는 'than'입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Sounds like a wonderful idea!",
          "I am a student.",
          "Go straight one block.",
          "Because it's hot."
        ],
        "correctIndex": 0,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 8단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [8단원] 관련 대화 상황",
        "options": [
          "We should learn more about 더 높은 (higher).",
          "Where is the post office?",
          "What time is it now?",
          "I am eating lunch right now."
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 더 높은 (higher).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 8단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"더 키가 큰\" [힌트: t____r]",
        "correctAnswer": "taller",
        "explanation": "'더 키가 큰'은(는) 영어로 'taller'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 8단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"더 빠른\" [힌트: f____r]",
        "correctAnswer": "faster",
        "explanation": "'더 빠른'은(는) 영어로 'faster'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 8단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"더 큰\" [힌트: b____r]",
        "correctAnswer": "bigger",
        "explanation": "'더 큰'은(는) 영어로 'bigger'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 8단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"더 무거운\" [힌트: h_____r]",
        "correctAnswer": "heavier",
        "explanation": "'더 무거운'은(는) 영어로 'heavier'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 8단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"더 높은\" [힌트: h____r]",
        "correctAnswer": "higher",
        "explanation": "'더 높은'은(는) 영어로 'higher'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 8단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"더 힘센\" [힌트: s______r]",
        "correctAnswer": "stronger",
        "explanation": "'더 힘센'은(는) 영어로 'stronger'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 8단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"~보다\" [힌트: t__n]",
        "correctAnswer": "than",
        "explanation": "'~보다'은(는) 영어로 'than'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 8단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"고래\" [힌트: w___e]",
        "correctAnswer": "whale",
        "explanation": "'고래'은(는) 영어로 'whale'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 8단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"기린\" [힌트: g_____e]",
        "correctAnswer": "giraffe",
        "explanation": "'기린'은(는) 영어로 'giraffe'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 8단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"치타\" [힌트: c_____h]",
        "correctAnswer": "cheetah",
        "explanation": "'치타'은(는) 영어로 'cheetah'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "기린은(는) 코끼리보다 더 키가 큰.",
        "chips": [
          "A",
          "giraffe",
          "taller",
          "is",
          ".",
          "than",
          "elephant",
          "an"
        ],
        "correctAnswer": "A giraffe is taller than an elephant.",
        "explanation": "A giraffe is taller than an elephant. [기린은(는) 코끼리보다 더 키가 큰.]"
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "대왕고래은(는) 지구상의 어떤 동물보다 더 크고 무거운.",
        "chips": [
          "is",
          "bigger",
          "Earth",
          "than",
          "on",
          "animal",
          "heavier",
          "A",
          "blue",
          "any",
          "whale",
          "and",
          "."
        ],
        "correctAnswer": "A blue whale is bigger and heavier than any animal on Earth.",
        "explanation": "A blue whale is bigger and heavier than any animal on Earth. [대왕고래은(는) 지구상의 어떤 동물보다 더 크고 무거운.]"
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "치타은(는) 사자보다 더 빠른.",
        "chips": [
          ".",
          "is",
          "lion",
          "A",
          "cheetah",
          "than",
          "a",
          "faster"
        ],
        "correctAnswer": "A cheetah is faster than a lion.",
        "explanation": "A cheetah is faster than a lion. [치타은(는) 사자보다 더 빠른.]"
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "한라산은(는) 지리산보다 더 높은.",
        "chips": [
          "higher",
          "is",
          ".",
          "Hallasan",
          "than",
          "Jirisan"
        ],
        "correctAnswer": "Hallasan is higher than Jirisan.",
        "explanation": "Hallasan is higher than Jirisan. [한라산은(는) 지리산보다 더 높은.]"
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "비행기은(는) 고속 열차보다 훨씬 더 빠른.",
        "chips": [
          "much",
          "is",
          "fast",
          "airplane",
          "An",
          "than",
          "faster",
          "a",
          "train",
          "."
        ],
        "correctAnswer": "An airplane is much faster than a fast train.",
        "explanation": "An airplane is much faster than a fast train. [비행기은(는) 고속 열차보다 훨씬 더 빠른.]"
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "기린은(는) 코끼리보다 더 키가 큰.",
        "chips": [
          "A",
          "giraffe",
          "is",
          "taller",
          "than",
          "an",
          "elephant",
          "."
        ],
        "correctAnswer": "A giraffe is taller than an elephant.",
        "explanation": "A giraffe is taller than an elephant. [기린은(는) 코끼리보다 더 키가 큰.]"
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "대왕고래은(는) 지구상의 어떤 동물보다 더 크고 무거운.",
        "chips": [
          "animal",
          "A",
          "than",
          ".",
          "Earth",
          "any",
          "bigger",
          "is",
          "whale",
          "blue",
          "and",
          "heavier",
          "on"
        ],
        "correctAnswer": "A blue whale is bigger and heavier than any animal on Earth.",
        "explanation": "A blue whale is bigger and heavier than any animal on Earth. [대왕고래은(는) 지구상의 어떤 동물보다 더 크고 무거운.]"
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "치타은(는) 사자보다 더 빠른.",
        "chips": [
          ".",
          "A",
          "than",
          "cheetah",
          "is",
          "a",
          "lion",
          "faster"
        ],
        "correctAnswer": "A cheetah is faster than a lion.",
        "explanation": "A cheetah is faster than a lion. [치타은(는) 사자보다 더 빠른.]"
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "한라산은(는) 지리산보다 더 높은.",
        "chips": [
          "Hallasan",
          "is",
          ".",
          "than",
          "higher",
          "Jirisan"
        ],
        "correctAnswer": "Hallasan is higher than Jirisan.",
        "explanation": "Hallasan is higher than Jirisan. [한라산은(는) 지리산보다 더 높은.]"
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "비행기은(는) 고속 열차보다 훨씬 더 빠른.",
        "chips": [
          "fast",
          "faster",
          "train",
          "An",
          "airplane",
          "is",
          "than",
          "much",
          "a",
          "."
        ],
        "correctAnswer": "An airplane is much faster than a fast train.",
        "explanation": "An airplane is much faster than a fast train. [비행기은(는) 고속 열차보다 훨씬 더 빠른.]"
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "기린은(는) 코끼리보다 더 키가 큰.",
        "chips": [
          "taller",
          "than",
          "is",
          "an",
          ".",
          "giraffe",
          "A",
          "elephant"
        ],
        "correctAnswer": "A giraffe is taller than an elephant.",
        "explanation": "A giraffe is taller than an elephant. [기린은(는) 코끼리보다 더 키가 큰.]"
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "대왕고래은(는) 지구상의 어떤 동물보다 더 크고 무거운.",
        "chips": [
          "A",
          "and",
          "blue",
          "whale",
          "heavier",
          "animal",
          ".",
          "any",
          "bigger",
          "than",
          "on",
          "is",
          "Earth"
        ],
        "correctAnswer": "A blue whale is bigger and heavier than any animal on Earth.",
        "explanation": "A blue whale is bigger and heavier than any animal on Earth. [대왕고래은(는) 지구상의 어떤 동물보다 더 크고 무거운.]"
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "치타은(는) 사자보다 더 빠른.",
        "chips": [
          "faster",
          "than",
          ".",
          "a",
          "cheetah",
          "A",
          "is",
          "lion"
        ],
        "correctAnswer": "A cheetah is faster than a lion.",
        "explanation": "A cheetah is faster than a lion. [치타은(는) 사자보다 더 빠른.]"
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "한라산은(는) 지리산보다 더 높은.",
        "chips": [
          "is",
          "Hallasan",
          ".",
          "than",
          "Jirisan",
          "higher"
        ],
        "correctAnswer": "Hallasan is higher than Jirisan.",
        "explanation": "Hallasan is higher than Jirisan. [한라산은(는) 지리산보다 더 높은.]"
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "비행기은(는) 고속 열차보다 훨씬 더 빠른.",
        "chips": [
          "faster",
          "than",
          ".",
          "An",
          "fast",
          "train",
          "airplane",
          "is",
          "much",
          "a"
        ],
        "correctAnswer": "An airplane is much faster than a fast train.",
        "explanation": "An airplane is much faster than a fast train. [비행기은(는) 고속 열차보다 훨씬 더 빠른.]"
      },
      {
        "id": 96,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 8단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 우리는 에너지를 절약하고 지구를 보호해야 해.",
        "chips": [
          "We",
          "and",
          "protect",
          "Earth",
          "should",
          ".",
          "the",
          "save",
          "energy"
        ],
        "correctAnswer": "We should save energy and protect the Earth.",
        "explanation": "We should save energy and protect the Earth. [우리는 에너지를 절약하고 지구를 보호해야 해.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 97,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 8단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 내가 가장 좋아하는 계절은 꽃이 피는 봄이야.",
        "chips": [
          "is",
          "bloom",
          "season",
          "My",
          "flowers",
          "because",
          "favorite",
          "spring",
          "."
        ],
        "correctAnswer": "My favorite season is spring because flowers bloom.",
        "explanation": "My favorite season is spring because flowers bloom. [내가 가장 좋아하는 계절은 꽃이 피는 봄이야.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 98,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 8단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 두 블록 직진해서 모퉁이에서 좌회전하세요.",
        "chips": [
          "Go",
          "two",
          ".",
          "left",
          "turn",
          "the",
          "and",
          "corner",
          "blocks",
          "straight",
          "at"
        ],
        "correctAnswer": "Go straight two blocks and turn left at the corner.",
        "explanation": "Go straight two blocks and turn left at the corner. [두 블록 직진해서 모퉁이에서 좌회전하세요.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 99,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 8단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 너는 의사 진료를 받고 약을 먹어야 해.",
        "chips": [
          "should",
          "see",
          ".",
          "doctor",
          "medicine",
          "You",
          "take",
          "a",
          "and"
        ],
        "correctAnswer": "You should see a doctor and take medicine.",
        "explanation": "You should see a doctor and take medicine. [너는 의사 진료를 받고 약을 먹어야 해.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 8단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 우리 이번 주 토요일에 함께 공원에 가는 게 어때?",
        "chips": [
          "this",
          "go",
          "we",
          "park",
          "together",
          "the",
          "don't",
          "Saturday",
          "Why",
          "?",
          "to"
        ],
        "correctAnswer": "Why don't we go to the park together this Saturday?",
        "explanation": "Why don't we go to the park together this Saturday? [우리 이번 주 토요일에 함께 공원에 가는 게 어때?] 축하합니다! 골든벨 완주! 🔔"
      }
    ]
  },
  "6G_L09": {
    "name": "9단원: 방학 계획과 미래 활동 (What will you do this summer?)",
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
        "audioText": "A: What will you do this vacation? B: I will go camping in the deep forest and sleep in a warm tent.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "하루 종일 게임하기",
          "깊은 숲으로 캠핑 가기 및 따뜻한 텐트에서 자다",
          "매일 친구 집에서 놀기",
          "아무 계획 없이 집에서 자기"
        ],
        "correctIndex": 1,
        "correctAnswer": "깊은 숲으로 캠핑 가기 및 따뜻한 텐트에서 자다",
        "explanation": "'I will go camping in the deep forest'입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will visit my grandparents in Busan and eat delicious food together.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "부산의 조부모님 댁 방문하기 및 함께 맛있는 음식을 먹다",
          "하루 종일 게임하기",
          "아무 계획 없이 집에서 자기",
          "매일 친구 집에서 놀기"
        ],
        "correctIndex": 0,
        "correctAnswer": "부산의 조부모님 댁 방문하기 및 함께 맛있는 음식을 먹다",
        "explanation": "'I will visit my grandparents in Busan'입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will read ten English storybooks and write a reading journal.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "아무 계획 없이 집에서 자기",
          "영어 동화책 10권 읽기 및 독서 일기를 쓰다",
          "하루 종일 게임하기",
          "매일 친구 집에서 놀기"
        ],
        "correctIndex": 1,
        "correctAnswer": "영어 동화책 10권 읽기 및 독서 일기를 쓰다",
        "explanation": "'I will read ten English storybooks'입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will learn how to swim and dive and go to the pool every day.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "아무 계획 없이 집에서 자기",
          "매일 친구 집에서 놀기",
          "하루 종일 게임하기",
          "수영과 다이빙 배우기 및 매일 수영장에 가다"
        ],
        "correctIndex": 3,
        "correctAnswer": "수영과 다이빙 배우기 및 매일 수영장에 가다",
        "explanation": "'I will learn how to swim and dive'입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will go camping in the deep forest and sleep in a warm tent.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "아무 계획 없이 집에서 자기",
          "깊은 숲으로 캠핑 가기 및 따뜻한 텐트에서 자다",
          "매일 친구 집에서 놀기",
          "하루 종일 게임하기"
        ],
        "correctIndex": 1,
        "correctAnswer": "깊은 숲으로 캠핑 가기 및 따뜻한 텐트에서 자다",
        "explanation": "'I will go camping in the deep forest'입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will visit my grandparents in Busan and eat delicious food together.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "아무 계획 없이 집에서 자기",
          "부산의 조부모님 댁 방문하기 및 함께 맛있는 음식을 먹다",
          "하루 종일 게임하기",
          "매일 친구 집에서 놀기"
        ],
        "correctIndex": 1,
        "correctAnswer": "부산의 조부모님 댁 방문하기 및 함께 맛있는 음식을 먹다",
        "explanation": "'I will visit my grandparents in Busan'입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will read ten English storybooks and write a reading journal.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "영어 동화책 10권 읽기 및 독서 일기를 쓰다",
          "하루 종일 게임하기",
          "아무 계획 없이 집에서 자기",
          "매일 친구 집에서 놀기"
        ],
        "correctIndex": 0,
        "correctAnswer": "영어 동화책 10권 읽기 및 독서 일기를 쓰다",
        "explanation": "'I will read ten English storybooks'입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will learn how to swim and dive and go to the pool every day.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "아무 계획 없이 집에서 자기",
          "수영과 다이빙 배우기 및 매일 수영장에 가다",
          "하루 종일 게임하기",
          "매일 친구 집에서 놀기"
        ],
        "correctIndex": 1,
        "correctAnswer": "수영과 다이빙 배우기 및 매일 수영장에 가다",
        "explanation": "'I will learn how to swim and dive'입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will go camping in the deep forest and sleep in a warm tent.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "아무 계획 없이 집에서 자기",
          "매일 친구 집에서 놀기",
          "하루 종일 게임하기",
          "깊은 숲으로 캠핑 가기 및 따뜻한 텐트에서 자다"
        ],
        "correctIndex": 3,
        "correctAnswer": "깊은 숲으로 캠핑 가기 및 따뜻한 텐트에서 자다",
        "explanation": "'I will go camping in the deep forest'입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will visit my grandparents in Busan and eat delicious food together.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "아무 계획 없이 집에서 자기",
          "하루 종일 게임하기",
          "부산의 조부모님 댁 방문하기 및 함께 맛있는 음식을 먹다",
          "매일 친구 집에서 놀기"
        ],
        "correctIndex": 2,
        "correctAnswer": "부산의 조부모님 댁 방문하기 및 함께 맛있는 음식을 먹다",
        "explanation": "'I will visit my grandparents in Busan'입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will read ten English storybooks and write a reading journal.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "영어 동화책 10권 읽기 및 독서 일기를 쓰다",
          "하루 종일 게임하기",
          "매일 친구 집에서 놀기",
          "아무 계획 없이 집에서 자기"
        ],
        "correctIndex": 0,
        "correctAnswer": "영어 동화책 10권 읽기 및 독서 일기를 쓰다",
        "explanation": "'I will read ten English storybooks'입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will learn how to swim and dive and go to the pool every day.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "매일 친구 집에서 놀기",
          "아무 계획 없이 집에서 자기",
          "하루 종일 게임하기",
          "수영과 다이빙 배우기 및 매일 수영장에 가다"
        ],
        "correctIndex": 3,
        "correctAnswer": "수영과 다이빙 배우기 및 매일 수영장에 가다",
        "explanation": "'I will learn how to swim and dive'입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will go camping in the deep forest and sleep in a warm tent.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "아무 계획 없이 집에서 자기",
          "매일 친구 집에서 놀기",
          "하루 종일 게임하기",
          "깊은 숲으로 캠핑 가기 및 따뜻한 텐트에서 자다"
        ],
        "correctIndex": 3,
        "correctAnswer": "깊은 숲으로 캠핑 가기 및 따뜻한 텐트에서 자다",
        "explanation": "'I will go camping in the deep forest'입니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will visit my grandparents in Busan and eat delicious food together.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "아무 계획 없이 집에서 자기",
          "하루 종일 게임하기",
          "부산의 조부모님 댁 방문하기 및 함께 맛있는 음식을 먹다",
          "매일 친구 집에서 놀기"
        ],
        "correctIndex": 2,
        "correctAnswer": "부산의 조부모님 댁 방문하기 및 함께 맛있는 음식을 먹다",
        "explanation": "'I will visit my grandparents in Busan'입니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will read ten English storybooks and write a reading journal.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "하루 종일 게임하기",
          "영어 동화책 10권 읽기 및 독서 일기를 쓰다",
          "매일 친구 집에서 놀기",
          "아무 계획 없이 집에서 자기"
        ],
        "correctIndex": 1,
        "correctAnswer": "영어 동화책 10권 읽기 및 독서 일기를 쓰다",
        "explanation": "'I will read ten English storybooks'입니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will learn how to swim and dive and go to the pool every day.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "아무 계획 없이 집에서 자기",
          "매일 친구 집에서 놀기",
          "하루 종일 게임하기",
          "수영과 다이빙 배우기 및 매일 수영장에 가다"
        ],
        "correctIndex": 3,
        "correctAnswer": "수영과 다이빙 배우기 및 매일 수영장에 가다",
        "explanation": "'I will learn how to swim and dive'입니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will go camping in the deep forest and sleep in a warm tent.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "깊은 숲으로 캠핑 가기 및 따뜻한 텐트에서 자다",
          "하루 종일 게임하기",
          "아무 계획 없이 집에서 자기",
          "매일 친구 집에서 놀기"
        ],
        "correctIndex": 0,
        "correctAnswer": "깊은 숲으로 캠핑 가기 및 따뜻한 텐트에서 자다",
        "explanation": "'I will go camping in the deep forest'입니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will visit my grandparents in Busan and eat delicious food together.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "아무 계획 없이 집에서 자기",
          "매일 친구 집에서 놀기",
          "하루 종일 게임하기",
          "부산의 조부모님 댁 방문하기 및 함께 맛있는 음식을 먹다"
        ],
        "correctIndex": 3,
        "correctAnswer": "부산의 조부모님 댁 방문하기 및 함께 맛있는 음식을 먹다",
        "explanation": "'I will visit my grandparents in Busan'입니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will read ten English storybooks and write a reading journal.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "하루 종일 게임하기",
          "영어 동화책 10권 읽기 및 독서 일기를 쓰다",
          "매일 친구 집에서 놀기",
          "아무 계획 없이 집에서 자기"
        ],
        "correctIndex": 1,
        "correctAnswer": "영어 동화책 10권 읽기 및 독서 일기를 쓰다",
        "explanation": "'I will read ten English storybooks'입니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will learn how to swim and dive and go to the pool every day.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "매일 친구 집에서 놀기",
          "하루 종일 게임하기",
          "아무 계획 없이 집에서 자기",
          "수영과 다이빙 배우기 및 매일 수영장에 가다"
        ],
        "correctIndex": 3,
        "correctAnswer": "수영과 다이빙 배우기 및 매일 수영장에 가다",
        "explanation": "'I will learn how to swim and dive'입니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will go camping in the deep forest and sleep in a warm tent.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "아무 계획 없이 집에서 자기",
          "매일 친구 집에서 놀기",
          "하루 종일 게임하기",
          "깊은 숲으로 캠핑 가기 및 따뜻한 텐트에서 자다"
        ],
        "correctIndex": 3,
        "correctAnswer": "깊은 숲으로 캠핑 가기 및 따뜻한 텐트에서 자다",
        "explanation": "'I will go camping in the deep forest'입니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will visit my grandparents in Busan and eat delicious food together.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "부산의 조부모님 댁 방문하기 및 함께 맛있는 음식을 먹다",
          "하루 종일 게임하기",
          "매일 친구 집에서 놀기",
          "아무 계획 없이 집에서 자기"
        ],
        "correctIndex": 0,
        "correctAnswer": "부산의 조부모님 댁 방문하기 및 함께 맛있는 음식을 먹다",
        "explanation": "'I will visit my grandparents in Busan'입니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will read ten English storybooks and write a reading journal.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "아무 계획 없이 집에서 자기",
          "매일 친구 집에서 놀기",
          "하루 종일 게임하기",
          "영어 동화책 10권 읽기 및 독서 일기를 쓰다"
        ],
        "correctIndex": 3,
        "correctAnswer": "영어 동화책 10권 읽기 및 독서 일기를 쓰다",
        "explanation": "'I will read ten English storybooks'입니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will learn how to swim and dive and go to the pool every day.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "수영과 다이빙 배우기 및 매일 수영장에 가다",
          "아무 계획 없이 집에서 자기",
          "하루 종일 게임하기",
          "매일 친구 집에서 놀기"
        ],
        "correctIndex": 0,
        "correctAnswer": "수영과 다이빙 배우기 및 매일 수영장에 가다",
        "explanation": "'I will learn how to swim and dive'입니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will go camping in the deep forest and sleep in a warm tent.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "하루 종일 게임하기",
          "아무 계획 없이 집에서 자기",
          "깊은 숲으로 캠핑 가기 및 따뜻한 텐트에서 자다",
          "매일 친구 집에서 놀기"
        ],
        "correctIndex": 2,
        "correctAnswer": "깊은 숲으로 캠핑 가기 및 따뜻한 텐트에서 자다",
        "explanation": "'I will go camping in the deep forest'입니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will visit my grandparents in Busan and eat delicious food together.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "매일 친구 집에서 놀기",
          "부산의 조부모님 댁 방문하기 및 함께 맛있는 음식을 먹다",
          "하루 종일 게임하기",
          "아무 계획 없이 집에서 자기"
        ],
        "correctIndex": 1,
        "correctAnswer": "부산의 조부모님 댁 방문하기 및 함께 맛있는 음식을 먹다",
        "explanation": "'I will visit my grandparents in Busan'입니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will read ten English storybooks and write a reading journal.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "영어 동화책 10권 읽기 및 독서 일기를 쓰다",
          "하루 종일 게임하기",
          "매일 친구 집에서 놀기",
          "아무 계획 없이 집에서 자기"
        ],
        "correctIndex": 0,
        "correctAnswer": "영어 동화책 10권 읽기 및 독서 일기를 쓰다",
        "explanation": "'I will read ten English storybooks'입니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will learn how to swim and dive and go to the pool every day.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "아무 계획 없이 집에서 자기",
          "매일 친구 집에서 놀기",
          "하루 종일 게임하기",
          "수영과 다이빙 배우기 및 매일 수영장에 가다"
        ],
        "correctIndex": 3,
        "correctAnswer": "수영과 다이빙 배우기 및 매일 수영장에 가다",
        "explanation": "'I will learn how to swim and dive'입니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will go camping in the deep forest and sleep in a warm tent.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "매일 친구 집에서 놀기",
          "아무 계획 없이 집에서 자기",
          "깊은 숲으로 캠핑 가기 및 따뜻한 텐트에서 자다",
          "하루 종일 게임하기"
        ],
        "correctIndex": 2,
        "correctAnswer": "깊은 숲으로 캠핑 가기 및 따뜻한 텐트에서 자다",
        "explanation": "'I will go camping in the deep forest'입니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will visit my grandparents in Busan and eat delicious food together.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "하루 종일 게임하기",
          "아무 계획 없이 집에서 자기",
          "부산의 조부모님 댁 방문하기 및 함께 맛있는 음식을 먹다",
          "매일 친구 집에서 놀기"
        ],
        "correctIndex": 2,
        "correctAnswer": "부산의 조부모님 댁 방문하기 및 함께 맛있는 음식을 먹다",
        "explanation": "'I will visit my grandparents in Busan'입니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will read ten English storybooks and write a reading journal.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "매일 친구 집에서 놀기",
          "하루 종일 게임하기",
          "영어 동화책 10권 읽기 및 독서 일기를 쓰다",
          "아무 계획 없이 집에서 자기"
        ],
        "correctIndex": 2,
        "correctAnswer": "영어 동화책 10권 읽기 및 독서 일기를 쓰다",
        "explanation": "'I will read ten English storybooks'입니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will learn how to swim and dive and go to the pool every day.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "아무 계획 없이 집에서 자기",
          "하루 종일 게임하기",
          "매일 친구 집에서 놀기",
          "수영과 다이빙 배우기 및 매일 수영장에 가다"
        ],
        "correctIndex": 3,
        "correctAnswer": "수영과 다이빙 배우기 및 매일 수영장에 가다",
        "explanation": "'I will learn how to swim and dive'입니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will go camping in the deep forest and sleep in a warm tent.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "깊은 숲으로 캠핑 가기 및 따뜻한 텐트에서 자다",
          "하루 종일 게임하기",
          "매일 친구 집에서 놀기",
          "아무 계획 없이 집에서 자기"
        ],
        "correctIndex": 0,
        "correctAnswer": "깊은 숲으로 캠핑 가기 및 따뜻한 텐트에서 자다",
        "explanation": "'I will go camping in the deep forest'입니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will visit my grandparents in Busan and eat delicious food together.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "매일 친구 집에서 놀기",
          "하루 종일 게임하기",
          "아무 계획 없이 집에서 자기",
          "부산의 조부모님 댁 방문하기 및 함께 맛있는 음식을 먹다"
        ],
        "correctIndex": 3,
        "correctAnswer": "부산의 조부모님 댁 방문하기 및 함께 맛있는 음식을 먹다",
        "explanation": "'I will visit my grandparents in Busan'입니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What will you do this vacation? B: I will read ten English storybooks and write a reading journal.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방학 동안 할 계획으로 알맞은 것은?",
        "options": [
          "아무 계획 없이 집에서 자기",
          "영어 동화책 10권 읽기 및 독서 일기를 쓰다",
          "하루 종일 게임하기",
          "매일 친구 집에서 놀기"
        ],
        "correctIndex": 1,
        "correctAnswer": "영어 동화책 10권 읽기 및 독서 일기를 쓰다",
        "explanation": "'I will read ten English storybooks'입니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loves this summer.",
          "I love this beautifully summer.",
          "I love this beautiful summer.",
          "I loving this summer."
        ],
        "correctIndex": 2,
        "correctAnswer": "I love this beautiful summer.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Because it's hot.",
          "I am a student.",
          "Go straight one block.",
          "Sounds like a wonderful idea!"
        ],
        "correctIndex": 3,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [9단원] 관련 대화 상황",
        "options": [
          "We should learn more about 캠핑 (camping).",
          "Where is the post office?",
          "What time is it now?",
          "I am eating lunch right now."
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 캠핑 (camping).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (숲)",
        "options": [
          "camping",
          "forest",
          "vacation",
          "summer"
        ],
        "correctIndex": 1,
        "correctAnswer": "forest",
        "explanation": "'숲'에 해당하는 영어 단어는 'forest'입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loves this tent.",
          "I loving this tent.",
          "I love this beautifully tent.",
          "I love this beautiful tent."
        ],
        "correctIndex": 3,
        "correctAnswer": "I love this beautiful tent.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Sounds like a wonderful idea!",
          "I am a student.",
          "Go straight one block.",
          "Because it's hot."
        ],
        "correctIndex": 0,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [9단원] 관련 대화 상황",
        "options": [
          "What time is it now?",
          "Where is the post office?",
          "I am eating lunch right now.",
          "We should learn more about 계획, 계획하다 (plan)."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should learn more about 계획, 계획하다 (plan).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (청소하다)",
        "options": [
          "clean",
          "camping",
          "vacation",
          "summer"
        ],
        "correctIndex": 0,
        "correctAnswer": "clean",
        "explanation": "'청소하다'에 해당하는 영어 단어는 'clean'입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loves this future.",
          "I loving this future.",
          "I love this beautifully future.",
          "I love this beautiful future."
        ],
        "correctIndex": 3,
        "correctAnswer": "I love this beautiful future.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Go straight one block.",
          "I am a student.",
          "Because it's hot.",
          "Sounds like a wonderful idea!"
        ],
        "correctIndex": 3,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [9단원] 관련 대화 상황",
        "options": [
          "What time is it now?",
          "I am eating lunch right now.",
          "We should learn more about 여름 (summer).",
          "Where is the post office?"
        ],
        "correctIndex": 2,
        "correctAnswer": "We should learn more about 여름 (summer).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (방학, 휴가)",
        "options": [
          "vacation",
          "summer",
          "forest",
          "camping"
        ],
        "correctIndex": 0,
        "correctAnswer": "vacation",
        "explanation": "'방학, 휴가'에 해당하는 영어 단어는 'vacation'입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I love this beautifully camping.",
          "I loves this camping.",
          "I loving this camping.",
          "I love this beautiful camping."
        ],
        "correctIndex": 3,
        "correctAnswer": "I love this beautiful camping.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Sounds like a wonderful idea!",
          "Because it's hot.",
          "I am a student.",
          "Go straight one block."
        ],
        "correctIndex": 0,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [9단원] 관련 대화 상황",
        "options": [
          "We should learn more about 텐트 (tent).",
          "What time is it now?",
          "Where is the post office?",
          "I am eating lunch right now."
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 텐트 (tent).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (방문하다)",
        "options": [
          "visit",
          "summer",
          "vacation",
          "camping"
        ],
        "correctIndex": 0,
        "correctAnswer": "visit",
        "explanation": "'방문하다'에 해당하는 영어 단어는 'visit'입니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loving this plan.",
          "I love this beautifully plan.",
          "I love this beautiful plan.",
          "I loves this plan."
        ],
        "correctIndex": 2,
        "correctAnswer": "I love this beautiful plan.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "I am a student.",
          "Sounds like a wonderful idea!",
          "Go straight one block.",
          "Because it's hot."
        ],
        "correctIndex": 1,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [9단원] 관련 대화 상황",
        "options": [
          "We should learn more about 미래 (future).",
          "What time is it now?",
          "Where is the post office?",
          "I am eating lunch right now."
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 미래 (future).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (조부모님)",
        "options": [
          "camping",
          "vacation",
          "summer",
          "grandparents"
        ],
        "correctIndex": 3,
        "correctAnswer": "grandparents",
        "explanation": "'조부모님'에 해당하는 영어 단어는 'grandparents'입니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loving this summer.",
          "I love this beautiful summer.",
          "I love this beautifully summer.",
          "I loves this summer."
        ],
        "correctIndex": 1,
        "correctAnswer": "I love this beautiful summer.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Because it's hot.",
          "Go straight one block.",
          "I am a student.",
          "Sounds like a wonderful idea!"
        ],
        "correctIndex": 3,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [9단원] 관련 대화 상황",
        "options": [
          "I am eating lunch right now.",
          "We should learn more about 캠핑 (camping).",
          "What time is it now?",
          "Where is the post office?"
        ],
        "correctIndex": 1,
        "correctAnswer": "We should learn more about 캠핑 (camping).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (숲)",
        "options": [
          "summer",
          "vacation",
          "camping",
          "forest"
        ],
        "correctIndex": 3,
        "correctAnswer": "forest",
        "explanation": "'숲'에 해당하는 영어 단어는 'forest'입니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loving this tent.",
          "I loves this tent.",
          "I love this beautiful tent.",
          "I love this beautifully tent."
        ],
        "correctIndex": 2,
        "correctAnswer": "I love this beautiful tent.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Sounds like a wonderful idea!",
          "Because it's hot.",
          "I am a student.",
          "Go straight one block."
        ],
        "correctIndex": 0,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [9단원] 관련 대화 상황",
        "options": [
          "What time is it now?",
          "I am eating lunch right now.",
          "Where is the post office?",
          "We should learn more about 계획, 계획하다 (plan)."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should learn more about 계획, 계획하다 (plan).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (청소하다)",
        "options": [
          "camping",
          "summer",
          "clean",
          "vacation"
        ],
        "correctIndex": 2,
        "correctAnswer": "clean",
        "explanation": "'청소하다'에 해당하는 영어 단어는 'clean'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loving this future.",
          "I love this beautifully future.",
          "I love this beautiful future.",
          "I loves this future."
        ],
        "correctIndex": 2,
        "correctAnswer": "I love this beautiful future.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Because it's hot.",
          "Go straight one block.",
          "I am a student.",
          "Sounds like a wonderful idea!"
        ],
        "correctIndex": 3,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [9단원] 관련 대화 상황",
        "options": [
          "We should learn more about 여름 (summer).",
          "Where is the post office?",
          "What time is it now?",
          "I am eating lunch right now."
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 여름 (summer).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (방학, 휴가)",
        "options": [
          "camping",
          "summer",
          "forest",
          "vacation"
        ],
        "correctIndex": 3,
        "correctAnswer": "vacation",
        "explanation": "'방학, 휴가'에 해당하는 영어 단어는 'vacation'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loving this camping.",
          "I loves this camping.",
          "I love this beautifully camping.",
          "I love this beautiful camping."
        ],
        "correctIndex": 3,
        "correctAnswer": "I love this beautiful camping.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Because it's hot.",
          "Go straight one block.",
          "I am a student.",
          "Sounds like a wonderful idea!"
        ],
        "correctIndex": 3,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 9단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [9단원] 관련 대화 상황",
        "options": [
          "We should learn more about 텐트 (tent).",
          "Where is the post office?",
          "I am eating lunch right now.",
          "What time is it now?"
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 텐트 (tent).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 9단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"여름\" [힌트: s____r]",
        "correctAnswer": "summer",
        "explanation": "'여름'은(는) 영어로 'summer'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 9단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"방학, 휴가\" [힌트: v______n]",
        "correctAnswer": "vacation",
        "explanation": "'방학, 휴가'은(는) 영어로 'vacation'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 9단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"캠핑\" [힌트: c_____g]",
        "correctAnswer": "camping",
        "explanation": "'캠핑'은(는) 영어로 'camping'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 9단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"숲\" [힌트: f____t]",
        "correctAnswer": "forest",
        "explanation": "'숲'은(는) 영어로 'forest'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 9단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"텐트\" [힌트: t__t]",
        "correctAnswer": "tent",
        "explanation": "'텐트'은(는) 영어로 'tent'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 9단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"방문하다\" [힌트: v___t]",
        "correctAnswer": "visit",
        "explanation": "'방문하다'은(는) 영어로 'visit'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 9단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"계획, 계획하다\" [힌트: p__n]",
        "correctAnswer": "plan",
        "explanation": "'계획, 계획하다'은(는) 영어로 'plan'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 9단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"청소하다\" [힌트: c___n]",
        "correctAnswer": "clean",
        "explanation": "'청소하다'은(는) 영어로 'clean'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 9단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"미래\" [힌트: f____e]",
        "correctAnswer": "future",
        "explanation": "'미래'은(는) 영어로 'future'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 9단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"조부모님\" [힌트: g__________s]",
        "correctAnswer": "grandparents",
        "explanation": "'조부모님'은(는) 영어로 'grandparents'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "나는 깊은 숲으로 캠핑 가기할 거야.",
        "chips": [
          "in",
          "I",
          "deep",
          "forest",
          "camping",
          "the",
          "will",
          ".",
          "go"
        ],
        "correctAnswer": "I will go camping in the deep forest.",
        "explanation": "I will go camping in the deep forest. [나는 깊은 숲으로 캠핑 가기할 거야.]"
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "나는 부산의 조부모님 댁 방문하기할 거야.",
        "chips": [
          "visit",
          "I",
          "in",
          "grandparents",
          "my",
          "will",
          ".",
          "Busan"
        ],
        "correctAnswer": "I will visit my grandparents in Busan.",
        "explanation": "I will visit my grandparents in Busan. [나는 부산의 조부모님 댁 방문하기할 거야.]"
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "나는 영어 동화책 10권 읽기할 거야.",
        "chips": [
          "I",
          "will",
          ".",
          "read",
          "ten",
          "English",
          "storybooks"
        ],
        "correctAnswer": "I will read ten English storybooks.",
        "explanation": "I will read ten English storybooks. [나는 영어 동화책 10권 읽기할 거야.]"
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "나는 수영과 다이빙 배우기할 거야.",
        "chips": [
          ".",
          "swim",
          "will",
          "dive",
          "learn",
          "to",
          "how",
          "I",
          "and"
        ],
        "correctAnswer": "I will learn how to swim and dive.",
        "explanation": "I will learn how to swim and dive. [나는 수영과 다이빙 배우기할 거야.]"
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "나는 깊은 숲으로 캠핑 가기할 거야.",
        "chips": [
          "camping",
          "go",
          "forest",
          "the",
          ".",
          "will",
          "deep",
          "I",
          "in"
        ],
        "correctAnswer": "I will go camping in the deep forest.",
        "explanation": "I will go camping in the deep forest. [나는 깊은 숲으로 캠핑 가기할 거야.]"
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "나는 부산의 조부모님 댁 방문하기할 거야.",
        "chips": [
          "I",
          "my",
          "will",
          ".",
          "visit",
          "in",
          "grandparents",
          "Busan"
        ],
        "correctAnswer": "I will visit my grandparents in Busan.",
        "explanation": "I will visit my grandparents in Busan. [나는 부산의 조부모님 댁 방문하기할 거야.]"
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "나는 영어 동화책 10권 읽기할 거야.",
        "chips": [
          "storybooks",
          "will",
          ".",
          "I",
          "English",
          "read",
          "ten"
        ],
        "correctAnswer": "I will read ten English storybooks.",
        "explanation": "I will read ten English storybooks. [나는 영어 동화책 10권 읽기할 거야.]"
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "나는 수영과 다이빙 배우기할 거야.",
        "chips": [
          "how",
          "learn",
          "swim",
          "will",
          ".",
          "to",
          "and",
          "I",
          "dive"
        ],
        "correctAnswer": "I will learn how to swim and dive.",
        "explanation": "I will learn how to swim and dive. [나는 수영과 다이빙 배우기할 거야.]"
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "나는 깊은 숲으로 캠핑 가기할 거야.",
        "chips": [
          "the",
          "go",
          "will",
          "camping",
          "forest",
          "I",
          "deep",
          "in",
          "."
        ],
        "correctAnswer": "I will go camping in the deep forest.",
        "explanation": "I will go camping in the deep forest. [나는 깊은 숲으로 캠핑 가기할 거야.]"
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "나는 부산의 조부모님 댁 방문하기할 거야.",
        "chips": [
          "in",
          "grandparents",
          "will",
          "my",
          ".",
          "visit",
          "I",
          "Busan"
        ],
        "correctAnswer": "I will visit my grandparents in Busan.",
        "explanation": "I will visit my grandparents in Busan. [나는 부산의 조부모님 댁 방문하기할 거야.]"
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "나는 영어 동화책 10권 읽기할 거야.",
        "chips": [
          ".",
          "I",
          "will",
          "ten",
          "storybooks",
          "read",
          "English"
        ],
        "correctAnswer": "I will read ten English storybooks.",
        "explanation": "I will read ten English storybooks. [나는 영어 동화책 10권 읽기할 거야.]"
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "나는 수영과 다이빙 배우기할 거야.",
        "chips": [
          "I",
          "how",
          "learn",
          "to",
          "dive",
          "will",
          ".",
          "and",
          "swim"
        ],
        "correctAnswer": "I will learn how to swim and dive.",
        "explanation": "I will learn how to swim and dive. [나는 수영과 다이빙 배우기할 거야.]"
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "나는 깊은 숲으로 캠핑 가기할 거야.",
        "chips": [
          "I",
          "in",
          "forest",
          "go",
          "camping",
          "will",
          ".",
          "deep",
          "the"
        ],
        "correctAnswer": "I will go camping in the deep forest.",
        "explanation": "I will go camping in the deep forest. [나는 깊은 숲으로 캠핑 가기할 거야.]"
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "나는 부산의 조부모님 댁 방문하기할 거야.",
        "chips": [
          "I",
          "will",
          "visit",
          "my",
          "grandparents",
          ".",
          "in",
          "Busan"
        ],
        "correctAnswer": "I will visit my grandparents in Busan.",
        "explanation": "I will visit my grandparents in Busan. [나는 부산의 조부모님 댁 방문하기할 거야.]"
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "나는 영어 동화책 10권 읽기할 거야.",
        "chips": [
          "storybooks",
          "ten",
          "read",
          "English",
          "will",
          ".",
          "I"
        ],
        "correctAnswer": "I will read ten English storybooks.",
        "explanation": "I will read ten English storybooks. [나는 영어 동화책 10권 읽기할 거야.]"
      },
      {
        "id": 96,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 9단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 우리는 에너지를 절약하고 지구를 보호해야 해.",
        "chips": [
          "and",
          "energy",
          "save",
          ".",
          "the",
          "Earth",
          "should",
          "We",
          "protect"
        ],
        "correctAnswer": "We should save energy and protect the Earth.",
        "explanation": "We should save energy and protect the Earth. [우리는 에너지를 절약하고 지구를 보호해야 해.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 97,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 9단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 내가 가장 좋아하는 계절은 꽃이 피는 봄이야.",
        "chips": [
          "is",
          "My",
          "because",
          "flowers",
          "favorite",
          "spring",
          "bloom",
          ".",
          "season"
        ],
        "correctAnswer": "My favorite season is spring because flowers bloom.",
        "explanation": "My favorite season is spring because flowers bloom. [내가 가장 좋아하는 계절은 꽃이 피는 봄이야.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 98,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 9단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 두 블록 직진해서 모퉁이에서 좌회전하세요.",
        "chips": [
          "left",
          "Go",
          "and",
          "straight",
          "corner",
          "the",
          "turn",
          "at",
          ".",
          "two",
          "blocks"
        ],
        "correctAnswer": "Go straight two blocks and turn left at the corner.",
        "explanation": "Go straight two blocks and turn left at the corner. [두 블록 직진해서 모퉁이에서 좌회전하세요.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 99,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 9단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 너는 의사 진료를 받고 약을 먹어야 해.",
        "chips": [
          "You",
          "medicine",
          "take",
          "should",
          "see",
          "a",
          ".",
          "and",
          "doctor"
        ],
        "correctAnswer": "You should see a doctor and take medicine.",
        "explanation": "You should see a doctor and take medicine. [너는 의사 진료를 받고 약을 먹어야 해.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 9단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 우리 이번 주 토요일에 함께 공원에 가는 게 어때?",
        "chips": [
          "Why",
          "together",
          "this",
          "don't",
          "to",
          "we",
          "the",
          "go",
          "?",
          "Saturday",
          "park"
        ],
        "correctAnswer": "Why don't we go to the park together this Saturday?",
        "explanation": "Why don't we go to the park together this Saturday? [우리 이번 주 토요일에 함께 공원에 가는 게 어때?] 축하합니다! 골든벨 완주! 🔔"
      }
    ]
  },
  "6G_L10": {
    "name": "10단원: 가격 묻기와 쇼핑 (How much is this shirt?)",
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
        "audioText": "A: How much is this blue striped shirt? B: It is fifteen dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "파란 줄무늬 셔츠 (15달러)",
          "파란 줄무늬 셔츠 (20달러)",
          "다른 물건 (13달러)",
          "무료 증정품"
        ],
        "correctIndex": 0,
        "correctAnswer": "파란 줄무늬 셔츠 (15달러)",
        "explanation": "'blue striped shirt'은(는) 'fifteen dollars'(15달러)입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: How much is this red baseball cap? B: It is eight dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "빨간 야구 모자 (13달러)",
          "무료 증정품",
          "빨간 야구 모자 (8달러)",
          "다른 물건 (6달러)"
        ],
        "correctIndex": 2,
        "correctAnswer": "빨간 야구 모자 (8달러)",
        "explanation": "'red baseball cap'은(는) 'eight dollars'(8달러)입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: How much is this warm running shoes? B: It is thirty-five dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "무료 증정품",
          "다른 물건 (33달러)",
          "따뜻한 운동화 (40달러)",
          "따뜻한 운동화 (35달러)"
        ],
        "correctIndex": 3,
        "correctAnswer": "따뜻한 운동화 (35달러)",
        "explanation": "'warm running shoes'은(는) 'thirty-five dollars'(35달러)입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: How much is this white cotton socks? B: It is three dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "무료 증정품",
          "다른 물건 (1달러)",
          "흰 면 양말 (8달러)",
          "흰 면 양말 (3달러)"
        ],
        "correctIndex": 3,
        "correctAnswer": "흰 면 양말 (3달러)",
        "explanation": "'white cotton socks'은(는) 'three dollars'(3달러)입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: How much is this leather backpack? B: It is twenty-five dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "다른 물건 (23달러)",
          "무료 증정품",
          "가죽 배낭 (30달러)",
          "가죽 배낭 (25달러)"
        ],
        "correctIndex": 3,
        "correctAnswer": "가죽 배낭 (25달러)",
        "explanation": "'leather backpack'은(는) 'twenty-five dollars'(25달러)입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: How much is this blue striped shirt? B: It is fifteen dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "다른 물건 (13달러)",
          "파란 줄무늬 셔츠 (15달러)",
          "무료 증정품",
          "파란 줄무늬 셔츠 (20달러)"
        ],
        "correctIndex": 1,
        "correctAnswer": "파란 줄무늬 셔츠 (15달러)",
        "explanation": "'blue striped shirt'은(는) 'fifteen dollars'(15달러)입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: How much is this red baseball cap? B: It is eight dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "빨간 야구 모자 (13달러)",
          "빨간 야구 모자 (8달러)",
          "무료 증정품",
          "다른 물건 (6달러)"
        ],
        "correctIndex": 1,
        "correctAnswer": "빨간 야구 모자 (8달러)",
        "explanation": "'red baseball cap'은(는) 'eight dollars'(8달러)입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: How much is this warm running shoes? B: It is thirty-five dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "따뜻한 운동화 (40달러)",
          "무료 증정품",
          "따뜻한 운동화 (35달러)",
          "다른 물건 (33달러)"
        ],
        "correctIndex": 2,
        "correctAnswer": "따뜻한 운동화 (35달러)",
        "explanation": "'warm running shoes'은(는) 'thirty-five dollars'(35달러)입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: How much is this white cotton socks? B: It is three dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "흰 면 양말 (8달러)",
          "흰 면 양말 (3달러)",
          "다른 물건 (1달러)",
          "무료 증정품"
        ],
        "correctIndex": 1,
        "correctAnswer": "흰 면 양말 (3달러)",
        "explanation": "'white cotton socks'은(는) 'three dollars'(3달러)입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: How much is this leather backpack? B: It is twenty-five dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "가죽 배낭 (25달러)",
          "무료 증정품",
          "가죽 배낭 (30달러)",
          "다른 물건 (23달러)"
        ],
        "correctIndex": 0,
        "correctAnswer": "가죽 배낭 (25달러)",
        "explanation": "'leather backpack'은(는) 'twenty-five dollars'(25달러)입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: How much is this blue striped shirt? B: It is fifteen dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "무료 증정품",
          "다른 물건 (13달러)",
          "파란 줄무늬 셔츠 (20달러)",
          "파란 줄무늬 셔츠 (15달러)"
        ],
        "correctIndex": 3,
        "correctAnswer": "파란 줄무늬 셔츠 (15달러)",
        "explanation": "'blue striped shirt'은(는) 'fifteen dollars'(15달러)입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: How much is this red baseball cap? B: It is eight dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "무료 증정품",
          "다른 물건 (6달러)",
          "빨간 야구 모자 (13달러)",
          "빨간 야구 모자 (8달러)"
        ],
        "correctIndex": 3,
        "correctAnswer": "빨간 야구 모자 (8달러)",
        "explanation": "'red baseball cap'은(는) 'eight dollars'(8달러)입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: How much is this warm running shoes? B: It is thirty-five dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "다른 물건 (33달러)",
          "따뜻한 운동화 (40달러)",
          "무료 증정품",
          "따뜻한 운동화 (35달러)"
        ],
        "correctIndex": 3,
        "correctAnswer": "따뜻한 운동화 (35달러)",
        "explanation": "'warm running shoes'은(는) 'thirty-five dollars'(35달러)입니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: How much is this white cotton socks? B: It is three dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "다른 물건 (1달러)",
          "흰 면 양말 (3달러)",
          "무료 증정품",
          "흰 면 양말 (8달러)"
        ],
        "correctIndex": 1,
        "correctAnswer": "흰 면 양말 (3달러)",
        "explanation": "'white cotton socks'은(는) 'three dollars'(3달러)입니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: How much is this leather backpack? B: It is twenty-five dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "가죽 배낭 (25달러)",
          "가죽 배낭 (30달러)",
          "다른 물건 (23달러)",
          "무료 증정품"
        ],
        "correctIndex": 0,
        "correctAnswer": "가죽 배낭 (25달러)",
        "explanation": "'leather backpack'은(는) 'twenty-five dollars'(25달러)입니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: How much is this blue striped shirt? B: It is fifteen dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "파란 줄무늬 셔츠 (15달러)",
          "파란 줄무늬 셔츠 (20달러)",
          "다른 물건 (13달러)",
          "무료 증정품"
        ],
        "correctIndex": 0,
        "correctAnswer": "파란 줄무늬 셔츠 (15달러)",
        "explanation": "'blue striped shirt'은(는) 'fifteen dollars'(15달러)입니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: How much is this red baseball cap? B: It is eight dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "빨간 야구 모자 (8달러)",
          "빨간 야구 모자 (13달러)",
          "무료 증정품",
          "다른 물건 (6달러)"
        ],
        "correctIndex": 0,
        "correctAnswer": "빨간 야구 모자 (8달러)",
        "explanation": "'red baseball cap'은(는) 'eight dollars'(8달러)입니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: How much is this warm running shoes? B: It is thirty-five dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "무료 증정품",
          "다른 물건 (33달러)",
          "따뜻한 운동화 (40달러)",
          "따뜻한 운동화 (35달러)"
        ],
        "correctIndex": 3,
        "correctAnswer": "따뜻한 운동화 (35달러)",
        "explanation": "'warm running shoes'은(는) 'thirty-five dollars'(35달러)입니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: How much is this white cotton socks? B: It is three dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "다른 물건 (1달러)",
          "흰 면 양말 (8달러)",
          "무료 증정품",
          "흰 면 양말 (3달러)"
        ],
        "correctIndex": 3,
        "correctAnswer": "흰 면 양말 (3달러)",
        "explanation": "'white cotton socks'은(는) 'three dollars'(3달러)입니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: How much is this leather backpack? B: It is twenty-five dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "무료 증정품",
          "가죽 배낭 (25달러)",
          "다른 물건 (23달러)",
          "가죽 배낭 (30달러)"
        ],
        "correctIndex": 1,
        "correctAnswer": "가죽 배낭 (25달러)",
        "explanation": "'leather backpack'은(는) 'twenty-five dollars'(25달러)입니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: How much is this blue striped shirt? B: It is fifteen dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "다른 물건 (13달러)",
          "무료 증정품",
          "파란 줄무늬 셔츠 (15달러)",
          "파란 줄무늬 셔츠 (20달러)"
        ],
        "correctIndex": 2,
        "correctAnswer": "파란 줄무늬 셔츠 (15달러)",
        "explanation": "'blue striped shirt'은(는) 'fifteen dollars'(15달러)입니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: How much is this red baseball cap? B: It is eight dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "무료 증정품",
          "빨간 야구 모자 (8달러)",
          "빨간 야구 모자 (13달러)",
          "다른 물건 (6달러)"
        ],
        "correctIndex": 1,
        "correctAnswer": "빨간 야구 모자 (8달러)",
        "explanation": "'red baseball cap'은(는) 'eight dollars'(8달러)입니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: How much is this warm running shoes? B: It is thirty-five dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "다른 물건 (33달러)",
          "따뜻한 운동화 (40달러)",
          "따뜻한 운동화 (35달러)",
          "무료 증정품"
        ],
        "correctIndex": 2,
        "correctAnswer": "따뜻한 운동화 (35달러)",
        "explanation": "'warm running shoes'은(는) 'thirty-five dollars'(35달러)입니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: How much is this white cotton socks? B: It is three dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "흰 면 양말 (3달러)",
          "다른 물건 (1달러)",
          "흰 면 양말 (8달러)",
          "무료 증정품"
        ],
        "correctIndex": 0,
        "correctAnswer": "흰 면 양말 (3달러)",
        "explanation": "'white cotton socks'은(는) 'three dollars'(3달러)입니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: How much is this leather backpack? B: It is twenty-five dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "가죽 배낭 (25달러)",
          "가죽 배낭 (30달러)",
          "다른 물건 (23달러)",
          "무료 증정품"
        ],
        "correctIndex": 0,
        "correctAnswer": "가죽 배낭 (25달러)",
        "explanation": "'leather backpack'은(는) 'twenty-five dollars'(25달러)입니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: How much is this blue striped shirt? B: It is fifteen dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "무료 증정품",
          "파란 줄무늬 셔츠 (15달러)",
          "다른 물건 (13달러)",
          "파란 줄무늬 셔츠 (20달러)"
        ],
        "correctIndex": 1,
        "correctAnswer": "파란 줄무늬 셔츠 (15달러)",
        "explanation": "'blue striped shirt'은(는) 'fifteen dollars'(15달러)입니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: How much is this red baseball cap? B: It is eight dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "다른 물건 (6달러)",
          "빨간 야구 모자 (13달러)",
          "빨간 야구 모자 (8달러)",
          "무료 증정품"
        ],
        "correctIndex": 2,
        "correctAnswer": "빨간 야구 모자 (8달러)",
        "explanation": "'red baseball cap'은(는) 'eight dollars'(8달러)입니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: How much is this warm running shoes? B: It is thirty-five dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "다른 물건 (33달러)",
          "따뜻한 운동화 (35달러)",
          "무료 증정품",
          "따뜻한 운동화 (40달러)"
        ],
        "correctIndex": 1,
        "correctAnswer": "따뜻한 운동화 (35달러)",
        "explanation": "'warm running shoes'은(는) 'thirty-five dollars'(35달러)입니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: How much is this white cotton socks? B: It is three dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "흰 면 양말 (3달러)",
          "흰 면 양말 (8달러)",
          "다른 물건 (1달러)",
          "무료 증정품"
        ],
        "correctIndex": 0,
        "correctAnswer": "흰 면 양말 (3달러)",
        "explanation": "'white cotton socks'은(는) 'three dollars'(3달러)입니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: How much is this leather backpack? B: It is twenty-five dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "무료 증정품",
          "다른 물건 (23달러)",
          "가죽 배낭 (30달러)",
          "가죽 배낭 (25달러)"
        ],
        "correctIndex": 3,
        "correctAnswer": "가죽 배낭 (25달러)",
        "explanation": "'leather backpack'은(는) 'twenty-five dollars'(25달러)입니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: How much is this blue striped shirt? B: It is fifteen dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "파란 줄무늬 셔츠 (15달러)",
          "파란 줄무늬 셔츠 (20달러)",
          "무료 증정품",
          "다른 물건 (13달러)"
        ],
        "correctIndex": 0,
        "correctAnswer": "파란 줄무늬 셔츠 (15달러)",
        "explanation": "'blue striped shirt'은(는) 'fifteen dollars'(15달러)입니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: How much is this red baseball cap? B: It is eight dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "빨간 야구 모자 (8달러)",
          "빨간 야구 모자 (13달러)",
          "다른 물건 (6달러)",
          "무료 증정품"
        ],
        "correctIndex": 0,
        "correctAnswer": "빨간 야구 모자 (8달러)",
        "explanation": "'red baseball cap'은(는) 'eight dollars'(8달러)입니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: How much is this warm running shoes? B: It is thirty-five dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "따뜻한 운동화 (40달러)",
          "따뜻한 운동화 (35달러)",
          "무료 증정품",
          "다른 물건 (33달러)"
        ],
        "correctIndex": 1,
        "correctAnswer": "따뜻한 운동화 (35달러)",
        "explanation": "'warm running shoes'은(는) 'thirty-five dollars'(35달러)입니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: How much is this white cotton socks? B: It is three dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "다른 물건 (1달러)",
          "흰 면 양말 (8달러)",
          "흰 면 양말 (3달러)",
          "무료 증정품"
        ],
        "correctIndex": 2,
        "correctAnswer": "흰 면 양말 (3달러)",
        "explanation": "'white cotton socks'은(는) 'three dollars'(3달러)입니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: How much is this leather backpack? B: It is twenty-five dollars. May I pack it for you?",
        "question": "[듣기 · 10단원] 대화를 듣고, 손님이 문의한 물건과 가격으로 올바른 것은?",
        "options": [
          "가죽 배낭 (30달러)",
          "무료 증정품",
          "가죽 배낭 (25달러)",
          "다른 물건 (23달러)"
        ],
        "correctIndex": 2,
        "correctAnswer": "가죽 배낭 (25달러)",
        "explanation": "'leather backpack'은(는) 'twenty-five dollars'(25달러)입니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loves this shirt.",
          "I loving this shirt.",
          "I love this beautifully shirt.",
          "I love this beautiful shirt."
        ],
        "correctIndex": 3,
        "correctAnswer": "I love this beautiful shirt.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: How much is this blue shirt?\nB: ____________________________________",
        "options": [
          "I want to join the club.",
          "It is on your right.",
          "It is fifteen dollars.",
          "Because flowers bloom."
        ],
        "correctIndex": 2,
        "correctAnswer": "It is fifteen dollars.",
        "explanation": "가격을 묻는 질문에는 금액(dollars)으로 답해야 합니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [10단원] 관련 대화 상황",
        "options": [
          "What time is it now?",
          "I am eating lunch right now.",
          "Where is the post office?",
          "We should learn more about 센트 (cent)."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should learn more about 센트 (cent).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (값싼)",
        "options": [
          "dollar",
          "shirt",
          "cheap",
          "cent"
        ],
        "correctIndex": 2,
        "correctAnswer": "cheap",
        "explanation": "'값싼'에 해당하는 영어 단어는 'cheap'입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loves this expensive.",
          "I loving this expensive.",
          "I love this beautiful expensive.",
          "I love this beautifully expensive."
        ],
        "correctIndex": 2,
        "correctAnswer": "I love this beautiful expensive.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: How much is this blue shirt?\nB: ____________________________________",
        "options": [
          "It is on your right.",
          "I want to join the club.",
          "It is fifteen dollars.",
          "Because flowers bloom."
        ],
        "correctIndex": 2,
        "correctAnswer": "It is fifteen dollars.",
        "explanation": "가격을 묻는 질문에는 금액(dollars)으로 답해야 합니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [10단원] 관련 대화 상황",
        "options": [
          "What time is it now?",
          "Where is the post office?",
          "I am eating lunch right now.",
          "We should learn more about 신발 (shoes)."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should learn more about 신발 (shoes).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (양말)",
        "options": [
          "cent",
          "shirt",
          "dollar",
          "socks"
        ],
        "correctIndex": 3,
        "correctAnswer": "socks",
        "explanation": "'양말'에 해당하는 영어 단어는 'socks'입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loving this pants.",
          "I love this beautifully pants.",
          "I loves this pants.",
          "I love this beautiful pants."
        ],
        "correctIndex": 3,
        "correctAnswer": "I love this beautiful pants.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: How much is this blue shirt?\nB: ____________________________________",
        "options": [
          "I want to join the club.",
          "Because flowers bloom.",
          "It is on your right.",
          "It is fifteen dollars."
        ],
        "correctIndex": 3,
        "correctAnswer": "It is fifteen dollars.",
        "explanation": "가격을 묻는 질문에는 금액(dollars)으로 답해야 합니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [10단원] 관련 대화 상황",
        "options": [
          "We should learn more about 셔츠 (shirt).",
          "Where is the post office?",
          "What time is it now?",
          "I am eating lunch right now."
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 셔츠 (shirt).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (달러)",
        "options": [
          "shirt",
          "dollar",
          "cheap",
          "cent"
        ],
        "correctIndex": 1,
        "correctAnswer": "dollar",
        "explanation": "'달러'에 해당하는 영어 단어는 'dollar'입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I love this beautiful cent.",
          "I love this beautifully cent.",
          "I loving this cent.",
          "I loves this cent."
        ],
        "correctIndex": 0,
        "correctAnswer": "I love this beautiful cent.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: How much is this blue shirt?\nB: ____________________________________",
        "options": [
          "It is on your right.",
          "Because flowers bloom.",
          "I want to join the club.",
          "It is fifteen dollars."
        ],
        "correctIndex": 3,
        "correctAnswer": "It is fifteen dollars.",
        "explanation": "가격을 묻는 질문에는 금액(dollars)으로 답해야 합니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [10단원] 관련 대화 상황",
        "options": [
          "We should learn more about 비싼 (expensive).",
          "I am eating lunch right now.",
          "Where is the post office?",
          "What time is it now?"
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 비싼 (expensive).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (입어보다, 시도하다)",
        "options": [
          "dollar",
          "shirt",
          "cent",
          "try"
        ],
        "correctIndex": 3,
        "correctAnswer": "try",
        "explanation": "'입어보다, 시도하다'에 해당하는 영어 단어는 'try'입니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loves this shoes.",
          "I loving this shoes.",
          "I love this beautifully shoes.",
          "I love this beautiful shoes."
        ],
        "correctIndex": 3,
        "correctAnswer": "I love this beautiful shoes.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: How much is this blue shirt?\nB: ____________________________________",
        "options": [
          "It is fifteen dollars.",
          "It is on your right.",
          "I want to join the club.",
          "Because flowers bloom."
        ],
        "correctIndex": 0,
        "correctAnswer": "It is fifteen dollars.",
        "explanation": "가격을 묻는 질문에는 금액(dollars)으로 답해야 합니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [10단원] 관련 대화 상황",
        "options": [
          "I am eating lunch right now.",
          "What time is it now?",
          "Where is the post office?",
          "We should learn more about 바지 (pants)."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should learn more about 바지 (pants).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (선물)",
        "options": [
          "dollar",
          "shirt",
          "present",
          "cent"
        ],
        "correctIndex": 2,
        "correctAnswer": "present",
        "explanation": "'선물'에 해당하는 영어 단어는 'present'입니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loving this shirt.",
          "I love this beautifully shirt.",
          "I loves this shirt.",
          "I love this beautiful shirt."
        ],
        "correctIndex": 3,
        "correctAnswer": "I love this beautiful shirt.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: How much is this blue shirt?\nB: ____________________________________",
        "options": [
          "It is fifteen dollars.",
          "Because flowers bloom.",
          "It is on your right.",
          "I want to join the club."
        ],
        "correctIndex": 0,
        "correctAnswer": "It is fifteen dollars.",
        "explanation": "가격을 묻는 질문에는 금액(dollars)으로 답해야 합니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [10단원] 관련 대화 상황",
        "options": [
          "What time is it now?",
          "We should learn more about 센트 (cent).",
          "I am eating lunch right now.",
          "Where is the post office?"
        ],
        "correctIndex": 1,
        "correctAnswer": "We should learn more about 센트 (cent).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (값싼)",
        "options": [
          "cheap",
          "shirt",
          "dollar",
          "cent"
        ],
        "correctIndex": 0,
        "correctAnswer": "cheap",
        "explanation": "'값싼'에 해당하는 영어 단어는 'cheap'입니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loves this expensive.",
          "I love this beautiful expensive.",
          "I love this beautifully expensive.",
          "I loving this expensive."
        ],
        "correctIndex": 1,
        "correctAnswer": "I love this beautiful expensive.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: How much is this blue shirt?\nB: ____________________________________",
        "options": [
          "It is fifteen dollars.",
          "Because flowers bloom.",
          "I want to join the club.",
          "It is on your right."
        ],
        "correctIndex": 0,
        "correctAnswer": "It is fifteen dollars.",
        "explanation": "가격을 묻는 질문에는 금액(dollars)으로 답해야 합니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [10단원] 관련 대화 상황",
        "options": [
          "I am eating lunch right now.",
          "We should learn more about 신발 (shoes).",
          "Where is the post office?",
          "What time is it now?"
        ],
        "correctIndex": 1,
        "correctAnswer": "We should learn more about 신발 (shoes).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (양말)",
        "options": [
          "cent",
          "socks",
          "shirt",
          "dollar"
        ],
        "correctIndex": 1,
        "correctAnswer": "socks",
        "explanation": "'양말'에 해당하는 영어 단어는 'socks'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loves this pants.",
          "I loving this pants.",
          "I love this beautifully pants.",
          "I love this beautiful pants."
        ],
        "correctIndex": 3,
        "correctAnswer": "I love this beautiful pants.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: How much is this blue shirt?\nB: ____________________________________",
        "options": [
          "It is fifteen dollars.",
          "It is on your right.",
          "I want to join the club.",
          "Because flowers bloom."
        ],
        "correctIndex": 0,
        "correctAnswer": "It is fifteen dollars.",
        "explanation": "가격을 묻는 질문에는 금액(dollars)으로 답해야 합니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [10단원] 관련 대화 상황",
        "options": [
          "Where is the post office?",
          "We should learn more about 셔츠 (shirt).",
          "I am eating lunch right now.",
          "What time is it now?"
        ],
        "correctIndex": 1,
        "correctAnswer": "We should learn more about 셔츠 (shirt).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (달러)",
        "options": [
          "cent",
          "cheap",
          "shirt",
          "dollar"
        ],
        "correctIndex": 3,
        "correctAnswer": "dollar",
        "explanation": "'달러'에 해당하는 영어 단어는 'dollar'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I love this beautiful cent.",
          "I love this beautifully cent.",
          "I loving this cent.",
          "I loves this cent."
        ],
        "correctIndex": 0,
        "correctAnswer": "I love this beautiful cent.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: How much is this blue shirt?\nB: ____________________________________",
        "options": [
          "It is fifteen dollars.",
          "It is on your right.",
          "Because flowers bloom.",
          "I want to join the club."
        ],
        "correctIndex": 0,
        "correctAnswer": "It is fifteen dollars.",
        "explanation": "가격을 묻는 질문에는 금액(dollars)으로 답해야 합니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 10단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [10단원] 관련 대화 상황",
        "options": [
          "We should learn more about 비싼 (expensive).",
          "What time is it now?",
          "Where is the post office?",
          "I am eating lunch right now."
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 비싼 (expensive).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 10단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"셔츠\" [힌트: s___t]",
        "correctAnswer": "shirt",
        "explanation": "'셔츠'은(는) 영어로 'shirt'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 10단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"달러\" [힌트: d____r]",
        "correctAnswer": "dollar",
        "explanation": "'달러'은(는) 영어로 'dollar'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 10단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"센트\" [힌트: c__t]",
        "correctAnswer": "cent",
        "explanation": "'센트'은(는) 영어로 'cent'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 10단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"값싼\" [힌트: c___p]",
        "correctAnswer": "cheap",
        "explanation": "'값싼'은(는) 영어로 'cheap'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 10단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"비싼\" [힌트: e_______e]",
        "correctAnswer": "expensive",
        "explanation": "'비싼'은(는) 영어로 'expensive'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 10단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"입어보다, 시도하다\" [힌트: t_y]",
        "correctAnswer": "try",
        "explanation": "'입어보다, 시도하다'은(는) 영어로 'try'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 10단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"신발\" [힌트: s___s]",
        "correctAnswer": "shoes",
        "explanation": "'신발'은(는) 영어로 'shoes'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 10단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"양말\" [힌트: s___s]",
        "correctAnswer": "socks",
        "explanation": "'양말'은(는) 영어로 'socks'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 10단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"바지\" [힌트: p___s]",
        "correctAnswer": "pants",
        "explanation": "'바지'은(는) 영어로 'pants'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 10단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"선물\" [힌트: p_____t]",
        "correctAnswer": "present",
        "explanation": "'선물'은(는) 영어로 'present'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "이 파란 줄무늬 셔츠은(는) 얼마인가요?",
        "chips": [
          "this",
          "How",
          "striped",
          "?",
          "blue",
          "much",
          "is",
          "shirt"
        ],
        "correctAnswer": "How much is this blue striped shirt?",
        "explanation": "How much is this blue striped shirt? [이 파란 줄무늬 셔츠은(는) 얼마인가요?]"
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "이 빨간 야구 모자은(는) 얼마인가요?",
        "chips": [
          "much",
          "How",
          "this",
          "?",
          "cap",
          "red",
          "baseball",
          "is"
        ],
        "correctAnswer": "How much is this red baseball cap?",
        "explanation": "How much is this red baseball cap? [이 빨간 야구 모자은(는) 얼마인가요?]"
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "이 따뜻한 운동화은(는) 얼마인가요?",
        "chips": [
          "How",
          "?",
          "this",
          "shoes",
          "running",
          "much",
          "warm",
          "is"
        ],
        "correctAnswer": "How much is this warm running shoes?",
        "explanation": "How much is this warm running shoes? [이 따뜻한 운동화은(는) 얼마인가요?]"
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "이 흰 면 양말은(는) 얼마인가요?",
        "chips": [
          "white",
          "much",
          "is",
          "this",
          "?",
          "How",
          "socks",
          "cotton"
        ],
        "correctAnswer": "How much is this white cotton socks?",
        "explanation": "How much is this white cotton socks? [이 흰 면 양말은(는) 얼마인가요?]"
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "이 가죽 배낭은(는) 얼마인가요?",
        "chips": [
          "How",
          "much",
          "backpack",
          "leather",
          "this",
          "is",
          "?"
        ],
        "correctAnswer": "How much is this leather backpack?",
        "explanation": "How much is this leather backpack? [이 가죽 배낭은(는) 얼마인가요?]"
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "이 파란 줄무늬 셔츠은(는) 얼마인가요?",
        "chips": [
          "striped",
          "is",
          "?",
          "much",
          "blue",
          "How",
          "this",
          "shirt"
        ],
        "correctAnswer": "How much is this blue striped shirt?",
        "explanation": "How much is this blue striped shirt? [이 파란 줄무늬 셔츠은(는) 얼마인가요?]"
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "이 빨간 야구 모자은(는) 얼마인가요?",
        "chips": [
          "How",
          "baseball",
          "?",
          "much",
          "red",
          "is",
          "this",
          "cap"
        ],
        "correctAnswer": "How much is this red baseball cap?",
        "explanation": "How much is this red baseball cap? [이 빨간 야구 모자은(는) 얼마인가요?]"
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "이 따뜻한 운동화은(는) 얼마인가요?",
        "chips": [
          "much",
          "warm",
          "shoes",
          "?",
          "How",
          "running",
          "is",
          "this"
        ],
        "correctAnswer": "How much is this warm running shoes?",
        "explanation": "How much is this warm running shoes? [이 따뜻한 운동화은(는) 얼마인가요?]"
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "이 흰 면 양말은(는) 얼마인가요?",
        "chips": [
          "white",
          "cotton",
          "socks",
          "this",
          "much",
          "How",
          "?",
          "is"
        ],
        "correctAnswer": "How much is this white cotton socks?",
        "explanation": "How much is this white cotton socks? [이 흰 면 양말은(는) 얼마인가요?]"
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "이 가죽 배낭은(는) 얼마인가요?",
        "chips": [
          "backpack",
          "leather",
          "this",
          "?",
          "is",
          "much",
          "How"
        ],
        "correctAnswer": "How much is this leather backpack?",
        "explanation": "How much is this leather backpack? [이 가죽 배낭은(는) 얼마인가요?]"
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "이 파란 줄무늬 셔츠은(는) 얼마인가요?",
        "chips": [
          "How",
          "much",
          "is",
          "this",
          "blue",
          "striped",
          "shirt",
          "?"
        ],
        "correctAnswer": "How much is this blue striped shirt?",
        "explanation": "How much is this blue striped shirt? [이 파란 줄무늬 셔츠은(는) 얼마인가요?]"
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "이 빨간 야구 모자은(는) 얼마인가요?",
        "chips": [
          "this",
          "red",
          "cap",
          "?",
          "baseball",
          "is",
          "much",
          "How"
        ],
        "correctAnswer": "How much is this red baseball cap?",
        "explanation": "How much is this red baseball cap? [이 빨간 야구 모자은(는) 얼마인가요?]"
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "이 따뜻한 운동화은(는) 얼마인가요?",
        "chips": [
          "How",
          "this",
          "much",
          "?",
          "running",
          "is",
          "warm",
          "shoes"
        ],
        "correctAnswer": "How much is this warm running shoes?",
        "explanation": "How much is this warm running shoes? [이 따뜻한 운동화은(는) 얼마인가요?]"
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "이 흰 면 양말은(는) 얼마인가요?",
        "chips": [
          "?",
          "white",
          "is",
          "How",
          "cotton",
          "much",
          "socks",
          "this"
        ],
        "correctAnswer": "How much is this white cotton socks?",
        "explanation": "How much is this white cotton socks? [이 흰 면 양말은(는) 얼마인가요?]"
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "이 가죽 배낭은(는) 얼마인가요?",
        "chips": [
          "How",
          "much",
          "?",
          "is",
          "this",
          "leather",
          "backpack"
        ],
        "correctAnswer": "How much is this leather backpack?",
        "explanation": "How much is this leather backpack? [이 가죽 배낭은(는) 얼마인가요?]"
      },
      {
        "id": 96,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 10단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 우리는 에너지를 절약하고 지구를 보호해야 해.",
        "chips": [
          "Earth",
          "save",
          "energy",
          "should",
          "and",
          ".",
          "We",
          "protect",
          "the"
        ],
        "correctAnswer": "We should save energy and protect the Earth.",
        "explanation": "We should save energy and protect the Earth. [우리는 에너지를 절약하고 지구를 보호해야 해.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 97,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 10단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 내가 가장 좋아하는 계절은 꽃이 피는 봄이야.",
        "chips": [
          "because",
          "bloom",
          "spring",
          "is",
          "season",
          ".",
          "favorite",
          "My",
          "flowers"
        ],
        "correctAnswer": "My favorite season is spring because flowers bloom.",
        "explanation": "My favorite season is spring because flowers bloom. [내가 가장 좋아하는 계절은 꽃이 피는 봄이야.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 98,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 10단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 두 블록 직진해서 모퉁이에서 좌회전하세요.",
        "chips": [
          "blocks",
          "two",
          "straight",
          "at",
          "left",
          "and",
          "Go",
          ".",
          "the",
          "corner",
          "turn"
        ],
        "correctAnswer": "Go straight two blocks and turn left at the corner.",
        "explanation": "Go straight two blocks and turn left at the corner. [두 블록 직진해서 모퉁이에서 좌회전하세요.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 99,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 10단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 너는 의사 진료를 받고 약을 먹어야 해.",
        "chips": [
          "You",
          "doctor",
          "take",
          "a",
          "medicine",
          ".",
          "should",
          "and",
          "see"
        ],
        "correctAnswer": "You should see a doctor and take medicine.",
        "explanation": "You should see a doctor and take medicine. [너는 의사 진료를 받고 약을 먹어야 해.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 10단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 우리 이번 주 토요일에 함께 공원에 가는 게 어때?",
        "chips": [
          "Why",
          "don't",
          "we",
          "go",
          "to",
          "the",
          "?",
          "this",
          "park",
          "Saturday",
          "together"
        ],
        "correctAnswer": "Why don't we go to the park together this Saturday?",
        "explanation": "Why don't we go to the park together this Saturday? [우리 이번 주 토요일에 함께 공원에 가는 게 어때?] 축하합니다! 골든벨 완주! 🔔"
      }
    ]
  },
  "6G_L11": {
    "name": "11단원: 건강 상태와 조언 (What's the matter?)",
    "grade": 6,
    "theme": "Health, Symptoms & Advice",
    "totalQuestions": 100,
    "questions": [
      {
        "id": 1,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a terrible headache. A: You should take medicine and get rest.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(심한 두통)에 대한 알맞은 조언은?",
        "options": [
          "야외 운동하기",
          "약을 먹고 휴식을 취하다",
          "찬 음료 마시기",
          "늦게까지 깨어있다"
        ],
        "correctIndex": 1,
        "correctAnswer": "약을 먹고 휴식을 취하다",
        "explanation": "'You should take medicine and get rest'(약을 먹고 휴식을 취하다)입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a high fever and a cold. A: You should see a doctor right away.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(고열과 감기)에 대한 알맞은 조언은?",
        "options": [
          "즉시 의사 진료를 받다",
          "추운 곳에 외출하다",
          "야외 운동하기",
          "찬 음료 마시기"
        ],
        "correctIndex": 0,
        "correctAnswer": "즉시 의사 진료를 받다",
        "explanation": "'You should see a doctor right away'(즉시 의사 진료를 받다)입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a bad stomachache. A: You should drink warm water slowly.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(심한 복통)에 대한 알맞은 조언은?",
        "options": [
          "따뜻한 물을 천천히 마시다",
          "차가운 아이스크림을 과식하다",
          "찬 음료 마시기",
          "야외 운동하기"
        ],
        "correctIndex": 0,
        "correctAnswer": "따뜻한 물을 천천히 마시다",
        "explanation": "'You should drink warm water slowly'(따뜻한 물을 천천히 마시다)입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a painful toothache. A: You should go to the dentist today.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(심한 치통)에 대한 알맞은 조언은?",
        "options": [
          "야외 운동하기",
          "찬 음료 마시기",
          "딱딱한 사탕을 먹다",
          "오늘 치과에 가다"
        ],
        "correctIndex": 3,
        "correctAnswer": "오늘 치과에 가다",
        "explanation": "'You should go to the dentist today'(오늘 치과에 가다)입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a terrible headache. A: You should take medicine and get rest.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(심한 두통)에 대한 알맞은 조언은?",
        "options": [
          "약을 먹고 휴식을 취하다",
          "찬 음료 마시기",
          "야외 운동하기",
          "늦게까지 깨어있다"
        ],
        "correctIndex": 0,
        "correctAnswer": "약을 먹고 휴식을 취하다",
        "explanation": "'You should take medicine and get rest'(약을 먹고 휴식을 취하다)입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a high fever and a cold. A: You should see a doctor right away.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(고열과 감기)에 대한 알맞은 조언은?",
        "options": [
          "즉시 의사 진료를 받다",
          "추운 곳에 외출하다",
          "찬 음료 마시기",
          "야외 운동하기"
        ],
        "correctIndex": 0,
        "correctAnswer": "즉시 의사 진료를 받다",
        "explanation": "'You should see a doctor right away'(즉시 의사 진료를 받다)입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a bad stomachache. A: You should drink warm water slowly.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(심한 복통)에 대한 알맞은 조언은?",
        "options": [
          "찬 음료 마시기",
          "차가운 아이스크림을 과식하다",
          "야외 운동하기",
          "따뜻한 물을 천천히 마시다"
        ],
        "correctIndex": 3,
        "correctAnswer": "따뜻한 물을 천천히 마시다",
        "explanation": "'You should drink warm water slowly'(따뜻한 물을 천천히 마시다)입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a painful toothache. A: You should go to the dentist today.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(심한 치통)에 대한 알맞은 조언은?",
        "options": [
          "오늘 치과에 가다",
          "야외 운동하기",
          "딱딱한 사탕을 먹다",
          "찬 음료 마시기"
        ],
        "correctIndex": 0,
        "correctAnswer": "오늘 치과에 가다",
        "explanation": "'You should go to the dentist today'(오늘 치과에 가다)입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a terrible headache. A: You should take medicine and get rest.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(심한 두통)에 대한 알맞은 조언은?",
        "options": [
          "야외 운동하기",
          "찬 음료 마시기",
          "늦게까지 깨어있다",
          "약을 먹고 휴식을 취하다"
        ],
        "correctIndex": 3,
        "correctAnswer": "약을 먹고 휴식을 취하다",
        "explanation": "'You should take medicine and get rest'(약을 먹고 휴식을 취하다)입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a high fever and a cold. A: You should see a doctor right away.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(고열과 감기)에 대한 알맞은 조언은?",
        "options": [
          "즉시 의사 진료를 받다",
          "추운 곳에 외출하다",
          "야외 운동하기",
          "찬 음료 마시기"
        ],
        "correctIndex": 0,
        "correctAnswer": "즉시 의사 진료를 받다",
        "explanation": "'You should see a doctor right away'(즉시 의사 진료를 받다)입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a bad stomachache. A: You should drink warm water slowly.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(심한 복통)에 대한 알맞은 조언은?",
        "options": [
          "야외 운동하기",
          "따뜻한 물을 천천히 마시다",
          "차가운 아이스크림을 과식하다",
          "찬 음료 마시기"
        ],
        "correctIndex": 1,
        "correctAnswer": "따뜻한 물을 천천히 마시다",
        "explanation": "'You should drink warm water slowly'(따뜻한 물을 천천히 마시다)입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a painful toothache. A: You should go to the dentist today.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(심한 치통)에 대한 알맞은 조언은?",
        "options": [
          "오늘 치과에 가다",
          "딱딱한 사탕을 먹다",
          "찬 음료 마시기",
          "야외 운동하기"
        ],
        "correctIndex": 0,
        "correctAnswer": "오늘 치과에 가다",
        "explanation": "'You should go to the dentist today'(오늘 치과에 가다)입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a terrible headache. A: You should take medicine and get rest.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(심한 두통)에 대한 알맞은 조언은?",
        "options": [
          "약을 먹고 휴식을 취하다",
          "늦게까지 깨어있다",
          "찬 음료 마시기",
          "야외 운동하기"
        ],
        "correctIndex": 0,
        "correctAnswer": "약을 먹고 휴식을 취하다",
        "explanation": "'You should take medicine and get rest'(약을 먹고 휴식을 취하다)입니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a high fever and a cold. A: You should see a doctor right away.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(고열과 감기)에 대한 알맞은 조언은?",
        "options": [
          "찬 음료 마시기",
          "추운 곳에 외출하다",
          "야외 운동하기",
          "즉시 의사 진료를 받다"
        ],
        "correctIndex": 3,
        "correctAnswer": "즉시 의사 진료를 받다",
        "explanation": "'You should see a doctor right away'(즉시 의사 진료를 받다)입니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a bad stomachache. A: You should drink warm water slowly.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(심한 복통)에 대한 알맞은 조언은?",
        "options": [
          "야외 운동하기",
          "찬 음료 마시기",
          "차가운 아이스크림을 과식하다",
          "따뜻한 물을 천천히 마시다"
        ],
        "correctIndex": 3,
        "correctAnswer": "따뜻한 물을 천천히 마시다",
        "explanation": "'You should drink warm water slowly'(따뜻한 물을 천천히 마시다)입니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a painful toothache. A: You should go to the dentist today.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(심한 치통)에 대한 알맞은 조언은?",
        "options": [
          "오늘 치과에 가다",
          "딱딱한 사탕을 먹다",
          "찬 음료 마시기",
          "야외 운동하기"
        ],
        "correctIndex": 0,
        "correctAnswer": "오늘 치과에 가다",
        "explanation": "'You should go to the dentist today'(오늘 치과에 가다)입니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a terrible headache. A: You should take medicine and get rest.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(심한 두통)에 대한 알맞은 조언은?",
        "options": [
          "야외 운동하기",
          "찬 음료 마시기",
          "늦게까지 깨어있다",
          "약을 먹고 휴식을 취하다"
        ],
        "correctIndex": 3,
        "correctAnswer": "약을 먹고 휴식을 취하다",
        "explanation": "'You should take medicine and get rest'(약을 먹고 휴식을 취하다)입니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a high fever and a cold. A: You should see a doctor right away.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(고열과 감기)에 대한 알맞은 조언은?",
        "options": [
          "찬 음료 마시기",
          "즉시 의사 진료를 받다",
          "야외 운동하기",
          "추운 곳에 외출하다"
        ],
        "correctIndex": 1,
        "correctAnswer": "즉시 의사 진료를 받다",
        "explanation": "'You should see a doctor right away'(즉시 의사 진료를 받다)입니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a bad stomachache. A: You should drink warm water slowly.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(심한 복통)에 대한 알맞은 조언은?",
        "options": [
          "따뜻한 물을 천천히 마시다",
          "차가운 아이스크림을 과식하다",
          "찬 음료 마시기",
          "야외 운동하기"
        ],
        "correctIndex": 0,
        "correctAnswer": "따뜻한 물을 천천히 마시다",
        "explanation": "'You should drink warm water slowly'(따뜻한 물을 천천히 마시다)입니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a painful toothache. A: You should go to the dentist today.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(심한 치통)에 대한 알맞은 조언은?",
        "options": [
          "오늘 치과에 가다",
          "야외 운동하기",
          "딱딱한 사탕을 먹다",
          "찬 음료 마시기"
        ],
        "correctIndex": 0,
        "correctAnswer": "오늘 치과에 가다",
        "explanation": "'You should go to the dentist today'(오늘 치과에 가다)입니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a terrible headache. A: You should take medicine and get rest.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(심한 두통)에 대한 알맞은 조언은?",
        "options": [
          "야외 운동하기",
          "약을 먹고 휴식을 취하다",
          "늦게까지 깨어있다",
          "찬 음료 마시기"
        ],
        "correctIndex": 1,
        "correctAnswer": "약을 먹고 휴식을 취하다",
        "explanation": "'You should take medicine and get rest'(약을 먹고 휴식을 취하다)입니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a high fever and a cold. A: You should see a doctor right away.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(고열과 감기)에 대한 알맞은 조언은?",
        "options": [
          "야외 운동하기",
          "찬 음료 마시기",
          "추운 곳에 외출하다",
          "즉시 의사 진료를 받다"
        ],
        "correctIndex": 3,
        "correctAnswer": "즉시 의사 진료를 받다",
        "explanation": "'You should see a doctor right away'(즉시 의사 진료를 받다)입니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a bad stomachache. A: You should drink warm water slowly.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(심한 복통)에 대한 알맞은 조언은?",
        "options": [
          "차가운 아이스크림을 과식하다",
          "야외 운동하기",
          "따뜻한 물을 천천히 마시다",
          "찬 음료 마시기"
        ],
        "correctIndex": 2,
        "correctAnswer": "따뜻한 물을 천천히 마시다",
        "explanation": "'You should drink warm water slowly'(따뜻한 물을 천천히 마시다)입니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a painful toothache. A: You should go to the dentist today.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(심한 치통)에 대한 알맞은 조언은?",
        "options": [
          "딱딱한 사탕을 먹다",
          "오늘 치과에 가다",
          "찬 음료 마시기",
          "야외 운동하기"
        ],
        "correctIndex": 1,
        "correctAnswer": "오늘 치과에 가다",
        "explanation": "'You should go to the dentist today'(오늘 치과에 가다)입니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a terrible headache. A: You should take medicine and get rest.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(심한 두통)에 대한 알맞은 조언은?",
        "options": [
          "야외 운동하기",
          "약을 먹고 휴식을 취하다",
          "늦게까지 깨어있다",
          "찬 음료 마시기"
        ],
        "correctIndex": 1,
        "correctAnswer": "약을 먹고 휴식을 취하다",
        "explanation": "'You should take medicine and get rest'(약을 먹고 휴식을 취하다)입니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a high fever and a cold. A: You should see a doctor right away.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(고열과 감기)에 대한 알맞은 조언은?",
        "options": [
          "즉시 의사 진료를 받다",
          "야외 운동하기",
          "추운 곳에 외출하다",
          "찬 음료 마시기"
        ],
        "correctIndex": 0,
        "correctAnswer": "즉시 의사 진료를 받다",
        "explanation": "'You should see a doctor right away'(즉시 의사 진료를 받다)입니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a bad stomachache. A: You should drink warm water slowly.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(심한 복통)에 대한 알맞은 조언은?",
        "options": [
          "야외 운동하기",
          "따뜻한 물을 천천히 마시다",
          "차가운 아이스크림을 과식하다",
          "찬 음료 마시기"
        ],
        "correctIndex": 1,
        "correctAnswer": "따뜻한 물을 천천히 마시다",
        "explanation": "'You should drink warm water slowly'(따뜻한 물을 천천히 마시다)입니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a painful toothache. A: You should go to the dentist today.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(심한 치통)에 대한 알맞은 조언은?",
        "options": [
          "야외 운동하기",
          "오늘 치과에 가다",
          "딱딱한 사탕을 먹다",
          "찬 음료 마시기"
        ],
        "correctIndex": 1,
        "correctAnswer": "오늘 치과에 가다",
        "explanation": "'You should go to the dentist today'(오늘 치과에 가다)입니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a terrible headache. A: You should take medicine and get rest.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(심한 두통)에 대한 알맞은 조언은?",
        "options": [
          "야외 운동하기",
          "찬 음료 마시기",
          "늦게까지 깨어있다",
          "약을 먹고 휴식을 취하다"
        ],
        "correctIndex": 3,
        "correctAnswer": "약을 먹고 휴식을 취하다",
        "explanation": "'You should take medicine and get rest'(약을 먹고 휴식을 취하다)입니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a high fever and a cold. A: You should see a doctor right away.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(고열과 감기)에 대한 알맞은 조언은?",
        "options": [
          "추운 곳에 외출하다",
          "찬 음료 마시기",
          "즉시 의사 진료를 받다",
          "야외 운동하기"
        ],
        "correctIndex": 2,
        "correctAnswer": "즉시 의사 진료를 받다",
        "explanation": "'You should see a doctor right away'(즉시 의사 진료를 받다)입니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a bad stomachache. A: You should drink warm water slowly.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(심한 복통)에 대한 알맞은 조언은?",
        "options": [
          "따뜻한 물을 천천히 마시다",
          "차가운 아이스크림을 과식하다",
          "찬 음료 마시기",
          "야외 운동하기"
        ],
        "correctIndex": 0,
        "correctAnswer": "따뜻한 물을 천천히 마시다",
        "explanation": "'You should drink warm water slowly'(따뜻한 물을 천천히 마시다)입니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a painful toothache. A: You should go to the dentist today.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(심한 치통)에 대한 알맞은 조언은?",
        "options": [
          "딱딱한 사탕을 먹다",
          "오늘 치과에 가다",
          "야외 운동하기",
          "찬 음료 마시기"
        ],
        "correctIndex": 1,
        "correctAnswer": "오늘 치과에 가다",
        "explanation": "'You should go to the dentist today'(오늘 치과에 가다)입니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a terrible headache. A: You should take medicine and get rest.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(심한 두통)에 대한 알맞은 조언은?",
        "options": [
          "늦게까지 깨어있다",
          "야외 운동하기",
          "약을 먹고 휴식을 취하다",
          "찬 음료 마시기"
        ],
        "correctIndex": 2,
        "correctAnswer": "약을 먹고 휴식을 취하다",
        "explanation": "'You should take medicine and get rest'(약을 먹고 휴식을 취하다)입니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a high fever and a cold. A: You should see a doctor right away.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(고열과 감기)에 대한 알맞은 조언은?",
        "options": [
          "즉시 의사 진료를 받다",
          "추운 곳에 외출하다",
          "야외 운동하기",
          "찬 음료 마시기"
        ],
        "correctIndex": 0,
        "correctAnswer": "즉시 의사 진료를 받다",
        "explanation": "'You should see a doctor right away'(즉시 의사 진료를 받다)입니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: What is the matter? B: I have a bad stomachache. A: You should drink warm water slowly.",
        "question": "[듣기 · 11단원] 대화를 듣고, 환자의 증상(심한 복통)에 대한 알맞은 조언은?",
        "options": [
          "따뜻한 물을 천천히 마시다",
          "차가운 아이스크림을 과식하다",
          "찬 음료 마시기",
          "야외 운동하기"
        ],
        "correctIndex": 0,
        "correctAnswer": "따뜻한 물을 천천히 마시다",
        "explanation": "'You should drink warm water slowly'(따뜻한 물을 천천히 마시다)입니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loves this headache.",
          "I loving this headache.",
          "I love this beautifully headache.",
          "I love this beautiful headache."
        ],
        "correctIndex": 3,
        "correctAnswer": "I love this beautiful headache.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: What is the matter with you?\nB: ____________________________________",
        "options": [
          "I am in the fifth grade.",
          "Turn right at the bank.",
          "I have a fever and a headache.",
          "It's five o'clock."
        ],
        "correctIndex": 2,
        "correctAnswer": "I have a fever and a headache.",
        "explanation": "안부를 물을 때는 증상을 표현해야 합니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [11단원] 관련 대화 상황",
        "options": [
          "Where is the post office?",
          "We should learn more about 치통 (toothache).",
          "I am eating lunch right now.",
          "What time is it now?"
        ],
        "correctIndex": 1,
        "correctAnswer": "We should learn more about 치통 (toothache).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (열)",
        "options": [
          "stomachache",
          "toothache",
          "headache",
          "fever"
        ],
        "correctIndex": 3,
        "correctAnswer": "fever",
        "explanation": "'열'에 해당하는 영어 단어는 'fever'입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loves this cold.",
          "I loving this cold.",
          "I love this beautifully cold.",
          "I love this beautiful cold."
        ],
        "correctIndex": 3,
        "correctAnswer": "I love this beautiful cold.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: What is the matter with you?\nB: ____________________________________",
        "options": [
          "I have a fever and a headache.",
          "I am in the fifth grade.",
          "Turn right at the bank.",
          "It's five o'clock."
        ],
        "correctIndex": 0,
        "correctAnswer": "I have a fever and a headache.",
        "explanation": "안부를 물을 때는 증상을 표현해야 합니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [11단원] 관련 대화 상황",
        "options": [
          "I am eating lunch right now.",
          "We should learn more about 의사 (doctor).",
          "Where is the post office?",
          "What time is it now?"
        ],
        "correctIndex": 1,
        "correctAnswer": "We should learn more about 의사 (doctor).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (약)",
        "options": [
          "toothache",
          "headache",
          "medicine",
          "stomachache"
        ],
        "correctIndex": 2,
        "correctAnswer": "medicine",
        "explanation": "'약'에 해당하는 영어 단어는 'medicine'입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I love this beautifully rest.",
          "I loving this rest.",
          "I loves this rest.",
          "I love this beautiful rest."
        ],
        "correctIndex": 3,
        "correctAnswer": "I love this beautiful rest.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: What is the matter with you?\nB: ____________________________________",
        "options": [
          "I have a fever and a headache.",
          "I am in the fifth grade.",
          "Turn right at the bank.",
          "It's five o'clock."
        ],
        "correctIndex": 0,
        "correctAnswer": "I have a fever and a headache.",
        "explanation": "안부를 물을 때는 증상을 표현해야 합니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [11단원] 관련 대화 상황",
        "options": [
          "We should learn more about 두통 (headache).",
          "Where is the post office?",
          "I am eating lunch right now.",
          "What time is it now?"
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 두통 (headache).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (복통)",
        "options": [
          "stomachache",
          "headache",
          "toothache",
          "fever"
        ],
        "correctIndex": 0,
        "correctAnswer": "stomachache",
        "explanation": "'복통'에 해당하는 영어 단어는 'stomachache'입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loves this toothache.",
          "I loving this toothache.",
          "I love this beautifully toothache.",
          "I love this beautiful toothache."
        ],
        "correctIndex": 3,
        "correctAnswer": "I love this beautiful toothache.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: What is the matter with you?\nB: ____________________________________",
        "options": [
          "I am in the fifth grade.",
          "Turn right at the bank.",
          "I have a fever and a headache.",
          "It's five o'clock."
        ],
        "correctIndex": 2,
        "correctAnswer": "I have a fever and a headache.",
        "explanation": "안부를 물을 때는 증상을 표현해야 합니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [11단원] 관련 대화 상황",
        "options": [
          "I am eating lunch right now.",
          "We should learn more about 감기 (cold).",
          "Where is the post office?",
          "What time is it now?"
        ],
        "correctIndex": 1,
        "correctAnswer": "We should learn more about 감기 (cold).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (문제, 일)",
        "options": [
          "matter",
          "headache",
          "stomachache",
          "toothache"
        ],
        "correctIndex": 0,
        "correctAnswer": "matter",
        "explanation": "'문제, 일'에 해당하는 영어 단어는 'matter'입니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I love this beautiful doctor.",
          "I loving this doctor.",
          "I love this beautifully doctor.",
          "I loves this doctor."
        ],
        "correctIndex": 0,
        "correctAnswer": "I love this beautiful doctor.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: What is the matter with you?\nB: ____________________________________",
        "options": [
          "I am in the fifth grade.",
          "I have a fever and a headache.",
          "Turn right at the bank.",
          "It's five o'clock."
        ],
        "correctIndex": 1,
        "correctAnswer": "I have a fever and a headache.",
        "explanation": "안부를 물을 때는 증상을 표현해야 합니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [11단원] 관련 대화 상황",
        "options": [
          "We should learn more about 휴식 (rest).",
          "Where is the post office?",
          "What time is it now?",
          "I am eating lunch right now."
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 휴식 (rest).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (치과의사)",
        "options": [
          "toothache",
          "stomachache",
          "dentist",
          "headache"
        ],
        "correctIndex": 2,
        "correctAnswer": "dentist",
        "explanation": "'치과의사'에 해당하는 영어 단어는 'dentist'입니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loves this headache.",
          "I love this beautiful headache.",
          "I love this beautifully headache.",
          "I loving this headache."
        ],
        "correctIndex": 1,
        "correctAnswer": "I love this beautiful headache.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: What is the matter with you?\nB: ____________________________________",
        "options": [
          "I have a fever and a headache.",
          "I am in the fifth grade.",
          "Turn right at the bank.",
          "It's five o'clock."
        ],
        "correctIndex": 0,
        "correctAnswer": "I have a fever and a headache.",
        "explanation": "안부를 물을 때는 증상을 표현해야 합니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [11단원] 관련 대화 상황",
        "options": [
          "We should learn more about 치통 (toothache).",
          "Where is the post office?",
          "I am eating lunch right now.",
          "What time is it now?"
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 치통 (toothache).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (열)",
        "options": [
          "toothache",
          "fever",
          "headache",
          "stomachache"
        ],
        "correctIndex": 1,
        "correctAnswer": "fever",
        "explanation": "'열'에 해당하는 영어 단어는 'fever'입니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loving this cold.",
          "I love this beautifully cold.",
          "I love this beautiful cold.",
          "I loves this cold."
        ],
        "correctIndex": 2,
        "correctAnswer": "I love this beautiful cold.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: What is the matter with you?\nB: ____________________________________",
        "options": [
          "I have a fever and a headache.",
          "I am in the fifth grade.",
          "Turn right at the bank.",
          "It's five o'clock."
        ],
        "correctIndex": 0,
        "correctAnswer": "I have a fever and a headache.",
        "explanation": "안부를 물을 때는 증상을 표현해야 합니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [11단원] 관련 대화 상황",
        "options": [
          "Where is the post office?",
          "We should learn more about 의사 (doctor).",
          "What time is it now?",
          "I am eating lunch right now."
        ],
        "correctIndex": 1,
        "correctAnswer": "We should learn more about 의사 (doctor).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (약)",
        "options": [
          "stomachache",
          "headache",
          "toothache",
          "medicine"
        ],
        "correctIndex": 3,
        "correctAnswer": "medicine",
        "explanation": "'약'에 해당하는 영어 단어는 'medicine'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loving this rest.",
          "I love this beautifully rest.",
          "I love this beautiful rest.",
          "I loves this rest."
        ],
        "correctIndex": 2,
        "correctAnswer": "I love this beautiful rest.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: What is the matter with you?\nB: ____________________________________",
        "options": [
          "It's five o'clock.",
          "I have a fever and a headache.",
          "Turn right at the bank.",
          "I am in the fifth grade."
        ],
        "correctIndex": 1,
        "correctAnswer": "I have a fever and a headache.",
        "explanation": "안부를 물을 때는 증상을 표현해야 합니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [11단원] 관련 대화 상황",
        "options": [
          "We should learn more about 두통 (headache).",
          "Where is the post office?",
          "What time is it now?",
          "I am eating lunch right now."
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 두통 (headache).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (복통)",
        "options": [
          "toothache",
          "fever",
          "stomachache",
          "headache"
        ],
        "correctIndex": 2,
        "correctAnswer": "stomachache",
        "explanation": "'복통'에 해당하는 영어 단어는 'stomachache'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "의사소통 표준 문장",
        "options": [
          "I loves this toothache.",
          "I love this beautiful toothache.",
          "I love this beautifully toothache.",
          "I loving this toothache."
        ],
        "correctIndex": 1,
        "correctAnswer": "I love this beautiful toothache.",
        "explanation": "주어 I 뒤의 올바른 현재형 동사는 love입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: What is the matter with you?\nB: ____________________________________",
        "options": [
          "I have a fever and a headache.",
          "I am in the fifth grade.",
          "Turn right at the bank.",
          "It's five o'clock."
        ],
        "correctIndex": 0,
        "correctAnswer": "I have a fever and a headache.",
        "explanation": "안부를 물을 때는 증상을 표현해야 합니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 11단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [11단원] 관련 대화 상황",
        "options": [
          "I am eating lunch right now.",
          "What time is it now?",
          "Where is the post office?",
          "We should learn more about 감기 (cold)."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should learn more about 감기 (cold).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 11단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"두통\" [힌트: h______e]",
        "correctAnswer": "headache",
        "explanation": "'두통'은(는) 영어로 'headache'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 11단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"복통\" [힌트: s_________e]",
        "correctAnswer": "stomachache",
        "explanation": "'복통'은(는) 영어로 'stomachache'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 11단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"치통\" [힌트: t_______e]",
        "correctAnswer": "toothache",
        "explanation": "'치통'은(는) 영어로 'toothache'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 11단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"열\" [힌트: f___r]",
        "correctAnswer": "fever",
        "explanation": "'열'은(는) 영어로 'fever'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 11단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"감기\" [힌트: c__d]",
        "correctAnswer": "cold",
        "explanation": "'감기'은(는) 영어로 'cold'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 11단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"문제, 일\" [힌트: m____r]",
        "correctAnswer": "matter",
        "explanation": "'문제, 일'은(는) 영어로 'matter'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 11단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"의사\" [힌트: d____r]",
        "correctAnswer": "doctor",
        "explanation": "'의사'은(는) 영어로 'doctor'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 11단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"약\" [힌트: m______e]",
        "correctAnswer": "medicine",
        "explanation": "'약'은(는) 영어로 'medicine'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 11단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"휴식\" [힌트: r__t]",
        "correctAnswer": "rest",
        "explanation": "'휴식'은(는) 영어로 'rest'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 11단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"치과의사\" [힌트: d_____t]",
        "correctAnswer": "dentist",
        "explanation": "'치과의사'은(는) 영어로 'dentist'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 약을 먹고 휴식을 취하다해야 해.",
        "chips": [
          "and",
          ".",
          "medicine",
          "take",
          "get",
          "should",
          "You",
          "rest"
        ],
        "correctAnswer": "You should take medicine and get rest.",
        "explanation": "You should take medicine and get rest. [너는 약을 먹고 휴식을 취하다해야 해.]"
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 즉시 의사 진료를 받다해야 해.",
        "chips": [
          "away",
          "right",
          "doctor",
          "a",
          "see",
          "should",
          ".",
          "You"
        ],
        "correctAnswer": "You should see a doctor right away.",
        "explanation": "You should see a doctor right away. [너는 즉시 의사 진료를 받다해야 해.]"
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 따뜻한 물을 천천히 마시다해야 해.",
        "chips": [
          "slowly",
          "You",
          ".",
          "water",
          "warm",
          "should",
          "drink"
        ],
        "correctAnswer": "You should drink warm water slowly.",
        "explanation": "You should drink warm water slowly. [너는 따뜻한 물을 천천히 마시다해야 해.]"
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 오늘 치과에 가다해야 해.",
        "chips": [
          "to",
          "go",
          "dentist",
          "the",
          "should",
          "You",
          ".",
          "today"
        ],
        "correctAnswer": "You should go to the dentist today.",
        "explanation": "You should go to the dentist today. [너는 오늘 치과에 가다해야 해.]"
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 약을 먹고 휴식을 취하다해야 해.",
        "chips": [
          "get",
          "take",
          "You",
          "rest",
          "medicine",
          "and",
          ".",
          "should"
        ],
        "correctAnswer": "You should take medicine and get rest.",
        "explanation": "You should take medicine and get rest. [너는 약을 먹고 휴식을 취하다해야 해.]"
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 즉시 의사 진료를 받다해야 해.",
        "chips": [
          "see",
          "a",
          "away",
          ".",
          "right",
          "should",
          "You",
          "doctor"
        ],
        "correctAnswer": "You should see a doctor right away.",
        "explanation": "You should see a doctor right away. [너는 즉시 의사 진료를 받다해야 해.]"
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 따뜻한 물을 천천히 마시다해야 해.",
        "chips": [
          "should",
          "You",
          "drink",
          "water",
          "warm",
          ".",
          "slowly"
        ],
        "correctAnswer": "You should drink warm water slowly.",
        "explanation": "You should drink warm water slowly. [너는 따뜻한 물을 천천히 마시다해야 해.]"
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 오늘 치과에 가다해야 해.",
        "chips": [
          "to",
          "should",
          "the",
          "You",
          "go",
          "dentist",
          ".",
          "today"
        ],
        "correctAnswer": "You should go to the dentist today.",
        "explanation": "You should go to the dentist today. [너는 오늘 치과에 가다해야 해.]"
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 약을 먹고 휴식을 취하다해야 해.",
        "chips": [
          "You",
          ".",
          "medicine",
          "and",
          "should",
          "take",
          "rest",
          "get"
        ],
        "correctAnswer": "You should take medicine and get rest.",
        "explanation": "You should take medicine and get rest. [너는 약을 먹고 휴식을 취하다해야 해.]"
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 즉시 의사 진료를 받다해야 해.",
        "chips": [
          "right",
          "You",
          "should",
          "a",
          "see",
          "doctor",
          "away",
          "."
        ],
        "correctAnswer": "You should see a doctor right away.",
        "explanation": "You should see a doctor right away. [너는 즉시 의사 진료를 받다해야 해.]"
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 따뜻한 물을 천천히 마시다해야 해.",
        "chips": [
          "should",
          "You",
          "drink",
          "warm",
          ".",
          "water",
          "slowly"
        ],
        "correctAnswer": "You should drink warm water slowly.",
        "explanation": "You should drink warm water slowly. [너는 따뜻한 물을 천천히 마시다해야 해.]"
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 오늘 치과에 가다해야 해.",
        "chips": [
          "You",
          "should",
          ".",
          "go",
          "the",
          "dentist",
          "to",
          "today"
        ],
        "correctAnswer": "You should go to the dentist today.",
        "explanation": "You should go to the dentist today. [너는 오늘 치과에 가다해야 해.]"
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 약을 먹고 휴식을 취하다해야 해.",
        "chips": [
          ".",
          "and",
          "take",
          "should",
          "medicine",
          "get",
          "You",
          "rest"
        ],
        "correctAnswer": "You should take medicine and get rest.",
        "explanation": "You should take medicine and get rest. [너는 약을 먹고 휴식을 취하다해야 해.]"
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 즉시 의사 진료를 받다해야 해.",
        "chips": [
          "away",
          "see",
          "doctor",
          "a",
          "right",
          "should",
          ".",
          "You"
        ],
        "correctAnswer": "You should see a doctor right away.",
        "explanation": "You should see a doctor right away. [너는 즉시 의사 진료를 받다해야 해.]"
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "너는 따뜻한 물을 천천히 마시다해야 해.",
        "chips": [
          "should",
          "drink",
          "You",
          ".",
          "water",
          "warm",
          "slowly"
        ],
        "correctAnswer": "You should drink warm water slowly.",
        "explanation": "You should drink warm water slowly. [너는 따뜻한 물을 천천히 마시다해야 해.]"
      },
      {
        "id": 96,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 11단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 우리는 에너지를 절약하고 지구를 보호해야 해.",
        "chips": [
          "and",
          "save",
          "Earth",
          "should",
          "We",
          "protect",
          "the",
          ".",
          "energy"
        ],
        "correctAnswer": "We should save energy and protect the Earth.",
        "explanation": "We should save energy and protect the Earth. [우리는 에너지를 절약하고 지구를 보호해야 해.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 97,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 11단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 내가 가장 좋아하는 계절은 꽃이 피는 봄이야.",
        "chips": [
          "bloom",
          "My",
          "favorite",
          "is",
          "spring",
          "flowers",
          "season",
          "because",
          "."
        ],
        "correctAnswer": "My favorite season is spring because flowers bloom.",
        "explanation": "My favorite season is spring because flowers bloom. [내가 가장 좋아하는 계절은 꽃이 피는 봄이야.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 98,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 11단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 두 블록 직진해서 모퉁이에서 좌회전하세요.",
        "chips": [
          "turn",
          "blocks",
          "left",
          "corner",
          "two",
          "the",
          "straight",
          ".",
          "Go",
          "at",
          "and"
        ],
        "correctAnswer": "Go straight two blocks and turn left at the corner.",
        "explanation": "Go straight two blocks and turn left at the corner. [두 블록 직진해서 모퉁이에서 좌회전하세요.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 99,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 11단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 너는 의사 진료를 받고 약을 먹어야 해.",
        "chips": [
          "and",
          "should",
          "see",
          "You",
          ".",
          "a",
          "doctor",
          "medicine",
          "take"
        ],
        "correctAnswer": "You should see a doctor and take medicine.",
        "explanation": "You should see a doctor and take medicine. [너는 의사 진료를 받고 약을 먹어야 해.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 11단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 우리 이번 주 토요일에 함께 공원에 가는 게 어때?",
        "chips": [
          "go",
          "park",
          "Saturday",
          "don't",
          "together",
          "?",
          "the",
          "Why",
          "we",
          "this",
          "to"
        ],
        "correctAnswer": "Why don't we go to the park together this Saturday?",
        "explanation": "Why don't we go to the park together this Saturday? [우리 이번 주 토요일에 함께 공원에 가는 게 어때?] 축하합니다! 골든벨 완주! 🔔"
      }
    ]
  },
  "6G_L12": {
    "name": "12단원: 제안하기와 여가 활동 (Why don't we go to the park?)",
    "grade": 6,
    "theme": "Making Suggestions & Free Time",
    "totalQuestions": 100,
    "questions": [
      {
        "id": 1,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Why don't we go to the amusement park this Saturday at ten? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "이번 주 토요일 10시에 놀이공원에 가다",
          "다음 달에 영화 보기",
          "집에서 조용히 공부하기",
          "혼자서 산책하기"
        ],
        "correctIndex": 0,
        "correctAnswer": "이번 주 토요일 10시에 놀이공원에 가다",
        "explanation": "'Why don't we go to the amusement park'(놀이공원에 가다)입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Why don't we play badminton together after school in the gym? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "다음 달에 영화 보기",
          "방과 후 체육관에서 함께 배드민턴을 치다",
          "혼자서 산책하기",
          "집에서 조용히 공부하기"
        ],
        "correctIndex": 1,
        "correctAnswer": "방과 후 체육관에서 함께 배드민턴을 치다",
        "explanation": "'Why don't we play badminton together'(함께 배드민턴을 치다)입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Why don't we ride bicycles along the river this Sunday afternoon? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "집에서 조용히 공부하기",
          "혼자서 산책하기",
          "다음 달에 영화 보기",
          "이번 주 일요일 오후에 강변을 따라 자전거를 타다"
        ],
        "correctIndex": 3,
        "correctAnswer": "이번 주 일요일 오후에 강변을 따라 자전거를 타다",
        "explanation": "'Why don't we ride bicycles along the river'(강변을 따라 자전거를 타다)입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Why don't we watch an animated movie tomorrow at two? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "혼자서 산책하기",
          "다음 달에 영화 보기",
          "내일 2시에 만화영화를 보다",
          "집에서 조용히 공부하기"
        ],
        "correctIndex": 2,
        "correctAnswer": "내일 2시에 만화영화를 보다",
        "explanation": "'Why don't we watch an animated movie'(만화영화를 보다)입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Why don't we go to the amusement park this Saturday at ten? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "혼자서 산책하기",
          "집에서 조용히 공부하기",
          "다음 달에 영화 보기",
          "이번 주 토요일 10시에 놀이공원에 가다"
        ],
        "correctIndex": 3,
        "correctAnswer": "이번 주 토요일 10시에 놀이공원에 가다",
        "explanation": "'Why don't we go to the amusement park'(놀이공원에 가다)입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Why don't we play badminton together after school in the gym? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "혼자서 산책하기",
          "다음 달에 영화 보기",
          "방과 후 체육관에서 함께 배드민턴을 치다",
          "집에서 조용히 공부하기"
        ],
        "correctIndex": 2,
        "correctAnswer": "방과 후 체육관에서 함께 배드민턴을 치다",
        "explanation": "'Why don't we play badminton together'(함께 배드민턴을 치다)입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Why don't we ride bicycles along the river this Sunday afternoon? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "이번 주 일요일 오후에 강변을 따라 자전거를 타다",
          "다음 달에 영화 보기",
          "혼자서 산책하기",
          "집에서 조용히 공부하기"
        ],
        "correctIndex": 0,
        "correctAnswer": "이번 주 일요일 오후에 강변을 따라 자전거를 타다",
        "explanation": "'Why don't we ride bicycles along the river'(강변을 따라 자전거를 타다)입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Why don't we watch an animated movie tomorrow at two? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "혼자서 산책하기",
          "다음 달에 영화 보기",
          "내일 2시에 만화영화를 보다",
          "집에서 조용히 공부하기"
        ],
        "correctIndex": 2,
        "correctAnswer": "내일 2시에 만화영화를 보다",
        "explanation": "'Why don't we watch an animated movie'(만화영화를 보다)입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Why don't we go to the amusement park this Saturday at ten? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "다음 달에 영화 보기",
          "혼자서 산책하기",
          "이번 주 토요일 10시에 놀이공원에 가다",
          "집에서 조용히 공부하기"
        ],
        "correctIndex": 2,
        "correctAnswer": "이번 주 토요일 10시에 놀이공원에 가다",
        "explanation": "'Why don't we go to the amusement park'(놀이공원에 가다)입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "A: Why don't we play badminton together after school in the gym? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "방과 후 체육관에서 함께 배드민턴을 치다",
          "다음 달에 영화 보기",
          "집에서 조용히 공부하기",
          "혼자서 산책하기"
        ],
        "correctIndex": 0,
        "correctAnswer": "방과 후 체육관에서 함께 배드민턴을 치다",
        "explanation": "'Why don't we play badminton together'(함께 배드민턴을 치다)입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why don't we ride bicycles along the river this Sunday afternoon? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "다음 달에 영화 보기",
          "이번 주 일요일 오후에 강변을 따라 자전거를 타다",
          "혼자서 산책하기",
          "집에서 조용히 공부하기"
        ],
        "correctIndex": 1,
        "correctAnswer": "이번 주 일요일 오후에 강변을 따라 자전거를 타다",
        "explanation": "'Why don't we ride bicycles along the river'(강변을 따라 자전거를 타다)입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why don't we watch an animated movie tomorrow at two? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "집에서 조용히 공부하기",
          "혼자서 산책하기",
          "다음 달에 영화 보기",
          "내일 2시에 만화영화를 보다"
        ],
        "correctIndex": 3,
        "correctAnswer": "내일 2시에 만화영화를 보다",
        "explanation": "'Why don't we watch an animated movie'(만화영화를 보다)입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why don't we go to the amusement park this Saturday at ten? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "이번 주 토요일 10시에 놀이공원에 가다",
          "다음 달에 영화 보기",
          "집에서 조용히 공부하기",
          "혼자서 산책하기"
        ],
        "correctIndex": 0,
        "correctAnswer": "이번 주 토요일 10시에 놀이공원에 가다",
        "explanation": "'Why don't we go to the amusement park'(놀이공원에 가다)입니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why don't we play badminton together after school in the gym? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "혼자서 산책하기",
          "집에서 조용히 공부하기",
          "다음 달에 영화 보기",
          "방과 후 체육관에서 함께 배드민턴을 치다"
        ],
        "correctIndex": 3,
        "correctAnswer": "방과 후 체육관에서 함께 배드민턴을 치다",
        "explanation": "'Why don't we play badminton together'(함께 배드민턴을 치다)입니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why don't we ride bicycles along the river this Sunday afternoon? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "이번 주 일요일 오후에 강변을 따라 자전거를 타다",
          "다음 달에 영화 보기",
          "혼자서 산책하기",
          "집에서 조용히 공부하기"
        ],
        "correctIndex": 0,
        "correctAnswer": "이번 주 일요일 오후에 강변을 따라 자전거를 타다",
        "explanation": "'Why don't we ride bicycles along the river'(강변을 따라 자전거를 타다)입니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why don't we watch an animated movie tomorrow at two? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "내일 2시에 만화영화를 보다",
          "혼자서 산책하기",
          "다음 달에 영화 보기",
          "집에서 조용히 공부하기"
        ],
        "correctIndex": 0,
        "correctAnswer": "내일 2시에 만화영화를 보다",
        "explanation": "'Why don't we watch an animated movie'(만화영화를 보다)입니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why don't we go to the amusement park this Saturday at ten? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "이번 주 토요일 10시에 놀이공원에 가다",
          "다음 달에 영화 보기",
          "집에서 조용히 공부하기",
          "혼자서 산책하기"
        ],
        "correctIndex": 0,
        "correctAnswer": "이번 주 토요일 10시에 놀이공원에 가다",
        "explanation": "'Why don't we go to the amusement park'(놀이공원에 가다)입니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why don't we play badminton together after school in the gym? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "혼자서 산책하기",
          "방과 후 체육관에서 함께 배드민턴을 치다",
          "다음 달에 영화 보기",
          "집에서 조용히 공부하기"
        ],
        "correctIndex": 1,
        "correctAnswer": "방과 후 체육관에서 함께 배드민턴을 치다",
        "explanation": "'Why don't we play badminton together'(함께 배드민턴을 치다)입니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why don't we ride bicycles along the river this Sunday afternoon? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "이번 주 일요일 오후에 강변을 따라 자전거를 타다",
          "다음 달에 영화 보기",
          "혼자서 산책하기",
          "집에서 조용히 공부하기"
        ],
        "correctIndex": 0,
        "correctAnswer": "이번 주 일요일 오후에 강변을 따라 자전거를 타다",
        "explanation": "'Why don't we ride bicycles along the river'(강변을 따라 자전거를 타다)입니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why don't we watch an animated movie tomorrow at two? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "내일 2시에 만화영화를 보다",
          "다음 달에 영화 보기",
          "집에서 조용히 공부하기",
          "혼자서 산책하기"
        ],
        "correctIndex": 0,
        "correctAnswer": "내일 2시에 만화영화를 보다",
        "explanation": "'Why don't we watch an animated movie'(만화영화를 보다)입니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why don't we go to the amusement park this Saturday at ten? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "집에서 조용히 공부하기",
          "다음 달에 영화 보기",
          "이번 주 토요일 10시에 놀이공원에 가다",
          "혼자서 산책하기"
        ],
        "correctIndex": 2,
        "correctAnswer": "이번 주 토요일 10시에 놀이공원에 가다",
        "explanation": "'Why don't we go to the amusement park'(놀이공원에 가다)입니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why don't we play badminton together after school in the gym? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "혼자서 산책하기",
          "다음 달에 영화 보기",
          "방과 후 체육관에서 함께 배드민턴을 치다",
          "집에서 조용히 공부하기"
        ],
        "correctIndex": 2,
        "correctAnswer": "방과 후 체육관에서 함께 배드민턴을 치다",
        "explanation": "'Why don't we play badminton together'(함께 배드민턴을 치다)입니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why don't we ride bicycles along the river this Sunday afternoon? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "혼자서 산책하기",
          "이번 주 일요일 오후에 강변을 따라 자전거를 타다",
          "다음 달에 영화 보기",
          "집에서 조용히 공부하기"
        ],
        "correctIndex": 1,
        "correctAnswer": "이번 주 일요일 오후에 강변을 따라 자전거를 타다",
        "explanation": "'Why don't we ride bicycles along the river'(강변을 따라 자전거를 타다)입니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why don't we watch an animated movie tomorrow at two? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "내일 2시에 만화영화를 보다",
          "다음 달에 영화 보기",
          "집에서 조용히 공부하기",
          "혼자서 산책하기"
        ],
        "correctIndex": 0,
        "correctAnswer": "내일 2시에 만화영화를 보다",
        "explanation": "'Why don't we watch an animated movie'(만화영화를 보다)입니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "A: Why don't we go to the amusement park this Saturday at ten? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "이번 주 토요일 10시에 놀이공원에 가다",
          "다음 달에 영화 보기",
          "집에서 조용히 공부하기",
          "혼자서 산책하기"
        ],
        "correctIndex": 0,
        "correctAnswer": "이번 주 토요일 10시에 놀이공원에 가다",
        "explanation": "'Why don't we go to the amusement park'(놀이공원에 가다)입니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Why don't we play badminton together after school in the gym? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "집에서 조용히 공부하기",
          "혼자서 산책하기",
          "다음 달에 영화 보기",
          "방과 후 체육관에서 함께 배드민턴을 치다"
        ],
        "correctIndex": 3,
        "correctAnswer": "방과 후 체육관에서 함께 배드민턴을 치다",
        "explanation": "'Why don't we play badminton together'(함께 배드민턴을 치다)입니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Why don't we ride bicycles along the river this Sunday afternoon? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "집에서 조용히 공부하기",
          "다음 달에 영화 보기",
          "이번 주 일요일 오후에 강변을 따라 자전거를 타다",
          "혼자서 산책하기"
        ],
        "correctIndex": 2,
        "correctAnswer": "이번 주 일요일 오후에 강변을 따라 자전거를 타다",
        "explanation": "'Why don't we ride bicycles along the river'(강변을 따라 자전거를 타다)입니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Why don't we watch an animated movie tomorrow at two? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "다음 달에 영화 보기",
          "내일 2시에 만화영화를 보다",
          "혼자서 산책하기",
          "집에서 조용히 공부하기"
        ],
        "correctIndex": 1,
        "correctAnswer": "내일 2시에 만화영화를 보다",
        "explanation": "'Why don't we watch an animated movie'(만화영화를 보다)입니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Why don't we go to the amusement park this Saturday at ten? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "집에서 조용히 공부하기",
          "혼자서 산책하기",
          "이번 주 토요일 10시에 놀이공원에 가다",
          "다음 달에 영화 보기"
        ],
        "correctIndex": 2,
        "correctAnswer": "이번 주 토요일 10시에 놀이공원에 가다",
        "explanation": "'Why don't we go to the amusement park'(놀이공원에 가다)입니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Why don't we play badminton together after school in the gym? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "혼자서 산책하기",
          "방과 후 체육관에서 함께 배드민턴을 치다",
          "다음 달에 영화 보기",
          "집에서 조용히 공부하기"
        ],
        "correctIndex": 1,
        "correctAnswer": "방과 후 체육관에서 함께 배드민턴을 치다",
        "explanation": "'Why don't we play badminton together'(함께 배드민턴을 치다)입니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Why don't we ride bicycles along the river this Sunday afternoon? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "혼자서 산책하기",
          "다음 달에 영화 보기",
          "집에서 조용히 공부하기",
          "이번 주 일요일 오후에 강변을 따라 자전거를 타다"
        ],
        "correctIndex": 3,
        "correctAnswer": "이번 주 일요일 오후에 강변을 따라 자전거를 타다",
        "explanation": "'Why don't we ride bicycles along the river'(강변을 따라 자전거를 타다)입니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Why don't we watch an animated movie tomorrow at two? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "집에서 조용히 공부하기",
          "혼자서 산책하기",
          "다음 달에 영화 보기",
          "내일 2시에 만화영화를 보다"
        ],
        "correctIndex": 3,
        "correctAnswer": "내일 2시에 만화영화를 보다",
        "explanation": "'Why don't we watch an animated movie'(만화영화를 보다)입니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Why don't we go to the amusement park this Saturday at ten? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "혼자서 산책하기",
          "이번 주 토요일 10시에 놀이공원에 가다",
          "다음 달에 영화 보기",
          "집에서 조용히 공부하기"
        ],
        "correctIndex": 1,
        "correctAnswer": "이번 주 토요일 10시에 놀이공원에 가다",
        "explanation": "'Why don't we go to the amusement park'(놀이공원에 가다)입니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Why don't we play badminton together after school in the gym? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "혼자서 산책하기",
          "방과 후 체육관에서 함께 배드민턴을 치다",
          "집에서 조용히 공부하기",
          "다음 달에 영화 보기"
        ],
        "correctIndex": 1,
        "correctAnswer": "방과 후 체육관에서 함께 배드민턴을 치다",
        "explanation": "'Why don't we play badminton together'(함께 배드민턴을 치다)입니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "A: Why don't we ride bicycles along the river this Sunday afternoon? B: Sounds like a wonderful idea! Let's do that.",
        "question": "[듣기 · 12단원] 제안 대화를 듣고, A가 제안한 활동과 시간으로 알맞은 것은?",
        "options": [
          "다음 달에 영화 보기",
          "혼자서 산책하기",
          "이번 주 일요일 오후에 강변을 따라 자전거를 타다",
          "집에서 조용히 공부하기"
        ],
        "correctIndex": 2,
        "correctAnswer": "이번 주 일요일 오후에 강변을 따라 자전거를 타다",
        "explanation": "'Why don't we ride bicycles along the river'(강변을 따라 자전거를 타다)입니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "제안 표현의 동사 형태",
        "options": [
          "Why don't we played soccer together?",
          "Why don't we to play soccer together?",
          "Why don't we playing soccer together?",
          "Why don't we play soccer together?"
        ],
        "correctIndex": 3,
        "correctAnswer": "Why don't we play soccer together?",
        "explanation": "Why don't we 뒤에는 동사원형이 옵니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Because it's hot.",
          "Go straight one block.",
          "I am a student.",
          "Sounds like a wonderful idea!"
        ],
        "correctIndex": 3,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [12단원] 관련 대화 상황",
        "options": [
          "Where is the post office?",
          "I am eating lunch right now.",
          "What time is it now?",
          "We should learn more about 생각, 아이디어 (idea)."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should learn more about 생각, 아이디어 (idea).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (멋진)",
        "options": [
          "idea",
          "park",
          "together",
          "wonderful"
        ],
        "correctIndex": 3,
        "correctAnswer": "wonderful",
        "explanation": "'멋진'에 해당하는 영어 단어는 'wonderful'입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "제안 표현의 동사 형태",
        "options": [
          "Why don't we play soccer together?",
          "Why don't we playing soccer together?",
          "Why don't we to play soccer together?",
          "Why don't we played soccer together?"
        ],
        "correctIndex": 0,
        "correctAnswer": "Why don't we play soccer together?",
        "explanation": "Why don't we 뒤에는 동사원형이 옵니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Because it's hot.",
          "Go straight one block.",
          "I am a student.",
          "Sounds like a wonderful idea!"
        ],
        "correctIndex": 3,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [12단원] 관련 대화 상황",
        "options": [
          "Where is the post office?",
          "We should learn more about 영화 (movie).",
          "I am eating lunch right now.",
          "What time is it now?"
        ],
        "correctIndex": 1,
        "correctAnswer": "We should learn more about 영화 (movie).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (내일)",
        "options": [
          "park",
          "together",
          "tomorrow",
          "idea"
        ],
        "correctIndex": 2,
        "correctAnswer": "tomorrow",
        "explanation": "'내일'에 해당하는 영어 단어는 'tomorrow'입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "제안 표현의 동사 형태",
        "options": [
          "Why don't we played soccer together?",
          "Why don't we to play soccer together?",
          "Why don't we playing soccer together?",
          "Why don't we play soccer together?"
        ],
        "correctIndex": 3,
        "correctAnswer": "Why don't we play soccer together?",
        "explanation": "Why don't we 뒤에는 동사원형이 옵니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Because it's hot.",
          "Go straight one block.",
          "I am a student.",
          "Sounds like a wonderful idea!"
        ],
        "correctIndex": 3,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [12단원] 관련 대화 상황",
        "options": [
          "Where is the post office?",
          "We should learn more about 함께 (together).",
          "What time is it now?",
          "I am eating lunch right now."
        ],
        "correctIndex": 1,
        "correctAnswer": "We should learn more about 함께 (together).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (공원)",
        "options": [
          "idea",
          "park",
          "wonderful",
          "together"
        ],
        "correctIndex": 1,
        "correctAnswer": "park",
        "explanation": "'공원'에 해당하는 영어 단어는 'park'입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "제안 표현의 동사 형태",
        "options": [
          "Why don't we played soccer together?",
          "Why don't we playing soccer together?",
          "Why don't we play soccer together?",
          "Why don't we to play soccer together?"
        ],
        "correctIndex": 2,
        "correctAnswer": "Why don't we play soccer together?",
        "explanation": "Why don't we 뒤에는 동사원형이 옵니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Go straight one block.",
          "Sounds like a wonderful idea!",
          "Because it's hot.",
          "I am a student."
        ],
        "correctIndex": 1,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [12단원] 관련 대화 상황",
        "options": [
          "I am eating lunch right now.",
          "We should learn more about 배드민턴 (badminton).",
          "Where is the post office?",
          "What time is it now?"
        ],
        "correctIndex": 1,
        "correctAnswer": "We should learn more about 배드민턴 (badminton).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (들리다)",
        "options": [
          "together",
          "idea",
          "sound",
          "park"
        ],
        "correctIndex": 2,
        "correctAnswer": "sound",
        "explanation": "'들리다'에 해당하는 영어 단어는 'sound'입니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "제안 표현의 동사 형태",
        "options": [
          "Why don't we play soccer together?",
          "Why don't we played soccer together?",
          "Why don't we playing soccer together?",
          "Why don't we to play soccer together?"
        ],
        "correctIndex": 0,
        "correctAnswer": "Why don't we play soccer together?",
        "explanation": "Why don't we 뒤에는 동사원형이 옵니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Sounds like a wonderful idea!",
          "I am a student.",
          "Go straight one block.",
          "Because it's hot."
        ],
        "correctIndex": 0,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [12단원] 관련 대화 상황",
        "options": [
          "What time is it now?",
          "Where is the post office?",
          "I am eating lunch right now.",
          "We should learn more about 주말 (weekend)."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should learn more about 주말 (weekend).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (바쁜)",
        "options": [
          "busy",
          "together",
          "park",
          "idea"
        ],
        "correctIndex": 0,
        "correctAnswer": "busy",
        "explanation": "'바쁜'에 해당하는 영어 단어는 'busy'입니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "제안 표현의 동사 형태",
        "options": [
          "Why don't we play soccer together?",
          "Why don't we played soccer together?",
          "Why don't we playing soccer together?",
          "Why don't we to play soccer together?"
        ],
        "correctIndex": 0,
        "correctAnswer": "Why don't we play soccer together?",
        "explanation": "Why don't we 뒤에는 동사원형이 옵니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Because it's hot.",
          "Go straight one block.",
          "I am a student.",
          "Sounds like a wonderful idea!"
        ],
        "correctIndex": 3,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [12단원] 관련 대화 상황",
        "options": [
          "What time is it now?",
          "I am eating lunch right now.",
          "We should learn more about 생각, 아이디어 (idea).",
          "Where is the post office?"
        ],
        "correctIndex": 2,
        "correctAnswer": "We should learn more about 생각, 아이디어 (idea).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (멋진)",
        "options": [
          "wonderful",
          "together",
          "park",
          "idea"
        ],
        "correctIndex": 0,
        "correctAnswer": "wonderful",
        "explanation": "'멋진'에 해당하는 영어 단어는 'wonderful'입니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "제안 표현의 동사 형태",
        "options": [
          "Why don't we play soccer together?",
          "Why don't we playing soccer together?",
          "Why don't we played soccer together?",
          "Why don't we to play soccer together?"
        ],
        "correctIndex": 0,
        "correctAnswer": "Why don't we play soccer together?",
        "explanation": "Why don't we 뒤에는 동사원형이 옵니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Sounds like a wonderful idea!",
          "I am a student.",
          "Go straight one block.",
          "Because it's hot."
        ],
        "correctIndex": 0,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [12단원] 관련 대화 상황",
        "options": [
          "I am eating lunch right now.",
          "What time is it now?",
          "Where is the post office?",
          "We should learn more about 영화 (movie)."
        ],
        "correctIndex": 3,
        "correctAnswer": "We should learn more about 영화 (movie).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (내일)",
        "options": [
          "tomorrow",
          "together",
          "park",
          "idea"
        ],
        "correctIndex": 0,
        "correctAnswer": "tomorrow",
        "explanation": "'내일'에 해당하는 영어 단어는 'tomorrow'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "제안 표현의 동사 형태",
        "options": [
          "Why don't we play soccer together?",
          "Why don't we played soccer together?",
          "Why don't we to play soccer together?",
          "Why don't we playing soccer together?"
        ],
        "correctIndex": 0,
        "correctAnswer": "Why don't we play soccer together?",
        "explanation": "Why don't we 뒤에는 동사원형이 옵니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Because it's hot.",
          "Go straight one block.",
          "I am a student.",
          "Sounds like a wonderful idea!"
        ],
        "correctIndex": 3,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [12단원] 관련 대화 상황",
        "options": [
          "We should learn more about 함께 (together).",
          "Where is the post office?",
          "What time is it now?",
          "I am eating lunch right now."
        ],
        "correctIndex": 0,
        "correctAnswer": "We should learn more about 함께 (together).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 문장의 빈칸에 들어갈 가장 알맞은 핵심 단어를 고르세요.",
        "subtext": "Please remember the important word: [ ________ ] (공원)",
        "options": [
          "park",
          "together",
          "idea",
          "wonderful"
        ],
        "correctIndex": 0,
        "correctAnswer": "park",
        "explanation": "'공원'에 해당하는 영어 단어는 'park'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 다음 중 어법과 문맥이 가장 자연스럽고 올바른 문장을 고르세요.",
        "subtext": "제안 표현의 동사 형태",
        "options": [
          "Why don't we played soccer together?",
          "Why don't we to play soccer together?",
          "Why don't we playing soccer together?",
          "Why don't we play soccer together?"
        ],
        "correctIndex": 3,
        "correctAnswer": "Why don't we play soccer together?",
        "explanation": "Why don't we 뒤에는 동사원형이 옵니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 다음 대화의 빈칸에 들어갈 가장 자연스러운 응답 문장은?",
        "subtext": "A: Would you like to join us?\nB: ____________________________________",
        "options": [
          "Sounds like a wonderful idea!",
          "I am a student.",
          "Go straight one block.",
          "Because it's hot."
        ],
        "correctIndex": 0,
        "correctAnswer": "Sounds like a wonderful idea!",
        "explanation": "제안에 대한 자연스러운 찬성 응답입니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "question": "[읽기 · 12단원] 다음 상황에서 건넬 가장 알맞은 영어 표현 문장을 고르세요.",
        "subtext": "상황: [12단원] 관련 대화 상황",
        "options": [
          "Where is the post office?",
          "I am eating lunch right now.",
          "We should learn more about 배드민턴 (badminton).",
          "What time is it now?"
        ],
        "correctIndex": 2,
        "correctAnswer": "We should learn more about 배드민턴 (badminton).",
        "explanation": "해당 단원의 핵심 주제 표현입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 12단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"함께\" [힌트: t______r]",
        "correctAnswer": "together",
        "explanation": "'함께'은(는) 영어로 'together'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 12단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"공원\" [힌트: p__k]",
        "correctAnswer": "park",
        "explanation": "'공원'은(는) 영어로 'park'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 12단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"생각, 아이디어\" [힌트: i__a]",
        "correctAnswer": "idea",
        "explanation": "'생각, 아이디어'은(는) 영어로 'idea'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 12단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"멋진\" [힌트: w_______l]",
        "correctAnswer": "wonderful",
        "explanation": "'멋진'은(는) 영어로 'wonderful'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 12단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"배드민턴\" [힌트: b_______n]",
        "correctAnswer": "badminton",
        "explanation": "'배드민턴'은(는) 영어로 'badminton'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 12단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"들리다\" [힌트: s___d]",
        "correctAnswer": "sound",
        "explanation": "'들리다'은(는) 영어로 'sound'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 12단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"영화\" [힌트: m___e]",
        "correctAnswer": "movie",
        "explanation": "'영화'은(는) 영어로 'movie'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 12단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"내일\" [힌트: t______w]",
        "correctAnswer": "tomorrow",
        "explanation": "'내일'은(는) 영어로 'tomorrow'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 12단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"주말\" [힌트: w_____d]",
        "correctAnswer": "weekend",
        "explanation": "'주말'은(는) 영어로 'weekend'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 12단원] 문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
        "subtext": "Remember: \"바쁜\" [힌트: b__y]",
        "correctAnswer": "busy",
        "explanation": "'바쁜'은(는) 영어로 'busy'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "우리 놀이공원에 가다하는 게 어때?",
        "chips": [
          "the",
          "go",
          "we",
          "amusement",
          "to",
          "?",
          "park",
          "Why",
          "don't"
        ],
        "correctAnswer": "Why don't we go to the amusement park?",
        "explanation": "Why don't we go to the amusement park? [우리 놀이공원에 가다하는 게 어때?]"
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "우리 함께 배드민턴을 치다하는 게 어때?",
        "chips": [
          "?",
          "together",
          "play",
          "we",
          "badminton",
          "don't",
          "Why"
        ],
        "correctAnswer": "Why don't we play badminton together?",
        "explanation": "Why don't we play badminton together? [우리 함께 배드민턴을 치다하는 게 어때?]"
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "우리 강변을 따라 자전거를 타다하는 게 어때?",
        "chips": [
          "ride",
          "Why",
          "the",
          "along",
          "don't",
          "river",
          "?",
          "we",
          "bicycles"
        ],
        "correctAnswer": "Why don't we ride bicycles along the river?",
        "explanation": "Why don't we ride bicycles along the river? [우리 강변을 따라 자전거를 타다하는 게 어때?]"
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "우리 만화영화를 보다하는 게 어때?",
        "chips": [
          "don't",
          "?",
          "an",
          "Why",
          "we",
          "animated",
          "watch",
          "movie"
        ],
        "correctAnswer": "Why don't we watch an animated movie?",
        "explanation": "Why don't we watch an animated movie? [우리 만화영화를 보다하는 게 어때?]"
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "우리 놀이공원에 가다하는 게 어때?",
        "chips": [
          "to",
          "?",
          "Why",
          "the",
          "don't",
          "amusement",
          "go",
          "we",
          "park"
        ],
        "correctAnswer": "Why don't we go to the amusement park?",
        "explanation": "Why don't we go to the amusement park? [우리 놀이공원에 가다하는 게 어때?]"
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "우리 함께 배드민턴을 치다하는 게 어때?",
        "chips": [
          "we",
          "Why",
          "together",
          "badminton",
          "don't",
          "play",
          "?"
        ],
        "correctAnswer": "Why don't we play badminton together?",
        "explanation": "Why don't we play badminton together? [우리 함께 배드민턴을 치다하는 게 어때?]"
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "우리 강변을 따라 자전거를 타다하는 게 어때?",
        "chips": [
          "Why",
          "don't",
          "?",
          "along",
          "the",
          "river",
          "bicycles",
          "we",
          "ride"
        ],
        "correctAnswer": "Why don't we ride bicycles along the river?",
        "explanation": "Why don't we ride bicycles along the river? [우리 강변을 따라 자전거를 타다하는 게 어때?]"
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "우리 만화영화를 보다하는 게 어때?",
        "chips": [
          "animated",
          "an",
          "watch",
          "we",
          "?",
          "don't",
          "Why",
          "movie"
        ],
        "correctAnswer": "Why don't we watch an animated movie?",
        "explanation": "Why don't we watch an animated movie? [우리 만화영화를 보다하는 게 어때?]"
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "우리 놀이공원에 가다하는 게 어때?",
        "chips": [
          "to",
          "don't",
          "the",
          "go",
          "?",
          "Why",
          "we",
          "amusement",
          "park"
        ],
        "correctAnswer": "Why don't we go to the amusement park?",
        "explanation": "Why don't we go to the amusement park? [우리 놀이공원에 가다하는 게 어때?]"
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "우리 함께 배드민턴을 치다하는 게 어때?",
        "chips": [
          "we",
          "don't",
          "play",
          "Why",
          "badminton",
          "together",
          "?"
        ],
        "correctAnswer": "Why don't we play badminton together?",
        "explanation": "Why don't we play badminton together? [우리 함께 배드민턴을 치다하는 게 어때?]"
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "우리 강변을 따라 자전거를 타다하는 게 어때?",
        "chips": [
          "the",
          "we",
          "ride",
          "along",
          "bicycles",
          "don't",
          "river",
          "?",
          "Why"
        ],
        "correctAnswer": "Why don't we ride bicycles along the river?",
        "explanation": "Why don't we ride bicycles along the river? [우리 강변을 따라 자전거를 타다하는 게 어때?]"
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "우리 만화영화를 보다하는 게 어때?",
        "chips": [
          "movie",
          "an",
          "animated",
          "watch",
          "we",
          "don't",
          "?",
          "Why"
        ],
        "correctAnswer": "Why don't we watch an animated movie?",
        "explanation": "Why don't we watch an animated movie? [우리 만화영화를 보다하는 게 어때?]"
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "우리 놀이공원에 가다하는 게 어때?",
        "chips": [
          "the",
          "don't",
          "go",
          "Why",
          "park",
          "amusement",
          "to",
          "?",
          "we"
        ],
        "correctAnswer": "Why don't we go to the amusement park?",
        "explanation": "Why don't we go to the amusement park? [우리 놀이공원에 가다하는 게 어때?]"
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "우리 함께 배드민턴을 치다하는 게 어때?",
        "chips": [
          "badminton",
          "don't",
          "?",
          "Why",
          "play",
          "together",
          "we"
        ],
        "correctAnswer": "Why don't we play badminton together?",
        "explanation": "Why don't we play badminton together? [우리 함께 배드민턴을 치다하는 게 어때?]"
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원] 단어 칩을 바르게 배열하여 문장을 완성하세요.",
        "subtext": "우리 강변을 따라 자전거를 타다하는 게 어때?",
        "chips": [
          "don't",
          "?",
          "ride",
          "we",
          "Why",
          "river",
          "bicycles",
          "the",
          "along"
        ],
        "correctAnswer": "Why don't we ride bicycles along the river?",
        "explanation": "Why don't we ride bicycles along the river? [우리 강변을 따라 자전거를 타다하는 게 어때?]"
      },
      {
        "id": 96,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 12단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 우리는 에너지를 절약하고 지구를 보호해야 해.",
        "chips": [
          "the",
          "Earth",
          "We",
          "energy",
          "protect",
          "and",
          "should",
          ".",
          "save"
        ],
        "correctAnswer": "We should save energy and protect the Earth.",
        "explanation": "We should save energy and protect the Earth. [우리는 에너지를 절약하고 지구를 보호해야 해.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 97,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 12단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 내가 가장 좋아하는 계절은 꽃이 피는 봄이야.",
        "chips": [
          "spring",
          "bloom",
          "favorite",
          "is",
          ".",
          "My",
          "because",
          "flowers",
          "season"
        ],
        "correctAnswer": "My favorite season is spring because flowers bloom.",
        "explanation": "My favorite season is spring because flowers bloom. [내가 가장 좋아하는 계절은 꽃이 피는 봄이야.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 98,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 12단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 두 블록 직진해서 모퉁이에서 좌회전하세요.",
        "chips": [
          "at",
          "left",
          "turn",
          "and",
          "blocks",
          ".",
          "two",
          "straight",
          "the",
          "Go",
          "corner"
        ],
        "correctAnswer": "Go straight two blocks and turn left at the corner.",
        "explanation": "Go straight two blocks and turn left at the corner. [두 블록 직진해서 모퉁이에서 좌회전하세요.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 99,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 12단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 너는 의사 진료를 받고 약을 먹어야 해.",
        "chips": [
          "a",
          ".",
          "see",
          "should",
          "doctor",
          "You",
          "and",
          "take",
          "medicine"
        ],
        "correctAnswer": "You should see a doctor and take medicine.",
        "explanation": "You should see a doctor and take medicine. [너는 의사 진료를 받고 약을 먹어야 해.] 축하합니다! 골든벨 완주! 🔔"
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[🔔 영광의 최종 골든벨 · 12단원] 단어 칩을 모두 올바르게 배열하세요!",
        "subtext": "[최종 골든벨] 우리 이번 주 토요일에 함께 공원에 가는 게 어때?",
        "chips": [
          "together",
          "don't",
          "go",
          "Why",
          "?",
          "park",
          "Saturday",
          "this",
          "we",
          "to",
          "the"
        ],
        "correctAnswer": "Why don't we go to the park together this Saturday?",
        "explanation": "Why don't we go to the park together this Saturday? [우리 이번 주 토요일에 함께 공원에 가는 게 어때?] 축하합니다! 골든벨 완주! 🔔"
      }
    ]
  }
};

    // ────────────────────────────────────────────────────────
    // 2. 지도서 대표 엄선 20문제 (고정 표준 세트)
    // ────────────────────────────────────────────────────────
    const MASTER_20_HIGH_LEVEL = [
        {
            id: 1,
            domain: "듣기",
            domainIcon: "🎧",
            difficulty: "★☆☆",
            type: "listening_choice",
            audioText: "A: What is your favorite season? B: My favorite season is spring because flowers bloom.",
            question: "대화를 듣고, B가 봄을 좋아하는 이유로 가장 알맞은 것을 고르세요.",
            options: ["아름다운 꽃들을 볼 수 있어서", "시원한 바람이 불어서", "눈사람을 만들 수 있어서", "바다에서 수영할 수 있어서"],
            correctIndex: 0,
            correctAnswer: "아름다운 꽃들을 볼 수 있어서",
            explanation: "'because flowers bloom'은 아름다운 꽃이 피기 때문입니다."
        },
        {
            id: 2,
            domain: "듣기",
            domainIcon: "🎧",
            difficulty: "★☆☆",
            type: "listening_choice",
            audioText: "A: Hello! What grade are you in? B: I am in the sixth grade.",
            question: "대화를 듣고, 질문에 대한 대답으로 언급된 학년을 고르세요.",
            options: ["6학년", "5학년", "4학년", "3학년"],
            correctIndex: 0,
            correctAnswer: "6학년",
            explanation: "'I am in the sixth grade'는 '나는 6학년이야'라는 뜻입니다."
        },
        {
            id: 3,
            domain: "듣기",
            domainIcon: "🎧",
            difficulty: "★★☆",
            type: "listening_choice",
            audioText: "A: We should save energy for our Earth. Please turn off the lights when leaving.",
            question: "안내 방송을 듣고, 남자가 당부하는 행동으로 가장 알맞은 것은?",
            options: ["나갈 때 전등 끄기", "물 아껴 쓰기", "이면지 재활용하기", "쓰레기 분리수거하기"],
            correctIndex: 0,
            correctAnswer: "나갈 때 전등 끄기",
            explanation: "'turn off the lights'는 전등을 끄다라는 뜻입니다."
        },
        {
            id: 4,
            domain: "듣기",
            domainIcon: "🎧",
            difficulty: "★★☆",
            type: "listening_choice",
            audioText: "A: Excuse me, where is the hospital? B: Go straight two blocks and turn left. It is on your right.",
            question: "길 안내 대화를 듣고, 병원(hospital)의 위치로 올바른 것을 고르세요.",
            options: ["두 블록 직진 후 좌회전하여 오른쪽", "한 블록 직진 후 우회전하여 왼쪽", "두 블록 직진 후 우회전하여 오른쪽", "길 건너편 서점 옆"],
            correctIndex: 0,
            correctAnswer: "두 블록 직진 후 좌회전하여 오른쪽",
            explanation: "Go straight two blocks(두 블록 직진) ➔ turn left(좌회전) ➔ on your right(오른쪽에 위치)."
        },
        {
            id: 5,
            domain: "듣기",
            domainIcon: "🎧",
            difficulty: "★★☆",
            type: "listening_choice",
            audioText: "A: Why are you so happy? B: Because today is my birthday!",
            question: "대화를 듣고, 말하는 사람이 행복해하는 이유로 알맞은 것은?",
            options: ["오늘이 생일이기 때문에", "시험에서 1등을 해서", "방학이 시작되어서", "새 친구를 사귀어서"],
            correctIndex: 0,
            correctAnswer: "오늘이 생일이기 때문에",
            explanation: "'Because today is my birthday!' 때문입니다."
        },
        {
            id: 6,
            domain: "듣기",
            domainIcon: "🎧",
            difficulty: "★★☆",
            type: "listening_choice",
            audioText: "A: What will you do this summer? B: I will go camping in the forest with my family.",
            question: "대화를 듣고, 여자가 이번 여름 방학에 할 일로 알맞은 것을 고르세요.",
            options: ["가족과 숲으로 캠핑 가기", "할머니 댁 방문하기", "바다에서 수영하기", "동물원 봉사활동 하기"],
            correctIndex: 0,
            correctAnswer: "가족과 숲으로 캠핑 가기",
            explanation: "'go camping in the forest'는 숲으로 캠핑 가기입니다."
        },
        {
            id: 7,
            domain: "듣기",
            domainIcon: "🎧",
            difficulty: "★★★",
            type: "listening_choice",
            audioText: "A: What does she look like? B: She has long straight black hair and wears glasses.",
            question: "인물 묘사를 듣고, 인물의 알맞은 외모 특징을 고르세요.",
            options: ["긴 생머리에 안경을 썼다", "짧은 곱슬머리에 모자를 썼다", "갈색 단발머리에 파란 셔츠를 입었다", "키가 작고 안경을 쓰지 않았다"],
            correctIndex: 0,
            correctAnswer: "긴 생머리에 안경을 썼다",
            explanation: "'long straight black hair(긴 검은 생머리)', 'wears glasses(안경 착용)'입니다."
        },
        {
            id: 8,
            domain: "읽기",
            domainIcon: "📖",
            difficulty: "★☆☆",
            type: "reading_choice",
            question: "대화를 읽고, 빈칸에 들어갈 가장 자연스러운 응답 문장을 고르세요.",
            subtext: "A: Welcome to our school! What grade are you in?\nB: ____________________________________",
            options: ["I am in the sixth grade.", "I have three notebooks.", "It is sunny and warm today.", "I like playing computer games."],
            correctIndex: 0,
            correctAnswer: "I am in the sixth grade.",
            explanation: "학년을 묻는 질문에는 'I am in the ~ grade.'로 답해야 합니다."
        },
        {
            id: 9,
            domain: "읽기",
            domainIcon: "📖",
            difficulty: "★★☆",
            type: "reading_choice",
            question: "다음 두 문장의 빈칸에 공통으로 들어갈 가장 알맞은 낱말은?",
            subtext: "• I want to _______ the school dance club.\n• Would you like to _______ us for lunch?",
            options: ["join", "break", "ride", "draw"],
            correctIndex: 0,
            correctAnswer: "join",
            explanation: "'join'은 '동아리에 가입하다' 또는 '~와 함께하다'라는 뜻입니다."
        },
        {
            id: 10,
            domain: "읽기",
            domainIcon: "📖",
            difficulty: "★★☆",
            type: "reading_choice",
            question: "문장의 빈칸에 알맞은 영어 서수(순서)는?",
            subtext: "Today is May 5th. It is the ________ day of May.",
            options: ["fifth", "fiveth", "second", "fourth"],
            correctIndex: 0,
            correctAnswer: "fifth",
            explanation: "5의 올바른 서수는 'fifth(다섯 번째의)'입니다."
        },
        {
            id: 11,
            domain: "읽기",
            domainIcon: "📖",
            difficulty: "★★☆",
            type: "reading_choice",
            question: "문장을 읽고, 사실과 일치하는 내용을 고르세요.",
            subtext: "A giraffe is taller than an African elephant.",
            options: ["기린이 아프리카코끼리보다 키가 더 크다.", "기린이 코끼리보다 힘이 더 세다.", "코끼리가 기린보다 키가 더 크다.", "기린과 코끼리는 키가 같다."],
            correctIndex: 0,
            correctAnswer: "기린이 아프리카코끼리보다 키가 더 크다.",
            explanation: "'taller than ~'은 '~보다 키가 더 큰'이라는 비교급 표현입니다."
        },
        {
            id: 12,
            domain: "읽기",
            domainIcon: "📖",
            difficulty: "★★☆",
            type: "reading_choice",
            question: "자연스러운 대화가 되도록 빈칸에 들어갈 알맞은 조동사는?",
            subtext: "A: Have you ever visited Jeju-do before?\nB: Yes, I ________.",
            options: ["have", "do", "did", "was"],
            correctIndex: 0,
            correctAnswer: "have",
            explanation: "'Have you ever ~?'의 경험 질문에 대한 긍정 응답은 'Yes, I have.'입니다."
        },
        {
            id: 13,
            domain: "읽기",
            domainIcon: "📖",
            difficulty: "★★★",
            type: "reading_choice",
            question: "다음 환경 보호 표어의 빈칸에 알맞은 단어는?",
            subtext: "Save our Earth! We should not ________ paper and fresh water.",
            options: ["waste", "visit", "catch", "win"],
            correctIndex: 0,
            correctAnswer: "waste",
            explanation: "'waste'는 '낭비하다'라는 뜻입니다. (종이와 물을 낭비하지 맙시다.)"
        },
        {
            id: 14,
            domain: "읽기",
            domainIcon: "📖",
            difficulty: "★★★",
            type: "reading_choice",
            question: "대화를 읽고, B가 제안을 수락할 때 건넬 가장 자연스러운 표현은?",
            subtext: "A: Why don't we go to the amusement park this Saturday?\nB: ____________________________________! Let's meet at ten.",
            options: ["Sounds like a great idea", "I have a headache", "What's the matter", "Where is the post office"],
            correctIndex: 0,
            correctAnswer: "Sounds like a great idea",
            explanation: "제안에 대한 찬성과 수락은 'Sounds like a great idea!(좋은 생각이야!)'입니다."
        },
        {
            id: 15,
            domain: "쓰기",
            domainIcon: "✍️",
            difficulty: "★★☆",
            type: "writing_text",
            question: "문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
            subtext: "You should see a d______ when you are sick. (의사)",
            correctAnswer: "doctor",
            explanation: "아플 때 찾아가는 전문가는 'doctor(의사)'입니다."
        },
        {
            id: 16,
            domain: "쓰기",
            domainIcon: "✍️",
            difficulty: "★★☆",
            type: "writing_text",
            question: "문맥에 알맞게 빈칸의 핵심 영어 단어를 바르게 입력하세요.",
            subtext: "Let's work together to p______ our nature and animals. (보호하다)",
            correctAnswer: "protect",
            explanation: "'보호하다'는 영어로 'protect'입니다."
        },
        {
            id: 17,
            domain: "쓰기",
            domainIcon: "✍️",
            difficulty: "★★☆",
            type: "writing_scramble",
            question: "단어 칩을 올바른 순서로 배열하여 질문 문장을 완성하세요.",
            subtext: "너는 연필을 가지고 있니?",
            chips: ["Do", "you", "have", "a", "pencil", "?"],
            correctAnswer: "Do you have a pencil?",
            explanation: "Do you have a pencil?"
        },
        {
            id: 18,
            domain: "쓰기",
            domainIcon: "✍️",
            difficulty: "★★★",
            type: "writing_scramble",
            question: "단어 칩을 바르게 배열하여 감정의 이유를 묻는 문장을 만드세요.",
            subtext: "너는 오늘 왜 그렇게 행복하니?",
            chips: ["Why", "are", "you", "so", "happy", "today", "?"],
            correctAnswer: "Why are you so happy today?",
            explanation: "Why are you so happy today?"
        },
        {
            id: 19,
            domain: "쓰기",
            domainIcon: "✍️",
            difficulty: "★★★",
            type: "writing_scramble",
            question: "단어 칩을 바르게 배열하여 환경 보호 실천 문장을 완성하세요.",
            subtext: "우리는 에너지를 절약해야 해.",
            chips: ["We", "should", "save", "energy", "."],
            correctAnswer: "We should save energy.",
            explanation: "We should save energy."
        },
        {
            id: 20,
            domain: "골든벨",
            domainIcon: "🔔",
            difficulty: "★★★",
            type: "writing_scramble",
            question: "단어 칩을 모두 올바르게 배열하여 영광의 20번 골든벨을 울리세요!",
            subtext: "우리 이번 주 토요일에 공원에 함께 가는 게 어때?",
            chips: ["Why", "don't", "we", "go", "to", "the", "park", "together", "?"],
            correctAnswer: "Why don't we go to the park together?",
            explanation: "Why don't we go to the park together? 축하합니다! 골든벨을 완주하셨습니다! 🔔"
        }
    ];

    // ────────────────────────────────────────────────────────
    // 3. 1,200문항 은행 기반 20문제 랜덤 스마트 추출 엔진
    // ────────────────────────────────────────────────────────
    function loadQuestionsForPreset(presetCode) {
        // A. 교사용 지도서 고정 표준 세트
        if (presetCode === 'CURRICULUM_20') {
            return MASTER_20_HIGH_LEVEL.map((q, idx) => ({ ...q, id: idx + 1 }));
        }

        const unitKeys = Object.keys(GOLDENBELL_1200_DATABASE);

        // B. 전체 단원 섞기 (1~12단원 1,200문항 중 무작위 20문제)
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

            const shuffledL = [...allListening].sort(() => Math.random() - 0.5).slice(0, 7);
            const shuffledR = [...allReading].sort(() => Math.random() - 0.5).slice(0, 7);
            const shuffledTW = [...allTextWriting].sort(() => Math.random() - 0.5).slice(0, 2);
            const shuffledSW = [...allScrambleWriting].sort(() => Math.random() - 0.5).slice(0, 3);
            const pickedGB = allGoldenBells.length > 0
                ? allGoldenBells[Math.floor(Math.random() * allGoldenBells.length)]
                : allScrambleWriting[0];

            const rawCombined = [...shuffledL, ...shuffledR, ...shuffledTW, ...shuffledSW, pickedGB];
            return rawCombined.map((q, idx) => {
                const clone = { ...q, id: idx + 1 };
                if (clone.type === 'writing_scramble' && Array.isArray(clone.chips)) {
                    clone.chips = [...clone.chips].sort(() => Math.random() - 0.5);
                }
                return clone;
            });
        }

        // C. 특정 개별 단원 선택 (해당 단원의 100문항 풀에서 무작위 20문제)
        const unitData = GOLDENBELL_1200_DATABASE[presetCode] || GOLDENBELL_1200_DATABASE['6G_L01'];
        const qPool = unitData.questions || [];

        const listeningPool = qPool.filter(q => q.domain === '듣기');
        const readingPool = qPool.filter(q => q.domain === '읽기');
        const textWritingPool = qPool.filter(q => q.domain === '쓰기' && q.type === 'writing_text');
        const scramblePool = qPool.filter(q => q.domain === '쓰기' && q.type === 'writing_scramble');
        const goldenPool = qPool.filter(q => q.domain === '골든벨');

        const pickedL = [...listeningPool].sort(() => Math.random() - 0.5).slice(0, 7);
        const pickedR = [...readingPool].sort(() => Math.random() - 0.5).slice(0, 7);
        const pickedTW = [...textWritingPool].sort(() => Math.random() - 0.5).slice(0, 2);
        const pickedSW = [...scramblePool].sort(() => Math.random() - 0.5).slice(0, 3);
        const pickedG = goldenPool.length > 0
            ? goldenPool[Math.floor(Math.random() * goldenPool.length)]
            : scramblePool[0];

        const rawCombined = [...pickedL, ...pickedR, ...pickedTW, ...pickedSW, pickedG];
        return rawCombined.map((q, idx) => {
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
