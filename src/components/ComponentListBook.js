import React,{useContext,useState} from "react";

import { useHistory } from "react-router";

import {Col} from 'react-bootstrap';

import ProfileIcon from '../assets/img/profile-icon.png';

import { motion } from "framer-motion";

import { GlobalContext } from "../context/globalContext";

import {Modal} from 'react-bootstrap';

import fakeDataUser from "../fakeData/users";

export default function ComponentListBook(props){

    const [state] = useContext(GlobalContext);

    const [showModalPaymentWarning,setShowModalPaymentWarning] = useState(false);

    const history  = useHistory();

    const pathDetailBook = () =>  {
        for(let user of fakeDataUser)
        {
            if(user.email == state.user.email)
            {
                if(user.statusSubscribe)
                {
                    history.push(`/detail-book/${props.id}`);
                }
                else 
                {
                    setShowModalPaymentWarning(true);
                }
            }
        }
    };

    return(
          <>
            <Col md={3} className="mt-4 mx-2 col-book" style={{cursor:"pointer"}}>
                <motion.img onClick={pathDetailBook}  whileHover={{scale:0.9, originX : 0}} transition={{type:"spring",stiffness : 600}} src={props.image} alt="Book" />

                <motion.p onClick={pathDetailBook} whileHover={{scale:0.9, originX : 0}} transition={{type:"spring",stiffness : 600}} className="fw-bold fs-5 mt-3 book-name">{props.bookName}</motion.p>
                
                <motion.p onClick={pathDetailBook} whileHover={{scale:0.9, originX : 0}} transition={{type:"spring",stiffness : 600}} className="text-muted">
                    <img src={ProfileIcon} alt="Profile Icon" style={{width:"8%"}}/> {props.author}
                </motion.p>
            </Col> 

            <Modal size="lg" show={showModalPaymentWarning} className="d-flex align-items-center" onHide={() => setShowModalPaymentWarning(false)}>
                <Modal.Body>
                    <h4 className="text-danger text-center my-auto p-5">
                        please make a payment to read the latest books
                    </h4>
                </Modal.Body>
            </Modal>               
          </> 
    );
}