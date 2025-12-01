import { useEffect, useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const SyllabusSection = () => {
  const { ref, isVisible } = useScrollReveal(0.2);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardsRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xTilt = ((clientX / innerWidth) - 0.5) * 6;
      const yTilt = ((clientY / innerHeight) - 0.5) * 6;
      cardsRef.current.style.transform = `perspective(1000px) rotateY(${xTilt}deg) rotateX(${-yTilt}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="syllabus" 
      ref={ref as any}
      className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 bg-white scroll-mt-20"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div 
              className={`transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-orange-50 border border-orange-200">
                <div className="w-2 h-2 rounded-full bg-gradient-orange" />
                <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-[#FF7A2B]">
                  THE SYLLABUS
                </span>
              </div>
            </div>

            <h2 
              className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '100ms' }}
              aria-labelledby="syllabus-heading"
            >
              Write Your Own <span className="text-gradient">Success Story.</span>
            </h2>

            <p 
              className={`text-base sm:text-lg text-[#667085] leading-relaxed max-w-xl mx-auto lg:mx-0 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
              aria-describedby="syllabus-description"
            >
              Master in-demand skills with our comprehensive curriculum designed by industry experts. 
              Build real projects and earn recognized certifications.
            </p>

            <div 
              className={`space-y-3 sm:space-y-4 transition-all duration-600 max-w-md mx-auto lg:mx-0 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              {[
                { num: '1', title: 'Foundation', desc: 'Core concepts and fundamentals' },
                { num: '2', title: 'Advanced', desc: 'Deep dive into complex topics' },
                { num: '3', title: 'Mastery', desc: 'Real-world projects and portfolio' }
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-3 sm:gap-4 text-left">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-orange flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm sm:text-base">{item.num}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B1A2A] text-base sm:text-lg">{item.title}</h3>
                    <p className="text-[#667085] text-xs sm:text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stacked Cards */}
          <div 
            ref={cardsRef}
            className={`relative h-[400px] sm:h-[450px] md:h-[500px] mx-auto lg:mx-0 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '120ms' }}
            aria-hidden="true"
          >
            {/* Back Card - Navy */}
            <div className="absolute top-0 left-1/2 lg:left-auto lg:right-0 -translate-x-1/2 lg:translate-x-0 w-[280px] sm:w-[300px] md:w-[320px] h-[360px] sm:h-[390px] md:h-[420px] bg-[#0B1A2A] rounded-2xl sm:rounded-3xl shadow-2xl transform rotate-6 translate-y-8" />
            
            {/* Middle Card - White */}
            <div className="absolute top-0 left-1/2 lg:left-auto lg:right-0 -translate-x-1/2 lg:translate-x-0 w-[280px] sm:w-[300px] md:w-[320px] h-[360px] sm:h-[390px] md:h-[420px] bg-white rounded-2xl sm:rounded-3xl shadow-xl transform rotate-3 translate-y-4 border-2 border-gray-100" />
            
            {/* Front Card - Orange */}
            <div className="absolute top-0 left-1/2 lg:left-auto lg:right-0 -translate-x-1/2 lg:translate-x-0 w-[280px] sm:w-[300px] md:w-[320px] h-[360px] sm:h-[390px] md:h-[420px] bg-gradient-orange rounded-2xl sm:rounded-3xl shadow-glow-orange transform hover:scale-105 transition-transform duration-300">
              <div className="p-6 sm:p-7 md:p-8 h-full flex flex-col justify-between text-white">
                <div>
                  <div className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 bg-white/20 rounded-full text-[10px] sm:text-xs font-bold mb-4 sm:mb-6">
                    BEST VALUE
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black mb-1 sm:mb-2">Premium Plan</h3>
                  <p className="text-white/80 text-xs sm:text-sm">Full access to all courses</p>
                </div>
                <div>
                  <div className="mb-4 sm:mb-6">
                    <span className="text-4xl sm:text-5xl font-black">₹4,999</span>
                    <span className="text-white/80 text-base sm:text-lg">/mo</span>
                  </div>
                  <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Unlimited course access
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Live mentorship sessions
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Certificates & projects
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyllabusSection;
