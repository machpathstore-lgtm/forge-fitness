"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  Dumbbell,
  Flame,
  Menu,
  X,
  MoveUpRight,
  Zap,
} from "lucide-react";

const programs = [
  {
    number: "01",
    title: "Strength",
    image: "/images/strength-training.jpg",
    description: "Build power, master the fundamentals, and get stronger with every session.",
    icon: Dumbbell,
  },
  {
    number: "02",
    title: "Conditioning",
    image: "/images/gym-workout.jpg",
    description: "Push your limits with high-energy sessions designed to build real endurance.",
    icon: Flame,
  },
  {
    number: "03",
    title: "Performance",
    image: "/images/fitness-training.jpg",
    description: "Move better, train smarter, and develop the athletic edge you need.",
    icon: Zap,
  },
];

const plans = [
  {
    name: "Essential",
    price: "29",
    description: "Your foundation starts here.",
    features: ["Gym floor access", "Locker facilities", "Personal training assessment"],
  },
  {
    name: "Unlimited",
    price: "49",
    description: "For those who want more.",
    features: ["Everything in Essential", "All group classes", "Recovery area access", "Monthly progress review"],
    featured: true,
  },
  {
    name: "Elite",
    price: "79",
    description: "Training with a personal edge.",
    features: ["Everything in Unlimited", "Two PT sessions monthly", "Priority class booking"],
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  return (
    <main className="min-h-screen overflow-hidden bg-[#09080D] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#09080D]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-pink-500">
              <Dumbbell size={21} strokeWidth={2.5} />
            </span>
            <span className="text-lg font-black uppercase tracking-tight">
              FORGE<span className="text-fuchsia-400">.</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/65 md:flex">
            <a className="transition hover:text-white" href="#programs">Programs</a>
            <a className="transition hover:text-white" href="#about">Our approach</a>
            <a className="transition hover:text-white" href="#membership">Membership</a>
          </nav>

          <a
            href="#membership"
            className="hidden items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-fuchsia-200 sm:inline-flex"
          >
            Join the movement <ArrowRight size={16} />
          </a>
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg border border-white/10 p-2 transition hover:border-fuchsia-400/40 md:hidden"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <motion.div
          initial={false}
          animate={mobileMenuOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
          className={`overflow-hidden border-t border-white/10 bg-[#09080D]/95 md:hidden ${mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
          aria-hidden={!mobileMenuOpen}
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
            <a onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm text-white/75 transition hover:bg-white/5 hover:text-white" href="#programs">Programs</a>
            <a onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm text-white/75 transition hover:bg-white/5 hover:text-white" href="#about">Our approach</a>
            <a onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm text-white/75 transition hover:bg-white/5 hover:text-white" href="#membership">Membership</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#membership" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-3 text-sm font-bold text-white">Join the movement <ArrowRight size={16} /></a>
          </nav>
        </motion.div>
      </header>

      <section id="home" className="relative flex min-h-[760px] items-center overflow-hidden pt-28 sm:min-h-[850px]">
        <div className="absolute -left-40 top-20 h-[440px] w-[440px] rounded-full bg-violet-700/20 blur-[130px]" />
        <div className="absolute -right-20 top-32 h-[480px] w-[480px] rounded-full bg-fuchsia-600/15 blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_.9fr]">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-200">
              <span className="h-2 w-2 rounded-full bg-fuchsia-400" />
              Your work starts here
            </div>

            <h1 className="max-w-3xl text-6xl font-black uppercase leading-[0.92] tracking-[-0.06em] sm:text-7xl lg:text-[94px]">
              Built by
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-300 bg-clip-text text-transparent">
                discipline.
              </span>
              <br />
              Defined by
              <br />
              <span className="text-white/90">you.</span>
            </h1>

            <p className="mt-8 max-w-lg text-base leading-7 text-white/55 sm:text-lg">
              A stronger version of you doesnâ€™t happen by accident. Show up,
              put in the work, and discover what youâ€™re capable of.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#membership" className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-7 py-4 text-sm font-bold shadow-lg shadow-fuchsia-900/20 transition hover:-translate-y-1 hover:shadow-fuchsia-500/20">
                Start training <ArrowRight size={17} className="transition group-hover:translate-x-1" />
              </a>
              <a href="#programs" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white/75 transition hover:border-white/40 hover:text-white">
                Explore programs
              </a>
            </div>

            <div className="mt-14 flex flex-wrap gap-x-9 gap-y-5 border-t border-white/10 pt-7">
              <div><p className="text-2xl font-black">01<span className="text-fuchsia-400">.</span></p><p className="mt-1 text-xs text-white/45">Show up</p></div>
              <div><p className="text-2xl font-black">02<span className="text-fuchsia-400">.</span></p><p className="mt-1 text-xs text-white/45">Put in the work</p></div>
              <div><p className="text-2xl font-black">03<span className="text-fuchsia-400">.</span></p><p className="mt-1 text-xs text-white/45">Own your progress</p></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[480px]"
          >
            <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-[#24202F] via-[#15121D] to-[#0D0B12] p-6 sm:p-8">
              <div className="absolute -right-16 -top-12 h-64 w-64 rounded-full border border-fuchsia-400/15" />
              <div className="absolute -right-4 top-0 h-48 w-48 rounded-full border border-violet-400/15" />

              <div className="relative flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">Training mindset</span>
                <MoveUpRight className="text-fuchsia-300" />
              </div>

              <div className="relative flex h-[320px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 sm:h-[390px]">
                <img
                  src="/images/gym-hero.jpg"
                  alt="Modern gym equipped for strength training"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09080D] via-[#09080D]/35 to-violet-950/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-violet-950/30 via-transparent to-fuchsia-950/25" />
                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/35 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/85 backdrop-blur-md">
                  Train with purpose
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                  <div className="max-w-[220px]">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-300">The Forge standard</p>
                    <p className="mt-2 text-2xl font-black uppercase leading-tight sm:text-3xl">Stronger starts here.</p>
                  </div>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                    <ArrowDownRight size={21} />
                  </div>
                </div>
                <div className="absolute bottom-5 left-0 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 opacity-0 backdrop-blur-xl">
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Mindset</p>
                  <p className="mt-1 text-sm font-bold">Progress over perfection.</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between border-t border-white/10 pt-5">
                <div><p className="text-sm font-bold">FORGE TRAINING CLUB</p><p className="mt-1 text-xs text-white/40">Every rep has a purpose.</p></div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500"><ArrowDownRight size={21} /></div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-3 rounded-2xl border border-white/10 bg-[#17121E] px-5 py-4 shadow-2xl sm:-right-8">
              <p className="text-xs text-white/45">The only competition</p>
              <p className="mt-1 font-bold">Is who you were yesterday.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="programs" className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-300">Find your focus</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">Train with intent.</h2>
            </div>
            <p className="max-w-md leading-7 text-white/50">Different goals. Different paths. One commitment to becoming stronger than you were yesterday.</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.article key={program.number} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }} whileHover={{ y: -8, scale: 1.015 }} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition hover:border-fuchsia-400/30 sm:p-9">
                  <div className="-mx-7 -mt-7 mb-7 h-48 overflow-hidden sm:-mx-9 sm:-mt-9 sm:mb-9">
                    <img
                      src={program.image}
                      alt={`${program.title} training`}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-white/30">{program.number} / PROGRAM</span>
                  <div className="mt-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-fuchsia-400/20 bg-fuchsia-400/[0.07] text-fuchsia-300 transition group-hover:bg-fuchsia-400/15">
                    <Icon size={25} />
                  </div>
                  <h3 className="mt-7 text-2xl font-bold">{program.title}</h3>
                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-white/50">{program.description}</p>
                  <a href="#membership" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-300">Explore training <ArrowRight size={16} /></a>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden border-y border-white/[0.07] bg-[#100D16] px-5 py-24 sm:px-8 lg:py-32">
        <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-violet-700/15 blur-[120px]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-300">The Forge mindset</p>
            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-6xl">No shortcuts.<br /><span className="text-white/40">Just progress.</span></h2>
            <p className="mt-6 max-w-xl leading-7 text-white/55">Real progress comes from consistency, effort, and a plan you can stick to. Build habits that last, celebrate the small wins, and keep moving forward.</p>
            <a href="#membership" className="mt-8 inline-flex items-center gap-2 font-semibold text-white transition hover:text-fuchsia-300">Find your membership <ArrowRight size={17} /></a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-fuchsia-400/30 hover:bg-white/[0.04] sm:p-8">
              <Dumbbell className="text-fuchsia-300" size={27} />
              <h3 className="mt-6 text-xl font-bold">Purposeful training</h3>
              <p className="mt-3 text-sm leading-6 text-white/45">Every session has a reason. Every rep moves you forward.</p>
            </div>
            <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/15 to-fuchsia-500/[0.04] p-6 sm:p-8">
              <Flame className="text-pink-300" size={27} />
              <h3 className="mt-6 text-xl font-bold">Earn your edge</h3>
              <p className="mt-3 text-sm leading-6 text-white/45">Challenge yourself while building strength at your own pace.</p>
            </div>
            <div className="col-span-2 flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
              <div><p className="text-xs uppercase tracking-widest text-white/40">Your next chapter</p><p className="mt-2 text-xl font-bold sm:text-2xl">Starts with one decision.</p></div>
              <a href="#membership" aria-label="View memberships" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-black transition hover:bg-fuchsia-200"><ArrowRight size={20} /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="membership" className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-300">Choose your commitment</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">Your goals. Your plan.</h2>
            <p className="mt-5 leading-7 text-white/50">Pick a starting point that fits your ambitions. You can adjust your plan as you grow.</p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article key={plan.name} className={`relative rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 sm:p-9 ${plan.featured ? "border-fuchsia-400/50 bg-gradient-to-b from-fuchsia-500/10 to-violet-500/[0.04] shadow-xl shadow-fuchsia-950/20" : "border-white/10 bg-white/[0.02]"}`}>
                {plan.featured && <span className="absolute right-6 top-6 rounded-full bg-fuchsia-400 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-black">Popular</span>}
                <p className="text-sm font-bold text-white/70">{plan.name}</p>
                <p className="mt-5 text-sm text-white/45">{plan.description}</p>
                <div className="mt-7 flex items-end gap-2"><span className="text-5xl font-black">$ {plan.price}</span><span className="mb-1 text-sm text-white/40">/ month</span></div>
                <div className="my-8 h-px bg-white/10" />
                <ul className="space-y-4">
                  {plan.features.map((feature) => <li key={feature} className="flex gap-3 text-sm text-white/65"><Check size={17} className="shrink-0 text-fuchsia-300" />{feature}</li>)}
                </ul>
                <button type="button" onClick={() => { setSelectedPlan(plan.name); setEnquirySubmitted(false); document.getElementById("demo-enquiry")?.scrollIntoView({ behavior: "smooth", block: "center" }); }} className={`mt-9 flex w-full items-center justify-center gap-2 rounded-full px-5 py-4 text-sm font-bold transition hover:-translate-y-0.5 ${plan.featured ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:shadow-lg hover:shadow-fuchsia-900/30" : "border border-white/15 hover:border-white/40"}`}>
                  Enquire about this plan <ArrowRight size={16} />
                </button>
              </article>
            ))}
          </div>
          {selectedPlan && (
            <section id="demo-enquiry" className="mx-auto mt-12 max-w-2xl rounded-3xl border border-fuchsia-400/20 bg-white/[0.03] p-6 sm:p-9">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-300">Demo enquiry</p>
                  <h3 className="mt-3 text-2xl font-bold">Let’s talk training.</h3>
                  <p className="mt-2 text-sm leading-6 text-white/50">Selected plan: <span className="font-semibold text-white">{selectedPlan}</span></p>
                </div>
                <button type="button" onClick={() => { setSelectedPlan(""); setEnquirySubmitted(false); }} aria-label="Close enquiry form" className="rounded-lg border border-white/10 px-3 py-2 text-sm text-white/70 hover:bg-white/5">Close</button>
              </div>

              {enquirySubmitted ? (
                <div role="status" className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.07] p-5">
                  <h4 className="font-bold text-emerald-200">Demo submission complete</h4>
                  <p className="mt-2 text-sm leading-6 text-white/65">Thanks for trying the Forge Fitness demo. No information was sent or saved.</p>
                  <button type="button" onClick={() => { setSelectedPlan(""); setEnquirySubmitted(false); }} className="mt-4 text-sm font-semibold text-fuchsia-300 hover:text-white">Close form</button>
                </div>
              ) : (
                <form className="mt-6 space-y-4" onSubmit={(event) => { event.preventDefault(); setEnquirySubmitted(true); }}>
                  <div>
                    <label htmlFor="demo-name" className="mb-2 block text-sm text-white/70">Name</label>
                    <input id="demo-name" name="name" required maxLength={80} autoComplete="off" className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-fuchsia-400/50" placeholder="Enter a demo name" />
                  </div>
                  <div>
                    <label htmlFor="demo-contact" className="mb-2 block text-sm text-white/70">Contact detail (demo only)</label>
                    <input id="demo-contact" name="contact" required maxLength={120} autoComplete="off" className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-fuchsia-400/50" placeholder="Example: demo@example.com" />
                  </div>
                  <div>
                    <label htmlFor="demo-goal" className="mb-2 block text-sm text-white/70">What is your main fitness goal?</label>
                    <textarea id="demo-goal" name="goal" rows={3} maxLength={500} className="w-full resize-y rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-fuchsia-400/50" placeholder="Optional demo message" />
                  </div>
                  <p className="text-xs leading-5 text-amber-200/80">Portfolio demo only. Please do not enter real personal information. This form does not send or store submissions.</p>
                  <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-4 text-sm font-bold text-white transition hover:opacity-90">Submit demo enquiry <ArrowRight size={16} /></button>
                </form>
              )}
            </section>
          )}
          <p className="mt-7 text-center text-xs text-white/30">Concept pricing for portfolio demonstration only. Final rates and availability would be confirmed by the business.</p>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-violet-700/30 via-[#211329] to-fuchsia-700/20 px-7 py-16 text-center sm:px-12 sm:py-20">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-violet-400/20 blur-[100px]" />
          <div className="absolute -bottom-24 -right-12 h-64 w-64 rounded-full bg-fuchsia-400/20 blur-[100px]" />
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-200">The next rep is yours</p>
            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">Stop waiting for the right moment.</h2>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-white/60">Make the decision. Commit to the process. Start building something stronger.</p>
            <a href="#membership" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition hover:bg-fuchsia-100">Find your plan <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.08] px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-pink-500"><Dumbbell size={18} /></span>
            <span className="font-black uppercase tracking-tight">FORGE<span className="text-fuchsia-400">.</span></span>
          </a>
          <p className="text-xs text-white/35">A fitness website concept by MaintainCraft Studio.</p>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center gap-2 text-sm text-white/50 transition hover:text-fuchsia-300"></a>
        </div>
      </footer>
    </main>
  );
}







