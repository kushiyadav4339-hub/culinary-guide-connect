import { useEffect } from 'react';

export function useEditorialMotion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('motion-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08 });
    const elements = document.querySelectorAll('.section-heading, .principle, .process-track article, .risk-metrics > a, .comparison, .faq-list, .closing-section > *, .content-page > *, .footer-directory > div');
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight) return;
      element.classList.add('motion-ready');
      observer.observe(element);
    });
    return () => {
      observer.disconnect();
      elements.forEach((element) => element.classList.remove('motion-ready', 'motion-visible'));
    };
  }, []);
}