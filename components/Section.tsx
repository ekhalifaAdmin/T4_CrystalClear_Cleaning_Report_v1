import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="border border-slate-200 rounded-lg p-4">
      <h2 className="text-lg font-semibold text-slate-700 mb-4 border-b border-slate-200 pb-2">{title}</h2>
      <div className="space-y-4">
        {children}
      </div>
    </section>
  );
};

export default Section;
