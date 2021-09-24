import { Container, Table, Dropdown,DropdownButton } from "react-bootstrap";

import { motion } from "framer-motion";

import fakeData from "./fakeData";

const number = 0;

export default function TableTransaction(){
    return(
          <>
            <Container className="mt-4">
                <h2 className="my-5">
                    <i class='bx bx-credit-card text-danger'></i> Incoming Transaction
                </h2>
                <Table striped className="text-center mt-4" size="sm">
                    <thead className="text-danger">
                        <tr>
                            <th className="p-3">No</th>
                            <th className="p-3">Users</th>
                            <th className="p-3">Proof Transaction</th>
                            <th className="p-3">Remaining Active</th>
                            <th className="p-3">Status User</th>
                            <th className="p-3">Status Payment</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody className="">
                    {
                        fakeData.map((value,index) => {
                            return (
                                
                                <tr key={index}>
                                    <td  className="p-3">{index+1}</td>

                                    <td  className="p-3">{value.user}</td>

                                    <td  className="p-3">{value.proofTransaction}</td>

                                    <td  className="p-3">{value.remainingActive} / Day</td>
                        
                                    <td  className="p-3">
                                        {value.remainingActive <= 0 ? <b style={{color:"#FF0742"}}>Not Active</b> : <b className="text-success">Active</b>}
                                    </td>

                                    <td  className="p-3">
                                        {value.statusPayment === "approve" ? <span className="text-success">Approve</span> : ""}
                                        {value.statusPayment === "cancel" ? <span className="text-danger">Cancel</span> : ""}
                                        {value.statusPayment === "pending" ? <span style={{color:"#F7941E"}}>Pending</span> : ""}
                                    </td>

                                    <td  className="p-3">
                                        <DropdownButton id="dropdown-basic-button">
                                            <Dropdown.Item className="text-success">Approved</Dropdown.Item>
                                            <Dropdown.Item className="text-danger">Cancel</Dropdown.Item>
                                        </DropdownButton>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </Table>
            </Container>
          </>   
    );
}