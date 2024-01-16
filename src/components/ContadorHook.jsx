import React, { useState } from "react";

const ContadorHook = () => {
  const [contador, setContador] = useState(0);

  const suma = () => {
    setContador(contador + 1);
  };

  const resta = () => {
    setContador(contador - 1);
  };

  const reiniciar = () => setContador(0);

  // Devuelve directamente las funciones y el estado
  return { contador, suma, resta, reiniciar };
};

export default ContadorHook;
