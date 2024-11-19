import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Badge, Button, Divider, InputAdornment, Menu } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SearchIcon from '@mui/icons-material/Search';
import firstimg from '../../assets/firstimg.jpg';
import NavModal from '../Modals/NavModal';
import Menlist from '../../pages/Navlist/Menlist';
import Womenlist from '../../pages/Navlist/Womenlist';
import Kidslist from '../../pages/Navlist/Kidslist';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalItems } from '../../redux/features/addToCartSlice'
import { selectWishlistItems } from '../../redux/features/addToWishlistSlice';
import Studio from '../../pages/Navlist/Studio';

const categoryComponents = [<Menlist />, <Womenlist />, <Kidslist />];

export const Navbar = () => {
    const navigate = useNavigate()
    const items = useSelector(state => state.cart.items);
    const totalItems = useSelector(selectTotalItems);
    const wishlist = useSelector(state => state.wishlist.item)
    const totalWishlistItem = useSelector(selectWishlistItems)
    const [openMenu, setOpenMenu] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenuIndex, setOpenMenuIndex] = useState(null);
    const [activeMenu, setActiveMenu] = useState(null);

    const navItems = [
        { id: 'men', label: 'Men', dropdown: <Menlist /> },
        { id: 'women', label: 'Women', dropdown: <Womenlist /> },
        { id: 'kids', label: 'Kids', dropdown: <Kidslist /> },
        { id: 'Home&Living', label: 'Home&Living', dropdown: <Kidslist /> },
        { id: 'Beauty', label: 'Beauty', dropdown: <Kidslist /> },
        // { id: 'Studio', label: 'Studio', dropdown: <Studio /> },
        // Add more items here
    ];

    const handleMouseEnter = (event, menuName, itemId) => {
        setActiveMenu(itemId);
        setOpenMenu(menuName);
        setAnchorEl(event.currentTarget); // Set anchor element for menu position
    };

    const handleMouseLeave = () => {
        setActiveMenu(null);
        setOpenMenu(null);
        setAnchorEl(null); // Reset anchor element when menu is closed
    };



    const handleClose = () => {
        setOpenMenu(null);
        setAnchorEl(null);
    };
    return (
        <Box sx={{ mb: { md: 10, sm: 5, xs: 7 } }}>
            <AppBar position="fixed" sx={{ bgcolor: 'white', color: 'black', borderBottom: '1px solid #ddd', }}>
                <Toolbar sx={{ height: { md: '5rem', sm: '3rem', xs: '3rem' }, display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
                        <Box onClick={() => navigate('/')} sx={{ cursor: 'pointer', width: '3.5rem', height: '3.5rem', mr: 3, ml: { md: 4, xs: 0, sm: 0 } }}>
                            <img src={firstimg} alt="Logo" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                        </Box>
                        <Box sx={{
                            display: { xs: 'none', sm: 'flex', md: 'flex' },
                            gap: 2,
                        }
                        }>
                            {navItems.map((item) => (
                                <Box
                                    key={item.id}
                                    onMouseEnter={(e) => handleMouseEnter(e, '', item.id)}
                                    onMouseLeave={handleMouseLeave}
                                    sx={{ cursor: 'pointer', position: 'relative', width: '100%', height: '5rem', display: 'flex', alignItems: 'center' }}

                                >
                                    <Typography variant='h6' sx={{
                                        height: '100%',
                                        width: '5rem',
                                        fontSize: '.9rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        alignContent: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 600,
                                        color: '#555',
                                        cursor: 'pointer',
                                        '&:hover': { color: '#000', borderBottom: '4px solid red' }
                                    }}>

                                        {item.label}
                                    </Typography>
                                    {activeMenu === item.id && (

                                        <NavModal >
                                            {item.dropdown}
                                        </NavModal>
                                    )}
                                </Box>
                            ))}
                            <Box sx={{
                                display: 'flex', justifyContent: 'center', alignContent: 'center',
                                alignItems: 'center', fontWeight: 600,
                                color: '#555',
                                cursor: 'pointer',
                                // '&:hover': { color: '#000', borderBottom: '4px solid red' }
                            }}>
                                <Badge badgeContent={'NEW'} sx={{ '& .MuiBadge-badge': { color: 'red', fontWeight: 600, fontSize: '0.75rem' } }}>
                                    <Box onClick={() => navigate('/bags')}>
                                        <Typography
                                            sx={{
                                                display: { md: 'flex', sm: 'none', xs: 'none' }, fontSize: '.9rem', fontWeight: 600, color: '#555', cursor: 'pointer', '&:hover': { color: '#000' }, mr: 1.5
                                            }}
                                        >STUDIO </Typography>
                                    </Box>
                                </Badge>
                            </Box>
                        </Box>
                    </Box>

                    {/* Search and Icons */}
                    <Box sx={{ alignItems: 'center', gap: 2, display: 'flex', }}>
                        <TextField
                            variant="outlined"
                            size="small"
                            placeholder="Search products, brands, and more"
                            sx={{ width: '20rem', bgcolor: '#f1f1f1', borderRadius: 1, display: { md: 'none', lg: 'flex', sm: 'none', xs: 'none' }, }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon sx={{ color: '#888' }} />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                            <Typography color="inherit" >
                                <Box onMouseEnter={(event) => handleMouseEnter(event, 'profile')} >
                                    <AccountCircleIcon />
                                    <Typography
                                        sx={{ display: { md: 'flex', sm: 'none', xs: 'none' }, fontSize: '.9rem', fontWeight: 600, color: '#555', cursor: 'pointer', '&:hover': { color: '#000' } }}
                                    >
                                        Profile
                                    </Typography>
                                </Box>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={openMenu === 'profile'}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                        onMouseLeave: handleMouseLeave,

                                    }}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Box sx={{ padding: 2 }}>
                                        <Box sx={{ mb: 2 }}>
                                            <Typography>Welcome
                                                To access account and manage orders
                                            </Typography>
                                            <Button variant='outlined' sx={{ mt: 2 }} onClick={() => {
                                                handleClose()
                                                navigate('/login')
                                            }}  >   login / Signup</Button>
                                        </Box>
                                        <Divider />
                                        {['Order', 'Wishlist', 'Gift Cards', 'Contact Us', 'Myntra Insider'].map((item, index) => (
                                            <Box
                                                key={index}
                                                sx={{
                                                    padding: .5,
                                                    borderRadius: 1,
                                                    cursor: 'pointer',
                                                    '&:hover': { backgroundColor: '#f5f5f5' }
                                                }}
                                            >
                                                {item}
                                            </Box>
                                        ))}

                                        <Divider />
                                        {['Myntra Credit', 'Coupons', 'Saved Card', 'Saved VPA', 'Saved Addresses'].map((item, index) => (
                                            <Box
                                                key={index}
                                                sx={{
                                                    padding: .5,
                                                    borderRadius: 1,
                                                    cursor: 'pointer',
                                                    '&:hover': { backgroundColor: '#f5f5f5' }
                                                }}
                                            >
                                                {item}
                                            </Box>
                                        ))}


                                    </Box>
                                </Menu>
                            </Typography>
                            <Typography color="inherit">
                                {/* <Badge badgeContent={totalWishlistItem} color="error" sx={{ '& .MuiBadge-badge': { fontSize: '0.75rem' } }}> */}
                                <Box onClick={() => navigate('/wishlist')}>
                                    <FavoriteBorderIcon />
                                    <Typography
                                        sx={{ display: { md: 'flex', sm: 'none', xs: 'none' }, fontSize: '.9rem', fontWeight: 600, color: '#555', cursor: 'pointer', '&:hover': { color: '#000' } }}
                                    >Wishlist</Typography>
                                </Box>
                                {/* </Badge> */}
                            </Typography>
                            <Typography color="inherit">
                                <Badge badgeContent={totalItems} color="error" sx={{ '& .MuiBadge-badge': { fontSize: '0.75rem' } }}>
                                    <Box onClick={() => navigate('/bags')}>
                                        <WorkOutlineIcon />
                                        <Typography
                                            sx={{ display: { md: 'flex', sm: 'none', xs: 'none' }, fontSize: '.9rem', fontWeight: 600, color: '#555', cursor: 'pointer', '&:hover': { color: '#000' } }}
                                        >Bags </Typography>
                                    </Box>
                                </Badge>
                            </Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box >
    );
};
