import { useState, useEffect, useCallback } from 'react';

const useHorizontalNavigation = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [direction, setDirection] = useState('right');
  const [isAnimating, setIsAnimating] = useState(false);

  const sections = [
    { id: 'about', name: 'About', component: 'About' },
    { id: 'skills', name: 'Skills', component: 'Skills' },
    { id: 'projects', name: 'Projects', component: 'Projects' },
    { id: 'curriculum', name: 'Curriculum', component: 'Curriculum' },
    { id: 'contact', name: 'Contact', component: 'Contact' }
  ];

  const totalSections = sections.length;

  const navigateToSection = useCallback((sectionIndex) => {
    if (sectionIndex < 0 || sectionIndex >= totalSections || isAnimating) return;
    
    setIsAnimating(true);
    const newDirection = sectionIndex > currentSection ? 'right' : 'left';
    setDirection(newDirection);
    setCurrentSection(sectionIndex);

    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  }, [currentSection, totalSections, isAnimating]);

  const navigateNext = useCallback(() => {
    if (currentSection < totalSections - 1) {
      navigateToSection(currentSection + 1);
    }
  }, [currentSection, totalSections, navigateToSection]);

  const navigatePrev = useCallback(() => {
    if (currentSection > 0) {
      navigateToSection(currentSection - 1);
    }
  }, [currentSection, navigateToSection]);

  const navigateToSectionById = useCallback((sectionId) => {
    const sectionIndex = sections.findIndex(section => section.id === sectionId);
    if (sectionIndex !== -1) {
      navigateToSection(sectionIndex);
    }
  }, [sections, navigateToSection]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isAnimating) return;

      switch (event.key) {
        case 'ArrowRight':
          event.preventDefault();
          navigateNext();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          navigatePrev();
          break;
        case 'Home':
          event.preventDefault();
          navigateToSection(0);
          break;
        case 'End':
          event.preventDefault();
          navigateToSection(totalSections - 1);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigateNext, navigatePrev, navigateToSection, totalSections, isAnimating]);

  useEffect(() => {
    let startX = 0;
    let endX = 0;
    const threshold = 50; 

    const handleTouchStart = (event) => {
      startX = event.touches[0].clientX;
    };

    const handleTouchMove = (event) => {
      endX = event.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (!startX || !endX) return;
      
      const distance = startX - endX;
      const absDistance = Math.abs(distance);
      
      if (absDistance > threshold && !isAnimating) {
        if (distance > 0) {
          navigateNext();
        } else {
          navigatePrev();
        }
      }
      
      startX = 0;
      endX = 0;
    };

    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.addEventListener('touchstart', handleTouchStart, { passive: true });
      mainContent.addEventListener('touchmove', handleTouchMove, { passive: true });
      mainContent.addEventListener('touchend', handleTouchEnd, { passive: true });

      return () => {
        mainContent.removeEventListener('touchstart', handleTouchStart);
        mainContent.removeEventListener('touchmove', handleTouchMove);
        mainContent.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [navigateNext, navigatePrev, isAnimating]);

  const progressPercentage = ((currentSection + 1) / totalSections) * 100;

  return {
    currentSection,
    direction,
    isAnimating,
    sections,
    totalSections,
    progressPercentage,
    navigateToSection,
    navigateNext,
    navigatePrev,
    navigateToSectionById,
    canGoNext: currentSection < totalSections - 1,
    canGoPrev: currentSection > 0,
    getCurrentSectionData: () => sections[currentSection]
  };
};

export default useHorizontalNavigation;