import React from "react";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";
import logo from "./assets/logo192.png"

export default function NavBar(props){
   
    return(
        <div style={styles.nav}>
            <div style={styles.navImg} >
                <img src={logo} alt="Girl in a jacket" width="100" height="100"/>
            </div>

            <div>
                <NavButton/>
            </div>

            <div className="socials">
                <Link to="/skills" >Hello</Link>
            </div>
        </div>
    );
}

const styles ={
    navImg:{
    
        paddingBottom: '150%',
        paddingLeft:'2px',
    },
    nav:{
        height: '100%',
        width: '130px',
        position: 'fixed',
        zIndex: '1',
        top: '0%',
        left: '0px',
        overflowX: 'hidden',
        padding: '8px 0',
        paddingLeft: '18px',
        backgroundColor: '#525252'
    }
}