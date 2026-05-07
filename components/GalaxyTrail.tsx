"use client";

import React, { useEffect, useRef } from 'react';

export interface TrailParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  life: number;
  maxLife: number;
}

export interface GalaxyTrailProps {
  dark?: boolean;
}

export default function GalaxyTrail({ dark = false }: GalaxyTrailProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Obtener contexto optimizado, desynchronized reduce latencia si está soportado
    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;

    let animationFrameId: number;
    const particles: TrailParticle[] = [];
    
    // Configuraciones de rendimiento dinámicas
    let isMobile = window.innerWidth < 768;
    let maxParticles = isMobile ? 35 : 70; // Reducción estricta de partículas
    let targetFps = isMobile ? 30 : 60; 
    let frameInterval = 1000 / targetFps;
    let lastRenderTime = performance.now();
    let logicalWidth = window.innerWidth;
    let logicalHeight = window.innerHeight;

    // Posición inicial (centro de la pantalla)
    let mouse = { x: logicalWidth / 2, y: logicalHeight / 2 };
    let targetMouse = { x: logicalWidth / 2, y: logicalHeight / 2 };
    let angle = 0;

    // Escuchar eventos pasivos para no bloquear el scroll
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouse.x = e.clientX - rect.left;
      targetMouse.y = e.clientY - rect.top;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        targetMouse.x = e.touches[0].clientX - rect.left;
        targetMouse.y = e.touches[0].clientY - rect.top;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const resize = () => {
      if (!canvas) return;
      isMobile = window.innerWidth < 768;
      maxParticles = isMobile ? 35 : 70;
      targetFps = isMobile ? 30 : 60;
      frameInterval = 1000 / targetFps;
      
      logicalWidth = window.innerWidth;
      logicalHeight = window.innerHeight;
      
      // Limitar devicePixelRatio (1.25 max en móvil, 2 max en desktop para evitar exceso de píxeles)
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 2);
      
      canvas.width = logicalWidth * dpr;
      canvas.height = logicalHeight * dpr;
      
      canvas.style.width = `${logicalWidth}px`;
      canvas.style.height = `${logicalHeight}px`;
      
      ctx.scale(dpr, dpr);
      
      // Resetear posición al centro si cambia el tamaño
      mouse = { x: logicalWidth / 2, y: logicalHeight / 2 };
      targetMouse = { x: logicalWidth / 2, y: logicalHeight / 2 };
    };

    window.addEventListener('resize', resize, { passive: true });
    resize();

    const colors = ['#1E4F8A', '#39B8C9', '#3FAF5A'];

    const draw = (currentTime: number) => {
      animationFrameId = window.requestAnimationFrame(draw);

      const deltaTime = currentTime - lastRenderTime;
      
      // Limitar FPS
      if (deltaTime < frameInterval) return;
      
      // Ajustar tiempo del último frame (evitando acumulación de retrasos)
      lastRenderTime = currentTime - (deltaTime % frameInterval);

      // Limpiar canvas de forma eficiente usando dimensiones lógicas
      ctx.clearRect(0, 0, logicalWidth, logicalHeight);

      // Interpolación suave del movimiento (easing)
      const dx = targetMouse.x - mouse.x;
      const dy = targetMouse.y - mouse.y;
      mouse.x += dx * 0.15;
      mouse.y += dy * 0.15;

      angle += isMobile ? 0.05 : 0.08;

      const arms = isMobile ? 2 : 3;

      // Generar partículas de forma controlada
      if (particles.length < maxParticles) {
        // En móvil emitimos menos partículas por frame
        const emitChance = isMobile ? 0.5 : 1; 
        
        if (Math.random() <= emitChance) {
          for (let i = 0; i < arms; i++) {
            const currentAngle = angle + (i * Math.PI * 2) / arms;
            const radius = isMobile ? 6 : 10;
            const px = mouse.x + Math.cos(currentAngle) * radius;
            const py = mouse.y + Math.sin(currentAngle) * radius;

            particles.push({
              x: px,
              y: py,
              vx: Math.cos(currentAngle + Math.PI / 2) * 2 + dx * 0.02,
              vy: Math.sin(currentAngle + Math.PI / 2) * 2 + dy * 0.02,
              size: Math.random() * (isMobile ? 3.5 : 4.5) + 2,
              color: colors[i],
              life: 0,
              maxLife: (isMobile ? 35 : 60) + Math.random() * 30
            });
          }
        }
      }

      // Evitar costoso 'multiply' si no es necesario o aligerar el efecto en modo dark
      ctx.globalCompositeOperation = dark ? 'lighter' : 'source-over'; 

      // Renderizar y actualizar partículas iterando de atrás hacia adelante
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;

        // Fricción suave
        p.vx *= 0.96;
        p.vy *= 0.96;

        const progress = p.life / p.maxLife;
        
        // Culling de partículas muertas o forzar límite si array excede el tamaño permitido
        if (progress >= 1 || (particles.length > maxParticles && i < particles.length - maxParticles)) {
          particles.splice(i, 1);
          continue;
        }

        const currentSize = p.size * (1 - progress);
        const alpha = 1 - Math.pow(progress, 2);

        // Renderizado del núcleo de la partícula
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = dark ? alpha : alpha * 0.7;
        ctx.fill();
        
        // Simulación ligera de resplandor (reemplaza a shadowBlur) para dispositivos potentes
        if (dark && !isMobile && currentSize > 1.5) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, currentSize * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = alpha * 0.15;
          ctx.fill();
        }
      }

      // Restaurar estado del contexto por seguridad
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
    };

    // Iniciar loop
    animationFrameId = window.requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [dark]);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />;
}
