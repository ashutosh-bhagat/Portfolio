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
    type: "AI / Full-Stack · Team Project",
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
  // {
  //   id: 3,
  //   num: "03",
  //   type: "Supervised ML",
  //   title: "Mark’s Prediction — Student Grade Predictor",
  //   description:
  //     "Developed a Linear Regression model to predict student midterm scores, sourcing data from Kaggle, performing exploratory data analysis (EDA) using Pandas and NumPy, and deploying an interactive web interface via Streamlit.",
  //   image: "./project-img/grade-prediction.png",
  //   icon: "fas fa-graduation-cap",
  //   tags: [
  //     "Python",
  //     "Supervised ML",
  //     "Linear Regression",
  //     "Pandas",
  //     "NumPy",
  //     "Streamlit",
  //   ],
  //   github: "https://github.com/ashutosh-bhagat/Grade-Prediction",
  //   live: "https://mid-grade-prediction.streamlit.app/",
  // },
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
  // {
  //   id: 6,
  //   num: "06",
  //   type: "Web App",
  //   title: "Clipy-Clipboard",
  //   description:
  //     "A secure online clipboard for sharing text and files instantly through unique codes. Built for fast, cross-device transfer with temporary, privacy-focused access.",
  //   image: "./project-img/clipy-clipboard.png",
  //   icon: "fas fa-clipboard",
  //   tags: ["Python", "FastAPI", "HTML5 & CSS3"],
  //   github: "https://github.com/ashutosh-bhagat/Clipy_Clipboard",
  //   live: "https://clipy-clipboard.vercel.app/",
  // },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-20">
        <div className="mb-12">
          <p className="text-accent text-xs font-mono tracking-[0.3em] uppercase mb-2">
            Selected Work
          </p>
          <h2 className="text-3xl font-display font-bold">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

                <p className="text-xs sm:text-sm text-textMuted leading-relaxed flex-1 text-left line-clamp-2 sm:line-clamp-none">
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
