import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from '../../assets/logimg7.png'


const Login = ({ onLogin }) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onLogin(email, password);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating authentication (e.g., API call)
    if (email === "user@example.com" && password === "password123") {
      // On successful login, store user data in localStorage
      const userData = { email: email, name: "John Doe" };
      localStorage.setItem('user', JSON.stringify(userData));

      // Redirect to the dashboard or home page
      navigate('/dashboard');
    } else {
      alert("Invalid credentials");
    }
  };


  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="background.default"
      sx={{
        backgroundImage: `url(${img})`, // Use backticks and template literals
        backgroundSize: 'cover', // Optional: To make the background cover the entire element
        backgroundPosition: 'center', // Opti        // background: 'linear-gradient(to bottom right, #000066 0%, #660033 100%)',
        p: { sm: 2, xs: 2, md: 0 }
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          maxWidth: 400,
          width: '100%',
          borderRadius: 2,
          boxShadow: 4,
          backgroundColor: 'rgba(255, 255, 255, .7)'

        }}
      >
        <Typography variant="h4" align="center" mb={3} color="primary" sx={{ fontWeight: 600, color: 'blue' }}>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{ bgcolor: 'transparent' }}
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
              Login
            </Button>
          </Box>
          <Box mt={2} display="flex" justifyContent="center">
            <Button
              onClick={() => navigate('/register')}
              variant="outlined"
              sx={{
                borderColor: 'primary.main',
                background: 'linear-gradient(to bottom right, #000066 0%, #660033 100%)',


                color: 'white',
                '&:hover': {
                  borderColor: 'primary.dark',
                  backgroundColor: 'primary.light',
                },
              }}
            >
              Register
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;