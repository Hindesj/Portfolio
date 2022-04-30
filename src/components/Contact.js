import React from "react";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import  Container  from "@mui/material/Container";

export default function Contact(){
    const styles ={
        about:{
            padding: '2%',
            display: 'flex',
            alignItems:'center',
            justifyContent: 'center',
            fontSize: 'larger',
            textAlign: 'center',
            backgroundColor:'white'
        },
        aboutpage:{
            marginLeft: '10%',
            paddingRight: '15%',
            paddingLeft: '15%'
        }
    }
    return(
        <Container style={styles.aboutpage} maxWidth="lg">
            <div style={styles.about}>
                <form>
                    <TextField label="Full Name" fullWidth autoComplete="none"/>
                    <TextField label="Email" fullWidth autoComplete="none"/>
                    <TextField label="Message" fullWidth multiline rows={5} autoComplete="none"/>
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </Container>    
        
    )
}