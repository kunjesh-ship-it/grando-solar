'use client';
import { useState } from 'react';
import Icon from './Icon';

export default function Faq({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="faq" data-stagger>
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div className={`faq-item reveal ${isOpen ? 'open' : ''}`} key={i}>
            <button className="faq-q" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
              <span>{f.q}</span>
              <span className="plus"><Icon name="plus" size={16} strokeWidth={2.5} /></span>
            </button>
            <div className="faq-a" style={{ maxHeight: isOpen ? 600 : 0 }}>
              <div>{f.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
