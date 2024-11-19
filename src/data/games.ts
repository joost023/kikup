import { Brain, Gamepad2, Target } from 'lucide-react';

export interface Game {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: typeof Brain | typeof Gamepad2 | typeof Target;
  image: string;
  link: string;
  features: string[];
  difficulty: 'Makkelijk' | 'Gemiddeld' | 'Moeilijk';
  category: 'Geheugen' | 'Taal' | 'Reactie';
  minPlayTime: number;
  recommended: boolean;
}

export const games: Game[] = [
  {
    id: 'woordspel',
    title: "Woordspel",
    description: "Test je woordkennis tegen de klok",
    longDescription: "Een uitdagend spel waarbij je woorden moet raden binnen een bepaalde tijd. Train je vocabulaire en denk strategisch na over je volgende zet.",
    icon: Gamepad2,
    link: "/speel",
    image: "https://images.unsplash.com/photo-1632501641765-e568d28b0015?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Tijdsdruk voor extra uitdaging",
      "Verschillende moeilijkheidsgraden",
      "Highscore systeem",
      "Dagelijks nieuwe woorden"
    ],
    difficulty: "Gemiddeld",
    category: "Taal",
    minPlayTime: 5,
    recommended: true
  },
  {
    id: 'memory',
    title: "Memory",
    description: "Train je geheugen met dit klassieke spel",
    longDescription: "Een moderne versie van het klassieke memory spel. Vind alle paren en train je geheugen terwijl je plezier hebt.",
    icon: Brain,
    link: "/memory",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Verschillende thema's",
      "Progressief moeilijker",
      "Persoonlijke statistieken",
      "Multiplayer modus"
    ],
    difficulty: "Makkelijk",
    category: "Geheugen",
    minPlayTime: 3,
    recommended: true
  },
  {
    id: 'woordzoeker',
    title: "Woordzoeker",
    description: "Zoek woorden in alle richtingen",
    longDescription: "Een dynamische woordzoeker die je uitdaagt om woorden te vinden in verschillende richtingen. Perfect voor het trainen van je observatievermogen.",
    icon: Target,
    link: "/woordzoeker",
    image: "https://images.unsplash.com/photo-1516562309708-05f3b2b2c238?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Verschillende categorieën",
      "Timer voor extra uitdaging",
      "Hints beschikbaar",
      "Leaderboard"
    ],
    difficulty: "Gemiddeld",
    category: "Taal",
    minPlayTime: 4,
    recommended: false
  }
];