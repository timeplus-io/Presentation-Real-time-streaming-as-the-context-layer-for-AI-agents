import React, { useState } from 'react';
import { Deck } from './components/Deck';
import { TimeplusLogo } from './components/TimeplusLogo';
import { ContextInfographic } from './components/ContextInfographic';
import { Clock, Zap, Timer, GitMerge, Database, Bell, AlertTriangle, TrendingDown, TrendingUp, BarChart3, Quote, Shield, Activity, Settings, Users, Truck, Lightbulb, Rocket, Bot, Layers, Server, Terminal, Code, BrainCog, List, RefreshCw, Search, Braces, Code2, Pencil, Type, Boxes, Radio, Tag } from 'lucide-react';
import { KafkaIcon, FlinkIcon, GoogleIcon, PostgresIcon, LangGraphIcon } from './components/TechIcons';
import { motion } from 'motion/react';

const StreamingPipelineDiagram = () => {
  const steps = [
    {
      id: 1,
      title: "Ingest",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D53F8C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      ),
      desc: "Webhooks, CDC, IoT"
    },
    {
      id: 2,
      title: "Process",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      desc: "Streaming SQL, Semantic ETL"
    },
    {
      id: 3,
      title: "Store",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D53F8C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
      desc: "Live Context, TTL"
    },
    {
      id: 4,
      title: "Serve",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 8V4H8" />
          <rect x="4" y="8" width="16" height="12" rx="2" ry="2" />
          <path d="M2 14h2" />
          <path d="M20 14h2" />
          <path d="M15 13v2" />
          <path d="M9 13v2" />
        </svg>
      ),
      desc: "MCP, System Prompt"
    },
  ];

  return (
    <div className="relative w-full py-4 mt-2">
      {/* Connecting Line */}
      <div className="absolute top-12 left-[12%] right-[12%] h-1 bg-gray-700 z-50 hidden md:block" />

      {/* Animated Data Packets */}
      <div className="absolute top-12 left-[12%] right-[12%] h-1 z-50 hidden md:block">
        <motion.div
          className="w-3 h-3 bg-emerald-400 rounded-full absolute top-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
          animate={{ left: ["0%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="w-3 h-3 bg-pink-400 rounded-full absolute top-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(244,114,182,0.8)]"
          animate={{ left: ["0%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 relative z-10">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="flex flex-col items-center text-center bg-gray-900/90 p-5 rounded-xl border border-gray-600 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.2 }}
          >
            <motion.div
              className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4 border-2 border-gray-600"
              animate={{
                borderColor: ["#4b5563", "#34d399", "#4b5563"],
                boxShadow: ["0 0 0px rgba(52,211,153,0)", "0 0 20px rgba(52,211,153,0.4)", "0 0 0px rgba(52,211,153,0)"]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
            >
              {step.icon}
            </motion.div>
            <h4 className="text-gray-100 font-bold text-lg mb-2">{step.id}. {step.title}</h4>
            <p className="text-sm text-gray-400">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const XebiaArchitectureDiagram = () => {
  return (
    <div className="relative w-full py-4 mt-2 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
      {/* Connecting Lines */}
      <div className="absolute top-1/2 left-[15%] right-[15%] h-1 bg-gray-700 z-0 hidden md:block -translate-y-1/2" />

      {/* Animated Data Packets: Sensory -> Cognitive */}
      <div className="absolute top-1/2 left-[15%] right-[50%] h-1 z-10 hidden md:block -translate-y-1/2">
        <motion.div
          className="w-3 h-3 bg-emerald-400 rounded-full absolute top-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
          animate={{ left: ["0%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="w-3 h-3 bg-emerald-400 rounded-full absolute top-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
          animate={{ left: ["0%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
        />
      </div>

      {/* Animated Data Packets: Cognitive <-> Memory */}
      <div className="absolute top-1/2 left-[50%] right-[15%] h-1 z-10 hidden md:block -translate-y-1/2">
        <motion.div
          className="w-3 h-3 bg-blue-400 rounded-full absolute top-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(96,165,250,0.8)]"
          animate={{ left: ["100%", "0%"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="w-3 h-3 bg-pink-400 rounded-full absolute top-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(244,114,182,0.8)]"
          animate={{ left: ["0%", "100%"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1.25 }}
        />
      </div>

      {/* Sensory Network */}
      <motion.div
        className="z-20 bg-gray-900 border-2 border-emerald-500/50 rounded-xl p-4 w-full md:w-1/3 text-center shadow-lg shadow-emerald-500/10 flex flex-col items-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          className="h-12 px-4 bg-gray-800 rounded-full flex items-center justify-center gap-2 mb-2 border-2 border-emerald-500/50"
          animate={{ boxShadow: ["0 0 0px rgba(52,211,153,0)", "0 0 20px rgba(52,211,153,0.4)", "0 0 0px rgba(52,211,153,0)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <KafkaIcon className="w-6 h-6 text-emerald-400" />
          <FlinkIcon className="w-6 h-6 text-emerald-400" />
        </motion.div>
        <h4 className="text-emerald-400 font-bold text-base mb-1">Sensory Network</h4>
        <p className="text-gray-200 font-medium mb-1 text-sm">Apache Kafka & Flink</p>
        <p className="text-gray-400 text-xs">Captures every business event in real time</p>
      </motion.div>

      {/* Cognitive Core */}
      <motion.div
        className="z-20 bg-gray-900 border-2 border-pink-500/50 rounded-xl p-4 w-full md:w-1/3 text-center shadow-lg shadow-pink-500/10 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="h-12 px-4 bg-gray-800 rounded-full flex items-center justify-center gap-2 mb-2 border-2 border-pink-500/50"
          animate={{ boxShadow: ["0 0 0px rgba(244,114,182,0)", "0 0 20px rgba(244,114,182,0.4)", "0 0 0px rgba(244,114,182,0)"] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        >
          <LangGraphIcon className="w-6 h-6 text-pink-400" />
          <GoogleIcon className="w-6 h-6 text-pink-400" />
        </motion.div>
        <h4 className="text-pink-400 font-bold text-base mb-1">Cognitive Core</h4>
        <p className="text-gray-200 font-medium mb-1 text-sm">LangGraph & Gemini</p>
        <p className="text-gray-400 text-xs">Stateful reasoning & agentic workflows</p>
      </motion.div>

      {/* Long-term Memory */}
      <motion.div
        className="z-20 bg-gray-900 border-2 border-blue-500/50 rounded-xl p-4 w-full md:w-1/3 text-center shadow-lg shadow-blue-500/10 flex flex-col items-center"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
      >
        <motion.div
          className="h-12 px-4 bg-gray-800 rounded-full flex items-center justify-center mb-2 border-2 border-blue-500/50"
          animate={{ boxShadow: ["0 0 0px rgba(59,130,246,0)", "0 0 20px rgba(59,130,246,0.4)", "0 0 0px rgba(59,130,246,0)"] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          <PostgresIcon className="w-8 h-8 text-blue-400" />
        </motion.div>
        <h4 className="text-blue-400 font-bold text-base mb-1">Long-term Memory</h4>
        <p className="text-gray-200 font-medium mb-1 text-sm">pgvector</p>
        <p className="text-gray-400 text-xs">Historical context & static embeddings</p>
      </motion.div>
    </div>
  );
};

// Horizontal database-style cylinder used in the storage layer of the
// Timeplus Reference Architecture slide. Light fill, Timeplus-pink stroke,
// with a subtle pulsing glow to suggest active storage.
const StorageCylinder: React.FC<{ children: React.ReactNode; pulseDelay?: number }> = ({ children, pulseDelay = 0 }) => (
  <motion.div
    className="relative w-full h-14 md:h-16"
    animate={{
      filter: [
        'drop-shadow(0 0 0px rgba(213,63,140,0))',
        'drop-shadow(0 0 8px rgba(213,63,140,0.65))',
        'drop-shadow(0 0 0px rgba(213,63,140,0))',
      ],
    }}
    transition={{ duration: 2, repeat: Infinity, delay: pulseDelay, ease: 'easeInOut' }}
  >
    <svg
      viewBox="0 0 200 80"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="none"
    >
      {/* Pill body — light fill, Timeplus pink outline */}
      <path
        d="M 16 4 L 184 4 A 12 36 0 0 1 184 76 L 16 76 A 12 36 0 0 1 16 4 Z"
        fill="#ffffff"
        stroke="#D53F8C"
        strokeWidth="1.5"
      />
      {/* Inner depth arc giving the 3D cylinder/database look */}
      <path
        d="M 172 4 A 12 36 0 0 0 172 76"
        stroke="#D53F8C"
        strokeWidth="1"
        fill="none"
        opacity="0.55"
      />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center text-[11px] md:text-xs text-gray-800 text-center px-4 leading-tight font-semibold">
      {children}
    </div>
  </motion.div>
);

// Slide indices (0-indexed) included in the simplified view.
// Maps to current slides 1, 2, 3, 5, 7, 12, 13, 14.
const SIMPLIFIED_INDICES = [0, 1, 2, 4, 6, 11, 12, 13];

const FilteredDeck: React.FC<{
  simplified: boolean;
  indices: number[];
  children: React.ReactNode;
}> = ({ simplified, indices, children }) => {
  const all = React.Children.toArray(children);
  const visible = simplified
    ? indices.map((i) => all[i]).filter(Boolean)
    : all;
  // Re-mount Deck when mode changes so currentSlide resets to 0.
  return <Deck key={simplified ? 'simple' : 'full'}>{visible as React.ReactNode[]}</Deck>;
};

const ModeToggle: React.FC<{ simplified: boolean; onChange: (v: boolean) => void }> = ({ simplified, onChange }) => (
  <div className="absolute top-3 right-3 z-20 inline-flex items-center bg-white/95 backdrop-blur border border-gray-200 rounded-full p-1 shadow-md">
    <button
      type="button"
      onClick={() => onChange(true)}
      aria-label="Quick view"
      title="Quick view (8 slides)"
      className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${simplified ? 'bg-pink-500 text-white shadow' : 'text-gray-500 hover:text-gray-800'
        }`}
    >
      <Zap className="w-4 h-4" />
    </button>
    <button
      type="button"
      onClick={() => onChange(false)}
      aria-label="Detailed view"
      title="Detailed view (18 slides)"
      className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${!simplified ? 'bg-pink-500 text-white shadow' : 'text-gray-500 hover:text-gray-800'
        }`}
    >
      <List className="w-4 h-4" />
    </button>
  </div>
);

export default function App() {
  const [simplified, setSimplified] = useState(true);

  return (
    <FilteredDeck simplified={simplified} indices={SIMPLIFIED_INDICES}>
      {/* Slide 1: Title */}
      <div className="flex flex-col items-center justify-center text-center px-4 md:px-12 pt-6 md:pt-8 h-full">
        <ModeToggle simplified={simplified} onChange={setSimplified} />
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center max-w-4xl mb-4 md:mb-8 shrink-0"
        >
          <div className="mb-4 md:mb-6">
            <TimeplusLogo className="h-8 md:h-12 w-auto" />
          </div>
          <h1 className="text-black text-4xl md:text-5xl font-bold leading-tight mb-2">
            Real-time context layer for AI Agents
          </h1>
          <p className="text-pink-500">
            Empower LLMs with up-to-the-millisecond data awareness.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center w-full max-w-5xl flex-1 min-h-0 pb-6 md:pb-10"
        >
          <ContextInfographic />
        </motion.div>
      </div>

      {/* Slide 2: The Context Gap */}
      <div className="flex flex-col px-6 md:px-20 pt-6 md:pt-10 max-w-7xl mx-auto h-full">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full flex flex-col h-full"
        >
          <div className="mb-8 md:mb-12">
            <h1 className="text-black">
              The Context Gap
            </h1>
            <p className="text-pink-500">
              While RAG gives AI agents a library card, <strong className="text-pink-400 font-semibold">real-time streaming hands them a live news feed.</strong>
            </p>
          </div>

          <div className="text-gray-300 font-light w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Card 1: Failure Rate */}
              <div className="bg-gray-800/40 p-8 rounded-2xl border border-gray-700/50 text-left flex flex-col items-start">
                <div className="flex items-center gap-3 mb-4">
                  <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                    {/* Bar chart with declining bars */}
                    <rect x="4" y="12" width="8" height="28" rx="2" fill="#D53F8C" opacity="0.9" />
                    <rect x="16" y="20" width="8" height="20" rx="2" fill="#D53F8C" opacity="0.7" />
                    <rect x="28" y="28" width="8" height="12" rx="2" fill="#D53F8C" opacity="0.5" />
                    <rect x="40" y="34" width="8" height="6" rx="2" fill="#D53F8C" opacity="0.3" />
                    {/* Downward arrow */}
                    <path d="M6 10 L42 38" stroke="#B83280" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 2" />
                    <path d="M36 38 L42 38 L42 32" stroke="#B83280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h3 className="text-gray-100 font-semibold text-lg">95% Failure Rate</h3>
                </div>
                <p className="text-gray-200">
                  <strong className="text-pink-500">MIT (2025)</strong> reports 95% of enterprise AI initiatives deliver zero return. The primary culprit isn't model capability, but stale, fragmented context.
                </p>
              </div>

              {/* Card 2: Context Gap */}
              <div className="bg-gray-800/40 p-8 rounded-2xl border border-gray-700/50 text-left flex flex-col items-start">
                <div className="flex items-center gap-3 mb-4">
                  <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                    {/* Left block */}
                    <rect x="2" y="18" width="14" height="16" rx="2" fill="#D53F8C" opacity="0.85" />
                    {/* Right block */}
                    <rect x="32" y="18" width="14" height="16" rx="2" fill="#D53F8C" opacity="0.85" />
                    {/* Gap dots */}
                    <circle cx="20" cy="26" r="2" fill="#B83280" opacity="0.9" />
                    <circle cx="24" cy="26" r="2" fill="#B83280" opacity="0.6" />
                    <circle cx="28" cy="26" r="2" fill="#B83280" opacity="0.3" />
                    {/* Arrow bridging gap */}
                    <path d="M16 26 L32 26" stroke="#D53F8C" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
                    {/* Label lines */}
                    <path d="M2 38 L16 38" stroke="#D53F8C" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                    <path d="M32 38 L46 38" stroke="#D53F8C" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                    <path d="M24 10 L24 16" stroke="#B83280" strokeWidth="2" strokeLinecap="round" />
                    <path d="M20 14 L24 10 L28 14" stroke="#B83280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h3 className="text-gray-100 font-semibold text-lg">The "Context Gap"</h3>
                </div>
                <p className="text-gray-200">
                  Moving from pulling static documents to pushing live reality. Platforms like <strong className="text-pink-500">Timeplus, Confluent, StreamNative, and Redpanda</strong> are racing to fill this gap.
                </p>
              </div>

              {/* Card 3: $11B Validation */}
              <div className="bg-gray-800/40 p-8 rounded-2xl border border-gray-700/50 text-left flex flex-col items-start">
                <div className="flex items-center gap-3 mb-4">
                  <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                    {/* Shield shape */}
                    <path d="M24 4 L42 12 L42 26 C42 35 34 42 24 46 C14 42 6 35 6 26 L6 12 Z" fill="#D53F8C" opacity="0.15" stroke="#D53F8C" strokeWidth="2" />
                    {/* Dollar sign */}
                    <path d="M24 14 L24 34" stroke="#D53F8C" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M18 18 C18 16 20 15 24 15 C28 15 30 16.5 30 19 C30 21.5 28 22.5 24 23 C20 23.5 18 25 18 27.5 C18 30 20 31.5 24 31.5 C28 31.5 30 30 30 28" stroke="#D53F8C" strokeWidth="2.5" strokeLinecap="round" />
                    {/* Checkmark */}
                    <circle cx="36" cy="36" r="8" fill="#B83280" />
                    <path d="M32 36 L35 39 L40 33" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h3 className="text-gray-100 font-semibold text-lg">$11B Validation</h3>
                </div>
                <p className="text-gray-200">
                  <strong className="text-pink-500">IBM's $11B acquisition of Confluent (2026)</strong> crystallizes the thesis: context engineering requires real-time streaming infrastructure.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slide 3: RAG Limitations */}
      <div className="flex flex-col px-6 md:px-20 pt-6 md:pt-10 max-w-7xl mx-auto h-full">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full flex flex-col h-full"
        >
          <div className="mb-8 md:mb-12">
            <h1 className="text-black">
              RAG was built for documents
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-pink-400 font-semibold text-left max-w-4xl">
              Not for operational reality
            </p>
          </div>

          <div className="text-gray-300 font-light w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Limitation 1: Inherently Stale */}
              <div className="bg-gray-800/40 p-6 md:p-8 rounded-2xl border border-gray-700/50 flex flex-col text-left items-start">
                <div className="flex items-center gap-3 mb-3">
                  <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                    {/* Clock face */}
                    <circle cx="24" cy="24" r="18" stroke="#D53F8C" strokeWidth="2.5" fill="none" opacity="0.8" />
                    {/* Clock hands - stuck/stale pointing to same time */}
                    <path d="M24 24 L24 13" stroke="#D53F8C" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M24 24 L31 24" stroke="#D53F8C" strokeWidth="2.5" strokeLinecap="round" />
                    {/* Crack lines indicating stale/broken */}
                    <path d="M14 10 L18 15" stroke="#B83280" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
                    <path d="M34 10 L30 15" stroke="#B83280" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
                    {/* Pause/freeze icon overlay */}
                    <circle cx="36" cy="36" r="8" fill="#B83280" />
                    <rect x="33" y="33" width="3" height="6" rx="1" fill="white" />
                    <rect x="37" y="33" width="3" height="6" rx="1" fill="white" />
                  </svg>
                  <h3 className="text-gray-100 font-semibold text-lg">Inherently Stale</h3>
                </div>
                <p className="text-gray-200">
                  Vector DBs require explicit re-indexing. Hourly or daily batch updates are an eternity for agents.
                </p>
                <ul className="mt-4 space-y-2 text-sm md:text-base text-gray-400 list-disc pl-5">
                  <li><strong className="text-pink-500">20%</strong> performance decline from outdated embeddings</li>
                  <li><strong className="text-pink-500">17–33%</strong> hallucination rates (Stanford)</li>
                </ul>
              </div>

              {/* Limitation 2: No Temporal Awareness */}
              <div className="bg-gray-800/40 p-6 md:p-8 rounded-2xl border border-gray-700/50 flex flex-col text-left items-start">
                <div className="flex items-center gap-3 mb-3">
                  <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                    {/* Timeline bar */}
                    <rect x="4" y="22" width="40" height="4" rx="2" fill="#D53F8C" opacity="0.3" />
                    {/* Old event (left, faded) */}
                    <circle cx="10" cy="24" r="5" fill="#D53F8C" opacity="0.35" />
                    <path d="M10 16 L10 19" stroke="#D53F8C" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
                    {/* Recent event (right, vibrant) */}
                    <circle cx="38" cy="24" r="5" fill="#D53F8C" opacity="0.9" />
                    <path d="M38 16 L38 19" stroke="#D53F8C" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Equal sign between them */}
                    <path d="M20 20 L28 20" stroke="#B83280" strokeWidth="2" strokeLinecap="round" />
                    <path d="M20 28 L28 28" stroke="#B83280" strokeWidth="2" strokeLinecap="round" />
                    {/* Question mark */}
                    <circle cx="36" cy="36" r="8" fill="#B83280" />
                    <path d="M33 33 C33 31 34.5 30 36 30 C37.5 30 39 31 39 32.5 C39 34 37.5 34.5 36 35.5 L36 37" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="36" cy="39.5" r="1" fill="white" />
                  </svg>
                  <h3 className="text-gray-100 font-semibold text-base">No Temporal Awareness</h3>
                </div>
                <p className="text-gray-200">
                  Standard vector search treats a <strong className="text-pink-500">5-minute-old ticket</strong> the same as a <strong className="text-pink-500">3-year-old one</strong>.
                </p>
                <ul className="mt-4 space-y-2 text-sm md:text-base text-gray-400 list-disc pl-5">
                  <li>Cannot perform windowed aggregations</li>
                  <li>Cannot execute temporal joins</li>
                  <li>Disqualifying for monitoring agents</li>
                </ul>
              </div>

              {/* Limitation 3: Reactive by Design */}
              <div className="bg-gray-800/40 p-6 md:p-8 rounded-2xl border border-gray-700/50 flex flex-col text-left items-start">
                <div className="flex items-center gap-3 mb-3">
                  <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                    {/* Sleeping/idle system — monitor outline */}
                    <rect x="8" y="10" width="32" height="22" rx="3" stroke="#D53F8C" strokeWidth="2.5" fill="none" opacity="0.8" />
                    {/* Zzz lines inside — idle/sleeping */}
                    <path d="M16 18 L22 18 L16 24 L22 24" stroke="#D53F8C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
                    <path d="M25 15 L29 15 L25 19 L29 19" stroke="#D53F8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                    {/* Stand */}
                    <path d="M24 32 L24 38" stroke="#D53F8C" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
                    <path d="M18 38 L30 38" stroke="#D53F8C" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
                    {/* Pull arrow */}
                    <circle cx="36" cy="36" r="8" fill="#B83280" />
                    <path d="M32 36 L40 36" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M37 33 L40 36 L37 39" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h3 className="text-gray-100 font-semibold text-lg">Reactive by Design</h3>
                </div>
                <p className="text-gray-200">
                  Retrieves only when prompted. The system sits <strong className="text-pink-500">idle</strong> until explicitly queried.
                </p>
                <ul className="mt-4 space-y-2 text-sm md:text-base text-gray-400 list-disc pl-5">
                  <li>Cannot proactively detect events</li>
                  <li>Incompatible with autonomous behavior</li>
                  <li>Pull-based, not push-based</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-pink-500 pl-6 md:pl-8 py-4 bg-gray-800/30 rounded-r-xl shadow-sm max-w-4xl mt-12 text-left">
              <p className="text-pink-500">
                "RAG is document retrieval. Context is operational state."
              </p>
              <p className="text-sm md:text-base text-gray-500 mt-3 font-medium uppercase tracking-wider">— OSO Engineering Blog</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slide 4: Streaming Platforms */}
      <div className="flex flex-col px-6 md:px-20 pt-6 md:pt-10 max-w-7xl mx-auto h-full">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full flex flex-col h-full"
        >
          <div className="mb-12 md:mb-16">
            <h1 className="text-black">
              Streaming Platforms Treat the AI Context Window
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-pink-400 font-semibold text-left max-w-4xl">
              As a live materialized view
            </p>
          </div>

          <div className="text-gray-300 font-light w-full flex-1 flex flex-col justify-center pb-20">
            <div className="flex flex-col gap-8">
              {/* Paradigm Inversion */}
              <div className="bg-gray-800/40 p-8 md:p-12 rounded-3xl border border-gray-700/50 flex flex-col md:flex-row gap-10 items-center text-left shadow-xl">
                <div className="flex-1">
                  <h3 className="text-gray-100 font-semibold text-2xl md:text-3xl mb-6 flex items-center gap-4">
                    <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                      {/* Top arrow going right (push) */}
                      <path d="M8 16 L36 16" stroke="#D53F8C" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M30 10 L36 16 L30 22" stroke="#D53F8C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      {/* Bottom arrow going left (pull) */}
                      <path d="M40 32 L12 32" stroke="#B83280" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
                      <path d="M18 26 L12 32 L18 38" stroke="#B83280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                    </svg>
                    A Paradigm Inversion
                  </h3>
                  <p className="text-gray-200">
                    Instead of pulling context via search at query time, context is continuously computed and <strong className="text-pink-500">pushed</strong> to the agent's working memory through streaming SQL.
                  </p>
                </div>
                <div className="flex-1 bg-gray-900/60 p-8 rounded-2xl border border-gray-700/40 w-full shadow-inner">
                  <p className="text-gray-200">
                    <strong className="text-pink-500 text-xl block mb-2">Pull-based RAG:</strong> Like early web request-response.<br /><br />
                    <strong className="text-pink-400 text-xl block mb-2">Push-based Streaming:</strong> Like event sourcing. The materialized view <strong className="text-pink-500">IS</strong> the context window.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slide 5: The 4-Step Pipeline */}
      <div className="flex flex-col px-6 md:px-20 pt-6 md:pt-10 max-w-7xl mx-auto h-full">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full flex flex-col h-full"
        >
          <div className="mb-8 md:mb-12">
            <h1 className="text-black">
              The 4-Step Pipeline
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-pink-400 font-semibold text-left max-w-4xl">
              From raw events to semantic context
            </p>
          </div>

          <div className="text-gray-300 font-light w-full">
            {/* The 4-Step Pipeline Diagram */}
            <div className="bg-gray-800/40 p-6 md:p-10 rounded-2xl border border-gray-700/50 flex flex-col text-left overflow-hidden mt-8">
              <StreamingPipelineDiagram />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slide 6: Xebia Architecture */}
      <div className="flex flex-col px-6 md:px-20 pt-6 md:pt-10 max-w-7xl mx-auto h-full">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full flex flex-col h-full"
        >
          <div className="mb-8 md:mb-12">
            <h1 className="text-black">
              Xebia "Beyond RAG" Architecture
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-pink-400 font-semibold text-left max-w-4xl">
              A three-tier system for advanced AI agents
            </p>
          </div>

          <div className="text-gray-300 font-light w-full flex-1 flex flex-col">
            <div className="w-full flex-col text-left overflow-hidden">
              <XebiaArchitectureDiagram />
            </div>

            {/* Xebia Quote */}
            <div className="border-l-4 border-pink-500 pl-4 md:pl-6 py-3 max-w-5xl text-left mt-auto mb-4">
              <p className="text-black text-sm md:text-base">
                "This isn't a minor issue that can be fixed by just using a slightly better LLM. <strong className="text-pink-500">The real hallmark of truly advanced AI agents is not just their reasoning abilities, but their deep, real-time awareness of the business environment.</strong>"
              </p>
              <p className="text-xs text-black font-medium uppercase tracking-wider mt-2">— Xebia Analysis (January 2026)</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slide 7: Comparison Table */}
      <div className="flex flex-col px-6 md:px-20 pt-6 md:pt-10 max-w-7xl mx-auto h-full">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full flex flex-col h-full"
        >
          <div className="mb-6 md:mb-8">
            <h1 className="text-black">
              RAG vs. Streaming Context
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-pink-400 font-semibold text-left max-w-4xl">
              Complementary, not competing
            </p>
          </div>

          <div className="text-gray-300 font-light w-full flex-1 flex flex-col">
            <div className="bg-gray-800/40 rounded-2xl border border-gray-700/50 overflow-hidden mb-6 shadow-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-900/60 border-b border-gray-700/50">
                    <th className="py-3 px-4 font-semibold text-gray-200 w-1/4 text-sm md:text-base">Capability</th>
                    <th className="py-3 px-4 font-semibold text-gray-400 w-3/8 text-sm md:text-base">Traditional RAG</th>
                    <th className="py-3 px-4 font-semibold text-pink-400 w-3/8 text-sm md:text-base">Streaming Context</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/30">
                  <tr className="hover:bg-gray-700/20 transition-colors">
                    <td className="py-2 px-4 font-medium text-gray-300 text-sm md:text-base">
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 md:w-5 md:h-5 text-gray-400 shrink-0" />
                        <span>Data freshness</span>
                      </div>
                    </td>
                    <td className="py-2 px-4 text-gray-400 text-sm md:text-base">Minutes to days (batch re-index)</td>
                    <td className="py-2 px-4 text-pink-400 text-sm md:text-base">Milliseconds (continuous)</td>
                  </tr>
                  <tr className="hover:bg-gray-700/20 transition-colors">
                    <td className="py-2 px-4 font-medium text-gray-300 text-sm md:text-base">
                      <div className="flex items-center gap-3">
                        <Zap className="w-4 h-4 md:w-5 md:h-5 text-gray-400 shrink-0" />
                        <span>Trigger model</span>
                      </div>
                    </td>
                    <td className="py-2 px-4 text-gray-400 text-sm md:text-base">Query-triggered (pull)</td>
                    <td className="py-2 px-4 text-pink-400 text-sm md:text-base">Event-triggered (push)</td>
                  </tr>
                  <tr className="hover:bg-gray-700/20 transition-colors">
                    <td className="py-2 px-4 font-medium text-gray-300 text-sm md:text-base">
                      <div className="flex items-center gap-3">
                        <Timer className="w-4 h-4 md:w-5 md:h-5 text-gray-400 shrink-0" />
                        <span>Temporal awareness</span>
                      </div>
                    </td>
                    <td className="py-2 px-4 text-gray-400 text-sm md:text-base">None</td>
                    <td className="py-2 px-4 text-pink-400 text-sm md:text-base">Native windowing, event-time joins</td>
                  </tr>
                  <tr className="hover:bg-gray-700/20 transition-colors">
                    <td className="py-2 px-4 font-medium text-gray-300 text-sm md:text-base">
                      <div className="flex items-center gap-3">
                        <GitMerge className="w-4 h-4 md:w-5 md:h-5 text-gray-400 shrink-0" />
                        <span>Multi-source fusion</span>
                      </div>
                    </td>
                    <td className="py-2 px-4 text-gray-400 text-sm md:text-base">Separate indexes, one at a time</td>
                    <td className="py-2 px-4 text-pink-400 text-sm md:text-base">Real-time joins across streams</td>
                  </tr>
                  <tr className="hover:bg-gray-700/20 transition-colors">
                    <td className="py-2 px-4 font-medium text-gray-300 text-sm md:text-base">
                      <div className="flex items-center gap-3">
                        <Database className="w-4 h-4 md:w-5 md:h-5 text-gray-400 shrink-0" />
                        <span>State management</span>
                      </div>
                    </td>
                    <td className="py-2 px-4 text-gray-400 text-sm md:text-base">Stateless per query</td>
                    <td className="py-2 px-4 text-pink-400 text-sm md:text-base">Continuously maintained</td>
                  </tr>
                  <tr className="hover:bg-gray-700/20 transition-colors">
                    <td className="py-2 px-4 font-medium text-gray-300 text-sm md:text-base">
                      <div className="flex items-center gap-3">
                        <Bell className="w-4 h-4 md:w-5 md:h-5 text-gray-400 shrink-0" />
                        <span>Proactivity</span>
                      </div>
                    </td>
                    <td className="py-2 px-4 text-gray-400 text-sm md:text-base">Cannot detect or react to changes</td>
                    <td className="py-2 px-4 text-pink-400 text-sm md:text-base">Triggers alerts and actions on events</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slide 8: The Problem - Stale Data */}
      <div className="flex flex-col px-6 md:px-20 pt-6 md:pt-10 max-w-7xl mx-auto h-full">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full flex flex-col h-full"
        >
          <div className="mb-8 md:mb-12">
            <h1 className="text-black">
              Stale context costs enterprises billions
            </h1>
            <p className="text-xl md:text-2xl text-pink-500 font-semibold text-left max-w-4xl">
              Stale data is the primary cause of AI agent failures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-4">
            <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl shadow-sm relative overflow-hidden">
              <div className="text-6xl md:text-7xl font-bold text-pink-500 mb-6">91%</div>
              <p className="text-black text-lg">
                of AI models experience quality degradation over time due to stale, incomplete, or fragmented data.
              </p>
              <p className="text-xs text-gray-400 mt-6 uppercase tracking-wider font-semibold">Source: Informatica</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl shadow-sm relative overflow-hidden">
              <div className="text-6xl md:text-7xl font-bold text-pink-500 mb-6">&gt;$5M</div>
              <p className="text-black text-lg">
                lost by a global e-commerce company when its product recommendation agent operated on stale inventory data for months.
              </p>
              <p className="text-xs text-gray-400 mt-6 uppercase tracking-wider font-semibold">Real-world Case Study</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slide 9: Context Poisoning */}
      <div className="flex flex-col px-6 md:px-20 pt-6 md:pt-10 max-w-7xl mx-auto h-full">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full flex flex-col h-full"
        >
          <div className="mb-8 md:mb-12">
            <h1 className="text-black mb-2">
              The risk of Context Poisoning
            </h1>
            <p className="text-xl md:text-2xl text-pink-500 font-semibold text-left max-w-4xl">
              Hallucinations compounding through autonomous loops
            </p>
          </div>

          <div className="border-l-4 border-pink-500 pl-6 md:pl-8 py-4 mb-10 w-full">
            <p className="text-black text-lg md:text-xl italic font-light">
              "Hallucinations that enter an agent's context become persistently referenced, causing the agent to develop nonsensical strategies and repeat behaviors in pursuit of a goal that cannot be met."
            </p>
            <p className="text-sm text-black font-semibold mt-4">— Google DeepMind, Gemini 2.5 Technical Report</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm">
              <h4 className="text-black font-bold mb-3 text-lg uppercase tracking-wide">Chatbot Hallucination</h4>
              <p className="text-black">A user receives a wrong answer and ignores it. The impact is isolated and ephemeral.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm">
              <h4 className="text-black font-bold mb-3 text-lg uppercase tracking-wide">Agentic context poisoning</h4>
              <p className="text-black">An agent takes real-world actions based on false premises, cascading errors across systems.</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slide 10: ROI & Cancellation Risk */}
      <div className="flex flex-col px-6 md:px-20 pt-6 md:pt-10 max-w-7xl mx-auto h-full">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full flex flex-col h-full"
        >
          <div className="mb-8">
            <h1 className="text-black">
              Real-time context drives ROI
            </h1>
            <p className="text-xl md:text-2xl text-pink-500 font-semibold text-left max-w-4xl">
              and prevents project cancellation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-10">
            <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl shadow-sm">
              <div className="text-5xl font-bold text-pink-500 mb-4">32%</div>
              <p className="text-black font-medium">Faster insight-to-action cycle</p>
              <p className="text-xs text-gray-400 mt-4 uppercase tracking-wider">McKinsey</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl shadow-sm">
              <div className="text-5xl font-bold text-pink-500 mb-4">21%</div>
              <p className="text-black font-medium">More accurate operational decisions</p>
              <p className="text-xs text-gray-400 mt-4 uppercase tracking-wider">McKinsey</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl shadow-sm">
              <div className="text-5xl font-bold text-pink-500 mb-4">48%</div>
              <p className="text-black font-medium">Reduction in decision latency</p>
              <p className="text-xs text-gray-400 mt-4 uppercase tracking-wider">Gartner 2025</p>
            </div>
          </div>

          <div className="bg-gray-50 border border-pink-200/50 p-8 rounded-2xl w-full flex flex-col md:flex-row items-center gap-8 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 rounded-full blur-3xl -mr-12 -mt-12"></div>
            <TrendingDown className="w-12 h-12 text-pink-500 shrink-0 relative z-10" />
            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-2xl font-bold text-black mb-1">The 2027 Scaling Cliff</h3>
              <p className="text-black text-lg max-w-3xl">
                Gartner projects that <span className="font-bold text-pink-500">over 40% of agentic AI projects may be cancelled by 2027</span> before scaling. The survivors will be those built on fresh, governed, real-time data infrastructure.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slide 11: Market Trajectory */}
      <div className="flex flex-col px-6 md:px-20 pt-6 md:pt-10 max-w-7xl mx-auto h-full">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full flex flex-col h-full"
        >
          <div className="mb-4 md:mb-6">
            <h1 className="text-black">
              The industry trajectory is unmistakable
            </h1>
            <p className="text-lg md:text-xl text-pink-500 font-semibold text-left max-w-4xl">
              Streaming as the definitive context layer
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 w-full">
            <div className="space-y-4">
              <div className="bg-gray-50 border border-gray-200 p-4 md:p-5 rounded-2xl flex items-center gap-6 shadow-sm">
                <div className="bg-pink-100 p-3 rounded-full shrink-0">
                  <BarChart3 className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-black mb-1">$109B</div>
                  <p className="text-black font-medium text-xs md:text-sm">AI infrastructure VC funding in 2025</p>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-4 md:p-5 rounded-2xl flex items-center gap-6 shadow-sm">
                <div className="bg-pink-100 p-3 rounded-full shrink-0">
                  <TrendingUp className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-black mb-1">$52-100B</div>
                  <p className="text-black font-medium text-xs md:text-sm">Projected agentic AI market by 2030</p>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-4 md:p-5 rounded-2xl flex items-center gap-6 shadow-sm">
                <div className="bg-pink-100 p-3 rounded-full shrink-0">
                  <Zap className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-black mb-1">40%</div>
                  <p className="text-black font-medium text-xs md:text-sm">Enterprise apps embedding agents by 2026</p>
                </div>
              </div>
            </div>

            <div className="h-full bg-gray-50 border border-pink-200/50 p-6 md:p-8 rounded-2xl flex flex-col justify-center shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <Quote className="w-10 h-10 text-pink-500 mb-4 opacity-40 relative z-10" />
              <p className="text-black text-sm md:text-base italic font-light relative z-10 leading-relaxed mb-4">
                "Streaming data represents the <span className="font-bold text-pink-500 italic">physical and digital reality</span> of what is happening in your business right now... technology leaders should look for a platform that natively integrates messaging, stream processing, and analytics."
              </p>
              <p className="text-black font-semibold text-xs relative z-10">— Forrester Research, Q4 2025 Analysis</p>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Slide 12: Timeplus Reference Architecture */}
      <div className="flex flex-col px-6 md:px-20 pt-6 md:pt-10 max-w-7xl mx-auto h-full">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full flex flex-col h-full"
        >
          <div className="mb-4 md:mb-5 flex items-end justify-between gap-4">
            <div>
              <h1 className="text-black">
                Timeplus Reference Architecture
              </h1>
              <p className="text-lg md:text-xl text-pink-500 font-semibold text-left max-w-4xl">
                Unified SQL across streams, indexes, and AI workloads
              </p>
            </div>
            <TimeplusLogo className="h-6 md:h-7 w-auto shrink-0 hidden md:block" />
          </div>

          <div className="bg-gray-900 border border-gray-700/60 rounded-2xl p-4 md:p-5 shadow-xl flex-1 flex flex-col gap-3">
            {/* Compute Layer */}
            <div className="flex gap-2 items-stretch">
              <div
                className="flex items-center justify-center text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest px-1"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                Compute
              </div>
              <motion.div
                className="flex-1 border border-purple-500/40 rounded-xl p-3 md:p-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-center text-gray-400 text-xs uppercase tracking-wider font-semibold mb-3">
                  Unified SQL Query Processing
                </p>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                  {[
                    { icon: RefreshCw, label: 'Incremental MV', planned: false },
                    { icon: Search, label: 'Ad-hoc Query', planned: false },
                    { icon: Braces, label: 'UDAF JS', planned: false },
                    { icon: Code2, label: 'UDAF Python', planned: false },
                    { icon: Bell, label: 'Alert', planned: false },
                    { icon: Bot, label: 'AI Agentic', planned: true },
                    { icon: Activity, label: 'Append-only Stream', planned: false },
                    { icon: Pencil, label: 'Mutable Stream', planned: false },
                    { icon: Type, label: 'Inverted Index', planned: true },
                    { icon: Boxes, label: 'Vector Index', planned: true },
                    { icon: Radio, label: 'Pub/Sub Stream', planned: true },
                    { icon: Tag, label: 'Meta Data', planned: true },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.03 }}
                        className={`bg-gray-800 rounded-lg py-2 px-1 flex flex-col items-center justify-center gap-1 text-[10px] md:text-xs leading-tight text-center ${item.planned
                          ? 'border border-dashed border-pink-500/60 text-pink-500'
                          : 'border border-gray-600 text-gray-100'
                          }`}
                      >
                        <Icon
                          className={`w-4 h-4 md:w-[18px] md:h-[18px] ${item.planned ? 'text-pink-400' : 'text-gray-300'}`}
                        />
                        <span>{item.label}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Storage Layer */}
            <div className="flex gap-2 items-stretch">
              <div
                className="flex items-center justify-center text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest px-1"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                Storage
              </div>
              <motion.div
                className="flex-1 border border-purple-500/40 rounded-xl p-3 md:p-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-center text-gray-400 text-xs uppercase tracking-wider font-semibold mb-3">
                  Multi-Raft: High-Available and Scalable Cluster
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                  {[0, 1, 2].map((shard) => (
                    <motion.div
                      key={shard}
                      className="relative"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + shard * 0.1 }}
                    >
                      <div className="flex gap-1 items-start">
                        <div className="flex-1 flex flex-col items-center">
                          <StorageCylinder pulseDelay={shard * 0.5}>
                            <span className="text-[10px] text-pink-400 mt-1">Write<br />Ahead Log</span>
                          </StorageCylinder>
                          <div className="text-[10px] text-pink-400 mt-1">Latency-Optimized</div>
                        </div>
                        <div className="flex-1 flex flex-col items-center">
                          <StorageCylinder pulseDelay={shard * 0.5 + 0.7}>
                            <span className="text-[10px] text-pink-400 mt-1">Columnar/Row<br />Store</span>
                          </StorageCylinder>
                          <div className="text-[10px] text-pink-400 mt-1">Throughput-Optimized</div>
                        </div>
                      </div>

                      {/* Data flow packets traveling WAL → Store */}
                      <div className="absolute left-3 right-3 top-7 md:top-8 -translate-y-1/2 pointer-events-none z-20 h-2">
                        <motion.div
                          className="w-1.5 h-1.5 bg-pink-600 rounded-full absolute top-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(213,63,140,1)]"
                          animate={{ left: ['0%', '100%'] }}
                          transition={{ duration: 2.4, repeat: Infinity, ease: 'linear', delay: shard * 0.4 }}
                        />
                        <motion.div
                          className="w-1.5 h-1.5 bg-pink-600 rounded-full absolute top-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(213,63,140,1)]"
                          animate={{ left: ['0%', '100%'] }}
                          transition={{ duration: 2.4, repeat: Infinity, ease: 'linear', delay: shard * 0.4 + 1.2 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Legend */}
            <div className="flex justify-end items-center gap-4 text-[11px] text-gray-400 pt-1">
              <div className="flex items-center gap-1.5">
                <span className="inline-block w-3 h-3 border border-gray-600 bg-gray-800 rounded-sm"></span>
                <span>Shipped</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="inline-block w-3 h-3 border border-dashed border-pink-500/60 bg-gray-800 rounded-sm"></span>
                <span>Under Active Development</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slide 13: Timeplus as Real-Time Context Layer for AI */}
      <div className="flex flex-col px-6 md:px-20 pt-6 md:pt-8 max-w-7xl mx-auto h-full">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full flex flex-col h-full"
        >
          <div className="mb-4">
            <h1 className="text-black">
              Timeplus: Real-Time Context Layer for AI
            </h1>
          </div>

          <div className="bg-gray-900 border border-gray-700/60 rounded-2xl p-4 md:p-5 shadow-xl flex-1">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
              {/* Left column */}
              <div className="md:col-span-1 flex flex-col gap-3">
                <motion.div
                  className="bg-gray-800/60 border border-gray-700 rounded-xl p-4 flex-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-pink-400 font-bold text-base md:text-lg mb-2 leading-tight">
                    Built on Proton Streaming Engine
                  </h3>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                    A single-binary, vectorized, C++/SIMD/JIT streaming SQL engine derived from ClickHouse. Designed from the ground up to replace complex data sprawls with a unified, high-performance architecture.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-gray-800/60 border border-gray-700 rounded-xl p-4 flex-1 flex flex-col justify-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 }}
                >
                  <div>
                    <div className="text-pink-500 text-3xl md:text-4xl font-bold leading-none">90M+</div>
                    <div className="text-gray-400 text-[11px] md:text-xs uppercase tracking-wider mt-1">Events Per Second</div>
                  </div>
                  <div>
                    <div className="text-pink-500 text-3xl md:text-4xl font-bold leading-none">4ms</div>
                    <div className="text-gray-400 text-[11px] md:text-xs uppercase tracking-wider mt-1">End-to-End Latency</div>
                  </div>
                </motion.div>
              </div>

              {/* Right column - 4 layer cards */}
              <div className="md:col-span-2 flex flex-col gap-2">
                {[
                  {
                    icon: Rocket,
                    eyebrow: 'Applications',
                    title: 'Real-Time AI Applications',
                    desc: 'Fraud detection, personalized recommendations, and high-frequency trading.',
                    highlight: false,
                  },
                  {
                    icon: Bot,
                    eyebrow: 'Intelligence',
                    title: 'AI Agents & Reasoning',
                    desc: 'Autonomous entities performing complex tasks with inline LLM inference.',
                    highlight: false,
                  },
                  {
                    icon: Layers,
                    eyebrow: 'Data Preprocessing',
                    title: 'Real-time Context Layer',
                    desc: 'Sub-second data pipelines and "Push" primitives for live working memory.',
                    highlight: true,
                  },
                  {
                    icon: Server,
                    eyebrow: 'Layer 04 — Ingestion',
                    title: 'Heterogeneous Data Sources',
                    desc: 'Raw event streams from Kafka, Pulsar, logs, trades, and IoT telemetry.',
                    highlight: false,
                  },
                ].map((layer, i) => {
                  const Icon = layer.icon;
                  return (
                    <motion.div
                      key={layer.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className={`rounded-xl p-3 md:p-3.5 flex items-center gap-3 flex-1 ${layer.highlight
                        ? 'bg-pink-500/10 border-2 border-pink-500 shadow-lg shadow-pink-500/20'
                        : 'bg-gray-800/60 border border-gray-700'
                        }`}
                    >
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-pink-500 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-pink-400 text-[10px] md:text-xs font-bold uppercase tracking-wider leading-tight">
                          {layer.eyebrow}
                        </p>
                        <h4 className="text-pink-500 font-bold text-sm md:text-base leading-tight mt-0.5">
                          {layer.title}
                        </h4>
                        <p className="text-gray-400 text-[11px] md:text-xs mt-1 leading-snug">
                          {layer.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slide 14: Why Timeplus? */}
      <div className="flex flex-col px-6 md:px-20 pt-6 md:pt-8 max-w-7xl mx-auto h-full">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full flex flex-col h-full"
        >
          <div className="mb-4">
            <h1 className="text-black">
              Why Timeplus?
            </h1>
          </div>

          <div className="bg-gray-900 border border-gray-700/60 rounded-2xl p-4 md:p-5 shadow-xl flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 h-full">
              {[
                {
                  icon: Terminal,
                  eyebrow: 'Universal Interface',
                  title: 'Streaming SQL',
                  desc: 'Unified ingestion, features, and inference. No new DSL, no JVM sprawl, and no complex "Lambda" architecture splits.',
                },
                {
                  icon: Code,
                  eyebrow: 'Python & Remote UDFs',
                  title: 'Native Inference Runtime',
                  desc: 'Embedded CPython 3.10 for PyTorch/HuggingFace and Remote UDFs for PromptAI-style LLM calls (GPT-4, DeepSeek).',
                },
                {
                  icon: BrainCog,
                  eyebrow: 'PromptAI Pattern',
                  title: 'In-Stream LLM Reasoning',
                  desc: 'Call LLMs per event directly from SQL to classify DDoS attacks or summarize streaming IoT data in real-time.',
                },
                {
                  icon: Server,
                  eyebrow: 'Streaming Vector Index',
                  title: 'Real-time Semantic Recall',
                  desc: 'Roadmap: Vectorized MVs with windowed segments solve the trilemma of freshness, recall, and high QPS.',
                },
                {
                  icon: Layers,
                  eyebrow: 'Unified Storage',
                  title: 'NativeLog + Historical Store',
                  desc: 'One vectorized engine serving write-ahead logs and columnar data. Identical path for training and serving.',
                },
                {
                  icon: Rocket,
                  eyebrow: 'Foundation',
                  title: 'Open Source & Lightweight',
                  desc: 'Apache 2.0, single C++ binary (<500MB). Enterprise adds clustering, 200+ connectors, and BYOC on AWS.',
                },
              ].map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.07 }}
                    className="bg-gray-800/60 border border-gray-700 rounded-xl p-3 md:p-4 flex items-start gap-3"
                  >
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-pink-500 shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <p className="text-pink-400 text-[10px] md:text-xs font-bold uppercase tracking-wider leading-tight">
                        {card.eyebrow}
                      </p>
                      <h4 className="text-pink-500 font-bold text-sm md:text-base leading-tight mt-0.5">
                        {card.title}
                      </h4>
                      <p className="text-gray-400 text-[11px] md:text-xs mt-1.5 leading-snug">
                        {card.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slide 15: Use Cases - Security & DevOps */}
      <div className="flex flex-col px-6 md:px-20 pt-6 md:pt-10 max-w-7xl mx-auto h-full">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full flex flex-col h-full"
        >
          <div className="mb-6 md:mb-8">
            <h1 className="text-black">
              Security Operations & DevOps
            </h1>
            <p className="text-lg md:text-xl text-pink-500 font-semibold text-left max-w-4xl">
              Where latency is measured in business impact
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 w-full mb-10">
            <div className="h-full bg-gray-50 border border-gray-200 p-6 md:p-8 rounded-2xl flex flex-col shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <Shield className="w-8 h-8 text-pink-500" />
                <h3 className="text-xl font-bold text-black border-l-2 border-pink-500 pl-4">Security Operations</h3>
              </div>
              <p className="text-black text-sm md:text-base leading-relaxed mb-4">
                Threats move at machine speed. <span className="font-semibold text-pink-500">Abstract Security</span> triages streaming data in near-real-time, achieving <span className="font-bold text-pink-500">65–75% SIEM cost reduction</span>.
              </p>
              <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-xs text-gray-400 font-bold uppercase">CrowdStrike + Onum</span>
                <span className="text-pink-500 font-bold">70% Faster Response</span>
              </div>
            </div>

            <div className="h-full bg-gray-50 border border-gray-200 p-6 md:p-8 rounded-2xl flex flex-col shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <Activity className="w-8 h-8 text-pink-500" />
                <h3 className="text-xl font-bold text-black border-l-2 border-pink-500 pl-4">DevOps & SRE</h3>
              </div>
              <p className="text-black text-sm md:text-base leading-relaxed mb-4">
                Downtime costs $12,900/min. <span className="font-semibold text-pink-500">incident.io</span> achieves <span className="font-bold text-pink-500">&gt;90% investigation accuracy</span> through autonomous real-time dependency analysis.
              </p>
              <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-xs text-gray-400 font-bold uppercase">Netflix Scale</span>
                <span className="text-pink-500 font-bold">3× Faster MTTR</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slide 16: Use Cases - Finance & IoT */}
      <div className="flex flex-col px-6 md:px-20 pt-6 md:pt-10 max-w-7xl mx-auto h-full">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full flex flex-col h-full"
        >
          <div className="mb-6 md:mb-8">
            <h1 className="text-black">
              Finance & Industrial IoT
            </h1>
            <p className="text-lg md:text-xl text-pink-500 font-semibold text-left max-w-4xl">
              Processing millions of events per second
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 w-full mb-10">
            <div className="h-full bg-gray-50 border border-gray-200 p-6 md:p-8 rounded-2xl flex flex-col shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <TrendingUp className="w-8 h-8 text-pink-500" />
                <h3 className="text-xl font-bold text-black border-l-2 border-pink-500 pl-4">Fraud & Trading</h3>
              </div>
              <p className="text-black text-sm md:text-base leading-relaxed mb-4">
                <span className="font-semibold text-pink-500">DataDome</span> analyzes 100% of requests in <span className="font-bold text-pink-500">&lt;2ms</span>. LSE uses real-time AI to detect market spoofing across millions of events per second.
              </p>
              <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-xs text-gray-400 font-bold uppercase">Global Anti-Scam</span>
                <span className="text-pink-500 font-bold">$442B Annual Risk</span>
              </div>
            </div>

            <div className="h-full bg-gray-50 border border-gray-200 p-6 md:p-8 rounded-2xl flex flex-col shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <Settings className="w-8 h-8 text-pink-500" />
                <h3 className="text-xl font-bold text-black border-l-2 border-pink-500 pl-4">IoT Maintenance</h3>
              </div>
              <p className="text-black text-sm md:text-base leading-relaxed mb-4">
                Predictive models achieve <span className="font-bold text-pink-500">85–95% accuracy</span> in failure detection using live vibration signatures and temperature trends across hundreds of assets.
              </p>
              <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-xs text-gray-400 font-bold uppercase">Predictive ROI</span>
                <span className="text-pink-500 font-bold">30–50× Return</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slide 17: Use Cases - CX & Supply Chain */}
      <div className="flex flex-col px-6 md:px-20 pt-6 md:pt-10 max-w-7xl mx-auto h-full">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full flex flex-col h-full"
        >
          <div className="mb-6 md:mb-8">
            <h1 className="text-black">
              CX & Supply Chain
            </h1>
            <p className="text-lg md:text-xl text-pink-500 font-semibold text-left max-w-4xl">
              Connected agents at global scale
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 w-full mb-10">
            <div className="h-full bg-gray-50 border border-gray-200 p-6 md:p-8 rounded-2xl flex flex-col shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <Users className="w-8 h-8 text-pink-500" />
                <h3 className="text-xl font-bold text-black border-l-2 border-pink-500 pl-4">Customer Experience</h3>
              </div>
              <p className="text-black text-sm md:text-base leading-relaxed mb-4">
                <span className="font-semibold text-pink-500">Wendy’s FreshAI</span> handles 50,000 orders daily with <span className="font-bold text-pink-500">95% success</span>. Salesforce blends history with live intent signals for deeper personalization.
              </p>
              <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-xs text-gray-400 font-bold uppercase">Verizon AI Care</span>
                <span className="text-pink-500 font-bold">95% Instant Resolution</span>
              </div>
            </div>

            <div className="h-full bg-gray-50 border border-gray-200 p-6 md:p-8 rounded-2xl flex flex-col shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <Truck className="w-8 h-8 text-pink-500" />
                <h3 className="text-xl font-bold text-black border-l-2 border-pink-500 pl-4">Supply Chain</h3>
              </div>
              <p className="text-black text-sm md:text-base leading-relaxed mb-4">
                <span className="font-semibold text-pink-500">C.H. Robinson</span> manages <span className="font-bold text-pink-500">37M shipments</span> via 30+ connected agents, capturing 318k updates and reducing planning time from hours to seconds.
              </p>
              <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-xs text-gray-400 font-bold uppercase">McKinsey Logistics</span>
                <span className="text-pink-500 font-bold">5–20% Cost Reduction</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Slide 18: Conclusion */}
      <div className="flex flex-col px-6 md:px-20 pt-6 md:pt-10 max-w-7xl mx-auto h-full">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full flex flex-col h-full"
        >
          <div className="mb-6">
            <h1 className="text-black">
              Conclusion: Context Engineering is the Core
            </h1>
            <p className="text-lg md:text-xl text-pink-500 font-semibold text-left max-w-4xl">
              From prompt engineering to context engineering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow-sm h-full">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-pink-500" />
                <h4 className="font-bold text-black uppercase tracking-tight text-sm">Paradigm Shift</h4>
              </div>
              <p className="text-black text-sm leading-relaxed">
                Streaming context enables <span className="text-pink-600 font-medium">proactive behavior</span> and autonomous remediation that are impossible with pull-based RAG.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow-sm h-full">
              <div className="flex items-center gap-3 mb-4">
                <GitMerge className="w-6 h-6 text-pink-500" />
                <h4 className="font-bold text-black uppercase tracking-tight text-sm">Industry Landscape</h4>
              </div>
              <p className="text-black text-sm leading-relaxed">
                Architectures are diverging: <span className="text-pink-600 font-medium">Confluent, Timeplus, Redpanda</span>, and StreamNative each offer unique takes on the agent-stream relationship.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow-sm h-full">
              <div className="flex items-center gap-3 mb-4">
                <Activity className="w-6 h-6 text-pink-500" />
                <h4 className="font-bold text-black uppercase tracking-tight text-sm">Research Gap</h4>
              </div>
              <p className="text-black text-sm leading-relaxed">
                Practitioners are far ahead of academia. The gap between <span className="text-pink-600 font-medium">StreamingRAG papers</span> and production products creates massive research opportunity.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl text-center relative overflow-hidden mt-auto mb-10 shadow-sm border border-pink-200/50">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
            <p className="text-black text-lg md:text-xl font-medium leading-relaxed max-w-4xl mx-auto">
              "The agents that will survive are those with <span className="text-pink-500 font-bold">live, continuous, and temporally-aware context</span>—not those searching through yesterday's documents for what's happening right now."
            </p>
          </div>
        </motion.div>
      </div>
    </FilteredDeck>
  );
}
