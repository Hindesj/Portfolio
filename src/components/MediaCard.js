import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';


export default function MediaCard(props){
    
    return(
        
            <Card
                
                sx = {{maxWidth: 400}} 
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
                                {props.page}
                            </Typography>
                            <Typography variant ="body2" color="text.secondary" style={{fontFamily: 'Roboto Mono'}}>
                                {props.about}
                            </Typography>
                        </CardContent>
                

            </Card>
            
    );
}