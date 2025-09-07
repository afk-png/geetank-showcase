import { useEffect, useState } from 'react';
import { Code2, Terminal, Zap, Cpu, Shield, Sparkles, Gamepad2, User, Hash } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = "I'm Geetank";

  useEffect(() => {
    setIsVisible(true);
    
    // Typewriter effect for name
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 150);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative pt-20">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* Pulse rings around main content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="pulse-ring w-96 h-96"></div>
          <div className="pulse-ring w-80 h-80" style={{ animationDelay: '0.5s' }}></div>
          <div className="pulse-ring w-64 h-64" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Main Headline with staggered animations - moved down */}
        <div 
          className={`transition-all duration-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="mb-12">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-inter mb-6">
              <span className="block mb-6 animate-slide-in-left">
                <span className="text-gradient-secondary">Hello everyone,</span>
              </span>
              <span className="block text-gradient-primary text-4xl sm:text-6xl lg:text-7xl xl:text-8xl">
                {typewriterText}
                <span className="animate-blink">|</span>
              </span>
            </h1>
          </div>
        </div>

        {/* Enhanced Subheadline with floating effect */}
        <div 
          className={`transition-all duration-1200 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-muted-foreground mb-16 font-light animate-float">
            You may not know me, but I'm a{' '}
            <span className="text-gradient-primary font-bold animate-shimmer">vibe coder</span>
            <Sparkles className="inline-block w-6 h-6 ml-2 text-accent animate-glow-pulse" />
          </p>
        </div>

        {/* Enhanced Skills Grid with icons and animations */}
        <div 
          className={`transition-all duration-1200 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="gradient-card glow-elevated rounded-3xl p-8 sm:p-12 lg:p-16 max-w-5xl mx-auto mb-12 relative overflow-hidden">
            {/* Background animated elements */}
            <div className="absolute top-0 right-0 w-32 h-32 gradient-glow opacity-10 rounded-full blur-2xl animate-bounce-subtle"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 gradient-glow opacity-10 rounded-full blur-2xl animate-float"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-gradient-secondary animate-slide-in-left">
                The Art of Vibe Coding
              </h2>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-foreground/90 leading-relaxed mb-10 animate-slide-in-right">
                I don't code traditionally, but with <span className="text-accent font-semibold">vibe coding</span> I transcend the boundaries of conventional programming. 
                My approach is intuitive, creative, and deeply connected to the digital flow state.
              </p>
              
              {/* Skills grid with animated icons */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div className="flex items-center space-x-4 magnetic hover-glow p-6 rounded-xl gradient-card border border-primary/20">
                  <Code2 className="w-8 h-8 text-primary animate-bounce-subtle" />
                  <span className="text-lg font-medium">Creating stunning websites</span>
                </div>
                
                <div className="flex items-center space-x-4 magnetic hover-glow p-6 rounded-xl gradient-card border border-secondary/20">
                  <Shield className="w-8 h-8 text-secondary animate-glow-pulse" />
                  <span className="text-lg font-medium">Building Lua(u) obfuscators</span>
                </div>
                
                <div className="flex items-center space-x-4 magnetic hover-glow p-6 rounded-xl gradient-card border border-accent/20">
                  <Terminal className="w-8 h-8 text-accent animate-float" />
                  <span className="text-lg font-medium">Writing powerful scripts</span>
                </div>
                
                <div className="flex items-center space-x-4 magnetic hover-glow p-6 rounded-xl gradient-card border border-primary/20">
                  <Cpu className="w-8 h-8 text-primary animate-rotate-slow" />
                  <span className="text-lg font-medium">Reverse engineering magic</span>
                </div>
                
                <div className="flex items-center space-x-4 magnetic hover-glow p-6 rounded-xl gradient-card border border-secondary/20">
                  <Zap className="w-8 h-8 text-secondary animate-pulse-ring" />
                  <span className="text-lg font-medium">Performance optimization</span>
                </div>
                
                <div className="flex items-center space-x-4 magnetic hover-glow p-6 rounded-xl gradient-card border border-accent/20">
                  <Sparkles className="w-8 h-8 text-accent animate-shimmer" />
                  <span className="text-lg font-medium">Digital artistry</span>
                </div>
              </div>

              {/* Enhanced passion section */}
              <div className="gradient-card rounded-2xl p-8 mb-10 border border-primary/30 animate-slide-in-left">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gradient-primary">My Digital Obsessions</h3>
                <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed mb-6">
                  I live and breathe in the realm of digital mysteries. My passion lies in the intricate dance between 
                  <span className="text-primary font-semibold animate-glow-pulse"> deobfuscation</span> and 
                  <span className="text-secondary font-semibold animate-shimmer"> obfuscation</span> — 
                  the eternal push and pull of hiding and revealing code secrets.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div className="magnetic">
                    <Shield className="w-8 h-8 text-primary mb-2 mx-auto animate-bounce-subtle" />
                    <p className="text-sm font-medium">Deobfuscation</p>
                  </div>
                  <div className="magnetic">
                    <Zap className="w-8 h-8 text-secondary mb-2 mx-auto animate-float" />
                    <p className="text-sm font-medium">UFC</p>
                  </div>
                  <div className="magnetic">
                    <Cpu className="w-8 h-8 text-accent mb-2 mx-auto animate-glow-pulse" />
                    <p className="text-sm font-medium">Obfuscation</p>
                  </div>
                  <div className="magnetic">
                    <Code2 className="w-8 h-8 text-primary mb-2 mx-auto animate-wave" />
                    <p className="text-sm font-medium">Lua(u)</p>
                  </div>
                </div>
              </div>

              {/* Minecraft Gaming Section */}
              <div className="gradient-card rounded-2xl p-8 mb-10 border border-accent/30 animate-slide-in-right">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gradient-secondary flex items-center">
                  <Gamepad2 className="w-6 h-6 mr-3 animate-bounce-subtle" />
                  Gaming Universe
                </h3>
                <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed mb-6">
                  When I'm not diving deep into code mysteries, you'll find me crafting digital worlds in Minecraft. 
                  Building, exploring, and creating — it's another form of vibe coding in a different dimension.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-4 magnetic hover-glow p-4 rounded-xl gradient-card border border-primary/20">
                    <User className="w-6 h-6 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Minecraft Username</p>
                      <p className="font-mono font-medium">beastkiller6946</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 magnetic hover-glow p-4 rounded-xl gradient-card border border-secondary/20">
                    <Hash className="w-6 h-6 text-secondary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Xbox Gamertag</p>
                      <p className="font-mono font-medium">beastkiller#6946</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to action with enhanced styling */}
              <div className="animate-slide-in-right">
                <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8">
                  That's the essence of my digital journey — but if you're curious about the magic I've crafted, 
                  <br className="hidden md:block" />
                  <span className="text-gradient-primary font-semibold">feel free to explore the realm below</span>
                  <Terminal className="inline-block w-5 h-5 ml-2 text-accent animate-glow-pulse" />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced decorative element */}
        <div 
          className={`transition-all duration-1200 delay-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-1 gradient-primary rounded-full glow-primary animate-shimmer"></div>
            <div className="w-4 h-4 gradient-primary rounded-full glow-primary animate-bounce-subtle"></div>
            <div className="w-16 h-1 gradient-primary rounded-full glow-primary animate-shimmer"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;