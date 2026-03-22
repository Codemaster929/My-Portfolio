// SpaceBackground.jsx
import { useEffect } from 'react';
import './SpaceBackground.css';

const SpaceBackground = () => {
  useEffect(() => {
    // Generate stars for each layer
    const generateStars = (containerId, count) => {
      const container = document.getElementById(containerId);
      if (!container) return;

      const fragment = document.createDocumentFragment();
      
      for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 200 + '%';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        star.style.animationDelay = Math.random() * 3 + 's';
        fragment.appendChild(star);
      }
      
      container.appendChild(fragment);
    };

    // Create stars
    generateStars('stars-small', 200);
    generateStars('stars-medium', 100);
    generateStars('stars-large', 50);

    // Shooting stars
    const createShootingStar = () => {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';
      shootingStar.style.top = Math.random() * 50 + '%';
      shootingStar.style.left = Math.random() * 100 + '%';
      shootingStar.style.animationDuration = (Math.random() * 2 + 1) + 's';
      
      const container = document.getElementById('shooting-stars');
      if (container) {
        container.appendChild(shootingStar);
        
        setTimeout(() => {
          shootingStar.remove();
        }, 3000);
      }
    };

    // Generate shooting stars randomly
    const shootingStarInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        createShootingStar();
      }
    }, 2000);

    // Cleanup
    return () => {
      clearInterval(shootingStarInterval);
    };
  }, []);

  return (
    <div className="space-background">
      <div className="stars stars-small" id="stars-small"></div>
      <div className="stars stars-medium" id="stars-medium"></div>
      <div className="stars stars-large" id="stars-large"></div>
      <div id="shooting-stars"></div>
    </div>
  );
};

export default SpaceBackground;