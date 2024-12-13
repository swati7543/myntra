import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { AppBar, Box, Toolbar, Typography, Divider } from '@mui/material';
import firstimg from '../../../assets/firstimg.jpg'; // Replace this with the correct path to your logo
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo6.png'

const steps = ['BAG', 'ADDRESS', 'PAYMENT'];

const CartNavbar = () => {
    const navigate = useNavigate();

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar
                    position="static"
                    sx={{
                        bgcolor: 'white',
                        color: 'black',
                        boxShadow: 'none',
                        borderBottom: '1px solid #ddd'
                    }}
                >
                    <Toolbar
                        sx={{
                            height: { md: '5rem', sm: '3rem', xs: '3rem' },
                            display: 'flex',
                            justifyContent: { md: 'center', xs: 'space-between' }, // Center the content
                            alignItems: 'center'
                        }}
                    >
                        {/* Logo */}
                        <Box
                            onClick={() => navigate('/')}
                            sx={{
                                cursor: 'pointer',
                                width: '4rem',
                                height: '3.5rem',
                                mr: 3
                            }}
                        >
                            <img
                                src={logo}
                                alt="Logo"
                                style={{ width: '100%', height: '100%', borderRadius: '50%' }}
                            />
                        </Box>

                        {/* Centered Stepper */}
                        <Box
                            sx={{
                                width: '100%',
                                display: { md: 'flex', sm: 'flex', xs: 'none' },
                                justifyContent: 'center',
                            }}
                        >
                            <Stepper alternativeLabel connector={null} activeStep={0}>
                                {steps.map((label, index) => (
                                    <Step key={label}>
                                        <StepLabel
                                            StepIconComponent={() => null} // Remove the number
                                        >
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    fontWeight: 'bold',
                                                    fontSize: 14,
                                                    color: '#5f6368',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                {label}
                                                {/* Add line in between text */}
                                                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                    {index < steps.length - 1 && (
                                                        <Box
                                                            sx={{
                                                                width: '50px', // Adjust the width as needed
                                                                height: '2px', // Thickness of the line
                                                                // bgcolor: '#5f6368',
                                                                borderBottom: '2px dotted #5f6368',
                                                                mx: 1.5, // Margin for spacing
                                                            }}
                                                        />
                                                    )}
                                                </Box>
                                            </Typography>
                                        </StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>


                        {/* Security Text */}
                        <Box sx={{ ml: 3 }}>
                            <Typography variant="subtitle2" sx={{ color: 'green', fontWeight: 'bold' }}>
                                100% SECURE
                            </Typography>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default CartNavbar;
