import { createSlice } from '@reduxjs/toolkit';
import { InitialState } from './models';

const time = 120;

const initialState: InitialState = {
  isPlaying: false,
  isTimeUp: false,
  isUserQueue: true,
  gameDuration: time,
  timeLeft: time,
  areaMessages: [],
};

const gameSlice = createSlice({
  name: 'flights',
  initialState: initialState,

  reducers: {
    setIsPlaying(state, action) {
      state.isPlaying = action.payload;
      state.isTimeUp = false;
      state.timeLeft = time;
      state.areaMessages = [];
      state.isUserQueue = true;
    },

    setIsTimeUp(state, action) {
      state.isPlaying = false;
      state.isTimeUp = action.payload;
    },

    setIsUserQueue(state, action) {
      state.isUserQueue = action.payload;
    },

    setTimeLeft(state, action) {
      state.timeLeft = action.payload;
    },

    sendMessage(state, action) {
      state.areaMessages = action.payload;
    },
  },
});

export const { setIsPlaying, setIsTimeUp, setTimeLeft, sendMessage, setIsUserQueue } = gameSlice.actions;
export default gameSlice.reducer;
