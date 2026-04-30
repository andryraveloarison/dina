import React, { useState, useEffect } from 'react';
import './Preloader.css'

interface PreloaderProps {
    onLoadingComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isConverged, setIsConverged] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isReady, setIsReady] = useState(false);

    const images = [
        '/photo2.jpeg',
        '/photo3.jpeg',
        '/photo1.jpeg',
        '/photo2.jpeg',
        '/photo3.jpeg',
    ];

    useEffect(() => {


        document.body.style.overflow = 'hidden';
        const progressInterval = setInterval(() => {
            setIsReady(true)
            setProgress((prev) => {
                const next = prev + 1.2;
                if (next >= 100) {
                    clearInterval(progressInterval);
                    handleSequence();
                    return 100;
                }
                return next;
            });
        }, 35);

        const handleSequence = async () => {

            await new Promise(r => setTimeout(r, 200));

            // Step 1: Converge images to center
            setIsConverged(true);

            // Wait for convergence to finish
            await new Promise(r => setTimeout(r, 900));

            setIsHidden(true);
            onLoadingComplete();

            await new Promise(r => setTimeout(r, 1000));
            document.body.style.overflow = '';
        };

        return () => {
            clearInterval(progressInterval);
            document.body.style.overflow = '';
        };
    }, [onLoadingComplete]);

    return (
        <div id="preloader" className={`${isHidden ? 'hidden' : ''} ${isConverged ? 'is-converged' : ''}  `}>
            <div className="pre-bg"></div>
            <div className="pre-name">Dina Fitiavana</div>

            <div className={`pre-img-track ${isReady ? 'is-ready' : ''} `}>
                {[0, 1, 2, 3, 4].map((i) => (
                    <img
                        key={i}
                        src={images[i]}
                        className={`pre-img-side-${i}`}
                        style={{
                            filter: i === 0 ? 'grayscale(100%) contrast(1.1)' :
                                i === 1 ? 'grayscale(100%) brightness(1.3) contrast(0.85)' :
                                    i === 2 ? 'none' : // Center image is clear
                                        i === 3 ? 'grayscale(100%) contrast(1.05)' :
                                            'grayscale(100%) brightness(0.7)',
                            zIndex: i === 2 ? 10 : 5
                        }}
                    />
                ))}
            </div>

            <div className="pre-counter">
                <span>{Math.floor(progress)}</span>%
            </div>
        </div>
    );
};

export default Preloader;
