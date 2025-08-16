import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/hooks/use-language"

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="neon-button bg-background border-cyber-blue/30 hover:border-cyber-blue/60">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">언어 변경</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="cyber-card border-cyber-blue/30">
        <DropdownMenuItem 
          onClick={() => setLanguage("ko")} 
          className={`hover:bg-cyber-blue/10 ${language === 'ko' ? 'bg-cyber-blue/20' : ''}`}
        >
          {t('language.korean')}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage("en")} 
          className={`hover:bg-cyber-blue/10 ${language === 'en' ? 'bg-cyber-blue/20' : ''}`}
        >
          {t('language.english')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}