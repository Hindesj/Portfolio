import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from '@mui/material/styles';
import { Typography } from "@mui/material";
import {Link} from "react-router-dom";


let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Contact(){
    return(
        <Box sx={{flexGrow:1}} style={{marginLeft:'30%', marginTop:'15%', marginRight:'20%', fontFamily:'Roboto Mono'}}>
            <ThemeProvider theme={theme}>
                <Grid container spacing={5}>

                    <Grid item xs={12}>
                        <Typography style={styles.content} variant="h3">Contact Me!</Typography>
                    </Grid>

                    <Grid item xs={2}>
                        <Typography style={styles.content} >Email:</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography style={styles.content} >Hindesjackson@gmail.com</Typography>
                    </Grid>

                    <Grid item xs={2}>
                        <Typography style={styles.content} >Phone:</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography style={styles.content} >(845)594-4732</Typography>
                    </Grid>

                    <Grid item xs={2}>
                        <Typography style={styles.content} >GitHub:</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography style={styles.content} >
                            <a style={styles.content} target="_blank" href="https://github.com/Hindesj">github.com/Hindesj</a>
                        </Typography>
                    </Grid>

                    <Grid item xs={2}>
                        <Typography style={styles.content} >LinkedIn:</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography style={styles.content} >
                            <a style={styles.content} target="_blank" href="https://www.linkedin.com/in/jackson-hindes-a0a2b2224">LinkedIn.com/JacksonHindes</a>
                        </Typography>
                    </Grid>


                    <Grid item xs={2}>
                        <Typography style={styles.content} >Twitter:</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography style={styles.content} >
                            <a style={styles.content} target="_blank" href="https://twitter.com/jacksonhindes">Twitter.com/jacksonhindes</a>
                        </Typography>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </Box>
    )
}

const styles={
    content:{
        fontFamily: 'Roboto Mono',
        color: 'white'
    }
}