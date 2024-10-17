import React from 'react'

const Index = () => {
  return (
    <>
      <header className='w-full h-28 absolute flex justify-center items-center'>Encuentra tu memoria ideal</header>
      <main className='h-screen w-screen'>
        <section className='h-full w-full flex justify-around items-center p-20 bg-color1/10'>
          <div className='bg-white drop-shadow-2xl w-[31rem] h-[28rem] rounded-lg flex items-center'>
            <div className='flex flex-col w-full h-[20rem] justify-around items-center'>
              Iniciar Sesion
              <label className='flex flex-col w-[20rem]'>
                <h2 className='pl-4'>Correo</h2>
                <input type="email" placeholder='correo@gmail.com' className='h-[3rem] w-[21rem] border-[1.5px] border-gray-800 rounded-full pl-4 pb-1' />
              </label>
              <label className='flex flex-col w-[20rem]'>
              <h2 className='pl-4'>Contraseña</h2>
                <input type='contraseña' placeholder='Password' className='h-[3rem] w-[21rem] border-[1.5px] border-gray-800 rounded-full pl-4 pb-1' />
              </label>
              <div className='bg-slate-600 h-12 w-36'></div>
              <button className='bg-color1 rounded-3xl w-56 h-12 text-white'>Ingresar</button>
            </div>
          </div>
          <div className='h-[28rem] w-[28rem] rounded-full'>
            <img src='./amor1.png' alt='' className='w-full h-full'/>

          </div>
        </section>
      </main>
    </>
  )
}

export default Index