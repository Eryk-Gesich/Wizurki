import { useState} from 'react';
import { AppBar, Box, Toolbar, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';



function Navbar() {


    const [mixin, setMixin] = useState(null);

    const handleClick = (event) => {
        setMixin(event.currentTarget);
    };

    const handleClose = () => {
        setMixin(null);
    };


    return (
        <Box
            sx={{ flexGrow: 1 }}>
            <AppBar
                position="static">
                <Toolbar
                    sx={{
                    backgroundColor: "purple",
                    justifyContent: "space-between"
                }}
                >
                    <Box
                        sx={{
                        display: { xs: 'none', sm: 'flex' },
                        alignItems: 'center'
                    }}
                    >
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2, fontSize: '3rem'}}
                        >
                            Wizurki
                        </IconButton>
                    </Box>
                    <Box
                        sx={{
                        display: { xs: 'flex', sm: 'none' },
                        alignItems: 'center' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={handleClick}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={mixin}
                            open={Boolean(mixin)}
                            onClose={handleClose}
                        >
                            <MenuItem >
                                <Link
                                    to="cennik"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-70}
                                >
                                <Button
                                    color="inherit"
                                    onClick={handleClose}
                                >
                                    Cennik
                                </Button>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                    <Button
                                        onClick={handleClose}
                                        color="inherit"
                                        sx={{textDecoration: 'none'}}
                                    >
                                        <a
                                            href="https://booksy.com/pl-pl/139457_manifest-studio_paznokcie_3_warszawa"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                        style={{
                                            textDecoration: 'inherit',
                                            color: 'inherit'
                                        }}
                                        >
                                            Kontakt
                                        </a>
                                    </Button>
                            </MenuItem>
                            <MenuItem >
                                <Link
                                    to="photo_list"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-70}
                                >
                                <Button
                                    color="inherit"
                                    onClick={handleClose}
                                >
                                    Zdjęcia prac
                                </Button>
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'flex', sm: 'none' },
                            alignItems: 'center'
                    }}
                    >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        Wizurki
                    </IconButton>
                    </Box>
                    <Box sx={{
                        display: { xs: 'none', sm: 'flex' },
                        alignItems: 'center'
                    }}
                    >
                        <Link
                            to="cennik"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-70}
                        >
                        <Button
                            sx={{
                                mr: 2,
                                border: "2px solid black",
                                borderRadius: 3,
                                fontSize: '1'
                        }}
                            color="inherit"
                        >
                            Cennik
                        </Button>
                        </Link>
                        <a
                            href="https://booksy.com/pl-pl/139457_manifest-studio_paznokcie_3_warszawa"
                            target="_blank"
                            rel="noopener noreferrer"
                           style={{
                               textDecoration: 'inherit',
                               color: 'inherit'
                        }}
                        >
                        <Button
                            sx={{
                                mr: 2,
                                border: "2px solid black",
                                borderRadius: 3,
                                fontSize: '1'
                        }}
                            color="inherit"
                        >
                            Kontakt
                        </Button>
                        </a>
                        <Link
                            to="photo_list"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-70}
                        >
                        <Button
                            sx={{
                                mr: 2,
                                border: "2px solid black",
                                borderRadius: 3,
                                fontSize: '1'
                        }}
                            color="inherit"
                        >
                            Zdjęcia prac
                        </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;