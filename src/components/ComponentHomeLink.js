import React from "react";

import ProfileIcon from '../assets/img/profile-icon.png';
import BillIcon from '../assets/img/bill-icon.png';
import LogoutIcon from '../assets/img/logout-icon.png';

import {NavLink} from 'react-router-dom'

import { motion } from "framer-motion";


export default function ComponentHomeLink(){

    return(
          <>
            <div  className="d-flex flex-column mt-5 link" style={{color:"#929292",borderBottom:"2px solid #C9C9C9"}}>
                <motion.p whileHover={{scale:1.1, originX : 0}} transition={{type:"spring",stiffness : 600}} className="fw-bold">
                    <img src={ProfileIcon} alt="Profile Icon" style={{width:"8%"}} className="mx-4"/>Profile
                </motion.p>

                <NavLink to="/payment" style={{color:"#929292",textDecoration:"none"}} activeStyle={{textDecoration:"line-through"}}>
                    <motion.p whileHover={{scale:1.1, originX : 0}} transition={{type:"spring",stiffness : 600}} className="navigasi-link mt-4 pb-4 fw-bold">
                        <img src={BillIcon} alt="Bill Icon" style={{width:"8%"}} className="mx-4" />Subscribe
                    </motion.p>
                </NavLink>
            </div>

            <div  className="d-flex flex-column mt-5 link" style={{color:"#929292"}}>
                <motion.p whileHover={{scale:1.1, originX : 0}} transition={{type:"spring",stiffness : 600}} className="fw-bold"><img src={LogoutIcon} alt="Logout Icon" style={{width:"8%"}} className="mx-4"/>Logout</motion.p>
            </div>
          </> 
    );
}