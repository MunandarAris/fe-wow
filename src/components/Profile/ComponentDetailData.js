import React,{useContext} from "react";

import { Col, Container, Row,Button } from "react-bootstrap";

import ComponentData from "./ComponentData";

import userImage from "../../assets/img/user-image/user1.png";

import { motion } from "framer-motion";

import { BiMap,BiEditAlt,BiPhone,BiBody } from "react-icons/bi";
import { BsFillEnvelopeFill } from "react-icons/bs";

import { GlobalContext } from "../../context/globalContext";

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

const iEmail = <BsFillEnvelopeFill />;
const iPhone = <BiPhone />;
const iGender = <BiBody />;
const ILocation = <BiMap/>;


export default function ComponentDetailData(){

    const [state,dispatch] = useContext(GlobalContext);

 return (

    <Container style={Styles.container} className="p-3 mt-4 shadow ">
        <Row className="justify-content-between align-items-center">
            <Col md={5}>
                <ComponentData icon={iEmail} data={state.user.email} detail="Email"/>
                <ComponentData icon={iGender} data={state.user.gander} detail="Gender"/>
                <ComponentData icon={iPhone} data={state.user.mobilePhone} detail="Mobile Phone"/>
                <ComponentData icon={ILocation} data={state.user.address} detail="Address"/>
            </Col>
            <Col md={5} className="text-center">
                <img src={userImage} alt="usr" style={Styles.img} />
                <motion.a whileHover={{scale:1.1}} transition={{type:"spring",stiffness:"600"}} style={Styles.button} className="btn btn-danger mt-4" variant="danger"><BiEditAlt /> Edit Profile</motion.a>
            </Col>
        </Row>
    </Container>

 )
    
}