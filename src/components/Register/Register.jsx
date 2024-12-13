// Register.js
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from '../../assets/logimg7.png'
const Register = ({ onRegister }) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(email, password, userName);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{
        backgroundImage: `url(${img})`, // Use backticks and template literals
        backgroundSize: 'cover', // Optional: To make the background cover the entire element
        backgroundPosition: 'center', // Opti        // background: 'linear-gradient(to bottom right, #000066 0%, #660033 100%)',
        // p: 2
      }}
    >
      <Paper
        elevation={8}
        sx={{
          padding: 3,
          maxWidth: 400,
          width: '100%',
          borderRadius: 2,
          boxShadow: 8,
          backgroundColor: 'rgba(255, 255, 255, .7)'    
            }}
      >
        <Typography variant="h4" align="center" mb={3} color="primary" sx={{ color: 'blue' ,fontWeight:600}}>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              label="Name"
              type="text"
              variant="outlined"
              fullWidth
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Box>
          <Box mb={2} display="flex" justifyContent="space-between">
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{
                background: 'linear-gradient(to bottom right, #000066 0%, #660033 100%)',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              }}
            >
              Register
            </Button>
          </Box>
          <Box mt={2} display="flex" justifyContent="center">
            <Button
              onClick={() => navigate('/login')}
              variant="outlined"
              sx={{
                background: 'linear-gradient(to bottom right, #000066 0%, #660033 100%)',
                color: 'white',
                '&:hover': {
                  borderColor: 'primary.dark',
                  backgroundColor: 'primary.light',
                },
              }}
            >
              Already have an account? Login
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>

  );
};

export default Register;