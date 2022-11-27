//This file creates a function that can be used across the application to generate a theme
import { createTheme } from '@mui/material';
import { purple, red, orange, green, grey, amber, blue, blueGrey, lightBlue, yellow, brown, cyan } from '@mui/material/colors';

export const basicTheme = (themeColor, colorNumber = 500) => {
    switch(themeColor) {
        case 'purple':
            return createTheme({
                palette: {
                    primary: {
                        main: purple[colorNumber]
                    }
                }
            });
        case 'red':
            return createTheme({
                palette: {
                    primary: {
                        main: red[colorNumber]
                    }
                }
            });
        case 'orange':
            return createTheme({
                palette: {
                    primary: {
                        main: orange[colorNumber]
                    }
                }
            });
        case 'green':
            return createTheme({
                palette: {
                    primary: {
                        main: green[colorNumber]
                    }
                }
            });
        case 'grey':
            return createTheme({
                palette: {
                    primary: {
                        main: grey[colorNumber]
                    }
                }
            });
        case 'amber':
            return createTheme({
                palette: {
                    primary: {
                        main: amber[colorNumber]
                    }
                }
            });
        case 'blueGrey':
            return createTheme({
                palette: {
                    primary: {
                        main: blueGrey[colorNumber]
                    }
                }
            });
        case 'lightBlue':
            return createTheme({
                palette: {
                    primary: {
                        main: lightBlue[colorNumber]
                    }
                }
            });
        case 'yellow':
            return createTheme({
                palette: {
                    primary: {
                        main: yellow[colorNumber]
                    }
                }
            });
        case 'brown':
            return createTheme({
                palette: {
                    primary: {
                        main: brown[colorNumber]
                    }
                }
            });
        case 'cyan':
            return createTheme({
                palette: {
                    primary: {
                        main: cyan[colorNumber]
                    }
                }
            });
        default:
            return createTheme({
                palette: {
                    primary: {
                        main: blue[500]
                    }
                }
            });
    }
};

export const colorDisplay = (themeColor, colorNumber = 500) => {
    switch(themeColor) {
        case 'purple':
            return purple[colorNumber];
        case 'red':
            return red[colorNumber];
        case 'orange':
            return orange[colorNumber];
        case 'green':
            return green[colorNumber];
        case 'grey':
            return grey[colorNumber];
        case 'amber':
            return amber[colorNumber];
        case 'blueGrey':
            return blueGrey[colorNumber];
        case 'lightBlue':
            return lightBlue[colorNumber];
        case 'yellow':
            return yellow[colorNumber];
        case 'brown':
            return brown[colorNumber];
        case 'cyan':
            return cyan[colorNumber];
        case 'blue':
        default:
            return blue[colorNumber];
    }
};

export const AvailableColors = {
    blue: 'Blue',
    red: 'Red',
    purple: 'Purple',
    orange: 'Orange',
    green: 'Green',
    grey: 'Grey',
    amber: 'Amber',
    blueGrey: 'Blue-Grey',
    lightBlue: 'Light Blue',
    yellow: 'Yellow',
    brown: 'Brown',
    cyan: 'Cyan'
};