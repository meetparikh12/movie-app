import React, { useEffect, Fragment } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import MovieItems from '../../components/Movies/MovieItems/MovieItems'
import { setNowPlayingMovies } from '../../actions/actions'
import { Grid } from '@material-ui/core'
import { store } from '../../store/store'
import { LOADING_UI } from '../../actions/actionTypes'

function NowPlayingMovies({loadingUI, nowPlayingMovies,setNowPlayingMovies}) {
    useEffect(()=> {
        store.dispatch({
            type: LOADING_UI,
            payload: true
        })
        Axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=5f9bfd5ab4dce1dd61c8ed83e1680d4e&language=en-US&page=1`)
        .then(res=> {
            setNowPlayingMovies(res.data.results)
        })
        .catch(err=> {
            console.log(err.response.data)
        })
    },[setNowPlayingMovies])

    const movieItems = loadingUI ? <p style={{margin: 'auto'}}>Loading...</p> : (
        nowPlayingMovies.filter(movie=> movie.poster_path).map((movie)=> {
            return <MovieItems key={movie.id} movieId={movie.id} image={movie.poster_path} title={movie.title}/>
        })
    )
    return (
        <Fragment>
            <Grid container>
                {movieItems}
            </Grid>
        </Fragment>
    )
}
NowPlayingMovies.defaultProps = {
    nowPlayingMovies: []
}
const mapStateToProps = state => {
    return {
        nowPlayingMovies : state.movies.nowPlayingMovies,
        loadingUI: state.movies.loadingUI
    }
}
const mapDispatchToProps = dispatchEvent => {
    return {
        setNowPlayingMovies : (movies)=> dispatchEvent(setNowPlayingMovies(movies))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NowPlayingMovies)
