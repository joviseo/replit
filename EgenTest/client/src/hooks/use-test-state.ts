import { useState, useEffect } from 'react';
import { QuestionOption, Question, getShuffledQuestions } from '@/lib/questions';

export interface TestState {
  currentQuestion: number;
  tetoScore: number;
  egenScore: number;
  gender: 'male' | 'female' | null;
  answers: number[];
  isCompleted: boolean;
  shuffledQuestions: Question[];
}

const STORAGE_KEY = 'teto-egen-test-state';

const getInitialState = (): TestState => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // If no shuffled questions exist, create new ones
        if (!parsed.shuffledQuestions) {
          parsed.shuffledQuestions = getShuffledQuestions();
        }
        return parsed;
      } catch {
        // Fall through to default
      }
    }
  }
  return {
    currentQuestion: 0,
    tetoScore: 0,
    egenScore: 0,
    gender: null,
    answers: [],
    isCompleted: false,
    shuffledQuestions: getShuffledQuestions(),
  };
};

export function useTestState() {
  const [testState, setTestState] = useState<TestState>(getInitialState);

  // Save to localStorage whenever state changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(testState));
    }
  }, [testState]);

  const setGender = (gender: 'male' | 'female') => {
    setTestState(prev => ({ ...prev, gender }));
  };

  const selectOption = (option: QuestionOption, optionIndex: number) => {
    setTestState(prev => ({
      ...prev,
      tetoScore: prev.tetoScore + option.teto,
      egenScore: prev.egenScore + option.egen,
      answers: [...prev.answers, optionIndex],
      currentQuestion: prev.currentQuestion + 1,
      isCompleted: prev.currentQuestion + 1 >= 20,
    }));
  };

  const goToPreviousQuestion = () => {
    setTestState(prev => {
      if (prev.currentQuestion > 0) {
        const previousAnswer = prev.answers[prev.currentQuestion - 1];
        const currentQuestions = prev.shuffledQuestions.length > 0 ? prev.shuffledQuestions : getShuffledQuestions();
        const previousOption = currentQuestions[prev.currentQuestion - 1].options[previousAnswer];
        
        return {
          ...prev,
          currentQuestion: prev.currentQuestion - 1,
          tetoScore: prev.tetoScore - previousOption.teto,
          egenScore: prev.egenScore - previousOption.egen,
          answers: prev.answers.slice(0, -1),
          isCompleted: false,
        };
      }
      return prev;
    });
  };

  const resetTest = () => {
    const initialState = {
      currentQuestion: 0,
      tetoScore: 0,
      egenScore: 0,
      gender: null,
      answers: [],
      isCompleted: false,
      shuffledQuestions: getShuffledQuestions(),
    };
    setTestState(initialState);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return {
    testState,
    setGender,
    selectOption,
    goToPreviousQuestion,
    resetTest,
  };
}
