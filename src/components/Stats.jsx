import React from 'react';

const Stats = ({pokemon , Elipse}) => {
    return (
        <div className='stats'>
            <h1>Stats</h1>
            <img src={Elipse} alt="" />
            <div className='stats-container'>
                <div className='stats-data'>
                    <span>HP:</span>
                    <span>{pokemon.stats?.[0].base_stat}/150</span>
                </div>
                <label htmlFor="file"></label>
                <progress id='file' max="150" value={pokemon.stats?.[0].base_stat}></progress>
            </div>
            <div className='stats-container'>
                <div className='stats-data'>
                    <span>Ataque:</span>
                    <span>{pokemon.stats?.[1].base_stat}/150</span>
                </div>
                <label htmlFor="file"></label>
                <progress id='file' max="150" value={pokemon.stats?.[1].base_stat}></progress>
            </div>
            <div className='stats-container'>
                <div className='stats-data'>
                    <span>Defensa:</span>
                    <span>{pokemon.stats?.[2].base_stat}/150</span>
                </div>
                <label htmlFor="file"></label>
                <progress id='file' max="150" value={pokemon.stats?.[2].base_stat}></progress>
            </div>
            <div className='stats-container'>
                <div className='stats-data'>
                    <span>Velocidad:</span>
                    <span>{pokemon.stats?.[5].base_stat}/150</span>
                </div>
                <label htmlFor="file"></label>
                <progress id='file' max="150" value={pokemon.stats?.[5].base_stat}></progress>
            </div>
        </div>
    );
};

export default Stats;