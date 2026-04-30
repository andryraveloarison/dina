import React, { useEffect, useState, useRef, useCallback } from 'react';
import './CustomScrollbar.css';

interface CustomScrollbarProps {
    isLoading: boolean;
}

const CustomScrollbar: React.FC<CustomScrollbarProps> = ({ isLoading }) => {
    const [thumbHeight, setThumbHeight] = useState(0);
    const [thumbTop, setThumbTop] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null); // ← fix NodeJS.Timeout

    const updateScrollbar = useCallback(() => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

        if (scrollHeight <= clientHeight) {
            setThumbHeight(0);
            return;
        }

        const height = (clientHeight / scrollHeight) * clientHeight;
        const maxScroll = scrollHeight - clientHeight;
        const scrollRatio = scrollTop / maxScroll;
        const top = scrollRatio * (clientHeight - height);

        setThumbHeight(height);
        setThumbTop(top);

        setIsVisible(true);
        if (scrollTimer.current) clearTimeout(scrollTimer.current);
        scrollTimer.current = setTimeout(() => {
            setIsVisible(false);
        }, 1500);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', updateScrollbar, { passive: true });
        window.addEventListener('resize', updateScrollbar);

        // ← fix "calling setState synchronously within an effect"
        const raf = requestAnimationFrame(() => {
            updateScrollbar();
        });

        return () => {
            window.removeEventListener('scroll', updateScrollbar);
            window.removeEventListener('resize', updateScrollbar);
            cancelAnimationFrame(raf);
            if (scrollTimer.current) clearTimeout(scrollTimer.current);
        };
    }, [updateScrollbar]);

    if (thumbHeight === 0 || isLoading) return null;

    return (
        <div className={`custom-scrollbar-track ${isVisible ? 'visible' : ''}`}>
            <div
                className="custom-scrollbar-thumb"
                style={{
                    height: `${thumbHeight}px`,
                    transform: `translateY(${thumbTop}px)`
                }}
            />
        </div>
    );
};

export default CustomScrollbar;