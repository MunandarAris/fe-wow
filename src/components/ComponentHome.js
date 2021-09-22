import React from "react";

import {Container,Row,Col} from 'react-bootstrap';

import ComponentHomeAvatar from "./ComponentHomeAvatar";
import ComponentHomeLink from "./ComponentHomeLink";

import FramerImage from '../assets/img/framer.png';
import ComponentListBook from "./ComponentListBook";
import Book1 from '../assets/img/cover-book/cvb-1.png';
import Book2 from '../assets/img/cover-book/cvb-2.png';
import Book3 from '../assets/img/cover-book/cvb-3.png';
import Book4 from '../assets/img/cover-book/cvb-4.png';

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
                        <img src={FramerImage} alt="framer" className="framer-image"></img>
                        <h1 className="fw-bold p-3">List Book</h1>
                        <Row className="mt-3 justify-content-between">
                            <ComponentListBook image={Book1} bookName="Serangkai" author="Valerie Patkar" />
                            <ComponentListBook image={Book2} bookName="Z1 - Sd/Mi Buku Siswa Tematik T..." author="Afi Yustiyana" />
                            <ComponentListBook image={Book3} bookName="Afi Yustiyana" author="DR. Kamil Yusuf Al-Atum" />
                            <ComponentListBook image={Book4} bookName="Tess on the Road" author="Rachel Hartman" />
                        </Row>
                    </Col>
                </Row>
            </Container>
          </> 
    );
}