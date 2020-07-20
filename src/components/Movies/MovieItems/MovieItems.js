import React from 'react'
import { withStyles, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core'

const styles = {
    root: {
        maxWidth: 200,
        margin: '10px auto',
        width: '50%'
    },
    media: {
        height: 280,
        width: 200,
        objectFit: 'cover'
    },
}
function MovieItems({classes, image, title}) {
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${image}`}
                title={`${title} Poster`}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                More Details
                </Button>
            </CardActions>
        </Card>
    )
}

export default withStyles(styles)(MovieItems)
