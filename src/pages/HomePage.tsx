import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';
import { Brain, Zap, Target, ArrowRight, Gamepad2, Star, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

const games = [
  {
    title: "Woordspel",
    description: "Test je woordkennis tegen de klok. Raad het woord in zo min mogelijk beurten!",
    icon: <Gamepad2 className="w-8 h-8 text-[#38F8AC]" />,
    link: "/speel",
    image: "https://images.unsplash.com/photo-1632501641765-e568d28b0015?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Memory",
    description: "Train je geheugen met dit klassieke spel in een modern jasje. Vind alle paren!",
    icon: <Brain className="w-8 h-8 text-[#38F8AC]" />,
    link: "/memory",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Woordzoeker",
    description: "Zoek woorden in alle richtingen. Hoe sneller je bent, hoe hoger je score!",
    icon: <Target className="w-8 h-8 text-[#38F8AC]" />,
    link: "/woordzoeker",
    image: "https://images.unsplash.com/photo-1516562309708-05f3b2b2c238?q=80&w=1000&auto=format&fit=crop"
  }
];

const reviews = [
  {
    name: "Emma de Vries",
    role: "Docent Basisschool",
    content: "Perfect voor in de klas! De leerlingen zijn super enthousiast en leren spelenderwijs.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    name: "Lucas Bakker",
    role: "Ouder",
    content: "Mijn kinderen zijn dol op de spellen. Ze bewegen meer én trainen hun hersenen!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    name: "Sophie Jansen",
    role: "Kindercoach",
    content: "Een geweldige combinatie van fysieke activiteit en cognitieve uitdaging.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop"
  }
];

const products = [
  {
    name: "HersenBoost Balansbord",
    price: "€149.99",
    status: "Binnenkort beschikbaar",
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=500&auto=format&fit=crop"
  },
  {
    name: "NeuroVlug Springtouw",
    price: "€29.99",
    status: "Binnenkort beschikbaar",
    image: "https://images.unsplash.com/photo-1434596922112-19c563067271?q=80&w=500&auto=format&fit=crop"
  },
  {
    name: "CogniFit Reactietegels",
    price: "€199.99",
    status: "Binnenkort beschikbaar",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=500&auto=format&fit=crop"
  },
  {
    name: "GeheugenDoolhof Bewegingsmat",
    price: "€89.99",
    status: "Binnenkort beschikbaar",
    image: "https://images.unsplash.com/photo-1580501170888-80668882ca0c?q=80&w=500&auto=format&fit=crop"
  }
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="min-h-[80vh] relative flex items-center">
          <div className="absolute inset-0 bg-gradient-to-b from-[#38F8AC]/10 to-transparent" />
          
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Logo className="h-16 mx-auto mb-8" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center gap-8 mb-8"
              >
                <div className="flex items-center gap-2">
                  <Brain className="w-6 h-6 text-[#38F8AC]" />
                  <span className="text-gray-400">Train je brein</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-[#38F8AC]" />
                  <span className="text-gray-400">Verbeter reflexen</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-[#38F8AC]" />
                  <span className="text-gray-400">Bereik doelen</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-6xl font-bold mb-6"
              >
                Blijf mentaal en fysiek
                <span className="block text-[#38F8AC]">in beweging</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex justify-center gap-4"
              >
                <Link to="/speel">
                  <Button 
                    size="lg"
                    className="bg-[#38F8AC] text-black hover:bg-[#2ce49d] px-8 py-6 text-lg"
                  >
                    Start direct
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Games Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Onze Spellen</h2>
              <p className="text-gray-400">
                Ontdek onze collectie van uitdagende en leerzame spellen
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {games.map((game) => (
                <Link 
                  key={game.title} 
                  to={game.link}
                  className="group relative overflow-hidden rounded-xl bg-black"
                >
                  <div className="absolute inset-0">
                    <img 
                      src={game.image} 
                      alt={game.title}
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity"
                    />
                  </div>
                  <div className="relative p-8 min-h-[400px] flex flex-col">
                    <div className="w-16 h-16 bg-black/50 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                      {game.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{game.title}</h3>
                    <p className="text-gray-300 mb-8">{game.description}</p>
                    <Button className="bg-[#38F8AC] text-black hover:bg-[#2ce49d] mt-auto self-start">
                      Speel nu
                    </Button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 bg-[#1C1C1E]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Wat anderen zeggen</h2>
              <p className="text-gray-400">
                Ontdek waarom onze gebruikers zo enthousiast zijn
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <div 
                  key={index}
                  className="bg-black p-8 rounded-xl relative"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold">{review.name}</h3>
                      <p className="text-gray-400 text-sm">{review.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#38F8AC] text-[#38F8AC]" />
                    ))}
                  </div>
                  <p className="text-gray-300">{review.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Binnenkort verkrijgbaar</h2>
              <p className="text-gray-400">
                Ontdek onze nieuwe producten die binnenkort beschikbaar zijn
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div 
                  key={product.name} 
                  className="bg-[#1C1C1E] rounded-xl overflow-hidden group hover:scale-[1.02] transition-transform"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold mb-2">{product.name}</h3>
                    <p className="text-[#38F8AC] font-bold mb-2">{product.price}</p>
                    <p className="text-sm text-gray-400">{product.status}</p>
                    <Button 
                      className="w-full mt-4 bg-[#38F8AC] text-black hover:bg-[#2ce49d]"
                      disabled
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Binnenkort beschikbaar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}