import { Navbar,Container,Nav,Dropdown } from "react-bootstrap";

import Logo from "../assets/img/Icon.png";
import ImageUser from "../assets/img/user-image/user1.png";

import {motion} from "framer-motion";

const Styles = {
    img : {
        width:"25%"
    },
    img1 : {
        width:"25%",
        borderRadius : "100%"
    }
}

export default function NavComponent(){
    return(
          <>
            <Navbar bg="transparant" className="mx-4" expand="lg">
                <Container fluid>
                    <Navbar.Brand className="mx-5 px-3">
                        <img src={Logo} style={Styles.img} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                    <Dropdown className="ms-auto">
                    <Dropdown.Toggle variant="transparant" className="cutom-btn" id="dropdown-basic">
                        <motion.img whileHover={{scale:1.1}} transition={{type:"spring",stiffness : 600}} src={ImageUser} style={Styles.img1}/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="shadow">
                        <Dropdown.Item href="#/action-1">
                            <h6><i class='bx bxs-book-add text-muted fs-5 fw-bold'></i> Add Book</h6>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-2">
                            <h6><i class='bx bx-log-in text-danger fs-4'></i> Logout</h6>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
          </>   
    );
}