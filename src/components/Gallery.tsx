import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/src/lib/utils';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const images = imagesRef.current?.querySelectorAll('.gallery-item');
      if (images) {
        gsap.from(images, {
          scale: 0.8,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: imagesRef.current,
            start: 'top 80%',
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1600607687940-47a04b629571?auto=format&fit=crop&q=80&w=800',
      title: 'Exterior View',
      size: 'col-span-2 row-span-2',
    },
    {
      src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800',
      title: 'Living Room',
      size: 'col-span-1 row-span-1',
    },
    {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      title: 'Master Bedroom',
      size: 'col-span-1 row-span-1',
    },
    {
      src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800',
      title: 'Kitchen',
      size: 'col-span-1 row-span-2',
    },
    {
      src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=80&w=800',
      title: 'Infinity Pool',
      size: 'col-span-1 row-span-1',
    },
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-luxury-gray px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-luxury-gold uppercase tracking-widest text-sm mb-4 block font-medium">
            Visual Experience
          </span>
          <h2 className="text-4xl md:text-6xl text-luxury-charcoal leading-tight">
            The Art of <span className="italic">Living</span>
          </h2>
        </div>

        <div
          ref={imagesRef}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]"
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className={cn(
                'gallery-item relative overflow-hidden group rounded-sm cursor-pointer',
                img.size
              )}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-luxury-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-xl font-serif mb-2">{img.title}</h3>
                  <div className="w-8 h-[1px] bg-luxury-gold mx-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
