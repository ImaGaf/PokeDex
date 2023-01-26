import axios from 'axios';
import React, { useState } from 'react';
import ByType from './ByType';
import Pagination from './Pagination';
import PokemonCard from './PokemonCard';

const GetPokemons = ({pokemons,page,setPage, color}) => {

    const perPage = 20;
    const lastIndex = perPage*page;

    let shortRoutePokemons
    let shortRouteCount

    const route = () =>{
        if(pokemons?.results){
            shortRoutePokemons = pokemons?.results
            shortRouteCount = pokemons?.count
        }else{
            shortRoutePokemons = pokemons.pokemon
            shortRouteCount = pokemons.pokemon?.length  
        }
    }   
    route()

    const totalPage = Math.ceil(shortRouteCount/perPage)
    const pokemonsToShow = shortRoutePokemons?.slice(lastIndex-perPage,lastIndex);
    const arrayIteration = [];
    const iteation = () =>{
        for(let i =1; i <= totalPage; i++){
            arrayIteration.push(i);
        }
    }
    iteation();

    let acces

    const selectAcces = () =>{
        if(totalPage > 10){
            if(page>totalPage-5){
                acces = arrayIteration.slice(totalPage-10, totalPage)
            }else if(page > 5){
                acces = arrayIteration.slice(page-5, page + 5)
            }else{
                acces = arrayIteration.slice(0,10)
            }
        }else {
            acces = arrayIteration.slice(0, totalPage)
        }
    }
    selectAcces()

    return (
        <div className='getPokemon'>
            <div className='cards-container'>
                {
                    pokemonsToShow?.map((pokemon)=>(
                        <PokemonCard color={color} url = {pokemon.url ? pokemon.url: pokemon.pokemon.url} key={pokemon.url ? pokemon.url: pokemon.pokemon.url}/>    
                    ))
                }
            </div>
            <div className='pagination'>
                {
                    acces.map((num)=>(
                        <Pagination num={num} setPage={setPage} key={num}/>
                    ))
                }
            </div>
        </div>
    );
};

export default GetPokemons;