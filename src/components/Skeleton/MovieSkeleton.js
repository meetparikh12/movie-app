import React, { Fragment } from 'react'
import { withStyles, Grid, Card, CardActionArea, CardContent, CardActions } from '@material-ui/core'

const styles = {
    root: {
        maxWidth: 187,
        margin: '10px auto'
    },
    image: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        width: 187,
        height: 285
    },
    title: {
        height: 30,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    link: {
        width: '100%',
        height: '32px',
        backgroundColor: '#00bcd4',
        margin: '0 8px'
    }
}

function MovieSkeleton({classes}) {

    const content = Array.from({length: 6}).map((item,index) => { 
    return (
            <Grid item sm={4} xs={12}  key={index}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <div className={classes.image}/>
                        <CardContent>
                            <div className={classes.title}/>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <div className={classes.link}/>
                    </CardActions>
                </Card>
            </Grid>
    )})

    return <Fragment>{content}</Fragment>
}

export default withStyles(styles)(MovieSkeleton);
