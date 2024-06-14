import { RootState } from './store';

const selectDataGame = (state: RootState) => state.game;

export { selectDataGame };
