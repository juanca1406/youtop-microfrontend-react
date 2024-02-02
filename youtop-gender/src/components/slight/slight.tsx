import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useTranslation } from 'react-i18next';


function Menu() {
    const { t } = useTranslation();

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                            mr: 10,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'arial',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Peliculas
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Typography
                            component={Link}
                            to="gender"
                            sx={{ textDecoration: 'none' }}
                        >
                            <Button sx={{ my: 2, color: 'white', display: 'block' }} >
                                {t("menu.gender")}
                            </Button>
                        </Typography>
                        <Typography
                            component={Link}
                            to="gender"
                            sx={{ textDecoration: 'none' }}
                        >
                            <Button sx={{ my: 2, color: 'white', display: 'block' }} >
                                {t("menu.gender")}
                            </Button>
                        </Typography>
                    </Box>

                    <Box >
                        <Button
                            component={Link}
                            to="/Carrito"
                            sx={{ color: 'inherit' }}
                        >
                            <ShoppingCartIcon sx={{ fontSize: 30 }} />
                            1
                        </Button>
                    </Box>
                </Toolbar>
            </Container>

        </AppBar >
    );
}
export default Menu;