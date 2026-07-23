"use client";

import React, { useEffect, useRef } from 'react';

export interface GalaxyTrailProps {
  dark?: boolean;
}

interface TrailNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface TrailLine {
  color: string;
  spring: number;
  friction: number;
  nodes: TrailNode[];
}

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function GalaxyTrail({ dark = false }: GalaxyTrailProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;

    let animationFrameId: number;

    // Configuraciones de rendimiento dinámicas
    let isMobile = window.innerWidth < 768;
    let targetFps = isMobile ? 30 : 60;
    let frameInterval = 1000 / targetFps;
    let lastRenderTime = performance.now();
    let logicalWidth = window.innerWidth;
    let logicalHeight = window.innerHeight;

    let mouse = { x: logicalWidth / 2, y: logicalHeight / 2 };

    // Física de cadena de resortes: cada línea es una serie de nodos que se
    // persiguen unos a otros (el primero persigue al mouse), como una cuerda
    // que se sacude con inercia. El "rastro" nace del retraso físico entre
    // nodos, no de un historial de posiciones.
    const DAMPENING = 0.25;
    const TENSION = 0.98;
    const colors = ['#1E4F8A', '#39B8C9', '#3FAF5A'];
    let lines: TrailLine[] = [];

    const setupLines = () => {
      const trailCount = isMobile ? 5 : 9;
      const nodesPerLine = isMobile ? 12 : 22;
      lines = Array.from({ length: trailCount }, (_, i) => ({
        color: colors[i % colors.length],
        spring: 0.38 + (i / trailCount) * 0.03,
        friction: 0.5 + (Math.random() * 0.02 - 0.01),
        nodes: Array.from({ length: nodesPerLine }, () => ({
          x: mouse.x,
          y: mouse.y,
          vx: 0,
          vy: 0,
        })),
      }));
    };
    setupLines();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const resize = () => {
      if (!canvas) return;
      isMobile = window.innerWidth < 768;
      targetFps = isMobile ? 30 : 60;
      frameInterval = 1000 / targetFps;

      logicalWidth = window.innerWidth;
      logicalHeight = window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 2);

      canvas.width = logicalWidth * dpr;
      canvas.height = logicalHeight * dpr;

      canvas.style.width = `${logicalWidth}px`;
      canvas.style.height = `${logicalHeight}px`;

      ctx.scale(dpr, dpr);

      mouse = { x: logicalWidth / 2, y: logicalHeight / 2 };

      // Reconstruir las líneas para el nuevo conteo/posición y evitar saltos
      setupLines();
    };

    window.addEventListener('resize', resize, { passive: true });
    resize();

    const lineWidth = isMobile ? 1.4 : 1.8;
    const strokeAlpha = dark ? 0.55 : 0.4;

    const updateLine = (line: TrailLine) => {
      let spring = line.spring;
      const nodes = line.nodes;

      const head = nodes[0];
      head.vx += (mouse.x - head.x) * spring;
      head.vy += (mouse.y - head.y) * spring;

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (i > 0) {
          const prev = nodes[i - 1];
          node.vx += (prev.x - node.x) * spring;
          node.vy += (prev.y - node.y) * spring;
          node.vx += prev.vx * DAMPENING;
          node.vy += prev.vy * DAMPENING;
        }
        node.vx *= line.friction;
        node.vy *= line.friction;
        node.x += node.vx;
        node.y += node.vy;
        spring *= TENSION;
      }
    };

    const drawLine = (line: TrailLine) => {
      const nodes = line.nodes;
      ctx.beginPath();
      ctx.moveTo(nodes[0].x, nodes[0].y);

      let i = 1;
      const last = nodes.length - 2;
      for (; i < last; i++) {
        const a = nodes[i];
        const b = nodes[i + 1];
        const mx = 0.5 * (a.x + b.x);
        const my = 0.5 * (a.y + b.y);
        ctx.quadraticCurveTo(a.x, a.y, mx, my);
      }
      const a = nodes[i];
      const b = nodes[i + 1];
      ctx.quadraticCurveTo(a.x, a.y, b.x, b.y);

      ctx.strokeStyle = hexToRgba(line.color, strokeAlpha);
      ctx.lineWidth = lineWidth;
      ctx.stroke();

      // Resplandor suave adicional (solo escritorio + fondo oscuro)
      if (dark && !isMobile) {
        ctx.lineWidth = lineWidth + 3;
        ctx.strokeStyle = hexToRgba(line.color, 0.12);
        ctx.stroke();
      }
    };

    const draw = (currentTime: number) => {
      animationFrameId = window.requestAnimationFrame(draw);

      const deltaTime = currentTime - lastRenderTime;
      if (deltaTime < frameInterval) return;
      lastRenderTime = currentTime - (deltaTime % frameInterval);

      ctx.clearRect(0, 0, logicalWidth, logicalHeight);
      ctx.globalCompositeOperation = dark ? 'lighter' : 'source-over';
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      for (const line of lines) {
        updateLine(line);
        drawLine(line);
      }

      ctx.globalCompositeOperation = 'source-over';
    };

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
