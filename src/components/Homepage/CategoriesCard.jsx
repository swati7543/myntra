// ImageSlider.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';

// Import images at the top

import img from '../../assets/categoriesimg.png';
import img1 from '../../assets/imgslid1.png';
import img2 from '../../assets/imgslid2.png';
import img3 from '../../assets/imgslid3.png';
import img4 from '../../assets/imgslid4.png';
import img5 from '../../assets/imgslid5.png';
import img6 from '../../assets/imgslid6.png';
import img7 from '../../assets/imgslid7.png';
import img8 from '../../assets/imgslid8.png';
import img9 from '../../assets/imgslid9.png';
import img10 from '../../assets/imgslid10.png';
import img11 from '../../assets/imgslid11.png';
import img12 from '../../assets/imgslid12.png';
import img13 from '../../assets/imgslid13.png';
import img14 from '../../assets/imgslid14.png';
import img15 from '../../assets/imgslid15.png';
import img16 from '../../assets/imgslid16.png';
import img17 from '../../assets/imgslid17.png';
import img18 from '../../assets/imgslid18.png';
import img19 from '../../assets/imgslid19.png';
import img20 from '../../assets/imgslid20.png';
import img21 from '../../assets/imgslid21.png';
import img22 from '../../assets/imgslid23.png';
import img23 from '../../assets/imgslid24.png';
import img24 from '../../assets/imgslid25.png';
import img25 from '../../assets/imgslid26.png';
import img26 from '../../assets/imgslid27.png';
import img27 from '../../assets/imgslid28.png';
import img28 from '../../assets/imgslid29.png';
import img29 from '../../assets/imgslid30.png';
import img31 from '../../assets/imgslid31.png';
// import img32 from '../../assets/imgslid32.png';
// import img33 from '../../assets/imgslid33.png';


const images = [
    { id: 1, src: img1, alt: 'Image 1' },
    { id: 2, src: img2, alt: 'Image 2' },
    { id: 3, src: img3, alt: 'Image 3' },
    { id: 4, src: img4, alt: 'Image 4' },
    { id: 5, src: img5, alt: 'Image 5' },
    { id: 6, src: img6, alt: 'Image 6' },
    { id: 7, src: img7, alt: 'Image 7' },
    { id: 8, src: img8, alt: 'Image 8' },
    { id: 9, src: img9, alt: 'Image 9' },
    { id: 10, src: img10, alt: 'Image 10' },
    { id: 11, src: img11, alt: 'Image 11' },
    { id: 12, src: img12, alt: 'Image 12' },
    { id: 13, src: img13, alt: 'Image 13' },
    { id: 14, src: img14, alt: 'Image 14' },
    { id: 15, src: img15, alt: 'Image 15' },
    { id: 16, src: img16, alt: 'Image 16' },
    { id: 17, src: img17, alt: 'Image 17' },
    { id: 18, src: img18, alt: 'Image 18' },
    { id: 19, src: img19, alt: 'Image 19' },
    { id: 20, src: img20, alt: 'Image 20' },
    { id: 21, src: img21, alt: 'Image 21' },
    { id: 22, src: img22, alt: 'Image 22' },
    { id: 23, src: img23, alt: 'Image 23' },
    { id: 24, src: img24, alt: 'Image 24' },
    { id: 25, src: img25, alt: 'Image 25' },
    { id: 26, src: img26, alt: 'Image 26' },
    { id: 27, src: img27, alt: 'Image 27' },
    { id: 28, src: img28, alt: 'Image 28' },
    { id: 29, src: img29, alt: 'Image 29' },
    { id: 31, src: img31, alt: 'Image 31' },
    // { id: 32, src: img32, alt: 'Image 32' },
    // { id: 33, src: img33, alt: 'Image 33' },
];

function CategoriesCard() {
    const navigate = useNavigate();

    return (
        <Box sx={{ padding: 2, textAlign: 'center' }}>
            <img src={img} alt='firstimg' style={{ width: '100%', maxWidth: '100%' }} />

            <Grid container spacing={2}>
                {images.map((image) => (
                    <Grid item xs={4} sm={4} md={2} key={image.id}>
                        <Box
                            component="img"
                            src={image.src}
                            alt={image.alt}
                            sx={{
                                width: '90%',
                                height: 'auto',
                                borderRadius: 2,
                                boxShadow: 2,
                                transition: 'transform 0.2s, box-shadow 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: 5,
                                    cursor: 'pointer',
                                },
                            }}
                            onClick={() => navigate(`/details/${image.id}`)}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default CategoriesCard;
