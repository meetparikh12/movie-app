import React, { Fragment } from 'react'
import { AppBar, Toolbar, Button, IconButton, Menu, MenuItem} from '@material-ui/core'
import Home from '@material-ui/icons/Home'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [width] = React.useState(document.documentElement.clientWidth)
    
    const buttonsToShow = (
        <Fragment>
            <Button color="inherit" component={Link} to="/"><Home/></Button>
            <Button color="inherit" component={Link} to="/movie/now-playing">NOW PLAYING</Button>
            <Button color="inherit" component={Link} to="/movie/upcoming">UPCOMING</Button>
            <Button color="inherit" component={Link} to="/movie/latest">LATEST</Button>
        </Fragment>
    )
    
    const handleClick = (event)=> {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = ()=> {
        setAnchorEl(null)
    }
    let contentToShow;

    if(width>500){
        contentToShow = (
            <Fragment>
                {buttonsToShow}
            </Fragment>
        )
    }else if(width<=500){
        contentToShow = (
        <Fragment>
            <IconButton onClick={handleClick} aria-controls="simple-menu" edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose} component={Link} to="/">Home</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/movie/now-playing">Now Playing</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/movie/upcoming">Up Coming</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/movie/latest">Latest</MenuItem>
            </Menu>
        </Fragment>  
        )             
    }
    return (
        <AppBar>
            <Toolbar className="nav-container">
                {contentToShow}
            </Toolbar>
        </AppBar>
    )
   
}

export default Navbar;