import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Fix h1 and h2
content = content.replace(/<h1 className="text-black">/g, '<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-tight">');
content = content.replace(/<h2 className="text-black">/g, '<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-tight">');

// Fix the p tags that I broke.
// Slide 1 subtitle
content = content.replace(/<p className="text-pink-500">\s*Empower LLMs with up-to-the-millisecond data awareness.\s*<\/p>/, '<p className="text-2xl text-pink-500 mb-8">Empower LLMs with up-to-the-millisecond data awareness.</p>');

// Slide 2 subtitle
content = content.replace(/<p className="text-pink-500">\s*While RAG gives AI agents a library card, <strong className="text-pink-400 font-semibold">real-time streaming hands them a live news feed\.<\/strong>\s*<\/p>/, '<p className="text-2xl text-pink-500 mb-8">While RAG gives AI agents a library card, <strong className="text-pink-500 font-semibold">real-time streaming hands them a live news feed.</strong></p>');

// Slide 2 content p tags
content = content.replace(/<p className="text-pink-500">\s*<strong className="text-gray-300">MIT \(2025\)<\/strong> reports 95% of enterprise AI initiatives deliver zero return. The primary culprit isn't model capability, but stale, fragmented context.\s*<\/p>/, '<p className="text-lg text-gray-500"><strong className="text-black">MIT (2025)</strong> reports 95% of enterprise AI initiatives deliver zero return. The primary culprit isn\\'t model capability, but stale, fragmented context.</p>');

content = content.replace(/<p className="text-pink-500">\s*Moving from pulling static documents to pushing live reality. Platforms like <strong className="text-gray-300">Timeplus, Confluent, StreamNative, and Redpanda<\/strong> are racing to fill this gap.\s*<\/p>/, '<p className="text-lg text-gray-500">Moving from pulling static documents to pushing live reality. Platforms like <strong className="text-black">Timeplus, Confluent, StreamNative, and Redpanda</strong> are racing to fill this gap.</p>');

content = content.replace(/<p className="text-pink-500">\s*<strong className="text-gray-300">IBM's \$11B acquisition of Confluent \(2026\)<\/strong> crystallizes the thesis: context engineering requires real-time streaming infrastructure.\s*<\/p>/, '<p className="text-lg text-gray-500"><strong className="text-black">IBM\\'s $11B acquisition of Confluent (2026)</strong> crystallizes the thesis: context engineering requires real-time streaming infrastructure.</p>');

// Slide 3 subtitle
content = content.replace(/<p className="text-xl md:text-2xl lg:text-3xl text-pink-400 font-semibold text-left max-w-4xl">\s*Not for operational reality\s*<\/p>/, '<p className="text-2xl text-pink-500 mb-8">Not for operational reality</p>');

// Slide 3 content p tags
content = content.replace(/<p className="text-pink-500">\s*Vector DBs require explicit re-indexing. Hourly or daily batch updates are an eternity for agents.\s*<\/p>/, '<p className="text-lg text-gray-500">Vector DBs require explicit re-indexing. Hourly or daily batch updates are an eternity for agents.</p>');

content = content.replace(/<p className="text-pink-500">\s*Standard vector search treats a 5-minute-old ticket the same as a 3-year-old one.\s*<\/p>/, '<p className="text-lg text-gray-500">Standard vector search treats a 5-minute-old ticket the same as a 3-year-old one.</p>');

content = content.replace(/<p className="text-pink-500">\s*Retrieves only when prompted. The system sits idle until explicitly queried.\s*<\/p>/, '<p className="text-lg text-gray-500">Retrieves only when prompted. The system sits idle until explicitly queried.</p>');

content = content.replace(/<p className="text-pink-500">\s*"RAG is document retrieval. Context is operational state."\s*<\/p>/, '<p className="text-xl text-gray-600 italic">"RAG is document retrieval. Context is operational state."</p>');

// Slide 4 subtitle
content = content.replace(/<p className="text-2xl md:text-3xl lg:text-4xl text-pink-400 font-semibold text-left max-w-4xl">\s*As a live materialized view\s*<\/p>/, '<p className="text-2xl text-pink-500 mb-8">As a live materialized view</p>');

// Slide 4 content p tags
content = content.replace(/<p className="text-pink-500">\s*Instead of pulling context via search at query time, context is continuously computed and <strong className="text-gray-200">pushed<\/strong> to the agent's working memory through streaming SQL.\s*<\/p>/, '<p className="text-lg text-gray-500">Instead of pulling context via search at query time, context is continuously computed and <strong className="text-black">pushed</strong> to the agent\\'s working memory through streaming SQL.</p>');

content = content.replace(/<p className="text-pink-500">\s*<strong className="text-pink-400 text-xl block mb-2">Pull-based RAG:<\/strong> Like early web request-response.<br\/><br\/>\s*<strong className="text-emerald-400 text-xl block mb-2">Push-based Streaming:<\/strong> Like event sourcing. The materialized view IS the context window.\s*<\/p>/, '<p className="text-lg text-gray-500"><strong className="text-pink-500 text-xl block mb-2">Pull-based RAG:</strong> Like early web request-response.<br/><br/><strong className="text-emerald-500 text-xl block mb-2">Push-based Streaming:</strong> Like event sourcing. The materialized view IS the context window.</p>');

// Slide 5 subtitle
content = content.replace(/<p className="text-xl md:text-2xl lg:text-3xl text-pink-400 font-semibold text-left max-w-4xl">\s*From raw events to semantic context\s*<\/p>/, '<p className="text-2xl text-pink-500 mb-8">From raw events to semantic context</p>');

// Slide 6 subtitle
content = content.replace(/<p className="text-xl md:text-2xl lg:text-3xl text-pink-400 font-semibold text-left max-w-4xl">\s*A three-tier system for advanced AI agents\s*<\/p>/, '<p className="text-2xl text-pink-500 mb-8">A three-tier system for advanced AI agents</p>');

// Slide 6 content p tags
content = content.replace(/<p className="text-pink-500">\s*"This isn't a minor issue that can be fixed by just using a slightly better LLM. The real hallmark of truly advanced AI agents is not just their reasoning abilities, but their deep, real-time awareness of the business environment."\s*<\/p>/, '<p className="text-xl text-gray-600 italic">"This isn\\'t a minor issue that can be fixed by just using a slightly better LLM. The real hallmark of truly advanced AI agents is not just their reasoning abilities, but their deep, real-time awareness of the business environment."</p>');

// Slide 7 subtitle
content = content.replace(/<p className="text-xl md:text-2xl lg:text-3xl text-pink-400 font-semibold text-left max-w-4xl">\s*Complementary, not competing\s*<\/p>/, '<p className="text-2xl text-pink-500 mb-8">Complementary, not competing</p>');

// Slide 8 subtitle
content = content.replace(/<p className="text-pink-500">\s*Stale data is the primary cause of AI agent failures — not model capability.\s*<\/p>/, '<p className="text-2xl text-pink-500 mb-8">Stale data is the primary cause of AI agent failures — not model capability.</p>');

// Slide 8 content p tags
content = content.replace(/<p className="text-pink-500">\s*of AI models experience quality degradation over time due to stale, incomplete, or fragmented data.\s*<\/p>/, '<p className="text-lg text-gray-500">of AI models experience quality degradation over time due to stale, incomplete, or fragmented data.</p>');

content = content.replace(/<p className="text-pink-500">\s*lost by a global e-commerce company when its product recommendation agent operated on stale inventory data for months, driving cancellations.\s*<\/p>/, '<p className="text-lg text-gray-500">lost by a global e-commerce company when its product recommendation agent operated on stale inventory data for months, driving cancellations.</p>');

// Slide 9 subtitle
content = content.replace(/<p className="text-pink-500">\s*"Hallucinations that enter an agent's context become persistently referenced, causing the agent to develop nonsensical strategies and repeat behaviors in pursuit of a goal that cannot be met."\s*<\/p>/, '<p className="text-2xl text-pink-500 mb-4 italic">"Hallucinations that enter an agent\\'s context become persistently referenced, causing the agent to develop nonsensical strategies and repeat behaviors in pursuit of a goal that cannot be met."</p>');

// Slide 9 content p tags
content = content.replace(/<p className="text-pink-500">— Google DeepMind, Gemini 2.5 Technical Report<\/p>/, '<p className="text-lg text-gray-500 font-semibold">— Google DeepMind, Gemini 2.5 Technical Report</p>');

content = content.replace(/<p className="text-pink-500">A user receives a wrong answer and ignores it.<\/p>/, '<p className="text-lg text-gray-500">A user receives a wrong answer and ignores it.</p>');

content = content.replace(/<p className="text-pink-500">An autonomous agent takes real-world actions based on false premises, cascading errors across downstream systems.<\/p>/, '<p className="text-lg text-gray-500">An autonomous agent takes real-world actions based on false premises, cascading errors across downstream systems.</p>');

// Slide 10 content p tags
content = content.replace(/<p className="text-pink-500">Faster insight-to-action cycle<\/p>/, '<p className="text-lg text-gray-500 font-medium">Faster insight-to-action cycle</p>');

content = content.replace(/<p className="text-pink-500">More accurate operational decisions<\/p>/, '<p className="text-lg text-gray-500 font-medium">More accurate operational decisions</p>');

content = content.replace(/<p className="text-pink-500">Reduction in decision latency<\/p>/, '<p className="text-lg text-gray-500 font-medium">Reduction in decision latency</p>');

content = content.replace(/<p className="text-pink-500">\s*Gartner projects that <strong className="text-gray-900">over 40% of agentic AI projects may be cancelled by 2027<\/strong> before scaling. The survivors will be those built on fresh, governed, real-time data infrastructure.\s*<\/p>/, '<p className="text-lg text-gray-500">Gartner projects that <strong className="text-black">over 40% of agentic AI projects may be cancelled by 2027</strong> before scaling. The survivors will be those built on fresh, governed, real-time data infrastructure.</p>');

// Slide 11 content p tags
content = content.replace(/<p className="text-pink-500">AI infrastructure VC funding in 2025<\/p>/, '<p className="text-lg text-gray-500 font-medium">AI infrastructure VC funding in 2025</p>');

content = content.replace(/<p className="text-pink-500">Projected agentic AI market by 2030<\/p>/, '<p className="text-lg text-gray-500 font-medium">Projected agentic AI market by 2030</p>');

content = content.replace(/<p className="text-pink-500">Enterprise apps embedding agents by 2026<\/p>/, '<p className="text-lg text-gray-500 font-medium">Enterprise apps embedding agents by 2026</p>');

content = content.replace(/<p className="text-pink-500">\s*"Streaming data represents the physical and digital reality of what is happening in your business right now... technology leaders should look for a platform that natively integrates messaging, stream processing, and analytics to provide AI agents with real-time, contextualized information."\s*<\/p>/, '<p className="text-xl text-gray-600 italic">"Streaming data represents the physical and digital reality of what is happening in your business right now... technology leaders should look for a platform that natively integrates messaging, stream processing, and analytics to provide AI agents with real-time, contextualized information."</p>');

// Remove dark backgrounds
content = content.replace(/bg-gray-900\/90/g, 'bg-white');
content = content.replace(/bg-gray-800\/40/g, 'bg-gray-50');
content = content.replace(/bg-gray-900\/60/g, 'bg-gray-100');
content = content.replace(/bg-gray-800\/30/g, 'bg-gray-50');
content = content.replace(/bg-gray-900/g, 'bg-white');
content = content.replace(/bg-gray-800/g, 'bg-gray-100');

// Fix text colors for light theme
content = content.replace(/text-gray-100/g, 'text-black');
content = content.replace(/text-gray-200/g, 'text-gray-800');
content = content.replace(/text-gray-300/g, 'text-gray-700');
content = content.replace(/text-gray-400/g, 'text-gray-600');

fs.writeFileSync('src/App.tsx', content);
console.log('Fixed App.tsx');
