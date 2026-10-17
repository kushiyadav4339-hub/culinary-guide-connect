import { useEffect } from 'react';

export function useEditorialMotion(pathname: string) {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches) return;
    const main = document.querySelector('main');
    main?.classList.add('page-arriving');
    const entranceTimer = window.setTimeout(() => main?.classList.remove('page-arriving'), 1100);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('motion-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08 });
    const elements = document.querySelectorAll('.section-heading, .principle, .process-track article, .risk-metrics > a, .tier-card, .profit-lens, .bento-card, .faq-item, .closing-section > *, .content-page > .eyebrow, .page-title, .page-intro, .risk-list article, .platform-preview, .contact-layout > *, .footer-directory > div');
    elements.forEach((element) => {
      element.classList.add('motion-ready');
      observer.observe(element);
    });
    const hero = document.querySelector<HTMLElement>('.hero');
    const cards = document.querySelectorAll<HTMLElement>('.tier-card, .bento-card');
    const moveCard = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' || !(event.currentTarget instanceof HTMLElement)) return;
      const card = event.currentTarget;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--card-rx', `${-(event.clientY - rect.top - rect.height / 2) / rect.height * 5}deg`);
      card.style.setProperty('--card-ry', `${(event.clientX - rect.left - rect.width / 2) / rect.width * 5}deg`);
    };
    const resetCard = (event: PointerEvent) => {
      if (!(event.currentTarget instanceof HTMLElement)) return;
      event.currentTarget.style.removeProperty('--card-rx');
      event.currentTarget.style.removeProperty('--card-ry');
    };
    cards.forEach(card => {
      card.addEventListener('pointermove', moveCard);
      card.addEventListener('pointerleave', resetCard);
    });
    const stopMotion = () => {
      if (!preference.matches) return;
      elements.forEach(element => element.classList.remove('motion-ready', 'motion-visible'));
      cards.forEach(card => {
        card.style.removeProperty('--card-rx');
        card.style.removeProperty('--card-ry');
      });
      resetTerminal();
      observer.disconnect();
    };
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
    preference.addEventListener('change', stopMotion);
    return () => {
      clearTimeout(entranceTimer);
      main?.classList.remove('page-arriving');
      preference.removeEventListener('change', stopMotion);
      cards.forEach(card => {
        card.removeEventListener('pointermove', moveCard);
        card.removeEventListener('pointerleave', resetCard);
        card.style.removeProperty('--card-rx');
        card.style.removeProperty('--card-ry');
      });
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateProgress);
      hero?.removeEventListener('pointermove', moveTerminal);
      hero?.removeEventListener('pointerleave', resetTerminal);
      document.documentElement.style.removeProperty('--reading-progress');
      observer.disconnect();
      elements.forEach((element) => element.classList.remove('motion-ready', 'motion-visible'));
    };
  }, [pathname]);
}