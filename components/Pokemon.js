import React, {useState, useEffect } from 'react'
import Rhyperior from '../assets/images/pokemon1_rhyperior.jpg'
import Alakazam from '../assets/images/pokemon2_Alakazam.jpg'
import Conkeldurr from '../assets/images/pokemon3_conkeldurr.jpg'
import PokemonFragment from './Fragments/PokemonFragments'
import { Link } from 'react-router-dom'
const Pokemon = () => {

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>Juego de cartas coleccionables</h1>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <Link to="/recomienda">Ir a Recomendaciones</Link>
                </div>
            </div>

            <div className='row'>
                <div className='col-4'>
                    
                    <PokemonFragment
                    textoDescripcion="Rhyperior es un Pokémon de tipo tierra/roca introducido en la cuarta generación. Es la evolución de Rhydon."
                    imagen={Rhyperior}
                    titulo= "Carta coleccionable Rhyperior"
                    />

                </div>
                <div className='col-4'>
                    
                    <PokemonFragment
                    textoDescripcion="Alakazam es un Pokémon de tipo psíquico introducido en la primera generación. Es la evolución de Kadabra y, a partir de la sexta generación, puede megaevolucionar en Mega-Alakazam."
                    imagen={Alakazam}
                    titulo= "Carta coleccionable Alakazam"
                    />

                </div>
                <div className='col-4'>
                    
                    <PokemonFragment
                    textoDescripcion="Conkeldurr es un Pokémon de tipo lucha introducido en la quinta generación. Es la forma evolucionada de Gurdurr."
                    imagen={Conkeldurr}
                    titulo= "Carta coleccionable Conkeldurr"
                    />
            
                </div>
            </div>


        </>
    )
}
export default Pokemon