'use client';
import { useState, useEffect } from 'react';

const images = [
  '/images/products/imported_pink_clay.png',
  '/images/products/super_fine_multani_mitti.png',
  '/images/products/neem_multani_mitti.png',
  '/images/products/rose_sandal_multani_mitti.png',
  '/images/products/turmeric_sandal_multani_mitti.png',
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 h-full w-full bg-cream-deep">
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt="Multani Mitti Botanical Bowls"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}
