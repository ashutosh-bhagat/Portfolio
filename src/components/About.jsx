export default function About() {
  return (
    <section
      id="about"
      className="py-16 bg-background border-t border-white/5 relative"
    >
      <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Profile Picture */}
          <div className="md:col-span-5 flex justify-center w-full sticky top-24">
            <div className="relative group w-full max-w-xs h-[22rem] sm:max-w-sm sm:h-[26rem] md:w-full md:h-[30rem] lg:h-[34rem]">
              {/* Shifting Accent Outline Frame */}
              <div className="absolute inset-0 border border-accent/30 rounded-2xl translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
              {/* Profile image container */}
              <div className="absolute inset-0 bg-surface rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-10">
                <img
                  src="./Ashutosh.jpeg"
                  alt="Ashutosh Bhagat"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="md:col-span-7 space-y-8">
            <div>
              <p className="text-accent text-xs font-mono tracking-[0.3em] uppercase mb-2">
                Background & Overview
              </p>
              <h2 className="text-3xl font-display font-bold mb-4">About Me</h2>
              <div className="space-y-4 text-textMuted leading-relaxed text-base sm:text-lg">
                <p className="text-justify">
                  I am an <strong className="text-white">Aspiring Data Engineer</strong> pursuing my Bachelor's in Computer Science and Design at <strong className="text-white">Sardar Vallabhbhai Patel Institute of Technology (SVIT Vasad)</strong>.
                </p>
                <p className="text-justify">
                  My technical focus centers on <strong className="text-white">SQL, ETL pipelines, dimensional data modeling (Medallion Architecture & Star Schema)</strong>, and data analytics. Alongside data engineering, I have a deep interest in <strong className="text-white">Machine Learning and NLP</strong>, building end-to-end solutions that transform raw, complex data into actionable insights.
                </p>
                {/* <p className="text-justify">
                  Having started my journey in Graphic Design, I combine an eye for visual design with solid database architecture to build user-friendly dashboards, scalable data workflows, and intuitive web applications.
                </p> */}
              </div>
            </div>

            {/* Certifications & Achievements */}
            <div className="pt-6 border-t border-white/5">
              <h3 className="text-xs font-mono tracking-[0.3em] uppercase text-accent mb-4">
                Certifications & Achievements
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 bg-surface rounded-xl border border-white/5 flex items-start gap-3">
                  <div className="p-2.5 bg-accent/10 rounded-lg text-accent text-lg shrink-0 mt-0.5">
                    <i className="fas fa-certificate"></i>
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold leading-snug">
                      Oracle Cloud Infrastructure (OCI) 2025
                    </h4>
                    <p className="text-xs text-accent font-mono mt-0.5">
                      Certified AI Foundations Associate
                    </p>
                    <p className="text-[11px] text-textMuted mt-1">
                      AI/ML, Deep Learning, NLP & GenAI foundations.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-surface rounded-xl border border-white/5 flex items-start gap-3">
                  <div className="p-2.5 bg-purple-500/10 rounded-lg text-purple-400 text-lg shrink-0 mt-0.5">
                    <i className="fas fa-award"></i>
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold leading-snug">
                      Code Unnati Advanced Program
                    </h4>
                    <p className="text-xs text-purple-400 font-mono mt-0.5">
                      SAP Edunet
                    </p>
                    <p className="text-[11px] text-textMuted mt-1">
                      Hands-on Machine Learning & real-world model deployment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Past Leadership & Community Engagements */}
            <div className="pt-6 border-t border-white/5">
              <h3 className="text-xs font-mono tracking-[0.3em] uppercase text-accent mb-4">
                Past Leadership & Community Roles
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-4 bg-surface rounded-xl border border-white/5">
                  <div
                    className="p-2 bg-white/10 rounded-lg text-accent flex items-center justify-center shrink-0"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <img
                      src="./aim logo.png"
                      alt="The A.I.M. Club"
                      className="object-contain w-8 h-8"
                      style={{ filter: "brightness(1) contrast(1.25)" }}
                    />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold">The A.I.M. Club (SVIT Vasad)</h4>
                    <p className="text-xs text-accent font-mono">Former Vice-President</p>
                    <p className="text-[11px] text-textMuted mt-0.5">
                      Led student-run interdisciplinary club activities and tech events.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-surface rounded-xl border border-white/5">
                  <div
                    className="p-2 bg-white/10 rounded-lg text-accent flex items-center justify-center shrink-0"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <img
                      src="./ISTE.png"
                      alt="ISTE Committee"
                      className="object-contain w-8 h-8"
                      style={{ filter: "brightness(0.8) contrast(1)" }}
                    />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold">Prakarsh '26 & ISTE Committee</h4>
                    <p className="text-xs text-accent font-mono">Former Technical Head & Organiser</p>
                    <p className="text-[11px] text-textMuted mt-0.5">
                      Supervised technical infrastructure and operations for annual National Tech Fest.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-surface rounded-xl border border-white/5">
                  <div
                    className="p-2 bg-white/10 rounded-lg text-accent flex items-center justify-center shrink-0"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <img
                      src="./aws.svg"
                      alt="AWS UG Vadodara & GDG Vadodara"
                      className="object-contain w-8 h-8"
                      style={{ filter: "brightness(1) contrast(1.25)" }}
                    />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold">AWS User Group & GDG Vadodara</h4>
                    <p className="text-xs text-accent font-mono">Past Graphic Designer & Volunteer</p>
                    <p className="text-[11px] text-textMuted mt-0.5">
                      Created branding materials for AWS UG and supported volunteer management at GDG events.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
