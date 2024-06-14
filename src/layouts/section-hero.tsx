import React from 'react';

interface SectionHeroProps {
  children: React.ReactNode;
}

export default function SectionHero({ children }: SectionHeroProps) {
  return (
    <section className="hero">
      <div className="hero__container container">{children}</div>
    </section>
  );
}
