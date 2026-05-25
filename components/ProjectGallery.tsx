"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Mínima distancia en píxeles para reconocer un deslizamiento (swipe)
  const minSwipeDistance = 50;

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
  }, []);

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  // Manejo de eventos de teclado (Escape, Flechas)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeLightbox, nextImage, prevImage]);

  // Bloquear el scroll del cuerpo de la página cuando el Lightbox está activo
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Eventos táctiles para gestos de deslizamiento (Swipe)
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="pt-16 border-t border-surface">
      <h2 className="text-3xl font-medium text-text-main mb-10">Imágenes del proyecto</h2>
      
      {/* Grid de imágenes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((img, i) => (
          <div 
            key={i} 
            onClick={() => openLightbox(i)}
            className="group relative bg-surface rounded-2xl h-[300px] overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 border border-surface/50"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={img} 
              alt={`${title} screenshot ${i + 1}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            {/* Capa de hover con efecto cristal */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
              <div className="bg-white/95 text-black px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 shadow-md transform scale-95 group-hover:scale-100 transition-transform duration-300">
                <Maximize2 className="w-4 h-4 text-blue-base" /> Ampliar
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Lightbox */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300"
          onClick={closeLightbox}
        >
          {/* Barra superior de controles e indicadores */}
          <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-10 text-white">
            <span className="font-mono text-sm tracking-widest text-white/70">
              {currentIndex + 1} / {images.length}
            </span>
            <button 
              onClick={closeLightbox}
              className="p-3 bg-white/10 hover:bg-white/20 transition-all rounded-full hover:scale-105 active:scale-95 text-white cursor-pointer border-none"
              aria-label="Cerrar visualizador"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Área del visualizador de imagen */}
          <div 
            className="relative w-full max-w-6xl max-h-[85vh] px-4 flex items-center justify-center select-none"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Botón Anterior */}
            <button 
              onClick={prevImage}
              className="absolute left-6 md:left-12 z-20 p-3 bg-white/10 hover:bg-white/20 hover:text-green-accent transition-all rounded-full hover:scale-105 active:scale-95 text-white cursor-pointer border-none"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Contenedor de Imagen con animación de fundido */}
            <div className="relative w-full h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                key={currentIndex}
                src={images[currentIndex]} 
                alt={`${title} vista en pantalla completa`} 
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-fade-in"
              />
            </div>

            {/* Botón Siguiente */}
            <button 
              onClick={nextImage}
              className="absolute right-6 md:right-12 z-20 p-3 bg-white/10 hover:bg-white/20 hover:text-green-accent transition-all rounded-full hover:scale-105 active:scale-95 text-white cursor-pointer border-none"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicadores de puntos inferiores */}
          <div className="absolute bottom-8 left-0 w-full flex justify-center gap-2.5 z-10" onClick={(e) => e.stopPropagation()}>
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer border-none ${
                  i === currentIndex ? 'w-8 bg-green-accent' : 'w-2.5 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Ir a imagen ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
