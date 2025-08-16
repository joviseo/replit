import { useState, useEffect } from 'react';
import { useLocation, Link } from 'wouter';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { questions, getShuffledQuestions } from '@/lib/questions';
import { useTestState } from '@/hooks/use-test-state';
import { useLanguage } from '@/hooks/use-language';
import { Play, Clock, Lightbulb, Shield, User, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { questionTranslations } from "@/lib/questions-translations";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function Test() {
  const [, setLocation] = useLocation();
  const [showIntro, setShowIntro] = useState(true);
  const [showGenderSelection, setShowGenderSelection] = useState(false);
  const [questionAnimation, setQuestionAnimation] = useState(true);
  const { testState, setGender, selectOption, goToPreviousQuestion } = useTestState();
  const { t, language } = useLanguage();
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  useEffect(() => {
    if (testState.isCompleted) {
      setLocation('/results');
    }
  }, [testState.isCompleted, setLocation]);

  // Reset selectedAnswer when currentQuestion changes, or restore previous answer
  useEffect(() => {
    const currentQuestionIndex = testState.currentQuestion;
    if (currentQuestionIndex < testState.answers.length) {
      // Going back to a previously answered question
      setSelectedAnswer(testState.answers[currentQuestionIndex]);
    } else {
      // New question
      setSelectedAnswer(null);
    }
  }, [testState.currentQuestion, testState.answers]);

  const beginTest = () => {
    setShowIntro(false);
    setShowGenderSelection(true);
  };

  const selectGender = (gender: 'male' | 'female') => {
    setGender(gender);
    setShowGenderSelection(false);
    // Initialize shuffled questions and reset current question
    // This part assumes `useTestState` can handle initialization
    // If not, you might need to manage shuffledQuestions state here or in a context
    // For now, we'll assume it's handled or will be handled by `useTestState` hook logic
  };

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedAnswer(optionIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;
    
    const currentQuestions = testState.shuffledQuestions.length > 0 ? testState.shuffledQuestions : questions;
    const option = currentQuestions[testState.currentQuestion].options[selectedAnswer];

    setQuestionAnimation(false);
    setTimeout(() => {
      selectOption(option, selectedAnswer);
      setQuestionAnimation(true);
    }, 300);
  };

  const handlePreviousQuestion = () => {
    if (testState.currentQuestion > 0) {
      setQuestionAnimation(false);
      setTimeout(() => {
        goToPreviousQuestion();
        setQuestionAnimation(true);
      }, 300);
    }
  };

  

  // Intro screen
  if (showIntro) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="cyber-border mb-8 animate-slide-up">
            <Card className="cyber-card border-0">
              <CardContent className="p-8">
                <h2 className="font-futuristic text-3xl md:text-4xl font-bold mb-6 text-cyber-blue">
                  {t('test.introTitle')}
                </h2>

                <div className="text-left space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-cyber-cyan/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-cyber-cyan"></div>
                    </div>
                    <p>{t('test.introPoints.0')}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-cyber-purple mt-1" />
                    <p>{t('test.introPoints.1')}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="w-5 h-5 text-cyber-pink mt-1" />
                    <p>{t('test.introPoints.2')}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-cyber-blue mt-1" />
                    <p>{t('test.introPoints.3')}</p>
                  </div>
                </div>

                <div className="bg-cyber-navy/50 rounded-xl p-6 mb-8">
                  <h3 className="font-bold text-lg mb-3 text-cyber-cyan">{t('test.aboutTetoEgen')}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {t('test.tetoEgenDescription')}
                  </p>
                </div>

                <Button onClick={beginTest} className="neon-button bg-gradient-to-r from-cyber-purple to-cyber-pink px-10 py-4 rounded-full text-lg font-bold">
                  <Play className="w-5 h-5 mr-3" />
                  {t('test.startTestButton')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Gender selection screen
  if (showGenderSelection) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="cyber-border mb-8 animate-slide-up">
            <Card className="cyber-card border-0">
              <CardContent className="p-8">
                <h2 className="font-futuristic text-3xl md:text-4xl font-bold mb-6 text-cyber-blue">
                  {t('test.genderSelection')}
                </h2>

                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  {t('test.genderDesc')}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <Button
                    onClick={() => selectGender('male')}
                    className="neon-button bg-gradient-to-r from-cyber-blue to-cyber-cyan px-8 py-6 rounded-xl text-lg font-bold h-auto flex flex-col items-center space-y-3 hover:scale-105 transition-all duration-300"
                  >
                    <User className="w-12 h-12" />
                    <span>{t('test.male')}</span>
                  </Button>

                  <Button
                    onClick={() => selectGender('female')}
                    className="neon-button bg-gradient-to-r from-cyber-pink to-cyber-purple px-8 py-6 rounded-xl text-lg font-bold h-auto flex flex-col items-center space-y-3 hover:scale-105 transition-all duration-300"
                  >
                    <Users className="w-12 h-12" />
                    <span>{t('test.female')}</span>
                  </Button>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
                  {t('test.privacyNote')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Safety check: ensure we have a valid question and gender selected
  const currentQuestionsArray = testState.shuffledQuestions.length > 0 ? testState.shuffledQuestions : questions;
  if (testState.currentQuestion >= currentQuestionsArray.length || !testState.gender) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="cyber-card border-0">
          <CardContent className="p-8 text-center">
            <p className="text-lg mb-4">{t('test.errorState')}</p>
            <Link href="/test">
              <Button className="neon-button bg-gradient-to-r from-cyber-blue to-cyber-purple px-8 py-3 rounded-full">
                {t('test.retryButton')}
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQuestionData = currentQuestionsArray[testState.currentQuestion];
  const translatedQuestion = questionTranslations[language][testState.currentQuestion];
  const progressPercent = ((testState.currentQuestion + 1) / currentQuestionsArray.length) * 100;

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-cyber-blue mb-2">{t('test.title')}</h1>
          <p className="text-muted-foreground">{t('test.question')} {testState.currentQuestion + 1} / {currentQuestionsArray.length}</p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>{t('test.progress')}</span>
            <span>{Math.round(progressPercent)}%</span>
          </div>
          <Progress value={progressPercent} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="cyber-card border-cyber-blue/30 mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-center">{translatedQuestion?.question || currentQuestionData.question}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground text-center mb-4">{t('test.instructions')}</p>
            <RadioGroup
              value={selectedAnswer !== null ? selectedAnswer.toString() : ""}
              onValueChange={(value) => handleOptionSelect(parseInt(value))}
            >
              {currentQuestionData.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 rounded-lg border border-cyber-blue/20 hover:bg-cyber-blue/5">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="cursor-pointer flex-1">
                    {translatedQuestion?.options[index] || option.text}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePreviousQuestion}
            disabled={testState.currentQuestion === 0}
            className="border-cyber-blue/30 hover:bg-cyber-blue/10"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            {t('test.prevButton')}
          </Button>

          <Button
            onClick={handleNextQuestion}
            disabled={selectedAnswer === null}
            className="neon-button bg-cyber-blue hover:bg-cyber-blue/80"
          >
            {testState.currentQuestion === currentQuestionsArray.length - 1 ? t('test.submitButton') : t('test.nextButton')}
            {testState.currentQuestion !== currentQuestionsArray.length - 1 && <ChevronRight className="h-4 w-4 ml-2" />}
          </Button>
        </div>
      </div>
    </div>
  );
}