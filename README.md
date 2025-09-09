# Institute Research Symposium (IRS) 2024

A modern, responsive website for the Institute Research Symposium - a premier academic event bringing together brilliant minds to share research, foster innovation, and shape the future of scientific discovery.

## 🌟 Features

- **Modern Design**: Clean, professional interface with responsive design
- **Dark/Light Mode**: Toggle between light and dark themes
- **Interactive Sections**: Hero, About, Speakers, Gallery, and Contact sections
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Tech Stack**: Built with React, TypeScript, Vite, and Tailwind CSS
- **Performance Optimized**: Fast loading times and smooth animations
- **Form Handling**: Contact form with validation and toast notifications

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/institute-research-symposium.git
cd institute-research-symposium
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm start` - Start production preview server
- `npm run check` - Run TypeScript type checking

## 📁 Project Structure

```
IRS/
├── src/
│   ├── components/
│   │   ├── ui/           # Reusable UI components
│   │   ├── about-section.tsx
│   │   ├── contact-section.tsx
│   │   ├── footer.tsx
│   │   ├── gallery-modal.tsx
│   │   ├── gallery-section.tsx
│   │   ├── hero-section.tsx
│   │   ├── navigation.tsx
│   │   ├── speakers-section.tsx
│   │   └── theme-provider.tsx
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions and configurations
│   ├── pages/            # Page components
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── dist/                 # Production build output
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── postcss.config.js     # PostCSS configuration
```

## 🎨 Design System

The project uses a comprehensive design system built with Tailwind CSS:

- **Colors**: Custom color palette with CSS variables for theming
- **Typography**: Inter font family with responsive text scales
- **Components**: Reusable UI components following shadcn/ui patterns
- **Animations**: Smooth transitions and micro-interactions
- **Responsive**: Mobile-first approach with breakpoint-specific designs

## 🧩 Key Components

### Navigation
- Fixed header with smooth scrolling navigation
- Theme toggle button
- Responsive mobile menu

### Hero Section
- Eye-catching gradient background
- Call-to-action buttons
- Animated content on load

### About Section
- Feature cards with icons
- Event highlights
- Professional imagery

### Speakers Section
- Speaker cards with placeholder content
- Responsive grid layout
- Hover effects and animations

### Gallery Section
- YouTube video integration
- Photo gallery with modal support
- Previous event highlights

### Contact Section
- Contact information cards
- Contact form with validation
- Toast notifications for user feedback

## 🔧 Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **React Query** - Data fetching and state management
- **Wouter** - Minimalist routing
- **Framer Motion** - Animation library

## 🎯 Customization

### Updating Content

1. **Event Information**: Edit `src/components/hero-section.tsx` for main event details
2. **Speakers**: Update `src/components/speakers-section.tsx` with speaker information
3. **About Content**: Modify `src/components/about-section.tsx` for event description
4. **Contact Details**: Update `src/components/contact-section.tsx` with contact information

### Styling

1. **Colors**: Modify CSS variables in `src/index.css`
2. **Theme**: Update `tailwind.config.ts` for design system changes
3. **Typography**: Adjust font settings in the Tailwind config

### Adding Features

1. Create new components in `src/components/`
2. Add routing in `src/App.tsx`
3. Update navigation in `src/components/navigation.tsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/public/` directory.

### Deployment Options

- **Vercel**: Connect your GitHub repo to Vercel for automatic deployments
- **Netlify**: Drag and drop the `dist/public` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions to deploy from the repository
- **AWS S3**: Upload the built files to an S3 bucket configured for static hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern academic conference websites
- Icons by [Lucide](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)
- UI components inspired by [shadcn/ui](https://ui.shadcn.com/)

## 📧 Contact

For questions about this project, please reach out to:
- Email: irs@institute.edu
- Phone: +1 (234) 567-8900

---

Built with ❤️ for the academic research community
