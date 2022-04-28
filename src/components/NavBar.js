import React from "react";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";

export default function NavBar(props){
   
    return(
        <div style={styles.navImg}>
            <div >
            </div>

            <div>
                <NavButton/>
            </div>

            <div className="socials">
                
            </div>
        </div>
    );
}

const styles ={
    navImg:{
        
    }
}