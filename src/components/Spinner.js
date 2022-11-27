import React from 'react';
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material';
import { basicTheme, colorDisplay } from '../utils';

function Spinner({ opacity, spinnerSize, variant, message, themeColor, themeStrength }) {
    const theme = basicTheme(themeColor, themeStrength);
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1, opacity: opacity }}>
                <CircularProgress size={`${spinnerSize}vw`} sx={{ mt: '10vh' }}></CircularProgress>
                <Typography variant={variant} sx={{ mt: '5vh', color: colorDisplay(themeColor,themeStrength) }}>
                    {message}
                </Typography>
            </Box>
        </ThemeProvider>
    )
}

export default Spinner