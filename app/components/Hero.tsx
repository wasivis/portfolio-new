export default function Hero() {
  return (
    <section id="hero" className="pt-16 md:pt-24 flex flex-col items-start gap-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/30 bg-rose-500/10 text-lg font-medium text-rose-200">
        Hello, I&apos;m wasivis, a developer based in Buenos Aires.
      </div>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
        Turning complex ideas <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-amber-200 to-sky-300">
          into simple products.
        </span>
      </h1>
      <p className="max-w-md text-lg text-zinc-400 leading-relaxed">
        Full-stack developer focused on clean code and minimalist design.
      </p>
    </section>
  );
}