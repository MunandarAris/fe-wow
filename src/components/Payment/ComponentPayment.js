import React from "react";

import { Container,Form,Button } from "react-bootstrap";

import WowLogo from '../../assets/img/Wow.png';
import IconUploadImage from '../../assets/img/icon-upload-image.png';

const styles = {
    formInputAccount : {
        width:"130%",backgroundColor:"#BCBCBC",color:"black"
    },
    formUpload : {
        color:"#D60000",cursor:"pointer",border:"2px solid #BCBCBC",borderRadius:"5px",width:"130%"
    }
}

export default function ComponentPayment(){

    return(
          <>
            <Container className="text-center m-auto d-flex flex-column align-items-center ">
                <h1 className="fw-bold">Premium</h1>
                
                <p className="mt-4">
                    Pay now and access all the latest books from <img src={WowLogo} alt="WOW" />
                </p>

                <p className="fw-bold mt-4">
                    <img src={WowLogo} alt="WOW" /> : 0981312323
                </p>

                <Form>
                    <Form.Group className="mb-3 mt-4">
                        <Form.Control type="number" className="py-2" style={styles.formInputAccount} placeholder="Input your account number" />
                    </Form.Group>

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label className="fw-bold py-2" style={styles.formUpload}>Attache proof of transfer <img src={IconUploadImage} alt="icon" style={{width:"7%"}} /></Form.Label>
                        <Form.Control hidden type="file" />
                    </Form.Group>

                    <Button variant="danger" style={{width:"130%"}}>Send</Button>
                </Form>
            </Container>
          </>   
    );
}