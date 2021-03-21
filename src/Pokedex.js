import React from 'react';
import Pokecard from "./Pokecard";

const Pokedex = ({cards}) => {
    return (
    <div>
        <div className='container-fluid'>
            <div className='row justify-content-center mt-5'>
                {cards.map(c => (
                    <Pokecard id={c.id} name={c.name} type={c.type} exp={c.base_experience}/>
                    ))}
            </div>
        </div>
    </div>
)
    }

export default Pokedex;