import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setIsTimeUp, setTimeLeft } from '../store/game/slice';
import { selectDataGame } from '../store/selectors';
import { formatTime } from '../utils';

export default function CountdownTimer() {
  const dispatch = useAppDispatch();
  const { timeLeft } = useAppSelector(selectDataGame);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        dispatch(setTimeLeft(timeLeft - 1));
      }, 1000);

      return () => clearInterval(timerId);
    } else {
      dispatch(setIsTimeUp(true));
    }
  }, [timeLeft, dispatch]);

  return <span className="paper__timer">{formatTime(timeLeft)}</span>;
}
