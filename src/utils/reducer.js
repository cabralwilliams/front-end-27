import { createAction, createReducer } from '@reduxjs/toolkit';
import { SET_DEFAULT_THEME, SET_THEME, CHANGE_PAGE } from './actions';

const setDefaultTheme = createAction(SET_DEFAULT_THEME);
const setTheme = createAction(SET_THEME);
const changePage = createAction(CHANGE_PAGE);

const themeState = {
    activePage: 'Home',
    activePath: '/',
    themeColor: 'blue',
    themeStrength: 500
};

export const themeReducer = createReducer(themeState, builder => {
    builder
        .addCase(setDefaultTheme, (state, action) => {
            state.themeColor = 'blue';
            state.themeStrength = 500;
        })
        .addCase(setTheme, (state, action) => {
            state.themeColor = action.payload.themeColor;
            state.themeStrength = action.payload.themeStrength;
        })
        .addCase(changePage, (state, action) => {
            state.activePage = action.payload.activePage;
            state.activePath = action.payload.activePath;
        });
});