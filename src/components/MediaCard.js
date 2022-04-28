import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from "@mui/material";
import theme from "../theme";


export default function MediaCard(props){
    return(
            <Card sx = {{maxWidth: 400}} 
                    style={{margin: '2%',
                            backgroundColor:'#E0E0E0'
                }}
            >
                <CardMedia
                    component = "img"
                    height = "300"
                    image = {props.picture}
                    
                />
                
                    <CardContent>
                        <Typography gutterBottom variant ="h6" component="div" style={{fontFamily: 'Roboto Mono'}}>
                            {props.title}
                        </Typography>
                        <Typography variant ="body2" color="text.secondary" style={{fontFamily: 'Roboto Mono'}}>
                            {props.about}
                        </Typography>
                    </CardContent>
                
                    <CardActions>
                        <ThemeProvider theme={theme}>
                            <Button size="small" color='skills1' style={{fontFamily: 'Roboto Mono'}}>Read Blog</Button>
                        </ThemeProvider>
                    </CardActions>

            </Card>
    );
}