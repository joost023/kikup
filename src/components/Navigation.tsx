import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export function Navigation() {
  return (
    <nav className="border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-[#38F8AC] text-2xl font-bold">
            <Logo className="w-24" />
          </Link>
          <div className="flex gap-8">
            <Link to="/spellen" className="text-gray-300 hover:text-[#38F8AC]">
              Spellen
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-[#38F8AC]">
              Blog
            </Link>
            <Link to="/winkel" className="text-gray-300 hover:text-[#38F8AC]">
              Winkel
            </Link>
            <Link to="/over-ons" className="text-gray-300 hover:text-[#38F8AC]">
              Over ons
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}