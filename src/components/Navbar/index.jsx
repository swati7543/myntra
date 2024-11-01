import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Badge, InputAdornment, Menu } from '@mui/material';
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

export const Navbar = () => {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(null); // State to track which menu is open

    const handleMouseEnter = (event, menuName) => {
        setAnchorEl(event.currentTarget);
        setOpenMenu(menuName); // Automatically open the new menu when hovering
    };

    const handleMouseLeave = () => {
        setOpenMenu(null); // Close menu on mouse leave
        setAnchorEl(null);
    };

    const handleClose = () => {
        setOpenMenu(null);
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: 'white', color: 'black', boxShadow: 'none', borderBottom: '1px solid #ddd' }}>
                <Toolbar sx={{ height: { md: '5rem', sm: '3rem', xs: '3rem' }, display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
                        <Box onClick={() => navigate('/')} sx={{ cursor: 'pointer', width: '3.5rem', height: '3.5rem', mr: 3 }}>
                            <img src={firstimg} alt="Logo" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                        </Box>

                        <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', alignItems: 'center' }}>
                            {/* Men Menu */}
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{
                                    display: { xs: 'none', sm: 'block' },
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    color: '#555',
                                    cursor: 'pointer',
                                    '&:hover': { color: '#000' }
                                }}
                                onMouseEnter={(event) => handleMouseEnter(event, 'men')}
                            >
                                Men
                            </Typography>
                            <Menu
                                id="men-menu"
                                anchorEl={anchorEl}
                                open={openMenu === 'men'}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'men-button',
                                }}
                                onMouseLeave={handleMouseLeave}
                            >
                                <NavModal>
                                    <Menlist />
                                </NavModal>
                            </Menu>

                            {/* Women Menu */}
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{
                                    display: { xs: 'none', sm: 'block' },
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    color: '#555',
                                    cursor: 'pointer',
                                    '&:hover': { color: '#000' }
                                }}
                                onMouseEnter={(event) => handleMouseEnter(event, 'women')}
                            >
                                Women
                            </Typography>
                            <Menu
                                id="women-menu"
                                anchorEl={anchorEl}
                                open={openMenu === 'women'}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'women-button',
                                }}
                                onMouseLeave={handleMouseLeave}
                            >
                                <NavModal>
                                    <Womenlist />
                                </NavModal>
                            </Menu>

                            {/* Kids, Home & Living, Beauty */}
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ display: { xs: 'none', sm: 'block' }, fontSize: '1rem', fontWeight: 600, color: '#555', cursor: 'pointer', '&:hover': { color: '#000' } }}
                                onMouseEnter={(event) => handleMouseEnter(event, 'kids')}
                            >
                                Kids
                            </Typography>
                            <Menu
                                id="kids-menu"
                                anchorEl={anchorEl}
                                open={openMenu === 'kids'}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'kids-button',
                                }}
                                onMouseLeave={handleMouseLeave}
                            >
                                <NavModal>
                                    <Kidslist />
                                </NavModal>
                            </Menu>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ display: { xs: 'none', sm: 'block' }, fontSize: '1rem', fontWeight: 600, color: '#555', cursor: 'pointer', '&:hover': { color: '#000' } }}
                                onMouseEnter={(event) => handleMouseEnter(event, 'home')}
                            >
                                Home&Living
                            </Typography>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ display: { xs: 'none', sm: 'block' }, fontSize: '1rem', fontWeight: 600, color: '#555', cursor: 'pointer', '&:hover': { color: '#000' } }}
                                onMouseEnter={(event) => handleMouseEnter(event, 'beauty')}
                            >
                                Beauty
                            </Typography>
                            <Typography sx={{ display: { md: 'block', sm: 'none', xs: 'none' } }}>
                                <MenuItem >
                                    <Badge badgeContent={'new'} color="error" sx={{ '& .MuiBadge-badge': { fontSize: '0.75rem' } }}>
                                        <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 600, color: '#555', cursor: 'pointer', '&:hover': { color: '#000' } }}>
                                            Studio
                                        </Typography>
                                    </Badge>
                                </MenuItem>
                            </Typography>
                        </Box>

                    </Box>

                    {/* Search and Icons */}
                    <Box sx={{ alignItems: 'center', gap: 2, display: 'flex' }}>
                        <TextField
                            variant="outlined"
                            size="small"
                            placeholder="Search products, brands, and more"
                            sx={{ width: '20rem', bgcolor: '#f1f1f1', borderRadius: 1, display: { md: 'flex', sm: 'none', xs: 'none' }, }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon sx={{ color: '#888' }} />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <IconButton color="inherit">
                                <Box onClick={() => navigate('/login')}>
                                    <AccountCircleIcon />
                                    <Typography sx={{ display: { md: 'flex', sm: 'none', xs: 'none' }, fontSize: '1rem', fontWeight: 600, color: '#555', cursor: 'pointer', '&:hover': { color: '#000' } }}>
                                        Profile</Typography>
                                </Box>
                            </IconButton>
                            <IconButton color="inherit">
                                <Box>
                                    <FavoriteBorderIcon />
                                    <Typography sx={{ display: { md: 'flex', sm: 'none', xs: 'none' }, }}>Wishlist</Typography>
                                </Box>
                            </IconButton>
                            <IconButton color="inherit">
                                <Box>
                                    <WorkOutlineIcon />
                                    <Typography sx={{ display: { md: 'flex', sm: 'none', xs: 'none' }, }}>Bags</Typography>
                                </Box>
                            </IconButton>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
