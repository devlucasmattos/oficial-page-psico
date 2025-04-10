import { useEffect } from 'react';

const useScrollAnimation = (selector = '.animated') => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    // Fallback imediato se não encontrar elementos
    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Garante visibilidade
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'none';
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(element => {
      // Estado inicial para animação
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(element);
    });

    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, [selector]);
};

export default useScrollAnimation;