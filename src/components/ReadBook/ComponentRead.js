import { useState } from "react";

import { Carousel } from "react-bootstrap";

import Img from "../../assets/img/book-sch/sch1.png";

export default function ComponentRead() {

const [index, setIndex] = useState(0);

const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
};

    return(

        <Carousel className="p-3" variant="dark" activeIndex={index} onSelect={handleSelect} interval={1000000} nextIcon="" prevIcon="">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Img}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Img}
                alt="First slide"
                />
            </Carousel.Item>
        </Carousel>

    );
}