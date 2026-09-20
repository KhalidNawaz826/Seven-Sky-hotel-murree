import React from 'react';
import { Mountain, Flame, ArrowUpDown, Footprints } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const Experience: React.FC = () => {
  const experiences = [
    {
      icon: <Mountain className="w-6 h-6 text-gold-400" />,
      title: 'Wake Up Above the Clouds',
      description: 'Greet the morning with crisp Himalayan breezes and panoramic views of Murree’s evergreen pine hills right from your private terrace.'
    },
    {
      icon: <Flame className="w-6 h-6 text-gold-400" />,
      title: 'Warmth Through Every Season',
      description: 'Reliable central radiator heating and 24/7 instant hot water ensure deep comfort during freezing winter snowfall and crisp autumn evenings.'
    },
    {
      icon: <ArrowUpDown className="w-6 h-6 text-gold-400" />,
      title: 'Effortless Accessibility',
      description: 'A dedicated passenger elevator connects underground parking to all guest rooms—making stairs a thing of the past for families and elders.'
    },
    {
      icon: <Footprints className="w-6 h-6 text-gold-400" />,
      title: 'Steps from Mall Road',
      description: 'Enjoy the vibrant shops, tea stalls, and handicraft bazaars of GPO Chowk and Mall Road within an easy 2 to 5-minute stroll.'
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-forest-950 text-white overflow-hidden">
      {/* Background Subtle Pine Silhouette Accent */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C4A265_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading
          light
          subtitle="The Murree Experience"
          title="Designed for Peaceful Mountain Living"
          description="We believe mountain travel should be rejuvenating. At Seven Sky Hotel, the natural charm of Murree is paired with infrastructure that lets you unwind in complete peace."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-forest-900/60 border border-forest-800 p-8 rounded-lg relative hover:border-gold-500/50 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-forest-950/80 border border-forest-700 flex items-center justify-center mb-6 group-hover:border-gold-500/60 transition-colors">
                {exp.icon}
              </div>
              <h3 className="font-serif text-xl font-medium text-white mb-3 group-hover:text-gold-300 transition-colors">
                {exp.title}
              </h3>
              <p className="text-sm text-ivory-300/80 leading-relaxed font-light">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
