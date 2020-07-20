import React, { Fragment, useState, useEffect } from 'react'
import { InputBase, IconButton, withStyles, Paper } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import Axios from 'axios';
import {connect} from 'react-redux';
import {setSearchMovies} from '../../actions/actions';
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
function SearchMovie({classes, setSearchMovies}) {
    const [query,setQuery] = useState('Avengers') 
    // const api_key = '5f9bfd5ab4dce1dd61c8ed83e1680d4e'
    useEffect(()=> {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=5f9bfd5ab4dce1dd61c8ed83e1680d4e&language=en-US&query=${query}&page=1&include_adult=false`
        Axios.get(url)
        .then(res=> {
            setSearchMovies(res.data.results)
        })
        .catch(err=> {
            console.log(err.response.data);
        })
    })
    const submitQuery = event => {
        event.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=5f9bfd5ab4dce1dd61c8ed83e1680d4e&language=en-US&query=${query}&page=1&include_adult=false`
        Axios.get(url)
        .then(res=> {
            setSearchMovies(res.data.results)
        })
        .catch(err=> {
            console.log(err.response.data);
        })
    }
    return (
        <Fragment>
            <Paper component="form" onSubmit={submitQuery} className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder={`e.g ${query}`}
                    value={query}
                    inputProps={{ 'aria-label': 'search movie' }}
                    onChange={(event)=> setQuery(event.target.value)}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon/>
                </IconButton>
            </Paper>
        </Fragment>
    )
}

const mapDispatchToProps = dispatchEvent => {
    return {
        setSearchMovies: (movies)=> dispatchEvent(setSearchMovies(movies))
    }
}
export default connect(null,mapDispatchToProps)(withStyles(styles)(SearchMovie))
