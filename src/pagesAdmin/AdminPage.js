import {Route} from "react-router-dom";

import TableTransaction from "./TabelTransaction";
import AddBook from "./AddBook";
import Navbar from "./Navbar";

export default function AdminPage() {

    return(
        <>
            <Navbar />
            <Route path="/transaction" component={TableTransaction}/>
            <Route path="/add-book" component={AddBook} />
        </>
    );

}