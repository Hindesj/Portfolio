import React from "react";
import NavButton from "./NavButton";

export default function NavBar(props){
   
    return(
        <div style={styles.navImg}>
            <div >
            </div>

            <div>
                <NavButton/>
            </div>

            <div className="socials">
                Socials Here
            </div>
        </div>
    );
}

const styles ={
    navImg:{
        
    }
}