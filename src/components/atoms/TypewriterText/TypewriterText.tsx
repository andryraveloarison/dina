import React from 'react';
import './TypewriterText.css';

interface TypewriterTextProps {
    text: string;
    delay?: number;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({ text, delay = 0 }) => {
    return (
        <span className="typewriter-text">
            {text.split('').map((char, index) => (
                <span
                    key={index}
                    className="type-char"
                    style={{ animationDelay: `${delay + index * 0.05}s` }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </span>
    );
};
