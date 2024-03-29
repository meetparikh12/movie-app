import React, { useEffect } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import MovieItems from '../../components/Movies/MovieItems/MovieItems'
import { setNowPlayingMovies } from '../../actions/actions'
import { Grid } from '@material-ui/core'
import { store } from '../../store/store'
import { LOADING_UI } from '../../actions/actionTypes'
import MovieSkeleton from '../../components/Skeleton/MovieSkeleton'

function NowPlayingMovies({loadingUI, nowPlayingMovies,setNowPlayingMovies}) {
    useEffect(()=> {
        if (nowPlayingMovies.length === 0) {
            store.dispatch({
                type: LOADING_UI,
            })
            Axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=5f9bfd5ab4dce1dd61c8ed83e1680d4e&language=en-US&page=1`)
            .then(res=> {
                setNowPlayingMovies(res.data.results)
            })
            .catch(err=> {
                console.log(err.response.data)
            })
        }
    },[setNowPlayingMovies,nowPlayingMovies])

    const movieItems = loadingUI ? <MovieSkeleton/> : (
        nowPlayingMovies.filter(movie=> movie.poster_path).map((movie)=> {
            return <MovieItems key={movie.id} movieId={movie.id} image={movie.poster_path} title={movie.title}/>
        })
    )
    return (
        <div className="movie_type">
            <Grid container>
                {movieItems}
            </Grid>
        </div>
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
