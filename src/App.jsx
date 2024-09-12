import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [msj, setMsj] = useState("Hello my friend!");

  const cambioClick = () => {
    setMsj("Hello My friend (from changed state)!");
  };
  
  return (
    <section>
      <h1>{msj}</h1>
      <button onClick={cambioClick}>Click me</button>
    </section>
  );
}

export default App;
