import * as React from 'react'
import Button from '@mui/material/Button'
import  ButtonGroup  from '@mui/material/ButtonGroup'
import Box from '@mui/material/Box'
import theme from "../theme";
import {
    ThemeProvider,
  } from '@mui/material/styles';
import { Link } from 'react-router-dom';



const buttons =[
    <ThemeProvider theme={theme}>
        <Button component={Link} to="/" style={{fontSize: 'large', fontFamily: 'Roboto Mono'}} key='one'>
            About
        </Button>
        <Button component={Link} to="/skills" style={{fontSize: 'large', fontFamily: 'Roboto Mono'}} key='two'>
            Skills
        </Button>
        <Button component={Link} to="/resume" style={{fontSize: 'large', fontFamily: 'Roboto Mono'}} key='three'>
            Resume
        </Button>
        <Button component={Link} to="/contact" style={{fontSize: 'large', fontFamily: 'Roboto Mono'}} key='four'>
            Contact
        </Button>
        <Button component={Link} to="/blog" style={{fontSize: 'large', fontFamily: 'Roboto Mono'}} key='five'>
            Blog
        </Button>
    </ThemeProvider>
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
                    style={{fontSize: 'small'}}
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