import React, { useEffect, Fragment } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import MovieItems from '../../components/Movies/MovieItems/MovieItems'
import { setUpcomingMovies } from '../../actions/actions'

function UpcomingMovies({setUpcomingMovies, upcomingMovies}) {
    useEffect(()=> {
        Axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=5f9bfd5ab4dce1dd61c8ed83e1680d4e&language=en-US&page=1`)
        .then(res=> {
            setUpcomingMovies(res.data.results)
        })
        .catch(err=> {
            console.log(err.response.data)
        })
    },[setUpcomingMovies])

    const movieItems = upcomingMovies[0]==null ? <p>Loading...</p> : (
        upcomingMovies.filter(movie=> movie.poster_path).map((movie)=> {
            return <MovieItems key={movie.id} image={movie.poster_path} title={movie.title}/>
        })
    )
    return (
        <Fragment>
            {movieItems}
        </Fragment>
    )
}
UpcomingMovies.defaultProps = {
    upcomingMovies: []
}
const mapStateToProps = state => {
    return {
        upcomingMovies : state.movies.upcomingMovies
    }
}
const mapDispatchToProps = dispatchEvent => {
    return {
        setUpcomingMovies : (movies)=> dispatchEvent(setUpcomingMovies(movies))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UpcomingMovies)
