import React from 'react';
import { Heart, Brain, Battery } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section className="py-12 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Benefits of Alternating Between Sitting and Standing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard
            icon={<Heart className="w-12 h-12 text-red-500" />}
            title="Improved Cardiovascular Health"
            description="Alternating between sitting and standing can help improve blood circulation and reduce the risk of heart disease."
          />
          <BenefitCard
            icon={<Brain className="w-12 h-12 text-blue-500" />}
            title="Enhanced Productivity"
            description="Changing postures throughout the day can increase energy levels, focus, and overall productivity."
          />
          <BenefitCard
            icon={<Battery className="w-12 h-12 text-green-500" />}
            title="Reduced Fatigue"
            description="Regular movement between sitting and standing can help reduce muscle fatigue and discomfort associated with prolonged static postures."
          />
        </div>
      </div>
    </section>
  );
};

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default Benefits;