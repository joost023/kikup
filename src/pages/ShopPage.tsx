import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Gamepad2, Box, Bell } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4">
          <div className="min-h-[80vh] flex items-center justify-center">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-20 h-20 bg-[#38F8AC]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <ShoppingBag className="w-10 h-10 text-[#38F8AC]" />
                </div>

                <h1 className="text-4xl font-bold mb-6">
                  Onze winkel opent binnenkort!
                </h1>
                
                <p className="text-gray-400 text-lg mb-12">
                  We zijn hard bezig met het ontwikkelen van onze webwinkel. 
                  Binnenkort kun je hier terecht voor zowel fysieke als digitale spellen.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-[#1C1C1E] p-6 rounded-xl">
                    <div className="w-12 h-12 bg-[#38F8AC]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Gamepad2 className="w-6 h-6 text-[#38F8AC]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Digitale Spellen</h3>
                    <p className="text-gray-400">
                      Download en speel onze educatieve games direct op je apparaat
                    </p>
                  </div>

                  <div className="bg-[#1C1C1E] p-6 rounded-xl">
                    <div className="w-12 h-12 bg-[#38F8AC]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Box className="w-6 h-6 text-[#38F8AC]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Fysieke Spellen</h3>
                    <p className="text-gray-400">
                      Ontdek onze collectie interactieve spellen en leermaterialen
                    </p>
                  </div>
                </div>

                <div className="bg-[#1C1C1E] p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
                    <Bell className="w-5 h-5 text-[#38F8AC]" />
                    Blijf op de hoogte
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Wil je als eerste weten wanneer onze winkel opent? 
                    Laat je e-mailadres achter en we houden je op de hoogte!
                  </p>
                  <form className="flex gap-4" onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="email"
                      placeholder="Je e-mailadres"
                      className="flex-1 px-4 py-2 rounded-lg bg-black border border-gray-800 focus:outline-none focus:border-[#38F8AC]"
                    />
                    <Button className="bg-[#38F8AC] text-black hover:bg-[#2ce49d]">
                      Aanmelden
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}