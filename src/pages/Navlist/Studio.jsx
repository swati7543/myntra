import { Box, Typography } from '@mui/material'
import React from 'react'
import img from '../../assets/sudio-nav-banner.png'

const Studio = () => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100%', 
                    textAlign: 'center', // Center-aligns the text horizontally
                }}
            >
                <Box>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                        Studio
                    </Typography>
                    <Typography sx={{ fontSize: '1.2rem', marginBottom: 4 }}>
                        Your daily inspiration for everything fashion
                    </Typography>
                    <Box sx={{height:'15rem',width:'100%'}}>
                        <img src={img} alt='img' style={{ maxWidth: '100%', height: '100%' }} />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Studio
