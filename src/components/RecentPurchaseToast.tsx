"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

// Indian names for the popup
const names = [
  "Shruti", "Riya", "Ananya", "Priya", "Neha", "Pooja", "Sneha", 
  "Aditi", "Kavya", "Aisha", "Meera", "Kiara", "Nithya", "Tanya",
  "Roshni", "Sanya", "Simran", "Meghna", "Diya", "Isha"
];

// Cities in India for the popup
const cities = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", 
  "Kolkata", "Surat", "Pune", "Jaipur", "Lucknow", "Kanpur", 
  "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam", "Pimpri-Chinchwad",
  "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad",
  "Meerut", "Rajkot", "Kalyan-Dombivli", "Vasai-Virar", "Varanasi"
];

// Times for the popup
const times = ["Just now", "2 minutes ago", "5 minutes ago", "10 minutes ago", "15 minutes ago", "1 hour ago", "2 hours ago"];

export default function RecentPurchaseToast() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(products[0]);
  const [currentCity, setCurrentCity] = useState(cities[0]);
  const [currentName, setCurrentName] = useState(names[0]);
  const [currentTime, setCurrentTime] = useState(times[0]);

  useEffect(() => {
    // Initial delay before showing first toast
    const initialTimer = setTimeout(() => {
      showToast();
    }, 10000); // 10 seconds

    return () => clearTimeout(initialTimer);
  }, []);

  const showToast = () => {
    // Pick random data
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomTime = times[Math.floor(Math.random() * times.length)];

    setCurrentProduct(randomProduct);
    setCurrentCity(randomCity);
    setCurrentName(randomName);
    setCurrentTime(randomTime);
    setIsVisible(true);

    // Hide after 5 seconds
    setTimeout(() => {
      setIsVisible(false);
      
      // Schedule next toast between 15-45 seconds
      const nextDelay = Math.floor(Math.random() * 30000) + 15000;
      setTimeout(showToast, nextDelay);
    }, 5000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[60] max-w-sm bg-cream border border-outline-variant/30 shadow-lg p-3 rounded flex items-center gap-4 animate-fade-in transition-opacity duration-500">
      <Link href={`/shop/${currentProduct.slug}`} className="flex-shrink-0 relative w-16 h-16 bg-cream-deep">
        {currentProduct.image && (
          <Image
            src={currentProduct.image}
            alt={currentProduct.name}
            fill
            className="object-contain"
          />
        )}
      </Link>
      <div className="flex-1 min-w-0 pr-4">
        <p className="text-[10px] text-charcoal/60 uppercase tracking-widest mb-1">
          {currentName} from {currentCity} bought
        </p>
        <Link href={`/shop/${currentProduct.slug}`} className="block">
          <p className="text-sm font-serif text-charcoal font-semibold truncate hover:text-moon-indigo transition-colors">
            {currentProduct.name}
          </p>
        </Link>
        <p className="text-[10px] text-charcoal/70 mt-1">
          {currentTime}
        </p>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-charcoal/70 hover:text-charcoal"
        aria-label="Close"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
