interface PaperHeaderProps {
  title?: string;
  queue?: string;
  children?: React.ReactNode;
}

export default function PaperHeader({ title, queue, children }: PaperHeaderProps) {
  return (
    <div className="paper__header">
      {title ? (
        <p className="paper__title">{title}</p>
      ) : (
        <>
          <span className="paper__queue">{queue}</span>
          {children}
        </>
      )}
    </div>
  );
}
