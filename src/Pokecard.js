import React from 'react';

const Pokecard = ({id, name, type, exp}) => {
    return (<div>
                <div className='col-3'>
                    <div className='media'>
                        <div className='media-body px-5 pt-2 my-3 rounded' style={{backgroundColor:'#f0f5f1'}}>
                            <p className='pokecard-name text-center'>{name}</p>
                            <img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
                            <p className='text-center'>Type: {type}</p>
                            <p className='text-center'>EXP: {exp}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Pokecard;