export default function Hero() {
  const inputNodes = [60, 150, 240];
  const hidden1Nodes = [45, 115, 185, 255];
  const hidden2Nodes = [45, 115, 185, 255];
  const outputNodes = [150];

  return (
    <section className="min-h-[80vh] flex items-center relative pt-20 pb-10 lg:pt-24 lg:pb-14 overflow-hidden bg-background">
      {/* Background Tech Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 bg-[size:30px_30px] sm:bg-[size:40px_40px] pointer-events-none z-0"></div>

      {/* Spotlight Ambient Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[600px] lg:h-[600px] bg-accent/10 blur-[60px] sm:blur-[80px] lg:blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-accent mb-4 sm:mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-accent blink"></span>
              Open to Work
            </div>

            <div className="font-mono text-xs sm:text-sm tracking-wider text-textMuted/60 mb-3 lowercase flex items-center gap-1.5 select-none">
              <span className="text-accent font-semibold">
                ashutosh@portfolio:~$
              </span>
              <span className="text-white">cat ashutosh-bhagat.sh</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.08] tracking-tight mb-4 sm:mb-6">
              ashutosh
              <br />
              bhagat<span className="text-accent">.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-textMuted/80 leading-7 mb-6 sm:mb-8 max-w-lg">
              Aspiring <strong className="text-white">Data Engineer</strong> &amp; <strong className="text-white">ML Developer</strong>
               , specializing in <strong className="text-white">SQL</strong>, <strong className="text-white">ETL pipelines</strong>, <strong className="text-white">data modeling</strong>, and <strong className="text-white">ML / NLP</strong> solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-start gap-3 w-full sm:w-auto">
              <a
                href="#projects"
                className="px-6 py-3 sm:px-7 sm:py-3.5 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-all text-center text-sm sm:text-base shadow-lg shadow-white/5 active:scale-95"
              >
                View My Work
              </a>
              <a
                href="./Ashutosh_Bhagat_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 sm:px-7 sm:py-3.5 bg-surface border border-white/15 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-center text-sm sm:text-base flex justify-center items-center gap-2 group active:scale-95"
              >
                My Resume
                <i className="fas fa-arrow-down text-xs group-hover:translate-y-0.5 transition-transform"></i>
              </a>
            </div>
          </div>

          {/* Right Column: Sleek Animated Node Graph */}
          <div className="lg:col-span-5 flex justify-center items-center w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto z-10 mt-4 lg:mt-0">
            <div className="w-full bg-surface/90 border border-white/10 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-md flex flex-col relative overflow-hidden">
              {/* CSS Styles for hardware-accelerated animations (optimized for mobile) */}
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                @keyframes flow {
                  to {
                    stroke-dashoffset: -20;
                  }
                }
                @keyframes pulseGlow {
                  0%, 100% {
                    filter: drop-shadow(0 0 2px rgba(34, 197, 94, 0.3));
                    opacity: 0.7;
                  }
                  50% {
                    filter: drop-shadow(0 0 8px rgba(34, 197, 94, 0.8));
                    opacity: 1;
                  }
                }
                .synapse {
                  stroke: rgba(34, 197, 94, 0.35);
                  stroke-dasharray: 4 4;
                  animation: flow 1.2s linear infinite;
                }
                .neuron {
                  fill: #0d0d0d;
                  stroke: #22c55e;
                  stroke-width: 2;
                  animation: pulseGlow 3s ease-in-out infinite;
                  transition: fill 0.2s ease, filter 0.2s ease;
                }
                .neuron:hover {
                  fill: #22c55e;
                  filter: drop-shadow(0 0 10px #22c55e);
                  cursor: pointer;
                }
                @media (max-width: 768px) {
                  .synapse, .neuron {
                    animation: none !important;
                  }
                }
              `,
                }}
              />

              {/* Window Header */}
              <div className="flex justify-between items-center pb-3 border-b border-white/5 mb-2 select-none">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                </div>
                <span className="text-[10px] font-mono text-textMuted uppercase tracking-wider">
                  Model Topology
                </span>
                <span className="w-8"></span>
              </div>

              {/* SVG Canvas Area */}
              <div className="w-full flex justify-center py-1">
                <svg
                  viewBox="0 0 400 300"
                  className="w-full h-auto max-w-[320px] sm:max-w-[380px]"
                >
                  {/* Layer Connections */}
                  {inputNodes.map((y1, i) =>
                    hidden1Nodes.map((y2, j) => (
                      <line
                        key={`l1-${i}-${j}`}
                        x1={40}
                        y1={y1}
                        x2={150}
                        y2={y2}
                        className="synapse"
                        style={{ animationDelay: `${(i + j) * 0.1}s` }}
                      />
                    )),
                  )}

                  {hidden1Nodes.map((y1, i) =>
                    hidden2Nodes.map((y2, j) => (
                      <line
                        key={`l2-${i}-${j}`}
                        x1={150}
                        y1={y1}
                        x2={260}
                        y2={y2}
                        className="synapse"
                        style={{ animationDelay: `${0.3 + (i + j) * 0.1}s` }}
                      />
                    )),
                  )}

                  {hidden2Nodes.map((y1, i) =>
                    outputNodes.map((y2, j) => (
                      <line
                        key={`l3-${i}-${j}`}
                        x1={260}
                        y1={y1}
                        x2={360}
                        y2={y2}
                        className="synapse"
                        style={{ animationDelay: `${0.6 + i * 0.15}s` }}
                      />
                    )),
                  )}

                  {/* Layer Nodes */}
                  {inputNodes.map((y, i) => (
                    <circle
                      key={`c1-${i}`}
                      cx={40}
                      cy={y}
                      r={7}
                      className="neuron"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}

                  {hidden1Nodes.map((y, i) => (
                    <circle
                      key={`c2-${i}`}
                      cx={150}
                      cy={y}
                      r={7}
                      className="neuron"
                      style={{ animationDelay: `${0.3 + i * 0.15}s` }}
                    />
                  ))}

                  {hidden2Nodes.map((y, i) => (
                    <circle
                      key={`c3-${i}`}
                      cx={260}
                      cy={y}
                      r={7}
                      className="neuron"
                      style={{ animationDelay: `${0.6 + i * 0.15}s` }}
                    />
                  ))}

                  {outputNodes.map((y, i) => (
                    <circle
                      key={`c4-${i}`}
                      cx={360}
                      cy={y}
                      r={7}
                      className="neuron"
                      style={{ animationDelay: "1.2s" }}
                    />
                  ))}
                </svg>
              </div>

              {/* Inspirational Quote */}
              <div className="mt-3 p-3 sm:p-4 bg-background/80 rounded-xl border border-accent/20 relative overflow-hidden shadow-inner">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent"></div>
                <div className="pl-2.5">
                  <div className="flex items-center gap-1.5 mb-1">
                    <i className="fas fa-network-wired text-[10px] text-accent"></i>
                    <span className="text-[9px] sm:text-[10px] font-mono text-accent uppercase tracking-widest font-semibold">
                      Synaptic Connection Principle
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-white leading-relaxed font-display font-medium">
                    In both silicon and synapses, intelligence is not stored in
                    nodes, but forged in the connections between them.
                  </p>
                </div>
              </div>

              {/* Window Footer Detail */}
              <div className="flex justify-between items-center pt-2 text-[10px] font-mono text-textMuted select-none opacity-50 mt-1">
                <span>Input: [x₁, x₂, x₃]</span>
                <span>Output: [ŷ]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
