import React from 'react';

const CTAButton = ({ children, onClick, href }) => {
  const base =
    'inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold text-sm sm:text-base shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-all duration-200';
  const golden =
    'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black hover:from-amber-300 hover:via-yellow-300 hover:to-amber-400 focus-visible:ring-amber-300 ring-offset-black';

  const handleClick = (e) => {
    try {
      if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
        window.fbq('track', 'AddToCart');
      }
    } catch (err) {
      // silently ignore pixel errors
    }

    if (typeof onClick === 'function') {
      onClick(e);
    }

    if (href) {
      // Smooth scroll for hash links, otherwise navigate
      if (href.startsWith('#')) {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // ensure hash updates for deep-linking
        try { window.history.replaceState(null, '', href); } catch {}
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <button type="button" onClick={handleClick} className={`${base} ${golden}`}>
      {children}
    </button>
  );
};

export default CTAButton;
