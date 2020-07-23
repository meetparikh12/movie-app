import React from 'react'
import { withStyles, Grid, Paper } from '@material-ui/core'

const styles = {
    posterImage: {
        width: '200px',
        height: '300px',
        maxWidth: '100%',
        margin: '0 auto 5% auto',
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    paper: {
        padding: 20,
        margin: '0 15px 15px 15px'
    },
    subPaper: {
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.045)'
    },
    movieTitle: {
        height: 55,
        width: '70%',
        backgroundColor: 'rgba(0,0,0,0.3)',
        marginBottom: '3%'
    },
    tagLine: {
        height: 18,
        width: '45%',
        backgroundColor: 'rgba(0,0,0,0.2)',
        marginBottom: '2%'
    },
    genre: {
        height: 15,
        width: '40%',
        marginBottom: '2%',
        backgroundColor: '#00bcd4'
    },
    movieType: {
        height: 17,
        width: '57%',
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    vote: {
        height: 17,
        width: '19%',
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    status: {
        height: 15,
        width: '10%',
        backgroundColor: 'red',
        marginBottom: '1%'
    },
    date: {
        height: 15,
        width: '10%',
        backgroundColor: 'rgba(0,0,0,0.1)',
        marginBottom: '2%'
    },
    halfLine: {
        height: 30,
        width: '30%',
        marginBottom: '3%',
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    description: {
        height: 30,
        width: '30%',
        marginBottom: '2%',
        backgroundColor: 'rgba(0,0,0,0.15)'
    },
    overview: {
        height: 30,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.3)',
        marginBottom: '2%'
    }
}
function MovieDetailsSkeleton({classes}) {
    return (
        <Grid container style={{marginTop: '10%'}}>
            <Grid item xs={12} sm={12} md={3}>
                <div className={classes.posterImage}></div>
            </Grid> 
            <Grid item xs={12} sm={12} md={9}>
                <Paper className={classes.paper}>
                    <Paper className={classes.subPaper}>
                        <div className={classes.movieTitle}/>
                        <div className={classes.tagLine}/>
                        <div className={classes.genre}/>
                        <Grid container>
                            <Grid item md={3}>
                                <div className={classes.movieType}/>
                        </Grid>
                            <Grid item md={9}>
                                <div className={classes.vote}/>
                            </Grid>
                        </Grid>
                        <br/>
                        <div className={classes.status}/>
                        <div className={classes.date}/>
                        <div className={classes.halfLine}/>
                        <div className={classes.halfLine}/>
                    </Paper>
                    <br/>
                    <Paper className={classes.subPaper}>
                        <div className={classes.description}/>
                        <div className={classes.overview}/>
                        <div className={classes.overview}/>
                        <div className={classes.overview}/>

                    </Paper>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(MovieDetailsSkeleton);
