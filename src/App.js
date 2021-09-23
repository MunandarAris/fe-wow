import React,{useState} from "react";

import Loading from "./components/Load/Loading";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import ReadBook from "./pages/ReadBook";

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

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
            <Route exact  path="/home" component={Home}/>
            <Route exact  path="/payment" component={Home}/>
            <Route exact  path="/profile" component={Home}/>
            <Route exact  path="/detail-book" component={Home}/>
            <Route exact  path="/read-book" component={ReadBook}/>
          </Switch>
        </Router>
        : 
        <Loading />
      }
    </>
  );
}

export default App;
