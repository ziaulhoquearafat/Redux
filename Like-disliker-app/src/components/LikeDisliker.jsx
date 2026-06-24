import { useSelector } from "react-redux";

const LikeDisliker = () => {
  const { likes, dislikes } = useSelector((state) => state.likeDislike);
  console.log({likes, dislikes})
  

  // Calculate sentiment ratio for visual progress bar (50/50 placeholder when both are 0)
  const total = likes + dislikes;
  const likesPercentage = total === 0 ? 50 : Math.round((likes / total) * 100);

  return (
    <div className="w-full max-w-md mx-auto p-1">
      {/* Outer border gradient card container */}
      <div className="relative group rounded-3xl p-[1px] bg-gradient-to-br from-white/10 via-white/5 to-white/0 shadow-2xl transition-all duration-500 hover:shadow-indigo-500/10">
        {/* Glow effect in background */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>

        {/* Card Body */}
        <div className="relative rounded-[23px] bg-slate-950/80 backdrop-blur-xl p-8 flex flex-col items-center overflow-hidden border border-white/5">
          {/* Stats Display Grid */}
          <div className="w-full grid grid-cols-2 gap-4 mb-6">
            {/* Likes Display Card */}
            <div className="flex flex-col items-center justify-center p-5 rounded-2xl border border-emerald-500/20 bg-emerald-950/15 shadow-[0_0_20px_rgba(16,185,129,0.05)] text-center transition-all duration-300 hover:border-emerald-500/40">
              <svg
                className="w-5 h-5 text-emerald-400 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2m0 10V10"
                ></path>
              </svg>
              <span className="text-3xl font-extrabold text-emerald-400 font-mono tracking-tight">
                {likes}
              </span>
              <span className="text-xs text-emerald-500/80 font-medium uppercase mt-1 tracking-wider">
                Likes
              </span>
            </div>

            {/* Dislikes Display Card */}
            <div className="flex flex-col items-center justify-center p-5 rounded-2xl border border-rose-500/20 bg-rose-950/15 shadow-[0_0_20px_rgba(244,63,94,0.05)] text-center transition-all duration-300 hover:border-rose-500/40">
              <svg
                className="w-5 h-5 text-rose-400 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M10 14H5.236a2 2 0 00-1.789 2.894l3.5 7A2 2 0 008.737 25h4.017c.163 0 .326-.02.485-.06L17 24m-7-10V9a2 2 0 012-2h.095c.5 0 .905.405.905.905 0 .714.211 1.412.608 2.006L17 13v9m-7-10h2m5 10h2a2 2 0 002-2v-6a2 2 0 00-2-2h-2m0 10V10"
                  transform="rotate(180 12 12)"
                ></path>
              </svg>
              <span className="text-3xl font-extrabold text-rose-400 font-mono tracking-tight">
                {dislikes}
              </span>
              <span className="text-xs text-rose-500/80 font-medium uppercase mt-1 tracking-wider">
                Dislikes
              </span>
            </div>
          </div>

          {/* Sentiment Visual Bar */}
          <div className="w-full mb-8">
            <div className="flex justify-between items-center text-xs text-slate-500 mb-2 px-1">
              <span>Likes Ratio</span>
              <span className="font-mono">{likesPercentage}%</span>
            </div>
            <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden p-[2px] border border-slate-800">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-500"
                style={{ width: `${likesPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Controls Container */}
          <div className="w-full grid grid-cols-2 gap-4 mb-6">
            {/* Like Button */}
            <button className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 active:scale-95 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-200 cursor-pointer">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2m0 10V10"
                ></path>
              </svg>
              <span>Like</span>
            </button>

            {/* Dislike Button */}
            <button className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-semibold text-white bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-400 hover:to-red-500 active:scale-95 shadow-lg shadow-rose-500/20 hover:shadow-rose-500/30 transition-all duration-200 cursor-pointer">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M10 14H5.236a2 2 0 00-1.789 2.894l3.5 7A2 2 0 008.737 25h4.017c.163 0 .326-.02.485-.06L17 24m-7-10V9a2 2 0 012-2h.095c.5 0 .905.405.905.905 0 .714.211 1.412.608 2.006L17 13v9m-7-10h2m5 10h2a2 2 0 002-2v-6a2 2 0 00-2-2h-2m0 10V10"
                  transform="rotate(180 12 12)"
                ></path>
              </svg>
              <span>Dislike</span>
            </button>
          </div>

          {/* Reset Button - Full Width */}
          <button className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-2xl font-semibold text-slate-300 border border-slate-800 bg-slate-900/50 hover:bg-slate-900 hover:text-white active:scale-[0.98] transition-all duration-200 cursor-pointer">
            <svg
              className="w-4 h-4 transition-transform duration-500 hover:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H17m-11 0h.01"
              ></path>
            </svg>
            <span>Reset Score</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LikeDisliker;
