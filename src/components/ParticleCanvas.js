import React, { useEffect } from 'react';

const ParticleCanvas = () => {
    useEffect(() => {
        const canvas = document.getElementById('particle-canvas');
        const ctx = canvas.getContext('2d');
        let particles = [];
        let mouseX = 0, mouseY = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', e => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 4 , // Increased size (2 to 6)
                vx: Math.random() * 1 - 0.5,
                vy: Math.random() * 1 - 0.5,
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                const dx = mouseX - p.x;
                const dy = mouseY - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    p.x += dx * 0.02;
                    p.y += dy * 0.02;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(56, 189, 248, 0.3)'; // Brighter and more opaque
                ctx.shadowBlur = 10; // Glow effect
                ctx.shadowColor = 'rgba(56, 189, 248, 0.9)';
                ctx.fill();
            });
            requestAnimationFrame(animate);
        };
        animate();
    }, []);

    return <canvas id="particle-canvas" className="fixed inset-0 pointer-events-none" />;
};

export default ParticleCanvas;
