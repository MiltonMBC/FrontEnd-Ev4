import React, {useState, useEffect } from 'react'
import RecomendacionFragment from './Fragments/Recomendacion.Fragment'

const Recomendaciones = () =>{

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>Recomendaciones</h1>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-6'>
                        
                        <RecomendacionFragment
                            titulo="Recomendacion para empezar a jugar"
                            contenido= "Cada jugador controla un mazo de 60 cartas exactamente. Entre esas cartas, deberás tener a tu disposición cartas de monstruo, de energía, ítems y herramientas de entrenador. Dejando a un lado las de energía, no puedes introducir más de cuatro copias de cada carta en tu mazo. Una vez aprendas las mecánicas básicas, la mejor forma de introducirte en los combates sea, probablemente, uno de los mazos prediseñados disponibles para jugar. Te servirá para empezar a entrenar a tus monstruos y elegir tu estilo de juego antes de crear un mazo personalizado."
                            tipoAlerta="alert-success"
                        />

                    </div>

                    <div className='col-6'>

                        <RecomendacionFragment
                            titulo="Cómo construir una baraja de JCC (juego de cartas coleccionables) Pokémon en torno a un tipo"
                            contenido= "Como ocurre con los equipos de muchos Líderes de Gimnasio que verás en los videojuegos Pokémon, muchas barajas del Juego de Cartas Coleccionables Pokémon incluyen a Pokémon que son casi todos del mismo tipo. Este planteamiento a la hora de crear una baraja resulta interesante, porque los tipos a menudo son temáticos, es decir, los Pokémon de tipo idéntico favorecerán una misma estrategia. Por ejemplo, muchos Pokémon de tipo Fuego están diseñados para hacer enormes cantidades de daño a los Pokémon del rival, mientras que los Pokémon de tipo Metálico tienden a presentar ataques, habilidades y acceso a cartas de Entrenador que evitan o reducen el daño que reciben de los ataques enemigos."
                            tipoAlerta="alert-success"
                        />

                    </div>
                </div>
            </div>
        </>
    )
}
export default Recomendaciones