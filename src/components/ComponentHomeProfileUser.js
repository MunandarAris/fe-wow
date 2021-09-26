import React,{useContext} from "react";

import Logo from '../assets/img/Icon.png';
import UserImage from '../assets/img/user-image.png';

import { useHistory } from "react-router";

import { motion } from "framer-motion";

import { GlobalContext } from "../context/globalContext";

import fakeDataUser from "../fakeData/users";

import { BsFillAwardFill } from "react-icons/bs";

export default function ComponentHomeLink(){

  const [state] = useContext(GlobalContext);

    let homeLink = useHistory();
    const redirectToHome = () => homeLink.push("/home");

    let statuspayment = false;

    for(let user of fakeDataUser)
    {
      if(state.user.email == user.email)
      {
        statuspayment = state.user.statusSubscribe;
      }
    }

    return(
          <>
            <div  className="d-flex flex-column align-items-center" style={{borderBottom:"2px solid #C9C9C9"}}>
                <motion.img whileHover={{scale:1.1, originX : 0}} transition={{type:"spring",stiffness : 600}} onClick={redirectToHome} src={Logo} alt="Icon" className="home-logo" style={{cursor:"pointer"}}/>
                <img src={UserImage} alt="User Image" className="home-user-image shadow-lg rounded-circle" />
                <h4 className="fw-bold mt-4">{state.user.fullName}</h4>
                <p className="fw-bold mt-3 pb-3">
                  {
                    statuspayment ? <span className="text-success">Subscribed <BsFillAwardFill /></span> : <span class="text-danger">Not Subscribed Yet</span>
                  }
                </p>
            </div>
          </> 
    );
}