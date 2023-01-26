import React from 'react';

const Movements = ({pokemon,Elipse}) => {
    return (
        <div className='movements'>
            <h1>Movements</h1>
            <img src={Elipse} alt="" />
            <div className='moves-container'>
                {
                    pokemon.moves?.map((move)=>(
                        <div className='move' key={move.move.url}>{move.move.name}</div>
                    ))
                }
            </div>
        </div>
    );
};

export default Movements;