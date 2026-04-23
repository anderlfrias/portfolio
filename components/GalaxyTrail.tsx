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

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: TrailParticle[] = [];

    // Iniciar no centro
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let targetMouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let angle = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouse.x = e.clientX - rect.left;
      targetMouse.y = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      mouse = { x: canvas.width / 2, y: canvas.height / 2 };
      targetMouse = { x: canvas.width / 2, y: canvas.height / 2 };
    };

    window.addEventListener('resize', resize);
    resize();

    // Paleta de colores
    const colors = ['#1E4F8A', '#39B8C9', '#3FAF5A'];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const dx = targetMouse.x - mouse.x;
      const dy = targetMouse.y - mouse.y;
      mouse.x += dx * 0.15;
      mouse.y += dy * 0.15;

      angle += 0.08;

      const arms = 3;
      for (let i = 0; i < arms; i++) {
        const currentAngle = angle + (i * Math.PI * 2) / arms;
        const radius = 10;
        const px = mouse.x + Math.cos(currentAngle) * radius;
        const py = mouse.y + Math.sin(currentAngle) * radius;

        particles.push({
          x: px,
          y: py,
          vx: Math.cos(currentAngle + Math.PI / 2) * 2 + dx * 0.02,
          vy: Math.sin(currentAngle + Math.PI / 2) * 2 + dy * 0.02,
          size: Math.random() * 4.5 + 2.5,
          color: colors[i],
          life: 0,
          maxLife: 60 + Math.random() * 40
        });
      }

      ctx.globalCompositeOperation = dark ? 'lighter' : 'multiply';

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;

        p.vx *= 0.96;
        p.vy *= 0.96;

        const progress = p.life / p.maxLife;
        if (progress >= 1) {
          particles.splice(i, 1);
          continue;
        }

        const currentSize = p.size * (1 - progress);
        const alpha = 1 - Math.pow(progress, 2);

        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = dark ? alpha : alpha * 0.5;

        if (dark) {
          ctx.shadowBlur = 12;
          ctx.shadowColor = p.color;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationFrameId = window.requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [dark]);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />;
}
