import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out',
        delay: 0.5,
      });

      gsap.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out',
        delay: 0.8,
      });

      gsap.from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out',
        delay: 1.1,
      });

      // Parallax effect
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background Image with Parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 scale-110"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-luxury-charcoal/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-charcoal/40 via-transparent to-luxury-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <span className="text-luxury-gold uppercase tracking-[0.3em] text-sm mb-6 block font-medium">
          Welcome to Hanoi Elite Residence
        </span>
        <h1
          ref={titleRef}
          className="text-5xl md:text-8xl text-white mb-8 leading-[1.1]"
        >
          Elevate Your Living <br />
          <span className="italic font-light">Experience</span>
        </h1>
        <p
          ref={subtitleRef}
          className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light tracking-wide"
        >
          Discover a new standard of luxury in the heart of Hanoi. 
          Where modern architecture meets timeless elegance.
        </p>
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="btn-premium-gold w-full sm:w-auto">
            Get Consultation
          </button>
          <button className="btn-premium-outline !text-white !border-white hover:!bg-white hover:!text-luxury-charcoal w-full sm:w-auto">
            View Gallery
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] vertical-text">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-luxury-gold to-transparent" />
      </div>
    </section>
  );
}
