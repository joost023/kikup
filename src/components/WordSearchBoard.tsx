import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface WordSearchBoardProps {
  grid: string[][];
  selectedCells: [number, number][];
  onCellClick: (row: number, col: number) => void;
  onMouseEnter: (row: number, col: number) => void;
  onMouseUp: () => void;
}

export function WordSearchBoard({ 
  grid, 
  selectedCells, 
  onCellClick, 
  onMouseEnter,
  onMouseUp
}: WordSearchBoardProps) {
  if (!grid || !grid[0]) {
    return <div>Loading...</div>;
  }

  return (
    <div 
      className="grid gap-1 max-w-2xl mx-auto"
      style={{ 
        gridTemplateColumns: `repeat(${grid[0].length}, minmax(0, 1fr))` 
      }}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      {grid.map((row, rowIndex) => (
        row.map((letter, colIndex) => {
          const isSelected = selectedCells.some(
            ([r, c]) => r === rowIndex && c === colIndex
          );

          return (
            <motion.div
              key={`${rowIndex}-${colIndex}`}
              className={cn(
                "w-10 h-10 flex items-center justify-center rounded-lg text-xl font-bold cursor-pointer select-none",
                "transition-colors duration-200",
                isSelected 
                  ? "bg-[#38F8AC] text-black" 
                  : "bg-[#2C2C2E] text-white hover:bg-[#3A3A3C]"
              )}
              whileHover={{ scale: isSelected ? 1 : 1.05 }}
              onMouseDown={() => onCellClick(rowIndex, colIndex)}
              onMouseEnter={() => onMouseEnter(rowIndex, colIndex)}
            >
              {letter}
            </motion.div>
          );
        })
      ))}
    </div>
  );
}