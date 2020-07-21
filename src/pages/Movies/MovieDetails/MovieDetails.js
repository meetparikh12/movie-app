import React, { useEffect } from 'react'
import { Grid, Typography, IconButton, withStyles, Paper } from '@material-ui/core'
import Favorite from '@material-ui/icons/Favorite'
import Axios from 'axios'
import People from '@material-ui/icons/People'
import { connect } from 'react-redux'
import { setCurrentMovieDetails } from '../../../actions/actions'
import { store } from '../../../store/store'
import { LOADING_UI } from '../../../actions/actionTypes'

const styles = {
    paper: {
        padding: 20,
        margin: '0 15px 15px 15px'
    },
    poster: {
        width: 200,
        height: 300,
        maxWidth: '100%',
        objectFit: 'cover'
    },
    subPaper : {
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.045)'
    },
    progress: {
        textAlign: 'center'
    }
}
function MovieDetails({loadingUI, classes, match: { params: {movieId}}, movieDetails, setMovieDetails}) {
    useEffect(()=> {
        store.dispatch({
            type: LOADING_UI,
            payload: true
        })
        Axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=5f9bfd5ab4dce1dd61c8ed83e1680d4e&language=en-US`)
        .then(res=> {
            setMovieDetails(res.data)
        })
    },[movieId, setMovieDetails])
    let genres= '';
    let genreType = !movieDetails.genres ? [] : movieDetails.genres.map(genre=> genre.name)
    genreType.forEach(genre=> {
        genres += genre + ' '
    })
    let languages='';
    let spokenLanguage = !movieDetails.spoken_languages ? [] : movieDetails.spoken_languages.map(language => language.name) 
    spokenLanguage.join(',')
    spokenLanguage.forEach(lang=> {
        languages += lang + ' '
    })
    let countries= '';
    let productionCountries = !movieDetails.production_countries ? [] : movieDetails.production_countries.map(country=> country.name)
    productionCountries.forEach(country => {
        countries += country + ' '
    });
    return (
        loadingUI ? <p className={classes.progress}>Loading...</p> : (
        <Grid container>
            <Grid item xs={12} sm={12} md={3}>
                <div style={{textAlign: 'center', marginBottom: '5%'}}>
                {!movieDetails.poster_path}
                <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movieDetails.poster_path}`} alt={`${movieDetails.title} Poster`} className={classes.poster}/>
                </div>
            </Grid> 
            <Grid item xs={12} sm={12} md={9}>
            <Paper className={classes.paper}>
                <Paper className={classes.subPaper}>
                <Typography color="textSecondary" variant="h3">{movieDetails.title}</Typography>
                <Typography color="textSecondary" variant="h6">({!movieDetails.tagline ? 'No Tagline' : movieDetails.tagline})</Typography>
                <Typography color="primary" variant="subtitle2">Genre: {genres}</Typography>
                <Grid container>
                <Grid item md={3}>
                    <IconButton>
                        <People color="action"/>
                    </IconButton>
                    <span style={{color: 'rgba(0,0,0,0.54)'}}>{movieDetails.adult ? 'ADULT' : 'UNIVERSAL'}</span>
                </Grid>
                <Grid item md={9}>
                    <IconButton>
                        <Favorite color="secondary"/>
                    </IconButton>
                    <span style={{color: 'rgba(0,0,0,0.54)'}}>{movieDetails.vote_average} | {movieDetails.vote_count} Votes</span>
                </Grid>
                </Grid>
                <br/>
                <Typography color="secondary" variant="subtitle2">{movieDetails.status}</Typography>
                <Typography variant="subtitle2" color="textSecondary"> Date : {movieDetails.release_date}</Typography>
                <Typography color="textSecondary" variant="h6">Languages Spoken:</Typography>
                <Typography color="textSecondary" variant="body2">{languages.length===1? 'Not yet revealed': languages}</Typography>
                
                <Typography color="textSecondary" variant="h6">Production Countries:</Typography>
                <Typography color="textSecondary" variant="body2">{countries}</Typography>
                </Paper>
                <br/>
                <Paper className={classes.subPaper}>
                <Typography color="textSecondary" variant="h6">Description:</Typography>
                <Typography color="initial" variant="body1" >{!movieDetails.overview? 'Not yet revealed' : movieDetails.overview}</Typography>
                </Paper>
                </Paper>
            </Grid>
        </Grid>)
    )
}

const mapStateToProps = state=> {
    return {
        movieDetails: state.movies.currentMovieDetails,
        loadingUI: state.movies.loadingUI
    }
}

const mapDispatchToProps = dispatchEvent => {
    return {
        setMovieDetails: (details)=> dispatchEvent(setCurrentMovieDetails(details))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(MovieDetails))
