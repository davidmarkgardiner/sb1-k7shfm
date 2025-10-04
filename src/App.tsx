import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Cpu,
  Globe,
  PlayCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  UploadCloud,
  Users,
  Wand2,
} from 'lucide-react';

const navLinks = [
  { name: 'Product', href: '#product' },
  { name: 'Experiences', href: '#experiences' },
  { name: 'Digital Twin', href: '#digital-twin' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Contact', href: '#contact' },
];

const featureCards = [
  {
    icon: Sparkles,
    title: 'Immersive Presence',
    description:
      'Craft vivid virtual experiences that blend cinematic visuals with responsive storytelling cues.',
  },
  {
    icon: Users,
    title: 'Audience Intelligence',
    description:
      'Hyper-personal journeys adapt to every visitor with AI-driven insights and real-time analytics.',
  },
  {
    icon: Wand2,
    title: 'Interactive Layers',
    description:
      'Stack responsive overlays, gestures, and haptics-ready interactions without sacrificing performance.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Guardrails',
    description:
      'Privacy-first architecture, regional compliance, and encryption flows to keep every twin secure.',
  },
];

const experienceHighlights = [
  {
    title: 'Metahuman Launch Suites',
    description: 'Guided onboarding to spin up cinematic-quality avatars in minutes.',
  },
  {
    title: 'Spatial Commerce',
    description: 'Interactive pop-ups let visitors try, tweak, and buy inside your virtual venue.',
  },
  {
    title: 'Live Performance Sync',
    description: 'Real-time lip sync, gesture mirroring, and volumetric lighting automation.',
  },
];

const roadmap = [
  {
    quarter: 'Q4 2024',
    title: 'Creator Co-Pilot',
    description: 'AI-assisted staging, lighting presets, and automated storytelling arcs.',
  },
  {
    quarter: 'Q1 2025',
    title: 'Avatar Marketplace',
    description: 'Verified artist storefronts, royalty tooling, and collaboration hubs.',
  },
  {
    quarter: 'Q2 2025',
    title: 'Immersive Stream Kit',
    description: 'Spatial audio streaming, AR mirroring, and holographic stage support.',
  },
];

const integrations = [
  'Unity',
  'Unreal Engine',
  'Blender',
  'Ready Player Me',
  'Meta Quest',
  'Apple Vision',
];

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-50">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15)_0%,_rgba(15,23,42,0.9)_55%,_rgba(2,6,23,1)_100%)]" />
        <div className="absolute -left-40 top-1/4 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -right-20 top-1/3 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <div className="flex items-center gap-3">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-500 shadow-[0_20px_45px_rgba(14,165,233,0.35)]"
              >
                <Globe className="h-6 w-6" />
              </motion.span>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/70">Spectra Studio</p>
                <h1 className="text-xl font-semibold">Digital Twin Launchpad</h1>
              </div>
            </div>
            <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-slate-200 transition hover:text-cyan-300">
                  {link.name}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              className="group hidden items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-sm font-semibold tracking-wide text-cyan-200 transition hover:border-cyan-300/60 hover:bg-cyan-400/20 md:inline-flex"
            >
              Book a demo
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </div>
        </header>

        <main className="relative mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-16">
          <section id="product" className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200/90 backdrop-blur"
              >
                <BadgeCheck className="h-4 w-4 text-cyan-300" />
                Ready for next-gen storytelling
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="text-4xl font-semibold leading-tight text-white sm:text-5xl"
              >
                Launch vibrant avatars, immersive stages, and responsive worlds from a single creative hub.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-lg text-slate-300/90"
              >
                Spectra Studio is your command center for digital humans. Prototype characters, orchestrate narratives, and
                deploy to web, AR, and holographic venues with cinematic polish.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#digital-twin"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(14,165,233,0.3)] transition hover:scale-[1.02]"
                >
                  Upload your twin
                  <UploadCloud className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <button className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/25 hover:bg-white/10">
                  <PlayCircle className="h-5 w-5 text-cyan-300" />
                  Watch interactive demo
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.8 }}
                className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Integrations</p>
                <div className="grid grid-cols-2 gap-3 text-sm text-slate-200/80 sm:grid-cols-3">
                  {integrations.map((integration) => (
                    <div key={integration} className="rounded-2xl border border-white/10 bg-slate-900/60 px-3 py-2 text-center">
                      {integration}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.9 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-cyan-400/30 via-transparent to-indigo-500/20 blur-2xl" />
              <div className="relative h-full rounded-[32px] border border-white/10 bg-slate-900/60 p-6 shadow-[0_35px_80px_rgba(8,47,73,0.35)] backdrop-blur">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/80">Live Metrics</p>
                    <h3 className="mt-2 text-2xl font-semibold">Engagement Pulse</h3>
                  </div>
                  <Rocket className="h-6 w-6 text-cyan-400" />
                </div>
                <div className="mt-8 grid gap-6">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
                    <p className="text-sm text-slate-300/80">Active worlds</p>
                    <p className="mt-2 text-3xl font-semibold text-white">28</p>
                    <div className="mt-4 h-1 rounded-full bg-slate-800">
                      <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500" />
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
                    <p className="text-sm text-slate-300/80">Avg. session time</p>
                    <p className="mt-2 text-3xl font-semibold text-white">18m</p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-emerald-300/80">
                      <ArrowRight className="h-3 w-3" />
                      +26% growth week over week
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
                    <p className="text-sm text-slate-300/80">Audience sentiment</p>
                    <p className="mt-2 flex items-baseline gap-2 text-3xl font-semibold text-white">
                      9.4
                      <span className="text-sm font-medium text-cyan-300">/ 10</span>
                    </p>
                    <p className="mt-3 text-xs text-slate-400">Real-time feedback tracked across every interaction.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          <section id="experiences" className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Experiences</p>
              <h2 className="text-3xl font-semibold sm:text-4xl">Everything you need to keep audiences spellbound.</h2>
              <p className="max-w-3xl text-lg text-slate-300/90">
                Curate stages, configure ambient storytelling, and blend physical and virtual performances with
                state-of-the-art tooling.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featureCards.map(({ icon: Icon, title, description }) => (
                <motion.div
                  key={title}
                  whileHover={{ y: -6 }}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/40 to-indigo-500/50 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300/80">{description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="grid gap-10 rounded-[40px] border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-900/30 to-slate-900/70 p-10 backdrop-blur-2xl lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col gap-6">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Immersion Suite</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Design for imagination, deliver with precision.</h2>
              <p className="text-lg text-slate-300/85">
                We combine cinematic tools, real-time rendering, and AI-assisted production to help you build captivating
                digital twins.
              </p>
              <div className="grid gap-5">
                {experienceHighlights.map(({ title, description }) => (
                  <div key={title} className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-sm text-slate-300/80">{description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-5">
              <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-slate-950/50 p-6">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-cyan-300">
                  <Cpu className="h-4 w-4" />
                  Real-time pipelines
                </div>
                <p className="text-base text-slate-200/80">
                  Hook into your existing 3D toolchain and stream updates directly to your experience layers.
                </p>
              </div>
              <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-slate-950/50 p-6">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-cyan-300">
                  <ShieldCheck className="h-4 w-4" />
                  Compliance ready
                </div>
                <p className="text-base text-slate-200/80">
                  Built-in access control, audit trails, and spatial consent flows let you launch confidently at scale.
                </p>
              </div>
              <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-slate-950/50 p-6">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-cyan-300">
                  <Users className="h-4 w-4" />
                  Team orchestration
                </div>
                <p className="text-base text-slate-200/80">
                  Collaborate with directors, performers, and engineers in a shared timeline for every activation.
                </p>
              </div>
            </div>
          </section>

          <section id="digital-twin" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col gap-6">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Digital Twin Upload</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Drop in your avatar, we handle the spectacle.</h2>
              <p className="text-lg text-slate-300/90">
                Our pipeline optimizes your digital twin for lighting, motion capture, and audience-ready storytelling. When
                you’re ready, upload here and watch your character come alive across every channel.
              </p>
              <div className="grid gap-4 text-sm text-slate-300/80">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-cyan-300" />
                  Encrypted ingestion with regional storage controls
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-cyan-300" />
                  Automated retargeting for face, body, and props
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-cyan-300" />
                  Collaborative reviews with timestamped annotations
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-[40px] border border-cyan-400/40 bg-gradient-to-br from-cyan-500/10 via-slate-900/80 to-indigo-500/10 p-1"
            >
              <div className="h-full rounded-[36px] border border-white/5 bg-slate-950/80 p-8">
                <div className="flex flex-col items-center justify-center gap-6 rounded-[28px] border border-dashed border-cyan-400/50 bg-slate-950/60 p-10 text-center transition hover:border-cyan-300">
                  <UploadCloud className="h-12 w-12 text-cyan-300" />
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-white">Drag & drop your avatar files</p>
                    <p className="text-sm text-slate-300/80">Supports FBX, USDZ, GLB, and volumetric capture packages.</p>
                  </div>
                  <button className="rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(14,165,233,0.3)] transition hover:scale-[1.02]">
                    Browse files
                  </button>
                  <p className="text-xs text-slate-400">Coming soon: direct capture with Spectra Studio Live.</p>
                </div>
              </div>
            </motion.div>
          </section>

          <section id="roadmap" className="flex flex-col gap-8">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Roadmap</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Next chapters on the horizon.</h2>
              <p className="mt-3 max-w-2xl text-lg text-slate-300/90">
                Stay ahead with a forward-looking platform. Here’s what we’re building next to supercharge your digital
                twin experiences.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {roadmap.map(({ quarter, title, description }) => (
                <motion.div
                  key={title}
                  whileHover={{ y: -8 }}
                  className="rounded-3xl border border-white/10 bg-slate-950/60 p-6"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/80">{quarter}</p>
                  <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm text-slate-300/80">{description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="contact" className="flex flex-col gap-8 rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur">
            <div className="flex flex-col gap-4 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Collaborate</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Ready to craft your next digital moment?</h2>
              <p className="text-lg text-slate-300/85">
                Let’s architect bespoke experiences, from interactive launch events to persistent digital stages.
              </p>
            </div>
            <div className="mx-auto flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:hello@spectra.studio"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(14,165,233,0.3)] transition hover:scale-[1.03]"
              >
                Start a project
                <Rocket className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/25 hover:bg-white/10"
              >
                Explore capability deck
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 bg-slate-950/80 py-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Spectra Studio. Crafted for visionary storytellers.</p>
            <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-slate-500">
              <span>Terms</span>
              <span>Privacy</span>
              <span>Support</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
