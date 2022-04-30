import React from "react";
import NavButton from "./NavButton";
import logo from "./assets/logo192.png"

export default function NavBar(props){
   
    return(
        <div style={styles.nav}>
            <div style={styles.navImg} >
                <img src={logo} alt="Girl in a jacket" width="100" height="100"/>
            </div>

            <div style={{paddingLeft:'15%'}}>
                <NavButton/>
            </div>

            <div className="socials">

            </div>
        </div>
    );
}

const styles ={
    navImg:{
    
        paddingBottom: '150%',
        paddingLeft:'18%',
    },
    nav:{
        height: '110%',
        width: '11%',
        position: 'fixed',
        zIndex: '1',
        top: '0%',
        left: '0px',
        overflowX: 'hidden',
        padding: '16px 0',
        paddingLeft: '18px',
        backgroundColor: '#525252'
    }
}