import { useState, useCallback } from 'react';
import Intro from './components/Intro';
import GameBoard from './components/GameBoard';
import RevealPanel from './components/RevealPanel';
import { generatePuzzle } from './api/generatePuzzle';

const SCREENS = { INTRO: 'intro', LOADING: 'loading', GAME: 'game', REVEAL: 'reveal' };

export default function App() {
  const [screen, setScreen] = useState(SCREENS.INTRO);
  const [puzzle, setPuzzle] = useState(null);
  const [won, setWon] = useState(false);

  const loadPuzzle = useCallback(async () => {
    setScreen(SCREENS.LOADING);
    try {
      const data = await generatePuzzle();
      setPuzzle(data);
      setWon(false);
      setScreen(SCREENS.GAME);
    } catch {
      setScreen(SCREENS.INTRO);
    }
  }, []);

  const handleWin = () => {
    setWon(true);
    setScreen(SCREENS.REVEAL);
  };

  const handleLose = () => {
    setWon(false);
    setScreen(SCREENS.REVEAL);
  };

  if (screen === SCREENS.INTRO) {
    return <Intro onStart={loadPuzzle} />;
  }

  if (screen === SCREENS.LOADING) {
    return (
      <div className="flex flex-col items-center justify-center min-h-dvh">
        <p className="font-heading text-2xl text-amber animate-pulse-slow">
          Opening case file...
        </p>
      </div>
    );
  }

  if (screen === SCREENS.GAME && puzzle) {
    return <GameBoard puzzle={puzzle} onWin={handleWin} onLose={handleLose} />;
  }

  if (screen === SCREENS.REVEAL && puzzle) {
    return <RevealPanel puzzle={puzzle} won={won} onNewCase={loadPuzzle} />;
  }

  return null;
}
