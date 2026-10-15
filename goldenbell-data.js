/**
 * goldenbell-data.js
 * 초등 영어 지도서 1~12단원 단원별 100문항 (총 1,200문항 초대형 문제 은행) 및 0-중복 스마트 출제 엔진
 * 2026 Eui Elementary School - Waurimal Golden Bell (천재 함순애 지도서 100% 정합)
 */
(function(window) {
    'use strict';

    // ────────────────────────────────────────────────────────
    // 1. 1~12단원 단원별 100문항 마스터 데이터베이스 (총 1,200문항)
    // ────────────────────────────────────────────────────────
    const GOLDENBELL_1200_DATABASE = {
  "6G_L01": {
    "name": "1단원: What grade are you in? (학년과 서수 · 이름 철자)",
    "grade": 6,
    "theme": "Grade, Ordinal Numbers & Spelling",
    "totalQuestions": 100,
    "questions": [
      {
        "id": 1,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Hello! What grade are you in? David: I am in the sixth grade.",
        "question": "[듣기 · 1단원] 대화를 듣고, B의 학년으로 알맞은 것은?",
        "options": [
          "4학년",
          "5학년",
          "6학년",
          "3학년"
        ],
        "correctIndex": 2,
        "correctAnswer": "6학년",
        "explanation": "'sixth grade'는 6학년입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kelly: What grade are you in this year? Sarah: I am in the fifth grade.",
        "question": "[듣기 · 1단원] 대화를 듣고, B의 학년으로 알맞은 것은?",
        "options": [
          "5학년",
          "6학년",
          "4학년",
          "2학년"
        ],
        "correctIndex": 0,
        "correctAnswer": "5학년",
        "explanation": "'fifth grade'는 5학년입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "David: Are you in the fourth grade? Jisu: Yes, I am in the fourth grade.",
        "question": "[듣기 · 1단원] 대화를 듣고, B의 학년으로 알맞은 것은?",
        "options": [
          "1학년",
          "3학년",
          "4학년",
          "5학년"
        ],
        "correctIndex": 2,
        "correctAnswer": "4학년",
        "explanation": "'fourth grade'는 4학년입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Sarah: Is your little brother in the first grade? Kevin: Yes, he is in the first grade.",
        "question": "[듣기 · 1단원] 대화를 듣고, 남동생의 학년으로 알맞은 것은?",
        "options": [
          "3학년",
          "1학년",
          "4학년",
          "2학년"
        ],
        "correctIndex": 1,
        "correctAnswer": "1학년",
        "explanation": "'first grade'는 1학년입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Jisu: What grade is your sister in? Emma: She is in the third grade.",
        "question": "[듣기 · 1단원] 대화를 듣고, 여동생의 학년으로 알맞은 것은?",
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
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kevin: Are the second grade students in the gym? Tom: Yes, they are having gym class.",
        "question": "[듣기 · 1단원] 대화를 듣고, 체육관에 있는 학생들의 학년은?",
        "options": [
          "6학년",
          "3학년",
          "1학년",
          "2학년"
        ],
        "correctIndex": 3,
        "correctAnswer": "2학년",
        "explanation": "'second grade'는 2학년입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Emma: How do you spell your name, Kevin? Hana: It is K-E-V-I-N.",
        "question": "[듣기 · 1단원] 대화를 듣고, Kevin의 이름 철자로 알맞은 것은?",
        "options": [
          "K-E-V-E-N",
          "K-E-V-I-N",
          "K-E-L-V-I-N",
          "K-A-V-I-N"
        ],
        "correctIndex": 1,
        "correctAnswer": "K-E-V-I-N",
        "explanation": "Kevin의 철자는 K-E-V-I-N입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Tom: Can you spell your last name, Brown? Brian: Sure, B-R-O-W-N.",
        "question": "[듣기 · 1단원] 대화를 듣고, 성의 철자로 알맞은 것은?",
        "options": [
          "B-L-O-W-N",
          "B-R-O-U-N",
          "B-R-O-W-N",
          "B-R-O-N-E"
        ],
        "correctIndex": 2,
        "correctAnswer": "B-R-O-W-N",
        "explanation": "Brown의 철자는 B-R-O-W-N입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Hana: How do you spell Linh Phan? Amy: L-I-N-H P-H-A-N.",
        "question": "[듣기 · 1단원] 대화를 듣고, 대화에서 언급된 이름의 철자는?",
        "options": [
          "L-E-N-H P-A-N",
          "L-I-N-H F-A-N",
          "L-I-N P-H-A-N",
          "L-I-N-H P-H-A-N"
        ],
        "correctIndex": 3,
        "correctAnswer": "L-I-N-H P-H-A-N",
        "explanation": "교과서 속 인물 Linh Phan의 철자입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Brian: Where is the sixth grade classroom? Paul: It is on the fourth floor.",
        "question": "[듣기 · 1단원] 대화를 듣고, 6학년 교실의 위치는 몇 층인가요?",
        "options": [
          "4층",
          "2층",
          "1층",
          "3층"
        ],
        "correctIndex": 0,
        "correctAnswer": "4층",
        "explanation": "'fourth floor'는 4층입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Amy: Who won first place in the speech contest? Minsoo: Minsoo won first place!",
        "question": "[듣기 · 1단원] 대화를 듣고, 말하기 대회에서 1등을 한 사람은?",
        "options": [
          "Kelly",
          "Minsoo",
          "Sarah",
          "David"
        ],
        "correctIndex": 1,
        "correctAnswer": "Minsoo",
        "explanation": "'first place'는 1등입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Paul: Welcome to our school club! Please spell your name. Kelly: My name is Amy, A-M-Y.",
        "question": "[듣기 · 1단원] 대화를 듣고, 새로 가입한 학생의 이름 철자는?",
        "options": [
          "A-I-M-Y",
          "A-M-Y",
          "A-M-I",
          "E-M-Y"
        ],
        "correctIndex": 1,
        "correctAnswer": "A-M-Y",
        "explanation": "Amy의 철자는 A-M-Y입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Hello! What grade are you in? David: I am in the sixth grade.",
        "question": "[듣기 · 1단원] 대화를 듣고, B의 학년으로 알맞은 것은?",
        "options": [
          "6학년",
          "5학년",
          "3학년",
          "4학년"
        ],
        "correctIndex": 0,
        "correctAnswer": "6학년",
        "explanation": "'sixth grade'는 6학년입니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kelly: What grade are you in this year? Sarah: I am in the fifth grade.",
        "question": "[듣기 · 1단원] 대화를 듣고, B의 학년으로 알맞은 것은?",
        "options": [
          "2학년",
          "4학년",
          "6학년",
          "5학년"
        ],
        "correctIndex": 3,
        "correctAnswer": "5학년",
        "explanation": "'fifth grade'는 5학년입니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "David: Are you in the fourth grade? Jisu: Yes, I am in the fourth grade.",
        "question": "[듣기 · 1단원] 대화를 듣고, B의 학년으로 알맞은 것은?",
        "options": [
          "1학년",
          "5학년",
          "3학년",
          "4학년"
        ],
        "correctIndex": 3,
        "correctAnswer": "4학년",
        "explanation": "'fourth grade'는 4학년입니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Sarah: What grade are you in? Kevin: I agree with you!",
        "question": "[듣기 · 1단원] 대화에서 Sarah이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음 기회에 다시 이야기하자.",
          "너는 몇 학년이니?",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 1,
        "correctAnswer": "너는 몇 학년이니?",
        "explanation": "'What grade are you in?'은 '너는 몇 학년이니?'을 의미합니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Jisu: I am in the sixth grade. Emma: I agree with you!",
        "question": "[듣기 · 1단원] 대화에서 Jisu이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 6학년이야.",
          "다음 기회에 다시 이야기하자.",
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아."
        ],
        "correctIndex": 0,
        "correctAnswer": "나는 6학년이야.",
        "explanation": "'I am in the sixth grade.'은 '나는 6학년이야.'을 의미합니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kevin: How do you spell your name? Tom: I agree with you!",
        "question": "[듣기 · 1단원] 대화에서 Kevin이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "너의 이름 철자가 어떻게 되니?",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "너의 이름 철자가 어떻게 되니?",
        "explanation": "'How do you spell your name?'은 '너의 이름 철자가 어떻게 되니?'을 의미합니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Emma: My classroom is on the third floor. Hana: I agree with you!",
        "question": "[듣기 · 1단원] 대화에서 Emma이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "내 교실은 3층에 있어."
        ],
        "correctIndex": 3,
        "correctAnswer": "내 교실은 3층에 있어.",
        "explanation": "'My classroom is on the third floor.'은 '내 교실은 3층에 있어.'을 의미합니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Tom: She won first place in the English contest. Brian: I agree with you!",
        "question": "[듣기 · 1단원] 대화에서 Tom이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음 기회에 다시 이야기하자.",
          "나는 무슨 말인지 잘 모르겠어.",
          "그녀는 영어 대회에서 1등을 차지했어.",
          "그것은 좋은 생각이 아닌 것 같아."
        ],
        "correctIndex": 2,
        "correctAnswer": "그녀는 영어 대회에서 1등을 차지했어.",
        "explanation": "'She won first place in the English contest.'은 '그녀는 영어 대회에서 1등을 차지했어.'을 의미합니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Hana: Welcome to our elementary school. Amy: I agree with you!",
        "question": "[듣기 · 1단원] 대화에서 Hana이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "우리 초등학교에 온 것을 환영해.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 2,
        "correctAnswer": "우리 초등학교에 온 것을 환영해.",
        "explanation": "'Welcome to our elementary school.'은 '우리 초등학교에 온 것을 환영해.'을 의미합니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Brian: He is in the fifth grade this year. Paul: I agree with you!",
        "question": "[듣기 · 1단원] 대화에서 Brian이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "그는 올해 5학년이야."
        ],
        "correctIndex": 3,
        "correctAnswer": "그는 올해 5학년이야.",
        "explanation": "'He is in the fifth grade this year.'은 '그는 올해 5학년이야.'을 의미합니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Amy: Can you spell the word student? Minsoo: I agree with you!",
        "question": "[듣기 · 1단원] 대화에서 Amy이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "student라는 단어 철자를 말할 수 있니?",
          "다음 기회에 다시 이야기하자.",
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아."
        ],
        "correctIndex": 0,
        "correctAnswer": "student라는 단어 철자를 말할 수 있니?",
        "explanation": "'Can you spell the word student?'은 'student라는 단어 철자를 말할 수 있니?'을 의미합니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Paul: We are the oldest sixth grade students. Kelly: I agree with you!",
        "question": "[듣기 · 1단원] 대화에서 Paul이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "우리는 학교에서 가장 맏형인 6학년이야."
        ],
        "correctIndex": 3,
        "correctAnswer": "우리는 학교에서 가장 맏형인 6학년이야.",
        "explanation": "'We are the oldest sixth grade students.'은 '우리는 학교에서 가장 맏형인 6학년이야.'을 의미합니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: The music room is on the second floor. David: I agree with you!",
        "question": "[듣기 · 1단원] 대화에서 Minsoo이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어.",
          "다음 기회에 다시 이야기하자.",
          "음악실은 2층에 위치해 있어."
        ],
        "correctIndex": 3,
        "correctAnswer": "음악실은 2층에 위치해 있어.",
        "explanation": "'The music room is on the second floor.'은 '음악실은 2층에 위치해 있어.'을 의미합니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kelly: What does 'classroom' mean in Korean? Sarah: It means '교실'.",
        "question": "[듣기 · 1단원] 대화에서 언급된 영어 단어 'classroom'의 우리말 뜻으로 바른 것은?",
        "options": [
          "교실",
          "첫 번째의",
          "두 번째의",
          "세 번째의"
        ],
        "correctIndex": 0,
        "correctAnswer": "교실",
        "explanation": "'classroom'은 '교실'를 뜻합니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "David: What does 'welcome' mean in Korean? Jisu: It means '환영하다'.",
        "question": "[듣기 · 1단원] 대화에서 언급된 영어 단어 'welcome'의 우리말 뜻으로 바른 것은?",
        "options": [
          "세 번째의",
          "두 번째의",
          "첫 번째의",
          "환영하다"
        ],
        "correctIndex": 3,
        "correctAnswer": "환영하다",
        "explanation": "'welcome'은 '환영하다'를 뜻합니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Sarah: What does 'student' mean in Korean? Kevin: It means '학생'.",
        "question": "[듣기 · 1단원] 대화에서 언급된 영어 단어 'student'의 우리말 뜻으로 바른 것은?",
        "options": [
          "세 번째의",
          "학생",
          "첫 번째의",
          "두 번째의"
        ],
        "correctIndex": 1,
        "correctAnswer": "학생",
        "explanation": "'student'은 '학생'를 뜻합니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Jisu: What does 'place' mean in Korean? Emma: It means '등수, 장소'.",
        "question": "[듣기 · 1단원] 대화에서 언급된 영어 단어 'place'의 우리말 뜻으로 바른 것은?",
        "options": [
          "등수, 장소",
          "첫 번째의",
          "두 번째의",
          "세 번째의"
        ],
        "correctIndex": 0,
        "correctAnswer": "등수, 장소",
        "explanation": "'place'은 '등수, 장소'를 뜻합니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kevin: What does 'number' mean in Korean? Tom: It means '번호, 숫자'.",
        "question": "[듣기 · 1단원] 대화에서 언급된 영어 단어 'number'의 우리말 뜻으로 바른 것은?",
        "options": [
          "세 번째의",
          "첫 번째의",
          "두 번째의",
          "번호, 숫자"
        ],
        "correctIndex": 3,
        "correctAnswer": "번호, 숫자",
        "explanation": "'number'은 '번호, 숫자'를 뜻합니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Emma: What does 'first' mean in Korean? Hana: It means '첫 번째의'.",
        "question": "[듣기 · 1단원] 대화에서 언급된 영어 단어 'first'의 우리말 뜻으로 바른 것은?",
        "options": [
          "첫 번째의",
          "두 번째의",
          "세 번째의",
          "네 번째의"
        ],
        "correctIndex": 0,
        "correctAnswer": "첫 번째의",
        "explanation": "'first'은 '첫 번째의'를 뜻합니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Tom: What does 'second' mean in Korean? Brian: It means '두 번째의'.",
        "question": "[듣기 · 1단원] 대화에서 언급된 영어 단어 'second'의 우리말 뜻으로 바른 것은?",
        "options": [
          "네 번째의",
          "세 번째의",
          "두 번째의",
          "첫 번째의"
        ],
        "correctIndex": 2,
        "correctAnswer": "두 번째의",
        "explanation": "'second'은 '두 번째의'를 뜻합니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Hana: What does 'third' mean in Korean? Amy: It means '세 번째의'.",
        "question": "[듣기 · 1단원] 대화에서 언급된 영어 단어 'third'의 우리말 뜻으로 바른 것은?",
        "options": [
          "세 번째의",
          "두 번째의",
          "네 번째의",
          "첫 번째의"
        ],
        "correctIndex": 0,
        "correctAnswer": "세 번째의",
        "explanation": "'third'은 '세 번째의'를 뜻합니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Brian: What does 'fourth' mean in Korean? Paul: It means '네 번째의'.",
        "question": "[듣기 · 1단원] 대화에서 언급된 영어 단어 'fourth'의 우리말 뜻으로 바른 것은?",
        "options": [
          "네 번째의",
          "첫 번째의",
          "두 번째의",
          "세 번째의"
        ],
        "correctIndex": 0,
        "correctAnswer": "네 번째의",
        "explanation": "'fourth'은 '네 번째의'를 뜻합니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Amy: What does 'fifth' mean in Korean? Minsoo: It means '다섯 번째의'.",
        "question": "[듣기 · 1단원] 대화에서 언급된 영어 단어 'fifth'의 우리말 뜻으로 바른 것은?",
        "options": [
          "세 번째의",
          "두 번째의",
          "첫 번째의",
          "다섯 번째의"
        ],
        "correctIndex": 3,
        "correctAnswer": "다섯 번째의",
        "explanation": "'fifth'은 '다섯 번째의'를 뜻합니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kelly. My classroom is on the third floor. I am very happy and excited about our English class today.",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kelly. My classroom is on the third floor. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "숙제가 너무 어려워서 고민이다.",
          "내 교실은 3층에 있어.",
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 1,
        "correctAnswer": "내 교실은 3층에 있어.",
        "explanation": "'My classroom is on the third floor.'(내 교실은 3층에 있어.)이 핵심 문장입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is David. She won first place in the English contest. I am very happy and excited about our English class today.",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is David. She won first place in the English contest. I am very happy and excited about our English class today.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "그녀는 영어 대회에서 1등을 차지했어.",
          "숙제가 너무 어려워서 고민이다."
        ],
        "correctIndex": 2,
        "correctAnswer": "그녀는 영어 대회에서 1등을 차지했어.",
        "explanation": "'She won first place in the English contest.'(그녀는 영어 대회에서 1등을 차지했어.)이 핵심 문장입니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Sarah. Welcome to our elementary school. I am very happy and excited about our English class today.",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Sarah. Welcome to our elementary school. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "우리 초등학교에 온 것을 환영해.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다.",
          "숙제가 너무 어려워서 고민이다."
        ],
        "correctIndex": 0,
        "correctAnswer": "우리 초등학교에 온 것을 환영해.",
        "explanation": "'Welcome to our elementary school.'(우리 초등학교에 온 것을 환영해.)이 핵심 문장입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Jisu. He is in the fifth grade this year. I am very happy and excited about our English class today.",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Jisu. He is in the fifth grade this year. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Jisu이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "그는 올해 5학년이야.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 2,
        "correctAnswer": "그는 올해 5학년이야.",
        "explanation": "'He is in the fifth grade this year.'(그는 올해 5학년이야.)이 핵심 문장입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kevin. Can you spell the word student? I am very happy and excited about our English class today.",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kevin. Can you spell the word student? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kevin이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "student라는 단어 철자를 말할 수 있니?",
          "길을 잃어서 병원을 찾고 있다.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 0,
        "correctAnswer": "student라는 단어 철자를 말할 수 있니?",
        "explanation": "'Can you spell the word student?'(student라는 단어 철자를 말할 수 있니?)이 핵심 문장입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Emma. We are the oldest sixth grade students. I am very happy and excited about our English class today.",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Emma. We are the oldest sixth grade students. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Emma이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "우리는 학교에서 가장 맏형인 6학년이야.",
          "길을 잃어서 병원을 찾고 있다.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 0,
        "correctAnswer": "우리는 학교에서 가장 맏형인 6학년이야.",
        "explanation": "'We are the oldest sixth grade students.'(우리는 학교에서 가장 맏형인 6학년이야.)이 핵심 문장입니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Tom. The music room is on the second floor. I am very happy and excited about our English class today.",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Tom. The music room is on the second floor. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Tom이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "음악실은 2층에 위치해 있어."
        ],
        "correctIndex": 3,
        "correctAnswer": "음악실은 2층에 위치해 있어.",
        "explanation": "'The music room is on the second floor.'(음악실은 2층에 위치해 있어.)이 핵심 문장입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Hana. How do you spell Linh Phan? I am very happy and excited about our English class today.",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Hana. How do you spell Linh Phan? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Hana이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "Linh Phan의 철자는 어떻게 쓰니?",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 1,
        "correctAnswer": "Linh Phan의 철자는 어떻게 쓰니?",
        "explanation": "'How do you spell Linh Phan?'(Linh Phan의 철자는 어떻게 쓰니?)이 핵심 문장입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Brian. My sister is in the first grade. I am very happy and excited about our English class today.",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Brian. My sister is in the first grade. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Brian이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "내 여동생은 1학년에 다니고 있어.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "내 여동생은 1학년에 다니고 있어.",
        "explanation": "'My sister is in the first grade.'(내 여동생은 1학년에 다니고 있어.)이 핵심 문장입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Amy. Who is the second runner in line? I am very happy and excited about our English class today.",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Amy. Who is the second runner in line? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Amy이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "줄에서 두 번째 주자는 누구니?",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다."
        ],
        "correctIndex": 1,
        "correctAnswer": "줄에서 두 번째 주자는 누구니?",
        "explanation": "'Who is the second runner in line?'(줄에서 두 번째 주자는 누구니?)이 핵심 문장입니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Paul. Please write your name and grade here. I am very happy and excited about our English class today.",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Paul. Please write your name and grade here. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Paul이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "숙제가 너무 어려워서 고민이다.",
          "여기에 너의 이름과 학년을 적어주렴.",
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 1,
        "correctAnswer": "여기에 너의 이름과 학년을 적어주렴.",
        "explanation": "'Please write your name and grade here.'(여기에 너의 이름과 학년을 적어주렴.)이 핵심 문장입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Minsoo. I am proud to be in the sixth grade. I am very happy and excited about our English class today.",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Minsoo. I am proud to be in the sixth grade. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "나는 6학년이 된 것이 정말 자랑스러워."
        ],
        "correctIndex": 3,
        "correctAnswer": "나는 6학년이 된 것이 정말 자랑스러워.",
        "explanation": "'I am proud to be in the sixth grade.'(나는 6학년이 된 것이 정말 자랑스러워.)이 핵심 문장입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kelly. What grade are you in? I am very happy and excited about our English class today.",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kelly. What grade are you in? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "너는 몇 학년이니?",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 1,
        "correctAnswer": "너는 몇 학년이니?",
        "explanation": "'What grade are you in?'(너는 몇 학년이니?)이 핵심 문장입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is David. I am in the sixth grade. I am very happy and excited about our English class today.",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is David. I am in the sixth grade. I am very happy and excited about our English class today.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "숙제가 너무 어려워서 고민이다.",
          "나는 6학년이야.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 1,
        "correctAnswer": "나는 6학년이야.",
        "explanation": "'I am in the sixth grade.'(나는 6학년이야.)이 핵심 문장입니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Sarah. How do you spell your name? I am very happy and excited about our English class today.",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Sarah. How do you spell your name? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "너의 이름 철자가 어떻게 되니?",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "너의 이름 철자가 어떻게 되니?",
        "explanation": "'How do you spell your name?'(너의 이름 철자가 어떻게 되니?)이 핵심 문장입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Is your little brother in the first grade? And the response was: \"Yes, he is in the first grade.\"",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Is your little brother in the first grade? And the response was: \"Yes, he is in the first grade.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 남동생의 학년으로 알맞은 것은?",
        "options": [
          "1학년",
          "4학년",
          "2학년",
          "3학년"
        ],
        "correctIndex": 0,
        "correctAnswer": "1학년",
        "explanation": "'first grade'는 1학년입니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: What grade is your sister in? And the response was: \"She is in the third grade.\"",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: What grade is your sister in? And the response was: \"She is in the third grade.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 여동생의 학년으로 알맞은 것은?",
        "options": [
          "4학년",
          "2학년",
          "5학년",
          "3학년"
        ],
        "correctIndex": 3,
        "correctAnswer": "3학년",
        "explanation": "'third grade'는 3학년입니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Are the second grade students in the gym? And the response was: \"Yes, they are having gym class.\"",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Are the second grade students in the gym? And the response was: \"Yes, they are having gym class.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 체육관에 있는 학생들의 학년은?",
        "options": [
          "2학년",
          "1학년",
          "3학년",
          "6학년"
        ],
        "correctIndex": 0,
        "correctAnswer": "2학년",
        "explanation": "'second grade'는 2학년입니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: How do you spell your name, Kevin? And the response was: \"It is K-E-V-I-N.\"",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: How do you spell your name, Kevin? And the response was: \"It is K-E-V-I-N.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: Kevin의 이름 철자로 알맞은 것은?",
        "options": [
          "K-E-L-V-I-N",
          "K-A-V-I-N",
          "K-E-V-I-N",
          "K-E-V-E-N"
        ],
        "correctIndex": 2,
        "correctAnswer": "K-E-V-I-N",
        "explanation": "Kevin의 철자는 K-E-V-I-N입니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Can you spell your last name, Brown? And the response was: \"Sure, B-R-O-W-N.\"",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Can you spell your last name, Brown? And the response was: \"Sure, B-R-O-W-N.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 성의 철자로 알맞은 것은?",
        "options": [
          "B-R-O-U-N",
          "B-L-O-W-N",
          "B-R-O-N-E",
          "B-R-O-W-N"
        ],
        "correctIndex": 3,
        "correctAnswer": "B-R-O-W-N",
        "explanation": "Brown의 철자는 B-R-O-W-N입니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: How do you spell Linh Phan? And the response was: \"L-I-N-H P-H-A-N.\"",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: How do you spell Linh Phan? And the response was: \"L-I-N-H P-H-A-N.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 대화에서 언급된 이름의 철자는?",
        "options": [
          "L-I-N-H F-A-N",
          "L-I-N-H P-H-A-N",
          "L-I-N P-H-A-N",
          "L-E-N-H P-A-N"
        ],
        "correctIndex": 1,
        "correctAnswer": "L-I-N-H P-H-A-N",
        "explanation": "교과서 속 인물 Linh Phan의 철자입니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Where is the sixth grade classroom? And the response was: \"It is on the fourth floor.\"",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Where is the sixth grade classroom? And the response was: \"It is on the fourth floor.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 6학년 교실의 위치는 몇 층인가요?",
        "options": [
          "4층",
          "1층",
          "3층",
          "2층"
        ],
        "correctIndex": 0,
        "correctAnswer": "4층",
        "explanation": "'fourth floor'는 4층입니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Who won first place in the speech contest? And the response was: \"Minsoo won first place!\"",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Who won first place in the speech contest? And the response was: \"Minsoo won first place!\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 말하기 대회에서 1등을 한 사람은?",
        "options": [
          "Minsoo",
          "Sarah",
          "Kelly",
          "David"
        ],
        "correctIndex": 0,
        "correctAnswer": "Minsoo",
        "explanation": "'first place'는 1등입니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Welcome to our school club! Please spell your name. And the response was: \"My name is Amy, A-M-Y.\"",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Welcome to our school club! Please spell your name. And the response was: \"My name is Amy, A-M-Y.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 새로 가입한 학생의 이름 철자는?",
        "options": [
          "A-M-Y",
          "A-I-M-Y",
          "A-M-I",
          "E-M-Y"
        ],
        "correctIndex": 0,
        "correctAnswer": "A-M-Y",
        "explanation": "Amy의 철자는 A-M-Y입니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Hello! What grade are you in? And the response was: \"I am in the sixth grade.\"",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Hello! What grade are you in? And the response was: \"I am in the sixth grade.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: B의 학년으로 알맞은 것은?",
        "options": [
          "3학년",
          "6학년",
          "5학년",
          "4학년"
        ],
        "correctIndex": 1,
        "correctAnswer": "6학년",
        "explanation": "'sixth grade'는 6학년입니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'student' is a new word in 1단원. In Korean, it means '학생'.",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'student' is a new word in 1단원. In Korean, it means '학생'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'student'의 뜻은?",
        "options": [
          "첫 번째의",
          "학생",
          "두 번째의",
          "세 번째의"
        ],
        "correctIndex": 1,
        "correctAnswer": "학생",
        "explanation": "'student'은 '학생'입니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'place' is a new word in 1단원. In Korean, it means '등수, 장소'.",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'place' is a new word in 1단원. In Korean, it means '등수, 장소'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'place'의 뜻은?",
        "options": [
          "등수, 장소",
          "두 번째의",
          "첫 번째의",
          "세 번째의"
        ],
        "correctIndex": 0,
        "correctAnswer": "등수, 장소",
        "explanation": "'place'은 '등수, 장소'입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'number' is a new word in 1단원. In Korean, it means '번호, 숫자'.",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'number' is a new word in 1단원. In Korean, it means '번호, 숫자'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'number'의 뜻은?",
        "options": [
          "번호, 숫자",
          "두 번째의",
          "첫 번째의",
          "세 번째의"
        ],
        "correctIndex": 0,
        "correctAnswer": "번호, 숫자",
        "explanation": "'number'은 '번호, 숫자'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'first' is a new word in 1단원. In Korean, it means '첫 번째의'.",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'first' is a new word in 1단원. In Korean, it means '첫 번째의'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'first'의 뜻은?",
        "options": [
          "두 번째의",
          "세 번째의",
          "네 번째의",
          "첫 번째의"
        ],
        "correctIndex": 3,
        "correctAnswer": "첫 번째의",
        "explanation": "'first'은 '첫 번째의'입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'second' is a new word in 1단원. In Korean, it means '두 번째의'.",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'second' is a new word in 1단원. In Korean, it means '두 번째의'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'second'의 뜻은?",
        "options": [
          "세 번째의",
          "네 번째의",
          "첫 번째의",
          "두 번째의"
        ],
        "correctIndex": 3,
        "correctAnswer": "두 번째의",
        "explanation": "'second'은 '두 번째의'입니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'third' is a new word in 1단원. In Korean, it means '세 번째의'.",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'third' is a new word in 1단원. In Korean, it means '세 번째의'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'third'의 뜻은?",
        "options": [
          "세 번째의",
          "첫 번째의",
          "두 번째의",
          "네 번째의"
        ],
        "correctIndex": 0,
        "correctAnswer": "세 번째의",
        "explanation": "'third'은 '세 번째의'입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'fourth' is a new word in 1단원. In Korean, it means '네 번째의'.",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'fourth' is a new word in 1단원. In Korean, it means '네 번째의'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'fourth'의 뜻은?",
        "options": [
          "세 번째의",
          "두 번째의",
          "첫 번째의",
          "네 번째의"
        ],
        "correctIndex": 3,
        "correctAnswer": "네 번째의",
        "explanation": "'fourth'은 '네 번째의'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'fifth' is a new word in 1단원. In Korean, it means '다섯 번째의'.",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'fifth' is a new word in 1단원. In Korean, it means '다섯 번째의'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'fifth'의 뜻은?",
        "options": [
          "다섯 번째의",
          "첫 번째의",
          "두 번째의",
          "세 번째의"
        ],
        "correctIndex": 0,
        "correctAnswer": "다섯 번째의",
        "explanation": "'fifth'은 '다섯 번째의'입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'sixth' is a new word in 1단원. In Korean, it means '여섯 번째의'.",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'sixth' is a new word in 1단원. In Korean, it means '여섯 번째의'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'sixth'의 뜻은?",
        "options": [
          "여섯 번째의",
          "첫 번째의",
          "두 번째의",
          "세 번째의"
        ],
        "correctIndex": 0,
        "correctAnswer": "여섯 번째의",
        "explanation": "'sixth'은 '여섯 번째의'입니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'grade' is a new word in 1단원. In Korean, it means '학년'.",
        "question": "[읽기 · 1단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'grade' is a new word in 1단원. In Korean, it means '학년'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'grade'의 뜻은?",
        "options": [
          "세 번째의",
          "학년",
          "두 번째의",
          "첫 번째의"
        ],
        "correctIndex": 1,
        "correctAnswer": "학년",
        "explanation": "'grade'은 '학년'입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 1단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"첫 번째의\" (첫 글자: f, 총 5글자)",
        "correctAnswer": "first",
        "explanation": "'첫 번째의'의 영어 표기는 'first'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 1단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"두 번째의\" (첫 글자: s, 총 6글자)",
        "correctAnswer": "second",
        "explanation": "'두 번째의'의 영어 표기는 'second'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 1단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"세 번째의\" (첫 글자: t, 총 5글자)",
        "correctAnswer": "third",
        "explanation": "'세 번째의'의 영어 표기는 'third'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 1단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"네 번째의\" (첫 글자: f, 총 6글자)",
        "correctAnswer": "fourth",
        "explanation": "'네 번째의'의 영어 표기는 'fourth'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 1단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"다섯 번째의\" (첫 글자: f, 총 5글자)",
        "correctAnswer": "fifth",
        "explanation": "'다섯 번째의'의 영어 표기는 'fifth'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 1단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"여섯 번째의\" (첫 글자: s, 총 5글자)",
        "correctAnswer": "sixth",
        "explanation": "'여섯 번째의'의 영어 표기는 'sixth'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 1단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"학년\" (첫 글자: g, 총 5글자)",
        "correctAnswer": "grade",
        "explanation": "'학년'의 영어 표기는 'grade'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 1단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"철자를 쓰다(말하다)\" (첫 글자: s, 총 5글자)",
        "correctAnswer": "spell",
        "explanation": "'철자를 쓰다(말하다)'의 영어 표기는 'spell'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 1단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"이름\" (첫 글자: n, 총 4글자)",
        "correctAnswer": "name",
        "explanation": "'이름'의 영어 표기는 'name'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 1단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"층, 바닥\" (첫 글자: f, 총 5글자)",
        "correctAnswer": "floor",
        "explanation": "'층, 바닥'의 영어 표기는 'floor'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 1단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"교실\" (첫 글자: c, 총 9글자)",
        "correctAnswer": "classroom",
        "explanation": "'교실'의 영어 표기는 'classroom'입니다."
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 1단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"환영하다\" (첫 글자: w, 총 7글자)",
        "correctAnswer": "welcome",
        "explanation": "'환영하다'의 영어 표기는 'welcome'입니다."
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 1단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"학생\" (첫 글자: s, 총 7글자)",
        "correctAnswer": "student",
        "explanation": "'학생'의 영어 표기는 'student'입니다."
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 1단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"등수, 장소\" (첫 글자: p, 총 5글자)",
        "correctAnswer": "place",
        "explanation": "'등수, 장소'의 영어 표기는 'place'입니다."
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 1단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"번호, 숫자\" (첫 글자: n, 총 6글자)",
        "correctAnswer": "number",
        "explanation": "'번호, 숫자'의 영어 표기는 'number'입니다."
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"너는 몇 학년이니?\"",
        "chips": [
          "What",
          "grade",
          "are",
          "you",
          "in?"
        ],
        "correctAnswer": "What grade are you in?",
        "explanation": "'What grade are you in?'은 '너는 몇 학년이니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"나는 6학년이야.\"",
        "chips": [
          "I",
          "am",
          "in",
          "the",
          "sixth",
          "grade."
        ],
        "correctAnswer": "I am in the sixth grade.",
        "explanation": "'I am in the sixth grade.'은 '나는 6학년이야.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"너의 이름 철자가 어떻게 되니?\"",
        "chips": [
          "How",
          "do",
          "you",
          "spell",
          "your",
          "name?"
        ],
        "correctAnswer": "How do you spell your name?",
        "explanation": "'How do you spell your name?'은 '너의 이름 철자가 어떻게 되니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"내 교실은 3층에 있어.\"",
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
        "explanation": "'My classroom is on the third floor.'은 '내 교실은 3층에 있어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"그녀는 영어 대회에서 1등을 차지했어.\"",
        "chips": [
          "She",
          "won",
          "first",
          "place",
          "in",
          "the",
          "English",
          "contest."
        ],
        "correctAnswer": "She won first place in the English contest.",
        "explanation": "'She won first place in the English contest.'은 '그녀는 영어 대회에서 1등을 차지했어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"우리 초등학교에 온 것을 환영해.\"",
        "chips": [
          "Welcome",
          "to",
          "our",
          "elementary",
          "school."
        ],
        "correctAnswer": "Welcome to our elementary school.",
        "explanation": "'Welcome to our elementary school.'은 '우리 초등학교에 온 것을 환영해.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"그는 올해 5학년이야.\"",
        "chips": [
          "He",
          "is",
          "in",
          "the",
          "fifth",
          "grade",
          "this",
          "year."
        ],
        "correctAnswer": "He is in the fifth grade this year.",
        "explanation": "'He is in the fifth grade this year.'은 '그는 올해 5학년이야.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"student라는 단어 철자를 말할 수 있니?\"",
        "chips": [
          "Can",
          "you",
          "spell",
          "the",
          "word",
          "student?"
        ],
        "correctAnswer": "Can you spell the word student?",
        "explanation": "'Can you spell the word student?'은 'student라는 단어 철자를 말할 수 있니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"우리는 학교에서 가장 맏형인 6학년이야.\"",
        "chips": [
          "We",
          "are",
          "the",
          "oldest",
          "sixth",
          "grade",
          "students."
        ],
        "correctAnswer": "We are the oldest sixth grade students.",
        "explanation": "'We are the oldest sixth grade students.'은 '우리는 학교에서 가장 맏형인 6학년이야.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"음악실은 2층에 위치해 있어.\"",
        "chips": [
          "The",
          "music",
          "room",
          "is",
          "on",
          "the",
          "second",
          "floor."
        ],
        "correctAnswer": "The music room is on the second floor.",
        "explanation": "'The music room is on the second floor.'은 '음악실은 2층에 위치해 있어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 96,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"Linh Phan의 철자는 어떻게 쓰니?\"",
        "chips": [
          "How",
          "do",
          "you",
          "spell",
          "Linh",
          "Phan?"
        ],
        "correctAnswer": "How do you spell Linh Phan?",
        "explanation": "'How do you spell Linh Phan?'은 'Linh Phan의 철자는 어떻게 쓰니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 97,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"내 여동생은 1학년에 다니고 있어.\"",
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
        "explanation": "'My sister is in the first grade.'은 '내 여동생은 1학년에 다니고 있어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 98,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"줄에서 두 번째 주자는 누구니?\"",
        "chips": [
          "Who",
          "is",
          "the",
          "second",
          "runner",
          "in",
          "line?"
        ],
        "correctAnswer": "Who is the second runner in line?",
        "explanation": "'Who is the second runner in line?'은 '줄에서 두 번째 주자는 누구니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 99,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 1단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"여기에 너의 이름과 학년을 적어주렴.\"",
        "chips": [
          "Please",
          "write",
          "your",
          "name",
          "and",
          "grade",
          "here."
        ],
        "correctAnswer": "Please write your name and grade here.",
        "explanation": "'Please write your name and grade here.'은 '여기에 너의 이름과 학년을 적어주렴.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[최종 골든벨 문제] 다음 우리말에 맞도록 주어진 단어 카드를 순서대로 바르게 배열하세요!\n우리말: \"나는 6학년이 된 것이 정말 자랑스러워.\"",
        "chips": [
          "I",
          "am",
          "proud",
          "to",
          "be",
          "in",
          "the",
          "sixth",
          "grade."
        ],
        "correctAnswer": "I am proud to be in the sixth grade.",
        "explanation": "'I am proud to be in the sixth grade.'은 '나는 6학년이 된 것이 정말 자랑스러워.'을 의미하는 교과서 핵심 문장입니다."
      }
    ]
  },
  "6G_L02": {
    "name": "2단원: What season do you like? (계절과 날씨 · 칭찬하기)",
    "grade": 6,
    "theme": "Favorite Seasons, Weather & Compliments",
    "totalQuestions": 100,
    "questions": [
      {
        "id": 1,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Minsoo: What season do you like, Minsoo? David: I like spring. I can see beautiful flowers.",
        "question": "[듣기 · 2단원] 대화를 듣고, Minsoo가 좋아하는 계절과 그 이유는?",
        "options": [
          "겨울 (눈사람을 만들 수 있어서)",
          "가을 (단풍을 볼 수 있어서)",
          "여름 (바다에서 수영할 수 있어서)",
          "봄 (아름다운 꽃을 볼 수 있어서)"
        ],
        "correctIndex": 3,
        "correctAnswer": "봄 (아름다운 꽃을 볼 수 있어서)",
        "explanation": "'I like spring. I can see beautiful flowers.'입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kelly: What season do you like? Sarah: I like summer because I can swim in the cool sea.",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 좋아하는 계절과 활동은?",
        "options": [
          "가을 (등산하기)",
          "겨울 (스키 타기)",
          "봄 (꽃구경 가기)",
          "여름 (시원한 바다에서 수영하기)"
        ],
        "correctIndex": 3,
        "correctAnswer": "여름 (시원한 바다에서 수영하기)",
        "explanation": "'I like summer because I can swim'입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "David: Do you like fall? Jisu: Yes, fall is cool and breezy. I like red and yellow leaves.",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 가을을 좋아하는 이유로 알맞은 것은?",
        "options": [
          "따뜻하고 비가 자주 와서",
          "시원하고 알록달록한 단풍잎을 볼 수 있어서",
          "방학이 제일 길어서",
          "눈이 펑펑 내려서"
        ],
        "correctIndex": 1,
        "correctAnswer": "시원하고 알록달록한 단풍잎을 볼 수 있어서",
        "explanation": "'fall is cool and breezy. I like red and yellow leaves'입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Sarah: What season do you like the most? Kevin: I like winter because I can make a big snowman.",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 가장 좋아하는 계절은?",
        "options": [
          "여름",
          "봄",
          "겨울",
          "가을"
        ],
        "correctIndex": 2,
        "correctAnswer": "겨울",
        "explanation": "'I like winter because I can make a big snowman'입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Jisu: Look at my flower drawing! Emma: Good job! It is really colorful and pretty.",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 상대방에게 건넨 칭찬의 말은?",
        "options": [
          "Good job! (잘했어!)",
          "Cheer up! (기운 내!)",
          "Don't worry! (걱정 마!)",
          "Watch out! (조심해!)"
        ],
        "correctIndex": 0,
        "correctAnswer": "Good job! (잘했어!)",
        "explanation": "교과서 핵심 칭찬 표현인 'Good job!'입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kevin: How is the weather today? Tom: It is warm and sunny.",
        "question": "[듣기 · 2단원] 대화를 듣고, 오늘의 날씨 묘사로 알맞은 것은?",
        "options": [
          "비가 오고 번개 침",
          "춥고 눈이 내림",
          "따뜻하고 화창함",
          "쌀쌀하고 안개 낌"
        ],
        "correctIndex": 2,
        "correctAnswer": "따뜻하고 화창함",
        "explanation": "'warm and sunny'는 따뜻하고 화창한 날씨입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Emma: I love autumn picnics. Hana: Good job preparing this delicious lunch!",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 칭찬한 내용은?",
        "options": [
          "노래를 잘 부른 것",
          "맛있는 점심을 준비한 것",
          "자전거를 빨리 탄 것",
          "숙제를 일찍 끝낸 것"
        ],
        "correctIndex": 1,
        "correctAnswer": "맛있는 점심을 준비한 것",
        "explanation": "점심 도시락을 칭찬하고 있습니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Tom: What season do you like, Minsoo? Brian: I like spring. I can see beautiful flowers.",
        "question": "[듣기 · 2단원] 대화를 듣고, Minsoo가 좋아하는 계절과 그 이유는?",
        "options": [
          "봄 (아름다운 꽃을 볼 수 있어서)",
          "여름 (바다에서 수영할 수 있어서)",
          "겨울 (눈사람을 만들 수 있어서)",
          "가을 (단풍을 볼 수 있어서)"
        ],
        "correctIndex": 0,
        "correctAnswer": "봄 (아름다운 꽃을 볼 수 있어서)",
        "explanation": "'I like spring. I can see beautiful flowers.'입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Hana: What season do you like? Amy: I like summer because I can swim in the cool sea.",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 좋아하는 계절과 활동은?",
        "options": [
          "여름 (시원한 바다에서 수영하기)",
          "봄 (꽃구경 가기)",
          "가을 (등산하기)",
          "겨울 (스키 타기)"
        ],
        "correctIndex": 0,
        "correctAnswer": "여름 (시원한 바다에서 수영하기)",
        "explanation": "'I like summer because I can swim'입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Brian: Do you like fall? Paul: Yes, fall is cool and breezy. I like red and yellow leaves.",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 가을을 좋아하는 이유로 알맞은 것은?",
        "options": [
          "따뜻하고 비가 자주 와서",
          "방학이 제일 길어서",
          "눈이 펑펑 내려서",
          "시원하고 알록달록한 단풍잎을 볼 수 있어서"
        ],
        "correctIndex": 3,
        "correctAnswer": "시원하고 알록달록한 단풍잎을 볼 수 있어서",
        "explanation": "'fall is cool and breezy. I like red and yellow leaves'입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Amy: What season do you like the most? Minsoo: I like winter because I can make a big snowman.",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 가장 좋아하는 계절은?",
        "options": [
          "가을",
          "여름",
          "봄",
          "겨울"
        ],
        "correctIndex": 3,
        "correctAnswer": "겨울",
        "explanation": "'I like winter because I can make a big snowman'입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Paul: Look at my flower drawing! Kelly: Good job! It is really colorful and pretty.",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 상대방에게 건넨 칭찬의 말은?",
        "options": [
          "Good job! (잘했어!)",
          "Cheer up! (기운 내!)",
          "Don't worry! (걱정 마!)",
          "Watch out! (조심해!)"
        ],
        "correctIndex": 0,
        "correctAnswer": "Good job! (잘했어!)",
        "explanation": "교과서 핵심 칭찬 표현인 'Good job!'입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: How is the weather today? David: It is warm and sunny.",
        "question": "[듣기 · 2단원] 대화를 듣고, 오늘의 날씨 묘사로 알맞은 것은?",
        "options": [
          "춥고 눈이 내림",
          "따뜻하고 화창함",
          "쌀쌀하고 안개 낌",
          "비가 오고 번개 침"
        ],
        "correctIndex": 1,
        "correctAnswer": "따뜻하고 화창함",
        "explanation": "'warm and sunny'는 따뜻하고 화창한 날씨입니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kelly: I love autumn picnics. Sarah: Good job preparing this delicious lunch!",
        "question": "[듣기 · 2단원] 대화를 듣고, B가 칭찬한 내용은?",
        "options": [
          "맛있는 점심을 준비한 것",
          "자전거를 빨리 탄 것",
          "숙제를 일찍 끝낸 것",
          "노래를 잘 부른 것"
        ],
        "correctIndex": 0,
        "correctAnswer": "맛있는 점심을 준비한 것",
        "explanation": "점심 도시락을 칭찬하고 있습니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "David: What season do you like, Minsoo? Jisu: I like spring. I can see beautiful flowers.",
        "question": "[듣기 · 2단원] 대화를 듣고, Minsoo가 좋아하는 계절과 그 이유는?",
        "options": [
          "여름 (바다에서 수영할 수 있어서)",
          "가을 (단풍을 볼 수 있어서)",
          "겨울 (눈사람을 만들 수 있어서)",
          "봄 (아름다운 꽃을 볼 수 있어서)"
        ],
        "correctIndex": 3,
        "correctAnswer": "봄 (아름다운 꽃을 볼 수 있어서)",
        "explanation": "'I like spring. I can see beautiful flowers.'입니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Sarah: What season do you like? Kevin: I agree with you!",
        "question": "[듣기 · 2단원] 대화에서 Sarah이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "나는 무슨 말인지 잘 모르겠어.",
          "너는 어떤 계절을 좋아하니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "너는 어떤 계절을 좋아하니?",
        "explanation": "'What season do you like?'은 '너는 어떤 계절을 좋아하니?'을 의미합니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Jisu: I like spring because it is warm. Emma: I agree with you!",
        "question": "[듣기 · 2단원] 대화에서 Jisu이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음 기회에 다시 이야기하자.",
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "따뜻해서 봄을 좋아해."
        ],
        "correctIndex": 3,
        "correctAnswer": "따뜻해서 봄을 좋아해.",
        "explanation": "'I like spring because it is warm.'은 '따뜻해서 봄을 좋아해.'을 의미합니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kevin: I can see beautiful flowers. Tom: I agree with you!",
        "question": "[듣기 · 2단원] 대화에서 Kevin이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음 기회에 다시 이야기하자.",
          "나는 무슨 말인지 잘 모르겠어.",
          "아름다운 꽃들을 볼 수 있어.",
          "그것은 좋은 생각이 아닌 것 같아."
        ],
        "correctIndex": 2,
        "correctAnswer": "아름다운 꽃들을 볼 수 있어.",
        "explanation": "'I can see beautiful flowers.'은 '아름다운 꽃들을 볼 수 있어.'을 의미합니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Emma: Good job! You did very well. Hana: I agree with you!",
        "question": "[듣기 · 2단원] 대화에서 Emma이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "잘했어! 아주 잘 해냈구나.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "잘했어! 아주 잘 해냈구나.",
        "explanation": "'Good job! You did very well.'은 '잘했어! 아주 잘 해냈구나.'을 의미합니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Tom: I like summer because I can swim. Brian: I agree with you!",
        "question": "[듣기 · 2단원] 대화에서 Tom이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "수영할 수 있어서 여름이 좋아.",
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자."
        ],
        "correctIndex": 0,
        "correctAnswer": "수영할 수 있어서 여름이 좋아.",
        "explanation": "'I like summer because I can swim.'은 '수영할 수 있어서 여름이 좋아.'을 의미합니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Hana: Fall is my favorite season. Amy: I agree with you!",
        "question": "[듣기 · 2단원] 대화에서 Hana이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "가을은 내가 가장 좋아하는 계절이야."
        ],
        "correctIndex": 3,
        "correctAnswer": "가을은 내가 가장 좋아하는 계절이야.",
        "explanation": "'Fall is my favorite season.'은 '가을은 내가 가장 좋아하는 계절이야.'을 의미합니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Brian: We can make a snowman in winter. Paul: I agree with you!",
        "question": "[듣기 · 2단원] 대화에서 Brian이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "겨울에는 눈사람을 만들 수 있어.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "겨울에는 눈사람을 만들 수 있어.",
        "explanation": "'We can make a snowman in winter.'은 '겨울에는 눈사람을 만들 수 있어.'을 의미합니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Amy: The weather is cool and breezy today. Minsoo: I agree with you!",
        "question": "[듣기 · 2단원] 대화에서 Amy이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "오늘 날씨는 시원하고 산들바람이 불어.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자."
        ],
        "correctIndex": 1,
        "correctAnswer": "오늘 날씨는 시원하고 산들바람이 불어.",
        "explanation": "'The weather is cool and breezy today.'은 '오늘 날씨는 시원하고 산들바람이 불어.'을 의미합니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Paul: I like seeing colorful autumn leaves. Kelly: I agree with you!",
        "question": "[듣기 · 2단원] 대화에서 Paul이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "알록달록한 가을 단풍잎 보는 것을 좋아해.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아."
        ],
        "correctIndex": 1,
        "correctAnswer": "알록달록한 가을 단풍잎 보는 것을 좋아해.",
        "explanation": "'I like seeing colorful autumn leaves.'은 '알록달록한 가을 단풍잎 보는 것을 좋아해.'을 의미합니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Why do you like winter so much? David: I agree with you!",
        "question": "[듣기 · 2단원] 대화에서 Minsoo이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어.",
          "다음 기회에 다시 이야기하자.",
          "너는 왜 겨울을 그렇게 좋아하니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "너는 왜 겨울을 그렇게 좋아하니?",
        "explanation": "'Why do you like winter so much?'은 '너는 왜 겨울을 그렇게 좋아하니?'을 의미합니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kelly: What does 'flower' mean in Korean? Sarah: It means '꽃'.",
        "question": "[듣기 · 2단원] 대화에서 언급된 영어 단어 'flower'의 우리말 뜻으로 바른 것은?",
        "options": [
          "여름",
          "꽃",
          "계절",
          "봄"
        ],
        "correctIndex": 1,
        "correctAnswer": "꽃",
        "explanation": "'flower'은 '꽃'를 뜻합니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "David: What does 'snowman' mean in Korean? Jisu: It means '눈사람'.",
        "question": "[듣기 · 2단원] 대화에서 언급된 영어 단어 'snowman'의 우리말 뜻으로 바른 것은?",
        "options": [
          "봄",
          "계절",
          "눈사람",
          "여름"
        ],
        "correctIndex": 2,
        "correctAnswer": "눈사람",
        "explanation": "'snowman'은 '눈사람'를 뜻합니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Sarah: What does 'swim' mean in Korean? Kevin: It means '수영하다'.",
        "question": "[듣기 · 2단원] 대화에서 언급된 영어 단어 'swim'의 우리말 뜻으로 바른 것은?",
        "options": [
          "계절",
          "수영하다",
          "여름",
          "봄"
        ],
        "correctIndex": 1,
        "correctAnswer": "수영하다",
        "explanation": "'swim'은 '수영하다'를 뜻합니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Jisu: What does 'leaves' mean in Korean? Emma: It means '나뭇잎들'.",
        "question": "[듣기 · 2단원] 대화에서 언급된 영어 단어 'leaves'의 우리말 뜻으로 바른 것은?",
        "options": [
          "봄",
          "계절",
          "여름",
          "나뭇잎들"
        ],
        "correctIndex": 3,
        "correctAnswer": "나뭇잎들",
        "explanation": "'leaves'은 '나뭇잎들'를 뜻합니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kevin: What does 'pretty' mean in Korean? Tom: It means '예쁜'.",
        "question": "[듣기 · 2단원] 대화에서 언급된 영어 단어 'pretty'의 우리말 뜻으로 바른 것은?",
        "options": [
          "봄",
          "여름",
          "계절",
          "예쁜"
        ],
        "correctIndex": 3,
        "correctAnswer": "예쁜",
        "explanation": "'pretty'은 '예쁜'를 뜻합니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Emma: What does 'season' mean in Korean? Hana: It means '계절'.",
        "question": "[듣기 · 2단원] 대화에서 언급된 영어 단어 'season'의 우리말 뜻으로 바른 것은?",
        "options": [
          "가을",
          "여름",
          "봄",
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
        "audioText": "Tom: What does 'spring' mean in Korean? Brian: It means '봄'.",
        "question": "[듣기 · 2단원] 대화에서 언급된 영어 단어 'spring'의 우리말 뜻으로 바른 것은?",
        "options": [
          "계절",
          "봄",
          "가을",
          "여름"
        ],
        "correctIndex": 1,
        "correctAnswer": "봄",
        "explanation": "'spring'은 '봄'를 뜻합니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Hana: What does 'summer' mean in Korean? Amy: It means '여름'.",
        "question": "[듣기 · 2단원] 대화에서 언급된 영어 단어 'summer'의 우리말 뜻으로 바른 것은?",
        "options": [
          "봄",
          "계절",
          "가을",
          "여름"
        ],
        "correctIndex": 3,
        "correctAnswer": "여름",
        "explanation": "'summer'은 '여름'를 뜻합니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Brian: What does 'fall' mean in Korean? Paul: It means '가을'.",
        "question": "[듣기 · 2단원] 대화에서 언급된 영어 단어 'fall'의 우리말 뜻으로 바른 것은?",
        "options": [
          "가을",
          "계절",
          "여름",
          "봄"
        ],
        "correctIndex": 0,
        "correctAnswer": "가을",
        "explanation": "'fall'은 '가을'를 뜻합니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Amy: What does 'winter' mean in Korean? Minsoo: It means '겨울'.",
        "question": "[듣기 · 2단원] 대화에서 언급된 영어 단어 'winter'의 우리말 뜻으로 바른 것은?",
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
        "subtext": "Hello! My name is Kelly. Good job! You did very well. I am very happy and excited about our English class today.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kelly. Good job! You did very well. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "잘했어! 아주 잘 해냈구나.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "잘했어! 아주 잘 해냈구나.",
        "explanation": "'Good job! You did very well.'(잘했어! 아주 잘 해냈구나.)이 핵심 문장입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is David. I like summer because I can swim. I am very happy and excited about our English class today.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is David. I like summer because I can swim. I am very happy and excited about our English class today.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "수영할 수 있어서 여름이 좋아.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "수영할 수 있어서 여름이 좋아.",
        "explanation": "'I like summer because I can swim.'(수영할 수 있어서 여름이 좋아.)이 핵심 문장입니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Sarah. Fall is my favorite season. I am very happy and excited about our English class today.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Sarah. Fall is my favorite season. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "가을은 내가 가장 좋아하는 계절이야.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 1,
        "correctAnswer": "가을은 내가 가장 좋아하는 계절이야.",
        "explanation": "'Fall is my favorite season.'(가을은 내가 가장 좋아하는 계절이야.)이 핵심 문장입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Jisu. We can make a snowman in winter. I am very happy and excited about our English class today.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Jisu. We can make a snowman in winter. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Jisu이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "겨울에는 눈사람을 만들 수 있어.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 2,
        "correctAnswer": "겨울에는 눈사람을 만들 수 있어.",
        "explanation": "'We can make a snowman in winter.'(겨울에는 눈사람을 만들 수 있어.)이 핵심 문장입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kevin. The weather is cool and breezy today. I am very happy and excited about our English class today.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kevin. The weather is cool and breezy today. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kevin이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "오늘 날씨는 시원하고 산들바람이 불어."
        ],
        "correctIndex": 3,
        "correctAnswer": "오늘 날씨는 시원하고 산들바람이 불어.",
        "explanation": "'The weather is cool and breezy today.'(오늘 날씨는 시원하고 산들바람이 불어.)이 핵심 문장입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Emma. I like seeing colorful autumn leaves. I am very happy and excited about our English class today.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Emma. I like seeing colorful autumn leaves. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Emma이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "숙제가 너무 어려워서 고민이다.",
          "알록달록한 가을 단풍잎 보는 것을 좋아해.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 1,
        "correctAnswer": "알록달록한 가을 단풍잎 보는 것을 좋아해.",
        "explanation": "'I like seeing colorful autumn leaves.'(알록달록한 가을 단풍잎 보는 것을 좋아해.)이 핵심 문장입니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Tom. Why do you like winter so much? I am very happy and excited about our English class today.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Tom. Why do you like winter so much? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Tom이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다.",
          "숙제가 너무 어려워서 고민이다.",
          "너는 왜 겨울을 그렇게 좋아하니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "너는 왜 겨울을 그렇게 좋아하니?",
        "explanation": "'Why do you like winter so much?'(너는 왜 겨울을 그렇게 좋아하니?)이 핵심 문장입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Hana. Because I love skiing on the white snow. I am very happy and excited about our English class today.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Hana. Because I love skiing on the white snow. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Hana이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다.",
          "숙제가 너무 어려워서 고민이다.",
          "하얀 눈 위에서 스키 타는 것을 좋아하기 때문이야."
        ],
        "correctIndex": 3,
        "correctAnswer": "하얀 눈 위에서 스키 타는 것을 좋아하기 때문이야.",
        "explanation": "'Because I love skiing on the white snow.'(하얀 눈 위에서 스키 타는 것을 좋아하기 때문이야.)이 핵심 문장입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Brian. Spring brings green grass and warm sunshine. I am very happy and excited about our English class today.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Brian. Spring brings green grass and warm sunshine. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Brian이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 슬프다.",
          "봄은 초록 풀밭과 따뜻한 햇살을 가져와.",
          "길을 잃어서 병원을 찾고 있다.",
          "숙제가 너무 어려워서 고민이다."
        ],
        "correctIndex": 1,
        "correctAnswer": "봄은 초록 풀밭과 따뜻한 햇살을 가져와.",
        "explanation": "'Spring brings green grass and warm sunshine.'(봄은 초록 풀밭과 따뜻한 햇살을 가져와.)이 핵심 문장입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Amy. Good job on your beautiful drawing! I am very happy and excited about our English class today.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Amy. Good job on your beautiful drawing! I am very happy and excited about our English class today.\"\n질문: 윗글에서 Amy이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "아름다운 그림을 멋지게 완성했구나, 잘했어!",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 2,
        "correctAnswer": "아름다운 그림을 멋지게 완성했구나, 잘했어!",
        "explanation": "'Good job on your beautiful drawing!'(아름다운 그림을 멋지게 완성했구나, 잘했어!)이 핵심 문장입니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Paul. Summer is hot, but we can eat sweet watermelon. I am very happy and excited about our English class today.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Paul. Summer is hot, but we can eat sweet watermelon. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Paul이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "여름은 덥지만 달콤한 수박을 먹을 수 있어.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "여름은 덥지만 달콤한 수박을 먹을 수 있어.",
        "explanation": "'Summer is hot, but we can eat sweet watermelon.'(여름은 덥지만 달콤한 수박을 먹을 수 있어.)이 핵심 문장입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Minsoo. Which season has the best weather for you? I am very happy and excited about our English class today.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Minsoo. Which season has the best weather for you? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "숙제가 너무 어려워서 고민이다.",
          "길을 잃어서 병원을 찾고 있다.",
          "너에게 가장 날씨가 좋은 계절은 언제니?",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 2,
        "correctAnswer": "너에게 가장 날씨가 좋은 계절은 언제니?",
        "explanation": "'Which season has the best weather for you?'(너에게 가장 날씨가 좋은 계절은 언제니?)이 핵심 문장입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kelly. What season do you like? I am very happy and excited about our English class today.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kelly. What season do you like? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "너는 어떤 계절을 좋아하니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "너는 어떤 계절을 좋아하니?",
        "explanation": "'What season do you like?'(너는 어떤 계절을 좋아하니?)이 핵심 문장입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is David. I like spring because it is warm. I am very happy and excited about our English class today.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is David. I like spring because it is warm. I am very happy and excited about our English class today.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "따뜻해서 봄을 좋아해.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "따뜻해서 봄을 좋아해.",
        "explanation": "'I like spring because it is warm.'(따뜻해서 봄을 좋아해.)이 핵심 문장입니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Sarah. I can see beautiful flowers. I am very happy and excited about our English class today.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Sarah. I can see beautiful flowers. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 슬프다.",
          "아름다운 꽃들을 볼 수 있어.",
          "길을 잃어서 병원을 찾고 있다.",
          "숙제가 너무 어려워서 고민이다."
        ],
        "correctIndex": 1,
        "correctAnswer": "아름다운 꽃들을 볼 수 있어.",
        "explanation": "'I can see beautiful flowers.'(아름다운 꽃들을 볼 수 있어.)이 핵심 문장입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: What season do you like? And the response was: \"I like summer because I can swim in the cool sea.\"",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: What season do you like? And the response was: \"I like summer because I can swim in the cool sea.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: B가 좋아하는 계절과 활동은?",
        "options": [
          "가을 (등산하기)",
          "겨울 (스키 타기)",
          "봄 (꽃구경 가기)",
          "여름 (시원한 바다에서 수영하기)"
        ],
        "correctIndex": 3,
        "correctAnswer": "여름 (시원한 바다에서 수영하기)",
        "explanation": "'I like summer because I can swim'입니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Do you like fall? And the response was: \"Yes, fall is cool and breezy. I like red and yellow leaves.\"",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Do you like fall? And the response was: \"Yes, fall is cool and breezy. I like red and yellow leaves.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: B가 가을을 좋아하는 이유로 알맞은 것은?",
        "options": [
          "시원하고 알록달록한 단풍잎을 볼 수 있어서",
          "따뜻하고 비가 자주 와서",
          "방학이 제일 길어서",
          "눈이 펑펑 내려서"
        ],
        "correctIndex": 0,
        "correctAnswer": "시원하고 알록달록한 단풍잎을 볼 수 있어서",
        "explanation": "'fall is cool and breezy. I like red and yellow leaves'입니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: What season do you like the most? And the response was: \"I like winter because I can make a big snowman.\"",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: What season do you like the most? And the response was: \"I like winter because I can make a big snowman.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: B가 가장 좋아하는 계절은?",
        "options": [
          "가을",
          "여름",
          "봄",
          "겨울"
        ],
        "correctIndex": 3,
        "correctAnswer": "겨울",
        "explanation": "'I like winter because I can make a big snowman'입니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Look at my flower drawing! And the response was: \"Good job! It is really colorful and pretty.\"",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Look at my flower drawing! And the response was: \"Good job! It is really colorful and pretty.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: B가 상대방에게 건넨 칭찬의 말은?",
        "options": [
          "Cheer up! (기운 내!)",
          "Watch out! (조심해!)",
          "Don't worry! (걱정 마!)",
          "Good job! (잘했어!)"
        ],
        "correctIndex": 3,
        "correctAnswer": "Good job! (잘했어!)",
        "explanation": "교과서 핵심 칭찬 표현인 'Good job!'입니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: How is the weather today? And the response was: \"It is warm and sunny.\"",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: How is the weather today? And the response was: \"It is warm and sunny.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 오늘의 날씨 묘사로 알맞은 것은?",
        "options": [
          "따뜻하고 화창함",
          "춥고 눈이 내림",
          "쌀쌀하고 안개 낌",
          "비가 오고 번개 침"
        ],
        "correctIndex": 0,
        "correctAnswer": "따뜻하고 화창함",
        "explanation": "'warm and sunny'는 따뜻하고 화창한 날씨입니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: I love autumn picnics. And the response was: \"Good job preparing this delicious lunch!\"",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: I love autumn picnics. And the response was: \"Good job preparing this delicious lunch!\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: B가 칭찬한 내용은?",
        "options": [
          "자전거를 빨리 탄 것",
          "맛있는 점심을 준비한 것",
          "숙제를 일찍 끝낸 것",
          "노래를 잘 부른 것"
        ],
        "correctIndex": 1,
        "correctAnswer": "맛있는 점심을 준비한 것",
        "explanation": "점심 도시락을 칭찬하고 있습니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: What season do you like, Minsoo? And the response was: \"I like spring. I can see beautiful flowers.\"",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: What season do you like, Minsoo? And the response was: \"I like spring. I can see beautiful flowers.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: Minsoo가 좋아하는 계절과 그 이유는?",
        "options": [
          "겨울 (눈사람을 만들 수 있어서)",
          "봄 (아름다운 꽃을 볼 수 있어서)",
          "여름 (바다에서 수영할 수 있어서)",
          "가을 (단풍을 볼 수 있어서)"
        ],
        "correctIndex": 1,
        "correctAnswer": "봄 (아름다운 꽃을 볼 수 있어서)",
        "explanation": "'I like spring. I can see beautiful flowers.'입니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: What season do you like? And the response was: \"I like summer because I can swim in the cool sea.\"",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: What season do you like? And the response was: \"I like summer because I can swim in the cool sea.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: B가 좋아하는 계절과 활동은?",
        "options": [
          "가을 (등산하기)",
          "겨울 (스키 타기)",
          "봄 (꽃구경 가기)",
          "여름 (시원한 바다에서 수영하기)"
        ],
        "correctIndex": 3,
        "correctAnswer": "여름 (시원한 바다에서 수영하기)",
        "explanation": "'I like summer because I can swim'입니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Do you like fall? And the response was: \"Yes, fall is cool and breezy. I like red and yellow leaves.\"",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Do you like fall? And the response was: \"Yes, fall is cool and breezy. I like red and yellow leaves.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: B가 가을을 좋아하는 이유로 알맞은 것은?",
        "options": [
          "따뜻하고 비가 자주 와서",
          "시원하고 알록달록한 단풍잎을 볼 수 있어서",
          "눈이 펑펑 내려서",
          "방학이 제일 길어서"
        ],
        "correctIndex": 1,
        "correctAnswer": "시원하고 알록달록한 단풍잎을 볼 수 있어서",
        "explanation": "'fall is cool and breezy. I like red and yellow leaves'입니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: What season do you like the most? And the response was: \"I like winter because I can make a big snowman.\"",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: What season do you like the most? And the response was: \"I like winter because I can make a big snowman.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: B가 가장 좋아하는 계절은?",
        "options": [
          "겨울",
          "봄",
          "여름",
          "가을"
        ],
        "correctIndex": 0,
        "correctAnswer": "겨울",
        "explanation": "'I like winter because I can make a big snowman'입니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'swim' is a new word in 2단원. In Korean, it means '수영하다'.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'swim' is a new word in 2단원. In Korean, it means '수영하다'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'swim'의 뜻은?",
        "options": [
          "계절",
          "여름",
          "봄",
          "수영하다"
        ],
        "correctIndex": 3,
        "correctAnswer": "수영하다",
        "explanation": "'swim'은 '수영하다'입니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'leaves' is a new word in 2단원. In Korean, it means '나뭇잎들'.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'leaves' is a new word in 2단원. In Korean, it means '나뭇잎들'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'leaves'의 뜻은?",
        "options": [
          "나뭇잎들",
          "여름",
          "계절",
          "봄"
        ],
        "correctIndex": 0,
        "correctAnswer": "나뭇잎들",
        "explanation": "'leaves'은 '나뭇잎들'입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'pretty' is a new word in 2단원. In Korean, it means '예쁜'.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'pretty' is a new word in 2단원. In Korean, it means '예쁜'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'pretty'의 뜻은?",
        "options": [
          "봄",
          "계절",
          "여름",
          "예쁜"
        ],
        "correctIndex": 3,
        "correctAnswer": "예쁜",
        "explanation": "'pretty'은 '예쁜'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'season' is a new word in 2단원. In Korean, it means '계절'.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'season' is a new word in 2단원. In Korean, it means '계절'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'season'의 뜻은?",
        "options": [
          "여름",
          "가을",
          "봄",
          "계절"
        ],
        "correctIndex": 3,
        "correctAnswer": "계절",
        "explanation": "'season'은 '계절'입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'spring' is a new word in 2단원. In Korean, it means '봄'.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'spring' is a new word in 2단원. In Korean, it means '봄'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'spring'의 뜻은?",
        "options": [
          "봄",
          "계절",
          "가을",
          "여름"
        ],
        "correctIndex": 0,
        "correctAnswer": "봄",
        "explanation": "'spring'은 '봄'입니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'summer' is a new word in 2단원. In Korean, it means '여름'.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'summer' is a new word in 2단원. In Korean, it means '여름'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'summer'의 뜻은?",
        "options": [
          "여름",
          "가을",
          "계절",
          "봄"
        ],
        "correctIndex": 0,
        "correctAnswer": "여름",
        "explanation": "'summer'은 '여름'입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'fall' is a new word in 2단원. In Korean, it means '가을'.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'fall' is a new word in 2단원. In Korean, it means '가을'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'fall'의 뜻은?",
        "options": [
          "가을",
          "계절",
          "봄",
          "여름"
        ],
        "correctIndex": 0,
        "correctAnswer": "가을",
        "explanation": "'fall'은 '가을'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'winter' is a new word in 2단원. In Korean, it means '겨울'.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'winter' is a new word in 2단원. In Korean, it means '겨울'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'winter'의 뜻은?",
        "options": [
          "겨울",
          "계절",
          "여름",
          "봄"
        ],
        "correctIndex": 0,
        "correctAnswer": "겨울",
        "explanation": "'winter'은 '겨울'입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'weather' is a new word in 2단원. In Korean, it means '날씨'.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'weather' is a new word in 2단원. In Korean, it means '날씨'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'weather'의 뜻은?",
        "options": [
          "날씨",
          "계절",
          "봄",
          "여름"
        ],
        "correctIndex": 0,
        "correctAnswer": "날씨",
        "explanation": "'weather'은 '날씨'입니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'warm' is a new word in 2단원. In Korean, it means '따뜻한'.",
        "question": "[읽기 · 2단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'warm' is a new word in 2단원. In Korean, it means '따뜻한'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'warm'의 뜻은?",
        "options": [
          "봄",
          "여름",
          "계절",
          "따뜻한"
        ],
        "correctIndex": 3,
        "correctAnswer": "따뜻한",
        "explanation": "'warm'은 '따뜻한'입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 2단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"계절\" (첫 글자: s, 총 6글자)",
        "correctAnswer": "season",
        "explanation": "'계절'의 영어 표기는 'season'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 2단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"봄\" (첫 글자: s, 총 6글자)",
        "correctAnswer": "spring",
        "explanation": "'봄'의 영어 표기는 'spring'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 2단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"여름\" (첫 글자: s, 총 6글자)",
        "correctAnswer": "summer",
        "explanation": "'여름'의 영어 표기는 'summer'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 2단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"가을\" (첫 글자: f, 총 4글자)",
        "correctAnswer": "fall",
        "explanation": "'가을'의 영어 표기는 'fall'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 2단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"겨울\" (첫 글자: w, 총 6글자)",
        "correctAnswer": "winter",
        "explanation": "'겨울'의 영어 표기는 'winter'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 2단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"날씨\" (첫 글자: w, 총 7글자)",
        "correctAnswer": "weather",
        "explanation": "'날씨'의 영어 표기는 'weather'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 2단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"따뜻한\" (첫 글자: w, 총 4글자)",
        "correctAnswer": "warm",
        "explanation": "'따뜻한'의 영어 표기는 'warm'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 2단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"시원한\" (첫 글자: c, 총 4글자)",
        "correctAnswer": "cool",
        "explanation": "'시원한'의 영어 표기는 'cool'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 2단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"추운\" (첫 글자: c, 총 4글자)",
        "correctAnswer": "cold",
        "explanation": "'추운'의 영어 표기는 'cold'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 2단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"더운\" (첫 글자: h, 총 3글자)",
        "correctAnswer": "hot",
        "explanation": "'더운'의 영어 표기는 'hot'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 2단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"꽃\" (첫 글자: f, 총 6글자)",
        "correctAnswer": "flower",
        "explanation": "'꽃'의 영어 표기는 'flower'입니다."
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 2단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"눈사람\" (첫 글자: s, 총 7글자)",
        "correctAnswer": "snowman",
        "explanation": "'눈사람'의 영어 표기는 'snowman'입니다."
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 2단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"수영하다\" (첫 글자: s, 총 4글자)",
        "correctAnswer": "swim",
        "explanation": "'수영하다'의 영어 표기는 'swim'입니다."
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 2단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"나뭇잎들\" (첫 글자: l, 총 6글자)",
        "correctAnswer": "leaves",
        "explanation": "'나뭇잎들'의 영어 표기는 'leaves'입니다."
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 2단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"예쁜\" (첫 글자: p, 총 6글자)",
        "correctAnswer": "pretty",
        "explanation": "'예쁜'의 영어 표기는 'pretty'입니다."
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"너는 어떤 계절을 좋아하니?\"",
        "chips": [
          "What",
          "season",
          "do",
          "you",
          "like?"
        ],
        "correctAnswer": "What season do you like?",
        "explanation": "'What season do you like?'은 '너는 어떤 계절을 좋아하니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"따뜻해서 봄을 좋아해.\"",
        "chips": [
          "I",
          "like",
          "spring",
          "because",
          "it",
          "is",
          "warm."
        ],
        "correctAnswer": "I like spring because it is warm.",
        "explanation": "'I like spring because it is warm.'은 '따뜻해서 봄을 좋아해.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"아름다운 꽃들을 볼 수 있어.\"",
        "chips": [
          "I",
          "can",
          "see",
          "beautiful",
          "flowers."
        ],
        "correctAnswer": "I can see beautiful flowers.",
        "explanation": "'I can see beautiful flowers.'은 '아름다운 꽃들을 볼 수 있어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"잘했어! 아주 잘 해냈구나.\"",
        "chips": [
          "Good",
          "job",
          "You",
          "did",
          "very",
          "well."
        ],
        "correctAnswer": "Good job! You did very well.",
        "explanation": "'Good job! You did very well.'은 '잘했어! 아주 잘 해냈구나.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"수영할 수 있어서 여름이 좋아.\"",
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
        "explanation": "'I like summer because I can swim.'은 '수영할 수 있어서 여름이 좋아.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"가을은 내가 가장 좋아하는 계절이야.\"",
        "chips": [
          "Fall",
          "is",
          "my",
          "favorite",
          "season."
        ],
        "correctAnswer": "Fall is my favorite season.",
        "explanation": "'Fall is my favorite season.'은 '가을은 내가 가장 좋아하는 계절이야.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"겨울에는 눈사람을 만들 수 있어.\"",
        "chips": [
          "We",
          "can",
          "make",
          "a",
          "snowman",
          "in",
          "winter."
        ],
        "correctAnswer": "We can make a snowman in winter.",
        "explanation": "'We can make a snowman in winter.'은 '겨울에는 눈사람을 만들 수 있어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"오늘 날씨는 시원하고 산들바람이 불어.\"",
        "chips": [
          "The",
          "weather",
          "is",
          "cool",
          "and",
          "breezy",
          "today."
        ],
        "correctAnswer": "The weather is cool and breezy today.",
        "explanation": "'The weather is cool and breezy today.'은 '오늘 날씨는 시원하고 산들바람이 불어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"알록달록한 가을 단풍잎 보는 것을 좋아해.\"",
        "chips": [
          "I",
          "like",
          "seeing",
          "colorful",
          "autumn",
          "leaves."
        ],
        "correctAnswer": "I like seeing colorful autumn leaves.",
        "explanation": "'I like seeing colorful autumn leaves.'은 '알록달록한 가을 단풍잎 보는 것을 좋아해.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"너는 왜 겨울을 그렇게 좋아하니?\"",
        "chips": [
          "Why",
          "do",
          "you",
          "like",
          "winter",
          "so",
          "much?"
        ],
        "correctAnswer": "Why do you like winter so much?",
        "explanation": "'Why do you like winter so much?'은 '너는 왜 겨울을 그렇게 좋아하니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 96,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"하얀 눈 위에서 스키 타는 것을 좋아하기 때문이야.\"",
        "chips": [
          "Because",
          "I",
          "love",
          "skiing",
          "on",
          "the",
          "white",
          "snow."
        ],
        "correctAnswer": "Because I love skiing on the white snow.",
        "explanation": "'Because I love skiing on the white snow.'은 '하얀 눈 위에서 스키 타는 것을 좋아하기 때문이야.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 97,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"봄은 초록 풀밭과 따뜻한 햇살을 가져와.\"",
        "chips": [
          "Spring",
          "brings",
          "green",
          "grass",
          "and",
          "warm",
          "sunshine."
        ],
        "correctAnswer": "Spring brings green grass and warm sunshine.",
        "explanation": "'Spring brings green grass and warm sunshine.'은 '봄은 초록 풀밭과 따뜻한 햇살을 가져와.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 98,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"아름다운 그림을 멋지게 완성했구나, 잘했어!\"",
        "chips": [
          "Good",
          "job",
          "on",
          "your",
          "beautiful",
          "drawing."
        ],
        "correctAnswer": "Good job on your beautiful drawing!",
        "explanation": "'Good job on your beautiful drawing!'은 '아름다운 그림을 멋지게 완성했구나, 잘했어!'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 99,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 2단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"여름은 덥지만 달콤한 수박을 먹을 수 있어.\"",
        "chips": [
          "Summer",
          "is",
          "hot",
          "but",
          "we",
          "can",
          "eat",
          "sweet",
          "watermelon."
        ],
        "correctAnswer": "Summer is hot, but we can eat sweet watermelon.",
        "explanation": "'Summer is hot, but we can eat sweet watermelon.'은 '여름은 덥지만 달콤한 수박을 먹을 수 있어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[최종 골든벨 문제] 다음 우리말에 맞도록 주어진 단어 카드를 순서대로 바르게 배열하세요!\n우리말: \"너에게 가장 날씨가 좋은 계절은 언제니?\"",
        "chips": [
          "Which",
          "season",
          "has",
          "the",
          "best",
          "weather",
          "for",
          "you?"
        ],
        "correctAnswer": "Which season has the best weather for you?",
        "explanation": "'Which season has the best weather for you?'은 '너에게 가장 날씨가 좋은 계절은 언제니?'을 의미하는 교과서 핵심 문장입니다."
      }
    ]
  },
  "6G_L03": {
    "name": "3단원: When is your birthday? (날짜와 생일 · 기대 표현하기)",
    "grade": 6,
    "theme": "Dates, Birthdays & Anticipation",
    "totalQuestions": 100,
    "questions": [
      {
        "id": 1,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Minsoo: When is your birthday, David? David: It is on May 7th.",
        "question": "[듣기 · 3단원] 대화를 듣고, David의 생일 날짜는 언제인가요?",
        "options": [
          "5월 7일",
          "5월 17일",
          "6월 7일",
          "3월 7일"
        ],
        "correctIndex": 0,
        "correctAnswer": "5월 7일",
        "explanation": "'May 7th'는 5월 7일입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kelly: When is your birthday? Sarah: My birthday is on October 15th.",
        "question": "[듣기 · 3단원] 대화를 듣고, B의 생일은 몇 월 며칠인가요?",
        "options": [
          "10월 15일",
          "9월 15일",
          "11월 15일",
          "10월 5일"
        ],
        "correctIndex": 0,
        "correctAnswer": "10월 15일",
        "explanation": "'October 15th'는 10월 15일입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "David: The school festival is next Friday! Jisu: I can't wait! It will be so much fun.",
        "question": "[듣기 · 3단원] 대화를 듣고, B가 나타낸 감정(I can't wait!)의 뜻은?",
        "options": [
          "갈 수 없어 미안해!",
          "기다리기 싫어! (짜증나!)",
          "시간이 너무 없어!",
          "정말 기대돼! (몹시 기다려져!)"
        ],
        "correctIndex": 3,
        "correctAnswer": "정말 기대돼! (몹시 기다려져!)",
        "explanation": "'I can't wait!'는 몹시 기다려지고 기대된다는 뜻입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Sarah: When is the sports day? Kevin: It is on September 23rd.",
        "question": "[듣기 · 3단원] 대화를 듣고, 운동회(sports day) 날짜는?",
        "options": [
          "10월 23일",
          "8월 23일",
          "9월 13일",
          "9월 23일"
        ],
        "correctIndex": 3,
        "correctAnswer": "9월 23일",
        "explanation": "'September 23rd'는 9월 23일입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Jisu: When is your sister's birthday? Emma: It is on December 25th, Christmas Day!",
        "question": "[듣기 · 3단원] 대화를 듣고, 여동생의 생일은 언제인가요?",
        "options": [
          "1월 25일",
          "12월 15일",
          "12월 25일",
          "11월 25일"
        ],
        "correctIndex": 2,
        "correctAnswer": "12월 25일",
        "explanation": "'December 25th'는 12월 25일입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kevin: We are going to the amusement park tomorrow! Tom: I can't wait to ride the roller coaster!",
        "question": "[듣기 · 3단원] 대화를 듣고, B가 내일 몹시 기대하고 있는 것은?",
        "options": [
          "솜사탕 사 먹기",
          "롤러코스터 타기",
          "사진 찍기",
          "기념품 구경하기"
        ],
        "correctIndex": 1,
        "correctAnswer": "롤러코스터 타기",
        "explanation": "'I can't wait to ride the roller coaster'입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Emma: When is our class party? Hana: It is on March 30th after school.",
        "question": "[듣기 · 3단원] 대화를 듣고, 학급 파티 날짜는?",
        "options": [
          "3월 13일",
          "2월 28일",
          "4월 30일",
          "3월 30일"
        ],
        "correctIndex": 3,
        "correctAnswer": "3월 30일",
        "explanation": "'March 30th'는 3월 30일입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Tom: When is your birthday, David? Brian: It is on May 7th.",
        "question": "[듣기 · 3단원] 대화를 듣고, David의 생일 날짜는 언제인가요?",
        "options": [
          "5월 7일",
          "5월 17일",
          "6월 7일",
          "3월 7일"
        ],
        "correctIndex": 0,
        "correctAnswer": "5월 7일",
        "explanation": "'May 7th'는 5월 7일입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Hana: When is your birthday? Amy: My birthday is on October 15th.",
        "question": "[듣기 · 3단원] 대화를 듣고, B의 생일은 몇 월 며칠인가요?",
        "options": [
          "10월 15일",
          "11월 15일",
          "9월 15일",
          "10월 5일"
        ],
        "correctIndex": 0,
        "correctAnswer": "10월 15일",
        "explanation": "'October 15th'는 10월 15일입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Brian: The school festival is next Friday! Paul: I can't wait! It will be so much fun.",
        "question": "[듣기 · 3단원] 대화를 듣고, B가 나타낸 감정(I can't wait!)의 뜻은?",
        "options": [
          "시간이 너무 없어!",
          "기다리기 싫어! (짜증나!)",
          "정말 기대돼! (몹시 기다려져!)",
          "갈 수 없어 미안해!"
        ],
        "correctIndex": 2,
        "correctAnswer": "정말 기대돼! (몹시 기다려져!)",
        "explanation": "'I can't wait!'는 몹시 기다려지고 기대된다는 뜻입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Amy: When is the sports day? Minsoo: It is on September 23rd.",
        "question": "[듣기 · 3단원] 대화를 듣고, 운동회(sports day) 날짜는?",
        "options": [
          "8월 23일",
          "9월 13일",
          "9월 23일",
          "10월 23일"
        ],
        "correctIndex": 2,
        "correctAnswer": "9월 23일",
        "explanation": "'September 23rd'는 9월 23일입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Paul: When is your sister's birthday? Kelly: It is on December 25th, Christmas Day!",
        "question": "[듣기 · 3단원] 대화를 듣고, 여동생의 생일은 언제인가요?",
        "options": [
          "12월 15일",
          "1월 25일",
          "11월 25일",
          "12월 25일"
        ],
        "correctIndex": 3,
        "correctAnswer": "12월 25일",
        "explanation": "'December 25th'는 12월 25일입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: We are going to the amusement park tomorrow! David: I can't wait to ride the roller coaster!",
        "question": "[듣기 · 3단원] 대화를 듣고, B가 내일 몹시 기대하고 있는 것은?",
        "options": [
          "사진 찍기",
          "솜사탕 사 먹기",
          "롤러코스터 타기",
          "기념품 구경하기"
        ],
        "correctIndex": 2,
        "correctAnswer": "롤러코스터 타기",
        "explanation": "'I can't wait to ride the roller coaster'입니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kelly: When is our class party? Sarah: It is on March 30th after school.",
        "question": "[듣기 · 3단원] 대화를 듣고, 학급 파티 날짜는?",
        "options": [
          "4월 30일",
          "3월 13일",
          "3월 30일",
          "2월 28일"
        ],
        "correctIndex": 2,
        "correctAnswer": "3월 30일",
        "explanation": "'March 30th'는 3월 30일입니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "David: When is your birthday, David? Jisu: It is on May 7th.",
        "question": "[듣기 · 3단원] 대화를 듣고, David의 생일 날짜는 언제인가요?",
        "options": [
          "3월 7일",
          "5월 17일",
          "5월 7일",
          "6월 7일"
        ],
        "correctIndex": 2,
        "correctAnswer": "5월 7일",
        "explanation": "'May 7th'는 5월 7일입니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Sarah: When is your birthday? Kevin: I agree with you!",
        "question": "[듣기 · 3단원] 대화에서 Sarah이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음 기회에 다시 이야기하자.",
          "네 생일은 언제니?",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 1,
        "correctAnswer": "네 생일은 언제니?",
        "explanation": "'When is your birthday?'은 '네 생일은 언제니?'을 의미합니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Jisu: It is on May 7th. Emma: I agree with you!",
        "question": "[듣기 · 3단원] 대화에서 Jisu이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "5월 7일이야.",
          "나는 무슨 말인지 잘 모르겠어.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아."
        ],
        "correctIndex": 0,
        "correctAnswer": "5월 7일이야.",
        "explanation": "'It is on May 7th.'은 '5월 7일이야.'을 의미합니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kevin: I can't wait for the party! Tom: I agree with you!",
        "question": "[듣기 · 3단원] 대화에서 Kevin이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "파티가 너무너무 기다려져!",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "파티가 너무너무 기다려져!",
        "explanation": "'I can't wait for the party!'은 '파티가 너무너무 기다려져!'을 의미합니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Emma: When is the school sports day? Hana: I agree with you!",
        "question": "[듣기 · 3단원] 대화에서 Emma이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "학교 운동회는 언제니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "학교 운동회는 언제니?",
        "explanation": "'When is the school sports day?'은 '학교 운동회는 언제니?'을 의미합니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Tom: It is on September 23rd. Brian: I agree with you!",
        "question": "[듣기 · 3단원] 대화에서 Tom이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어.",
          "다음 기회에 다시 이야기하자.",
          "9월 23일이야."
        ],
        "correctIndex": 3,
        "correctAnswer": "9월 23일이야.",
        "explanation": "'It is on September 23rd.'은 '9월 23일이야.'을 의미합니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Hana: My birthday is on Christmas Day. Amy: I agree with you!",
        "question": "[듣기 · 3단원] 대화에서 Hana이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "내 생일은 크리스마스 날이야.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아."
        ],
        "correctIndex": 1,
        "correctAnswer": "내 생일은 크리스마스 날이야.",
        "explanation": "'My birthday is on Christmas Day.'은 '내 생일은 크리스마스 날이야.'을 의미합니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Brian: I can't wait to see my friends tomorrow. Paul: I agree with you!",
        "question": "[듣기 · 3단원] 대화에서 Brian이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "내일 친구들을 만날 생각에 몹시 기대돼.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "내일 친구들을 만날 생각에 몹시 기대돼.",
        "explanation": "'I can't wait to see my friends tomorrow.'은 '내일 친구들을 만날 생각에 몹시 기대돼.'을 의미합니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Amy: Please come to my birthday party. Minsoo: I agree with you!",
        "question": "[듣기 · 3단원] 대화에서 Amy이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "내 생일 파티에 꼭 와주렴.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 2,
        "correctAnswer": "내 생일 파티에 꼭 와주렴.",
        "explanation": "'Please come to my birthday party.'은 '내 생일 파티에 꼭 와주렴.'을 의미합니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Paul: When is the English speech contest? Kelly: I agree with you!",
        "question": "[듣기 · 3단원] 대화에서 Paul이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "영어 말하기 대회는 언제 열리니?",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "영어 말하기 대회는 언제 열리니?",
        "explanation": "'When is the English speech contest?'은 '영어 말하기 대회는 언제 열리니?'을 의미합니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: It is on November 12th. David: I agree with you!",
        "question": "[듣기 · 3단원] 대화에서 Minsoo이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "다음 기회에 다시 이야기하자.",
          "11월 12일이야.",
          "그것은 좋은 생각이 아닌 것 같아."
        ],
        "correctIndex": 2,
        "correctAnswer": "11월 12일이야.",
        "explanation": "'It is on November 12th.'은 '11월 12일이야.'을 의미합니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kelly: What does 'present' mean in Korean? Sarah: It means '선물'.",
        "question": "[듣기 · 3단원] 대화에서 언급된 영어 단어 'present'의 우리말 뜻으로 바른 것은?",
        "options": [
          "생일",
          "날짜",
          "선물",
          "언제"
        ],
        "correctIndex": 2,
        "correctAnswer": "선물",
        "explanation": "'present'은 '선물'를 뜻합니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "David: What does 'celebrate' mean in Korean? Jisu: It means '축하하다'.",
        "question": "[듣기 · 3단원] 대화에서 언급된 영어 단어 'celebrate'의 우리말 뜻으로 바른 것은?",
        "options": [
          "축하하다",
          "생일",
          "언제",
          "날짜"
        ],
        "correctIndex": 0,
        "correctAnswer": "축하하다",
        "explanation": "'celebrate'은 '축하하다'를 뜻합니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Sarah: What does 'calendar' mean in Korean? Kevin: It means '달력'.",
        "question": "[듣기 · 3단원] 대화에서 언급된 영어 단어 'calendar'의 우리말 뜻으로 바른 것은?",
        "options": [
          "달력",
          "날짜",
          "생일",
          "언제"
        ],
        "correctIndex": 0,
        "correctAnswer": "달력",
        "explanation": "'calendar'은 '달력'를 뜻합니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Jisu: What does 'sports' mean in Korean? Emma: It means '운동, 스포츠'.",
        "question": "[듣기 · 3단원] 대화에서 언급된 영어 단어 'sports'의 우리말 뜻으로 바른 것은?",
        "options": [
          "언제",
          "날짜",
          "생일",
          "운동, 스포츠"
        ],
        "correctIndex": 3,
        "correctAnswer": "운동, 스포츠",
        "explanation": "'sports'은 '운동, 스포츠'를 뜻합니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kevin: What does 'fun' mean in Korean? Tom: It means '재미'.",
        "question": "[듣기 · 3단원] 대화에서 언급된 영어 단어 'fun'의 우리말 뜻으로 바른 것은?",
        "options": [
          "생일",
          "재미",
          "날짜",
          "언제"
        ],
        "correctIndex": 1,
        "correctAnswer": "재미",
        "explanation": "'fun'은 '재미'를 뜻합니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Emma: What does 'birthday' mean in Korean? Hana: It means '생일'.",
        "question": "[듣기 · 3단원] 대화에서 언급된 영어 단어 'birthday'의 우리말 뜻으로 바른 것은?",
        "options": [
          "날짜",
          "기다리다",
          "언제",
          "생일"
        ],
        "correctIndex": 3,
        "correctAnswer": "생일",
        "explanation": "'birthday'은 '생일'를 뜻합니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Tom: What does 'when' mean in Korean? Brian: It means '언제'.",
        "question": "[듣기 · 3단원] 대화에서 언급된 영어 단어 'when'의 우리말 뜻으로 바른 것은?",
        "options": [
          "기다리다",
          "날짜",
          "생일",
          "언제"
        ],
        "correctIndex": 3,
        "correctAnswer": "언제",
        "explanation": "'when'은 '언제'를 뜻합니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Hana: What does 'date' mean in Korean? Amy: It means '날짜'.",
        "question": "[듣기 · 3단원] 대화에서 언급된 영어 단어 'date'의 우리말 뜻으로 바른 것은?",
        "options": [
          "기다리다",
          "언제",
          "생일",
          "날짜"
        ],
        "correctIndex": 3,
        "correctAnswer": "날짜",
        "explanation": "'date'은 '날짜'를 뜻합니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Brian: What does 'wait' mean in Korean? Paul: It means '기다리다'.",
        "question": "[듣기 · 3단원] 대화에서 언급된 영어 단어 'wait'의 우리말 뜻으로 바른 것은?",
        "options": [
          "언제",
          "생일",
          "날짜",
          "기다리다"
        ],
        "correctIndex": 3,
        "correctAnswer": "기다리다",
        "explanation": "'wait'은 '기다리다'를 뜻합니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Amy: What does 'party' mean in Korean? Minsoo: It means '파티'.",
        "question": "[듣기 · 3단원] 대화에서 언급된 영어 단어 'party'의 우리말 뜻으로 바른 것은?",
        "options": [
          "언제",
          "파티",
          "날짜",
          "생일"
        ],
        "correctIndex": 1,
        "correctAnswer": "파티",
        "explanation": "'party'은 '파티'를 뜻합니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kelly. When is the school sports day? I am very happy and excited about our English class today.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kelly. When is the school sports day? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다.",
          "숙제가 너무 어려워서 고민이다.",
          "학교 운동회는 언제니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "학교 운동회는 언제니?",
        "explanation": "'When is the school sports day?'(학교 운동회는 언제니?)이 핵심 문장입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is David. It is on September 23rd. I am very happy and excited about our English class today.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is David. It is on September 23rd. I am very happy and excited about our English class today.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "숙제가 너무 어려워서 고민이다.",
          "9월 23일이야.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 2,
        "correctAnswer": "9월 23일이야.",
        "explanation": "'It is on September 23rd.'(9월 23일이야.)이 핵심 문장입니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Sarah. My birthday is on Christmas Day. I am very happy and excited about our English class today.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Sarah. My birthday is on Christmas Day. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "내 생일은 크리스마스 날이야.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 1,
        "correctAnswer": "내 생일은 크리스마스 날이야.",
        "explanation": "'My birthday is on Christmas Day.'(내 생일은 크리스마스 날이야.)이 핵심 문장입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Jisu. I can't wait to see my friends tomorrow. I am very happy and excited about our English class today.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Jisu. I can't wait to see my friends tomorrow. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Jisu이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "내일 친구들을 만날 생각에 몹시 기대돼."
        ],
        "correctIndex": 3,
        "correctAnswer": "내일 친구들을 만날 생각에 몹시 기대돼.",
        "explanation": "'I can't wait to see my friends tomorrow.'(내일 친구들을 만날 생각에 몹시 기대돼.)이 핵심 문장입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kevin. Please come to my birthday party. I am very happy and excited about our English class today.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kevin. Please come to my birthday party. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kevin이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "내 생일 파티에 꼭 와주렴.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다."
        ],
        "correctIndex": 1,
        "correctAnswer": "내 생일 파티에 꼭 와주렴.",
        "explanation": "'Please come to my birthday party.'(내 생일 파티에 꼭 와주렴.)이 핵심 문장입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Emma. When is the English speech contest? I am very happy and excited about our English class today.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Emma. When is the English speech contest? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Emma이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다.",
          "숙제가 너무 어려워서 고민이다.",
          "영어 말하기 대회는 언제 열리니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "영어 말하기 대회는 언제 열리니?",
        "explanation": "'When is the English speech contest?'(영어 말하기 대회는 언제 열리니?)이 핵심 문장입니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Tom. It is on November 12th. I am very happy and excited about our English class today.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Tom. It is on November 12th. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Tom이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "11월 12일이야.",
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다."
        ],
        "correctIndex": 0,
        "correctAnswer": "11월 12일이야.",
        "explanation": "'It is on November 12th.'(11월 12일이야.)이 핵심 문장입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Hana. We are going to have a big celebration. I am very happy and excited about our English class today.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Hana. We are going to have a big celebration. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Hana이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "우리는 성대한 축하 행사를 열 거야."
        ],
        "correctIndex": 3,
        "correctAnswer": "우리는 성대한 축하 행사를 열 거야.",
        "explanation": "'We are going to have a big celebration.'(우리는 성대한 축하 행사를 열 거야.)이 핵심 문장입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Brian. Happy birthday to you, my dear friend! I am very happy and excited about our English class today.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Brian. Happy birthday to you, my dear friend! I am very happy and excited about our English class today.\"\n질문: 윗글에서 Brian이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "숙제가 너무 어려워서 고민이다.",
          "길을 잃어서 병원을 찾고 있다.",
          "사랑하는 내 친구야, 생일 진심으로 축하해!",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 2,
        "correctAnswer": "사랑하는 내 친구야, 생일 진심으로 축하해!",
        "explanation": "'Happy birthday to you, my dear friend!'(사랑하는 내 친구야, 생일 진심으로 축하해!)이 핵심 문장입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Amy. I can't wait for our summer vacation. I am very happy and excited about our English class today.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Amy. I can't wait for our summer vacation. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Amy이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "숙제가 너무 어려워서 고민이다.",
          "여름방학이 정말 손꼽아 기다려져.",
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 1,
        "correctAnswer": "여름방학이 정말 손꼽아 기다려져.",
        "explanation": "'I can't wait for our summer vacation.'(여름방학이 정말 손꼽아 기다려져.)이 핵심 문장입니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Paul. What date is it today? I am very happy and excited about our English class today.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Paul. What date is it today? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Paul이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "오늘이 며칠이니?",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "오늘이 며칠이니?",
        "explanation": "'What date is it today?'(오늘이 며칠이니?)이 핵심 문장입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Minsoo. Check the date on the school calendar. I am very happy and excited about our English class today.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Minsoo. Check the date on the school calendar. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다.",
          "학교 달력에서 날짜를 확인해 봐.",
          "숙제가 너무 어려워서 고민이다."
        ],
        "correctIndex": 2,
        "correctAnswer": "학교 달력에서 날짜를 확인해 봐.",
        "explanation": "'Check the date on the school calendar.'(학교 달력에서 날짜를 확인해 봐.)이 핵심 문장입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kelly. When is your birthday? I am very happy and excited about our English class today.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kelly. When is your birthday? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "네 생일은 언제니?",
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다."
        ],
        "correctIndex": 0,
        "correctAnswer": "네 생일은 언제니?",
        "explanation": "'When is your birthday?'(네 생일은 언제니?)이 핵심 문장입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is David. It is on May 7th. I am very happy and excited about our English class today.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is David. It is on May 7th. I am very happy and excited about our English class today.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "5월 7일이야.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "5월 7일이야.",
        "explanation": "'It is on May 7th.'(5월 7일이야.)이 핵심 문장입니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Sarah. I can't wait for the party! I am very happy and excited about our English class today.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Sarah. I can't wait for the party! I am very happy and excited about our English class today.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 슬프다.",
          "파티가 너무너무 기다려져!",
          "숙제가 너무 어려워서 고민이다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 1,
        "correctAnswer": "파티가 너무너무 기다려져!",
        "explanation": "'I can't wait for the party!'(파티가 너무너무 기다려져!)이 핵심 문장입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: When is your birthday? And the response was: \"My birthday is on October 15th.\"",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: When is your birthday? And the response was: \"My birthday is on October 15th.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: B의 생일은 몇 월 며칠인가요?",
        "options": [
          "10월 5일",
          "9월 15일",
          "11월 15일",
          "10월 15일"
        ],
        "correctIndex": 3,
        "correctAnswer": "10월 15일",
        "explanation": "'October 15th'는 10월 15일입니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: The school festival is next Friday! And the response was: \"I can't wait! It will be so much fun.\"",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: The school festival is next Friday! And the response was: \"I can't wait! It will be so much fun.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: B가 나타낸 감정(I can't wait!)의 뜻은?",
        "options": [
          "시간이 너무 없어!",
          "갈 수 없어 미안해!",
          "정말 기대돼! (몹시 기다려져!)",
          "기다리기 싫어! (짜증나!)"
        ],
        "correctIndex": 2,
        "correctAnswer": "정말 기대돼! (몹시 기다려져!)",
        "explanation": "'I can't wait!'는 몹시 기다려지고 기대된다는 뜻입니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: When is the sports day? And the response was: \"It is on September 23rd.\"",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: When is the sports day? And the response was: \"It is on September 23rd.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 운동회(sports day) 날짜는?",
        "options": [
          "9월 23일",
          "8월 23일",
          "9월 13일",
          "10월 23일"
        ],
        "correctIndex": 0,
        "correctAnswer": "9월 23일",
        "explanation": "'September 23rd'는 9월 23일입니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: When is your sister's birthday? And the response was: \"It is on December 25th, Christmas Day!\"",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: When is your sister's birthday? And the response was: \"It is on December 25th, Christmas Day!\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 여동생의 생일은 언제인가요?",
        "options": [
          "12월 15일",
          "12월 25일",
          "1월 25일",
          "11월 25일"
        ],
        "correctIndex": 1,
        "correctAnswer": "12월 25일",
        "explanation": "'December 25th'는 12월 25일입니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: We are going to the amusement park tomorrow! And the response was: \"I can't wait to ride the roller coaster!\"",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: We are going to the amusement park tomorrow! And the response was: \"I can't wait to ride the roller coaster!\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: B가 내일 몹시 기대하고 있는 것은?",
        "options": [
          "사진 찍기",
          "기념품 구경하기",
          "솜사탕 사 먹기",
          "롤러코스터 타기"
        ],
        "correctIndex": 3,
        "correctAnswer": "롤러코스터 타기",
        "explanation": "'I can't wait to ride the roller coaster'입니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: When is our class party? And the response was: \"It is on March 30th after school.\"",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: When is our class party? And the response was: \"It is on March 30th after school.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 학급 파티 날짜는?",
        "options": [
          "3월 13일",
          "3월 30일",
          "2월 28일",
          "4월 30일"
        ],
        "correctIndex": 1,
        "correctAnswer": "3월 30일",
        "explanation": "'March 30th'는 3월 30일입니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: When is your birthday, David? And the response was: \"It is on May 7th.\"",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: When is your birthday, David? And the response was: \"It is on May 7th.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: David의 생일 날짜는 언제인가요?",
        "options": [
          "3월 7일",
          "6월 7일",
          "5월 17일",
          "5월 7일"
        ],
        "correctIndex": 3,
        "correctAnswer": "5월 7일",
        "explanation": "'May 7th'는 5월 7일입니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: When is your birthday? And the response was: \"My birthday is on October 15th.\"",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: When is your birthday? And the response was: \"My birthday is on October 15th.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: B의 생일은 몇 월 며칠인가요?",
        "options": [
          "11월 15일",
          "9월 15일",
          "10월 5일",
          "10월 15일"
        ],
        "correctIndex": 3,
        "correctAnswer": "10월 15일",
        "explanation": "'October 15th'는 10월 15일입니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: The school festival is next Friday! And the response was: \"I can't wait! It will be so much fun.\"",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: The school festival is next Friday! And the response was: \"I can't wait! It will be so much fun.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: B가 나타낸 감정(I can't wait!)의 뜻은?",
        "options": [
          "정말 기대돼! (몹시 기다려져!)",
          "기다리기 싫어! (짜증나!)",
          "시간이 너무 없어!",
          "갈 수 없어 미안해!"
        ],
        "correctIndex": 0,
        "correctAnswer": "정말 기대돼! (몹시 기다려져!)",
        "explanation": "'I can't wait!'는 몹시 기다려지고 기대된다는 뜻입니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: When is the sports day? And the response was: \"It is on September 23rd.\"",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: When is the sports day? And the response was: \"It is on September 23rd.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 운동회(sports day) 날짜는?",
        "options": [
          "9월 23일",
          "9월 13일",
          "10월 23일",
          "8월 23일"
        ],
        "correctIndex": 0,
        "correctAnswer": "9월 23일",
        "explanation": "'September 23rd'는 9월 23일입니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'calendar' is a new word in 3단원. In Korean, it means '달력'.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'calendar' is a new word in 3단원. In Korean, it means '달력'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'calendar'의 뜻은?",
        "options": [
          "달력",
          "생일",
          "언제",
          "날짜"
        ],
        "correctIndex": 0,
        "correctAnswer": "달력",
        "explanation": "'calendar'은 '달력'입니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'sports' is a new word in 3단원. In Korean, it means '운동, 스포츠'.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'sports' is a new word in 3단원. In Korean, it means '운동, 스포츠'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'sports'의 뜻은?",
        "options": [
          "운동, 스포츠",
          "날짜",
          "생일",
          "언제"
        ],
        "correctIndex": 0,
        "correctAnswer": "운동, 스포츠",
        "explanation": "'sports'은 '운동, 스포츠'입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'fun' is a new word in 3단원. In Korean, it means '재미'.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'fun' is a new word in 3단원. In Korean, it means '재미'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'fun'의 뜻은?",
        "options": [
          "재미",
          "언제",
          "날짜",
          "생일"
        ],
        "correctIndex": 0,
        "correctAnswer": "재미",
        "explanation": "'fun'은 '재미'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'birthday' is a new word in 3단원. In Korean, it means '생일'.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'birthday' is a new word in 3단원. In Korean, it means '생일'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'birthday'의 뜻은?",
        "options": [
          "생일",
          "언제",
          "기다리다",
          "날짜"
        ],
        "correctIndex": 0,
        "correctAnswer": "생일",
        "explanation": "'birthday'은 '생일'입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'when' is a new word in 3단원. In Korean, it means '언제'.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'when' is a new word in 3단원. In Korean, it means '언제'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'when'의 뜻은?",
        "options": [
          "기다리다",
          "날짜",
          "생일",
          "언제"
        ],
        "correctIndex": 3,
        "correctAnswer": "언제",
        "explanation": "'when'은 '언제'입니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'date' is a new word in 3단원. In Korean, it means '날짜'.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'date' is a new word in 3단원. In Korean, it means '날짜'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'date'의 뜻은?",
        "options": [
          "기다리다",
          "날짜",
          "언제",
          "생일"
        ],
        "correctIndex": 1,
        "correctAnswer": "날짜",
        "explanation": "'date'은 '날짜'입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'wait' is a new word in 3단원. In Korean, it means '기다리다'.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'wait' is a new word in 3단원. In Korean, it means '기다리다'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'wait'의 뜻은?",
        "options": [
          "기다리다",
          "생일",
          "언제",
          "날짜"
        ],
        "correctIndex": 0,
        "correctAnswer": "기다리다",
        "explanation": "'wait'은 '기다리다'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'party' is a new word in 3단원. In Korean, it means '파티'.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'party' is a new word in 3단원. In Korean, it means '파티'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'party'의 뜻은?",
        "options": [
          "날짜",
          "언제",
          "생일",
          "파티"
        ],
        "correctIndex": 3,
        "correctAnswer": "파티",
        "explanation": "'party'은 '파티'입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'festival' is a new word in 3단원. In Korean, it means '축제'.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'festival' is a new word in 3단원. In Korean, it means '축제'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'festival'의 뜻은?",
        "options": [
          "생일",
          "날짜",
          "축제",
          "언제"
        ],
        "correctIndex": 2,
        "correctAnswer": "축제",
        "explanation": "'festival'은 '축제'입니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'month' is a new word in 3단원. In Korean, it means '달, 월'.",
        "question": "[읽기 · 3단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'month' is a new word in 3단원. In Korean, it means '달, 월'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'month'의 뜻은?",
        "options": [
          "날짜",
          "언제",
          "생일",
          "달, 월"
        ],
        "correctIndex": 3,
        "correctAnswer": "달, 월",
        "explanation": "'month'은 '달, 월'입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 3단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"생일\" (첫 글자: b, 총 8글자)",
        "correctAnswer": "birthday",
        "explanation": "'생일'의 영어 표기는 'birthday'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 3단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"언제\" (첫 글자: w, 총 4글자)",
        "correctAnswer": "when",
        "explanation": "'언제'의 영어 표기는 'when'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 3단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"날짜\" (첫 글자: d, 총 4글자)",
        "correctAnswer": "date",
        "explanation": "'날짜'의 영어 표기는 'date'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 3단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"기다리다\" (첫 글자: w, 총 4글자)",
        "correctAnswer": "wait",
        "explanation": "'기다리다'의 영어 표기는 'wait'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 3단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"파티\" (첫 글자: p, 총 5글자)",
        "correctAnswer": "party",
        "explanation": "'파티'의 영어 표기는 'party'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 3단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"축제\" (첫 글자: f, 총 8글자)",
        "correctAnswer": "festival",
        "explanation": "'축제'의 영어 표기는 'festival'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 3단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"달, 월\" (첫 글자: m, 총 5글자)",
        "correctAnswer": "month",
        "explanation": "'달, 월'의 영어 표기는 'month'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 3단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"오늘\" (첫 글자: t, 총 5글자)",
        "correctAnswer": "today",
        "explanation": "'오늘'의 영어 표기는 'today'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 3단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"내일\" (첫 글자: t, 총 8글자)",
        "correctAnswer": "tomorrow",
        "explanation": "'내일'의 영어 표기는 'tomorrow'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 3단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"특별한\" (첫 글자: s, 총 7글자)",
        "correctAnswer": "special",
        "explanation": "'특별한'의 영어 표기는 'special'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 3단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"선물\" (첫 글자: p, 총 7글자)",
        "correctAnswer": "present",
        "explanation": "'선물'의 영어 표기는 'present'입니다."
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 3단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"축하하다\" (첫 글자: c, 총 9글자)",
        "correctAnswer": "celebrate",
        "explanation": "'축하하다'의 영어 표기는 'celebrate'입니다."
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 3단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"달력\" (첫 글자: c, 총 8글자)",
        "correctAnswer": "calendar",
        "explanation": "'달력'의 영어 표기는 'calendar'입니다."
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 3단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"운동, 스포츠\" (첫 글자: s, 총 6글자)",
        "correctAnswer": "sports",
        "explanation": "'운동, 스포츠'의 영어 표기는 'sports'입니다."
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 3단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"재미\" (첫 글자: f, 총 3글자)",
        "correctAnswer": "fun",
        "explanation": "'재미'의 영어 표기는 'fun'입니다."
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"네 생일은 언제니?\"",
        "chips": [
          "When",
          "is",
          "your",
          "birthday?"
        ],
        "correctAnswer": "When is your birthday?",
        "explanation": "'When is your birthday?'은 '네 생일은 언제니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"5월 7일이야.\"",
        "chips": [
          "It",
          "is",
          "on",
          "May",
          "7th."
        ],
        "correctAnswer": "It is on May 7th.",
        "explanation": "'It is on May 7th.'은 '5월 7일이야.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"파티가 너무너무 기다려져!\"",
        "chips": [
          "I",
          "can't",
          "wait",
          "for",
          "the",
          "party."
        ],
        "correctAnswer": "I can't wait for the party!",
        "explanation": "'I can't wait for the party!'은 '파티가 너무너무 기다려져!'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"학교 운동회는 언제니?\"",
        "chips": [
          "When",
          "is",
          "the",
          "school",
          "sports",
          "day?"
        ],
        "correctAnswer": "When is the school sports day?",
        "explanation": "'When is the school sports day?'은 '학교 운동회는 언제니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"9월 23일이야.\"",
        "chips": [
          "It",
          "is",
          "on",
          "September",
          "23rd."
        ],
        "correctAnswer": "It is on September 23rd.",
        "explanation": "'It is on September 23rd.'은 '9월 23일이야.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"내 생일은 크리스마스 날이야.\"",
        "chips": [
          "My",
          "birthday",
          "is",
          "on",
          "Christmas",
          "Day."
        ],
        "correctAnswer": "My birthday is on Christmas Day.",
        "explanation": "'My birthday is on Christmas Day.'은 '내 생일은 크리스마스 날이야.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"내일 친구들을 만날 생각에 몹시 기대돼.\"",
        "chips": [
          "I",
          "can't",
          "wait",
          "to",
          "see",
          "my",
          "friends",
          "tomorrow."
        ],
        "correctAnswer": "I can't wait to see my friends tomorrow.",
        "explanation": "'I can't wait to see my friends tomorrow.'은 '내일 친구들을 만날 생각에 몹시 기대돼.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"내 생일 파티에 꼭 와주렴.\"",
        "chips": [
          "Please",
          "come",
          "to",
          "my",
          "birthday",
          "party."
        ],
        "correctAnswer": "Please come to my birthday party.",
        "explanation": "'Please come to my birthday party.'은 '내 생일 파티에 꼭 와주렴.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"영어 말하기 대회는 언제 열리니?\"",
        "chips": [
          "When",
          "is",
          "the",
          "English",
          "speech",
          "contest?"
        ],
        "correctAnswer": "When is the English speech contest?",
        "explanation": "'When is the English speech contest?'은 '영어 말하기 대회는 언제 열리니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"11월 12일이야.\"",
        "chips": [
          "It",
          "is",
          "on",
          "November",
          "12th."
        ],
        "correctAnswer": "It is on November 12th.",
        "explanation": "'It is on November 12th.'은 '11월 12일이야.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 96,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"우리는 성대한 축하 행사를 열 거야.\"",
        "chips": [
          "We",
          "are",
          "going",
          "to",
          "have",
          "a",
          "big",
          "celebration."
        ],
        "correctAnswer": "We are going to have a big celebration.",
        "explanation": "'We are going to have a big celebration.'은 '우리는 성대한 축하 행사를 열 거야.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 97,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"사랑하는 내 친구야, 생일 진심으로 축하해!\"",
        "chips": [
          "Happy",
          "birthday",
          "to",
          "you",
          "my",
          "dear",
          "friend."
        ],
        "correctAnswer": "Happy birthday to you, my dear friend!",
        "explanation": "'Happy birthday to you, my dear friend!'은 '사랑하는 내 친구야, 생일 진심으로 축하해!'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 98,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"여름방학이 정말 손꼽아 기다려져.\"",
        "chips": [
          "I",
          "can't",
          "wait",
          "for",
          "our",
          "summer",
          "vacation."
        ],
        "correctAnswer": "I can't wait for our summer vacation.",
        "explanation": "'I can't wait for our summer vacation.'은 '여름방학이 정말 손꼽아 기다려져.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 99,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 3단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"오늘이 며칠이니?\"",
        "chips": [
          "What",
          "date",
          "is",
          "it",
          "today?"
        ],
        "correctAnswer": "What date is it today?",
        "explanation": "'What date is it today?'은 '오늘이 며칠이니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[최종 골든벨 문제] 다음 우리말에 맞도록 주어진 단어 카드를 순서대로 바르게 배열하세요!\n우리말: \"학교 달력에서 날짜를 확인해 봐.\"",
        "chips": [
          "Check",
          "the",
          "date",
          "on",
          "the",
          "school",
          "calendar."
        ],
        "correctAnswer": "Check the date on the school calendar.",
        "explanation": "'Check the date on the school calendar.'은 '학교 달력에서 날짜를 확인해 봐.'을 의미하는 교과서 핵심 문장입니다."
      }
    ]
  },
  "6G_L04": {
    "name": "4단원: Why are you happy? (감정과 이유 · 위로하기)",
    "grade": 6,
    "theme": "Feelings, Reasons & Comforting",
    "totalQuestions": 100,
    "questions": [
      {
        "id": 1,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Why are you happy, Minsoo? David: Because I got a black belt in Taekwondo!",
        "question": "[듣기 · 4단원] 대화를 듣고, Minsoo가 행복해하는 이유는?",
        "options": [
          "축구 경기에서 골을 넣어서",
          "수학 시험을 잘 봐서",
          "태권도 검은 띠를 따서",
          "생일 선물을 받아서"
        ],
        "correctIndex": 2,
        "correctAnswer": "태권도 검은 띠를 따서",
        "explanation": "교과서 본문 표현: 'Because I got a black belt.'입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kelly: Why are you so excited? Sarah: Because our team won the championship game!",
        "question": "[듣기 · 4단원] 대화를 듣고, B가 신이 난 이유는?",
        "options": [
          "팀이 결승전 경기에서 우승해서",
          "숙제가 없어서",
          "새 자전거를 사서",
          "주말에 영화를 봐서"
        ],
        "correctIndex": 0,
        "correctAnswer": "팀이 결승전 경기에서 우승해서",
        "explanation": "'our team won the championship game'입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "David: I am worried about my English test tomorrow. Jisu: Don't worry. You practiced very hard.",
        "question": "[듣기 · 4단원] 대화를 듣고, B가 위로하며 건넨 말은?",
        "options": [
          "Good job. (잘했어.)",
          "Watch out. (조심해.)",
          "Hurry up. (서둘러.)",
          "Don't worry. (걱정하지 마.)"
        ],
        "correctIndex": 3,
        "correctAnswer": "Don't worry. (걱정하지 마.)",
        "explanation": "교과서 핵심 위로 표현: 'Don't worry.'입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Sarah: Don't worry, we can look for it together. Kevin: Because I lost my favorite pen.",
        "question": "[듣기 · 4단원] 대화를 듣고, A가 상대방을 위로하며 제안한 것은?",
        "options": [
          "함께 펜을 찾아보자고 위로함",
          "새 펜을 사주겠다고 함",
          "잊어버리라고 화냄",
          "선생님께 말씀드리겠다고 함"
        ],
        "correctIndex": 0,
        "correctAnswer": "함께 펜을 찾아보자고 위로함",
        "explanation": "'Don't worry, we can look for it together'입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Jisu: Why are you nervous, Sarah? Emma: Because I have to give a speech on stage.",
        "question": "[듣기 · 4단원] 대화를 듣고, Sarah가 긴장한 이유는?",
        "options": [
          "무대에서 발표를 해야 해서",
          "달리기 시합이 있어서",
          "시험 결과를 기다려서",
          "병원에 가야 해서"
        ],
        "correctIndex": 0,
        "correctAnswer": "무대에서 발표를 해야 해서",
        "explanation": "'give a speech on stage'입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kevin: I fell down while running. Tom: Don't worry. Let's go to the nurse's office.",
        "question": "[듣기 · 4단원] 대화를 듣고, B의 조언과 위로는?",
        "options": [
          "울지 말고 가만히 있어",
          "집에 그냥 가버려",
          "빨리 다시 일어나서 뛰어",
          "걱정 마, 보건실에 가자"
        ],
        "correctIndex": 3,
        "correctAnswer": "걱정 마, 보건실에 가자",
        "explanation": "'Don't worry. Let's go to the nurse's office.'입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Emma: Why are you happy, Minsoo? Hana: Because I got a black belt in Taekwondo!",
        "question": "[듣기 · 4단원] 대화를 듣고, Minsoo가 행복해하는 이유는?",
        "options": [
          "태권도 검은 띠를 따서",
          "축구 경기에서 골을 넣어서",
          "생일 선물을 받아서",
          "수학 시험을 잘 봐서"
        ],
        "correctIndex": 0,
        "correctAnswer": "태권도 검은 띠를 따서",
        "explanation": "교과서 본문 표현: 'Because I got a black belt.'입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Tom: Why are you so excited? Brian: Because our team won the championship game!",
        "question": "[듣기 · 4단원] 대화를 듣고, B가 신이 난 이유는?",
        "options": [
          "새 자전거를 사서",
          "팀이 결승전 경기에서 우승해서",
          "주말에 영화를 봐서",
          "숙제가 없어서"
        ],
        "correctIndex": 1,
        "correctAnswer": "팀이 결승전 경기에서 우승해서",
        "explanation": "'our team won the championship game'입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Hana: I am worried about my English test tomorrow. Amy: Don't worry. You practiced very hard.",
        "question": "[듣기 · 4단원] 대화를 듣고, B가 위로하며 건넨 말은?",
        "options": [
          "Don't worry. (걱정하지 마.)",
          "Hurry up. (서둘러.)",
          "Watch out. (조심해.)",
          "Good job. (잘했어.)"
        ],
        "correctIndex": 0,
        "correctAnswer": "Don't worry. (걱정하지 마.)",
        "explanation": "교과서 핵심 위로 표현: 'Don't worry.'입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Brian: Don't worry, we can look for it together. Paul: Because I lost my favorite pen.",
        "question": "[듣기 · 4단원] 대화를 듣고, A가 상대방을 위로하며 제안한 것은?",
        "options": [
          "잊어버리라고 화냄",
          "함께 펜을 찾아보자고 위로함",
          "새 펜을 사주겠다고 함",
          "선생님께 말씀드리겠다고 함"
        ],
        "correctIndex": 1,
        "correctAnswer": "함께 펜을 찾아보자고 위로함",
        "explanation": "'Don't worry, we can look for it together'입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Amy: Why are you nervous, Sarah? Minsoo: Because I have to give a speech on stage.",
        "question": "[듣기 · 4단원] 대화를 듣고, Sarah가 긴장한 이유는?",
        "options": [
          "무대에서 발표를 해야 해서",
          "달리기 시합이 있어서",
          "시험 결과를 기다려서",
          "병원에 가야 해서"
        ],
        "correctIndex": 0,
        "correctAnswer": "무대에서 발표를 해야 해서",
        "explanation": "'give a speech on stage'입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Paul: I fell down while running. Kelly: Don't worry. Let's go to the nurse's office.",
        "question": "[듣기 · 4단원] 대화를 듣고, B의 조언과 위로는?",
        "options": [
          "집에 그냥 가버려",
          "빨리 다시 일어나서 뛰어",
          "걱정 마, 보건실에 가자",
          "울지 말고 가만히 있어"
        ],
        "correctIndex": 2,
        "correctAnswer": "걱정 마, 보건실에 가자",
        "explanation": "'Don't worry. Let's go to the nurse's office.'입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Why are you happy, Minsoo? David: Because I got a black belt in Taekwondo!",
        "question": "[듣기 · 4단원] 대화를 듣고, Minsoo가 행복해하는 이유는?",
        "options": [
          "태권도 검은 띠를 따서",
          "축구 경기에서 골을 넣어서",
          "생일 선물을 받아서",
          "수학 시험을 잘 봐서"
        ],
        "correctIndex": 0,
        "correctAnswer": "태권도 검은 띠를 따서",
        "explanation": "교과서 본문 표현: 'Because I got a black belt.'입니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kelly: Why are you so excited? Sarah: Because our team won the championship game!",
        "question": "[듣기 · 4단원] 대화를 듣고, B가 신이 난 이유는?",
        "options": [
          "주말에 영화를 봐서",
          "새 자전거를 사서",
          "숙제가 없어서",
          "팀이 결승전 경기에서 우승해서"
        ],
        "correctIndex": 3,
        "correctAnswer": "팀이 결승전 경기에서 우승해서",
        "explanation": "'our team won the championship game'입니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "David: I am worried about my English test tomorrow. Jisu: Don't worry. You practiced very hard.",
        "question": "[듣기 · 4단원] 대화를 듣고, B가 위로하며 건넨 말은?",
        "options": [
          "Don't worry. (걱정하지 마.)",
          "Good job. (잘했어.)",
          "Watch out. (조심해.)",
          "Hurry up. (서둘러.)"
        ],
        "correctIndex": 0,
        "correctAnswer": "Don't worry. (걱정하지 마.)",
        "explanation": "교과서 핵심 위로 표현: 'Don't worry.'입니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Sarah: Why are you happy? Kevin: I agree with you!",
        "question": "[듣기 · 4단원] 대화에서 Sarah이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "너는 왜 기분이 좋니?",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어.",
          "다음 기회에 다시 이야기하자."
        ],
        "correctIndex": 0,
        "correctAnswer": "너는 왜 기분이 좋니?",
        "explanation": "'Why are you happy?'은 '너는 왜 기분이 좋니?'을 의미합니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Jisu: Because I got a black belt. Emma: I agree with you!",
        "question": "[듣기 · 4단원] 대화에서 Jisu이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "태권도 검은 띠를 땄기 때문이야.",
          "나는 무슨 말인지 잘 모르겠어.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아."
        ],
        "correctIndex": 0,
        "correctAnswer": "태권도 검은 띠를 땄기 때문이야.",
        "explanation": "'Because I got a black belt.'은 '태권도 검은 띠를 땄기 때문이야.'을 의미합니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kevin: Don't worry. You can do it. Tom: I agree with you!",
        "question": "[듣기 · 4단원] 대화에서 Kevin이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "걱정하지 마. 넌 해낼 수 있어."
        ],
        "correctIndex": 3,
        "correctAnswer": "걱정하지 마. 넌 해낼 수 있어.",
        "explanation": "'Don't worry. You can do it.'은 '걱정하지 마. 넌 해낼 수 있어.'을 의미합니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Emma: Why are you so excited today? Hana: I agree with you!",
        "question": "[듣기 · 4단원] 대화에서 Emma이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "너 오늘 왜 그렇게 신이 났니?",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어.",
          "다음 기회에 다시 이야기하자."
        ],
        "correctIndex": 0,
        "correctAnswer": "너 오늘 왜 그렇게 신이 났니?",
        "explanation": "'Why are you so excited today?'은 '너 오늘 왜 그렇게 신이 났니?'을 의미합니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Tom: Because tomorrow is my birthday party. Brian: I agree with you!",
        "question": "[듣기 · 4단원] 대화에서 Tom이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음 기회에 다시 이야기하자.",
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "내일이 내 생일 파티이기 때문이야."
        ],
        "correctIndex": 3,
        "correctAnswer": "내일이 내 생일 파티이기 때문이야.",
        "explanation": "'Because tomorrow is my birthday party.'은 '내일이 내 생일 파티이기 때문이야.'을 의미합니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Hana: I am sad because my pet is sick. Amy: I agree with you!",
        "question": "[듣기 · 4단원] 대화에서 Hana이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "우리 반려동물이 아파서 슬퍼.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "우리 반려동물이 아파서 슬퍼.",
        "explanation": "'I am sad because my pet is sick.'은 '우리 반려동물이 아파서 슬퍼.'을 의미합니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Brian: Don't worry, everything will be fine. Paul: I agree with you!",
        "question": "[듣기 · 4단원] 대화에서 Brian이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "걱정 마, 모든 게 다 잘 될 거야.",
          "다음 기회에 다시 이야기하자.",
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아."
        ],
        "correctIndex": 0,
        "correctAnswer": "걱정 마, 모든 게 다 잘 될 거야.",
        "explanation": "'Don't worry, everything will be fine.'은 '걱정 마, 모든 게 다 잘 될 거야.'을 의미합니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Amy: Why is Sarah so nervous? Minsoo: I agree with you!",
        "question": "[듣기 · 4단원] 대화에서 Amy이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "사라는 왜 저렇게 긴장하고 있니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "사라는 왜 저렇게 긴장하고 있니?",
        "explanation": "'Why is Sarah so nervous?'은 '사라는 왜 저렇게 긴장하고 있니?'을 의미합니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Paul: Because she has to play the piano on stage. Kelly: I agree with you!",
        "question": "[듣기 · 4단원] 대화에서 Paul이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "무대에서 피아노를 연주해야 하기 때문이야.",
          "다음 기회에 다시 이야기하자.",
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아."
        ],
        "correctIndex": 0,
        "correctAnswer": "무대에서 피아노를 연주해야 하기 때문이야.",
        "explanation": "'Because she has to play the piano on stage.'은 '무대에서 피아노를 연주해야 하기 때문이야.'을 의미합니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: We are proud because our class won. David: I agree with you!",
        "question": "[듣기 · 4단원] 대화에서 Minsoo이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "우리 반이 우승해서 우리는 자랑스러워.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "우리 반이 우승해서 우리는 자랑스러워.",
        "explanation": "'We are proud because our class won.'은 '우리 반이 우승해서 우리는 자랑스러워.'을 의미합니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kelly: What does 'lose' mean in Korean? Sarah: It means '잃어버리다, 지다'.",
        "question": "[듣기 · 4단원] 대화에서 언급된 영어 단어 'lose'의 우리말 뜻으로 바른 것은?",
        "options": [
          "잃어버리다, 지다",
          "행복한",
          "걱정스러운",
          "슬픈"
        ],
        "correctIndex": 0,
        "correctAnswer": "잃어버리다, 지다",
        "explanation": "'lose'은 '잃어버리다, 지다'를 뜻합니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "David: What does 'speech' mean in Korean? Jisu: It means '발표, 연설'.",
        "question": "[듣기 · 4단원] 대화에서 언급된 영어 단어 'speech'의 우리말 뜻으로 바른 것은?",
        "options": [
          "슬픈",
          "행복한",
          "걱정스러운",
          "발표, 연설"
        ],
        "correctIndex": 3,
        "correctAnswer": "발표, 연설",
        "explanation": "'speech'은 '발표, 연설'를 뜻합니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Sarah: What does 'stage' mean in Korean? Kevin: It means '무대'.",
        "question": "[듣기 · 4단원] 대화에서 언급된 영어 단어 'stage'의 우리말 뜻으로 바른 것은?",
        "options": [
          "걱정스러운",
          "슬픈",
          "행복한",
          "무대"
        ],
        "correctIndex": 3,
        "correctAnswer": "무대",
        "explanation": "'stage'은 '무대'를 뜻합니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Jisu: What does 'proud' mean in Korean? Emma: It means '자랑스러운'.",
        "question": "[듣기 · 4단원] 대화에서 언급된 영어 단어 'proud'의 우리말 뜻으로 바른 것은?",
        "options": [
          "걱정스러운",
          "행복한",
          "자랑스러운",
          "슬픈"
        ],
        "correctIndex": 2,
        "correctAnswer": "자랑스러운",
        "explanation": "'proud'은 '자랑스러운'를 뜻합니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kevin: What does 'cheer' mean in Korean? Tom: It means '응원하다'.",
        "question": "[듣기 · 4단원] 대화에서 언급된 영어 단어 'cheer'의 우리말 뜻으로 바른 것은?",
        "options": [
          "걱정스러운",
          "슬픈",
          "행복한",
          "응원하다"
        ],
        "correctIndex": 3,
        "correctAnswer": "응원하다",
        "explanation": "'cheer'은 '응원하다'를 뜻합니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Emma: What does 'happy' mean in Korean? Hana: It means '행복한'.",
        "question": "[듣기 · 4단원] 대화에서 언급된 영어 단어 'happy'의 우리말 뜻으로 바른 것은?",
        "options": [
          "행복한",
          "슬픈",
          "걱정스러운",
          "신나는"
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
        "audioText": "Tom: What does 'sad' mean in Korean? Brian: It means '슬픈'.",
        "question": "[듣기 · 4단원] 대화에서 언급된 영어 단어 'sad'의 우리말 뜻으로 바른 것은?",
        "options": [
          "행복한",
          "신나는",
          "걱정스러운",
          "슬픈"
        ],
        "correctIndex": 3,
        "correctAnswer": "슬픈",
        "explanation": "'sad'은 '슬픈'를 뜻합니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Hana: What does 'worried' mean in Korean? Amy: It means '걱정스러운'.",
        "question": "[듣기 · 4단원] 대화에서 언급된 영어 단어 'worried'의 우리말 뜻으로 바른 것은?",
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
        "audioText": "Brian: What does 'excited' mean in Korean? Paul: It means '신나는'.",
        "question": "[듣기 · 4단원] 대화에서 언급된 영어 단어 'excited'의 우리말 뜻으로 바른 것은?",
        "options": [
          "신나는",
          "행복한",
          "슬픈",
          "걱정스러운"
        ],
        "correctIndex": 0,
        "correctAnswer": "신나는",
        "explanation": "'excited'은 '신나는'를 뜻합니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Amy: What does 'nervous' mean in Korean? Minsoo: It means '긴장한'.",
        "question": "[듣기 · 4단원] 대화에서 언급된 영어 단어 'nervous'의 우리말 뜻으로 바른 것은?",
        "options": [
          "슬픈",
          "걱정스러운",
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
        "subtext": "Hello! My name is Kelly. Why are you so excited today? I am very happy and excited about our English class today.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kelly. Why are you so excited today? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "너 오늘 왜 그렇게 신이 났니?",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "너 오늘 왜 그렇게 신이 났니?",
        "explanation": "'Why are you so excited today?'(너 오늘 왜 그렇게 신이 났니?)이 핵심 문장입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is David. Because tomorrow is my birthday party. I am very happy and excited about our English class today.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is David. Because tomorrow is my birthday party. I am very happy and excited about our English class today.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "숙제가 너무 어려워서 고민이다.",
          "내일이 내 생일 파티이기 때문이야.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 2,
        "correctAnswer": "내일이 내 생일 파티이기 때문이야.",
        "explanation": "'Because tomorrow is my birthday party.'(내일이 내 생일 파티이기 때문이야.)이 핵심 문장입니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Sarah. I am sad because my pet is sick. I am very happy and excited about our English class today.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Sarah. I am sad because my pet is sick. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "길을 잃어서 병원을 찾고 있다.",
          "우리 반려동물이 아파서 슬퍼."
        ],
        "correctIndex": 3,
        "correctAnswer": "우리 반려동물이 아파서 슬퍼.",
        "explanation": "'I am sad because my pet is sick.'(우리 반려동물이 아파서 슬퍼.)이 핵심 문장입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Jisu. Don't worry, everything will be fine. I am very happy and excited about our English class today.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Jisu. Don't worry, everything will be fine. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Jisu이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "걱정 마, 모든 게 다 잘 될 거야."
        ],
        "correctIndex": 3,
        "correctAnswer": "걱정 마, 모든 게 다 잘 될 거야.",
        "explanation": "'Don't worry, everything will be fine.'(걱정 마, 모든 게 다 잘 될 거야.)이 핵심 문장입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kevin. Why is Sarah so nervous? I am very happy and excited about our English class today.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kevin. Why is Sarah so nervous? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kevin이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "사라는 왜 저렇게 긴장하고 있니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "사라는 왜 저렇게 긴장하고 있니?",
        "explanation": "'Why is Sarah so nervous?'(사라는 왜 저렇게 긴장하고 있니?)이 핵심 문장입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Emma. Because she has to play the piano on stage. I am very happy and excited about our English class today.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Emma. Because she has to play the piano on stage. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Emma이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "무대에서 피아노를 연주해야 하기 때문이야.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "무대에서 피아노를 연주해야 하기 때문이야.",
        "explanation": "'Because she has to play the piano on stage.'(무대에서 피아노를 연주해야 하기 때문이야.)이 핵심 문장입니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Tom. We are proud because our class won. I am very happy and excited about our English class today.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Tom. We are proud because our class won. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Tom이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "길을 잃어서 병원을 찾고 있다.",
          "우리 반이 우승해서 우리는 자랑스러워."
        ],
        "correctIndex": 3,
        "correctAnswer": "우리 반이 우승해서 우리는 자랑스러워.",
        "explanation": "'We are proud because our class won.'(우리 반이 우승해서 우리는 자랑스러워.)이 핵심 문장입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Hana. Don't worry about the small mistake. I am very happy and excited about our English class today.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Hana. Don't worry about the small mistake. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Hana이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다.",
          "숙제가 너무 어려워서 고민이다.",
          "작은 실수에 너무 걱정하지 마렴."
        ],
        "correctIndex": 3,
        "correctAnswer": "작은 실수에 너무 걱정하지 마렴.",
        "explanation": "'Don't worry about the small mistake.'(작은 실수에 너무 걱정하지 마렴.)이 핵심 문장입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Brian. Take a deep breath and smile. I am very happy and excited about our English class today.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Brian. Take a deep breath and smile. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Brian이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "심호흡을 크게 하고 미소를 지어봐.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "심호흡을 크게 하고 미소를 지어봐.",
        "explanation": "'Take a deep breath and smile.'(심호흡을 크게 하고 미소를 지어봐.)이 핵심 문장입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Amy. Why did you arrive so late? I am very happy and excited about our English class today.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Amy. Why did you arrive so late? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Amy이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "너 왜 그렇게 늦게 도착했니?",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "너 왜 그렇게 늦게 도착했니?",
        "explanation": "'Why did you arrive so late?'(너 왜 그렇게 늦게 도착했니?)이 핵심 문장입니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Paul. Because the school bus was delayed. I am very happy and excited about our English class today.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Paul. Because the school bus was delayed. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Paul이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "스쿨버스가 지연되었기 때문이야."
        ],
        "correctIndex": 3,
        "correctAnswer": "스쿨버스가 지연되었기 때문이야.",
        "explanation": "'Because the school bus was delayed.'(스쿨버스가 지연되었기 때문이야.)이 핵심 문장입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Minsoo. Cheer up! Tomorrow is another bright day. I am very happy and excited about our English class today.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Minsoo. Cheer up! Tomorrow is another bright day. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "기운 내! 내일은 또 다른 밝은 날이 올 거야.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다.",
          "숙제가 너무 어려워서 고민이다."
        ],
        "correctIndex": 0,
        "correctAnswer": "기운 내! 내일은 또 다른 밝은 날이 올 거야.",
        "explanation": "'Cheer up! Tomorrow is another bright day.'(기운 내! 내일은 또 다른 밝은 날이 올 거야.)이 핵심 문장입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kelly. Why are you happy? I am very happy and excited about our English class today.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kelly. Why are you happy? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "너는 왜 기분이 좋니?",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "너는 왜 기분이 좋니?",
        "explanation": "'Why are you happy?'(너는 왜 기분이 좋니?)이 핵심 문장입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is David. Because I got a black belt. I am very happy and excited about our English class today.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is David. Because I got a black belt. I am very happy and excited about our English class today.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다.",
          "태권도 검은 띠를 땄기 때문이야."
        ],
        "correctIndex": 3,
        "correctAnswer": "태권도 검은 띠를 땄기 때문이야.",
        "explanation": "'Because I got a black belt.'(태권도 검은 띠를 땄기 때문이야.)이 핵심 문장입니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Sarah. Don't worry. You can do it. I am very happy and excited about our English class today.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Sarah. Don't worry. You can do it. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "숙제가 너무 어려워서 고민이다.",
          "걱정하지 마. 넌 해낼 수 있어.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 2,
        "correctAnswer": "걱정하지 마. 넌 해낼 수 있어.",
        "explanation": "'Don't worry. You can do it.'(걱정하지 마. 넌 해낼 수 있어.)이 핵심 문장입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Don't worry, we can look for it together. And the response was: \"Because I lost my favorite pen.\"",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Don't worry, we can look for it together. And the response was: \"Because I lost my favorite pen.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: A가 상대방을 위로하며 제안한 것은?",
        "options": [
          "함께 펜을 찾아보자고 위로함",
          "잊어버리라고 화냄",
          "새 펜을 사주겠다고 함",
          "선생님께 말씀드리겠다고 함"
        ],
        "correctIndex": 0,
        "correctAnswer": "함께 펜을 찾아보자고 위로함",
        "explanation": "'Don't worry, we can look for it together'입니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Why are you nervous, Sarah? And the response was: \"Because I have to give a speech on stage.\"",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Why are you nervous, Sarah? And the response was: \"Because I have to give a speech on stage.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: Sarah가 긴장한 이유는?",
        "options": [
          "달리기 시합이 있어서",
          "무대에서 발표를 해야 해서",
          "병원에 가야 해서",
          "시험 결과를 기다려서"
        ],
        "correctIndex": 1,
        "correctAnswer": "무대에서 발표를 해야 해서",
        "explanation": "'give a speech on stage'입니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: I fell down while running. And the response was: \"Don't worry. Let's go to the nurse's office.\"",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: I fell down while running. And the response was: \"Don't worry. Let's go to the nurse's office.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: B의 조언과 위로는?",
        "options": [
          "집에 그냥 가버려",
          "빨리 다시 일어나서 뛰어",
          "걱정 마, 보건실에 가자",
          "울지 말고 가만히 있어"
        ],
        "correctIndex": 2,
        "correctAnswer": "걱정 마, 보건실에 가자",
        "explanation": "'Don't worry. Let's go to the nurse's office.'입니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Why are you happy, Minsoo? And the response was: \"Because I got a black belt in Taekwondo!\"",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Why are you happy, Minsoo? And the response was: \"Because I got a black belt in Taekwondo!\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: Minsoo가 행복해하는 이유는?",
        "options": [
          "수학 시험을 잘 봐서",
          "태권도 검은 띠를 따서",
          "축구 경기에서 골을 넣어서",
          "생일 선물을 받아서"
        ],
        "correctIndex": 1,
        "correctAnswer": "태권도 검은 띠를 따서",
        "explanation": "교과서 본문 표현: 'Because I got a black belt.'입니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Why are you so excited? And the response was: \"Because our team won the championship game!\"",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Why are you so excited? And the response was: \"Because our team won the championship game!\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: B가 신이 난 이유는?",
        "options": [
          "팀이 결승전 경기에서 우승해서",
          "새 자전거를 사서",
          "주말에 영화를 봐서",
          "숙제가 없어서"
        ],
        "correctIndex": 0,
        "correctAnswer": "팀이 결승전 경기에서 우승해서",
        "explanation": "'our team won the championship game'입니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: I am worried about my English test tomorrow. And the response was: \"Don't worry. You practiced very hard.\"",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: I am worried about my English test tomorrow. And the response was: \"Don't worry. You practiced very hard.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: B가 위로하며 건넨 말은?",
        "options": [
          "Good job. (잘했어.)",
          "Don't worry. (걱정하지 마.)",
          "Hurry up. (서둘러.)",
          "Watch out. (조심해.)"
        ],
        "correctIndex": 1,
        "correctAnswer": "Don't worry. (걱정하지 마.)",
        "explanation": "교과서 핵심 위로 표현: 'Don't worry.'입니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Don't worry, we can look for it together. And the response was: \"Because I lost my favorite pen.\"",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Don't worry, we can look for it together. And the response was: \"Because I lost my favorite pen.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: A가 상대방을 위로하며 제안한 것은?",
        "options": [
          "새 펜을 사주겠다고 함",
          "잊어버리라고 화냄",
          "함께 펜을 찾아보자고 위로함",
          "선생님께 말씀드리겠다고 함"
        ],
        "correctIndex": 2,
        "correctAnswer": "함께 펜을 찾아보자고 위로함",
        "explanation": "'Don't worry, we can look for it together'입니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Why are you nervous, Sarah? And the response was: \"Because I have to give a speech on stage.\"",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Why are you nervous, Sarah? And the response was: \"Because I have to give a speech on stage.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: Sarah가 긴장한 이유는?",
        "options": [
          "병원에 가야 해서",
          "시험 결과를 기다려서",
          "달리기 시합이 있어서",
          "무대에서 발표를 해야 해서"
        ],
        "correctIndex": 3,
        "correctAnswer": "무대에서 발표를 해야 해서",
        "explanation": "'give a speech on stage'입니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: I fell down while running. And the response was: \"Don't worry. Let's go to the nurse's office.\"",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: I fell down while running. And the response was: \"Don't worry. Let's go to the nurse's office.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: B의 조언과 위로는?",
        "options": [
          "걱정 마, 보건실에 가자",
          "빨리 다시 일어나서 뛰어",
          "울지 말고 가만히 있어",
          "집에 그냥 가버려"
        ],
        "correctIndex": 0,
        "correctAnswer": "걱정 마, 보건실에 가자",
        "explanation": "'Don't worry. Let's go to the nurse's office.'입니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Why are you happy, Minsoo? And the response was: \"Because I got a black belt in Taekwondo!\"",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Why are you happy, Minsoo? And the response was: \"Because I got a black belt in Taekwondo!\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: Minsoo가 행복해하는 이유는?",
        "options": [
          "태권도 검은 띠를 따서",
          "생일 선물을 받아서",
          "수학 시험을 잘 봐서",
          "축구 경기에서 골을 넣어서"
        ],
        "correctIndex": 0,
        "correctAnswer": "태권도 검은 띠를 따서",
        "explanation": "교과서 본문 표현: 'Because I got a black belt.'입니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'stage' is a new word in 4단원. In Korean, it means '무대'.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'stage' is a new word in 4단원. In Korean, it means '무대'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'stage'의 뜻은?",
        "options": [
          "행복한",
          "무대",
          "슬픈",
          "걱정스러운"
        ],
        "correctIndex": 1,
        "correctAnswer": "무대",
        "explanation": "'stage'은 '무대'입니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'proud' is a new word in 4단원. In Korean, it means '자랑스러운'.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'proud' is a new word in 4단원. In Korean, it means '자랑스러운'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'proud'의 뜻은?",
        "options": [
          "행복한",
          "자랑스러운",
          "걱정스러운",
          "슬픈"
        ],
        "correctIndex": 1,
        "correctAnswer": "자랑스러운",
        "explanation": "'proud'은 '자랑스러운'입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'cheer' is a new word in 4단원. In Korean, it means '응원하다'.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'cheer' is a new word in 4단원. In Korean, it means '응원하다'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'cheer'의 뜻은?",
        "options": [
          "걱정스러운",
          "슬픈",
          "행복한",
          "응원하다"
        ],
        "correctIndex": 3,
        "correctAnswer": "응원하다",
        "explanation": "'cheer'은 '응원하다'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'happy' is a new word in 4단원. In Korean, it means '행복한'.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'happy' is a new word in 4단원. In Korean, it means '행복한'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'happy'의 뜻은?",
        "options": [
          "행복한",
          "슬픈",
          "걱정스러운",
          "신나는"
        ],
        "correctIndex": 0,
        "correctAnswer": "행복한",
        "explanation": "'happy'은 '행복한'입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'sad' is a new word in 4단원. In Korean, it means '슬픈'.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'sad' is a new word in 4단원. In Korean, it means '슬픈'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'sad'의 뜻은?",
        "options": [
          "슬픈",
          "행복한",
          "신나는",
          "걱정스러운"
        ],
        "correctIndex": 0,
        "correctAnswer": "슬픈",
        "explanation": "'sad'은 '슬픈'입니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'worried' is a new word in 4단원. In Korean, it means '걱정스러운'.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'worried' is a new word in 4단원. In Korean, it means '걱정스러운'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'worried'의 뜻은?",
        "options": [
          "신나는",
          "슬픈",
          "행복한",
          "걱정스러운"
        ],
        "correctIndex": 3,
        "correctAnswer": "걱정스러운",
        "explanation": "'worried'은 '걱정스러운'입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'excited' is a new word in 4단원. In Korean, it means '신나는'.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'excited' is a new word in 4단원. In Korean, it means '신나는'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'excited'의 뜻은?",
        "options": [
          "슬픈",
          "행복한",
          "걱정스러운",
          "신나는"
        ],
        "correctIndex": 3,
        "correctAnswer": "신나는",
        "explanation": "'excited'은 '신나는'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'nervous' is a new word in 4단원. In Korean, it means '긴장한'.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'nervous' is a new word in 4단원. In Korean, it means '긴장한'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'nervous'의 뜻은?",
        "options": [
          "슬픈",
          "행복한",
          "걱정스러운",
          "긴장한"
        ],
        "correctIndex": 3,
        "correctAnswer": "긴장한",
        "explanation": "'nervous'은 '긴장한'입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'why' is a new word in 4단원. In Korean, it means '왜'.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'why' is a new word in 4단원. In Korean, it means '왜'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'why'의 뜻은?",
        "options": [
          "왜",
          "행복한",
          "슬픈",
          "걱정스러운"
        ],
        "correctIndex": 0,
        "correctAnswer": "왜",
        "explanation": "'why'은 '왜'입니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'because' is a new word in 4단원. In Korean, it means '~때문에'.",
        "question": "[읽기 · 4단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'because' is a new word in 4단원. In Korean, it means '~때문에'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'because'의 뜻은?",
        "options": [
          "걱정스러운",
          "슬픈",
          "행복한",
          "~때문에"
        ],
        "correctIndex": 3,
        "correctAnswer": "~때문에",
        "explanation": "'because'은 '~때문에'입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 4단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"행복한\" (첫 글자: h, 총 5글자)",
        "correctAnswer": "happy",
        "explanation": "'행복한'의 영어 표기는 'happy'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 4단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"슬픈\" (첫 글자: s, 총 3글자)",
        "correctAnswer": "sad",
        "explanation": "'슬픈'의 영어 표기는 'sad'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 4단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"걱정스러운\" (첫 글자: w, 총 7글자)",
        "correctAnswer": "worried",
        "explanation": "'걱정스러운'의 영어 표기는 'worried'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 4단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"신나는\" (첫 글자: e, 총 7글자)",
        "correctAnswer": "excited",
        "explanation": "'신나는'의 영어 표기는 'excited'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 4단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"긴장한\" (첫 글자: n, 총 7글자)",
        "correctAnswer": "nervous",
        "explanation": "'긴장한'의 영어 표기는 'nervous'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 4단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"왜\" (첫 글자: w, 총 3글자)",
        "correctAnswer": "why",
        "explanation": "'왜'의 영어 표기는 'why'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 4단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"~때문에\" (첫 글자: b, 총 7글자)",
        "correctAnswer": "because",
        "explanation": "'~때문에'의 영어 표기는 'because'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 4단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"띠, 벨트\" (첫 글자: b, 총 4글자)",
        "correctAnswer": "belt",
        "explanation": "'띠, 벨트'의 영어 표기는 'belt'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 4단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"걱정하다\" (첫 글자: w, 총 5글자)",
        "correctAnswer": "worry",
        "explanation": "'걱정하다'의 영어 표기는 'worry'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 4단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"이기다\" (첫 글자: w, 총 3글자)",
        "correctAnswer": "win",
        "explanation": "'이기다'의 영어 표기는 'win'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 4단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"잃어버리다, 지다\" (첫 글자: l, 총 4글자)",
        "correctAnswer": "lose",
        "explanation": "'잃어버리다, 지다'의 영어 표기는 'lose'입니다."
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 4단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"발표, 연설\" (첫 글자: s, 총 6글자)",
        "correctAnswer": "speech",
        "explanation": "'발표, 연설'의 영어 표기는 'speech'입니다."
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 4단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"무대\" (첫 글자: s, 총 5글자)",
        "correctAnswer": "stage",
        "explanation": "'무대'의 영어 표기는 'stage'입니다."
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 4단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"자랑스러운\" (첫 글자: p, 총 5글자)",
        "correctAnswer": "proud",
        "explanation": "'자랑스러운'의 영어 표기는 'proud'입니다."
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 4단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"응원하다\" (첫 글자: c, 총 5글자)",
        "correctAnswer": "cheer",
        "explanation": "'응원하다'의 영어 표기는 'cheer'입니다."
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"너는 왜 기분이 좋니?\"",
        "chips": [
          "Why",
          "are",
          "you",
          "happy?"
        ],
        "correctAnswer": "Why are you happy?",
        "explanation": "'Why are you happy?'은 '너는 왜 기분이 좋니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"태권도 검은 띠를 땄기 때문이야.\"",
        "chips": [
          "Because",
          "I",
          "got",
          "a",
          "black",
          "belt."
        ],
        "correctAnswer": "Because I got a black belt.",
        "explanation": "'Because I got a black belt.'은 '태권도 검은 띠를 땄기 때문이야.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"걱정하지 마. 넌 해낼 수 있어.\"",
        "chips": [
          "Don't",
          "worry",
          "You",
          "can",
          "do",
          "it."
        ],
        "correctAnswer": "Don't worry. You can do it.",
        "explanation": "'Don't worry. You can do it.'은 '걱정하지 마. 넌 해낼 수 있어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"너 오늘 왜 그렇게 신이 났니?\"",
        "chips": [
          "Why",
          "are",
          "you",
          "so",
          "excited",
          "today?"
        ],
        "correctAnswer": "Why are you so excited today?",
        "explanation": "'Why are you so excited today?'은 '너 오늘 왜 그렇게 신이 났니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"내일이 내 생일 파티이기 때문이야.\"",
        "chips": [
          "Because",
          "tomorrow",
          "is",
          "my",
          "birthday",
          "party."
        ],
        "correctAnswer": "Because tomorrow is my birthday party.",
        "explanation": "'Because tomorrow is my birthday party.'은 '내일이 내 생일 파티이기 때문이야.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"우리 반려동물이 아파서 슬퍼.\"",
        "chips": [
          "I",
          "am",
          "sad",
          "because",
          "my",
          "pet",
          "is",
          "sick."
        ],
        "correctAnswer": "I am sad because my pet is sick.",
        "explanation": "'I am sad because my pet is sick.'은 '우리 반려동물이 아파서 슬퍼.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"걱정 마, 모든 게 다 잘 될 거야.\"",
        "chips": [
          "Don't",
          "worry",
          "everything",
          "will",
          "be",
          "fine."
        ],
        "correctAnswer": "Don't worry, everything will be fine.",
        "explanation": "'Don't worry, everything will be fine.'은 '걱정 마, 모든 게 다 잘 될 거야.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"사라는 왜 저렇게 긴장하고 있니?\"",
        "chips": [
          "Why",
          "is",
          "Sarah",
          "so",
          "nervous?"
        ],
        "correctAnswer": "Why is Sarah so nervous?",
        "explanation": "'Why is Sarah so nervous?'은 '사라는 왜 저렇게 긴장하고 있니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"무대에서 피아노를 연주해야 하기 때문이야.\"",
        "chips": [
          "Because",
          "she",
          "has",
          "to",
          "play",
          "the",
          "piano",
          "on",
          "stage."
        ],
        "correctAnswer": "Because she has to play the piano on stage.",
        "explanation": "'Because she has to play the piano on stage.'은 '무대에서 피아노를 연주해야 하기 때문이야.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"우리 반이 우승해서 우리는 자랑스러워.\"",
        "chips": [
          "We",
          "are",
          "proud",
          "because",
          "our",
          "class",
          "won."
        ],
        "correctAnswer": "We are proud because our class won.",
        "explanation": "'We are proud because our class won.'은 '우리 반이 우승해서 우리는 자랑스러워.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 96,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"작은 실수에 너무 걱정하지 마렴.\"",
        "chips": [
          "Don't",
          "worry",
          "about",
          "the",
          "small",
          "mistake."
        ],
        "correctAnswer": "Don't worry about the small mistake.",
        "explanation": "'Don't worry about the small mistake.'은 '작은 실수에 너무 걱정하지 마렴.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 97,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"심호흡을 크게 하고 미소를 지어봐.\"",
        "chips": [
          "Take",
          "a",
          "deep",
          "breath",
          "and",
          "smile."
        ],
        "correctAnswer": "Take a deep breath and smile.",
        "explanation": "'Take a deep breath and smile.'은 '심호흡을 크게 하고 미소를 지어봐.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 98,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"너 왜 그렇게 늦게 도착했니?\"",
        "chips": [
          "Why",
          "did",
          "you",
          "arrive",
          "so",
          "late?"
        ],
        "correctAnswer": "Why did you arrive so late?",
        "explanation": "'Why did you arrive so late?'은 '너 왜 그렇게 늦게 도착했니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 99,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 4단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"스쿨버스가 지연되었기 때문이야.\"",
        "chips": [
          "Because",
          "the",
          "school",
          "bus",
          "was",
          "delayed."
        ],
        "correctAnswer": "Because the school bus was delayed.",
        "explanation": "'Because the school bus was delayed.'은 '스쿨버스가 지연되었기 때문이야.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[최종 골든벨 문제] 다음 우리말에 맞도록 주어진 단어 카드를 순서대로 바르게 배열하세요!\n우리말: \"기운 내! 내일은 또 다른 밝은 날이 올 거야.\"",
        "chips": [
          "Cheer",
          "up",
          "Tomorrow",
          "is",
          "another",
          "bright",
          "day."
        ],
        "correctAnswer": "Cheer up! Tomorrow is another bright day.",
        "explanation": "'Cheer up! Tomorrow is another bright day.'은 '기운 내! 내일은 또 다른 밝은 날이 올 거야.'을 의미하는 교과서 핵심 문장입니다."
      }
    ]
  },
  "6G_L05": {
    "name": "5단원: Where is ABC Library? (길 묻고 안내하기 · 위치 표현)",
    "grade": 6,
    "theme": "Asking Directions & Location Prepositions",
    "totalQuestions": 100,
    "questions": [
      {
        "id": 1,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Excuse me, where is ABC Library? David: Go straight one block and turn right at Nuri Bank. It is next to the bank.",
        "question": "[듣기 · 5단원] 대화를 듣고, ABC 도서관을 찾아가는 올바른 경로는?",
        "options": [
          "신호등 건너 지하철역 2번 출구",
          "한 블록 직진 후 누리은행에서 우회전, 은행 옆",
          "사거리에서 유턴 후 바로 앞",
          "두 블록 직진 후 좌회전, 우체국 맞은편"
        ],
        "correctIndex": 1,
        "correctAnswer": "한 블록 직진 후 누리은행에서 우회전, 은행 옆",
        "explanation": "교과서 핵심 길 안내: 'Go straight one block and turn right at Nuri Bank. It is next to the bank.'입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kelly: Where is the post office? Sarah: Go straight two blocks and turn left. It is on your right.",
        "question": "[듣기 · 5단원] 대화를 듣고, 우체국의 위치로 알맞은 안내는?",
        "options": [
          "도서관 건물 3층",
          "두 블록 직진 후 좌회전하여 오른쪽",
          "한 블록 직진 후 우회전하여 왼쪽",
          "횡단보도 건너편 공원 뒤"
        ],
        "correctIndex": 1,
        "correctAnswer": "두 블록 직진 후 좌회전하여 오른쪽",
        "explanation": "'Go straight two blocks and turn left. It is on your right.'입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "David: Where is the police station? Jisu: It is across from the city park.",
        "question": "[듣기 · 5단원] 대화를 듣고, 경찰서의 위치는 어디인가요?",
        "options": [
          "학교 정문 바로 옆",
          "병원 뒤쪽 골목",
          "기차역 지하",
          "도시 공원 맞은편"
        ],
        "correctIndex": 3,
        "correctAnswer": "도시 공원 맞은편",
        "explanation": "'across from the city park'는 공원 맞은편입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Sarah: Is there a bakery near here? Kevin: Yes, it is between the flower shop and the bookstore.",
        "question": "[듣기 · 5단원] 대화를 듣고, 빵집의 위치는 어디인가요?",
        "options": [
          "공원 입구 앞",
          "꽃집과 서점 사이",
          "은행 바로 뒤",
          "슈퍼마켓 2층"
        ],
        "correctIndex": 1,
        "correctAnswer": "꽃집과 서점 사이",
        "explanation": "'between the flower shop and the bookstore'입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Jisu: How can I get to the museum? Emma: Walk straight past the fountain. You can't miss it.",
        "question": "[듣기 · 5단원] 대화를 듣고, 박물관 안내에서 강조한 말은?",
        "options": [
          "분수대를 지나 똑바로 걸어가면 쉽게 찾을 수 있다",
          "지하철로 환승해야 한다",
          "버스를 타고 3정거장 가야 한다",
          "골목길로 돌아가야 한다"
        ],
        "correctIndex": 0,
        "correctAnswer": "분수대를 지나 똑바로 걸어가면 쉽게 찾을 수 있다",
        "explanation": "'Walk straight past the fountain. You can't miss it.'입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kevin: Where is the restroom? Tom: It is next to the elevator on the second floor.",
        "question": "[듣기 · 5단원] 대화를 듣고, 화장실 위치는?",
        "options": [
          "3층 교무실 맞은편",
          "지하 주차장 입구",
          "1층 정문 계단 밑",
          "2층 엘리베이터 옆"
        ],
        "correctIndex": 3,
        "correctAnswer": "2층 엘리베이터 옆",
        "explanation": "'next to the elevator on the second floor'입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Emma: Excuse me, where is ABC Library? Hana: Go straight one block and turn right at Nuri Bank. It is next to the bank.",
        "question": "[듣기 · 5단원] 대화를 듣고, ABC 도서관을 찾아가는 올바른 경로는?",
        "options": [
          "신호등 건너 지하철역 2번 출구",
          "사거리에서 유턴 후 바로 앞",
          "두 블록 직진 후 좌회전, 우체국 맞은편",
          "한 블록 직진 후 누리은행에서 우회전, 은행 옆"
        ],
        "correctIndex": 3,
        "correctAnswer": "한 블록 직진 후 누리은행에서 우회전, 은행 옆",
        "explanation": "교과서 핵심 길 안내: 'Go straight one block and turn right at Nuri Bank. It is next to the bank.'입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Tom: Where is the post office? Brian: Go straight two blocks and turn left. It is on your right.",
        "question": "[듣기 · 5단원] 대화를 듣고, 우체국의 위치로 알맞은 안내는?",
        "options": [
          "한 블록 직진 후 우회전하여 왼쪽",
          "두 블록 직진 후 좌회전하여 오른쪽",
          "횡단보도 건너편 공원 뒤",
          "도서관 건물 3층"
        ],
        "correctIndex": 1,
        "correctAnswer": "두 블록 직진 후 좌회전하여 오른쪽",
        "explanation": "'Go straight two blocks and turn left. It is on your right.'입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Hana: Where is the police station? Amy: It is across from the city park.",
        "question": "[듣기 · 5단원] 대화를 듣고, 경찰서의 위치는 어디인가요?",
        "options": [
          "병원 뒤쪽 골목",
          "학교 정문 바로 옆",
          "기차역 지하",
          "도시 공원 맞은편"
        ],
        "correctIndex": 3,
        "correctAnswer": "도시 공원 맞은편",
        "explanation": "'across from the city park'는 공원 맞은편입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Brian: Is there a bakery near here? Paul: Yes, it is between the flower shop and the bookstore.",
        "question": "[듣기 · 5단원] 대화를 듣고, 빵집의 위치는 어디인가요?",
        "options": [
          "꽃집과 서점 사이",
          "은행 바로 뒤",
          "슈퍼마켓 2층",
          "공원 입구 앞"
        ],
        "correctIndex": 0,
        "correctAnswer": "꽃집과 서점 사이",
        "explanation": "'between the flower shop and the bookstore'입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Amy: How can I get to the museum? Minsoo: Walk straight past the fountain. You can't miss it.",
        "question": "[듣기 · 5단원] 대화를 듣고, 박물관 안내에서 강조한 말은?",
        "options": [
          "버스를 타고 3정거장 가야 한다",
          "분수대를 지나 똑바로 걸어가면 쉽게 찾을 수 있다",
          "지하철로 환승해야 한다",
          "골목길로 돌아가야 한다"
        ],
        "correctIndex": 1,
        "correctAnswer": "분수대를 지나 똑바로 걸어가면 쉽게 찾을 수 있다",
        "explanation": "'Walk straight past the fountain. You can't miss it.'입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Paul: Where is the restroom? Kelly: It is next to the elevator on the second floor.",
        "question": "[듣기 · 5단원] 대화를 듣고, 화장실 위치는?",
        "options": [
          "2층 엘리베이터 옆",
          "지하 주차장 입구",
          "1층 정문 계단 밑",
          "3층 교무실 맞은편"
        ],
        "correctIndex": 0,
        "correctAnswer": "2층 엘리베이터 옆",
        "explanation": "'next to the elevator on the second floor'입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Excuse me, where is ABC Library? David: Go straight one block and turn right at Nuri Bank. It is next to the bank.",
        "question": "[듣기 · 5단원] 대화를 듣고, ABC 도서관을 찾아가는 올바른 경로는?",
        "options": [
          "한 블록 직진 후 누리은행에서 우회전, 은행 옆",
          "신호등 건너 지하철역 2번 출구",
          "두 블록 직진 후 좌회전, 우체국 맞은편",
          "사거리에서 유턴 후 바로 앞"
        ],
        "correctIndex": 0,
        "correctAnswer": "한 블록 직진 후 누리은행에서 우회전, 은행 옆",
        "explanation": "교과서 핵심 길 안내: 'Go straight one block and turn right at Nuri Bank. It is next to the bank.'입니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kelly: Where is the post office? Sarah: Go straight two blocks and turn left. It is on your right.",
        "question": "[듣기 · 5단원] 대화를 듣고, 우체국의 위치로 알맞은 안내는?",
        "options": [
          "도서관 건물 3층",
          "횡단보도 건너편 공원 뒤",
          "한 블록 직진 후 우회전하여 왼쪽",
          "두 블록 직진 후 좌회전하여 오른쪽"
        ],
        "correctIndex": 3,
        "correctAnswer": "두 블록 직진 후 좌회전하여 오른쪽",
        "explanation": "'Go straight two blocks and turn left. It is on your right.'입니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "David: Where is the police station? Jisu: It is across from the city park.",
        "question": "[듣기 · 5단원] 대화를 듣고, 경찰서의 위치는 어디인가요?",
        "options": [
          "기차역 지하",
          "병원 뒤쪽 골목",
          "학교 정문 바로 옆",
          "도시 공원 맞은편"
        ],
        "correctIndex": 3,
        "correctAnswer": "도시 공원 맞은편",
        "explanation": "'across from the city park'는 공원 맞은편입니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Sarah: Where is ABC Library? Kevin: I agree with you!",
        "question": "[듣기 · 5단원] 대화에서 Sarah이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "ABC 도서관이 어디에 있나요?"
        ],
        "correctIndex": 3,
        "correctAnswer": "ABC 도서관이 어디에 있나요?",
        "explanation": "'Where is ABC Library?'은 'ABC 도서관이 어디에 있나요?'을 의미합니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Jisu: Go straight one block and turn right. Emma: I agree with you!",
        "question": "[듣기 · 5단원] 대화에서 Jisu이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음 기회에 다시 이야기하자.",
          "한 블록 직진해서 오른쪽으로 도세요.",
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아."
        ],
        "correctIndex": 1,
        "correctAnswer": "한 블록 직진해서 오른쪽으로 도세요.",
        "explanation": "'Go straight one block and turn right.'은 '한 블록 직진해서 오른쪽으로 도세요.'을 의미합니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kevin: It is next to the bank. Tom: I agree with you!",
        "question": "[듣기 · 5단원] 대화에서 Kevin이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "은행 옆에 있습니다.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "은행 옆에 있습니다.",
        "explanation": "'It is next to the bank.'은 '은행 옆에 있습니다.'을 의미합니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Emma: It is on your right. Hana: I agree with you!",
        "question": "[듣기 · 5단원] 대화에서 Emma이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "당신의 오른쪽에 있어요."
        ],
        "correctIndex": 3,
        "correctAnswer": "당신의 오른쪽에 있어요.",
        "explanation": "'It is on your right.'은 '당신의 오른쪽에 있어요.'을 의미합니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Tom: You can not miss it. Brian: I agree with you!",
        "question": "[듣기 · 5단원] 대화에서 Tom이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "쉽게 찾으실 수 있을 거예요.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "쉽게 찾으실 수 있을 거예요.",
        "explanation": "'You can not miss it.'은 '쉽게 찾으실 수 있을 거예요.'을 의미합니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Hana: Where is the post office? Amy: I agree with you!",
        "question": "[듣기 · 5단원] 대화에서 Hana이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "우체국이 어디에 있나요?"
        ],
        "correctIndex": 3,
        "correctAnswer": "우체국이 어디에 있나요?",
        "explanation": "'Where is the post office?'은 '우체국이 어디에 있나요?'을 의미합니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Brian: Turn left at the second corner. Paul: I agree with you!",
        "question": "[듣기 · 5단원] 대화에서 Brian이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "두 번째 모퉁이에서 좌회전하세요.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "두 번째 모퉁이에서 좌회전하세요.",
        "explanation": "'Turn left at the second corner.'은 '두 번째 모퉁이에서 좌회전하세요.'을 의미합니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Amy: The museum is across from the park. Minsoo: I agree with you!",
        "question": "[듣기 · 5단원] 대화에서 Amy이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "박물관은 공원 맞은편에 위치해 있어요.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 2,
        "correctAnswer": "박물관은 공원 맞은편에 위치해 있어요.",
        "explanation": "'The museum is across from the park.'은 '박물관은 공원 맞은편에 위치해 있어요.'을 의미합니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Paul: The bakery is between the bank and the shop. Kelly: I agree with you!",
        "question": "[듣기 · 5단원] 대화에서 Paul이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어.",
          "빵집은 은행과 가게 사이에 있습니다."
        ],
        "correctIndex": 3,
        "correctAnswer": "빵집은 은행과 가게 사이에 있습니다.",
        "explanation": "'The bakery is between the bank and the shop.'은 '빵집은 은행과 가게 사이에 있습니다.'을 의미합니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Walk straight for two minutes. David: I agree with you!",
        "question": "[듣기 · 5단원] 대화에서 Minsoo이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "2분 동안 똑바로 걸어가세요."
        ],
        "correctIndex": 3,
        "correctAnswer": "2분 동안 똑바로 걸어가세요.",
        "explanation": "'Walk straight for two minutes.'은 '2분 동안 똑바로 걸어가세요.'을 의미합니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kelly: What does 'bank' mean in Korean? Sarah: It means '은행'.",
        "question": "[듣기 · 5단원] 대화에서 언급된 영어 단어 'bank'의 우리말 뜻으로 바른 것은?",
        "options": [
          "은행",
          "돌다, 회전하다",
          "똑바로, 곧장",
          "블록, 구역"
        ],
        "correctIndex": 0,
        "correctAnswer": "은행",
        "explanation": "'bank'은 '은행'를 뜻합니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "David: What does 'hospital' mean in Korean? Jisu: It means '병원'.",
        "question": "[듣기 · 5단원] 대화에서 언급된 영어 단어 'hospital'의 우리말 뜻으로 바른 것은?",
        "options": [
          "블록, 구역",
          "똑바로, 곧장",
          "돌다, 회전하다",
          "병원"
        ],
        "correctIndex": 3,
        "correctAnswer": "병원",
        "explanation": "'hospital'은 '병원'를 뜻합니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Sarah: What does 'corner' mean in Korean? Kevin: It means '모퉁이'.",
        "question": "[듣기 · 5단원] 대화에서 언급된 영어 단어 'corner'의 우리말 뜻으로 바른 것은?",
        "options": [
          "모퉁이",
          "돌다, 회전하다",
          "똑바로, 곧장",
          "블록, 구역"
        ],
        "correctIndex": 0,
        "correctAnswer": "모퉁이",
        "explanation": "'corner'은 '모퉁이'를 뜻합니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Jisu: What does 'miss' mean in Korean? Emma: It means '놓치다, 지나치다'.",
        "question": "[듣기 · 5단원] 대화에서 언급된 영어 단어 'miss'의 우리말 뜻으로 바른 것은?",
        "options": [
          "블록, 구역",
          "똑바로, 곧장",
          "돌다, 회전하다",
          "놓치다, 지나치다"
        ],
        "correctIndex": 3,
        "correctAnswer": "놓치다, 지나치다",
        "explanation": "'miss'은 '놓치다, 지나치다'를 뜻합니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kevin: What does 'crosswalk' mean in Korean? Tom: It means '횡단보도'.",
        "question": "[듣기 · 5단원] 대화에서 언급된 영어 단어 'crosswalk'의 우리말 뜻으로 바른 것은?",
        "options": [
          "똑바로, 곧장",
          "횡단보도",
          "돌다, 회전하다",
          "블록, 구역"
        ],
        "correctIndex": 1,
        "correctAnswer": "횡단보도",
        "explanation": "'crosswalk'은 '횡단보도'를 뜻합니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Emma: What does 'straight' mean in Korean? Hana: It means '똑바로, 곧장'.",
        "question": "[듣기 · 5단원] 대화에서 언급된 영어 단어 'straight'의 우리말 뜻으로 바른 것은?",
        "options": [
          "똑바로, 곧장",
          "블록, 구역",
          "돌다, 회전하다",
          "왼쪽"
        ],
        "correctIndex": 0,
        "correctAnswer": "똑바로, 곧장",
        "explanation": "'straight'은 '똑바로, 곧장'를 뜻합니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Tom: What does 'block' mean in Korean? Brian: It means '블록, 구역'.",
        "question": "[듣기 · 5단원] 대화에서 언급된 영어 단어 'block'의 우리말 뜻으로 바른 것은?",
        "options": [
          "왼쪽",
          "돌다, 회전하다",
          "똑바로, 곧장",
          "블록, 구역"
        ],
        "correctIndex": 3,
        "correctAnswer": "블록, 구역",
        "explanation": "'block'은 '블록, 구역'를 뜻합니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Hana: What does 'turn' mean in Korean? Amy: It means '돌다, 회전하다'.",
        "question": "[듣기 · 5단원] 대화에서 언급된 영어 단어 'turn'의 우리말 뜻으로 바른 것은?",
        "options": [
          "왼쪽",
          "돌다, 회전하다",
          "똑바로, 곧장",
          "블록, 구역"
        ],
        "correctIndex": 1,
        "correctAnswer": "돌다, 회전하다",
        "explanation": "'turn'은 '돌다, 회전하다'를 뜻합니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Brian: What does 'left' mean in Korean? Paul: It means '왼쪽'.",
        "question": "[듣기 · 5단원] 대화에서 언급된 영어 단어 'left'의 우리말 뜻으로 바른 것은?",
        "options": [
          "돌다, 회전하다",
          "블록, 구역",
          "똑바로, 곧장",
          "왼쪽"
        ],
        "correctIndex": 3,
        "correctAnswer": "왼쪽",
        "explanation": "'left'은 '왼쪽'를 뜻합니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Amy: What does 'right' mean in Korean? Minsoo: It means '오른쪽'.",
        "question": "[듣기 · 5단원] 대화에서 언급된 영어 단어 'right'의 우리말 뜻으로 바른 것은?",
        "options": [
          "블록, 구역",
          "돌다, 회전하다",
          "똑바로, 곧장",
          "오른쪽"
        ],
        "correctIndex": 3,
        "correctAnswer": "오른쪽",
        "explanation": "'right'은 '오른쪽'를 뜻합니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kelly. It is on your right. I am very happy and excited about our English class today.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kelly. It is on your right. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다.",
          "당신의 오른쪽에 있어요."
        ],
        "correctIndex": 3,
        "correctAnswer": "당신의 오른쪽에 있어요.",
        "explanation": "'It is on your right.'(당신의 오른쪽에 있어요.)이 핵심 문장입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is David. You can not miss it. I am very happy and excited about our English class today.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is David. You can not miss it. I am very happy and excited about our English class today.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "쉽게 찾으실 수 있을 거예요."
        ],
        "correctIndex": 3,
        "correctAnswer": "쉽게 찾으실 수 있을 거예요.",
        "explanation": "'You can not miss it.'(쉽게 찾으실 수 있을 거예요.)이 핵심 문장입니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Sarah. Where is the post office? I am very happy and excited about our English class today.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Sarah. Where is the post office? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "우체국이 어디에 있나요?"
        ],
        "correctIndex": 3,
        "correctAnswer": "우체국이 어디에 있나요?",
        "explanation": "'Where is the post office?'(우체국이 어디에 있나요?)이 핵심 문장입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Jisu. Turn left at the second corner. I am very happy and excited about our English class today.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Jisu. Turn left at the second corner. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Jisu이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "두 번째 모퉁이에서 좌회전하세요.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "두 번째 모퉁이에서 좌회전하세요.",
        "explanation": "'Turn left at the second corner.'(두 번째 모퉁이에서 좌회전하세요.)이 핵심 문장입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kevin. The museum is across from the park. I am very happy and excited about our English class today.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kevin. The museum is across from the park. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kevin이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "박물관은 공원 맞은편에 위치해 있어요.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 2,
        "correctAnswer": "박물관은 공원 맞은편에 위치해 있어요.",
        "explanation": "'The museum is across from the park.'(박물관은 공원 맞은편에 위치해 있어요.)이 핵심 문장입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Emma. The bakery is between the bank and the shop. I am very happy and excited about our English class today.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Emma. The bakery is between the bank and the shop. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Emma이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "빵집은 은행과 가게 사이에 있습니다."
        ],
        "correctIndex": 3,
        "correctAnswer": "빵집은 은행과 가게 사이에 있습니다.",
        "explanation": "'The bakery is between the bank and the shop.'(빵집은 은행과 가게 사이에 있습니다.)이 핵심 문장입니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Tom. Walk straight for two minutes. I am very happy and excited about our English class today.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Tom. Walk straight for two minutes. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Tom이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "2분 동안 똑바로 걸어가세요.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "2분 동안 똑바로 걸어가세요.",
        "explanation": "'Walk straight for two minutes.'(2분 동안 똑바로 걸어가세요.)이 핵심 문장입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Hana. Cross the street at the crosswalk. I am very happy and excited about our English class today.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Hana. Cross the street at the crosswalk. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Hana이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "횡단보도에서 길을 건너세요.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "횡단보도에서 길을 건너세요.",
        "explanation": "'Cross the street at the crosswalk.'(횡단보도에서 길을 건너세요.)이 핵심 문장입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Brian. Is there a hospital near here? I am very happy and excited about our English class today.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Brian. Is there a hospital near here? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Brian이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "길을 잃어서 병원을 찾고 있다.",
          "이 근처에 병원이 있나요?"
        ],
        "correctIndex": 3,
        "correctAnswer": "이 근처에 병원이 있나요?",
        "explanation": "'Is there a hospital near here?'(이 근처에 병원이 있나요?)이 핵심 문장입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Amy. Yes, it is behind the supermarket. I am very happy and excited about our English class today.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Amy. Yes, it is behind the supermarket. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Amy이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "네, 슈퍼마켓 뒤편에 있습니다.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 1,
        "correctAnswer": "네, 슈퍼마켓 뒤편에 있습니다.",
        "explanation": "'Yes, it is behind the supermarket.'(네, 슈퍼마켓 뒤편에 있습니다.)이 핵심 문장입니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Paul. Thank you for your kind directions. I am very happy and excited about our English class today.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Paul. Thank you for your kind directions. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Paul이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친절하게 길을 안내해 주셔서 감사합니다.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 1,
        "correctAnswer": "친절하게 길을 안내해 주셔서 감사합니다.",
        "explanation": "'Thank you for your kind directions.'(친절하게 길을 안내해 주셔서 감사합니다.)이 핵심 문장입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Minsoo. Where can I find the subway station? I am very happy and excited about our English class today.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Minsoo. Where can I find the subway station? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "지하철역은 어디에서 찾을 수 있나요?",
          "숙제가 너무 어려워서 고민이다.",
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 0,
        "correctAnswer": "지하철역은 어디에서 찾을 수 있나요?",
        "explanation": "'Where can I find the subway station?'(지하철역은 어디에서 찾을 수 있나요?)이 핵심 문장입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kelly. Where is ABC Library? I am very happy and excited about our English class today.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kelly. Where is ABC Library? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "ABC 도서관이 어디에 있나요?"
        ],
        "correctIndex": 3,
        "correctAnswer": "ABC 도서관이 어디에 있나요?",
        "explanation": "'Where is ABC Library?'(ABC 도서관이 어디에 있나요?)이 핵심 문장입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is David. Go straight one block and turn right. I am very happy and excited about our English class today.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is David. Go straight one block and turn right. I am very happy and excited about our English class today.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "숙제가 너무 어려워서 고민이다.",
          "길을 잃어서 병원을 찾고 있다.",
          "한 블록 직진해서 오른쪽으로 도세요.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 2,
        "correctAnswer": "한 블록 직진해서 오른쪽으로 도세요.",
        "explanation": "'Go straight one block and turn right.'(한 블록 직진해서 오른쪽으로 도세요.)이 핵심 문장입니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Sarah. It is next to the bank. I am very happy and excited about our English class today.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Sarah. It is next to the bank. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "은행 옆에 있습니다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 2,
        "correctAnswer": "은행 옆에 있습니다.",
        "explanation": "'It is next to the bank.'(은행 옆에 있습니다.)이 핵심 문장입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Is there a bakery near here? And the response was: \"Yes, it is between the flower shop and the bookstore.\"",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Is there a bakery near here? And the response was: \"Yes, it is between the flower shop and the bookstore.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 빵집의 위치는 어디인가요?",
        "options": [
          "꽃집과 서점 사이",
          "공원 입구 앞",
          "은행 바로 뒤",
          "슈퍼마켓 2층"
        ],
        "correctIndex": 0,
        "correctAnswer": "꽃집과 서점 사이",
        "explanation": "'between the flower shop and the bookstore'입니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: How can I get to the museum? And the response was: \"Walk straight past the fountain. You can't miss it.\"",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: How can I get to the museum? And the response was: \"Walk straight past the fountain. You can't miss it.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 박물관 안내에서 강조한 말은?",
        "options": [
          "지하철로 환승해야 한다",
          "골목길로 돌아가야 한다",
          "버스를 타고 3정거장 가야 한다",
          "분수대를 지나 똑바로 걸어가면 쉽게 찾을 수 있다"
        ],
        "correctIndex": 3,
        "correctAnswer": "분수대를 지나 똑바로 걸어가면 쉽게 찾을 수 있다",
        "explanation": "'Walk straight past the fountain. You can't miss it.'입니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Where is the restroom? And the response was: \"It is next to the elevator on the second floor.\"",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Where is the restroom? And the response was: \"It is next to the elevator on the second floor.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 화장실 위치는?",
        "options": [
          "1층 정문 계단 밑",
          "2층 엘리베이터 옆",
          "지하 주차장 입구",
          "3층 교무실 맞은편"
        ],
        "correctIndex": 1,
        "correctAnswer": "2층 엘리베이터 옆",
        "explanation": "'next to the elevator on the second floor'입니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Excuse me, where is ABC Library? And the response was: \"Go straight one block and turn right at Nuri Bank. It is next to the bank.\"",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Excuse me, where is ABC Library? And the response was: \"Go straight one block and turn right at Nuri Bank. It is next to the bank.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: ABC 도서관을 찾아가는 올바른 경로는?",
        "options": [
          "사거리에서 유턴 후 바로 앞",
          "한 블록 직진 후 누리은행에서 우회전, 은행 옆",
          "두 블록 직진 후 좌회전, 우체국 맞은편",
          "신호등 건너 지하철역 2번 출구"
        ],
        "correctIndex": 1,
        "correctAnswer": "한 블록 직진 후 누리은행에서 우회전, 은행 옆",
        "explanation": "교과서 핵심 길 안내: 'Go straight one block and turn right at Nuri Bank. It is next to the bank.'입니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Where is the post office? And the response was: \"Go straight two blocks and turn left. It is on your right.\"",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Where is the post office? And the response was: \"Go straight two blocks and turn left. It is on your right.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 우체국의 위치로 알맞은 안내는?",
        "options": [
          "도서관 건물 3층",
          "횡단보도 건너편 공원 뒤",
          "한 블록 직진 후 우회전하여 왼쪽",
          "두 블록 직진 후 좌회전하여 오른쪽"
        ],
        "correctIndex": 3,
        "correctAnswer": "두 블록 직진 후 좌회전하여 오른쪽",
        "explanation": "'Go straight two blocks and turn left. It is on your right.'입니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Where is the police station? And the response was: \"It is across from the city park.\"",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Where is the police station? And the response was: \"It is across from the city park.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 경찰서의 위치는 어디인가요?",
        "options": [
          "기차역 지하",
          "도시 공원 맞은편",
          "학교 정문 바로 옆",
          "병원 뒤쪽 골목"
        ],
        "correctIndex": 1,
        "correctAnswer": "도시 공원 맞은편",
        "explanation": "'across from the city park'는 공원 맞은편입니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Is there a bakery near here? And the response was: \"Yes, it is between the flower shop and the bookstore.\"",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Is there a bakery near here? And the response was: \"Yes, it is between the flower shop and the bookstore.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 빵집의 위치는 어디인가요?",
        "options": [
          "공원 입구 앞",
          "슈퍼마켓 2층",
          "은행 바로 뒤",
          "꽃집과 서점 사이"
        ],
        "correctIndex": 3,
        "correctAnswer": "꽃집과 서점 사이",
        "explanation": "'between the flower shop and the bookstore'입니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: How can I get to the museum? And the response was: \"Walk straight past the fountain. You can't miss it.\"",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: How can I get to the museum? And the response was: \"Walk straight past the fountain. You can't miss it.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 박물관 안내에서 강조한 말은?",
        "options": [
          "골목길로 돌아가야 한다",
          "분수대를 지나 똑바로 걸어가면 쉽게 찾을 수 있다",
          "버스를 타고 3정거장 가야 한다",
          "지하철로 환승해야 한다"
        ],
        "correctIndex": 1,
        "correctAnswer": "분수대를 지나 똑바로 걸어가면 쉽게 찾을 수 있다",
        "explanation": "'Walk straight past the fountain. You can't miss it.'입니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Where is the restroom? And the response was: \"It is next to the elevator on the second floor.\"",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Where is the restroom? And the response was: \"It is next to the elevator on the second floor.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 화장실 위치는?",
        "options": [
          "3층 교무실 맞은편",
          "1층 정문 계단 밑",
          "지하 주차장 입구",
          "2층 엘리베이터 옆"
        ],
        "correctIndex": 3,
        "correctAnswer": "2층 엘리베이터 옆",
        "explanation": "'next to the elevator on the second floor'입니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Excuse me, where is ABC Library? And the response was: \"Go straight one block and turn right at Nuri Bank. It is next to the bank.\"",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Excuse me, where is ABC Library? And the response was: \"Go straight one block and turn right at Nuri Bank. It is next to the bank.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: ABC 도서관을 찾아가는 올바른 경로는?",
        "options": [
          "신호등 건너 지하철역 2번 출구",
          "두 블록 직진 후 좌회전, 우체국 맞은편",
          "사거리에서 유턴 후 바로 앞",
          "한 블록 직진 후 누리은행에서 우회전, 은행 옆"
        ],
        "correctIndex": 3,
        "correctAnswer": "한 블록 직진 후 누리은행에서 우회전, 은행 옆",
        "explanation": "교과서 핵심 길 안내: 'Go straight one block and turn right at Nuri Bank. It is next to the bank.'입니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'corner' is a new word in 5단원. In Korean, it means '모퉁이'.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'corner' is a new word in 5단원. In Korean, it means '모퉁이'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'corner'의 뜻은?",
        "options": [
          "모퉁이",
          "똑바로, 곧장",
          "블록, 구역",
          "돌다, 회전하다"
        ],
        "correctIndex": 0,
        "correctAnswer": "모퉁이",
        "explanation": "'corner'은 '모퉁이'입니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'miss' is a new word in 5단원. In Korean, it means '놓치다, 지나치다'.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'miss' is a new word in 5단원. In Korean, it means '놓치다, 지나치다'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'miss'의 뜻은?",
        "options": [
          "블록, 구역",
          "똑바로, 곧장",
          "놓치다, 지나치다",
          "돌다, 회전하다"
        ],
        "correctIndex": 2,
        "correctAnswer": "놓치다, 지나치다",
        "explanation": "'miss'은 '놓치다, 지나치다'입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'crosswalk' is a new word in 5단원. In Korean, it means '횡단보도'.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'crosswalk' is a new word in 5단원. In Korean, it means '횡단보도'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'crosswalk'의 뜻은?",
        "options": [
          "횡단보도",
          "똑바로, 곧장",
          "블록, 구역",
          "돌다, 회전하다"
        ],
        "correctIndex": 0,
        "correctAnswer": "횡단보도",
        "explanation": "'crosswalk'은 '횡단보도'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'straight' is a new word in 5단원. In Korean, it means '똑바로, 곧장'.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'straight' is a new word in 5단원. In Korean, it means '똑바로, 곧장'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'straight'의 뜻은?",
        "options": [
          "똑바로, 곧장",
          "블록, 구역",
          "돌다, 회전하다",
          "왼쪽"
        ],
        "correctIndex": 0,
        "correctAnswer": "똑바로, 곧장",
        "explanation": "'straight'은 '똑바로, 곧장'입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'block' is a new word in 5단원. In Korean, it means '블록, 구역'.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'block' is a new word in 5단원. In Korean, it means '블록, 구역'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'block'의 뜻은?",
        "options": [
          "블록, 구역",
          "똑바로, 곧장",
          "돌다, 회전하다",
          "왼쪽"
        ],
        "correctIndex": 0,
        "correctAnswer": "블록, 구역",
        "explanation": "'block'은 '블록, 구역'입니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'turn' is a new word in 5단원. In Korean, it means '돌다, 회전하다'.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'turn' is a new word in 5단원. In Korean, it means '돌다, 회전하다'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'turn'의 뜻은?",
        "options": [
          "왼쪽",
          "돌다, 회전하다",
          "블록, 구역",
          "똑바로, 곧장"
        ],
        "correctIndex": 1,
        "correctAnswer": "돌다, 회전하다",
        "explanation": "'turn'은 '돌다, 회전하다'입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'left' is a new word in 5단원. In Korean, it means '왼쪽'.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'left' is a new word in 5단원. In Korean, it means '왼쪽'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'left'의 뜻은?",
        "options": [
          "돌다, 회전하다",
          "똑바로, 곧장",
          "왼쪽",
          "블록, 구역"
        ],
        "correctIndex": 2,
        "correctAnswer": "왼쪽",
        "explanation": "'left'은 '왼쪽'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'right' is a new word in 5단원. In Korean, it means '오른쪽'.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'right' is a new word in 5단원. In Korean, it means '오른쪽'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'right'의 뜻은?",
        "options": [
          "똑바로, 곧장",
          "블록, 구역",
          "오른쪽",
          "돌다, 회전하다"
        ],
        "correctIndex": 2,
        "correctAnswer": "오른쪽",
        "explanation": "'right'은 '오른쪽'입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'next to' is a new word in 5단원. In Korean, it means '~옆에'.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'next to' is a new word in 5단원. In Korean, it means '~옆에'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'next to'의 뜻은?",
        "options": [
          "돌다, 회전하다",
          "블록, 구역",
          "똑바로, 곧장",
          "~옆에"
        ],
        "correctIndex": 3,
        "correctAnswer": "~옆에",
        "explanation": "'next to'은 '~옆에'입니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'across from' is a new word in 5단원. In Korean, it means '~맞은편에'.",
        "question": "[읽기 · 5단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'across from' is a new word in 5단원. In Korean, it means '~맞은편에'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'across from'의 뜻은?",
        "options": [
          "돌다, 회전하다",
          "블록, 구역",
          "똑바로, 곧장",
          "~맞은편에"
        ],
        "correctIndex": 3,
        "correctAnswer": "~맞은편에",
        "explanation": "'across from'은 '~맞은편에'입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 5단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"똑바로, 곧장\" (첫 글자: s, 총 8글자)",
        "correctAnswer": "straight",
        "explanation": "'똑바로, 곧장'의 영어 표기는 'straight'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 5단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"블록, 구역\" (첫 글자: b, 총 5글자)",
        "correctAnswer": "block",
        "explanation": "'블록, 구역'의 영어 표기는 'block'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 5단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"돌다, 회전하다\" (첫 글자: t, 총 4글자)",
        "correctAnswer": "turn",
        "explanation": "'돌다, 회전하다'의 영어 표기는 'turn'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 5단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"왼쪽\" (첫 글자: l, 총 4글자)",
        "correctAnswer": "left",
        "explanation": "'왼쪽'의 영어 표기는 'left'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 5단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"오른쪽\" (첫 글자: r, 총 5글자)",
        "correctAnswer": "right",
        "explanation": "'오른쪽'의 영어 표기는 'right'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 5단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"~옆에\" (첫 글자: n, 총 7글자)",
        "correctAnswer": "next to",
        "explanation": "'~옆에'의 영어 표기는 'next to'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 5단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"~맞은편에\" (첫 글자: a, 총 11글자)",
        "correctAnswer": "across from",
        "explanation": "'~맞은편에'의 영어 표기는 'across from'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 5단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"~사이에\" (첫 글자: b, 총 7글자)",
        "correctAnswer": "between",
        "explanation": "'~사이에'의 영어 표기는 'between'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 5단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"~뒤에\" (첫 글자: b, 총 6글자)",
        "correctAnswer": "behind",
        "explanation": "'~뒤에'의 영어 표기는 'behind'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 5단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"도서관\" (첫 글자: l, 총 7글자)",
        "correctAnswer": "library",
        "explanation": "'도서관'의 영어 표기는 'library'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 5단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"은행\" (첫 글자: b, 총 4글자)",
        "correctAnswer": "bank",
        "explanation": "'은행'의 영어 표기는 'bank'입니다."
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 5단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"병원\" (첫 글자: h, 총 8글자)",
        "correctAnswer": "hospital",
        "explanation": "'병원'의 영어 표기는 'hospital'입니다."
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 5단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"모퉁이\" (첫 글자: c, 총 6글자)",
        "correctAnswer": "corner",
        "explanation": "'모퉁이'의 영어 표기는 'corner'입니다."
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 5단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"놓치다, 지나치다\" (첫 글자: m, 총 4글자)",
        "correctAnswer": "miss",
        "explanation": "'놓치다, 지나치다'의 영어 표기는 'miss'입니다."
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 5단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"횡단보도\" (첫 글자: c, 총 9글자)",
        "correctAnswer": "crosswalk",
        "explanation": "'횡단보도'의 영어 표기는 'crosswalk'입니다."
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"ABC 도서관이 어디에 있나요?\"",
        "chips": [
          "Where",
          "is",
          "ABC",
          "Library?"
        ],
        "correctAnswer": "Where is ABC Library?",
        "explanation": "'Where is ABC Library?'은 'ABC 도서관이 어디에 있나요?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"한 블록 직진해서 오른쪽으로 도세요.\"",
        "chips": [
          "Go",
          "straight",
          "one",
          "block",
          "and",
          "turn",
          "right."
        ],
        "correctAnswer": "Go straight one block and turn right.",
        "explanation": "'Go straight one block and turn right.'은 '한 블록 직진해서 오른쪽으로 도세요.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"은행 옆에 있습니다.\"",
        "chips": [
          "It",
          "is",
          "next",
          "to",
          "the",
          "bank."
        ],
        "correctAnswer": "It is next to the bank.",
        "explanation": "'It is next to the bank.'은 '은행 옆에 있습니다.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"당신의 오른쪽에 있어요.\"",
        "chips": [
          "It",
          "is",
          "on",
          "your",
          "right."
        ],
        "correctAnswer": "It is on your right.",
        "explanation": "'It is on your right.'은 '당신의 오른쪽에 있어요.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"쉽게 찾으실 수 있을 거예요.\"",
        "chips": [
          "You",
          "can",
          "not",
          "miss",
          "it."
        ],
        "correctAnswer": "You can not miss it.",
        "explanation": "'You can not miss it.'은 '쉽게 찾으실 수 있을 거예요.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"우체국이 어디에 있나요?\"",
        "chips": [
          "Where",
          "is",
          "the",
          "post",
          "office?"
        ],
        "correctAnswer": "Where is the post office?",
        "explanation": "'Where is the post office?'은 '우체국이 어디에 있나요?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"두 번째 모퉁이에서 좌회전하세요.\"",
        "chips": [
          "Turn",
          "left",
          "at",
          "the",
          "second",
          "corner."
        ],
        "correctAnswer": "Turn left at the second corner.",
        "explanation": "'Turn left at the second corner.'은 '두 번째 모퉁이에서 좌회전하세요.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"박물관은 공원 맞은편에 위치해 있어요.\"",
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
        "explanation": "'The museum is across from the park.'은 '박물관은 공원 맞은편에 위치해 있어요.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"빵집은 은행과 가게 사이에 있습니다.\"",
        "chips": [
          "The",
          "bakery",
          "is",
          "between",
          "the",
          "bank",
          "and",
          "the",
          "shop."
        ],
        "correctAnswer": "The bakery is between the bank and the shop.",
        "explanation": "'The bakery is between the bank and the shop.'은 '빵집은 은행과 가게 사이에 있습니다.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"2분 동안 똑바로 걸어가세요.\"",
        "chips": [
          "Walk",
          "straight",
          "for",
          "two",
          "minutes."
        ],
        "correctAnswer": "Walk straight for two minutes.",
        "explanation": "'Walk straight for two minutes.'은 '2분 동안 똑바로 걸어가세요.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 96,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"횡단보도에서 길을 건너세요.\"",
        "chips": [
          "Cross",
          "the",
          "street",
          "at",
          "the",
          "crosswalk."
        ],
        "correctAnswer": "Cross the street at the crosswalk.",
        "explanation": "'Cross the street at the crosswalk.'은 '횡단보도에서 길을 건너세요.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 97,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"이 근처에 병원이 있나요?\"",
        "chips": [
          "Is",
          "there",
          "a",
          "hospital",
          "near",
          "here?"
        ],
        "correctAnswer": "Is there a hospital near here?",
        "explanation": "'Is there a hospital near here?'은 '이 근처에 병원이 있나요?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 98,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"네, 슈퍼마켓 뒤편에 있습니다.\"",
        "chips": [
          "Yes",
          "it",
          "is",
          "behind",
          "the",
          "supermarket."
        ],
        "correctAnswer": "Yes, it is behind the supermarket.",
        "explanation": "'Yes, it is behind the supermarket.'은 '네, 슈퍼마켓 뒤편에 있습니다.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 99,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 5단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"친절하게 길을 안내해 주셔서 감사합니다.\"",
        "chips": [
          "Thank",
          "you",
          "for",
          "your",
          "kind",
          "directions."
        ],
        "correctAnswer": "Thank you for your kind directions.",
        "explanation": "'Thank you for your kind directions.'은 '친절하게 길을 안내해 주셔서 감사합니다.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[최종 골든벨 문제] 다음 우리말에 맞도록 주어진 단어 카드를 순서대로 바르게 배열하세요!\n우리말: \"지하철역은 어디에서 찾을 수 있나요?\"",
        "chips": [
          "Where",
          "can",
          "I",
          "find",
          "the",
          "subway",
          "station?"
        ],
        "correctAnswer": "Where can I find the subway station?",
        "explanation": "'Where can I find the subway station?'은 '지하철역은 어디에서 찾을 수 있나요?'을 의미하는 교과서 핵심 문장입니다."
      }
    ]
  },
  "6G_L06": {
    "name": "6단원: What does he/she look like? (인물의 외모와 옷차림 묘사)",
    "grade": 6,
    "theme": "Describing Appearance & Clothing",
    "totalQuestions": 100,
    "questions": [
      {
        "id": 1,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Minsoo: What does he look like? David: He has short curly brown hair and blue eyes.",
        "question": "[듣기 · 6단원] 대화를 듣고, 그의 외모 특징으로 알맞은 것은?",
        "options": [
          "긴 검은 생머리에 갈색 눈",
          "웨이브 금발에 초록 눈",
          "대머리에 안경 착용",
          "짧은 갈색 곱슬머리에 파란 눈"
        ],
        "correctIndex": 3,
        "correctAnswer": "짧은 갈색 곱슬머리에 파란 눈",
        "explanation": "'short curly brown hair and blue eyes'입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kelly: What does she look like? Sarah: She has long straight black hair and wears glasses.",
        "question": "[듣기 · 6단원] 대화를 듣고, 그녀의 외모 특징으로 알맞은 것은?",
        "options": [
          "갈색 곱슬머리에 선글라스 착용",
          "짧은 단발머리에 모자 착용",
          "키가 매우 작고 안경 미착용",
          "긴 검은 생머리에 안경 착용"
        ],
        "correctIndex": 3,
        "correctAnswer": "긴 검은 생머리에 안경 착용",
        "explanation": "'long straight black hair and wears glasses'입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "David: What is she wearing today? Jisu: She is wearing a yellow shirt and blue pants.",
        "question": "[듣기 · 6단원] 대화를 듣고, 그녀가 오늘 입고 있는 옷차림은?",
        "options": [
          "노란 셔츠와 파란 바지",
          "초록 재킷과 갈색 바지",
          "분홍 원피스와 흰 모자",
          "빨간 스웨터와 검정 치마"
        ],
        "correctIndex": 0,
        "correctAnswer": "노란 셔츠와 파란 바지",
        "explanation": "교과서 본문 표현: 'She is wearing a yellow shirt and blue pants.'입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Sarah: Look at that boy. What is he wearing? Kevin: He is wearing a red jacket and white sneakers.",
        "question": "[듣기 · 6단원] 대화를 듣고, 저 소년의 옷차림 묘사로 알맞은 것은?",
        "options": [
          "회색 코트와 부츠",
          "빨간 재킷과 흰 운동화",
          "노란 비옷과 장화",
          "파란 유니폼과 축구화"
        ],
        "correctIndex": 1,
        "correctAnswer": "빨간 재킷과 흰 운동화",
        "explanation": "'red jacket and white sneakers'입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Jisu: What does your grandmother look like? Emma: She has short gray hair and a warm, kind smile.",
        "question": "[듣기 · 6단원] 대화를 듣고, 할머니의 인상 착의로 알맞은 것은?",
        "options": [
          "키가 아주 크고 엄격한 표정",
          "긴 생머리에 무서운 표정",
          "짧은 은발에 따뜻하고 다정한 미소",
          "파마머리에 큰 선글라스 착용"
        ],
        "correctIndex": 2,
        "correctAnswer": "짧은 은발에 따뜻하고 다정한 미소",
        "explanation": "'short gray hair and a warm, kind smile'입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kevin: Who is the girl wearing a pink ribbon? Tom: She is my cousin Emma. She is tall and slim.",
        "question": "[듣기 · 6단원] 대화를 듣고, 분홍 리본을 단 소녀 Emma의 체형은?",
        "options": [
          "보통 키에 둥근 얼굴",
          "건장하고 힘이 셈",
          "키가 작고 통통함",
          "키가 크고 날씬함"
        ],
        "correctIndex": 3,
        "correctAnswer": "키가 크고 날씬함",
        "explanation": "'tall and slim'은 키가 크고 날씬하다는 뜻입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Emma: What does he look like? Hana: He has short curly brown hair and blue eyes.",
        "question": "[듣기 · 6단원] 대화를 듣고, 그의 외모 특징으로 알맞은 것은?",
        "options": [
          "웨이브 금발에 초록 눈",
          "긴 검은 생머리에 갈색 눈",
          "짧은 갈색 곱슬머리에 파란 눈",
          "대머리에 안경 착용"
        ],
        "correctIndex": 2,
        "correctAnswer": "짧은 갈색 곱슬머리에 파란 눈",
        "explanation": "'short curly brown hair and blue eyes'입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Tom: What does she look like? Brian: She has long straight black hair and wears glasses.",
        "question": "[듣기 · 6단원] 대화를 듣고, 그녀의 외모 특징으로 알맞은 것은?",
        "options": [
          "긴 검은 생머리에 안경 착용",
          "짧은 단발머리에 모자 착용",
          "갈색 곱슬머리에 선글라스 착용",
          "키가 매우 작고 안경 미착용"
        ],
        "correctIndex": 0,
        "correctAnswer": "긴 검은 생머리에 안경 착용",
        "explanation": "'long straight black hair and wears glasses'입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Hana: What is she wearing today? Amy: She is wearing a yellow shirt and blue pants.",
        "question": "[듣기 · 6단원] 대화를 듣고, 그녀가 오늘 입고 있는 옷차림은?",
        "options": [
          "노란 셔츠와 파란 바지",
          "분홍 원피스와 흰 모자",
          "빨간 스웨터와 검정 치마",
          "초록 재킷과 갈색 바지"
        ],
        "correctIndex": 0,
        "correctAnswer": "노란 셔츠와 파란 바지",
        "explanation": "교과서 본문 표현: 'She is wearing a yellow shirt and blue pants.'입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Brian: Look at that boy. What is he wearing? Paul: He is wearing a red jacket and white sneakers.",
        "question": "[듣기 · 6단원] 대화를 듣고, 저 소년의 옷차림 묘사로 알맞은 것은?",
        "options": [
          "빨간 재킷과 흰 운동화",
          "파란 유니폼과 축구화",
          "노란 비옷과 장화",
          "회색 코트와 부츠"
        ],
        "correctIndex": 0,
        "correctAnswer": "빨간 재킷과 흰 운동화",
        "explanation": "'red jacket and white sneakers'입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Amy: What does your grandmother look like? Minsoo: She has short gray hair and a warm, kind smile.",
        "question": "[듣기 · 6단원] 대화를 듣고, 할머니의 인상 착의로 알맞은 것은?",
        "options": [
          "짧은 은발에 따뜻하고 다정한 미소",
          "긴 생머리에 무서운 표정",
          "파마머리에 큰 선글라스 착용",
          "키가 아주 크고 엄격한 표정"
        ],
        "correctIndex": 0,
        "correctAnswer": "짧은 은발에 따뜻하고 다정한 미소",
        "explanation": "'short gray hair and a warm, kind smile'입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Paul: Who is the girl wearing a pink ribbon? Kelly: She is my cousin Emma. She is tall and slim.",
        "question": "[듣기 · 6단원] 대화를 듣고, 분홍 리본을 단 소녀 Emma의 체형은?",
        "options": [
          "보통 키에 둥근 얼굴",
          "건장하고 힘이 셈",
          "키가 작고 통통함",
          "키가 크고 날씬함"
        ],
        "correctIndex": 3,
        "correctAnswer": "키가 크고 날씬함",
        "explanation": "'tall and slim'은 키가 크고 날씬하다는 뜻입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: What does he look like? David: He has short curly brown hair and blue eyes.",
        "question": "[듣기 · 6단원] 대화를 듣고, 그의 외모 특징으로 알맞은 것은?",
        "options": [
          "웨이브 금발에 초록 눈",
          "긴 검은 생머리에 갈색 눈",
          "대머리에 안경 착용",
          "짧은 갈색 곱슬머리에 파란 눈"
        ],
        "correctIndex": 3,
        "correctAnswer": "짧은 갈색 곱슬머리에 파란 눈",
        "explanation": "'short curly brown hair and blue eyes'입니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kelly: What does she look like? Sarah: She has long straight black hair and wears glasses.",
        "question": "[듣기 · 6단원] 대화를 듣고, 그녀의 외모 특징으로 알맞은 것은?",
        "options": [
          "긴 검은 생머리에 안경 착용",
          "갈색 곱슬머리에 선글라스 착용",
          "키가 매우 작고 안경 미착용",
          "짧은 단발머리에 모자 착용"
        ],
        "correctIndex": 0,
        "correctAnswer": "긴 검은 생머리에 안경 착용",
        "explanation": "'long straight black hair and wears glasses'입니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "David: What is she wearing today? Jisu: She is wearing a yellow shirt and blue pants.",
        "question": "[듣기 · 6단원] 대화를 듣고, 그녀가 오늘 입고 있는 옷차림은?",
        "options": [
          "노란 셔츠와 파란 바지",
          "분홍 원피스와 흰 모자",
          "빨간 스웨터와 검정 치마",
          "초록 재킷과 갈색 바지"
        ],
        "correctIndex": 0,
        "correctAnswer": "노란 셔츠와 파란 바지",
        "explanation": "교과서 본문 표현: 'She is wearing a yellow shirt and blue pants.'입니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Sarah: What does he look like? Kevin: I agree with you!",
        "question": "[듣기 · 6단원] 대화에서 Sarah이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그는 어떻게 생겼니?",
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자."
        ],
        "correctIndex": 0,
        "correctAnswer": "그는 어떻게 생겼니?",
        "explanation": "'What does he look like?'은 '그는 어떻게 생겼니?'을 의미합니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Jisu: He has blue eyes. Emma: I agree with you!",
        "question": "[듣기 · 6단원] 대화에서 Jisu이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그는 파란 눈을 가지고 있어.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "그는 파란 눈을 가지고 있어.",
        "explanation": "'He has blue eyes.'은 '그는 파란 눈을 가지고 있어.'을 의미합니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kevin: She is wearing a yellow shirt and blue pants. Tom: I agree with you!",
        "question": "[듣기 · 6단원] 대화에서 Kevin이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "그녀는 노란 셔츠와 파란 바지를 입고 있어.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아."
        ],
        "correctIndex": 1,
        "correctAnswer": "그녀는 노란 셔츠와 파란 바지를 입고 있어.",
        "explanation": "'She is wearing a yellow shirt and blue pants.'은 '그녀는 노란 셔츠와 파란 바지를 입고 있어.'을 의미합니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Emma: What does she look like? Hana: I agree with you!",
        "question": "[듣기 · 6단원] 대화에서 Emma이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "그녀는 어떻게 생겼니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "그녀는 어떻게 생겼니?",
        "explanation": "'What does she look like?'은 '그녀는 어떻게 생겼니?'을 의미합니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Tom: She has long straight black hair. Brian: I agree with you!",
        "question": "[듣기 · 6단원] 대화에서 Tom이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그녀는 긴 검은 생머리를 가지고 있어.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "그녀는 긴 검은 생머리를 가지고 있어.",
        "explanation": "'She has long straight black hair.'은 '그녀는 긴 검은 생머리를 가지고 있어.'을 의미합니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Hana: My English teacher wears round glasses. Amy: I agree with you!",
        "question": "[듣기 · 6단원] 대화에서 Hana이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "우리 영어 선생님은 동그란 안경을 쓰셔.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아."
        ],
        "correctIndex": 1,
        "correctAnswer": "우리 영어 선생님은 동그란 안경을 쓰셔.",
        "explanation": "'My English teacher wears round glasses.'은 '우리 영어 선생님은 동그란 안경을 쓰셔.'을 의미합니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Brian: He has short curly brown hair. Paul: I agree with you!",
        "question": "[듣기 · 6단원] 대화에서 Brian이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "그는 짧은 갈색 곱슬머리를 가지고 있어.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 2,
        "correctAnswer": "그는 짧은 갈색 곱슬머리를 가지고 있어.",
        "explanation": "'He has short curly brown hair.'은 '그는 짧은 갈색 곱슬머리를 가지고 있어.'을 의미합니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Amy: She is wearing white running sneakers. Minsoo: I agree with you!",
        "question": "[듣기 · 6단원] 대화에서 Amy이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그녀는 흰색 조깅용 운동화를 신고 있어.",
          "다음 기회에 다시 이야기하자.",
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아."
        ],
        "correctIndex": 0,
        "correctAnswer": "그녀는 흰색 조깅용 운동화를 신고 있어.",
        "explanation": "'She is wearing white running sneakers.'은 '그녀는 흰색 조깅용 운동화를 신고 있어.'을 의미합니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Paul: The boy is tall and has bright eyes. Kelly: I agree with you!",
        "question": "[듣기 · 6단원] 대화에서 Paul이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어.",
          "다음 기회에 다시 이야기하자.",
          "그 소년은 키가 크고 맑은 눈을 가졌어."
        ],
        "correctIndex": 3,
        "correctAnswer": "그 소년은 키가 크고 맑은 눈을 가졌어.",
        "explanation": "'The boy is tall and has bright eyes.'은 '그 소년은 키가 크고 맑은 눈을 가졌어.'을 의미합니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Can you describe your best friend? David: I agree with you!",
        "question": "[듣기 · 6단원] 대화에서 Minsoo이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음 기회에 다시 이야기하자.",
          "나는 무슨 말인지 잘 모르겠어.",
          "가장 친한 친구의 생김새를 묘사해 줄래?",
          "그것은 좋은 생각이 아닌 것 같아."
        ],
        "correctIndex": 2,
        "correctAnswer": "가장 친한 친구의 생김새를 묘사해 줄래?",
        "explanation": "'Can you describe your best friend?'은 '가장 친한 친구의 생김새를 묘사해 줄래?'을 의미합니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kelly: What does 'hair' mean in Korean? Sarah: It means '머리카락'.",
        "question": "[듣기 · 6단원] 대화에서 언급된 영어 단어 'hair'의 우리말 뜻으로 바른 것은?",
        "options": [
          "머리카락",
          "곱슬머리의",
          "~처럼 보이다",
          "곧은, 생머리의"
        ],
        "correctIndex": 0,
        "correctAnswer": "머리카락",
        "explanation": "'hair'은 '머리카락'를 뜻합니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "David: What does 'jacket' mean in Korean? Jisu: It means '재킷'.",
        "question": "[듣기 · 6단원] 대화에서 언급된 영어 단어 'jacket'의 우리말 뜻으로 바른 것은?",
        "options": [
          "곧은, 생머리의",
          "~처럼 보이다",
          "재킷",
          "곱슬머리의"
        ],
        "correctIndex": 2,
        "correctAnswer": "재킷",
        "explanation": "'jacket'은 '재킷'를 뜻합니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Sarah: What does 'sneakers' mean in Korean? Kevin: It means '운동화'.",
        "question": "[듣기 · 6단원] 대화에서 언급된 영어 단어 'sneakers'의 우리말 뜻으로 바른 것은?",
        "options": [
          "곧은, 생머리의",
          "운동화",
          "~처럼 보이다",
          "곱슬머리의"
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
        "audioText": "Jisu: What does 'blond' mean in Korean? Emma: It means '금발의'.",
        "question": "[듣기 · 6단원] 대화에서 언급된 영어 단어 'blond'의 우리말 뜻으로 바른 것은?",
        "options": [
          "곧은, 생머리의",
          "~처럼 보이다",
          "금발의",
          "곱슬머리의"
        ],
        "correctIndex": 2,
        "correctAnswer": "금발의",
        "explanation": "'blond'은 '금발의'를 뜻합니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kevin: What does 'smile' mean in Korean? Tom: It means '미소'.",
        "question": "[듣기 · 6단원] 대화에서 언급된 영어 단어 'smile'의 우리말 뜻으로 바른 것은?",
        "options": [
          "곱슬머리의",
          "곧은, 생머리의",
          "미소",
          "~처럼 보이다"
        ],
        "correctIndex": 2,
        "correctAnswer": "미소",
        "explanation": "'smile'은 '미소'를 뜻합니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Emma: What does 'look' mean in Korean? Hana: It means '~처럼 보이다'.",
        "question": "[듣기 · 6단원] 대화에서 언급된 영어 단어 'look'의 우리말 뜻으로 바른 것은?",
        "options": [
          "~처럼 보이다",
          "곱슬머리의",
          "곧은, 생머리의",
          "안경"
        ],
        "correctIndex": 0,
        "correctAnswer": "~처럼 보이다",
        "explanation": "'look'은 '~처럼 보이다'를 뜻합니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Tom: What does 'curly' mean in Korean? Brian: It means '곱슬머리의'.",
        "question": "[듣기 · 6단원] 대화에서 언급된 영어 단어 'curly'의 우리말 뜻으로 바른 것은?",
        "options": [
          "곱슬머리의",
          "~처럼 보이다",
          "안경",
          "곧은, 생머리의"
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
        "audioText": "Hana: What does 'straight' mean in Korean? Amy: It means '곧은, 생머리의'.",
        "question": "[듣기 · 6단원] 대화에서 언급된 영어 단어 'straight'의 우리말 뜻으로 바른 것은?",
        "options": [
          "곧은, 생머리의",
          "~처럼 보이다",
          "안경",
          "곱슬머리의"
        ],
        "correctIndex": 0,
        "correctAnswer": "곧은, 생머리의",
        "explanation": "'straight'은 '곧은, 생머리의'를 뜻합니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Brian: What does 'glasses' mean in Korean? Paul: It means '안경'.",
        "question": "[듣기 · 6단원] 대화에서 언급된 영어 단어 'glasses'의 우리말 뜻으로 바른 것은?",
        "options": [
          "곧은, 생머리의",
          "안경",
          "~처럼 보이다",
          "곱슬머리의"
        ],
        "correctIndex": 1,
        "correctAnswer": "안경",
        "explanation": "'glasses'은 '안경'를 뜻합니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Amy: What does 'wear' mean in Korean? Minsoo: It means '입다, 착용하다'.",
        "question": "[듣기 · 6단원] 대화에서 언급된 영어 단어 'wear'의 우리말 뜻으로 바른 것은?",
        "options": [
          "곱슬머리의",
          "곧은, 생머리의",
          "~처럼 보이다",
          "입다, 착용하다"
        ],
        "correctIndex": 3,
        "correctAnswer": "입다, 착용하다",
        "explanation": "'wear'은 '입다, 착용하다'를 뜻합니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kelly. What does she look like? I am very happy and excited about our English class today.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kelly. What does she look like? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다.",
          "숙제가 너무 어려워서 고민이다.",
          "그녀는 어떻게 생겼니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "그녀는 어떻게 생겼니?",
        "explanation": "'What does she look like?'(그녀는 어떻게 생겼니?)이 핵심 문장입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is David. She has long straight black hair. I am very happy and excited about our English class today.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is David. She has long straight black hair. I am very happy and excited about our English class today.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "그녀는 긴 검은 생머리를 가지고 있어.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "그녀는 긴 검은 생머리를 가지고 있어.",
        "explanation": "'She has long straight black hair.'(그녀는 긴 검은 생머리를 가지고 있어.)이 핵심 문장입니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Sarah. My English teacher wears round glasses. I am very happy and excited about our English class today.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Sarah. My English teacher wears round glasses. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "우리 영어 선생님은 동그란 안경을 쓰셔.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다.",
          "숙제가 너무 어려워서 고민이다."
        ],
        "correctIndex": 0,
        "correctAnswer": "우리 영어 선생님은 동그란 안경을 쓰셔.",
        "explanation": "'My English teacher wears round glasses.'(우리 영어 선생님은 동그란 안경을 쓰셔.)이 핵심 문장입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Jisu. He has short curly brown hair. I am very happy and excited about our English class today.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Jisu. He has short curly brown hair. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Jisu이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "그는 짧은 갈색 곱슬머리를 가지고 있어."
        ],
        "correctIndex": 3,
        "correctAnswer": "그는 짧은 갈색 곱슬머리를 가지고 있어.",
        "explanation": "'He has short curly brown hair.'(그는 짧은 갈색 곱슬머리를 가지고 있어.)이 핵심 문장입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kevin. She is wearing white running sneakers. I am very happy and excited about our English class today.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kevin. She is wearing white running sneakers. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kevin이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "그녀는 흰색 조깅용 운동화를 신고 있어.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "그녀는 흰색 조깅용 운동화를 신고 있어.",
        "explanation": "'She is wearing white running sneakers.'(그녀는 흰색 조깅용 운동화를 신고 있어.)이 핵심 문장입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Emma. The boy is tall and has bright eyes. I am very happy and excited about our English class today.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Emma. The boy is tall and has bright eyes. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Emma이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "그 소년은 키가 크고 맑은 눈을 가졌어.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "그 소년은 키가 크고 맑은 눈을 가졌어.",
        "explanation": "'The boy is tall and has bright eyes.'(그 소년은 키가 크고 맑은 눈을 가졌어.)이 핵심 문장입니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Tom. Can you describe your best friend? I am very happy and excited about our English class today.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Tom. Can you describe your best friend? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Tom이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "가장 친한 친구의 생김새를 묘사해 줄래?",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "가장 친한 친구의 생김새를 묘사해 줄래?",
        "explanation": "'Can you describe your best friend?'(가장 친한 친구의 생김새를 묘사해 줄래?)이 핵심 문장입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Hana. She always wears a warm and friendly smile. I am very happy and excited about our English class today.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Hana. She always wears a warm and friendly smile. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Hana이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다.",
          "그녀는 항상 따뜻하고 다정한 미소를 짓고 있어."
        ],
        "correctIndex": 3,
        "correctAnswer": "그녀는 항상 따뜻하고 다정한 미소를 짓고 있어.",
        "explanation": "'She always wears a warm and friendly smile.'(그녀는 항상 따뜻하고 다정한 미소를 짓고 있어.)이 핵심 문장입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Brian. He is wearing a blue sports cap. I am very happy and excited about our English class today.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Brian. He is wearing a blue sports cap. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Brian이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "그는 파란 스포츠 모자를 쓰고 있어."
        ],
        "correctIndex": 3,
        "correctAnswer": "그는 파란 스포츠 모자를 쓰고 있어.",
        "explanation": "'He is wearing a blue sports cap.'(그는 파란 스포츠 모자를 쓰고 있어.)이 핵심 문장입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Amy. What is your brother wearing today? I am very happy and excited about our English class today.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Amy. What is your brother wearing today? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Amy이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "네 남동생은 오늘 어떤 옷을 입고 있니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "네 남동생은 오늘 어떤 옷을 입고 있니?",
        "explanation": "'What is your brother wearing today?'(네 남동생은 오늘 어떤 옷을 입고 있니?)이 핵심 문장입니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Paul. She has pretty wavy blond hair. I am very happy and excited about our English class today.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Paul. She has pretty wavy blond hair. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Paul이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "그녀는 예쁜 웨이브 금발 머리를 가졌어."
        ],
        "correctIndex": 3,
        "correctAnswer": "그녀는 예쁜 웨이브 금발 머리를 가졌어.",
        "explanation": "'She has pretty wavy blond hair.'(그녀는 예쁜 웨이브 금발 머리를 가졌어.)이 핵심 문장입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Minsoo. He looks very smart in that jacket. I am very happy and excited about our English class today.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Minsoo. He looks very smart in that jacket. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "그는 저 재킷을 입으니 아주 멋지고 똑똑해 보여."
        ],
        "correctIndex": 3,
        "correctAnswer": "그는 저 재킷을 입으니 아주 멋지고 똑똑해 보여.",
        "explanation": "'He looks very smart in that jacket.'(그는 저 재킷을 입으니 아주 멋지고 똑똑해 보여.)이 핵심 문장입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kelly. What does he look like? I am very happy and excited about our English class today.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kelly. What does he look like? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "그는 어떻게 생겼니?",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "그는 어떻게 생겼니?",
        "explanation": "'What does he look like?'(그는 어떻게 생겼니?)이 핵심 문장입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is David. He has blue eyes. I am very happy and excited about our English class today.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is David. He has blue eyes. I am very happy and excited about our English class today.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "길을 잃어서 병원을 찾고 있다.",
          "그는 파란 눈을 가지고 있어."
        ],
        "correctIndex": 3,
        "correctAnswer": "그는 파란 눈을 가지고 있어.",
        "explanation": "'He has blue eyes.'(그는 파란 눈을 가지고 있어.)이 핵심 문장입니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Sarah. She is wearing a yellow shirt and blue pants. I am very happy and excited about our English class today.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Sarah. She is wearing a yellow shirt and blue pants. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "그녀는 노란 셔츠와 파란 바지를 입고 있어."
        ],
        "correctIndex": 3,
        "correctAnswer": "그녀는 노란 셔츠와 파란 바지를 입고 있어.",
        "explanation": "'She is wearing a yellow shirt and blue pants.'(그녀는 노란 셔츠와 파란 바지를 입고 있어.)이 핵심 문장입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Look at that boy. What is he wearing? And the response was: \"He is wearing a red jacket and white sneakers.\"",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Look at that boy. What is he wearing? And the response was: \"He is wearing a red jacket and white sneakers.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 저 소년의 옷차림 묘사로 알맞은 것은?",
        "options": [
          "노란 비옷과 장화",
          "파란 유니폼과 축구화",
          "회색 코트와 부츠",
          "빨간 재킷과 흰 운동화"
        ],
        "correctIndex": 3,
        "correctAnswer": "빨간 재킷과 흰 운동화",
        "explanation": "'red jacket and white sneakers'입니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: What does your grandmother look like? And the response was: \"She has short gray hair and a warm, kind smile.\"",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: What does your grandmother look like? And the response was: \"She has short gray hair and a warm, kind smile.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 할머니의 인상 착의로 알맞은 것은?",
        "options": [
          "짧은 은발에 따뜻하고 다정한 미소",
          "긴 생머리에 무서운 표정",
          "파마머리에 큰 선글라스 착용",
          "키가 아주 크고 엄격한 표정"
        ],
        "correctIndex": 0,
        "correctAnswer": "짧은 은발에 따뜻하고 다정한 미소",
        "explanation": "'short gray hair and a warm, kind smile'입니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Who is the girl wearing a pink ribbon? And the response was: \"She is my cousin Emma. She is tall and slim.\"",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Who is the girl wearing a pink ribbon? And the response was: \"She is my cousin Emma. She is tall and slim.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 분홍 리본을 단 소녀 Emma의 체형은?",
        "options": [
          "키가 크고 날씬함",
          "키가 작고 통통함",
          "보통 키에 둥근 얼굴",
          "건장하고 힘이 셈"
        ],
        "correctIndex": 0,
        "correctAnswer": "키가 크고 날씬함",
        "explanation": "'tall and slim'은 키가 크고 날씬하다는 뜻입니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: What does he look like? And the response was: \"He has short curly brown hair and blue eyes.\"",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: What does he look like? And the response was: \"He has short curly brown hair and blue eyes.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 그의 외모 특징으로 알맞은 것은?",
        "options": [
          "대머리에 안경 착용",
          "짧은 갈색 곱슬머리에 파란 눈",
          "긴 검은 생머리에 갈색 눈",
          "웨이브 금발에 초록 눈"
        ],
        "correctIndex": 1,
        "correctAnswer": "짧은 갈색 곱슬머리에 파란 눈",
        "explanation": "'short curly brown hair and blue eyes'입니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: What does she look like? And the response was: \"She has long straight black hair and wears glasses.\"",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: What does she look like? And the response was: \"She has long straight black hair and wears glasses.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 그녀의 외모 특징으로 알맞은 것은?",
        "options": [
          "긴 검은 생머리에 안경 착용",
          "짧은 단발머리에 모자 착용",
          "갈색 곱슬머리에 선글라스 착용",
          "키가 매우 작고 안경 미착용"
        ],
        "correctIndex": 0,
        "correctAnswer": "긴 검은 생머리에 안경 착용",
        "explanation": "'long straight black hair and wears glasses'입니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: What is she wearing today? And the response was: \"She is wearing a yellow shirt and blue pants.\"",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: What is she wearing today? And the response was: \"She is wearing a yellow shirt and blue pants.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 그녀가 오늘 입고 있는 옷차림은?",
        "options": [
          "초록 재킷과 갈색 바지",
          "빨간 스웨터와 검정 치마",
          "분홍 원피스와 흰 모자",
          "노란 셔츠와 파란 바지"
        ],
        "correctIndex": 3,
        "correctAnswer": "노란 셔츠와 파란 바지",
        "explanation": "교과서 본문 표현: 'She is wearing a yellow shirt and blue pants.'입니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Look at that boy. What is he wearing? And the response was: \"He is wearing a red jacket and white sneakers.\"",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Look at that boy. What is he wearing? And the response was: \"He is wearing a red jacket and white sneakers.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 저 소년의 옷차림 묘사로 알맞은 것은?",
        "options": [
          "파란 유니폼과 축구화",
          "빨간 재킷과 흰 운동화",
          "회색 코트와 부츠",
          "노란 비옷과 장화"
        ],
        "correctIndex": 1,
        "correctAnswer": "빨간 재킷과 흰 운동화",
        "explanation": "'red jacket and white sneakers'입니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: What does your grandmother look like? And the response was: \"She has short gray hair and a warm, kind smile.\"",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: What does your grandmother look like? And the response was: \"She has short gray hair and a warm, kind smile.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 할머니의 인상 착의로 알맞은 것은?",
        "options": [
          "키가 아주 크고 엄격한 표정",
          "파마머리에 큰 선글라스 착용",
          "긴 생머리에 무서운 표정",
          "짧은 은발에 따뜻하고 다정한 미소"
        ],
        "correctIndex": 3,
        "correctAnswer": "짧은 은발에 따뜻하고 다정한 미소",
        "explanation": "'short gray hair and a warm, kind smile'입니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Who is the girl wearing a pink ribbon? And the response was: \"She is my cousin Emma. She is tall and slim.\"",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Who is the girl wearing a pink ribbon? And the response was: \"She is my cousin Emma. She is tall and slim.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 분홍 리본을 단 소녀 Emma의 체형은?",
        "options": [
          "보통 키에 둥근 얼굴",
          "키가 크고 날씬함",
          "키가 작고 통통함",
          "건장하고 힘이 셈"
        ],
        "correctIndex": 1,
        "correctAnswer": "키가 크고 날씬함",
        "explanation": "'tall and slim'은 키가 크고 날씬하다는 뜻입니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: What does he look like? And the response was: \"He has short curly brown hair and blue eyes.\"",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: What does he look like? And the response was: \"He has short curly brown hair and blue eyes.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 그의 외모 특징으로 알맞은 것은?",
        "options": [
          "대머리에 안경 착용",
          "짧은 갈색 곱슬머리에 파란 눈",
          "긴 검은 생머리에 갈색 눈",
          "웨이브 금발에 초록 눈"
        ],
        "correctIndex": 1,
        "correctAnswer": "짧은 갈색 곱슬머리에 파란 눈",
        "explanation": "'short curly brown hair and blue eyes'입니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'sneakers' is a new word in 6단원. In Korean, it means '운동화'.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'sneakers' is a new word in 6단원. In Korean, it means '운동화'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'sneakers'의 뜻은?",
        "options": [
          "곧은, 생머리의",
          "곱슬머리의",
          "~처럼 보이다",
          "운동화"
        ],
        "correctIndex": 3,
        "correctAnswer": "운동화",
        "explanation": "'sneakers'은 '운동화'입니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'blond' is a new word in 6단원. In Korean, it means '금발의'.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'blond' is a new word in 6단원. In Korean, it means '금발의'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'blond'의 뜻은?",
        "options": [
          "금발의",
          "~처럼 보이다",
          "곧은, 생머리의",
          "곱슬머리의"
        ],
        "correctIndex": 0,
        "correctAnswer": "금발의",
        "explanation": "'blond'은 '금발의'입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'smile' is a new word in 6단원. In Korean, it means '미소'.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'smile' is a new word in 6단원. In Korean, it means '미소'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'smile'의 뜻은?",
        "options": [
          "곧은, 생머리의",
          "곱슬머리의",
          "~처럼 보이다",
          "미소"
        ],
        "correctIndex": 3,
        "correctAnswer": "미소",
        "explanation": "'smile'은 '미소'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'look' is a new word in 6단원. In Korean, it means '~처럼 보이다'.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'look' is a new word in 6단원. In Korean, it means '~처럼 보이다'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'look'의 뜻은?",
        "options": [
          "안경",
          "곱슬머리의",
          "~처럼 보이다",
          "곧은, 생머리의"
        ],
        "correctIndex": 2,
        "correctAnswer": "~처럼 보이다",
        "explanation": "'look'은 '~처럼 보이다'입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'curly' is a new word in 6단원. In Korean, it means '곱슬머리의'.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'curly' is a new word in 6단원. In Korean, it means '곱슬머리의'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'curly'의 뜻은?",
        "options": [
          "~처럼 보이다",
          "곱슬머리의",
          "안경",
          "곧은, 생머리의"
        ],
        "correctIndex": 1,
        "correctAnswer": "곱슬머리의",
        "explanation": "'curly'은 '곱슬머리의'입니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'straight' is a new word in 6단원. In Korean, it means '곧은, 생머리의'.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'straight' is a new word in 6단원. In Korean, it means '곧은, 생머리의'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'straight'의 뜻은?",
        "options": [
          "곱슬머리의",
          "~처럼 보이다",
          "곧은, 생머리의",
          "안경"
        ],
        "correctIndex": 2,
        "correctAnswer": "곧은, 생머리의",
        "explanation": "'straight'은 '곧은, 생머리의'입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'glasses' is a new word in 6단원. In Korean, it means '안경'.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'glasses' is a new word in 6단원. In Korean, it means '안경'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'glasses'의 뜻은?",
        "options": [
          "곧은, 생머리의",
          "~처럼 보이다",
          "안경",
          "곱슬머리의"
        ],
        "correctIndex": 2,
        "correctAnswer": "안경",
        "explanation": "'glasses'은 '안경'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'wear' is a new word in 6단원. In Korean, it means '입다, 착용하다'.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'wear' is a new word in 6단원. In Korean, it means '입다, 착용하다'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'wear'의 뜻은?",
        "options": [
          "곧은, 생머리의",
          "곱슬머리의",
          "입다, 착용하다",
          "~처럼 보이다"
        ],
        "correctIndex": 2,
        "correctAnswer": "입다, 착용하다",
        "explanation": "'wear'은 '입다, 착용하다'입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'shirt' is a new word in 6단원. In Korean, it means '셔츠'.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'shirt' is a new word in 6단원. In Korean, it means '셔츠'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'shirt'의 뜻은?",
        "options": [
          "~처럼 보이다",
          "셔츠",
          "곧은, 생머리의",
          "곱슬머리의"
        ],
        "correctIndex": 1,
        "correctAnswer": "셔츠",
        "explanation": "'shirt'은 '셔츠'입니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'pants' is a new word in 6단원. In Korean, it means '바지'.",
        "question": "[읽기 · 6단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'pants' is a new word in 6단원. In Korean, it means '바지'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'pants'의 뜻은?",
        "options": [
          "곧은, 생머리의",
          "곱슬머리의",
          "~처럼 보이다",
          "바지"
        ],
        "correctIndex": 3,
        "correctAnswer": "바지",
        "explanation": "'pants'은 '바지'입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 6단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"~처럼 보이다\" (첫 글자: l, 총 4글자)",
        "correctAnswer": "look",
        "explanation": "'~처럼 보이다'의 영어 표기는 'look'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 6단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"곱슬머리의\" (첫 글자: c, 총 5글자)",
        "correctAnswer": "curly",
        "explanation": "'곱슬머리의'의 영어 표기는 'curly'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 6단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"곧은, 생머리의\" (첫 글자: s, 총 8글자)",
        "correctAnswer": "straight",
        "explanation": "'곧은, 생머리의'의 영어 표기는 'straight'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 6단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"안경\" (첫 글자: g, 총 7글자)",
        "correctAnswer": "glasses",
        "explanation": "'안경'의 영어 표기는 'glasses'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 6단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"입다, 착용하다\" (첫 글자: w, 총 4글자)",
        "correctAnswer": "wear",
        "explanation": "'입다, 착용하다'의 영어 표기는 'wear'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 6단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"셔츠\" (첫 글자: s, 총 5글자)",
        "correctAnswer": "shirt",
        "explanation": "'셔츠'의 영어 표기는 'shirt'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 6단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"바지\" (첫 글자: p, 총 5글자)",
        "correctAnswer": "pants",
        "explanation": "'바지'의 영어 표기는 'pants'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 6단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"키가 큰\" (첫 글자: t, 총 4글자)",
        "correctAnswer": "tall",
        "explanation": "'키가 큰'의 영어 표기는 'tall'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 6단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"키가 작은, 짧은\" (첫 글자: s, 총 5글자)",
        "correctAnswer": "short",
        "explanation": "'키가 작은, 짧은'의 영어 표기는 'short'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 6단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"눈\" (첫 글자: e, 총 4글자)",
        "correctAnswer": "eyes",
        "explanation": "'눈'의 영어 표기는 'eyes'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 6단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"머리카락\" (첫 글자: h, 총 4글자)",
        "correctAnswer": "hair",
        "explanation": "'머리카락'의 영어 표기는 'hair'입니다."
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 6단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"재킷\" (첫 글자: j, 총 6글자)",
        "correctAnswer": "jacket",
        "explanation": "'재킷'의 영어 표기는 'jacket'입니다."
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 6단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"운동화\" (첫 글자: s, 총 8글자)",
        "correctAnswer": "sneakers",
        "explanation": "'운동화'의 영어 표기는 'sneakers'입니다."
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 6단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"금발의\" (첫 글자: b, 총 5글자)",
        "correctAnswer": "blond",
        "explanation": "'금발의'의 영어 표기는 'blond'입니다."
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 6단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"미소\" (첫 글자: s, 총 5글자)",
        "correctAnswer": "smile",
        "explanation": "'미소'의 영어 표기는 'smile'입니다."
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"그는 어떻게 생겼니?\"",
        "chips": [
          "What",
          "does",
          "he",
          "look",
          "like?"
        ],
        "correctAnswer": "What does he look like?",
        "explanation": "'What does he look like?'은 '그는 어떻게 생겼니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"그는 파란 눈을 가지고 있어.\"",
        "chips": [
          "He",
          "has",
          "blue",
          "eyes."
        ],
        "correctAnswer": "He has blue eyes.",
        "explanation": "'He has blue eyes.'은 '그는 파란 눈을 가지고 있어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"그녀는 노란 셔츠와 파란 바지를 입고 있어.\"",
        "chips": [
          "She",
          "is",
          "wearing",
          "a",
          "yellow",
          "shirt",
          "and",
          "blue",
          "pants."
        ],
        "correctAnswer": "She is wearing a yellow shirt and blue pants.",
        "explanation": "'She is wearing a yellow shirt and blue pants.'은 '그녀는 노란 셔츠와 파란 바지를 입고 있어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"그녀는 어떻게 생겼니?\"",
        "chips": [
          "What",
          "does",
          "she",
          "look",
          "like?"
        ],
        "correctAnswer": "What does she look like?",
        "explanation": "'What does she look like?'은 '그녀는 어떻게 생겼니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"그녀는 긴 검은 생머리를 가지고 있어.\"",
        "chips": [
          "She",
          "has",
          "long",
          "straight",
          "black",
          "hair."
        ],
        "correctAnswer": "She has long straight black hair.",
        "explanation": "'She has long straight black hair.'은 '그녀는 긴 검은 생머리를 가지고 있어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"우리 영어 선생님은 동그란 안경을 쓰셔.\"",
        "chips": [
          "My",
          "English",
          "teacher",
          "wears",
          "round",
          "glasses."
        ],
        "correctAnswer": "My English teacher wears round glasses.",
        "explanation": "'My English teacher wears round glasses.'은 '우리 영어 선생님은 동그란 안경을 쓰셔.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"그는 짧은 갈색 곱슬머리를 가지고 있어.\"",
        "chips": [
          "He",
          "has",
          "short",
          "curly",
          "brown",
          "hair."
        ],
        "correctAnswer": "He has short curly brown hair.",
        "explanation": "'He has short curly brown hair.'은 '그는 짧은 갈색 곱슬머리를 가지고 있어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"그녀는 흰색 조깅용 운동화를 신고 있어.\"",
        "chips": [
          "She",
          "is",
          "wearing",
          "white",
          "running",
          "sneakers."
        ],
        "correctAnswer": "She is wearing white running sneakers.",
        "explanation": "'She is wearing white running sneakers.'은 '그녀는 흰색 조깅용 운동화를 신고 있어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"그 소년은 키가 크고 맑은 눈을 가졌어.\"",
        "chips": [
          "The",
          "boy",
          "is",
          "tall",
          "and",
          "has",
          "bright",
          "eyes."
        ],
        "correctAnswer": "The boy is tall and has bright eyes.",
        "explanation": "'The boy is tall and has bright eyes.'은 '그 소년은 키가 크고 맑은 눈을 가졌어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"가장 친한 친구의 생김새를 묘사해 줄래?\"",
        "chips": [
          "Can",
          "you",
          "describe",
          "your",
          "best",
          "friend?"
        ],
        "correctAnswer": "Can you describe your best friend?",
        "explanation": "'Can you describe your best friend?'은 '가장 친한 친구의 생김새를 묘사해 줄래?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 96,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"그녀는 항상 따뜻하고 다정한 미소를 짓고 있어.\"",
        "chips": [
          "She",
          "always",
          "wears",
          "a",
          "warm",
          "and",
          "friendly",
          "smile."
        ],
        "correctAnswer": "She always wears a warm and friendly smile.",
        "explanation": "'She always wears a warm and friendly smile.'은 '그녀는 항상 따뜻하고 다정한 미소를 짓고 있어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 97,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"그는 파란 스포츠 모자를 쓰고 있어.\"",
        "chips": [
          "He",
          "is",
          "wearing",
          "a",
          "blue",
          "sports",
          "cap."
        ],
        "correctAnswer": "He is wearing a blue sports cap.",
        "explanation": "'He is wearing a blue sports cap.'은 '그는 파란 스포츠 모자를 쓰고 있어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 98,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"네 남동생은 오늘 어떤 옷을 입고 있니?\"",
        "chips": [
          "What",
          "is",
          "your",
          "brother",
          "wearing",
          "today?"
        ],
        "correctAnswer": "What is your brother wearing today?",
        "explanation": "'What is your brother wearing today?'은 '네 남동생은 오늘 어떤 옷을 입고 있니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 99,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 6단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"그녀는 예쁜 웨이브 금발 머리를 가졌어.\"",
        "chips": [
          "She",
          "has",
          "pretty",
          "wavy",
          "blond",
          "hair."
        ],
        "correctAnswer": "She has pretty wavy blond hair.",
        "explanation": "'She has pretty wavy blond hair.'은 '그녀는 예쁜 웨이브 금발 머리를 가졌어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[최종 골든벨 문제] 다음 우리말에 맞도록 주어진 단어 카드를 순서대로 바르게 배열하세요!\n우리말: \"그는 저 재킷을 입으니 아주 멋지고 똑똑해 보여.\"",
        "chips": [
          "He",
          "looks",
          "very",
          "smart",
          "in",
          "that",
          "jacket."
        ],
        "correctAnswer": "He looks very smart in that jacket.",
        "explanation": "'He looks very smart in that jacket.'은 '그는 저 재킷을 입으니 아주 멋지고 똑똑해 보여.'을 의미하는 교과서 핵심 문장입니다."
      }
    ]
  },
  "6G_L07": {
    "name": "7단원: Can You Come to the Movie Festival? (축제 초대와 일정)",
    "grade": 6,
    "theme": "Invitations & School Festivals",
    "totalQuestions": 100,
    "questions": [
      {
        "id": 1,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Can you come to the movie festival? David: Sure, I would love to! When is it?",
        "question": "[듣기 · 7단원] 대화를 듣고, A의 영화제 초대 제안에 대한 B의 응답은?",
        "options": [
          "표가 없어서 못 간다고 함",
          "기꺼이 수락함 (Sure, I would love to!)",
          "이미 영화를 봤다고 함",
          "일정이 있어 거절함"
        ],
        "correctIndex": 1,
        "correctAnswer": "기꺼이 수락함 (Sure, I would love to!)",
        "explanation": "'Sure, I would love to!'는 초대에 흔쾌히 응하는 표현입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kelly: Can you come to our school concert? Sarah: I am sorry, but I can't. I have an English exam.",
        "question": "[듣기 · 7단원] 대화를 듣고, B가 학교 음악회 초대를 거절한 이유는?",
        "options": [
          "감기에 심하게 걸려서",
          "가족 여행을 떠나서",
          "음악을 싫어해서",
          "영어 시험이 있어서"
        ],
        "correctIndex": 3,
        "correctAnswer": "영어 시험이 있어서",
        "explanation": "'I have an English exam'입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "David: What will we do after the movie? Jisu: Let's eat delicious biscuits and drink juice.",
        "question": "[듣기 · 7단원] 대화를 듣고, 영화 관람 후에 함께 하기로 한 것은?",
        "options": [
          "비스킷을 먹고 주스를 마시기",
          "곧바로 집으로 귀가하기",
          "운동장에서 축구하기",
          "도서관에 공부하러 가기"
        ],
        "correctIndex": 0,
        "correctAnswer": "비스킷을 먹고 주스를 마시기",
        "explanation": "교과서 어휘: 'biscuit'과 'after'입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Sarah: Look at the light on the screen! Kevin: It is a wonderful laser show.",
        "question": "[듣기 · 7단원] 대화를 듣고, 화면에서 펼쳐지는 것은?",
        "options": [
          "마술 쇼",
          "불꽃놀이",
          "인형극",
          "멋진 레이저 쇼 (laser show)"
        ],
        "correctIndex": 3,
        "correctAnswer": "멋진 레이저 쇼 (laser show)",
        "explanation": "교과서 어휘: 'laser'와 'light'입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Jisu: What is your lucky number? Emma: My lucky number is seven.",
        "question": "[듣기 · 7단원] 대화를 듣고, B의 행운의 숫자는?",
        "options": [
          "9",
          "12",
          "7",
          "3"
        ],
        "correctIndex": 2,
        "correctAnswer": "7",
        "explanation": "교과서 어휘: 'number'입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kevin: Can you tell me about the movie story? Tom: Sure, of course! It is about space travel.",
        "question": "[듣기 · 7단원] 대화를 듣고, 영화 줄거리에 대한 대화 내용은?",
        "options": [
          "옛날 역사 이야기",
          "스포츠 영웅 이야기",
          "우주 여행에 관한 이야기",
          "동물들의 모험 이야기"
        ],
        "correctIndex": 2,
        "correctAnswer": "우주 여행에 관한 이야기",
        "explanation": "교과서 어휘: 'tell'과 'course'입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Emma: Can you come to the movie festival? Hana: Sure, I would love to! When is it?",
        "question": "[듣기 · 7단원] 대화를 듣고, A의 영화제 초대 제안에 대한 B의 응답은?",
        "options": [
          "이미 영화를 봤다고 함",
          "표가 없어서 못 간다고 함",
          "일정이 있어 거절함",
          "기꺼이 수락함 (Sure, I would love to!)"
        ],
        "correctIndex": 3,
        "correctAnswer": "기꺼이 수락함 (Sure, I would love to!)",
        "explanation": "'Sure, I would love to!'는 초대에 흔쾌히 응하는 표현입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Tom: Can you come to our school concert? Brian: I am sorry, but I can't. I have an English exam.",
        "question": "[듣기 · 7단원] 대화를 듣고, B가 학교 음악회 초대를 거절한 이유는?",
        "options": [
          "가족 여행을 떠나서",
          "음악을 싫어해서",
          "영어 시험이 있어서",
          "감기에 심하게 걸려서"
        ],
        "correctIndex": 2,
        "correctAnswer": "영어 시험이 있어서",
        "explanation": "'I have an English exam'입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Hana: What will we do after the movie? Amy: Let's eat delicious biscuits and drink juice.",
        "question": "[듣기 · 7단원] 대화를 듣고, 영화 관람 후에 함께 하기로 한 것은?",
        "options": [
          "운동장에서 축구하기",
          "곧바로 집으로 귀가하기",
          "도서관에 공부하러 가기",
          "비스킷을 먹고 주스를 마시기"
        ],
        "correctIndex": 3,
        "correctAnswer": "비스킷을 먹고 주스를 마시기",
        "explanation": "교과서 어휘: 'biscuit'과 'after'입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Brian: Look at the light on the screen! Paul: It is a wonderful laser show.",
        "question": "[듣기 · 7단원] 대화를 듣고, 화면에서 펼쳐지는 것은?",
        "options": [
          "멋진 레이저 쇼 (laser show)",
          "불꽃놀이",
          "인형극",
          "마술 쇼"
        ],
        "correctIndex": 0,
        "correctAnswer": "멋진 레이저 쇼 (laser show)",
        "explanation": "교과서 어휘: 'laser'와 'light'입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Amy: What is your lucky number? Minsoo: My lucky number is seven.",
        "question": "[듣기 · 7단원] 대화를 듣고, B의 행운의 숫자는?",
        "options": [
          "7",
          "3",
          "9",
          "12"
        ],
        "correctIndex": 0,
        "correctAnswer": "7",
        "explanation": "교과서 어휘: 'number'입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Paul: Can you tell me about the movie story? Kelly: Sure, of course! It is about space travel.",
        "question": "[듣기 · 7단원] 대화를 듣고, 영화 줄거리에 대한 대화 내용은?",
        "options": [
          "우주 여행에 관한 이야기",
          "동물들의 모험 이야기",
          "옛날 역사 이야기",
          "스포츠 영웅 이야기"
        ],
        "correctIndex": 0,
        "correctAnswer": "우주 여행에 관한 이야기",
        "explanation": "교과서 어휘: 'tell'과 'course'입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Can you come to the movie festival? David: Sure, I would love to! When is it?",
        "question": "[듣기 · 7단원] 대화를 듣고, A의 영화제 초대 제안에 대한 B의 응답은?",
        "options": [
          "기꺼이 수락함 (Sure, I would love to!)",
          "표가 없어서 못 간다고 함",
          "이미 영화를 봤다고 함",
          "일정이 있어 거절함"
        ],
        "correctIndex": 0,
        "correctAnswer": "기꺼이 수락함 (Sure, I would love to!)",
        "explanation": "'Sure, I would love to!'는 초대에 흔쾌히 응하는 표현입니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kelly: Can you come to our school concert? Sarah: I am sorry, but I can't. I have an English exam.",
        "question": "[듣기 · 7단원] 대화를 듣고, B가 학교 음악회 초대를 거절한 이유는?",
        "options": [
          "가족 여행을 떠나서",
          "감기에 심하게 걸려서",
          "영어 시험이 있어서",
          "음악을 싫어해서"
        ],
        "correctIndex": 2,
        "correctAnswer": "영어 시험이 있어서",
        "explanation": "'I have an English exam'입니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "David: What will we do after the movie? Jisu: Let's eat delicious biscuits and drink juice.",
        "question": "[듣기 · 7단원] 대화를 듣고, 영화 관람 후에 함께 하기로 한 것은?",
        "options": [
          "곧바로 집으로 귀가하기",
          "도서관에 공부하러 가기",
          "비스킷을 먹고 주스를 마시기",
          "운동장에서 축구하기"
        ],
        "correctIndex": 2,
        "correctAnswer": "비스킷을 먹고 주스를 마시기",
        "explanation": "교과서 어휘: 'biscuit'과 'after'입니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Sarah: Can you come to the movie festival? Kevin: I agree with you!",
        "question": "[듣기 · 7단원] 대화에서 Sarah이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아닌 것 같아.",
          "영화제에 올 수 있니?",
          "다음 기회에 다시 이야기하자.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 1,
        "correctAnswer": "영화제에 올 수 있니?",
        "explanation": "'Can you come to the movie festival?'은 '영화제에 올 수 있니?'을 의미합니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Jisu: Sure, I would love to. Emma: I agree with you!",
        "question": "[듣기 · 7단원] 대화에서 Jisu이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "물론이지, 꼭 가고 싶어.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 2,
        "correctAnswer": "물론이지, 꼭 가고 싶어.",
        "explanation": "'Sure, I would love to.'은 '물론이지, 꼭 가고 싶어.'을 의미합니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kevin: I am sorry, but I can't. Tom: I agree with you!",
        "question": "[듣기 · 7단원] 대화에서 Kevin이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "미안하지만, 난 갈 수 없어.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아."
        ],
        "correctIndex": 1,
        "correctAnswer": "미안하지만, 난 갈 수 없어.",
        "explanation": "'I am sorry, but I can't.'은 '미안하지만, 난 갈 수 없어.'을 의미합니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Emma: Of course, you can join us. Hana: I agree with you!",
        "question": "[듣기 · 7단원] 대화에서 Emma이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "물론이지, 너도 우리와 함께할 수 있어.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "물론이지, 너도 우리와 함께할 수 있어.",
        "explanation": "'Of course, you can join us.'은 '물론이지, 너도 우리와 함께할 수 있어.'을 의미합니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Tom: What will you do after school? Brian: I agree with you!",
        "question": "[듣기 · 7단원] 대화에서 Tom이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "방과 후에 무엇을 할 거니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "방과 후에 무엇을 할 거니?",
        "explanation": "'What will you do after school?'은 '방과 후에 무엇을 할 거니?'을 의미합니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Hana: Please have some delicious biscuits. Amy: I agree with you!",
        "question": "[듣기 · 7단원] 대화에서 Hana이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "맛있는 비스킷 좀 드셔보세요.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "맛있는 비스킷 좀 드셔보세요.",
        "explanation": "'Please have some delicious biscuits.'은 '맛있는 비스킷 좀 드셔보세요.'을 의미합니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Brian: Look at the colorful laser light show. Paul: I agree with you!",
        "question": "[듣기 · 7단원] 대화에서 Brian이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음 기회에 다시 이야기하자.",
          "다채로운 레이저 조명 쇼를 봐.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 1,
        "correctAnswer": "다채로운 레이저 조명 쇼를 봐.",
        "explanation": "'Look at the colorful laser light show.'은 '다채로운 레이저 조명 쇼를 봐.'을 의미합니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Amy: What is your seat number in the theater? Minsoo: I agree with you!",
        "question": "[듣기 · 7단원] 대화에서 Amy이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어.",
          "다음 기회에 다시 이야기하자.",
          "극장 안 네 좌석 번호가 몇 번이니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "극장 안 네 좌석 번호가 몇 번이니?",
        "explanation": "'What is your seat number in the theater?'은 '극장 안 네 좌석 번호가 몇 번이니?'을 의미합니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Paul: Can you tell me about the story? Kelly: I agree with you!",
        "question": "[듣기 · 7단원] 대화에서 Paul이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "그 이야기에 대해 나에게 말해줄 수 있니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "그 이야기에 대해 나에게 말해줄 수 있니?",
        "explanation": "'Can you tell me about the story?'은 '그 이야기에 대해 나에게 말해줄 수 있니?'을 의미합니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: This soft bread tastes so good. David: I agree with you!",
        "question": "[듣기 · 7단원] 대화에서 Minsoo이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음 기회에 다시 이야기하자.",
          "이 부드러운 빵은 맛이 정말 좋아.",
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아."
        ],
        "correctIndex": 1,
        "correctAnswer": "이 부드러운 빵은 맛이 정말 좋아.",
        "explanation": "'This soft bread tastes so good.'은 '이 부드러운 빵은 맛이 정말 좋아.'을 의미합니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kelly: What does 'come' mean in Korean? Sarah: It means '오다'.",
        "question": "[듣기 · 7단원] 대화에서 언급된 영어 단어 'come'의 우리말 뜻으로 바른 것은?",
        "options": [
          "물론 (of course), 과정",
          "오다",
          "~후에",
          "비스킷, 과자"
        ],
        "correctIndex": 1,
        "correctAnswer": "오다",
        "explanation": "'come'은 '오다'를 뜻합니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "David: What does 'invite' mean in Korean? Jisu: It means '초대하다'.",
        "question": "[듣기 · 7단원] 대화에서 언급된 영어 단어 'invite'의 우리말 뜻으로 바른 것은?",
        "options": [
          "초대하다",
          "~후에",
          "물론 (of course), 과정",
          "비스킷, 과자"
        ],
        "correctIndex": 0,
        "correctAnswer": "초대하다",
        "explanation": "'invite'은 '초대하다'를 뜻합니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Sarah: What does 'sure' mean in Korean? Kevin: It means '물론이지, 확실한'.",
        "question": "[듣기 · 7단원] 대화에서 언급된 영어 단어 'sure'의 우리말 뜻으로 바른 것은?",
        "options": [
          "비스킷, 과자",
          "~후에",
          "물론 (of course), 과정",
          "물론이지, 확실한"
        ],
        "correctIndex": 3,
        "correctAnswer": "물론이지, 확실한",
        "explanation": "'sure'은 '물론이지, 확실한'를 뜻합니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Jisu: What does 'sorry' mean in Korean? Emma: It means '미안한'.",
        "question": "[듣기 · 7단원] 대화에서 언급된 영어 단어 'sorry'의 우리말 뜻으로 바른 것은?",
        "options": [
          "비스킷, 과자",
          "물론 (of course), 과정",
          "미안한",
          "~후에"
        ],
        "correctIndex": 2,
        "correctAnswer": "미안한",
        "explanation": "'sorry'은 '미안한'를 뜻합니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kevin: What does 'tomorrow' mean in Korean? Tom: It means '내일'.",
        "question": "[듣기 · 7단원] 대화에서 언급된 영어 단어 'tomorrow'의 우리말 뜻으로 바른 것은?",
        "options": [
          "물론 (of course), 과정",
          "비스킷, 과자",
          "~후에",
          "내일"
        ],
        "correctIndex": 3,
        "correctAnswer": "내일",
        "explanation": "'tomorrow'은 '내일'를 뜻합니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Emma: What does 'after' mean in Korean? Hana: It means '~후에'.",
        "question": "[듣기 · 7단원] 대화에서 언급된 영어 단어 'after'의 우리말 뜻으로 바른 것은?",
        "options": [
          "비스킷, 과자",
          "~후에",
          "물론 (of course), 과정",
          "레이저"
        ],
        "correctIndex": 1,
        "correctAnswer": "~후에",
        "explanation": "'after'은 '~후에'를 뜻합니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Tom: What does 'biscuit' mean in Korean? Brian: It means '비스킷, 과자'.",
        "question": "[듣기 · 7단원] 대화에서 언급된 영어 단어 'biscuit'의 우리말 뜻으로 바른 것은?",
        "options": [
          "~후에",
          "비스킷, 과자",
          "물론 (of course), 과정",
          "레이저"
        ],
        "correctIndex": 1,
        "correctAnswer": "비스킷, 과자",
        "explanation": "'biscuit'은 '비스킷, 과자'를 뜻합니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Hana: What does 'course' mean in Korean? Amy: It means '물론 (of course), 과정'.",
        "question": "[듣기 · 7단원] 대화에서 언급된 영어 단어 'course'의 우리말 뜻으로 바른 것은?",
        "options": [
          "비스킷, 과자",
          "~후에",
          "레이저",
          "물론 (of course), 과정"
        ],
        "correctIndex": 3,
        "correctAnswer": "물론 (of course), 과정",
        "explanation": "'course'은 '물론 (of course), 과정'를 뜻합니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Brian: What does 'laser' mean in Korean? Paul: It means '레이저'.",
        "question": "[듣기 · 7단원] 대화에서 언급된 영어 단어 'laser'의 우리말 뜻으로 바른 것은?",
        "options": [
          "레이저",
          "비스킷, 과자",
          "물론 (of course), 과정",
          "~후에"
        ],
        "correctIndex": 0,
        "correctAnswer": "레이저",
        "explanation": "'laser'은 '레이저'를 뜻합니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Amy: What does 'light' mean in Korean? Minsoo: It means '빛, 가벼운'.",
        "question": "[듣기 · 7단원] 대화에서 언급된 영어 단어 'light'의 우리말 뜻으로 바른 것은?",
        "options": [
          "비스킷, 과자",
          "~후에",
          "물론 (of course), 과정",
          "빛, 가벼운"
        ],
        "correctIndex": 3,
        "correctAnswer": "빛, 가벼운",
        "explanation": "'light'은 '빛, 가벼운'를 뜻합니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kelly. Of course, you can join us. I am very happy and excited about our English class today.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kelly. Of course, you can join us. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "물론이지, 너도 우리와 함께할 수 있어."
        ],
        "correctIndex": 3,
        "correctAnswer": "물론이지, 너도 우리와 함께할 수 있어.",
        "explanation": "'Of course, you can join us.'(물론이지, 너도 우리와 함께할 수 있어.)이 핵심 문장입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is David. What will you do after school? I am very happy and excited about our English class today.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is David. What will you do after school? I am very happy and excited about our English class today.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다.",
          "방과 후에 무엇을 할 거니?",
          "숙제가 너무 어려워서 고민이다."
        ],
        "correctIndex": 2,
        "correctAnswer": "방과 후에 무엇을 할 거니?",
        "explanation": "'What will you do after school?'(방과 후에 무엇을 할 거니?)이 핵심 문장입니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Sarah. Please have some delicious biscuits. I am very happy and excited about our English class today.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Sarah. Please have some delicious biscuits. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "맛있는 비스킷 좀 드셔보세요.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 1,
        "correctAnswer": "맛있는 비스킷 좀 드셔보세요.",
        "explanation": "'Please have some delicious biscuits.'(맛있는 비스킷 좀 드셔보세요.)이 핵심 문장입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Jisu. Look at the colorful laser light show. I am very happy and excited about our English class today.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Jisu. Look at the colorful laser light show. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Jisu이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "다채로운 레이저 조명 쇼를 봐.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다."
        ],
        "correctIndex": 1,
        "correctAnswer": "다채로운 레이저 조명 쇼를 봐.",
        "explanation": "'Look at the colorful laser light show.'(다채로운 레이저 조명 쇼를 봐.)이 핵심 문장입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kevin. What is your seat number in the theater? I am very happy and excited about our English class today.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kevin. What is your seat number in the theater? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kevin이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "극장 안 네 좌석 번호가 몇 번이니?",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 2,
        "correctAnswer": "극장 안 네 좌석 번호가 몇 번이니?",
        "explanation": "'What is your seat number in the theater?'(극장 안 네 좌석 번호가 몇 번이니?)이 핵심 문장입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Emma. Can you tell me about the story? I am very happy and excited about our English class today.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Emma. Can you tell me about the story? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Emma이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "그 이야기에 대해 나에게 말해줄 수 있니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "그 이야기에 대해 나에게 말해줄 수 있니?",
        "explanation": "'Can you tell me about the story?'(그 이야기에 대해 나에게 말해줄 수 있니?)이 핵심 문장입니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Tom. This soft bread tastes so good. I am very happy and excited about our English class today.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Tom. This soft bread tastes so good. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Tom이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "이 부드러운 빵은 맛이 정말 좋아.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "이 부드러운 빵은 맛이 정말 좋아.",
        "explanation": "'This soft bread tastes so good.'(이 부드러운 빵은 맛이 정말 좋아.)이 핵심 문장입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Hana. Can you come to my house this Saturday? I am very happy and excited about our English class today.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Hana. Can you come to my house this Saturday? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Hana이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "이번 주 토요일에 우리 집에 올 수 있니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "이번 주 토요일에 우리 집에 올 수 있니?",
        "explanation": "'Can you come to my house this Saturday?'(이번 주 토요일에 우리 집에 올 수 있니?)이 핵심 문장입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Brian. The science festival starts at two o'clock. I am very happy and excited about our English class today.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Brian. The science festival starts at two o'clock. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Brian이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "과학 축제는 2시에 시작돼."
        ],
        "correctIndex": 3,
        "correctAnswer": "과학 축제는 2시에 시작돼.",
        "explanation": "'The science festival starts at two o'clock.'(과학 축제는 2시에 시작돼.)이 핵심 문장입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Amy. I received a wonderful invitation card. I am very happy and excited about our English class today.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Amy. I received a wonderful invitation card. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Amy이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 슬프다.",
          "나는 멋진 초대장을 받았어.",
          "숙제가 너무 어려워서 고민이다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 1,
        "correctAnswer": "나는 멋진 초대장을 받았어.",
        "explanation": "'I received a wonderful invitation card.'(나는 멋진 초대장을 받았어.)이 핵심 문장입니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Paul. Let's watch the exciting movie together. I am very happy and excited about our English class today.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Paul. Let's watch the exciting movie together. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Paul이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "신나는 영화를 우리 함께 관람하자.",
          "숙제가 너무 어려워서 고민이다.",
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 0,
        "correctAnswer": "신나는 영화를 우리 함께 관람하자.",
        "explanation": "'Let's watch the exciting movie together.'(신나는 영화를 우리 함께 관람하자.)이 핵심 문장입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Minsoo. Thank you for inviting me to the festival. I am very happy and excited about our English class today.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Minsoo. Thank you for inviting me to the festival. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "숙제가 너무 어려워서 고민이다.",
          "길을 잃어서 병원을 찾고 있다.",
          "축제에 나를 초대해 줘서 고마워.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 2,
        "correctAnswer": "축제에 나를 초대해 줘서 고마워.",
        "explanation": "'Thank you for inviting me to the festival.'(축제에 나를 초대해 줘서 고마워.)이 핵심 문장입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kelly. Can you come to the movie festival? I am very happy and excited about our English class today.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kelly. Can you come to the movie festival? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "영화제에 올 수 있니?",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "영화제에 올 수 있니?",
        "explanation": "'Can you come to the movie festival?'(영화제에 올 수 있니?)이 핵심 문장입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is David. Sure, I would love to. I am very happy and excited about our English class today.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is David. Sure, I would love to. I am very happy and excited about our English class today.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다.",
          "숙제가 너무 어려워서 고민이다.",
          "물론이지, 꼭 가고 싶어."
        ],
        "correctIndex": 3,
        "correctAnswer": "물론이지, 꼭 가고 싶어.",
        "explanation": "'Sure, I would love to.'(물론이지, 꼭 가고 싶어.)이 핵심 문장입니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Sarah. I am sorry, but I can't. I am very happy and excited about our English class today.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Sarah. I am sorry, but I can't. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "미안하지만, 난 갈 수 없어.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "미안하지만, 난 갈 수 없어.",
        "explanation": "'I am sorry, but I can't.'(미안하지만, 난 갈 수 없어.)이 핵심 문장입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Look at the light on the screen! And the response was: \"It is a wonderful laser show.\"",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Look at the light on the screen! And the response was: \"It is a wonderful laser show.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 화면에서 펼쳐지는 것은?",
        "options": [
          "멋진 레이저 쇼 (laser show)",
          "불꽃놀이",
          "인형극",
          "마술 쇼"
        ],
        "correctIndex": 0,
        "correctAnswer": "멋진 레이저 쇼 (laser show)",
        "explanation": "교과서 어휘: 'laser'와 'light'입니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: What is your lucky number? And the response was: \"My lucky number is seven.\"",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: What is your lucky number? And the response was: \"My lucky number is seven.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: B의 행운의 숫자는?",
        "options": [
          "3",
          "9",
          "12",
          "7"
        ],
        "correctIndex": 3,
        "correctAnswer": "7",
        "explanation": "교과서 어휘: 'number'입니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Can you tell me about the movie story? And the response was: \"Sure, of course! It is about space travel.\"",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Can you tell me about the movie story? And the response was: \"Sure, of course! It is about space travel.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 영화 줄거리에 대한 대화 내용은?",
        "options": [
          "동물들의 모험 이야기",
          "우주 여행에 관한 이야기",
          "옛날 역사 이야기",
          "스포츠 영웅 이야기"
        ],
        "correctIndex": 1,
        "correctAnswer": "우주 여행에 관한 이야기",
        "explanation": "교과서 어휘: 'tell'과 'course'입니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Can you come to the movie festival? And the response was: \"Sure, I would love to! When is it?\"",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Can you come to the movie festival? And the response was: \"Sure, I would love to! When is it?\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: A의 영화제 초대 제안에 대한 B의 응답은?",
        "options": [
          "기꺼이 수락함 (Sure, I would love to!)",
          "일정이 있어 거절함",
          "이미 영화를 봤다고 함",
          "표가 없어서 못 간다고 함"
        ],
        "correctIndex": 0,
        "correctAnswer": "기꺼이 수락함 (Sure, I would love to!)",
        "explanation": "'Sure, I would love to!'는 초대에 흔쾌히 응하는 표현입니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Can you come to our school concert? And the response was: \"I am sorry, but I can't. I have an English exam.\"",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Can you come to our school concert? And the response was: \"I am sorry, but I can't. I have an English exam.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: B가 학교 음악회 초대를 거절한 이유는?",
        "options": [
          "음악을 싫어해서",
          "감기에 심하게 걸려서",
          "가족 여행을 떠나서",
          "영어 시험이 있어서"
        ],
        "correctIndex": 3,
        "correctAnswer": "영어 시험이 있어서",
        "explanation": "'I have an English exam'입니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: What will we do after the movie? And the response was: \"Let's eat delicious biscuits and drink juice.\"",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: What will we do after the movie? And the response was: \"Let's eat delicious biscuits and drink juice.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 영화 관람 후에 함께 하기로 한 것은?",
        "options": [
          "운동장에서 축구하기",
          "곧바로 집으로 귀가하기",
          "도서관에 공부하러 가기",
          "비스킷을 먹고 주스를 마시기"
        ],
        "correctIndex": 3,
        "correctAnswer": "비스킷을 먹고 주스를 마시기",
        "explanation": "교과서 어휘: 'biscuit'과 'after'입니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Look at the light on the screen! And the response was: \"It is a wonderful laser show.\"",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Look at the light on the screen! And the response was: \"It is a wonderful laser show.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 화면에서 펼쳐지는 것은?",
        "options": [
          "마술 쇼",
          "인형극",
          "불꽃놀이",
          "멋진 레이저 쇼 (laser show)"
        ],
        "correctIndex": 3,
        "correctAnswer": "멋진 레이저 쇼 (laser show)",
        "explanation": "교과서 어휘: 'laser'와 'light'입니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: What is your lucky number? And the response was: \"My lucky number is seven.\"",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: What is your lucky number? And the response was: \"My lucky number is seven.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: B의 행운의 숫자는?",
        "options": [
          "7",
          "12",
          "3",
          "9"
        ],
        "correctIndex": 0,
        "correctAnswer": "7",
        "explanation": "교과서 어휘: 'number'입니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Can you tell me about the movie story? And the response was: \"Sure, of course! It is about space travel.\"",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Can you tell me about the movie story? And the response was: \"Sure, of course! It is about space travel.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 영화 줄거리에 대한 대화 내용은?",
        "options": [
          "스포츠 영웅 이야기",
          "동물들의 모험 이야기",
          "옛날 역사 이야기",
          "우주 여행에 관한 이야기"
        ],
        "correctIndex": 3,
        "correctAnswer": "우주 여행에 관한 이야기",
        "explanation": "교과서 어휘: 'tell'과 'course'입니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Can you come to the movie festival? And the response was: \"Sure, I would love to! When is it?\"",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Can you come to the movie festival? And the response was: \"Sure, I would love to! When is it?\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: A의 영화제 초대 제안에 대한 B의 응답은?",
        "options": [
          "기꺼이 수락함 (Sure, I would love to!)",
          "이미 영화를 봤다고 함",
          "표가 없어서 못 간다고 함",
          "일정이 있어 거절함"
        ],
        "correctIndex": 0,
        "correctAnswer": "기꺼이 수락함 (Sure, I would love to!)",
        "explanation": "'Sure, I would love to!'는 초대에 흔쾌히 응하는 표현입니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'sure' is a new word in 7단원. In Korean, it means '물론이지, 확실한'.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'sure' is a new word in 7단원. In Korean, it means '물론이지, 확실한'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'sure'의 뜻은?",
        "options": [
          "물론 (of course), 과정",
          "물론이지, 확실한",
          "~후에",
          "비스킷, 과자"
        ],
        "correctIndex": 1,
        "correctAnswer": "물론이지, 확실한",
        "explanation": "'sure'은 '물론이지, 확실한'입니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'sorry' is a new word in 7단원. In Korean, it means '미안한'.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'sorry' is a new word in 7단원. In Korean, it means '미안한'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'sorry'의 뜻은?",
        "options": [
          "미안한",
          "~후에",
          "비스킷, 과자",
          "물론 (of course), 과정"
        ],
        "correctIndex": 0,
        "correctAnswer": "미안한",
        "explanation": "'sorry'은 '미안한'입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'tomorrow' is a new word in 7단원. In Korean, it means '내일'.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'tomorrow' is a new word in 7단원. In Korean, it means '내일'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'tomorrow'의 뜻은?",
        "options": [
          "비스킷, 과자",
          "물론 (of course), 과정",
          "~후에",
          "내일"
        ],
        "correctIndex": 3,
        "correctAnswer": "내일",
        "explanation": "'tomorrow'은 '내일'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'after' is a new word in 7단원. In Korean, it means '~후에'.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'after' is a new word in 7단원. In Korean, it means '~후에'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'after'의 뜻은?",
        "options": [
          "레이저",
          "물론 (of course), 과정",
          "비스킷, 과자",
          "~후에"
        ],
        "correctIndex": 3,
        "correctAnswer": "~후에",
        "explanation": "'after'은 '~후에'입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'biscuit' is a new word in 7단원. In Korean, it means '비스킷, 과자'.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'biscuit' is a new word in 7단원. In Korean, it means '비스킷, 과자'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'biscuit'의 뜻은?",
        "options": [
          "~후에",
          "비스킷, 과자",
          "물론 (of course), 과정",
          "레이저"
        ],
        "correctIndex": 1,
        "correctAnswer": "비스킷, 과자",
        "explanation": "'biscuit'은 '비스킷, 과자'입니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'course' is a new word in 7단원. In Korean, it means '물론 (of course), 과정'.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'course' is a new word in 7단원. In Korean, it means '물론 (of course), 과정'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'course'의 뜻은?",
        "options": [
          "레이저",
          "비스킷, 과자",
          "~후에",
          "물론 (of course), 과정"
        ],
        "correctIndex": 3,
        "correctAnswer": "물론 (of course), 과정",
        "explanation": "'course'은 '물론 (of course), 과정'입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'laser' is a new word in 7단원. In Korean, it means '레이저'.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'laser' is a new word in 7단원. In Korean, it means '레이저'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'laser'의 뜻은?",
        "options": [
          "비스킷, 과자",
          "~후에",
          "물론 (of course), 과정",
          "레이저"
        ],
        "correctIndex": 3,
        "correctAnswer": "레이저",
        "explanation": "'laser'은 '레이저'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'light' is a new word in 7단원. In Korean, it means '빛, 가벼운'.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'light' is a new word in 7단원. In Korean, it means '빛, 가벼운'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'light'의 뜻은?",
        "options": [
          "비스킷, 과자",
          "~후에",
          "물론 (of course), 과정",
          "빛, 가벼운"
        ],
        "correctIndex": 3,
        "correctAnswer": "빛, 가벼운",
        "explanation": "'light'은 '빛, 가벼운'입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'number' is a new word in 7단원. In Korean, it means '숫자, 번호'.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'number' is a new word in 7단원. In Korean, it means '숫자, 번호'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'number'의 뜻은?",
        "options": [
          "숫자, 번호",
          "~후에",
          "물론 (of course), 과정",
          "비스킷, 과자"
        ],
        "correctIndex": 0,
        "correctAnswer": "숫자, 번호",
        "explanation": "'number'은 '숫자, 번호'입니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'soft' is a new word in 7단원. In Korean, it means '부드러운'.",
        "question": "[읽기 · 7단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'soft' is a new word in 7단원. In Korean, it means '부드러운'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'soft'의 뜻은?",
        "options": [
          "부드러운",
          "비스킷, 과자",
          "~후에",
          "물론 (of course), 과정"
        ],
        "correctIndex": 0,
        "correctAnswer": "부드러운",
        "explanation": "'soft'은 '부드러운'입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 7단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"~후에\" (첫 글자: a, 총 5글자)",
        "correctAnswer": "after",
        "explanation": "'~후에'의 영어 표기는 'after'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 7단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"비스킷, 과자\" (첫 글자: b, 총 7글자)",
        "correctAnswer": "biscuit",
        "explanation": "'비스킷, 과자'의 영어 표기는 'biscuit'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 7단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"물론 (of course), 과정\" (첫 글자: c, 총 6글자)",
        "correctAnswer": "course",
        "explanation": "'물론 (of course), 과정'의 영어 표기는 'course'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 7단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"레이저\" (첫 글자: l, 총 5글자)",
        "correctAnswer": "laser",
        "explanation": "'레이저'의 영어 표기는 'laser'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 7단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"빛, 가벼운\" (첫 글자: l, 총 5글자)",
        "correctAnswer": "light",
        "explanation": "'빛, 가벼운'의 영어 표기는 'light'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 7단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"숫자, 번호\" (첫 글자: n, 총 6글자)",
        "correctAnswer": "number",
        "explanation": "'숫자, 번호'의 영어 표기는 'number'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 7단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"부드러운\" (첫 글자: s, 총 4글자)",
        "correctAnswer": "soft",
        "explanation": "'부드러운'의 영어 표기는 'soft'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 7단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"말하다, 이야기하다\" (첫 글자: t, 총 4글자)",
        "correctAnswer": "tell",
        "explanation": "'말하다, 이야기하다'의 영어 표기는 'tell'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 7단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"축제\" (첫 글자: f, 총 8글자)",
        "correctAnswer": "festival",
        "explanation": "'축제'의 영어 표기는 'festival'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 7단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"영화\" (첫 글자: m, 총 5글자)",
        "correctAnswer": "movie",
        "explanation": "'영화'의 영어 표기는 'movie'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 7단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"오다\" (첫 글자: c, 총 4글자)",
        "correctAnswer": "come",
        "explanation": "'오다'의 영어 표기는 'come'입니다."
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 7단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"초대하다\" (첫 글자: i, 총 6글자)",
        "correctAnswer": "invite",
        "explanation": "'초대하다'의 영어 표기는 'invite'입니다."
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 7단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"물론이지, 확실한\" (첫 글자: s, 총 4글자)",
        "correctAnswer": "sure",
        "explanation": "'물론이지, 확실한'의 영어 표기는 'sure'입니다."
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 7단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"미안한\" (첫 글자: s, 총 5글자)",
        "correctAnswer": "sorry",
        "explanation": "'미안한'의 영어 표기는 'sorry'입니다."
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 7단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"내일\" (첫 글자: t, 총 8글자)",
        "correctAnswer": "tomorrow",
        "explanation": "'내일'의 영어 표기는 'tomorrow'입니다."
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"영화제에 올 수 있니?\"",
        "chips": [
          "Can",
          "you",
          "come",
          "to",
          "the",
          "movie",
          "festival?"
        ],
        "correctAnswer": "Can you come to the movie festival?",
        "explanation": "'Can you come to the movie festival?'은 '영화제에 올 수 있니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"물론이지, 꼭 가고 싶어.\"",
        "chips": [
          "Sure",
          "I",
          "would",
          "love",
          "to."
        ],
        "correctAnswer": "Sure, I would love to.",
        "explanation": "'Sure, I would love to.'은 '물론이지, 꼭 가고 싶어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"미안하지만, 난 갈 수 없어.\"",
        "chips": [
          "I",
          "am",
          "sorry",
          "but",
          "I",
          "can't."
        ],
        "correctAnswer": "I am sorry, but I can't.",
        "explanation": "'I am sorry, but I can't.'은 '미안하지만, 난 갈 수 없어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"물론이지, 너도 우리와 함께할 수 있어.\"",
        "chips": [
          "Of",
          "course",
          "you",
          "can",
          "join",
          "us."
        ],
        "correctAnswer": "Of course, you can join us.",
        "explanation": "'Of course, you can join us.'은 '물론이지, 너도 우리와 함께할 수 있어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"방과 후에 무엇을 할 거니?\"",
        "chips": [
          "What",
          "will",
          "you",
          "do",
          "after",
          "school?"
        ],
        "correctAnswer": "What will you do after school?",
        "explanation": "'What will you do after school?'은 '방과 후에 무엇을 할 거니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"맛있는 비스킷 좀 드셔보세요.\"",
        "chips": [
          "Please",
          "have",
          "some",
          "delicious",
          "biscuits."
        ],
        "correctAnswer": "Please have some delicious biscuits.",
        "explanation": "'Please have some delicious biscuits.'은 '맛있는 비스킷 좀 드셔보세요.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"다채로운 레이저 조명 쇼를 봐.\"",
        "chips": [
          "Look",
          "at",
          "the",
          "colorful",
          "laser",
          "light",
          "show."
        ],
        "correctAnswer": "Look at the colorful laser light show.",
        "explanation": "'Look at the colorful laser light show.'은 '다채로운 레이저 조명 쇼를 봐.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"극장 안 네 좌석 번호가 몇 번이니?\"",
        "chips": [
          "What",
          "is",
          "your",
          "seat",
          "number",
          "in",
          "the",
          "theater?"
        ],
        "correctAnswer": "What is your seat number in the theater?",
        "explanation": "'What is your seat number in the theater?'은 '극장 안 네 좌석 번호가 몇 번이니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"그 이야기에 대해 나에게 말해줄 수 있니?\"",
        "chips": [
          "Can",
          "you",
          "tell",
          "me",
          "about",
          "the",
          "story?"
        ],
        "correctAnswer": "Can you tell me about the story?",
        "explanation": "'Can you tell me about the story?'은 '그 이야기에 대해 나에게 말해줄 수 있니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"이 부드러운 빵은 맛이 정말 좋아.\"",
        "chips": [
          "This",
          "soft",
          "bread",
          "tastes",
          "so",
          "good."
        ],
        "correctAnswer": "This soft bread tastes so good.",
        "explanation": "'This soft bread tastes so good.'은 '이 부드러운 빵은 맛이 정말 좋아.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 96,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"이번 주 토요일에 우리 집에 올 수 있니?\"",
        "chips": [
          "Can",
          "you",
          "come",
          "to",
          "my",
          "house",
          "this",
          "Saturday?"
        ],
        "correctAnswer": "Can you come to my house this Saturday?",
        "explanation": "'Can you come to my house this Saturday?'은 '이번 주 토요일에 우리 집에 올 수 있니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 97,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"과학 축제는 2시에 시작돼.\"",
        "chips": [
          "The",
          "science",
          "festival",
          "starts",
          "at",
          "two",
          "o'clock."
        ],
        "correctAnswer": "The science festival starts at two o'clock.",
        "explanation": "'The science festival starts at two o'clock.'은 '과학 축제는 2시에 시작돼.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 98,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"나는 멋진 초대장을 받았어.\"",
        "chips": [
          "I",
          "received",
          "a",
          "wonderful",
          "invitation",
          "card."
        ],
        "correctAnswer": "I received a wonderful invitation card.",
        "explanation": "'I received a wonderful invitation card.'은 '나는 멋진 초대장을 받았어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 99,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 7단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"신나는 영화를 우리 함께 관람하자.\"",
        "chips": [
          "Let's",
          "watch",
          "the",
          "exciting",
          "movie",
          "together."
        ],
        "correctAnswer": "Let's watch the exciting movie together.",
        "explanation": "'Let's watch the exciting movie together.'은 '신나는 영화를 우리 함께 관람하자.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[최종 골든벨 문제] 다음 우리말에 맞도록 주어진 단어 카드를 순서대로 바르게 배열하세요!\n우리말: \"축제에 나를 초대해 줘서 고마워.\"",
        "chips": [
          "Thank",
          "you",
          "for",
          "inviting",
          "me",
          "to",
          "the",
          "festival."
        ],
        "correctAnswer": "Thank you for inviting me to the festival.",
        "explanation": "'Thank you for inviting me to the festival.'은 '축제에 나를 초대해 줘서 고마워.'을 의미하는 교과서 핵심 문장입니다."
      }
    ]
  },
  "6G_L08": {
    "name": "8단원: It's Taller Than the Tree (비교급과 사물/동물 특징 비교)",
    "grade": 6,
    "theme": "Comparisons: Taller, Faster, Stronger, Heavier",
    "totalQuestions": 100,
    "questions": [
      {
        "id": 1,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Look at that tall building! It's taller than the tree. David: Wow, it is almost as high as the tower!",
        "question": "[듣기 · 8단원] 대화를 듣고, 대화에서 두 대상의 비교 내용으로 일치하는 것은?",
        "options": [
          "탑이 나무보다 더 낮다",
          "나무가 건물보다 훨씬 더 높다",
          "건물과 나무의 높이가 똑같다",
          "건물이 나무보다 더 키가 크다"
        ],
        "correctIndex": 3,
        "correctAnswer": "건물이 나무보다 더 키가 크다",
        "explanation": "교과서 단원명 핵심 문장: 'It's taller than the tree.'입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kelly: A cheetah is faster than a lion. Sarah: Yes, cheetahs are the fastest land animals.",
        "question": "[듣기 · 8단원] 대화를 듣고, 대화에서 비교하고 있는 동물과 성질은?",
        "options": [
          "사자가 치타보다 더 빠르다",
          "둘의 달리기 속도가 같다",
          "치타가 사자보다 더 빠르다",
          "치타가 사자보다 더 힘이 세다"
        ],
        "correctIndex": 2,
        "correctAnswer": "치타가 사자보다 더 빠르다",
        "explanation": "'A cheetah is faster than a lion.'입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "David: A giraffe is taller than an elephant. Jisu: Right, giraffes have very long necks.",
        "question": "[듣기 · 8단원] 대화를 듣고, 기린이 코끼리보다 뛰어난 신체 특징은?",
        "options": [
          "키가 더 크다 (taller)",
          "몸무게가 더 무겁다",
          "달리기가 더 빠르다",
          "귀가 더 크다"
        ],
        "correctIndex": 0,
        "correctAnswer": "키가 더 크다 (taller)",
        "explanation": "'A giraffe is taller than an elephant.'입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Sarah: Who can dribble the basketball faster? Kevin: Kevin can dribble faster than David.",
        "question": "[듣기 · 8단원] 대화를 듣고, 농구공을 더 빠르게 몰고 갈 수 있는 사람은?",
        "options": [
          "Kevin",
          "Tom",
          "David",
          "Minsoo"
        ],
        "correctIndex": 0,
        "correctAnswer": "Kevin",
        "explanation": "교과서 어휘: 'dribble'과 'faster'입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Jisu: This box is heavier than that one. Emma: Be careful! Give it to me, I am stronger.",
        "question": "[듣기 · 8단원] 대화를 듣고, 상자에 대한 설명과 상대방의 제안은?",
        "options": [
          "상자가 더 무거우니 더 힘센 자신이 들겠다고 함",
          "상자를 열어보자고 함",
          "상자가 가벼우니 혼자 들라고 함",
          "상자를 바닥에 버리자고 함"
        ],
        "correctIndex": 0,
        "correctAnswer": "상자가 더 무거우니 더 힘센 자신이 들겠다고 함",
        "explanation": "교과서 어휘: 'heavier', 'stronger', 'give'입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kevin: Who will win the swimming race? Tom: Jisu will win because she practices always.",
        "question": "[듣기 · 8단원] 대화를 듣고, 수영 경주에서 우승할 것으로 예상되는 사람은?",
        "options": [
          "아무도 우승하지 못함",
          "항상 연습하는 Jisu",
          "늦잠을 잔 Kevin",
          "수영을 처음 배우는 David"
        ],
        "correctIndex": 1,
        "correctAnswer": "항상 연습하는 Jisu",
        "explanation": "교과서 어휘: 'race', 'win', 'always'입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Emma: Look at that tall building! It's taller than the tree. Hana: Wow, it is almost as high as the tower!",
        "question": "[듣기 · 8단원] 대화를 듣고, 대화에서 두 대상의 비교 내용으로 일치하는 것은?",
        "options": [
          "탑이 나무보다 더 낮다",
          "건물과 나무의 높이가 똑같다",
          "나무가 건물보다 훨씬 더 높다",
          "건물이 나무보다 더 키가 크다"
        ],
        "correctIndex": 3,
        "correctAnswer": "건물이 나무보다 더 키가 크다",
        "explanation": "교과서 단원명 핵심 문장: 'It's taller than the tree.'입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Tom: A cheetah is faster than a lion. Brian: Yes, cheetahs are the fastest land animals.",
        "question": "[듣기 · 8단원] 대화를 듣고, 대화에서 비교하고 있는 동물과 성질은?",
        "options": [
          "둘의 달리기 속도가 같다",
          "치타가 사자보다 더 힘이 세다",
          "사자가 치타보다 더 빠르다",
          "치타가 사자보다 더 빠르다"
        ],
        "correctIndex": 3,
        "correctAnswer": "치타가 사자보다 더 빠르다",
        "explanation": "'A cheetah is faster than a lion.'입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Hana: A giraffe is taller than an elephant. Amy: Right, giraffes have very long necks.",
        "question": "[듣기 · 8단원] 대화를 듣고, 기린이 코끼리보다 뛰어난 신체 특징은?",
        "options": [
          "달리기가 더 빠르다",
          "귀가 더 크다",
          "몸무게가 더 무겁다",
          "키가 더 크다 (taller)"
        ],
        "correctIndex": 3,
        "correctAnswer": "키가 더 크다 (taller)",
        "explanation": "'A giraffe is taller than an elephant.'입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Brian: Who can dribble the basketball faster? Paul: Kevin can dribble faster than David.",
        "question": "[듣기 · 8단원] 대화를 듣고, 농구공을 더 빠르게 몰고 갈 수 있는 사람은?",
        "options": [
          "Tom",
          "Kevin",
          "Minsoo",
          "David"
        ],
        "correctIndex": 1,
        "correctAnswer": "Kevin",
        "explanation": "교과서 어휘: 'dribble'과 'faster'입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Amy: This box is heavier than that one. Minsoo: Be careful! Give it to me, I am stronger.",
        "question": "[듣기 · 8단원] 대화를 듣고, 상자에 대한 설명과 상대방의 제안은?",
        "options": [
          "상자가 더 무거우니 더 힘센 자신이 들겠다고 함",
          "상자를 열어보자고 함",
          "상자가 가벼우니 혼자 들라고 함",
          "상자를 바닥에 버리자고 함"
        ],
        "correctIndex": 0,
        "correctAnswer": "상자가 더 무거우니 더 힘센 자신이 들겠다고 함",
        "explanation": "교과서 어휘: 'heavier', 'stronger', 'give'입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Paul: Who will win the swimming race? Kelly: Jisu will win because she practices always.",
        "question": "[듣기 · 8단원] 대화를 듣고, 수영 경주에서 우승할 것으로 예상되는 사람은?",
        "options": [
          "항상 연습하는 Jisu",
          "아무도 우승하지 못함",
          "늦잠을 잔 Kevin",
          "수영을 처음 배우는 David"
        ],
        "correctIndex": 0,
        "correctAnswer": "항상 연습하는 Jisu",
        "explanation": "교과서 어휘: 'race', 'win', 'always'입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Look at that tall building! It's taller than the tree. David: Wow, it is almost as high as the tower!",
        "question": "[듣기 · 8단원] 대화를 듣고, 대화에서 두 대상의 비교 내용으로 일치하는 것은?",
        "options": [
          "나무가 건물보다 훨씬 더 높다",
          "탑이 나무보다 더 낮다",
          "건물이 나무보다 더 키가 크다",
          "건물과 나무의 높이가 똑같다"
        ],
        "correctIndex": 2,
        "correctAnswer": "건물이 나무보다 더 키가 크다",
        "explanation": "교과서 단원명 핵심 문장: 'It's taller than the tree.'입니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kelly: A cheetah is faster than a lion. Sarah: Yes, cheetahs are the fastest land animals.",
        "question": "[듣기 · 8단원] 대화를 듣고, 대화에서 비교하고 있는 동물과 성질은?",
        "options": [
          "둘의 달리기 속도가 같다",
          "치타가 사자보다 더 힘이 세다",
          "사자가 치타보다 더 빠르다",
          "치타가 사자보다 더 빠르다"
        ],
        "correctIndex": 3,
        "correctAnswer": "치타가 사자보다 더 빠르다",
        "explanation": "'A cheetah is faster than a lion.'입니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "David: A giraffe is taller than an elephant. Jisu: Right, giraffes have very long necks.",
        "question": "[듣기 · 8단원] 대화를 듣고, 기린이 코끼리보다 뛰어난 신체 특징은?",
        "options": [
          "키가 더 크다 (taller)",
          "귀가 더 크다",
          "몸무게가 더 무겁다",
          "달리기가 더 빠르다"
        ],
        "correctIndex": 0,
        "correctAnswer": "키가 더 크다 (taller)",
        "explanation": "'A giraffe is taller than an elephant.'입니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Sarah: It is taller than the tree. Kevin: I agree with you!",
        "question": "[듣기 · 8단원] 대화에서 Sarah이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음 기회에 다시 이야기하자.",
          "그것은 나무보다 키가 더 커.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 1,
        "correctAnswer": "그것은 나무보다 키가 더 커.",
        "explanation": "'It is taller than the tree.'은 '그것은 나무보다 키가 더 커.'을 의미합니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Jisu: A giraffe is taller than an elephant. Emma: I agree with you!",
        "question": "[듣기 · 8단원] 대화에서 Jisu이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "기린은 코끼리보다 키가 더 커."
        ],
        "correctIndex": 3,
        "correctAnswer": "기린은 코끼리보다 키가 더 커.",
        "explanation": "'A giraffe is taller than an elephant.'은 '기린은 코끼리보다 키가 더 커.'을 의미합니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kevin: He is faster than me in running. Tom: I agree with you!",
        "question": "[듣기 · 8단원] 대화에서 Kevin이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "그는 달리기에서 나보다 더 빨라.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아."
        ],
        "correctIndex": 1,
        "correctAnswer": "그는 달리기에서 나보다 더 빨라.",
        "explanation": "'He is faster than me in running.'은 '그는 달리기에서 나보다 더 빨라.'을 의미합니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Emma: My backpack is heavier than yours. Hana: I agree with you!",
        "question": "[듣기 · 8단원] 대화에서 Emma이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "내 배낭이 네 것보다 더 무거워.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "내 배낭이 네 것보다 더 무거워.",
        "explanation": "'My backpack is heavier than yours.'은 '내 배낭이 네 것보다 더 무거워.'을 의미합니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Tom: Who is stronger, the bear or the lion? Brian: I agree with you!",
        "question": "[듣기 · 8단원] 대화에서 Tom이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어.",
          "다음 기회에 다시 이야기하자.",
          "곰과 사자 중 누가 더 힘이 세니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "곰과 사자 중 누가 더 힘이 세니?",
        "explanation": "'Who is stronger, the bear or the lion?'은 '곰과 사자 중 누가 더 힘이 세니?'을 의미합니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Hana: The high tower is taller than our school. Amy: I agree with you!",
        "question": "[듣기 · 8단원] 대화에서 Hana이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "저 높은 탑은 우리 학교보다 더 높아."
        ],
        "correctIndex": 3,
        "correctAnswer": "저 높은 탑은 우리 학교보다 더 높아.",
        "explanation": "'The high tower is taller than our school.'은 '저 높은 탑은 우리 학교보다 더 높아.'을 의미합니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Brian: Can you dribble the ball faster than Tom? Paul: I agree with you!",
        "question": "[듣기 · 8단원] 대화에서 Brian이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "너는 톰보다 공을 더 빨리 몰 수 있니?",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "너는 톰보다 공을 더 빨리 몰 수 있니?",
        "explanation": "'Can you dribble the ball faster than Tom?'은 '너는 톰보다 공을 더 빨리 몰 수 있니?'을 의미합니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Amy: Always do your best to win the race. Minsoo: I agree with you!",
        "question": "[듣기 · 8단원] 대화에서 Amy이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "경주에서 이기기 위해 언제나 최선을 다하렴.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "경주에서 이기기 위해 언제나 최선을 다하렴.",
        "explanation": "'Always do your best to win the race.'은 '경주에서 이기기 위해 언제나 최선을 다하렴.'을 의미합니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Paul: Catch the ball and score a goal! Kelly: I agree with you!",
        "question": "[듣기 · 8단원] 대화에서 Paul이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음 기회에 다시 이야기하자.",
          "공을 잡아서 골을 넣어봐!",
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아."
        ],
        "correctIndex": 1,
        "correctAnswer": "공을 잡아서 골을 넣어봐!",
        "explanation": "'Catch the ball and score a goal!'은 '공을 잡아서 골을 넣어봐!'을 의미합니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Please give me that heavy clock. David: I agree with you!",
        "question": "[듣기 · 8단원] 대화에서 Minsoo이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "저 무거운 시계를 나에게 건네주렴.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "저 무거운 시계를 나에게 건네주렴.",
        "explanation": "'Please give me that heavy clock.'은 '저 무거운 시계를 나에게 건네주렴.'을 의미합니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kelly: What does 'giraffe' mean in Korean? Sarah: It means '기린'.",
        "question": "[듣기 · 8단원] 대화에서 언급된 영어 단어 'giraffe'의 우리말 뜻으로 바른 것은?",
        "options": [
          "기린",
          "더 키가 큰",
          "더 빠른",
          "더 무거운"
        ],
        "correctIndex": 0,
        "correctAnswer": "기린",
        "explanation": "'giraffe'은 '기린'를 뜻합니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "David: What does 'give' mean in Korean? Jisu: It means '주다'.",
        "question": "[듣기 · 8단원] 대화에서 언급된 영어 단어 'give'의 우리말 뜻으로 바른 것은?",
        "options": [
          "더 무거운",
          "주다",
          "더 빠른",
          "더 키가 큰"
        ],
        "correctIndex": 1,
        "correctAnswer": "주다",
        "explanation": "'give'은 '주다'를 뜻합니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Sarah: What does 'goal' mean in Korean? Kevin: It means '목표, 골'.",
        "question": "[듣기 · 8단원] 대화에서 언급된 영어 단어 'goal'의 우리말 뜻으로 바른 것은?",
        "options": [
          "더 무거운",
          "더 키가 큰",
          "더 빠른",
          "목표, 골"
        ],
        "correctIndex": 3,
        "correctAnswer": "목표, 골",
        "explanation": "'goal'은 '목표, 골'를 뜻합니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Jisu: What does 'race' mean in Korean? Emma: It means '경주'.",
        "question": "[듣기 · 8단원] 대화에서 언급된 영어 단어 'race'의 우리말 뜻으로 바른 것은?",
        "options": [
          "더 무거운",
          "더 빠른",
          "더 키가 큰",
          "경주"
        ],
        "correctIndex": 3,
        "correctAnswer": "경주",
        "explanation": "'race'은 '경주'를 뜻합니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kevin: What does 'tower' mean in Korean? Tom: It means '탑'.",
        "question": "[듣기 · 8단원] 대화에서 언급된 영어 단어 'tower'의 우리말 뜻으로 바른 것은?",
        "options": [
          "탑",
          "더 키가 큰",
          "더 빠른",
          "더 무거운"
        ],
        "correctIndex": 0,
        "correctAnswer": "탑",
        "explanation": "'tower'은 '탑'를 뜻합니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Emma: What does 'taller' mean in Korean? Hana: It means '더 키가 큰'.",
        "question": "[듣기 · 8단원] 대화에서 언급된 영어 단어 'taller'의 우리말 뜻으로 바른 것은?",
        "options": [
          "더 키가 큰",
          "더 힘센",
          "더 빠른",
          "더 무거운"
        ],
        "correctIndex": 0,
        "correctAnswer": "더 키가 큰",
        "explanation": "'taller'은 '더 키가 큰'를 뜻합니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Tom: What does 'faster' mean in Korean? Brian: It means '더 빠른'.",
        "question": "[듣기 · 8단원] 대화에서 언급된 영어 단어 'faster'의 우리말 뜻으로 바른 것은?",
        "options": [
          "더 빠른",
          "더 힘센",
          "더 키가 큰",
          "더 무거운"
        ],
        "correctIndex": 0,
        "correctAnswer": "더 빠른",
        "explanation": "'faster'은 '더 빠른'를 뜻합니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Hana: What does 'heavier' mean in Korean? Amy: It means '더 무거운'.",
        "question": "[듣기 · 8단원] 대화에서 언급된 영어 단어 'heavier'의 우리말 뜻으로 바른 것은?",
        "options": [
          "더 무거운",
          "더 힘센",
          "더 빠른",
          "더 키가 큰"
        ],
        "correctIndex": 0,
        "correctAnswer": "더 무거운",
        "explanation": "'heavier'은 '더 무거운'를 뜻합니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Brian: What does 'stronger' mean in Korean? Paul: It means '더 힘센'.",
        "question": "[듣기 · 8단원] 대화에서 언급된 영어 단어 'stronger'의 우리말 뜻으로 바른 것은?",
        "options": [
          "더 무거운",
          "더 빠른",
          "더 키가 큰",
          "더 힘센"
        ],
        "correctIndex": 3,
        "correctAnswer": "더 힘센",
        "explanation": "'stronger'은 '더 힘센'를 뜻합니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Amy: What does 'than' mean in Korean? Minsoo: It means '~보다'.",
        "question": "[듣기 · 8단원] 대화에서 언급된 영어 단어 'than'의 우리말 뜻으로 바른 것은?",
        "options": [
          "더 키가 큰",
          "~보다",
          "더 무거운",
          "더 빠른"
        ],
        "correctIndex": 1,
        "correctAnswer": "~보다",
        "explanation": "'than'은 '~보다'를 뜻합니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kelly. My backpack is heavier than yours. I am very happy and excited about our English class today.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kelly. My backpack is heavier than yours. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "내 배낭이 네 것보다 더 무거워."
        ],
        "correctIndex": 3,
        "correctAnswer": "내 배낭이 네 것보다 더 무거워.",
        "explanation": "'My backpack is heavier than yours.'(내 배낭이 네 것보다 더 무거워.)이 핵심 문장입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is David. Who is stronger, the bear or the lion? I am very happy and excited about our English class today.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is David. Who is stronger, the bear or the lion? I am very happy and excited about our English class today.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "곰과 사자 중 누가 더 힘이 세니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "곰과 사자 중 누가 더 힘이 세니?",
        "explanation": "'Who is stronger, the bear or the lion?'(곰과 사자 중 누가 더 힘이 세니?)이 핵심 문장입니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Sarah. The high tower is taller than our school. I am very happy and excited about our English class today.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Sarah. The high tower is taller than our school. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다.",
          "저 높은 탑은 우리 학교보다 더 높아."
        ],
        "correctIndex": 3,
        "correctAnswer": "저 높은 탑은 우리 학교보다 더 높아.",
        "explanation": "'The high tower is taller than our school.'(저 높은 탑은 우리 학교보다 더 높아.)이 핵심 문장입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Jisu. Can you dribble the ball faster than Tom? I am very happy and excited about our English class today.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Jisu. Can you dribble the ball faster than Tom? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Jisu이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "숙제가 너무 어려워서 고민이다.",
          "너는 톰보다 공을 더 빨리 몰 수 있니?",
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 1,
        "correctAnswer": "너는 톰보다 공을 더 빨리 몰 수 있니?",
        "explanation": "'Can you dribble the ball faster than Tom?'(너는 톰보다 공을 더 빨리 몰 수 있니?)이 핵심 문장입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kevin. Always do your best to win the race. I am very happy and excited about our English class today.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kevin. Always do your best to win the race. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kevin이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "경주에서 이기기 위해 언제나 최선을 다하렴.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "경주에서 이기기 위해 언제나 최선을 다하렴.",
        "explanation": "'Always do your best to win the race.'(경주에서 이기기 위해 언제나 최선을 다하렴.)이 핵심 문장입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Emma. Catch the ball and score a goal! I am very happy and excited about our English class today.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Emma. Catch the ball and score a goal! I am very happy and excited about our English class today.\"\n질문: 윗글에서 Emma이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "공을 잡아서 골을 넣어봐!"
        ],
        "correctIndex": 3,
        "correctAnswer": "공을 잡아서 골을 넣어봐!",
        "explanation": "'Catch the ball and score a goal!'(공을 잡아서 골을 넣어봐!)이 핵심 문장입니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Tom. Please give me that heavy clock. I am very happy and excited about our English class today.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Tom. Please give me that heavy clock. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Tom이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "저 무거운 시계를 나에게 건네주렴."
        ],
        "correctIndex": 3,
        "correctAnswer": "저 무거운 시계를 나에게 건네주렴.",
        "explanation": "'Please give me that heavy clock.'(저 무거운 시계를 나에게 건네주렴.)이 핵심 문장입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Hana. A cheetah runs faster than any horse. I am very happy and excited about our English class today.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Hana. A cheetah runs faster than any horse. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Hana이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "길을 잃어서 병원을 찾고 있다.",
          "치타는 어떤 말보다도 더 빨리 달려."
        ],
        "correctIndex": 3,
        "correctAnswer": "치타는 어떤 말보다도 더 빨리 달려.",
        "explanation": "'A cheetah runs faster than any horse.'(치타는 어떤 말보다도 더 빨리 달려.)이 핵심 문장입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Brian. An elephant is heavier than ten bears. I am very happy and excited about our English class today.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Brian. An elephant is heavier than ten bears. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Brian이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "숙제가 너무 어려워서 고민이다.",
          "코끼리는 곰 열 마리보다 더 무거워.",
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 1,
        "correctAnswer": "코끼리는 곰 열 마리보다 더 무거워.",
        "explanation": "'An elephant is heavier than ten bears.'(코끼리는 곰 열 마리보다 더 무거워.)이 핵심 문장입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Amy. Look at the baby giraffe beside its mother. I am very happy and excited about our English class today.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Amy. Look at the baby giraffe beside its mother. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Amy이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "엄마 곁에 있는 아기 기린을 봐.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "엄마 곁에 있는 아기 기린을 봐.",
        "explanation": "'Look at the baby giraffe beside its mother.'(엄마 곁에 있는 아기 기린을 봐.)이 핵심 문장입니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Paul. This bridge is longer than that street. I am very happy and excited about our English class today.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Paul. This bridge is longer than that street. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Paul이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "이 다리는 저 거리보다 더 길어.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 1,
        "correctAnswer": "이 다리는 저 거리보다 더 길어.",
        "explanation": "'This bridge is longer than that street.'(이 다리는 저 거리보다 더 길어.)이 핵심 문장입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Minsoo. Science is more interesting than games. I am very happy and excited about our English class today.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Minsoo. Science is more interesting than games. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "과학은 게임보다 더 흥미진진해.",
          "숙제가 너무 어려워서 고민이다."
        ],
        "correctIndex": 2,
        "correctAnswer": "과학은 게임보다 더 흥미진진해.",
        "explanation": "'Science is more interesting than games.'(과학은 게임보다 더 흥미진진해.)이 핵심 문장입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kelly. It is taller than the tree. I am very happy and excited about our English class today.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kelly. It is taller than the tree. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "숙제가 너무 어려워서 고민이다.",
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "그것은 나무보다 키가 더 커."
        ],
        "correctIndex": 3,
        "correctAnswer": "그것은 나무보다 키가 더 커.",
        "explanation": "'It is taller than the tree.'(그것은 나무보다 키가 더 커.)이 핵심 문장입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is David. A giraffe is taller than an elephant. I am very happy and excited about our English class today.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is David. A giraffe is taller than an elephant. I am very happy and excited about our English class today.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "길을 잃어서 병원을 찾고 있다.",
          "기린은 코끼리보다 키가 더 커."
        ],
        "correctIndex": 3,
        "correctAnswer": "기린은 코끼리보다 키가 더 커.",
        "explanation": "'A giraffe is taller than an elephant.'(기린은 코끼리보다 키가 더 커.)이 핵심 문장입니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Sarah. He is faster than me in running. I am very happy and excited about our English class today.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Sarah. He is faster than me in running. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "그는 달리기에서 나보다 더 빨라.",
          "숙제가 너무 어려워서 고민이다.",
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 0,
        "correctAnswer": "그는 달리기에서 나보다 더 빨라.",
        "explanation": "'He is faster than me in running.'(그는 달리기에서 나보다 더 빨라.)이 핵심 문장입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Who can dribble the basketball faster? And the response was: \"Kevin can dribble faster than David.\"",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Who can dribble the basketball faster? And the response was: \"Kevin can dribble faster than David.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 농구공을 더 빠르게 몰고 갈 수 있는 사람은?",
        "options": [
          "David",
          "Tom",
          "Kevin",
          "Minsoo"
        ],
        "correctIndex": 2,
        "correctAnswer": "Kevin",
        "explanation": "교과서 어휘: 'dribble'과 'faster'입니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: This box is heavier than that one. And the response was: \"Be careful! Give it to me, I am stronger.\"",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: This box is heavier than that one. And the response was: \"Be careful! Give it to me, I am stronger.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 상자에 대한 설명과 상대방의 제안은?",
        "options": [
          "상자를 열어보자고 함",
          "상자를 바닥에 버리자고 함",
          "상자가 가벼우니 혼자 들라고 함",
          "상자가 더 무거우니 더 힘센 자신이 들겠다고 함"
        ],
        "correctIndex": 3,
        "correctAnswer": "상자가 더 무거우니 더 힘센 자신이 들겠다고 함",
        "explanation": "교과서 어휘: 'heavier', 'stronger', 'give'입니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Who will win the swimming race? And the response was: \"Jisu will win because she practices always.\"",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Who will win the swimming race? And the response was: \"Jisu will win because she practices always.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 수영 경주에서 우승할 것으로 예상되는 사람은?",
        "options": [
          "늦잠을 잔 Kevin",
          "항상 연습하는 Jisu",
          "수영을 처음 배우는 David",
          "아무도 우승하지 못함"
        ],
        "correctIndex": 1,
        "correctAnswer": "항상 연습하는 Jisu",
        "explanation": "교과서 어휘: 'race', 'win', 'always'입니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Look at that tall building! It's taller than the tree. And the response was: \"Wow, it is almost as high as the tower!\"",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Look at that tall building! It's taller than the tree. And the response was: \"Wow, it is almost as high as the tower!\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 대화에서 두 대상의 비교 내용으로 일치하는 것은?",
        "options": [
          "건물이 나무보다 더 키가 크다",
          "나무가 건물보다 훨씬 더 높다",
          "탑이 나무보다 더 낮다",
          "건물과 나무의 높이가 똑같다"
        ],
        "correctIndex": 0,
        "correctAnswer": "건물이 나무보다 더 키가 크다",
        "explanation": "교과서 단원명 핵심 문장: 'It's taller than the tree.'입니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: A cheetah is faster than a lion. And the response was: \"Yes, cheetahs are the fastest land animals.\"",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: A cheetah is faster than a lion. And the response was: \"Yes, cheetahs are the fastest land animals.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 대화에서 비교하고 있는 동물과 성질은?",
        "options": [
          "사자가 치타보다 더 빠르다",
          "둘의 달리기 속도가 같다",
          "치타가 사자보다 더 힘이 세다",
          "치타가 사자보다 더 빠르다"
        ],
        "correctIndex": 3,
        "correctAnswer": "치타가 사자보다 더 빠르다",
        "explanation": "'A cheetah is faster than a lion.'입니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: A giraffe is taller than an elephant. And the response was: \"Right, giraffes have very long necks.\"",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: A giraffe is taller than an elephant. And the response was: \"Right, giraffes have very long necks.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 기린이 코끼리보다 뛰어난 신체 특징은?",
        "options": [
          "달리기가 더 빠르다",
          "귀가 더 크다",
          "몸무게가 더 무겁다",
          "키가 더 크다 (taller)"
        ],
        "correctIndex": 3,
        "correctAnswer": "키가 더 크다 (taller)",
        "explanation": "'A giraffe is taller than an elephant.'입니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Who can dribble the basketball faster? And the response was: \"Kevin can dribble faster than David.\"",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Who can dribble the basketball faster? And the response was: \"Kevin can dribble faster than David.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 농구공을 더 빠르게 몰고 갈 수 있는 사람은?",
        "options": [
          "Minsoo",
          "Kevin",
          "David",
          "Tom"
        ],
        "correctIndex": 1,
        "correctAnswer": "Kevin",
        "explanation": "교과서 어휘: 'dribble'과 'faster'입니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: This box is heavier than that one. And the response was: \"Be careful! Give it to me, I am stronger.\"",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: This box is heavier than that one. And the response was: \"Be careful! Give it to me, I am stronger.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 상자에 대한 설명과 상대방의 제안은?",
        "options": [
          "상자를 바닥에 버리자고 함",
          "상자를 열어보자고 함",
          "상자가 가벼우니 혼자 들라고 함",
          "상자가 더 무거우니 더 힘센 자신이 들겠다고 함"
        ],
        "correctIndex": 3,
        "correctAnswer": "상자가 더 무거우니 더 힘센 자신이 들겠다고 함",
        "explanation": "교과서 어휘: 'heavier', 'stronger', 'give'입니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Who will win the swimming race? And the response was: \"Jisu will win because she practices always.\"",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Who will win the swimming race? And the response was: \"Jisu will win because she practices always.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 수영 경주에서 우승할 것으로 예상되는 사람은?",
        "options": [
          "아무도 우승하지 못함",
          "항상 연습하는 Jisu",
          "늦잠을 잔 Kevin",
          "수영을 처음 배우는 David"
        ],
        "correctIndex": 1,
        "correctAnswer": "항상 연습하는 Jisu",
        "explanation": "교과서 어휘: 'race', 'win', 'always'입니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Look at that tall building! It's taller than the tree. And the response was: \"Wow, it is almost as high as the tower!\"",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Look at that tall building! It's taller than the tree. And the response was: \"Wow, it is almost as high as the tower!\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 대화에서 두 대상의 비교 내용으로 일치하는 것은?",
        "options": [
          "탑이 나무보다 더 낮다",
          "건물이 나무보다 더 키가 크다",
          "나무가 건물보다 훨씬 더 높다",
          "건물과 나무의 높이가 똑같다"
        ],
        "correctIndex": 1,
        "correctAnswer": "건물이 나무보다 더 키가 크다",
        "explanation": "교과서 단원명 핵심 문장: 'It's taller than the tree.'입니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'goal' is a new word in 8단원. In Korean, it means '목표, 골'.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'goal' is a new word in 8단원. In Korean, it means '목표, 골'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'goal'의 뜻은?",
        "options": [
          "더 키가 큰",
          "더 빠른",
          "목표, 골",
          "더 무거운"
        ],
        "correctIndex": 2,
        "correctAnswer": "목표, 골",
        "explanation": "'goal'은 '목표, 골'입니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'race' is a new word in 8단원. In Korean, it means '경주'.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'race' is a new word in 8단원. In Korean, it means '경주'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'race'의 뜻은?",
        "options": [
          "더 빠른",
          "더 무거운",
          "경주",
          "더 키가 큰"
        ],
        "correctIndex": 2,
        "correctAnswer": "경주",
        "explanation": "'race'은 '경주'입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'tower' is a new word in 8단원. In Korean, it means '탑'.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'tower' is a new word in 8단원. In Korean, it means '탑'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'tower'의 뜻은?",
        "options": [
          "더 무거운",
          "탑",
          "더 키가 큰",
          "더 빠른"
        ],
        "correctIndex": 1,
        "correctAnswer": "탑",
        "explanation": "'tower'은 '탑'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'taller' is a new word in 8단원. In Korean, it means '더 키가 큰'.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'taller' is a new word in 8단원. In Korean, it means '더 키가 큰'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'taller'의 뜻은?",
        "options": [
          "더 빠른",
          "더 키가 큰",
          "더 힘센",
          "더 무거운"
        ],
        "correctIndex": 1,
        "correctAnswer": "더 키가 큰",
        "explanation": "'taller'은 '더 키가 큰'입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'faster' is a new word in 8단원. In Korean, it means '더 빠른'.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'faster' is a new word in 8단원. In Korean, it means '더 빠른'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'faster'의 뜻은?",
        "options": [
          "더 힘센",
          "더 키가 큰",
          "더 빠른",
          "더 무거운"
        ],
        "correctIndex": 2,
        "correctAnswer": "더 빠른",
        "explanation": "'faster'은 '더 빠른'입니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'heavier' is a new word in 8단원. In Korean, it means '더 무거운'.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'heavier' is a new word in 8단원. In Korean, it means '더 무거운'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'heavier'의 뜻은?",
        "options": [
          "더 힘센",
          "더 무거운",
          "더 키가 큰",
          "더 빠른"
        ],
        "correctIndex": 1,
        "correctAnswer": "더 무거운",
        "explanation": "'heavier'은 '더 무거운'입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'stronger' is a new word in 8단원. In Korean, it means '더 힘센'.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'stronger' is a new word in 8단원. In Korean, it means '더 힘센'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'stronger'의 뜻은?",
        "options": [
          "더 힘센",
          "더 키가 큰",
          "더 빠른",
          "더 무거운"
        ],
        "correctIndex": 0,
        "correctAnswer": "더 힘센",
        "explanation": "'stronger'은 '더 힘센'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'than' is a new word in 8단원. In Korean, it means '~보다'.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'than' is a new word in 8단원. In Korean, it means '~보다'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'than'의 뜻은?",
        "options": [
          "더 빠른",
          "더 키가 큰",
          "~보다",
          "더 무거운"
        ],
        "correctIndex": 2,
        "correctAnswer": "~보다",
        "explanation": "'than'은 '~보다'입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'always' is a new word in 8단원. In Korean, it means '항상, 언제나'.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'always' is a new word in 8단원. In Korean, it means '항상, 언제나'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'always'의 뜻은?",
        "options": [
          "더 무거운",
          "더 키가 큰",
          "항상, 언제나",
          "더 빠른"
        ],
        "correctIndex": 2,
        "correctAnswer": "항상, 언제나",
        "explanation": "'always'은 '항상, 언제나'입니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'baby' is a new word in 8단원. In Korean, it means '아기'.",
        "question": "[읽기 · 8단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'baby' is a new word in 8단원. In Korean, it means '아기'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'baby'의 뜻은?",
        "options": [
          "아기",
          "더 키가 큰",
          "더 빠른",
          "더 무거운"
        ],
        "correctIndex": 0,
        "correctAnswer": "아기",
        "explanation": "'baby'은 '아기'입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 8단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"더 키가 큰\" (첫 글자: t, 총 6글자)",
        "correctAnswer": "taller",
        "explanation": "'더 키가 큰'의 영어 표기는 'taller'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 8단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"더 빠른\" (첫 글자: f, 총 6글자)",
        "correctAnswer": "faster",
        "explanation": "'더 빠른'의 영어 표기는 'faster'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 8단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"더 무거운\" (첫 글자: h, 총 7글자)",
        "correctAnswer": "heavier",
        "explanation": "'더 무거운'의 영어 표기는 'heavier'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 8단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"더 힘센\" (첫 글자: s, 총 8글자)",
        "correctAnswer": "stronger",
        "explanation": "'더 힘센'의 영어 표기는 'stronger'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 8단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"~보다\" (첫 글자: t, 총 4글자)",
        "correctAnswer": "than",
        "explanation": "'~보다'의 영어 표기는 'than'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 8단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"항상, 언제나\" (첫 글자: a, 총 6글자)",
        "correctAnswer": "always",
        "explanation": "'항상, 언제나'의 영어 표기는 'always'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 8단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"아기\" (첫 글자: b, 총 4글자)",
        "correctAnswer": "baby",
        "explanation": "'아기'의 영어 표기는 'baby'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 8단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"잡다\" (첫 글자: c, 총 5글자)",
        "correctAnswer": "catch",
        "explanation": "'잡다'의 영어 표기는 'catch'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 8단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"시계\" (첫 글자: c, 총 5글자)",
        "correctAnswer": "clock",
        "explanation": "'시계'의 영어 표기는 'clock'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 8단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"공을 몰다\" (첫 글자: d, 총 7글자)",
        "correctAnswer": "dribble",
        "explanation": "'공을 몰다'의 영어 표기는 'dribble'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 8단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"기린\" (첫 글자: g, 총 7글자)",
        "correctAnswer": "giraffe",
        "explanation": "'기린'의 영어 표기는 'giraffe'입니다."
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 8단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"주다\" (첫 글자: g, 총 4글자)",
        "correctAnswer": "give",
        "explanation": "'주다'의 영어 표기는 'give'입니다."
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 8단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"목표, 골\" (첫 글자: g, 총 4글자)",
        "correctAnswer": "goal",
        "explanation": "'목표, 골'의 영어 표기는 'goal'입니다."
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 8단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"경주\" (첫 글자: r, 총 4글자)",
        "correctAnswer": "race",
        "explanation": "'경주'의 영어 표기는 'race'입니다."
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 8단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"탑\" (첫 글자: t, 총 5글자)",
        "correctAnswer": "tower",
        "explanation": "'탑'의 영어 표기는 'tower'입니다."
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"그것은 나무보다 키가 더 커.\"",
        "chips": [
          "It",
          "is",
          "taller",
          "than",
          "the",
          "tree."
        ],
        "correctAnswer": "It is taller than the tree.",
        "explanation": "'It is taller than the tree.'은 '그것은 나무보다 키가 더 커.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"기린은 코끼리보다 키가 더 커.\"",
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
        "explanation": "'A giraffe is taller than an elephant.'은 '기린은 코끼리보다 키가 더 커.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"그는 달리기에서 나보다 더 빨라.\"",
        "chips": [
          "He",
          "is",
          "faster",
          "than",
          "me",
          "in",
          "running."
        ],
        "correctAnswer": "He is faster than me in running.",
        "explanation": "'He is faster than me in running.'은 '그는 달리기에서 나보다 더 빨라.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"내 배낭이 네 것보다 더 무거워.\"",
        "chips": [
          "My",
          "backpack",
          "is",
          "heavier",
          "than",
          "yours."
        ],
        "correctAnswer": "My backpack is heavier than yours.",
        "explanation": "'My backpack is heavier than yours.'은 '내 배낭이 네 것보다 더 무거워.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"곰과 사자 중 누가 더 힘이 세니?\"",
        "chips": [
          "Who",
          "is",
          "stronger",
          "the",
          "bear",
          "or",
          "the",
          "lion?"
        ],
        "correctAnswer": "Who is stronger, the bear or the lion?",
        "explanation": "'Who is stronger, the bear or the lion?'은 '곰과 사자 중 누가 더 힘이 세니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"저 높은 탑은 우리 학교보다 더 높아.\"",
        "chips": [
          "The",
          "high",
          "tower",
          "is",
          "taller",
          "than",
          "our",
          "school."
        ],
        "correctAnswer": "The high tower is taller than our school.",
        "explanation": "'The high tower is taller than our school.'은 '저 높은 탑은 우리 학교보다 더 높아.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"너는 톰보다 공을 더 빨리 몰 수 있니?\"",
        "chips": [
          "Can",
          "you",
          "dribble",
          "the",
          "ball",
          "faster",
          "than",
          "Tom?"
        ],
        "correctAnswer": "Can you dribble the ball faster than Tom?",
        "explanation": "'Can you dribble the ball faster than Tom?'은 '너는 톰보다 공을 더 빨리 몰 수 있니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"경주에서 이기기 위해 언제나 최선을 다하렴.\"",
        "chips": [
          "Always",
          "do",
          "your",
          "best",
          "to",
          "win",
          "the",
          "race."
        ],
        "correctAnswer": "Always do your best to win the race.",
        "explanation": "'Always do your best to win the race.'은 '경주에서 이기기 위해 언제나 최선을 다하렴.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"공을 잡아서 골을 넣어봐!\"",
        "chips": [
          "Catch",
          "the",
          "ball",
          "and",
          "score",
          "a",
          "goal."
        ],
        "correctAnswer": "Catch the ball and score a goal!",
        "explanation": "'Catch the ball and score a goal!'은 '공을 잡아서 골을 넣어봐!'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"저 무거운 시계를 나에게 건네주렴.\"",
        "chips": [
          "Please",
          "give",
          "me",
          "that",
          "heavy",
          "clock."
        ],
        "correctAnswer": "Please give me that heavy clock.",
        "explanation": "'Please give me that heavy clock.'은 '저 무거운 시계를 나에게 건네주렴.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 96,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"치타는 어떤 말보다도 더 빨리 달려.\"",
        "chips": [
          "A",
          "cheetah",
          "runs",
          "faster",
          "than",
          "any",
          "horse."
        ],
        "correctAnswer": "A cheetah runs faster than any horse.",
        "explanation": "'A cheetah runs faster than any horse.'은 '치타는 어떤 말보다도 더 빨리 달려.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 97,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"코끼리는 곰 열 마리보다 더 무거워.\"",
        "chips": [
          "An",
          "elephant",
          "is",
          "heavier",
          "than",
          "ten",
          "bears."
        ],
        "correctAnswer": "An elephant is heavier than ten bears.",
        "explanation": "'An elephant is heavier than ten bears.'은 '코끼리는 곰 열 마리보다 더 무거워.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 98,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"엄마 곁에 있는 아기 기린을 봐.\"",
        "chips": [
          "Look",
          "at",
          "the",
          "baby",
          "giraffe",
          "beside",
          "its",
          "mother."
        ],
        "correctAnswer": "Look at the baby giraffe beside its mother.",
        "explanation": "'Look at the baby giraffe beside its mother.'은 '엄마 곁에 있는 아기 기린을 봐.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 99,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 8단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"이 다리는 저 거리보다 더 길어.\"",
        "chips": [
          "This",
          "bridge",
          "is",
          "longer",
          "than",
          "that",
          "street."
        ],
        "correctAnswer": "This bridge is longer than that street.",
        "explanation": "'This bridge is longer than that street.'은 '이 다리는 저 거리보다 더 길어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[최종 골든벨 문제] 다음 우리말에 맞도록 주어진 단어 카드를 순서대로 바르게 배열하세요!\n우리말: \"과학은 게임보다 더 흥미진진해.\"",
        "chips": [
          "Science",
          "is",
          "more",
          "interesting",
          "than",
          "games."
        ],
        "correctAnswer": "Science is more interesting than games.",
        "explanation": "'Science is more interesting than games.'은 '과학은 게임보다 더 흥미진진해.'을 의미하는 교과서 핵심 문장입니다."
      }
    ]
  },
  "6G_L09": {
    "name": "9단원: What Are You Going to Do? (방학 계획과 미래 활동)",
    "grade": 6,
    "theme": "Future Plans: 'going to', Camping & Travel",
    "totalQuestions": 100,
    "questions": [
      {
        "id": 1,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Minsoo: What are you going to do this summer? David: I am going to camp in the deep forest and sleep in a tent.",
        "question": "[듣기 · 9단원] 대화를 듣고, B의 방학 계획으로 알맞은 것은?",
        "options": [
          "깊은 숲에서 캠핑하고 텐트에서 자기",
          "집에서 햄버거 먹으며 게임하기",
          "도서관에 매일 가서 책 읽기",
          "동물원에 취직해서 청소하기"
        ],
        "correctIndex": 0,
        "correctAnswer": "깊은 숲에서 캠핑하고 텐트에서 자기",
        "explanation": "교과서 본문 표현: 'camp in the forest and sleep in a tent'입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kelly: Do you have any special plans? Sarah: Yes, I am going to visit a traditional folk village.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방문할 예정인 장소는?",
        "options": [
          "컴퓨터 학원",
          "놀이공원 워터파크",
          "도심 속 쇼핑몰",
          "전통 민속마을 (village)"
        ],
        "correctIndex": 3,
        "correctAnswer": "전통 민속마을 (village)",
        "explanation": "교과서 어휘: 'village'와 'plan'입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "David: What is your child going to do tomorrow? Jisu: He is going to the zoo to see wild animals.",
        "question": "[듣기 · 9단원] 대화를 듣고, 아이가 내일 방문할 장소는?",
        "options": [
          "동물원 (zoo)",
          "수족관",
          "식물원",
          "박물관"
        ],
        "correctIndex": 0,
        "correctAnswer": "동물원 (zoo)",
        "explanation": "교과서 어휘: 'child'와 'zoo'입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Sarah: I am going to stay at home and clean my room. Kevin: Good idea! A clean room makes you feel fresh.",
        "question": "[듣기 · 9단원] 대화를 듣고, A가 집에서 할 일은?",
        "options": [
          "TV 시청하기",
          "늦잠 자기",
          "낮잠 자기",
          "방 청소하기"
        ],
        "correctIndex": 3,
        "correctAnswer": "방 청소하기",
        "explanation": "교과서 어휘: 'stay'와 'room'입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Jisu: Which holiday program are you going to join? Emma: I am going to join the English drama program.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 참여할 방학 프로그램은?",
        "options": [
          "요리 체험",
          "수영 교실",
          "로봇 조립 캠프",
          "영어 연극 프로그램"
        ],
        "correctIndex": 3,
        "correctAnswer": "영어 연극 프로그램",
        "explanation": "교과서 어휘: 'program'입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kevin: Let's eat a delicious hamburger after hiking in the forest. Tom: Sounds delicious! I am very hungry.",
        "question": "[듣기 · 9단원] 대화를 듣고, 두 사람이 숲 하이킹 후 먹기로 한 음식은?",
        "options": [
          "김밥",
          "햄버거 (hamburger)",
          "떡볶이",
          "피자"
        ],
        "correctIndex": 1,
        "correctAnswer": "햄버거 (hamburger)",
        "explanation": "교과서 어휘: 'forest'와 'hamburger'입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Emma: What are you going to do this summer? Hana: I am going to camp in the deep forest and sleep in a tent.",
        "question": "[듣기 · 9단원] 대화를 듣고, B의 방학 계획으로 알맞은 것은?",
        "options": [
          "동물원에 취직해서 청소하기",
          "깊은 숲에서 캠핑하고 텐트에서 자기",
          "집에서 햄버거 먹으며 게임하기",
          "도서관에 매일 가서 책 읽기"
        ],
        "correctIndex": 1,
        "correctAnswer": "깊은 숲에서 캠핑하고 텐트에서 자기",
        "explanation": "교과서 본문 표현: 'camp in the forest and sleep in a tent'입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Tom: Do you have any special plans? Brian: Yes, I am going to visit a traditional folk village.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방문할 예정인 장소는?",
        "options": [
          "놀이공원 워터파크",
          "도심 속 쇼핑몰",
          "전통 민속마을 (village)",
          "컴퓨터 학원"
        ],
        "correctIndex": 2,
        "correctAnswer": "전통 민속마을 (village)",
        "explanation": "교과서 어휘: 'village'와 'plan'입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Hana: What is your child going to do tomorrow? Amy: He is going to the zoo to see wild animals.",
        "question": "[듣기 · 9단원] 대화를 듣고, 아이가 내일 방문할 장소는?",
        "options": [
          "박물관",
          "식물원",
          "수족관",
          "동물원 (zoo)"
        ],
        "correctIndex": 3,
        "correctAnswer": "동물원 (zoo)",
        "explanation": "교과서 어휘: 'child'와 'zoo'입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Brian: I am going to stay at home and clean my room. Paul: Good idea! A clean room makes you feel fresh.",
        "question": "[듣기 · 9단원] 대화를 듣고, A가 집에서 할 일은?",
        "options": [
          "방 청소하기",
          "늦잠 자기",
          "TV 시청하기",
          "낮잠 자기"
        ],
        "correctIndex": 0,
        "correctAnswer": "방 청소하기",
        "explanation": "교과서 어휘: 'stay'와 'room'입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Amy: Which holiday program are you going to join? Minsoo: I am going to join the English drama program.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 참여할 방학 프로그램은?",
        "options": [
          "요리 체험",
          "수영 교실",
          "로봇 조립 캠프",
          "영어 연극 프로그램"
        ],
        "correctIndex": 3,
        "correctAnswer": "영어 연극 프로그램",
        "explanation": "교과서 어휘: 'program'입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Paul: Let's eat a delicious hamburger after hiking in the forest. Kelly: Sounds delicious! I am very hungry.",
        "question": "[듣기 · 9단원] 대화를 듣고, 두 사람이 숲 하이킹 후 먹기로 한 음식은?",
        "options": [
          "떡볶이",
          "김밥",
          "피자",
          "햄버거 (hamburger)"
        ],
        "correctIndex": 3,
        "correctAnswer": "햄버거 (hamburger)",
        "explanation": "교과서 어휘: 'forest'와 'hamburger'입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: What are you going to do this summer? David: I am going to camp in the deep forest and sleep in a tent.",
        "question": "[듣기 · 9단원] 대화를 듣고, B의 방학 계획으로 알맞은 것은?",
        "options": [
          "집에서 햄버거 먹으며 게임하기",
          "깊은 숲에서 캠핑하고 텐트에서 자기",
          "동물원에 취직해서 청소하기",
          "도서관에 매일 가서 책 읽기"
        ],
        "correctIndex": 1,
        "correctAnswer": "깊은 숲에서 캠핑하고 텐트에서 자기",
        "explanation": "교과서 본문 표현: 'camp in the forest and sleep in a tent'입니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kelly: Do you have any special plans? Sarah: Yes, I am going to visit a traditional folk village.",
        "question": "[듣기 · 9단원] 대화를 듣고, B가 방문할 예정인 장소는?",
        "options": [
          "전통 민속마을 (village)",
          "컴퓨터 학원",
          "놀이공원 워터파크",
          "도심 속 쇼핑몰"
        ],
        "correctIndex": 0,
        "correctAnswer": "전통 민속마을 (village)",
        "explanation": "교과서 어휘: 'village'와 'plan'입니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "David: What is your child going to do tomorrow? Jisu: He is going to the zoo to see wild animals.",
        "question": "[듣기 · 9단원] 대화를 듣고, 아이가 내일 방문할 장소는?",
        "options": [
          "식물원",
          "동물원 (zoo)",
          "박물관",
          "수족관"
        ],
        "correctIndex": 1,
        "correctAnswer": "동물원 (zoo)",
        "explanation": "교과서 어휘: 'child'와 'zoo'입니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Sarah: What are you going to do? Kevin: I agree with you!",
        "question": "[듣기 · 9단원] 대화에서 Sarah이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어.",
          "다음 기회에 다시 이야기하자.",
          "너는 무엇을 할 예정이니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "너는 무엇을 할 예정이니?",
        "explanation": "'What are you going to do?'은 '너는 무엇을 할 예정이니?'을 의미합니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Jisu: I am going to go camping in the forest. Emma: I agree with you!",
        "question": "[듣기 · 9단원] 대화에서 Jisu이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "나는 숲으로 캠핑을 갈 거야.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아."
        ],
        "correctIndex": 1,
        "correctAnswer": "나는 숲으로 캠핑을 갈 거야.",
        "explanation": "'I am going to go camping in the forest.'은 '나는 숲으로 캠핑을 갈 거야.'을 의미합니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kevin: We are going to sleep in a warm tent. Tom: I agree with you!",
        "question": "[듣기 · 9단원] 대화에서 Kevin이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음 기회에 다시 이야기하자.",
          "나는 무슨 말인지 잘 모르겠어.",
          "우리는 따뜻한 텐트에서 잘 거야.",
          "그것은 좋은 생각이 아닌 것 같아."
        ],
        "correctIndex": 2,
        "correctAnswer": "우리는 따뜻한 텐트에서 잘 거야.",
        "explanation": "'We are going to sleep in a warm tent.'은 '우리는 따뜻한 텐트에서 잘 거야.'을 의미합니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Emma: I do not have any special plans. Hana: I agree with you!",
        "question": "[듣기 · 9단원] 대화에서 Emma이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "다음 기회에 다시 이야기하자.",
          "나는 특별한 계획이 전혀 없어.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 1,
        "correctAnswer": "나는 특별한 계획이 전혀 없어.",
        "explanation": "'I do not have any special plans.'은 '나는 특별한 계획이 전혀 없어.'을 의미합니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Tom: They play soccer with the children. Brian: I agree with you!",
        "question": "[듣기 · 9단원] 대화에서 Tom이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "그들은 아이들과 함께 축구를 해."
        ],
        "correctIndex": 3,
        "correctAnswer": "그들은 아이들과 함께 축구를 해.",
        "explanation": "'They play soccer with the children.'은 '그들은 아이들과 함께 축구를 해.'을 의미합니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Hana: I like hiking in the green forest. Amy: I agree with you!",
        "question": "[듣기 · 9단원] 대화에서 Hana이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "나는 푸른 숲에서 하이킹하는 것을 좋아해.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아."
        ],
        "correctIndex": 1,
        "correctAnswer": "나는 푸른 숲에서 하이킹하는 것을 좋아해.",
        "explanation": "'I like hiking in the green forest.'은 '나는 푸른 숲에서 하이킹하는 것을 좋아해.'을 의미합니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Brian: Choose your favorite holiday program, please. Paul: I agree with you!",
        "question": "[듣기 · 9단원] 대화에서 Brian이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "가장 좋아하는 방학 프로그램을 골라주세요."
        ],
        "correctIndex": 3,
        "correctAnswer": "가장 좋아하는 방학 프로그램을 골라주세요.",
        "explanation": "'Choose your favorite holiday program, please.'은 '가장 좋아하는 방학 프로그램을 골라주세요.'을 의미합니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Amy: I am going to clean my room today. Minsoo: I agree with you!",
        "question": "[듣기 · 9단원] 대화에서 Amy이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 오늘 내 방을 청소할 계획이야.",
          "나는 무슨 말인지 잘 모르겠어.",
          "다음 기회에 다시 이야기하자."
        ],
        "correctIndex": 1,
        "correctAnswer": "나는 오늘 내 방을 청소할 계획이야.",
        "explanation": "'I am going to clean my room today.'은 '나는 오늘 내 방을 청소할 계획이야.'을 의미합니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Paul: I am going to stay home this weekend. Kelly: I agree with you!",
        "question": "[듣기 · 9단원] 대화에서 Paul이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "나는 무슨 말인지 잘 모르겠어.",
          "나는 이번 주말에 집에 머무를 거야."
        ],
        "correctIndex": 3,
        "correctAnswer": "나는 이번 주말에 집에 머무를 거야.",
        "explanation": "'I am going to stay home this weekend.'은 '나는 이번 주말에 집에 머무를 거야.'을 의미합니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: We are going to visit a beautiful small village. David: I agree with you!",
        "question": "[듣기 · 9단원] 대화에서 Minsoo이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "우리는 아름답고 작은 마을을 방문할 거야."
        ],
        "correctIndex": 3,
        "correctAnswer": "우리는 아름답고 작은 마을을 방문할 거야.",
        "explanation": "'We are going to visit a beautiful small village.'은 '우리는 아름답고 작은 마을을 방문할 거야.'을 의미합니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kelly: What does 'any' mean in Korean? Sarah: It means '어떤, 조금의'.",
        "question": "[듣기 · 9단원] 대화에서 언급된 영어 단어 'any'의 우리말 뜻으로 바른 것은?",
        "options": [
          "어떤, 조금의",
          "계획",
          "숲",
          "텐트"
        ],
        "correctIndex": 0,
        "correctAnswer": "어떤, 조금의",
        "explanation": "'any'은 '어떤, 조금의'를 뜻합니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "David: What does 'clean' mean in Korean? Jisu: It means '청소하다, 깨끗한'.",
        "question": "[듣기 · 9단원] 대화에서 언급된 영어 단어 'clean'의 우리말 뜻으로 바른 것은?",
        "options": [
          "청소하다, 깨끗한",
          "텐트",
          "계획",
          "숲"
        ],
        "correctIndex": 0,
        "correctAnswer": "청소하다, 깨끗한",
        "explanation": "'clean'은 '청소하다, 깨끗한'를 뜻합니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Sarah: What does 'camp' mean in Korean? Kevin: It means '캠핑하다'.",
        "question": "[듣기 · 9단원] 대화에서 언급된 영어 단어 'camp'의 우리말 뜻으로 바른 것은?",
        "options": [
          "텐트",
          "숲",
          "계획",
          "캠핑하다"
        ],
        "correctIndex": 3,
        "correctAnswer": "캠핑하다",
        "explanation": "'camp'은 '캠핑하다'를 뜻합니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Jisu: What does 'vacation' mean in Korean? Emma: It means '방학'.",
        "question": "[듣기 · 9단원] 대화에서 언급된 영어 단어 'vacation'의 우리말 뜻으로 바른 것은?",
        "options": [
          "방학",
          "계획",
          "숲",
          "텐트"
        ],
        "correctIndex": 0,
        "correctAnswer": "방학",
        "explanation": "'vacation'은 '방학'를 뜻합니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kevin: What does 'visit' mean in Korean? Tom: It means '방문하다'.",
        "question": "[듣기 · 9단원] 대화에서 언급된 영어 단어 'visit'의 우리말 뜻으로 바른 것은?",
        "options": [
          "방문하다",
          "텐트",
          "계획",
          "숲"
        ],
        "correctIndex": 0,
        "correctAnswer": "방문하다",
        "explanation": "'visit'은 '방문하다'를 뜻합니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Emma: What does 'plan' mean in Korean? Hana: It means '계획'.",
        "question": "[듣기 · 9단원] 대화에서 언급된 영어 단어 'plan'의 우리말 뜻으로 바른 것은?",
        "options": [
          "숲",
          "계획",
          "머무르다",
          "텐트"
        ],
        "correctIndex": 1,
        "correctAnswer": "계획",
        "explanation": "'plan'은 '계획'를 뜻합니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Tom: What does 'forest' mean in Korean? Brian: It means '숲'.",
        "question": "[듣기 · 9단원] 대화에서 언급된 영어 단어 'forest'의 우리말 뜻으로 바른 것은?",
        "options": [
          "머무르다",
          "텐트",
          "계획",
          "숲"
        ],
        "correctIndex": 3,
        "correctAnswer": "숲",
        "explanation": "'forest'은 '숲'를 뜻합니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Hana: What does 'tent' mean in Korean? Amy: It means '텐트'.",
        "question": "[듣기 · 9단원] 대화에서 언급된 영어 단어 'tent'의 우리말 뜻으로 바른 것은?",
        "options": [
          "텐트",
          "계획",
          "숲",
          "머무르다"
        ],
        "correctIndex": 0,
        "correctAnswer": "텐트",
        "explanation": "'tent'은 '텐트'를 뜻합니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Brian: What does 'stay' mean in Korean? Paul: It means '머무르다'.",
        "question": "[듣기 · 9단원] 대화에서 언급된 영어 단어 'stay'의 우리말 뜻으로 바른 것은?",
        "options": [
          "머무르다",
          "텐트",
          "계획",
          "숲"
        ],
        "correctIndex": 0,
        "correctAnswer": "머무르다",
        "explanation": "'stay'은 '머무르다'를 뜻합니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Amy: What does 'village' mean in Korean? Minsoo: It means '마을'.",
        "question": "[듣기 · 9단원] 대화에서 언급된 영어 단어 'village'의 우리말 뜻으로 바른 것은?",
        "options": [
          "계획",
          "텐트",
          "마을",
          "숲"
        ],
        "correctIndex": 2,
        "correctAnswer": "마을",
        "explanation": "'village'은 '마을'를 뜻합니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kelly. I do not have any special plans. I am very happy and excited about our English class today.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kelly. I do not have any special plans. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다.",
          "나는 특별한 계획이 전혀 없어.",
          "숙제가 너무 어려워서 고민이다."
        ],
        "correctIndex": 2,
        "correctAnswer": "나는 특별한 계획이 전혀 없어.",
        "explanation": "'I do not have any special plans.'(나는 특별한 계획이 전혀 없어.)이 핵심 문장입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is David. They play soccer with the children. I am very happy and excited about our English class today.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is David. They play soccer with the children. I am very happy and excited about our English class today.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다.",
          "숙제가 너무 어려워서 고민이다.",
          "그들은 아이들과 함께 축구를 해."
        ],
        "correctIndex": 3,
        "correctAnswer": "그들은 아이들과 함께 축구를 해.",
        "explanation": "'They play soccer with the children.'(그들은 아이들과 함께 축구를 해.)이 핵심 문장입니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Sarah. I like hiking in the green forest. I am very happy and excited about our English class today.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Sarah. I like hiking in the green forest. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "나는 푸른 숲에서 하이킹하는 것을 좋아해."
        ],
        "correctIndex": 3,
        "correctAnswer": "나는 푸른 숲에서 하이킹하는 것을 좋아해.",
        "explanation": "'I like hiking in the green forest.'(나는 푸른 숲에서 하이킹하는 것을 좋아해.)이 핵심 문장입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Jisu. Choose your favorite holiday program, please. I am very happy and excited about our English class today.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Jisu. Choose your favorite holiday program, please. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Jisu이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "가장 좋아하는 방학 프로그램을 골라주세요.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "가장 좋아하는 방학 프로그램을 골라주세요.",
        "explanation": "'Choose your favorite holiday program, please.'(가장 좋아하는 방학 프로그램을 골라주세요.)이 핵심 문장입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kevin. I am going to clean my room today. I am very happy and excited about our English class today.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kevin. I am going to clean my room today. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kevin이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다.",
          "숙제가 너무 어려워서 고민이다.",
          "나는 오늘 내 방을 청소할 계획이야."
        ],
        "correctIndex": 3,
        "correctAnswer": "나는 오늘 내 방을 청소할 계획이야.",
        "explanation": "'I am going to clean my room today.'(나는 오늘 내 방을 청소할 계획이야.)이 핵심 문장입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Emma. I am going to stay home this weekend. I am very happy and excited about our English class today.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Emma. I am going to stay home this weekend. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Emma이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "나는 이번 주말에 집에 머무를 거야."
        ],
        "correctIndex": 3,
        "correctAnswer": "나는 이번 주말에 집에 머무를 거야.",
        "explanation": "'I am going to stay home this weekend.'(나는 이번 주말에 집에 머무를 거야.)이 핵심 문장입니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Tom. We are going to visit a beautiful small village. I am very happy and excited about our English class today.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Tom. We are going to visit a beautiful small village. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Tom이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "우리는 아름답고 작은 마을을 방문할 거야.",
          "숙제가 너무 어려워서 고민이다.",
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 0,
        "correctAnswer": "우리는 아름답고 작은 마을을 방문할 거야.",
        "explanation": "'We are going to visit a beautiful small village.'(우리는 아름답고 작은 마을을 방문할 거야.)이 핵심 문장입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Hana. The children are excited to visit the zoo. I am very happy and excited about our English class today.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Hana. The children are excited to visit the zoo. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Hana이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "아이들은 동물원에 방문할 생각에 신이 났어.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 1,
        "correctAnswer": "아이들은 동물원에 방문할 생각에 신이 났어.",
        "explanation": "'The children are excited to visit the zoo.'(아이들은 동물원에 방문할 생각에 신이 났어.)이 핵심 문장입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Brian. I want to eat a hamburger for lunch. I am very happy and excited about our English class today.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Brian. I want to eat a hamburger for lunch. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Brian이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "점심으로 햄버거를 먹고 싶어.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 1,
        "correctAnswer": "점심으로 햄버거를 먹고 싶어.",
        "explanation": "'I want to eat a hamburger for lunch.'(점심으로 햄버거를 먹고 싶어.)이 핵심 문장입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Amy. What is she going to do tomorrow morning? I am very happy and excited about our English class today.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Amy. What is she going to do tomorrow morning? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Amy이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "그녀는 내일 아침에 무엇을 할 예정이니?",
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다."
        ],
        "correctIndex": 0,
        "correctAnswer": "그녀는 내일 아침에 무엇을 할 예정이니?",
        "explanation": "'What is she going to do tomorrow morning?'(그녀는 내일 아침에 무엇을 할 예정이니?)이 핵심 문장입니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Paul. He plans to travel around Jeju Island. I am very happy and excited about our English class today.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Paul. He plans to travel around Jeju Island. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Paul이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "그는 제주도를 여행할 계획을 세우고 있어."
        ],
        "correctIndex": 3,
        "correctAnswer": "그는 제주도를 여행할 계획을 세우고 있어.",
        "explanation": "'He plans to travel around Jeju Island.'(그는 제주도를 여행할 계획을 세우고 있어.)이 핵심 문장입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Minsoo. Our summer vacation is going to be fantastic. I am very happy and excited about our English class today.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Minsoo. Our summer vacation is going to be fantastic. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "우리의 여름방학은 정말 환상적일 거야."
        ],
        "correctIndex": 3,
        "correctAnswer": "우리의 여름방학은 정말 환상적일 거야.",
        "explanation": "'Our summer vacation is going to be fantastic.'(우리의 여름방학은 정말 환상적일 거야.)이 핵심 문장입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kelly. What are you going to do? I am very happy and excited about our English class today.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kelly. What are you going to do? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "너는 무엇을 할 예정이니?",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "너는 무엇을 할 예정이니?",
        "explanation": "'What are you going to do?'(너는 무엇을 할 예정이니?)이 핵심 문장입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is David. I am going to go camping in the forest. I am very happy and excited about our English class today.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is David. I am going to go camping in the forest. I am very happy and excited about our English class today.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "나는 숲으로 캠핑을 갈 거야.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 1,
        "correctAnswer": "나는 숲으로 캠핑을 갈 거야.",
        "explanation": "'I am going to go camping in the forest.'(나는 숲으로 캠핑을 갈 거야.)이 핵심 문장입니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Sarah. We are going to sleep in a warm tent. I am very happy and excited about our English class today.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Sarah. We are going to sleep in a warm tent. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "숙제가 너무 어려워서 고민이다.",
          "우리는 따뜻한 텐트에서 잘 거야.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 2,
        "correctAnswer": "우리는 따뜻한 텐트에서 잘 거야.",
        "explanation": "'We are going to sleep in a warm tent.'(우리는 따뜻한 텐트에서 잘 거야.)이 핵심 문장입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: I am going to stay at home and clean my room. And the response was: \"Good idea! A clean room makes you feel fresh.\"",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: I am going to stay at home and clean my room. And the response was: \"Good idea! A clean room makes you feel fresh.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: A가 집에서 할 일은?",
        "options": [
          "낮잠 자기",
          "TV 시청하기",
          "늦잠 자기",
          "방 청소하기"
        ],
        "correctIndex": 3,
        "correctAnswer": "방 청소하기",
        "explanation": "교과서 어휘: 'stay'와 'room'입니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Which holiday program are you going to join? And the response was: \"I am going to join the English drama program.\"",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Which holiday program are you going to join? And the response was: \"I am going to join the English drama program.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: B가 참여할 방학 프로그램은?",
        "options": [
          "영어 연극 프로그램",
          "로봇 조립 캠프",
          "수영 교실",
          "요리 체험"
        ],
        "correctIndex": 0,
        "correctAnswer": "영어 연극 프로그램",
        "explanation": "교과서 어휘: 'program'입니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Let's eat a delicious hamburger after hiking in the forest. And the response was: \"Sounds delicious! I am very hungry.\"",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Let's eat a delicious hamburger after hiking in the forest. And the response was: \"Sounds delicious! I am very hungry.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 두 사람이 숲 하이킹 후 먹기로 한 음식은?",
        "options": [
          "김밥",
          "피자",
          "떡볶이",
          "햄버거 (hamburger)"
        ],
        "correctIndex": 3,
        "correctAnswer": "햄버거 (hamburger)",
        "explanation": "교과서 어휘: 'forest'와 'hamburger'입니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: What are you going to do this summer? And the response was: \"I am going to camp in the deep forest and sleep in a tent.\"",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: What are you going to do this summer? And the response was: \"I am going to camp in the deep forest and sleep in a tent.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: B의 방학 계획으로 알맞은 것은?",
        "options": [
          "도서관에 매일 가서 책 읽기",
          "집에서 햄버거 먹으며 게임하기",
          "깊은 숲에서 캠핑하고 텐트에서 자기",
          "동물원에 취직해서 청소하기"
        ],
        "correctIndex": 2,
        "correctAnswer": "깊은 숲에서 캠핑하고 텐트에서 자기",
        "explanation": "교과서 본문 표현: 'camp in the forest and sleep in a tent'입니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Do you have any special plans? And the response was: \"Yes, I am going to visit a traditional folk village.\"",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Do you have any special plans? And the response was: \"Yes, I am going to visit a traditional folk village.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: B가 방문할 예정인 장소는?",
        "options": [
          "컴퓨터 학원",
          "놀이공원 워터파크",
          "도심 속 쇼핑몰",
          "전통 민속마을 (village)"
        ],
        "correctIndex": 3,
        "correctAnswer": "전통 민속마을 (village)",
        "explanation": "교과서 어휘: 'village'와 'plan'입니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: What is your child going to do tomorrow? And the response was: \"He is going to the zoo to see wild animals.\"",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: What is your child going to do tomorrow? And the response was: \"He is going to the zoo to see wild animals.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 아이가 내일 방문할 장소는?",
        "options": [
          "수족관",
          "동물원 (zoo)",
          "박물관",
          "식물원"
        ],
        "correctIndex": 1,
        "correctAnswer": "동물원 (zoo)",
        "explanation": "교과서 어휘: 'child'와 'zoo'입니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: I am going to stay at home and clean my room. And the response was: \"Good idea! A clean room makes you feel fresh.\"",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: I am going to stay at home and clean my room. And the response was: \"Good idea! A clean room makes you feel fresh.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: A가 집에서 할 일은?",
        "options": [
          "방 청소하기",
          "늦잠 자기",
          "낮잠 자기",
          "TV 시청하기"
        ],
        "correctIndex": 0,
        "correctAnswer": "방 청소하기",
        "explanation": "교과서 어휘: 'stay'와 'room'입니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Which holiday program are you going to join? And the response was: \"I am going to join the English drama program.\"",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Which holiday program are you going to join? And the response was: \"I am going to join the English drama program.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: B가 참여할 방학 프로그램은?",
        "options": [
          "수영 교실",
          "로봇 조립 캠프",
          "영어 연극 프로그램",
          "요리 체험"
        ],
        "correctIndex": 2,
        "correctAnswer": "영어 연극 프로그램",
        "explanation": "교과서 어휘: 'program'입니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Let's eat a delicious hamburger after hiking in the forest. And the response was: \"Sounds delicious! I am very hungry.\"",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Let's eat a delicious hamburger after hiking in the forest. And the response was: \"Sounds delicious! I am very hungry.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 두 사람이 숲 하이킹 후 먹기로 한 음식은?",
        "options": [
          "피자",
          "김밥",
          "떡볶이",
          "햄버거 (hamburger)"
        ],
        "correctIndex": 3,
        "correctAnswer": "햄버거 (hamburger)",
        "explanation": "교과서 어휘: 'forest'와 'hamburger'입니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: What are you going to do this summer? And the response was: \"I am going to camp in the deep forest and sleep in a tent.\"",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: What are you going to do this summer? And the response was: \"I am going to camp in the deep forest and sleep in a tent.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: B의 방학 계획으로 알맞은 것은?",
        "options": [
          "도서관에 매일 가서 책 읽기",
          "집에서 햄버거 먹으며 게임하기",
          "깊은 숲에서 캠핑하고 텐트에서 자기",
          "동물원에 취직해서 청소하기"
        ],
        "correctIndex": 2,
        "correctAnswer": "깊은 숲에서 캠핑하고 텐트에서 자기",
        "explanation": "교과서 본문 표현: 'camp in the forest and sleep in a tent'입니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'camp' is a new word in 9단원. In Korean, it means '캠핑하다'.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'camp' is a new word in 9단원. In Korean, it means '캠핑하다'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'camp'의 뜻은?",
        "options": [
          "계획",
          "숲",
          "캠핑하다",
          "텐트"
        ],
        "correctIndex": 2,
        "correctAnswer": "캠핑하다",
        "explanation": "'camp'은 '캠핑하다'입니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'vacation' is a new word in 9단원. In Korean, it means '방학'.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'vacation' is a new word in 9단원. In Korean, it means '방학'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'vacation'의 뜻은?",
        "options": [
          "숲",
          "방학",
          "계획",
          "텐트"
        ],
        "correctIndex": 1,
        "correctAnswer": "방학",
        "explanation": "'vacation'은 '방학'입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'visit' is a new word in 9단원. In Korean, it means '방문하다'.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'visit' is a new word in 9단원. In Korean, it means '방문하다'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'visit'의 뜻은?",
        "options": [
          "방문하다",
          "텐트",
          "숲",
          "계획"
        ],
        "correctIndex": 0,
        "correctAnswer": "방문하다",
        "explanation": "'visit'은 '방문하다'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'plan' is a new word in 9단원. In Korean, it means '계획'.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'plan' is a new word in 9단원. In Korean, it means '계획'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'plan'의 뜻은?",
        "options": [
          "계획",
          "숲",
          "텐트",
          "머무르다"
        ],
        "correctIndex": 0,
        "correctAnswer": "계획",
        "explanation": "'plan'은 '계획'입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'forest' is a new word in 9단원. In Korean, it means '숲'.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'forest' is a new word in 9단원. In Korean, it means '숲'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'forest'의 뜻은?",
        "options": [
          "숲",
          "계획",
          "텐트",
          "머무르다"
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
        "subtext": "Vocabulary Note: The word 'tent' is a new word in 9단원. In Korean, it means '텐트'.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'tent' is a new word in 9단원. In Korean, it means '텐트'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'tent'의 뜻은?",
        "options": [
          "숲",
          "계획",
          "머무르다",
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
        "subtext": "Vocabulary Note: The word 'stay' is a new word in 9단원. In Korean, it means '머무르다'.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'stay' is a new word in 9단원. In Korean, it means '머무르다'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'stay'의 뜻은?",
        "options": [
          "숲",
          "머무르다",
          "계획",
          "텐트"
        ],
        "correctIndex": 1,
        "correctAnswer": "머무르다",
        "explanation": "'stay'은 '머무르다'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'village' is a new word in 9단원. In Korean, it means '마을'.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'village' is a new word in 9단원. In Korean, it means '마을'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'village'의 뜻은?",
        "options": [
          "마을",
          "계획",
          "숲",
          "텐트"
        ],
        "correctIndex": 0,
        "correctAnswer": "마을",
        "explanation": "'village'은 '마을'입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'zoo' is a new word in 9단원. In Korean, it means '동물원'.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'zoo' is a new word in 9단원. In Korean, it means '동물원'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'zoo'의 뜻은?",
        "options": [
          "숲",
          "텐트",
          "계획",
          "동물원"
        ],
        "correctIndex": 3,
        "correctAnswer": "동물원",
        "explanation": "'zoo'은 '동물원'입니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'hamburger' is a new word in 9단원. In Korean, it means '햄버거'.",
        "question": "[읽기 · 9단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'hamburger' is a new word in 9단원. In Korean, it means '햄버거'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'hamburger'의 뜻은?",
        "options": [
          "햄버거",
          "텐트",
          "계획",
          "숲"
        ],
        "correctIndex": 0,
        "correctAnswer": "햄버거",
        "explanation": "'hamburger'은 '햄버거'입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 9단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"계획\" (첫 글자: p, 총 4글자)",
        "correctAnswer": "plan",
        "explanation": "'계획'의 영어 표기는 'plan'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 9단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"숲\" (첫 글자: f, 총 6글자)",
        "correctAnswer": "forest",
        "explanation": "'숲'의 영어 표기는 'forest'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 9단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"텐트\" (첫 글자: t, 총 4글자)",
        "correctAnswer": "tent",
        "explanation": "'텐트'의 영어 표기는 'tent'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 9단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"머무르다\" (첫 글자: s, 총 4글자)",
        "correctAnswer": "stay",
        "explanation": "'머무르다'의 영어 표기는 'stay'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 9단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"마을\" (첫 글자: v, 총 7글자)",
        "correctAnswer": "village",
        "explanation": "'마을'의 영어 표기는 'village'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 9단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"동물원\" (첫 글자: z, 총 3글자)",
        "correctAnswer": "zoo",
        "explanation": "'동물원'의 영어 표기는 'zoo'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 9단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"햄버거\" (첫 글자: h, 총 9글자)",
        "correctAnswer": "hamburger",
        "explanation": "'햄버거'의 영어 표기는 'hamburger'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 9단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"프로그램\" (첫 글자: p, 총 7글자)",
        "correctAnswer": "program",
        "explanation": "'프로그램'의 영어 표기는 'program'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 9단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"아이 (복수: children)\" (첫 글자: c, 총 5글자)",
        "correctAnswer": "child",
        "explanation": "'아이 (복수: children)'의 영어 표기는 'child'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 9단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"방\" (첫 글자: r, 총 4글자)",
        "correctAnswer": "room",
        "explanation": "'방'의 영어 표기는 'room'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 9단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"어떤, 조금의\" (첫 글자: a, 총 3글자)",
        "correctAnswer": "any",
        "explanation": "'어떤, 조금의'의 영어 표기는 'any'입니다."
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 9단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"청소하다, 깨끗한\" (첫 글자: c, 총 5글자)",
        "correctAnswer": "clean",
        "explanation": "'청소하다, 깨끗한'의 영어 표기는 'clean'입니다."
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 9단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"캠핑하다\" (첫 글자: c, 총 4글자)",
        "correctAnswer": "camp",
        "explanation": "'캠핑하다'의 영어 표기는 'camp'입니다."
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 9단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"방학\" (첫 글자: v, 총 8글자)",
        "correctAnswer": "vacation",
        "explanation": "'방학'의 영어 표기는 'vacation'입니다."
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 9단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"방문하다\" (첫 글자: v, 총 5글자)",
        "correctAnswer": "visit",
        "explanation": "'방문하다'의 영어 표기는 'visit'입니다."
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"너는 무엇을 할 예정이니?\"",
        "chips": [
          "What",
          "are",
          "you",
          "going",
          "to",
          "do?"
        ],
        "correctAnswer": "What are you going to do?",
        "explanation": "'What are you going to do?'은 '너는 무엇을 할 예정이니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"나는 숲으로 캠핑을 갈 거야.\"",
        "chips": [
          "I",
          "am",
          "going",
          "to",
          "go",
          "camping",
          "in",
          "the",
          "forest."
        ],
        "correctAnswer": "I am going to go camping in the forest.",
        "explanation": "'I am going to go camping in the forest.'은 '나는 숲으로 캠핑을 갈 거야.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"우리는 따뜻한 텐트에서 잘 거야.\"",
        "chips": [
          "We",
          "are",
          "going",
          "to",
          "sleep",
          "in",
          "a",
          "warm",
          "tent."
        ],
        "correctAnswer": "We are going to sleep in a warm tent.",
        "explanation": "'We are going to sleep in a warm tent.'은 '우리는 따뜻한 텐트에서 잘 거야.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"나는 특별한 계획이 전혀 없어.\"",
        "chips": [
          "I",
          "do",
          "not",
          "have",
          "any",
          "special",
          "plans."
        ],
        "correctAnswer": "I do not have any special plans.",
        "explanation": "'I do not have any special plans.'은 '나는 특별한 계획이 전혀 없어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"그들은 아이들과 함께 축구를 해.\"",
        "chips": [
          "They",
          "play",
          "soccer",
          "with",
          "the",
          "children."
        ],
        "correctAnswer": "They play soccer with the children.",
        "explanation": "'They play soccer with the children.'은 '그들은 아이들과 함께 축구를 해.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"나는 푸른 숲에서 하이킹하는 것을 좋아해.\"",
        "chips": [
          "I",
          "like",
          "hiking",
          "in",
          "the",
          "green",
          "forest."
        ],
        "correctAnswer": "I like hiking in the green forest.",
        "explanation": "'I like hiking in the green forest.'은 '나는 푸른 숲에서 하이킹하는 것을 좋아해.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"가장 좋아하는 방학 프로그램을 골라주세요.\"",
        "chips": [
          "Choose",
          "your",
          "favorite",
          "holiday",
          "program",
          "please."
        ],
        "correctAnswer": "Choose your favorite holiday program, please.",
        "explanation": "'Choose your favorite holiday program, please.'은 '가장 좋아하는 방학 프로그램을 골라주세요.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"나는 오늘 내 방을 청소할 계획이야.\"",
        "chips": [
          "I",
          "am",
          "going",
          "to",
          "clean",
          "my",
          "room",
          "today."
        ],
        "correctAnswer": "I am going to clean my room today.",
        "explanation": "'I am going to clean my room today.'은 '나는 오늘 내 방을 청소할 계획이야.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"나는 이번 주말에 집에 머무를 거야.\"",
        "chips": [
          "I",
          "am",
          "going",
          "to",
          "stay",
          "home",
          "this",
          "weekend."
        ],
        "correctAnswer": "I am going to stay home this weekend.",
        "explanation": "'I am going to stay home this weekend.'은 '나는 이번 주말에 집에 머무를 거야.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"우리는 아름답고 작은 마을을 방문할 거야.\"",
        "chips": [
          "We",
          "are",
          "going",
          "to",
          "visit",
          "a",
          "beautiful",
          "small",
          "village."
        ],
        "correctAnswer": "We are going to visit a beautiful small village.",
        "explanation": "'We are going to visit a beautiful small village.'은 '우리는 아름답고 작은 마을을 방문할 거야.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 96,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"아이들은 동물원에 방문할 생각에 신이 났어.\"",
        "chips": [
          "The",
          "children",
          "are",
          "excited",
          "to",
          "visit",
          "the",
          "zoo."
        ],
        "correctAnswer": "The children are excited to visit the zoo.",
        "explanation": "'The children are excited to visit the zoo.'은 '아이들은 동물원에 방문할 생각에 신이 났어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 97,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"점심으로 햄버거를 먹고 싶어.\"",
        "chips": [
          "I",
          "want",
          "to",
          "eat",
          "a",
          "hamburger",
          "for",
          "lunch."
        ],
        "correctAnswer": "I want to eat a hamburger for lunch.",
        "explanation": "'I want to eat a hamburger for lunch.'은 '점심으로 햄버거를 먹고 싶어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 98,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"그녀는 내일 아침에 무엇을 할 예정이니?\"",
        "chips": [
          "What",
          "is",
          "she",
          "going",
          "to",
          "do",
          "tomorrow",
          "morning?"
        ],
        "correctAnswer": "What is she going to do tomorrow morning?",
        "explanation": "'What is she going to do tomorrow morning?'은 '그녀는 내일 아침에 무엇을 할 예정이니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 99,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 9단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"그는 제주도를 여행할 계획을 세우고 있어.\"",
        "chips": [
          "He",
          "plans",
          "to",
          "travel",
          "around",
          "Jeju",
          "Island."
        ],
        "correctAnswer": "He plans to travel around Jeju Island.",
        "explanation": "'He plans to travel around Jeju Island.'은 '그는 제주도를 여행할 계획을 세우고 있어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[최종 골든벨 문제] 다음 우리말에 맞도록 주어진 단어 카드를 순서대로 바르게 배열하세요!\n우리말: \"우리의 여름방학은 정말 환상적일 거야.\"",
        "chips": [
          "Our",
          "summer",
          "vacation",
          "is",
          "going",
          "to",
          "be",
          "fantastic."
        ],
        "correctAnswer": "Our summer vacation is going to be fantastic.",
        "explanation": "'Our summer vacation is going to be fantastic.'은 '우리의 여름방학은 정말 환상적일 거야.'을 의미하는 교과서 핵심 문장입니다."
      }
    ]
  },
  "6G_L10": {
    "name": "10단원: How Often Do You Eat Vegetables? (식습관과 생활 빈도 · 건강)",
    "grade": 6,
    "theme": "Frequency of Habits & Healthy Lifestyle",
    "totalQuestions": 100,
    "questions": [
      {
        "id": 1,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Minsoo: How often do you eat vegetables, Minsoo? David: I eat vegetables three times a day. It is a healthy habit.",
        "question": "[듣기 · 10단원] 대화를 듣고, Minsoo의 채소 섭취 빈도는?",
        "options": [
          "하루에 세 번 (three times a day)",
          "일주일에 한 번",
          "한 달에 두 번",
          "거의 먹지 않음"
        ],
        "correctIndex": 0,
        "correctAnswer": "하루에 세 번 (three times a day)",
        "explanation": "교과서 단원 핵심 대화: 'How often do you eat vegetables?'입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kelly: How often do you brush your teeth? Sarah: I brush my teeth twice a day, in the morning and evening.",
        "question": "[듣기 · 10단원] 대화를 듣고, B의 양치질 빈도는?",
        "options": [
          "식사할 때마다",
          "일주일에 두 번",
          "하루에 한 번",
          "하루에 두 번 (twice a day)"
        ],
        "correctIndex": 3,
        "correctAnswer": "하루에 두 번 (twice a day)",
        "explanation": "교과서 어휘: 'twice'와 'tooth(teeth)'입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "David: How often do you exercise? Jisu: I exercise almost every day to stay strong.",
        "question": "[듣기 · 10단원] 대화를 듣고, B의 운동 빈도는?",
        "options": [
          "한 달에 한 번",
          "주말에만 가끔",
          "거의 매일 (almost every day)",
          "전혀 하지 않음"
        ],
        "correctIndex": 2,
        "correctAnswer": "거의 매일 (almost every day)",
        "explanation": "교과서 어휘: 'exercise'와 'almost'입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Sarah: You should drink enough water every day. Kevin: Yes, water is very important for healthy life.",
        "question": "[듣기 · 10단원] 대화를 듣고, A가 권고한 건강 습관은?",
        "options": [
          "잠을 적게 자기",
          "단 음료수를 많이 마시기",
          "운동을 쉬기",
          "매일 충분한 물을 마시기"
        ],
        "correctIndex": 3,
        "correctAnswer": "매일 충분한 물을 마시기",
        "explanation": "교과서 어휘: 'should'와 'enough'입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Jisu: Do you eat fast food often? Emma: No, almost nothing. I love fresh fruits a lot.",
        "question": "[듣기 · 10단원] 대화를 듣고, B의 식습관 특징은?",
        "options": [
          "밥 대신 과자만 먹음",
          "매일 패스트푸드만 먹음",
          "패스트푸드는 거의 먹지 않고 신선한 과일을 좋아함",
          "과일을 전혀 먹지 않음"
        ],
        "correctIndex": 2,
        "correctAnswer": "패스트푸드는 거의 먹지 않고 신선한 과일을 좋아함",
        "explanation": "교과서 어휘: 'nothing'과 'lot'입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kevin: Our club members meet once a week. Tom: That is a great schedule for all of us.",
        "question": "[듣기 · 10단원] 대화를 듣고, 동아리 부원들의 모임 빈도는?",
        "options": [
          "격주에 한 번",
          "매일 방과 후",
          "일주일에 한 번 (once a week)",
          "한 달에 한 번"
        ],
        "correctIndex": 2,
        "correctAnswer": "일주일에 한 번 (once a week)",
        "explanation": "교과서 어휘: 'member'와 'once'입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Emma: How often do you eat vegetables, Minsoo? Hana: I eat vegetables three times a day. It is a healthy habit.",
        "question": "[듣기 · 10단원] 대화를 듣고, Minsoo의 채소 섭취 빈도는?",
        "options": [
          "한 달에 두 번",
          "일주일에 한 번",
          "거의 먹지 않음",
          "하루에 세 번 (three times a day)"
        ],
        "correctIndex": 3,
        "correctAnswer": "하루에 세 번 (three times a day)",
        "explanation": "교과서 단원 핵심 대화: 'How often do you eat vegetables?'입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Tom: How often do you brush your teeth? Brian: I brush my teeth twice a day, in the morning and evening.",
        "question": "[듣기 · 10단원] 대화를 듣고, B의 양치질 빈도는?",
        "options": [
          "일주일에 두 번",
          "하루에 두 번 (twice a day)",
          "하루에 한 번",
          "식사할 때마다"
        ],
        "correctIndex": 1,
        "correctAnswer": "하루에 두 번 (twice a day)",
        "explanation": "교과서 어휘: 'twice'와 'tooth(teeth)'입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Hana: How often do you exercise? Amy: I exercise almost every day to stay strong.",
        "question": "[듣기 · 10단원] 대화를 듣고, B의 운동 빈도는?",
        "options": [
          "전혀 하지 않음",
          "한 달에 한 번",
          "주말에만 가끔",
          "거의 매일 (almost every day)"
        ],
        "correctIndex": 3,
        "correctAnswer": "거의 매일 (almost every day)",
        "explanation": "교과서 어휘: 'exercise'와 'almost'입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Brian: You should drink enough water every day. Paul: Yes, water is very important for healthy life.",
        "question": "[듣기 · 10단원] 대화를 듣고, A가 권고한 건강 습관은?",
        "options": [
          "운동을 쉬기",
          "잠을 적게 자기",
          "단 음료수를 많이 마시기",
          "매일 충분한 물을 마시기"
        ],
        "correctIndex": 3,
        "correctAnswer": "매일 충분한 물을 마시기",
        "explanation": "교과서 어휘: 'should'와 'enough'입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Amy: Do you eat fast food often? Minsoo: No, almost nothing. I love fresh fruits a lot.",
        "question": "[듣기 · 10단원] 대화를 듣고, B의 식습관 특징은?",
        "options": [
          "밥 대신 과자만 먹음",
          "패스트푸드는 거의 먹지 않고 신선한 과일을 좋아함",
          "매일 패스트푸드만 먹음",
          "과일을 전혀 먹지 않음"
        ],
        "correctIndex": 1,
        "correctAnswer": "패스트푸드는 거의 먹지 않고 신선한 과일을 좋아함",
        "explanation": "교과서 어휘: 'nothing'과 'lot'입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Paul: Our club members meet once a week. Kelly: That is a great schedule for all of us.",
        "question": "[듣기 · 10단원] 대화를 듣고, 동아리 부원들의 모임 빈도는?",
        "options": [
          "한 달에 한 번",
          "일주일에 한 번 (once a week)",
          "매일 방과 후",
          "격주에 한 번"
        ],
        "correctIndex": 1,
        "correctAnswer": "일주일에 한 번 (once a week)",
        "explanation": "교과서 어휘: 'member'와 'once'입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: How often do you eat vegetables, Minsoo? David: I eat vegetables three times a day. It is a healthy habit.",
        "question": "[듣기 · 10단원] 대화를 듣고, Minsoo의 채소 섭취 빈도는?",
        "options": [
          "한 달에 두 번",
          "일주일에 한 번",
          "하루에 세 번 (three times a day)",
          "거의 먹지 않음"
        ],
        "correctIndex": 2,
        "correctAnswer": "하루에 세 번 (three times a day)",
        "explanation": "교과서 단원 핵심 대화: 'How often do you eat vegetables?'입니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kelly: How often do you brush your teeth? Sarah: I brush my teeth twice a day, in the morning and evening.",
        "question": "[듣기 · 10단원] 대화를 듣고, B의 양치질 빈도는?",
        "options": [
          "하루에 두 번 (twice a day)",
          "하루에 한 번",
          "일주일에 두 번",
          "식사할 때마다"
        ],
        "correctIndex": 0,
        "correctAnswer": "하루에 두 번 (twice a day)",
        "explanation": "교과서 어휘: 'twice'와 'tooth(teeth)'입니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "David: How often do you exercise? Jisu: I exercise almost every day to stay strong.",
        "question": "[듣기 · 10단원] 대화를 듣고, B의 운동 빈도는?",
        "options": [
          "한 달에 한 번",
          "주말에만 가끔",
          "전혀 하지 않음",
          "거의 매일 (almost every day)"
        ],
        "correctIndex": 3,
        "correctAnswer": "거의 매일 (almost every day)",
        "explanation": "교과서 어휘: 'exercise'와 'almost'입니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Sarah: How often do you eat vegetables? Kevin: I agree with you!",
        "question": "[듣기 · 10단원] 대화에서 Sarah이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "너는 채소를 얼마나 자주 먹니?",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "너는 채소를 얼마나 자주 먹니?",
        "explanation": "'How often do you eat vegetables?'은 '너는 채소를 얼마나 자주 먹니?'을 의미합니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Jisu: I eat vegetables three times a day. Emma: I agree with you!",
        "question": "[듣기 · 10단원] 대화에서 Jisu이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "나는 하루에 세 번 채소를 먹어.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 2,
        "correctAnswer": "나는 하루에 세 번 채소를 먹어.",
        "explanation": "'I eat vegetables three times a day.'은 '나는 하루에 세 번 채소를 먹어.'을 의미합니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kevin: You should exercise every day. Tom: I agree with you!",
        "question": "[듣기 · 10단원] 대화에서 Kevin이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어.",
          "너는 매일 운동을 해야 해.",
          "다음 기회에 다시 이야기하자."
        ],
        "correctIndex": 2,
        "correctAnswer": "너는 매일 운동을 해야 해.",
        "explanation": "'You should exercise every day.'은 '너는 매일 운동을 해야 해.'을 의미합니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Emma: I brush my teeth twice a day. Hana: I agree with you!",
        "question": "[듣기 · 10단원] 대화에서 Emma이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 하루에 두 번 이를 닦아.",
          "나는 무슨 말인지 잘 모르겠어.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아."
        ],
        "correctIndex": 0,
        "correctAnswer": "나는 하루에 두 번 이를 닦아.",
        "explanation": "'I brush my teeth twice a day.'은 '나는 하루에 두 번 이를 닦아.'을 의미합니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Tom: Drinking enough water is a healthy habit. Brian: I agree with you!",
        "question": "[듣기 · 10단원] 대화에서 Tom이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "충분한 물을 마시는 것은 건강한 습관이야.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "충분한 물을 마시는 것은 건강한 습관이야.",
        "explanation": "'Drinking enough water is a healthy habit.'은 '충분한 물을 마시는 것은 건강한 습관이야.'을 의미합니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Hana: How often do you clean your room? Amy: I agree with you!",
        "question": "[듣기 · 10단원] 대화에서 Hana이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "너는 얼마나 자주 방을 청소하니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "너는 얼마나 자주 방을 청소하니?",
        "explanation": "'How often do you clean your room?'은 '너는 얼마나 자주 방을 청소하니?'을 의미합니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Brian: I clean my room once a week on Saturday. Paul: I agree with you!",
        "question": "[듣기 · 10단원] 대화에서 Brian이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "나는 토요일마다 일주일에 한 번 방 청소를 해.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 2,
        "correctAnswer": "나는 토요일마다 일주일에 한 번 방 청소를 해.",
        "explanation": "'I clean my room once a week on Saturday.'은 '나는 토요일마다 일주일에 한 번 방 청소를 해.'을 의미합니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Amy: Good health is the most precious thing in life. Minsoo: I agree with you!",
        "question": "[듣기 · 10단원] 대화에서 Amy이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아닌 것 같아.",
          "좋은 건강은 인생에서 가장 소중한 것이야.",
          "나는 무슨 말인지 잘 모르겠어.",
          "다음 기회에 다시 이야기하자."
        ],
        "correctIndex": 1,
        "correctAnswer": "좋은 건강은 인생에서 가장 소중한 것이야.",
        "explanation": "'Good health is the most precious thing in life.'은 '좋은 건강은 인생에서 가장 소중한 것이야.'을 의미합니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Paul: All our club members practice together. Kelly: I agree with you!",
        "question": "[듣기 · 10단원] 대화에서 Paul이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "우리 동아리 회원들은 모두 함께 연습해.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "우리 동아리 회원들은 모두 함께 연습해.",
        "explanation": "'All our club members practice together.'은 '우리 동아리 회원들은 모두 함께 연습해.'을 의미합니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: He knows almost nothing about fast food. David: I agree with you!",
        "question": "[듣기 · 10단원] 대화에서 Minsoo이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그는 패스트푸드에 대해 거의 아는 것이 없어.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어.",
          "다음 기회에 다시 이야기하자."
        ],
        "correctIndex": 0,
        "correctAnswer": "그는 패스트푸드에 대해 거의 아는 것이 없어.",
        "explanation": "'He knows almost nothing about fast food.'은 '그는 패스트푸드에 대해 거의 아는 것이 없어.'을 의미합니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kelly: What does 'tooth' mean in Korean? Sarah: It means '치아, 이 (복수: teeth)'.",
        "question": "[듣기 · 10단원] 대화에서 언급된 영어 단어 'tooth'의 우리말 뜻으로 바른 것은?",
        "options": [
          "습관",
          "건강한",
          "치아, 이 (복수: teeth)",
          "자주, 종종"
        ],
        "correctIndex": 2,
        "correctAnswer": "치아, 이 (복수: teeth)",
        "explanation": "'tooth'은 '치아, 이 (복수: teeth)'를 뜻합니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "David: What does 'life' mean in Korean? Jisu: It means '삶, 생명'.",
        "question": "[듣기 · 10단원] 대화에서 언급된 영어 단어 'life'의 우리말 뜻으로 바른 것은?",
        "options": [
          "건강한",
          "자주, 종종",
          "습관",
          "삶, 생명"
        ],
        "correctIndex": 3,
        "correctAnswer": "삶, 생명",
        "explanation": "'life'은 '삶, 생명'를 뜻합니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Sarah: What does 'lot' mean in Korean? Kevin: It means '많음 (a lot: 많이)'.",
        "question": "[듣기 · 10단원] 대화에서 언급된 영어 단어 'lot'의 우리말 뜻으로 바른 것은?",
        "options": [
          "습관",
          "건강한",
          "자주, 종종",
          "많음 (a lot: 많이)"
        ],
        "correctIndex": 3,
        "correctAnswer": "많음 (a lot: 많이)",
        "explanation": "'lot'은 '많음 (a lot: 많이)'를 뜻합니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Jisu: What does 'member' mean in Korean? Emma: It means '회원, 부원'.",
        "question": "[듣기 · 10단원] 대화에서 언급된 영어 단어 'member'의 우리말 뜻으로 바른 것은?",
        "options": [
          "회원, 부원",
          "자주, 종종",
          "습관",
          "건강한"
        ],
        "correctIndex": 0,
        "correctAnswer": "회원, 부원",
        "explanation": "'member'은 '회원, 부원'를 뜻합니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kevin: What does 'nothing' mean in Korean? Tom: It means '아무것도 없음'.",
        "question": "[듣기 · 10단원] 대화에서 언급된 영어 단어 'nothing'의 우리말 뜻으로 바른 것은?",
        "options": [
          "아무것도 없음",
          "습관",
          "자주, 종종",
          "건강한"
        ],
        "correctIndex": 0,
        "correctAnswer": "아무것도 없음",
        "explanation": "'nothing'은 '아무것도 없음'를 뜻합니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Emma: What does 'often' mean in Korean? Hana: It means '자주, 종종'.",
        "question": "[듣기 · 10단원] 대화에서 언급된 영어 단어 'often'의 우리말 뜻으로 바른 것은?",
        "options": [
          "습관",
          "자주, 종종",
          "운동하다, 운동",
          "건강한"
        ],
        "correctIndex": 1,
        "correctAnswer": "자주, 종종",
        "explanation": "'often'은 '자주, 종종'를 뜻합니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Tom: What does 'healthy' mean in Korean? Brian: It means '건강한'.",
        "question": "[듣기 · 10단원] 대화에서 언급된 영어 단어 'healthy'의 우리말 뜻으로 바른 것은?",
        "options": [
          "운동하다, 운동",
          "습관",
          "자주, 종종",
          "건강한"
        ],
        "correctIndex": 3,
        "correctAnswer": "건강한",
        "explanation": "'healthy'은 '건강한'를 뜻합니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Hana: What does 'habit' mean in Korean? Amy: It means '습관'.",
        "question": "[듣기 · 10단원] 대화에서 언급된 영어 단어 'habit'의 우리말 뜻으로 바른 것은?",
        "options": [
          "습관",
          "운동하다, 운동",
          "자주, 종종",
          "건강한"
        ],
        "correctIndex": 0,
        "correctAnswer": "습관",
        "explanation": "'habit'은 '습관'를 뜻합니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Brian: What does 'exercise' mean in Korean? Paul: It means '운동하다, 운동'.",
        "question": "[듣기 · 10단원] 대화에서 언급된 영어 단어 'exercise'의 우리말 뜻으로 바른 것은?",
        "options": [
          "자주, 종종",
          "건강한",
          "운동하다, 운동",
          "습관"
        ],
        "correctIndex": 2,
        "correctAnswer": "운동하다, 운동",
        "explanation": "'exercise'은 '운동하다, 운동'를 뜻합니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Amy: What does 'vegetables' mean in Korean? Minsoo: It means '채소들'.",
        "question": "[듣기 · 10단원] 대화에서 언급된 영어 단어 'vegetables'의 우리말 뜻으로 바른 것은?",
        "options": [
          "습관",
          "건강한",
          "자주, 종종",
          "채소들"
        ],
        "correctIndex": 3,
        "correctAnswer": "채소들",
        "explanation": "'vegetables'은 '채소들'를 뜻합니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kelly. I brush my teeth twice a day. I am very happy and excited about our English class today.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kelly. I brush my teeth twice a day. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "길을 잃어서 병원을 찾고 있다.",
          "나는 하루에 두 번 이를 닦아."
        ],
        "correctIndex": 3,
        "correctAnswer": "나는 하루에 두 번 이를 닦아.",
        "explanation": "'I brush my teeth twice a day.'(나는 하루에 두 번 이를 닦아.)이 핵심 문장입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is David. Drinking enough water is a healthy habit. I am very happy and excited about our English class today.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is David. Drinking enough water is a healthy habit. I am very happy and excited about our English class today.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "충분한 물을 마시는 것은 건강한 습관이야.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "충분한 물을 마시는 것은 건강한 습관이야.",
        "explanation": "'Drinking enough water is a healthy habit.'(충분한 물을 마시는 것은 건강한 습관이야.)이 핵심 문장입니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Sarah. How often do you clean your room? I am very happy and excited about our English class today.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Sarah. How often do you clean your room? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "너는 얼마나 자주 방을 청소하니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "너는 얼마나 자주 방을 청소하니?",
        "explanation": "'How often do you clean your room?'(너는 얼마나 자주 방을 청소하니?)이 핵심 문장입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Jisu. I clean my room once a week on Saturday. I am very happy and excited about our English class today.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Jisu. I clean my room once a week on Saturday. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Jisu이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "숙제가 너무 어려워서 고민이다.",
          "나는 토요일마다 일주일에 한 번 방 청소를 해.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 2,
        "correctAnswer": "나는 토요일마다 일주일에 한 번 방 청소를 해.",
        "explanation": "'I clean my room once a week on Saturday.'(나는 토요일마다 일주일에 한 번 방 청소를 해.)이 핵심 문장입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kevin. Good health is the most precious thing in life. I am very happy and excited about our English class today.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kevin. Good health is the most precious thing in life. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kevin이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "좋은 건강은 인생에서 가장 소중한 것이야.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "좋은 건강은 인생에서 가장 소중한 것이야.",
        "explanation": "'Good health is the most precious thing in life.'(좋은 건강은 인생에서 가장 소중한 것이야.)이 핵심 문장입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Emma. All our club members practice together. I am very happy and excited about our English class today.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Emma. All our club members practice together. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Emma이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "우리 동아리 회원들은 모두 함께 연습해.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다.",
          "숙제가 너무 어려워서 고민이다."
        ],
        "correctIndex": 0,
        "correctAnswer": "우리 동아리 회원들은 모두 함께 연습해.",
        "explanation": "'All our club members practice together.'(우리 동아리 회원들은 모두 함께 연습해.)이 핵심 문장입니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Tom. He knows almost nothing about fast food. I am very happy and excited about our English class today.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Tom. He knows almost nothing about fast food. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Tom이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "그는 패스트푸드에 대해 거의 아는 것이 없어."
        ],
        "correctIndex": 3,
        "correctAnswer": "그는 패스트푸드에 대해 거의 아는 것이 없어.",
        "explanation": "'He knows almost nothing about fast food.'(그는 패스트푸드에 대해 거의 아는 것이 없어.)이 핵심 문장입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Hana. I eat fresh apples and carrots a lot. I am very happy and excited about our English class today.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Hana. I eat fresh apples and carrots a lot. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Hana이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "나는 신선한 사과와 당근을 많이 먹어."
        ],
        "correctIndex": 3,
        "correctAnswer": "나는 신선한 사과와 당근을 많이 먹어.",
        "explanation": "'I eat fresh apples and carrots a lot.'(나는 신선한 사과와 당근을 많이 먹어.)이 핵심 문장입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Brian. You should get enough sleep at night. I am very happy and excited about our English class today.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Brian. You should get enough sleep at night. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Brian이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "너는 밤에 충분한 수면을 취해야 해.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 2,
        "correctAnswer": "너는 밤에 충분한 수면을 취해야 해.",
        "explanation": "'You should get enough sleep at night.'(너는 밤에 충분한 수면을 취해야 해.)이 핵심 문장입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Amy. How often do you go swimming? I am very happy and excited about our English class today.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Amy. How often do you go swimming? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Amy이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다.",
          "너는 얼마나 자주 수영하러 가니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "너는 얼마나 자주 수영하러 가니?",
        "explanation": "'How often do you go swimming?'(너는 얼마나 자주 수영하러 가니?)이 핵심 문장입니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Paul. I go swimming twice a week with my dad. I am very happy and excited about our English class today.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Paul. I go swimming twice a week with my dad. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Paul이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "나는 아빠와 일주일에 두 번 수영을 하러 가."
        ],
        "correctIndex": 3,
        "correctAnswer": "나는 아빠와 일주일에 두 번 수영을 하러 가.",
        "explanation": "'I go swimming twice a week with my dad.'(나는 아빠와 일주일에 두 번 수영을 하러 가.)이 핵심 문장입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Minsoo. Small daily habits can change your whole life. I am very happy and excited about our English class today.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Minsoo. Small daily habits can change your whole life. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "매일의 작은 습관들이 너의 인생 전체를 바꿀 수 있어.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "매일의 작은 습관들이 너의 인생 전체를 바꿀 수 있어.",
        "explanation": "'Small daily habits can change your whole life.'(매일의 작은 습관들이 너의 인생 전체를 바꿀 수 있어.)이 핵심 문장입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kelly. How often do you eat vegetables? I am very happy and excited about our English class today.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kelly. How often do you eat vegetables? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "길을 잃어서 병원을 찾고 있다.",
          "너는 채소를 얼마나 자주 먹니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "너는 채소를 얼마나 자주 먹니?",
        "explanation": "'How often do you eat vegetables?'(너는 채소를 얼마나 자주 먹니?)이 핵심 문장입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is David. I eat vegetables three times a day. I am very happy and excited about our English class today.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is David. I eat vegetables three times a day. I am very happy and excited about our English class today.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "나는 하루에 세 번 채소를 먹어.",
          "길을 잃어서 병원을 찾고 있다.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 0,
        "correctAnswer": "나는 하루에 세 번 채소를 먹어.",
        "explanation": "'I eat vegetables three times a day.'(나는 하루에 세 번 채소를 먹어.)이 핵심 문장입니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Sarah. You should exercise every day. I am very happy and excited about our English class today.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Sarah. You should exercise every day. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "너는 매일 운동을 해야 해.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "너는 매일 운동을 해야 해.",
        "explanation": "'You should exercise every day.'(너는 매일 운동을 해야 해.)이 핵심 문장입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: You should drink enough water every day. And the response was: \"Yes, water is very important for healthy life.\"",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: You should drink enough water every day. And the response was: \"Yes, water is very important for healthy life.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: A가 권고한 건강 습관은?",
        "options": [
          "단 음료수를 많이 마시기",
          "운동을 쉬기",
          "매일 충분한 물을 마시기",
          "잠을 적게 자기"
        ],
        "correctIndex": 2,
        "correctAnswer": "매일 충분한 물을 마시기",
        "explanation": "교과서 어휘: 'should'와 'enough'입니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Do you eat fast food often? And the response was: \"No, almost nothing. I love fresh fruits a lot.\"",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Do you eat fast food often? And the response was: \"No, almost nothing. I love fresh fruits a lot.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: B의 식습관 특징은?",
        "options": [
          "매일 패스트푸드만 먹음",
          "밥 대신 과자만 먹음",
          "패스트푸드는 거의 먹지 않고 신선한 과일을 좋아함",
          "과일을 전혀 먹지 않음"
        ],
        "correctIndex": 2,
        "correctAnswer": "패스트푸드는 거의 먹지 않고 신선한 과일을 좋아함",
        "explanation": "교과서 어휘: 'nothing'과 'lot'입니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Our club members meet once a week. And the response was: \"That is a great schedule for all of us.\"",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Our club members meet once a week. And the response was: \"That is a great schedule for all of us.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 동아리 부원들의 모임 빈도는?",
        "options": [
          "격주에 한 번",
          "한 달에 한 번",
          "일주일에 한 번 (once a week)",
          "매일 방과 후"
        ],
        "correctIndex": 2,
        "correctAnswer": "일주일에 한 번 (once a week)",
        "explanation": "교과서 어휘: 'member'와 'once'입니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: How often do you eat vegetables, Minsoo? And the response was: \"I eat vegetables three times a day. It is a healthy habit.\"",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: How often do you eat vegetables, Minsoo? And the response was: \"I eat vegetables three times a day. It is a healthy habit.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: Minsoo의 채소 섭취 빈도는?",
        "options": [
          "한 달에 두 번",
          "거의 먹지 않음",
          "일주일에 한 번",
          "하루에 세 번 (three times a day)"
        ],
        "correctIndex": 3,
        "correctAnswer": "하루에 세 번 (three times a day)",
        "explanation": "교과서 단원 핵심 대화: 'How often do you eat vegetables?'입니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: How often do you brush your teeth? And the response was: \"I brush my teeth twice a day, in the morning and evening.\"",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: How often do you brush your teeth? And the response was: \"I brush my teeth twice a day, in the morning and evening.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: B의 양치질 빈도는?",
        "options": [
          "식사할 때마다",
          "일주일에 두 번",
          "하루에 한 번",
          "하루에 두 번 (twice a day)"
        ],
        "correctIndex": 3,
        "correctAnswer": "하루에 두 번 (twice a day)",
        "explanation": "교과서 어휘: 'twice'와 'tooth(teeth)'입니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: How often do you exercise? And the response was: \"I exercise almost every day to stay strong.\"",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: How often do you exercise? And the response was: \"I exercise almost every day to stay strong.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: B의 운동 빈도는?",
        "options": [
          "전혀 하지 않음",
          "거의 매일 (almost every day)",
          "한 달에 한 번",
          "주말에만 가끔"
        ],
        "correctIndex": 1,
        "correctAnswer": "거의 매일 (almost every day)",
        "explanation": "교과서 어휘: 'exercise'와 'almost'입니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: You should drink enough water every day. And the response was: \"Yes, water is very important for healthy life.\"",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: You should drink enough water every day. And the response was: \"Yes, water is very important for healthy life.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: A가 권고한 건강 습관은?",
        "options": [
          "매일 충분한 물을 마시기",
          "단 음료수를 많이 마시기",
          "잠을 적게 자기",
          "운동을 쉬기"
        ],
        "correctIndex": 0,
        "correctAnswer": "매일 충분한 물을 마시기",
        "explanation": "교과서 어휘: 'should'와 'enough'입니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Do you eat fast food often? And the response was: \"No, almost nothing. I love fresh fruits a lot.\"",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Do you eat fast food often? And the response was: \"No, almost nothing. I love fresh fruits a lot.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: B의 식습관 특징은?",
        "options": [
          "밥 대신 과자만 먹음",
          "과일을 전혀 먹지 않음",
          "매일 패스트푸드만 먹음",
          "패스트푸드는 거의 먹지 않고 신선한 과일을 좋아함"
        ],
        "correctIndex": 3,
        "correctAnswer": "패스트푸드는 거의 먹지 않고 신선한 과일을 좋아함",
        "explanation": "교과서 어휘: 'nothing'과 'lot'입니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Our club members meet once a week. And the response was: \"That is a great schedule for all of us.\"",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Our club members meet once a week. And the response was: \"That is a great schedule for all of us.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 동아리 부원들의 모임 빈도는?",
        "options": [
          "격주에 한 번",
          "매일 방과 후",
          "한 달에 한 번",
          "일주일에 한 번 (once a week)"
        ],
        "correctIndex": 3,
        "correctAnswer": "일주일에 한 번 (once a week)",
        "explanation": "교과서 어휘: 'member'와 'once'입니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: How often do you eat vegetables, Minsoo? And the response was: \"I eat vegetables three times a day. It is a healthy habit.\"",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: How often do you eat vegetables, Minsoo? And the response was: \"I eat vegetables three times a day. It is a healthy habit.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: Minsoo의 채소 섭취 빈도는?",
        "options": [
          "거의 먹지 않음",
          "한 달에 두 번",
          "일주일에 한 번",
          "하루에 세 번 (three times a day)"
        ],
        "correctIndex": 3,
        "correctAnswer": "하루에 세 번 (three times a day)",
        "explanation": "교과서 단원 핵심 대화: 'How often do you eat vegetables?'입니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'lot' is a new word in 10단원. In Korean, it means '많음 (a lot: 많이)'.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'lot' is a new word in 10단원. In Korean, it means '많음 (a lot: 많이)'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'lot'의 뜻은?",
        "options": [
          "많음 (a lot: 많이)",
          "자주, 종종",
          "습관",
          "건강한"
        ],
        "correctIndex": 0,
        "correctAnswer": "많음 (a lot: 많이)",
        "explanation": "'lot'은 '많음 (a lot: 많이)'입니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'member' is a new word in 10단원. In Korean, it means '회원, 부원'.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'member' is a new word in 10단원. In Korean, it means '회원, 부원'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'member'의 뜻은?",
        "options": [
          "습관",
          "건강한",
          "자주, 종종",
          "회원, 부원"
        ],
        "correctIndex": 3,
        "correctAnswer": "회원, 부원",
        "explanation": "'member'은 '회원, 부원'입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'nothing' is a new word in 10단원. In Korean, it means '아무것도 없음'.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'nothing' is a new word in 10단원. In Korean, it means '아무것도 없음'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'nothing'의 뜻은?",
        "options": [
          "습관",
          "자주, 종종",
          "아무것도 없음",
          "건강한"
        ],
        "correctIndex": 2,
        "correctAnswer": "아무것도 없음",
        "explanation": "'nothing'은 '아무것도 없음'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'often' is a new word in 10단원. In Korean, it means '자주, 종종'.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'often' is a new word in 10단원. In Korean, it means '자주, 종종'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'often'의 뜻은?",
        "options": [
          "습관",
          "건강한",
          "자주, 종종",
          "운동하다, 운동"
        ],
        "correctIndex": 2,
        "correctAnswer": "자주, 종종",
        "explanation": "'often'은 '자주, 종종'입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'healthy' is a new word in 10단원. In Korean, it means '건강한'.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'healthy' is a new word in 10단원. In Korean, it means '건강한'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'healthy'의 뜻은?",
        "options": [
          "운동하다, 운동",
          "건강한",
          "자주, 종종",
          "습관"
        ],
        "correctIndex": 1,
        "correctAnswer": "건강한",
        "explanation": "'healthy'은 '건강한'입니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'habit' is a new word in 10단원. In Korean, it means '습관'.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'habit' is a new word in 10단원. In Korean, it means '습관'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'habit'의 뜻은?",
        "options": [
          "습관",
          "자주, 종종",
          "건강한",
          "운동하다, 운동"
        ],
        "correctIndex": 0,
        "correctAnswer": "습관",
        "explanation": "'habit'은 '습관'입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'exercise' is a new word in 10단원. In Korean, it means '운동하다, 운동'.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'exercise' is a new word in 10단원. In Korean, it means '운동하다, 운동'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'exercise'의 뜻은?",
        "options": [
          "습관",
          "자주, 종종",
          "건강한",
          "운동하다, 운동"
        ],
        "correctIndex": 3,
        "correctAnswer": "운동하다, 운동",
        "explanation": "'exercise'은 '운동하다, 운동'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'vegetables' is a new word in 10단원. In Korean, it means '채소들'.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'vegetables' is a new word in 10단원. In Korean, it means '채소들'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'vegetables'의 뜻은?",
        "options": [
          "건강한",
          "자주, 종종",
          "채소들",
          "습관"
        ],
        "correctIndex": 2,
        "correctAnswer": "채소들",
        "explanation": "'vegetables'은 '채소들'입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'once' is a new word in 10단원. In Korean, it means '한 번'.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'once' is a new word in 10단원. In Korean, it means '한 번'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'once'의 뜻은?",
        "options": [
          "한 번",
          "자주, 종종",
          "건강한",
          "습관"
        ],
        "correctIndex": 0,
        "correctAnswer": "한 번",
        "explanation": "'once'은 '한 번'입니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'twice' is a new word in 10단원. In Korean, it means '두 번'.",
        "question": "[읽기 · 10단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'twice' is a new word in 10단원. In Korean, it means '두 번'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'twice'의 뜻은?",
        "options": [
          "자주, 종종",
          "두 번",
          "건강한",
          "습관"
        ],
        "correctIndex": 1,
        "correctAnswer": "두 번",
        "explanation": "'twice'은 '두 번'입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 10단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"자주, 종종\" (첫 글자: o, 총 5글자)",
        "correctAnswer": "often",
        "explanation": "'자주, 종종'의 영어 표기는 'often'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 10단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"건강한\" (첫 글자: h, 총 7글자)",
        "correctAnswer": "healthy",
        "explanation": "'건강한'의 영어 표기는 'healthy'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 10단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"습관\" (첫 글자: h, 총 5글자)",
        "correctAnswer": "habit",
        "explanation": "'습관'의 영어 표기는 'habit'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 10단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"운동하다, 운동\" (첫 글자: e, 총 8글자)",
        "correctAnswer": "exercise",
        "explanation": "'운동하다, 운동'의 영어 표기는 'exercise'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 10단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"채소들\" (첫 글자: v, 총 10글자)",
        "correctAnswer": "vegetables",
        "explanation": "'채소들'의 영어 표기는 'vegetables'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 10단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"한 번\" (첫 글자: o, 총 4글자)",
        "correctAnswer": "once",
        "explanation": "'한 번'의 영어 표기는 'once'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 10단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"두 번\" (첫 글자: t, 총 5글자)",
        "correctAnswer": "twice",
        "explanation": "'두 번'의 영어 표기는 'twice'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 10단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"거의\" (첫 글자: a, 총 6글자)",
        "correctAnswer": "almost",
        "explanation": "'거의'의 영어 표기는 'almost'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 10단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"충분한\" (첫 글자: e, 총 6글자)",
        "correctAnswer": "enough",
        "explanation": "'충분한'의 영어 표기는 'enough'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 10단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"~해야 한다\" (첫 글자: s, 총 6글자)",
        "correctAnswer": "should",
        "explanation": "'~해야 한다'의 영어 표기는 'should'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 10단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"치아, 이 (복수: teeth)\" (첫 글자: t, 총 5글자)",
        "correctAnswer": "tooth",
        "explanation": "'치아, 이 (복수: teeth)'의 영어 표기는 'tooth'입니다."
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 10단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"삶, 생명\" (첫 글자: l, 총 4글자)",
        "correctAnswer": "life",
        "explanation": "'삶, 생명'의 영어 표기는 'life'입니다."
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 10단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"많음 (a lot: 많이)\" (첫 글자: l, 총 3글자)",
        "correctAnswer": "lot",
        "explanation": "'많음 (a lot: 많이)'의 영어 표기는 'lot'입니다."
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 10단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"회원, 부원\" (첫 글자: m, 총 6글자)",
        "correctAnswer": "member",
        "explanation": "'회원, 부원'의 영어 표기는 'member'입니다."
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 10단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"아무것도 없음\" (첫 글자: n, 총 7글자)",
        "correctAnswer": "nothing",
        "explanation": "'아무것도 없음'의 영어 표기는 'nothing'입니다."
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"너는 채소를 얼마나 자주 먹니?\"",
        "chips": [
          "How",
          "often",
          "do",
          "you",
          "eat",
          "vegetables?"
        ],
        "correctAnswer": "How often do you eat vegetables?",
        "explanation": "'How often do you eat vegetables?'은 '너는 채소를 얼마나 자주 먹니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"나는 하루에 세 번 채소를 먹어.\"",
        "chips": [
          "I",
          "eat",
          "vegetables",
          "three",
          "times",
          "a",
          "day."
        ],
        "correctAnswer": "I eat vegetables three times a day.",
        "explanation": "'I eat vegetables three times a day.'은 '나는 하루에 세 번 채소를 먹어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"너는 매일 운동을 해야 해.\"",
        "chips": [
          "You",
          "should",
          "exercise",
          "every",
          "day."
        ],
        "correctAnswer": "You should exercise every day.",
        "explanation": "'You should exercise every day.'은 '너는 매일 운동을 해야 해.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"나는 하루에 두 번 이를 닦아.\"",
        "chips": [
          "I",
          "brush",
          "my",
          "teeth",
          "twice",
          "a",
          "day."
        ],
        "correctAnswer": "I brush my teeth twice a day.",
        "explanation": "'I brush my teeth twice a day.'은 '나는 하루에 두 번 이를 닦아.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"충분한 물을 마시는 것은 건강한 습관이야.\"",
        "chips": [
          "Drinking",
          "enough",
          "water",
          "is",
          "a",
          "healthy",
          "habit."
        ],
        "correctAnswer": "Drinking enough water is a healthy habit.",
        "explanation": "'Drinking enough water is a healthy habit.'은 '충분한 물을 마시는 것은 건강한 습관이야.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"너는 얼마나 자주 방을 청소하니?\"",
        "chips": [
          "How",
          "often",
          "do",
          "you",
          "clean",
          "your",
          "room?"
        ],
        "correctAnswer": "How often do you clean your room?",
        "explanation": "'How often do you clean your room?'은 '너는 얼마나 자주 방을 청소하니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"나는 토요일마다 일주일에 한 번 방 청소를 해.\"",
        "chips": [
          "I",
          "clean",
          "my",
          "room",
          "once",
          "a",
          "week",
          "on",
          "Saturday."
        ],
        "correctAnswer": "I clean my room once a week on Saturday.",
        "explanation": "'I clean my room once a week on Saturday.'은 '나는 토요일마다 일주일에 한 번 방 청소를 해.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"좋은 건강은 인생에서 가장 소중한 것이야.\"",
        "chips": [
          "Good",
          "health",
          "is",
          "the",
          "most",
          "precious",
          "thing",
          "in",
          "life."
        ],
        "correctAnswer": "Good health is the most precious thing in life.",
        "explanation": "'Good health is the most precious thing in life.'은 '좋은 건강은 인생에서 가장 소중한 것이야.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"우리 동아리 회원들은 모두 함께 연습해.\"",
        "chips": [
          "All",
          "our",
          "club",
          "members",
          "practice",
          "together."
        ],
        "correctAnswer": "All our club members practice together.",
        "explanation": "'All our club members practice together.'은 '우리 동아리 회원들은 모두 함께 연습해.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"그는 패스트푸드에 대해 거의 아는 것이 없어.\"",
        "chips": [
          "He",
          "knows",
          "almost",
          "nothing",
          "about",
          "fast",
          "food."
        ],
        "correctAnswer": "He knows almost nothing about fast food.",
        "explanation": "'He knows almost nothing about fast food.'은 '그는 패스트푸드에 대해 거의 아는 것이 없어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 96,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"나는 신선한 사과와 당근을 많이 먹어.\"",
        "chips": [
          "I",
          "eat",
          "fresh",
          "apples",
          "and",
          "carrots",
          "a",
          "lot."
        ],
        "correctAnswer": "I eat fresh apples and carrots a lot.",
        "explanation": "'I eat fresh apples and carrots a lot.'은 '나는 신선한 사과와 당근을 많이 먹어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 97,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"너는 밤에 충분한 수면을 취해야 해.\"",
        "chips": [
          "You",
          "should",
          "get",
          "enough",
          "sleep",
          "at",
          "night."
        ],
        "correctAnswer": "You should get enough sleep at night.",
        "explanation": "'You should get enough sleep at night.'은 '너는 밤에 충분한 수면을 취해야 해.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 98,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"너는 얼마나 자주 수영하러 가니?\"",
        "chips": [
          "How",
          "often",
          "do",
          "you",
          "go",
          "swimming?"
        ],
        "correctAnswer": "How often do you go swimming?",
        "explanation": "'How often do you go swimming?'은 '너는 얼마나 자주 수영하러 가니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 99,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 10단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"나는 아빠와 일주일에 두 번 수영을 하러 가.\"",
        "chips": [
          "I",
          "go",
          "swimming",
          "twice",
          "a",
          "week",
          "with",
          "my",
          "dad."
        ],
        "correctAnswer": "I go swimming twice a week with my dad.",
        "explanation": "'I go swimming twice a week with my dad.'은 '나는 아빠와 일주일에 두 번 수영을 하러 가.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[최종 골든벨 문제] 다음 우리말에 맞도록 주어진 단어 카드를 순서대로 바르게 배열하세요!\n우리말: \"매일의 작은 습관들이 너의 인생 전체를 바꿀 수 있어.\"",
        "chips": [
          "Small",
          "daily",
          "habits",
          "can",
          "change",
          "your",
          "whole",
          "life."
        ],
        "correctAnswer": "Small daily habits can change your whole life.",
        "explanation": "'Small daily habits can change your whole life.'은 '매일의 작은 습관들이 너의 인생 전체를 바꿀 수 있어.'을 의미하는 교과서 핵심 문장입니다."
      }
    ]
  },
  "6G_L11": {
    "name": "11단원: Do You Know Anything About Tuho? (전통 놀이와 세계 문화)",
    "grade": 6,
    "theme": "Traditional Games & World Culture",
    "totalQuestions": 100,
    "questions": [
      {
        "id": 1,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Do you know anything about Tuho? David: Yes, it is a traditional Korean game of throwing arrows into a pot.",
        "question": "[듣기 · 11단원] 대화를 듣고, Tuho(투호) 놀이에 대한 올바른 설명은?",
        "options": [
          "줄을 꼬아 넘는 놀이",
          "돌을 던져 탑을 쓰러뜨리는 놀이",
          "말을 타고 달리는 경기",
          "화살을 항아리 안에 던져 넣는 한국의 전통 놀이"
        ],
        "correctIndex": 3,
        "correctAnswer": "화살을 항아리 안에 던져 넣는 한국의 전통 놀이",
        "explanation": "교과서 단원명 및 핵심 표현: 'throwing arrows into a pot'입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kelly: Have you ever thrown a boomerang into the air? Sarah: Yes, an Australian boomerang comes back when you throw it.",
        "question": "[듣기 · 11단원] 대화를 듣고, 부메랑(boomerang)의 특징으로 알맞은 것은?",
        "options": [
          "소리를 내며 폭발한다",
          "물속에 가라앉는다",
          "땅 위로 굴러간다",
          "공중에 던지면 다시 되돌아온다"
        ],
        "correctIndex": 3,
        "correctAnswer": "공중에 던지면 다시 되돌아온다",
        "explanation": "교과서 어휘: 'boomerang', 'air', 'into'입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "David: Can you hit the goal in Tuho? Jisu: Yes, if you throw the stick clever and straight, it hits the jar.",
        "question": "[듣기 · 11단원] 대화를 듣고, 투호에서 성공하기 위한 비결은?",
        "options": [
          "똑똑하고 곧게 화살 막대를 던져 항아리에 넣기",
          "힘껏 바닥으로 내리치기",
          "눈을 감고 아무 데나 던지기",
          "친구의 화살을 빼앗기"
        ],
        "correctIndex": 0,
        "correctAnswer": "똑똑하고 곧게 화살 막대를 던져 항아리에 넣기",
        "explanation": "교과서 어휘: 'clever', 'hit', 'into'입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Sarah: Do you know what a sari is? Kevin: Yes, it is a traditional beautiful dress worn in India.",
        "question": "[듣기 · 11단원] 대화를 듣고, 사리(sari)에 대한 설명으로 알맞은 것은?",
        "options": [
          "인도의 아름다운 전통 의상",
          "한국의 전통 신발",
          "호주의 목조 악기",
          "아프리카의 북"
        ],
        "correctIndex": 0,
        "correctAnswer": "인도의 아름다운 전통 의상",
        "explanation": "교과서 어휘: 'sari'와 문화 탐구 내용입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Jisu: Let's play Yutnori together on Chuseok! Emma: Great! Traditional games are very exciting.",
        "question": "[듣기 · 11단원] 대화를 듣고, 두 사람이 추석에 함께 하기로 한 것은?",
        "options": [
          "영화 관람",
          "컴퓨터 게임",
          "쇼핑",
          "윷놀이 (전통 놀이)"
        ],
        "correctIndex": 3,
        "correctAnswer": "윷놀이 (전통 놀이)",
        "explanation": "한국의 전통 놀이 문화 대화입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kevin: The clever boy threw the stick into the jar ten times. Tom: Amazing! He won the game.",
        "question": "[듣기 · 11단원] 대화를 듣고, 소년이 투호 놀이에서 성공한 횟수는?",
        "options": [
          "1번",
          "10번",
          "5번",
          "3번"
        ],
        "correctIndex": 1,
        "correctAnswer": "10번",
        "explanation": "'ten times'는 10번입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Emma: Do you know anything about Tuho? Hana: Yes, it is a traditional Korean game of throwing arrows into a pot.",
        "question": "[듣기 · 11단원] 대화를 듣고, Tuho(투호) 놀이에 대한 올바른 설명은?",
        "options": [
          "화살을 항아리 안에 던져 넣는 한국의 전통 놀이",
          "돌을 던져 탑을 쓰러뜨리는 놀이",
          "줄을 꼬아 넘는 놀이",
          "말을 타고 달리는 경기"
        ],
        "correctIndex": 0,
        "correctAnswer": "화살을 항아리 안에 던져 넣는 한국의 전통 놀이",
        "explanation": "교과서 단원명 및 핵심 표현: 'throwing arrows into a pot'입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Tom: Have you ever thrown a boomerang into the air? Brian: Yes, an Australian boomerang comes back when you throw it.",
        "question": "[듣기 · 11단원] 대화를 듣고, 부메랑(boomerang)의 특징으로 알맞은 것은?",
        "options": [
          "땅 위로 굴러간다",
          "공중에 던지면 다시 되돌아온다",
          "물속에 가라앉는다",
          "소리를 내며 폭발한다"
        ],
        "correctIndex": 1,
        "correctAnswer": "공중에 던지면 다시 되돌아온다",
        "explanation": "교과서 어휘: 'boomerang', 'air', 'into'입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Hana: Can you hit the goal in Tuho? Amy: Yes, if you throw the stick clever and straight, it hits the jar.",
        "question": "[듣기 · 11단원] 대화를 듣고, 투호에서 성공하기 위한 비결은?",
        "options": [
          "똑똑하고 곧게 화살 막대를 던져 항아리에 넣기",
          "힘껏 바닥으로 내리치기",
          "눈을 감고 아무 데나 던지기",
          "친구의 화살을 빼앗기"
        ],
        "correctIndex": 0,
        "correctAnswer": "똑똑하고 곧게 화살 막대를 던져 항아리에 넣기",
        "explanation": "교과서 어휘: 'clever', 'hit', 'into'입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Brian: Do you know what a sari is? Paul: Yes, it is a traditional beautiful dress worn in India.",
        "question": "[듣기 · 11단원] 대화를 듣고, 사리(sari)에 대한 설명으로 알맞은 것은?",
        "options": [
          "호주의 목조 악기",
          "아프리카의 북",
          "한국의 전통 신발",
          "인도의 아름다운 전통 의상"
        ],
        "correctIndex": 3,
        "correctAnswer": "인도의 아름다운 전통 의상",
        "explanation": "교과서 어휘: 'sari'와 문화 탐구 내용입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Amy: Let's play Yutnori together on Chuseok! Minsoo: Great! Traditional games are very exciting.",
        "question": "[듣기 · 11단원] 대화를 듣고, 두 사람이 추석에 함께 하기로 한 것은?",
        "options": [
          "윷놀이 (전통 놀이)",
          "컴퓨터 게임",
          "영화 관람",
          "쇼핑"
        ],
        "correctIndex": 0,
        "correctAnswer": "윷놀이 (전통 놀이)",
        "explanation": "한국의 전통 놀이 문화 대화입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Paul: The clever boy threw the stick into the jar ten times. Kelly: Amazing! He won the game.",
        "question": "[듣기 · 11단원] 대화를 듣고, 소년이 투호 놀이에서 성공한 횟수는?",
        "options": [
          "5번",
          "1번",
          "3번",
          "10번"
        ],
        "correctIndex": 3,
        "correctAnswer": "10번",
        "explanation": "'ten times'는 10번입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Do you know anything about Tuho? David: Yes, it is a traditional Korean game of throwing arrows into a pot.",
        "question": "[듣기 · 11단원] 대화를 듣고, Tuho(투호) 놀이에 대한 올바른 설명은?",
        "options": [
          "줄을 꼬아 넘는 놀이",
          "말을 타고 달리는 경기",
          "화살을 항아리 안에 던져 넣는 한국의 전통 놀이",
          "돌을 던져 탑을 쓰러뜨리는 놀이"
        ],
        "correctIndex": 2,
        "correctAnswer": "화살을 항아리 안에 던져 넣는 한국의 전통 놀이",
        "explanation": "교과서 단원명 및 핵심 표현: 'throwing arrows into a pot'입니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kelly: Have you ever thrown a boomerang into the air? Sarah: Yes, an Australian boomerang comes back when you throw it.",
        "question": "[듣기 · 11단원] 대화를 듣고, 부메랑(boomerang)의 특징으로 알맞은 것은?",
        "options": [
          "공중에 던지면 다시 되돌아온다",
          "땅 위로 굴러간다",
          "물속에 가라앉는다",
          "소리를 내며 폭발한다"
        ],
        "correctIndex": 0,
        "correctAnswer": "공중에 던지면 다시 되돌아온다",
        "explanation": "교과서 어휘: 'boomerang', 'air', 'into'입니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "David: Can you hit the goal in Tuho? Jisu: Yes, if you throw the stick clever and straight, it hits the jar.",
        "question": "[듣기 · 11단원] 대화를 듣고, 투호에서 성공하기 위한 비결은?",
        "options": [
          "친구의 화살을 빼앗기",
          "눈을 감고 아무 데나 던지기",
          "힘껏 바닥으로 내리치기",
          "똑똑하고 곧게 화살 막대를 던져 항아리에 넣기"
        ],
        "correctIndex": 3,
        "correctAnswer": "똑똑하고 곧게 화살 막대를 던져 항아리에 넣기",
        "explanation": "교과서 어휘: 'clever', 'hit', 'into'입니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Sarah: Do you know anything about Tuho? Kevin: I agree with you!",
        "question": "[듣기 · 11단원] 대화에서 Sarah이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "너는 투호에 대해 무엇이든 알고 있니?",
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자."
        ],
        "correctIndex": 1,
        "correctAnswer": "너는 투호에 대해 무엇이든 알고 있니?",
        "explanation": "'Do you know anything about Tuho?'은 '너는 투호에 대해 무엇이든 알고 있니?'을 의미합니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Jisu: It is a traditional Korean game. Emma: I agree with you!",
        "question": "[듣기 · 11단원] 대화에서 Jisu이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 한국의 전통 놀이야.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "그것은 한국의 전통 놀이야.",
        "explanation": "'It is a traditional Korean game.'은 '그것은 한국의 전통 놀이야.'을 의미합니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kevin: Throw the stick into the pot. Tom: I agree with you!",
        "question": "[듣기 · 11단원] 대화에서 Kevin이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "막대기를 항아리 안으로 던져 넣으렴.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "막대기를 항아리 안으로 던져 넣으렴.",
        "explanation": "'Throw the stick into the pot.'은 '막대기를 항아리 안으로 던져 넣으렴.'을 의미합니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Emma: A boomerang flies high in the air. Hana: I agree with you!",
        "question": "[듣기 · 11단원] 대화에서 Emma이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "부메랑은 공중 높이 날아올라.",
          "다음 기회에 다시 이야기하자."
        ],
        "correctIndex": 2,
        "correctAnswer": "부메랑은 공중 높이 날아올라.",
        "explanation": "'A boomerang flies high in the air.'은 '부메랑은 공중 높이 날아올라.'을 의미합니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Tom: The clever player hit the target. Brian: I agree with you!",
        "question": "[듣기 · 11단원] 대화에서 Tom이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그 영리한 선수가 표적을 맞혔어.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "그 영리한 선수가 표적을 맞혔어.",
        "explanation": "'The clever player hit the target.'은 '그 영리한 선수가 표적을 맞혔어.'을 의미합니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Hana: A sari is a traditional dress from India. Amy: I agree with you!",
        "question": "[듣기 · 11단원] 대화에서 Hana이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "사리는 인도의 전통 의상이야.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "사리는 인도의 전통 의상이야.",
        "explanation": "'A sari is a traditional dress from India.'은 '사리는 인도의 전통 의상이야.'을 의미합니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Brian: Do you know anything about Korean culture? Paul: I agree with you!",
        "question": "[듣기 · 11단원] 대화에서 Brian이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "너는 한국 문화에 대해 무엇이든 알고 있니?",
          "다음 기회에 다시 이야기하자.",
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아."
        ],
        "correctIndex": 0,
        "correctAnswer": "너는 한국 문화에 대해 무엇이든 알고 있니?",
        "explanation": "'Do you know anything about Korean culture?'은 '너는 한국 문화에 대해 무엇이든 알고 있니?'을 의미합니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Amy: Playing traditional games is so much fun. Minsoo: I agree with you!",
        "question": "[듣기 · 11단원] 대화에서 Amy이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "전통 놀이를 하는 것은 정말 재미있어."
        ],
        "correctIndex": 3,
        "correctAnswer": "전통 놀이를 하는 것은 정말 재미있어.",
        "explanation": "'Playing traditional games is so much fun.'은 '전통 놀이를 하는 것은 정말 재미있어.'을 의미합니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Paul: Throw the wooden arrow straight into the jar. Kelly: I agree with you!",
        "question": "[듣기 · 11단원] 대화에서 Paul이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나무 화살을 항아리 안으로 곧게 던져봐.",
          "다음 기회에 다시 이야기하자.",
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아."
        ],
        "correctIndex": 0,
        "correctAnswer": "나무 화살을 항아리 안으로 곧게 던져봐.",
        "explanation": "'Throw the wooden arrow straight into the jar.'은 '나무 화살을 항아리 안으로 곧게 던져봐.'을 의미합니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Every country has its own special games. David: I agree with you!",
        "question": "[듣기 · 11단원] 대화에서 Minsoo이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "모든 나라는 저마다의 특별한 놀이를 가지고 있어."
        ],
        "correctIndex": 3,
        "correctAnswer": "모든 나라는 저마다의 특별한 놀이를 가지고 있어.",
        "explanation": "'Every country has its own special games.'은 '모든 나라는 저마다의 특별한 놀이를 가지고 있어.'을 의미합니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kelly: What does 'sari' mean in Korean? Sarah: It means '사리 (인도 전통 의상)'.",
        "question": "[듣기 · 11단원] 대화에서 언급된 영어 단어 'sari'의 우리말 뜻으로 바른 것은?",
        "options": [
          "사리 (인도 전통 의상)",
          "전통의, 전통적인",
          "놀이, 게임",
          "투호 (한국 전통 화살 던지기 놀이)"
        ],
        "correctIndex": 0,
        "correctAnswer": "사리 (인도 전통 의상)",
        "explanation": "'sari'은 '사리 (인도 전통 의상)'를 뜻합니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "David: What does 'culture' mean in Korean? Jisu: It means '문화'.",
        "question": "[듣기 · 11단원] 대화에서 언급된 영어 단어 'culture'의 우리말 뜻으로 바른 것은?",
        "options": [
          "놀이, 게임",
          "전통의, 전통적인",
          "투호 (한국 전통 화살 던지기 놀이)",
          "문화"
        ],
        "correctIndex": 3,
        "correctAnswer": "문화",
        "explanation": "'culture'은 '문화'를 뜻합니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Sarah: What does 'world' mean in Korean? Kevin: It means '세계'.",
        "question": "[듣기 · 11단원] 대화에서 언급된 영어 단어 'world'의 우리말 뜻으로 바른 것은?",
        "options": [
          "세계",
          "투호 (한국 전통 화살 던지기 놀이)",
          "전통의, 전통적인",
          "놀이, 게임"
        ],
        "correctIndex": 0,
        "correctAnswer": "세계",
        "explanation": "'world'은 '세계'를 뜻합니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Jisu: What does 'throw' mean in Korean? Emma: It means '던지다'.",
        "question": "[듣기 · 11단원] 대화에서 언급된 영어 단어 'throw'의 우리말 뜻으로 바른 것은?",
        "options": [
          "전통의, 전통적인",
          "놀이, 게임",
          "투호 (한국 전통 화살 던지기 놀이)",
          "던지다"
        ],
        "correctIndex": 3,
        "correctAnswer": "던지다",
        "explanation": "'throw'은 '던지다'를 뜻합니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kevin: What does 'stick' mean in Korean? Tom: It means '막대기, 화살'.",
        "question": "[듣기 · 11단원] 대화에서 언급된 영어 단어 'stick'의 우리말 뜻으로 바른 것은?",
        "options": [
          "막대기, 화살",
          "투호 (한국 전통 화살 던지기 놀이)",
          "전통의, 전통적인",
          "놀이, 게임"
        ],
        "correctIndex": 0,
        "correctAnswer": "막대기, 화살",
        "explanation": "'stick'은 '막대기, 화살'를 뜻합니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Emma: What does 'tuho' mean in Korean? Hana: It means '투호 (한국 전통 화살 던지기 놀이)'.",
        "question": "[듣기 · 11단원] 대화에서 언급된 영어 단어 'tuho'의 우리말 뜻으로 바른 것은?",
        "options": [
          "놀이, 게임",
          "전통의, 전통적인",
          "알다",
          "투호 (한국 전통 화살 던지기 놀이)"
        ],
        "correctIndex": 3,
        "correctAnswer": "투호 (한국 전통 화살 던지기 놀이)",
        "explanation": "'tuho'은 '투호 (한국 전통 화살 던지기 놀이)'를 뜻합니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Tom: What does 'traditional' mean in Korean? Brian: It means '전통의, 전통적인'.",
        "question": "[듣기 · 11단원] 대화에서 언급된 영어 단어 'traditional'의 우리말 뜻으로 바른 것은?",
        "options": [
          "전통의, 전통적인",
          "투호 (한국 전통 화살 던지기 놀이)",
          "놀이, 게임",
          "알다"
        ],
        "correctIndex": 0,
        "correctAnswer": "전통의, 전통적인",
        "explanation": "'traditional'은 '전통의, 전통적인'를 뜻합니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Hana: What does 'game' mean in Korean? Amy: It means '놀이, 게임'.",
        "question": "[듣기 · 11단원] 대화에서 언급된 영어 단어 'game'의 우리말 뜻으로 바른 것은?",
        "options": [
          "투호 (한국 전통 화살 던지기 놀이)",
          "놀이, 게임",
          "전통의, 전통적인",
          "알다"
        ],
        "correctIndex": 1,
        "correctAnswer": "놀이, 게임",
        "explanation": "'game'은 '놀이, 게임'를 뜻합니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Brian: What does 'know' mean in Korean? Paul: It means '알다'.",
        "question": "[듣기 · 11단원] 대화에서 언급된 영어 단어 'know'의 우리말 뜻으로 바른 것은?",
        "options": [
          "알다",
          "투호 (한국 전통 화살 던지기 놀이)",
          "전통의, 전통적인",
          "놀이, 게임"
        ],
        "correctIndex": 0,
        "correctAnswer": "알다",
        "explanation": "'know'은 '알다'를 뜻합니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Amy: What does 'about' mean in Korean? Minsoo: It means '~에 대하여'.",
        "question": "[듣기 · 11단원] 대화에서 언급된 영어 단어 'about'의 우리말 뜻으로 바른 것은?",
        "options": [
          "~에 대하여",
          "투호 (한국 전통 화살 던지기 놀이)",
          "전통의, 전통적인",
          "놀이, 게임"
        ],
        "correctIndex": 0,
        "correctAnswer": "~에 대하여",
        "explanation": "'about'은 '~에 대하여'를 뜻합니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kelly. A boomerang flies high in the air. I am very happy and excited about our English class today.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kelly. A boomerang flies high in the air. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "부메랑은 공중 높이 날아올라."
        ],
        "correctIndex": 3,
        "correctAnswer": "부메랑은 공중 높이 날아올라.",
        "explanation": "'A boomerang flies high in the air.'(부메랑은 공중 높이 날아올라.)이 핵심 문장입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is David. The clever player hit the target. I am very happy and excited about our English class today.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is David. The clever player hit the target. I am very happy and excited about our English class today.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "그 영리한 선수가 표적을 맞혔어.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 2,
        "correctAnswer": "그 영리한 선수가 표적을 맞혔어.",
        "explanation": "'The clever player hit the target.'(그 영리한 선수가 표적을 맞혔어.)이 핵심 문장입니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Sarah. A sari is a traditional dress from India. I am very happy and excited about our English class today.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Sarah. A sari is a traditional dress from India. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "사리는 인도의 전통 의상이야."
        ],
        "correctIndex": 3,
        "correctAnswer": "사리는 인도의 전통 의상이야.",
        "explanation": "'A sari is a traditional dress from India.'(사리는 인도의 전통 의상이야.)이 핵심 문장입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Jisu. Do you know anything about Korean culture? I am very happy and excited about our English class today.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Jisu. Do you know anything about Korean culture? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Jisu이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "너는 한국 문화에 대해 무엇이든 알고 있니?",
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다."
        ],
        "correctIndex": 0,
        "correctAnswer": "너는 한국 문화에 대해 무엇이든 알고 있니?",
        "explanation": "'Do you know anything about Korean culture?'(너는 한국 문화에 대해 무엇이든 알고 있니?)이 핵심 문장입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kevin. Playing traditional games is so much fun. I am very happy and excited about our English class today.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kevin. Playing traditional games is so much fun. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kevin이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "전통 놀이를 하는 것은 정말 재미있어.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 1,
        "correctAnswer": "전통 놀이를 하는 것은 정말 재미있어.",
        "explanation": "'Playing traditional games is so much fun.'(전통 놀이를 하는 것은 정말 재미있어.)이 핵심 문장입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Emma. Throw the wooden arrow straight into the jar. I am very happy and excited about our English class today.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Emma. Throw the wooden arrow straight into the jar. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Emma이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "나무 화살을 항아리 안으로 곧게 던져봐.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "나무 화살을 항아리 안으로 곧게 던져봐.",
        "explanation": "'Throw the wooden arrow straight into the jar.'(나무 화살을 항아리 안으로 곧게 던져봐.)이 핵심 문장입니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Tom. Every country has its own special games. I am very happy and excited about our English class today.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Tom. Every country has its own special games. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Tom이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "모든 나라는 저마다의 특별한 놀이를 가지고 있어."
        ],
        "correctIndex": 3,
        "correctAnswer": "모든 나라는 저마다의 특별한 놀이를 가지고 있어.",
        "explanation": "'Every country has its own special games.'(모든 나라는 저마다의 특별한 놀이를 가지고 있어.)이 핵심 문장입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Hana. How many sticks did you throw into the box? I am very happy and excited about our English class today.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Hana. How many sticks did you throw into the box? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Hana이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "너는 상자 안에 막대기를 몇 개나 던져 넣었니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "너는 상자 안에 막대기를 몇 개나 던져 넣었니?",
        "explanation": "'How many sticks did you throw into the box?'(너는 상자 안에 막대기를 몇 개나 던져 넣었니?)이 핵심 문장입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Brian. I hit the center goal three times. I am very happy and excited about our English class today.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Brian. I hit the center goal three times. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Brian이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "나는 중앙 목표물을 세 번 맞혔어.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다.",
          "숙제가 너무 어려워서 고민이다."
        ],
        "correctIndex": 0,
        "correctAnswer": "나는 중앙 목표물을 세 번 맞혔어.",
        "explanation": "'I hit the center goal three times.'(나는 중앙 목표물을 세 번 맞혔어.)이 핵심 문장입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Amy. We can learn about world cultures through games. I am very happy and excited about our English class today.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Amy. We can learn about world cultures through games. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Amy이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "우리는 놀이를 통해 세계 문화를 배울 수 있어.",
          "길을 잃어서 병원을 찾고 있다.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 0,
        "correctAnswer": "우리는 놀이를 통해 세계 문화를 배울 수 있어.",
        "explanation": "'We can learn about world cultures through games.'(우리는 놀이를 통해 세계 문화를 배울 수 있어.)이 핵심 문장입니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Paul. The clever dog caught the flying disc in the air. I am very happy and excited about our English class today.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Paul. The clever dog caught the flying disc in the air. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Paul이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "영리한 강아지가 공중에서 원반을 잡았어."
        ],
        "correctIndex": 3,
        "correctAnswer": "영리한 강아지가 공중에서 원반을 잡았어.",
        "explanation": "'The clever dog caught the flying disc in the air.'(영리한 강아지가 공중에서 원반을 잡았어.)이 핵심 문장입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Minsoo. Let's share our traditional games with foreign friends. I am very happy and excited about our English class today.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Minsoo. Let's share our traditional games with foreign friends. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "우리의 전통 놀이를 외국 친구들과 함께 나누자."
        ],
        "correctIndex": 3,
        "correctAnswer": "우리의 전통 놀이를 외국 친구들과 함께 나누자.",
        "explanation": "'Let's share our traditional games with foreign friends.'(우리의 전통 놀이를 외국 친구들과 함께 나누자.)이 핵심 문장입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kelly. Do you know anything about Tuho? I am very happy and excited about our English class today.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kelly. Do you know anything about Tuho? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "너는 투호에 대해 무엇이든 알고 있니?"
        ],
        "correctIndex": 3,
        "correctAnswer": "너는 투호에 대해 무엇이든 알고 있니?",
        "explanation": "'Do you know anything about Tuho?'(너는 투호에 대해 무엇이든 알고 있니?)이 핵심 문장입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is David. It is a traditional Korean game. I am very happy and excited about our English class today.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is David. It is a traditional Korean game. I am very happy and excited about our English class today.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "그것은 한국의 전통 놀이야.",
          "숙제가 너무 어려워서 고민이다.",
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 0,
        "correctAnswer": "그것은 한국의 전통 놀이야.",
        "explanation": "'It is a traditional Korean game.'(그것은 한국의 전통 놀이야.)이 핵심 문장입니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Sarah. Throw the stick into the pot. I am very happy and excited about our English class today.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Sarah. Throw the stick into the pot. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "막대기를 항아리 안으로 던져 넣으렴."
        ],
        "correctIndex": 3,
        "correctAnswer": "막대기를 항아리 안으로 던져 넣으렴.",
        "explanation": "'Throw the stick into the pot.'(막대기를 항아리 안으로 던져 넣으렴.)이 핵심 문장입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Do you know what a sari is? And the response was: \"Yes, it is a traditional beautiful dress worn in India.\"",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Do you know what a sari is? And the response was: \"Yes, it is a traditional beautiful dress worn in India.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 사리(sari)에 대한 설명으로 알맞은 것은?",
        "options": [
          "아프리카의 북",
          "호주의 목조 악기",
          "한국의 전통 신발",
          "인도의 아름다운 전통 의상"
        ],
        "correctIndex": 3,
        "correctAnswer": "인도의 아름다운 전통 의상",
        "explanation": "교과서 어휘: 'sari'와 문화 탐구 내용입니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Let's play Yutnori together on Chuseok! And the response was: \"Great! Traditional games are very exciting.\"",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Let's play Yutnori together on Chuseok! And the response was: \"Great! Traditional games are very exciting.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 두 사람이 추석에 함께 하기로 한 것은?",
        "options": [
          "컴퓨터 게임",
          "윷놀이 (전통 놀이)",
          "쇼핑",
          "영화 관람"
        ],
        "correctIndex": 1,
        "correctAnswer": "윷놀이 (전통 놀이)",
        "explanation": "한국의 전통 놀이 문화 대화입니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: The clever boy threw the stick into the jar ten times. And the response was: \"Amazing! He won the game.\"",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: The clever boy threw the stick into the jar ten times. And the response was: \"Amazing! He won the game.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 소년이 투호 놀이에서 성공한 횟수는?",
        "options": [
          "1번",
          "5번",
          "3번",
          "10번"
        ],
        "correctIndex": 3,
        "correctAnswer": "10번",
        "explanation": "'ten times'는 10번입니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Do you know anything about Tuho? And the response was: \"Yes, it is a traditional Korean game of throwing arrows into a pot.\"",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Do you know anything about Tuho? And the response was: \"Yes, it is a traditional Korean game of throwing arrows into a pot.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: Tuho(투호) 놀이에 대한 올바른 설명은?",
        "options": [
          "줄을 꼬아 넘는 놀이",
          "돌을 던져 탑을 쓰러뜨리는 놀이",
          "말을 타고 달리는 경기",
          "화살을 항아리 안에 던져 넣는 한국의 전통 놀이"
        ],
        "correctIndex": 3,
        "correctAnswer": "화살을 항아리 안에 던져 넣는 한국의 전통 놀이",
        "explanation": "교과서 단원명 및 핵심 표현: 'throwing arrows into a pot'입니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Have you ever thrown a boomerang into the air? And the response was: \"Yes, an Australian boomerang comes back when you throw it.\"",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Have you ever thrown a boomerang into the air? And the response was: \"Yes, an Australian boomerang comes back when you throw it.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 부메랑(boomerang)의 특징으로 알맞은 것은?",
        "options": [
          "소리를 내며 폭발한다",
          "물속에 가라앉는다",
          "공중에 던지면 다시 되돌아온다",
          "땅 위로 굴러간다"
        ],
        "correctIndex": 2,
        "correctAnswer": "공중에 던지면 다시 되돌아온다",
        "explanation": "교과서 어휘: 'boomerang', 'air', 'into'입니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Can you hit the goal in Tuho? And the response was: \"Yes, if you throw the stick clever and straight, it hits the jar.\"",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Can you hit the goal in Tuho? And the response was: \"Yes, if you throw the stick clever and straight, it hits the jar.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 투호에서 성공하기 위한 비결은?",
        "options": [
          "친구의 화살을 빼앗기",
          "힘껏 바닥으로 내리치기",
          "똑똑하고 곧게 화살 막대를 던져 항아리에 넣기",
          "눈을 감고 아무 데나 던지기"
        ],
        "correctIndex": 2,
        "correctAnswer": "똑똑하고 곧게 화살 막대를 던져 항아리에 넣기",
        "explanation": "교과서 어휘: 'clever', 'hit', 'into'입니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Do you know what a sari is? And the response was: \"Yes, it is a traditional beautiful dress worn in India.\"",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Do you know what a sari is? And the response was: \"Yes, it is a traditional beautiful dress worn in India.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 사리(sari)에 대한 설명으로 알맞은 것은?",
        "options": [
          "인도의 아름다운 전통 의상",
          "호주의 목조 악기",
          "한국의 전통 신발",
          "아프리카의 북"
        ],
        "correctIndex": 0,
        "correctAnswer": "인도의 아름다운 전통 의상",
        "explanation": "교과서 어휘: 'sari'와 문화 탐구 내용입니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Let's play Yutnori together on Chuseok! And the response was: \"Great! Traditional games are very exciting.\"",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Let's play Yutnori together on Chuseok! And the response was: \"Great! Traditional games are very exciting.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 두 사람이 추석에 함께 하기로 한 것은?",
        "options": [
          "쇼핑",
          "영화 관람",
          "윷놀이 (전통 놀이)",
          "컴퓨터 게임"
        ],
        "correctIndex": 2,
        "correctAnswer": "윷놀이 (전통 놀이)",
        "explanation": "한국의 전통 놀이 문화 대화입니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: The clever boy threw the stick into the jar ten times. And the response was: \"Amazing! He won the game.\"",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: The clever boy threw the stick into the jar ten times. And the response was: \"Amazing! He won the game.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 소년이 투호 놀이에서 성공한 횟수는?",
        "options": [
          "1번",
          "5번",
          "3번",
          "10번"
        ],
        "correctIndex": 3,
        "correctAnswer": "10번",
        "explanation": "'ten times'는 10번입니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Do you know anything about Tuho? And the response was: \"Yes, it is a traditional Korean game of throwing arrows into a pot.\"",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Do you know anything about Tuho? And the response was: \"Yes, it is a traditional Korean game of throwing arrows into a pot.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: Tuho(투호) 놀이에 대한 올바른 설명은?",
        "options": [
          "줄을 꼬아 넘는 놀이",
          "돌을 던져 탑을 쓰러뜨리는 놀이",
          "말을 타고 달리는 경기",
          "화살을 항아리 안에 던져 넣는 한국의 전통 놀이"
        ],
        "correctIndex": 3,
        "correctAnswer": "화살을 항아리 안에 던져 넣는 한국의 전통 놀이",
        "explanation": "교과서 단원명 및 핵심 표현: 'throwing arrows into a pot'입니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'world' is a new word in 11단원. In Korean, it means '세계'.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'world' is a new word in 11단원. In Korean, it means '세계'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'world'의 뜻은?",
        "options": [
          "세계",
          "투호 (한국 전통 화살 던지기 놀이)",
          "전통의, 전통적인",
          "놀이, 게임"
        ],
        "correctIndex": 0,
        "correctAnswer": "세계",
        "explanation": "'world'은 '세계'입니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'throw' is a new word in 11단원. In Korean, it means '던지다'.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'throw' is a new word in 11단원. In Korean, it means '던지다'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'throw'의 뜻은?",
        "options": [
          "전통의, 전통적인",
          "던지다",
          "놀이, 게임",
          "투호 (한국 전통 화살 던지기 놀이)"
        ],
        "correctIndex": 1,
        "correctAnswer": "던지다",
        "explanation": "'throw'은 '던지다'입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'stick' is a new word in 11단원. In Korean, it means '막대기, 화살'.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'stick' is a new word in 11단원. In Korean, it means '막대기, 화살'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'stick'의 뜻은?",
        "options": [
          "놀이, 게임",
          "전통의, 전통적인",
          "투호 (한국 전통 화살 던지기 놀이)",
          "막대기, 화살"
        ],
        "correctIndex": 3,
        "correctAnswer": "막대기, 화살",
        "explanation": "'stick'은 '막대기, 화살'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'tuho' is a new word in 11단원. In Korean, it means '투호 (한국 전통 화살 던지기 놀이)'.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'tuho' is a new word in 11단원. In Korean, it means '투호 (한국 전통 화살 던지기 놀이)'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'tuho'의 뜻은?",
        "options": [
          "투호 (한국 전통 화살 던지기 놀이)",
          "알다",
          "전통의, 전통적인",
          "놀이, 게임"
        ],
        "correctIndex": 0,
        "correctAnswer": "투호 (한국 전통 화살 던지기 놀이)",
        "explanation": "'tuho'은 '투호 (한국 전통 화살 던지기 놀이)'입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'traditional' is a new word in 11단원. In Korean, it means '전통의, 전통적인'.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'traditional' is a new word in 11단원. In Korean, it means '전통의, 전통적인'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'traditional'의 뜻은?",
        "options": [
          "알다",
          "투호 (한국 전통 화살 던지기 놀이)",
          "전통의, 전통적인",
          "놀이, 게임"
        ],
        "correctIndex": 2,
        "correctAnswer": "전통의, 전통적인",
        "explanation": "'traditional'은 '전통의, 전통적인'입니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'game' is a new word in 11단원. In Korean, it means '놀이, 게임'.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'game' is a new word in 11단원. In Korean, it means '놀이, 게임'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'game'의 뜻은?",
        "options": [
          "전통의, 전통적인",
          "투호 (한국 전통 화살 던지기 놀이)",
          "놀이, 게임",
          "알다"
        ],
        "correctIndex": 2,
        "correctAnswer": "놀이, 게임",
        "explanation": "'game'은 '놀이, 게임'입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'know' is a new word in 11단원. In Korean, it means '알다'.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'know' is a new word in 11단원. In Korean, it means '알다'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'know'의 뜻은?",
        "options": [
          "투호 (한국 전통 화살 던지기 놀이)",
          "전통의, 전통적인",
          "놀이, 게임",
          "알다"
        ],
        "correctIndex": 3,
        "correctAnswer": "알다",
        "explanation": "'know'은 '알다'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'about' is a new word in 11단원. In Korean, it means '~에 대하여'.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'about' is a new word in 11단원. In Korean, it means '~에 대하여'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'about'의 뜻은?",
        "options": [
          "투호 (한국 전통 화살 던지기 놀이)",
          "놀이, 게임",
          "전통의, 전통적인",
          "~에 대하여"
        ],
        "correctIndex": 3,
        "correctAnswer": "~에 대하여",
        "explanation": "'about'은 '~에 대하여'입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'air' is a new word in 11단원. In Korean, it means '공기, 공중'.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'air' is a new word in 11단원. In Korean, it means '공기, 공중'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'air'의 뜻은?",
        "options": [
          "놀이, 게임",
          "전통의, 전통적인",
          "투호 (한국 전통 화살 던지기 놀이)",
          "공기, 공중"
        ],
        "correctIndex": 3,
        "correctAnswer": "공기, 공중",
        "explanation": "'air'은 '공기, 공중'입니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'boomerang' is a new word in 11단원. In Korean, it means '부메랑'.",
        "question": "[읽기 · 11단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'boomerang' is a new word in 11단원. In Korean, it means '부메랑'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'boomerang'의 뜻은?",
        "options": [
          "놀이, 게임",
          "투호 (한국 전통 화살 던지기 놀이)",
          "전통의, 전통적인",
          "부메랑"
        ],
        "correctIndex": 3,
        "correctAnswer": "부메랑",
        "explanation": "'boomerang'은 '부메랑'입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 11단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"투호 (한국 전통 화살 던지기 놀이)\" (첫 글자: t, 총 4글자)",
        "correctAnswer": "tuho",
        "explanation": "'투호 (한국 전통 화살 던지기 놀이)'의 영어 표기는 'tuho'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 11단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"전통의, 전통적인\" (첫 글자: t, 총 11글자)",
        "correctAnswer": "traditional",
        "explanation": "'전통의, 전통적인'의 영어 표기는 'traditional'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 11단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"놀이, 게임\" (첫 글자: g, 총 4글자)",
        "correctAnswer": "game",
        "explanation": "'놀이, 게임'의 영어 표기는 'game'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 11단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"알다\" (첫 글자: k, 총 4글자)",
        "correctAnswer": "know",
        "explanation": "'알다'의 영어 표기는 'know'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 11단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"~에 대하여\" (첫 글자: a, 총 5글자)",
        "correctAnswer": "about",
        "explanation": "'~에 대하여'의 영어 표기는 'about'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 11단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"공기, 공중\" (첫 글자: a, 총 3글자)",
        "correctAnswer": "air",
        "explanation": "'공기, 공중'의 영어 표기는 'air'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 11단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"부메랑\" (첫 글자: b, 총 9글자)",
        "correctAnswer": "boomerang",
        "explanation": "'부메랑'의 영어 표기는 'boomerang'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 11단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"영리한, 똑똑한\" (첫 글자: c, 총 6글자)",
        "correctAnswer": "clever",
        "explanation": "'영리한, 똑똑한'의 영어 표기는 'clever'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 11단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"맞히다, 치다\" (첫 글자: h, 총 3글자)",
        "correctAnswer": "hit",
        "explanation": "'맞히다, 치다'의 영어 표기는 'hit'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 11단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"~안으로\" (첫 글자: i, 총 4글자)",
        "correctAnswer": "into",
        "explanation": "'~안으로'의 영어 표기는 'into'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 11단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"사리 (인도 전통 의상)\" (첫 글자: s, 총 4글자)",
        "correctAnswer": "sari",
        "explanation": "'사리 (인도 전통 의상)'의 영어 표기는 'sari'입니다."
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 11단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"문화\" (첫 글자: c, 총 7글자)",
        "correctAnswer": "culture",
        "explanation": "'문화'의 영어 표기는 'culture'입니다."
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 11단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"세계\" (첫 글자: w, 총 5글자)",
        "correctAnswer": "world",
        "explanation": "'세계'의 영어 표기는 'world'입니다."
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 11단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"던지다\" (첫 글자: t, 총 5글자)",
        "correctAnswer": "throw",
        "explanation": "'던지다'의 영어 표기는 'throw'입니다."
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 11단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"막대기, 화살\" (첫 글자: s, 총 5글자)",
        "correctAnswer": "stick",
        "explanation": "'막대기, 화살'의 영어 표기는 'stick'입니다."
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"너는 투호에 대해 무엇이든 알고 있니?\"",
        "chips": [
          "Do",
          "you",
          "know",
          "anything",
          "about",
          "Tuho?"
        ],
        "correctAnswer": "Do you know anything about Tuho?",
        "explanation": "'Do you know anything about Tuho?'은 '너는 투호에 대해 무엇이든 알고 있니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"그것은 한국의 전통 놀이야.\"",
        "chips": [
          "It",
          "is",
          "a",
          "traditional",
          "Korean",
          "game."
        ],
        "correctAnswer": "It is a traditional Korean game.",
        "explanation": "'It is a traditional Korean game.'은 '그것은 한국의 전통 놀이야.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"막대기를 항아리 안으로 던져 넣으렴.\"",
        "chips": [
          "Throw",
          "the",
          "stick",
          "into",
          "the",
          "pot."
        ],
        "correctAnswer": "Throw the stick into the pot.",
        "explanation": "'Throw the stick into the pot.'은 '막대기를 항아리 안으로 던져 넣으렴.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"부메랑은 공중 높이 날아올라.\"",
        "chips": [
          "A",
          "boomerang",
          "flies",
          "high",
          "in",
          "the",
          "air."
        ],
        "correctAnswer": "A boomerang flies high in the air.",
        "explanation": "'A boomerang flies high in the air.'은 '부메랑은 공중 높이 날아올라.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"그 영리한 선수가 표적을 맞혔어.\"",
        "chips": [
          "The",
          "clever",
          "player",
          "hit",
          "the",
          "target."
        ],
        "correctAnswer": "The clever player hit the target.",
        "explanation": "'The clever player hit the target.'은 '그 영리한 선수가 표적을 맞혔어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"사리는 인도의 전통 의상이야.\"",
        "chips": [
          "A",
          "sari",
          "is",
          "a",
          "traditional",
          "dress",
          "from",
          "India."
        ],
        "correctAnswer": "A sari is a traditional dress from India.",
        "explanation": "'A sari is a traditional dress from India.'은 '사리는 인도의 전통 의상이야.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"너는 한국 문화에 대해 무엇이든 알고 있니?\"",
        "chips": [
          "Do",
          "you",
          "know",
          "anything",
          "about",
          "Korean",
          "culture?"
        ],
        "correctAnswer": "Do you know anything about Korean culture?",
        "explanation": "'Do you know anything about Korean culture?'은 '너는 한국 문화에 대해 무엇이든 알고 있니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"전통 놀이를 하는 것은 정말 재미있어.\"",
        "chips": [
          "Playing",
          "traditional",
          "games",
          "is",
          "so",
          "much",
          "fun."
        ],
        "correctAnswer": "Playing traditional games is so much fun.",
        "explanation": "'Playing traditional games is so much fun.'은 '전통 놀이를 하는 것은 정말 재미있어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"나무 화살을 항아리 안으로 곧게 던져봐.\"",
        "chips": [
          "Throw",
          "the",
          "wooden",
          "arrow",
          "straight",
          "into",
          "the",
          "jar."
        ],
        "correctAnswer": "Throw the wooden arrow straight into the jar.",
        "explanation": "'Throw the wooden arrow straight into the jar.'은 '나무 화살을 항아리 안으로 곧게 던져봐.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"모든 나라는 저마다의 특별한 놀이를 가지고 있어.\"",
        "chips": [
          "Every",
          "country",
          "has",
          "its",
          "own",
          "special",
          "games."
        ],
        "correctAnswer": "Every country has its own special games.",
        "explanation": "'Every country has its own special games.'은 '모든 나라는 저마다의 특별한 놀이를 가지고 있어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 96,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"너는 상자 안에 막대기를 몇 개나 던져 넣었니?\"",
        "chips": [
          "How",
          "many",
          "sticks",
          "did",
          "you",
          "throw",
          "into",
          "the",
          "box?"
        ],
        "correctAnswer": "How many sticks did you throw into the box?",
        "explanation": "'How many sticks did you throw into the box?'은 '너는 상자 안에 막대기를 몇 개나 던져 넣었니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 97,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"나는 중앙 목표물을 세 번 맞혔어.\"",
        "chips": [
          "I",
          "hit",
          "the",
          "center",
          "goal",
          "three",
          "times."
        ],
        "correctAnswer": "I hit the center goal three times.",
        "explanation": "'I hit the center goal three times.'은 '나는 중앙 목표물을 세 번 맞혔어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 98,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"우리는 놀이를 통해 세계 문화를 배울 수 있어.\"",
        "chips": [
          "We",
          "can",
          "learn",
          "about",
          "world",
          "cultures",
          "through",
          "games."
        ],
        "correctAnswer": "We can learn about world cultures through games.",
        "explanation": "'We can learn about world cultures through games.'은 '우리는 놀이를 통해 세계 문화를 배울 수 있어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 99,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 11단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"영리한 강아지가 공중에서 원반을 잡았어.\"",
        "chips": [
          "The",
          "clever",
          "dog",
          "caught",
          "the",
          "flying",
          "disc",
          "in",
          "the",
          "air."
        ],
        "correctAnswer": "The clever dog caught the flying disc in the air.",
        "explanation": "'The clever dog caught the flying disc in the air.'은 '영리한 강아지가 공중에서 원반을 잡았어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[최종 골든벨 문제] 다음 우리말에 맞도록 주어진 단어 카드를 순서대로 바르게 배열하세요!\n우리말: \"우리의 전통 놀이를 외국 친구들과 함께 나누자.\"",
        "chips": [
          "Let's",
          "share",
          "our",
          "traditional",
          "games",
          "with",
          "foreign",
          "friends."
        ],
        "correctAnswer": "Let's share our traditional games with foreign friends.",
        "explanation": "'Let's share our traditional games with foreign friends.'은 '우리의 전통 놀이를 외국 친구들과 함께 나누자.'을 의미하는 교과서 핵심 문장입니다."
      }
    ]
  },
  "6G_L12": {
    "name": "12단원: We Made a Class Album (1년의 추억과 과거 경험 회상)",
    "grade": 6,
    "theme": "Memories, Past Tense & Class Album",
    "totalQuestions": 100,
    "questions": [
      {
        "id": 1,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Look at our graduation album! We made a class album. David: Wow, it has so many wonderful pictures of our memories.",
        "question": "[듣기 · 12단원] 대화를 듣고, 두 사람이 함께 만든 것은?",
        "options": [
          "학교 홍보 영상",
          "학급 신문",
          "학급 앨범 (class album)",
          "그림 동화책"
        ],
        "correctIndex": 2,
        "correctAnswer": "학급 앨범 (class album)",
        "explanation": "교과서 단원명 핵심 문장: 'We made a class album.'입니다."
      },
      {
        "id": 2,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kelly: Do you remember our field trip in spring? Sarah: Yes, I will never forget the street parade we saw.",
        "question": "[듣기 · 12단원] 대화를 듣고, B가 결코 잊지 못할 추억으로 꼽은 것은?",
        "options": [
          "버스를 놓쳤던 것",
          "비가 와서 실내에 있었던 것",
          "거리 행진 퍼레이드를 보았던 것",
          "도시락을 떨어뜨렸던 것"
        ],
        "correctIndex": 2,
        "correctAnswer": "거리 행진 퍼레이드를 보았던 것",
        "explanation": "교과서 어휘: 'forget'과 'street'입니다."
      },
      {
        "id": 3,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "David: Look at this picture on the wall! Jisu: That boy in the photo is Tom when he was in the first grade.",
        "question": "[듣기 · 12단원] 대화를 듣고, 벽에 걸린 사진 속 인물은?",
        "options": [
          "1학년 때의 Tom (소년)",
          "선생님의 어린 시절",
          "교장 선생님",
          "사라의 여동생"
        ],
        "correctIndex": 0,
        "correctAnswer": "1학년 때의 Tom (소년)",
        "explanation": "교과서 어휘: 'wall'과 'boy'입니다."
      },
      {
        "id": 4,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Sarah: We solved the big English quiz together. Kevin: Yes, we won the first prize cup as a whole team!",
        "question": "[듣기 · 12단원] 대화를 듣고, 학급 친구들이 함께 이뤄낸 성과는?",
        "options": [
          "영어 퀴즈를 풀고 단체 1등 상을 받음",
          "달리기 계주에서 꼴찌를 함",
          "연극 발표를 취소함",
          "합창 대회에 나가지 못함"
        ],
        "correctIndex": 0,
        "correctAnswer": "영어 퀴즈를 풀고 단체 1등 상을 받음",
        "explanation": "교과서 어휘: 'quiz'와 'won(win)'입니다."
      },
      {
        "id": 5,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Jisu: What is your final wish before graduation? Emma: My wish is that our friendship lasts forever.",
        "question": "[듣기 · 12단원] 대화를 듣고, 졸업을 앞둔 B의 마지막 소원은?",
        "options": [
          "친구들과의 우정이 영원히 지속되는 것",
          "새 스마트폰을 사는 것",
          "숙제를 안 하는 것",
          "게임을 하루 종일 하는 것"
        ],
        "correctIndex": 0,
        "correctAnswer": "친구들과의 우정이 영원히 지속되는 것",
        "explanation": "교과서 어휘: 'wish'입니다."
      },
      {
        "id": 6,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Kevin: Don't forget all our happy memories in the sixth grade. Tom: I promise I will remember each of you forever.",
        "question": "[듣기 · 12단원] 대화를 듣고, 두 사람이 서로에게 약속한 것은?",
        "options": [
          "모든 사진을 삭제하기",
          "6학년 때의 행복한 추억을 잊지 않고 영원히 기억하기",
          "방학 동안 매일 전화하기",
          "내일 아침 일찍 만나기"
        ],
        "correctIndex": 1,
        "correctAnswer": "6학년 때의 행복한 추억을 잊지 않고 영원히 기억하기",
        "explanation": "교과서 어휘: 'forget', 'wish', 'remember'입니다."
      },
      {
        "id": 7,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Emma: Look at our graduation album! We made a class album. Hana: Wow, it has so many wonderful pictures of our memories.",
        "question": "[듣기 · 12단원] 대화를 듣고, 두 사람이 함께 만든 것은?",
        "options": [
          "학급 앨범 (class album)",
          "학급 신문",
          "학교 홍보 영상",
          "그림 동화책"
        ],
        "correctIndex": 0,
        "correctAnswer": "학급 앨범 (class album)",
        "explanation": "교과서 단원명 핵심 문장: 'We made a class album.'입니다."
      },
      {
        "id": 8,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Tom: Do you remember our field trip in spring? Brian: Yes, I will never forget the street parade we saw.",
        "question": "[듣기 · 12단원] 대화를 듣고, B가 결코 잊지 못할 추억으로 꼽은 것은?",
        "options": [
          "버스를 놓쳤던 것",
          "도시락을 떨어뜨렸던 것",
          "거리 행진 퍼레이드를 보았던 것",
          "비가 와서 실내에 있었던 것"
        ],
        "correctIndex": 2,
        "correctAnswer": "거리 행진 퍼레이드를 보았던 것",
        "explanation": "교과서 어휘: 'forget'과 'street'입니다."
      },
      {
        "id": 9,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Hana: Look at this picture on the wall! Amy: That boy in the photo is Tom when he was in the first grade.",
        "question": "[듣기 · 12단원] 대화를 듣고, 벽에 걸린 사진 속 인물은?",
        "options": [
          "교장 선생님",
          "선생님의 어린 시절",
          "1학년 때의 Tom (소년)",
          "사라의 여동생"
        ],
        "correctIndex": 2,
        "correctAnswer": "1학년 때의 Tom (소년)",
        "explanation": "교과서 어휘: 'wall'과 'boy'입니다."
      },
      {
        "id": 10,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Brian: We solved the big English quiz together. Paul: Yes, we won the first prize cup as a whole team!",
        "question": "[듣기 · 12단원] 대화를 듣고, 학급 친구들이 함께 이뤄낸 성과는?",
        "options": [
          "연극 발표를 취소함",
          "달리기 계주에서 꼴찌를 함",
          "영어 퀴즈를 풀고 단체 1등 상을 받음",
          "합창 대회에 나가지 못함"
        ],
        "correctIndex": 2,
        "correctAnswer": "영어 퀴즈를 풀고 단체 1등 상을 받음",
        "explanation": "교과서 어휘: 'quiz'와 'won(win)'입니다."
      },
      {
        "id": 11,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Amy: What is your final wish before graduation? Minsoo: My wish is that our friendship lasts forever.",
        "question": "[듣기 · 12단원] 대화를 듣고, 졸업을 앞둔 B의 마지막 소원은?",
        "options": [
          "친구들과의 우정이 영원히 지속되는 것",
          "숙제를 안 하는 것",
          "게임을 하루 종일 하는 것",
          "새 스마트폰을 사는 것"
        ],
        "correctIndex": 0,
        "correctAnswer": "친구들과의 우정이 영원히 지속되는 것",
        "explanation": "교과서 어휘: 'wish'입니다."
      },
      {
        "id": 12,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★☆☆",
        "type": "listening_choice",
        "audioText": "Paul: Don't forget all our happy memories in the sixth grade. Kelly: I promise I will remember each of you forever.",
        "question": "[듣기 · 12단원] 대화를 듣고, 두 사람이 서로에게 약속한 것은?",
        "options": [
          "방학 동안 매일 전화하기",
          "내일 아침 일찍 만나기",
          "모든 사진을 삭제하기",
          "6학년 때의 행복한 추억을 잊지 않고 영원히 기억하기"
        ],
        "correctIndex": 3,
        "correctAnswer": "6학년 때의 행복한 추억을 잊지 않고 영원히 기억하기",
        "explanation": "교과서 어휘: 'forget', 'wish', 'remember'입니다."
      },
      {
        "id": 13,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Look at our graduation album! We made a class album. David: Wow, it has so many wonderful pictures of our memories.",
        "question": "[듣기 · 12단원] 대화를 듣고, 두 사람이 함께 만든 것은?",
        "options": [
          "그림 동화책",
          "학교 홍보 영상",
          "학급 앨범 (class album)",
          "학급 신문"
        ],
        "correctIndex": 2,
        "correctAnswer": "학급 앨범 (class album)",
        "explanation": "교과서 단원명 핵심 문장: 'We made a class album.'입니다."
      },
      {
        "id": 14,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kelly: Do you remember our field trip in spring? Sarah: Yes, I will never forget the street parade we saw.",
        "question": "[듣기 · 12단원] 대화를 듣고, B가 결코 잊지 못할 추억으로 꼽은 것은?",
        "options": [
          "버스를 놓쳤던 것",
          "거리 행진 퍼레이드를 보았던 것",
          "비가 와서 실내에 있었던 것",
          "도시락을 떨어뜨렸던 것"
        ],
        "correctIndex": 1,
        "correctAnswer": "거리 행진 퍼레이드를 보았던 것",
        "explanation": "교과서 어휘: 'forget'과 'street'입니다."
      },
      {
        "id": 15,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "David: Look at this picture on the wall! Jisu: That boy in the photo is Tom when he was in the first grade.",
        "question": "[듣기 · 12단원] 대화를 듣고, 벽에 걸린 사진 속 인물은?",
        "options": [
          "1학년 때의 Tom (소년)",
          "사라의 여동생",
          "교장 선생님",
          "선생님의 어린 시절"
        ],
        "correctIndex": 0,
        "correctAnswer": "1학년 때의 Tom (소년)",
        "explanation": "교과서 어휘: 'wall'과 'boy'입니다."
      },
      {
        "id": 16,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Sarah: We made a class album. Kevin: I agree with you!",
        "question": "[듣기 · 12단원] 대화에서 Sarah이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "우리는 학급 앨범을 만들었어."
        ],
        "correctIndex": 3,
        "correctAnswer": "우리는 학급 앨범을 만들었어.",
        "explanation": "'We made a class album.'은 '우리는 학급 앨범을 만들었어.'을 의미합니다."
      },
      {
        "id": 17,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Jisu: I will never forget this happy year. Emma: I agree with you!",
        "question": "[듣기 · 12단원] 대화에서 Jisu이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 이 행복했던 한 해를 결코 잊지 못할 거야.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "나는 이 행복했던 한 해를 결코 잊지 못할 거야.",
        "explanation": "'I will never forget this happy year.'은 '나는 이 행복했던 한 해를 결코 잊지 못할 거야.'을 의미합니다."
      },
      {
        "id": 18,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Kevin: Look at the photos on the classroom wall. Tom: I agree with you!",
        "question": "[듣기 · 12단원] 대화에서 Kevin이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "교실 벽에 걸린 사진들을 봐."
        ],
        "correctIndex": 3,
        "correctAnswer": "교실 벽에 걸린 사진들을 봐.",
        "explanation": "'Look at the photos on the classroom wall.'은 '교실 벽에 걸린 사진들을 봐.'을 의미합니다."
      },
      {
        "id": 19,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Emma: The boy in the front row is smiling brightly. Hana: I agree with you!",
        "question": "[듣기 · 12단원] 대화에서 Emma이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "앞줄에 있는 소년이 밝게 웃고 있어."
        ],
        "correctIndex": 3,
        "correctAnswer": "앞줄에 있는 소년이 밝게 웃고 있어.",
        "explanation": "'The boy in the front row is smiling brightly.'은 '앞줄에 있는 소년이 밝게 웃고 있어.'을 의미합니다."
      },
      {
        "id": 20,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Tom: We won the golden cup in the English quiz. Brian: I agree with you!",
        "question": "[듣기 · 12단원] 대화에서 Tom이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "나는 무슨 말인지 잘 모르겠어.",
          "우리는 영어 퀴즈에서 황금 컵을 땄어."
        ],
        "correctIndex": 3,
        "correctAnswer": "우리는 영어 퀴즈에서 황금 컵을 땄어.",
        "explanation": "'We won the golden cup in the English quiz.'은 '우리는 영어 퀴즈에서 황금 컵을 땄어.'을 의미합니다."
      },
      {
        "id": 21,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Hana: We walked down the colorful autumn street together. Amy: I agree with you!",
        "question": "[듣기 · 12단원] 대화에서 Hana이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "우리는 다채로운 가을 거리를 함께 걸었어.",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "우리는 다채로운 가을 거리를 함께 걸었어.",
        "explanation": "'We walked down the colorful autumn street together.'은 '우리는 다채로운 가을 거리를 함께 걸었어.'을 의미합니다."
      },
      {
        "id": 22,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Brian: Make a wish for your middle school life. Paul: I agree with you!",
        "question": "[듣기 · 12단원] 대화에서 Brian이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "너의 중학교 생활을 위한 소원을 빌어보렴.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어.",
          "다음 기회에 다시 이야기하자."
        ],
        "correctIndex": 0,
        "correctAnswer": "너의 중학교 생활을 위한 소원을 빌어보렴.",
        "explanation": "'Make a wish for your middle school life.'은 '너의 중학교 생활을 위한 소원을 빌어보렴.'을 의미합니다."
      },
      {
        "id": 23,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Amy: Don't forget our precious sixth grade memories. Minsoo: I agree with you!",
        "question": "[듣기 · 12단원] 대화에서 Amy이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "우리의 소중한 6학년 추억들을 잊지 마.",
          "다음 기회에 다시 이야기하자.",
          "나는 무슨 말인지 잘 모르겠어.",
          "그것은 좋은 생각이 아닌 것 같아."
        ],
        "correctIndex": 0,
        "correctAnswer": "우리의 소중한 6학년 추억들을 잊지 마.",
        "explanation": "'Don't forget our precious sixth grade memories.'은 '우리의 소중한 6학년 추억들을 잊지 마.'을 의미합니다."
      },
      {
        "id": 24,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Paul: She made a special gift for her teacher. Kelly: I agree with you!",
        "question": "[듣기 · 12단원] 대화에서 Paul이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "그것은 좋은 생각이 아닌 것 같아.",
          "다음 기회에 다시 이야기하자.",
          "나는 무슨 말인지 잘 모르겠어.",
          "그녀는 선생님을 위한 특별한 선물을 만들었어."
        ],
        "correctIndex": 3,
        "correctAnswer": "그녀는 선생님을 위한 특별한 선물을 만들었어.",
        "explanation": "'She made a special gift for her teacher.'은 '그녀는 선생님을 위한 특별한 선물을 만들었어.'을 의미합니다."
      },
      {
        "id": 25,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★☆",
        "type": "listening_choice",
        "audioText": "Minsoo: Do you remember the day we first met? David: I agree with you!",
        "question": "[듣기 · 12단원] 대화에서 Minsoo이(가) 말한 핵심 표현의 우리말 뜻으로 가장 알맞은 것은?",
        "options": [
          "우리가 처음 만났던 날을 기억하니?",
          "다음 기회에 다시 이야기하자.",
          "그것은 좋은 생각이 아닌 것 같아.",
          "나는 무슨 말인지 잘 모르겠어."
        ],
        "correctIndex": 0,
        "correctAnswer": "우리가 처음 만났던 날을 기억하니?",
        "explanation": "'Do you remember the day we first met?'은 '우리가 처음 만났던 날을 기억하니?'을 의미합니다."
      },
      {
        "id": 26,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kelly: What does 'remember' mean in Korean? Sarah: It means '기억하다'.",
        "question": "[듣기 · 12단원] 대화에서 언급된 영어 단어 'remember'의 우리말 뜻으로 바른 것은?",
        "options": [
          "기억하다",
          "만들었다 (make의 과거형)",
          "앨범, 사진첩",
          "소년"
        ],
        "correctIndex": 0,
        "correctAnswer": "기억하다",
        "explanation": "'remember'은 '기억하다'를 뜻합니다."
      },
      {
        "id": 27,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "David: What does 'photo' mean in Korean? Jisu: It means '사진'.",
        "question": "[듣기 · 12단원] 대화에서 언급된 영어 단어 'photo'의 우리말 뜻으로 바른 것은?",
        "options": [
          "사진",
          "만들었다 (make의 과거형)",
          "앨범, 사진첩",
          "소년"
        ],
        "correctIndex": 0,
        "correctAnswer": "사진",
        "explanation": "'photo'은 '사진'를 뜻합니다."
      },
      {
        "id": 28,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Sarah: What does 'friend' mean in Korean? Kevin: It means '친구'.",
        "question": "[듣기 · 12단원] 대화에서 언급된 영어 단어 'friend'의 우리말 뜻으로 바른 것은?",
        "options": [
          "앨범, 사진첩",
          "친구",
          "소년",
          "만들었다 (make의 과거형)"
        ],
        "correctIndex": 1,
        "correctAnswer": "친구",
        "explanation": "'friend'은 '친구'를 뜻합니다."
      },
      {
        "id": 29,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Jisu: What does 'graduate' mean in Korean? Emma: It means '졸업하다'.",
        "question": "[듣기 · 12단원] 대화에서 언급된 영어 단어 'graduate'의 우리말 뜻으로 바른 것은?",
        "options": [
          "소년",
          "졸업하다",
          "앨범, 사진첩",
          "만들었다 (make의 과거형)"
        ],
        "correctIndex": 1,
        "correctAnswer": "졸업하다",
        "explanation": "'graduate'은 '졸업하다'를 뜻합니다."
      },
      {
        "id": 30,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Kevin: What does 'together' mean in Korean? Tom: It means '함께'.",
        "question": "[듣기 · 12단원] 대화에서 언급된 영어 단어 'together'의 우리말 뜻으로 바른 것은?",
        "options": [
          "소년",
          "앨범, 사진첩",
          "만들었다 (make의 과거형)",
          "함께"
        ],
        "correctIndex": 3,
        "correctAnswer": "함께",
        "explanation": "'together'은 '함께'를 뜻합니다."
      },
      {
        "id": 31,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Emma: What does 'made' mean in Korean? Hana: It means '만들었다 (make의 과거형)'.",
        "question": "[듣기 · 12단원] 대화에서 언급된 영어 단어 'made'의 우리말 뜻으로 바른 것은?",
        "options": [
          "앨범, 사진첩",
          "잊다, 잊어버리다",
          "소년",
          "만들었다 (make의 과거형)"
        ],
        "correctIndex": 3,
        "correctAnswer": "만들었다 (make의 과거형)",
        "explanation": "'made'은 '만들었다 (make의 과거형)'를 뜻합니다."
      },
      {
        "id": 32,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Tom: What does 'album' mean in Korean? Brian: It means '앨범, 사진첩'.",
        "question": "[듣기 · 12단원] 대화에서 언급된 영어 단어 'album'의 우리말 뜻으로 바른 것은?",
        "options": [
          "소년",
          "만들었다 (make의 과거형)",
          "잊다, 잊어버리다",
          "앨범, 사진첩"
        ],
        "correctIndex": 3,
        "correctAnswer": "앨범, 사진첩",
        "explanation": "'album'은 '앨범, 사진첩'를 뜻합니다."
      },
      {
        "id": 33,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Hana: What does 'boy' mean in Korean? Amy: It means '소년'.",
        "question": "[듣기 · 12단원] 대화에서 언급된 영어 단어 'boy'의 우리말 뜻으로 바른 것은?",
        "options": [
          "앨범, 사진첩",
          "잊다, 잊어버리다",
          "만들었다 (make의 과거형)",
          "소년"
        ],
        "correctIndex": 3,
        "correctAnswer": "소년",
        "explanation": "'boy'은 '소년'를 뜻합니다."
      },
      {
        "id": 34,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Brian: What does 'forget' mean in Korean? Paul: It means '잊다, 잊어버리다'.",
        "question": "[듣기 · 12단원] 대화에서 언급된 영어 단어 'forget'의 우리말 뜻으로 바른 것은?",
        "options": [
          "만들었다 (make의 과거형)",
          "소년",
          "앨범, 사진첩",
          "잊다, 잊어버리다"
        ],
        "correctIndex": 3,
        "correctAnswer": "잊다, 잊어버리다",
        "explanation": "'forget'은 '잊다, 잊어버리다'를 뜻합니다."
      },
      {
        "id": 35,
        "domain": "듣기",
        "domainIcon": "🎧",
        "difficulty": "★★★",
        "type": "listening_choice",
        "audioText": "Amy: What does 'quiz' mean in Korean? Minsoo: It means '퀴즈, 간단한 시험'.",
        "question": "[듣기 · 12단원] 대화에서 언급된 영어 단어 'quiz'의 우리말 뜻으로 바른 것은?",
        "options": [
          "앨범, 사진첩",
          "만들었다 (make의 과거형)",
          "소년",
          "퀴즈, 간단한 시험"
        ],
        "correctIndex": 3,
        "correctAnswer": "퀴즈, 간단한 시험",
        "explanation": "'quiz'은 '퀴즈, 간단한 시험'를 뜻합니다."
      },
      {
        "id": 36,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kelly. The boy in the front row is smiling brightly. I am very happy and excited about our English class today.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kelly. The boy in the front row is smiling brightly. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "앞줄에 있는 소년이 밝게 웃고 있어."
        ],
        "correctIndex": 3,
        "correctAnswer": "앞줄에 있는 소년이 밝게 웃고 있어.",
        "explanation": "'The boy in the front row is smiling brightly.'(앞줄에 있는 소년이 밝게 웃고 있어.)이 핵심 문장입니다."
      },
      {
        "id": 37,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is David. We won the golden cup in the English quiz. I am very happy and excited about our English class today.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is David. We won the golden cup in the English quiz. I am very happy and excited about our English class today.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "우리는 영어 퀴즈에서 황금 컵을 땄어.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "우리는 영어 퀴즈에서 황금 컵을 땄어.",
        "explanation": "'We won the golden cup in the English quiz.'(우리는 영어 퀴즈에서 황금 컵을 땄어.)이 핵심 문장입니다."
      },
      {
        "id": 38,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Sarah. We walked down the colorful autumn street together. I am very happy and excited about our English class today.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Sarah. We walked down the colorful autumn street together. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "우리는 다채로운 가을 거리를 함께 걸었어."
        ],
        "correctIndex": 3,
        "correctAnswer": "우리는 다채로운 가을 거리를 함께 걸었어.",
        "explanation": "'We walked down the colorful autumn street together.'(우리는 다채로운 가을 거리를 함께 걸었어.)이 핵심 문장입니다."
      },
      {
        "id": 39,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Jisu. Make a wish for your middle school life. I am very happy and excited about our English class today.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Jisu. Make a wish for your middle school life. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Jisu이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다.",
          "너의 중학교 생활을 위한 소원을 빌어보렴.",
          "숙제가 너무 어려워서 고민이다."
        ],
        "correctIndex": 2,
        "correctAnswer": "너의 중학교 생활을 위한 소원을 빌어보렴.",
        "explanation": "'Make a wish for your middle school life.'(너의 중학교 생활을 위한 소원을 빌어보렴.)이 핵심 문장입니다."
      },
      {
        "id": 40,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kevin. Don't forget our precious sixth grade memories. I am very happy and excited about our English class today.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kevin. Don't forget our precious sixth grade memories. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kevin이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "우리의 소중한 6학년 추억들을 잊지 마."
        ],
        "correctIndex": 3,
        "correctAnswer": "우리의 소중한 6학년 추억들을 잊지 마.",
        "explanation": "'Don't forget our precious sixth grade memories.'(우리의 소중한 6학년 추억들을 잊지 마.)이 핵심 문장입니다."
      },
      {
        "id": 41,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Emma. She made a special gift for her teacher. I am very happy and excited about our English class today.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Emma. She made a special gift for her teacher. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Emma이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "숙제가 너무 어려워서 고민이다.",
          "그녀는 선생님을 위한 특별한 선물을 만들었어.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 2,
        "correctAnswer": "그녀는 선생님을 위한 특별한 선물을 만들었어.",
        "explanation": "'She made a special gift for her teacher.'(그녀는 선생님을 위한 특별한 선물을 만들었어.)이 핵심 문장입니다."
      },
      {
        "id": 42,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Tom. Do you remember the day we first met? I am very happy and excited about our English class today.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Tom. Do you remember the day we first met? I am very happy and excited about our English class today.\"\n질문: 윗글에서 Tom이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "우리가 처음 만났던 날을 기억하니?",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다.",
          "숙제가 너무 어려워서 고민이다."
        ],
        "correctIndex": 0,
        "correctAnswer": "우리가 처음 만났던 날을 기억하니?",
        "explanation": "'Do you remember the day we first met?'(우리가 처음 만났던 날을 기억하니?)이 핵심 문장입니다."
      },
      {
        "id": 43,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Hana. Every photo tells a warm and sweet story. I am very happy and excited about our English class today.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Hana. Every photo tells a warm and sweet story. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Hana이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "모든 사진마다 따뜻하고 달콤한 이야기가 담겨 있어."
        ],
        "correctIndex": 3,
        "correctAnswer": "모든 사진마다 따뜻하고 달콤한 이야기가 담겨 있어.",
        "explanation": "'Every photo tells a warm and sweet story.'(모든 사진마다 따뜻하고 달콤한 이야기가 담겨 있어.)이 핵심 문장입니다."
      },
      {
        "id": 44,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Brian. I wish you all great happiness and health. I am very happy and excited about our English class today.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Brian. I wish you all great happiness and health. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Brian이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 슬프다.",
          "너희 모두에게 큰 행복과 건강이 가득하길 바라.",
          "숙제가 너무 어려워서 고민이다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 1,
        "correctAnswer": "너희 모두에게 큰 행복과 건강이 가득하길 바라.",
        "explanation": "'I wish you all great happiness and health.'(너희 모두에게 큰 행복과 건강이 가득하길 바라.)이 핵심 문장입니다."
      },
      {
        "id": 45,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Amy. We will always be the best class forever. I am very happy and excited about our English class today.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Amy. We will always be the best class forever. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Amy이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "우리는 언제나 영원히 최고의 반일 거야.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "우리는 언제나 영원히 최고의 반일 거야.",
        "explanation": "'We will always be the best class forever.'(우리는 언제나 영원히 최고의 반일 거야.)이 핵심 문장입니다."
      },
      {
        "id": 46,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Paul. Thank you for being my friend this whole year. I am very happy and excited about our English class today.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Paul. Thank you for being my friend this whole year. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Paul이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "길을 잃어서 병원을 찾고 있다.",
          "올 한 해 내 친구가 되어 주어서 정말 고마워."
        ],
        "correctIndex": 3,
        "correctAnswer": "올 한 해 내 친구가 되어 주어서 정말 고마워.",
        "explanation": "'Thank you for being my friend this whole year.'(올 한 해 내 친구가 되어 주어서 정말 고마워.)이 핵심 문장입니다."
      },
      {
        "id": 47,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★☆☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Minsoo. Congratulations on graduating from elementary school! I am very happy and excited about our English class today.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Minsoo. Congratulations on graduating from elementary school! I am very happy and excited about our English class today.\"\n질문: 윗글에서 Minsoo이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "초등학교 졸업을 진심으로 축하해!",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "초등학교 졸업을 진심으로 축하해!",
        "explanation": "'Congratulations on graduating from elementary school!'(초등학교 졸업을 진심으로 축하해!)이 핵심 문장입니다."
      },
      {
        "id": 48,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Kelly. We made a class album. I am very happy and excited about our English class today.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Kelly. We made a class album. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Kelly이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "우리는 학급 앨범을 만들었어.",
          "친구와 다투어서 기분이 슬프다.",
          "숙제가 너무 어려워서 고민이다.",
          "길을 잃어서 병원을 찾고 있다."
        ],
        "correctIndex": 0,
        "correctAnswer": "우리는 학급 앨범을 만들었어.",
        "explanation": "'We made a class album.'(우리는 학급 앨범을 만들었어.)이 핵심 문장입니다."
      },
      {
        "id": 49,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is David. I will never forget this happy year. I am very happy and excited about our English class today.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is David. I will never forget this happy year. I am very happy and excited about our English class today.\"\n질문: 윗글에서 David이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "숙제가 너무 어려워서 고민이다.",
          "나는 이 행복했던 한 해를 결코 잊지 못할 거야.",
          "길을 잃어서 병원을 찾고 있다.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 1,
        "correctAnswer": "나는 이 행복했던 한 해를 결코 잊지 못할 거야.",
        "explanation": "'I will never forget this happy year.'(나는 이 행복했던 한 해를 결코 잊지 못할 거야.)이 핵심 문장입니다."
      },
      {
        "id": 50,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Hello! My name is Sarah. Look at the photos on the classroom wall. I am very happy and excited about our English class today.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Hello! My name is Sarah. Look at the photos on the classroom wall. I am very happy and excited about our English class today.\"\n질문: 윗글에서 Sarah이(가) 언급한 주된 내용으로 알맞은 것은?",
        "options": [
          "교실 벽에 걸린 사진들을 봐.",
          "길을 잃어서 병원을 찾고 있다.",
          "숙제가 너무 어려워서 고민이다.",
          "친구와 다투어서 기분이 슬프다."
        ],
        "correctIndex": 0,
        "correctAnswer": "교실 벽에 걸린 사진들을 봐.",
        "explanation": "'Look at the photos on the classroom wall.'(교실 벽에 걸린 사진들을 봐.)이 핵심 문장입니다."
      },
      {
        "id": 51,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: We solved the big English quiz together. And the response was: \"Yes, we won the first prize cup as a whole team!\"",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: We solved the big English quiz together. And the response was: \"Yes, we won the first prize cup as a whole team!\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 학급 친구들이 함께 이뤄낸 성과는?",
        "options": [
          "연극 발표를 취소함",
          "달리기 계주에서 꼴찌를 함",
          "합창 대회에 나가지 못함",
          "영어 퀴즈를 풀고 단체 1등 상을 받음"
        ],
        "correctIndex": 3,
        "correctAnswer": "영어 퀴즈를 풀고 단체 1등 상을 받음",
        "explanation": "교과서 어휘: 'quiz'와 'won(win)'입니다."
      },
      {
        "id": 52,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: What is your final wish before graduation? And the response was: \"My wish is that our friendship lasts forever.\"",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: What is your final wish before graduation? And the response was: \"My wish is that our friendship lasts forever.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 졸업을 앞둔 B의 마지막 소원은?",
        "options": [
          "친구들과의 우정이 영원히 지속되는 것",
          "숙제를 안 하는 것",
          "새 스마트폰을 사는 것",
          "게임을 하루 종일 하는 것"
        ],
        "correctIndex": 0,
        "correctAnswer": "친구들과의 우정이 영원히 지속되는 것",
        "explanation": "교과서 어휘: 'wish'입니다."
      },
      {
        "id": 53,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Don't forget all our happy memories in the sixth grade. And the response was: \"I promise I will remember each of you forever.\"",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Don't forget all our happy memories in the sixth grade. And the response was: \"I promise I will remember each of you forever.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 두 사람이 서로에게 약속한 것은?",
        "options": [
          "방학 동안 매일 전화하기",
          "6학년 때의 행복한 추억을 잊지 않고 영원히 기억하기",
          "모든 사진을 삭제하기",
          "내일 아침 일찍 만나기"
        ],
        "correctIndex": 1,
        "correctAnswer": "6학년 때의 행복한 추억을 잊지 않고 영원히 기억하기",
        "explanation": "교과서 어휘: 'forget', 'wish', 'remember'입니다."
      },
      {
        "id": 54,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Look at our graduation album! We made a class album. And the response was: \"Wow, it has so many wonderful pictures of our memories.\"",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Look at our graduation album! We made a class album. And the response was: \"Wow, it has so many wonderful pictures of our memories.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 두 사람이 함께 만든 것은?",
        "options": [
          "그림 동화책",
          "학교 홍보 영상",
          "학급 신문",
          "학급 앨범 (class album)"
        ],
        "correctIndex": 3,
        "correctAnswer": "학급 앨범 (class album)",
        "explanation": "교과서 단원명 핵심 문장: 'We made a class album.'입니다."
      },
      {
        "id": 55,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Do you remember our field trip in spring? And the response was: \"Yes, I will never forget the street parade we saw.\"",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Do you remember our field trip in spring? And the response was: \"Yes, I will never forget the street parade we saw.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: B가 결코 잊지 못할 추억으로 꼽은 것은?",
        "options": [
          "거리 행진 퍼레이드를 보았던 것",
          "도시락을 떨어뜨렸던 것",
          "버스를 놓쳤던 것",
          "비가 와서 실내에 있었던 것"
        ],
        "correctIndex": 0,
        "correctAnswer": "거리 행진 퍼레이드를 보았던 것",
        "explanation": "교과서 어휘: 'forget'과 'street'입니다."
      },
      {
        "id": 56,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Look at this picture on the wall! And the response was: \"That boy in the photo is Tom when he was in the first grade.\"",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Look at this picture on the wall! And the response was: \"That boy in the photo is Tom when he was in the first grade.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 벽에 걸린 사진 속 인물은?",
        "options": [
          "선생님의 어린 시절",
          "교장 선생님",
          "사라의 여동생",
          "1학년 때의 Tom (소년)"
        ],
        "correctIndex": 3,
        "correctAnswer": "1학년 때의 Tom (소년)",
        "explanation": "교과서 어휘: 'wall'과 'boy'입니다."
      },
      {
        "id": 57,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: We solved the big English quiz together. And the response was: \"Yes, we won the first prize cup as a whole team!\"",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: We solved the big English quiz together. And the response was: \"Yes, we won the first prize cup as a whole team!\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 학급 친구들이 함께 이뤄낸 성과는?",
        "options": [
          "합창 대회에 나가지 못함",
          "연극 발표를 취소함",
          "달리기 계주에서 꼴찌를 함",
          "영어 퀴즈를 풀고 단체 1등 상을 받음"
        ],
        "correctIndex": 3,
        "correctAnswer": "영어 퀴즈를 풀고 단체 1등 상을 받음",
        "explanation": "교과서 어휘: 'quiz'와 'won(win)'입니다."
      },
      {
        "id": 58,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: What is your final wish before graduation? And the response was: \"My wish is that our friendship lasts forever.\"",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: What is your final wish before graduation? And the response was: \"My wish is that our friendship lasts forever.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 졸업을 앞둔 B의 마지막 소원은?",
        "options": [
          "친구들과의 우정이 영원히 지속되는 것",
          "숙제를 안 하는 것",
          "새 스마트폰을 사는 것",
          "게임을 하루 종일 하는 것"
        ],
        "correctIndex": 0,
        "correctAnswer": "친구들과의 우정이 영원히 지속되는 것",
        "explanation": "교과서 어휘: 'wish'입니다."
      },
      {
        "id": 59,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Don't forget all our happy memories in the sixth grade. And the response was: \"I promise I will remember each of you forever.\"",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Don't forget all our happy memories in the sixth grade. And the response was: \"I promise I will remember each of you forever.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 두 사람이 서로에게 약속한 것은?",
        "options": [
          "모든 사진을 삭제하기",
          "6학년 때의 행복한 추억을 잊지 않고 영원히 기억하기",
          "방학 동안 매일 전화하기",
          "내일 아침 일찍 만나기"
        ],
        "correctIndex": 1,
        "correctAnswer": "6학년 때의 행복한 추억을 잊지 않고 영원히 기억하기",
        "explanation": "교과서 어휘: 'forget', 'wish', 'remember'입니다."
      },
      {
        "id": 60,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★☆",
        "type": "reading_choice",
        "subtext": "Dialogue Reading: Look at our graduation album! We made a class album. And the response was: \"Wow, it has so many wonderful pictures of our memories.\"",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Dialogue Reading: Look at our graduation album! We made a class album. And the response was: \"Wow, it has so many wonderful pictures of our memories.\"\"\n질문: 위 대화문을 읽고, 질문에 알맞은 답을 고르세요.\n질문: 두 사람이 함께 만든 것은?",
        "options": [
          "학급 앨범 (class album)",
          "학급 신문",
          "그림 동화책",
          "학교 홍보 영상"
        ],
        "correctIndex": 0,
        "correctAnswer": "학급 앨범 (class album)",
        "explanation": "교과서 단원명 핵심 문장: 'We made a class album.'입니다."
      },
      {
        "id": 61,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'friend' is a new word in 12단원. In Korean, it means '친구'.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'friend' is a new word in 12단원. In Korean, it means '친구'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'friend'의 뜻은?",
        "options": [
          "친구",
          "소년",
          "만들었다 (make의 과거형)",
          "앨범, 사진첩"
        ],
        "correctIndex": 0,
        "correctAnswer": "친구",
        "explanation": "'friend'은 '친구'입니다."
      },
      {
        "id": 62,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'graduate' is a new word in 12단원. In Korean, it means '졸업하다'.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'graduate' is a new word in 12단원. In Korean, it means '졸업하다'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'graduate'의 뜻은?",
        "options": [
          "소년",
          "앨범, 사진첩",
          "만들었다 (make의 과거형)",
          "졸업하다"
        ],
        "correctIndex": 3,
        "correctAnswer": "졸업하다",
        "explanation": "'graduate'은 '졸업하다'입니다."
      },
      {
        "id": 63,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'together' is a new word in 12단원. In Korean, it means '함께'.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'together' is a new word in 12단원. In Korean, it means '함께'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'together'의 뜻은?",
        "options": [
          "앨범, 사진첩",
          "만들었다 (make의 과거형)",
          "소년",
          "함께"
        ],
        "correctIndex": 3,
        "correctAnswer": "함께",
        "explanation": "'together'은 '함께'입니다."
      },
      {
        "id": 64,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'made' is a new word in 12단원. In Korean, it means '만들었다 (make의 과거형)'.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'made' is a new word in 12단원. In Korean, it means '만들었다 (make의 과거형)'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'made'의 뜻은?",
        "options": [
          "소년",
          "앨범, 사진첩",
          "잊다, 잊어버리다",
          "만들었다 (make의 과거형)"
        ],
        "correctIndex": 3,
        "correctAnswer": "만들었다 (make의 과거형)",
        "explanation": "'made'은 '만들었다 (make의 과거형)'입니다."
      },
      {
        "id": 65,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'album' is a new word in 12단원. In Korean, it means '앨범, 사진첩'.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'album' is a new word in 12단원. In Korean, it means '앨범, 사진첩'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'album'의 뜻은?",
        "options": [
          "만들었다 (make의 과거형)",
          "소년",
          "앨범, 사진첩",
          "잊다, 잊어버리다"
        ],
        "correctIndex": 2,
        "correctAnswer": "앨범, 사진첩",
        "explanation": "'album'은 '앨범, 사진첩'입니다."
      },
      {
        "id": 66,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'boy' is a new word in 12단원. In Korean, it means '소년'.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'boy' is a new word in 12단원. In Korean, it means '소년'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'boy'의 뜻은?",
        "options": [
          "잊다, 잊어버리다",
          "소년",
          "만들었다 (make의 과거형)",
          "앨범, 사진첩"
        ],
        "correctIndex": 1,
        "correctAnswer": "소년",
        "explanation": "'boy'은 '소년'입니다."
      },
      {
        "id": 67,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'forget' is a new word in 12단원. In Korean, it means '잊다, 잊어버리다'.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'forget' is a new word in 12단원. In Korean, it means '잊다, 잊어버리다'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'forget'의 뜻은?",
        "options": [
          "잊다, 잊어버리다",
          "앨범, 사진첩",
          "만들었다 (make의 과거형)",
          "소년"
        ],
        "correctIndex": 0,
        "correctAnswer": "잊다, 잊어버리다",
        "explanation": "'forget'은 '잊다, 잊어버리다'입니다."
      },
      {
        "id": 68,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'quiz' is a new word in 12단원. In Korean, it means '퀴즈, 간단한 시험'.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'quiz' is a new word in 12단원. In Korean, it means '퀴즈, 간단한 시험'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'quiz'의 뜻은?",
        "options": [
          "소년",
          "만들었다 (make의 과거형)",
          "퀴즈, 간단한 시험",
          "앨범, 사진첩"
        ],
        "correctIndex": 2,
        "correctAnswer": "퀴즈, 간단한 시험",
        "explanation": "'quiz'은 '퀴즈, 간단한 시험'입니다."
      },
      {
        "id": 69,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'street' is a new word in 12단원. In Korean, it means '거리, 길'.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'street' is a new word in 12단원. In Korean, it means '거리, 길'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'street'의 뜻은?",
        "options": [
          "만들었다 (make의 과거형)",
          "거리, 길",
          "앨범, 사진첩",
          "소년"
        ],
        "correctIndex": 1,
        "correctAnswer": "거리, 길",
        "explanation": "'street'은 '거리, 길'입니다."
      },
      {
        "id": 70,
        "domain": "읽기",
        "domainIcon": "📖",
        "difficulty": "★★★",
        "type": "reading_choice",
        "subtext": "Vocabulary Note: The word 'wall' is a new word in 12단원. In Korean, it means '벽'.",
        "question": "[읽기 · 12단원] 다음 글을 읽고 물음에 답하세요.\n\"Vocabulary Note: The word 'wall' is a new word in 12단원. In Korean, it means '벽'.\"\n질문: 윗글에서 설명하고 있는 신출 어휘 'wall'의 뜻은?",
        "options": [
          "만들었다 (make의 과거형)",
          "앨범, 사진첩",
          "소년",
          "벽"
        ],
        "correctIndex": 3,
        "correctAnswer": "벽",
        "explanation": "'wall'은 '벽'입니다."
      },
      {
        "id": 71,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 12단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"만들었다 (make의 과거형)\" (첫 글자: m, 총 4글자)",
        "correctAnswer": "made",
        "explanation": "'만들었다 (make의 과거형)'의 영어 표기는 'made'입니다."
      },
      {
        "id": 72,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 12단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"앨범, 사진첩\" (첫 글자: a, 총 5글자)",
        "correctAnswer": "album",
        "explanation": "'앨범, 사진첩'의 영어 표기는 'album'입니다."
      },
      {
        "id": 73,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 12단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"소년\" (첫 글자: b, 총 3글자)",
        "correctAnswer": "boy",
        "explanation": "'소년'의 영어 표기는 'boy'입니다."
      },
      {
        "id": 74,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 12단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"잊다, 잊어버리다\" (첫 글자: f, 총 6글자)",
        "correctAnswer": "forget",
        "explanation": "'잊다, 잊어버리다'의 영어 표기는 'forget'입니다."
      },
      {
        "id": 75,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★☆☆",
        "type": "writing_text",
        "question": "[쓰기 · 12단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"퀴즈, 간단한 시험\" (첫 글자: q, 총 4글자)",
        "correctAnswer": "quiz",
        "explanation": "'퀴즈, 간단한 시험'의 영어 표기는 'quiz'입니다."
      },
      {
        "id": 76,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 12단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"거리, 길\" (첫 글자: s, 총 6글자)",
        "correctAnswer": "street",
        "explanation": "'거리, 길'의 영어 표기는 'street'입니다."
      },
      {
        "id": 77,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 12단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"벽\" (첫 글자: w, 총 4글자)",
        "correctAnswer": "wall",
        "explanation": "'벽'의 영어 표기는 'wall'입니다."
      },
      {
        "id": 78,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 12단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"소원, 바라다\" (첫 글자: w, 총 4글자)",
        "correctAnswer": "wish",
        "explanation": "'소원, 바라다'의 영어 표기는 'wish'입니다."
      },
      {
        "id": 79,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 12단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"반, 학급\" (첫 글자: c, 총 5글자)",
        "correctAnswer": "class",
        "explanation": "'반, 학급'의 영어 표기는 'class'입니다."
      },
      {
        "id": 80,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★☆",
        "type": "writing_text",
        "question": "[쓰기 · 12단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"추억, 기억\" (첫 글자: m, 총 6글자)",
        "correctAnswer": "memory",
        "explanation": "'추억, 기억'의 영어 표기는 'memory'입니다."
      },
      {
        "id": 81,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 12단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"기억하다\" (첫 글자: r, 총 8글자)",
        "correctAnswer": "remember",
        "explanation": "'기억하다'의 영어 표기는 'remember'입니다."
      },
      {
        "id": 82,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 12단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"사진\" (첫 글자: p, 총 5글자)",
        "correctAnswer": "photo",
        "explanation": "'사진'의 영어 표기는 'photo'입니다."
      },
      {
        "id": 83,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 12단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"친구\" (첫 글자: f, 총 6글자)",
        "correctAnswer": "friend",
        "explanation": "'친구'의 영어 표기는 'friend'입니다."
      },
      {
        "id": 84,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 12단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"졸업하다\" (첫 글자: g, 총 8글자)",
        "correctAnswer": "graduate",
        "explanation": "'졸업하다'의 영어 표기는 'graduate'입니다."
      },
      {
        "id": 85,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_text",
        "question": "[쓰기 · 12단원 단답형] 다음 우리말 뜻에 해당하는 영어 단어를 소문자로 정확히 입력하세요.\n뜻: \"함께\" (첫 글자: t, 총 8글자)",
        "correctAnswer": "together",
        "explanation": "'함께'의 영어 표기는 'together'입니다."
      },
      {
        "id": 86,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"우리는 학급 앨범을 만들었어.\"",
        "chips": [
          "We",
          "made",
          "a",
          "class",
          "album."
        ],
        "correctAnswer": "We made a class album.",
        "explanation": "'We made a class album.'은 '우리는 학급 앨범을 만들었어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 87,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"나는 이 행복했던 한 해를 결코 잊지 못할 거야.\"",
        "chips": [
          "I",
          "will",
          "never",
          "forget",
          "this",
          "happy",
          "year."
        ],
        "correctAnswer": "I will never forget this happy year.",
        "explanation": "'I will never forget this happy year.'은 '나는 이 행복했던 한 해를 결코 잊지 못할 거야.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 88,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"교실 벽에 걸린 사진들을 봐.\"",
        "chips": [
          "Look",
          "at",
          "the",
          "photos",
          "on",
          "the",
          "classroom",
          "wall."
        ],
        "correctAnswer": "Look at the photos on the classroom wall.",
        "explanation": "'Look at the photos on the classroom wall.'은 '교실 벽에 걸린 사진들을 봐.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 89,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"앞줄에 있는 소년이 밝게 웃고 있어.\"",
        "chips": [
          "The",
          "boy",
          "in",
          "the",
          "front",
          "row",
          "is",
          "smiling",
          "brightly."
        ],
        "correctAnswer": "The boy in the front row is smiling brightly.",
        "explanation": "'The boy in the front row is smiling brightly.'은 '앞줄에 있는 소년이 밝게 웃고 있어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 90,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"우리는 영어 퀴즈에서 황금 컵을 땄어.\"",
        "chips": [
          "We",
          "won",
          "the",
          "golden",
          "cup",
          "in",
          "the",
          "English",
          "quiz."
        ],
        "correctAnswer": "We won the golden cup in the English quiz.",
        "explanation": "'We won the golden cup in the English quiz.'은 '우리는 영어 퀴즈에서 황금 컵을 땄어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 91,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"우리는 다채로운 가을 거리를 함께 걸었어.\"",
        "chips": [
          "We",
          "walked",
          "down",
          "the",
          "colorful",
          "autumn",
          "street",
          "together."
        ],
        "correctAnswer": "We walked down the colorful autumn street together.",
        "explanation": "'We walked down the colorful autumn street together.'은 '우리는 다채로운 가을 거리를 함께 걸었어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 92,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"너의 중학교 생활을 위한 소원을 빌어보렴.\"",
        "chips": [
          "Make",
          "a",
          "wish",
          "for",
          "your",
          "middle",
          "school",
          "life."
        ],
        "correctAnswer": "Make a wish for your middle school life.",
        "explanation": "'Make a wish for your middle school life.'은 '너의 중학교 생활을 위한 소원을 빌어보렴.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 93,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"우리의 소중한 6학년 추억들을 잊지 마.\"",
        "chips": [
          "Don't",
          "forget",
          "our",
          "precious",
          "sixth",
          "grade",
          "memories."
        ],
        "correctAnswer": "Don't forget our precious sixth grade memories.",
        "explanation": "'Don't forget our precious sixth grade memories.'은 '우리의 소중한 6학년 추억들을 잊지 마.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 94,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"그녀는 선생님을 위한 특별한 선물을 만들었어.\"",
        "chips": [
          "She",
          "made",
          "a",
          "special",
          "gift",
          "for",
          "her",
          "teacher."
        ],
        "correctAnswer": "She made a special gift for her teacher.",
        "explanation": "'She made a special gift for her teacher.'은 '그녀는 선생님을 위한 특별한 선물을 만들었어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 95,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"우리가 처음 만났던 날을 기억하니?\"",
        "chips": [
          "Do",
          "you",
          "remember",
          "the",
          "day",
          "we",
          "first",
          "met?"
        ],
        "correctAnswer": "Do you remember the day we first met?",
        "explanation": "'Do you remember the day we first met?'은 '우리가 처음 만났던 날을 기억하니?'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 96,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"모든 사진마다 따뜻하고 달콤한 이야기가 담겨 있어.\"",
        "chips": [
          "Every",
          "photo",
          "tells",
          "a",
          "warm",
          "and",
          "sweet",
          "story."
        ],
        "correctAnswer": "Every photo tells a warm and sweet story.",
        "explanation": "'Every photo tells a warm and sweet story.'은 '모든 사진마다 따뜻하고 달콤한 이야기가 담겨 있어.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 97,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"너희 모두에게 큰 행복과 건강이 가득하길 바라.\"",
        "chips": [
          "I",
          "wish",
          "you",
          "all",
          "great",
          "happiness",
          "and",
          "health."
        ],
        "correctAnswer": "I wish you all great happiness and health.",
        "explanation": "'I wish you all great happiness and health.'은 '너희 모두에게 큰 행복과 건강이 가득하길 바라.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 98,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"우리는 언제나 영원히 최고의 반일 거야.\"",
        "chips": [
          "We",
          "will",
          "always",
          "be",
          "the",
          "best",
          "class",
          "forever."
        ],
        "correctAnswer": "We will always be the best class forever.",
        "explanation": "'We will always be the best class forever.'은 '우리는 언제나 영원히 최고의 반일 거야.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 99,
        "domain": "쓰기",
        "domainIcon": "✍️",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[쓰기 · 12단원 문장 배열] 단어 카드를 순서대로 바르게 터치하여 올바른 문장을 완성하세요.\n우리말: \"올 한 해 내 친구가 되어 주어서 정말 고마워.\"",
        "chips": [
          "Thank",
          "you",
          "for",
          "being",
          "my",
          "friend",
          "this",
          "whole",
          "year."
        ],
        "correctAnswer": "Thank you for being my friend this whole year.",
        "explanation": "'Thank you for being my friend this whole year.'은 '올 한 해 내 친구가 되어 주어서 정말 고마워.'을 의미하는 교과서 핵심 문장입니다."
      },
      {
        "id": 100,
        "domain": "골든벨",
        "domainIcon": "🔔",
        "difficulty": "★★★",
        "type": "writing_scramble",
        "question": "[최종 골든벨 문제] 다음 우리말에 맞도록 주어진 단어 카드를 순서대로 바르게 배열하세요!\n우리말: \"초등학교 졸업을 진심으로 축하해!\"",
        "chips": [
          "Congratulations",
          "on",
          "graduating",
          "from",
          "elementary",
          "school."
        ],
        "correctAnswer": "Congratulations on graduating from elementary school!",
        "explanation": "'Congratulations on graduating from elementary school!'은 '초등학교 졸업을 진심으로 축하해!'을 의미하는 교과서 핵심 문장입니다."
      }
    ]
  }
};

    // ────────────────────────────────────────────────────────
    // 2. 교사용 지도서 엄선 20문제 고정 마스터 프리셋 (CURRICULUM_20)
    // ────────────────────────────────────────────────────────
    const MASTER_20_HIGH_LEVEL = [
  {
    "id": 1,
    "domain": "듣기",
    "domainIcon": "🎧",
    "difficulty": "★☆☆",
    "type": "listening_choice",
    "audioText": "A: What grade are you in? B: I am in the sixth grade.",
    "question": "[듣기 · 1단원] 대화를 듣고, B의 학년으로 알맞은 것을 고르세요.",
    "options": [
      "6학년",
      "5학년",
      "4학년",
      "3학년"
    ],
    "correctIndex": 0,
    "correctAnswer": "6학년",
    "explanation": "B는 'I am in the sixth grade(나는 6학년이야)'라고 말했습니다."
  },
  {
    "id": 2,
    "domain": "듣기",
    "domainIcon": "🎧",
    "difficulty": "★☆☆",
    "type": "listening_choice",
    "audioText": "A: What season do you like? B: I like spring. I can see beautiful flowers.",
    "question": "[듣기 · 2단원] 대화를 듣고, B가 좋아하는 계절을 고르세요.",
    "options": [
      "봄 (Spring)",
      "여름 (Summer)",
      "가을 (Fall)",
      "겨울 (Winter)"
    ],
    "correctIndex": 0,
    "correctAnswer": "봄 (Spring)",
    "explanation": "'I like spring'이라고 답했습니다."
  },
  {
    "id": 3,
    "domain": "듣기",
    "domainIcon": "🎧",
    "difficulty": "★★☆",
    "type": "listening_choice",
    "audioText": "A: When is your birthday? B: It is on May 7th. I can't wait!",
    "question": "[듣기 · 3단원] 대화를 듣고, B의 생일 날짜로 알맞은 것을 고르세요.",
    "options": [
      "5월 7일",
      "5월 17일",
      "6월 7일",
      "3월 7일"
    ],
    "correctIndex": 0,
    "correctAnswer": "5월 7일",
    "explanation": "'May 7th'는 5월 7일입니다."
  },
  {
    "id": 4,
    "domain": "듣기",
    "domainIcon": "🎧",
    "difficulty": "★★☆",
    "type": "listening_choice",
    "audioText": "A: Why are you happy? B: Because I got a black belt in Taekwondo!",
    "question": "[듣기 · 4단원] 대화를 듣고, B가 기뻐하는 이유로 알맞은 것은?",
    "options": [
      "태권도 검은 띠를 따서",
      "새 신발을 선물받아서",
      "축구 경기에서 이겨서",
      "시험을 잘 봐서"
    ],
    "correctIndex": 0,
    "correctAnswer": "태권도 검은 띠를 따서",
    "explanation": "'Because I got a black belt'입니다."
  },
  {
    "id": 5,
    "domain": "듣기",
    "domainIcon": "🎧",
    "difficulty": "★★☆",
    "type": "listening_choice",
    "audioText": "A: Where is ABC Library? B: Go straight one block and turn right at Nuri Bank. It is next to the bank.",
    "question": "[듣기 · 5단원] ABC 도서관의 위치 안내로 올바른 것은?",
    "options": [
      "한 블록 직진 후 누리은행에서 우회전, 은행 옆",
      "두 블록 직진 후 좌회전, 우체국 맞은편",
      "신호등 건너 지하철역 앞",
      "공원 입구 바로 뒤"
    ],
    "correctIndex": 0,
    "correctAnswer": "한 블록 직진 후 누리은행에서 우회전, 은행 옆",
    "explanation": "'Go straight one block and turn right at Nuri Bank. It is next to the bank.'입니다."
  },
  {
    "id": 6,
    "domain": "듣기",
    "domainIcon": "🎧",
    "difficulty": "★★☆",
    "type": "listening_choice",
    "audioText": "A: What is she wearing today? B: She is wearing a yellow shirt and blue pants.",
    "question": "[듣기 · 6단원] 그녀의 오늘 옷차림 묘사로 알맞은 것은?",
    "options": [
      "노란 셔츠와 파란 바지",
      "분홍 원피스와 흰 모자",
      "빨간 스웨터와 검정 바지",
      "초록 재킷과 갈색 바지"
    ],
    "correctIndex": 0,
    "correctAnswer": "노란 셔츠와 파란 바지",
    "explanation": "'wearing a yellow shirt and blue pants'입니다."
  },
  {
    "id": 7,
    "domain": "듣기",
    "domainIcon": "🎧",
    "difficulty": "★★★",
    "type": "listening_choice",
    "audioText": "A: Can you come to the movie festival? B: Sure, I would love to! When does it start?",
    "question": "[듣기 · 7단원] 대화를 듣고, B의 응답 태도로 알맞은 것을 고르세요.",
    "options": [
      "기꺼이 영화제에 가겠다고 수락함",
      "일정이 바빠서 거절함",
      "다른 영화를 보자고 제안함",
      "표를 예매해 달라고 부탁함"
    ],
    "correctIndex": 0,
    "correctAnswer": "기꺼이 영화제에 가겠다고 수락함",
    "explanation": "'Sure, I would love to!'는 기꺼이 가겠다는 긍정의 수락 표현입니다."
  },
  {
    "id": 8,
    "domain": "읽기",
    "domainIcon": "📖",
    "difficulty": "★☆☆",
    "type": "reading_choice",
    "subtext": "A giraffe is taller than an elephant. A giraffe has a long neck, so it is taller than the tree.",
    "question": "[읽기 · 8단원] 윗글의 내용과 일치하는 비교 문장을 고르세요.",
    "options": [
      "A giraffe is taller than an elephant.",
      "An elephant is taller than a giraffe.",
      "The tree is taller than the giraffe.",
      "Both animals have the same height."
    ],
    "correctIndex": 0,
    "correctAnswer": "A giraffe is taller than an elephant.",
    "explanation": "기린은 코끼리보다 키가 더 큽니다."
  },
  {
    "id": 9,
    "domain": "읽기",
    "domainIcon": "📖",
    "difficulty": "★★☆",
    "type": "reading_choice",
    "subtext": "Minsoo: What are you going to do this vacation? Kelly: I am going to camp in the forest and sleep in a tent.",
    "question": "[읽기 · 9단원] 윗글에서 Kelly가 방학 동안 할 일로 알맞은 것은?",
    "options": [
      "숲에서 캠핑하고 텐트에서 자기",
      "집에서 방 청소만 하기",
      "도서관에서 책 빌려 읽기",
      "동물원에 자원봉사 가기"
    ],
    "correctIndex": 0,
    "correctAnswer": "숲에서 캠핑하고 텐트에서 자기",
    "explanation": "'camp in the forest and sleep in a tent'입니다."
  },
  {
    "id": 10,
    "domain": "읽기",
    "domainIcon": "📖",
    "difficulty": "★★☆",
    "type": "reading_choice",
    "subtext": "Health Habit: How often do you eat vegetables? I eat vegetables three times a day to stay healthy.",
    "question": "[읽기 · 10단원] 윗글에서 말하는 사람의 채소 섭취 빈도는?",
    "options": [
      "하루에 세 번 (three times a day)",
      "일주일에 한 번",
      "한 달에 두 번",
      "거의 먹지 않음"
    ],
    "correctIndex": 0,
    "correctAnswer": "하루에 세 번 (three times a day)",
    "explanation": "'three times a day'는 하루에 세 번입니다."
  },
  {
    "id": 11,
    "domain": "읽기",
    "domainIcon": "📖",
    "difficulty": "★★☆",
    "type": "reading_choice",
    "subtext": "Do you know anything about Tuho? It is a traditional Korean game. Players throw sticks into a pot.",
    "question": "[읽기 · 11단원] 윗글에서 설명하고 있는 전통 놀이 Tuho(투호)의 규칙은?",
    "options": [
      "항아리 안으로 막대기를 던져 넣기",
      "줄을 넘으며 뛰기",
      "돌을 던져 표적을 맞히기",
      "모래판 위에서 힘겨루기"
    ],
    "correctIndex": 0,
    "correctAnswer": "항아리 안으로 막대기를 던져 넣기",
    "explanation": "'throw sticks into a pot'입니다."
  },
  {
    "id": 12,
    "domain": "읽기",
    "domainIcon": "📖",
    "difficulty": "★★☆",
    "type": "reading_choice",
    "subtext": "Look at the photos on the wall! We made a class album. I will never forget our happy memories in the sixth grade.",
    "question": "[읽기 · 12단원] 윗글에서 학생들이 함께 만든 것은 무엇인가요?",
    "options": [
      "학급 앨범 (class album)",
      "학급 신문",
      "학교 홍보 만화",
      "졸업 문집"
    ],
    "correctIndex": 0,
    "correctAnswer": "학급 앨범 (class album)",
    "explanation": "'We made a class album'입니다."
  },
  {
    "id": 13,
    "domain": "읽기",
    "domainIcon": "📖",
    "difficulty": "★★★",
    "type": "reading_choice",
    "subtext": "Teacher: How do you spell Linh Phan? Student: It is L-I-N-H P-H-A-N. She is a new student in our class.",
    "question": "[읽기 · 1단원] 윗글에서 언급된 새 친구의 정확한 이름 철자는?",
    "options": [
      "L-I-N-H P-H-A-N",
      "L-I-N P-H-A-N",
      "L-E-N-H P-A-N",
      "L-I-N-H F-A-N"
    ],
    "correctIndex": 0,
    "correctAnswer": "L-I-N-H P-H-A-N",
    "explanation": "철자는 L-I-N-H P-H-A-N입니다."
  },
  {
    "id": 14,
    "domain": "읽기",
    "domainIcon": "📖",
    "difficulty": "★★★",
    "type": "reading_choice",
    "subtext": "A cheetah can run 100 km/h, but a lion runs 80 km/h. Therefore, a cheetah is faster than a lion.",
    "question": "[읽기 · 8단원] 윗글의 빈칸에 들어갈 알맞은 비교급 단어는?\n'A cheetah is ________ than a lion.'",
    "options": [
      "faster",
      "slower",
      "taller",
      "heavier"
    ],
    "correctIndex": 0,
    "correctAnswer": "faster",
    "explanation": "치타가 사자보다 더 빠르므로 'faster'입니다."
  },
  {
    "id": 15,
    "domain": "쓰기",
    "domainIcon": "✍️",
    "difficulty": "★★☆",
    "type": "writing_text",
    "question": "[쓰기 · 1단원 단답형] '네 번째의'를 뜻하는 영어 서수 단어를 소문자로 쓰세요.",
    "correctAnswer": "fourth",
    "explanation": "네 번째는 fourth입니다."
  },
  {
    "id": 16,
    "domain": "쓰기",
    "domainIcon": "✍️",
    "difficulty": "★★☆",
    "type": "writing_text",
    "question": "[쓰기 · 8단원 단답형] '더 무거운'을 뜻하는 영어 비교급 단어(h로 시작하는 7글자)를 소문자로 쓰세요.",
    "correctAnswer": "heavier",
    "explanation": "더 무거운은 heavier입니다."
  },
  {
    "id": 17,
    "domain": "쓰기",
    "domainIcon": "✍️",
    "difficulty": "★★☆",
    "type": "writing_scramble",
    "question": "[쓰기 · 1단원 문장 배열] 단어 카드를 순서대로 터치하여 문장을 완성하세요.\n우리말: '너는 몇 학년이니?'",
    "chips": [
      "What",
      "grade",
      "are",
      "you",
      "in?"
    ],
    "correctAnswer": "What grade are you in?",
    "explanation": "학년을 묻는 핵심 표현입니다."
  },
  {
    "id": 18,
    "domain": "쓰기",
    "domainIcon": "✍️",
    "difficulty": "★★★",
    "type": "writing_scramble",
    "question": "[쓰기 · 4단원 문장 배열] 단어 카드를 순서대로 터치하여 문장을 완성하세요.\n우리말: '너는 왜 기분이 좋니?'",
    "chips": [
      "Why",
      "are",
      "you",
      "happy?"
    ],
    "correctAnswer": "Why are you happy?",
    "explanation": "이유를 묻는 핵심 의문문입니다."
  },
  {
    "id": 19,
    "domain": "쓰기",
    "domainIcon": "✍️",
    "difficulty": "★★★",
    "type": "writing_scramble",
    "question": "[쓰기 · 5단원 문장 배열] 단어 카드를 순서대로 터치하여 문장을 완성하세요.\n우리말: 'ABC 도서관이 어디에 있나요?'",
    "chips": [
      "Where",
      "is",
      "ABC",
      "Library?"
    ],
    "correctAnswer": "Where is ABC Library?",
    "explanation": "길을 묻는 교과서 핵심 문장입니다."
  },
  {
    "id": 20,
    "domain": "골든벨",
    "domainIcon": "🔔",
    "difficulty": "★★★",
    "type": "writing_scramble",
    "question": "[최종 20번 골든벨] 주어진 단어 카드를 순서대로 바르게 배열하여 완성하세요!\n우리말: '우리는 학급 앨범을 만들었어.'",
    "chips": [
      "We",
      "made",
      "a",
      "class",
      "album."
    ],
    "correctAnswer": "We made a class album.",
    "explanation": "'We made a class album.'는 6학년 12단원 최종 수료 핵심 문장입니다."
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
