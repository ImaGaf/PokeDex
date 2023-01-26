import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({url,color}) => {
    
    const [pokemon,setPokemon] = useState({})
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(url)
        .then(res => setPokemon(res.data))
    },[])  
    


    return (
        <div className='card' 
        style={ 
            { background:`${color[pokemon?.types?.[0].type.name]?.back}`, 
            borderColor: `${color[pokemon?.types?.[0].type.name]?.color}`} } 
            
        onClick={()=>navigate(`/pokedex/${pokemon.id}`)}>

            <div className='pokemon-data'>
                <h3>{pokemon.name}</h3> 
                <p>{pokemon.types?.[0].type.name}{pokemon.types?.[1]?.type.name? "/":""}{pokemon.types?.[1]?.type.name}</p>
                <span>Tipo</span>
                <img width={"110px"} height={"110px"} src={pokemon.sprites?.other.dream_world.front_default} alt="" />
                <div className='more-data'>
                    <div className='stack'>
                        <p>HP</p>
                        <span>{pokemon.stats?.[0].base_stat}</span>
                    </div>
                    <div className='stack'>
                        <p>ATAQUE</p>
                        <span>{pokemon.stats?.[1].base_stat}</span>
                    </div>
                    <div className='stack'>
                        <p>DEFENSA</p>
                        <span>{pokemon.stats?.[2].base_stat}</span>
                    </div>
                    <div className='stack'>
                        <p>VELOCIDAD</p>
                        <span>{pokemon.stats?.[5].base_stat}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;