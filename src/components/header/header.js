import React from 'react'
import './header.css';
import firebase from '../../firebase/firebase';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Header() {
    const signInWithFirebase = () =>{
        const google_provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(google_provider).then(function(res) {
            console.log(res);
    }).catch(function(err) {
        console.log(err);
    })
    }
    useEffect(()=>{
        AOS.init();
    });
    return (
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div className="navbar-header" id="header">
                    <div className="navbar-header-body">
                        <div className="logo" data-aos="zoom-in" data-aos-delay="500">
                            <p>2&#176;</p>                
                        </div>
                        <div className="nav-items" id="nav-items">
                            <a href="#home" className="nav-link active" data-aos="fade-right" data-aos-delay="500">HOME</a>
                            <a href="#impact" className="nav-link" data-aos="fade-right" data-aos-delay="600">IMPACT</a>
                            <a href="#motive" className="nav-link" data-aos="fade-down" data-aos-delay="700">MOTIVE</a>
                            <a href="#solution" className="nav-link" data-aos="fade-down" data-aos-delay="800">ACHIEVE</a>
                            <button data-aos="fade-left" data-aos-delay="900"><a href="#pledge" className="nav-link" >PLEDGE</a></button>
                            <button onClick={signInWithFirebase} data-aos="fade-left" data-aos-delay="1000"><a href="" className="nav-link" >SIGN-IN</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
