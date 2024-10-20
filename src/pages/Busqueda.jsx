import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Header from '../componets/Header/Header';
import { nombre } from '../data/nomre';


export const Busqueda = () => {
    const [inputValue, setInputValue] = useState(""); 
    const navigate = useNavigate();
    const handle = () => {
        navigate("/Match");
    }
    console.log(nombre);
    
    return (
        <>
            <Header inputValue={inputValue} logOut={onclick}/>
            <main className="h-screen w-screen bg-[url('/public/fondotinder.png')] bg-auto bg-center bg-no-repeat custom-bg-size">
                <section className="h-full w-full flex justify-around items-center p-20 ">
                    <div className='w-[31rem] h-[28rem] rounded-lg flex items-center flex-col justify-center pb-10 pt-10'>
                        <img src='./image4.png' alt='' className='w-auto h-auto' />
                        <h1 className='text-center sedan-regular-italic'>Busco una memoria que me acompañe hasta el final de nuestros ciclos.</h1>
                        <div className='flex w-full h-[12rem] justify-around items-end'>
                            <button onClick={handle} className='bg-color1 rounded-full w-56 h-16 text-white zain-bold'>Empieza tu busqueda</button>
                        </div>
                    </div>
                    <div className='h-[28rem] w-[28rem] rounded-full bg-[#FFF4F4] z-10'>
                        <img src='./amor1.png' alt='' className='w-full h-full' />
                    </div>
                </section>
            </main>
        </>
    )
}
