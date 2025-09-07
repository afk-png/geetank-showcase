import Hero from '@/components/Hero';
import SocialFooter from '@/components/SocialFooter';
import BackgroundEffects from '@/components/BackgroundEffects';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background effects */}
      <BackgroundEffects />
      
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
