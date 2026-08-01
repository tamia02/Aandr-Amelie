"use client";

import { useState } from "react";

export default function ShareButton({ 
  url, 
  title, 
  text, 
  className = "" 
}: { 
  url: string; 
  title?: string; 
  text?: string; 
  className?: string; 
}) {
  const [shared, setShared] = useState(false);

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // prevent navigation if inside a link
    
    const shareData = {
      title: title || "Aandré Amelie",
      text: text || "Check out this product",
      url: url,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(url);
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      }
    } catch (err) {
      console.log("Error sharing", err);
    }
  };

  return (
    <button 
      onClick={handleShare}
      className={`group relative flex items-center justify-center transition-colors outline-none ${className}`}
      aria-label="Share"
      title="Share"
    >
      {shared ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-moon-indigo">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      )}
      {shared && (
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] whitespace-nowrap bg-charcoal text-cream px-2 py-1 rounded shadow-lg animate-fade-in pointer-events-none">
          Copied
        </span>
      )}
    </button>
  );
}
