import React,{useState,useContext} from "react";

import "../index.css";

import {Container,Row,Col,Modal,Form} from 'react-bootstrap';

import Icon from '../assets/img/Icon.png';

import { motion } from "framer-motion";

import { useHistory } from "react-router-dom";

import { GlobalContext } from "../context/globalContext";

import fakeDataUsers from "../fakeData/users";

export default function LandingPage(){

    const [_,dispatch] = useContext(GlobalContext);

    const [showSignin,setShowSignin] = useState(false);
    const [showSignup,setShowSignup] = useState(false);

    let history = useHistory();
    const handleRedirectToHome = () => history.push("/home");
    const handleRedirectToTransaction = () => history.push("/transaction");

    const handelOnSubmitSignup = (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const fullName = document.getElementById('fullName').value;

        const data = {
            email,
            password,
            fullName,
            statusSubscribe : false,
            gender : "",
            role : "user",
            mobilePhone : "",
            address : ""
        }

        fakeDataUsers.push(data);

        dispatch({
            type : "SIGNUP_SUCCESS",
            payload : data,
        });

        handleRedirectToHome();

    }
    console.log(fakeDataUsers);

    const handelOnSubmitSignin = (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        for(let data of fakeDataUsers)
        {
            if(data.email == email && data.password == password)
            {
                dispatch({
                    type : "SIGNUP_SUCCESS",
                    payload : data,
                });

                if(data.role == "admin")
                {
                    handleRedirectToTransaction();
                }
                else 
                {
                    handleRedirectToHome();
                }    
            }
        }
    }

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
                    
                    <motion.button whileHover={{scale:1.1}} transition={{type:"spring",stiffness : 600}} className="btn-signup fw-bold my-4 py-2 px-5" onClick={() => setShowSignup(true)}>Sign Up</motion.button>

                    <motion.button whileHover={{scale:1.1}} transition={{type:"spring",stiffness : 600}} onClick={() => {setShowSignin(true)}} className="btn-signin my-4 py-2 px-5 mx-4 fw-bold">Sign In</motion.button>
                </Col>
                <Col md={6}></Col>
            </Row>
        </Container>

        {/* Modal Signup */}
        <Modal show={showSignup} onHide={() => setShowSignup(false)}>
            <Modal.Body>
                <h2 className="fw-bold">Sign Up</h2>
                
                <Form className="mt-5" onSubmit={handelOnSubmitSignup}>

                    <Form.Group className="mb-4">
                        <Form.Control id="email" type="email" required autoComplete="off" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control id="password" type="password" required placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" id="fullName" required autoComplete="off" placeholder="Full Name" />
                    </Form.Group>
                    <div className="mt-5 text-center">
                        <motion.button type="submit" whileHover={{scale:0.9}} transition={{type:"spring",stiffness : 600}} className="btn-signin-modal mb-3 text-white fw-bold py-2 px-4">Sign Up</motion.button> <br/>
                        <motion.a whileHover={{scale:0.9}} transition={{type:"spring",stiffness : 600}} className="btn btn-secondary m-auto btn-close-modal text-white fw-bold py-2 px-4" onClick={() => setShowSignup(false)}>Close</motion.a>
                    </div>
                    <p className="text-center mt-5 text-muted">
                        Already have an account ? Klik <b onClick={() => {
                            setShowSignin(true); setShowSignup(false)
                        }} className="text-dark" style={{cursor:"pointer"}} className="text-dark">Here</b>
                    </p>

                </Form>
            </Modal.Body>
        </Modal>

        {/* Modal Signin */}
        <Modal show={showSignin} onHide={() => setShowSignin(false)}>
            <Modal.Body>
                <h2 className="fw-bold">Sign In</h2>
                
                <Form className="mt-5" onSubmit={handelOnSubmitSignin}>

                    <Form.Group className="mb-4">
                        <Form.Control type="email" required autoComplete="off" placeholder="Email" id="email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control id="password" type="password" required placeholder="Password" />
                    </Form.Group>
                    <div className="mt-5 text-center">
                        <motion.button whileHover={{scale:0.9}} transition={{type:"spring",stiffness : 600}} className="btn-signin-modal mb-3 text-white fw-bold py-2 px-4" type="submit">Sign In</motion.button> <br/>
                        <motion.a whileHover={{scale:0.9}} transition={{type:"spring",stiffness : 600}} className="btn btn-secondary m-auto btn-close-modal text-white fw-bold py-2 px-4" onClick={() => setShowSignin(false)}>Close</motion.a>
                    </div>
                    <p className="text-center mt-5 text-muted">
                        Don't have an account ? Klik <b onClick={() => {
                            setShowSignup(true); setShowSignin(false)
                        }} className="text-dark" style={{cursor:"pointer"}}>Here</b>
                    </p>

                </Form>
            </Modal.Body>
        </Modal>

        </>

    );

} 