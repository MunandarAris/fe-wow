import React,{useState} from "react";

import {Row} from 'react-bootstrap';

import FramerImage from '../assets/img/framer.png';
import ComponentListBook from "./ComponentListBook";

import Loading1 from "./Load/Loading1";

import { BiListCheck } from "react-icons/bi";

import bookLists from "../fakeData/bookLists";

export default function ComponentCardRightHome(){

  const [status,setStatus] = useState(false);

  setTimeout(() => setStatus(true),2000);

    return(
          <>
          {
            status ? 
            <>
            <img src={FramerImage} alt="framer" className="framer-image"></img>
            <h1 className="fw-bold p-3">
              <BiListCheck class='bx bx-list-check fs-1 text-danger'/> List Book
            </h1>
            <Row className="mt-3 justify-content-between">
              {
                bookLists.map((value,index) => {
                  return(
                    <ComponentListBook key={index} id={value.id} image={value.image} bookName={value.bookName} author={value.author} />
                  )
                })
              }
            </Row>
            </>
            :
            <Loading1 />
          }
          </> 
    );
}