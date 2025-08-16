import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Users, Rocket } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      {/* Cyberpunk cityscape background with neon lighting */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/10 via-cyber-purple/10 to-cyber-cyan/10"></div>

      <div className="text-center max-w-4xl mx-auto relative z-10 animate-fade-in">
        {/* Hero Title */}
        <div className="mb-8">
          <h1 className="font-futuristic text-4xl md:text-6xl lg:text-7xl font-black mb-4 glitch-text">
            <span className="bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-cyan bg-clip-text text-transparent">
              {t('home.title')}
            </span>
          </h1>
          <div className="typing-text font-korean text-xl md:text-2xl text-cyber-blue mb-6">
            {t('home.subtitle')}
          </div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
            {t('home.description')}
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="cyber-border animate-float">
            <Card className="cyber-card border-0 text-center">
              <CardContent className="p-6">
                <Brain className="w-12 h-12 text-cyber-cyan mb-4 mx-auto" />
                <h3 className="font-bold text-lg mb-2">{t('home.features.scientific')}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t('home.features.scientificDesc')}</p>
              </CardContent>
            </Card>
          </div>
          <div className="cyber-border animate-float" style={{ animationDelay: '0.2s' }}>
            <Card className="cyber-card border-0 text-center">
              <CardContent className="p-6">
                <Heart className="w-12 h-12 text-cyber-pink mb-4 mx-auto" />
                <h3 className="font-bold text-lg mb-2">{t('home.features.dating')}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t('home.features.datingDesc')}</p>
              </CardContent>
            </Card>
          </div>
          <div className="cyber-border animate-float" style={{ animationDelay: '0.4s' }}>
            <Card className="cyber-card border-0 text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-cyber-purple mb-4 mx-auto" />
                <h3 className="font-bold text-lg mb-2">{t('home.features.types')}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t('home.features.typesDesc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Button */}
        <Link href="/test">
          <Button className="neon-button bg-gradient-to-r from-cyber-blue to-cyber-purple px-12 py-4 rounded-full text-xl font-bold transform transition-all duration-300 hover:scale-105 animate-pulse-glow">
            <Rocket className="w-6 h-6 mr-3" />
            {t('home.startTest')}
          </Button>
        </Link>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-cyber-cyan">12,847</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{t('home.stats.participants')}</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-cyber-pink">98.7%</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{t('home.stats.accuracy')}</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-cyber-purple">2분</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{t('home.stats.time')}</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-cyber-blue">4.9★</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{t('home.stats.satisfaction')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}