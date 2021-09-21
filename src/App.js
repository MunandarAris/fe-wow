import React,{useState} from "react";
import Loading from "./components/Loading";
import LandingPage from "./pages/LandingPage";

function App() {

  const [statusLoading,setStatusLoading] = useState(false);

  setTimeout(() => setStatusLoading(true),2000);

  return (
    <>
      {
        statusLoading ? <LandingPage /> : <Loading />
      }
    </>
  );
}

export default App;
