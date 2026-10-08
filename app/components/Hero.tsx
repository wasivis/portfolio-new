export default function Hero() {
  return (
    <section id="hero" className="pt-16 md:pt-24 flex flex-col items-start gap-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/30 bg-rose-500/10 text-base font-medium text-rose-200">
        Available for product work and freelance projects.
      </div>

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
        I build polished digital products <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-amber-200 to-sky-300">
          that feel premium and work reliably.
        </span>
      </h1>

      <p className="max-w-xl text-lg text-zinc-400 leading-relaxed">
        Full-stack developer helping founders and teams turn ideas into fast, clean, and scalable web experiences.
      </p>

      <div className="flex flex-wrap gap-3 pt-2">
        <a
          href="#projects"
          className="rounded-full bg-gradient-to-r from-rose-300 to-amber-200 px-5 py-3 text-sm font-semibold text-zinc-950 transition-transform hover:scale-[1.02]"
        >
          View projects
        </a>
        <a
          href="#contact"
          className="rounded-full border border-sky-500/30 bg-sky-500/10 px-5 py-3 text-sm font-medium text-sky-200 transition-colors hover:border-sky-400/50 hover:text-sky-100"
        >
          Let&apos;s talk
        </a>
      </div>
    </section>
  );
}