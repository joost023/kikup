import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Brain, Users, Target, MessageSquare } from 'lucide-react';

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Bericht verzonden",
      description: "Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* About Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">
              Over <span className="text-[#38F8AC]">KIKUP</span>
            </h1>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
              KIKUP is opgericht met één doel: het combineren van cognitieve uitdagingen 
              met fysieke beweging voor een complete brain-body workout.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-[#1C1C1E] p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-[#38F8AC]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-[#38F8AC]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Cognitieve Training</h3>
                <p className="text-gray-400">
                  Onze spellen zijn ontworpen om je mentale scherpte te verbeteren
                  en je hersenen actief te houden.
                </p>
              </div>

              <div className="bg-[#1C1C1E] p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-[#38F8AC]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-[#38F8AC]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Voor Iedereen</h3>
                <p className="text-gray-400">
                  Of je nu jong of oud bent, onze spellen zijn toegankelijk
                  en uitdagend voor alle leeftijden.
                </p>
              </div>

              <div className="bg-[#1C1C1E] p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-[#38F8AC]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-[#38F8AC]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Doelgericht</h3>
                <p className="text-gray-400">
                  Elke oefening is zorgvuldig ontwikkeld om specifieke
                  vaardigheden te verbeteren.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-[#1C1C1E]">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-8">
                <MessageSquare className="w-8 h-8 text-[#38F8AC]" />
                <h2 className="text-3xl font-bold">Contact</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                      Naam
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-[#2C2C2E] border-gray-700 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                      E-mail
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-[#2C2C2E] border-gray-700 text-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                    Onderwerp
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-[#2C2C2E] border-gray-700 text-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Bericht
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-[#2C2C2E] border-gray-700 text-white min-h-[150px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#38F8AC] text-black hover:bg-[#2ce49d] font-medium py-6"
                >
                  Verstuur Bericht
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}