/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Colors } from 'style-constants';

interface InitialState {
  color: string;
}

const initialState: InitialState = {
  color: Colors.black,
};

const canvas = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    setColor: (state, { payload }: PayloadAction<string>) => {
      state.color = payload;
    },
  },
});

export const {
  reducer,
  actions: { setColor },
} = canvas;
