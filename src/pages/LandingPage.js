import React,{useState} from "react";
import "../index.css";
import {Container,Row,Col} from 'react-bootstrap';
import Icon from '../assets/img/Icon.png';
import { motion } from "framer-motion";



export default function LandingPage(){

    const [showSignin,setShowSignin] = useState(false);

    return (

        <>
        <Container fluid className="container-landing-page">
            <Row className="justify-content-center">
                <Col md={1}></Col>
                <Col md={5}>
                    <img src={Icon} className="icon-landing-page" alt="Icon"/>

                    <p className="paragraf-landing-page">
                        Sign-up now and subscribe to enjoy all the cool and latest books - The best book rental service provider in Indonesia
                    </p>
                    
                    <motion.button whileHover={{scale:1.1}} transition={{type:"spring",stiffness : 600}} className="btn-signup my-4 py-2 px-5">Sign Up</motion.button>

                    <motion.button whileHover={{scale:1.1}} transition={{type:"spring",stiffness : 600}} onClick={() => {setShowSignin(true)}} className="btn-signin my-4 py-2 px-5 mx-4">Sign In</motion.button>
                </Col>
                <Col md={6}></Col>
            </Row>
        </Container>

        {/* Modal Signin
        <Modal show={showSignin}>
            <Modal.Body>
                <h2 className="fw-bold">Sign In</h2>
                
                <Form className="mt-5">

                    <Form.Group className="mb-4">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div className="mt-5 text-center">
                        <button className="btn-signin-modal mb-3 text-white fw-bold py-2 px-4">Sign In</button> <br/>
                        <a className="btn btn-secondary m-auto btn-close-modal text-white fw-bold py-2 px-4" onClick={() => setShowSignin(false)}>Close</a>
                    </div>
                    <p className="text-center mt-5 text-muted">
                        Don't have an account ? Klik <b className="text-dark">Here</b>
                    </p>

                </Form>
            </Modal.Body>
        </Modal> */}

        </>

    );

} 