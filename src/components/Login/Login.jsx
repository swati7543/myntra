import React from 'react';
import { Box, TextField, Typography, Button, Link } from '@mui/material';

import loginimg from '../../assets/loginimg.png';

const Login = () => {
    return (
        <Box sx={{
            bgcolor: '#fce4ec',          
            height: '100%',             
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding:{md:4,sm:0,xs:0}
        }}>
            <Box
                sx={{
                    textAlign: 'center',
                    maxWidth: 400,
                    width: '100%',
                    borderRadius: 2,
                    boxShadow: 3,
                    overflow: 'hidden', 
                }}
            >
                <Box sx={{ bgcolor: '#fff',  }}>
                    <img src={loginimg} alt="Login" style={{ maxWidth: '100%', marginBottom: '16px' }} />
                </Box>

                <Box sx={{ bgcolor: 'white', py: 4, px: 3 }}>
                    <Typography variant="h5" mb={2} fontWeight="bold">
                        Login or Signup
                    </Typography>

                    <TextField
                        fullWidth
                        variant="outlined"
                        type="text"
                        placeholder="Mobile Number"
                        sx={{ mb: 3 }}
                    />

                    <Typography variant="body2" color="textSecondary" mb={2}>
                        By continuing, I agree to the <Link href="#" underline="hover">Terms of Use</Link> & <Link href="#" underline="hover">Privacy Policy</Link>
                    </Typography>

                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{
                            paddingY: 1.5,
                            fontSize: 16,
                            fontWeight: 'bold',
                            mb: 3,
                            bgcolor: '#ff3e6c',
                            '&:hover': {
                                bgcolor: '#e73365',
                            },
                        }}
                    >
                        Continue
                    </Button>

                    <Typography variant="body2" color="textSecondary">
                        Have trouble logging in? <Link href="#" underline="hover">Get help</Link>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Login;
