import { useState } from "react";
import Login from "./components/Login";

function App() {

  const [alert, setAlert] =useState ({
    mensahe: "",
    color: ""
  });

  return (
    <>
      <Login setAlert={setAlert}/>
      
      {alert.mensaje && <Alert color={alert.color}>{alert.mensaje}</Alert>}
    </>
  );
}

export default App;
