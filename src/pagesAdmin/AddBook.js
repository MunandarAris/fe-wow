import {useState} from "react";

import Button from "@restart/ui/esm/Button";
import { Container,Form,Modal } from "react-bootstrap";

import { BiAddToQueue,BiBookAdd } from "react-icons/bi";

import FileIcon from "../assets/img/upload-file-add-book.png";

const Styles = {
    container : {
        width:"60%",
    },
    form : {
        backgroundColor:"#D2D2D240",
        border:"2px solid #BFBFBF",
    },
    label : {
        backgroundColor:"#D2D2D240",
        border:"2px solid #BFBFBF",
        width:"30%",
        cursor:"pointer",
        borderRadius:'5px'
    }
}

export default function AddBook(){

    const [showModal,setShowModal] = useState(false);

    const handleAddBook = () => {
        setShowModal(true);
    }
    return(
        <>
        <Container style={Styles.container} className="mt-4 pb-5" md={6}>
            <h2 className="fw-bold"><BiAddToQueue className="text-danger"/> Add Book</h2>

            <Form className="mt-5">
                <Form.Group className="mb-4">
                    <Form.Control className="form-add-book" style={Styles.form} type="text" placeholder="Title" />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Control className="form-add-book" style={Styles.form} type="date" placeholder="Publication Date" />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Control className="form-add-book" style={Styles.form} type="number" placeholder="Pages" />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Control className="form-add-book" style={Styles.form} type="text" placeholder="Author" />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Control className="form-add-book" style={Styles.form} type="text" placeholder="ISBN" />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Control className="form-add-book" style={Styles.form} type="text" as="textarea" rows={4} placeholder="About This Book" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                    <Form.Label style={Styles.label} className="p-2">
                        Attache Book File <img style={{width:"6%"}} src={FileIcon}/>
                    </Form.Label>
                    <Form.Control hidden type="file" placeholder="name@example.com" />
                </Form.Group>

                <Button className="btn btn-danger d-flex ms-auto" onClick={handleAddBook}>Add Book <BiBookAdd className="fs-5" /></Button>
                
            </Form>
        </Container> 

        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Body className="text-center">
                <h2 className="text-success">Data Saved Successfully</h2>
            </Modal.Body>
        </Modal> 
        </>     
    );
}