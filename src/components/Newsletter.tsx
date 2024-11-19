import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Bell } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Ongeldig e-mailadres",
        description: "Voer een geldig e-mailadres in",
        variant: "destructive"
      });
      return;
    }

    // Get existing subscriptions
    const existingSubscriptions = JSON.parse(localStorage.getItem('newsletter_subscriptions') || '[]');
    
    // Check if email already exists
    if (existingSubscriptions.includes(email)) {
      toast({
        title: "Al ingeschreven",
        description: "Dit e-mailadres is al ingeschreven voor de nieuwsbrief",
        variant: "destructive"
      });
      return;
    }

    // Add new subscription
    const updatedSubscriptions = [...existingSubscriptions, email];
    localStorage.setItem('newsletter_subscriptions', JSON.stringify(updatedSubscriptions));

    // Show success message
    toast({
      title: "Succesvol ingeschreven!",
      description: "Je ontvangt binnenkort onze nieuwsbrief",
    });

    // Reset form
    setEmail('');
  };

  return (
    <div className="bg-[#1C1C1E] p-8 rounded-xl">
      <div className="flex items-center gap-3 mb-4">
        <Bell className="w-5 h-5 text-[#38F8AC]" />
        <h3 className="text-xl font-bold">Blijf op de hoogte</h3>
      </div>
      <p className="text-gray-400 mb-6">
        Schrijf je in voor onze nieuwsbrief en ontvang updates over nieuwe spellen en aanbiedingen!
      </p>
      <form onSubmit={handleSubmit} className="flex gap-4">
        <Input
          type="email"
          placeholder="Je e-mailadres"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-[#2C2C2E] border-gray-700 text-white focus:border-[#38F8AC]"
          required
        />
        <Button 
          type="submit" 
          className="bg-[#38F8AC] text-black hover:bg-[#2ce49d]"
        >
          Aanmelden
        </Button>
      </form>
    </div>
  );
}