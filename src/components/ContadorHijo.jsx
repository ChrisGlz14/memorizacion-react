import React, { memo, useMemo } from "react";

const ContadorHijo = ({ contador, suma, resta, reiniciar }) => {
  // let superNumero = 0;

  // for (let i = 0; i < 1000000000; i++) {
  //   superNumero++

  // }

  const superNumero = useMemo(() => {

    let numero = 0;

    for (let i = 0; i < 10000000; i++) {
      numero++;
    }

    return numero

  }, []);

  console.log("renderizado de hijo para verificar uso de useMemo");
  return (
    <>
      <h2>ContadorHijo</h2>
      <h3>{contador}</h3>
      <nav>
        <button onClick={suma}>+1</button>
        <button onClick={reiniciar}>Reiniciar</button>
        <button onClick={resta}>-1</button>
        <h3>{superNumero}</h3>
      </nav>
    </>
  );
};

export default memo(ContadorHijo);
