import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const { pathname } = useLocation();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Navbar />
            <div >
                {/* <Sidebar /> */}
                <main style={{ flex: 1,}}>{children}</main>
            </div>
            {
                pathname === '/login' ? "" : <Footer />
            }

        </div>
    );
};

export default Layout;
