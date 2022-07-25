import React, {useState, useEffect } from 'react'

const RecomendacionFragment = ({titulo, contenido, tipoAlerta}) =>{

    return(
        <>
            <div className={`alert ${tipoAlerta}`} role="alert">
                <h4 className="alert-heading">{titulo}</h4>
                <p>{contenido}</p>
            </div>
        </>
    )
}

export default RecomendacionFragment