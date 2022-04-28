import React from "react";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

export default function Contact(){
    return(
        <form>
            <TextField label="Full Name" fullWidth autoComplete="none"/>
            <TextField label="Email" fullWidth autoComplete="none"/>
            <TextField label="Message" fullWidth multiline rows={5} autoComplete="none"/>
            <Button type="submit">Submit</Button>
        </form>
            
        
    )
}