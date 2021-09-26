import { Col, Row } from "react-bootstrap";

import { useParams } from 'react-router-dom';

import fakeData from "../../fakeData/bookLists";

const Styles = {
    img : {
        width:"100%"
    }
}

export default function ComponentDetailBook(){

    let image = "";
    let bookName = "";
    let author = "";
    let publication = "";
    let pages = 0;
    let ISBN = 0;

    let { id } = useParams();

    for(let data of fakeData)
    {
        if(data.id == id)
        {
            image = data.image;
            bookName = data.bookName;
            author = data.author;
            publication = data.publicationDate;
            pages = data.pages;
            ISBN = data.ISBN;
        }
    }

    return(

        <>
            <Row className=" justify-content-between">
                <Col md={5}>
                        <img src={image} alt="Book" style={Styles.img} />
                </Col>
                <Col md={5}>
                    <h1 className="fw-bold">{bookName}</h1>
                    <p className="text-muted">{author}</p>

                    <h5 className="fw-bold mt-5">Publication Date</h5>
                    <p className="text-muted">{publication}</p>

                    <h5 className="fw-bold mt-5">Pages</h5>
                    <p className="text-muted">{pages}</p>

                    <h5 className="fw-bold mt-5 text-danger">ISBN</h5>
                    <p className="text-muted">{ISBN}</p>
                </Col>
            </Row>
        </>

    )

}