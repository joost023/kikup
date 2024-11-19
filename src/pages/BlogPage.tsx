import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { getBlogPosts } from '@/lib/tina';
import type { Post } from '@/types/blog';
import { cn } from '@/lib/utils';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { nl } from 'date-fns/locale';

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadPosts() {
      try {
        const fetchedPosts = await getBlogPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error loading blog posts:", error);
      } finally {
        setLoading(false);
      }
    }
    
    loadPosts();
  }, []);
  
  // Get unique tags
  const tags = Array.from(new Set(posts.flatMap(post => post.tags)));
  
  // Filter posts based on selected tag
  const filteredPosts = selectedTag 
    ? posts.filter(post => post.tags.includes(selectedTag))
    : posts;

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex flex-col">
        <Navigation />
        <main className="flex-grow container mx-auto px-4 py-16">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-800 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-800 rounded w-2/4 mb-8"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="bg-gray-800 rounded-xl h-[400px]"></div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-gray-400 mb-8">
            Ontdek de laatste inzichten over beweging, leren en ontwikkeling
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  tag === selectedTag
                    ? "bg-[#38F8AC] text-black"
                    : "bg-[#1C1C1E] text-white hover:bg-[#2C2C2E]"
                )}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Blog Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group bg-[#1C1C1E] rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {format(parseISO(post.date), 'd MMMM yyyy', { locale: nl })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      5 min
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-2 group-hover:text-[#38F8AC] transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{post.author.name}</p>
                      <p className="text-sm text-gray-400">{post.author.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-[#38F8AC] mt-6 group-hover:gap-3 transition-all">
                    <span>Lees meer</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}