import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';

export default function NavModal({ children,sx }) {
    return (
        <Card
            sx={{
                width: 1200,  // Fixed width
                height: 500,  // Fixed height
                borderRadius: 2,
                overflow: 'hidden',
                backgroundColor: 'white',
                position: 'fixed',  // Keeps modal fixed
                top: '5.2rem',  // Adjust this based on navbar height
                left: '50%',
                transform: 'translateX(-50%)',  // Centers modal horizontally
                zIndex:1,  // Ensure it stays on top
                // boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
            }}
        >
            <CardContent
                sx={{
                    padding: 2,
                    height: '100%',
                    width: '100%',
                    overflowY: 'auto',
                    scrollBehavior: 'smooth',
                }}
            >
                <Box
                    sx={{
                        backgroundColor: 'white',
                        padding: 3,
                        height: 'auto',
                        width: 'auto',
                        // overflowY: 'auto',
                        textAlign:'left'
                    }}
                >
                    {children}
                </Box>
            </CardContent>
        </Card>
    );
}
