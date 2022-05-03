import React from "react";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import  Typography  from '@mui/material/Typography';
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function BlogPage(props){
    return(
        <Box sx={{flexGrow:1}}>
            <ThemeProvider theme={theme}>
                <Grid style={styles.main} container spacing={2}>
                    {/*top photo */}
                    <Grid  item xs={12}>
                        <Card>
                            <CardMedia 
                                height="400px"
                                component="img"
                                image={props.picture}
                            />
                        </Card>
                    </Grid>

                    {/*title */}
                    <Grid item xs={12}>
                        <Typography style={styles.content} variant="h3">
                            {props.title}
                        </Typography>
                    </Grid>

                    {/*check list */}
                    <Grid item xs={2}>
                        <Grid item xs={12}>
                            <Typography style={styles.content} variant="h6">Supply List:</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label={<Typography style={styles.content}>{props.one}</Typography>} />
                                <FormControlLabel control={<Checkbox />} label={<Typography style={styles.content}>{props.two}</Typography>} />
                                <FormControlLabel control={<Checkbox />} label={<Typography style={styles.content}>{props.three}</Typography>} />
                                <FormControlLabel control={<Checkbox />} label={<Typography style={styles.content}>{props.four}</Typography>} />
                                <FormControlLabel control={<Checkbox />} label={<Typography style={styles.content}>{props.five}</Typography>} />
                                <FormControlLabel control={<Checkbox />} label={<Typography style={styles.content}>{props.six}</Typography>} />
                            </FormGroup>
                        </Grid>
                    </Grid>

                    {/* body */}
                    <Grid item xs={10}>
                        <Typography style={styles.body} variant="h6">
                            <p>{props.intro}</p>
                            <p>{props.body}</p>
                            <p>{props.outro}</p>
                        </Typography>
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
        marginTop:'5%',
        marginRight:'100%'
    },
    content:{
        fontFamily:'Roboto Mono',
        color:'white',
        textAlign:'center'
    },
    body:{
        fontFamily:'Roboto Mono',
        color: 'white',
        textIndent:'3%'
    }
}