import React from 'react';
import { Navbar } from '../components/Navbar';
import CartNavbar from '../components/Navbar/CartNavbar';
import { Footer } from '../components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
const Layout = ({ children }) => {
    const { pathname } = useLocation();

    return (
        <Box style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            {pathname === '/bags' ? <CartNavbar /> : <Navbar /> &&
                pathname === '/ordernow' ? '' : <Navbar />
            }

            <Box >
                {/* <Sidebar /> */}
                <main>
                    <Outlet /> {/* Render child routes here */}
                </main>

                {/* <main style={{ flex: 1, }}>{children}</main> */}
            </Box>
            {
                pathname === '/login' ? "" :
                    pathname === '/bags' ? "" :
                        pathname === '/ordernow' ? '' :
                            <Footer />
            }



        </Box >
    );
};

export default Layout;
