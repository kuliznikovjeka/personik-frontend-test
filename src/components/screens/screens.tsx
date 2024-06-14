import { ScreenFail, ScreenGreeting, ScreenPlaying, ScreenWin } from './index';
import { useAppSelector } from '../../store/hooks';
import { selectDataGame } from '../../store/selectors';

export default function Screens() {
  const { isPlaying, isTimeUp, isUserQueue } = useAppSelector(selectDataGame);

  if (isPlaying) {
    return <ScreenPlaying />;
  }

  if (isTimeUp && isUserQueue) {
    return <ScreenFail />;
  } else if (isTimeUp && !isUserQueue) {
    return <ScreenWin />;
  }

  return <ScreenGreeting />;
}
