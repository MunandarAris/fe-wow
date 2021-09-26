import React,{useContext} from "react";

import {NavLink} from 'react-router-dom'

import { motion } from "framer-motion";

import { BiUser,BiReceipt,BiLogOut } from "react-icons/bi";

import { useHistory } from "react-router-dom";

import { GlobalContext } from "../context/globalContext";

export default function ComponentHomeLink(){

    const [_,dispatch] = useContext(GlobalContext);
    
    let history = useHistory();

    const handleLogout = () => {
        dispatch({
            type: 'LOGOUT'
        })

        history.push("/");
    }

    return(
          <>
            <div  className="d-flex flex-column mt-5 link" style={{color:"#929292",borderBottom:"2px solid #C9C9C9"}}>
                <NavLink to="/profile" style={{color:"#929292",textDecoration:"none"}} activeStyle={{textDecoration:"none",color:"#D60000"}}>
                    <motion.p whileHover={{scale:1.1, originX : 0}} transition={{type:"spring",stiffness : 600}} className="fw-bold fs-6">
                        <BiUser className="fs-4"/> Profile
                    </motion.p>
                </NavLink>

                <NavLink to="/payment" style={{color:"#929292",textDecoration:"none"}} activeStyle={{textDecoration:"none",color:"#D60000"}}>
                    <motion.p whileHover={{scale:1.1, originX : 0}} transition={{type:"spring",stiffness : 600}} className="navigasi-link mt-4 fs-6 pb-4 fw-bold">
                        <BiReceipt className="fs-4"/> Subscribe
                    </motion.p>
                </NavLink>
            </div>

            <div  className="d-flex flex-column mt-5 link" style={{color:"#929292"}}>
                <motion.p onClick={handleLogout} whileHover={{scale:1.1, originX : 0}} transition={{type:"spring",stiffness : 600}} className="fs-6 fw-bold"><BiLogOut className="fs-4"/> Logout</motion.p>
            </div>
          </> 
    );
}