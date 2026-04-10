import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Waves, Dumbbell, Home, ShieldCheck, Coffee, Car, Trees, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Amenities() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gridRef.current?.children;
      if (items) {
        gsap.from(items, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const amenities = [
    { icon: <Waves />, title: 'Infinity Pool', desc: 'Temperature-controlled rooftop pool with panoramic views.' },
    { icon: <Dumbbell />, title: 'Elite Gym', desc: 'State-of-the-art equipment and private training sessions.' },
    { icon: <Home />, title: 'Smart Home', desc: 'Voice-controlled lighting, climate, and security systems.' },
    { icon: <ShieldCheck />, title: '24/7 Security', desc: 'Advanced biometric access and round-the-clock surveillance.' },
    { icon: <Coffee />, title: 'Sky Lounge', desc: 'Exclusive resident lounge with premium coffee and bar service.' },
    { icon: <Car />, title: 'Valet Parking', desc: 'Automated parking system with 24/7 valet assistance.' },
    { icon: <Trees />, title: 'Zen Garden', desc: 'Landscaped rooftop gardens for peaceful relaxation.' },
    { icon: <Users />, title: 'Business Center', desc: 'Fully equipped meeting rooms and co-working spaces.' },
  ];

  return (
    <section id="amenities" className="py-24 md:py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-luxury-gold uppercase tracking-widest text-sm mb-4 block font-medium">
              World-Class Facilities
            </span>
            <h2 className="text-4xl md:text-6xl text-luxury-blue leading-tight">
              Designed for Your <br />
              <span className="italic">Ultimate Comfort</span>
            </h2>
          </div>
          <p className="text-luxury-blue/60 max-w-md text-sm leading-relaxed">
            Every amenity at Hanoi Elite Residence is designed to enhance your lifestyle, 
            providing a perfect balance of wellness, productivity, and relaxation.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {amenities.map((item, idx) => (
            <div key={idx} className="group">
              <div className="w-14 h-14 bg-luxury-blue/5 flex items-center justify-center text-luxury-blue mb-6 group-hover:bg-luxury-gold group-hover:text-white transition-all duration-500 rounded-sm">
                {item.icon}
              </div>
              <h3 className="text-xl mb-3 font-serif">{item.title}</h3>
              <p className="text-luxury-blue/50 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
