import React,{useState} from "react";

import {Row} from 'react-bootstrap';

import FramerImage from '../assets/img/framer.png';
import ComponentListBook from "./ComponentListBook";
import Book1 from '../assets/img/cover-book/cvb-1.png';
import Book2 from '../assets/img/cover-book/cvb-2.png';
import Book3 from '../assets/img/cover-book/cvb-3.png';
import Book4 from '../assets/img/cover-book/cvb-4.png';

import Loading1 from "./Load/Loading1";

export default function ComponentCardRightHome(){

  const [status,setStatus] = useState(false);

  setTimeout(() => setStatus(true),2000);

    return(
          <>
          {
            status ? 
            <>
            <img src={FramerImage} alt="framer" className="framer-image"></img>
            <h1 className="fw-bold p-3">List Book</h1>
            <Row className="mt-3 justify-content-between">
                <ComponentListBook image={Book1} bookName="Serangkai" author="Valerie Patkar" />
                <ComponentListBook image={Book2} bookName="Z1 - Sd/Mi Buku Siswa Tematik T..." author="Afi Yustiyana" />
                <ComponentListBook image={Book3} bookName="Afi Yustiyana" author="DR. Kamil Yusuf Al-Atum" />
                <ComponentListBook image={Book4} bookName="Tess on the Road" author="Rachel Hartman" />
            </Row>
            </>
            :
            <Loading1 />
          }
          </> 
    );
}