import React, {useState, useEffect } from 'react'

const PokemonFragment = ({ imagen, titulo, textoDescripcion}) => {
    return (
        <>
            <div class="card" style={{width: "18rem"}}>
                            <img src={imagen} class="card-img-top" alt="Carta coleccionable Rhyperior"/>
                                <div class="card-body">
                                    <h5 class="card-title">{titulo}</h5>
                                    <p class="card-text">{textoDescripcion}</p>
                                </div>
                            </div>
        </>
    )
}

export default PokemonFragment