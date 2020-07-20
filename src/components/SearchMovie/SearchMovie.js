import React, { Fragment, useState } from 'react'
import { InputBase, IconButton, withStyles, Paper } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

const styles = {
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        margin: '0 auto'
    },
    input: {
        marginLeft: 10,
        flex: 1,
    },
    iconButton: {
        padding: 10,
    }
}
function SearchMovie({classes}) {
    const [movie,setMovieName] = useState('Avengers') 
    return (
        <Fragment>
            <Paper component="form" className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder={`e.g ${movie}`}
                    inputProps={{ 'aria-label': 'search movie' }}
                    onChange={(event)=> setMovieName(event.target.value)}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon/>
                </IconButton>
            </Paper>
        </Fragment>
    )
}

export default withStyles(styles)(SearchMovie)
