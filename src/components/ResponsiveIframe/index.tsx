import React, { useEffect, useRef, useState } from 'react';

interface ResponsiveIframeProps {
    videoId: string;
}

const Index: React.FC<ResponsiveIframeProps> = ({ videoId }) => {
    const iframeRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: '100%', height: 'auto' });

    useEffect(() => {
        const handleResize = () => {
            if (iframeRef.current) {
                const width = iframeRef.current.offsetWidth;
                const height = `${(width * 9) / 16}px`;
                setDimensions({ width: '100%', height });
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div ref={iframeRef} style={{ width: '100%' }}>
            <iframe
                width={dimensions.width}
                height={dimensions.height}
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ display: 'block' }}
            >
            </iframe>
        </div>
    );
};

export default Index;
