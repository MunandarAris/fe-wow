import React from "react";

import { useHistory } from "react-router";

import {Col} from 'react-bootstrap';

import ProfileIcon from '../assets/img/profile-icon.png';

import { motion } from "framer-motion";


export default function ComponentListBook(props){

    const history  = useHistory();

    const pathDetailBook = () =>  history.push("/detail-book");

    return(
          <>
            <Col md={3} className="mt-4 mx-2 col-book" style={{cursor:"pointer"}}>
                <motion.img onClick={pathDetailBook}  whileHover={{scale:0.9, originX : 0}} transition={{type:"spring",stiffness : 600}} src={props.image} alt="Book" />

                <motion.p onClick={pathDetailBook} whileHover={{scale:0.9, originX : 0}} transition={{type:"spring",stiffness : 600}} className="fw-bold fs-5 mt-3 book-name">{props.bookName}</motion.p>
                
                <motion.p onClick={pathDetailBook} whileHover={{scale:0.9, originX : 0}} transition={{type:"spring",stiffness : 600}} className="text-muted">
                    <img src={ProfileIcon} alt="Profile Icon" style={{width:"8%"}}/> {props.author}
                </motion.p>
            </Col>                
          </> 
    );
}