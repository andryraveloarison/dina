import React, { useEffect, useState, useRef } from 'react';
import './CustomScrollbar.css';

interface CustomScrollbarProps {
    isLoading: boolean;
}

const CustomScrollbar: React.FC<CustomScrollbarProps> = ({ isLoading }) => {
    const [thumbHeight, setThumbHeight] = useState(0);
    const [thumbTop, setThumbTop] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const scrollTimer = useRef<NodeJS.Timeout | null>(null);

    const updateScrollbar = () => {
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
        
        // Handle visibility
        setIsVisible(true);
        if (scrollTimer.current) clearTimeout(scrollTimer.current);
        scrollTimer.current = setTimeout(() => {
            setIsVisible(false);
        }, 1500);
    };

    useEffect(() => {
        window.addEventListener('scroll', updateScrollbar, { passive: true });
        window.addEventListener('resize', updateScrollbar);
        updateScrollbar();

        return () => {
            window.removeEventListener('scroll', updateScrollbar);
            window.removeEventListener('resize', updateScrollbar);
            if (scrollTimer.current) clearTimeout(scrollTimer.current);
        };
    }, []);

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
