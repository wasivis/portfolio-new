export default function Contact() {
  return (
    <section id="contact" className="flex flex-col items-center space-y-8 py-12 text-center">
      <div className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-300/80">Let&apos;s build something meaningful</p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-amber-200 to-sky-300">
          Need a product partner?
        </h2>
      </div>

      <p className="max-w-2xl text-zinc-400">
        I&apos;m available for freelance work, product builds, and collaborations where thoughtful UX and strong engineering matter.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <a
          href="mailto:ivanmontequin@gmail.com"
          className="rounded-full bg-gradient-to-r from-rose-300 to-amber-200 px-8 py-4 font-semibold text-zinc-950 transition-colors hover:from-rose-200 hover:to-amber-100"
        >
          Start a project
        </a>

        <div className="flex items-center gap-4 rounded-full border border-sky-500/30 bg-sky-500/10 px-6 py-4">
          <a href="https://github.com/wasivis" target="_blank" rel="noreferrer" className="text-zinc-300 transition-colors hover:text-sky-200">GitHub</a>
          <span className="h-4 w-px bg-zinc-800" />
          <a href="https://www.linkedin.com/in/ivanmontequin" target="_blank" rel="noreferrer" className="text-zinc-300 transition-colors hover:text-sky-200">LinkedIn</a>
          <span className="h-4 w-px bg-zinc-800" />
          <a href="https://twitter.com/wasivis" target="_blank" rel="noreferrer" className="text-zinc-300 transition-colors hover:text-sky-200">X / Twitter</a>
        </div>
      </div>

      <p className="pt-12 text-xs uppercase tracking-[0.2em] text-zinc-600">
        © {new Date().getFullYear()} — Made with ❤️ by wasivis
      </p>
    </section>
  );
}