import React from 'react';
import { motion } from 'motion/react';
import { Database, Activity, Layers, Bot, Zap } from 'lucide-react';

const Node = ({ icon, label, delay = 0, color = "#34d399", rgbColor = "52,211,153", showLabel = true }: { icon: React.ReactNode, label: string, delay?: number, color?: string, rgbColor?: string, showLabel?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    className="flex flex-col items-center justify-center gap-2 z-10 w-full max-w-[90px] mx-auto"
  >
    <motion.div 
      className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-600 text-gray-300 shadow-lg"
      animate={{ 
        borderColor: ["#4b5563", color, "#4b5563"],
        boxShadow: [`0 0 0px rgba(${rgbColor},0)`, `0 0 20px rgba(${rgbColor},0.4)`, `0 0 0px rgba(${rgbColor},0)`]
      }}
      transition={{ duration: 2, repeat: Infinity, delay: delay }}
    >
      {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6 md:w-8 md:h-8" })}
    </motion.div>
    {showLabel && <span className="text-[10px] md:text-xs lg:text-sm font-medium text-gray-400 whitespace-nowrap text-center">{label}</span>}
  </motion.div>
);

export const ContextInfographic = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-full h-full max-h-[500px] py-6 md:py-8 bg-gray-900/40 border border-gray-700/50 rounded-3xl p-4 md:p-6 lg:p-10 flex flex-col md:flex-row items-center md:items-stretch justify-between overflow-hidden shadow-2xl gap-2 md:gap-0">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

        {/* Top/Left Column: Data Sources */}
        <div className="grid grid-cols-3 md:grid-cols-1 md:grid-rows-3 relative z-10 w-full md:w-auto h-auto md:h-full items-center gap-2 md:gap-6">
          <div className="flex justify-center items-center h-full"><Node icon={<Activity />} label="Live Events" delay={0.5} showLabel={false} /></div>
          <div className="flex justify-center items-center h-full"><Node icon={<Database />} label="Databases" delay={0.7} showLabel={false} /></div>
          <div className="flex justify-center items-center h-full"><Node icon={<Layers />} label="Log Streams" delay={0.9} showLabel={false} /></div>
        </div>

        {/* Connection 1 (Data Sources -> Timeplus) */}
        <div className="relative z-0 flex-1 min-h-[4rem] md:min-h-0 md:min-w-[4rem] w-full md:w-auto h-16 md:h-full mx-0 md:mx-4 my-2 md:my-0">
          {/* Mobile SVG */}
          <svg className="md:hidden w-full h-full absolute inset-0" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M 16.6,0 C 16.6,50 50,50 50,100" fill="none" stroke="#1f2937" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            <path d="M 50,0 L 50,100" fill="none" stroke="#1f2937" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            <path d="M 83.3,0 C 83.3,50 50,50 50,100" fill="none" stroke="#1f2937" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            
            <motion.path d="M 16.6,0 C 16.6,50 50,50 50,100" fill="none" stroke="#34D399" strokeWidth="10" strokeLinecap="round" vectorEffect="non-scaling-stroke" strokeDasharray="1 150" animate={{ strokeDashoffset: [150, -15] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} style={{ filter: 'drop-shadow(0 0 8px rgba(52,211,153,1))' }} />
            <motion.path d="M 50,0 L 50,100" fill="none" stroke="#34D399" strokeWidth="10" strokeLinecap="round" vectorEffect="non-scaling-stroke" strokeDasharray="1 150" animate={{ strokeDashoffset: [150, -15] }} transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 0.6 }} style={{ filter: 'drop-shadow(0 0 8px rgba(52,211,153,1))' }} />
            <motion.path d="M 83.3,0 C 83.3,50 50,50 50,100" fill="none" stroke="#34D399" strokeWidth="10" strokeLinecap="round" vectorEffect="non-scaling-stroke" strokeDasharray="1 150" animate={{ strokeDashoffset: [150, -15] }} transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 1.2 }} style={{ filter: 'drop-shadow(0 0 8px rgba(52,211,153,1))' }} />
          </svg>

          {/* Desktop SVG */}
          <svg className="hidden md:block w-full h-full absolute inset-0" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M 0,16.6 C 50,16.6 50,50 100,50" fill="none" stroke="#1f2937" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            <path d="M 0,50 L 100,50" fill="none" stroke="#1f2937" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            <path d="M 0,83.3 C 50,83.3 50,50 100,50" fill="none" stroke="#1f2937" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            
            <motion.path d="M 0,16.6 C 50,16.6 50,50 100,50" fill="none" stroke="#34D399" strokeWidth="10" strokeLinecap="round" vectorEffect="non-scaling-stroke" strokeDasharray="1 250" animate={{ strokeDashoffset: [250, -15] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} style={{ filter: 'drop-shadow(0 0 8px rgba(52,211,153,1))' }} />
            <motion.path d="M 0,50 L 100,50" fill="none" stroke="#34D399" strokeWidth="10" strokeLinecap="round" vectorEffect="non-scaling-stroke" strokeDasharray="1 250" animate={{ strokeDashoffset: [250, -15] }} transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 0.6 }} style={{ filter: 'drop-shadow(0 0 8px rgba(52,211,153,1))' }} />
            <motion.path d="M 0,83.3 C 50,83.3 50,50 100,50" fill="none" stroke="#34D399" strokeWidth="10" strokeLinecap="round" vectorEffect="non-scaling-stroke" strokeDasharray="1 250" animate={{ strokeDashoffset: [250, -15] }} transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 1.2 }} style={{ filter: 'drop-shadow(0 0 8px rgba(52,211,153,1))' }} />
          </svg>
        </div>

        {/* Middle: Timeplus Context Layer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="relative z-10 flex flex-col items-center justify-center w-full md:w-auto h-auto md:h-full"
        >
          <motion.div
            animate={{ boxShadow: ['0 0 10px rgba(213,63,140,0)', '0 0 25px rgba(213,63,140,0.5)', '0 0 10px rgba(213,63,140,0)'] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="bg-gray-800 border-2 border-pink-500 rounded-2xl p-3 md:p-4 lg:p-6 flex flex-col items-center shadow-lg relative overflow-hidden w-2/3 md:w-auto max-w-[160px] md:max-w-none"
          >
            <div className="absolute inset-0 bg-pink-500/10"></div>
            <Zap className="text-pink-400 w-6 h-6 md:w-6 md:h-6 lg:w-10 lg:h-10 mb-1 md:mb-2 lg:mb-3 relative z-10" />
            <div className="font-bold text-gray-100 text-sm md:text-sm lg:text-xl relative z-10">Timeplus</div>
            <div className="text-[9px] md:text-[9px] lg:text-[10px] font-semibold text-pink-400 mt-1 uppercase tracking-wider relative z-10 whitespace-nowrap">Context Layer</div>
          </motion.div>
        </motion.div>

        {/* Connection 2 (Timeplus -> AI Agent) */}
        <div className="relative z-0 flex-1 min-h-[4rem] md:min-h-0 md:min-w-[4rem] w-full md:w-auto h-16 md:h-full mx-0 md:mx-4 my-2 md:my-0">
          {/* Mobile SVG */}
          <svg className="md:hidden w-full h-full absolute inset-0" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M 50,0 L 50,100" fill="none" stroke="#1f2937" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            <motion.path d="M 50,0 L 50,100" fill="none" stroke="#F472B6" strokeWidth="10" strokeLinecap="round" vectorEffect="non-scaling-stroke" strokeDasharray="1 100" animate={{ strokeDashoffset: [100, -15] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.5 }} style={{ filter: 'drop-shadow(0 0 8px rgba(244,114,182,1))' }} />
          </svg>

          {/* Desktop SVG */}
          <svg className="hidden md:block w-full h-full absolute inset-0" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M 0,50 L 100,50" fill="none" stroke="#1f2937" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            <motion.path d="M 0,50 L 100,50" fill="none" stroke="#F472B6" strokeWidth="10" strokeLinecap="round" vectorEffect="non-scaling-stroke" strokeDasharray="1 100" animate={{ strokeDashoffset: [100, -15] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.5 }} style={{ filter: 'drop-shadow(0 0 8px rgba(244,114,182,1))' }} />
          </svg>
        </div>

        {/* Bottom/Right Column: AI Agents */}
        <div className="relative z-10 w-full md:w-auto flex justify-center items-center h-auto md:h-full">
          <Node icon={<Bot />} label="AI Agent" delay={1.3} color="#f472b6" rgbColor="244,114,182" />
        </div>
      </div>
    </div>
  );
};
