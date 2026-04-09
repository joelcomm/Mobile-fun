import { useState } from 'react';

export default function GameBoard({ puzzle, onWin, onLose }) {
  const [selected, setSelected] = useState(null);
  const [eliminated, setEliminated] = useState([]);
  const [lives, setLives] = useState(8);
  const [shaking, setShaking] = useState(null);

  const handleTileClick = (word) => {
    if (eliminated.includes(word)) return;
    setSelected(word === selected ? null : word);
  };

  const handleAccuse = () => {
    if (!selected) return;

    if (selected === puzzle.culprit) {
      onWin();
      return;
    }

    // Wrong guess
    setShaking(selected);
    setTimeout(() => setShaking(null), 500);

    const newEliminated = [...eliminated, selected];
    const newLives = lives - 1;

    setEliminated(newEliminated);
    setLives(newLives);
    setSelected(null);

    if (newLives <= 0) {
      setTimeout(() => onLose(), 600);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-dvh px-4 py-8">
      {/* Header */}
      <h2 className="font-heading text-3xl font-bold text-amber tracking-tight mb-2">
        ALIBI
      </h2>
      <p className="text-smoke text-xs uppercase tracking-[0.25em] mb-8">
        Find the culprit
      </p>

      {/* Lives */}
      <div className="flex gap-2 mb-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i < lives ? 'bg-amber' : 'bg-noir-border'
            }`}
          />
        ))}
      </div>

      {/* Word Grid */}
      <div className="grid grid-cols-3 gap-3 w-full max-w-sm mb-8">
        {puzzle.words.map((word) => {
          const isEliminated = eliminated.includes(word);
          const isSelected = word === selected;
          const isShaking = word === shaking;

          return (
            <button
              key={word}
              onClick={() => handleTileClick(word)}
              disabled={isEliminated}
              className={`
                relative py-4 px-2 text-sm font-bold uppercase tracking-wider
                border transition-all duration-200 cursor-pointer
                ${isShaking ? 'animate-shake' : ''}
                ${isEliminated
                  ? 'border-noir-border text-smoke/30 line-through cursor-default'
                  : isSelected
                    ? 'border-amber bg-amber/15 text-amber'
                    : 'border-noir-border text-chalk hover:border-smoke'
                }
              `}
            >
              {word}
            </button>
          );
        })}
      </div>

      {/* Accuse Button */}
      <button
        onClick={handleAccuse}
        disabled={!selected}
        className={`
          px-10 py-3 text-sm font-bold uppercase tracking-[0.25em]
          border transition-all duration-200 cursor-pointer
          ${selected
            ? 'border-amber text-amber hover:bg-amber hover:text-noir'
            : 'border-noir-border text-smoke/30 cursor-default'
          }
        `}
      >
        Accuse
      </button>

      {/* Remaining count */}
      <p className="mt-6 text-smoke/40 text-xs">
        {8 - eliminated.length} suspects remain
      </p>
    </div>
  );
}
