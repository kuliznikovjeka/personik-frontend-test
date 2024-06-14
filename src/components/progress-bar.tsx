import { useEffect, useState } from 'react';
import { useAppSelector } from '../store/hooks';
import { selectDataGame } from '../store/selectors';

export default function ProgressBar() {
  const widthPercentProgress = 100;
  const { gameDuration, timeLeft, isPlaying } = useAppSelector(selectDataGame);
  const [progress, setProgress] = useState(widthPercentProgress);

  useEffect(() => {
    if (timeLeft >= 0) {
      setProgress((timeLeft / gameDuration) * 100);
    }
  }, [timeLeft, gameDuration]);

  return (
    <div className="paper__progress-bar">
      {isPlaying ? <div className="paper__progress-bar-inner" style={{ width: `${progress}%` }}></div> : null}
    </div>
  );
}
