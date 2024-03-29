import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    AppBar, Toolbar, Typography,
    IconButton, Switch, FormControlLabel,
    FormGroup, MenuItem, Menu
} from '@material-ui/core';
import {
    AccountCircle, ShoppingCart,
    Menu as MenuIcon
} from '@material-ui/icons';
import {Link} from 'react-router-dom'
import {nonStyledLinks} from "../../constants/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },

    links: {
        ...nonStyledLinks,
        flexGrow: 1,
    }
}));

export default function MenuAppBar() {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <FormGroup>
                <FormControlLabel
                    control={<Switch checked={auth} onChange={handleChange} aria-label="login switch"/>}
                    label={auth ? 'Logout' : 'Login'}
                />
            </FormGroup>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Link to={'/'} className={classes.links}>
                        <Typography variant="h6" className={classes.title}>
                            Finolis
                        </Typography>
                    </Link>
                    <IconButton
                        aria-label="shopping cart of user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <Link to={'/cart'} className={classes.links}>
                            <ShoppingCart/>
                        </Link>
                    </IconButton>

                    {auth && (
                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                                onClick={handleMenu}
                            >
                                <AccountCircle/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}
