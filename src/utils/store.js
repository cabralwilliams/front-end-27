import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from './reducer';

export const store = configureStore({ reducer: themeReducer });