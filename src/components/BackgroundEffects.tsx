import { useEffect, useState } from 'react';

const BackgroundEffects = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 8,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 gradient-glow opacity-20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-1/2 right-20 w-64 h-64 gradient-glow opacity-15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-80 h-80 gradient-glow opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      
      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="floating-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
      
      {/* Rotating geometric shapes */}
      <div className="absolute top-1/4 left-1/3 w-32 h-32 border border-primary/20 rotate-45 animate-rotate-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border-2 border-secondary/20 rounded-full animate-pulse-ring"></div>
      
      {/* Shimmer lines */}
      <div className="absolute top-0 left-0 w-full h-px shimmer-bg"></div>
      <div className="absolute bottom-0 left-0 w-full h-px shimmer-bg" style={{ animationDelay: '1s' }}></div>
      <div className="absolute left-0 top-0 w-px h-full shimmer-bg" style={{ animationDelay: '2s' }}></div>
      <div className="absolute right-0 top-0 w-px h-full shimmer-bg" style={{ animationDelay: '3s' }}></div>
    </div>
  );
};

export default BackgroundEffects;