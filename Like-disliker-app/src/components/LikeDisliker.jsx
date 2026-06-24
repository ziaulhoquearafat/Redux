const LikeDisliker = () => {
  // Static placeholder value for UI design demo
  const count = 0;

  // Dynamic styles based on static counter value
  let glowClass = "shadow-[0_0_40px_rgba(99,102,241,0.25)] border-indigo-500/30 text-indigo-400 bg-indigo-950/20";
  let sentimentText = "Neutral Sentiment";
  let statusBadge = "bg-indigo-500/10 text-indigo-300 border-indigo-500/20";

  if (count > 0) {
    glowClass = "shadow-[0_0_40px_rgba(16,185,129,0.25)] border-emerald-500/30 text-emerald-400 bg-emerald-950/20";
    sentimentText = "Positive Sentiment";
    statusBadge = "bg-emerald-500/10 text-emerald-300 border-emerald-500/20";
  } else if (count < 0) {
    glowClass = "shadow-[0_0_40px_rgba(244,63,94,0.25)] border-rose-500/30 text-rose-400 bg-rose-950/20";
    sentimentText = "Negative Sentiment";
    statusBadge = "bg-rose-500/10 text-rose-300 border-rose-500/20";
  }

  return (
    <div className="w-full max-w-md mx-auto p-1">
      {/* Outer border gradient card container */}
      <div className="relative group rounded-3xl p-[1px] bg-gradient-to-br from-white/10 via-white/5 to-white/0 shadow-2xl transition-all duration-500 hover:shadow-indigo-500/10">
        
        {/* Glow effect in background */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>

        {/* Card Body */}
        <div className="relative rounded-[23px] bg-slate-950/80 backdrop-blur-xl p-8 flex flex-col items-center overflow-hidden border border-white/5">
          
          {/* Header */}
          <div className="text-center mb-8">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide border uppercase ${statusBadge} transition-all duration-300`}>
              {sentimentText}
            </span>
            <p className="mt-2 text-slate-400 text-sm">Like & Dislike</p>
          </div>

          {/* Counter Display */}
          <div className={`relative flex items-center justify-center w-40 h-40 rounded-full border-2 ${glowClass} transition-all duration-500 mb-8`}>
            <div className="absolute inset-0 rounded-full bg-radial from-transparent to-black/40 pointer-events-none"></div>
            
            {/* Display Number */}
            <span className="text-5xl font-extrabold tracking-tight select-none font-mono">
              {count > 0 ? `+${count}` : count}
            </span>
          </div>

          {/* Controls Container */}
          <div className="w-full grid grid-cols-2 gap-4 mb-6">
            {/* Like Button */}
            <button
              className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 active:scale-95 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-200 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2m0 10V10"></path>
              </svg>
              <span>Like</span>
            </button>

            {/* Dislike Button */}
            <button
              className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-semibold text-white bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-400 hover:to-red-500 active:scale-95 shadow-lg shadow-rose-500/20 hover:shadow-rose-500/30 transition-all duration-200 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 14H5.236a2 2 0 00-1.789 2.894l3.5 7A2 2 0 008.737 25h4.017c.163 0 .326-.02.485-.06L17 24m-7-10V9a2 2 0 012-2h.095c.5 0 .905.405.905.905 0 .714.211 1.412.608 2.006L17 13v9m-7-10h2m5 10h2a2 2 0 002-2v-6a2 2 0 00-2-2h-2m0 10V10" transform="rotate(180 12 12)"></path>
              </svg>
              <span>Dislike</span>
            </button>
          </div>

          {/* Reset Button - Full Width */}
          <button
            className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-2xl font-semibold text-slate-300 border border-slate-800 bg-slate-900/50 hover:bg-slate-900 hover:text-white active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <svg className="w-4 h-4 transition-transform duration-500 hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H17m-11 0h.01"></path>
            </svg>
            <span>Reset Score</span>
          </button>

        </div>
      </div>
    </div>
  );
};

export default LikeDisliker;
