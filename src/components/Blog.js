import React from "react";
import MediaCard from "./MediaCard"
import deathStar from './assets/deathStar.JPG'
import roboCar from './assets/roboCar.JPG'
import _3Dprinter from './assets/3Dprinter.JPG'
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack"
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:'#333333',
    color:'#F4AC45',
    textAlign: 'center',
  }));

export default function Blog(){
    return(
    
        <Box>
            <Stack spacing={2}>
                <Item elevation={0} style={{paddingTop:'2%'}}>
                    Projects that I have done.
                </Item>
                <Item elevation={0}>
                    <div className='mediaLayout'>
                        <MediaCard
                            picture={deathStar}
                            title='Star Wars- Death Star'
                            about='My brother just had his first baby and I wanted to start my nephews love for
                            Star Wars at young age.'

                        />
                        <MediaCard
                            picture={roboCar}
                            title='Line Following Car'
                            about='This is a car I made in the Intro to robotics class I took'
                        />
                    </div>
                </Item>
                <Item elevation={0}>
                    <div className='mediaLayout'>
                        <MediaCard
                            picture={_3Dprinter}
                            title='3D Printer Enclosure'
                            about='I was tired of all my 3D prints warping and getting ruined'
                        />
                        <MediaCard
                            picture={_3Dprinter}
                            title='3D Printer Enclosure'
                            about='I was tired of all my 3D prints warping and getting ruined'
                        />
                    </div>
                </Item>
                <Item elevation={0}>
                    <div className='mediaLayout'>
                        <MediaCard
                            picture={_3Dprinter}
                            title='3D Printer Enclosure'
                            about='I was tired of all my 3D prints warping and getting ruined'
                        />
                        <MediaCard
                            picture={_3Dprinter}
                            title='3D Printer Enclosure'
                            about='I was tired of all my 3D prints warping and getting ruined'
                        />
                    </div>
                </Item>
            </Stack>
        </Box>
    )
}

const styles ={
    card:{
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center'
    }
}