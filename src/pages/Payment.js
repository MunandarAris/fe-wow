import React,{useState} from "react";

import Loading1 from "../components/Loading1";
import ComponentPayment from "../components/Payment/ComponentPayment";

export default function Payment(){

    const [status,setStatus] = useState(false);

    setTimeout(() => setStatus(true),2000);

    return(
          <>
            {
                status ? 
                <ComponentPayment />
                :
                <Loading1 />
            }
          </>   
    );
}