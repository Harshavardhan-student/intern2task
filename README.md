# 📄 Internship Task 2 - Nunjucks + Vite Implementation

A modern static site generator implementation using **Nunjucks** templating engine and **Vite** bundler to recreate the comprehensive internship task document.

## 🛠️ Technology Stack Choices

### Templating Engine: **Nunjucks**
- **Why chosen**: Nunjucks provides powerful templating features with excellent template inheritance, macros, and filters
- **Benefits**: 
  - Rich templating syntax with conditionals, loops, and filters
  - Template inheritance and includes for modular design
  - Excellent developer experience with clear error messages
  - Great performance and extensive documentation

### Bundler/Task Runner: **Vite**
- **Why chosen**: Vite offers lightning-fast development server and optimized production builds
- **Benefits**:
  - Extremely fast hot module replacement (HMR)
  - Modern ES modules support
  - Optimized production builds with rollup
  - Excellent developer experience out of the box
  - Simple configuration and great plugin ecosystem

## 📁 Project Structure

```
├── src/
│   ├── templates/           # Nunjucks template files
│   │   ├── index.njk       # Main template
│   │   └── components/     # Reusable template components
│   │       ├── header.njk
│   │       ├── overview.njk
│   │       ├── tasks.njk
│   │       ├── resources.njk
│   │       ├── contact.njk
│   │       └── footer.njk
│   └── assets/             # Static assets
│       ├── styles.css      # Main stylesheet
│       └── script.js       # JavaScript functionality
├── dist/                   # Compiled output (auto-generated)
├── build/                  # Final production build
├── build.js               # Custom build script
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Development Server**
   ```bash
   npm run dev
   ```
   This will:
   - Run the custom build script to process Nunjucks templates
   - Start the Vite development server
   - Open the browser automatically
   - Enable hot reloading for immediate feedback

3. **Production Build**
   ```bash
   npm run build
   ```
   This will:
   - Process templates with optimized data
   - Create optimized production assets
   - Generate the final distribution files in `build/`

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

5. **Clean Build Files**
   ```bash
   npm run clean
   ```

## 📋 Features Implemented

### ✅ Template System
- **Component-based Architecture**: Modular templates using Nunjucks includes
- **Data-driven Content**: Dynamic content generation from JavaScript data objects
- **Template Inheritance**: Clean separation of layout and content
- **Conditional Rendering**: Smart rendering based on data availability

### ✅ Modern Design
- **Responsive Layout**: Mobile-first design with CSS Grid and Flexbox
- **Professional Styling**: Clean, modern UI with consistent spacing and typography
- **Interactive Elements**: Hover effects, smooth transitions, and micro-interactions
- **Accessibility**: Proper semantic HTML, focus states, and keyboard navigation

### ✅ Rich Content
- **Emojis Integration**: Consistent emoji usage for visual appeal
- **Clickable Links**: External links with proper targeting and security
- **Professional Formatting**: Typography hierarchy, proper spacing, and visual balance
- **Interactive Components**: Buttons, progress indicators, and animated elements

### ✅ Enhanced Functionality
- **Smooth Animations**: CSS animations and JavaScript-powered interactions
- **Progress Tracking**: Simulated task progress indicators
- **Copy to Clipboard**: Contact information quick-copy functionality
- **Scroll Animations**: Intersection Observer API for scroll-triggered animations

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3b82f6) - Professional and trustworthy
- **Success**: Green (#10b981) - Positive actions and completion
- **Warning**: Orange (#f59e0b) - Attention and medium priority
- **Error**: Red (#ef4444) - High priority and alerts
- **Neutrals**: Gray scale for text and backgrounds

### Typography
- **Font Family**: Inter - Modern, readable sans-serif
- **Scale**: Modular scale with consistent sizing
- **Weights**: 300, 400, 500, 600, 700 for proper hierarchy

### Components
- **Cards**: Consistent elevation and rounded corners
- **Buttons**: Primary and secondary variants with hover states
- **Forms**: Accessible input styling with focus indicators
- **Grid Systems**: Responsive layouts for different screen sizes

## 🔧 Build Process Explained

### Custom Build Script (`build.js`)
1. **Template Processing**: Configures Nunjucks environment with proper settings
2. **Data Injection**: Provides structured data to templates
3. **Asset Copying**: Moves static assets to distribution directory
4. **File Generation**: Renders templates to static HTML files
5. **Path Resolution**: Handles relative paths and asset references

### Vite Integration
1. **Development Server**: Serves processed files with hot reloading
2. **Asset Processing**: Handles CSS, JavaScript, and image optimization
3. **Production Build**: Creates optimized bundles with code splitting
4. **Preview Server**: Tests production build locally

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px - Full layout with sidebar content
- **Tablet**: 768px - 1024px - Adjusted grid layouts
- **Mobile**: < 768px - Single column, stacked components
- **Small Mobile**: < 480px - Compact spacing and simplified navigation

## 🎯 Key Achievements

### ✅ Exact Recreation
- **Visual Fidelity**: Matches the original task document formatting
- **Content Structure**: Preserves all original information and organization
- **Interactive Elements**: Maintains all clickable links and functionality
- **Professional Appearance**: Clean, modern design suitable for corporate use

### ✅ Technical Excellence
- **Modern Build Tools**: Leverages latest web development technologies
- **Performance Optimized**: Fast loading times and smooth interactions
- **Code Quality**: Well-organized, commented, and maintainable codebase
- **Best Practices**: Follows industry standards for web development

### ✅ Enhanced Experience
- **Interactive Features**: Adds meaningful interactivity beyond static content
- **Accessibility**: Ensures inclusive design for all users
- **Mobile Experience**: Optimized for all device sizes
- **Professional Polish**: Attention to detail in animations and micro-interactions

## 📞 Support & Contact

For questions about this implementation or the templating system:

- **Technical Questions**: Review the code comments and documentation
- **Build Issues**: Check the console output and error messages
- **Feature Requests**: Consider the educational purpose of this project

---

**Generated with ❤️ using Nunjucks + Vite**
*A modern approach to static site generation*