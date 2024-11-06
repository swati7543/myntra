import React from 'react';
import { Navbar } from '../components/Navbar';
import CartNavbar from '../components/Navbar/CartNavbar';
import { Footer } from '../components/Footer';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
const Layout = ({ children }) => {
    const { pathname } = useLocation();

    return (
        <Box style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            {pathname === '/bags' ? <CartNavbar /> : <Navbar />
            }
            <Box >
                {/* <Sidebar /> */}
                <main style={{ flex: 1, }}>{children}</main>
            </Box>
            {
                pathname === '/login' ? "" : <Footer /> ||
                    pathname === '/bags' ? "" : <Footer />
            }

        </Box >
    );
};

export default Layout;
