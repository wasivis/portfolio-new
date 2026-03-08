const PROJECT_DATA = [
  { title: "Gamescout AI", desc: "AI-Powered Game Discovery Platform", link: "https://gamescout-ai.vercel.app/" },
  { title: "WasiLinks", desc: "Link-in-bio Website", link: "https://wasilinks.vercel.app/" },
  { title: "DrinkMe", desc: "Minimalist Shrinking App", link: "https://github.com/wasivis/DrinkMe" },
  { title: "THE//WAREHOUSE", desc: "Storefront Website", link: "https://the-warehouse-zeta.vercel.app/" },
  { title: "Jobsly", desc: "Remote Jobs Website", link: "https://jobslyremote.vercel.app/" },
  { title: "TechGrill", desc: "AI-Powered Technical Interview Practice", link: "https://techgrill.vercel.app/" },
];

export default function Projects() {
  return (
    <section id="projects" className="space-y-12">
      <h2 className="text-3xl font-semibold">Selected Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECT_DATA.map((p) => (
          <div key={p.title} className="group p-8 rounded-3xl border border-zinc-800/80 bg-gradient-to-br from-zinc-900/70 to-zinc-900/30 hover:border-rose-500/40 hover:-translate-y-0.5 transition-all">
            <h3 className="text-xl font-medium mb-2">{p.title}</h3>
            <p className="text-zinc-400 mb-4">{p.desc}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex text-sm font-medium text-rose-300 group-hover:translate-x-1 transition-transform"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
