import { Box,Grid } from '@mui/material'
import React from 'react'
import couponimg1 from '../../assets/couponimg1.png'
import couponimg2 from '../../assets/couponimg2.png'
import couponimg3 from '../../assets/couponimg3.png'
import couponimg4 from '../../assets/couponimg4.png'

const CouponCorner = () => {
    return (
        <Box sx={{ textAlign: 'center', padding: 2 }}>

            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', }}>
                <img src={couponimg1} alt='firstimg' style={{ width: '100%', maxWidth: '100%' }} />
                <Grid container justifyContent="center">
                    <Grid item xs={3} sm={6} md={3}>

                        <img src={couponimg3} alt='firstimg' style={{ width: '100%', maxWidth: '600px' }} />
                    </Grid>
                    <Grid item xs={3} sm={6} md={3}>

                        <img src={couponimg4} alt='firstimg' style={{ width: '100%', maxWidth: '600px' }} />
                    </Grid>
                </Grid>
                <img src={couponimg2} alt='firstimg' style={{ width: '100%', maxWidth: '100%' }} />

            </Box>
        </Box>
    )
}

export default CouponCorner