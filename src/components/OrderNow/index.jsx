import React from 'react';
import { Box, Paper, Typography, Button, Avatar } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';

const OrderNow = () => {
    const navigate = useNavigate()
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            sx={{
                p:{sm:2,xs:2,md:0},
                background: 'linear-gradient(to right, #f7c5d2, #f7b2b2)',
            }}
        >
            <Paper
                elevation={8}
                sx={{
                    padding: 3,
                    maxWidth: 500,
                    width: '100%',
                    borderRadius: 2,
                    boxShadow: 8,
                    backgroundColor: 'rgba(255, 255, 255, .9)',
                    textAlign: 'center',
                }}
            >
                <Avatar
                    sx={{
                        backgroundColor: '#4caf50',
                        margin: '0 auto 16px',
                        width: 50,
                        height: 50,
                    }}
                >
                    <CheckCircleIcon sx={{ color: '#fff' }} />
                </Avatar>
                <Typography
                    variant="h4"
                    color="primary"
                    sx={{
                        fontWeight: 600,
                        fontSize: '1.5rem',
                        marginBottom: 2,
                    }}
                >
                    Thank you for your order!
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 3 }}>
                    Your order has now been placed and you will shortly receive email confirmation. You can check the status of your order at any time by going to 'My Account'.
                </Typography>
                <Button
                    onClick={() => navigate('/')}
                    variant="contained"
                    color="primary"
                    sx={{
                        backgroundColor: '#4caf50',
                        '&:hover': {
                            backgroundColor: '#45a049',
                        },
                    }}
                >
                    Go to The Homepage
                </Button>
            </Paper>
        </Box>
    );
};

export default OrderNow;
