import React, { useEffect } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import MovieItems from '../../components/Movies/MovieItems/MovieItems'
import { setUpcomingMovies } from '../../actions/actions'
import { Grid } from '@material-ui/core'
import { store } from '../../store/store'
import { LOADING_UI } from '../../actions/actionTypes'
import MovieSkeleton from '../../components/Skeleton/MovieSkeleton'

function UpcomingMovies({loadingUI, setUpcomingMovies, upcomingMovies}) {
    useEffect(()=> {
        if(upcomingMovies.length===0){
            store.dispatch({
                type: LOADING_UI,
                payload: true
            })
            Axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=5f9bfd5ab4dce1dd61c8ed83e1680d4e&language=en-US&page=1`)
            .then(res=> {
                setUpcomingMovies(res.data.results)
            })
            .catch(err=> {
                console.log(err.response.data)
            })
        }
    },[setUpcomingMovies, upcomingMovies])

    const movieItems = loadingUI ? <MovieSkeleton/> : (
        upcomingMovies.filter(movie=> movie.poster_path).map((movie)=> {
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
UpcomingMovies.defaultProps = {
    upcomingMovies: []
}
const mapStateToProps = state => {
    return {
        upcomingMovies : state.movies.upcomingMovies,
        loadingUI: state.movies.loadingUI
    }
}
const mapDispatchToProps = dispatchEvent => {
    return {
        setUpcomingMovies : (movies)=> dispatchEvent(setUpcomingMovies(movies))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UpcomingMovies)
