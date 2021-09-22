import React,{useState} from "react";
import Loading from "../components/Loading";
import ComponentHome from '../components/ComponentHome';

export default function Home(){

    const [status,setStatus] = useState(false);

    setTimeout(() =>setStatus(true) , 2000);

    return(
          <>
            {
                status ? <ComponentHome /> : <Loading />
            }
          </>   
    );
}