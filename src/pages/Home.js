import React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

function Home() {
    return (
        <div className='d-flex flex-wrap' style={{ paddingTop: '10vh', paddingBottom: '10vh' }}>
            <div className='col-12 col-md-6 my-4'>
                <Box sx={{ flexGrow: 1, py: 1 }}>
                    <Typography variant='h5'>Monitor</Typography>
                    <div className='px-5'>There's nothing here.  Activate your AutoAssist; then, come back 
                        here to monitor the results and communicate with others.
                    </div>
                </Box>
            </div>
            <div className='col-12 col-md-6 my-4'>
                <Box sx={{ flexGrow: 1, py: 1 }}>
                    <Typography variant='h5'>AutoAssist</Typography>
                    <div className='px-5'>
                        There's nothing here.  Create an AutoAssist to have the app 
                        complete multiple tasks for you at the same time with the 
                        press of a button!
                    </div>
                </Box>
            </div>
        </div>
    )
}

export default Home