import React from "react";

import {Container,Row,Col} from 'react-bootstrap';

import ComponentHomeAvatar from "./ComponentHomeAvatar";
import ComponentHomeLink from "./ComponentHomeLink";
import ComponentCardRightHome from './ComponentCardRightHome';
import Payment from "../pages/Payment";

import {Route} from 'react-router-dom';

export default function ComponentHome(){

    return(
          <>
                <Container fluid className="container-home">
                    <Row className="justify-content-center">
                        <Col className="d-flex flex-column m-4" md={3}>
                            <ComponentHomeAvatar />
                            <ComponentHomeLink />
                        </Col>
                        <Col className="d-flex flex-column m-4" md={8}>
                            <Route exact path="/home" component={ComponentCardRightHome}/>
                            <Route exact path="/payment" component={Payment}/>
                        </Col>
                    </Row>
                </Container>
          </> 
    );
}