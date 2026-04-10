import { MapPin, School, ShoppingBag, Hospital } from 'lucide-react';

export default function Location() {
  const nearby = [
    { icon: <School className="w-4 h-4" />, name: 'International School', dist: '5 mins' },
    { icon: <ShoppingBag className="w-4 h-4" />, name: 'Vincom Center', dist: '8 mins' },
    { icon: <Hospital className="w-4 h-4" />, name: 'General Hospital', dist: '10 mins' },
    { icon: <MapPin className="w-4 h-4" />, name: 'West Lake', dist: '12 mins' },
  ];

  return (
    <section id="location" className="py-24 md:py-32 bg-luxury-gray px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-luxury-gold uppercase tracking-widest text-sm mb-4 block font-medium">
              The Neighborhood
            </span>
            <h2 className="text-4xl md:text-6xl text-luxury-charcoal mb-8 leading-tight">
              In the Heart of <br />
              <span className="italic">Hanoi</span>
            </h2>
            <p className="text-luxury-charcoal/70 text-lg mb-12 max-w-xl">
              Located in a prime area with easy access to the city's most 
              vibrant business and cultural hubs. Experience the best of 
              Hanoi right at your doorstep.
            </p>

            <div className="space-y-6">
              {nearby.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-sm shadow-sm border border-luxury-charcoal/5">
                  <div className="flex items-center gap-4">
                    <div className="text-luxury-gold">{item.icon}</div>
                    <span className="font-medium text-luxury-charcoal">{item.name}</span>
                  </div>
                  <span className="text-xs text-luxury-charcoal/40 uppercase tracking-widest">{item.dist}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="h-[500px] w-full rounded-sm overflow-hidden shadow-2xl border-8 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59587.94583115343!2d105.801944!3d21.028511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bdadccc29%3A0x861019699387490!2sHanoi%2C%20Vietnam!5e0!3m2!1sen!2s!4v1712670000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
