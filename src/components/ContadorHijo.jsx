import React, { memo } from 'react'

const ContadorHijo = () => {
    console.log("renderizado de hijo para verificar uso de useMemo")
    return (
    <h2>ContadorHijo</h2>
  )
}

export default memo(ContadorHijo);