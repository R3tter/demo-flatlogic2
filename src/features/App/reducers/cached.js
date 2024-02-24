import { createReducer } from '@reduxjs/toolkit';
import { setCachedData } from 'App/actions';

const initialState = {
  token: '',
  refreshToken: '',
  isAuth: false,
  language: 'en'
};

export const Cached = createReducer(
  initialState, (builder) => {
    builder.addCase(setCachedData, (state, { payload }) => {
      console.log(state);
      state = { ...state, ...payload };
      return state;
    })
  }
);
