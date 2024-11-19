import { useEffect } from 'react';
import { GameBoard } from '@/components/GameBoard';
import { Keyboard } from '@/components/Keyboard';
import { Timer } from '@/components/Timer';
import { HighScores } from '@/components/HighScores';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { NameDialog } from '@/components/NameDialog';
import { getLocalHighScores, saveHighScore } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useGameState } from '@/hooks/useGameState';
import { useConfetti } from '@/hooks/useConfetti';
import { useState } from 'react';

export default function GamePage() {
  const [highScores, setHighScores] = useState(getLocalHighScores());
  const { triggerWinAnimation } = useConfetti();
  const {
    currentWord,
    guesses,
    currentGuess,
    isWinner,
    timerRunning,
    showNameDialog,
    currentTime,
    handleTimerComplete,
    setShowNameDialog,
    resetGame,
    handleKeyPress
  } = useGameState();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleKeyPress('Enter');
      } else if (e.key === 'Backspace') {
        handleKeyPress('Backspace');
      } else if (/^[A-Za-z]$/.test(e.key)) {
        handleKeyPress(e.key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyPress]);

  useEffect(() => {
    if (isWinner) {
      triggerWinAnimation();
    }
  }, [isWinner, triggerWinAnimation]);

  const handleNameSubmit = (name: string) => {
    const newScore = {
      name,
      time: currentTime,
      word: currentWord,
      date: new Date().toLocaleDateString(),
    };
    const updatedScores = saveHighScore(newScore);
    setHighScores(updatedScores);
    setShowNameDialog(false);
    resetGame();
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-[#1C1C1E] rounded-2xl p-8">
            <div className="flex justify-between items-center mb-12">
              <button className="flex items-center gap-2 px-4 py-2 bg-[#2C2C2E] rounded-lg text-white">
                5 letters
                <ChevronDown className="w-4 h-4" />
              </button>
              <Button
                onClick={resetGame}
                className="bg-[#38F8AC] text-black hover:bg-[#2ce49d] px-6 py-2 rounded-lg font-medium"
              >
                Nieuw spel
              </Button>
            </div>
            
            <div className="text-center mb-12">
              <p className="text-white mb-2">Tijd</p>
              <Timer isRunning={timerRunning} onComplete={handleTimerComplete} />
            </div>

            <GameBoard 
              currentWord={currentWord}
              guesses={guesses}
              currentGuess={currentGuess}
              isWinner={isWinner}
            />
            
            <div className="mt-12">
              <Keyboard 
                onKeyPress={handleKeyPress}
                guesses={guesses}
                currentWord={currentWord}
              />
            </div>
          </div>
          
          {highScores.length > 0 && (
            <HighScores scores={highScores} />
          )}
        </div>
      </main>

      <Footer />
      
      <NameDialog 
        isOpen={showNameDialog} 
        onSubmit={handleNameSubmit}
      />
    </div>
  );
}