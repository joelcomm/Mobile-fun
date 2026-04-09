import { useEffect, useState } from 'react';

export default function RevealPanel({ puzzle, won, onNewCase }) {
  const [visibleCards, setVisibleCards] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    if (won) {
      // Reveal categories one by one
      const timers = puzzle.categories.map((_, i) =>
        setTimeout(() => setVisibleCards(i + 1), (i + 1) * 600)
      );
      const expTimer = setTimeout(
        () => setShowExplanation(true),
        (puzzle.categories.length + 1) * 600
      );
      return () => {
        timers.forEach(clearTimeout);
        clearTimeout(expTimer);
      };
    } else {
      setVisibleCards(puzzle.categories.length);
      setTimeout(() => setShowExplanation(true), 800);
    }
  }, [won, puzzle.categories]);

  return (
    <div className="flex flex-col items-center justify-center min-h-dvh px-4 py-8">
      {/* Result header */}
      <h2 className="font-heading text-4xl font-black tracking-tight mb-2">
        {won ? (
          <span className="text-amber">Case Closed</span>
        ) : (
          <span className="text-smoke">Case Cold</span>
        )}
      </h2>

      <p className="text-smoke text-sm mb-2">
        {won ? 'You found the culprit.' : 'The culprit got away.'}
      </p>

      {/* Culprit reveal */}
      <div className="my-6 px-8 py-4 border-2 border-amber text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-smoke mb-1">
          The culprit
        </p>
        <p className="font-heading text-3xl font-black text-amber">
          {puzzle.culprit}
        </p>
      </div>

      {/* Category cards */}
      <div className="w-full max-w-sm space-y-3 mb-6">
        {puzzle.categories.map((cat, i) => (
          <div
            key={cat.name}
            className={`border border-noir-border p-4 transition-all duration-500 ${
              i < visibleCards ? 'opacity-100 animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-smoke mb-2">
              {cat.name}
            </p>
            <div className="flex gap-2 flex-wrap">
              {cat.members.map((word) => (
                <span
                  key={word}
                  className={`px-3 py-1 text-xs font-bold uppercase tracking-wider border ${
                    word === puzzle.culprit
                      ? 'border-amber text-amber bg-amber/10'
                      : 'border-noir-border text-smoke'
                  }`}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div className="animate-fade-in-up max-w-sm text-center mb-8">
          <p className="text-smoke text-sm italic leading-relaxed">
            "{puzzle.culprit_explanation}"
          </p>
        </div>
      )}

      {/* New Case button */}
      {showExplanation && (
        <button
          onClick={onNewCase}
          className="animate-fade-in-up px-10 py-3 border border-amber text-amber uppercase tracking-[0.25em]
                     text-sm font-bold hover:bg-amber hover:text-noir transition-colors duration-200 cursor-pointer"
        >
          New Case
        </button>
      )}
    </div>
  );
}
