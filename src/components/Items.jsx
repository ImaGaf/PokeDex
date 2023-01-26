import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Items = ({mainimage}) => {
    const userName = useSelector(state => state.UserName)
    const navigate = useNavigate()
    const {id} = useParams();
    const [pokemon,setPokemon] = useState({})

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => setPokemon(res.data))
    },[])  
    
    return (
        <div>
            <Header mainimage={mainimage}/>
            <div className='pokemon-container'>
                <div>
                    <img width={"150px"} src={pokemon.sprites?.other.dream_world.front_default} alt="" />
                </div>
                <div>
                    <span>#{pokemon.id}</span>
                    {pokemon.name}
                </div>
                <div>
                    <div>
                        <span>Peso</span>
                        <p>{pokemon.weigth}</p>
                    </div>
                    <div>
                        <span>Altura</span>
                        <p>{pokemon.height}</p>
                    </div>
                </div>
                <div>
                    <div className='type'>
                        <div>
                            <span>Tipo</span>
                        </div>
                        <div>
                            { pokemon.types?.[0]?.type.name &&
                             <span>{pokemon.types?.[0]?.type.name}</span>
                            }
                            {pokemon.types?.[1]?.type.name &&
                                 <span>{pokemon.types?.[1]?.type.name}</span>
                            }
                        </div>
                    </div>
                    <div className='skills'>
                            <div>
                                <span>Habilidades</span>
                            </div>
                            <div>
                                {
                                    pokemon.abilities?.map((skill) => (
                                        <span key={skill.ability.url}>{skill.ability.name}</span>
                                    ))
                                }
                            </div>
                    </div>
                </div>
            </div>
 
            
            <button onClick={()=>navigate(-1)}>Back</button>
        </div>
    );
};

export default Items;