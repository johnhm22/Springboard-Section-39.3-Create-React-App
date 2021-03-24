import React from 'react';
import "./Pokecard.css";

const Pokecard = ({id, name, type, exp}) => {
    return (<div>
                        <div className="Pokecard">
                            <div className="Pokecard-title">{name}</div>
                            <img className="Pokecard-image" src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
                            <p className="Pokecard-data">Type: {type}</p>
                            <p className="Pokecard-data">EXP: {exp}</p>
                        </div>
            </div>
    )
}

export default Pokecard;