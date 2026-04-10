import { useState, type FormEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 2000);
  };

  return (
    <section id="contact" className="relative">
      {/* CTA Banner */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury View"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-luxury-blue/70" />
        <div className="relative z-10 text-center px-6">
          <h2 className="text-4xl md:text-6xl text-white mb-8">
            Ready to <span className="italic">Elevate</span> Your Life?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 font-light tracking-wide">
            Schedule a private viewing or request a digital brochure today. 
            Our consultants are ready to assist you.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white py-24 px-6 -mt-20 relative z-20 max-w-4xl mx-auto shadow-2xl rounded-sm border border-luxury-blue/5">
        <div className="text-center mb-12">
          <h3 className="text-3xl text-luxury-blue mb-4">Get in Touch</h3>
          <p className="text-luxury-blue/50 text-sm">Fill out the form below and we'll get back to you within 24 hours.</p>
        </div>

        {formState === 'success' ? (
          <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
            <CheckCircle className="w-20 h-20 text-luxury-gold mb-6" />
            <h4 className="text-2xl text-luxury-blue mb-2">Thank You!</h4>
            <p className="text-luxury-blue/60">Your message has been received. Our team will contact you shortly.</p>
            <button 
              onClick={() => setFormState('idle')}
              className="mt-8 text-luxury-gold uppercase tracking-widest text-xs font-bold hover:text-luxury-blue transition-colors"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-luxury-blue/40">Full Name</label>
              <input
                required
                type="text"
                placeholder="John Doe"
                className="w-full px-0 py-3 border-b border-luxury-blue/10 focus:border-luxury-gold outline-none transition-colors bg-transparent text-luxury-blue"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-luxury-blue/40">Phone Number</label>
              <input
                required
                type="tel"
                placeholder="+84 123 456 789"
                className="w-full px-0 py-3 border-b border-luxury-blue/10 focus:border-luxury-gold outline-none transition-colors bg-transparent text-luxury-blue"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-luxury-blue/40">Email Address</label>
              <input
                required
                type="email"
                placeholder="john@example.com"
                className="w-full px-0 py-3 border-b border-luxury-blue/10 focus:border-luxury-gold outline-none transition-colors bg-transparent text-luxury-blue"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-luxury-blue/40">Message (Optional)</label>
              <textarea
                rows={4}
                placeholder="I'm interested in the 3-bedroom apartment..."
                className="w-full px-0 py-3 border-b border-luxury-blue/10 focus:border-luxury-gold outline-none transition-colors bg-transparent text-luxury-blue resize-none"
              ></textarea>
            </div>
            <div className="md:col-span-2 flex justify-center mt-8">
              <button
                disabled={formState === 'submitting'}
                className="btn-premium-gold w-full md:w-auto min-w-[200px] flex items-center justify-center gap-3"
              >
                {formState === 'submitting' ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Send Inquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
