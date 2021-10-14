import React from 'react'
import './header.css';
import firebase from '../../firebase/firebase';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Navbar, Container,Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <Navbar collapseOnSelect bg="light" expand="md">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse  id="responsive-navbar-nav">

                    <Nav className="justify-content-end">
                        
                        <Nav.Item>
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#impact">Impact</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#motive">Motive</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#solution">Achieve</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#link">Pledge</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#link">Sign In</Nav.Link>
                        </Nav.Item>
                        
                    </Nav>  

                </Navbar.Collapse> 
            </Container>
        </Navbar>

        // <nav className="navbar navbar-inverse">

        //     <div className="container-fluid">
                
        //         <div className="navbar-header" id="header">

        //             <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        //                 <span class="icon-bar"></span>
        //                 <span class="icon-bar"></span>
        //                 <span class="icon-bar"></span>                        
        //             </button>
                    
        //             <div className="navbar-header-body">

        //                 <div className="logo" data-aos="zoom-in" data-aos-delay="500">

        //                     <p>2&#176;</p>                

        //                 </div>
        //                 <div className="nav-items" id="nav-items">
                            

        //                             <a href="#home" className="nav-link active" data-aos="fade-right" data-aos-delay="500">HOME</a>


        //                             <a href="#impact" className="nav-link" data-aos="fade-right" data-aos-delay="600">IMPACT</a>


        //                             <a href="#motive" className="nav-link" data-aos="fade-down" data-aos-delay="700">MOTIVE</a>


        //                             <a href="#solution" className="nav-link" data-aos="fade-down" data-aos-delay="800">ACHIEVE</a>


        //                             <button data-aos="fade-left" data-aos-delay="900"><a href="#pledge" className="nav-link" >PLEDGE</a></button>
        //                             <button onClick={signInWithFirebase} data-aos="fade-left" data-aos-delay="1000"><a href="" className="nav-link" >SIGN-IN</a></button>
                                    
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </nav> 
    )
}

export default Header
