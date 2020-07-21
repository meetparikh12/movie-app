import React, { Fragment } from 'react'
import { AppBar, Toolbar, Button} from '@material-ui/core'
import { Link } from 'react-router-dom'
function Navbar() {

    return (
        <AppBar>
            <Toolbar className="nav-container">
                <Fragment>
                    <Button color="inherit" component={Link} to="/movie/latest">LATEST</Button>
                    <Button color="inherit" component={Link} to="/movie/now-playing">NOW PLAYING</Button>
                    <Button color="inherit" component={Link} to="/movie/upcoming">UPCOMING</Button>
                </Fragment>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;