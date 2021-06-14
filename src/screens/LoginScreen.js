import React, { useState } from 'react';
import './LoginScreen.css';
import SignupScreen from './SignupScreen'

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className="loginScreen">
        <div className="loginScreen__background"> 
            <img 
            className="loginScreen__logo"
            src="https://th.bing.com/th/id/R3483cbba02fe083b87330a99857f59ed?rik=ejgwaTp6m0Dv6g&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f05%2fNetflix-Logo.png&ehk=gJbypm3nuRFxW%2fGn3WbaXOcTVq6kNgynGml%2fdXD79fM%3d&risl=&pid=ImgRaw" 
            alt="" 
            />
            <button onClick={() => setSignIn(true)}
            className="loginScreen__button"> Sign In </button>

            <div className="loginScreen__gradient" />

            <div className="loginScreen__body">
                {signIn ? (<SignupScreen/>) : (
                    <>
                    <h1> Unlimited films, TV programmes and more. </h1>
                    <h2> Watch anywhere. Cancel at any time.</h2>
                    <h3> Ready to watch? Enter your email to create or restart your membership</h3>
    
                    <div className="loginScreen__input">
                        <form>
                            <input type="email" placeholder="Email Address"/>
                            <button 
                            onClick={() => setSignIn(true)}
                            className="loginScreen__getStarted"
                            >GET STARTED</button>
                        </form>
                    </div>
                    </>
                )}
                
            </div>
        </div> 
        </div>
    )
}

export default LoginScreen
