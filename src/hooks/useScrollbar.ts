import { useEffect } from 'react';

export const useScrollbar = () => {
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                document.documentElement.classList.add('is-scrolling');
            } else {
                document.documentElement.classList.remove('is-scrolling');
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
};
