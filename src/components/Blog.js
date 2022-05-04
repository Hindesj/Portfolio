import React from "react";
import MediaCard from "./MediaCard"
import deathStar from './assets/deathStar.JPG'
import roboCar from './assets/roboCar.JPG'
import _3Dprinter from './assets/3Dprinter.JPG'
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack"
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles';
import { CardActionArea } from '@mui/material';
import {Link} from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:'#333333',
    color:'#F4AC45',
    textAlign: 'center',
  }));


export default function Blog(){
    
    return(
        <div style={styles.about}>
            <Box>
                <Stack spacing={2}>
                    <Item elevation={0} style={{paddingTop:'2%'}}>
                        Projects that I have done.
                    </Item>
                    <Item elevation={0}>
                        <div className='mediaLayout'>
                            <CardActionArea component={Link} to='/blog/deathstar'>
                                <MediaCard
                                    picture={deathStar}
                                    title='Star Wars- Death Star'
                                    about='The Quick Brown Fox Jumped over the Lazy Dog.'
                                />
                            </CardActionArea>

                            <CardActionArea component={Link} to='/blog/linecar'>
                                    <MediaCard
                                        picture={roboCar}
                                        title='Line Following Car'
                                        about='This is a car I made in the Intro to robotics class I took'
                                    />
                            </CardActionArea>

                        </div>
                    </Item>
                    <Item elevation={0}>
                        <div className='mediaLayout'>

                            <CardActionArea component={Link} to='/blog/enclosure'>
                                <MediaCard
                                    picture={_3Dprinter}
                                    title='3D Printer Enclosure'
                                    about='I was tired of all my 3D prints warping and getting ruined'
                                />
                            </CardActionArea>


                        </div>
                    </Item>
                </Stack>
            </Box>
        </div>
    )
}

const styles ={
    about:{
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        fontSize: 'larger',
        textAlign: 'center',
        paddingLeft: '13%'
    },
    card:{
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center'
    }
}