'use client';

import { useEffect, useState } from 'react';
import type { Heading } from '@/lib/blog';

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -70% 0px' }
    );

    for (const { id } of headings) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav>
      <h4 className="text-xs font-semibold text-text-2 mb-3 uppercase tracking-widest">
        On this page
      </h4>
      <ul className="border-l border-grey-1 space-y-1 text-[13px]">
        {headings.map((h) => (
          <li
            key={h.id}
            className={`${h.level === 3 ? 'pl-7' : 'pl-3'} ${
              activeId === h.id
                ? 'border-l-2 border-primary -ml-px'
                : ''
            }`}
          >
            <a
              href={`#${h.id}`}
              className={`block py-1 leading-5 transition-colors ${
                activeId === h.id
                  ? 'text-primary font-medium'
                  : 'text-text-2 hover:text-text-0'
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
