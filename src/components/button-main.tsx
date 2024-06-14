interface ButtonMainProps {
  text: string;
  onClick: () => void;
}

export default function ButtonMain({ text, onClick }: ButtonMainProps) {
  return (
    <button onClick={onClick} className="paper__button">
      {text}
    </button>
  );
}
