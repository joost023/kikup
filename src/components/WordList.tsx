import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface WordListProps {
  words: string[];
  foundWords: string[];
}

export function WordList({ words, foundWords }: WordListProps) {
  return (
    <div className="bg-[#2C2C2E] p-6 rounded-xl">
      <h2 className="text-xl font-bold mb-4 text-[#38F8AC]">Te zoeken woorden</h2>
      <div className="grid grid-cols-2 gap-4">
        {words.map((word) => {
          const isFound = foundWords.includes(word);
          
          return (
            <motion.div
              key={word}
              className={cn(
                "px-4 py-2 rounded-lg text-lg font-medium",
                isFound 
                  ? "bg-[#38F8AC] text-black" 
                  : "bg-[#3A3A3C] text-white"
              )}
              animate={isFound ? {
                scale: [1, 1.1, 1],
                transition: { duration: 0.3 }
              } : {}}
            >
              {word}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}