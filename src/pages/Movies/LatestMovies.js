import React, { useEffect, Fragment } from 'react'
import Axios from 'axios'
import {connect} from 'react-redux'
import MovieItems from '../../components/Movies/MovieItems/MovieItems'
import { setLatestMovie } from '../../actions/actions'
import { Grid } from '@material-ui/core'
import { LOADING_UI } from '../../actions/actionTypes'
import { store } from '../../store/store'

function LatestMovies({loadingUI, latestMovie,setLatestMovie}) {
    useEffect(()=> {
        store.dispatch({
            type: LOADING_UI,
            payload: true
        })
        Axios.get(`https://api.themoviedb.org/3/movie/latest?api_key=5f9bfd5ab4dce1dd61c8ed83e1680d4e&language=en-US`)
        .then(res=> {
            setLatestMovie(res.data)
        })
        .catch(err=> {
            console.log(err.response.data)
        })
    },[setLatestMovie])

    const movieItems = loadingUI ? <p style={{margin: 'auto'}}>Loading...</p> : (
        <MovieItems key={latestMovie.id} movieId={latestMovie.id} image={latestMovie.poster_path} title={latestMovie.title}/>
    )
    return (
        <Fragment>
            <Grid container>
                {movieItems}
            </Grid>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        latestMovie: state.movies.latestMovie,
        loadingUI: state.movies.loadingUI
    }
}
const mapDispatchToProps = dispatchEvent => {
    return {
        setLatestMovie: (movie) => dispatchEvent(setLatestMovie(movie))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LatestMovies)
