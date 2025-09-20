import nunjucks from 'nunjucks';
import fs from 'fs-extra';
import path from 'path';
import { glob } from 'glob';

// Configure Nunjucks
const env = nunjucks.configure('src/templates', {
  autoescape: true,
  trimBlocks: true,
  lstripBlocks: true
});

// Ensure dist directory exists
await fs.ensureDir('dist');
await fs.ensureDir('dist/assets');

// Copy assets
await fs.copy('src/assets', 'dist/assets');

// Data for templates
const templateData = {
  title: '📄 Internship Task Document',
  company: 'TechCorp Solutions',
  date: new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }),
  tasks: [
    {
      id: 1,
      title: '🚀 Frontend Development Challenge',
      description: 'Create a responsive web application using modern JavaScript frameworks',
      priority: 'High',
      deadline: '2025-02-15',
      requirements: [
        'Responsive design implementation',
        'Cross-browser compatibility',
        'Performance optimization',
        'Accessibility compliance'
      ]
    },
    {
      id: 2,
      title: '🔧 API Integration Task',
      description: 'Integrate REST APIs and handle data management efficiently',
      priority: 'Medium',
      deadline: '2025-02-20',
      requirements: [
        'RESTful API consumption',
        'Error handling implementation',
        'Data validation',
        'Loading states management'
      ]
    },
    {
      id: 3,
      title: '📊 Data Visualization Project',
      description: 'Build interactive charts and data representation components',
      priority: 'High',
      deadline: '2025-02-25',
      requirements: [
        'Interactive chart implementation',
        'Real-time data updates',
        'Export functionality',
        'Mobile-friendly visualizations'
      ]
    }
  ],
  resources: [
    {
      name: 'Documentation Portal',
      url: 'https://docs.techcorp.com',
      description: 'Complete technical documentation and guidelines'
    },
    {
      name: 'Design System',
      url: 'https://design.techcorp.com',
      description: 'UI components and design patterns'
    },
    {
      name: 'Code Repository',
      url: 'https://github.com/techcorp/internship',
      description: 'Project templates and starter code'
    }
  ],
  contact: {
    supervisor: 'Jane Smith',
    email: 'jane.smith@techcorp.com',
    slack: '@jane.smith',
    office: 'Room 401, Tech Building'
  }
};

// Find and render all template files
const templateFiles = await glob('src/templates/**/*.njk');

for (const templateFile of templateFiles) {
  const relativePath = path.relative('src/templates', templateFile);
  const outputPath = path.join('dist', relativePath.replace('.njk', '.html'));
  
  // Ensure output directory exists
  await fs.ensureDir(path.dirname(outputPath));
  
  // Render template
  const rendered = env.render(relativePath, templateData);
  await fs.writeFile(outputPath, rendered);
  
  console.log(`✅ Rendered: ${templateFile} → ${outputPath}`);
}

console.log('🎉 Build completed successfully!');