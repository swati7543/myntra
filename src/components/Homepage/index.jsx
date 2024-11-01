import React from 'react';
import ImgSection from './ImgSection';
import CouponCorner from './CouponCorner';
import ImageSlider1 from './ImageSlider1';
import OmgSlider from './Omgslider';
import CategoriesCard from './CategoriesCard';
import homefooterimg from '../../assets/homefooterimg.jpg';
import { Box } from '@mui/material';

const HomePage = () => {
    return (
        <>
            <Box sx={{ width: "100%" }}>
                <ImgSection />
                <CouponCorner />
                {/* <ImageSlider1 /> */}
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
