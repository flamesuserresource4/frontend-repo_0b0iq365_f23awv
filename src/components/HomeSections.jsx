import Spline from '@splinetool/react-spline';
import { Rocket, FileText, Scissors, Send } from 'lucide-react';

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {eyebrow && (
        <div className="uppercase tracking-[0.2em] text-xs text-[#434545]/70 mb-3">{eyebrow}</div>
      )}
      <h2 className="text-3xl md:text-5xl font-semibold text-[#434545] leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-[#434545]/80 mt-4 leading-7">{subtitle}</p>
      )}
    </div>
  );
}

function Hero({ onNavigate }) {
  return (
    <section id="home" className="pt-24 md:pt-28 bg-white relative">
      <div className="relative h-[520px] md:h-[640px] overflow-hidden">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-white/40 pointer-events-none" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-4 md:px-6 w-full grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-sm">
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#434545] leading-[1.05]">
                PB Launch — Short-Form Content That Converts
              </h1>
              <p className="text-lg md:text-xl text-[#434545]/80 mt-6 leading-8">
                We turn your long-form ideas into high-performing short videos for social. Strategy,
                scripting, editing, and distribution — done for you.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <a
                  href="/step-2"
                  onClick={(e) => { e.preventDefault(); onNavigate('/step-2'); }}
                  className="rounded-[30px] shadow-md bg-[#CCFF00] text-[#434545] px-6 py-3 font-medium hover:brightness-95 transition"
                >
                  Book a Call
                </a>
                <a
                  href="#results"
                  className="rounded-[30px] shadow-sm px-6 py-3 font-medium border border-[#434545]/20 text-[#434545] hover:bg-white transition-colors"
                >
                  See Results
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6 opacity-80">
                <div className="text-sm text-[#434545]">Trusted by creators and brands</div>
                <div className="h-4 w-px bg-[#434545]/20" />
                <div className="flex gap-4 text-xs text-[#434545]/70">
                  <span>YT</span>
                  <span>IG</span>
                  <span>TT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Results() {
  return (
    <section id="results" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <SectionTitle
          eyebrow="Results"
          title="Before and After — Real Performance Gains"
          subtitle="Clean, comparable snapshots showing the lift in views, watch time, and conversions."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border border-[#434545]/10 p-0 rounded-lg shadow-sm bg-white">
              <div className="grid grid-cols-2">
                <div className="p-4 border-r border-[#434545]/10">
                  <div className="uppercase text-xs tracking-wider text-[#434545]/60 mb-2">Before</div>
                  <div className="aspect-square bg-[#F5F7F8] rounded-md" />
                </div>
                <div className="p-4">
                  <div className="uppercase text-xs tracking-wider text-[#434545]/60 mb-2">After</div>
                  <div className="aspect-square bg-[#E6FF66] rounded-md" />
                </div>
              </div>
              <div className="p-4 border-t border-[#434545]/10 text-sm text-[#434545]/80">
                “Short testimonial about growth and outcomes. Keep copy as on the original site.”
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { title: 'Strategy', desc: 'Positioning, content pillars, and formats calibrated to your goals.', Icon: Rocket },
    { title: 'Scripting', desc: 'Hooks, outlines, and punchy copy to retain attention.', Icon: FileText },
    { title: 'Editing', desc: 'Frame-perfect edits, captions, and brand-consistent assets.', Icon: Scissors },
    { title: 'Distribution', desc: 'Scheduling and optimization across short-form platforms.', Icon: Send }
  ];
  return (
    <section id="how" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <SectionTitle
          eyebrow="How It Works"
          title="A sharp, simple process"
          subtitle="Everything is designed to minimize your time while maximizing output."
        />
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {steps.map(({ title, desc, Icon }, idx) => (
            <div key={title} className="border border-[#434545]/10 p-6 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 text-[#434545]">
                <div className="text-4xl font-semibold">{String(idx + 1).padStart(2, '0')}</div>
                <Icon className="h-6 w-6" />
              </div>
              <div className="text-xl font-medium text-[#434545] mt-4">{title}</div>
              <p className="text-sm text-[#434545]/80 mt-2 leading-6">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing({ onNavigate }) {
  const plans = [
    {
      name: 'Starter',
      price: '$',
      features: ['4 videos / month', 'Basic editing', 'Platform-ready exports'],
      popular: false
    },
    {
      name: 'Growth',
      price: '$$',
      features: ['12 videos / month', 'Advanced editing + captions', 'Thumbnail & title ideation'],
      popular: true
    },
    {
      name: 'Scale',
      price: '$$$',
      features: ['30+ videos / month', 'Dedicated editor', 'Full content ops & distribution'],
      popular: false
    }
  ];
  return (
    <section id="packages" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <SectionTitle
          eyebrow="Packages"
          title="Simple plans built around outcomes"
          subtitle="Choose the level of output that matches your goals."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`p-6 rounded-lg shadow-sm bg-white border ${
                p.popular ? 'border-[#CCFF00]' : 'border-[#434545]/10'
              }`}
            >
              <div className="flex items-baseline justify-between">
                <div className="text-2xl font-semibold text-[#434545]">{p.name}</div>
                {p.popular && (
                  <span className="text-xs uppercase tracking-wider text-[#434545] bg-[#CCFF00] px-2 py-1 rounded-full border border-[#434545]/20">
                    Most Popular
                  </span>
                )}
              </div>
              <div className="text-4xl mt-4 text-[#434545]">{p.price}</div>
              <ul className="mt-6 space-y-2 text-sm text-[#434545]/80">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="h-1.5 w-6 bg-[#434545] inline-block mt-2" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href="/step-2"
                  onClick={(e) => { e.preventDefault(); onNavigate('/step-2'); }}
                  className="w-full inline-flex items-center justify-center rounded-[30px] shadow-md bg-[#CCFF00] text-[#434545] px-4 py-3 font-medium hover:brightness-95 transition"
                >
                  Book a Call
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ onNavigate }) {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-[#434545]/10">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <h3 className="text-3xl md:text-5xl font-semibold text-[#434545]">
          Ready to scale your short-form content?
        </h3>
        <p className="text-base md:text-lg text-[#434545]/80 mt-4">
          Results speak louder than promises. Join the brands already compounding reach.
        </p>
        <div className="mt-8">
          <a
            href="/step-2"
            onClick={(e) => { e.preventDefault(); onNavigate('/step-2'); }}
            className="rounded-[30px] shadow-md bg-[#CCFF00] text-[#434545] px-8 py-4 font-medium hover:brightness-95 transition"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
}

export default function HomeSections({ onNavigate }) {
  return (
    <main>
      <Hero onNavigate={onNavigate} />
      <Results />
      <HowItWorks />
      <Pricing onNavigate={onNavigate} />
      <FinalCTA onNavigate={onNavigate} />
    </main>
  );
}
