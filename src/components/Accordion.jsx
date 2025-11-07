import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Accordion = ({ items, accent = '#F0B90B' }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
      {items.map((it, idx) => {
        const open = openIndex === idx;
        return (
          <div key={idx} className="group">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : idx)}
              className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-white/5"
            >
              <div
                className="text-base sm:text-lg font-semibold"
                style={{ color: open ? accent : 'white' }}
              >
                {it.title}
              </div>
              <ChevronDown
                className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`}
                color={open ? accent : '#ffffff'}
              />
            </button>
            <div
              className={`overflow-hidden px-5 transition-[max-height] duration-300 ease-in-out ${
                open ? 'max-h-64 py-2' : 'max-h-0'
              }`}
            >
              <p className="text-sm sm:text-base text-neutral-300">{it.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
