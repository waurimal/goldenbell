/**
 * goldenbell-data.js
 * 초등 영어 지도서 1~12단원 고난도 문장/대화 데이터베이스 및 20문제 생성 엔진
 */
(function(window) {
    'use strict';

/**
 * scratch/goldenbell_curriculum_engine.js
 * 1~12단원 고난도 문장/대화 데이터베이스 및 20문제 생성 엔진
 */

const GOLDENBELL_UNITS = {
    "6G_L01": {
        name: "1단원: 서수와 학년 · 동아리 (What grade are you in?)",
        grade: 6,
        theme: "Ordinal Numbers & School Clubs",
        dialogues: [
            {
                audioText: "A: Hello, new friend! What grade are you in? B: I am in the sixth grade.",
                question: "대화를 듣고, B의 학년으로 알맞은 것을 고르세요.",
                options: ["6학년", "5학년", "4학년", "3학년"],
                correctIndex: 0,
                correctAnswer: "6학년",
                explanation: "'I am in the sixth grade'는 '나는 6학년이야'라는 뜻입니다."
            },
            {
                audioText: "A: How do you spell your last name? B: It is K-I-M, Kim.",
                question: "대화를 듣고, A가 B에게 질문한 내용으로 알맞은 것은?",
                options: ["성의 철자", "좋아하는 과목", "교실의 위치", "소속 동아리"],
                correctIndex: 0,
                correctAnswer: "성의 철자",
                explanation: "'How do you spell your last name?'은 성(last name)의 철자를 묻는 질문입니다."
            },
            {
                audioText: "A: Do you have any plans after school? B: Yes, I want to join the dance club.",
                question: "대화를 듣고, B가 방과 후에 가입하고 싶어 하는 동아리는?",
                options: ["댄스 동아리", "로봇 동아리", "미술 동아리", "밴드 동아리"],
                correctIndex: 0,
                correctAnswer: "댄스 동아리",
                explanation: "'join the dance club'은 댄스 동아리에 가입하다는 뜻입니다."
            },
            {
                audioText: "A: Where is your new classroom? B: It is on the third floor next to the library.",
                question: "대화를 듣고, B의 교실 위치로 가장 알맞은 것을 고르세요.",
                options: ["3층 도서관 옆", "2층 교무실 앞", "4층 미술실 옆", "1층 보건실 건너편"],
                correctIndex: 0,
                correctAnswer: "3층 도서관 옆",
                explanation: "'on the third floor next to the library'는 3층 도서관 옆입니다."
            }
        ],
        readingQuestions: [
            {
                question: "대화를 읽고, 빈칸에 들어갈 가장 자연스러운 문장을 고르세요.",
                subtext: "A: Welcome to our school! What grade are you in?\nB: ____________________________________",
                options: ["I'm in the sixth grade.", "I have three notebooks.", "It is warm and sunny.", "I like playing soccer."],
                correctIndex: 0,
                correctAnswer: "I'm in the sixth grade.",
                explanation: "학년을 묻는 질문(What grade are you in?)에는 'I'm in the sixth grade.'로 답해야 합니다."
            },
            {
                question: "다음 중 어법상 가장 올바른 문장을 고르세요.",
                subtext: "학년 및 서수 표현",
                options: ["I am in the sixth grade.", "I am in the six grade.", "Today is the five day of May.", "She is in the four grade."],
                correctIndex: 0,
                correctAnswer: "I am in the sixth grade.",
                explanation: "학년 앞에는 기수(six)가 아닌 서수(sixth)를 사용합니다."
            },
            {
                question: "문맥상 빈칸에 공통으로 들어갈 가장 알맞은 단어는?",
                subtext: "• I want to _______ the school music club.\n• Would you like to _______ us for lunch?",
                options: ["join", "break", "sing", "throw"],
                correctIndex: 0,
                correctAnswer: "join",
                explanation: "'join'은 동아리에 들다, 또는 사람들과 함께하다라는 뜻입니다."
            },
            {
                question: "다음 글을 읽고 내용과 일치하지 않는 것을 고르세요.",
                subtext: "Hello, my name is Mina. I am in the sixth grade. My classroom is on the second floor. I want to join the drawing club because I like art.",
                options: ["미나의 교실은 4층에 있다.", "미나는 6학년이다.", "미나는 미술을 좋아한다.", "미나는 그림 동아리에 가입하고 싶어 한다."],
                correctIndex: 0,
                correctAnswer: "미나의 교실은 4층에 있다.",
                explanation: "지문에서 'My classroom is on the second floor(2층)'이라고 명시되어 있습니다."
            }
        ],
        writingInContext: [
            {
                question: "문맥에 알맞게 빈칸의 영어 단어를 바르게 완성하세요.",
                subtext: "He won the f______ prize in the school contest. (첫 번째의)",
                correctAnswer: "first",
                explanation: "'첫 번째의'를 뜻하는 영어 서수는 'first'입니다."
            },
            {
                question: "문맥에 알맞게 빈칸의 영어 단어를 바르게 입력하세요.",
                subtext: "I want to j______ the English speech club. (가입하다)",
                correctAnswer: "join",
                explanation: "'가입하다'는 영어로 'join'입니다."
            }
        ],
        scrambles: [
            {
                subtext: "너는 몇 학년이니?",
                chips: ["What", "grade", "are", "you", "in", "?"],
                correctAnswer: "What grade are you in?",
                explanation: "What grade are you in?"
            },
            {
                subtext: "나는 댄스 동아리에 가입하고 싶어.",
                chips: ["I", "want", "to", "join", "the", "dance", "club", "."],
                correctAnswer: "I want to join the dance club.",
                explanation: "I want to join the dance club."
            },
            {
                subtext: "너의 성의 철자는 어떻게 되니?",
                chips: ["How", "do", "you", "spell", "your", "last", "name", "?"],
                correctAnswer: "How do you spell your last name?",
                explanation: "How do you spell your last name?"
            }
        ],
        goldenBellScramble: {
            subtext: "[최종 20번 골든벨] 나는 6학년이고 새로운 동아리에 가입하고 싶어.",
            chips: ["I", "am", "in", "the", "sixth", "grade", "and", "want", "to", "join", "a", "club", "."],
            correctAnswer: "I am in the sixth grade and want to join a club.",
            explanation: "I am in the sixth grade and want to join a club."
        }
    },

    "6G_L02": {
        name: "2단원: 계절과 날씨 · 이유 (What's your favorite season?)",
        grade: 6,
        theme: "Seasons, Weather & Reasons",
        dialogues: [
            {
                audioText: "A: What is your favorite season? B: My favorite season is spring because I can see colorful flowers.",
                question: "대화를 듣고, B가 봄을 좋아하는 이유로 알맞은 것은?",
                options: ["알록달록한 꽃들을 볼 수 있어서", "시원한 바람이 불어서", "눈사람을 만들 수 있어서", "수영을 할 수 있어서"],
                correctIndex: 0,
                correctAnswer: "알록달록한 꽃들을 볼 수 있어서",
                explanation: "'because I can see colorful flowers'는 아름다운 꽃을 볼 수 있기 때문입니다."
            },
            {
                audioText: "A: Why do you like winter? B: Because I can go skiing and make a snowman with my friends.",
                question: "대화를 듣고, B가 겨울에 친구들과 하고 싶어 하는 활동은?",
                options: ["스키 타기와 눈사람 만들기", "캠핑과 별 보기", "바다에서 수영하기", "자전거 타기와 소풍"],
                correctIndex: 0,
                correctAnswer: "스키 타기와 눈사람 만들기",
                explanation: "'go skiing and make a snowman'은 스키 타기와 눈사람 만들기입니다."
            },
            {
                audioText: "A: How is the weather today? B: It is warm and sunny, so let's go outside.",
                question: "대화를 듣고, 오늘의 날씨에 대한 설명으로 가장 알맞은 것은?",
                options: ["따뜻하고 맑음", "춥고 눈이 옴", "비가 오고 바람이 붊", "흐리고 안개가 낌"],
                correctIndex: 0,
                correctAnswer: "따뜻하고 맑음",
                explanation: "'warm and sunny'는 따뜻하고 화창한 날씨입니다."
            },
            {
                audioText: "A: Which season do you like better, summer or fall? B: I like fall because the air is fresh.",
                question: "대화를 듣고, B가 더 좋아하는 계절과 그 이유로 알맞은 것은?",
                options: ["가을 (공기가 상쾌해서)", "여름 (바다에 갈 수 있어서)", "가을 (과일이 맛있어서)", "여름 (해가 길어서)"],
                correctIndex: 0,
                correctAnswer: "가을 (공기가 상쾌해서)",
                explanation: "'I like fall because the air is fresh'는 공기가 상쾌해서 가을을 좋아한다는 뜻입니다."
            }
        ],
        readingQuestions: [
            {
                question: "다음 질문에 대한 가장 적절한 대답 문장을 고르세요.",
                subtext: "Q: Why do you like summer so much?\nA: ____________________________________",
                options: ["Because I can swim in the cool sea.", "Because it is freezing cold.", "Because I am in the sixth grade.", "Because I have a headache."],
                correctIndex: 0,
                correctAnswer: "Because I can swim in the cool sea.",
                explanation: "여름을 좋아하는 이유로 '시원한 바다에서 수영할 수 있어서'가 가장 자연스럽습니다."
            },
            {
                question: "다음 중 문맥상 밑줄 친 단어의 쓰임이 어색한 문장은?",
                subtext: "계절과 날씨의 특징",
                options: ["In winter, it is very hot and sunny outside.", "In spring, beautiful flowers bloom everywhere.", "In fall, the leaves turn red and yellow.", "In summer, the days are longer than the nights."],
                correctIndex: 0,
                correctAnswer: "In winter, it is very hot and sunny outside.",
                explanation: "겨울(winter)에는 날씨가 매우 춥지(cold), 덥고 화창한(hot and sunny) 것은 어색합니다."
            },
            {
                question: "글을 읽고, 주인공의 가장 좋아하는 계절을 고르세요.",
                subtext: "I love this season. The weather is cool and dry. The autumn leaves in the mountains are red, orange, and gold. I always go hiking with my family.",
                options: ["가을 (Fall)", "봄 (Spring)", "여름 (Summer)", "겨울 (Winter)"],
                correctIndex: 0,
                correctAnswer: "가을 (Fall)",
                explanation: "'autumn leaves(단풍잎)'와 'cool and dry(시원하고 건조한)'는 가을의 전형적인 특징입니다."
            },
            {
                question: "자연스러운 대화가 되도록 빈칸에 들어갈 접속사는?",
                subtext: "A: Why are you wearing a thick coat?\nB: _______ it is freezing cold outside.",
                options: ["Because", "Before", "Until", "Although"],
                correctIndex: 0,
                correctAnswer: "Because",
                explanation: "이유를 묻는 'Why' 질문에는 'Because(~ 때문이야)'로 대답합니다."
            }
        ],
        writingInContext: [
            {
                question: "문맥에 알맞게 빈칸의 영어 단어를 바르게 입력하세요.",
                subtext: "Spring is my favorite s______ because of flowers. (계절)",
                correctAnswer: "season",
                explanation: "'계절'은 영어로 'season'입니다."
            },
            {
                question: "문맥에 알맞게 빈칸의 영어 단어를 바르게 완성하세요.",
                subtext: "I like summer b______ I can swim every day. (~때문에)",
                correctAnswer: "because",
                explanation: "'~때문에'는 영어 접속사 'because'입니다."
            }
        ],
        scrambles: [
            {
                subtext: "네가 가장 좋아하는 계절은 무엇이니?",
                chips: ["What", "is", "your", "favorite", "season", "?"],
                correctAnswer: "What is your favorite season?",
                explanation: "What is your favorite season?"
            },
            {
                subtext: "내가 가장 좋아하는 계절은 봄이야.",
                chips: ["My", "favorite", "season", "is", "spring", "."],
                correctAnswer: "My favorite season is spring.",
                explanation: "My favorite season is spring."
            },
            {
                subtext: "아름다운 꽃들을 볼 수 있기 때문이야.",
                chips: ["Because", "I", "can", "see", "beautiful", "flowers", "."],
                correctAnswer: "Because I can see beautiful flowers.",
                explanation: "Because I can see beautiful flowers."
            }
        ],
        goldenBellScramble: {
            subtext: "[최종 20번 골든벨] 내가 가장 좋아하는 계절은 아름다운 꽃들을 볼 수 있는 봄이야.",
            chips: ["My", "favorite", "season", "is", "spring", "because", "I", "can", "see", "flowers", "."],
            correctAnswer: "My favorite season is spring because I can see flowers.",
            explanation: "My favorite season is spring because I can see flowers."
        }
    },

    "6G_L03": {
        name: "3단원: 환경과 지구 보호 · 규칙 (We should save energy)",
        grade: 6,
        theme: "Protecting the Earth & Saving Energy",
        dialogues: [
            {
                audioText: "A: Please turn off the lights when you leave the classroom. B: Okay, we should save energy for our Earth.",
                question: "안내 대화를 듣고, A가 학생들에게 당부하는 행동은?",
                options: ["교실을 나갈 때 전등 끄기", "물 아껴 쓰기", "이면지 사용하기", "분리수거 철저히 하기"],
                correctIndex: 0,
                correctAnswer: "교실을 나갈 때 전등 끄기",
                explanation: "'turn off the lights'는 전등을 끄다라는 뜻입니다."
            },
            {
                audioText: "A: What should we do for the campaign? B: Let's make an attractive poster to protect animals.",
                question: "대화를 듣고, 두 사람이 캠페인을 위해 함께 하기로 한 일은?",
                options: ["동물 보호 포스터 만들기", "나무 심기 행사 참여", "거리 쓰레기 줍기", "친환경 비누 만들기"],
                correctIndex: 0,
                correctAnswer: "동물 보호 포스터 만들기",
                explanation: "'make an attractive poster to protect animals'는 동물 보호 포스터 만들기입니다."
            },
            {
                audioText: "A: Don't waste paper cups. B: You're right. I will bring my own tumbler tomorrow.",
                question: "대화를 듣고, B가 내일부터 실천하기로 다짐한 행동은?",
                options: ["개인 텀블러(물병) 챙겨오기", "일회용 종이컵 재활용하기", "손수건 사용하기", "자전거로 등교하기"],
                correctIndex: 0,
                correctAnswer: "개인 텀블러(물병) 챙겨오기",
                explanation: "'bring my own tumbler'는 개인 텀블러를 가져오겠다는 뜻입니다."
            },
            {
                audioText: "A: You should recycle plastic bottles. Take off the plastic label first. B: Thank you for telling me.",
                question: "대화를 듣고, 플라스틱 병을 분리배출할 때 먼저 해야 할 일은?",
                options: ["비닐 라벨 떼어내기", "물로 깨끗이 씻기만 하기", "뚜껑을 닫아두기", "가위로 잘게 자르기"],
                correctIndex: 0,
                correctAnswer: "비닐 라벨 떼어내기",
                explanation: "'Take off the plastic label first'는 비닐 라벨을 먼저 떼라는 지침입니다."
            }
        ],
        readingQuestions: [
            {
                question: "다음 문장의 빈칸에 들어갈 가장 알맞은 조동사는?",
                subtext: "We ________ save energy and water to protect our planet.",
                options: ["should", "cannot", "won't", "wouldn't"],
                correctIndex: 0,
                correctAnswer: "should",
                explanation: "의무나 권고(~해야 한다)를 나타내는 조동사 'should'가 가장 적절합니다."
            },
            {
                question: "다음 환경 보호 표어의 빈칸에 알맞은 단어는?",
                subtext: "Save our Earth! We should not ________ paper and fresh water.",
                options: ["waste", "visit", "catch", "win"],
                correctIndex: 0,
                correctAnswer: "waste",
                explanation: "'waste'는 '낭비하다'라는 뜻입니다. (종이와 물을 낭비하지 맙시다.)"
            },
            {
                question: "글을 읽고, 글쓴이가 제안하는 실천 행동이 아닌 것은?",
                subtext: "Our Earth is getting warmer. What should we do? First, turn off the lights when leaving. Second, do not waste paper. Third, ride a bicycle instead of taking a car.",
                options: ["자동차를 자주 이용하기", "나갈 때 전등 끄기", "종이 낭비하지 않기", "자전거 타기"],
                correctIndex: 0,
                correctAnswer: "자동차를 자주 이용하기",
                explanation: "자동차 대신 자전거를 타자(ride a bicycle instead of taking a car)고 제안하고 있습니다."
            },
            {
                question: "다음 중 어법상 올바른 문장을 고르세요.",
                subtext: "조동사 should의 올바른 어순",
                options: ["We should turn off the lights.", "We should to turn off the lights.", "We should turning off the lights.", "We should turned off the lights."],
                correctIndex: 0,
                correctAnswer: "We should turn off the lights.",
                explanation: "조동사(should) 뒤에는 반드시 동사원형(turn off)이 와야 합니다."
            }
        ],
        writingInContext: [
            {
                question: "문맥에 알맞게 빈칸의 영어 단어를 바르게 완성하세요.",
                subtext: "We should s______ energy and water for the Earth. (절약하다)",
                correctAnswer: "save",
                explanation: "'절약하다'는 영어로 'save'입니다."
            },
            {
                question: "문맥에 알맞게 빈칸의 영어 단어를 바르게 완성하세요.",
                subtext: "Let's work together to p______ our nature. (보호하다)",
                correctAnswer: "protect",
                explanation: "'보호하다'는 영어로 'protect'입니다."
            }
        ],
        scrambles: [
            {
                subtext: "우리는 에너지를 절약해야 해.",
                chips: ["We", "should", "save", "energy", "."],
                correctAnswer: "We should save energy.",
                explanation: "We should save energy."
            },
            {
                subtext: "너는 종이를 낭비해서는 안 돼.",
                chips: ["You", "should", "not", "waste", "paper", "."],
                correctAnswer: "You should not waste paper.",
                explanation: "You should not waste paper."
            },
            {
                subtext: "지구를 위한 포스터를 만들자.",
                chips: ["Let's", "make", "a", "poster", "for", "the", "Earth", "."],
                correctAnswer: "Let's make a poster for the Earth.",
                explanation: "Let's make a poster for the Earth."
            }
        ],
        goldenBellScramble: {
            subtext: "[최종 20번 골든벨] 우리는 지구를 보호하기 위해 에너지를 절약하고 전등을 꺼야 해.",
            chips: ["We", "should", "save", "energy", "and", "turn", "off", "the", "lights", "."],
            correctAnswer: "We should save energy and turn off the lights.",
            explanation: "We should save energy and turn off the lights."
        }
    },

    "6G_L04": {
        name: "4단원: 감정과 심리 · 이유 묻기 (Why are you so happy?)",
        grade: 6,
        theme: "Feelings, Emotions & Reasons",
        dialogues: [
            {
                audioText: "A: Why are you so happy today? B: Because today is my birthday and I got a wonderful gift!",
                question: "대화를 듣고, B가 오늘 유난히 기뻐하는 이유로 알맞은 것은?",
                options: ["생일이고 멋진 선물을 받아서", "시험에서 100점을 맞아서", "축구 경기에서 이겨서", "방학이 시작되어서"],
                correctIndex: 0,
                correctAnswer: "생일이고 멋진 선물을 받아서",
                explanation: "'today is my birthday and I got a wonderful gift'는 생일이고 멋진 선물을 받았기 때문입니다."
            },
            {
                audioText: "A: What's wrong, Minsoo? You look sad. B: I lost my favorite pencil case.",
                question: "대화를 듣고, 민수가 슬퍼하는 이유로 알맞은 것은?",
                options: ["가장 좋아하는 필통을 잃어버려서", "친구와 다투어서", "숙제를 집에 두고 와서", "수업에 지각해서"],
                correctIndex: 0,
                correctAnswer: "가장 좋아하는 필통을 잃어버려서",
                explanation: "'I lost my favorite pencil case'는 필통을 잃어버렸다는 뜻입니다."
            },
            {
                audioText: "A: Don't worry, Kelly. You practiced very hard. B: Thank you for cheering me up.",
                question: "대화를 듣고, A가 켈리에게 건넨 위로의 말로 알맞은 것은?",
                options: ["걱정하지 마, 넌 정말 열심히 연습했잖아.", "더 빨리 달려야 해.", "내일 다시 시험을 보자.", "조용히 집중해."],
                correctIndex: 0,
                correctAnswer: "걱정하지 마, 넌 정말 열심히 연습했잖아.",
                explanation: "'Don't worry. You practiced very hard'는 열심히 연습했으니 걱정 말라는 위로입니다."
            },
            {
                audioText: "A: Why are you so nervous? B: Because I have to give an English speech in front of the class.",
                question: "대화를 듣고, B가 긴장하고 있는 이유로 가장 알맞은 것은?",
                options: ["학급 친구들 앞에서 영어 발표를 해야 해서", "달리기 시합을 앞두고 있어서", "부모님께 성적표를 보여드려야 해서", "길을 잃어버려서"],
                correctIndex: 0,
                correctAnswer: "학급 친구들 앞에서 영어 발표를 해야 해서",
                explanation: "'give an English speech in front of the class'는 반 친구들 앞에서의 영어 발표입니다."
            }
        ],
        readingQuestions: [
            {
                question: "상대방의 안부를 묻는 상황에서 가장 자연스러운 질문은?",
                subtext: "친구가 풀이 죽어 슬픈 표정으로 앉아 있을 때 건넬 말",
                options: ["What's wrong? You look sad.", "What time is it now?", "How much is this sweater?", "Where is the post office?"],
                correctIndex: 0,
                correctAnswer: "What's wrong? You look sad.",
                explanation: "친구가 슬퍼 보일 때는 '무슨 일 있니? 슬퍼 보여(What's wrong? You look sad.)'가 가장 알맞습니다."
            },
            {
                question: "대화의 빈칸에 들어갈 응답으로 가장 어색한 것은?",
                subtext: "A: Why are you so excited?\nB: ____________________________________",
                options: ["Because I have a high fever and headache.", "Because we won the championship game!", "Because we are going to an amusement park.", "Because tomorrow is Christmas Day!"],
                correctIndex: 0,
                correctAnswer: "Because I have a high fever and headache.",
                explanation: "신나고 신바람이 난(excited) 이유로 고열과 두통이 있다는 대답은 문맥상 어색합니다."
            },
            {
                question: "지문을 읽고, 빈칸에 들어갈 적절한 격려의 표현은?",
                subtext: "A: I am afraid I might make a mistake on stage.\nB: __________________! You can do it!",
                options: ["Don't worry", "Never mind", "No thank you", "Excuse me"],
                correctIndex: 0,
                correctAnswer: "Don't worry",
                explanation: "'걱정하지 마! 넌 할 수 있어!(Don't worry! You can do it!)'가 가장 자연스러운 격려입니다."
            },
            {
                question: "다음 단어들의 관계가 나머지와 다른 하나는?",
                subtext: "감정을 나타내는 형용사",
                options: ["hospital - library", "happy - sad", "excited - bored", "worried - calm"],
                correctIndex: 0,
                correctAnswer: "hospital - library",
                explanation: "나머지는 모두 감정의 반대말 쌍이지만, hospital - library는 장소 명사입니다."
            }
        ],
        writingInContext: [
            {
                question: "문맥에 알맞게 빈칸의 영어 단어를 바르게 완성하세요.",
                subtext: "Why are you so h______ today? (행복한, 기쁜)",
                correctAnswer: "happy",
                explanation: "'행복한'은 영어로 'happy'입니다."
            },
            {
                question: "문맥에 알맞게 빈칸의 영어 단어를 바르게 완성하세요.",
                subtext: "Don't w______, everything will be okay. (걱정하다)",
                correctAnswer: "worry",
                explanation: "'걱정하다'는 영어로 'worry'입니다."
            }
        ],
        scrambles: [
            {
                subtext: "너는 왜 그렇게 행복하니?",
                chips: ["Why", "are", "you", "so", "happy", "?"],
                correctAnswer: "Why are you so happy?",
                explanation: "Why are you so happy?"
            },
            {
                subtext: "오늘이 내 생일이기 때문이야.",
                chips: ["Because", "today", "is", "my", "birthday", "."],
                correctAnswer: "Because today is my birthday.",
                explanation: "Because today is my birthday."
            },
            {
                subtext: "걱정하지 마, 넌 할 수 있어.",
                chips: ["Don't", "worry", ",", "you", "can", "do", "it", "."],
                correctAnswer: "Don't worry , you can do it.",
                explanation: "Don't worry, you can do it."
            }
        ],
        goldenBellScramble: {
            subtext: "[최종 20번 골든벨] 너는 무슨 일이 있니? 걱정하지 마, 넌 잘할 수 있어.",
            chips: ["What", "is", "wrong", "?", "Don't", "worry", ",", "you", "can", "do", "well", "."],
            correctAnswer: "What is wrong ? Don't worry , you can do well.",
            explanation: "What is wrong? Don't worry, you can do well."
        }
    },

    "6G_L05": {
        name: "5단원: 길 찾기와 위치 안내 (Where is the hospital?)",
        grade: 6,
        theme: "Asking for & Giving Directions",
        dialogues: [
            {
                audioText: "A: Excuse me, where is the nearest hospital? B: Go straight two blocks and turn left. It's on your right.",
                question: "길 안내 대화를 듣고, 병원의 위치로 올바른 것을 고르세요.",
                options: ["두 블록 직진 후 좌회전하여 오른쪽", "한 블록 직진 후 우회전하여 왼쪽", "두 블록 직진 후 우회전하여 오른쪽", "길 건너편 서점 옆"],
                correctIndex: 0,
                correctAnswer: "두 블록 직진 후 좌회전하여 오른쪽",
                explanation: "'Go straight two blocks and turn left. It's on your right'는 두 블록 직진 후 좌회전하여 오른쪽입니다."
            },
            {
                audioText: "A: How can I get to the public library? B: Walk straight and turn right at the bank. It is next to the post office.",
                question: "대화를 듣고, 도서관(library)이 바로 옆에 위치한 건물은?",
                options: ["우체국 (post office)", "경찰서 (police station)", "마트 (supermarket)", "학교 (school)"],
                correctIndex: 0,
                correctAnswer: "우체국 (post office)",
                explanation: "'next to the post office'는 우체국 옆이라는 뜻입니다."
            },
            {
                audioText: "A: Is there a subway station near here? B: Yes, cross the street and you will see it in front of the bakery.",
                question: "대화를 듣고, 지하철역을 찾으려면 길을 건넌 후 어디 앞으로 가야 하나요?",
                options: ["빵집 앞", "꽃집 앞", "약국 앞", "은행 앞"],
                correctIndex: 0,
                correctAnswer: "빵집 앞",
                explanation: "'in front of the bakery'는 빵집 앞입니다."
            },
            {
                audioText: "A: Thank you so much for your kind help. B: You're welcome. You can't miss it!",
                question: "대화를 듣고, B가 마지막에 한 말 'You can't miss it!'의 올바른 의미는?",
                options: ["쉽게 찾으실 수 있을 거예요!", "놓치지 말고 잡으세요!", "실수하면 안 됩니다!", "늦지 않게 도착하세요!"],
                correctIndex: 0,
                correctAnswer: "쉽게 찾으실 수 있을 거예요!",
                explanation: "'You can't miss it'은 위치가 눈에 잘 띄어 쉽게 찾을 수 있다는 뜻의 일상 회화 표현입니다."
            }
        ],
        readingQuestions: [
            {
                question: "길을 물어보는 표현으로 가장 알맞은 문장을 고르세요.",
                subtext: "낯선 도시에서 시청의 위치를 정중하게 물을 때",
                options: ["Excuse me, how can I get to City Hall?", "What time does City Hall close?", "How much is City Hall?", "Why do you like City Hall?"],
                correctIndex: 0,
                correctAnswer: "Excuse me, how can I get to City Hall?",
                explanation: "길을 물을 때는 'How can I get to ~?(~에 어떻게 가나요?)'가 표준 표현입니다."
            },
            {
                question: "다음 지시문을 읽고, 목적지의 최종 위치를 고르세요.",
                subtext: "Start at the bus stop. Go straight one block. Turn right at the supermarket. Walk past the bakery. It is on your left across from the park.",
                options: ["공원 맞은편 왼쪽", "슈퍼마켓 바로 옆", "빵집 오른쪽", "버스 정류장 뒤편"],
                correctIndex: 0,
                correctAnswer: "공원 맞은편 왼쪽",
                explanation: "'on your left across from the park'는 공원 건너편 왼쪽입니다."
            },
            {
                question: "다음 단어의 짝 중 방향의 반대말 관계가 아닌 것은?",
                subtext: "위치와 방향 어휘",
                options: ["straight - library", "left - right", "front - back", "up - down"],
                correctIndex: 0,
                correctAnswer: "straight - library",
                explanation: "straight(직진)와 library(도서관)는 반대말 관계가 아닙니다."
            },
            {
                question: "자연스러운 대화가 되도록 빈칸에 들어갈 전치사는?",
                subtext: "A: Where is the restroom?\nB: It is _______ your right, next to the elevator.",
                options: ["on", "at", "in", "with"],
                correctIndex: 0,
                correctAnswer: "on",
                explanation: "'오른쪽에'를 나타낼 때는 전치사 on을 써서 'on your right'라고 합니다."
            }
        ],
        writingInContext: [
            {
                question: "문맥에 알맞게 빈칸의 영어 단어를 바르게 완성하세요.",
                subtext: "Go s______ two blocks and turn left. (똑바로, 곧장)",
                correctAnswer: "straight",
                explanation: "'똑바로, 곧장'은 영어로 'straight'입니다."
            },
            {
                question: "문맥에 알맞게 빈칸의 영어 단어를 바르게 완성하세요.",
                subtext: "Turn r______ at the traffic light. (오른쪽으로)",
                correctAnswer: "right",
                explanation: "'오른쪽'은 영어로 'right'입니다."
            }
        ],
        scrambles: [
            {
                subtext: "도서관이 어디에 있나요?",
                chips: ["Where", "is", "the", "library", "?"],
                correctAnswer: "Where is the library?",
                explanation: "Where is the library?"
            },
            {
                subtext: "두 블록 직진해서 왼쪽으로 도세요.",
                chips: ["Go", "straight", "two", "blocks", "and", "turn", "left", "."],
                correctAnswer: "Go straight two blocks and turn left.",
                explanation: "Go straight two blocks and turn left."
            },
            {
                subtext: "쉽게 찾으실 수 있을 거예요.",
                chips: ["You", "can", "not", "miss", "it", "."],
                correctAnswer: "You can not miss it.",
                explanation: "You can not miss it."
            }
        ],
        goldenBellScramble: {
            subtext: "[최종 20번 골든벨] 두 블록 곧장 가서 모퉁이에서 우회전하세요. 그것은 오른쪽에 있습니다.",
            chips: ["Go", "straight", "two", "blocks", "and", "turn", "right", "on", "your", "right", "."],
            correctAnswer: "Go straight two blocks and turn right on your right.",
            explanation: "Go straight two blocks and turn right on your right."
        }
    },

    "6G_L06": {
        name: "6단원: 외모와 인물 묘사 (What does she look like?)",
        grade: 6,
        theme: "Describing Appearance & Clothes",
        dialogues: [
            {
                audioText: "A: What does she look like? B: She has long straight black hair and wears red glasses.",
                question: "인물 묘사를 듣고, 상대방의 외모 특징으로 알맞은 것은?",
                options: ["긴 생머리에 붉은색 안경을 썼다", "짧은 곱슬머리에 모자를 썼다", "갈색 단발머리에 파란 셔츠를 입었다", "키가 작고 안경을 쓰지 않았다"],
                correctIndex: 0,
                correctAnswer: "긴 생머리에 붉은색 안경을 썼다",
                explanation: "'long straight black hair(긴 검은 생머리)', 'wears red glasses(붉은 안경 착용)'입니다."
            },
            {
                audioText: "A: Who is your brother in the picture? B: He is tall and wearing a blue baseball cap.",
                question: "대화를 듣고, 사진 속 남동생의 특징으로 가장 알맞은 것은?",
                options: ["키가 크고 파란 야구 모자를 쓰고 있다", "키가 작고 빨간 신발을 신고 있다", "초록색 가방을 메고 있다", "안경을 쓰고 미소를 짓고 있다"],
                correctIndex: 0,
                correctAnswer: "키가 크고 파란 야구 모자를 쓰고 있다",
                explanation: "'tall and wearing a blue baseball cap'은 키가 크고 파란 야구 모자를 쓴 모습입니다."
            },
            {
                audioText: "A: Does your uncle have curly hair? B: No, he has short blond hair and brown eyes.",
                question: "대화를 듣고, 삼촌의 머리 모양과 눈동자 색깔로 올바른 것은?",
                options: ["짧은 금발 머리에 갈색 눈", "긴 곱슬머리에 파란 눈", "검은 생머리에 초록 눈", "단발머리에 검은 눈"],
                correctIndex: 0,
                correctAnswer: "짧은 금발 머리에 갈색 눈",
                explanation: "'short blond hair(짧은 금발)', 'brown eyes(갈색 눈)'입니다."
            },
            {
                audioText: "A: Can you find Mina in the school yard? B: Yes, she is the girl wearing a yellow jacket.",
                question: "대화를 듣고, 미나가 입고 있는 옷으로 알맞은 것은?",
                options: ["노란색 재킷", "파란색 원피스", "흰색 셔츠", "초록색 코트"],
                correctIndex: 0,
                correctAnswer: "노란색 재킷",
                explanation: "'wearing a yellow jacket'은 노란색 재킷을 입고 있다는 뜻입니다."
            }
        ],
        readingQuestions: [
            {
                question: "인물의 외모를 묻는 질문으로 가장 알맞은 문장을 고르세요.",
                subtext: "새로 전학 온 친구의 생김새가 궁금할 때",
                options: ["What does he look like?", "What does he like to eat?", "What is he doing right now?", "Where does he live?"],
                correctIndex: 0,
                correctAnswer: "What does he look like?",
                explanation: "사람의 생김새나 외모를 물을 때는 'What does ~ look like?'라고 표현합니다."
            },
            {
                question: "글을 읽고, 묘사된 인물과 일치하지 않는 것을 고르세요.",
                subtext: "My English teacher is Mr. Smith. He is very tall and has curly brown hair. He always wears glasses and a kind smile.",
                options: ["머리가 곧은 긴 생머리이다.", "키가 매우 크다.", "갈색 곱슬머리이다.", "안경을 쓰고 친절하게 미소 짓는다."],
                correctIndex: 0,
                correctAnswer: "머리가 곧은 긴 생머리이다.",
                explanation: "지문에서 'curly brown hair(갈색 곱슬머리)'라고 설명되어 있습니다."
            },
            {
                question: "다음 중 '착용하다/입다'의 의미로 쓰이는 동사는?",
                subtext: "• She _______ glasses when reading books.\n• He is _______ a blue school uniform.",
                options: ["wear / wearing", "look / looking", "speak / speaking", "hear / hearing"],
                correctIndex: 0,
                correctAnswer: "wear / wearing",
                explanation: "옷이나 안경, 모자를 착용할 때는 'wear'를 사용합니다."
            },
            {
                question: "다음 중 어법상 올바른 문장을 고르세요.",
                subtext: "3인칭 단수 주어와 동사 일치",
                options: ["She has long hair and wears glasses.", "She have long hair and wear glasses.", "She has long hair and wear glasses.", "She is have long hair."],
                correctIndex: 0,
                correctAnswer: "She has long hair and wears glasses.",
                explanation: "3인칭 단수 주어(She)에 맞추어 'has'와 'wears'가 일치된 문장입니다."
            }
        ],
        writingInContext: [
            {
                question: "문맥에 알맞게 빈칸의 영어 단어를 바르게 완성하세요.",
                subtext: "She has long c______ hair. (곱슬머리의)",
                correctAnswer: "curly",
                explanation: "'곱슬머리의'는 영어로 'curly'입니다."
            },
            {
                question: "문맥에 알맞게 빈칸의 영어 단어를 바르게 완성하세요.",
                subtext: "He is w______ glasses today. (착용하고 있는)",
                correctAnswer: "wearing",
                explanation: "'착용하고 있는'은 'wearing'입니다."
            }
        ],
        scrambles: [
            {
                subtext: "그녀는 어떻게 생겼니?",
                chips: ["What", "does", "she", "look", "like", "?"],
                correctAnswer: "What does she look like?",
                explanation: "What does she look like?"
            },
            {
                subtext: "그녀는 긴 생머리를 가지고 있어.",
                chips: ["She", "has", "long", "straight", "hair", "."],
                correctAnswer: "She has long straight hair.",
                explanation: "She has long straight hair."
            },
            {
                subtext: "그는 안경을 쓰고 있어.",
                chips: ["He", "is", "wearing", "glasses", "."],
                correctAnswer: "He is wearing glasses.",
                explanation: "He is wearing glasses."
            }
        ],
        goldenBellScramble: {
            subtext: "[최종 20번 골든벨] 그녀는 키가 크고 긴 곱슬머리에 안경을 쓰고 있어.",
            chips: ["She", "is", "tall", "and", "has", "long", "curly", "hair", "wearing", "glasses", "."],
            correctAnswer: "She is tall and has long curly hair wearing glasses.",
            explanation: "She is tall and has long curly hair wearing glasses."
        }
    },

    "6G_L07": {
        name: "7단원: 과거 경험과 여행 (Have you ever visited Jeju-do?)",
        grade: 6,
        theme: "Past Experiences & Travel",
        dialogues: [
            {
                audioText: "A: Have you ever visited Jeju-do before? B: Yes, I have. I rode a horse and climbed Hallasan.",
                question: "대화를 듣고, B가 제주도에서 해본 경험으로 알맞은 것은?",
                options: ["말 타기와 한라산 등반", "서핑과 낚시", "박물관 관람과 귤 따기", "잠수함 타기와 수영"],
                correctIndex: 0,
                correctAnswer: "말 타기와 한라산 등반",
                explanation: "'rode a horse and climbed Hallasan'은 말 타기와 한라산 등반입니다."
            },
            {
                audioText: "A: Did you enjoy your family trip to Gyeongju? B: Yes, it was a wonderful and memorable experience.",
                question: "대화를 듣고, B의 경주 여행에 대한 소감으로 가장 알맞은 것은?",
                options: ["멋지고 기억에 남는 경험이었다", "날씨가 나빠서 힘들었다", "다시는 가고 싶지 않다", "길을 잃어서 피곤했다"],
                correctIndex: 0,
                correctAnswer: "멋지고 기억에 남는 경험이었다",
                explanation: "'wonderful and memorable experience'는 멋지고 기억에 남는 경험이라는 뜻입니다."
            },
            {
                audioText: "A: Have you ever eaten bibimbap in Jeonju? B: No, I haven't. But I really want to try it someday.",
                question: "대화를 듣고, B의 경험 여부와 생각으로 올바른 것은?",
                options: ["먹어본 적 없지만 언젠가 꼭 먹어보고 싶다", "자주 먹어보아서 익숙하다", "맛이 없어서 먹지 않는다", "어제 전주에서 먹었다"],
                correctIndex: 0,
                correctAnswer: "먹어본 적 없지만 언젠가 꼭 먹어보고 싶다",
                explanation: "'No, I haven't. But I really want to try it someday'는 경험은 없지만 먹어보고 싶다는 뜻입니다."
            },
            {
                audioText: "A: What did you do last weekend? B: I visited my grandparents and helped them in the garden.",
                question: "대화를 듣고, B가 지난 주말에 한 일로 알맞은 것은?",
                options: ["조부모님 댁을 방문해 정원 일 돕기", "친구들과 놀이공원 가기", "집에서 영화 보기", "도서관에서 책 빌리기"],
                correctIndex: 0,
                correctAnswer: "조부모님 댁을 방문해 정원 일 돕기",
                explanation: "'visited my grandparents and helped them in the garden'입니다."
            }
        ],
        readingQuestions: [
            {
                question: "과거 경험을 묻는 질문에 대한 올바른 응답을 고르세요.",
                subtext: "A: Have you ever visited the national science museum?\nB: ____________________________________",
                options: ["Yes, I have. I went there last winter.", "Yes, I am. I like science.", "No, I didn't have lunch.", "No, it is three o'clock."],
                correctIndex: 0,
                correctAnswer: "Yes, I have. I went there last winter.",
                explanation: "'Have you ever ~?' 질문에는 'Yes, I have.' 또는 'No, I haven't.'로 답합니다."
            },
            {
                question: "동사의 과거형 연결이 올바르지 않은 것을 고르세요.",
                subtext: "불규칙 과거 동사",
                options: ["ride - rided", "see - saw", "eat - ate", "go - went"],
                correctIndex: 0,
                correctAnswer: "ride - rided",
                explanation: "ride의 올바른 과거형은 'rode'입니다. (rided는 틀린 표현)"
            },
            {
                question: "지문을 읽고, 질문에 대한 답으로 알맞은 것을 고르세요.",
                subtext: "Last summer, my family went to Gangneung. We saw the beautiful blue ocean and took many photos. It was the best trip of my life.",
                options: ["강릉으로 여행을 가서 사진을 찍었다.", "부산으로 여행을 갔다.", "비가 많이 와서 바다를 못 보았다.", "혼자서 여행을 다녀왔다."],
                correctIndex: 0,
                correctAnswer: "강릉으로 여행을 가서 사진을 찍었다.",
                explanation: "지문에서 강릉(Gangneung)에 가서 바다를 보고 사진을 많이 찍었다고 설명합니다."
            },
            {
                question: "다음 문장의 빈칸에 들어갈 알맞은 조동사는?",
                subtext: "A: Have you ever been to Dokdo?\nB: No, I _________.",
                options: ["haven't", "don't", "didn't", "wasn't"],
                correctIndex: 0,
                correctAnswer: "haven't",
                explanation: "'Have you ~' 질문의 부정 대답은 'No, I haven't.'입니다."
            }
        ],
        writingInContext: [
            {
                question: "문맥에 알맞게 빈칸의 영어 단어를 바르게 완성하세요.",
                subtext: "Have you e______ seen a shooting star? (지금까지, 이전에)",
                correctAnswer: "ever",
                explanation: "'경험을 물을 때 쓰는 '이전에, 지금까지'는 'ever'입니다."
            },
            {
                question: "문맥에 알맞게 빈칸의 영어 단어를 바르게 완성하세요.",
                subtext: "It was a wonderful e______ for me. (경험)",
                correctAnswer: "experience",
                explanation: "'경험'은 영어로 'experience'입니다."
            }
        ],
        scrambles: [
            {
                subtext: "너는 제주도에 가본 적이 있니?",
                chips: ["Have", "you", "ever", "visited", "Jeju-do", "?"],
                correctAnswer: "Have you ever visited Jeju-do?",
                explanation: "Have you ever visited Jeju-do?"
            },
            {
                subtext: "응, 가본 적 있어. 멋진 경험이었어.",
                chips: ["Yes", ",", "I", "have", ".", "It", "was", "wonderful", "."],
                correctAnswer: "Yes , I have . It was wonderful .",
                explanation: "Yes, I have. It was wonderful."
            },
            {
                subtext: "우리는 지난 주말에 사진을 많이 찍었어.",
                chips: ["We", "took", "many", "pictures", "last", "weekend", "."],
                correctAnswer: "We took many pictures last weekend.",
                explanation: "We took many pictures last weekend."
            }
        ],
        goldenBellScramble: {
            subtext: "[최종 20번 골든벨] 너는 전에 박물관을 방문해 본 적이 있니?",
            chips: ["Have", "you", "ever", "visited", "the", "history", "museum", "before", "?"],
            correctAnswer: "Have you ever visited the history museum before?",
            explanation: "Have you ever visited the history museum before?"
        }
    },

    "6G_L08": {
        name: "8단원: 비교급과 특징 비교 (A giraffe is taller than an elephant)",
        grade: 6,
        theme: "Comparisons & Superlatives",
        dialogues: [
            {
                audioText: "A: Look at those animals! A giraffe is taller than an elephant. B: Wow, you're right! It has a very long neck.",
                question: "대화를 듣고, 두 동물의 비교 내용으로 일치하는 것은?",
                options: ["기린이 코끼리보다 키가 더 크다", "코끼리가 기린보다 키가 더 크다", "기린과 코끼리는 키가 같다", "코끼리가 기린보다 더 빠르다"],
                correctIndex: 0,
                correctAnswer: "기린이 코끼리보다 키가 더 크다",
                explanation: "'A giraffe is taller than an elephant'는 기린이 코끼리보다 키가 더 크다는 뜻입니다."
            },
            {
                audioText: "A: Who is faster, Tom or Minsoo? B: Minsoo runs faster than Tom in the 100-meter race.",
                question: "대화를 듣고, 100미터 달리기에서 더 빠른 학생은?",
                options: ["민수", "톰", "둘이 똑같다", "알 수 없다"],
                correctIndex: 0,
                correctAnswer: "민수",
                explanation: "'Minsoo runs faster than Tom'은 민수가 톰보다 더 빠르다는 뜻입니다."
            },
            {
                audioText: "A: Which mountain is higher, Hallasan or Jirisan? B: Hallasan is higher than Jirisan.",
                question: "대화를 듣고, 더 높은 산으로 알맞은 것은?",
                options: ["한라산", "지리산", "설악산", "북한산"],
                correctIndex: 0,
                correctAnswer: "한라산",
                explanation: "'Hallasan is higher than Jirisan'은 한라산이 지리산보다 더 높다는 뜻입니다."
            },
            {
                audioText: "A: Is English more difficult than math? B: No, for me, English is much easier than math.",
                question: "대화를 듣고, B의 생각으로 알맞은 것은?",
                options: ["영어가 수학보다 훨씬 더 쉽다", "수학이 영어보다 훨씬 더 쉽다", "영어와 수학 둘 다 너무 어렵다", "영어와 수학 둘 다 전혀 공부하지 않는다"],
                correctIndex: 0,
                correctAnswer: "영어가 수학보다 훨씬 더 쉽다",
                explanation: "'English is much easier than math'는 영어가 수학보다 훨씬 더 쉽다는 의미입니다."
            }
        ],
        readingQuestions: [
            {
                question: "문장을 읽고, 사실과 일치하는 내용을 고르세요.",
                subtext: "A blue whale is much heavier than an African elephant.",
                options: ["대왕고래가 아프리카코끼리보다 훨씬 더 무겁다.", "아프리카코끼리가 대왕고래보다 더 무겁다.", "대왕고래와 코끼리는 무게가 비슷하다.", "대왕고래는 육지에 산다."],
                correctIndex: 0,
                correctAnswer: "대왕고래가 아프리카코끼리보다 훨씬 더 무겁다.",
                explanation: "'heavier than'은 '~보다 더 무거운'이라는 비교 표현입니다."
            },
            {
                question: "다음 중 어법상 비교급 표현이 올바른 문장을 고르세요.",
                subtext: "형용사의 올바른 비교급 형태",
                options: ["He is taller than me.", "He is more tall than me.", "He is tall than me.", "He is taller then me."],
                correctIndex: 0,
                correctAnswer: "He is taller than me.",
                explanation: "tall의 비교급은 taller이며, 비교 접속사는 then이 아닌 'than'입니다."
            },
            {
                question: "다음 빈칸에 공통으로 들어갈 알맞은 비교 단어는?",
                subtext: "• An airplane is faster _______ a train.\n• She is younger _______ her brother.",
                options: ["than", "then", "that", "this"],
                correctIndex: 0,
                correctAnswer: "than",
                explanation: "비교급 뒤에서 기준을 나타내는 접속사는 'than(~보다)'입니다."
            },
            {
                question: "비교급 형태가 바르게 짝지어지지 않은 것은?",
                subtext: "불규칙 및 규칙 비교급",
                options: ["good - gooder", "big - bigger", "heavy - heavier", "fast - faster"],
                correctIndex: 0,
                correctAnswer: "good - gooder",
                explanation: "good의 올바른 비교급은 'better'입니다. (gooder는 틀린 형태)"
            }
        ],
        writingInContext: [
            {
                question: "문맥에 알맞게 빈칸의 영어 단어를 바르게 완성하세요.",
                subtext: "A giraffe is t______ than an elephant. (더 키가 큰)",
                correctAnswer: "taller",
                explanation: "'더 키가 큰'은 tall의 비교급인 'taller'입니다."
            },
            {
                question: "문맥에 알맞게 빈칸의 영어 단어를 바르게 완성하세요.",
                subtext: "He is stronger t______ me. (~보다)",
                correctAnswer: "than",
                explanation: "'~보다'는 영어로 'than'입니다."
            }
        ],
        scrambles: [
            {
                subtext: "기린은 코끼리보다 키가 더 커.",
                chips: ["A", "giraffe", "is", "taller", "than", "an", "elephant", "."],
                correctAnswer: "A giraffe is taller than an elephant.",
                explanation: "A giraffe is taller than an elephant."
            },
            {
                subtext: "그는 나보다 더 빨리 달려.",
                chips: ["He", "runs", "faster", "than", "me", "."],
                correctAnswer: "He runs faster than me.",
                explanation: "He runs faster than me."
            },
            {
                subtext: "누가 더 힘이 세니?",
                chips: ["Who", "is", "stronger", "between", "them", "?"],
                correctAnswer: "Who is stronger between them?",
                explanation: "Who is stronger between them?"
            }
        ],
        goldenBellScramble: {
            subtext: "[최종 20번 골든벨] 대왕고래는 코끼리보다 훨씬 더 크고 무거워.",
            chips: ["A", "blue", "whale", "is", "bigger", "and", "heavier", "than", "an", "elephant", "."],
            correctAnswer: "A blue whale is bigger and heavier than an elephant.",
            explanation: "A blue whale is bigger and heavier than an elephant."
        }
    },

    "6G_L09": {
        name: "9단원: 방학 계획과 미래 활동 (What will you do this summer?)",
        grade: 6,
        theme: "Vacation Plans & Future Activities",
        dialogues: [
            {
                audioText: "A: What will you do this summer vacation? B: I will go camping in the forest with my family.",
                question: "대화를 듣고, B가 이번 여름 방학에 할 일로 알맞은 것은?",
                options: ["가족과 숲으로 캠핑 가기", "할머니 댁 방문하기", "수영 강습 받기", "동물원 봉사활동 하기"],
                correctIndex: 0,
                correctAnswer: "가족과 숲으로 캠핑 가기",
                explanation: "'go camping in the forest'는 숲으로 캠핑 가기입니다."
            },
            {
                audioText: "A: Are you going to travel abroad? B: No, I am going to stay home and read ten storybooks.",
                question: "대화를 듣고, B의 방학 계획으로 알맞은 것은?",
                options: ["집에 머물며 동화책 10권 읽기", "해외여행 가기", "악기 배우기", "친구들과 캠프 가기"],
                correctIndex: 0,
                correctAnswer: "집에 머물며 동화책 10권 읽기",
                explanation: "'stay home and read ten storybooks'는 집에서 동화책 10권 읽기입니다."
            },
            {
                audioText: "A: What are you going to do this Saturday? B: We are going to sleep in a tent and look at the stars.",
                question: "대화를 듣고, 두 사람이 토요일 밤에 할 활동으로 알맞은 것은?",
                options: ["텐트에서 자고 밤하늘의 별 보기", "영화관에서 만화영화 보기", "놀이공원에서 롤러코스터 타기", "쇼핑몰에서 옷 사기"],
                correctIndex: 0,
                correctAnswer: "텐트에서 자고 밤하늘의 별 보기",
                explanation: "'sleep in a tent and look at the stars'는 텐트에서 자며 별 보기입니다."
            },
            {
                audioText: "A: Do you have any special plans for winter break? B: I plan to visit my grandparents in Busan.",
                question: "대화를 듣고, B가 방문할 목적지로 알맞은 곳은?",
                options: ["부산의 조부모님 댁", "제주도", "강원도 스키장", "서울 역사 박물관"],
                correctIndex: 0,
                correctAnswer: "부산의 조부모님 댁",
                explanation: "'visit my grandparents in Busan'은 부산의 조부모님 댁 방문입니다."
            }
        ],
        readingQuestions: [
            {
                question: "미래의 계획을 묻는 질문으로 가장 자연스러운 문장을 고르세요.",
                subtext: "다가오는 방학에 친구가 무엇을 할지 궁금할 때",
                options: ["What will you do during the vacation?", "What did you do yesterday?", "What are you doing now?", "What do you like to eat?"],
                correctIndex: 0,
                correctAnswer: "What will you do during the vacation?",
                explanation: "미래 계획을 물을 때는 'What will you do ~?' 또는 'What are you going to do ~?'를 씁니다."
            },
            {
                question: "다음 중 미래 시제 표현이 어법상 올바른 문장을 고르세요.",
                subtext: "be going to + 동사원형",
                options: ["I am going to clean my room tomorrow.", "I am going to cleaned my room tomorrow.", "I will to clean my room tomorrow.", "I going to clean my room."],
                correctIndex: 0,
                correctAnswer: "I am going to clean my room tomorrow.",
                explanation: "'be going to' 뒤에는 동사원형(clean)이 와야 합니다."
            },
            {
                question: "글을 읽고, 내용과 일치하지 않는 것을 고르세요.",
                subtext: "During this winter vacation, Minsoo is going to learn how to ski. He will go to Pyeongchang with his father. They will stay there for three days.",
                options: ["민수는 어머니와 함께 스키장에 간다.", "민수는 스키 타는 법을 배울 예정이다.", "민수는 평창으로 갈 것이다.", "스키장에서 3일 동안 머무를 예정이다."],
                correctIndex: 0,
                correctAnswer: "민수는 어머니와 함께 스키장에 간다.",
                explanation: "지문에서 'with his father(아버지와 함께)'라고 명시되어 있습니다."
            },
            {
                question: "대화의 빈칸에 들어갈 알맞은 조동사는?",
                subtext: "A: What _______ you do this weekend?\nB: I will visit the national park.",
                options: ["will", "did", "were", "have"],
                correctIndex: 0,
                correctAnswer: "will",
                explanation: "응답에서 'I will ~'로 답했으므로 질문도 'What will you do ~?'가 적절합니다."
            }
        ],
        writingInContext: [
            {
                question: "문맥에 알맞게 빈칸의 영어 단어를 바르게 완성하세요.",
                subtext: "I p______ to visit my grandparents. (계획하다)",
                correctAnswer: "plan",
                explanation: "'계획하다'는 영어로 'plan'입니다."
            },
            {
                question: "문맥에 알맞게 빈칸의 영어 단어를 바르게 완성하세요.",
                subtext: "We are going to sleep in a t______. (텐트)",
                correctAnswer: "tent",
                explanation: "'텐트'는 영어로 'tent'입니다."
            }
        ],
        scrambles: [
            {
                subtext: "이번 여름에 무엇을 할 거니?",
                chips: ["What", "will", "you", "do", "this", "summer", "?"],
                correctAnswer: "What will you do this summer?",
                explanation: "What will you do this summer?"
            },
            {
                subtext: "나는 숲으로 캠핑을 갈 거야.",
                chips: ["I", "will", "go", "camping", "in", "the", "forest", "."],
                correctAnswer: "I will go camping in the forest.",
                explanation: "I will go camping in the forest."
            },
            {
                subtext: "나는 내 방을 청소할 예정이야.",
                chips: ["I", "am", "going", "to", "clean", "my", "room", "."],
                correctAnswer: "I am going to clean my room.",
                explanation: "I am going to clean my room."
            }
        ],
        goldenBellScramble: {
            subtext: "[최종 20번 골든벨] 우리는 숲으로 캠핑을 가서 텐트에서 잘 예정이야.",
            chips: ["We", "are", "going", "to", "go", "camping", "and", "sleep", "in", "a", "tent", "."],
            correctAnswer: "We are going to go camping and sleep in a tent.",
            explanation: "We are going to go camping and sleep in a tent."
        }
    },

    "6G_L10": {
        name: "10단원: 가격 묻기와 쇼핑 (How much is this shirt?)",
        grade: 6,
        theme: "Asking Prices & Shopping",
        dialogues: [
            {
                audioText: "A: May I help you? B: Yes, please. How much is this blue striped shirt? A: It is fifteen dollars.",
                question: "대화를 듣고, 손님이 찾는 물건과 가격으로 올바른 것은?",
                options: ["파란 줄무늬 셔츠 (15달러)", "빨간 체크 바지 (12달러)", "검은 가죽 신발 (20달러)", "노란 모자 (5달러)"],
                correctIndex: 0,
                correctAnswer: "파란 줄무늬 셔츠 (15달러)",
                explanation: "'blue striped shirt'와 'fifteen dollars(15달러)'입니다."
            },
            {
                audioText: "A: Can I try on these running shoes? B: Of course. The fitting room is over there.",
                question: "대화를 듣고, 손님이 직원에게 요청한 내용으로 알맞은 것은?",
                options: ["운동화를 신어봐도 되는지 문의", "환불이나 교환 요청", "더 싼 제품 추천 문의", "포장 서비스 요청"],
                correctIndex: 0,
                correctAnswer: "운동화를 신어봐도 되는지 문의",
                explanation: "'try on these running shoes'는 운동화를 신어보다라는 뜻입니다."
            },
            {
                audioText: "A: I want to buy a birthday present for my mom. B: How about this lovely silk scarf?",
                question: "대화를 듣고, 직원이 엄마의 생일 선물로 추천한 물건은?",
                options: ["실크 스카프", "가죽 지갑", "은반지", "선글라스"],
                correctIndex: 0,
                correctAnswer: "실크 스카프",
                explanation: "'lovely silk scarf'는 사랑스러운 실크 스카프입니다."
            },
            {
                audioText: "A: How much are these white socks? B: They are three dollars for two pairs.",
                question: "대화를 듣고, 흰 양말 두 켤레의 가격으로 알맞은 것은?",
                options: ["3달러", "2달러", "5달러", "6달러"],
                correctIndex: 0,
                correctAnswer: "3달러",
                explanation: "'three dollars for two pairs'는 두 켤레에 3달러라는 뜻입니다."
            }
        ],
        readingQuestions: [
            {
                question: "상점에서 물건의 가격을 물을 때 가장 알맞은 영어 문장은?",
                subtext: "가게에서 마음에 드는 모자의 가격이 알고 싶을 때",
                options: ["How much is this hat?", "What time is it now?", "Where is the post office?", "What grade are you in?"],
                correctIndex: 0,
                correctAnswer: "How much is this hat?",
                explanation: "가격(얼마인가요?)을 물을 때는 'How much is ~?'를 씁니다."
            },
            {
                question: "대화의 빈칸에 들어갈 점원의 알맞은 첫인사는?",
                subtext: "Clerk: ______________________?\nCustomer: Yes, I am looking for a warm winter jacket.",
                options: ["May I help you", "How are you doing", "Where are you going", "What's the matter"],
                correctIndex: 0,
                correctAnswer: "May I help you",
                explanation: "가게 점원이 손님을 맞이할 때 표준적으로 건네는 인사는 'May I help you?(도와드릴까요?)'입니다."
            },
            {
                question: "다음 영수증 정보를 읽고 사실과 다른 것을 고르세요.",
                subtext: "[Item: Red Cap] [Price: $8.00] / [Item: White Socks] [Price: $2.00] / [Total: $10.00]",
                options: ["양말의 가격은 8달러이다.", "빨간 모자의 가격은 8달러이다.", "총 결제 금액은 10달러이다.", "두 가지 물건을 구매했다."],
                correctIndex: 0,
                correctAnswer: "양말의 가격은 8달러이다.",
                explanation: "영수증에서 양말(White Socks)의 가격은 2달러($2.00)입니다."
            },
            {
                question: "다음 중 복수 명사의 가격을 물을 때 올바른 문장은?",
                subtext: "바지(pants)의 가격 묻기",
                options: ["How much are these pants?", "How much is these pants?", "How many is these pants?", "How much does these pants?"],
                correctIndex: 0,
                correctAnswer: "How much are these pants?",
                explanation: "pants는 복수 취급하므로 'How much are these pants?'가 올바릅니다."
            }
        ],
        writingInContext: [
            {
                question: "문맥에 알맞게 빈칸의 영어 단어를 바르게 완성하세요.",
                subtext: "How m______ is this backpack? (얼마)",
                correctAnswer: "much",
                explanation: "'얼마인가요?'는 'How much'입니다."
            },
            {
                question: "문맥에 알맞게 빈칸의 영어 단어를 바르게 완성하세요.",
                subtext: "It is twenty d______ and fifty cents. (달러)",
                correctAnswer: "dollars",
                explanation: "'달러'의 복수형은 'dollars'입니다."
            }
        ],
        scrambles: [
            {
                subtext: "이 셔츠는 얼마인가요?",
                chips: ["How", "much", "is", "this", "shirt", "?"],
                correctAnswer: "How much is this shirt?",
                explanation: "How much is this shirt?"
            },
            {
                subtext: "그것은 15달러입니다.",
                chips: ["It", "is", "fifteen", "dollars", "."],
                correctAnswer: "It is fifteen dollars.",
                explanation: "It is fifteen dollars."
            },
            {
                subtext: "제가 이것을 입어봐도 될까요?",
                chips: ["Can", "I", "try", "this", "on", "?"],
                correctAnswer: "Can I try this on?",
                explanation: "Can I try this on?"
            }
        ],
        goldenBellScramble: {
            subtext: "[최종 20번 골든벨] 도와드릴까요? 이 예쁜 파란 셔츠는 얼마인가요?",
            chips: ["May", "I", "help", "you", "?", "How", "much", "is", "this", "blue", "shirt", "?"],
            correctAnswer: "May I help you ? How much is this blue shirt?",
            explanation: "May I help you? How much is this blue shirt?"
        }
    },

    "6G_L11": {
        name: "11단원: 건강 상태와 조언 (What's the matter?)",
        grade: 6,
        theme: "Health, Symptoms & Advice",
        dialogues: [
            {
                audioText: "A: What's the matter with you, Minsoo? B: I have a terrible headache and a high fever. A: You should see a doctor and take medicine.",
                question: "대화를 듣고, 민수의 증상과 상대방의 조언으로 알맞은 것은?",
                options: ["두통과 고열 (병원 진료 및 약 복용)", "복통과 치통 (따뜻한 차 마시기)", "감기와 기침 (외출 삼가기)", "다리 통증 (얼음찜질하기)"],
                correctIndex: 0,
                correctAnswer: "두통과 고열 (병원 진료 및 약 복용)",
                explanation: "'terrible headache and high fever(두통과 고열)'과 'see a doctor and take medicine(진료 및 약 복용)'입니다."
            },
            {
                audioText: "A: I have a bad stomachache. B: You shouldn't eat too much cold ice cream. Drink warm water instead.",
                question: "대화를 듣고, 배가 아픈 친구에게 하지 말라고 당부한 행동은?",
                options: ["차가운 아이스크림 너무 많이 먹기", "따뜻한 물 마시기", "일찍 잠자리에 들기", "운동하기"],
                correctIndex: 0,
                correctAnswer: "차가운 아이스크림 너무 많이 먹기",
                explanation: "'You shouldn't eat too much cold ice cream'은 찬 아이스크림을 너무 많이 먹지 말라는 당부입니다."
            },
            {
                audioText: "A: I have a toothache. I can't chew food. B: You should go to the dentist right away.",
                question: "대화를 듣고, 치통(toothache)이 있는 친구가 가야 할 병원은?",
                options: ["치과 (dentist)", "안과 (eye doctor)", "이비인후과", "정형외과"],
                correctIndex: 0,
                correctAnswer: "치과 (dentist)",
                explanation: "'dentist'는 치과의사를 의미합니다."
            },
            {
                audioText: "A: You look pale today. Do you have a cold? B: Yes, I have a sore throat and a runny nose.",
                question: "대화를 듣고, B가 앓고 있는 감기 증상으로 올바른 것은?",
                options: ["목 통증과 콧물", "기침과 다리 통증", "어지럼증과 복통", "눈 충혈과 열"],
                correctIndex: 0,
                correctAnswer: "목 통증과 콧물",
                explanation: "'sore throat(목 아픔)'와 'runny nose(콧물)'입니다."
            }
        ],
        readingQuestions: [
            {
                question: "아파 보이는 친구에게 상태를 묻는 가장 적절한 질문은?",
                subtext: "친구가 이마를 짚으며 신음하고 있을 때 건넬 말",
                options: ["What's the matter with you?", "What's your favorite subject?", "Where are you from?", "How do you spell your name?"],
                correctIndex: 0,
                correctAnswer: "What's the matter with you?",
                explanation: "상대방의 건강 이상이나 문제를 물을 때는 'What's the matter?(어디 아프니?)'를 씁니다."
            },
            {
                question: "증상에 대한 올바른 조언으로 가장 적절하지 않은 것은?",
                subtext: "건강 조언 문장",
                options: ["I have a broken leg. ➔ You should go run outside.", "I have a cold. ➔ You should get some rest.", "I have a fever. ➔ You should drink warm water.", "I have a toothache. ➔ You should see a dentist."],
                correctIndex: 0,
                correctAnswer: "I have a broken leg. ➔ You should go run outside.",
                explanation: "다리가 부러진 사람에게 밖에서 뛰라고(run outside) 하는 것은 부적절한 조언입니다."
            },
            {
                question: "문맥상 빈칸에 공통으로 들어갈 알맞은 단어는?",
                subtext: "• You ________ see a doctor when you are sick.\n• We ________ take this medicine after meals.",
                options: ["should", "couldn't", "aren't", "wouldn't"],
                correctIndex: 0,
                correctAnswer: "should",
                explanation: "건강상의 권고나 조언(~해야 한다)을 나타내는 조동사는 'should'입니다."
            },
            {
                question: "신체 부위와 질병의 짝이 올바르지 않은 것은?",
                subtext: "질병 어휘 결합 (-ache)",
                options: ["eye - eyeache", "head - headache", "tooth - toothache", "stomach - stomachache"],
                correctIndex: 0,
                correctAnswer: "eye - eyeache",
                explanation: "눈의 통증은 eyeache라는 표현 대신 보통 eye pain 또는 sore eyes라고 합니다."
            }
        ],
        writingInContext: [
            {
                question: "문맥에 알맞게 빈칸의 영어 단어를 바르게 완성하세요.",
                subtext: "I have a terrible h______. (두통, 머리 아픔)",
                correctAnswer: "headache",
                explanation: "'두통'은 영어로 'headache'입니다."
            },
            {
                question: "문맥에 알맞게 빈칸의 영어 단어를 바르게 완성하세요.",
                subtext: "You should see a d______ and rest. (의사)",
                correctAnswer: "doctor",
                explanation: "'의사'는 영어로 'doctor'입니다."
            }
        ],
        scrambles: [
            {
                subtext: "무슨 일 있니? 어디가 아프니?",
                chips: ["What", "is", "the", "matter", "?"],
                correctAnswer: "What is the matter?",
                explanation: "What is the matter?"
            },
            {
                subtext: "나는 열이 나고 두통이 있어.",
                chips: ["I", "have", "a", "fever", "and", "a", "headache", "."],
                correctAnswer: "I have a fever and a headache.",
                explanation: "I have a fever and a headache."
            },
            {
                subtext: "너는 의사 선생님 진료를 받아야 해.",
                chips: ["You", "should", "see", "a", "doctor", "."],
                correctAnswer: "You should see a doctor.",
                explanation: "You should see a doctor."
            }
        ],
        goldenBellScramble: {
            subtext: "[최종 20번 골든벨] 너는 병원에 가보고 이 약을 먹은 후 푹 쉬어야 해.",
            chips: ["You", "should", "see", "a", "doctor", "and", "take", "this", "medicine", "."],
            correctAnswer: "You should see a doctor and take this medicine.",
            explanation: "You should see a doctor and take this medicine."
        }
    },

    "6G_L12": {
        name: "12단원: 제안하기와 여가 활동 (Why don't we go to the park?)",
        grade: 6,
        theme: "Making Suggestions & Free Time",
        dialogues: [
            {
                audioText: "A: Why don't we go to the amusement park this Saturday? B: Sounds like a great idea! Let's meet at ten in the morning.",
                question: "대화를 듣고, 두 사람이 만나기로 한 장소와 시간으로 알맞은 것은?",
                options: ["토요일 오전 10시 놀이공원", "일요일 오후 2시 공원", "토요일 오전 9시 동물원", "금요일 오후 5시 영화관"],
                correctIndex: 0,
                correctAnswer: "토요일 오전 10시 놀이공원",
                explanation: "'amusement park this Saturday'와 'meet at ten in the morning'입니다."
            },
            {
                audioText: "A: Shall we play badminton in the gym together? B: Sure, I love playing sports after school.",
                question: "대화를 듣고, A가 제안한 운동 종목으로 알맞은 것은?",
                options: ["배드민턴", "축구", "농구", "탁구"],
                correctIndex: 0,
                correctAnswer: "배드민턴",
                explanation: "'Shall we play badminton'은 배드민턴을 치자는 제안입니다."
            },
            {
                audioText: "A: How about watching an animated movie together? B: I'm sorry, but I have to finish my science homework first.",
                question: "대화를 듣고, B가 영화를 보러 가지 못하는 이유로 알맞은 것은?",
                options: ["과학 숙제를 먼저 끝내야 해서", "몸이 아파서", "다른 친구를 만나야 해서", "영화가 재미없어 보여서"],
                correctIndex: 0,
                correctAnswer: "과학 숙제를 먼저 끝내야 해서",
                explanation: "'have to finish my science homework first'는 과학 숙제를 먼저 끝내야 한다는 뜻입니다."
            },
            {
                audioText: "A: Let's ride bicycles along the river this afternoon. B: That sounds wonderful! The weather is very nice.",
                question: "대화를 듣고, B의 반응으로 알맞은 것은?",
                options: ["날씨가 좋으니 아주 멋진 생각이라며 수락함", "피곤하다며 거절함", "자전거가 고장 났다며 거절함", "다른 운동을 하자고 제안함"],
                correctIndex: 0,
                correctAnswer: "날씨가 좋으니 아주 멋진 생각이라며 수락함",
                explanation: "'That sounds wonderful! The weather is very nice'는 기쁘게 수락하는 응답입니다."
            }
        ],
        readingQuestions: [
            {
                question: "상대방에게 함께 무엇을 하자고 제안할 때 쓰는 가장 알맞은 표현은?",
                subtext: "친구에게 방과 후 축구를 같이 하자고 권유할 때",
                options: ["Why don't we play soccer together?", "Why are you playing soccer?", "Where do you play soccer?", "Who is playing soccer?"],
                correctIndex: 0,
                correctAnswer: "Why don't we play soccer together?",
                explanation: "제안할 때는 'Why don't we ~?(우리 ~하는 게 어때?)' 또는 'Shall we ~?'를 씁니다."
            },
            {
                question: "제안을 수락할 때 건네는 자연스러운 응답으로 알맞은 것은?",
                subtext: "A: Shall we eat lunch together?\nB: ____________________________________",
                options: ["Sounds like a great idea!", "I have a headache.", "I'm in the sixth grade.", "Go straight two blocks."],
                correctIndex: 0,
                correctAnswer: "Sounds like a great idea!",
                explanation: "제안에 대한 긍정적 수락은 'Sounds like a great idea!(좋은 생각이야!)'가 적절합니다."
            },
            {
                question: "제안을 정중하게 거절할 때 쓰는 가장 알맞은 표현은?",
                subtext: "선약이 있어 친구의 제안을 부드럽게 사양할 때",
                options: ["I'm sorry, but I am busy today.", "No, you cannot.", "Don't do that.", "You're welcome."],
                correctIndex: 0,
                correctAnswer: "I'm sorry, but I am busy today.",
                explanation: "정중한 거절은 'I'm sorry, but ~(미안하지만 ~야)'로 시작합니다."
            },
            {
                question: "다음 중 제안하는 표현의 문법적 형태가 올바른 것은?",
                subtext: "제안 표현 뒤의 동사 형태",
                options: ["Why don't we go to the library?", "Why don't we going to the library?", "Why don't we to go to the library?", "Why don't we went to the library?"],
                correctIndex: 0,
                correctAnswer: "Why don't we go to the library?",
                explanation: "'Why don't we' 뒤에는 반드시 동사원형(go)이 와야 합니다."
            }
        ],
        writingInContext: [
            {
                question: "문맥에 알맞게 빈칸의 영어 단어를 바르게 완성하세요.",
                subtext: "Why don't we play badminton t______? (함께)",
                correctAnswer: "together",
                explanation: "'함께'는 영어로 'together'입니다."
            },
            {
                question: "문맥에 알맞게 빈칸의 영어 단어를 바르게 완성하세요.",
                subtext: "Sounds like a great i______. (생각, 아이디어)",
                correctAnswer: "idea",
                explanation: "'생각, 아이디어'는 영어로 'idea'입니다."
            }
        ],
        scrambles: [
            {
                subtext: "우리 공원에 가는 게 어때?",
                chips: ["Why", "don't", "we", "go", "to", "the", "park", "?"],
                correctAnswer: "Why don't we go to the park?",
                explanation: "Why don't we go to the park?"
            },
            {
                subtext: "우리 함께 배드민턴 칠까?",
                chips: ["Shall", "we", "play", "badminton", "together", "?"],
                correctAnswer: "Shall we play badminton together?",
                explanation: "Shall we play badminton together?"
            },
            {
                subtext: "정말 멋진 생각이야!",
                chips: ["Sounds", "like", "a", "wonderful", "idea", "!"],
                correctAnswer: "Sounds like a wonderful idea!",
                explanation: "Sounds like a wonderful idea!"
            }
        ],
        goldenBellScramble: {
            subtext: "[최종 20번 골든벨] 우리 이번 주 토요일에 놀이공원에 함께 가는 게 어때?",
            chips: ["Why", "don't", "we", "go", "to", "the", "amusement", "park", "together", "this", "Saturday", "?"],
            correctAnswer: "Why don't we go to the amusement park together this Saturday?",
            explanation: "Why don't we go to the amusement park together this Saturday?"
        }
    }
};

/**
 * ────────────────────────────────────────────────────────
 * 1~12단원 대표 통합 골든벨 20문제 (MASTER_20_HIGH_LEVEL)
 * (전 영역이 온전한 문장, 실전 회화, 고난도 추론으로 구성)
 * ────────────────────────────────────────────────────────
 */
const MASTER_20_HIGH_LEVEL = [
    // [듣기 Q1 ~ Q7]
    {
        id: 1,
        domain: "듣기",
        domainIcon: "🎧",
        difficulty: "★☆☆",
        type: "listening_choice",
        audioText: "A: What is your favorite season? B: My favorite season is spring because I can see colorful flowers.",
        question: "대화를 듣고, B가 봄을 좋아하는 이유로 가장 알맞은 것을 고르세요.",
        options: ["아름다운 꽃들을 볼 수 있어서", "시원한 바람이 불어서", "눈사람을 만들 수 있어서", "바다에서 수영할 수 있어서"],
        correctIndex: 0,
        correctAnswer: "아름다운 꽃들을 볼 수 있어서",
        explanation: "'because I can see colorful flowers'는 아름다운 꽃을 볼 수 있기 때문입니다."
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
        audioText: "A: We should save energy for our Earth. Please turn off the lights when you leave the classroom.",
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
        audioText: "A: Excuse me, where is the hospital? B: Go straight two blocks and turn left. It's on your right.",
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
        audioText: "A: Why are you so happy? B: Because today is my birthday and I got a wonderful gift!",
        question: "대화를 듣고, 말하는 사람이 행복해하는 이유로 알맞은 것은?",
        options: ["생일이고 멋진 선물을 받아서", "시험에서 1등을 해서", "방학이 시작되어서", "새 친구를 사귀어서"],
        correctIndex: 0,
        correctAnswer: "생일이고 멋진 선물을 받아서",
        explanation: "'today is my birthday and I got a wonderful gift' 때문입니다."
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
        audioText: "A: What does she look like? B: She has long straight black hair and wears red glasses.",
        question: "인물 묘사를 듣고, 인물의 알맞은 외모 특징을 고르세요.",
        options: ["긴 생머리에 붉은 안경을 썼다", "짧은 곱슬머리에 모자를 썼다", "갈색 단발머리에 파란 셔츠를 입었다", "키가 작고 안경을 쓰지 않았다"],
        correctIndex: 0,
        correctAnswer: "긴 생머리에 붉은 안경을 썼다",
        explanation: "'long straight black hair(긴 검은 생머리)', 'wears red glasses(붉은 안경 착용)'입니다."
    },

    // [읽기 Q8 ~ Q14]
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

    // [쓰기 Q15 ~ Q20]
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

/**
 * ────────────────────────────────────────────────────────
 * 프리셋 코드에 따라 20문제를 생성하는 함수
 * @param {string} presetCode 'ALL_MIXED', 'CURRICULUM_20', 또는 '6G_L01'~'6G_L12'
 * @returns {Array} 20개 문항 객체 배열
 * ────────────────────────────────────────────────────────
 */
function loadQuestionsForPreset(presetCode) {
    // 1. 교사용 지도서 표준 20문제
    if (presetCode === 'CURRICULUM_20') {
        return MASTER_20_HIGH_LEVEL.map((q, idx) => ({ ...q, id: idx + 1 }));
    }

    const unitKeys = Object.keys(GOLDENBELL_UNITS);

    // 2. 전체 단원 섞기 (1~12단원 무작위 20문제)
    if (presetCode === 'ALL_MIXED') {
        const generated = [];

        // 12개 단원을 셔플하여 골고루 뽑기
        const shuffledUnits1 = [...unitKeys].sort(() => Math.random() - 0.5);
        const shuffledUnits2 = [...unitKeys].sort(() => Math.random() - 0.5);

        // Q1 ~ Q7: 듣기 영역 (서로 다른 7개 단원에서 대화문 추출)
        for (let i = 0; i < 7; i++) {
            const uKey = shuffledUnits1[i % shuffledUnits1.length];
            const u = GOLDENBELL_UNITS[uKey];
            const d = u.dialogues[Math.floor(Math.random() * u.dialogues.length)];
            generated.push({
                id: i + 1,
                domain: "듣기",
                domainIcon: "🎧",
                difficulty: i < 3 ? "★☆☆" : (i < 6 ? "★★☆" : "★★★"),
                type: "listening_choice",
                audioText: d.audioText,
                question: `[듣기 · ${u.name.split(':')[0]}] ${d.question}`,
                options: [...d.options],
                correctIndex: d.correctIndex,
                correctAnswer: d.correctAnswer,
                explanation: d.explanation
            });
        }

        // Q8 ~ Q14: 읽기 영역 (서로 다른 7개 단원에서 독해 문항 추출)
        for (let i = 0; i < 7; i++) {
            const uKey = shuffledUnits2[i % shuffledUnits2.length];
            const u = GOLDENBELL_UNITS[uKey];
            const r = u.readingQuestions[Math.floor(Math.random() * u.readingQuestions.length)];
            generated.push({
                id: i + 8,
                domain: "읽기",
                domainIcon: "📖",
                difficulty: i < 3 ? "★★☆" : "★★★",
                type: "reading_choice",
                question: `[읽기 · ${u.name.split(':')[0]}] ${r.question}`,
                subtext: r.subtext,
                options: [...r.options],
                correctIndex: r.correctIndex,
                correctAnswer: r.correctAnswer,
                explanation: r.explanation
            });
        }

        // Q15 ~ Q16: 쓰기 영역 - 문맥 속 빈칸 어휘 (2문제)
        const writingUnits = [...unitKeys].sort(() => Math.random() - 0.5);
        for (let i = 0; i < 2; i++) {
            const uKey = writingUnits[i];
            const u = GOLDENBELL_UNITS[uKey];
            const w = u.writingInContext[Math.floor(Math.random() * u.writingInContext.length)];
            generated.push({
                id: i + 15,
                domain: "쓰기",
                domainIcon: "✍️",
                difficulty: "★★☆",
                type: "writing_text",
                question: `[쓰기 · ${u.name.split(':')[0]}] ${w.question}`,
                subtext: w.subtext,
                correctAnswer: w.correctAnswer,
                explanation: w.explanation
            });
        }

        // Q17 ~ Q19: 쓰기 영역 - 문장 어순 배열 (Word Scramble 3문제)
        for (let i = 0; i < 3; i++) {
            const uKey = writingUnits[i + 2];
            const u = GOLDENBELL_UNITS[uKey];
            const s = u.scrambles[Math.floor(Math.random() * u.scrambles.length)];
            const shuffledChips = [...s.chips].sort(() => Math.random() - 0.5);
            generated.push({
                id: i + 17,
                domain: "쓰기",
                domainIcon: "✍️",
                difficulty: "★★★",
                type: "writing_scramble",
                question: `[쓰기 · ${u.name.split(':')[0]}] 단어 칩을 바르게 배열하여 문장을 완성하세요.`,
                subtext: s.subtext,
                chips: shuffledChips,
                correctAnswer: s.correctAnswer,
                explanation: s.explanation
            });
        }

        // Q20: 최종 골든벨 문항 (12개 단원 중 1개 단원의 최고난도 복합 문장)
        const bellUnitKey = writingUnits[5];
        const bellUnit = GOLDENBELL_UNITS[bellUnitKey];
        const bellScramble = bellUnit.goldenBellScramble;
        const shuffledBellChips = [...bellScramble.chips].sort(() => Math.random() - 0.5);
        generated.push({
            id: 20,
            domain: "골든벨",
            domainIcon: "🔔",
            difficulty: "★★★",
            type: "writing_scramble",
            question: `[🔔 영광의 최종 골든벨 · ${bellUnit.name.split(':')[0]}] 단어 칩을 모두 올바르게 배열하세요!`,
            subtext: bellScramble.subtext,
            chips: shuffledBellChips,
            correctAnswer: bellScramble.correctAnswer,
            explanation: bellScramble.explanation
        });

        return generated;
    }

    // 3. 특정 단원 선택 (6G_L01 ~ 6G_L12 또는 레거시 3G_L07 등)
    let unit = GOLDENBELL_UNITS[presetCode];
    if (!unit) {
        // 단원 코드가 없는 경우 기본 단원 매핑 또는 표준 세트 반환
        unit = GOLDENBELL_UNITS["6G_L01"];
    }

    const generated = [];

    // Q1 ~ Q7: 듣기 (해당 단원 dialogues 순환 + 셔플)
    for (let i = 0; i < 7; i++) {
        const d = unit.dialogues[i % unit.dialogues.length];
        generated.push({
            id: i + 1,
            domain: "듣기",
            domainIcon: "🎧",
            difficulty: i < 3 ? "★☆☆" : "★★☆",
            type: "listening_choice",
            audioText: d.audioText,
            question: `[듣기] ${d.question}`,
            options: [...d.options],
            correctIndex: d.correctIndex,
            correctAnswer: d.correctAnswer,
            explanation: d.explanation
        });
    }

    // Q8 ~ Q14: 읽기 (해당 단원 readingQuestions 순환 + 셔플)
    for (let i = 0; i < 7; i++) {
        const r = unit.readingQuestions[i % unit.readingQuestions.length];
        generated.push({
            id: i + 8,
            domain: "읽기",
            domainIcon: "📖",
            difficulty: i < 4 ? "★★☆" : "★★★",
            type: "reading_choice",
            question: `[읽기] ${r.question}`,
            subtext: r.subtext,
            options: [...r.options],
            correctIndex: r.correctIndex,
            correctAnswer: r.correctAnswer,
            explanation: r.explanation
        });
    }

    // Q15 ~ Q16: 쓰기 - 문맥 속 빈칸 쓰기
    for (let i = 0; i < 2; i++) {
        const w = unit.writingInContext[i % unit.writingInContext.length];
        generated.push({
            id: i + 15,
            domain: "쓰기",
            domainIcon: "✍️",
            difficulty: "★★☆",
            type: "writing_text",
            question: `[쓰기] ${w.question}`,
            subtext: w.subtext,
            correctAnswer: w.correctAnswer,
            explanation: w.explanation
        });
    }

    // Q17 ~ Q19: 쓰기 - 단어 칩 문장 어순 배열
    for (let i = 0; i < 3; i++) {
        const s = unit.scrambles[i % unit.scrambles.length];
        const shuffledChips = [...s.chips].sort(() => Math.random() - 0.5);
        generated.push({
            id: i + 17,
            domain: "쓰기",
            domainIcon: "✍️",
            difficulty: "★★★",
            type: "writing_scramble",
            question: `[쓰기] 단어 칩을 바르게 배열하여 문장을 완성하세요.`,
            subtext: s.subtext,
            chips: shuffledChips,
            correctAnswer: s.correctAnswer,
            explanation: s.explanation
        });
    }

    // Q20: 최종 골든벨
    const b = unit.goldenBellScramble;
    const shuffledBellChips = [...b.chips].sort(() => Math.random() - 0.5);
    generated.push({
        id: 20,
        domain: "골든벨",
        domainIcon: "🔔",
        difficulty: "★★★",
        type: "writing_scramble",
        question: `[🔔 영광의 최종 골든벨] 단어 칩을 모두 올바르게 배열하세요!`,
        subtext: b.subtext,
        chips: shuffledBellChips,
        correctAnswer: b.correctAnswer,
        explanation: b.explanation
    });

    return generated;
}



    // 전역 window 바인딩
    window.GOLDENBELL_UNITS = GOLDENBELL_UNITS;
    window.MASTER_20_HIGH_LEVEL = MASTER_20_HIGH_LEVEL;
    window.loadGoldenBellQuestions = loadQuestionsForPreset;
})(typeof window !== 'undefined' ? window : global);
