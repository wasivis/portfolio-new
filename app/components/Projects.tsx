const PROJECT_DATA = [
  {
    title: "Gamescout AI",
    desc: "AI-powered game discovery platform for players who want better recommendations without endless browsing.",
    impact: "Built a cleaner discovery flow around discovery, filtering, and personalization.",
    stack: ["Next.js", "TypeScript", "AI"],
    link: "https://gamescout-ai.vercel.app/",
    github: "https://github.com/wasivis/gamescout-ai",
  },
  {
    title: "WasiLinks",
    desc: "Minimal link-in-bio experience designed for creators and personal brands.",
    impact: "Focused on clarity, speed, and a premium single-page presentation.",
    stack: ["React", "Next.js", "UI"],
    link: "https://wasilinks.vercel.app/",
    github: "https://github.com/wasivis/wasilinks",
  },
  {
    title: "DrinkMe",
    desc: "Video shrinking app built to reduce file size without sacrificing too much quality.",
    impact: "Focused on a simple, fast workflow for compressing videos into lighter files for easier sharing.",
    stack: ["Product Design", "UX", "App"],
    link: "https://github.com/wasivis/DrinkMe/releases/tag/v1.0.1",
    github: "https://github.com/wasivis/DrinkMe",
  },
  {
    title: "Job Application Tracker",
    desc: "Career workflow app for organizing applications, follow-ups, and interview progress.",
    impact: "Designed around operational clarity to make job searching less chaotic and more structured.",
    stack: ["Next.js", "Postgres", "Productivity"],
    link: "https://job-tracker-ebon-three.vercel.app/",
    github: "https://github.com/wasivis/job-tracker",
  },
  {
    title: "SaveSlot",
    desc: "Game backlog and review platform for players tracking what they want to play next.",
    impact: "Blended catalog browsing with personal tracking to create a more intentional gaming routine.",
    stack: ["Full-stack", "Database", "UX"],
    link: "https://save-slot.vercel.app/",
    github: "https://github.com/wasivis/gamelog",
  },
  {
    title: "TechGrill",
    desc: "AI-powered technical interview dojo for practicing problem-solving and communication.",
    impact: "Turned interview prep into an interactive, structured learning experience.",
    stack: ["AI", "Next.js", "Learning"],
    link: "https://techgrill.vercel.app/",
    github: "https://github.com/wasivis/techgrill",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="space-y-12">
      <div className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-rose-300/80">Selected work</p>
        <h2 className="text-3xl font-semibold">Products, experiments, and tools I&apos;ve built.</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROJECT_DATA.map((p) => (
          <div
            key={p.title}
            className="group rounded-3xl border border-zinc-800/80 bg-gradient-to-br from-zinc-900/70 to-zinc-900/30 p-8 transition-all hover:-translate-y-0.5 hover:border-rose-500/40"
          >
            <h3 className="mb-2 text-xl font-medium">{p.title}</h3>

            <p className="mb-4 text-zinc-300">{p.desc}</p>
            <p className="mb-5 text-sm text-zinc-400">{p.impact}</p>

            <div className="mb-6 flex flex-wrap gap-2">
              {p.stack.map((tag) => (
                <span
                  key={`${p.title}-${tag}`}
                  className="rounded-full border border-rose-500/20 bg-rose-500/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-rose-200/80"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex text-sm font-medium text-rose-300 transition-transform group-hover:translate-x-1"
              >
                Live Demo →
              </a>

              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}