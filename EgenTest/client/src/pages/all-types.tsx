import { Link } from 'wouter';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { personalityTypes } from "@/lib/personality-types";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { useLanguage } from "@/hooks/use-language";
import { ArrowRight } from 'lucide-react';
import { Home } from 'lucide-react';

export default function AllTypes() {
  const [, setLocation] = useLocation();
  const { t } = useLanguage();

  const getTranslatedType = (typeKey: string) => {
    return {
      name: t(`type.${typeKey}.name`),
      subtitle: t(`type.${typeKey}.subtitle`),
      description: t(`type.${typeKey}.description`),
      characteristics: t(`type.${typeKey}.characteristics`).split('|'),
      datingStyle: t(`type.${typeKey}.datingStyle`),
      compatibility: t(`type.${typeKey}.compatibility`)
    };
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={() => setLocation('/')}
            className="mr-4 hover:bg-cyber-blue/10"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('common.back')}
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-cyber-blue">{t('nav.allTypes')}</h1>
            <p className="text-muted-foreground">4가지 TETO-EGEN 성격 유형을 알아보세요</p>
          </div>
        </div>

        {/* Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.values(personalityTypes).map((type) => {
            const translatedType = getTranslatedType(type.id);
            return (
              <Card key={type.id} className="cyber-card border-cyber-blue/30 hover:border-cyber-blue/50 transition-colors">
                <CardHeader>
                  <div className={`text-4xl mb-3 bg-gradient-to-r ${type.color} bg-clip-text text-transparent`}>
                    {type.icon}
                  </div>
                  <CardTitle className="text-2xl text-cyber-blue">{translatedType.name}</CardTitle>
                  <CardDescription className="text-lg">{translatedType.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {translatedType.description}
                  </p>

                  <div>
                    <h3 className="font-semibold mb-3 text-cyber-blue">{t('results.characteristics')}</h3>
                    <div className="flex flex-wrap gap-2">
                      {translatedType.characteristics.map((trait, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className="bg-cyber-blue/10 text-cyber-blue border-cyber-blue/30"
                        >
                          {trait}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2 text-cyber-blue">{t('results.datingStyle')}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {translatedType.datingStyle}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2 text-cyber-blue">{t('results.compatibility')}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {translatedType.compatibility}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Dating Chain */}
        <div className="cyber-border animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Card className="cyber-card border-0">
            <CardContent className="p-8">
              <h3 className="font-bold text-2xl mb-6 text-center text-cyber-blue">{t('results.datingChain.title')}</h3>
              <div className="flex items-center justify-center space-x-2 md:space-x-4 text-sm md:text-lg font-bold flex-wrap">
                <span className="text-cyber-pink">{t('type.egen_female.name')}</span>
                <ArrowRight className="w-4 h-4 text-cyber-cyan" />
                <span className="text-cyber-purple">{t('type.egen_male.name')}</span>
                <ArrowRight className="w-4 h-4 text-cyber-cyan" />
                <span className="text-cyber-cyan">{t('type.teto_female.name')}</span>
                <ArrowRight className="w-4 h-4 text-cyber-cyan" />
                <span className="text-cyber-blue">{t('type.teto_male.name')}</span>
                <ArrowRight className="w-4 h-4 text-cyber-cyan" />
                <span className="text-cyber-pink">{t('type.egen_female.name')}</span>
              </div>
              <p className="text-center text-gray-400 mt-4">
                {t('results.datingChain.description')}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Link href="/">
            <Button className="neon-button bg-gradient-to-r from-cyber-blue to-cyber-purple px-8 py-3 rounded-full font-bold">
              <Home className="w-4 h-4 mr-2" />
              {t('common.home')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}