import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor: React.FC = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let mx = 0, my = 0, rx = 0, ry = 0;
        let rafId: number;

        const onMove = (e: MouseEvent) => {
            mx = e.clientX;
            my = e.clientY;
        };

        const loop = () => {
            if (dotRef.current) {
                dotRef.current.style.left = mx + 'px';
                dotRef.current.style.top = my + 'px';
            }
            rx += (mx - rx) * 0.12;
            ry += (my - ry) * 0.12;
            if (ringRef.current) {
                ringRef.current.style.left = rx + 'px';
                ringRef.current.style.top = ry + 'px';
            }
            rafId = requestAnimationFrame(loop);
        };

        const addHover = () => {
            dotRef.current?.classList.add('cursor-hover');
            ringRef.current?.classList.add('cursor-ring-hover');
        };
        const removeHover = () => {
            dotRef.current?.classList.remove('cursor-hover');
            ringRef.current?.classList.remove('cursor-ring-hover');
        };

        document.addEventListener('mousemove', onMove);
        rafId = requestAnimationFrame(loop);

        const targets = document.querySelectorAll('a, button');
        targets.forEach(el => {
            el.addEventListener('mouseenter', addHover);
            el.addEventListener('mouseleave', removeHover);
        });

        return () => {
            document.removeEventListener('mousemove', onMove);
            cancelAnimationFrame(rafId);
            targets.forEach(el => {
                el.removeEventListener('mouseenter', addHover);
                el.removeEventListener('mouseleave', removeHover);
            });
        };
    }, []);

    return (
        <>
            <div className="cursor-dot" ref={dotRef} />
            <div className="cursor-ring" ref={ringRef} />
        </>
    );
};

export default CustomCursor;
