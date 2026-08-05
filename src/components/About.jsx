export default function About() {
  return (
    <section
      id="about"
      className="py-10 sm:py-14 bg-background border-t border-white/5 relative"
    >
      <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Profile Picture Column */}
          <div className="lg:col-span-5 flex justify-center w-full">
            {/* Mobile View: Large Centered Avatar */}
            <div className="lg:hidden relative group w-52 h-52 sm:w-64 sm:h-64 rounded-full p-1.5 bg-gradient-to-b from-accent/60 via-accent/20 to-transparent shadow-2xl mx-auto my-2">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-background bg-surface">
                <img
                  src="./Ashutosh.jpeg"
                  alt="Ashutosh Bhagat"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Desktop View: Prominent Full-Size Portrait Card */}
            <div className="hidden lg:block relative group w-full max-w-md h-[34rem]">
              {/* Shifting Accent Outline Frame */}
              <div className="absolute inset-0 border border-accent/30 rounded-2xl translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
              {/* Profile image container */}
              <div className="absolute inset-0 bg-surface rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-10">
                <img
                  src="./Ashutosh.jpeg"
                  alt="Ashutosh Bhagat"
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="text-accent text-xs font-mono tracking-[0.3em] uppercase mb-1">
                Background & Overview
              </p>
              <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3">About Me</h2>
              <div className="space-y-3 text-textMuted leading-relaxed text-sm sm:text-base">
                <p className="text-left">
                  I am an <strong className="text-white">Aspiring Data Engineer</strong> pursuing my Bachelor's in Computer Science and Design at <strong className="text-white">Sardar Vallabhbhai Patel Institute of Technology (SVIT Vasad)</strong>.
                </p>
                <p className="text-left">
                  My technical focus centers on <strong className="text-white">SQL, ETL pipelines, dimensional data modeling (Medallion Architecture & Star Schema)</strong>, and data analytics. Alongside data engineering, I have a deep interest in <strong className="text-white">Machine Learning and NLP</strong>, building end-to-end solutions that transform raw, complex data into actionable insights.
                </p>
                <p className="text-left hidden sm:block">
                  Having started my journey in Graphic Design, I combine an eye for visual design with solid database architecture to build user-friendly dashboards, scalable data workflows, and intuitive web applications.
                </p>
              </div>
            </div>

            {/* Certifications & Achievements */}
            <div className="pt-4 border-t border-white/5">
              <h3 className="text-xs font-mono tracking-[0.3em] uppercase text-accent mb-3">
                Certifications & Achievements
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 bg-surface rounded-xl border border-white/5 flex items-start gap-3 hover:border-white/15 transition-colors">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent text-lg shrink-0 mt-0.5">
                    <i className="fas fa-certificate"></i>
                  </div>
                  <div>
                    <h4 className="text-white text-xs sm:text-sm font-bold leading-snug">
                      Oracle Cloud Infrastructure (OCI) 2025
                    </h4>
                    <p className="text-[11px] text-accent font-mono mt-0.5">
                      Certified AI Foundations Associate
                    </p>
                    <p className="text-[11px] text-textMuted mt-0.5 leading-tight">
                      AI/ML, Deep Learning, NLP & GenAI foundations.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 bg-surface rounded-xl border border-white/5 flex items-start gap-3 hover:border-white/15 transition-colors">
                  <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400 text-lg shrink-0 mt-0.5">
                    <i className="fas fa-award"></i>
                  </div>
                  <div>
                    <h4 className="text-white text-xs sm:text-sm font-bold leading-snug">
                      Code Unnati Advanced and Foundation Program
                    </h4>
                    <p className="text-[11px] text-purple-400 font-mono mt-0.5">
                      SAP x Edunet Foundation Program
                    </p>
                    <p className="text-[11px] text-textMuted mt-0.5 leading-tight">
                      Hands-on Machine Learning & model deployment with Data Analytics foundation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Past Leadership & Community Engagements */}
            <div className="pt-4 border-t border-white/5">
              <h3 className="text-xs font-mono tracking-[0.3em] uppercase text-accent mb-3">
                Past Leadership & Community Roles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-surface rounded-xl border border-white/5 flex flex-col gap-1.5 hover:border-white/15 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="./aim logo.png"
                      alt="The A.I.M. Club"
                      className="w-6 h-6 object-contain"
                      style={{ filter: "brightness(1) contrast(1.25)" }}
                    />
                    <h4 className="text-white text-xs font-bold leading-tight">The A.I.M. Club</h4>
                  </div>
                  <p className="text-[11px] text-accent font-mono">Former Vice-President</p>
                  <p className="text-[11px] text-textMuted leading-tight">
                    Led student-run interdisciplinary tech club activities.
                  </p>
                </div>

                <div className="p-3 bg-surface rounded-xl border border-white/5 flex flex-col gap-1.5 hover:border-white/15 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="./ISTE.png"
                      alt="ISTE Committee"
                      className="w-6 h-6 object-contain"
                      style={{ filter: "brightness(0.8) contrast(1)" }}
                    />
                    <h4 className="text-white text-xs font-bold leading-tight">Prakarsh '26</h4>
                  </div>
                  <p className="text-[11px] text-accent font-mono">Former Technical Head</p>
                  <p className="text-[11px] text-textMuted leading-tight">
                    Supervised tech infrastructure for National Tech Fest.
                  </p>
                </div>

                <div className="p-3 bg-surface rounded-xl border border-white/5 flex flex-col gap-1.5 hover:border-white/15 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="./aws.svg"
                      alt="AWS UG Vadodara & GDG Vadodara"
                      className="w-6 h-6 object-contain"
                      style={{ filter: "brightness(1) contrast(1.25)" }}
                    />
                    <h4 className="text-white text-xs font-bold leading-tight">AWS UG & GDG</h4>
                  </div>
                  <p className="text-[11px] text-accent font-mono">Past Volunteer & Designer</p>
                  <p className="text-[11px] text-textMuted leading-tight">
                    Created branding materials and managed event logistics.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
