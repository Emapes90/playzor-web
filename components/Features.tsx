'use client';

import { features } from '@/lib/data';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white mb-3 sm:mb-4">
            Engineered for Performance
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base px-2 sm:px-0">
            We don&apos;t cut corners. Every server is optimized for the best possible Minecraft experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`relative p-5 sm:p-8 rounded-2xl border transition-all duration-300 group ${
                feature.highlight 
                  ? 'bg-zinc-900/80 border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)]' 
                  : 'bg-zinc-950/50 border-white/5 hover:border-white/10'
              }`}
            >
              {feature.highlight && (
                <>
                  <Star className="absolute -top-3 -left-3 w-5 sm:w-6 h-5 sm:h-6 text-zinc-400 fill-zinc-400 rotate-12" />
                  <Star className="absolute -top-2 left-4 w-2.5 sm:w-3 h-2.5 sm:h-3 text-zinc-600 fill-zinc-600 -rotate-12" />
                  <Star className="absolute top-8 -left-2 w-2 h-2 text-zinc-600 fill-zinc-600 rotate-45 hidden sm:block" />
                  
                  <Star className="absolute -top-3 -right-3 w-5 sm:w-6 h-5 sm:h-6 text-zinc-400 fill-zinc-400 -rotate-12" />
                  <Star className="absolute -top-2 right-4 w-2.5 sm:w-3 h-2.5 sm:h-3 text-zinc-600 fill-zinc-600 rotate-12" />
                  <Star className="absolute top-8 -right-2 w-2 h-2 text-zinc-600 fill-zinc-600 -rotate-45 hidden sm:block" />
                  
                  <Star className="absolute -bottom-3 -left-3 w-5 sm:w-6 h-5 sm:h-6 text-zinc-400 fill-zinc-400 -rotate-12" />
                  <Star className="absolute -bottom-3 -right-3 w-5 sm:w-6 h-5 sm:h-6 text-zinc-400 fill-zinc-400 rotate-12" />
                </>
              )}

              <div className="flex items-start gap-3 sm:gap-4">
                <div className={`p-2.5 sm:p-3 rounded-lg shrink-0 ${feature.highlight ? 'bg-white text-black' : 'bg-white/5 text-white'} transition-colors`}>
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{feature.title}</h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
