import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageProvider } from "@/hooks/use-language";
import { LanguageToggle } from "@/components/language-toggle";
import Home from "@/pages/home.tsx";
import Test from "@/pages/test.tsx";
import Results from "@/pages/results.tsx";
import AllTypes from "@/pages/all-types.tsx";
import NotFound from "@/pages/not-found.tsx";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/test" component={Test} />
      <Route path="/results" component={Results} />
      <Route path="/all-types" component={AllTypes} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="teto-egen-ui-theme">
      <LanguageProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <div className="bg-background text-foreground min-h-screen font-korean overflow-x-hidden transition-colors duration-300">
              {/* Control Buttons */}
              <div className="fixed top-4 right-4 z-50 flex gap-2">
                <LanguageToggle />
                <ThemeToggle />
              </div>

            {/* Particle Background */}
            <div className="fixed inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-navy via-cyber-dark to-cyber-slate opacity-90 dark:opacity-90 opacity-30"></div>
              <div className="absolute inset-0 opacity-10 dark:opacity-10 opacity-5" style={{
                backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2300D4FF" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`,
              }}></div>
            </div>
            
            <div className="relative z-10">
              <Router />
            </div>
          </div>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
