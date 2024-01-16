import { useEffect, useState } from "react";
import { FetchDolar } from "../helpers/FetchDolar";
import { Error } from "./Error";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 4rem;
`;
const StyledContainerItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  padding: 10px 20px;
  font-size: 16px;
  width: 20rem;
  border-radius: 4px;
  outline: 2px solid #646cff;
`;
const StyledText = styled.p`
  font-weight: 200;
  font-size: 18px;
  text-align: center;
  &:last-child {
    grid-column: span 2;
  }
`;

const DolarCotizacion = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await FetchDolar();
        setData(result);
      } catch (error) {
        console.error(error.message);
        // Puedes establecer un estado de error y mostrar un mensaje personalizado si lo deseas.
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {(data === undefined || data.length === 0) && <Error />}
      <StyledContainer>
        {data.map((item, index) => (
          <StyledContainerItems key={index}>
            <StyledText className="moneda">Moneda: {item.moneda}</StyledText>
            <StyledText className="tipo">Tipo: {item.nombre}</StyledText>
            <StyledText className="compra">Compra: ${item.compra}</StyledText>
            <StyledText className="venta">Venta: ${item.venta}</StyledText>
            <StyledText className="Actualizado">Actualizacion: {item.fechaActualizacion}</StyledText>
          </StyledContainerItems>
        ))}
      </StyledContainer>
    </>
  );
        }
export default DolarCotizacion;
