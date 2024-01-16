import React, { useState } from "react";
import ContadorHook from "./ContadorHook";
import ContadorHijo from "./ContadorHijo";



const Contador = () => {
  const [input, setInput] = useState("");

  const handleInput = (e) => setInput(e.target.value);

  const { contador, suma, resta, reiniciar } = ContadorHook();
  return (
    <>
      <h2>Contador: {contador}</h2>
      <p>
        Ver en consola para verificar que no se re-renderiza el hijo como si lo
        haria en caso de no utilizar memo.{" "}
      </p>
      <button onClick={suma}>+1</button>
      <button onClick={reiniciar}>Reiniciar</button>
      <button onClick={resta}>-1</button>
      <input type="text" onChange={handleInput} value={input} />
      <ContadorHijo />
    </>
  );
};

export default Contador;
