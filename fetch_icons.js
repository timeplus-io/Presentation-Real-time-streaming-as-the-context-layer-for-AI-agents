const fs = require('fs');
const https = require('https');
const path = require('path');

const icons = {
  Kafka: 'apachekafka',
  Flink: 'apacheflink',
  Google: 'google',
  Postgres: 'postgresql',
  LangGraph: 'langchain'
};

async function fetchIcon(name) {
  return new Promise((resolve, reject) => {
    https.get(`https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/${name}.svg`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  let output = `import React from 'react';\n\n`;
  for (const [componentName, iconName] of Object.entries(icons)) {
    let svg = await fetchIcon(iconName);
    if (!svg || svg.includes('404: Not Found')) {
      console.log('Not found:', iconName);
      continue;
    }
    
    let innerMatches = svg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
    let inner = innerMatches ? innerMatches[1] : '';
    
    // Convert attributes to React camelCase
    inner = inner.replace(/([a-z]+)-([a-z]+)="([^"]*)"/g, (match, p1, p2, p3) => {
      // Don't camelCase data- or aria- attributes
      if (p1 === 'data' || p1 === 'aria') return match;
      return p1 + p2.charAt(0).toUpperCase() + p2.slice(1) + '="' + p3 + '"';
    });
    
    inner = inner.replace(/<title>.*?<\/title>/, '');
    
    output += `export const ${componentName}Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    ${inner}
  </svg>
);\n\n`;
  }
  
  // Create components dir if not exists
  const componentsDir = path.join(__dirname, 'src', 'components');
  if (!fs.existsSync(componentsDir)){
      fs.mkdirSync(componentsDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(componentsDir, 'TechIcons.tsx'), output);
  console.log('Icons generated successfully.');
}

run();
