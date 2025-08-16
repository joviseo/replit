import { Link } from 'wouter';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTestState } from '@/hooks/use-test-state';
import { personalityTypes, calculatePersonalityType } from '@/lib/personality-types';
import { RotateCcw, Users, Home, Check, Heart, Sparkles } from 'lucide-react';
import { useLanguage } from "@/hooks/use-language";

export default function Results() {
  const { testState, resetTest } = useTestState();
  const { t, language } = useLanguage();

  if (!testState.isCompleted || !testState.gender) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="cyber-card border-0">
          <CardContent className="p-8 text-center">
            <p className="text-lg">{t('results.completeTestMessage')}</p>
            <Link href="/test">
              <Button className="mt-4">{t('results.goToTest')}</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const personalityKey = calculatePersonalityType(testState.tetoScore, testState.egenScore, testState.gender);
  const personality = personalityTypes[personalityKey];

  const getTranslatedType = (typeKey: string | undefined) => {
    // Convert typeKey to camelCase for translation keys
    if (!typeKey) return null;
    
    // Use the personality.type property which contains the translation key
    const translationKey = personality?.type;
    if (!translationKey) return null;
    
    return {
      name: t(`type.${translationKey}.name`),
      subtitle: t(`type.${translationKey}.subtitle`),
      description: t(`type.${translationKey}.description`),
      characteristics: t(`type.${translationKey}.characteristics`).split('|'),
      datingStyle: t(`type.${translationKey}.datingStyle`),
      compatibility: t(`type.${translationKey}.compatibility`)
    };
  };

  const translatedType = getTranslatedType(personalityKey);

  if (!translatedType) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="cyber-card border-0">
          <CardContent className="p-8 text-center">
            <p className="text-lg">{t('results.completeTestMessage')}</p>
            <Link href="/test">
              <Button className="mt-4">{t('results.goToTest')}</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  

  const handleRetakeTest = () => {
    resetTest();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl mx-auto w-full">
        {/* Result Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-futuristic text-3xl md:text-4xl font-bold mb-4 text-cyber-blue">
            {t('results.analysisComplete')}
          </h2>
          <p className="text-lg text-gray-300">{t('results.yourPersonalityTypeIs')}</p>
        </div>

        {/* Result Card */}
        <div className="cyber-border mb-8 animate-slide-up">
          <Card className="cyber-card border-0">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="text-6xl md:text-8xl mb-4">{personality.emoji}</div>
                <h3 className="font-futuristic text-3xl md:text-4xl font-bold mb-2">{translatedType.name}</h3>
                <p className="text-xl text-cyber-cyan">{translatedType.subtitle}</p>
              </div>

              <div className="bg-cyber-navy/50 rounded-xl p-6 mb-6">
                <p className="text-lg leading-relaxed">
                  {translatedType.description}
                </p>
              </div>

              {/* Characteristics */}
              <Card className="cyber-card border-cyber-blue/30 mb-6">
                <CardHeader>
                  <h3 className="flex items-center gap-2 font-bold text-lg">
                    <Heart className="h-5 w-5 text-cyber-blue" />
                    {t('results.datingStyle')}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{translatedType.datingStyle}</p>
                </CardContent>
              </Card>

              {/* Dating Style */}
              <Card className="cyber-card border-cyber-blue/30 mb-6">
                <CardHeader>
                  <h3 className="flex items-center gap-2 font-bold text-lg">
                    <Sparkles className="h-5 w-5 text-cyber-blue" />
                    {t('results.characteristics')}
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {translatedType.characteristics.map((trait, index) => (
                      <div key={index} className="bg-cyber-blue/10 text-cyber-blue border-cyber-blue/30 rounded-md px-3 py-1 text-sm font-medium">
                        {trait}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Compatibility */}
              <Card className="cyber-card border-cyber-blue/30 mb-8">
                <CardHeader>
                  <h3 className="flex items-center gap-2 font-bold text-lg">
                    <Users className="h-5 w-5 text-cyber-blue" />
                    {t('results.compatibility')}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{translatedType.compatibility}</p>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/test">
                  <Button onClick={handleRetakeTest} variant="outline" className="border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-dark px-8 py-3 rounded-full font-bold">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    {t('results.retakeTest')}
                  </Button>
                </Link>
                <Link href="/all-types">
                  <Button variant="outline" className="border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-white px-8 py-3 rounded-full font-bold">
                    <Users className="w-4 h-4 mr-2" />
                    {t('results.viewAllTypes')}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}