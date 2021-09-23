import { Col, Row } from "react-bootstrap";

import Book1 from "../../assets/img/cover-book/cvb-1.png";

const Styles = {
    img : {
        width:"100%"
    }
}

export default function ComponentDetailBook(){

    return(

        <>
            <Row className=" justify-content-between">
                <Col md={5}>
                        <img src={Book1} alt="Book" style={Styles.img} />
                </Col>
                <Col md={5}>
                    <h1 className="fw-bold">Serangkai</h1>
                    <p className="text-muted">Valerie Patkar</p>

                    <h5 className="fw-bold mt-5">Publication Date</h5>
                    <p className="text-muted">May 2001</p>

                    <h5 className="fw-bold mt-5">Pages</h5>
                    <p className="text-muted">406</p>

                    <h5 className="fw-bold mt-5 text-danger">ISBN</h5>
                    <p className="text-muted">99221133334443</p>
                </Col>
            </Row>
        </>

    )

}