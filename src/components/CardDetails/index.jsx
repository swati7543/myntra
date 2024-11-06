import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, Box, Breadcrumbs, Button, Checkbox, Grid, Link, Menu, MenuItem, Radio, Slider, TextField, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const categories = [
    { label: 'Shirts', count: 156934 },
    { label: 'Tshirts', count: 152440 },
    { label: 'Trousers', count: 38540 },
    { label: 'Jeans', count: 35971 },
    { label: 'Sweatshirts', count: 35686 },
    { label: 'Kurta Sets', count: 29583 },
    { label: 'Kurtas', count: 27995 },
    { label: 'Jackets', count: 21370 },
];

const brands = [
    { label: 'Macmerise', count: 833 },
    { label: 'Devoiler', count: 833 },
    { label: 'Tommy Hilfiger', count: 833 },
    { label: 'Roadster', count: 833 },
    { label: 'HRX by Hrithik Roshan', count: 833 },
    { label: 'WROGN', count: 833 },
    { label: 'Huetrap', count: 833 },
];

const colors = [
    { label: 'Black', count: 26608 },
    { label: 'Blue', count: 26608 },
    { label: 'White', count: 26608 },
    { label: 'Green', count: 26608 },
    { label: 'Navy Blue', count: 26608 },
    { label: 'Gray', count: 26608 },
    { label: 'Yellow', count: 26608 },
];

const discountRanges = [
    '10% and above', '20% and above', '30% and above', '40% and above',
    '50% and above', '60% and above', '70% and above', '80% and above', '90% and above'
];

const options = ['The Godfather', 'Pulp Fiction'];



export default function CardDetails({ children }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [priceRange, setPriceRange] = React.useState([100, 10100]);

    const handleSliderChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'left' }}>
            <Grid container spacing={2} >
                {/* Sidebar */}
                <Grid item xs={12} md={2.5} sx={{ display: { md: 'block', sm: 'none', xs: 'none' }, p: 5 }}>
                    {/* Breadcrumbs and Title */}
                    <Box role="presentation" onClick={handleClick} sx={{ paddingLeft: 1, mt: 1, pl: 3 }}>
                        <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: '0.8rem' }}>
                            <Link underline="hover" color="inherit" href="/">Home</Link>
                            <Link underline="hover" color="inherit" href="/clothing">Clothing</Link>
                            <Typography color="text.primary" fontSize="0.8rem">Breadcrumbs</Typography>
                        </Breadcrumbs>
                        <Typography variant="h6" sx={{ mt: 1, fontSize: '0.95rem', fontWeight: 500 }}>Mens Apparel - 5808 items</Typography>
                        <Typography sx={{ mt: 1, fontSize: '0.85rem', fontWeight: 600 }}>FILTERS</Typography>
                    </Box>

                    {/* Filters */}
                    <Box sx={{ border: 1, borderColor: 'grey.300', borderRadius: 1, mt: 2 }}>
                        {/* Category Filter */}
                        <Box sx={{ mt: 1, pl: 2 }}>
                            <Typography variant="subtitle2" fontSize="0.85rem">Categories</Typography>
                            {categories.map((category) => (
                                <Box key={category.label} sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                    <Checkbox size="small" />
                                    <Typography variant="body2" fontSize="0.8rem">{`${category.label} (${category.count})`}</Typography>
                                </Box>
                            ))}
                            <Typography variant="body2" fontSize="0.75rem" color="text.secondary">+ 56 more</Typography>
                        </Box>

                        {/* Brand Filter */}
                        <Box sx={{ mt: 2, borderTop: 1, borderColor: 'grey.300', pt: 1, pl: 2 }}>
                            <Typography variant="subtitle2" fontSize="0.85rem">Brand</Typography>
                            {brands.map((brand) => (
                                <Box key={brand.label} sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                    <Checkbox size="small" />
                                    <Typography variant="body2" fontSize="0.8rem">{`${brand.label} (${brand.count})`}</Typography>
                                </Box>
                            ))}
                            <Typography variant="body2" fontSize="0.75rem" color="text.secondary">+ 56 more</Typography>
                        </Box>

                        {/* Price Range Slider */}
                        <Box sx={{ mt: 2, borderTop: 1, borderColor: 'grey.300', pt: 1, pl: 2 }}>
                            <Typography variant="subtitle2" fontSize="0.85rem">Price Range</Typography>
                            <Slider
                                value={priceRange}
                                onChange={handleSliderChange}
                                valueLabelDisplay="auto"
                                min={100}
                                max={10100}
                                sx={{ width: '85%' }}
                            />
                            <Typography variant="body2" fontSize="0.8rem" color="text.secondary">₹{priceRange[0]} - ₹{priceRange[1]}+</Typography>
                        </Box>

                        {/* Color Filter */}
                        <Box sx={{ mt: 2, borderTop: 1, borderColor: 'grey.300', pt: 1, pl: 2 }}>
                            <Typography variant="subtitle2" fontSize="0.85rem">Color</Typography>
                            {colors.map((color) => (
                                <Box key={color.label} sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                    <Checkbox size="small" />
                                    <Typography variant="body2" fontSize="0.8rem">{`${color.label} (${color.count})`}</Typography>
                                </Box>
                            ))}
                            <Typography variant="body2" fontSize="0.75rem" color="text.secondary">+ 56 more</Typography>
                        </Box>

                        {/* Discount Range Filter */}
                        <Box sx={{ mt: 2, borderTop: 1, borderColor: 'grey.300', pt: 1, pl: 1 }}>
                            <Typography variant="subtitle2" fontSize="0.85rem">Discount Range</Typography>
                            {discountRanges.map((range) => (
                                <Box key={range} sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                    <Radio size="small" />
                                    <Typography variant="body2" fontSize="0.8rem">{range}</Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Grid>

                {/* Content Area */}
                <Grid item xs={12} md={9}>
                    <Box sx={{ mt: '4rem', display: { md: 'flex', sm: 'none', xs: 'none' }, justifyContent: 'space-between', alignContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex ', justifyContent: 'center', gap: 5 }}>
                         

                            <Box>
                                <Button
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    Bundles
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </Menu>
                            </Box>
                            <Box>
                                <Button
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    Country of origin
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </Menu>
                            </Box>
                            <Box>
                                <Button
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    size
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </Menu>
                            </Box>
                        </Box>
                        <Autocomplete
                            disablePortal
                            options={options}
                            size='small'
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="search" />}
                        />
                    </Box>
                    <Box>
                        {children}
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
}
