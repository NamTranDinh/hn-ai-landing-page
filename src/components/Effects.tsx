import { useEffect, useState } from 'react';
import gsap from 'gsap';

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.to('.preloader', {
        yPercent: -100,
        duration: 1,
        ease: 'power4.inOut',
        onComplete: () => setIsLoading(false),
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="preloader fixed inset-0 z-[100] bg-luxury-charcoal flex flex-col items-center justify-center">
      <div className="relative mb-8">
        <div className="w-24 h-24 border border-luxury-gold/20 rounded-full animate-[spin_4s_linear_infinite]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-luxury-gold font-serif text-4xl font-bold">H</span>
        </div>
      </div>
      <div className="overflow-hidden">
        <span className="text-white uppercase tracking-[0.5em] text-xs font-light animate-pulse">
          Hanoi Elite Residence
        </span>
      </div>
    </div>
  );
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[60]">
      <div 
        className="h-full bg-luxury-gold transition-all duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
