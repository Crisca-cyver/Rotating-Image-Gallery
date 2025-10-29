# Rotating Image Gallery

A modern, interactive image gallery built with React, TypeScript, Vite, Tailwind CSS, and Swiper. Features a stunning coverflow effect with smooth animations and professional styling.

## Features

- **Coverflow Effect**: 3D rotating gallery with depth and shadows
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Autoplay**: Automatic slide transitions with pause on hover
- **Navigation**: Clickable pagination and arrow navigation
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Performance**: Lazy loading images and optimized animations
- **TypeScript**: Full type safety and IntelliSense support

## Technologies Used

- **React 19** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Swiper** - Touch-enabled slider library
- **ESLint** - Code linting and formatting

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rotating-image-gallery
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

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── components/
│   └── RotatingGallery.tsx    # Main gallery component
├── assets/
│   └── react.svg             # Default React logo
├── App.tsx                  # Main application component
├── App.css                  # Application-specific styles
├── index.css                # Global styles and Tailwind imports
└── main.tsx                 # Application entry point
```

## Customization

### Adding Your Own Images

Edit the `defaultImages` array in `src/components/RotatingGallery.tsx`:

```typescript
const customImages: ImageItem[] = [
  { src: "/path/to/your/image1.jpg", alt: "Description 1" },
  { src: "/path/to/your/image2.jpg", alt: "Description 2" },
  // Add more images...
];
```

### Styling Customization

The gallery uses Tailwind CSS for styling. You can customize the appearance by modifying the classes in the components or updating the Tailwind configuration.

### Swiper Configuration

Adjust the Swiper settings in `RotatingGallery.tsx` to change the effect parameters, autoplay timing, or add new modules.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Swiper](https://swiperjs.com/) - The amazing slider library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React](https://reactjs.dev/) - JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
