import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if (window.scrollY > 100){
            handleShow(true);
        } else {
            handleShow(false)
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">

            <img 
            onClick = {() => history.push("/")}
            className="nav__logo"
            src="https://th.bing.com/th/id/R3483cbba02fe083b87330a99857f59ed?rik=ejgwaTp6m0Dv6g&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f05%2fNetflix-Logo.png&ehk=gJbypm3nuRFxW%2fGn3WbaXOcTVq6kNgynGml%2fdXD79fM%3d&risl=&pid=ImgRaw" 
            alt="" 
            />
            <img 
            onClick = {() => history.push("/profile")}
            className="nav__avatar"
            src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" 
            alt="" 
            />
            </div>
            
        </div>
    )
}

export default Nav
