import React, { Fragment} from 'react'
import SearchMovie from '../../components/SearchMovie/SearchMovie'
import MovieItems from '../../components/Movies/MovieItems/MovieItems'
import {connect} from 'react-redux'

function AllMovies({movies}) {

    const movieItems = !movies ? <p>Loading...</p> : (
        movies.filter(movie=> movie.poster_path).map((movie)=> {
            return <MovieItems key={movie.id} image={movie.poster_path} title={movie.title}/>
        })
    )
    return (
        <Fragment>
            <SearchMovie/>
            <div style={{width: '33.33%'}}>{movieItems}</div>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        movies: state.movies.searchMovies
    }
}
export default connect(mapStateToProps,null)(AllMovies)
