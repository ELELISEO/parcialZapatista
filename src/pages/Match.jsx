import React from 'react'

const Match = () => {
  return (
    <>
    <header className='absolute w-full flex justify-between'>
        <div>
        BIenvenido,fulano
        </div>
        <div>
        cerrar sesion
        </div>
    </header>
    <main className='h-screen w-screen'>
        <section className='h-full w-full flex justify-center items-center bg-color1/10'>
            <div className='bg-white h-[32rem] w-96 rounded-lg shadow-2xl flex items-center justify-center flex-col'>
                <div className='w-28 h-28 bg-black'>

                </div>
                <div className='w-full h-12 bg-teal-100'>

                </div>
                <div className='w-full h-36 bg-slate-600'>

                </div>

            </div>
        </section>
    </main>
    </>
  )
}

export default Match