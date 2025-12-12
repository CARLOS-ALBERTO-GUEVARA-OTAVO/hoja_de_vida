import React, { useEffect, useRef } from 'react';

const TextReveal = ({ text, delay = 0.05 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const characters = container.querySelectorAll('span');
    
    characters.forEach((char, index) => {
      char.style.animation = `fadeInUp 0.6s ease-out ${index * delay}s both`;
    });
  }, [delay]);

  const style = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  return (
    <>
      <style>{style}</style>
      <div ref={containerRef} className="text-reveal">
        {text.split('').map((char, index) => (
          <span key={index} style={{ display: 'inline-block' }}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    </>
  );
};

export default TextReveal;
