import React,{useState} from "react";
import "../index.css";
import {Container,Row,Col,Modal,Form} from 'react-bootstrap';
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

        {/* Modal Signin */}
        

        </>

    );

} 