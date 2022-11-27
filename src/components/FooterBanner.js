import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider } from '@mui/material';
import { basicTheme } from '../utils';
import HeartButton from './HeartButton';
import { useDispatch, useSelector } from 'react-redux';
import { SET_THEME } from '../utils/actions';

function FooterBanner({ themeColor, themeStrength }) {

    const [themeSet, setThemeSet] = useState(false);
    const [theme, setTheme] = useState(basicTheme('blue'));

    const appState = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        // if(!themeSet) {
        //     setTheme(basicTheme(themeColor,themeStrength));
        // }
        const storedTheme = localStorage.getItem('storedTheme');
        if(!storedTheme) {
            setTheme(basicTheme(appState.themeColor, appState.themeStrength));
            localStorage.setItem('storedTheme', JSON.stringify({ themeColor: appState.themeColor, themeStrength: appState.themeStrength }));
        } else {
            const retrievedTheme = JSON.parse(localStorage.getItem('storedTheme'));
            setTheme(basicTheme(retrievedTheme.themeColor, retrievedTheme.themeStrength));
            dispatch({
                type: SET_THEME,
                payload: {
                    themeColor: retrievedTheme.themeColor,
                    themeStrength: retrievedTheme.themeStrength
                }
            });
        }
    }, [appState, dispatch]);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1, zIndex: 'tooltip' }} style={{ boxShadow: '10px 5px 5px black' }}>
                <AppBar position='fixed' sx={{ top: 'auto', bottom: 0 }}>
                    <Toolbar>
                        <Box sx={{ flexGrow: 0.5 }} />
                        <HeartButton buttonText={'Home'} />
                        <Box sx={{ flexGrow: 1 }} />
                        <HeartButton buttonText={'AutoAssist'} />
                        <Box sx={{ flexGrow: 1 }} />
                        <HeartButton buttonText={'Calendar'} />
                        <Box sx={{ flexGrow: 0.5 }} />
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    )
}

export default FooterBanner