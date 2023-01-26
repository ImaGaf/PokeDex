import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GetPokemons from './GetPokemons';
import ByType from './ByType';
import Header from './Header';

const Pokedex = ({mainimage}) => {
    const userName = useSelector(state => state.UserName);
    const navigate = useNavigate();
    const [pokemons,setPokemons] = useState({});
    const [search,setSearch] = useState("");
    const [page,setPage] = useState(1);

    const getByType = (url)=>{
        setPage(1)
        axios.get(url)
        .then(res => setPokemons(res.data))
    }


    useEffect (()=>{
        getAllPokemons()
    },[])


    const getAllPokemons= ()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279")
        .then(res => setPokemons(res.data))
    }

    return (
        <div className='pokedex'>
            <Header mainimage={mainimage}/>
            <div className='greating'>
                <h3><span>Bienvenido {userName},</span> aquí encontraras tus pokemones favoritos</h3>
            </div>
            <div className='search-container'>
                <div className='search-container-in'>
                    <input type="text" value={search} onChange={(e=> setSearch(e.target.value))} />
                    <button onClick={()=> navigate(`/pokedex/${search}`)}>Search</button>
                </div>
                <ByType getByType = {getByType}/>
            </div>
            <button className='back' onClick={()=> navigate(-1)}>Back</button> 
            <GetPokemons page={page} setPage={setPage} pokemons = {pokemons} setPokemons ={setPokemons}/>
        </div>
    );
};

export default Pokedex;