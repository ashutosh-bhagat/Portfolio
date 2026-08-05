import { useState } from "react";

export default function Stack() {
  // Mobile accordion active state (defaults to first category open)
  const [openCategory, setOpenCategory] = useState(0);

  const categories = [
    {
      id: 0,
      title: "Data Engineering",
      icon: "fas fa-database",
      iconColor: "text-accent",
      badgeBg: "bg-accent/10 text-accent border-accent/20",
      dotColor: "bg-accent",
      skills: [
        "SQL & Advanced Queries",
        "ETL / ELT Pipelines",
        "Dimensional Data Modeling",
        "Star Schema Architecture",
        "Medallion Architecture (Bronze, Silver, Gold)",
        "Microsoft SQL Server & MySQL",
      ],
    },
    {
      id: 1,
      title: "AI & Machine Learning",
      icon: "fas fa-brain",
      iconColor: "text-emerald-400",
      badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      dotColor: "bg-emerald-400",
      skills: [
        "Python (Numpy, Pandas)",
        "Supervised Learning (Regression, LinearSVC, Decision Trees)",
        "Scikit-Learn",
        "Natural Language Processing (NLP)",
        "Sentence Transformers & Embeddings",
        "Data Preprocessing & Feature Engineering",
      ],
    },
    {
      id: 2,
      title: "Analytics & Data Viz",
      icon: "fas fa-chart-bar",
      iconColor: "text-sky-400",
      badgeBg: "bg-sky-500/10 text-sky-400 border-sky-500/20",
      dotColor: "bg-sky-400",
      skills: [
        "Matplotlib & Seaborn",
        "Plotly & Panel Dashboards",
        "Microsoft PowerBI",
        "Exploratory Data Analysis (EDA)",
        "Jupyter Notebooks",
      ],
    },
    {
      id: 3,
      title: "Languages & Web",
      icon: "fas fa-laptop-code",
      iconColor: "text-purple-400",
      badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      dotColor: "bg-purple-400",
      skills: [
        "Python, C, JavaScript",
        "HTML5 & Tailwind CSS",
        "ReactJS & FastAPI",
        "Git & GitHub",
        "Figma & Canva",
        "Computer Networks & DBMS",
      ],
    },
  ];

  const toggleCategory = (id) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  return (
    <section id="stack" className="py-12 sm:py-16 bg-surface relative">
      <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-20 relative z-10">
        <div className="mb-8 sm:mb-12 text-left md:text-center">
          <p className="text-accent text-xs font-mono tracking-[0.3em] uppercase mb-2">
            Engineering Skills & Tools
          </p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3 sm:mb-4">
            Technical Proficiency
          </h2>
          <p className="text-textMuted text-sm sm:text-base max-w-2xl mx-auto">
            A comprehensive overview of my data engineering, database, machine learning, and development toolkit.
          </p>
        </div>

        {/* MOBILE VIEW: Interactive Dropdown Accordions */}
        <div className="block md:hidden space-y-3">
          {categories.map((cat) => {
            const isOpen = openCategory === cat.id;
            return (
              <div
                key={cat.id}
                className="bg-background rounded-xl border border-white/10 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleCategory(cat.id)}
                  className="w-full flex items-center justify-between p-4 text-left font-medium active:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center ${cat.iconColor}`}>
                      <i className={`${cat.icon} text-base`} />
                    </div>
                    <span className="text-white font-bold text-base">{cat.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${cat.badgeBg}`}>
                      {cat.skills.length} skills
                    </span>
                    <i
                      className={`fas fa-chevron-down text-xs text-textMuted transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-accent" : ""
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 border-t border-white/5">
                    <ul className="space-y-2.5 text-xs sm:text-sm text-textMuted">
                      {cat.skills.map((skill, idx) => (
                        <li key={idx} className="flex items-center gap-2.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${cat.dotColor}`} />
                          <span className="text-gray-200">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* DESKTOP VIEW: Original 4-Column Card Grid with Bullet Lists */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-background/80 p-6 sm:p-7 rounded-2xl border border-white/5 hover:border-white/15 transition-colors h-full flex flex-col"
            >
              <div className={`w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center ${cat.iconColor} mb-6`}>
                <i className={`${cat.icon} text-xl`} />
              </div>
              <h3 className="text-lg font-bold text-white mb-4">
                {cat.title}
              </h3>
              <ul className="space-y-3 text-sm text-textMuted flex-1">
                {cat.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${cat.dotColor}`} />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
