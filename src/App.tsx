import React from "react";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RotatingGallery from "./components/RotatingGallery";

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-3">Rotating Gallery</h1>
        <p className="text-gray-600 text-lg">
          A minimalist image gallery with smooth transitions
        </p>
      </header>

      <RotatingGallery className="mb-8" />

      <footer className="text-sm text-gray-500">
        Built with modern web technologies
      </footer>
    </main>
  );
}

export default App
