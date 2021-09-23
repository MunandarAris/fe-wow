import React,{useState} from "react";
import Loading from "../components/Load/Loading";

import Logo from "../assets/img/Icon.png";
import { Container } from "react-bootstrap";

import { motion } from "framer-motion";

import { useHistory } from "react-router-dom";

import ComponentRead from "../components/ReadBook/ComponentRead";

const Styles = {
    container : {
        backgroundColor:"#E5E5E5"
    },
    img : {
        width:"15%",
        cursor:"pointer"
    }
}

export default function ReadBook(){

    const [status,setStatus] = useState(false);

    setTimeout(() =>setStatus(true) , 2000);

    let history = useHistory();

    const redirecToHome = () => history.push('/home');

    return(
          <>
            {
                status ? 

                <Container fluid style={Styles.container}>
                    <motion.img onClick={redirecToHome} whileHover={{scale:1.1}} transition={{type:"tween"}} src={Logo} className="d-flex mx-auto" style={Styles.img} />
                    <ComponentRead/>
                </Container>

            : <Loading />
            }
          </>   
    );
}