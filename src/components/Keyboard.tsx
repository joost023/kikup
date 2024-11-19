import { cn } from '@/lib/utils';

interface KeyboardProps {
  onKeyPress: (key: string) => void;
  guesses: string[];
  currentWord: string;
}

export function Keyboard({ onKeyPress, guesses, currentWord }: KeyboardProps) {
  const rows = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace'],
  ];

  const getKeyStatus = (key: string) => {
    const guessedLetters = guesses.join('').split('');
    
    if (guessedLetters.includes(key)) {
      if (currentWord.split('').some((letter, i) => 
        guesses.some(guess => guess[i] === key && letter === key)
      )) {
        return 'correct';
      }
      if (currentWord.includes(key)) {
        return 'present';
      }
      return 'absent';
    }
    return '';
  };

  return (
    <div className="grid gap-2">
      {rows.map((row, i) => (
        <div key={i} className="flex justify-center gap-1.5">
          {row.map((key) => {
            const status = key.length === 1 ? getKeyStatus(key) : '';
            
            return (
              <button
                key={key}
                onClick={() => onKeyPress(key)}
                className={cn(
                  "px-2 py-4 rounded text-base font-medium transition-colors min-w-[2.5rem] uppercase",
                  key.length > 1 && "px-4 text-sm min-w-[4rem]",
                  status === 'correct' && "bg-[#38F8AC] text-black",
                  status === 'present' && "bg-yellow-500",
                  status === 'absent' && "bg-[#3A3A3C]",
                  !status && "bg-[#2C2C2E] hover:bg-[#3A3A3C]"
                )}
              >
                {key === 'Backspace' ? '←' : key}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}