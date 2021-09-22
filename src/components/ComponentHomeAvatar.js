import React from "react";

import Logo from '../assets/img/Icon.png';
import UserImage from '../assets/img/user-image.png';

export default function ComponentHomeLink(){

    return(
          <>
            <div  className="d-flex flex-column align-items-center" style={{borderBottom:"2px solid #C9C9C9"}}>
                <img src={Logo} alt="Icon" className="home-logo"/>
                <img src={UserImage} alt="User Image" className="home-user-image shadow-lg rounded-circle" />
                <h4 className="fw-bold mt-4">Aris Munandar</h4>
                <p className="fw-bold text-danger mt-3 pb-3">Not Subscribed Yet</p>
            </div>
          </> 
    );
}