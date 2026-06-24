import LikeDisliker from "./components/LikeDisliker";

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 flex flex-col justify-center items-center p-4 overflow-hidden relative">
      {/* Background glow overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="relative z-10 w-full max-w-md text-center mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
          Like & Dislike
        </h1>
        <p className="mt-2 text-slate-400 text-sm max-w-xs mx-auto">
          Use the controls below to express your feedback and watch the state evolve.
        </p>
      </div>

      <div className="relative z-10 w-full">
        <LikeDisliker />
      </div>
    </div>
  );
}

export default App;
