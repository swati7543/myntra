import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';

export default function NavModal({ children }) {
    return (
        <Card
            sx={{
                width: 1050,
                borderRadius: 2,
                boxShadow: 3,
                overflow: 'hidden',
                backgroundColor: 'white', // Matches the theme
            }}
        >
            <CardContent
                sx={{
                    width: 1050,
                    height: 400,
                    padding: 0,
                }}
            >
                <Box
                    sx={{
                        backgroundColor: 'white', // Lighter background for contrast
                        padding: 3, // More padding for content spacing
                        height: '100%',
                        overflowY: 'auto',
                        scrollBehavior: 'smooth',
                        borderRadius: 1, // Slightly rounded corners for the content
                    }}
                >
                    {children}
                </Box>
            </CardContent>
        </Card>
    );
} 
