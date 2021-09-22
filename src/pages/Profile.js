import React,{useState} from "react";

import { Container,Row } from "react-bootstrap";
import ComponentListBook from "../components/ComponentListBook";

import Loading1 from "../components/Load/Loading1";

import ComponentDetailData from "../components/Profile/ComponentDetailData";

import Book1 from '../assets/img/cover-book/cvb-1.png';

export default function Profile(){

    const [status,setStatus] = useState(false);

    setTimeout(() => setStatus(true),2000);

    return(
          <>
            {
            status ? 

            <Container className="mt-3">

                <h1 >Profile</h1>

                <ComponentDetailData />

                <h1 className="mt-5">My List Book</h1>

                <Row>
                    <ComponentListBook image={Book1} bookName="Tess on the Road" author="Rachel Hartman"/>
                </Row>
            </Container>

            :
                <Loading1 />
            }
          </>   
    );
}