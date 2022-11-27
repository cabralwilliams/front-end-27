import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import ShareIcon from '@mui/icons-material/Share';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import { ThemeProvider } from '@mui/material';
import { basicTheme } from '../utils';
import { useSelector, useDispatch } from 'react-redux';
import { SET_THEME, CHANGE_PAGE } from '../utils/actions';
import { Link } from 'react-router-dom';

function AppBanner() {
    const appState = useSelector(state => state);
    const dispatch = useDispatch();
    const [themeSet, setThemeSet] = useState(false);
    const [theme, setTheme] = useState(basicTheme('blue'));
    const [anchorEl, setAnchorEl] = useState(null);
    const menuIsOpen = Boolean(anchorEl);
    const [pageName, setPageName] = useState(appState.activePage);

    const openMenu = event => {
        setAnchorEl(event.currentTarget);
    };

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

    useEffect(() => {
        const pathArray = window.location.toString().split('/');
        let pageName, pathName;
        switch(pathArray[pathArray.length - 1]) {
            case 'select_theme':
                pageName = 'Select Theme';
                pathName = '/front-end-27/select_theme';
                break;
            default:
                pageName = 'Home';
                pathName = '/front-end-27';
                break;
        }
        dispatch({
            type: CHANGE_PAGE,
            payload: {
                activePage: pageName,
                activePath: pathName
            }
        });
        setPageName(pageName);
    }, [pageName, dispatch]);

    // console.log(theme);

    const returnHome = () => {
        setAnchorEl(null);
        window.location.replace('/front-end-27');
    };

    const selectTheme = () => {
        setAnchorEl(null);
        window.location.replace('/front-end-27/select_theme');
    };

    // console.log(appState);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar sx={{ position: 'fixed', top: 0 }}>
                    <Toolbar>
                        <IconButton onClick={openMenu}>
                            <MenuIcon />
                        </IconButton>
                        <Menu open={menuIsOpen} anchorEl={anchorEl}>
                            <MenuItem onClick={returnHome}>
                                Home
                            </MenuItem>
                            <MenuItem onClick={selectTheme}>
                                Select Theme
                            </MenuItem>
                        </Menu>
                        <Typography marginLeft={'10vw'} variant='h5'>
                            {pageName}
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: 'flex' }}>
                            <IconButton>
                                <NotificationsIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <IconButton>
                                <ShareIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            
        </ThemeProvider>
    )
}

export default AppBanner