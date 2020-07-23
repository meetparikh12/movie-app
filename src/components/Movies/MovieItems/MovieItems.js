import React, { useEffect } from 'react'
import { withStyles, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

const styles = {
    root: {
        maxWidth: 187,
        margin: '10px auto'
    },
    media: {
        height: 285,
        width: 187,
        objectFit: 'cover'
    },
    title: {
        textAlign: 'center'
    }
}
function MovieItems({classes, image, title, movieId}) {

    useEffect(() => {
            const faderItems = document.querySelectorAll('.movieItem')
            const options = {
                threshold: 0,
                rootMargin: "0px 0px -250px 0px"
            }
            const cardObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        return;
                    } else {
                        entry.target.classList.add('appear')
                        observer.unobserve(entry.target);
                    }
                })
            }, options);
            faderItems.forEach(fader=> {
                cardObserver.observe(fader);
            })
        },[movieId])

    return (
        <Grid item sm={4} xs={12} className="movieItem">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${image}`}
                    title={`${title} Poster`}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="body2" className={classes.title}>
                        {title}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={`/movie/details/${movieId}`}><Button color="primary">
                    More Details
                    </Button></Link>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default withStyles(styles)(MovieItems)
