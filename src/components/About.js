
import { textAlign } from '@mui/system';
import * as React from 'react';
import Highlight from 'react-highlight'

export default function About(){
    const styles ={
        about:{
            display: 'flex',
            alignItems:'center',
            justifyContent: 'center',
            fontSize: 'larger',
            textAlign: 'center'
        },
        aboutpage:{
            padding: '20%'
        }
    }
    return(
        <div>
            <div style={styles.aboutpage}>
                <div style={styles.about}>
                    About Me!
                </div>
                <hr/>
                <div style={styles.about}>
                    My name is Jackson Hindes and I am a computer Science major at SUNY Ulster.
                    Something a little more about me is that I love to tinker. I have many hobbies
                    that include 3d Printing to tinkering with electronics.
                </div>

                <Highlight language="javascript">
                    {`function About(){
    const name = 'Jackson Hindes';
function education(){
    const school = []
}

                    }
    
                    `}
                </Highlight>
            </div>
        </div>
    )
}