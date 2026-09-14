'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/images/products/imported_pink_clay.png',
  '/images/products/amla_reetha_shikakai.jpg',
  '/images/products/herbal_powder.jpg',
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
        <Image
          key={src}
          src={src}
          alt={`Botanical product showcasing ${src.split('/').pop()?.replace('.png', '').replace(/_/g, ' ')}`}
          fill
          priority={index === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}
