import React, { useEffect, useRef } from 'react';

const ImageZoom: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imgWrapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const imgWrap = imgWrapRef.current;
        if (!container || !imgWrap) return;

        const onScroll = () => {
            const rect = container.getBoundingClientRect();

            const triggerStart = window.innerHeight * 0.8;
            const triggerEnd = window.innerHeight * 0.1;

            const rawProgress = (triggerStart - rect.top) / (triggerStart - triggerEnd);
            const progress = Math.max(0, Math.min(1, rawProgress)); // 🔥 CLAMP

            const scale = 0.72 + progress * 0.28; // tu peux aller jusqu'à 1
            const radius = Math.round((1 - progress) * 24);
            const labelOpacity = Math.max(0, 1 - progress * 3);

            imgWrap.style.transform = `scale(${scale})`;
            imgWrap.style.borderRadius = `${radius}px`;

            const label = container.querySelector<HTMLElement>('.iz-label');
            if (label) label.style.opacity = String(labelOpacity);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll(); // init
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="iz-container" ref={containerRef}>
            <div className="iz-sticky">
                <div className="iz-img-wrap" ref={imgWrapRef}>
                    <img src="/dina.png" alt="Dina Fitiavana" className="iz-img" />
                </div>
                <p className="iz-label">Dina Fitiavana</p>
            </div>
        </div>
    );
};

export default ImageZoom;
