import React from "react";
import NavButton from "./NavButton";
import logo from "./assets/HindesLogoWhite.png"

export default function NavBar(props){
   
    return(
        <div style={styles.nav}>
            <div style={styles.navImg} >
                <img src={logo} alt="Girl in a jacket" width="200" height="200"/>
            </div>

            <div style={{paddingLeft:'24%'}}>
                <NavButton/>
            </div>

            <div className="socials">

            </div>
        </div>
    );
}

const styles ={
    navImg:{
    
        paddingBottom: '50%',
        paddingLeft:'0%',
    },
    nav:{
        height: '110%',
        width: '12%',
        position: 'fixed',
        zIndex: '1',
        top: '0%',
        left: '0px',
        overflowX: 'hidden',
        padding: '16px 0',
        paddingLeft: '10px',
        backgroundColor: '#525252'
    }
}