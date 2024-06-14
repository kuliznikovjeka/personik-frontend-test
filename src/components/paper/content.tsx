interface ContentProps {
  children: React.ReactNode;
}

export default function PaperContent({ children }: ContentProps) {
  return <div className="paper__content-layout">{children}</div>;
}
