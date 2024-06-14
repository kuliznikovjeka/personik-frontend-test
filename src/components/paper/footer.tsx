import React from 'react';

interface FooterProps {
  children: React.ReactNode;
}

export default function PaperFooter({ children }: FooterProps) {
  return <div className="paper__footer footer">{children}</div>;
}
