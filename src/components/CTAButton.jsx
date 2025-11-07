import React from 'react';

const CTAButton = ({ children, onClick, href }) => {
  const base =
    'inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold text-sm sm:text-base shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-all duration-200';
  const golden =
    'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black hover:from-amber-300 hover:via-yellow-300 hover:to-amber-400 focus-visible:ring-amber-300 ring-offset-black';

  const ButtonEl = (
    <button type="button" onClick={onClick} className={`${base} ${golden}`}>
      {children}
    </button>
  );

  if (href) {
    return (
      <a href={href} className="no-underline">
        {ButtonEl}
      </a>
    );
  }

  return ButtonEl;
};

export default CTAButton;
