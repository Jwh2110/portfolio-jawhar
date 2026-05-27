/**
 * Hook personnalisé pour l'accessibilité (a11y)
 */

import { useEffect } from 'react';

export function useA11y() {
  useEffect(() => {
    // Vérifier le contraste des couleurs
    const checkContrast = () => {
      const elements = document.querySelectorAll('[data-check-contrast]');
      elements.forEach((el) => {
        const style = window.getComputedStyle(el);
        const bgColor = style.backgroundColor;
        const color = style.color;
        console.log(`Élément: ${el.tagName}, BG: ${bgColor}, Text: ${color}`);
      });
    };

    // Gérer la navigation au clavier
    const handleKeyDown = (e: KeyboardEvent) => {
      // Tab pour naviguer
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-nav');
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);
}

// Hook pour annoncer des changements aux lecteurs d'écran
export function useAnnouncement(message: string, priority: 'polite' | 'assertive' = 'polite') {
  useEffect(() => {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only'; // Masqué visuellement mais accessible
    announcement.textContent = message;

    document.body.appendChild(announcement);

    return () => {
      announcement.remove();
    };
  }, [message, priority]);
}