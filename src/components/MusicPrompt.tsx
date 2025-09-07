import { useState } from 'react';
import { Music, Play, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface MusicPromptProps {
  isOpen: boolean;
  onClose: () => void;
}

const MusicPrompt = ({ isOpen, onClose }: MusicPromptProps) => {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const { toast } = useToast();

  const enableRankingMusic = () => {
    setAudioEnabled(true);
    // Open YouTube link in new tab
    window.open('https://youtu.be/YJVmu6yttiw?si=bkuMoRi7MMe6CbpJ', '_blank');
    toast({
      title: "Ranking music enabled!",
      description: "The vibe is now activated. Enjoy the experience!",
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
            <h2 className="text-2xl font-bold text-gradient-primary mb-2">
              Enhance Your Experience
            </h2>
            <p className="text-muted-foreground">
              Would you like to enable ranking music to elevate the vibe?
            </p>
          </div>

          <div className="space-y-4">
            <Button
              onClick={enableRankingMusic}
              variant="gradient"
              className="w-full"
            >
              <Play className="w-4 h-4 mr-2" />
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