import React from "react";

import { Col, Container, Row,Button } from "react-bootstrap";

import ComponentData from "./ComponentData";

import userImage from "../../assets/img/user-image/user1.png";

import { motion } from "framer-motion";

const Styles = {
    container : { 
        backgroundColor:"#FFD9D9",
        borderRadius : "10px"
    },
    img : {
        borderRadius :'10px'
    },
    button : {
        width : "60%"
    }
}

const iEmail = <i class='bx bx-mail-send' ></i>;
const iPhone = <i class='bx bxs-phone'></i>;
const iGender = <i class='bx bx-female-sign'></i>;
const ILocation = <i class='bx bxs-edit-location'></i>;


export default function ComponentDetailData(){

 return (

    <Container style={Styles.container} className="p-3 mt-4 shadow ">
        <Row className="justify-content-between align-items-center">
            <Col md={5}>
                <ComponentData icon={iEmail} data="arisMun@gmail.com" detail="Email"/>
                <ComponentData icon={iGender} data="Male" detail="Gender"/>
                <ComponentData icon={iPhone} data="0821-2212-9983-2212" detail="Mobile Phone"/>
                <ComponentData icon={ILocation} data="Klampisan, Sempukerep, Sidoharjo" detail="Address"/>
            </Col>
            <Col md={5} className="text-center">
                <img src={userImage} alt="usr" style={Styles.img} />
                <motion.a whileHover={{scale:1.1}} transition={{type:"spring",stiffness:"600"}} style={Styles.button} className="btn btn-danger mt-4" variant="danger"><i class='bx bxs-pencil' ></i> Edit Profile</motion.a>
            </Col>
        </Row>
    </Container>

 )
    
}