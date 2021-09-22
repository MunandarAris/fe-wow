import React from "react";

import {Col} from 'react-bootstrap';
import ProfileIcon from '../assets/img/profile-icon.png';
import { motion } from "framer-motion";


export default function ComponentListBook(props){

    return(
          <>
            <Col md={3} className="mt-4 mx-2 col-book" style={{cursor:"pointer"}}>
                <motion.img  whileHover={{scale:0.9, originX : 0}} transition={{type:"spring",stiffness : 600}} src={props.image} alt="Book" />
                <motion.p whileHover={{scale:0.9, originX : 0}} transition={{type:"spring",stiffness : 600}} className="fw-bold fs-5 mt-3 book-name">{props.bookName}</motion.p>
                <motion.p whileHover={{scale:0.9, originX : 0}} transition={{type:"spring",stiffness : 600}} className="text-muted">
                    <img src={ProfileIcon} alt="Profile Icon" style={{width:"8%"}}/> {props.author}
                </motion.p>
            </Col>                
          </> 
    );
}