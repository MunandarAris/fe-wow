import React,{useState} from "react";

import Loading1 from "../components/Load/Loading1";

import ComponentDetailBook from "../components/DetailBook/CompnentDetailBook";
import ComponentAboutBook from "../components/DetailBook/ComponentAboutBook";
import ComponentButtonDetailBook from "../components/DetailBook/CompoenentButtonDetailBook";

import { Container } from "react-bootstrap";

export default function Payment(){

    const [status,setStatus] = useState(false);

    setTimeout(() => setStatus(true),2000);

    return(
          <>
            {
                status ? 
                    <Container>
                        <ComponentDetailBook/>
                        <ComponentAboutBook />
                        <ComponentButtonDetailBook/>
                    </Container>
                :
                <Loading1 />
            }
          </>   
    );
}