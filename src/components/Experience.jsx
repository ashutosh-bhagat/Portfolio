export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Data Analyst Intern",
      company: "OutriX",
      period: "Jul 2025 – Aug 2025",
      location: "Virtual",
      type: "Internship",
      points: [
        "Learnt and applied core data analytics concepts hands-on during the internship.",
        "Built an E-commerce Data Analytics project using Python, performing end-to-end analysis on real sales data.",
      ],
      skills: ["Python", "Data Analytics", "Pandas", "Sales Data Analysis", "EDA"],
    },
  ];

  return (
    <section id="experience" className="py-8 md:py-10 bg-surface relative">
      <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-20 relative z-10">
        <div className="mb-5 md:mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <p className="text-accent text-xs font-mono tracking-[0.3em] uppercase mb-1">
              Work History
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-bold">Experience</h2>
          </div>
        </div>

        <div className="space-y-4">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-background rounded-xl border border-white/5 hover:border-white/15 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Left accent border */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent/50 group-hover:bg-accent transition-colors" />

              {/* ── MOBILE LAYOUT ── */}
              <div className="md:hidden p-4 pl-5">
                {/* Top row: role + badge + date */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap mb-0.5">
                      <h3 className="text-sm font-bold text-white">{exp.role}</h3>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20 shrink-0">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-[10px] text-textMuted font-mono">
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <span className="text-[9px] font-mono text-textMuted bg-surface px-2 py-1 rounded border border-white/5 shrink-0 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                {/* Bullet points — 1 line clamp each on mobile */}
                <ul className="space-y-1 mb-3">
                  {exp.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <i className="fas fa-chevron-right text-[8px] text-accent mt-1 shrink-0" />
                      <span className="text-[10px] text-textMuted leading-relaxed line-clamp-2">{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-1 pt-2 border-t border-white/5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[9px] font-mono text-gray-400 bg-surface px-1.5 py-0.5 rounded-full border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* ── DESKTOP LAYOUT ── */}
              <div className="hidden md:block p-5 lg:p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2.5">
                      {exp.role}
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                        {exp.type}
                      </span>
                    </h3>
                    <p className="text-xs text-textMuted font-mono mt-0.5">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <div className="text-xs font-mono text-textMuted bg-surface px-2.5 py-1 rounded-lg border border-white/5 w-fit">
                    <i className="far fa-calendar-alt mr-1.5 text-accent" />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-textMuted leading-relaxed">
                  {exp.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <i className="fas fa-chevron-right text-[9px] text-accent mt-1 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-white/5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono text-gray-400 bg-surface px-2.5 py-0.5 rounded-full border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
