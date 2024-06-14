import { Message } from '../../types/common-models';

interface InitialState {
  isPlaying: boolean;
  isTimeUp: boolean;
  isUserQueue: boolean;
  gameDuration: number;
  timeLeft: number;
  areaMessages: Message[];
}

export type { InitialState };
