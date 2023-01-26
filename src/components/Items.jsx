import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Stats from './Stats';
import Movements from './Movements';

const Items = ({mainimage, Elipse,color}) => {
    const userName = useSelector(state => state.UserName)
    const navigate = useNavigate()
    const {id} = useParams();
    const [pokemon,setPokemon] = useState({})

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => setPokemon(res.data))
    },[])  
    
    return (
        <div className='items-container'>
            <Header mainimage={mainimage}/>
            <div className='pokemon-container' >
                <div className='item-header'  style={{background:`${color[pokemon?.types?.[0].type.name]?.back}`}}>
                    <img height={"250px"} width={"250px"} src={pokemon.sprites?.other.dream_world.front_default} alt="" />
                </div>
                <div className='item-name'>
                    <span>#{pokemon.id}</span>
                    <p>{pokemon.name}</p>
                </div>
                <div className='height'>
                    <div>
                        <span>Peso</span>
                        <p>{pokemon.weight}</p>
                    </div>
                    <div>
                        <span>Altura</span>
                        <p>{pokemon.height}</p>
                    </div>
                </div>
                <div className='item-info'>
                    <div className='type'>
                        <div>
                            <span>Tipo</span>
                        </div>
                        <div className='types-container'>
                            { pokemon.types?.[0]?.type.name &&
                             <span className='types'>{pokemon.types?.[0]?.type.name}</span>
                            }
                            {pokemon.types?.[1]?.type.name &&
                                 <span className='types'>{pokemon.types?.[1]?.type.name}</span>
                            }
                        </div>
                    </div>
                    <div className='skills'>
                            <div>
                                <span>Habilidades</span>
                            </div>
                            <div className='types-container'>
                                {
                                    pokemon.abilities?.map((skill) => (
                                        <span className='skill' key={skill.ability.url}>{skill.ability.name}</span>
                                    ))
                                }
                            </div>
                    </div>
                </div>
                <Stats pokemon={pokemon} Elipse={Elipse}/>   
            </div>
            <Movements pokemon={pokemon} Elipse={Elipse}/>
            <button className='item-back' onClick={()=>navigate(-1)}>Back</button>
        </div>
    );
};

export default Items;