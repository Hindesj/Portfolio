import React from "react";
import LinearProgress from '@mui/material/LinearProgress';
import theme from "../theme";
import { ThemeProvider } from "@mui/material";


export default function Skills(){
    return(
        <div style={styles.main}>

            <div style={styles.text}>
                <div style={styles.text1}>Java</div>
                <div style={styles.taskbar}>
                    <ThemeProvider theme={theme}>
                        <LinearProgress variant="determinate" color='skills2' value={90} />
                    </ThemeProvider>
                </div>
            </div>

            <div style={styles.text}>
                <div style={styles.text1}>Javascript</div>
                <div style={styles.taskbar}>
                    <ThemeProvider theme={theme}>
                        <LinearProgress variant="determinate" color='skills3' value={75} />
                    </ThemeProvider>
                </div>
            </div>

            <div style={styles.text}>
                <div style={styles.text1}>Hello</div>
                <div style={styles.taskbar}>
                    <ThemeProvider theme={theme}>
                        <LinearProgress variant="determinate" color='skills4' value={30} />
                    </ThemeProvider>
                </div>
            </div>

            <div style={styles.text}>
                <div style={styles.text1}>hi</div>
                <div style={styles.taskbar}>
                    <ThemeProvider theme={theme}>
                        <LinearProgress variant="determinate" color='skills5' value={50} />
                    </ThemeProvider>
                </div>
            </div>

        </div>
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

