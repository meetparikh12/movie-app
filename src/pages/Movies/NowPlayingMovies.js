import React, { useEffect, Fragment } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import MovieItems from '../../components/Movies/MovieItems/MovieItems'
import { setNowPlayingMovies } from '../../actions/actions'

function NowPlayingMovies({nowPlayingMovies,setNowPlayingMovies}) {
    useEffect(()=> {
        Axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=5f9bfd5ab4dce1dd61c8ed83e1680d4e&language=en-US&page=1`)
        .then(res=> {
            setNowPlayingMovies(res.data.results)
        })
        .catch(err=> {
            console.log(err.response.data)
        })
    },[setNowPlayingMovies])

    const movieItems = nowPlayingMovies[0]==null ? <p>Loading...</p> : (
        nowPlayingMovies.filter(movie=> movie.poster_path).map((movie)=> {
            return <MovieItems key={movie.id} movieId={movie.id} image={movie.poster_path} title={movie.title}/>
        })
    )
    return (
        <Fragment>
            {movieItems}
        </Fragment>
    )
}
NowPlayingMovies.defaultProps = {
    nowPlayingMovies: []
}
const mapStateToProps = state => {
    return {
        nowPlayingMovies : state.movies.nowPlayingMovies
    }
}
const mapDispatchToProps = dispatchEvent => {
    return {
        setNowPlayingMovies : (movies)=> dispatchEvent(setNowPlayingMovies(movies))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NowPlayingMovies)
