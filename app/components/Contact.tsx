export default function Contact() {
  return (
    <section id="contact" className="py-12 flex flex-col items-center text-center space-y-8">
      <div className="space-y-4">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-amber-200 to-sky-300">
          Let's work together.
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <a 
          href="mailto:ivanmontequin@gmail.com" 
          className="px-8 py-4 rounded-full bg-gradient-to-r from-rose-300 to-amber-200 text-zinc-950 font-semibold hover:from-rose-200 hover:to-amber-100 transition-colors"
        >
          Get in touch
        </a>
        <div className="flex items-center gap-4 px-8 py-4 rounded-full border border-sky-500/30 bg-sky-500/10">
          <a href="https://github.com/wasivis" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-sky-200 transition-colors">GitHub</a>
          <span className="w-px h-4 bg-zinc-800" />
          <a href="https://www.linkedin.com/in/ivanmontequin" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-sky-200 transition-colors">LinkedIn</a>
          <span className="w-px h-4 bg-zinc-800" />
          <a href="https://twitter.com/wasivis" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-sky-200 transition-colors">X / Twitter</a>
        </div>
      </div>

      <p className="pt-12 text-xs text-zinc-600 uppercase tracking-[0.2em]">
        © {new Date().getFullYear()} — Made with ❤️ by wasivis
      </p>
    </section>
  );
}