import React, { useEffect, useState } from 'react';
const ParticleCanvas = () => {
    useEffect(() => {
      const canvas = document.getElementById('particle-canvas');
      if (!canvas) return; // Add null check
      
      const ctx = canvas.getContext('2d');
      let particles = [];
      let mouseX = 0, mouseY = 0;
      let animationFrameId;
  
      const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
  
      const createParticles = () => {
        particles = [];
        const numberOfParticles = Math.min(window.innerWidth, window.innerHeight) * 0.1;
        
        for (let i = 0; i < numberOfParticles; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            connections: [],
            alpha: Math.random() * 0.5 + 0.5,
          });
        }
      };
  
      const drawLine = (p1, p2, distance, maxDistance) => {
        const alpha = 1 - (distance / maxDistance);
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(56, 189, 248, ${alpha * 0.2})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      };
  
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((p, index) => {
          p.x += p.vx;
          p.y += p.vy;
  
          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
  
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const force = (120 - dist) / 120;
            p.x -= dx * force * 0.01;
            p.y -= dy * force * 0.01;
          }
  
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha * 0.5})`;
          ctx.fill();
  
          particles.forEach((p2, j) => {
            if (index !== j) {
              const dx = p.x - p2.x;
              const dy = p.y - p2.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              const maxDistance = 100;
  
              if (distance < maxDistance) {
                drawLine(p, p2, distance, maxDistance);
              }
            }
          });
        });
  
        animationFrameId = requestAnimationFrame(animate);
      };
  
      resize();
      createParticles();
      animate();
  
      window.addEventListener('resize', () => {
        resize();
        createParticles();
      });
  
      const mouseMoveHandler = e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      };
  
      window.addEventListener('mousemove', mouseMoveHandler);
  
      return () => {
        window.removeEventListener('resize', resize);
        window.removeEventListener('mousemove', mouseMoveHandler);
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    }, []);
  
    return <canvas id="particle-canvas" className="fixed inset-0 pointer-events-none z-0" />;
  };
export default ParticleCanvas;