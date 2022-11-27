import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

function HeartButton({ buttonText }) {
    const [isFavorite, setIsFavorite] = useState(false);

    function toggleFavorite() {
        setIsFavorite(!isFavorite);
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <IconButton onClick={toggleFavorite}>
                {isFavorite && <FavoriteIcon />}
                {!isFavorite && <FavoriteBorderIcon />}
            </IconButton>
            <Typography variant='caption'>{buttonText}</Typography>
        </Box>
    )
}

export default HeartButton