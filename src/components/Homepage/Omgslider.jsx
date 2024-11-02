// ImageSlider.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid2, Typography } from '@mui/material';

// Import images at the top
import img1 from '../../assets/omgslid1.png';
import img2 from '../../assets/omgslid2.png';
import img3 from '../../assets/omgslid3.png';
import img4 from '../../assets/omgslid4.png';
import img5 from '../../assets/omgslid5.png';
import img6 from '../../assets/omgslid6.png';
import img7 from '../../assets/omgslid7.png';
import img8 from '../../assets/imgslid8.png';

const images = [
    { id: 2, src: img2, alt: 'Image 2' },
    { id: 3, src: img3, alt: 'Image 3' },
    { id: 4, src: img4, alt: 'Image 4' },
    { id: 5, src: img5, alt: 'Image 5' },
    { id: 6, src: img6, alt: 'Image 6' },
    { id: 7, src: img7, alt: 'Image 7' },
    { id: 8, src: img8, alt: 'Image 8' },
];

function OmgSlider() {
    const navigate = useNavigate();

    return (
        <Box sx={{ padding: 2, textAlign: 'center' }}>
            <img src={img1} alt='firstimg' style={{ width: '100%', maxWidth: '100%' }} />

            <Box
                sx={{
                    width: '100%',  
                    display: 'flex',
                    overflowX: 'auto', // Enable horizontal scrolling
                    whiteSpace: 'nowrap', // Prevent wrapping of items
                    '&::-webkit-scrollbar': {
                        display: 'none', // Hide scrollbar
                    },
                }}
            >
                {images.map((image) => (
                    <Box
                        component="img"
                        src={image.src}
                        alt={image.alt}
                        key={image.id}
                        sx={{
                            width: '100%',
                            maxWidth: '250px', // Set a maximum width for each image
                            height: 'auto',
                            // borderRadius: 2,
                            cursor: 'pointer',

                            // boxShadow: 2,
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            // marginRight: 2, // Space between images
                            // '&:hover': {
                            //     transform: 'scale(1.05)',
                            //     boxShadow: 5,
                            //     cursor: 'pointer',
                            // },
                        }}
                        onClick={() => navigate(`/details/${image.id}`)}
                    />
                ))}
            </Box>
            {/* <Box sx={{ textAlign: 'center', marginTop: 2 }}>
                {images.map((_, index) => (
                    <Box
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        sx={{
                            display: 'inline-block',
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            margin: '0 5px',
                            cursor: 'pointer',
                            backgroundColor: currentIndex === index ? 'primary.main' : 'grey.400',
                        }}
                    />
                ))}
            </Box> */}
        </Box>
    );
}

export default OmgSlider;
