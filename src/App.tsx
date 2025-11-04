// import React from "react";
import './App.css'
import RotatingGallery from "./components/RotatingGallery";
export default function App() {
  return (
    <main className="min-h-screen grid place-content-center px-4">
      <header className="text-center font-sans">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-100">
          Rotating Image Gallery
        </h1>
        <p className="text-slate-300 mt-2">
          Galería con efecto coverflow usando Swiper + Tailwind.
        </p>
      </header>

      <RotatingGallery className="mt-8 w-full max-w-5xl mx-auto" />

      <footer className="mt-10 text-sm text-slate-400 text-center">
        Hecho con Vite + React + TypeScript + Tailwind + Swiper
      </footer>
    </main>
  );
}