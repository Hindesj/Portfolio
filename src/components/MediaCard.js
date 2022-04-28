import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(){
    return(
        <Card sx = {{maxWidth: 200}} 
                style={{margin: '2%'}}
        >
            <CardMedia
                component = "img"
                height = "50"
                image = "/static/images/cards/contemplative-reptile.jpg"
                alt = "green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant ="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant ="body2" color="text.secondary">
                    Lizard are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except for anartica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>

        </Card>

    );
}