import React,{useContext} from "react";

import { Container,Form,Button } from "react-bootstrap";

import WowLogo from '../../assets/img/Wow.png';
import IconUploadImage from '../../assets/img/icon-upload-image.png';

import {GlobalContext} from '../../context/globalContext';

import fakeData from "../../fakeData/users";

import { useHistory } from "react-router-dom";

const styles = {
    formInputAccount : {
        width:"50%",backgroundColor:"#BCBCBC",color:"black"
    },
    formUpload : {
        color:"#D60000",cursor:"pointer",border:"2px solid #BCBCBC",borderRadius:"5px",width:"50%"
    }
}

export default function ComponentPayment(){

    const [state] = useContext(GlobalContext);

    let history = useHistory();

    const handlePayment = () => {
        for(let user of fakeData)
        {
            if(state.user.email == user.email)
            {
                user.statusSubscribe = true;

                history.push('/profile');
            }
        }
    }

    return(
          <>
            <Container className="text-center m-auto ">
                <h1 className="fw-bold">Premium</h1>
                
                <p className="mt-4">
                    Pay now and access all the latest books from <img src={WowLogo} alt="WOW" />
                </p>

                <p className="fw-bold mt-4">
                    <img src={WowLogo} alt="WOW" /> : 0981312323
                </p>

                <Form>
                    <Form.Group className="mb-4 mt-5">
                        <Form.Control type="number" className="py-2 mx-auto" style={styles.formInputAccount} placeholder="Input your account number" />
                    </Form.Group>

                    <Form.Group controlId="formFile" className="mb-4">
                        <Form.Label className="fw-bold py-2" style={styles.formUpload}>Attache proof of transfer <img src={IconUploadImage} alt="icon" style={{width:"7%"}} /></Form.Label>
                        <Form.Control hidden type="file" />
                    </Form.Group>

                    <Button variant="danger" onClick={handlePayment} style={{width:"50%"}}>Send</Button>
                </Form>
            </Container>
          </>   
    );
}