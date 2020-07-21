import React, { Fragment} from 'react'
import SearchMovie from '../../components/SearchMovie/SearchMovie'
import MovieItems from '../../components/Movies/MovieItems/MovieItems'
import {connect} from 'react-redux'
import { Grid } from '@material-ui/core'

function AllMovies({movies}) {

    const movieItems = !movies ? <p>Loading...</p> : (
        movies.filter(movie=> movie.poster_path).map((movie)=> {
            return <MovieItems key={movie.id}  movieId={movie.id} image={movie.poster_path} title={movie.title}/>
        })
    )
    return (
        <Fragment>
            <div className="serch_section"><SearchMovie/></div>
            <div className="movies_section">
                <Grid container>
                    {movieItems}
                </Grid>
            </div>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        movies: state.movies.searchMovies
    }
}
export default connect(mapStateToProps,null)(AllMovies)
