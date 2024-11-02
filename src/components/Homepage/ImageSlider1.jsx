import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/imgslid1.png';
import img2 from '../../assets/imgslid2.png';
import img3 from '../../assets/imgslid3.png';
import img4 from '../../assets/imgslid4.png';
import img5 from '../../assets/imgslid5.png';
import img6 from '../../assets/imgslid6.png';
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function CenterMode() {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const navigate = useNavigate()
  // const settings = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   // centerPadding: "60px",
  //   slidesToShow: 4,
  //   speed: 500,
  //   autoplay: true,
  //   autoplaySpeed: 1000,
  //   dots: false,
  //   beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };


  const images = [
    { id: 2, src: img2, alt: 'Image 2' },
    { id: 3, src: img3, alt: 'Image 3' },
    { id: 4, src: img4, alt: 'Image 4' },
    { id: 5, src: img5, alt: 'Image 5' },
    { id: 6, src: img6, alt: 'Image 6' },
    // { id: 7, src: img7, alt: 'Image 7' },
    // { id: 8, src: img8, alt: 'Image 8' },
  ];

  // const handleDotClick = (index) => {
  //   if (sliderRef.current) {
  //     sliderRef.current.slickGoTo(index);
  //   }
  // };

  return (

    <Box sx={{ padding: 2, textAlign: 'center' }}>
      {/* <img src={img1} alt='firstimg' style={{ width: '100%', maxWidth: '100%' }} /> */}

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
              maxWidth: '270px', // Set a maximum width for each image
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
    // <Box
    //   className="slider-container"
    //   sx={{
    //     width: "90%",
    //     // margin: "0 auto",
    //     // padding: "20px 0",
    //   }}
    // >
    //   <Slider ref={sliderRef} {...settings}>
    //     {images.map((src, index) => (
    //       <Box
    //         key={index}
    //         sx={{
    //           width: '100%',
    //           display: "flex",
    //           borderRadius: "20px",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           transition: "transform 0.5s ease", // Smooth transition for scaling effect
    //           transform: index === activeSlide ? "scale(1.1)" : "scale(0.9)", // Enlarge active card
    //         }}
    //       >
    //         <img
    //           src={src}
    //           alt={`Slide ${index + 1}`}
    //           style={{
    //             width: "100%",
    //             maxWidth: "250px",
    //             height: "350px",
    //             objectFit: "cover",
    //             borderRadius: "10px",
    //             boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    //           }}
    //         />
    //       </Box>
    //     ))}
    //   </Slider>
    //   <div style={{ textAlign: "center", marginTop: "10px" }}>
    //     {images.map((_, index) => (
    //       <div
    //         key={index}
    //         onClick={() => handleDotClick(index)}
    //         style={{
    //           display: "inline-block",
    //           width: "10px",
    //           height: "10px",
    //           borderRadius: "50%",
    //           background: index === activeSlide ? "blue" : "gray",
    //           margin: "0 5px",
    //           cursor: "pointer",
    //         }}
    //       />
    //     ))}
    //   </div>
    // </Box>
  );
}

export default CenterMode;
