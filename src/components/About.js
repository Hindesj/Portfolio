import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import  Typography  from '@mui/material/Typography';
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from '@mui/material/styles';

  let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function About(){
    
    return(

        <Box sx={{flexGrow:1}}>
            <ThemeProvider  theme={theme}>
                <Grid  style={styles.main} container spacing={2}>
                    <Grid item xs={12}>
                        <Typography style={styles.content} variant="h3">About Me!</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <hr />
                    </Grid>
                    <Grid item xs={12}>
                    <Typography style={styles.content} variant="h6">My name is Jackson Hindes and I am a computer Science major at SUNY Ulster.
                    Something a little more about me is that I love to tinker. I have many hobbies
                    that include 3d Printing to tinkering with electronics.</Typography>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </Box>


    )
}

const styles={
    main:{
        width: '70%',
        marginLeft:'20%',
        marginTop:'20%',
        marginRight:'100%'
    },
    content:{
        fontFamily:'Roboto Mono',
        color:'white',
        textAlign:'center'
    }
}