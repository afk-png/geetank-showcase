import Hero from '@/components/Hero';
import SocialFooter from '@/components/SocialFooter';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 gradient-glow opacity-10 pointer-events-none"></div>
      <div className="absolute top-20 right-20 w-64 h-64 gradient-glow opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 gradient-glow opacity-5 rounded-full blur-3xl"></div>
      
      {/* Main content */}
      <main className="relative z-10">
        <Hero />
      </main>
      
      {/* Social footer */}
      <SocialFooter />
    </div>
  );
};

export default Index;
