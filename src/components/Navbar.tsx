import { useState, useEffect } from 'react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 md:px-12 md:py-6 flex items-center justify-between',
        isScrolled ? 'bg-luxury-blue shadow-xl py-3 md:py-4' : 'bg-transparent'
      )}
    >
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-luxury-gold flex items-center justify-center rounded-sm">
          <span className="text-white font-serif font-bold text-xl">H</span>
        </div>
        <span className={cn(
          "font-serif text-xl tracking-widest uppercase hidden sm:block",
          isScrolled ? "text-white" : "text-white"
        )}>
          Hanoi Elite
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-white/80 hover:text-luxury-gold text-xs uppercase tracking-widest transition-colors font-medium"
          >
            {link.name}
          </a>
        ))}
      </div>

      <button className="btn-premium-gold scale-90 md:scale-100">
        Book Now
      </button>
    </nav>
  );
}
