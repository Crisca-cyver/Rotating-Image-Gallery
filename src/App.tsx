import React from "react";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RotatingGallery from "./components/RotatingGallery";

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <header className="text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Rotating Image Gallery</h1>
        <p className="text-gray-300 mt-2">
          Galería con efecto coverflow usando Swiper + Tailwind.
        </p>
      </header>

      <RotatingGallery className="mt-6" />

      <footer className="mt-10 text-sm text-gray-400">
        Hecho con Vite + React + TypeScript + Tailwind + Swiper
      </footer>
    </main>
  );
}

export default App
