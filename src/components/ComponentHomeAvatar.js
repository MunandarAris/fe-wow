import React from "react";

import Logo from '../assets/img/Icon.png';
import UserImage from '../assets/img/user-image.png';

import { useHistory } from "react-router";

import { motion } from "framer-motion";

export default function ComponentHomeLink(){

    let homeLink = useHistory();

    const redirectToHome = () => homeLink.push("/home");

    return(
          <>
            <div  className="d-flex flex-column align-items-center" style={{borderBottom:"2px solid #C9C9C9"}}>
                <motion.img whileHover={{scale:1.1, originX : 0}} transition={{type:"spring",stiffness : 600}} onClick={redirectToHome} src={Logo} alt="Icon" className="home-logo" style={{cursor:"pointer"}}/>
                <img src={UserImage} alt="User Image" className="home-user-image shadow-lg rounded-circle" />
                <h4 className="fw-bold mt-4">Aris Munandar</h4>
                <p className="fw-bold text-danger mt-3 pb-3">Not Subscribed Yet</p>
            </div>
          </> 
    );
}