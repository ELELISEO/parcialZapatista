import React from 'react'

const Header = () => {
    return (
        <header className='absolute w-full h-[4rem] flex justify-between items-center'>
            <div className='zain-regular ml-10'>
                BIenvenido,fulano
            </div>
            <button className='zain-regular mr-6 text-color1 flex w-[10rem] items-center'>
                Cerrar Sesion
                <img src="./image3.png" alt="" className='pl-1 h-auto w-auto' />
            </button>
        </header>
    )
}

export default Header