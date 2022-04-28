import React from "react";
import LinearProgress from '@mui/material/LinearProgress';
import theme from "../theme";
import { ThemeProvider } from "@mui/material";

export default function Skills(){
    return(
        <div className='main'>
            <div className='first'>
                <div className='firstText'></div>
                <div style={styles.taskbar}>
                    <ThemeProvider theme={theme}>
                        <LinearProgress variant="determinate" color='skills2' value={75} />
                    </ThemeProvider>
                </div>
            </div>
            <div className='second'>
                <div className='secondText'></div>
                <div style={styles.taskbar}>
                    <ThemeProvider theme={theme}>
                        <LinearProgress variant="determinate" color='skills2' value={75} />
                    </ThemeProvider>
                </div>
            </div>
            <div className='third'>
                <div className='thirdText'></div>
                <div style={styles.taskbar}>
                    <ThemeProvider theme={theme}>
                        <LinearProgress variant="determinate" color='skills2' value={75} />
                    </ThemeProvider>
                </div>
            </div>
            <div className='fourth'>
                <div className='fourthText'></div>
                <div style={styles.taskbar}>
                    <ThemeProvider theme={theme}>
                        <LinearProgress variant="determinate" color='skills2' value={75} />
                    </ThemeProvider>
                </div>
            </div>
        </div>
    )
}

const styles ={
    taskbar:{
        width: '100%',
        paddingTop: '30%',
        backgroundColor: '#A6D9F7'
    }
}