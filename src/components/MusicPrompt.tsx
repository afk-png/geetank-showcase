import { useState, useRef } from 'react';
import { Music, Play, Volume2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface MusicPromptProps {
  isOpen: boolean;
  onClose: () => void;
  onMusicEnabled: (audioRef: HTMLAudioElement) => void;
}

const MusicPrompt = ({ isOpen, onClose, onMusicEnabled }: MusicPromptProps) => {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const { toast } = useToast();
  const audioRef = useRef<HTMLAudioElement>(null);

  const enableRankingMusic = () => {
    setAudioEnabled(true);
    
    // Create and setup audio element for embedded playback
    const audio = new Audio();
    // Note: Replace this with your actual audio file URL for production
    // For now, using a placeholder - you'll need to add your audio file to public folder
    audio.src = '/ranking-music.mp3'; // User will need to add this file
    audio.loop = true;
    audio.volume = 0.3;
    
    // Attempt to play
    audio.play().catch(() => {
      // Fallback: open YouTube if direct audio fails
      window.open('https://youtu.be/YJVmu6yttiw?si=bkuMoRi7MMe6CbpJ', '_blank');
    });
    
    onMusicEnabled(audio);
    
    toast({
      title: "Ranking music enabled!",
      description: "The vibe is now fully activated. Enjoy the experience!",
    });
    onClose();
  };

  const skipMusic = () => {
    toast({
      title: "No problem!",
      description: "You can still enjoy the full vibe coder experience.",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      
      {/* Modal */}
      <div className="relative gradient-card glow-elevated rounded-3xl p-8 max-w-md w-full border border-primary/30 animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-primary/20 rounded-full transition-smooth"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>

        <div className="text-center">
          <div className="mb-6">
            <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-glow-pulse">
              <Music className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-gradient-primary mb-2 animate-fade-in-up">
              Enhance Your Experience
            </h2>
            <p className="text-muted-foreground animate-fade-in-up">
              Would you like to enable ranking music to elevate the vibe coding experience?
            </p>
          </div>

          <div className="space-y-4">
            <Button
              onClick={enableRankingMusic}
              variant="gradient"
              className="w-full hover-glow animate-bounce-subtle"
            >
              <Volume2 className="w-4 h-4 mr-2 animate-pulse" />
              Yes, enable the vibes
            </Button>
            
            <Button
              onClick={skipMusic}
              variant="ghost"
              className="w-full"
            >
              Continue without music
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPrompt;