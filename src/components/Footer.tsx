import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-luxury-blue text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-luxury-gold flex items-center justify-center rounded-sm">
                <span className="text-white font-serif font-bold text-xl">H</span>
              </div>
              <span className="font-serif text-xl tracking-widest uppercase">
                Hanoi Elite
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Redefining luxury living in the heart of Vietnam's capital. 
              A project by Elite Development Group.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-luxury-gold hover:border-luxury-gold transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-luxury-gold uppercase tracking-widest text-xs font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Project', 'Amenities', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().split(' ')[0]}`} className="text-white/60 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-luxury-gold uppercase tracking-widest text-xs font-bold mb-8">Contact Info</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>123 Elite Street, Ba Dinh District, Hanoi, Vietnam</li>
              <li>+84 123 456 789</li>
              <li>info@hanoielite.com</li>
              <li>Mon - Sun: 9:00 AM - 8:00 PM</li>
            </ul>
          </div>

          <div>
            <h4 className="text-luxury-gold uppercase tracking-widest text-xs font-bold mb-8">Newsletter</h4>
            <p className="text-white/40 text-sm mb-6">Subscribe to receive the latest updates and exclusive offers.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-white/5 border border-white/10 rounded-sm py-3 px-4 text-sm outline-none focus:border-luxury-gold transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-luxury-gold hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-white/20">
          <p>© 2026 Hanoi Elite Residence. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
