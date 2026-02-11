export default function About() {
  const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Node.js", "Python", "MongoDB"];

  return (
    <section id="about" className="space-y-12">
      <h2 className="text-3xl font-semibold tracking-tight">About me</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Main Bio - Spans 2 columns */}
        <div className="md:col-span-2 p-8 rounded-3xl border border-amber-500/20 bg-amber-500/5 flex flex-col justify-center">
          <p className="text-xl text-zinc-300 leading-relaxed font-light">
            I specialize in building <span className="text-amber-200/80 font-medium">full-stack systems</span> that scale. 
            From architecting databases in PostgreSQL to crafting polished interactions in React, 
            I focus on the technical details that make software feel premium.
          </p>
        </div>

        {/* Location - Spans 1 column */}
        <div className="p-8 rounded-3xl border border-sky-500/20 bg-sky-500/5 flex flex-col justify-center">
          <h3 className="text-sky-300 font-medium uppercase tracking-widest text-[10px] mb-2">Location</h3>
          <p className="text-zinc-200 text-lg">Buenos Aires, <br/><span className="text-zinc-500 text-sm">Working globally.</span></p>
        </div>

        {/* Tech Stack - Now on the bottom row, spanning all 3 columns for a clean finish */}
        <div className="md:col-span-3 p-8 rounded-3xl border border-rose-500/20 bg-rose-500/5">
          <h3 className="text-rose-300 font-medium uppercase tracking-widest text-[10px] mb-6">Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-200/80 text-sm border border-rose-500/20 hover:border-rose-500/50 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}