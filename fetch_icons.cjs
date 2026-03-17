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

function camelizeProps(str) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
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
    
    // Replace kebab case with camel case for React props
    inner = inner.replace(/(fill-rule|clip-rule|stroke-width|stroke-linecap|stroke-linejoin|stroke-miterlimit)="[^"]*"/g, match => {
      let [key, val] = match.split('=');
      return camelizeProps(key) + '=' + val;
    });
    
    inner = inner.replace(/<title>.*?<\/title>/, '');
    
    output += `export const ${componentName}Icon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    ${inner}
  </svg>
);\n\n`;
  }
  
  const componentsDir = path.join(__dirname, 'src', 'components');
  if (!fs.existsSync(componentsDir)){
      fs.mkdirSync(componentsDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(componentsDir, 'TechIcons.tsx'), output);
  console.log('Icons generated successfully in src/components/TechIcons.tsx');
}

run();
