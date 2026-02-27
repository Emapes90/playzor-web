'use client';

import { motion } from 'motion/react';

export default function Locations() {
  return (
    <section id="locations" className="py-16 sm:py-24 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white mb-3 sm:mb-4">
            Global Network
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
            Low latency nodes deployed in strategic locations.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {/* India Location */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-white/20 hover:bg-zinc-900 transition-all text-center sm:text-left"
          >
            <div className="w-10 h-7 sm:w-12 sm:h-8 relative overflow-hidden rounded shadow-sm ring-1 ring-white/10 transition-all duration-500 shrink-0">
               {/* India Flag SVG */}
               <svg viewBox="0 0 225 150" className="w-full h-full object-cover">
                 <rect width="225" height="150" fill="#f93"/>
                 <rect y="50" width="225" height="50" fill="#fff"/>
                 <rect y="100" width="225" height="50" fill="#128807"/>
                 <g transform="translate(112.5,75)">
                   <circle r="20" fill="none" stroke="#008" strokeWidth="2"/>
                   <circle r="2" fill="#008"/>
                 </g>
               </svg>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-sm sm:text-lg font-bold text-white">Mumbai, India</h3>
              <div className="flex items-center gap-1.5 sm:gap-2 mt-1 justify-center sm:justify-start">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-500 text-[10px] sm:text-xs font-mono uppercase tracking-wider font-medium">
                  Operational
                </span>
              </div>
            </div>
          </motion.div>

          {/* Singapore Location */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-white/20 hover:bg-zinc-900 transition-all text-center sm:text-left"
          >
            <div className="w-10 h-7 sm:w-12 sm:h-8 relative overflow-hidden rounded shadow-sm ring-1 ring-white/10 transition-all duration-500 shrink-0">
               {/* Singapore Flag SVG */}
               <svg viewBox="0 0 225 150" className="w-full h-full object-cover">
                 <rect width="225" height="150" fill="#fff"/>
                 <rect y="75" width="225" height="75" fill="#ed2939"/>
                 <path fill="#fff" d="M93.75,37.5 L66.5625,23.4375 L66.5625,51.5625 L93.75,37.5 M50.625,19.6875 A17.8125,17.8125 0 0,1 50.625,55.3125 A21.5625,21.5625 0 1,0 50.625,19.6875"/>
               </svg>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-sm sm:text-lg font-bold text-white">Singapore, SG</h3>
              <div className="flex items-center gap-1.5 sm:gap-2 mt-1 justify-center sm:justify-start">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-500 text-[10px] sm:text-xs font-mono uppercase tracking-wider font-medium">
                  Operational
                </span>
              </div>
            </div>
          </motion.div>

          {/* Hong Kong Location (Unavailable) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-white/20 hover:bg-zinc-900 transition-all text-center sm:text-left"
          >
            <div className="absolute -top-2.5 sm:-top-3 right-2 sm:right-4 bg-red-500/10 border border-red-500/20 backdrop-blur-md px-2 sm:px-3 py-0.5 sm:py-1 rounded-full flex items-center gap-1 sm:gap-1.5">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-red-500" />
              <span className="text-red-500 text-[8px] sm:text-[10px] font-bold uppercase tracking-wider">Unavailable</span>
            </div>

            <div className="w-10 h-7 sm:w-12 sm:h-8 relative overflow-hidden rounded shadow-sm ring-1 ring-white/10 transition-all duration-500 shrink-0">
               {/* Hong Kong Flag SVG */}
               <svg viewBox="0 0 900 600" className="w-full h-full object-cover">
                 <rect width="900" height="600" fill="#DE2910"/>
                 <path fill="#fff" d="M450,300 l-26.6,-48.6 15.6,24.6 -28.2,-15.6 26.6,48.6 -15.6,-24.6 28.2,15.6 z M450,300 l48.6,-26.6 -24.6,15.6 15.6,-28.2 -48.6,26.6 24.6,-15.6 -15.6,28.2 z M450,300 l26.6,48.6 -15.6,-24.6 28.2,15.6 -26.6,-48.6 15.6,24.6 -28.2,-15.6 z M450,300 l-48.6,26.6 24.6,-15.6 -15.6,28.2 48.6,-26.6 -24.6,15.6 15.6,-28.2 z M450,300 l-26.6,-48.6 15.6,24.6 -28.2,-15.6 26.6,48.6 -15.6,-24.6 28.2,15.6 z" transform="scale(0.7) translate(190, 130)"/>
                 <circle cx="450" cy="300" r="100" fill="none" stroke="white" strokeWidth="0" /> 
                 {/* Simplified Bauhinia - using a simple star/flower shape for recognition at small size */}
                 <path d="M450 340 L430 390 L400 350 L350 360 L380 320 L340 290 L390 280 L400 230 L430 270 L480 250 L460 300 L510 320 L460 340 Z" fill="white" transform="translate(0, -20) scale(0.6) translate(300, 200)" />
               </svg>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-sm sm:text-lg font-bold text-zinc-400">Hong Kong, CN</h3>
              <div className="flex items-center gap-1.5 sm:gap-2 mt-1 justify-center sm:justify-start">
                <span className="text-zinc-600 text-[10px] sm:text-xs font-mono uppercase tracking-wider font-medium">
                  High Demand
                </span>
              </div>
            </div>
          </motion.div>

          {/* New York Location (Unavailable) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group relative flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-white/20 hover:bg-zinc-900 transition-all text-center sm:text-left"
          >
            <div className="absolute -top-2.5 sm:-top-3 right-2 sm:right-4 bg-red-500/10 border border-red-500/20 backdrop-blur-md px-2 sm:px-3 py-0.5 sm:py-1 rounded-full flex items-center gap-1 sm:gap-1.5">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-red-500" />
              <span className="text-red-500 text-[8px] sm:text-[10px] font-bold uppercase tracking-wider">Unavailable</span>
            </div>

            <div className="w-10 h-7 sm:w-12 sm:h-8 relative overflow-hidden rounded shadow-sm ring-1 ring-white/10 transition-all duration-500 shrink-0">
               {/* US Flag SVG */}
               <svg viewBox="0 0 1235 650" className="w-full h-full object-cover">
                 <rect width="1235" height="650" fill="#B22234"/>
                 <rect width="1235" height="50" fill="#fff" y="50"/>
                 <rect width="1235" height="50" fill="#fff" y="150"/>
                 <rect width="1235" height="50" fill="#fff" y="250"/>
                 <rect width="1235" height="50" fill="#fff" y="350"/>
                 <rect width="1235" height="50" fill="#fff" y="450"/>
                 <rect width="1235" height="50" fill="#fff" y="550"/>
                 <rect width="494" height="350" fill="#3C3B6E"/>
                 {/* Simplified stars */}
                 <path d="M25 25h444v300H25z" fill="none"/> 
                 <circle cx="50" cy="40" r="15" fill="white" />
                 <circle cx="100" cy="40" r="15" fill="white" />
                 <circle cx="150" cy="40" r="15" fill="white" />
               </svg>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-sm sm:text-lg font-bold text-zinc-400">New York, US</h3>
              <div className="flex items-center gap-1.5 sm:gap-2 mt-1 justify-center sm:justify-start">
                <span className="text-zinc-600 text-[10px] sm:text-xs font-mono uppercase tracking-wider font-medium">
                  High Demand
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
