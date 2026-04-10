import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Shield, Zap, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.from(cards, {
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const highlights = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Prime Location',
      desc: 'Nestled in the most prestigious district of Hanoi, with breathtaking city views.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Modern Design',
      desc: 'Architectural masterpiece blending contemporary aesthetics with functional luxury.',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Smart Living',
      desc: 'Fully integrated smart home systems for a seamless and secure lifestyle.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Premium Facilities',
      desc: 'World-class amenities including infinity pools, private gyms, and 24/7 concierge.',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <span className="text-luxury-gold uppercase tracking-widest text-sm mb-4 block font-medium">
              The Project
            </span>
            <h2 className="text-4xl md:text-6xl text-luxury-blue mb-8 leading-tight">
              A Legacy of <br />
              <span className="italic">Sophistication</span>
            </h2>
            <p className="text-luxury-blue/70 text-lg leading-relaxed mb-8 max-w-xl">
              Hanoi Elite Residence represents the pinnacle of urban living. 
              Every detail has been meticulously crafted to provide an 
              unparalleled residential experience for those who demand the very best.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-luxury-gold" />
              <span className="text-luxury-blue font-serif italic text-xl">
                Designed for the Elite
              </span>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm group">
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200"
              alt="Luxury Interior"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none" />
          </div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-10 bg-luxury-blue text-white rounded-sm hover:bg-luxury-gold transition-colors duration-500 group"
            >
              <div className="text-luxury-gold group-hover:text-white transition-colors duration-500 mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl mb-4">{item.title}</h3>
              <p className="text-white/60 group-hover:text-white/90 transition-colors duration-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
