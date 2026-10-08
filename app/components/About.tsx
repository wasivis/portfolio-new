export default function About() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend & Data",
      skills: ["Node.js", "Supabase", "MongoDB"],
    },
    {
      title: "Other",
      skills: ["Python", "Git", "REST APIs"],
    },
  ];

  return (
    <section id="about" className="space-y-12">
      <h2 className="text-3xl font-semibold tracking-tight">
        About me
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Main Bio */}
        <div className="flex flex-col justify-center rounded-3xl border border-amber-500/20 bg-amber-500/5 p-8 md:col-span-2">
          <p className="text-xl font-light leading-relaxed text-zinc-300">
            I'm a{" "}
            <span className="font-medium text-amber-200/90">
              full-stack developer
            </span>{" "}
            who enjoys turning ideas into polished, practical web
            applications. I work across the stack, from building
            responsive React interfaces to designing APIs, working
            with databases, integrating AI, and deploying complete
            products.
          </p>

          <p className="mt-5 text-base leading-7 text-zinc-400">
            I care about clean code, thoughtful UX, and building
            software that feels as good to use as it is to build.
          </p>
        </div>

        {/* Location */}
        <div className="flex flex-col justify-center rounded-3xl border border-sky-500/20 bg-sky-500/5 p-8">
          <h3 className="mb-2 text-[10px] font-medium uppercase tracking-widest text-sky-300">
            Location
          </h3>

          <p className="text-lg text-zinc-200">
            Buenos Aires,
            <br />
            <span className="text-sm text-zinc-500">
              Working globally.
            </span>
          </p>
        </div>

        {/* Technologies */}
        <div className="rounded-3xl border border-rose-500/20 bg-rose-500/5 p-8 md:col-span-3">
          <h3 className="mb-6 text-[10px] font-medium uppercase tracking-widest text-rose-300">
            Technologies
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <p className="mb-3 text-sm font-medium text-zinc-300">
                  {group.title}
                </p>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-rose-500/20 bg-rose-500/10 px-3 py-1.5 text-sm text-rose-200/80 transition-colors hover:border-rose-500/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}