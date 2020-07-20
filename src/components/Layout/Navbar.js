import React, { Fragment } from 'react'
import { AppBar, Toolbar, Button} from '@material-ui/core'
import { Link } from 'react-router-dom'
function Navbar() {

    return (
        <AppBar>
            <Toolbar className="nav-container">
                <Fragment>
                    <Button color="inherit" component={Link} to="/latest/movies">LATEST</Button>
                    <Button color="inherit" component={Link} to="/now-playing/movies">NOW PLAYING</Button>
                    <Button color="inherit" component={Link} to="/upcoming/movies">UPCOMING</Button>
                </Fragment>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;