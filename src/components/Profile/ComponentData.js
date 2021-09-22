import React from "react";
import { Col, Row } from "react-bootstrap";

export default function ComponentData(props){

    return(
          <>
          <Row className="align-items-center mt-2">
            <Col md={2} className="fs-1">{props.icon}</Col>
            <Col>
                <p className="fw-bold">{props.data}</p>
                <p className="text-muted">{props.detail}</p>
            </Col>
        </Row>
          </>   
    );
}