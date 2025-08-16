export interface QuestionOption {
  text: string;
  teto: number;
  egen: number;
}

export interface Question {
  question: string;
  options: QuestionOption[];
}

// Utility function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Function to get questions with shuffled options
export function getShuffledQuestions(): Question[] {
  return questions.map(question => ({
    ...question,
    options: shuffleArray(question.options)
  }));
}

export const questions: Question[] = [
  {
    question: "친구들과의 모임에서 당신의 모습은?",
    options: [
      { text: "분위기를 이끌고 활기차게 참여한다", teto: 3, egen: 0 },
      { text: "조용히 대화를 듣고 공감해준다", teto: 0, egen: 3 },
      { text: "필요할 때만 적극적으로 의견을 낸다", teto: 2, egen: 1 },
      { text: "분위기에 따라 유연하게 대응한다", teto: 1, egen: 2 }
    ]
  },
  {
    question: "새로운 도전 앞에서 당신의 반응은?",
    options: [
      { text: "일단 해보자! 바로 실행에 옮긴다", teto: 3, egen: 0 },
      { text: "신중하게 계획을 세우고 준비한다", teto: 1, egen: 2 },
      { text: "다른 사람의 조언을 먼저 구한다", teto: 0, egen: 3 },
      { text: "직감을 믿고 결정한다", teto: 2, egen: 1 }
    ]
  },
  {
    question: "연인과의 갈등 상황에서 당신은?",
    options: [
      { text: "문제를 명확히 하고 즉시 해결하려 한다", teto: 3, egen: 0 },
      { text: "상대방의 감정을 먼저 살핀다", teto: 0, egen: 3 },
      { text: "시간을 두고 차분히 대화한다", teto: 1, egen: 2 },
      { text: "감정이 정리될 때까지 거리를 둔다", teto: 2, egen: 1 }
    ]
  },
  {
    question: "이상적인 데이트 장소는?",
    options: [
      { text: "액티비티나 스포츠를 즐길 수 있는 곳", teto: 3, egen: 0 },
      { text: "조용한 카페나 전시회", teto: 0, egen: 3 },
      { text: "맛집 탐방이나 드라이브", teto: 2, egen: 1 },
      { text: "영화관이나 공연장", teto: 1, egen: 2 }
    ]
  },
  {
    question: "스트레스를 받을 때 당신은?",
    options: [
      { text: "운동이나 활동적인 취미로 해소한다", teto: 3, egen: 0 },
      { text: "혼자만의 시간을 가지며 정리한다", teto: 0, egen: 3 },
      { text: "친한 사람과 이야기하며 풀어낸다", teto: 1, egen: 2 },
      { text: "음악을 듣거나 예술 활동을 한다", teto: 0, egen: 3 }
    ]
  },
  {
    question: "패션 스타일을 선택할 때 중요한 것은?",
    options: [
      { text: "실용성과 편안함", teto: 3, egen: 0 },
      { text: "트렌드와 개성 표현", teto: 0, egen: 3 },
      { text: "상황에 맞는 적절함", teto: 2, egen: 1 },
      { text: "자신만의 스타일", teto: 1, egen: 2 }
    ]
  },
  {
    question: "친구가 고민을 털어놓을 때 당신은?",
    options: [
      { text: "해결책을 제시하고 행동을 권한다", teto: 3, egen: 0 },
      { text: "공감하며 감정을 이해해준다", teto: 0, egen: 3 },
      { text: "경험담을 들려주며 조언한다", teto: 2, egen: 1 },
      { text: "들어주고 위로해준다", teto: 1, egen: 2 }
    ]
  },
  {
    question: "여행을 계획할 때 당신의 스타일은?",
    options: [
      { text: "주요 명소 위주로 효율적으로 계획", teto: 3, egen: 0 },
      { text: "감성적인 장소와 분위기 중심", teto: 0, egen: 3 },
      { text: "맛집과 쇼핑 위주로 계획", teto: 1, egen: 2 },
      { text: "즉흥적으로 돌아다니며 발견", teto: 2, egen: 1 }
    ]
  },
  {
    question: "새로운 사람들과 만날 때 당신은?",
    options: [
      { text: "먼저 다가가서 대화를 시작한다", teto: 3, egen: 0 },
      { text: "상대방이 다가오기를 기다린다", teto: 0, egen: 3 },
      { text: "자연스럽게 어울리려 노력한다", teto: 2, egen: 1 },
      { text: "친한 사람을 통해 소개받는다", teto: 1, egen: 2 }
    ]
  },
  {
    question: "연인에게 사랑을 표현하는 방식은?",
    options: [
      { text: "실질적인 도움과 행동으로", teto: 3, egen: 0 },
      { text: "달콤한 말과 애정 표현으로", teto: 0, egen: 3 },
      { text: "함께하는 시간과 경험으로", teto: 2, egen: 1 },
      { text: "작은 선물과 깜짝 이벤트로", teto: 1, egen: 2 }
    ]
  },
  {
    question: "업무나 학업에서 집중하는 방식은?",
    options: [
      { text: "목표를 정하고 단계별로 실행", teto: 3, egen: 0 },
      { text: "분위기를 만들고 영감을 기다림", teto: 0, egen: 3 },
      { text: "마감일에 맞춰 집중적으로", teto: 2, egen: 1 },
      { text: "꾸준히 조금씩 진행", teto: 1, egen: 2 }
    ]
  },
  {
    question: "휴일을 보내는 이상적인 방법은?",
    options: [
      { text: "활동적인 취미나 운동", teto: 3, egen: 0 },
      { text: "집에서 여유롭게 휴식", teto: 0, egen: 3 },
      { text: "친구들과 함께 시간 보내기", teto: 2, egen: 1 },
      { text: "새로운 것 배우기나 체험", teto: 1, egen: 2 }
    ]
  },
  {
    question: "감정 표현에 대한 당신의 성향은?",
    options: [
      { text: "필요할 때 직접적으로 표현", teto: 3, egen: 0 },
      { text: "섬세하고 풍부하게 표현", teto: 0, egen: 3 },
      { text: "상황에 맞게 적절히 표현", teto: 2, egen: 1 },
      { text: "은은하고 간접적으로 표현", teto: 1, egen: 2 }
    ]
  },
  {
    question: "인테리어나 공간 꾸미기에서 중요한 것은?",
    options: [
      { text: "기능성과 실용성", teto: 3, egen: 0 },
      { text: "분위기와 감성", teto: 0, egen: 3 },
      { text: "깔끔함과 정리정돈", teto: 2, egen: 1 },
      { text: "개성과 특별함", teto: 1, egen: 2 }
    ]
  },
  {
    question: "어려운 결정을 내릴 때 당신은?",
    options: [
      { text: "논리적으로 분석하고 결정", teto: 3, egen: 0 },
      { text: "직감과 감정을 따른다", teto: 0, egen: 3 },
      { text: "주변 의견을 듣고 종합 판단", teto: 1, egen: 2 },
      { text: "과거 경험을 바탕으로 결정", teto: 2, egen: 1 }
    ]
  },
  {
    question: "SNS를 사용하는 당신의 패턴은?",
    options: [
      { text: "필요한 정보 위주로 간단하게", teto: 3, egen: 0 },
      { text: "일상과 감정을 자세히 기록", teto: 0, egen: 3 },
      { text: "친구들과의 소통 중심", teto: 2, egen: 1 },
      { text: "취미나 관심사 위주로 활용", teto: 1, egen: 2 }
    ]
  },
  {
    question: "팀 프로젝트에서 당신의 역할은?",
    options: [
      { text: "리더십을 발휘해 팀을 이끈다", teto: 3, egen: 0 },
      { text: "창의적인 아이디어를 제공한다", teto: 0, egen: 3 },
      { text: "팀원들을 조율하고 협력한다", teto: 1, egen: 2 },
      { text: "맡은 역할에 최선을 다한다", teto: 2, egen: 1 }
    ]
  },
  {
    question: "영화나 드라마 장르 선호도는?",
    options: [
      { text: "액션, 스릴러, SF", teto: 3, egen: 0 },
      { text: "로맨스, 드라마, 예술영화", teto: 0, egen: 3 },
      { text: "코미디, 가족영화", teto: 2, egen: 1 },
      { text: "다양한 장르를 골고루", teto: 1, egen: 2 }
    ]
  },
  {
    question: "갈등 상황에서 당신의 대처 방식은?",
    options: [
      { text: "정면으로 맞서서 해결한다", teto: 3, egen: 0 },
      { text: "감정적 상처를 최우선으로 고려", teto: 0, egen: 3 },
      { text: "양측의 입장을 이해하려 노력", teto: 1, egen: 2 },
      { text: "시간을 두고 냉정하게 판단", teto: 2, egen: 1 }
    ]
  },
  {
    question: "이성에게 매력을 느끼는 포인트는?",
    options: [
      { text: "자신감과 리더십", teto: 3, egen: 0 },
      { text: "섬세함과 공감 능력", teto: 0, egen: 3 },
      { text: "유머와 재미", teto: 2, egen: 1 },
      { text: "따뜻함과 배려", teto: 1, egen: 2 }
    ]
  }
];
