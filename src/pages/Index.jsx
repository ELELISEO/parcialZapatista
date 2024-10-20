import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { nombre } from '../data/nomre';

const Index = () => 
  {
  const [Username, setUsername] = useState("")
  const [Password, setPassword] = useState("")
  const [name, setName] = useState("")
  const navigate = useNavigate()
  
  
  const handleLogin = () => {
        
    if(Username === "" && Password === "")
    {
      alert("Complete los datos porfavor")
    }
    else if (Username === "") {
      alert("Porfavor ingrese un nombre");
    } else if (Password === "") {
      alert("Porfavor, ingrese una contrseña");
    } else {
      nombre.name=Username
      navigate("/Busqueda");
    }
  }

  return (
    <>
      <header className='w-full h-28 absolute flex justify-center items-center playwrite-us-trad-italic text-[2rem]'>Encuentra tu memoria ideal</header>
      <main className="h-screen w-screen bg-[url('/public/fondotinder.png')] bg-auto bg-center bg-no-repeat custom-bg-size">
        <section className='h-full w-full flex justify-around items-center p-20'>
          <div className='bg-white drop-shadow-2xl w-[31rem] h-[28rem] rounded-lg flex items-center'>
            <div className='flex flex-col w-full h-[20rem] justify-around items-center zain-regular'>
              Iniciar Sesion
              <label className='flex flex-col w-[20rem]'>
                <h2 className='pl-4'>Usuario</h2>
                <input required onChange={(e) => {
                    setUsername(e.target.value);}}
                    // Guardar valor del input para el
                type="text" placeholder='Username' className='h-[3rem] w-[21rem] border-[1.5px] border-gray-800 rounded-full pl-4' />
              </label>
              <label className='flex flex-col w-[20rem]'>
                <h2 className='pl-4'>Contraseña</h2>
                <input required 
                onChange={(e) => {
                  setPassword(e.target.value);
                 // Guardar valor del input para el Header
                }} 
                type='contraseña' placeholder='Password' className='h-[3rem] w-[21rem] border-[1.5px] border-gray-800 rounded-full pl-4' />
              </label>
              <button onClick={handleLogin} className='bg-color1 rounded-3xl w-56 h-12 text-white'>Ingresar</button>
            </div>
          </div>
          <div className='h-[28rem] w-[28rem] rounded-full bg-color2'>
            <img src='./amor1.png' alt='' className='w-full h-full' />

          </div>
        </section>
      </main>
    </>
  )
}

export default Index