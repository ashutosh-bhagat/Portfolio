const projects = [
  {
    id: 1,
    num: "01",
    type: "Data Engineering",
    title: "SQL Data Warehouse for Sales Analytics",
    description:
      "Designed a SQL-based data warehouse by ingesting CSV data through Bronze, Silver, and Gold layers using ETL processes, Star Schema dimensional modeling, and Medallion Architecture for analytics readiness.",
    image: null,
    icon: "fas fa-database",
    tags: [
      "SQL",
      "ETL",
      "Data Warehousing",
      "Star Schema",
      "Medallion Architecture",
    ],
    github: "https://github.com/ashutosh-bhagat/SQL-Datawarehouse",
    live: null,
  },
  {
    id: 2,
    num: "02",
    type: "AI / ML · Team Project",
    title: "AyurFit — Ayurvedic Healthcare Assistant",
    description:
      "Built the ML backend for an AI wellness platform mapping patient symptoms to Ayurvedic diagnoses. Applied Sentence Transformers (all-MiniLM-L6-v2) for symptom text embeddings into a two-tier pipeline — LinearSVC for disease prediction and Decision Trees for herbal remedies.",
    image: "./project-img/ayurfit-demo.png",
    icon: "fas fa-leaf",
    tags: [
      "Machine Learning",
      "Sentence Transformers",
      "FastAPI",
      "scikit-learn",
      "HuggingFace",
    ],
    github: "https://github.com/ashutosh-bhagat/AyurFit--Holistic_Wellness",
    live: "https://ayurfit.ashutoshbhagat.in/",
  },
  {
    id: 3,
    num: "03",
    type: "Data Analytics & Viz",
    title: "DataLens — Govt. Data Visualization",
    description:
      "Built interactive visualizations using Matplotlib, Seaborn, and Plotly across Jupyter Notebooks with Panel to analyze and present complex government data trends through a dynamic interactive dashboard.",
    image: "./project-img/news-catcher.png",
    icon: "fas fa-chart-pie",
    tags: [
      "Python",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Pandas",
      "Panel",
      "Jupyter",
    ],
    github: "https://github.com/ashutosh-bhagat",
    live: null,
  },
  {
    id: 4,
    num: "04",
    type: "AI / NLP",
    title: "News-Catcher",
    description:
      "An AI-powered news intelligence system that uses Sentence Transformers to understand the semantic meaning of user input and retrieve contextually similar past news articles using FAISS vector similarity search.",
    image: "./project-img/news-catcher.png",
    icon: "fas fa-robot",
    tags: ["NLP", "Sentence Transformers", "FAISS", "Streamlit"],
    github: "https://github.com/ashutosh-bhagat/News-Catcher",
    live: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-20">
        <div className="mb-8 md:mb-12">
          <p className="text-accent text-xs font-mono tracking-[0.3em] uppercase mb-2">
            Selected Work
          </p>
          <h2 className="text-2xl md:text-3xl font-display font-bold">Featured Projects</h2>
        </div>

        {/* ── MOBILE LIST VIEW (hidden on md+) ────────────────────────── */}
        <div className="flex flex-col divide-y divide-white/5 md:hidden">
          {projects.map((project) => (
            <div key={project.id} className="group py-4 first:pt-0 last:pb-0">
              <div className="flex items-start gap-3">
                {/* Number */}
                <span className="text-[10px] font-mono text-accent/50 mt-0.5 shrink-0 w-5">
                  {project.num}
                </span>

                {/* Icon */}
                <div className="w-8 h-8 rounded-lg bg-surface border border-white/8 flex items-center justify-center shrink-0">
                  <i className={`${project.icon} text-xs text-accent/70`} />
                </div>

                {/* Main content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-[9px] font-mono text-textMuted uppercase tracking-wider mb-0.5 truncate">
                        {project.type}
                      </p>
                      <h3 className="text-sm font-bold text-white leading-snug">
                        {project.title}
                      </h3>
                    </div>
                    {/* Links */}
                    <div className="flex items-center gap-2 shrink-0 mt-0.5">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-background transition-all"
                        >
                          <i className="fas fa-arrow-up-right-from-square text-[9px]" />
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-md bg-surface border border-white/10 flex items-center justify-center text-textMuted hover:text-white hover:border-white/25 transition-all"
                      >
                        <i className="fab fa-github text-xs" />
                      </a>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex gap-1.5 mt-2 flex-wrap">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono text-gray-500 bg-surface px-1.5 py-0.5 rounded border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── DESKTOP CARD GRID (hidden on mobile) ─────────────────────── */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-surface rounded-2xl border border-white/5 overflow-hidden hover:border-white/15 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-video bg-background flex items-center justify-center overflow-hidden">
                <i className={`${project.icon} text-5xl text-white/10`} />
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-4 sm:p-5 gap-2.5 sm:gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-textMuted uppercase tracking-widest">
                    {project.type}
                  </span>
                  <span className="text-[10px] font-mono text-white/20">
                    {project.num}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-textMuted leading-relaxed flex-1 text-left line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tag}
                      className={`text-[10px] font-mono text-gray-400 bg-background px-2 py-0.5 sm:px-2.5 sm:py-1 rounded border border-white/5 ${
                        tagIdx >= 3 ? "hidden sm:inline-block" : ""
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-3 border-t border-white/5">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-white hover:text-accent transition-colors flex items-center gap-1.5"
                    >
                      <i className="fas fa-arrow-up-right-from-square text-[10px]" />{" "}
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-textMuted hover:text-white transition-colors flex items-center gap-1.5 ml-auto"
                  >
                    <i className="fab fa-github" /> Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
