import React from 'react'

export const Busqueda = () => {
    return (
        <>
            <header className='w-full h-28 absolute flex justify-center items-center'>Encuentra tu memoria ideal</header>
            <main className='h-screen w-screen'>
                <section className='h-full w-full flex justify-around items-center p-20 bg-color1/10'>
                    <div className='bg-white drop-shadow-2xl w-[31rem] h-[28rem] rounded-lg flex items-center flex-col justify-center pb-10 pt-10'>
                        <h1 className='text-center'>Busco una memoria que me acompañe hasta el final de nuestros ciclos.</h1>
                        <div className='flex w-full h-[12rem] justify-around items-end'>
                            <button className='bg-color1 rounded-full w-56 h-16 text-white'>Empieza tu busqueda</button>
                            <button className='bg-color1 rounded-full w-56 h-16 text-white'>Revisa tus memorias anteriores</button>
                        </div>
                    </div>
                    <div className='h-[28rem] w-[28rem] rounded-full'>
                        <img src='./amor1.png' alt='' className='w-full h-full' />

                    </div>
                </section>
            </main>
        </>
    )
}
