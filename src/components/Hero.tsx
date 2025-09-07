import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <div 
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-inter mb-6">
            <span className="block mb-2">Hello everyone,</span>
            <span className="text-gradient-primary">I'm Geetank</span>
          </h1>
        </div>

        {/* Subheadline */}
        <div 
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-12 font-light">
            You may not know me, but I'm a{' '}
            <span className="text-accent font-medium">vibe coder</span>.
          </p>
        </div>

        {/* Body Text */}
        <div 
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="gradient-card glow-card rounded-2xl p-8 sm:p-10 lg:p-12 max-w-3xl mx-auto mb-8">
            <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed mb-6">
              I don't code traditionally, but with vibe coding I can achieve many things, such as:
            </p>
            
            <ul className="text-left text-lg sm:text-xl space-y-3 mb-6 max-w-lg mx-auto">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-4 glow-primary"></span>
                Creating websites
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-secondary rounded-full mr-4 animate-glow-pulse"></span>
                Building Lua(u) obfuscators
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-4 glow-primary"></span>
                Writing scripts and much more
              </li>
            </ul>

            <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed mb-6">
              I am deeply interested in <span className="text-primary font-medium">deobfuscation</span>, 
              <span className="text-secondary font-medium"> UFC</span>, 
              <span className="text-accent font-medium"> obfuscation</span>, and 
              <span className="text-primary font-medium"> Lua(u)</span>.
            </p>

            <p className="text-lg sm:text-xl text-muted-foreground">
              That's pretty much it — but if you'd like to check out my projects, feel free to explore below.
            </p>
          </div>
        </div>

        {/* Decorative Element */}
        <div 
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full glow-primary"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;