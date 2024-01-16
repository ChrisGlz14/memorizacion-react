export const FetchDolar = async () => {
  const urlDolar = `https://dolarapi.com/v1/dolares`;
  try {
    const res = await fetch(urlDolar);
    if (!res.ok) {
        throw new Error(`Error en la solicitud: ${res.status}`);
      }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error, "Error en los datos");
  }

  return { data };
};
