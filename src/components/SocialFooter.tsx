import { Github, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const SocialFooter = () => {
  const { toast } = useToast();

  const copyDiscordToClipboard = () => {
    navigator.clipboard.writeText('@topggalactic');
    toast({
      title: "Discord username copied!",
      description: "@topggalactic has been copied to your clipboard.",
    });
  };

  return (
    <footer className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="gradient-card glow-card rounded-full px-6 py-3 backdrop-blur-sm">
        <div className="flex items-center space-x-4">
          {/* GitHub Link */}
          <Button
            variant="ghost"
            size="sm"
            className="hover-glow p-3 rounded-full transition-smooth hover:bg-primary/20"
            asChild
          >
            <a
              href="https://github.com/afk-png"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
            >
              <Github className="w-6 h-6 text-primary" />
            </a>
          </Button>

          {/* Discord Button */}
          <Button
            variant="ghost"
            size="sm"
            className="hover-glow p-3 rounded-full transition-smooth hover:bg-secondary/20"
            onClick={copyDiscordToClipboard}
            aria-label="Copy Discord username"
          >
            <MessageCircle className="w-6 h-6 text-secondary" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default SocialFooter;