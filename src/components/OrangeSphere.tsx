import { useEffect, useRef } from 'react';

const OrangeSphere = () => {
  const sphereRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sphereRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xRotation = ((clientY / innerHeight) - 0.5) * 6;
      const yRotation = ((clientX / innerWidth) - 0.5) * 6;
      sphereRef.current.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-radial from-orange-200/30 to-transparent blur-3xl" />
      <div ref={sphereRef} className="relative w-[500px] h-[500px] transition-transform duration-300 ease-out">
        <svg viewBox="0 0 500 500" className="w-full h-full">
          {Array.from({ length: 12 }).map((_, i) =>
            Array.from({ length: 20 }).map((_, j) => {
              const lat = (i / 11) * Math.PI;
              const lng = (j / 19) * Math.PI * 2;
              const x = 250 + Math.sin(lat) * Math.cos(lng) * 200;
              const y = 250 + Math.sin(lat) * Math.sin(lng) * 200;
              const z = Math.cos(lat);
              const opacity = (z + 1) / 2;
              const size = 2 + z * 2;
              
              return (
                <circle
                  key={`${i}-${j}`}
                  cx={x}
                  cy={y}
                  r={size}
                  fill={opacity > 0.5 ? '#FF7A2B' : 'none'}
                  stroke="#FF7A2B"
                  strokeWidth="1"
                  opacity={opacity * 0.6}
                />
              );
            })
          )}
          {[...Array(8)].map((_, i) => (
            <circle
              key={`glow-${i}`}
              cx={250 + Math.cos(i * 0.8) * 150}
              cy={250 + Math.sin(i * 0.8) * 150}
              r="8"
              fill="#FF7A2B"
              opacity="0.8"
              filter="url(#glow)"
            />
          ))}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default OrangeSphere;
