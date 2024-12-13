import React, { useEffect, useState } from 'react';
import ImgSection from './ImgSection';
import CouponCorner from './CouponCorner';
import ImageSlider1 from './ImageSlider1';
import OmgSlider from './Omgslider';
import CategoriesCard from './CategoriesCard';
import homefooterimg from '../../assets/homefooterimg.jpg';
import { Box } from '@mui/material';
import Confetti from 'react-confetti';

const HomePage = () => {
    const [confetti, setConfetti] = useState(false);  // State to control confetti trigger

    // Trigger confetti when the page is loaded
    useEffect(() => {
        setConfetti(true);

        // Stop confetti after 5 seconds
        const timer = setTimeout(() => setConfetti(false), 5000);

        return () => clearTimeout(timer);  // Clean up the timer on unmount
    }, []);


    return (
        <>
            <Box sx={{ width: "100%" }}>
                {confetti && <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    style={{ zIndex: 9999 }}  // Ensure confetti is on top of other content
                />}

                <ImgSection />
                <CouponCorner />
                <ImageSlider1 />
                <OmgSlider />
                <CategoriesCard />
                <Box sx={{ width: '100%', mt: 2 }}>
                    <img
                        src={homefooterimg}
                        alt='Footer'
                        style={{
                            width: '100%',
                            height: 'auto', // Maintains aspect ratio
                            maxHeight: '300px', // Optional max height to limit image size
                            objectFit: 'cover' // Ensures the image covers the container properly
                        }}
                    />
                </Box>
            </Box>
        </>
    );
}

export default HomePage;
