interface PaperChildrenProps {
  children: React.ReactNode;
}

export default function Paper({ children }: PaperChildrenProps) {
  return <div className="hero__paper paper">{children}</div>;
}
