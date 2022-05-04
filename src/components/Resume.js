import React from "react";
import Container from "@mui/material/Container"
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from '@mui/material/styles';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box"

let theme = createTheme();
theme = responsiveFontSizes(theme);

const styles={
    container:{
        display: 'flex',
        flexWrap: 'wrap',
    },
    left:{
        order: '1',
        flex:'50%',
        backgroundColor: 'red'
    },
    right:{
        order: '2',
        flex: '50%',
        backgroundColor: 'green'
    }
}

export default function Resume(){
    return(
        <Box sx={{flexGrow:1}} style={{marginLeft:'20%', marginTop:'5%', paddingRight:'5%'}}>
            <ThemeProvider theme={theme}>
                <Grid spacing={1}>
                    <Typography style={{fontFamily: 'Roboto Mono', color: 'white'}} variant="h2">Jackson Hindes</Typography>
                    <Typography style={{fontFamily: 'Roboto Mono', color: 'white'}} variant="h6">github.com/Hindesj</Typography>
                    <Typography style={{fontFamily: 'Roboto Mono', color: 'white', paddingTop:'2%'}} variant="h6">A Jack of all Trades</Typography>
                    <Typography style={{fontFamily: 'Roboto Mono', color: 'white', fontWeight:'bold', paddingTop:"2%"}} variant="h6">SKILLS</Typography>
                </Grid>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <hr />
                        </Grid>
                        <Grid item xs={8}>
                            <Typography style={{fontFamily: 'Roboto Mono', fontWeight:'bold', color: 'white'}} variant="h5">LANGUAGES & LIBRARIES</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography style={{fontFamily: 'Roboto Mono', fontWeight:'bold', color: 'white'}} variant="h5">APPLICATIONS</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography style={{fontFamily: 'Roboto Mono', color: 'white'}} variant="h6">Javascript</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography style={{fontFamily: 'Roboto Mono', color: 'white'}} variant="h6">MongoDB</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography style={{fontFamily: 'Roboto Mono', color: 'white'}} variant="h6">CSS</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography style={{fontFamily: 'Roboto Mono', color: 'white'}} variant="h6">OpenLiberty</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography style={{fontFamily: 'Roboto Mono', color: 'white'}} variant="h6">HTML</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography style={{fontFamily: 'Roboto Mono', color: 'white'}} variant="h6">Illustrator</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography style={{fontFamily: 'Roboto Mono', color: 'white'}} variant="h6">React.js</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography style={{fontFamily: 'Roboto Mono', color: 'white'}} variant="h6">Photoshop</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography style={{fontFamily: 'Roboto Mono', color: 'white'}} variant="h6">Three.js</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography style={{fontFamily: 'Roboto Mono', color: 'white'}} variant="h6"></Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography style={{fontFamily: 'Roboto Mono', color: 'white', fontWeight:'bold', paddingTop:"4%"}} variant="h6">EDUCATION</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <hr />
                        </Grid>
                        <Grid item xs={8}>
                            <Typography style={{fontFamily: 'Roboto Mono', fontWeight:'bold', color: 'white'}} variant="h4">SUNY ULSTER</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography style={{fontFamily: 'Roboto Mono', fontWeight:'bold', color: 'white'}} variant="h6">A.S. Computer Science</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography style={{fontFamily: 'Roboto Mono', color: 'white'}} variant="h6">2020-Present</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography style={{fontFamily: 'Roboto Mono', color: 'white'}} variant="h6">GPA: 3.4</Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <Typography style={{fontFamily: 'Roboto Mono', color: 'white', fontWeight:'bold', paddingTop:"4%"}} variant="h6">WORK</Typography>
                        </Grid>
                        <Grid item xs={12}>
                                <hr />
                        </Grid>
                        <Grid item xs={5}>
                            <Typography style={{fontFamily: 'Roboto Mono', fontWeight:'bold', color: 'white'}} variant="h4">LM Steyer Construction</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography style={{fontFamily: 'Roboto Mono', color: 'white'}} variant="h6">2020-Present</Typography>
                        </Grid>
                        <Grid item xs={5}>
                            <Typography style={{fontFamily: 'Roboto Mono', color: 'white'}} variant="h6">Organized and a finished major projects 
                                for the customer in a timely and orderly fashion.</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <hr />
                        </Grid>
                        <Grid item xs={5}>
                            <Typography style={{fontFamily: 'Roboto Mono',  fontWeight:'bold', color: 'white'}} variant="h4">Windmill Wine and Spirits</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography style={{fontFamily: 'Roboto Mono', color: 'white'}} variant="h6">2018-2020</Typography>
                        </Grid>
                        <Grid item xs={5}>
                            <Typography style={{fontFamily: 'Roboto Mono', color: 'white'}} variant="h6">Managed the bank at the end of the night and 
                                increased sales of the business</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <hr />
                        </Grid>
                    </Grid>
                </Box>

            </ThemeProvider>
        </Box>

    )
}