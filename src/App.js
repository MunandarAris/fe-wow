import React,{useState} from "react";

import Loading from "./components/Load/Loading";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import ReadBook from "./pages/ReadBook";
import AdminPage from "./pagesAdmin/AdminPage";
import NotFound from "./notFound";

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import PrivateRouteComponent from "./components/privateRoot/PrivateRootComponent";

function App() {

  const [statusLoading,setStatusLoading] = useState(false);

  setTimeout(() => setStatusLoading(true),2000);

  return (
    <>
      {
        statusLoading ?

        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <PrivateRouteComponent exact path="/home" component={Home}/>
            <PrivateRouteComponent exact path="/payment" component={Home}/>
            <PrivateRouteComponent exact path="/profile" component={Home}/>
            <PrivateRouteComponent exact path="/detail-book/:id" component={Home}/>
            <PrivateRouteComponent exact path="/read-book" component={ReadBook}/>
            <PrivateRouteComponent exact path="/transaction" component={AdminPage}/>
            <PrivateRouteComponent exact path="/add-book" component={AdminPage}/>
            <Route exact  path="*" component={NotFound}/>
          </Switch>
        </Router>
        : 
        <Loading />
      }
    </>
  );
}

export default App;
