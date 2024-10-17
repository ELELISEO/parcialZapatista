import React from 'react'

export const Busqueda = () => {
    return (
        <>
            <header className='absolute w-full h-[4rem] flex justify-between items-center'>
                <div className='zain-regular ml-10'>
                    BIenvenido,fulano
                </div>
                    <button className='zain-regular mr-6 text-color1 flex w-[10rem] items-center'>
                        Cerrar Sesion
                        <img src="./image3.png" alt="" className='pl-1 h-auto w-auto'/>
                    </button>
            </header>
            <main className="h-screen w-screen bg-[url('/public/fondotinder.png')] bg-auto bg-center bg-no-repeat custom-bg-size">
                <section className="h-full w-full flex justify-around items-center p-20 ">
                    <div className='w-[31rem] h-[28rem] rounded-lg flex items-center flex-col justify-center pb-10 pt-10'>
                        <img src='./image4.png' alt='' className='w-auto h-auto'/>
                        <h1 className='text-center sedan-regular-italic'>Busco una memoria que me acompañe hasta el final de nuestros ciclos.</h1>
                        <div className='flex w-full h-[12rem] justify-around items-end'>
                            <button className='bg-color1 rounded-full w-56 h-16 text-white zain-bold'>Empieza tu busqueda</button>
                            <button className='bg-color1 rounded-full w-56 h-16 text-white zain-bold leading-none'>Revisa tus memorias anteriores</button>
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
