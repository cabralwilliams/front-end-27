import React, { useState } from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useDispatch, useSelector } from 'react-redux';
import { basicTheme, colorDisplay, AvailableColors } from '../utils';
import Button from '@mui/material/Button';
import { SET_THEME } from '../utils/actions';

function ThemeSelector() {
    const appState = useSelector(state => state);
    const dispatch = useDispatch();
    const colors = Object.keys(AvailableColors);
    const [currentColor, setCurrentColor] = useState(appState.themeColor);

    const changeTheme = event => {
        event.preventDefault();
        const newColor = document.getElementsByName('main-color');
        const newColorArray = Array.from(newColor);
        console.log(newColorArray);
        const selected = newColorArray.filter(nc => nc.checked === true);
        console.log('New Color:', selected);
        console.log(selected[0].value);
        localStorage.setItem('storedTheme', JSON.stringify({ themeColor: selected[0].value, themeStrength: 500 }));
        dispatch({
            type: SET_THEME,
            payload: {
                themeColor: selected[0].value,
                themeStrength: 500
            }
        });
    };

    const setValue = event => {
        setCurrentColor(event.target.value);
    }

    return (
        <Box sx={{ flexGrow: 1, flexDirection: 'column', py: '10vh' }}>
            <Box sx={{ flexGrow: 1, justifyContent: "center", mt: 2 }}>
                <Typography variant='h4'>
                    Choose Your Theme!
                </Typography>
            </Box>
            <FormControl sx={{ mb: 5 }}>
                <FormLabel>Color</FormLabel>
                <RadioGroup value={currentColor} onChange={setValue} name='main-color'>
                    {
                        colors.map(c => {
                            return <FormControlLabel value={c} key={c} control={<Radio />} label={AvailableColors[c]} />
                        })
                    }
                </RadioGroup>
                <Button onClick={changeTheme} variant='outlined'>Select Theme!</Button>
            </FormControl>
        </Box>
    )
}

export default ThemeSelector