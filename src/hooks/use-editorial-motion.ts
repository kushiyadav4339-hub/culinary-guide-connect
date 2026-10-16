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
    const elements = document.querySelectorAll('.section-heading, .principle, .process-track article, .risk-metrics > a, .comparison, .faq-item, .closing-section > *, .content-page > *, .footer-directory > div');
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight) return;
      element.classList.add('motion-ready');
      observer.observe(element);
    });
    const hero = document.querySelector<HTMLElement>('.hero');
    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const distance = document.documentElement.scrollHeight - window.innerHeight;
        document.documentElement.style.setProperty('--reading-progress', String(distance > 0 ? window.scrollY / distance : 0));
      });
    };
    const moveTerminal = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' || !hero) return;
      const rect = hero.getBoundingClientRect();
      hero.style.setProperty('--terminal-x', `${((event.clientX - rect.left) / rect.width - .5) * 18}px`);
      hero.style.setProperty('--terminal-y', `${((event.clientY - rect.top) / rect.height - .5) * 12}px`);
    };
    const resetTerminal = () => {
      hero?.style.setProperty('--terminal-x', '0px');
      hero?.style.setProperty('--terminal-y', '0px');
    };
    hero?.addEventListener('pointermove', moveTerminal);
    hero?.addEventListener('pointerleave', resetTerminal);
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateProgress);
      hero?.removeEventListener('pointermove', moveTerminal);
      hero?.removeEventListener('pointerleave', resetTerminal);
      document.documentElement.style.removeProperty('--reading-progress');
      observer.disconnect();
      elements.forEach((element) => element.classList.remove('motion-ready', 'motion-visible'));
    };
  }, []);
}