export default function Stack() {
  return (
    <section id="stack" className="py-16 bg-surface relative">
      <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-20 relative z-10">
        <div className="mb-10 md:text-center">
          <p className="text-accent text-xs font-mono tracking-[0.3em] uppercase mb-2">
            Engineering Skills & Tools
          </p>
          <h2 className="text-3xl font-display font-bold mb-4">
            Technical Proficiency
          </h2>
          <p className="text-textMuted max-w-2xl mx-auto">
            A comprehensive overview of my data engineering, database, machine learning, and development toolkit.
          </p>
        </div>

        {/* Categories (Responsive 4-column grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Data Engineering & Databases */}
          <div className="bg-background/80 p-6 sm:p-7 rounded-2xl border border-white/5 hover:border-white/15 transition-colors h-full flex flex-col">
            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-accent mb-6">
              <i className="fas fa-database text-xl"></i>
            </div>
            <h3 className="text-lg font-bold text-white mb-4">
              Data Engineering
            </h3>
            <ul className="space-y-3 text-sm text-textMuted flex-1">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                SQL & Advanced Queries
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                ETL / ELT Pipelines
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                Dimensional Data Modeling
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                Star Schema Architecture
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                Medallion Architecture (Bronze, Silver, Gold)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                Microsoft SQL Server & MySQL
              </li>
            </ul>
          </div>

          {/* AI & Machine Learning */}
          <div className="bg-background/80 p-6 sm:p-7 rounded-2xl border border-white/5 hover:border-white/15 transition-colors h-full flex flex-col">
            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-emerald-400 mb-6">
              <i className="fas fa-brain text-xl"></i>
            </div>
            <h3 className="text-lg font-bold text-white mb-4">
              AI & Machine Learning
            </h3>
            <ul className="space-y-3 text-sm text-textMuted flex-1">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Python (Numpy, Pandas)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Supervised Learning (Regression, LinearSVC, Decision Trees)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Scikit-Learn
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Natural Language Processing (NLP)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Sentence Transformers & Embeddings
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Data Preprocessing & Feature Engineering
              </li>
            </ul>
          </div>

          {/* Analytics & Visualization */}
          <div className="bg-background/80 p-6 sm:p-7 rounded-2xl border border-white/5 hover:border-white/15 transition-colors h-full flex flex-col">
            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-sky-400 mb-6">
              <i className="fas fa-chart-bar text-xl"></i>
            </div>
            <h3 className="text-lg font-bold text-white mb-4">
              Analytics & Data Viz
            </h3>
            <ul className="space-y-3 text-sm text-textMuted flex-1">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                Matplotlib & Seaborn
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                Plotly & Panel Dashboards
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                Microsoft PowerBI
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                Exploratory Data Analysis (EDA)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                Jupyter Notebooks
              </li>
            </ul>
          </div>

          {/* Languages, Web & Tools */}
          <div className="bg-background/80 p-6 sm:p-7 rounded-2xl border border-white/5 hover:border-white/15 transition-colors h-full flex flex-col">
            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-purple-400 mb-6">
              <i className="fas fa-laptop-code text-xl"></i>
            </div>
            <h3 className="text-lg font-bold text-white mb-4">
              Languages & Web
            </h3>
            <ul className="space-y-3 text-sm text-textMuted flex-1">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                Python, C, JavaScript
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                HTML5 & Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                ReactJS & FastAPI
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                Git & GitHub
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                Figma & Canva
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                Computer Networks & DBMS
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
