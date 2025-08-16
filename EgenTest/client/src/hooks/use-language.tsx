import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ko' | 'en';

export interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

export const translations = {
  ko: {
    // Homepage
    'home.title': 'TETO-EGEN',
    'home.subtitle': '당신의 숨겨진 성격 유형을 발견하세요',
    'home.description': '테스토스테론과 에스트로겐 기반의 혁신적인 성격 분석으로\n당신만의 독특한 연애 스타일과 성향을 알아보세요',
    'home.startTest': '테스트 시작하기',
    'home.features.scientific': '과학적 분석',
    'home.features.scientificDesc': '호르몬 기반 성격 유형 분류',
    'home.features.dating': '연애 궁합',
    'home.features.datingDesc': '맞춤형 연애 스타일 분석',
    'home.features.types': '4가지 유형',
    'home.features.typesDesc': '테토남/녀, 에겐남/녀',
    'home.stats.participants': '참여자 수',
    'home.stats.accuracy': '정확도',
    'home.stats.time': '소요 시간',
    'home.stats.satisfaction': '만족도',

    // Test page
    'test.title': 'TETO-EGEN 성격 테스트',
    'test.intro.title': '성격 유형 분석 시작',
    'test.intro.description': '총 20개의 질문을 통해 당신의 성격 유형을 분석합니다.',
    'test.intro.features.hormonal': '호르몬 기반 분석',
    'test.intro.features.hormonalDesc': '테스토스테론과 에스트로겐 특성 분석',
    'test.intro.features.personality': '성격 유형 분류',
    'test.intro.features.personalityDesc': '각 호르몬의 영향을 받는 행동적, 사회적 특성을 통해 4가지 유형으로 분류됩니다.',
    'test.start': '테스트 시작',
    'test.genderSelection': '성별 선택',
    'test.genderDesc': '정확한 결과 분석을 위해 성별을 선택해주세요',
    'test.male': '남성',
    'test.female': '여성',
    'test.privacyNote': '선택한 정보는 성격 유형 분석에만 사용되며 저장되지 않습니다',
    'test.progress': '진행률',
    'test.question': '질문',

    // Results page
    'results.title': '테스트 결과',
    'results.yourType': '당신의 성격 유형',
    'results.characteristics': '주요 특성',
    'results.datingStyle': '연애 스타일',
    'results.compatibility': '궁합',
    'results.retakeTest': '테스트 다시 하기',
    'results.viewAllTypes': '모든 유형 보기',

    // Navigation
    'nav.home': '홈',
    'nav.test': '테스트',
    'nav.results': '결과',
    'nav.allTypes': '모든 유형',

    // Theme toggle
    'theme.light': '라이트 모드',
    'theme.dark': '다크 모드',
    'theme.system': '시스템 설정',

    // Language toggle
    'language.korean': '한국어',
    'language.english': 'English',

    // Personality Types
    'type.tetoMale.name': '테토남',
    'type.tetoMale.subtitle': '도전적이고 리더십이 강한',
    'type.tetoMale.description': '높은 테스토스테론 수치로 인해 경쟁심이 강하고 도전을 즐기는 성향을 보입니다. 리더십이 뛰어나고 목표 달성을 위해 적극적으로 행동합니다.',
    'type.tetoMale.characteristics': '경쟁심이 강함|리더십 발휘|도전적|독립적|결단력 있음',
    'type.tetoMale.datingStyle': '직접적이고 적극적인 어프로치를 선호하며, 상대방을 리드하는 것을 좋아합니다. 모험적인 데이트를 즐기고 관계에서 주도권을 가지려 합니다.',
    'type.tetoMale.compatibility': '에겐녀와 가장 좋은 궁합을 보이며, 서로 다른 특성이 조화롭게 어우러집니다.',

    'type.tetoFemale.name': '테토녀',
    'type.tetoFemale.subtitle': '독립적이고 진취적인',
    'type.tetoFemale.description': '높은 테스토스테론 영향으로 독립적이고 자신감이 강한 성향을 보입니다. 전통적인 여성상에서 벗어나 자신만의 길을 개척해 나갑니다.',
    'type.tetoFemale.characteristics': '독립적|진취적|자신감 있음|도전적|주도적',
    'type.tetoFemale.datingStyle': '동등한 관계를 추구하며, 서로의 개성과 독립성을 인정하는 관계를 선호합니다. 새로운 경험을 함께 나누는 것을 좋아합니다.',
    'type.tetoFemale.compatibility': '에겐남과 잘 어울리며, 서로의 다른 점을 존중하고 보완하는 관계를 만듭니다.',

    'type.egenMale.name': '에겐남',
    'type.egenMale.subtitle': '세심하고 감성적인',
    'type.egenMale.description': '높은 에스트로겐 영향으로 섬세하고 공감능력이 뛰어난 성향을 보입니다. 감정 표현이 풍부하고 타인을 배려하는 마음이 깊습니다.',
    'type.egenMale.characteristics': '감성적|공감능력 우수|세심함|배려심 깊음|소통 지향적',
    'type.egenMale.datingStyle': '감정적인 교감을 중시하고, 상대방의 마음을 세심하게 살피는 로맨틱한 스타일입니다. 깊은 대화와 정서적 연결을 추구합니다.',
    'type.egenMale.compatibility': '테토녀와 이상적인 조합을 이루며, 서로 다른 강점으로 균형잡힌 관계를 만듭니다.',

    'type.egenFemale.name': '에겐녀',
    'type.egenFemale.subtitle': '온화하고 협력적인',
    'type.egenFemale.description': '높은 에스트로겐 수치로 온화하고 협력적인 성향이 강합니다. 타인과의 조화를 중시하고 평화로운 관계를 추구합니다.',
    'type.egenFemale.characteristics': '온화함|협력적|평화추구|타인배려|감정이입 능력',
    'type.egenFemale.datingStyle': '안정적이고 따뜻한 관계를 선호하며, 서로를 아끼고 보살피는 것을 중시합니다. 편안하고 자연스러운 만남을 좋아합니다.',
    'type.egenFemale.compatibility': '테토남과 완벽한 궁합을 보이며, 서로의 특성이 조화롭게 어우러집니다.',

    // Test instructions and guidance
    'test.instructions': '각 질문에 대해 가장 자신과 비슷한 답변을 선택해주세요.',
    'test.tip': '정답은 없으니 솔직하게 답변해주세요.',
    'test.nextButton': '다음',
    'test.prevButton': '이전',
    'test.submitButton': '결과 보기',

    // Results page additional translations
    'results.scoreBreakdown': '점수 분석',
    'results.tetoScore': 'TETO 점수',
    'results.egenScore': 'EGEN 점수', 
    'results.shareResults': '결과 공유하기',
    'results.downloadResults': '결과 다운로드',
    'results.completeTestMessage': '테스트를 완료해주세요',
    'results.goToTest': '테스트 하러 가기',
    'results.shareMessage': '나의 성격 유형은',
    'results.askQuestion': '당신은 어떤 유형인가요?',
    'results.shareTitle': 'TETO-EGEN 성격 테스트 결과',

    // Common
    'common.loading': '로딩 중...',
    'common.error': '오류가 발생했습니다',
    'common.back': '돌아가기',
    'common.next': '다음',
    'common.previous': '이전',
    'common.submit': '제출',
    'common.cancel': '취소',
    'common.confirm': '확인',
  },
  en: {
    // Homepage
    'home.title': 'TETO-EGEN',
    'home.subtitle': 'Discover Your Hidden Personality Type',
    'home.description': 'Revolutionary personality analysis based on testosterone and estrogen\nDiscover your unique dating style and personality traits',
    'home.startTest': 'Start Test',
    'home.features.scientific': 'Scientific Analysis',
    'home.features.scientificDesc': 'Hormone-based personality classification',
    'home.features.dating': 'Dating Compatibility',
    'home.features.datingDesc': 'Personalized dating style analysis',
    'home.features.types': '4 Types',
    'home.features.typesDesc': 'Teto Male/Female, Egen Male/Female',
    'home.stats.participants': 'Participants',
    'home.stats.accuracy': 'Accuracy',
    'home.stats.time': 'Duration',
    'home.stats.satisfaction': 'Satisfaction',

    // Test page
    'test.title': 'TETO-EGEN Personality Test',
    'test.intro.title': 'Personality Analysis Start',
    'test.intro.description': 'Analyze your personality type through 20 questions.',
    'test.intro.features.hormonal': 'Hormone-based Analysis',
    'test.intro.features.hormonalDesc': 'Analysis of testosterone and estrogen characteristics',
    'test.intro.features.personality': 'Personality Classification',
    'test.intro.features.personalityDesc': 'Classified into 4 types based on behavioral and social characteristics influenced by each hormone.',
    'test.start': 'Start Test',
    'test.genderSelection': 'Gender Selection',
    'test.genderDesc': 'Please select your gender for accurate result analysis',
    'test.male': 'Male',
    'test.female': 'Female',
    'test.privacyNote': 'Selected information is used only for personality analysis and is not stored',
    'test.progress': 'Progress',
    'test.question': 'Question',

    // Results page
    'results.title': 'Test Results',
    'results.yourType': 'Your Personality Type',
    'results.characteristics': 'Key Characteristics',
    'results.datingStyle': 'Dating Style',
    'results.compatibility': 'Compatibility',
    'results.retakeTest': 'Retake Test',
    'results.viewAllTypes': 'View All Types',

    // Navigation
    'nav.home': 'Home',
    'nav.test': 'Test',
    'nav.results': 'Results',
    'nav.allTypes': 'All Types',

    // Theme toggle
    'theme.light': 'Light Mode',
    'theme.dark': 'Dark Mode',
    'theme.system': 'System',

    // Language toggle
    'language.korean': '한국어',
    'language.english': 'English',

    // Personality Types
    'type.tetoMale.name': 'Teto Male',
    'type.tetoMale.subtitle': 'Challenging and Strong Leadership',
    'type.tetoMale.description': 'Due to high testosterone levels, you show strong competitiveness and enjoy challenges. You have excellent leadership and act actively to achieve goals.',
    'type.tetoMale.characteristics': 'Highly Competitive|Strong Leadership|Challenging|Independent|Decisive',
    'type.tetoMale.datingStyle': 'Prefers direct and active approaches, likes to lead partners. Enjoys adventurous dates and tends to take initiative in relationships.',
    'type.tetoMale.compatibility': 'Shows best compatibility with Egen Female, where different traits harmoniously complement each other.',

    'type.tetoFemale.name': 'Teto Female',
    'type.tetoFemale.subtitle': 'Independent and Progressive',
    'type.tetoFemale.description': 'Due to high testosterone influence, shows independent and confident tendencies. Breaks away from traditional feminine roles to pave your own path.',
    'type.tetoFemale.characteristics': 'Independent|Progressive|Confident|Challenging|Leading',
    'type.tetoFemale.datingStyle': 'Seeks equal relationships and prefers relationships that acknowledge each other\'s individuality and independence. Enjoys sharing new experiences together.',
    'type.tetoFemale.compatibility': 'Goes well with Egen Male, creating relationships that respect and complement each other\'s differences.',

    'type.egenMale.name': 'Egen Male',
    'type.egenMale.subtitle': 'Careful and Emotional',
    'type.egenMale.description': 'Due to high estrogen influence, shows delicate and excellent empathetic abilities. Has rich emotional expression and deep consideration for others.',
    'type.egenMale.characteristics': 'Emotional|Excellent Empathy|Careful|Deeply Considerate|Communication-oriented',
    'type.egenMale.datingStyle': 'Values emotional connection and is a romantic style that carefully considers partner\'s feelings. Pursues deep conversations and emotional connections.',
    'type.egenMale.compatibility': 'Forms ideal combination with Teto Female, creating balanced relationships with different strengths.',

    'type.egenFemale.name': 'Egen Female',
    'type.egenFemale.subtitle': 'Gentle and Cooperative',
    'type.egenFemale.description': 'Due to high estrogen levels, has strong gentle and cooperative tendencies. Values harmony with others and pursues peaceful relationships.',
    'type.egenFemale.characteristics': 'Gentle|Cooperative|Peace-seeking|Considerate of Others|Emotional Empathy',
    'type.egenFemale.datingStyle': 'Prefers stable and warm relationships, values caring for and cherishing each other. Likes comfortable and natural meetings.',
    'type.egenFemale.compatibility': 'Shows perfect compatibility with Teto Male, where each other\'s characteristics harmoniously complement.',

    // Test instructions and guidance
    'test.instructions': 'Please select the answer that is most similar to yourself for each question.',
    'test.tip': 'There are no right or wrong answers, so please answer honestly.',
    'test.nextButton': 'Next',
    'test.prevButton': 'Previous',
    'test.submitButton': 'View Results',

    // Results page additional translations
    'results.scoreBreakdown': 'Score Analysis',
    'results.tetoScore': 'TETO Score',
    'results.egenScore': 'EGEN Score',
    'results.shareResults': 'Share Results',
    'results.downloadResults': 'Download Results',

    // Results page additional translations  
    'results.completeTestMessage': 'Please complete the test first',
    'results.goToTest': 'Go to Test',
    'results.shareMessage': 'My personality type is',
    'results.askQuestion': 'What type are you?',
    'results.shareTitle': 'TETO-EGEN Personality Test Results',

    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
    'common.confirm': 'Confirm',
  },
};

const LANGUAGE_STORAGE_KEY = 'teto-egen-language';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (saved === 'ko' || saved === 'en') {
        return saved;
      }
      // Default to Korean for Korean users, English for others
      const browserLang = navigator.language;
      return browserLang.startsWith('ko') ? 'ko' : 'en';
    }
    return 'ko';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    }
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};