export default function Intro({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh px-6 text-center">
      <h1 className="font-heading text-6xl font-black tracking-tight text-amber sm:text-7xl">
        ALIBI
      </h1>
      <p className="mt-4 text-smoke text-sm uppercase tracking-[0.3em]">
        A word mystery
      </p>

      <div className="mt-12 max-w-xs text-left text-smoke text-sm leading-relaxed space-y-3">
        <p><span className="text-amber font-bold">9</span> words. <span className="text-amber font-bold">1</span> culprit.</p>
        <p>Eight words each have an alibi — they belong to just one category.</p>
        <p>One word has <span className="text-amber">no alibi</span>. It fits <em>every</em> category.</p>
        <p>Find it.</p>
      </div>

      <button
        onClick={onStart}
        className="mt-12 px-10 py-3 border border-amber text-amber uppercase tracking-[0.25em] text-sm font-bold
                   hover:bg-amber hover:text-noir transition-colors duration-200 cursor-pointer"
      >
        Open Case
      </button>

      <p className="mt-16 text-smoke/40 text-xs uppercase tracking-widest">
        8 guesses. No second chances.
      </p>
    </div>
  );
}
