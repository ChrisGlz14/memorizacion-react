import React, { useCallback, useState } from "react";
import ContadorHijo from "./ContadorHijo";

const Contador = () => {

  const [contador, setContador] = useState(0)

  const [input, setInput] = useState("");

  const handleInput = (e) => setInput(e.target.value);

  // const suma = () => setContador(contador + 1);
  const suma = useCallback(() => setContador(contador + 1), [contador]);

  const resta = useCallback(() => setContador(contador - 1), [contador]);
  const reiniciar = useCallback(() => setContador(0), [contador]);
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
      <ContadorHijo
        contador={contador}
        suma={suma}
        resta={resta}
        reiniciar={reiniciar}
      />
    </>
  );
};

export default Contador;
