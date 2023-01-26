import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUsername } from '../store/slices/userName.slice';


const Home = ({mainimage}) => {

    const [name,setName] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const goPokedex = () =>{
        dispatch(getUsername(name))
        navigate("/pokedex")
    }

    
    return (
        <div className='main-view'>
            <img src={mainimage} alt="" />
            <h1>¡Hola entrenador!</h1>
            <h2>Para poder comenzar, dame tu nombre</h2>
            <div className='name-input'>
                <input type="text" placeholder='Your Name...' value={name} onChange={e=> setName(e.target.value)} />
                <button onClick={()=>goPokedex()}>Comenzar</button>
            </div>
            <div className='footer'>
                <div className='red'>
                <div className='home-circle'>
                            <div className='home-circle-in'>
                            </div>
                        </div>
                </div>
                <div className='black'>
                </div>
            </div>
        </div>
    );
};

export default Home;