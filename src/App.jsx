import React, { useState, useEffect } from 'react';

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setMobileOpen(false);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleJoin = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    setSubmitted(true);
    setEmail('');
  };

  const handleContact = (e) => {
    e.preventDefault();
    if (!name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message.trim()) {
      alert('Please complete all fields with a valid email.');
      return;
    }
    alert('Thanks! We\'ll get back to you shortly.');
    setName('');
    setEmail('');
    setMessage('');
  };

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const NavLink = ({ to, children }) => (
    <button onClick={() => scrollToId(to)} className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-white hover:underline underline-offset-4">
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 via-slate-900 to-slate-950 text-slate-100">
      {/* Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-emerald-950/50 bg-emerald-950/40 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-emerald-500 to-lime-400 grid place-content-center shadow-lg">
                <span className="text-slate-900 font-black">GG</span>
              </div>
              <div>
                <div className="text-white font-semibold leading-tight">Golden Gate Golf Club</div>
                <div className="text-xs text-emerald-200/80">San Francisco, California</div>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-1">
              <NavLink to="about">About</NavLink>
              <NavLink to="membership">Membership</NavLink>
              <NavLink to="gallery">Gallery</NavLink>
              <NavLink to="events">Events</NavLink>
              <NavLink to="contact">Contact</NavLink>
              <a href="#" onClick={(e)=>{e.preventDefault();scrollToId('join');}} className="ml-2 inline-flex items-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-950 shadow hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300">Book Tee Time</a>
            </nav>
            <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-white/10" onClick={() => setMobileOpen(v => !v)} aria-label="Toggle Menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10">
            <div className="px-4 py-3 flex flex-col gap-2">
              <NavLink to="about">About</NavLink>
              <NavLink to="membership">Membership</NavLink>
              <NavLink to="gallery">Gallery</NavLink>
              <NavLink to="events">Events</NavLink>
              <NavLink to="contact">Contact</NavLink>
              <button onClick={() => scrollToId('join')} className="mt-1 inline-flex items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-950 shadow hover:bg-emerald-400">Book Tee Time</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1473446645605-5f6a7d27bcd2?q=80&w=2000&auto=format&fit=crop"
            alt="Lush golf course at sunrise with fog"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/40 to-slate-950" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-36">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-200 ring-1 ring-inset ring-emerald-400/30 mb-5">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> Est. in the City by the Bay
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Championship golf, coastal air, and timeless camaraderie.
            </h1>
            <p className="mt-5 text-lg text-emerald-100/90">
              Nestled among cypress and coastal fog, Golden Gate Golf Club offers 18 pristine holes, warm hospitality, and a vibrant community in the heart of San Francisco.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button onClick={() => scrollToId('join')} className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-6 py-3 text-base font-semibold text-emerald-950 shadow-lg hover:bg-emerald-400">
                Join & Book Tee Time
              </button>
              <button onClick={() => scrollToId('about')} className="inline-flex items-center justify-center rounded-md bg-white/5 px-6 py-3 text-base font-semibold text-white ring-1 ring-inset ring-white/20 hover:bg-white/10">
                Learn More
              </button>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-emerald-100/80">
              <div><div className="text-2xl font-bold text-white">18</div><div>Distinctive Holes</div></div>
              <div><div className="text-2xl font-bold text-white">190+</div><div>Sunny Days / Yr</div></div>
              <div><div className="text-2xl font-bold text-white">4.7★</div><div>Member Rating</div></div>
              <div><div className="text-2xl font-bold text-white">1925</div><div>Historic Roots</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Links-style golf with San Francisco soul</h2>
            <p className="mt-4 text-slate-200/90">
              Our course winds through towering Monterey cypress and coastal dunes with strategic bunkering, fast greens, and sweeping views toward the Pacific. Designed for players of every level, the experience is equal parts challenge and delight.
            </p>
            <ul className="mt-6 space-y-3 text-slate-200/90">
              <li className="flex items-start gap-3"><Check /> Championship 18-hole course with multiple tees</li>
              <li className="flex items-start gap-3"><Check /> Full practice facility: range, short-game, and putting complex</li>
              <li className="flex items-start gap-3"><Check /> Clubhouse, locker rooms, pro shop, and bay-view grill</li>
              <li className="flex items-start gap-3"><Check /> PGA professional instruction and junior programs</li>
            </ul>
            <div className="mt-8 flex gap-3">
              <button onClick={() => scrollToId('membership')} className="rounded-md bg-emerald-500 px-5 py-3 font-semibold text-emerald-950 hover:bg-emerald-400">Explore Membership</button>
              <button onClick={() => scrollToId('gallery')} className="rounded-md bg-white/5 px-5 py-3 font-semibold text-white ring-1 ring-inset ring-white/20 hover:bg-white/10">View Gallery</button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-white/10 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1519683222263-1d06aeed3f14?q=80&w=1800&auto=format&fit=crop" alt="Golf green near coastline" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-6 hidden sm:block w-64 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-xl">
              <img src="https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=1200&auto=format&fit=crop" alt="Clubhouse deck with sunset" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section id="membership" className="py-20 sm:py-24 bg-gradient-to-b from-slate-950 to-slate-900/60 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Membership options</h2>
            <p className="mt-4 text-slate-200/90">Flexible plans for locals, weekend warriors, and families. All memberships include member tee sheets, GHIN handicap, exclusive events, and advance booking.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Tier name="Weekday" price="$149/mo" perks={["Mon–Fri access","7-day advance booking","Range privileges","Member events"]} />
            <Tier featured name="Full Access" price="$219/mo" perks={["7-day access","14-day advance booking","Unlimited range","Guest passes","Locker + Bag storage"]} />
            <Tier name="Family" price="$299/mo" perks={["2 adults + juniors","7-day access","Clinics & camps","Priority events"]} />
          </div>
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-sm text-slate-300/80">No initiation for a limited time. Month-to-month available. Senior and student rates upon request.</div>
            <button onClick={() => scrollToId('join')} className="inline-flex items-center rounded-md bg-emerald-500 px-6 py-3 text-sm font-semibold text-emerald-950 shadow hover:bg-emerald-400">Start Your Membership</button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Course gallery</h2>
              <p className="mt-3 text-slate-200/90">Morning fog, golden afternoons, and greens that roll true.</p>
            </div>
            <button onClick={() => scrollToId('contact')} className="hidden sm:inline-flex rounded-md bg-white/5 px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/20 hover:bg-white/10">Schedule a Tour</button>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              'https://images.unsplash.com/photo-1518600574309-92b49a5bb9cf?q=80&w=1400&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1468779036391-52341f60b55d?q=80&w=1400&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1495321315812-d5ad9b41f0a0?q=80&w=1400&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1506003094589-53954a5c0a1f?q=80&w=1400&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1400&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1448387473223-5c37445527e7?q=80&w=1400&auto=format&fit=crop',
            ].map((src, i) => (
              <div key={i} className={`overflow-hidden rounded-lg ring-1 ring-white/10 ${i===0? 'col-span-2 row-span-2 md:col-span-1 md:row-span-1':''}`}>
                <img src={src} alt="Golf course" className="h-48 md:h-56 w-full object-cover hover:scale-105 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-20 sm:py-24 bg-gradient-to-b from-slate-950 to-slate-900/60 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Leagues, clinics, and private events</h2>
            <p className="mt-4 text-slate-200/90">From twilight leagues to junior camps and corporate outings, our calendar is packed with opportunities to play, learn, and connect.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <EventCard title="Twilight League" desc="9 holes every Thursday with rotating formats and post-round socials." time="Thursdays • 5:00 PM" />
            <EventCard title="Short Game Clinic" desc="Sharpen wedges and putting with our PGA professionals." time="Saturdays • 10:00 AM" />
            <EventCard title="Corporate Outings" desc="Custom packages for teams: tee times, scoring, and catering." time="By Reservation" />
          </div>
        </div>
      </section>

      {/* Join / CTA */}
      <section id="join" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div className="bg-white/5 rounded-2xl p-6 sm:p-8 ring-1 ring-inset ring-white/10">
            <h3 className="text-2xl font-bold text-white">Start your membership</h3>
            <p className="mt-2 text-slate-200/90">Join today and secure your preferred tee times. We\'ll follow up within one business day.</p>
            {submitted ? (
              <div className="mt-6 rounded-lg bg-emerald-500/15 p-4 text-emerald-200 ring-1 ring-emerald-400/30">
                Thanks for your interest! Please check your inbox for next steps.
              </div>
            ) : (
              <form onSubmit={handleJoin} className="mt-6 grid gap-4">
                <div>
                  <label className="block text-sm mb-1">Full name</label>
                  <input value={name} onChange={(e)=>setName(e.target.value)} type="text" required className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Taylor Jenkins" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Membership Type</label>
                  <select className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400">
                    <option>Full Access</option>
                    <option>Weekday</option>
                    <option>Family</option>
                  </select>
                </div>
                <button type="submit" className="mt-2 inline-flex justify-center rounded-md bg-emerald-500 px-5 py-3 font-semibold text-emerald-950 hover:bg-emerald-400">Request Invite</button>
                <div className="text-xs text-slate-400">By submitting, you agree to receive communications from Golden Gate Golf Club. You can unsubscribe anytime.</div>
              </form>
            )}
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/10">
              <img src="https://images.unsplash.com/photo-1528712306091-ed0763094c98?q=80&w=1800&auto=format&fit=crop" alt="Golfer teeing off with city skyline glow" className="w-full h-64 object-cover" />
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <Stat label="Avg. Round Time" value="4h 10m" />
              <Stat label="Par / Rating" value="72 / 71.8" />
              <Stat label="Practice Stalls" value="36" />
            </div>
            <div className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
              <h4 className="font-semibold text-white">Member testimonial</h4>
              <p className="mt-2 text-slate-200/90">“Fast greens, friendly staff, and that classic SF fog rolling in on 16. It doesn\'t get better.”</p>
              <div className="mt-3 text-sm text-emerald-200">— Jordan M., Member since 2019</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 sm:py-24 bg-gradient-to-b from-slate-950 to-slate-900/60 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Visit us in San Francisco</h2>
            <p className="mt-3 text-slate-200/90">We\'re minutes from the Presidio and Golden Gate Park with ample on-site parking.</p>
            <div className="mt-6 grid gap-3 text-slate-200/90">
              <div className="flex items-start gap-3"><Pin /> 1700 Coastal Links Dr, San Francisco, CA 94129</div>
              <div className="flex items-start gap-3"><Phone /> (415) 555-0127</div>
              <div className="flex items-start gap-3"><Mail /> info@goldengategolf.club</div>
              <div className="flex items-start gap-3"><Clock /> Daily 6:00 AM – 8:30 PM</div>
            </div>
            <div className="mt-6 overflow-hidden rounded-xl ring-1 ring-white/10">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=Presidio%20of%20San%20Francisco&output=embed"
                className="w-full h-64"
                loading="lazy"
              />
            </div>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 sm:p-8 ring-1 ring-inset ring-white/10">
            <h3 className="text-2xl font-bold text-white">Contact us</h3>
            <p className="mt-2 text-slate-200/90">Have a question about tee times, lessons, or hosting an event? Send us a message.</p>
            <form onSubmit={handleContact} className="mt-6 grid gap-4">
              <div>
                <label className="block text-sm mb-1">Full name</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" required className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Alex Rivera" />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm mb-1">Message</label>
                <textarea value={message} onChange={(e)=>setMessage(e.target.value)} rows={4} required className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Tell us how we can help..." />
              </div>
              <button type="submit" className="inline-flex justify-center rounded-md bg-emerald-500 px-5 py-3 font-semibold text-emerald-950 hover:bg-emerald-400">Send Message</button>
              <div className="text-xs text-slate-400">Prefer phone? Call us at (415) 555-0127.</div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-emerald-500 to-lime-400 grid place-content-center shadow"><span className="text-slate-900 font-black text-sm">GG</span></div>
              <div>
                <div className="text-white font-semibold">Golden Gate Golf Club</div>
                <div className="text-xs text-emerald-200/80">Play the city\'s classic coastal track.</div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300/90">
              <a href="#about" onClick={(e)=>{e.preventDefault();scrollToId('about');}} className="hover:text-white">About</a>
              <a href="#membership" onClick={(e)=>{e.preventDefault();scrollToId('membership');}} className="hover:text-white">Membership</a>
              <a href="#gallery" onClick={(e)=>{e.preventDefault();scrollToId('gallery');}} className="hover:text-white">Gallery</a>
              <a href="#events" onClick={(e)=>{e.preventDefault();scrollToId('events');}} className="hover:text-white">Events</a>
              <a href="#contact" onClick={(e)=>{e.preventDefault();scrollToId('contact');}} className="hover:text-white">Contact</a>
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
            <div>© {new Date().getFullYear()} Golden Gate Golf Club. All rights reserved.</div>
            <div className="flex items-center gap-3">
              <a className="hover:text-slate-200" href="#">Privacy</a>
              <span aria-hidden>•</span>
              <a className="hover:text-slate-2 00" href="#">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Check() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-5 w-5 text-emerald-400 flex-none" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.07 7.142a1 1 0 0 1-1.434.012L3.29 9.23a1 1 0 1 1 1.42-1.406l3.06 3.093 6.363-6.43a1 1 0 0 1 1.57.804z" clipRule="evenodd"/></svg>
  );
}

function Pin() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-5 w-5 text-emerald-400 flex-none" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 2.25c-4.28 0-7.75 3.47-7.75 7.75 0 5.3 6.13 10.99 7.1 11.84a1 1 0 0 0 1.3 0c.97-.85 7.1-6.54 7.1-11.84 0-4.28-3.47-7.75-7.75-7.75Zm0 10.25a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" clipRule="evenodd"/></svg>
  );
}

function Phone() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-5 w-5 text-emerald-400 flex-none" viewBox="0 0 24 24" fill="currentColor"><path d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.09c.968 0 1.82.634 2.095 1.561l.86 2.933a2.25 2.25 0 0 1-.565 2.256l-1.02 1.02a12.06 12.06 0 0 0 5.09 5.09l1.02-1.02c.6-.6 1.5-.815 2.256-.565l2.933.86a2.25 2.25 0 0 1 1.561 2.095v2.09c0 1.243-1.007 2.25-2.25 2.25H17.25C9.17 22.5 1.5 14.83 1.5 6.75V6.75c0-.828.672-1.5 1.5-1.5Z"/></svg>
  );
}

function Mail() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-5 w-5 text-emerald-400 flex-none" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 6.75A2.25 2.25 0 0 1 3.75 4.5h16.5A2.25 2.25 0 0 1 22.5 6.75v10.5A2.25 2.25 0 0 1 20.25 19.5H3.75A2.25 2.25 0 0 1 1.5 17.25V6.75Z"/><path d="M3.75 6.75 12 12.75 20.25 6.75"/></svg>
  );
}

function Clock() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-5 w-5 text-emerald-400 flex-none" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 0 0 19.5 9.75 9.75 0 0 0 0-19.5Zm.75 5.25a.75.75 0 0 0-1.5 0V12c0 .199.079.389.22.53l3 3a.75.75 0 1 0 1.06-1.06L12.75 11.69V7.5Z" clipRule="evenodd"/></svg>
  );
}

function Tier({ name, price, perks, featured }) {
  return (
    <div className={`rounded-2xl p-6 ring-1 ring-inset ${featured ? 'bg-emerald-500/10 ring-emerald-400/30' : 'bg-white/5 ring-white/10'} flex flex-col`}>
      <div className="flex items-baseline justify-between">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <div className={`text-lg font-bold ${featured ? 'text-emerald-300' : 'text-white'}`}>{price}</div>
      </div>
      <ul className="mt-4 space-y-2 text-slate-200/90">
        {perks.map((p, i) => (
          <li key={i} className="flex items-start gap-2"><Check />{p}</li>
        ))}
      </ul>
      <button onClick={() => document.getElementById('join')?.scrollIntoView({behavior:'smooth'})} className={`mt-6 inline-flex justify-center rounded-md px-4 py-2 text-sm font-semibold ${featured ? 'bg-emerald-500 text-emerald-950 hover:bg-emerald-400' : 'bg-white/10 text-white ring-1 ring-inset ring-white/20 hover:bg-white/15'}`}>Choose {name}</button>
    </div>
  );
}

function EventCard({ title, desc, time }) {
  return (
    <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <span className="text-xs rounded-full bg-emerald-500/10 px-2 py-1 text-emerald-200 ring-1 ring-emerald-400/30">Open</span>
      </div>
      <p className="mt-2 text-slate-200/90">{desc}</p>
      <div className="mt-4 text-sm text-emerald-200">{time}</div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
      <div className="text-xs text-slate-300/80">{label}</div>
      <div className="mt-1 text-2xl font-bold text-white">{value}</div>
    </div>
  );
}
