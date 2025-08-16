import React, { useState, useEffect } from 'react';

// Define the interface for PersonalityType
export interface PersonalityType {
  emoji: string;
  type: string; // This will be the key in the personalityTypes object
  subtitle: string;
  description: string;
  traits: string[];
  dating: string[];
  compatibility: {
    type: string; // This will be the key in the personalityTypes object
    emoji: string;
    description: string;
  };
}

// Multilingual translations for personality types
const translations = {
  ko: {
    'teto-male': {
      type: '테토남',
      subtitle: '테스토스테론 남성',
      description: '당신은 강한 리더십과 추진력을 가진 테토남입니다. 현실적이고 목표 지향적이며, 행동으로 사랑을 표현하는 타입이에요.',
      traits: [
        '강한 리더십과 자기주장',
        '논리적이고 현실적 사고',
        '목표 지향적 실행력',
        '단순하고 직선적인 성격',
        '활동적이고 사교적'
      ],
      dating: [
        '행동으로 사랑을 표현',
        '직접적이고 솔직한 소통',
        '실질적인 도움과 지원',
        '주도적인 연애 스타일',
        '갈등을 정면으로 해결'
      ],
      compatibility: {
        description: '서로의 부족한 면을 완벽하게 보완해주는 관계'
      }
    },
    'egen-male': {
      type: '에겐남',
      subtitle: '에스트로겐 남성',
      description: '당신은 높은 감수성과 예술적 취향을 가진 에겐남입니다. 섬세하고 공감 능력이 뛰어나며, 내면의 깊이를 중요시하는 타입이에요.',
      traits: [
        '높은 감수성과 예민함',
        '예술적 취향과 미적 감각',
        '뛰어난 공감 능력',
        '내향적이고 사색적',
        '트렌드에 민감한 센스'
      ],
      dating: [
        '감정적 교류를 중시',
        '로맨틱하고 섬세한 표현',
        '수동적이고 배려심 많음',
        '깊은 대화를 선호',
        '분위기와 감성 중시'
      ],
      compatibility: {
        description: '에너지와 추진력을 보완받는 매력적인 조합'
      }
    },
    'teto-female': {
      type: '테토녀',
      subtitle: '테스토스테론 여성',
      description: '당신은 독립적이고 활발한 에너지를 가진 테토녀입니다. 도전적이고 단순한 사고를 가지며, 자신만의 길을 걸어가는 타입이에요.',
      traits: [
        '독립적이고 자립적',
        '활발하고 도전적',
        '단순하고 현실적 사고',
        '강한 정신력과 추진력',
        '솔직하고 직설적'
      ],
      dating: [
        '평등한 관계를 추구',
        '활동적인 데이트 선호',
        '감정표현이 솔직하고 직접적',
        '독립성을 유지하려 함',
        '강한 상대를 선호'
      ],
      compatibility: {
        description: '서로의 강함을 인정하고 존중하는 역동적인 관계'
      }
    },
    'egen-female': {
      type: '에겐녀',
      subtitle: '에스트로겐 여성',
      description: '당신은 섬세한 감성과 로맨틱한 성향을 가진 에겐녀입니다. 감정이 풍부하고 아기자기한 것을 좋아하는 전형적인 여성적 매력의 소유자예요.',
      traits: [
        '섬세하고 감성적',
        '로맨틱하고 꿈꾸는 성향',
        '예민하고 세심한 감정',
        '아기자기한 것을 선호',
        '배려심 많고 따뜻함'
      ],
      dating: [
        '로맨틱한 분위기를 중시',
        '세심한 관심과 배려 원함',
        '감정적 교류와 공감 중요',
        '기념일과 이벤트 선호',
        '안정감 있는 관계 추구'
      ],
      compatibility: {
        description: '깊은 감정적 교류와 이해가 가능한 조화로운 관계'
      }
    }
  },
  en: {
    'teto-male': {
      type: 'Teto Male',
      subtitle: 'Testosterone Male',
      description: 'You are a Teto Male with strong leadership and drive. You are realistic, goal-oriented, and express love through actions.',
      traits: [
        'Strong leadership and assertiveness',
        'Logical and realistic thinking',
        'Goal-oriented execution',
        'Simple and straightforward personality',
        'Active and sociable'
      ],
      dating: [
        'Expressing love through actions',
        'Direct and honest communication',
        'Practical help and support',
        'Proactive dating style',
        'Direct conflict resolution'
      ],
      compatibility: {
        description: 'A relationship that perfectly complements each other\'s weaknesses'
      }
    },
    'egen-male': {
      type: 'Egen Male',
      subtitle: 'Estrogen Male',
      description: 'You are an Egen Male with high sensitivity and artistic taste. You are delicate, empathetic, and value inner depth.',
      traits: [
        'High sensitivity and perceptiveness',
        'Artistic taste and aesthetic sense',
        'Excellent empathy',
        'Introverted and contemplative',
        'Sensitive to trends and tasteful'
      ],
      dating: [
        'Emphasis on emotional exchange',
        'Romantic and delicate expressions',
        'Passive and considerate',
        'Prefers deep conversations',
        'Values atmosphere and emotion'
      ],
      compatibility: {
        description: 'An attractive combination that complements energy and drive'
      }
    },
    'teto-female': {
      type: 'Teto Female',
      subtitle: 'Testosterone Female',
      description: 'You are a Teto Female with independent and vibrant energy. You are challenging, have a simple way of thinking, and forge your own path.',
      traits: [
        'Independent and self-reliant',
        'Active and challenging',
        'Simple and realistic thinking',
        'Strong willpower and drive',
        'Honest and straightforward'
      ],
      dating: [
        'Pursues equal relationships',
        'Prefers active dates',
        'Honest and direct emotional expression',
        'Tends to maintain independence',
        'Prefers strong partners'
      ],
      compatibility: {
        description: 'A dynamic relationship that acknowledges and respects each other\'s strengths'
      }
    },
    'egen-female': {
      type: 'Egen Female',
      subtitle: 'Estrogen Female',
      description: 'You are an Egen Female with delicate sensibility and romantic tendencies. You are rich in emotion and have a typically feminine charm that loves cute things.',
      traits: [
        'Delicate and emotional',
        'Romantic and dreamy disposition',
        'Sensitive and meticulous emotions',
        'Prefers cute things',
        'Considerate and warm'
      ],
      dating: [
        'Values romantic atmosphere',
        'Desires meticulous attention and care',
        'Emotional exchange and empathy are important',
        'Prefers anniversaries and events',
        'Seeks stable relationships'
      ],
      compatibility: {
        description: 'A harmonious relationship with deep emotional exchange and understanding'
      }
    }
  }
};

// Data for personality types, structured for multilingual access
export const personalityTypes: Record<string, PersonalityType> = {
  'teto-male': {
    emoji: '🔥',
    type: 'tetoMale', // Key for accessing translations
    subtitle: '', // Will be filled by getLocalizedText
    description: '', // Will be filled by getLocalizedText
    traits: [], // Will be filled by getLocalizedText
    dating: [], // Will be filled by getLocalizedText
    compatibility: {
      type: 'egen-female', // Key for accessing translations
      emoji: '💕',
      description: '' // Will be filled by getLocalizedText
    }
  },
  'egen-male': {
    emoji: '🎨',
    type: 'egenMale', // Key for accessing translations
    subtitle: '', // Will be filled by getLocalizedText
    description: '', // Will be filled by getLocalizedText
    traits: [], // Will be filled by getLocalizedText
    dating: [], // Will be filled by getLocalizedText
    compatibility: {
      type: 'teto-female', // Key for accessing translations
      emoji: '⚡',
      description: '' // Will be filled by getLocalizedText
    }
  },
  'teto-female': {
    emoji: '⚡',
    type: 'tetoFemale', // Key for accessing translations
    subtitle: '', // Will be filled by getLocalizedText
    description: '', // Will be filled by getLocalizedText
    traits: [], // Will be filled by getLocalizedText
    dating: [], // Will be filled by getLocalizedText
    compatibility: {
      type: 'teto-male', // Key for accessing translations
      emoji: '🔥',
      description: '' // Will be filled by getLocalizedText
    }
  },
  'egen-female': {
    emoji: '🌸',
    type: 'egenFemale', // Key for accessing translations
    subtitle: '', // Will be filled by getLocalizedText
    description: '', // Will be filled by getLocalizedText
    traits: [], // Will be filled by getLocalizedText
    dating: [], // Will be filled by getLocalizedText
    compatibility: {
      type: 'egen-male', // Key for accessing translations
      emoji: '🎨',
      description: '' // Will be filled by getLocalizedText
    }
  }
};

// Helper function to get localized text
function getLocalizedText(key: string, locale: string): any {
  const localeData = (translations as any)[locale] || (translations as any)['en']; // Default to English
  const keys = key.split('.');
  let data = localeData;
  for (const k of keys) {
    if (data && data[k]) {
      data = data[k];
    } else {
      return `Translation missing for ${key} in ${locale}`;
    }
  }
  return data;
}

// Function to get a specific personality type with localized data
export function getPersonalityType(typeKey: string, locale: string): PersonalityType | undefined {
  const baseType = personalityTypes[typeKey];
  if (!baseType) {
    return undefined;
  }

  const localizedData = getLocalizedText(typeKey, locale);

  if (!localizedData) {
    return undefined; // Or handle missing translation appropriately
  }

  // Populate the PersonalityType with localized data
  const translatedTraits = localizedData.traits ? localizedData.traits.map((trait: string) => trait) : [];
  const translatedDating = localizedData.dating ? localizedData.dating.map((d: string) => d) : [];

  return {
    ...baseType,
    type: localizedData.type || baseType.type, // Use translated type if available
    subtitle: localizedData.subtitle || '',
    description: localizedData.description || '',
    traits: translatedTraits,
    dating: translatedDating,
    compatibility: {
      ...baseType.compatibility,
      description: localizedData.compatibility?.description || ''
    }
  };
}

// Function to get all personality types for a given locale
export function getAllPersonalityTypes(locale: string): Record<string, PersonalityType> {
  const localizedTypes: Record<string, PersonalityType> = {};
  for (const key in personalityTypes) {
    const localizedType = getPersonalityType(key, locale);
    if (localizedType) {
      localizedTypes[key] = localizedType;
    }
  }
  return localizedTypes;
}


// Function to calculate personality type based on scores and gender
export function calculatePersonalityType(tetoScore: number, egenScore: number, gender: 'male' | 'female'): string {
  if (gender === 'male') {
    return tetoScore > egenScore ? 'teto-male' : 'egen-male';
  } else {
    return tetoScore > egenScore ? 'teto-female' : 'egen-female';
  }
}