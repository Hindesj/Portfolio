import React from "react";
import LinearProgress from '@mui/material/LinearProgress';
import theme from "../theme";
import { ThemeProvider, Typography } from "@mui/material";
import  Grid  from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function Skills(){
    return(
        <Box sx={{flexGrow:1}} style={{marginLeft:'30%', marginTop:'15%', marginRight:'20%'}}>
            <ThemeProvider theme={theme}>
                <Grid container spacing={10}>

                        <Grid item xs={3}>
                            <Typography color='white'>Java</Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <LinearProgress variant="determinate" color='skills2' value={60} />
                        </Grid>
                    
                        <Grid item xs={3}>
                            <Typography color='white'>HTML</Typography> 
                        </Grid>
                        <Grid item xs={9}>
                            <LinearProgress variant="determinate" color='skills1' value={95} />
                        </Grid>
                    
                    
                        <Grid item xs={3}>
                            <Typography color='white'>Javascript</Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <LinearProgress variant="determinate" color='skills6' value={80} />
                        </Grid>
                    
                    
                        <Grid item xs={3}>
                            <Typography color='white'>React</Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <LinearProgress variant="determinate" color='skills3' value={50} />
                        </Grid>
                    
                </Grid>
            </ThemeProvider>
        </Box>
    )
}

const styles ={
    main:{
        marginTop:'10%'
    },
    taskbar:{
        width: '50%',
        paddingTop: '5%',
    },
    text:{
        display:'flex',
    },
    text1:{
        color:'white',
        paddingLeft: '30%',
        paddingRight: '10%',
        paddingTop: '4%'
    }
}

