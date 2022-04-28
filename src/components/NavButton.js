import * as React from 'react'
import Button from '@mui/material/Button'
import  ButtonGroup  from '@mui/material/ButtonGroup'
import Box from '@mui/material/Box'
import theme from "../theme";
import { ThemeProvider } from "@mui/material";
import { Link } from 'react-router-dom';


const buttons =[
    <Button style={{fontSize: 'large', fontFamily: 'Roboto Mono'}} key='one'>About</Button>,
    <Button style={{fontSize: 'large', fontFamily: 'Roboto Mono'}} key='two'>Skills</Button>,
    <Button style={{fontSize: 'large', fontFamily: 'Roboto Mono'}} key='three'>Work</Button>,
    <Button style={{fontSize: 'large', fontFamily: 'Roboto Mono'}} key='four'>Contact</Button>,
    <Button style={{fontSize: 'large', fontFamily: 'Roboto Mono'}} key='five'>Blog</Button>,
]

export default function Navbutton(){
    return(
        <Box
            sx= {{
                display : 'flex',
                '& > *':{
                    m:1,
                }
            }}
        >
            <ThemeProvider theme={theme}>
                <ButtonGroup
                    style={{fontSize: '70px'}}
                    orientation="vertical"
                    aria-label="vertical contained button group"
                    variant="text"
                    color='skills1'
                >
                    {buttons}
                </ButtonGroup>
            </ThemeProvider>
        </Box>
    )
}