import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import GamesPage from './pages/GamesPage';
import MemoryPage from './pages/MemoryPage';
import WordSearchPage from './pages/WordSearchPage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import { Toaster } from './components/ui/toaster';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/spellen" element={<GamesPage />} />
        <Route path="/speel" element={<GamePage />} />
        <Route path="/memory" element={<MemoryPage />} />
        <Route path="/woordzoeker" element={<WordSearchPage />} />
        <Route path="/winkel" element={<ShopPage />} />
        <Route path="/over-ons" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
      </Routes>
      <Toaster />
    </div>
  );
}