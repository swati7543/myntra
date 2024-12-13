import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from '../../assets/logimg7.png'
import { signInSchema } from "../schemas";
import { useFormik } from "formik";


const Login = ({ onLogin }) => {
  const navigate = useNavigate()
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: () => {
      const { email, password } = values;
      onLogin(email, password);
      navigate("/login");
    },
  })

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="background.default"
      sx={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}

              helperText={touched.email && errors.email}
              required
              sx={{ bgcolor: 'transparent' }}
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              fullWidth
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
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