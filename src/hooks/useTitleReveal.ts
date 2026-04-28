import { useEffect } from 'react';

export const useTitleReveal = () => {
    useEffect(() => {
        // Wrap words inside every .section-title
        document.querySelectorAll<HTMLElement>('.section-title').forEach((title) => {
            // Skip if already processed
            if (title.dataset.revealed) return;
            title.dataset.revealed = 'true';

            const nodes = Array.from(title.childNodes);
            title.innerHTML = '';

            nodes.forEach((node) => {
                if (node.nodeType === Node.TEXT_NODE) {
                    const parts = node.textContent?.split(/(\s+)/) ?? [];
                    parts.forEach((part) => {
                        if (part.trim() === '') {
                            title.appendChild(document.createTextNode(part));
                        } else {
                            const wrap = document.createElement('span');
                            wrap.className = 'word-wrap';
                            const inner = document.createElement('span');
                            inner.className = 'word';
                            inner.textContent = part;
                            wrap.appendChild(inner);
                            title.appendChild(wrap);
                        }
                    });
                } else if ((node as Element).tagName === 'BR') {
                    title.appendChild(node.cloneNode());
                } else if ((node as Element).tagName === 'EM') {
                    const wrap = document.createElement('span');
                    wrap.className = 'word-wrap';
                    const inner = document.createElement('span');
                    inner.className = 'word';
                    inner.innerHTML = (node as Element).outerHTML;
                    wrap.appendChild(inner);
                    title.appendChild(wrap);
                } else {
                    title.appendChild(node.cloneNode(true));
                }
            });
        });

        // Observe for scroll trigger
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add('title-visible');
                        obs.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
        );

        document.querySelectorAll('.section-title').forEach((el) => obs.observe(el));

        return () => obs.disconnect();
    }, []);
};
