import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import SocialFooter from '@/components/SocialFooter';
import BackgroundEffects from '@/components/BackgroundEffects';
import MusicPrompt from '@/components/MusicPrompt';

const Index = () => {
  const [showMusicPrompt, setShowMusicPrompt] = useState(false);

  useEffect(() => {
    // Show music prompt after a short delay
    const timer = setTimeout(() => {
      setShowMusicPrompt(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background effects */}
      <BackgroundEffects />
      
      {/* Music prompt modal */}
      <MusicPrompt 
        isOpen={showMusicPrompt} 
        onClose={() => setShowMusicPrompt(false)} 
      />
      
      {/* Main content */}
      <main className="relative z-20">
        <Hero />
      </main>
      
      {/* Social footer */}
      <SocialFooter />
    </div>
  );
};

export default Index;
